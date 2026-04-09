# `metadata` 命令帮助文档

```text
CARGO-METADATA(1)

名称
       cargo-metadata — 当前包的机器可读元数据

概要
       cargo metadata [选项]

描述
       向 stdout 输出 JSON，包含当前包的工作区成员和已解析依赖的信息。

       输出格式在未来版本的 Cargo 中可能会发生变化。
       建议包含 --format-version 标志以面向未来编写代码，
       并确保输出采用你期望的格式。有关期望的更多信息，请参阅"兼容性"。

       有关读取元数据的 Rust API，请参阅 cargo_metadata crate
       <https://crates.io/crates/cargo_metadata>。

输出格式
   兼容性
       在同一输出格式版本内，兼容性保持不变，除了一些情况。
       以下是不视为不兼容的更改的非详尽列表：

       o  添加新字段 — 需要时将添加新字段。保留这有助于 Cargo 不断发展，
          而无需过于频繁地提升格式版本。

       o  为类枚举字段添加新值 — 与添加新字段相同。
          它保持元数据不断发展而不停滞。

       o  更改不透明表示 — 某些字段的内部表示是实现细节。
          例如，与"Source ID"相关的字段被视为不透明标识符，
          用于区分包或来源。除非另有说明，否则消费者不应依赖这些表示。

   JSON 格式
       JSON 输出具有以下格式：

           {
               /* 工作区中的所有包的数组。
                  除非使用 --no-deps，否则还包括所有启用特性的依赖。
               */
               "packages": [
                   {
                       /* 包的名称。*/
                       "name": "my-package",
                       /* 包的版本。*/
                       "version": "0.1.0",
                       /* 用于在文档中引用包以及作为许多命令的 `--package` 参数的包 ID */
                       "id": "file:///path/to/my-package#0.1.0",
                       /* 清单中的许可证值，或 null。*/
                       "license": "MIT/Apache-2.0",
                       /* 清单中的 license-file 值，或 null。*/
                       "license_file": "LICENSE",
                       /* 清单中的描述值，或 null。*/
                       "description": "Package description.",
                       /* 包的来源 ID，一个"不透明"标识符，表示包的来源。
                          有关稳定性保证，请参阅上面的"兼容性"。

                          对于路径依赖和工作区成员，此为 null。

                          对于其他依赖，它是一个字符串，格式为：
                          - 基于注册表的依赖为 "registry+URL"。
                            示例："registry+https://github.com/rust-lang/crates.io-index"
                          - 基于 git 的依赖为 "git+URL"。
                            示例："git+https://github.com/rust-lang/cargo?rev=5e85ba14aaa20f8133863373404cb0af69eeef2c#5e85ba14aaa20f8133863373404cb0af69eeef2c"
                          - 来自稀疏注册表的依赖为 "sparse+URL"
                            示例："sparse+https://my-sparse-registry.org"

                          `+` 之后的值未明确定义，可能会在 Cargo 版本之间更改，
                          并且可能不直接与配置文件中的注册表定义等其他内容相关。
                          未来可能会添加新的来源类型，这些类型将具有不同的 `+` 前缀标识符。
                       */
                       "source": null,
                       /* 包的清单中声明的依赖数组。*/
                       "dependencies": [
                           {
                               /* 依赖的名称。*/
                               "name": "bitflags",
                               /* 依赖的来源 ID。可能为 null，请参阅包来源的描述。*/
                               "source": "registry+https://github.com/rust-lang/crates.io-index",
                               /* 依赖的版本要求。
                                  没有版本要求的依赖的值为 "*"。
                               */
                               "req": "^1.0",
                               /* 依赖的种类。
                                  "dev"、"build" 或 null 表示正常依赖。
                               */
                               "kind": null,
                               /* 如果依赖被重命名，这是依赖的新名称（字符串）。
                                  如果未重命名，则为 null。
                               */
                               "rename": null,
                               /* 这是否是可选依赖的布尔值。*/
                               "optional": false,
                               /* 是否启用默认特性的布尔值。*/
                               "uses_default_features": true,
                               /* 启用的特性数组。*/
                               "features": [],
                               /* 依赖的目标平台。
                                  如果不是目标依赖，则为 null。
                               */
                               "target": "cfg(windows)",
                               /* 本地路径依赖的文件系统路径。
                                  如果不是路径依赖，则不存在。
                               */
                               "path": "/path/to/dep",
                               /* 此依赖来自的注册表的 URL 字符串。
                                  如果未指定或为 null，则依赖来自默认注册表（crates.io）。
                               */
                               "registry": null,
                               /* （不稳定）这是否是公共依赖的布尔标志。
                                  仅在启用 `-Zpublic-dependency` 时存在此字段。
                               */
                               "public": false
                           }
                       ],
                       /* Cargo 目标的数组。*/
                       "targets": [
                           {
                               /* 目标种类的数组。
                                  - lib 目标列出清单中的 `crate-type` 值，
                                    如 "lib"、"rlib"、"dylib"、"proc-macro" 等。（默认 ["lib"]）
                                  - binary 为 ["bin"]
                                  - example 为 ["example"]
                                  - integration test 为 ["test"]
                                  - benchmark 为 ["bench"]
                                  - build script 为 ["custom-build"]
                               */
                               "kind": [
                                   "bin"
                               ],
                               /* crate 类型的数组。
                                  - lib 和 example 库列出清单中的 `crate-type` 值，
                                    如 "lib"、"rlib"、"dylib"、"proc-macro" 等。（默认 ["lib"]）
                                  - 所有其他目标种类为 ["bin"]
                               */
                               "crate_types": [
                                   "bin"
                               ],
                               /* 目标的名称。
                                  对于 lib 目标，破折号将替换为下划线。
                               */
                               "name": "my-package",
                               /* 目标根源文件的绝对路径。*/
                               "src_path": "/path/to/my-package/src/main.rs",
                               /* 目标的 Rust 版本。
                                  默认为包的版本。
                               */
                               "edition": "2018",
                               /* 所需特性的数组。
                                  如果未设置所需特性，则不包含此属性。
                               */
                               "required-features": ["feat1"],
                               /* `cargo doc` 是否应记录此目标。*/
                               "doc": true,
                               /* 此目标是否启用了 doc 测试，并且该目标与 doc 测试兼容。*/
                               "doctest": false,
                               /* 此目标是否应使用 `--test` 构建和运行*/
                               "test": true
                           }
                       ],
                       /* 为包定义的特性集。
                          每个特性映射到它启用的特性或依赖的数组。
                       */
                       "features": {
                           "default": [
                               "feat1"
                           ],
                           "feat1": [],
                           "feat2": []
                       },
                       /* 此包清单的绝对路径。*/
                       "manifest_path": "/path/to/my-package/Cargo.toml",
                       /* 包元数据。
                          如果未指定元数据，则为 null。
                       */
                       "metadata": {
                           "docs": {
                               "rs": {
                                   "all-features": true
                               }
                           }
                       },
                       /* 此包可以发布到的注册表列表。
                          如果为 null，则发布不受限制，如果是空数组，则禁止发布。*/
                       "publish": [
                           "crates-io"
                       ],
                       /* 清单中的作者数组。
                          如果未指定作者，则为空数组。
                       */
                       "authors": [
                           "Jane Doe <user@example.com>"
                       ],
                       /* 清单中的类别数组。*/
                       "categories": [
                           "command-line-utilities"
                       ],
                       /* cargo run 选择的默认二进制文件的可选字符串。*/
                       "default_run": null,
                       /* 最低支持的 rust 版本的可选字符串*/
                       "rust_version": "1.56",
                       /* 清单中的关键字数组。*/
                       "keywords": [
                           "cli"
                       ],
                       /* 清单中的 readme 值，如果未指定则为 null。*/
                       "readme": "README.md",
                       /* 清单中的 repository 值，如果未指定则为 null。*/
                       "repository": "https://github.com/rust-lang/cargo",
                       /* 清单中的 homepage 值，如果未指定则为 null。*/
                       "homepage": "https://rust-lang.org",
                       /* 清单中的 documentation 值，如果未指定则为 null。*/
                       "documentation": "https://doc.rust-lang.org/stable/std",
                       /* 包的默认版本。
                          请注意，各个目标可能具有不同的版本。
                       */
                       "edition": "2018",
                       /* 包正在链接的本地库的名称的可选字符串。*/
                       "links": null,
                   }
               ],
               /* 工作区成员的数组。
                  每个条目是包的包 ID。
               */
               "workspace_members": [
                   "file:///path/to/my-package#0.1.0",
               ],
               /* 工作区默认成员的数组。
                  每个条目是包的包 ID。
               */
               "workspace_default_members": [
                   "file:///path/to/my-package#0.1.0",
               ],
               // 整个工作区的已解析依赖图。
               // 启用的特性基于"当前"包的启用特性。
               // 未列出未激活的可选依赖。
               //
               // 如果指定了 --no-deps，则为 null。
               //
               // 默认情况下，这包括所有目标平台的所有依赖。
               // 可以使用 `--filter-platform` 标志缩小到特定目标三元组。
               "resolve": {
                   /* 依赖图中的节点数组。
                      每个节点是一个包。
                   */
                   "nodes": [
                       {
                           /* 此节点的包 ID。*/
                           "id": "file:///path/to/my-package#0.1.0",
                           /* 此包的依赖，包 ID 数组。*/
                           "dependencies": [
                               "https://github.com/rust-lang/crates.io-index#bitflags@1.0.4"
                           ],
                           /* 此包的依赖。这是"dependencies"的替代方案，
                              包含额外信息。特别是，这处理了重命名的依赖。
                           */
                           "deps": [
                               {
                                   /* 依赖库目标的名称。
                                      如果这是重命名的依赖，这是新名称。
                                   */
                                   "name": "bitflags",
                                   /* 依赖的包 ID。*/
                                   "pkg": "https://github.com/rust-lang/crates.io-index#bitflags@1.0.4"
                                   /* 依赖种类的数组。在 Cargo 1.40 中添加。*/
                                   "dep_kinds": [
                                       {
                                           /* 依赖的种类。
                                              "dev"、"build" 或 null 表示正常依赖。
                                           */
                                           "kind": null,
                                           /* 依赖的目标平台。
                                              如果不是目标依赖，则为 null。
                                           */
                                           "target": "cfg(windows)"
                                       }
                                   ]
                               }
                           ],
                           /* 此包上启用的特性数组。*/
                           "features": [
                               "default"
                           ]
                       }
                   ],
                   /* 当前工作目录中的包（如果未给出 --manifest-path）。
                      如果有虚拟工作区，则为 null。否则它是包的包 ID。
                   */
                   "root": "file:///path/to/my-package#0.1.0",
               },
               /* Cargo 放置其输出的目标目录的绝对路径。*/
               "target_directory": "/path/to/my-package/target",
               /* Cargo 放置中间构建构件的构建目录的绝对路径。（不稳定）*/
               "build_directory": "/path/to/my-package/build-dir",
               /* 此元数据结构的架构版本。
                  如果进行了不兼容的更改，这将更改。
               */
               "version": 1,
               /* 工作区根的绝对路径。*/
               "workspace_root": "/path/to/my-package"
               /* 工作区元数据。
                  如果未指定元数据，则为 null。*/
               "metadata": {
                   "docs": {
                       "rs": {
                           "all-features": true
                       }
                   }
               }
           }

       注意：

       o  有关"id"字段语法，请参阅参考文档中的包 ID 规范
          <https://doc.rust-lang.org/cargo/reference/pkgid-spec.html>。

选项
   输出选项
       --no-deps
           仅输出有关工作区成员的信息，不获取依赖。

       --format-version version
           指定要使用的输出格式的版本。目前 1 是唯一可能的值。

       --filter-platform triple
           这过滤解析输出，仅包括给定目标三元组的依赖
           <https://doc.rust-lang.org/cargo/appendix/glossary.html#target>。
           可以使用字面量 "host-tuple"，它将在内部替换为主机的目标。
           没有此标志时，解析包括所有目标。

           请注意，"packages"数组中列出的依赖仍包括所有依赖。
           每个包定义旨在于 Cargo.toml 中的信息的未修改副本。

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
       1. 输出有关当前包的 JSON：

              cargo metadata --format-version=1

另请参阅
       cargo(1), cargo-pkgid(1), 包 ID 规范
       <https://doc.rust-lang.org/cargo/reference/pkgid-spec.html>, JSON 消息
       <https://doc.rust-lang.org/cargo/reference/external-tools.html#json-messages>
```
