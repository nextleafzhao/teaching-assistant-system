## Emitter

[![logo][1]][2]

## [tauri][2]2.10.3

## Emitter

### Provided Methods

  * emit
  * emit_filter
  * emit_str
  * emit_str_filter
  * emit_str_to
  * emit_to



### Dyn Compatibility

### Implementors

## [In crate tauri][3]

[tauri][3]

# Trait Emitter Copy item path

[Source][4]
[code] 
    pub trait Emitter<R: [Runtime][5]>: ManagerBase<R> {
        // Provided methods
        fn emit<S: [Serialize][6] + [Clone][7]>(&self, event: &[str][8], payload: S) -> [Result][9]<[()][10]> { ... }
        fn emit_str(&self, event: &[str][8], payload: [String][11]) -> [Result][9]<[()][10]> { ... }
        fn emit_to<I, S>(&self, target: I, event: &[str][8], payload: S) -> [Result][9]<[()][10]>
           where I: [Into][12]<[EventTarget][13]>,
                 S: [Serialize][6] + [Clone][7] { ... }
        fn emit_str_to<I>(
            &self,
            target: I,
            event: &[str][8],
            payload: [String][11],
        ) -> [Result][9]<[()][10]>
           where I: [Into][12]<[EventTarget][13]> { ... }
        fn emit_filter<S, F>(
            &self,
            event: &[str][8],
            payload: S,
            filter: F,
        ) -> [Result][9]<[()][10]>
           where S: [Serialize][6] + [Clone][7],
                 F: [Fn][14](&[EventTarget][13]) -> [bool][15] { ... }
        fn emit_str_filter<F>(
            &self,
            event: &[str][8],
            payload: [String][11],
            filter: F,
        ) -> [Result][9]<[()][10]>
           where F: [Fn][14](&[EventTarget][13]) -> [bool][15] { ... }
    }
[/code]

Expand description

Emit events.

## Provided Methods§

[Source][16]

#### fn emit<S: [Serialize][6] \+ [Clone][7]>(&self, event: &[str][8], payload: S) -> [Result][9]<[()][10]>

Emits an event to all [targets][13].

##### §Examples
[code] 
    use tauri::Emitter;
    
    #[tauri::command]
    fn synchronize(app: tauri::AppHandle) {
      // emits the synchronized event to all webviews
      app.emit("synchronized", ());
    }
[/code]

[Source][17]

#### fn emit_str(&self, event: &[str][8], payload: [String][11]) -> [Result][9]<[()][10]>

Similar to [`Emitter::emit`][18] but the payload is json serialized.

[Source][19]

#### fn emit_to<I, S>(&self, target: I, event: &[str][8], payload: S) -> [Result][9]<[()][10]>

where I: [Into][12]<[EventTarget][13]>, S: [Serialize][6] \+ [Clone][7],

Emits an event to all [targets][13] matching the given target.

##### §Examples
[code] 
    use tauri::{Emitter, EventTarget};
    
    #[tauri::command]
    fn download(app: tauri::AppHandle) {
      for i in 1..100 {
        std::thread::sleep(std::time::Duration::from_millis(150));
        // emit a download progress event to all listeners
        app.emit_to(EventTarget::any(), "download-progress", i);
        // emit an event to listeners that used App::listen or AppHandle::listen
        app.emit_to(EventTarget::app(), "download-progress", i);
        // emit an event to any webview/window/webviewWindow matching the given label
        app.emit_to("updater", "download-progress", i); // similar to using EventTarget::labeled
        app.emit_to(EventTarget::labeled("updater"), "download-progress", i);
        // emit an event to listeners that used WebviewWindow::listen
        app.emit_to(EventTarget::webview_window("updater"), "download-progress", i);
      }
    }
[/code]

[Source][20]

#### fn emit_str_to<I>(&self, target: I, event: &[str][8], payload: [String][11]) -> [Result][9]<[()][10]>

where I: [Into][12]<[EventTarget][13]>,

Similar to [`Emitter::emit_to`][21] but the payload is json serialized.

[Source][22]

#### fn emit_filter<S, F>(&self, event: &[str][8], payload: S, filter: F) -> [Result][9]<[()][10]>

where S: [Serialize][6] \+ [Clone][7], F: [Fn][14](&[EventTarget][13]) -> [bool][15],

Emits an event to all [targets][13] based on the given filter.

##### §Examples
[code] 
    use tauri::{Emitter, EventTarget};
    
    #[tauri::command]
    fn download(app: tauri::AppHandle) {
      for i in 1..100 {
        std::thread::sleep(std::time::Duration::from_millis(150));
        // emit a download progress event to the updater window
        app.emit_filter("download-progress", i, |t| match t {
          EventTarget::WebviewWindow { label } => label == "main",
          _ => false,
        });
      }
    }
[/code]

[Source][23]

#### fn emit_str_filter<F>( &self, event: &[str][8], payload: [String][11], filter: F, ) -> [Result][9]<[()][10]>

where F: [Fn][14](&[EventTarget][13]) -> [bool][15],

Similar to [`Emitter::emit_filter`][24] but the payload is json serialized.

## Dyn Compatibility§

This trait is **not** [dyn compatible][25].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementors§

[Source][26]§

### impl<R: [Runtime][5]> [Emitter][27]<R> for [App][28]<R>

[Source][29]§

### impl<R: [Runtime][5]> [Emitter][27]<R> for [AppHandle][30]<R>

[Source][31]§

### impl<R: [Runtime][5]> [Emitter][27]<R> for [Webview][32]<R>

[Source][33]§

### impl<R: [Runtime][5]> [Emitter][27]<R> for [WebviewWindow][34]<R>

[Source][35]§

### impl<R: [Runtime][5]> [Emitter][27]<R> for [Window][36]<R>

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/lib.rs.html#939-1044
   [5]: trait.Runtime.html (trait tauri::Runtime)
   [6]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [7]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [8]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [9]: type.Result.html (type tauri::Result)
   [10]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [11]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [12]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [13]: enum.EventTarget.html (enum tauri::EventTarget)
   [14]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.Fn.html (trait core::ops::function::Fn)
   [15]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [16]: ../src/tauri/lib.rs.html#952-956
   [17]: ../src/tauri/lib.rs.html#959-963
   [18]: trait.Emitter.html#method.emit (method tauri::Emitter::emit)
   [19]: ../src/tauri/lib.rs.html#987-995
   [20]: ../src/tauri/lib.rs.html#998-1005
   [21]: trait.Emitter.html#method.emit_to (method tauri::Emitter::emit_to)
   [22]: ../src/tauri/lib.rs.html#1025-1033
   [23]: ../src/tauri/lib.rs.html#1036-1043
   [24]: trait.Emitter.html#method.emit_filter (method tauri::Emitter::emit_filter)
   [25]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [26]: ../src/tauri/app.rs.html#1114
   [27]: trait.Emitter.html (trait tauri::Emitter)
   [28]: struct.App.html (struct tauri::App)
   [29]: ../src/tauri/app.rs.html#1115
   [30]: struct.AppHandle.html (struct tauri::AppHandle)
   [31]: ../src/tauri/webview/mod.rs.html#2254
   [32]: webview/struct.Webview.html (struct tauri::webview::Webview)
   [33]: ../src/tauri/webview/webview_window.rs.html#2571
   [34]: webview/struct.WebviewWindow.html (struct tauri::webview::WebviewWindow)
   [35]: ../src/tauri/window/mod.rs.html#2310
   [36]: window/struct.Window.html (struct tauri::window::Window)

