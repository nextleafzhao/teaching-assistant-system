# `bench` 命令帮助文档

```text
CARGO-BENCH(1)

名称
       cargo-bench — 执行包的基准测试

概要
       cargo bench [选项] [基准测试名称] [-- 基准测试选项]

描述
       编译并执行基准测试。

       基准测试过滤参数 benchname 及双破折号 (--) 之后的所有参数都会传递给基准测试可执行文件，
       从而传递给 libtest（rustc 内置的单元测试和微基准测试框架）。
       如果你同时向 Cargo 和二进制文件传递参数，-- 之后的参数传递给二进制文件，
       之前的参数传递给 Cargo。有关 libtest 参数的详细信息，
       请参阅 cargo bench -- --help 的输出，
       并查看 rustc 手册中关于测试如何工作的章节
       <https://doc.rust-lang.org/rustc/tests/index.html>。

       例如，这将仅运行名为 foo 的基准测试（并跳过其他类似名称的基准测试，如 foobar）：

           cargo bench -- foo --exact

       基准测试使用 rustc 的 --test 选项构建，该选项通过将你的代码与 libtest 链接来创建特殊的可执行文件。
       该可执行文件自动运行所有使用 #[bench] 属性标注的函数。
       Cargo 向测试框架传递 --bench 标志，以告知它仅运行基准测试，
       无论测试框架是 libtest 还是自定义框架。

       可以通过在目标清单设置中设置 harness = false 来禁用 libtest 框架，
       在这种情况下，你的代码需要提供自己的 main 函数来处理基准测试的运行。

          注意：#[bench] 属性
          <https://doc.rust-lang.org/nightly/unstable-book/library-features/test.html>
          目前不稳定，仅在 nightly 通道
          <https://doc.rust-lang.org/book/appendix-07-nightly-rust.html> 上可用。
          crates.io <https://crates.io/keywords/benchmark> 上有一些包可能有助于在稳定通道上运行基准测试，
          例如 Criterion <https://crates.io/crates/criterion>。

       默认情况下，cargo bench 使用 bench profile
       <https://doc.rust-lang.org/cargo/reference/profiles.html#bench>，
       该 profile 启用优化并禁用调试信息。如果你需要调试基准测试，
       可以使用 --profile=dev 命令行选项切换到 dev profile。
       然后你可以在调试器中运行启用调试的基准测试。

   基准测试的工作目录
       每个基准测试的工作目录都设置为该基准测试所属包的根目录。
       将基准测试的工作目录设置为包的根目录，
       使得基准测试可以使用相对路径可靠地访问包的文件，
       无论从何处执行 cargo bench。

选项
   基准测试选项
       --no-run
           编译，但不运行基准测试。

       --no-fail-fast
           无论失败与否都运行所有基准测试。如果没有此标志，Cargo 将在第一个可执行文件失败后退出。
           Rust 测试框架将运行可执行文件中的所有基准测试直到完成，
           此标志仅适用于整个可执行文件。

   包选择
       默认情况下，当未给出包选择选项时，选择的包取决于所选的清单文件
       （如果未给出 --manifest-path，则基于当前工作目录）。
       如果清单是工作区的根目录，则选择工作区的默认成员，否则仅选择清单定义的包。

       可以使用根清单中的 workspace.default-members 键显式设置工作区的默认成员。
       如果未设置，虚拟工作区将包括所有工作区成员（等同于传递 --workspace），
       而非虚拟工作区将仅包括根 crate 本身。

       -p spec…, --package spec…
           仅对指定的包进行基准测试。有关 SPEC 格式，请参阅 cargo-pkgid(1)。
           此标志可以多次指定，并支持常见的 Unix 通配符模式，如 *、? 和 []。
           但是，为避免 shell 在 Cargo 处理之前意外展开这些模式，
           你必须对每个模式使用单引号或双引号。

       --workspace
           对工作区中的所有成员进行基准测试。

       --all
           --workspace 的已弃用别名。

       --exclude SPEC…
           排除指定的包。必须与 --workspace 标志结合使用。
           此标志可以多次指定，并支持常见的 Unix 通配符模式，如 *、? 和 []。
           但是，为避免 shell 在 Cargo 处理之前意外展开这些模式，
           你必须对每个模式使用单引号或双引号。

   目标选择
       当未给出目标选择选项时，cargo bench 将构建所选包的以下目标：

       o  lib — 用于与二进制文件和基准测试链接

       o  bins（仅在构建基准测试目标且所需特性可用时）

       o  lib 作为基准测试

       o  bins 作为基准测试

       o  基准测试目标

       可以通过在清单设置中为目标设置 bench 标志来更改默认行为。
       将 examples 设置为 bench = true 将构建并运行示例作为基准测试，
       用 libtest 框架替换示例的 main 函数。

       将目标设置为 bench = false 将阻止它们默认被基准测试。
       按名称选择目标的选项（如 --example foo）会忽略 bench 标志，
       并将始终对给定目标进行基准测试。

       有关每个目标设置的更多信息，请参阅配置目标
       <https://doc.rust-lang.org/cargo/reference/cargo-targets.html#configuring-a-target>。

       如果选择构建集成测试或基准测试，则会自动构建二进制目标。
       这允许集成测试执行二进制文件以测试其行为。
       构建和运行集成测试时会设置 CARGO_BIN_EXE_<name> 环境变量
       <https://doc.rust-lang.org/cargo/reference/environment-variables.html#environment-variables-cargo-sets-for-crates>，
       因此它可以使用 env 宏
       <https://doc.rust-lang.org/std/macro.env.html> 或 var 函数
       <https://doc.rust-lang.org/std/env/fn.var.html> 定位可执行文件。

       传递目标选择标志将仅对指定的目标进行基准测试。

       请注意，--bin、--example、--test 和 --bench 标志也支持常见的 Unix 通配符模式，
       如 *、? 和 []。但是，为避免 shell 在 Cargo 处理之前意外展开这些模式，
       你必须对每个通配符模式使用单引号或双引号。

       --lib
           对包的库进行基准测试。

       --bin name…
           对指定的二进制文件进行基准测试。此标志可以多次指定，并支持常见的 Unix 通配符模式。

       --bins
           对所有二进制目标进行基准测试。

       --example name…
           对指定的示例进行基准测试。此标志可以多次指定，并支持常见的 Unix 通配符模式。

       --examples
           对所有示例目标进行基准测试。

       --test name…
           对指定的集成测试进行基准测试。此标志可以多次指定，并支持常见的 Unix 通配符模式。

       --tests
           对所有设置了 test = true 清单标志的目标进行基准测试。默认情况下，
           这包括作为单元测试构建的库和二进制文件，以及集成测试。
           请注意，这还将构建任何所需的依赖项，因此 lib 目标可能会被构建两次
           （一次作为单元测试，一次作为二进制文件、集成测试等的依赖项）。
           可以通过在目标清单设置中设置 test 标志来启用或禁用目标。

       --bench name…
           对指定的基准测试进行基准测试。此标志可以多次指定，并支持常见的 Unix 通配符模式。

       --benches
           对所有设置了 bench = true 清单标志的目标进行基准测试。默认情况下，
           这包括作为基准测试构建的库和二进制文件，以及基准目标。
           请注意，这还将构建任何所需的依赖项，因此 lib 目标可能会被构建两次
           （一次作为基准测试，一次作为二进制文件、基准测试等的依赖项）。
           可以通过在目标清单设置中设置 bench 标志来启用或禁用目标。

       --all-targets
           对所有目标进行基准测试。这等同于指定 --lib --bins --tests --benches --examples。

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
           为指定的目标架构进行基准测试。标志可以多次指定。默认为主机架构。
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

       --profile name
           使用给定的 profile 进行基准测试。有关 profile 的更多详细信息，请参阅参考文档
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
       默认情况下，Rust 测试框架隐藏基准测试执行的输出，以保持结果可读。
       可以通过向基准测试可执行文件传递 --no-capture 来恢复基准测试输出（例如，用于调试）：

           cargo bench -- --no-capture

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
       --jobs 参数影响基准测试可执行文件的构建，但不影响运行基准测试时使用的线程数。
       Rust 测试框架在单线程中串行运行基准测试。

       -j N, --jobs N
           要运行的并行作业数。也可以通过 build.jobs 配置值
           <https://doc.rust-lang.org/cargo/reference/config.html> 指定。
           默认为逻辑 CPU 的数量。如果为负数，则将最大并行作业数设置为逻辑 CPU 数加上提供的值。
           如果提供字符串 default，则将值恢复为默认值。不应为 0。

       虽然 cargo bench 涉及编译，但它不提供 --keep-going 标志。
       使用 --no-fail-fast 可以运行尽可能多的基准测试，而不会在第一次失败时停止。
       要"编译"尽可能多的基准测试，使用 --benches 分别构建基准测试二进制文件。例如：

           cargo build --benches --release --keep-going
           cargo bench --no-fail-fast

环境
       有关 Cargo 读取的环境变量的详细信息，请参阅参考文档
       <https://doc.rust-lang.org/cargo/reference/environment-variables.html>。

退出状态
       o  0: Cargo 成功。

       o  101: Cargo 未能完成。

示例
       1. 构建并执行当前包的所有基准测试：

              cargo bench

       2. 在特定基准测试目标中运行特定的基准测试：

              cargo bench --bench bench_name -- modname::some_benchmark

另请参阅
       cargo(1), cargo-test(1)
```
