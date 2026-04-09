# `pkgid` 命令帮助文档

```text
CARGO-PKGID(1)

名称
       cargo-pkgid — 打印完全合格的包规格

概要
       cargo pkgid [选项] [spec]

描述
       给定 spec 参数，为当前工作区中的包或依赖打印完全合格的包 ID 说明符。
       如果 spec 在依赖图中引用的包不明确，此命令将生成错误。
       如果未提供 spec，则打印本地包的说明符。

       此命令需要锁文件可用且依赖已获取。

       包说明符由名称、版本和来源 URL 组成。
       只要它仅匹配一个包，你就可以使用部分说明符来简洁地匹配特定包。
       此说明符也由 Cargo 的其他部分使用，如 cargo-metadata(1)
       和 Cargo 发出的 JSON 消息
       <https://doc.rust-lang.org/cargo/reference/external-tools.html#json-messages>。

       spec 的格式可以是以下之一：

       +-----------------+--------------------------------------------------+
       | SPEC 结构       | 示例 SPEC                                        |
       +-----------------+--------------------------------------------------+
       | name            | bitflags                                         |
       +-----------------+--------------------------------------------------+
       | name@version    | bitflags@1.0.4                                   |
       +-----------------+--------------------------------------------------+
       | url             | https://github.com/rust-lang/cargo               |
       +-----------------+--------------------------------------------------+
       | url#version     | https://github.com/rust-lang/cargo#0.33.0        |
       +-----------------+--------------------------------------------------+
       | url#name        |                                                  |
       |                 | https://github.com/rust-lang/crates.io-index#bitflags |
       +-----------------+--------------------------------------------------+
       |                 |                                                  |
       | url#name@version | https://github.com/rust-lang/cargo#crates-io@0.21.0 |
       +-----------------+--------------------------------------------------+

       说明符语法可以在包 ID 规范章节中找到
       <https://doc.rust-lang.org/cargo/reference/pkgid-spec.html>。

选项
   包选择
       -p spec, --package spec
           获取给定包的包 ID，而非当前包。

   显示选项
       -v, --verbose
           使用详细输出。可以指定两次以获得"非常详细"的输出，其中包括额外输出，
           如依赖警告和构建脚本输出。也可以通过 term.verbose 配置值
           <https://doc.rust-lang.org/cargo/reference/config.html> 指定。

       -q, --quiet
           不打印 cargo 日志消息。也可以通过 term.quiet 配置值
           <https://doc.rust-lang.org/cargo/reference/config.html> 指定。

       --color when
           控制何时使用彩色输出。有效值：

           o  auto (默认): 自动检测终端是否支持颜色。

           o  always: 始终显示颜色。

           o  never: 从不显示颜色。

           也可以通过 term.color 配置值
           <https://doc.rust-lang.org/cargo/reference/config.html> 指定。

   清单选项
       --manifest-path 路径
           Cargo.toml 文件的路径。默认情况下，Cargo 会在当前目录或任何父目录中搜索 Cargo.toml 文件。

       --locked
           断言使用的依赖和版本与现有 Cargo.lock 文件最初生成时完全相同。
           当出现以下任一情况时，Cargo 将以错误退出：

           o  锁文件缺失。

           o  Cargo 尝试因不同的依赖解析而更改锁文件。

           它可用于需要确定性构建的环境中，例如在 CI 管道中。

       --offline
           阻止 Cargo 因任何原因访问网络。如果没有此标志，当 Cargo 需要访问网络但网络不可用时，
           将会停止并报错。使用此标志时，Cargo 将在可能的情况下尝试在没有网络的情况下继续运行。

           请注意，这可能导致与在线模式不同的依赖解析。Cargo 将限制自己使用本地下载的 crate，
           即使索引的本地副本可能表明有更新的版本。请参阅 cargo-fetch(1) 命令在离线前下载依赖。

           也可以通过 net.offline 配置值
           <https://doc.rust-lang.org/cargo/reference/config.html> 指定。

       --frozen
           等同于同时指定 --locked 和 --offline。

   通用选项
       +toolchain
           如果使用 rustup 安装了 Cargo，并且 cargo 的第一个参数以 + 开头，
           它将被解释为 rustup 工具链名称（如 +stable 或 +nightly）。
           请参阅 rustup 文档
           <https://rust-lang.github.io/rustup/overrides.html> 了解有关工具链覆盖的更多信息。

       --config KEY=VALUE 或 PATH
           覆盖 Cargo 配置值。参数应为 KEY=VALUE 的 TOML 语法，或作为额外配置文件的路径提供。
           此标志可以多次指定。有关更多信息，请参阅命令行覆盖部分
           <https://doc.rust-lang.org/cargo/reference/config.html#command-line-overrides>。

       -C PATH
           在执行任何指定操作前更改当前工作目录。这会影响诸如 cargo 默认在哪里查找项目清单 (Cargo.toml)，
           以及搜索 .cargo/config.toml 的目录等事项。此选项必须出现在命令名称之前，
           例如 cargo -C path/to/my-project build。

           此选项仅在 nightly 通道
           <https://doc.rust-lang.org/book/appendix-07-nightly-rust.html> 上可用，
           并且需要 -Z unstable-options 标志来启用（参见 #10098
           <https://github.com/rust-lang/cargo/issues/10098>）。

       -h, --help
           打印帮助信息。

       -Z flag
           Cargo 的不稳定（仅 nightly）标志。运行 cargo -Z help 了解详细信息。

环境
       有关 Cargo 读取的环境变量的详细信息，请参阅参考文档
       <https://doc.rust-lang.org/cargo/reference/environment-variables.html>。

退出状态
       o  0: Cargo 成功。

       o  101: Cargo 未能完成。

示例
       1. 检索 foo 包的包规格：

              cargo pkgid foo

       2. 检索版本为 1.0.0 的 foo 的包规格：

              cargo pkgid foo@1.0.0

       3. 检索 crates.io 上 foo 的包规格：

              cargo pkgid https://github.com/rust-lang/crates.io-index#foo

       4. 检索本地包中 foo 的包规格：

              cargo pkgid file:///path/to/local/package#foo

另请参阅
       cargo(1), cargo-generate-lockfile(1), cargo-metadata(1), 包 ID 规范
       <https://doc.rust-lang.org/cargo/reference/pkgid-spec.html>, JSON 消息
       <https://doc.rust-lang.org/cargo/reference/external-tools.html#json-messages>
```
