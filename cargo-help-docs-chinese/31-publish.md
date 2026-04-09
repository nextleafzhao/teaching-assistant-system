# `publish` 命令帮助文档

```text
CARGO-PUBLISH(1)

名称
       cargo-publish — 将包上传到注册表

概要
       cargo publish [选项]

描述
       此命令将在当前目录中创建一个可分发的压缩 .crate 文件，包含包的源代码，并将其上传到注册表。
       默认注册表是 <https://crates.io>。这会执行以下步骤：

       1. 执行一些检查，包括：
          o  检查清单中的 package.publish 键，以限制你可以上传到的注册表。

       2. 按照 cargo-package(1) 中的步骤创建 .crate 文件。

       3. 将 crate 上传到注册表。服务器将对 crate 执行额外检查。

       4. 客户端将轮询等待包出现在索引中，可能会超时。
          在这种情况下，你需要手动检查完成情况。此超时不影响上传。

       此命令要求你使用 cargo-login(1) 或 registry.token 的环境变量
       <https://doc.rust-lang.org/cargo/reference/config.html#registrytoken> 和
       registries.<name>.token
       <https://doc.rust-lang.org/cargo/reference/config.html#registriesnametoken> 配置字段进行身份验证。

       有关打包和发布的更多详细信息，请参阅参考文档
       <https://doc.rust-lang.org/cargo/reference/publishing.html>。

选项
   发布选项
       --dry-run
           执行所有检查而不上传。

       --no-verify
           不要通过构建来验证内容。

       --allow-dirty
           允许打包具有未提交 VCS 更改的工作目录。

       --index index
           注册表索引的 URL。

       --registry registry
           要发布到的注册表名称。注册表在 Cargo 配置文件
           <https://doc.rust-lang.org/cargo/reference/config.html> 中定义。
           如果未指定，且 Cargo.toml 中有 package.publish
           <https://doc.rust-lang.org/cargo/reference/manifest.html#the-publish-field> 字段且只有一个注册表，
           则将发布到该注册表。否则将使用默认注册表，
           由 registry.default <https://doc.rust-lang.org/cargo/reference/config.html#registrydefault> 配置键定义，默认为 crates-io。

   包选择
       默认情况下，当未给出包选择选项时，选择的包取决于所选的清单文件
       （如果未给出 --manifest-path，则基于当前工作目录）。
       如果清单是工作区的根目录，则选择工作区的默认成员，否则仅选择清单定义的包。

       可以使用根清单中的 workspace.default-members 键显式设置工作区的默认成员。
       如果未设置，虚拟工作区将包括所有工作区成员（等同于传递 --workspace），
       而非虚拟工作区将仅包括根 crate 本身。

       -p spec…, --package spec…
           仅发布指定的包。有关 SPEC 格式，请参阅 cargo-pkgid(1)。
           此标志可以多次指定，并支持常见的 Unix 通配符模式，如 *、? 和 []。
           但是，为避免 shell 在 Cargo 处理之前意外展开这些模式，
           你必须对每个模式使用单引号或双引号。

       --workspace
           发布工作区中的所有成员。

       --all
           --workspace 的已弃用别名。

       --exclude SPEC…
           排除指定的包。必须与 --workspace 标志结合使用。
           此标志可以多次指定，并支持常见的 Unix 通配符模式，如 *、? 和 []。
           但是，为避免 shell 在 Cargo 处理之前意外展开这些模式，
           你必须对每个模式使用单引号或双引号。

   编译选项
       --target triple
           为指定的目标架构发布。标志可以多次指定。默认为主机架构。
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
           默认为工作区根目录中的 target。

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

   杂项选项
       -j N, --jobs N
           要运行的并行作业数。也可以通过 build.jobs 配置值
           <https://doc.rust-lang.org/cargo/reference/config.html> 指定。
           默认为逻辑 CPU 的数量。如果为负数，则将最大并行作业数设置为逻辑 CPU 数加上提供的值。
           如果提供字符串 default，则将值恢复为默认值。不应为 0。

       --keep-going
           尽可能构建依赖图中的多个 crate，而不是在第一个构建失败的 crate 上中止构建。

           例如，如果当前包依赖于 fails 和 works，其中 fails 构建失败，
           cargo publish -j1 可能会也可能不会构建 works（取决于 Cargo 选择先运行哪个构建），
           而 cargo publish -j1 --keep-going 肯定会运行两个构建，即使先运行的那个失败。

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
       1. 发布当前包：

              cargo publish

另请参阅
       cargo(1), cargo-package(1), cargo-login(1)
```
