## Builder

[![logo][1]][2]

## [tauri][2]2.10.3

## Builder

### Sections

  * Examples



### Methods

  * any_thread
  * append_invoke_initialization_script
  * build
  * channel_interceptor
  * device_event_filter
  * enable_macos_default_menu
  * invoke_handler
  * invoke_system
  * manage
  * menu
  * new
  * on_menu_event
  * on_page_load
  * on_webview_event
  * on_window_event
  * plugin
  * plugin_boxed
  * register_asynchronous_uri_scheme_protocol
  * register_uri_scheme_protocol
  * run
  * setup



### Trait Implementations

  * Default



### Auto Trait Implementations

  * !Freeze
  * !RefUnwindSafe
  * !Sync
  * !UnwindSafe
  * Send
  * Unpin



### Blanket Implementations

  * Any
  * Borrow<T>
  * BorrowMut<T>
  * From<T>
  * Into<U>
  * TryFrom<U>
  * TryInto<U>



## [In crate tauri][3]

[tauri][3]

# Struct Builder Copy item path

[Source][4]
[code] 
    pub struct Builder<R: [Runtime][5]> { /* private fields */ }
[/code]

Expand description

Builds a Tauri application.

## §Examples
[code] 
    tauri::Builder::default()
      // on an actual app, remove the string argument
      .run(tauri::generate_context!("test/fixture/src-tauri/tauri.conf.json"))
     .expect("error while running tauri application");
[/code]

## Implementations§

[Source][6]§

### impl<R: [Runtime][5]> [Builder][7]<R>

[Source][8]

#### pub fn new() -> Self

Creates a new App builder.

[Source][9]§

### impl<R: [Runtime][5]> [Builder][7]<R>

[Source][10]

#### pub fn any_thread(self) -> Self

Builds a new Tauri application running on any thread, bypassing the main thread requirement.

###### §Platform-specific

  * **macOS:** on macOS the application _must_ be executed on the main thread, so this function is not exposed.



[Source][11]

#### pub fn invoke_handler<F>(self, invoke_handler: F) -> Self

where F: [Fn][12]([Invoke][13]<R>) -> [bool][14] \+ [Send][15] \+ [Sync][16] \+ 'static,

Defines the JS message handler callback.

##### §Examples
[code] 
    #[tauri::command]
    fn command_1() -> String {
      return "hello world".to_string();
    }
    tauri::Builder::default()
      .invoke_handler(tauri::generate_handler![
        command_1,
        // etc...
      ]);
[/code]

[Source][17]

#### pub fn invoke_system(self, initialization_script: impl [AsRef][18]<[str][19]>) -> Self

Defines a custom JS message system.

The `initialization_script` is a script that initializes `window.__TAURI_INTERNALS__.postMessage`. That function must take the `(message: object, options: object)` arguments and send it to the backend.

Additionally, the script must include a `__INVOKE_KEY__` token that is replaced with a value that must be sent with the IPC payload to check the integrity of the message by the [`crate::WebviewWindow::on_message`][20] API, e.g.
[code] 
    const invokeKey = __INVOKE_KEY__;
    fetch('my-impl://command', {
      headers: {
        'Tauri-Invoke-Key': invokeKey,
      }
    })
[/code]

Note that the implementation details is up to your implementation.

[Source][21]

#### pub fn channel_interceptor<F: [Fn][12](&[Webview][22]<R>, [CallbackFn][23], [usize][24], &[InvokeResponseBody][25]) -> [bool][14] \+ [Send][15] \+ [Sync][16] \+ 'static>( self, interceptor: F, ) -> Self

Registers a channel interceptor that can overwrite the default channel implementation.

If the event has been consumed, it must return `true`.

The channel automatically orders the messages, so the third closure argument represents the message number. The payload expected by the channel receiver is in the form of `{ id: usize, message: T }`.

[Source][26]

#### pub fn append_invoke_initialization_script( self, initialization_script: impl [AsRef][18]<[str][19]>, ) -> Self

Append a custom initialization script.

Allow to append custom initialization script instead of replacing entire invoke system.

