## generate_handler

[![logo][1]][2]

## [tauri][2]2.10.3

## generate_handler

### Sections

  * Examples
  * Stability



## [In crate tauri][3]

[tauri][3]

# Macro generate_handler Copy item path
[code]
    generate_handler!() { /* proc-macro */ }
[/code]

Expand description

Accepts a list of command functions. Creates a handler that allows commands to be called from JS with invoke().

You can optionally annotate the commands with a inner attribute tag `#![plugin(your_plugin_name)]` for `build > removeUnusedCommands` to work for plugins not defined in a standalone crate like `tauri-plugin-fs`

## §Examples

ⓘ
[code]
    use tauri_macros::{command, generate_handler};
    #[command]
    fn command_one() {
      println!("command one called");
    }
    #[command]
    fn command_two() {
      println!("command two called");
    }
    fn main() {
      let _handler = generate_handler![command_one, command_two];
    }
[/code]

## §Stability

The output of this macro is managed internally by Tauri, and should not be accessed directly on normal applications. It may have breaking changes in the future.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html

