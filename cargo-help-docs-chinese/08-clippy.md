# `clippy` 命令帮助文档

```text
检查包以捕获常见错误并改进你的 Rust 代码。

用法:
    cargo clippy [选项] [--] [<参数>...]

常用选项:
    --no-deps                仅在给定的 crate 上运行 Clippy，不 lint 依赖
    --fix                    自动应用 lint 建议。此标志隐含 --no-deps 和 --all-targets
    -h, --help               打印此消息
    -V, --version            打印版本信息并退出
    --explain [LINT]         打印给定 lint 的文档

使用 cargo check --help 查看所有选项。

允许/拒绝 lint

要从命令行允许或拒绝 lint，你可以使用 cargo clippy -- 配合：

    -W / --warn [LINT]       设置 lint 警告
    -A / --allow [LINT]      设置 lint 允许
    -D / --deny [LINT]       设置 lint 拒绝
    -F / --forbid [LINT]     设置 lint 禁止

你可以使用工具 lint 来允许或拒绝代码中的 lint，例如：

    #[allow(clippy::needless_lifetimes)]

清单选项:
    --manifest-path <路径>  Cargo.toml 的路径
    --frozen                要求 Cargo.lock 和缓存是最新的
    --locked                要求 Cargo.lock 是最新的
    --offline               在不访问网络的情况下运行
```
