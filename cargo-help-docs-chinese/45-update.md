# `update` 命令帮助文档

```text
CARGO-UPDATE(1)

名称
       cargo-update — 更新本地锁文件中记录的依赖

概要
       cargo update [选项] spec

描述
       此命令将 Cargo.lock 文件中的依赖更新到最新版本。
       如果 Cargo.lock 文件不存在，将使用最新的可用版本创建它。

选项
   更新选项
       spec…
           仅更新指定的包。此标志可以多次指定。
           有关 SPEC 格式，请参阅 cargo-pkgid(1)。

           如果使用 spec 指定了包，则将执行锁文件的保守更新。
           这意味着仅更新 SPEC 指定的依赖。
           其传递依赖仅在 SPEC 需要更新它们时才会更新。
           所有其他依赖将保持锁定在当前记录的版本。

           如果未指定 spec，则更新所有依赖。

       --recursive
           与 spec 一起使用时，强制更新 spec 的依赖。不能与 --precise 一起使用。

       --precise precise
           与 spec 一起使用时，允许你指定要设置的具体版本号。
           如果包来自 git 仓库，这可以是 git 修订（如 SHA 哈希或标签）。

           虽然不推荐，但你可以指定包的 yanked 版本。
           在可能的情况下，尝试其他非 yanked 的 SemVer 兼容版本，
           或向包的维护者寻求帮助。

           即使 Cargo.toml 中的版本要求不包含任何预发布标识符，
           也可以指定兼容的预发布版本（仅 nightly）。

       --breaking directory
           将 spec 更新到最新的 SemVer 不兼容版本。

           版本要求将被修改以允许此更新。

           这仅适用于以下情况下的依赖：

           o  包是工作区成员的依赖

           o  依赖未重命名

           o  有 SemVer 不兼容的版本可用

           o  使用了"SemVer 运算符"（^，默认）

           此选项不稳定，仅在 nightly 通道可用，
           需要 -Z unstable-options 标志来启用。
           请参阅 <https://github.com/rust-lang/cargo/issues/12425> 了解更多信息。

       -w, --workspace
           尝试仅更新工作区中定义的包。
           其他包仅在它们尚不存在于锁文件中时才更新。
           此选项对于在更改 Cargo.toml 中的版本号后更新 Cargo.lock 很有用。

       --dry-run
           显示将被更新的内容，但不实际写入锁文件。

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

       --ignore-rust-version
           忽略包中的 rust-version 规范。

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
       1. 更新锁文件中的所有依赖：

              cargo update

       2. 仅更新特定依赖：

              cargo update foo bar

       3. 将特定依赖设置为特定版本：

              cargo update foo --precise 1.2.3

另请参阅
       cargo(1), cargo-generate-lockfile(1)
```
