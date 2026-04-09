## Listener

[![logo][1]][2]

## [tauri][2]2.10.3

## Listener

### Required Methods

  * listen
  * once
  * unlisten



### Provided Methods

  * listen_any
  * once_any



### Dyn Compatibility

### Implementors

## [In crate tauri][3]

[tauri][3]

# Trait Listener Copy item path

[Source][4]
[code] 
    pub trait Listener<R: [Runtime][5]>: ManagerBase<R> {
        // Required methods
        fn listen<F>(&self, event: impl [Into][6]<[String][7]>, handler: F) -> [EventId][8]
           where F: [Fn][9]([Event][10]) + [Send][11] + 'static;
        fn once<F>(&self, event: impl [Into][6]<[String][7]>, handler: F) -> [EventId][8]
           where F: [FnOnce][12]([Event][10]) + [Send][11] + 'static;
        fn unlisten(&self, id: [EventId][8]);
    
        // Provided methods
        fn listen_any<F>(&self, event: impl [Into][6]<[String][7]>, handler: F) -> [EventId][8]
           where F: [Fn][9]([Event][10]) + [Send][11] + 'static { ... }
        fn once_any<F>(&self, event: impl [Into][6]<[String][7]>, handler: F) -> [EventId][8]
           where F: [FnOnce][12]([Event][10]) + [Send][11] + 'static { ... }
    }
[/code]

Expand description

Listen to events.

## Required Methods§

[Source][13]

#### fn listen<F>(&self, event: impl [Into][6]<[String][7]>, handler: F) -> [EventId][8]

where F: [Fn][9]([Event][10]) + [Send][11] \+ 'static,

Listen to an emitted event on this manager.

##### §Examples
[code] 
    use tauri::{Manager, Listener, Emitter};
    
    #[tauri::command]
    fn synchronize(window: tauri::Window) {
      // emits the synchronized event to all windows
      window.emit("synchronized", ());
    }
    
    tauri::Builder::default()
      .setup(|app| {
        app.listen("synchronized", |event| {
          println!("app is in sync");
        });
        Ok(())
      })
      .invoke_handler(tauri::generate_handler![synchronize]);
[/code]

##### §Panics

Will panic if `event` contains characters other than alphanumeric, `-`, `/`, `:` and `_`

[Source][14]

#### fn once<F>(&self, event: impl [Into][6]<[String][7]>, handler: F) -> [EventId][8]

where F: [FnOnce][12]([Event][10]) + [Send][11] \+ 'static,

Listen to an event on this manager only once.

See [`Self::listen`][15] for more information.

##### §Panics

Will panic if `event` contains characters other than alphanumeric, `-`, `/`, `:` and `_`

[Source][16]

#### fn unlisten(&self, id: [EventId][8])

Remove an event listener.

##### §Examples
[code] 
    use tauri::{Manager, Listener};
    
    tauri::Builder::default()
      .setup(|app| {
        let handle = app.handle().clone();
        let handler = app.listen_any("ready", move |event| {
          println!("app is ready");
    
          // we no longer need to listen to the event
          // we also could have used `app.once_global` instead
          handle.unlisten(event.id());
        });
    
        // stop listening to the event when you do not need it anymore
        app.unlisten(handler);
    
    
        Ok(())
      });
[/code]

## Provided Methods§

[Source][17]

#### fn listen_any<F>(&self, event: impl [Into][6]<[String][7]>, handler: F) -> [EventId][8]

where F: [Fn][9]([Event][10]) + [Send][11] \+ 'static,

Listen to an emitted event to any [target][18].

##### §Examples
[code] 
    use tauri::{Manager, Emitter, Listener};
    
    #[tauri::command]
    fn synchronize(window: tauri::Window) {
      // emits the synchronized event to all windows
      window.emit("synchronized", ());
    }
    
    tauri::Builder::default()
      .setup(|app| {
        app.listen_any("synchronized", |event| {
          println!("app is in sync");
        });
        Ok(())
      })
      .invoke_handler(tauri::generate_handler![synchronize]);
[/code]

##### §Panics

Will panic if `event` contains characters other than alphanumeric, `-`, `/`, `:` and `_`

[Source][19]

#### fn once_any<F>(&self, event: impl [Into][6]<[String][7]>, handler: F) -> [EventId][8]

where F: [FnOnce][12]([Event][10]) + [Send][11] \+ 'static,

Listens once to an emitted event to any [target][18] .

See [`Self::listen_any`][20] for more information.

##### §Panics

Will panic if `event` contains characters other than alphanumeric, `-`, `/`, `:` and `_`

## Dyn Compatibility§

This trait is **not** [dyn compatible][21].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementors§

[Source][22]§

### impl<R: [Runtime][5]> [Listener][23]<R> for [App][24]<R>

[Source][25]§

### impl<R: [Runtime][5]> [Listener][23]<R> for [AppHandle][26]<R>

[Source][27]§

### impl<R: [Runtime][5]> [Listener][23]<R> for [Webview][28]<R>

[Source][29]§

### impl<R: [Runtime][5]> [Listener][23]<R> for [WebviewWindow][30]<R>

[Source][31]§

### impl<R: [Runtime][5]> [Listener][23]<R> for [Window][32]<R>

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/lib.rs.html#830-936
   [5]: trait.Runtime.html (trait tauri::Runtime)
   [6]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [7]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [8]: type.EventId.html (type tauri::EventId)
   [9]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.Fn.html (trait core::ops::function::Fn)
   [10]: struct.Event.html (struct tauri::Event)
   [11]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [12]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [13]: ../src/tauri/lib.rs.html#854-856
   [14]: ../src/tauri/lib.rs.html#863-865
   [15]: trait.Listener.html#tymethod.listen (method tauri::Listener::listen)
   [16]: ../src/tauri/lib.rs.html#891
   [17]: ../src/tauri/lib.rs.html#916-922
   [18]: enum.EventTarget.html (enum tauri::EventTarget)
   [19]: ../src/tauri/lib.rs.html#929-935
   [20]: trait.Listener.html#method.listen_any (method tauri::Listener::listen_any)
   [21]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [22]: ../src/tauri/app.rs.html#1114
   [23]: trait.Listener.html (trait tauri::Listener)
   [24]: struct.App.html (struct tauri::App)
   [25]: ../src/tauri/app.rs.html#1115
   [26]: struct.AppHandle.html (struct tauri::AppHandle)
   [27]: ../src/tauri/webview/mod.rs.html#2167-2252
   [28]: webview/struct.Webview.html (struct tauri::webview::Webview)
   [29]: ../src/tauri/webview/webview_window.rs.html#2493-2569
   [30]: webview/struct.WebviewWindow.html (struct tauri::webview::WebviewWindow)
   [31]: ../src/tauri/window/mod.rs.html#2223-2308
   [32]: window/struct.Window.html (struct tauri::window::Window)

