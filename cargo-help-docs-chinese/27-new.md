# `new` 命令帮助文档

```text
CARGO-NEW(1)

名称
       cargo-new — 创建新的 Cargo 包

概要
       cargo new [选项] 路径

描述
       此命令将在给定目录中创建新的 Cargo 包。
       这包括一个简单的模板，包含 Cargo.toml 清单、示例源文件和 VCS 忽略文件。
       如果目录尚未在 VCS 仓库中，则创建新的仓库（参见下面的 --vcs）。

       有关类似命令，请参阅 cargo-init(1)，它将在现有目录中创建新清单。

选项
   新建选项
       --bin
           创建带有二进制目标 (src/main.rs) 的包。这是默认行为。

       --lib
           创建带有库目标 (src/lib.rs) 的包。

       --edition edition
           指定要使用的 Rust 版本。默认为 2024。可能值：
           2015, 2018, 2021, 2024

       --name name
           设置包名称。默认为目录名称。

       --vcs vcs
           为给定的版本控制系统（git、hg、pijul 或 fossil）初始化新的 VCS 仓库，
           或者根本不初始化任何版本控制（none）。
           如果未指定，默认为 git 或配置值 cargo-new.vcs，
           或者如果已经在 VCS 仓库内，则为 none。

       --registry registry
           这将 Cargo.toml 中的 publish 字段设置为给定的注册表名称，
           这将限制仅向该注册表发布。

           注册表在 Cargo 配置文件
           <https://doc.rust-lang.org/cargo/reference/config.html> 中定义。
           如果未指定，则使用由 registry.default 配置键定义的默认注册表。
           如果未设置默认注册表且未使用 --registry，则不会设置 publish 字段，
           这意味着发布将不受限制。

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
       1. 在给定目录创建二进制 Cargo 包：

              cargo new foo

另请参阅
       cargo(1), cargo-init(1)
```
