## SyncTask

[![logo][1]][2]

## [tauri][2]2.10.3

## SyncTask

### Aliased Type

## [In crate tauri][3]

[tauri][3]

# Type Alias SyncTask Copy item path

[Source][4]
[code] 
    pub type SyncTask = [Box][5]<dyn [FnOnce][6]() + [Send][7]>;
[/code]

Expand description

A task to run on the main thread.

## Aliased Type§
[code]
    pub struct SyncTask(/* private fields */);
[/code]

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/lib.rs.html#193
   [5]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [6]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [7]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)

