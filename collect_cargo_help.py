#!/usr/bin/env python3
"""
Cargo 完整帮助文档收集脚本
功能：
1. 获取所有 cargo 命令列表
2. 对每个命令获取其完整帮助文档
3. 按主题分别保存到不同文件
局限性：
- 需要 Python 3.x 环境
- 需要 cargo 可执行文件在 PATH 中
- 依赖 cargo --list 能正常输出命令列表
"""

import subprocess
import sys
import os
import re
import shutil
import threading
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime


# 常量配置
TIMEOUT = 30  # 命令超时时间（秒）
OUTPUT_DIR = "cargo-help-docs-en"
MAX_WORKERS = 4  # 最大并发线程数

# 线程锁，用于保护并发输出
_print_lock = threading.Lock()

# 帮助获取策略列表（按优先级排序）
# {cmd} 会被替换为实际命令名
# 注意：这些参数会直接传给 run_cargo_command，不需要再加 'cargo' 前缀
HELP_STRATEGIES = [
    (["help", "{cmd}"], "cargo help <cmd>"),
    (["{cmd}", "--help"], "cargo <cmd> --help"),
    (["{cmd}", "-h"], "cargo <cmd> -h"),
]

# 策略统计
strategy_stats = {}


def strip_ansi(text):
    """移除所有 ANSI 转义序列"""
    if not text:
        return text
    # CSI 序列 (ESC [ ... 字母)
    text = re.sub(r"\x1b\[[0-9;?]*[a-zA-Z]", "", text)
    # OSC 序列 (ESC ] ... BEL)
    text = re.sub(r"\x1b\][^\x07]*\x07", "", text)
    # 残留的单独 ESC 字符
    text = re.sub(r"\x1b", "", text)
    return text


def clean_description(text):
    """清理描述文本（已不在需要，ANSI 清理在数据源头完成，保留此函数用于截断逻辑）"""
    # 截断到 60 字符
    if len(text) > 60:
        text = text[:57] + "..."
    return text


def extract_description(help_text):
    """从帮助文档中提取简要描述"""
    if not help_text:
        return "(无描述)"

    help_lines = help_text.split("\n")

    # 1. 优先查找标准 man-page 格式（使用 em-dash "—"）
    for line in help_lines[:10]:
        line = line.strip()
        if "—" in line:
            parts = line.split("—", 1)
            if len(parts) == 2 and parts[1].strip():
                desc = parts[1].strip()
                return clean_description(desc)

    # 2. 取第一行有意义的文本
    for line in help_lines[:5]:
        line = line.strip()
        if line and not line.startswith(("CARGO-", "NAME", "SYNOPSIS", "```")):
            return clean_description(line)

    return "(无描述)"


def sanitize_filename(filename):
    """清理文件名，移除或替换非法字符"""
    # Windows 和 Linux 都不允许的文件名字符
    illegal_chars = r'[<>:"/\\|?*\x00-\x1f]'
    # 替换为下划线
    cleaned = re.sub(illegal_chars, "_", filename)
    # 移除首尾空格和点
    cleaned = cleaned.strip(". ")
    # 如果文件名为空，返回默认名
    if not cleaned:
        cleaned = "unnamed"
    return cleaned


def run_cargo_command(args, timeout=TIMEOUT):
    """运行 cargo 命令并返回输出（同时捕获 stdout 和 stderr）"""
    cmd = ["cargo"] + args

    try:
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=timeout,
            encoding="utf-8",
            errors="replace",
        )

        # 合并 stdout 和 stderr，保留完整的原始输出
        combined_output = ""
        if result.stdout:
            combined_output += result.stdout
        if result.stderr:
            if combined_output:
                combined_output += "\n"
            combined_output += result.stderr

        # 移除 ANSI 转义序列，返回干净的文本
        return strip_ansi(combined_output.strip()), result.returncode

    except subprocess.TimeoutExpired:
        print(f"[ERROR] 命令超时: {' '.join(cmd)}", file=sys.stderr)
        return None, -1
    except Exception as e:
        print(f"[ERROR] 命令执行失败: {e}", file=sys.stderr)
        return None, -2


def get_all_cargo_commands():
    """获取所有 cargo 命令列表"""
    output, retcode = run_cargo_command(["--list"])
    if output is None:
        print(f"[ERROR] 无法获取命令列表，返回码: {retcode}", file=sys.stderr)
        return []

    commands = []
    lines = output.split("\n")

    # 更宽松的解析逻辑：不依赖特定标题
    for line in lines:
        line = line.strip()
        # 跳过空行
        if not line:
            continue

        # 跳过可能的标题行（包含冒号且没有空格开头的行）
        if line.endswith(":") and not line.startswith(" "):
            continue

        # 提取命令名称（第一个单词）
        parts = line.split()
        if parts:
            cmd = parts[0]
            # 跳过明显的非命令内容
            if cmd and len(cmd) > 0 and not cmd.startswith("("):
                commands.append(cmd)

    # 去重（以防万一）
    seen = set()
    unique_commands = []
    for cmd in commands:
        if cmd not in seen:
            seen.add(cmd)
            unique_commands.append(cmd)

    return unique_commands


