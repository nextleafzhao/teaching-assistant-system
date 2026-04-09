# `verify-project` 命令帮助文档

```text
已弃用：检查 crate 清单的正确性。

请参阅 https://github.com/rust-lang/cargo/issues/14679。

用法: cargo.exe verify-project [选项]

选项:
  -v, --verbose...               使用详细输出 (-vv 非常详细/build.rs 输出)
  -q, --quiet                    不打印 cargo 日志消息
      --color <WHEN>             着色 [可能值: auto, always, never]
      --config <KEY=VALUE|PATH>  覆盖配置值
  -Z <FLAG>                      不稳定 (仅 nightly) 标志，详见 'cargo -Z help'
  -h, --help                     打印帮助

清单选项:
      --manifest-path <路径>  Cargo.toml 的路径
      --locked                断言 `Cargo.lock` 将保持不变
      --offline               在不访问网络的情况下运行
      --frozen                等同于同时指定 --locked 和 --offline
```
