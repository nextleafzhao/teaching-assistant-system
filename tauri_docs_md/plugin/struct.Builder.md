## Builder

[![logo][1]][2]

## [tauri][2]2.10.3

## Builder

### Sections

  * Conventions



### Methods

  * build
  * invoke_handler
  * js_init_script
  * js_init_script_on_all_frames
  * new
  * on_drop
  * on_event
  * on_navigation
  * on_page_load
  * on_webview_ready
  * on_window_ready
  * register_asynchronous_uri_scheme_protocol
  * register_uri_scheme_protocol
  * setup
  * try_build



### Auto Trait Implementations

  * !RefUnwindSafe
  * !Sync
  * !UnwindSafe
  * Freeze
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



## [In tauri::plugin][3]

[tauri][4]::[plugin][3]

# Struct Builder Copy item path

[Source][5]
[code] 
    pub struct Builder<R: [Runtime][6], C: [DeserializeOwned][7] = [()][8]> { /* private fields */ }
[/code]

Expand description

Builds a [`TauriPlugin`][9].

This Builder offers a more concise way to construct Tauri plugins than implementing the Plugin trait directly.

## §Conventions

When using the Builder Pattern it is encouraged to export a function called `init` that constructs and returns the plugin. While plugin authors can provide every possible way to construct a plugin, sticking to the `init` function convention helps users to quickly identify the correct function to call.
[code] 
    use tauri::{plugin::{Builder, TauriPlugin}, Runtime};
    
    pub fn init<R: Runtime>() -> TauriPlugin<R> {
      Builder::new("example")
        .build()
    }
[/code]

When plugins expose more complex configuration options, it can be helpful to provide a Builder instead:
[code] 
    use tauri::{plugin::{Builder as PluginBuilder, TauriPlugin}, Runtime};
    
    pub struct Builder {
      option_a: String,
      option_b: String,
      option_c: bool
    }
    
    impl Default for Builder {
      fn default() -> Self {
        Self {
          option_a: "foo".to_string(),
          option_b: "bar".to_string(),
          option_c: false
        }
      }
    }
    
    impl Builder {
      pub fn new() -> Self {
        Default::default()
      }
    
      pub fn option_a(mut self, option_a: String) -> Self {
        self.option_a = option_a;
        self
      }
    
      pub fn option_b(mut self, option_b: String) -> Self {
        self.option_b = option_b;
        self
      }
    
      pub fn option_c(mut self, option_c: bool) -> Self {
        self.option_c = option_c;
        self
      }
    
      pub fn build<R: Runtime>(self) -> TauriPlugin<R> {
        PluginBuilder::new("example")
          .setup(move |app_handle, api| {
            // use the options here to do stuff
            println!("a: {}, b: {}, c: {}", self.option_a, self.option_b, self.option_c);
    
            Ok(())
          })
          .build()
      }
    }
[/code]

## Implementations§

[Source][10]§

### impl<R: [Runtime][6], C: [DeserializeOwned][7]> [Builder][11]<R, C>

[Source][12]

#### pub fn new(name: &'static [str][13]) -> Self

Creates a new Plugin builder.

[Source][14]

#### pub fn invoke_handler<F>(self, invoke_handler: F) -> Self

where F: [Fn][15]([Invoke][16]<R>) -> [bool][17] \+ [Send][18] \+ [Sync][19] \+ 'static,

Defines the JS message handler callback. It is recommended you use the [tauri::generate_handler][20] to generate the input to this method, as the input type is not considered stable yet.

##### §Examples
[code] 
    use tauri::{plugin::{Builder, TauriPlugin}, Runtime};
    
    #[tauri::command]
    async fn foobar<R: Runtime>(app: tauri::AppHandle<R>, window: tauri::Window<R>) -> Result<(), String> {
      println!("foobar");
    
      Ok(())
    }
    
    fn init<R: Runtime>() -> TauriPlugin<R> {
      Builder::new("example")
        .invoke_handler(tauri::generate_handler![foobar])
        .build()
    }
    
[/code]

[Source][21]

#### pub fn js_init_script(self, js_init_script: impl [Into][22]<[String][23]>) -> Self

Sets the provided JavaScript to be run after the global object has been created, but before the HTML document has been parsed and before any other script included by the HTML document is run.

The script is wrapped into its own context with `(function () { /* your script here */ })();`, so global variables must be assigned to `window` instead of implicitly declared.

