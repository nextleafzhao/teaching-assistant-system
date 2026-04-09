## generate_context

[![logo][1]][2]

## [tauri][2]2.10.3

## generate_context

### Sections

  * Custom Config Path
  * Note
  * Stability



## [In crate tauri][3]

[tauri][3]

# Macro generate_context Copy item path
[code]
    generate_context!() { /* proc-macro */ }
[/code]

Expand description

Reads the config file at compile time and generates a [`Context`][4] based on its content.

The default config file path is a `tauri.conf.json` file inside the Cargo manifest directory of the crate being built.

## §Custom Config Path

You may pass a string literal to this macro to specify a custom path for the Tauri config file. If the path is relative, it will be search for relative to the Cargo manifest of the compiling crate.

## §Note

This macro should not be called if you are using [`tauri-build`][5] to generate the context from inside your build script as it will just cause excess computations that will be discarded. Use either the [`tauri-build`][5] method or this macro - not both.

Reads a Tauri config file and generates a `::tauri::Context` based on the content.

## §Stability

The output of this macro is managed internally by Tauri, and should not be accessed directly on normal applications. It may have breaking changes in the future.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: struct.Context.html (struct tauri::Context)
   [5]: https://docs.rs/tauri-build

