# `owner` 命令帮助文档

```text
CARGO-OWNER(1)

名称
       cargo-owner — 管理注册表上 crate 的所有者

概要
       cargo owner [选项] --add 登录名 [crate]
       cargo owner [选项] --remove 登录名 [crate]
       cargo owner [选项] --list [crate]

描述
       此命令将修改注册表上 crate 的所有者。
       crate 的所有者可以上传新版本和撤销旧版本。
       非团队所有者还可以修改所有者集合，请小心！

       此命令要求你使用 --token 选项或 cargo-login(1) 进行身份验证。

       如果未指定 crate 名称，将使用当前目录中的包名称。

       有关所有者和发布的更多信息，请参阅参考文档
       <https://doc.rust-lang.org/cargo/reference/publishing.html#cargo-owner>。

选项
   所有者选项
       -a, --add login…
           邀请给定的用户或团队作为所有者。

       -r, --remove login…
           移除给定的用户或团队作为所有者。

       -l, --list
           列出 crate 的所有者。

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
       1. 列出包的所有者：

              cargo owner --list foo

       2. 邀请包的所有者：

              cargo owner --add username foo

       3. 从包中移除所有者：

              cargo owner --remove username foo

另请参阅
       cargo(1), cargo-login(1), cargo-publish(1)
```
