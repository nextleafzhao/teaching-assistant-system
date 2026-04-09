# `vendor` 命令帮助文档

```text
CARGO-VENDOR(1)

名称
       cargo-vendor — 将所有依赖本地化

概要
       cargo vendor [选项] [路径]

描述
       此 cargo 子命令将项目的 crates.io 和 git 依赖的所有 crate  vendored 到 <路径> 指定的目录中。
       此命令完成后，<路径> 指定的 vendor 目录将包含指定依赖的所有远程来源。
       可以使用 -s 选项指定除默认清单之外的额外清单。

       使用 vendored 来源所需的配置将在 cargo vendor 完成 vendoring 过程后打印到 stdout。
       你需要将其添加或重定向到你的 Cargo 配置文件，
       通常是当前包的本地 .cargo/config.toml。

       Cargo 将 vendored 来源视为只读，就像它对注册表和 git 来源一样。
       如果你打算修改来自远程来源的 crate，请使用 [patch] 或指向该 crate 本地副本的路径依赖。
       Cargo 将在增量重新构建时正确处理该 crate，因为它知道它不再是只读依赖。

选项
   Vendor 选项
       -s manifest, --sync manifest
           指定也应该 vendored 并同步到输出的工作区的额外 Cargo.toml 清单。
           可以多次指定。

       --no-delete
           在 vendoring 时不删除"vendor"目录，而是保留 vendor 目录中的所有现有内容

       --respect-source-config
           默认情况下不在 .cargo/config.toml 中忽略 [source] 配置，
           而是读取它并在从 crates.io 下载 crate 时使用它

       --versioned-dirs
           通常仅在需要区分同一包的多个版本时才添加版本号。
           此选项使"vendor"目录中的所有目录都带版本号，
           这使得随着时间的推移更容易跟踪 vendored 包的历史，
           并且可以在仅部分包更改时帮助重新 vendoring 的性能。

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
       1. 将所有依赖 vendored 到本地"vendor"文件夹

              cargo vendor

       2. 将所有依赖 vendored 到本地"third-party/vendor"文件夹

              cargo vendor third-party/vendor

       3. 将当前工作区以及另一个工作区 vendored 到"vendor"

              cargo vendor -s ../path/to/Cargo.toml

       4. Vendored 并将必要的 vendor 配置重定向到配置文件。

              cargo vendor > path/to/my/cargo/config.toml

另请参阅
       cargo(1)
```