def get_command_help(command):
    """获取特定命令的完整帮助文档（包括错误信息）

    使用多策略探测：依次尝试不同的帮助命令模式，直到获取到有效输出
    """
    global strategy_stats

    for args_template, strategy_name in HELP_STRATEGIES:
        # 替换模板中的 {cmd}
        args = [arg.replace("{cmd}", command) for arg in args_template]

        output, retcode = run_cargo_command(args)

        # 即使返回码非 0，只要有输出就认为是有效的
        if output and len(output) > 0:
            # 记录策略成功
            with _print_lock:
                if strategy_name not in strategy_stats:
                    strategy_stats[strategy_name] = {"success": 0, "fail": 0}
                strategy_stats[strategy_name]["success"] += 1

            return output
        else:
            # 记录策略失败
            with _print_lock:
                if strategy_name not in strategy_stats:
                    strategy_stats[strategy_name] = {"success": 0, "fail": 0}
                strategy_stats[strategy_name]["fail"] += 1

    # 所有策略都失败
    print(f"[ERROR] 所有策略都无法获取 '{command}' 的帮助文档", file=sys.stderr)
    return None


def collect_single_command(cmd):
    """收集单个命令的帮助文档（用于并发执行）"""
    help_text = get_command_help(cmd)
    return cmd, help_text


def collect_all_help():
    """收集所有命令的完整帮助文档"""
    print("=" * 80, file=sys.stderr)
    print("[INFO] 开始收集 Cargo 完整帮助文档", file=sys.stderr)
    print("=" * 80, file=sys.stderr)

    # 获取主帮助
    main_help, _ = run_cargo_command(["--help"])
    if main_help is None:
        print("[ERROR] 无法获取主帮助文档", file=sys.stderr)
        main_help = ""

    # 获取命令列表
    commands = get_all_cargo_commands()
    if not commands:
        print("[ERROR] 未找到任何命令，退出", file=sys.stderr)
        return None

    print(f"[INFO] 发现 {len(commands)} 个命令，开始收集帮助文档...", file=sys.stderr)
    print(f"[INFO] 并发模式：{MAX_WORKERS} 个工作线程", file=sys.stderr)

    # 收集每个命令的帮助（并发执行）
    help_docs = {}
    success_count = 0
    fail_count = 0

    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        # 提交所有任务
        futures = {
            executor.submit(collect_single_command, cmd): cmd for cmd in commands
        }

        # 收集结果
        completed = 0
        for future in as_completed(futures):
            cmd, help_text = future.result()
            completed += 1
            if help_text:
                help_docs[cmd] = help_text
                success_count += 1
                with _print_lock:
                    print(
                        f"[INFO] [{completed}/{len(commands)}] ✅ {cmd} ({len(help_text)} 字符)",
                        file=sys.stderr,
                    )
            else:
                fail_count += 1
                with _print_lock:
                    print(
                        f"[INFO] [{completed}/{len(commands)}] ❌ {cmd}",
                        file=sys.stderr,
                    )

    print("=" * 80, file=sys.stderr)
    print(
        f"[INFO] 收集完成: 成功 {success_count}/{len(commands)}，失败 {fail_count}",
        file=sys.stderr,
    )
    print("=" * 80, file=sys.stderr)

    return {
        "main_help": main_help,
        "commands": commands,
        "help_docs": help_docs,
        "stats": {"total": len(commands), "success": success_count, "fail": fail_count},
    }