Note that calling this function multiple times overrides previous values.

This is executed only on the main frame. If you only want to run it in all frames, use [`Self::js_init_script_on_all_frames`][24] instead.

###### §Platform-specific

  * **Windows:** scripts are always added to subframes.
  * **Android:** When [addDocumentStartJavaScript][25] is not supported, we prepend initialization scripts to each HTML head (implementation only supported on custom protocol URLs). For remote URLs, we use [onPageStarted][26] which is not guaranteed to run before other scripts.



##### §Examples
[code] 
    use tauri::{plugin::{Builder, TauriPlugin}, Runtime};
    
    const INIT_SCRIPT: &str = r#"
      if (window.location.origin === 'https://tauri.app') {
        console.log("hello world from js init script");
    
        window.__MY_CUSTOM_PROPERTY__ = { foo: 'bar' };
      }
    "#;
    
    fn init<R: Runtime>() -> TauriPlugin<R> {
      Builder::new("example")
        .js_init_script(INIT_SCRIPT)
        .build()
    }
[/code]

[Source][27]

#### pub fn js_init_script_on_all_frames( self, js_init_script: impl [Into][22]<[String][23]>, ) -> Self

Sets the provided JavaScript to be run after the global object has been created, but before the HTML document has been parsed and before any other script included by the HTML document is run.

Since it runs on all top-level document and child frame page navigations, it’s recommended to check the `window.location` to guard your script from running on unexpected origins.

Note that calling this function multiple times overrides previous values.

This is executed on all frames, main frame and also sub frames. If you only want to run it in the main frame, use [`Self::js_init_script`][28] instead.

###### §Platform-specific

  * **Windows:** scripts are always added to subframes.
  * **Android:** When [addDocumentStartJavaScript][25] is not supported, we prepend initialization scripts to each HTML head (implementation only supported on custom protocol URLs). For remote URLs, we use [onPageStarted][26] which is not guaranteed to run before other scripts.



[Source][29]

#### pub fn setup<F>(self, setup: F) -> Self

where F: [FnOnce][30](&[AppHandle][31]<R>, [PluginApi][32]<R, C>) -> [Result][33]<[()][8], [Box][34]<dyn [Error][35]>> \+ [Send][18] \+ 'static,

Define a closure that runs when the plugin is registered.

##### §Examples
[code] 
    use tauri::{plugin::{Builder, TauriPlugin}, Runtime, Manager};
    use std::path::PathBuf;
    
    #[derive(Debug, Default)]
    struct PluginState {
       dir: Option<PathBuf>
    }
    
    fn init<R: Runtime>() -> TauriPlugin<R> {
    Builder::new("example")
      .setup(|app, api| {
        app.manage(PluginState::default());
    
        Ok(())
      })
      .build()
    }
[/code]

[Source][36]

#### pub fn on_navigation<F>(self, on_navigation: F) -> Self

where F: [Fn][15](&[Webview][37]<R>, &[Url][38]) -> [bool][17] \+ [Send][18] \+ 'static,

Callback invoked when the webview tries to navigate to a URL. Returning false cancels the navigation.

#Example
[code] 
    use tauri::{plugin::{Builder, TauriPlugin}, Runtime};
    
    fn init<R: Runtime>() -> TauriPlugin<R> {
      Builder::new("example")
        .on_navigation(|webview, url| {
          // allow the production URL or localhost on dev
          url.scheme() == "tauri" || (cfg!(dev) && url.host_str() == Some("localhost"))
        })
        .build()
    }
[/code]

[Source][39]

#### pub fn on_page_load<F>(self, on_page_load: F) -> Self

