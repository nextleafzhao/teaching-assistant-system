# `logout` 命令帮助文档

```text
CARGO-LOGOUT(1)

名称
       cargo-logout — 从本地注册表中删除 API 令牌

概要
       cargo logout [选项]

描述
       此命令将运行凭证提供程序以删除已保存的令牌。

       对于默认的 cargo:token 凭证提供程序，凭证存储在 $CARGO_HOME/credentials.toml 中，
       其中 $CARGO_HOME 默认为你的主目录中的 .cargo。

       如果注册表指定了凭证提供程序，将使用它。
       否则，将尝试使用配置值 registry.global-credential-providers 中的提供程序，
       从列表末尾开始。

       如果未指定 --registry，则将删除默认注册表的凭证
       （由 registry.default <https://doc.rust-lang.org/cargo/reference/config.html#registrydefault> 配置，
       默认为 <https://crates.io/>）。

       这不会在服务器上撤销令牌。如果你需要撤销令牌，请访问注册表网站并按照其说明操作
       （参见 <https://crates.io/me> 撤销 <https://crates.io/> 的令牌）。

选项
   登出选项
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
       1. 删除默认注册表令牌：

              cargo logout

       2. 删除特定注册表的令牌：

              cargo logout --registry my-registry

另请参阅
       cargo(1), cargo-login(1)
```