def save_to_files(data, output_dir):
    """将收集的信息按主题保存到不同文件"""
    print(f"\n[INFO] 开始保存文档到目录: {output_dir}", file=sys.stderr)

    # 运行前清理旧输出目录
    if os.path.exists(output_dir):
        print(f"[INFO] 清理已存在的输出目录: {output_dir}", file=sys.stderr)
        shutil.rmtree(output_dir)
    os.makedirs(output_dir, exist_ok=True)

    # 1. 保存主帮助文档
    main_help_file = os.path.join(output_dir, "00-main-help.md")
    with open(main_help_file, "w", encoding="utf-8") as f:
        f.write("# Cargo 主帮助文档\n\n")
        f.write(f"> 生成时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")
        f.write("```text\n")
        f.write(data["main_help"])
        f.write("\n```\n")
    print(f"[OK] 主帮助文档已保存: {main_help_file}", file=sys.stderr)

    # 2. 保存命令列表索引
    index_file = os.path.join(output_dir, "00-command-index.md")
    with open(index_file, "w", encoding="utf-8") as f:
        f.write("# Cargo 命令索引\n\n")
        f.write(f"> 生成时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
        f.write(f"> 命令总数: {data['stats']['total']}\n")
        f.write(f"> 成功获取: {data['stats']['success']}\n")
        f.write(f"> 获取失败: {data['stats']['fail']}\n\n")

        f.write("## 命令列表\n\n")
        f.write("| 序号 | 命令 | 说明 | 文件 |\n")
        f.write("|------|------|------|------|\n")

        for i, cmd in enumerate(data["commands"], 1):
            help_text = data["help_docs"].get(cmd, "")
            description = extract_description(help_text)

            safe_cmd = sanitize_filename(cmd)
            filename = f"{i:02d}-{safe_cmd}.md"
            f.write(f"| {i} | `{cmd}` | {description} | [{filename}]({filename}) |\n")

    print(f"[OK] 命令索引已保存: {index_file}", file=sys.stderr)

    # 3. 保存每个命令的详细帮助文档
    for i, cmd in enumerate(data["commands"], 1):
        help_text = data["help_docs"].get(cmd, "")
        safe_cmd = sanitize_filename(cmd)
        filename = f"{i:02d}-{safe_cmd}.md"
        filepath = os.path.join(output_dir, filename)

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(f"# `{cmd}` 命令帮助文档\n\n")
            # f.write(f"> 序号: {i}/{data['stats']['total']}\n")
            # f.write(f"> 生成时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")

            if help_text:
                f.write("```text\n")
                f.write(help_text)
                f.write("\n```\n")
            else:
                f.write("> ⚠️ 未能获取到该命令的帮助文档\n")

        if help_text:
            print(f"[OK] 已保存: {filepath} ({len(help_text)} 字符)", file=sys.stderr)
        else:
            print(f"[WARN] 已保存（无内容）: {filepath}", file=sys.stderr)

    # 4. 保存统计信息
    stats_file = os.path.join(output_dir, "00-statistics.md")
    with open(stats_file, "w", encoding="utf-8") as f:
        f.write(
            "# 收集统计信息(记录的是整个收集过程的元信息，并不对应任何 cargo 命令的帮助文档。)\n\n"
        )
        f.write(f"> 生成时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")
        f.write(f"- 总命令数: {data['stats']['total']}\n")
        f.write(f"- 成功获取: {data['stats']['success']}\n")
        f.write(f"- 获取失败: {data['stats']['fail']}\n")
        f.write(f"- 输出目录: {output_dir}\n")

    print(f"[OK] 统计信息已保存: {stats_file}", file=sys.stderr)


def main():
    """主函数"""
    print("[INFO] Cargo 帮助文档收集器启动", file=sys.stderr)
    print(f"[INFO] 当前工作目录: {os.getcwd()}", file=sys.stderr)

    # 检查 cargo 是否可用
    version_output, retcode = run_cargo_command(["--version"])
    if version_output:
        print(f"[INFO] Cargo 版本: {version_output}", file=sys.stderr)
    else:
        print(
            "[ERROR] 无法执行 cargo 命令，请确保 cargo 已安装并在 PATH 中",
            file=sys.stderr,
        )
        sys.exit(1)

    # 收集所有帮助文档
    data = collect_all_help()
    if not data:
        print("[ERROR] 收集帮助文档失败", file=sys.stderr)
        sys.exit(1)

    # 保存到文件（按主题分别存储）
    save_to_files(data, OUTPUT_DIR)

    # 输出统计信息
    print("\n" + "=" * 80, file=sys.stderr)
    print("[INFO] === 执行统计 ===", file=sys.stderr)
    print(f"[INFO] 总命令数: {data['stats']['total']}", file=sys.stderr)
    print(f"[INFO] 成功获取: {data['stats']['success']}", file=sys.stderr)
    print(f"[INFO] 获取失败: {data['stats']['fail']}", file=sys.stderr)
    print(f"[INFO] 输出目录: {OUTPUT_DIR}", file=sys.stderr)

    # 输出策略统计
    if strategy_stats:
        print(f"\n[INFO] === 策略统计 ===", file=sys.stderr)
        for strategy_name, stats in strategy_stats.items():
            total = stats["success"] + stats["fail"]
            print(
                f"[INFO]   {strategy_name}: {stats['success']} 成功 / {total} 尝试",
                file=sys.stderr,
            )

    print("=" * 80, file=sys.stderr)
    print("\n[INFO] 脚本执行完毕！", file=sys.stderr)


if __name__ == "__main__":
    main()
