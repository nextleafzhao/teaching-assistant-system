## InvokeHandler

[![logo][1]][2]

## [tauri][2]2.10.3

## [In tauri::ipc][3]

[tauri][4]::[ipc][3]

# Type Alias InvokeHandler Copy item path

[Source][5]
[code] 
    pub type InvokeHandler<R> = dyn [Fn][6]([Invoke][7]<R>) -> [bool][8] + [Send][9] + [Sync][10] + 'static;
[/code]

Expand description

A closure that is run every time Tauri receives a message it doesn’t explicitly handle.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/ipc/mod.rs.html#43
   [6]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.Fn.html (trait core::ops::function::Fn)
   [7]: struct.Invoke.html (struct tauri::ipc::Invoke)
   [8]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [9]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [10]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)

