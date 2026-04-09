# `uninstall` 命令帮助文档

```text
CARGO-UNINSTALL(1)

名称
       cargo-uninstall — 删除 Rust 二进制文件

概要
       cargo uninstall [选项] [spec…]

描述
       此命令删除使用 cargo-install(1) 安装的包。
       spec 参数是要删除的包的包 ID 规范（请参阅 cargo-pkgid(1)）。

       默认情况下会删除 crate 的所有二进制文件，
       但可以使用 --bin 和 --example 标志仅删除特定的二进制文件。

       安装根按以下顺序确定：

       o  --root 选项

       o  CARGO_INSTALL_ROOT 环境变量

       o  install.root Cargo 配置值
          <https://doc.rust-lang.org/cargo/reference/config.html>

       o  CARGO_HOME 环境变量

       o  $HOME/.cargo

选项
   卸载选项
       -p, --package spec…
           要卸载的包。

       --bin name…
           仅卸载指定的二进制文件。

       --root dir
           从中卸载包的目录。

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
       1. 卸载之前安装的包。

              cargo uninstall ripgrep

另请参阅
       cargo(1), cargo-install(1)
```