##### §Examples
[code] 
    let custom_script = r#"
    // A custom call system bridge build on top of tauri invoke system.
    async function invoke(cmd, args = {}) {
      if (!args) args = {};
    
      let prefix = "";
    
      if (args?.__module) {
        prefix = `plugin:hybridcall.${args.__module}|`;
      }
    
      const command = `${prefix}tauri_${cmd}`;
    
      const invoke = window.__TAURI_INTERNALS__.invoke;
    
      return invoke(command, args).then(result => {
        if (window.build.debug) {
          console.log(`call: ${command}`);
          console.log(`args: ${JSON.stringify(args)}`);
          console.log(`return: ${JSON.stringify(result)}`);
        }
    
        return result;
      });
    }
    "#;
    
    tauri::Builder::default()
      .append_invoke_initialization_script(custom_script);
[/code]

[Source][27]

#### pub fn setup<F>(self, setup: F) -> Self

where F: [FnOnce][28](&mut [App][29]<R>) -> [Result][30]<[()][31], [Box][32]<dyn [Error][33]>> \+ [Send][15] \+ 'static,

Defines the setup hook.

##### §Examples

[Source][34]

#### pub fn on_page_load<F>(self, on_page_load: F) -> Self

where F: [Fn][12](&[Webview][22]<R>, &[PageLoadPayload][35]<'_>) + [Send][15] \+ [Sync][16] \+ 'static,

Defines the page load hook.

[Source][36]

#### pub fn plugin<P: [Plugin][37]<R> \+ 'static>(self, plugin: P) -> Self

Adds a Tauri application plugin.

A plugin is created using the [`crate::plugin::Builder`][38] struct.Check its documentation for more information.

##### §Examples
[code] 
    mod plugin {
      use tauri::{plugin::{Builder as PluginBuilder, TauriPlugin}, RunEvent, Runtime};
    
      // this command can be called in the frontend using `invoke('plugin:window|do_something')`.
      #[tauri::command]
      async fn do_something<R: Runtime>(app: tauri::AppHandle<R>, window: tauri::Window<R>) -> Result<(), String> {
        println!("command called");
        Ok(())
      }
      pub fn init<R: Runtime>() -> TauriPlugin<R> {
        PluginBuilder::new("window")
          .setup(|app, api| {
            // initialize the plugin here
            Ok(())
          })
          .on_event(|app, event| {
            match event {
              RunEvent::Ready => {
                println!("app is ready");
              }
              RunEvent::WindowEvent { label, event, .. } => {
                println!("window {} received an event: {:?}", label, event);
              }
              _ => (),
            }
          })
          .invoke_handler(tauri::generate_handler![do_something])
          .build()
      }
    }
    
    tauri::Builder::default()
      .plugin(plugin::init());
[/code]

[Source][39]

#### pub fn plugin_boxed(self, plugin: [Box][32]<dyn [Plugin][37]<R>>) -> Self

Adds a Tauri application plugin.

This method is similar to [`Self::plugin`][40], but accepts a boxed trait object instead of a generic type.

[Source][41]

#### pub fn manage<T>(self, state: T) -> Self

where T: [Send][15] \+ [Sync][16] \+ 'static,

Add `state` to the state managed by the application.

This method can be called any number of times as long as each call refers to a different `T`.

Managed state can be retrieved by any command handler via the [`crate::State`][42] guard. In particular, if a value of type `T` is managed by Tauri, adding `State<T>` to the list of arguments in a command handler instructs Tauri to retrieve the managed value. Additionally, [`state`][43] can be used to retrieve the value manually.

##### §Panics

Panics if state of type `T` is already being managed.

##### §Mutability

Since the managed state is global and must be [`Send`][15] \+ [`Sync`][16], mutations can only happen through interior mutability:
[code] 
    use std::{collections::HashMap, sync::Mutex};
    use tauri::State;
    // here we use Mutex to achieve interior mutability
    struct Storage {
      store: Mutex<HashMap<u64, String>>,
    }
    struct Connection;
    struct DbConnection {
      db: Mutex<Option<Connection>>,
    }
    
    #[tauri::command]
    fn connect(connection: State<DbConnection>) {
      // initialize the connection, mutating the state with interior mutability
      *connection.db.lock().unwrap() = Some(Connection {});
    }
    
    #[tauri::command]
    fn storage_insert(key: u64, value: String, storage: State<Storage>) {
      // mutate the storage behind the Mutex
      storage.store.lock().unwrap().insert(key, value);
    }
    
    tauri::Builder::default()
      .manage(Storage { store: Default::default() })
      .manage(DbConnection { db: Default::default() })
      .invoke_handler(tauri::generate_handler![connect, storage_insert])
      // on an actual app, remove the string argument
      .run(tauri::generate_context!("test/fixture/src-tauri/tauri.conf.json"))
      .expect("error while running tauri application");
[/code]

##### §Examples
[code] 
    use tauri::State;
    
    struct MyInt(isize);
    struct MyString(String);
    
    #[tauri::command]
    fn int_command(state: State<MyInt>) -> String {
        format!("The stateful int is: {}", state.0)
    }
    
    #[tauri::command]
    fn string_command<'r>(state: State<'r, MyString>) {
        println!("state: {}", state.inner().0);
    }
    
    tauri::Builder::default()
      .manage(MyInt(10))
      .manage(MyString("Hello, managed state!".to_string()))
      .invoke_handler(tauri::generate_handler![int_command, string_command])
      // on an actual app, remove the string argument
      .run(tauri::generate_context!("test/fixture/src-tauri/tauri.conf.json"))
      .expect("error while running tauri application");
