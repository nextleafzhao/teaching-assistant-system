#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
import stat
import shutil
import subprocess
import sys
from pathlib import Path

def remove_readonly(func, path, excinfo):
    """错误处理函数：修改只读权限后重试删除"""
    # 修改文件/目录的只读属性
    os.chmod(path, stat.S_IWRITE)
    # 重试删除操作
    func(path)

def main():
    # 获取脚本自身文件名（不包含路径）
    script_name = Path(__file__).name
    keep_names = ["reference", script_name, "get-rust-ref.ps1"]

    # 检查 git 是否可用
    if shutil.which("git") is None:
        print("错误: 未找到 git 命令，请安装 git 并将其添加到 PATH 中。", file=sys.stderr)
        sys.exit(1)

    # 第一步：克隆仓库
    print("正在克隆仓库 (depth=1) ...")
    try:
        result = subprocess.run(
            ["git", "clone", "--depth", "1", "https://github.com/rust-lang/reference.git"],
            check=False,
            capture_output=True,
            text=True
        )
        if result.returncode != 0:
            print(f"git clone 失败，退出码: {result.returncode}", file=sys.stderr)
            print(result.stderr, file=sys.stderr)
            sys.exit(1)
    except Exception as e:
        print(f"执行 git clone 时发生异常: {e}", file=sys.stderr)
        sys.exit(1)
    print("克隆成功。")

    # 第二步：删除当前目录下除 reference 文件夹和本脚本之外的所有内容
    print("正在清理当前目录...")
    current_dir = Path.cwd()
    for item in current_dir.iterdir():
        # 跳过 reference 文件夹和本脚本文件
        if item.name in keep_names:
            continue
        try:
            if item.is_dir():
                shutil.rmtree(item, onexc=remove_readonly)
                print(f"  删除目录: {item.name}")
            else:
                item.unlink()
                print(f"  删除文件: {item.name}")
        except Exception as e:
            print(f"  删除 {item.name} 失败: {e}", file=sys.stderr)
            sys.exit(1)
    print("清理完成。")

    # 第三步：将 ./reference/src/ 下的所有内容移动到当前目录
    src_path = current_dir / "reference" / "src"
    if not src_path.exists():
        print(f"错误: 路径 {src_path} 不存在，无法移动内容。", file=sys.stderr)
        sys.exit(1)
    if not src_path.is_dir():
        print(f"错误: {src_path} 不是一个目录。", file=sys.stderr)
        sys.exit(1)

    print(f"正在移动内容从 {src_path} 到当前目录...")
    for item in src_path.iterdir():
        dest = current_dir / item.name
        try:
            shutil.move(str(item), str(dest))
            print(f"  移动: {item.name} -> {dest}")
        except Exception as e:
            print(f"  移动 {item.name} 失败: {e}", file=sys.stderr)
            sys.exit(1)
    print("移动完成。")

    # 第四步：删除 ./reference/ 文件夹
    ref_path = current_dir / "reference"
    if ref_path.exists():
        print(f"正在删除文件夹: {ref_path}")
        try:
            shutil.rmtree(ref_path, onexc=remove_readonly)
            print("删除完成。")
        except Exception as e:
            print(f"删除 {ref_path} 失败: {e}", file=sys.stderr)
            sys.exit(1)

    print("所有步骤执行成功！")

if __name__ == "__main__":
    main()