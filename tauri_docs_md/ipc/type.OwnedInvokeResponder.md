## OwnedInvokeResponder

[![logo][1]][2]

## [tauri][2]2.10.3

## [In tauri::ipc][3]

[tauri][4]::[ipc][3]

# Type Alias OwnedInvokeResponder Copy item path

[Source][5]
[code] 
    pub type OwnedInvokeResponder<R> = dyn [FnOnce][6]([Webview][7]<R>, [String][8], [InvokeResponse][9], [CallbackFn][10], [CallbackFn][10]) + [Send][11] + 'static;
[/code]

Expand description

Similar to [`InvokeResponder`][12] but taking owned arguments.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/ipc/mod.rs.html#49-50
   [6]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [7]: ../webview/struct.Webview.html (struct tauri::webview::Webview)
   [8]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [9]: enum.InvokeResponse.html (enum tauri::ipc::InvokeResponse)
   [10]: struct.CallbackFn.html (struct tauri::ipc::CallbackFn)
   [11]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [12]: type.InvokeResponder.html (type tauri::ipc::InvokeResponder)