[/code]

[Source][44]

#### pub fn menu<F: [FnOnce][28](&[AppHandle][45]<R>) -> [Result][46]<[Menu][47]<R>> \+ [Send][15] \+ 'static>( self, f: F, ) -> Self

Sets the menu to use on all windows.

##### §Examples
[code] 
    use tauri::menu::{Menu, MenuItem, PredefinedMenuItem, Submenu};
    
    tauri::Builder::default()
      .menu(|handle| Menu::with_items(handle, &[
        &Submenu::with_items(
          handle,
          "File",
          true,
          &[
            &PredefinedMenuItem::close_window(handle, None)?,
            #[cfg(target_os = "macos")]
            &MenuItem::new(handle, "Hello", true, None::<&str>)?,
          ],
        )?
      ]));
[/code]

[Source][48]

#### pub fn on_menu_event<F: [Fn][12](&[AppHandle][45]<R>, [MenuEvent][49]) + [Send][15] \+ [Sync][16] \+ 'static>( self, f: F, ) -> Self

Registers an event handler for any menu event.

##### §Examples
[code] 
    use tauri::menu::*;
    
    tauri::Builder::default()
      .on_menu_event(|app, event| {
         if event.id() == "quit" {
           app.exit(0);
         }
      });
[/code]

[Source][50]

#### pub fn enable_macos_default_menu(self, enable: [bool][14]) -> Self

Enable or disable the default menu on macOS. Enabled by default.

##### §Examples
[code] 
    tauri::Builder::default()
      .enable_macos_default_menu(false);
[/code]

[Source][51]

#### pub fn on_window_event<F: [Fn][12](&[Window][52]<R>, &[WindowEvent][53]) + [Send][15] \+ [Sync][16] \+ 'static>( self, handler: F, ) -> Self

Registers a window event handler for all windows.

##### §Examples
[code] 
    tauri::Builder::default()
      .on_window_event(|window, event| match event {
        tauri::WindowEvent::Focused(focused) => {
          // hide window whenever it loses focus
          if !focused {
            window.hide().unwrap();
          }
        }
        _ => {}
      });
[/code]

[Source][54]

#### pub fn on_webview_event<F: [Fn][12](&[Webview][22]<R>, &[WebviewEvent][55]) + [Send][15] \+ [Sync][16] \+ 'static>( self, handler: F, ) -> Self

Registers a webview event handler for all webviews.

##### §Examples
[code] 
    tauri::Builder::default()
      .on_webview_event(|window, event| match event {
        tauri::WebviewEvent::DragDrop(event) => {
          println!("{:?}", event);
        }
        _ => {}
      });
[/code]

[Source][56]

#### pub fn register_uri_scheme_protocol<N: [Into][57]<[String][58]>, T: [Into][57]<[Cow][59]<'static, [[u8][60]]>>, H: [Fn][12]([UriSchemeContext][61]<'_, R>, Request<[Vec][62]<[u8][60]>>) -> Response<T> \+ [Send][15] \+ [Sync][16] \+ 'static>( self, uri_scheme: N, protocol_handler: H, ) -> Self

