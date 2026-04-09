# Cargo 主帮助文档


```text
Rust 的包管理器

用法: cargo [+toolchain] [选项] [命令]
       cargo [+toolchain] [选项] -Zscript <MANIFEST_RS> [参数]...

选项:
  -V, --version                  打印版本信息并退出
      --list                     列出已安装的命令
      --explain <CODE>           提供 rustc 错误消息的详细解释
  -v, --verbose...               使用详细输出 (-vv 非常详细/build.rs 输出)
  -q, --quiet                    不打印 cargo 日志消息
      --color <WHEN>             着色 [可能值: auto, always, never]
  -C <DIRECTORY>                 在执行任何操作前切换到 DIRECTORY (仅 nightly)
      --locked                   断言 `Cargo.lock` 将保持不变
      --offline                  在不访问网络的情况下运行
      --frozen                   等同于同时指定 --locked 和 --offline
      --config <KEY=VALUE|PATH>  覆盖配置值
  -Z <FLAG>                      不稳定 (仅 nightly) 标志，详见 'cargo -Z help'
  -h, --help                     打印帮助

命令:
    build, b    编译当前包
    check, c    分析当前包并报告错误，但不生成目标文件
    clean       删除 target 目录
    doc, d      构建此包及其依赖的文档
    new         创建新的 cargo 包
    init        在现有目录中创建新的 cargo 包
    add         向清单文件添加依赖
    remove      从清单文件中删除依赖
    run, r      运行本地包的二进制文件或示例
    test, t     运行测试
    bench       运行基准测试
    update      更新 Cargo.lock 中列出的依赖
    search      在注册表中搜索 crate
    publish     打包并上传此包到注册表
    install     安装 Rust 二进制文件
    uninstall   卸载 Rust 二进制文件
    ...         使用 --list 查看所有命令

查看 'cargo help <command>' 获取特定命令的更多信息。
```
