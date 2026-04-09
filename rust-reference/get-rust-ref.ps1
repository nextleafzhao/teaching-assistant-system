<#
.SYNOPSIS
    浅克隆 Rust 参考文档仓库，清理当前目录，并将文档内容提取到当前目录。
.DESCRIPTION
    1. 使用 git clone --depth 1 获取 https://github.com/rust-lang/reference.git
    2. 成功后删除当前目录下除 reference 文件夹和本脚本外的所有文件/文件夹
    3. 将 .\reference\src\ 下的所有内容移动到当前目录
    4. 删除空的 .\reference\ 文件夹
.NOTES
    要求 git 命令可用。
#>

# 设置严格错误处理
$ErrorActionPreference = 'Stop'

# 记录脚本自身的完整路径（用于排除）
$scriptPath = $MyInvocation.MyCommand.Path
if (-not $scriptPath) {
    Write-Error "无法获取脚本自身路径，请确保脚本以文件形式运行。"
    exit 1
}

$scriptName = Split-Path $scriptPath -Leaf
$keepNames = @('reference', $scriptName, 'get-rust-ref.py')

# 检查 git 是否可用
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Error "未找到 git 命令，请安装 git 并将其添加到 PATH 中。"
    exit 1
}

# 第一步：克隆仓库
Write-Host "正在克隆仓库 (depth=1) ..." -ForegroundColor Cyan
git clone --depth 1 https://github.com/rust-lang/reference.git
if ($LASTEXITCODE -ne 0) {
    Write-Error "git clone 失败，退出码: $LASTEXITCODE"
    exit 1
}
Write-Host "克隆成功。" -ForegroundColor Green

# 第二步：删除当前目录下除 reference 文件夹和本脚本之外的所有内容
Write-Host "正在清理当前目录..." -ForegroundColor Cyan
Get-ChildItem -Path . -Force | ForEach-Object {
    $item = $_
    # 跳过 reference 文件夹和脚本文件
    if ($item.Name -in $keepNames) {
        return
    }
    # 删除项
    Write-Host "  删除: $($item.Name)" -ForegroundColor Yellow
    if ($item.PSIsContainer) {
        Remove-Item -Path $item.FullName -Recurse -Force
    } else {
        Remove-Item -Path $item.FullName -Force
    }
}
Write-Host "清理完成。" -ForegroundColor Green

# 第三步：移动 .\reference\src\ 下的所有内容到当前目录
$srcPath = ".\reference\src"
if (Test-Path $srcPath) {
    Write-Host "正在移动内容从 $srcPath 到当前目录..." -ForegroundColor Cyan
    # 移动所有文件和文件夹（包括隐藏项）
    Get-ChildItem -Path $srcPath -Force | ForEach-Object {
        $dest = Join-Path -Path (Get-Location) -ChildPath $_.Name
        Write-Host "  移动: $($_.Name) -> $dest"
        Move-Item -Path $_.FullName -Destination $dest -Force
    }
    Write-Host "移动完成。" -ForegroundColor Green
} else {
    Write-Error "路径 $srcPath 不存在，无法移动内容。"
    exit 1
}

# 第四步：删除 .\reference\ 文件夹
$refPath = ".\reference"
if (Test-Path $refPath) {
    Write-Host "正在删除空文件夹: $refPath" -ForegroundColor Cyan
    Remove-Item -Path $refPath -Recurse -Force
    Write-Host "删除完成。" -ForegroundColor Green
}

Write-Host "所有步骤执行成功！" -ForegroundColor Green