where F: [FnMut][40](&[Webview][37]<R>, &[PageLoadPayload][41]<'_>) + [Send][18] \+ 'static,

Callback invoked when the webview performs a navigation to a page.

##### §Examples
[code] 
    use tauri::{plugin::{Builder, TauriPlugin}, Runtime};
    
    fn init<R: Runtime>() -> TauriPlugin<R> {
      Builder::new("example")
        .on_page_load(|webview, payload| {
          println!("{:?} URL {} in webview {}", payload.event(), payload.url(), webview.label());
        })
        .build()
    }
[/code]

[Source][42]

#### pub fn on_window_ready<F>(self, on_window_ready: F) -> Self

where F: [FnMut][40]([Window][43]<R>) + [Send][18] \+ 'static,

Callback invoked when the window is created.

##### §Examples
[code] 
    use tauri::{plugin::{Builder, TauriPlugin}, Runtime};
    
    fn init<R: Runtime>() -> TauriPlugin<R> {
      Builder::new("example")
        .on_window_ready(|window| {
          println!("created window {}", window.label());
        })
        .build()
    }
[/code]

[Source][44]

#### pub fn on_webview_ready<F>(self, on_webview_ready: F) -> Self

where F: [FnMut][40]([Webview][37]<R>) + [Send][18] \+ 'static,

Callback invoked when the webview is created.

##### §Examples
[code] 
    use tauri::{plugin::{Builder, TauriPlugin}, Runtime};
    
    fn init<R: Runtime>() -> TauriPlugin<R> {
      Builder::new("example")
        .on_webview_ready(|webview| {
          println!("created webview {}", webview.label());
        })
        .build()
    }
[/code]

[Source][45]

#### pub fn on_event<F>(self, on_event: F) -> Self

where F: [FnMut][40](&[AppHandle][31]<R>, &[RunEvent][46]) + [Send][18] \+ 'static,

Callback invoked when the event loop receives a new event.

##### §Examples
[code] 
    use tauri::{plugin::{Builder, TauriPlugin}, RunEvent, Runtime};
    
    fn init<R: Runtime>() -> TauriPlugin<R> {
      Builder::new("example")
        .on_event(|app_handle, event| {
          match event {
            RunEvent::ExitRequested { api, .. } => {
              // Prevents the app from exiting.
              // This will cause the core thread to continue running in the background even without any open windows.
              api.prevent_exit();
            }
            // Ignore all other cases.
            _ => {}
          }
        })
        .build()
    }
[/code]

[Source][47]

#### pub fn on_drop<F>(self, on_drop: F) -> Self

where F: [FnOnce][30]([AppHandle][31]<R>) + [Send][18] \+ 'static,

Callback invoked when the plugin is dropped.

##### §Examples
[code] 
    use tauri::{plugin::{Builder, TauriPlugin}, Runtime};
    
    fn init<R: Runtime>() -> TauriPlugin<R> {
      Builder::new("example")
        .on_drop(|app| {
          println!("plugin has been dropped and is no longer running");
          // you can run cleanup logic here
        })
        .build()
    }
[/code]

[Source][48]

#### pub fn register_uri_scheme_protocol<N: [Into][22]<[String][23]>, T: [Into][22]<[Cow][49]<'static, [[u8][50]]>>, H: [Fn][15]([UriSchemeContext][51]<'_, R>, Request<[Vec][52]<[u8][50]>>) -> Response<T> \+ [Send][18] \+ [Sync][19] \+ 'static>( self, uri_scheme: N, protocol_handler: H, ) -> Self

Registers a URI scheme protocol available to all webviews.

Leverages [setURLSchemeHandler][53] on macOS, [AddWebResourceRequestedFilter][54] on Windows and [webkit-web-context-register-uri-scheme][55] on Linux.

##### §Known limitations

URI scheme protocols are registered when the webview is created. Due to this limitation, if the plugin is registered after a webview has been created, this protocol won’t be available.

##### §Arguments

  * `uri_scheme` The URI scheme to register, such as `example`.
  * `protocol` the protocol associated with the given URI scheme. It’s a function that takes an URL such as `example://localhost/asset.css`.



##### §Examples
[code] 
    use tauri::{plugin::{Builder, TauriPlugin}, Runtime};
    
    fn init<R: Runtime>() -> TauriPlugin<R> {
      Builder::new("myplugin")
        .register_uri_scheme_protocol("myscheme", |_ctx, req| {
          http::Response::builder().body(Vec::new()).unwrap()
        })
        .build()
    }
[/code]

##### §Warning

Pages loaded from a custom protocol will have a different Origin on different platforms. Servers which enforce CORS will need to add the exact same Origin header (or `*`) in `Access-Control-Allow-Origin` if you wish to send requests with native `fetch` and `XmlHttpRequest` APIs. Here are the different Origin headers across platforms:

  * macOS, iOS and Linux: `<scheme_name>://localhost/<path>` (so it will be `my-scheme://localhost/path/to/page).
  * Windows and Android: `http://<scheme_name>.localhost/<path>` by default (so it will be `http://my-scheme.localhost/path/to/page`). To use `https` instead of `http`, use [`super::webview::WebviewBuilder::use_https_scheme`].



[Source][56]

#### pub fn register_asynchronous_uri_scheme_protocol<N: [Into][22]<[String][23]>, H: [Fn][15]([UriSchemeContext][51]<'_, R>, Request<[Vec][52]<[u8][50]>>, [UriSchemeResponder][57]) + [Send][18] \+ [Sync][19] \+ 'static>( self, uri_scheme: N, protocol_handler: H, ) -> Self

Similar to [`Self::register_uri_scheme_protocol`][58] but with an asynchronous responder that allows you to process the request in a separate thread and respond asynchronously.

##### §Arguments

  * `uri_scheme` The URI scheme to register, such as `example`.
  * `protocol` the protocol associated with the given URI scheme. It’s a function that takes an URL such as `example://localhost/asset.css`.



##### §Examples
[code] 
    use tauri::{plugin::{Builder, TauriPlugin}, Runtime};
    
    fn init<R: Runtime>() -> TauriPlugin<R> {
      Builder::new("myplugin")
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
        })
        .build()
    }
