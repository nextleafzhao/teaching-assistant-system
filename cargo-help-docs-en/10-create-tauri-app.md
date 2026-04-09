# `create-tauri-app` 命令帮助文档

```text
cargo create-tauri-app 4.7.0
Tauri Programme within The Commons Conservancy
Rapidly scaffold out a new tauri app project.

USAGE:
  cargo create-tauri-app [OPTIONS] [PROJECTNAME]

ARGS:
  <PROJECTNAME>                 Specify project name which is used for the directory, package.json and Cargo.toml

OPTIONS:
  -m, --manager <MANAGER>       Specify preferred package manager [cargo, pnpm, yarn, npm, deno, bun, dotnet]
  -t, --template <TEMPLATE>     Specify the UI template to use [vanilla, vanilla-ts, vue, vue-ts, svelte, svelte-ts, react, react-ts, solid, solid-ts, yew, leptos, sycamore, angular, preact, preact-ts, blazor, dioxus]
                    --identifier <identifier> Specify a unique identifier for your application
  -y, --yes                     Skip prompts and use defaults where applicable
  -f, --force                   Force create the directory even if it is not empty.
                    --tauri-version [1 | 2]   Bootstrap a project using the provided Tauri version. Defaults to the latest stable release.
  -h, --help                    Prints help information
  -v, --version                 Prints version information
```
