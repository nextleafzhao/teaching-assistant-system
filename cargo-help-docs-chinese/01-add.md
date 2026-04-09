# `add` 命令帮助文档

```text
CARGO-ADD(1)

名称
       cargo-add — 向 Cargo.toml 清单文件添加依赖

概要
       cargo add [选项] crate…
       cargo add [选项] --path 路径
       cargo add [选项] --git url [crate…]

描述
       此命令可以添加或修改依赖。

       依赖的来源可以通过以下方式指定：

       o  crate@version: 从注册表获取，版本约束为 "version"

       o  --path 路径: 从指定路径获取

       o  --git url: 从 git 仓库拉取

       如果未指定来源，将尽最大努力选择一个，包括：

       o  其他表中的现有依赖（如 dev-dependencies）

       o  工作区成员

       o  注册表中的最新版本

       当你添加已存在的包时，现有条目将使用指定的标志进行更新。

       成功调用后，命令的输出中将列出指定依赖的启用 (+) 和禁用 (-) 特性
       <https://doc.rust-lang.org/cargo/reference/features.html>。

选项
   来源选项
       --git url
           Git URL，用于从指定的 git 仓库添加 crate
           <https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html#specifying-dependencies-from-git-repositories>。

       --branch branch
           从 git 添加时使用的分支。

       --tag tag
           从 git 添加时使用的标签。

       --rev sha
           从 git 添加时使用的特定提交。

       --path 路径
           文件系统路径
           <https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html#specifying-path-dependencies>
           指向要添加的本地 crate。

       --base base
           添加本地 crate 时使用的路径基础
           <https://doc.rust-lang.org/cargo/reference/unstable.html#path-bases>。

           不稳定 (仅 nightly)
           <https://doc.rust-lang.org/cargo/reference/unstable.html#path-bases>

       --registry registry
           要使用的注册表名称。注册表在 Cargo 配置文件
           <https://doc.rust-lang.org/cargo/reference/config.html> 中定义。如果未指定，
           则使用默认注册表，由 registry.default 配置键定义，默认为 crates-io。

   部分选项
       --dev
           添加为开发依赖
           <https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html#development-dependencies>。

       --build
           添加为构建依赖
           <https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html#build-dependencies>。

       --target target
           为给定的目标平台添加为依赖
           <https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html#platform-specific-dependencies>。

           为避免意外的 shell 展开，你可以对每个目标使用引号，例如 --target 'cfg(unix)'。

   依赖选项
       --dry-run
           不实际写入清单

       --rename name
           重命名
           <https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html#renaming-dependencies-in-cargotoml>
           依赖。

       --optional
           将依赖标记为可选
           <https://doc.rust-lang.org/cargo/reference/features.html#optional-dependencies>。

       --no-optional
           将依赖标记为必需
           <https://doc.rust-lang.org/cargo/reference/features.html#optional-dependencies>。

       --public
           将依赖标记为公共。

           该依赖可以在你的库的公共 API 中被引用。

           不稳定 (仅 nightly)
           <https://doc.rust-lang.org/cargo/reference/unstable.html#public-dependency>

       --no-public
           将依赖标记为私有。

           虽然你可以在实现中使用该 crate，但不能在你的公共 API 中引用它。

           不稳定 (仅 nightly)
           <https://doc.rust-lang.org/cargo/reference/unstable.html#public-dependency>

       --no-default-features
           禁用默认特性
           <https://doc.rust-lang.org/cargo/reference/features.html#dependency-features>。

       --default-features
           重新启用默认特性
           <https://doc.rust-lang.org/cargo/reference/features.html#dependency-features>。

       -F 特性, --features 特性
           空格或逗号分隔的要激活的特性列表
           <https://doc.rust-lang.org/cargo/reference/features.html#dependency-features>。
           当添加多个 crate 时，可以使用 package-name/feature-name 语法为特定 crate 启用特性。
           此标志可以多次指定，这将启用所有指定的特性。

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

       -p spec, --package spec
           仅向指定的包添加依赖。

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
       1. 添加 regex 作为依赖

              cargo add regex

       2. 添加 trybuild 作为开发依赖

              cargo add --dev trybuild

       3. 添加较旧版本的 nom 作为依赖

              cargo add nom@5

       4. 添加对使用 derive 序列化数据结构到 json 的支持

              cargo add serde serde_json -F serde/derive

       5. 在 cfg(windows) 上添加 windows 作为平台特定依赖

              cargo add windows --target 'cfg(windows)'

另请参阅
       cargo(1), cargo-remove(1)
```
