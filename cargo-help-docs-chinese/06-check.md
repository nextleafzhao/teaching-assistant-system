# `check` 命令帮助文档

```text
CARGO-CHECK(1)

名称
       cargo-check — 检查当前包

概要
       cargo check [选项]

描述
       检查本地包及其所有依赖的错误。这实际上会编译包，但不执行最后的代码生成步骤，
       这比运行 cargo build 更快。编译器会将元数据文件保存到磁盘，
       以便如果源代码未修改，未来的运行将重用它们。
       某些诊断和错误仅在代码生成期间发出，因此它们本质上不会通过 cargo check 报告。

选项
   包选择
       默认情况下，当未给出包选择选项时，选择的包取决于所选的清单文件
       （如果未给出 --manifest-path，则基于当前工作目录）。
       如果清单是工作区的根目录，则选择工作区的默认成员，否则仅选择清单定义的包。

       可以使用根清单中的 workspace.default-members 键显式设置工作区的默认成员。
       如果未设置，虚拟工作区将包括所有工作区成员（等同于传递 --workspace），
       而非虚拟工作区将仅包括根 crate 本身。

       -p spec…, --package spec…
           仅检查指定的包。有关 SPEC 格式，请参阅 cargo-pkgid(1)。
           此标志可以多次指定，并支持常见的 Unix 通配符模式，如 *、? 和 []。
           但是，为避免 shell 在 Cargo 处理之前意外展开这些模式，
           你必须对每个模式使用单引号或双引号。

       --workspace
           检查工作区中的所有成员。

       --all
           --workspace 的已弃用别名。

       --exclude SPEC…
           排除指定的包。必须与 --workspace 标志结合使用。
           此标志可以多次指定，并支持常见的 Unix 通配符模式，如 *、? 和 []。
           但是，为避免 shell 在 Cargo 处理之前意外展开这些模式，
           你必须对每个模式使用单引号或双引号。

   目标选择
       当未给出目标选择选项时，cargo check 将检查所选包的所有二进制和库目标。
       如果二进制文件缺少所需的特性，则会被跳过。

       传递目标选择标志将仅检查指定的目标。

       请注意，--bin、--example、--test 和 --bench 标志也支持常见的 Unix 通配符模式，
       如 *、? 和 []。但是，为避免 shell 在 Cargo 处理之前意外展开这些模式，
       你必须对每个通配符模式使用单引号或双引号。

       --lib
           检查包的库。

       --bin name…
           检查指定的二进制文件。此标志可以多次指定，并支持常见的 Unix 通配符模式。

       --bins
           检查所有二进制目标。

       --example name…
           检查指定的示例。此标志可以多次指定，并支持常见的 Unix 通配符模式。

       --examples
           检查所有示例目标。

       --test name…
           检查指定的集成测试。此标志可以多次指定，并支持常见的 Unix 通配符模式。

       --tests
           检查所有设置了 test = true 清单标志的目标。默认情况下，
           这包括作为单元测试构建的库和二进制文件，以及集成测试。
           请注意，这还将构建任何所需的依赖项，因此 lib 目标可能会被构建两次
           （一次作为单元测试，一次作为二进制文件、集成测试等的依赖项）。
           可以通过在目标清单设置中设置 test 标志来启用或禁用目标。

       --bench name…
           检查指定的基准测试。此标志可以多次指定，并支持常见的 Unix 通配符模式。

       --benches
           检查所有设置了 bench = true 清单标志的目标。默认情况下，
           这包括作为基准测试构建的库和二进制文件，以及基准目标。
           请注意，这还将构建任何所需的依赖项，因此 lib 目标可能会被构建两次
           （一次作为基准测试，一次作为二进制文件、基准测试等的依赖项）。
           可以通过在目标清单设置中设置 bench 标志来启用或禁用目标。

       --all-targets
           检查所有目标。这等同于指定 --lib --bins --tests --benches --examples。

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
           检查指定的目标架构。标志可以多次指定。默认为主机架构。
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

       -r, --release
           使用 release profile 检查优化的构件。另请参阅 --profile 选项以按名称选择特定 profile。

       --profile name
           使用给定的 profile 检查。

           作为一种特殊情况，指定 test profile 还将启用测试模式检查，
           这将启用检查测试并启用 test cfg 选项。
           有关更多详细信息，请参阅 rustc 测试
           <https://doc.rust-lang.org/rustc/tests/index.html>。

           有关 profile 的更多详细信息，请参阅参考文档
           <https://doc.rust-lang.org/cargo/reference/profiles.html>。

       --timings
           输出每次编译花费的时间信息，并跟踪随时间变化的并发信息。

           构建结束时，将在 target/cargo-timings 目录中写入一个 cargo-timing.html 文件。
           如果你想查看之前的运行结果，还会写入一个文件名中带有时间戳的额外报告。
           这些报告仅供人类阅读，不提供机器可读的时序数据。

   输出选项
       --target-dir directory
           所有生成的构件和中间文件的目录。
           也可以通过 CARGO_TARGET_DIR 环境变量或 build.target-dir 配置值
           <https://doc.rust-lang.org/cargo/reference/config.html> 指定。
           默认为工作区根目录中的 target。

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

   杂项选项
       -j N, --jobs N
           要运行的并行作业数。也可以通过 build.jobs 配置值
           <https://doc.rust-lang.org/cargo/reference/config.html> 指定。
           默认为逻辑 CPU 的数量。如果为负数，则将最大并行作业数设置为逻辑 CPU 数加上提供的值。
           如果提供字符串 default，则将值恢复为默认值。不应为 0。

       --keep-going
           尽可能构建依赖图中的多个 crate，而不是在第一个构建失败的 crate 上中止构建。

           例如，如果当前包依赖于 fails 和 works，其中 fails 构建失败，
           cargo check -j1 可能会也可能不会构建 works（取决于 Cargo 选择先运行哪个构建），
           而 cargo check -j1 --keep-going 肯定会运行两个构建，即使先运行的那个失败。

       --future-incompat-report
           显示在此命令执行期间产生的任何未来不兼容警告的未来不兼容报告

           请参阅 cargo-report(1)

环境
       有关 Cargo 读取的环境变量的详细信息，请参阅参考文档
       <https://doc.rust-lang.org/cargo/reference/environment-variables.html>。

退出状态
       o  0: Cargo 成功。

       o  101: Cargo 未能完成。

示例
       1. 检查本地包的错误：

              cargo check

       2. 检查所有目标，包括单元测试：

              cargo check --all-targets --profile=test

另请参阅
       cargo(1), cargo-build(1)
```
