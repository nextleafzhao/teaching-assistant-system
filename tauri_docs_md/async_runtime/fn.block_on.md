## block_on

[![logo][1]][2]

## [tauri][2]2.10.3

## [In tauri::async_runtime][3]

[tauri][4]::[async_runtime][3]

# Function block_on Copy item path

[Source][5]
[code] 
    pub fn block_on<F: [Future][6]>(task: F) -> F::[Output][7]
[/code]

Expand description

Runs a future to completion on runtime.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/async_runtime.rs.html#262-265
   [6]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [7]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html#associatedtype.Output (type core::future::future::Future::Output)

