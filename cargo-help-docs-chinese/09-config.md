# `config` 命令帮助文档

```text
检查配置值

用法: cargo.exe config [选项] <命令>

命令:
  get

选项:
  -v, --verbose...               使用详细输出 (-vv 非常详细/build.rs 输出)
  -q, --quiet                    不打印 cargo 日志消息
      --color <WHEN>             着色 [可能值: auto, always, never]
      --config <KEY=VALUE|PATH>  覆盖配置值
  -Z <FLAG>                      不稳定 (仅 nightly) 标志，详见 'cargo -Z help'
  -h, --help                     打印帮助

清单选项:
      --locked   断言 `Cargo.lock` 将保持不变
      --offline  在不访问网络的情况下运行
      --frozen   等同于同时指定 --locked 和 --offline
```