Registers a URI scheme protocol available to all webviews.

Leverages [setURLSchemeHandler][63] on macOS, [AddWebResourceRequestedFilter][64] on Windows and [webkit-web-context-register-uri-scheme][65] on Linux.

##### §Arguments

  * `uri_scheme` The URI scheme to register, such as `example`.
  * `protocol` the protocol associated with the given URI scheme. It’s a function that takes a request and returns a response.



##### §Examples
[code] 
    tauri::Builder::default()
      .register_uri_scheme_protocol("app-files", |_ctx, request| {
        // skip leading `/`
        if let Ok(data) = std::fs::read(&request.uri().path()[1..]) {
          http::Response::builder()
            .body(data)
            .unwrap()
        } else {
          http::Response::builder()
            .status(http::StatusCode::BAD_REQUEST)
            .header(http::header::CONTENT_TYPE, mime::TEXT_PLAIN.essence_str())
            .body("failed to read file".as_bytes().to_vec())
            .unwrap()
        }
      });
[/code]

##### §Warning

Pages loaded from a custom protocol will have a different Origin on different platforms. Servers which enforce CORS will need to add the exact same Origin header (or `*`) in `Access-Control-Allow-Origin` if you wish to send requests with native `fetch` and `XmlHttpRequest` APIs. Here are the different Origin headers across platforms:

  * macOS, iOS and Linux: `<scheme_name>://localhost/<path>` (so it will be `my-scheme://localhost/path/to/page).
  * Windows and Android: `http://<scheme_name>.localhost/<path>` by default (so it will be `http://my-scheme.localhost/path/to/page`). To use `https` instead of `http`, use [`super::webview::WebviewBuilder::use_https_scheme`].



[Source][66]

#### pub fn register_asynchronous_uri_scheme_protocol<N: [Into][57]<[String][58]>, H: [Fn][12]([UriSchemeContext][61]<'_, R>, Request<[Vec][62]<[u8][60]>>, [UriSchemeResponder][67]) + [Send][15] \+ [Sync][16] \+ 'static>( self, uri_scheme: N, protocol_handler: H, ) -> Self

Similar to [`Self::register_uri_scheme_protocol`][68] but with an asynchronous responder that allows you to process the request in a separate thread and respond asynchronously.

##### §Arguments

  * `uri_scheme` The URI scheme to register, such as `example`.
  * `protocol` the protocol associated with the given URI scheme. It’s a function that takes an URL such as `example://localhost/asset.css`.



##### §Examples
[code] 
    tauri::Builder::default()
      .register_asynchronous_uri_scheme_protocol("app-files", |_ctx, request, responder| {
        // skip leading `/`
        let path = request.uri().path()[1..].to_string();
        std::thread::spawn(move || {
          if let Ok(data) = std::fs::read(path) {
            responder.respond(
              http::Response::builder()
                .body(data)
                .unwrap()
            );
          } else {
            responder.respond(
              http::Response::builder()
                .status(http::StatusCode::BAD_REQUEST)
                .header(http::header::CONTENT_TYPE, mime::TEXT_PLAIN.essence_str())
                .body("failed to read file".as_bytes().to_vec())
                .unwrap()
            );
          }
        });
      });
[/code]

##### §Warning

Pages loaded from a custom protocol will have a different Origin on different platforms. Servers which enforce CORS will need to add the exact same Origin header (or `*`) in `Access-Control-Allow-Origin` if you wish to send requests with native `fetch` and `XmlHttpRequest` APIs. Here are the different Origin headers across platforms:

  * macOS, iOS and Linux: `<scheme_name>://localhost/<path>` (so it will be `my-scheme://localhost/path/to/page).
  * Windows and Android: `http://<scheme_name>.localhost/<path>` by default (so it will be `http://my-scheme.localhost/path/to/page`). To use `https` instead of `http`, use [`super::webview::WebviewBuilder::use_https_scheme`].



[Source][69]

#### pub fn device_event_filter(self, filter: [DeviceEventFilter][70]) -> Self

Change the device event filter mode.

Since the DeviceEvent capture can lead to high CPU usage for unfocused windows, [`tao`][71] will ignore them by default for unfocused windows on Windows. This method allows changing the filter to explicitly capture them again.

###### §Platform-specific

  * ** Linux / macOS / iOS / Android**: Unsupported.



##### §Examples
[code] 
    tauri::Builder::default()
      .device_event_filter(tauri::DeviceEventFilter::Always);
[/code]

[Source][72]

#### pub fn build(self, context: [Context][73]<R>) -> [Result][46]<[App][29]<R>>

Builds the application.

[Source][74]

#### pub fn run(self, context: [Context][73]<R>) -> [Result][46]<[()][31]>

Builds the configured application and runs it.

This is a shorthand for [`Self::build`][75] followed by [`App::run`][76]. For more flexibility, consider using those functions manually.

## Trait Implementations§

[Source][77]§

### impl [Default][78] for [Builder][7]<[Wry][79]>

Available on **crate feature`wry`** only.

Make `Wry` the default `Runtime` for `Builder`

[Source][80]§

#### fn [default][81]() -> Self

Returns the “default value” for a type. [Read more][81]

## Auto Trait Implementations§

§

### impl<R> ![Freeze][82] for [Builder][7]<R>

§

### impl<R> ![RefUnwindSafe][83] for [Builder][7]<R>

§

### impl<R> [Send][15] for [Builder][7]<R>

§

### impl<R> ![Sync][16] for [Builder][7]<R>

§

### impl<R> [Unpin][84] for [Builder][7]<R>

§

### impl<R> ![UnwindSafe][85] for [Builder][7]<R>

## Blanket Implementations§

[Source][86]§

### impl<T> [Any][87] for T

where T: 'static + ?[Sized][88],

[Source][89]§

#### fn [type_id][90](&self) -> [TypeId][91]

Gets the `TypeId` of `self`. [Read more][90]

[Source][92]§

### impl<T> [Borrow][93]<T> for T

where T: ?[Sized][88],

[Source][94]§

#### fn [borrow][95](&self) -> [&T][96]

Immutably borrows from an owned value. [Read more][95]

[Source][97]§

### impl<T> [BorrowMut][98]<T> for T

where T: ?[Sized][88],

[Source][99]§

#### fn [borrow_mut][100](&mut self) -> [&mut T][96]

Mutably borrows from an owned value. [Read more][100]

[Source][101]§

### impl<T> [From][102]<T> for T

[Source][103]§

#### fn [from][104](t: T) -> T

Returns the argument unchanged.

[Source][105]§

### impl<T, U> [Into][57]<U> for T

where U: [From][102]<T>,

[Source][106]§

#### fn [into][107](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][102]<T> for U` chooses to do.

[Source][108]§

### impl<T, U> [TryFrom][109]<U> for T

where U: [Into][57]<T>,

[Source][110]§

#### type [Error][111] = [Infallible][112]

The type returned in the event of a conversion error.

[Source][113]§

#### fn [try_from][114](value: U) -> [Result][30]<T, <T as [TryFrom][109]<U>>::[Error][115]>

Performs the conversion.

[Source][116]§

### impl<T, U> [TryInto][117]<U> for T

where U: [TryFrom][109]<T>,

[Source][118]§

#### type [Error][119] = <U as [TryFrom][109]<T>>::[Error][115]

The type returned in the event of a conversion error.

[Source][120]§

#### fn [try_into][121](self) -> [Result][30]<U, <U as [TryFrom][109]<T>>::[Error][115]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/app.rs.html#1374-1428
   [5]: trait.Runtime.html (trait tauri::Runtime)
   [6]: ../src/tauri/app.rs.html#1458-1495
   [7]: struct.Builder.html (struct tauri::Builder)
   [8]: ../src/tauri/app.rs.html#1460-1494
   [9]: ../src/tauri/app.rs.html#1497-2302
   [10]: ../src/tauri/app.rs.html#1506-1509
   [11]: ../src/tauri/app.rs.html#1526-1532
   [12]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.Fn.html (trait core::ops::function::Fn)
   [13]: ipc/struct.Invoke.html (struct tauri::ipc::Invoke)
   [14]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [15]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [16]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [17]: ../src/tauri/app.rs.html#1553-1558
   [18]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [19]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [20]: webview/struct.WebviewWindow.html#method.on_message (method tauri::webview::WebviewWindow::on_message)
   [21]: ../src/tauri/app.rs.html#1566-1574
   [22]: webview/struct.Webview.html (struct tauri::webview::Webview)
   [23]: ipc/struct.CallbackFn.html (struct tauri::ipc::CallbackFn)
   [24]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [25]: ipc/enum.InvokeResponseBody.html (enum tauri::ipc::InvokeResponseBody)
   [26]: ../src/tauri/app.rs.html#1613-1621
   [27]: ../src/tauri/app.rs.html#1641-1647
   [28]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [29]: struct.App.html (struct tauri::App)
   [30]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [31]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [32]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [33]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [34]: ../src/tauri/app.rs.html#1651-1657
   [35]: webview/struct.PageLoadPayload.html (struct tauri::webview::PageLoadPayload)
   [36]: ../src/tauri/app.rs.html#1701-1703
   [37]: plugin/trait.Plugin.html (trait tauri::plugin::Plugin)
   [38]: plugin/struct.Builder.html (struct tauri::plugin::Builder)
   [39]: ../src/tauri/app.rs.html#1710-1713
   [40]: struct.Builder.html#method.plugin (method tauri::Builder::plugin)
   [41]: ../src/tauri/app.rs.html#1794-1804
   [42]: struct.State.html (struct tauri::State)
   [43]: trait.Manager.html#method.state (trait tauri::Manager)
   [44]: ../src/tauri/app.rs.html#1828-1834
   [45]: struct.AppHandle.html (struct tauri::AppHandle)
   [46]: type.Result.html (type tauri::Result)
   [47]: menu/struct.Menu.html (struct tauri::menu::Menu)
   [48]: ../src/tauri/app.rs.html#1851-1857
   [49]: menu/struct.MenuEvent.html (struct tauri::menu::MenuEvent)
   [50]: ../src/tauri/app.rs.html#1890-1893
   [51]: ../src/tauri/app.rs.html#1911-1917
   [52]: window/struct.Window.html (struct tauri::window::Window)
   [53]: enum.WindowEvent.html (enum tauri::WindowEvent)
   [54]: ../src/tauri/app.rs.html#1932-1938
   [55]: enum.WebviewEvent.html (enum tauri::WebviewEvent)
   [56]: ../src/tauri/app.rs.html#1981-2002
   [57]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [58]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [59]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [60]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [61]: struct.UriSchemeContext.html (struct tauri::UriSchemeContext)
   [62]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [63]: https://developer.apple.com/documentation/webkit/wkwebviewconfiguration/2875766-seturlschemehandler
   [64]: https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2.addwebresourcerequestedfilter?view=webview2-dotnet-1.0.774.44
   [65]: https://webkitgtk.org/reference/webkit2gtk/stable/WebKitWebContext.html#webkit-web-context-register-uri-scheme
   [66]: ../src/tauri/app.rs.html#2049-2064
   [67]: struct.UriSchemeResponder.html (struct tauri::UriSchemeResponder)
   [68]: struct.Builder.html#method.register_uri_scheme_protocol (method tauri::Builder::register_uri_scheme_protocol)
   [69]: ../src/tauri/app.rs.html#2083-2086
   [70]: enum.DeviceEventFilter.html (enum tauri::DeviceEventFilter)
   [71]: https://crates.io/crates/tao
   [72]: ../src/tauri/app.rs.html#2094-2292
   [73]: struct.Context.html (struct tauri::Context)
   [74]: ../src/tauri/app.rs.html#2298-2301
   [75]: struct.Builder.html#method.build (method tauri::Builder::build)
   [76]: struct.App.html#method.run (method tauri::App::run)
   [77]: ../src/tauri/app.rs.html#1444-1448
   [78]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [79]: type.Wry.html (type tauri::Wry)
   [80]: ../src/tauri/app.rs.html#1445-1447
   [81]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [82]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [83]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [84]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [85]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [86]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [87]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [88]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [89]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [90]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [91]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [92]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [93]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [94]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [95]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [96]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [97]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [98]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [99]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [100]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [101]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [102]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [103]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [104]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [105]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [106]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [107]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [108]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [109]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [110]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [111]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [112]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [113]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [114]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [115]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [116]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [117]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [118]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [119]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [120]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [121]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

