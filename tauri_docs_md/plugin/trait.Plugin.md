## Plugin

[![logo][1]][2]

## [tauri][2]2.10.3

## Plugin

### Required Methods

  * name



### Provided Methods

  * extend_api
  * initialization_script
  * initialization_script_2
  * initialize
  * on_event
  * on_navigation
  * on_page_load
  * webview_created
  * window_created



### Implementors

## [In tauri::plugin][3]

[tauri][4]::[plugin][3]

# Trait Plugin Copy item path

[Source][5]
[code] 
    pub trait Plugin<R: [Runtime][6]>: [Send][7] {
        // Required method
        fn name(&self) -> &'static [str][8];
    
        // Provided methods
        fn initialize(
            &mut self,
            app: &[AppHandle][9]<R>,
            config: [JsonValue][10],
        ) -> [Result][11]<[()][12], [Box][13]<dyn [Error][14]>> { ... }
        fn initialization_script(&self) -> [Option][15]<[String][16]> { ... }
        fn initialization_script_2(&self) -> [Option][15]<InitializationScript> { ... }
        fn window_created(&mut self, window: [Window][17]<R>) { ... }
        fn webview_created(&mut self, webview: [Webview][18]<R>) { ... }
        fn on_navigation(&mut self, webview: &[Webview][18]<R>, url: &[Url][19]) -> [bool][20] { ... }
        fn on_page_load(
            &mut self,
            webview: &[Webview][18]<R>,
            payload: &[PageLoadPayload][21]<'_>,
        ) { ... }
        fn on_event(&mut self, app: &[AppHandle][9]<R>, event: &[RunEvent][22]) { ... }
        fn extend_api(&mut self, invoke: [Invoke][23]<R>) -> [bool][20] { ... }
    }
[/code]

Expand description

The plugin interface.

## Required Methods§

[Source][24]

#### fn name(&self) -> &'static [str][8]

The plugin name. Used as key on the plugin config object.

## Provided Methods§

[Source][25]

#### fn initialize( &mut self, app: &[AppHandle][9]<R>, config: [JsonValue][10], ) -> [Result][11]<[()][12], [Box][13]<dyn [Error][14]>>

Initializes the plugin.

[Source][26]

#### fn initialization_script(&self) -> [Option][15]<[String][16]>

Add the provided JavaScript to a list of scripts that should be run after the global object has been created, but before the HTML document has been parsed and before any other script included by the HTML document is run.

The script is wrapped into its own context with `(function () { /* your script here */ })();`, so global variables must be assigned to `window` instead of implicitly declared.

This is executed only on the main frame. If you only want to run it in all frames, use [`Plugin::initialization_script_2`][27] to set that to false.

###### §Platform-specific

  * **Windows:** scripts are always added to subframes.
  * **Android:** When [addDocumentStartJavaScript][28] is not supported, we prepend initialization scripts to each HTML head (implementation only supported on custom protocol URLs). For remote URLs, we use [onPageStarted][29] which is not guaranteed to run before other scripts.



[Source][30]

#### fn initialization_script_2(&self) -> [Option][15]<InitializationScript>

Same as [`Plugin::initialization_script`][31] but returns an [`InitializationScript`] instead We plan to replace [`Plugin::initialization_script`][31] with this signature in v3

[Source][32]

#### fn window_created(&mut self, window: [Window][17]<R>)

Callback invoked when the window is created.

[Source][33]

#### fn webview_created(&mut self, webview: [Webview][18]<R>)

Callback invoked when the webview is created.

[Source][34]

#### fn on_navigation(&mut self, webview: &[Webview][18]<R>, url: &[Url][19]) -> [bool][20]

Callback invoked when webview tries to navigate to the given Url. Returning false cancels navigation.

[Source][35]

#### fn on_page_load(&mut self, webview: &[Webview][18]<R>, payload: &[PageLoadPayload][21]<'_>)

Callback invoked when the webview performs a navigation to a page.

[Source][36]

#### fn on_event(&mut self, app: &[AppHandle][9]<R>, event: &[RunEvent][22])

Callback invoked when the event loop receives a new event.

[Source][37]

#### fn extend_api(&mut self, invoke: [Invoke][23]<R>) -> [bool][20]

Extend commands to [`crate::Builder::invoke_handler`][38].

## Implementors§

[Source][39]§

### impl<R: [Runtime][6], C: [DeserializeOwned][40]> [Plugin][41]<R> for [TauriPlugin][42]<R, C>

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/plugin.rs.html#37-112
   [6]: ../trait.Runtime.html (trait tauri::Runtime)
   [7]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [8]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [9]: ../struct.AppHandle.html (struct tauri::AppHandle)
   [10]: https://docs.rs/serde_json/1.0.149/serde_json/value/enum.Value.html (enum serde_json::value::Value)
   [11]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [12]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [13]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [14]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [15]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [16]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [17]: ../window/struct.Window.html (struct tauri::window::Window)
   [18]: ../webview/struct.Webview.html (struct tauri::webview::Webview)
   [19]: ../struct.Url.html (struct tauri::Url)
   [20]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [21]: ../webview/struct.PageLoadPayload.html (struct tauri::webview::PageLoadPayload)
   [22]: ../enum.RunEvent.html (enum tauri::RunEvent)
   [23]: ../ipc/struct.Invoke.html (struct tauri::ipc::Invoke)
   [24]: ../../src/tauri/plugin.rs.html#39
   [25]: ../../src/tauri/plugin.rs.html#43-49
   [26]: ../../src/tauri/plugin.rs.html#69-71
   [27]: trait.Plugin.html#method.initialization_script_2 (method tauri::plugin::Plugin::initialization_script_2)
   [28]: https://developer.android.com/reference/androidx/webkit/WebViewCompat#addDocumentStartJavaScript(android.webkit.WebView,java.lang.String,java.util.Set%3Cjava.lang.String%3E)
   [29]: https://developer.android.com/reference/android/webkit/WebViewClient#onPageStarted(android.webkit.WebView,%20java.lang.String,%20android.graphics.Bitmap)
   [30]: ../../src/tauri/plugin.rs.html#76-83
   [31]: trait.Plugin.html#method.initialization_script (method tauri::plugin::Plugin::initialization_script)
   [32]: ../../src/tauri/plugin.rs.html#87
   [33]: ../../src/tauri/plugin.rs.html#91
   [34]: ../../src/tauri/plugin.rs.html#95-97
   [35]: ../../src/tauri/plugin.rs.html#101
   [36]: ../../src/tauri/plugin.rs.html#105
   [37]: ../../src/tauri/plugin.rs.html#109-111
   [38]: ../struct.Builder.html#method.invoke_handler (method tauri::Builder::invoke_handler)
   [39]: ../../src/tauri/plugin.rs.html#782-853
   [40]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)
   [41]: trait.Plugin.html (trait tauri::plugin::Plugin)
   [42]: struct.TauriPlugin.html (struct tauri::plugin::TauriPlugin)

