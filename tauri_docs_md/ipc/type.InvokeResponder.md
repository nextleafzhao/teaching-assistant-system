## InvokeResponder

[![logo][1]][2]

## [tauri][2]2.10.3

## [In tauri::ipc][3]

[tauri][4]::[ipc][3]

# Type Alias InvokeResponder Copy item path

[Source][5]
[code] 
    pub type InvokeResponder<R> = dyn [Fn][6](&[Webview][7]<R>, &[str][8], &[InvokeResponse][9], [CallbackFn][10], [CallbackFn][10]) + [Send][11] + [Sync][12] + 'static;
[/code]

Expand description

A closure that is responsible for respond a JS message.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/ipc/mod.rs.html#46-47
   [6]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.Fn.html (trait core::ops::function::Fn)
   [7]: ../webview/struct.Webview.html (struct tauri::webview::Webview)
   [8]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [9]: enum.InvokeResponse.html (enum tauri::ipc::InvokeResponse)
   [10]: struct.CallbackFn.html (struct tauri::ipc::CallbackFn)
   [11]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [12]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)

