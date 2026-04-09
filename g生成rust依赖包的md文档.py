#!/usr/bin/env python3
"""
收集 Rust 包的 md 文档，或覆盖更新 Rust 包的 md 文档

用法示例：
    python collect_rust_docs.py sqlx --features "runtime-tokio,sqlite,macros"
    python collect_rust_docs.py serde --output-dir ./my_docs
"""

import argparse
import subprocess
import sys
import os
import tempfile
import shutil
from pathlib import Path


def check_command(cmd: str) -> bool:
    """检查系统命令是否可用"""
    return shutil.which(cmd) is not None


def run_cmd(cmd: list, cwd: Path = None, check: bool = True, capture: bool = False):
    """运行命令，失败时退出或抛出异常"""
    try:
        if capture:
            return subprocess.run(
                cmd, cwd=cwd, check=check, text=True, capture_output=True
            )
        else:
            return subprocess.run(cmd, cwd=cwd, check=check, text=True)
    except subprocess.CalledProcessError as e:
        print(f"命令执行失败: {' '.join(cmd)}", file=sys.stderr)
        if e.stderr:
            print(e.stderr, file=sys.stderr)
        raise
    except FileNotFoundError:
        print(f"命令未找到: {cmd[0]}，请确保已安装。", file=sys.stderr)
        sys.exit(1)


def main():
    parser = argparse.ArgumentParser(description="收集 Rust 包的 txt 文档")
    parser.add_argument("package", help="Rust 包名（crates.io 上的名称）")
    parser.add_argument(
        "--features",
        help="要启用的特性，多个特性用逗号分隔，例如 'runtime-tokio,sqlite,macros'",
    )
    parser.add_argument("--output-dir", help="输出 txt 文档的根目录", default=None)
    parser.add_argument(
        "--keep-temp", action="store_true", help="保留临时项目目录（调试用）"
    )
    args = parser.parse_args()

    # 检查必要命令
    if not check_command("cargo"):
        print("错误: 未找到 cargo 命令，请安装 Rust 工具链。", file=sys.stderr)
        sys.exit(1)
    if not check_command("html2text"):
        print(
            "错误: 未找到 html2text 命令。请安装：pip install html2text 或通过系统包管理器安装。",
            file=sys.stderr,
        )
        sys.exit(1)

    # 确定输出目录
    output_root = (
        Path(args.output_dir)
        if args.output_dir
        else Path.cwd() / f"{args.package}_docs_md"
    )
    output_root.mkdir(parents=True, exist_ok=True)

    # 提示与局限性说明
    print(
        f"提示：你可以手动运行 `cargo add {args.package} --dry-run` 来预览添加依赖后的结果。"
    )
    print(
        "脚本局限性：需要网络，编译可能失败，html2text 转换可能不完美，仅处理指定包的文档（--no-deps）。"
    )

    temp_dir = None
    try:
        # 创建临时 Rust 项目
        temp_dir = tempfile.TemporaryDirectory(
            prefix=f"rust_doc_{args.package}_", delete=not args.keep_temp
        )
        temp_path = Path(temp_dir.name)
        print(f"创建临时项目: {temp_path}")

        print("初始化临时 Rust 项目...")
        run_cmd(["cargo", "init", "--name", "temp_doc_gen"], cwd=temp_path)

        # 添加依赖
        add_cmd = ["cargo", "add", args.package]
        if args.features:
            add_cmd.extend(["--features", args.features])
        print(f"添加依赖: {' '.join(add_cmd)}")
        run_cmd(add_cmd, cwd=temp_path)

        # 生成文档（只生成目标包的文档，不生成依赖的文档）
        print("生成文档（可能需要几分钟）...")
        doc_cmd = ["cargo", "doc", "--package", args.package, "--no-deps"]
        run_cmd(doc_cmd, cwd=temp_path)

        # 文档目录位置
        doc_dir = temp_path / "target" / "doc" / args.package
        if not doc_dir.exists():
            print(f"错误: 文档目录不存在: {doc_dir}", file=sys.stderr)
            print("可能原因：包名错误、包未成功添加或文档生成失败。", file=sys.stderr)
            sys.exit(1)

        # 递归收集所有 .html 文件
        html_files = list(doc_dir.rglob("*.html"))
        if not html_files:
            print(f"警告: 在 {doc_dir} 中未找到任何 HTML 文件。")
        else:
            print(f"找到 {len(html_files)} 个 HTML 文件，开始转换为 TXT...")

        # 转换每个 HTML 文件
        for html_path in html_files:
            # 相对于包文档根目录的路径
            rel_path = html_path.relative_to(doc_dir)
            txt_path = output_root / args.package / rel_path.with_suffix(".md")
            txt_path.parent.mkdir(parents=True, exist_ok=True)

            # 调用 html2text 并设置 UTF-8 编码
            html2text_args = [
                "html2text",
                "--body-width",
                "0",
                "--mark-code",
                "--no-wrap-links",
                "--reference-links",
                "--pad-tables",
                "--unicode-snob",
                str(html_path),
            ]
            env = os.environ.copy()
            env["PYTHONIOENCODING"] = "utf-8"
            try:
                result = subprocess.run(
                    html2text_args,
                    capture_output=True,
                    text=True,
                    encoding="utf-8",
                    errors="replace",
                    env=env,
                    check=True,
                )
                txt_content = result.stdout
            except subprocess.CalledProcessError as e:
                print(f"转换失败 {html_path}: {e.stderr}", file=sys.stderr)
                continue

            # 写入 TXT 文件
            with open(txt_path, "w", encoding="utf-8") as f:
                f.write(txt_content)
            print(f"已生成: {txt_path}")

        print(f"\n完成！TXT 文档保存在: {output_root / args.package}")
        if args.keep_temp:
            print(f"临时项目目录保留在: {temp_path}")
        else:
            print("临时项目已删除。")

    except KeyboardInterrupt:
        print("\n用户中断。")
        sys.exit(1)
    except Exception as e:
        print(f"发生错误: {e}", file=sys.stderr)
        sys.exit(1)
    finally:
        if temp_dir and not args.keep_temp:
            temp_dir.cleanup()


if __name__ == "__main__":
    main()
