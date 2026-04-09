# `yank` 命令帮助文档

```text
CARGO-YANK(1)

名称
       cargo-yank — 从索引中删除已发布的 crate

概要
       cargo yank [选项] crate@版本
       cargo yank [选项] --version 版本 [crate]

描述
       yank 命令从服务器的索引中删除之前发布的 crate 版本。
       此命令不会删除任何数据，crate 仍可通过注册表的下载链接获取。

       对于没有现有锁文件的新项目或检出，Cargo 不会使用 yanked 版本，
       如果你的 crate 不再有兼容版本，将生成错误。

       此命令要求你使用 --token 选项或 cargo-login(1) 进行身份验证。

       如果未指定 crate 名称，将使用当前目录中的包名称。

   yank 的工作原理
       例如，foo crate 发布了版本 1.5.0，另一个 crate bar 声明了对 foo = "1.5" 的依赖。
       现在 foo 发布了新的但不兼容 SemVer 的版本 2.0.0，并发现 1.5.0 存在严重问题。
       如果 1.5.0 被 yanked，没有现有锁文件的新项目或检出将无法使用 crate bar，
       因为它依赖 1.5。

       在这种情况下，foo 的维护者应该先在 yank 1.5.0 之前发布兼容 SemVer 的版本（如 1.5.1），
       以便 bar 和所有依赖 bar 的项目继续工作。

       再举一个例子，考虑一个 crate bar，已发布版本 1.5.0、1.5.1、1.5.2、2.0.0 和 3.0.0。
       以下表格标识了在给定版本被 yanked 后，对于不同的 SemVer 要求，
       Cargo 在没有锁文件的情况下可以使用的版本：

       +------------------------+----------------------+----------+----------+
       | Yanked 版本 /          | bar = "1.5.0"        | bar =    | bar =    |
       | SemVer 要求            |                      | "=1.5.0" | "2.0.0"  |
       +------------------------+----------------------+----------+----------+
       | 1.5.0                  | 使用 1.5.1 或 1.5.2  | 返回错误 | 使用     |
       |                        |                      |          | 2.0.0    |
       +------------------------+----------------------+----------+----------+
       | 1.5.1                  | 使用 1.5.0 或 1.5.2  | 使用     | 使用     |
       |                        |                      | 1.5.0    | 2.0.0    |
       +------------------------+----------------------+----------+----------+
       | 2.0.0                  | 使用 1.5.0、1.5.1    | 使用     | 返回     |
       |                        | 或 1.5.2             | 1.5.0    | 错误     |
       +------------------------+----------------------+----------+----------+

   何时使用 yank
        crate 仅应在特殊情况下使用 yank，例如意外发布、无意的 SemVer 破坏，
       或严重损坏且无法使用的 crate。在安全漏洞的情况下，
       RustSec <https://rustsec.org/> 通常是通知用户并鼓励他们升级的破坏性较小的机制，
       并且避免了对无论是否易受相关漏洞影响的项目造成重大下游破坏的可能性。

       常见的工作流程是在已经发布兼容 SemVer 版本后 yank crate，
       以减少阻止依赖 crate 编译的可能性。

       当处理已发布 crate 的版权、许可或个人数据问题时，仅 yank 可能不够。
       在这种情况下，请联系你使用的注册表的维护者。对于 crates.io，
       请参阅他们的政策 <https://crates.io/policies> 并通过 <help@crates.io> 联系他们。

       如果凭据泄露，建议的操作是立即撤销它们。一旦 crate 发布，
       就无法确定泄露的凭据是否已被复制。
       Yank 仅阻止 Cargo 在默认解析依赖时选择此版本。
       现有锁文件或直接下载不受影响，因此 yank 无法阻止泄露凭据的进一步传播。

选项
   Yank 选项
       --vers version, --version version
           要 yank 或取消 yank 的版本。

       --undo
           撤销 yank，将版本放回索引。

       --token token
           进行身份验证时使用的 API 令牌。
           这会覆盖凭证文件中存储的令牌（由 cargo-login(1) 创建）。

           可以使用 Cargo 配置
           <https://doc.rust-lang.org/cargo/reference/config.html> 环境变量
           来覆盖凭证文件中存储的令牌。
           crates.io 的令牌可以使用 CARGO_REGISTRY_TOKEN 环境变量指定。
           其他注册表的令牌可以使用 CARGO_REGISTRIES_NAME_TOKEN 形式的环境变量指定，
           其中 NAME 是全大写的注册表名称。

       --index index
           注册表索引的 URL。

       --registry registry
           要使用的注册表名称。注册表在 Cargo 配置文件
           <https://doc.rust-lang.org/cargo/reference/config.html> 中定义。
           如果未指定，则使用默认注册表，由 registry.default 配置键定义，默认为 crates-io。

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
       1. 从索引中 yank 一个 crate：

              cargo yank foo@1.0.7

另请参阅
       cargo(1), cargo-login(1), cargo-publish(1)
```