[/code]

##### §Warning

Pages loaded from a custom protocol will have a different Origin on different platforms. Servers which enforce CORS will need to add the exact same Origin header (or `*`) in `Access-Control-Allow-Origin` if you wish to send requests with native `fetch` and `XmlHttpRequest` APIs. Here are the different Origin headers across platforms:

  * macOS, iOS and Linux: `<scheme_name>://localhost/<path>` (so it will be `my-scheme://localhost/path/to/page).
  * Windows and Android: `http://<scheme_name>.localhost/<path>` by default (so it will be `http://my-scheme.localhost/path/to/page`). To use `https` instead of `http`, use [`super::webview::WebviewBuilder::use_https_scheme`].



[Source][59]

#### pub fn try_build(self) -> [Result][33]<[TauriPlugin][9]<R, C>, [BuilderError][60]>

Builds the [`TauriPlugin`][9].

[Source][61]

#### pub fn build(self) -> [TauriPlugin][9]<R, C>

Builds the [`TauriPlugin`][9].

##### §Panics

If the builder returns an error during [`Self::try_build`][62], then this method will panic.

## Auto Trait Implementations§

§

### impl<R, C> [Freeze][63] for [Builder][11]<R, C>

§

### impl<R, C = [()][8]> ![RefUnwindSafe][64] for [Builder][11]<R, C>

§

### impl<R, C> [Send][18] for [Builder][11]<R, C>

§

### impl<R, C = [()][8]> ![Sync][19] for [Builder][11]<R, C>

§

### impl<R, C> [Unpin][65] for [Builder][11]<R, C>

§

### impl<R, C = [()][8]> ![UnwindSafe][66] for [Builder][11]<R, C>

## Blanket Implementations§

[Source][67]§

### impl<T> [Any][68] for T

where T: 'static + ?[Sized][69],

[Source][70]§

#### fn [type_id][71](&self) -> [TypeId][72]

Gets the `TypeId` of `self`. [Read more][71]

[Source][73]§

### impl<T> [Borrow][74]<T> for T

where T: ?[Sized][69],

[Source][75]§

#### fn [borrow][76](&self) -> [&T][77]

Immutably borrows from an owned value. [Read more][76]

[Source][78]§

### impl<T> [BorrowMut][79]<T> for T

where T: ?[Sized][69],

[Source][80]§

#### fn [borrow_mut][81](&mut self) -> [&mut T][77]

Mutably borrows from an owned value. [Read more][81]

[Source][82]§

### impl<T> [From][83]<T> for T

[Source][84]§

#### fn [from][85](t: T) -> T

Returns the argument unchanged.

[Source][86]§

### impl<T, U> [Into][22]<U> for T

where U: [From][83]<T>,

[Source][87]§

#### fn [into][88](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][83]<T> for U` chooses to do.

[Source][89]§

### impl<T, U> [TryFrom][90]<U> for T

where U: [Into][22]<T>,

[Source][91]§

#### type [Error][92] = [Infallible][93]

The type returned in the event of a conversion error.

[Source][94]§

#### fn [try_from][95](value: U) -> [Result][33]<T, <T as [TryFrom][90]<U>>::[Error][96]>

Performs the conversion.

[Source][97]§

### impl<T, U> [TryInto][98]<U> for T

where U: [TryFrom][90]<T>,

[Source][99]§

#### type [Error][100] = <U as [TryFrom][90]<T>>::[Error][96]

The type returned in the event of a conversion error.

[Source][101]§

#### fn [try_into][102](self) -> [Result][33]<U, <U as [TryFrom][90]<T>>::[Error][96]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/plugin.rs.html#264-276
   [6]: ../trait.Runtime.html (trait tauri::Runtime)
   [7]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)
   [8]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [9]: struct.TauriPlugin.html (struct tauri::plugin::TauriPlugin)
   [10]: ../../src/tauri/plugin.rs.html#278-756
   [11]: struct.Builder.html (struct tauri::plugin::Builder)
   [12]: ../../src/tauri/plugin.rs.html#280-294
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [14]: ../../src/tauri/plugin.rs.html#320-326
   [15]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.Fn.html (trait core::ops::function::Fn)
   [16]: ../ipc/struct.Invoke.html (struct tauri::ipc::Invoke)
   [17]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [18]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [19]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [20]: ../macro.generate_handler.html
   [21]: ../../src/tauri/plugin.rs.html#370-376
   [22]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [23]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [24]: struct.Builder.html#method.js_init_script_on_all_frames (method tauri::plugin::Builder::js_init_script_on_all_frames)
   [25]: https://developer.android.com/reference/androidx/webkit/WebViewCompat#addDocumentStartJavaScript(android.webkit.WebView,java.lang.String,java.util.Set%3Cjava.lang.String%3E)
   [26]: https://developer.android.com/reference/android/webkit/WebViewClient#onPageStarted(android.webkit.WebView,%20java.lang.String,%20android.graphics.Bitmap)
   [27]: ../../src/tauri/plugin.rs.html#399-405
   [28]: struct.Builder.html#method.js_init_script (method tauri::plugin::Builder::js_init_script)
   [29]: ../../src/tauri/plugin.rs.html#431-439
   [30]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [31]: ../struct.AppHandle.html (struct tauri::AppHandle)
   [32]: struct.PluginApi.html (struct tauri::plugin::PluginApi)
   [33]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [34]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [35]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [36]: ../../src/tauri/plugin.rs.html#458-464
   [37]: ../webview/struct.Webview.html (struct tauri::webview::Webview)
   [38]: ../struct.Url.html (struct tauri::Url)
   [39]: ../../src/tauri/plugin.rs.html#482-488
   [40]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnMut.html (trait core::ops::function::FnMut)
   [41]: ../webview/struct.PageLoadPayload.html (struct tauri::webview::PageLoadPayload)
   [42]: ../../src/tauri/plugin.rs.html#506-512
   [43]: ../window/struct.Window.html (struct tauri::window::Window)
   [44]: ../../src/tauri/plugin.rs.html#530-536
   [45]: ../../src/tauri/plugin.rs.html#562-568
   [46]: ../enum.RunEvent.html (enum tauri::RunEvent)
   [47]: ../../src/tauri/plugin.rs.html#587-593
   [48]: ../../src/tauri/plugin.rs.html#635-656
   [49]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [50]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [51]: ../struct.UriSchemeContext.html (struct tauri::UriSchemeContext)
   [52]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [53]: https://developer.apple.com/documentation/webkit/wkwebviewconfiguration/2875766-seturlschemehandler
   [54]: https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2.addwebresourcerequestedfilter?view=webview2-dotnet-1.0.774.44
   [55]: https://webkitgtk.org/reference/webkit2gtk/stable/WebKitWebContext.html#webkit-web-context-register-uri-scheme
   [56]: ../../src/tauri/plugin.rs.html#709-724
   [57]: ../struct.UriSchemeResponder.html (struct tauri::UriSchemeResponder)
   [58]: struct.Builder.html#method.register_uri_scheme_protocol (method tauri::plugin::Builder::register_uri_scheme_protocol)
   [59]: ../../src/tauri/plugin.rs.html#727-746
   [60]: enum.BuilderError.html (enum tauri::plugin::BuilderError)
   [61]: ../../src/tauri/plugin.rs.html#753-755
   [62]: struct.Builder.html#method.try_build (method tauri::plugin::Builder::try_build)
   [63]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [64]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [65]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [66]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [67]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [68]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [69]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [70]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [71]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [72]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [73]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [74]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [75]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [76]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [77]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [78]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [79]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [80]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [81]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [82]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [83]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [84]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [85]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [86]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [87]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [88]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [89]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [90]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [91]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [92]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [93]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [94]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [95]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [96]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [97]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [98]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [99]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [100]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [101]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [102]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

