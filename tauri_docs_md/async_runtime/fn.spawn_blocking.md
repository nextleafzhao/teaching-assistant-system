## spawn_blocking

[![logo][1]][2]

## [tauri][2]2.10.3

## [In tauri::async_runtime][3]

[tauri][4]::[async_runtime][3]

# Function spawn_blocking Copy item path

[Source][5]
[code] 
    pub fn spawn_blocking<F, R>(func: F) -> [JoinHandle][6]<R> ⓘ
    
    where
        F: [FnOnce][7]() -> R + [Send][8] + 'static,
        R: [Send][8] + 'static,
[/code]

Expand description

Runs the provided function on an executor dedicated to blocking operations.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/async_runtime.rs.html#278-285
   [6]: enum.JoinHandle.html (enum tauri::async_runtime::JoinHandle)
   [7]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [8]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)

