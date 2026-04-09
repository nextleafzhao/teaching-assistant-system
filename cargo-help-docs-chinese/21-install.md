# `install` 命令帮助文档

```text
CARGO-INSTALL(1)

名称
       cargo-install — 构建并安装 Rust 二进制文件

概要
       cargo install [选项] crate[@版本]…
       cargo install [选项] --path 路径
       cargo install [选项] --git url [crate…]
       cargo install [选项] --list

描述
       此命令管理 Cargo 的本地已安装二进制 crate 集合。
       只有具有可执行 [[bin]] 或 [[example]] 目标的包才能被安装，
       所有可执行文件都安装到安装根的 bin 文件夹中。
       默认情况下仅安装二进制文件，不安装示例。

       安装根按以下顺序确定：

       o  --root 选项

       o  CARGO_INSTALL_ROOT 环境变量

       o  install.root Cargo 配置值
          <https://doc.rust-lang.org/cargo/reference/config.html>

       o  CARGO_HOME 环境变量

       o  $HOME/.cargo

       有多个来源可以安装 crate。默认来源是 crates.io，
       但 --git、--path 和 --registry 标志可以更改此来源。
       如果来源包含多个包（如 crates.io 或具有多个 crate 的 git 仓库），
       则需要 crate 参数来指示应安装哪个 crate。

       来自 crates.io 的 crate 可以通过 --version 标志可选地指定要安装的版本，
       类似地，来自 git 仓库的包可以可选地指定应安装的分支、标签或修订。
       如果包有多个二进制文件，--bin 参数可以选择性地仅安装其中一个，
       如果你想安装示例，可以使用 --example 参数。

       如果包已经安装，Cargo 将重新安装它，如果已安装的版本看起来不是最新的。
       如果以下任何值发生更改，Cargo 将重新安装包：

       o  包版本和来源。

       o  安装的二进制文件名集合。

       o  选择的特性。

       o  profile (--profile)。

       o  目标 (--target)。

       使用 --path 安装将始终构建和安装，除非有来自另一个包的冲突二进制文件。
       可以使用 --force 标志强制 Cargo 始终重新安装包。

       如果来源是 crates.io 或 --git，则默认情况下 crate 将在临时目标目录中构建。
       要避免这种情况，可以通过设置 CARGO_TARGET_DIR 环境变量为相对路径来指定目标目录。
       特别是，这对于在持续集成系统上缓存构建构件很有用。

   处理锁文件
       默认情况下，将忽略包附带的 Cargo.lock 文件。
       这意味着 Cargo 将重新计算使用哪个版本的依赖，
       可能会使用包发布后发布的更新版本。
       可以使用 --locked 标志强制 Cargo 使用打包的 Cargo.lock 文件（如果可用）。
       这可能对确保可重现构建很有用，使用与包发布时可用的完全相同的依赖集。
       如果发布的依赖更新版本在你的系统上无法构建，或有其他问题，这也可能有用。
       使用 --locked 的缺点是你不会收到任何依赖的修复或更新。
       请注意，Cargo 直到版本 1.37 才开始发布 Cargo.lock 文件，
       这意味着使用之前版本发布的包将没有可用的 Cargo.lock 文件。

   配置发现
       此命令在系统或用户级别运行，而非项目级别。
       这意味着忽略本地配置发现
       <https://doc.rust-lang.org/cargo/reference/config.html#hierarchical-structure>。
       相反，配置发现从 $CARGO_HOME/config.toml 开始。
       如果使用 --path $PATH 安装包，将使用本地配置，
       从 $PATH/.cargo/config.toml 开始发现。

选项
   安装选项
       --vers version, --version version
           指定要安装的版本。这可能是版本要求
           <https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html>，
           如 ~1.2，让 Cargo 从给定要求中选择最新版本。
           如果版本没有要求运算符（如 ^ 或 ~），则必须是 MAJOR.MINOR.PATCH 形式，
           并将准确安装该版本；它不像 Cargo 依赖那样被视为插入符要求。

       --git url
           从指定的 git URL 安装 crate。

       --branch branch
           从 git 安装时使用的分支。

       --tag tag
           从 git 安装时使用的标签。

       --rev sha
           从 git 安装时使用的特定提交。

       --path path
           要从中安装的本地 crate 的文件系统路径。

       --list
           列出所有已安装的包及其版本。

       -n, --dry-run
           （不稳定）执行所有检查而不安装。

       -f, --force
           强制覆盖现有的 crate 或二进制文件。
           如果一个包已安装与另一个包同名的二进制文件，可以使用此选项。
           如果系统上有任何你想要重新构建的更改，如更新版本的 rustc，这也很有用。

       --no-track
           默认情况下，Cargo 使用存储在根安装目录中的元数据文件跟踪已安装的包。
           此标志告诉 Cargo 不使用或创建该文件。使用此标志时，
           除非使用 --force 标志，否则 Cargo 将拒绝覆盖任何现有文件。
           这还会禁用 Cargo 防止多个 Cargo 同时安装的保护能力。

       --bin name…
           仅安装指定的二进制文件。

       --bins
           安装所有二进制文件。这是默认行为。

       --example name…
           仅安装指定的示例。

       --examples
           安装所有示例。

       --root dir
           安装包到的目录。

       --registry registry
           要使用的注册表名称。注册表在 Cargo 配置文件
           <https://doc.rust-lang.org/cargo/reference/config.html> 中定义。
           如果未指定，则使用默认注册表，由 registry.default 配置键定义，默认为 crates-io。

       --index index
           注册表索引的 URL。

   特性选择
       特性标志允许你控制启用哪些特性。当未给出特性选项时，
       将为每个选定的包激活默认特性。

       有关更多详细信息，请参阅特性文档
       <https://doc.rust-lang.org/cargo/reference/features.html#command-line-feature-options>。

       -F 特性, --features 特性
           空格或逗号分隔的要激活的特性列表。可以使用包名/特性名语法启用工作区成员的特性。
           此标志可以多次指定，这将启用所有指定的特性。

       --all-features
           激活所有选定包的所有可用特性。

       --no-default-features
           不激活选定包的默认特性。

   编译选项
       --target triple
           为指定的目标架构安装。默认为主机架构。
       三元组的一般格式为 <arch><sub>-<vendor>-<sys>-<abi>。

           可能的值：

           o  rustc --print target-list 中的任何受支持目标。

           o  "host-tuple"，将在内部替换为主机的目标。
              如果你正在交叉编译一些 crate，并且不想将主机指定为目标，这可能特别有用
              （例如，在可能由多个主机处理的共享项目中的 xtask）。

           o  自定义目标规范的路径。有关更多信息，请参阅自定义目标查找路径
              <https://doc.rust-lang.org/rustc/targets/custom.html#custom-target-lookup-path>。

           这也可以通过 build.target 配置值
           <https://doc.rust-lang.org/cargo/reference/config.html> 指定。

           请注意，指定此标志会使 Cargo 以不同模式运行，
           其中目标构件被放置在单独的目录中。
           有关更多详细信息，请参阅构建缓存
           <https://doc.rust-lang.org/cargo/reference/build-cache.html> 文档。

       --target-dir directory
           所有生成的构件和中间文件的目录。
           也可以通过 CARGO_TARGET_DIR 环境变量或 build.target-dir 配置值
           <https://doc.rust-lang.org/cargo/reference/config.html> 指定。
           默认为平台临时目录中的新临时文件夹。

           使用 --path 时，默认情况下它将使用本地 crate 工作区中的 target 目录，
           除非指定了 --target-dir。

       --debug
           使用 dev profile 构建，而非 release profile。
           另请参阅 --profile 选项以按名称选择特定 profile。

       --profile name
           使用给定的 profile 安装。
           有关 profile 的更多详细信息，请参阅参考文档
           <https://doc.rust-lang.org/cargo/reference/profiles.html>。

       --timings
           输出每次编译花费的时间信息，并跟踪随时间变化的并发信息。

           构建结束时，将在 target/cargo-timings 目录中写入一个 cargo-timing.html 文件。
           如果你想查看之前的运行结果，还会写入一个文件名中带有时间戳的额外报告。
           这些报告仅供人类阅读，不提供机器可读的时序数据。

   清单选项
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

   杂项选项
       -j N, --jobs N
           要运行的并行作业数。也可以通过 build.jobs 配置值
           <https://doc.rust-lang.org/cargo/reference/config.html> 指定。
           默认为逻辑 CPU 的数量。如果为负数，则将最大并行作业数设置为逻辑 CPU 数加上提供的值。
           如果提供字符串 default，则将值恢复为默认值。不应为 0。

       --keep-going
           尽可能构建依赖图中的多个 crate，而不是在第一个构建失败的 crate 上中止构建。

           例如，如果当前包依赖于 fails 和 works，其中 fails 构建失败，
           cargo install -j1 可能会也可能不会构建 works（取决于 Cargo 选择先运行哪个构建），
           而 cargo install -j1 --keep-going 肯定会运行两个构建，即使先运行的那个失败。

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

       --message-format fmt
           诊断消息的输出格式。可以多次指定，由逗号分隔的值组成。有效值：

           o  human (默认): 以人类可读的文本格式显示。与 short 和 json 冲突。

           o  short: 发出更短的人类可读文本消息。与 human 和 json 冲突。

           o  json: 向 stdout 发出 JSON 消息。有关更多详细信息，请参阅参考文档
              <https://doc.rust-lang.org/cargo/reference/external-tools.html#json-messages>。
              与 human 和 short 冲突。

           o  json-diagnostic-short: 确保 JSON 消息的 rendered 字段包含来自 rustc 的"short"渲染。
              不能与 human 或 short 一起使用。

           o  json-diagnostic-rendered-ansi: 确保 JSON 消息的 rendered 字段包含嵌入式 ANSI 颜色代码，
              以尊重 rustc 的默认配色方案。不能与 human 或 short 一起使用。

           o  json-render-diagnostics: 指示 Cargo 不要在打印的 JSON 消息中包含 rustc 诊断，
              而是由 Cargo 本身渲染来自 rustc 的 JSON 诊断。
              仍会发出 Cargo 自己的 JSON 诊断和来自 rustc 的其他诊断。
              不能与 human 或 short 一起使用。

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
       1. 从 crates.io 安装或升级包：

              cargo install ripgrep

       2. 安装或重新安装当前目录中的包：

              cargo install --path .

       3. 查看已安装的包列表：

              cargo install --list

另请参阅
       cargo(1), cargo-uninstall(1), cargo-search(1), cargo-publish(1)
```
