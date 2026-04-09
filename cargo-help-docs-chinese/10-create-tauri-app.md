# `create-tauri-app` 命令帮助文档

```text
cargo create-tauri-app 4.7.0
Tauri Programme within The Commons Conservancy
快速搭建新的 tauri 应用项目。

用法:
  cargo create-tauri-app [选项] [项目名称]

参数:
  <项目名称>                 指定项目名称，用于目录、package.json 和 Cargo.toml

选项:
  -m, --manager <管理器>       指定首选包管理器 [cargo, pnpm, yarn, npm, deno, bun, dotnet]
  -t, --template <模板>        指定要使用的 UI 模板 [vanilla, vanilla-ts, vue, vue-ts, svelte, svelte-ts, react, react-ts, solid, solid-ts, yew, leptos, sycamore, angular, preact, preact-ts, blazor, dioxus]
                    --identifier <标识符> 为你的应用指定唯一标识符
  -y, --yes                     跳过提示并使用默认值
  -f, --force                   强制创建目录，即使目录不为空。
                    --tauri-version [1 | 2]   使用指定的 Tauri 版本引导项目。默认为最新的稳定版本。
  -h, --help                    打印帮助信息
  -v, --version                 打印版本信息
```
