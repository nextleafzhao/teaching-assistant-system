## WebviewWindowBuilder

[![logo][1]][2]

## [tauri][2]2.10.3

## WebviewWindowBuilder

### Methods

  * accept_first_mouse
  * additional_browser_args
  * always_on_bottom
  * always_on_top
  * auto_resize
  * background_color
  * background_throttling
  * browser_extensions_enabled
  * build
  * center
  * closable
  * content_protected
  * data_directory
  * data_store_identifier
  * decorations
  * devtools
  * disable_drag_drop_handler
  * disable_javascript
  * drag_and_drop
  * effects
  * enable_clipboard_access
  * extensions_path
  * focus
  * focusable
  * focused
  * from_config
  * fullscreen
  * icon
  * incognito
  * initialization_script
  * initialization_script_for_all_frames
  * inner_size
  * inner_size_constraints
  * max_inner_size
  * maximizable
  * maximized
  * menu
  * min_inner_size
  * minimizable
  * new
  * on_document_title_changed
  * on_download
  * on_menu_event
  * on_navigation
  * on_new_window
  * on_page_load
  * on_web_resource_request
  * owner
  * owner_raw
  * parent
  * parent_raw
  * position
  * prevent_overflow
  * prevent_overflow_with_margin
  * proxy_url
  * resizable
  * scroll_bar_style
  * shadow
  * skip_taskbar
  * theme
  * title
  * transparent
  * use_https_scheme
  * user_agent
  * visible
  * visible_on_all_workspaces
  * window_classname
  * window_features
  * with_environment
  * zoom_hotkeys_enabled



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



## [In tauri::webview][3]

[tauri][4]::[webview][3]

# Struct WebviewWindowBuilder Copy item path

[Source][5]
[code] 
    pub struct WebviewWindowBuilder<'a, R: [Runtime][6], M: [Manager][7]<R>> { /* private fields */ }
[/code]

Expand description

A builder for [`WebviewWindow`][8], a window that hosts a single webview.

## Implementations§

[Source][9]§

### impl<'a, R: [Runtime][6], M: [Manager][7]<R>> [WebviewWindowBuilder][10]<'a, R, M>

[Source][11]

#### pub fn new<L: [Into][12]<[String][13]>>(manager: [&'a M][14], label: L, url: [WebviewUrl][15]) -> Self

Initializes a webview window builder with the given window label.

##### §Known issues

On Windows, this function deadlocks when used in a synchronous command and event handlers, see [the Webview2 issue][16]. You should use `async` commands and separate threads when creating windows.

##### §Examples

  * Create a window in the setup hook:


[code] 
    tauri::Builder::default()
      .setup(|app| {
        let webview_window = tauri::WebviewWindowBuilder::new(app, "label", tauri::WebviewUrl::App("index.html".into()))
          .build()?;
        Ok(())
      });
[/code]

  * Create a window in a separate thread:


[code] 
    tauri::Builder::default()
      .setup(|app| {
        let handle = app.handle().clone();
        std::thread::spawn(move || {
          let webview_window = tauri::WebviewWindowBuilder::new(&handle, "label", tauri::WebviewUrl::App("index.html".into()))
            .build()
            .unwrap();
        });
        Ok(())
      });
[/code]

  * Create a window in a command:


[code] 
    #[tauri::command]
    async fn create_window(app: tauri::AppHandle) {
      let webview_window = tauri::WebviewWindowBuilder::new(&app, "label", tauri::WebviewUrl::App("index.html".into()))
        .build()
        .unwrap();
    }
[/code]

[Source][17]

#### pub fn from_config(manager: [&'a M][14], config: &WindowConfig) -> [Result][18]<Self>

Initializes a webview window builder from a [`WindowConfig`] from tauri.conf.json. Keep in mind that you can’t create 2 windows with the same `label` so make sure that the initial window was closed or change the label of the cloned [`WindowConfig`].

##### §Known issues

On Windows, this function deadlocks when used in a synchronous command or event handlers, see [the Webview2 issue][16]. You should use `async` commands and separate threads when creating windows.

##### §Examples

  * Create a window in a command:


[code] 
    #[tauri::command]
    async fn reopen_window(app: tauri::AppHandle) {
      let webview_window = tauri::WebviewWindowBuilder::from_config(&app, &app.config().app.windows.get(0).unwrap())
        .unwrap()
        .build()
        .unwrap();
    }
[/code]

  * Create a window in a command from a config with a specific label, and change its label so multiple instances can exist:


[code] 
    #[tauri::command]
    async fn open_window_multiple(app: tauri::AppHandle) {
      let mut conf = app.config().app.windows.iter().find(|c| c.label == "template-for-multiwindow").unwrap().clone();
      // This should be a unique label for all windows. For example, we can use a random suffix:
      let mut buf = [0u8; 1];
      assert_eq!(getrandom::fill(&mut buf), Ok(()));
      conf.label = format!("my-multiwindow-{}", buf[0]);
      let webview_window = tauri::WebviewWindowBuilder::from_config(&app, &conf)
        .unwrap()
        .build()
        .unwrap();
    }
[/code]

[Source][19]

#### pub fn on_menu_event<F: [Fn][20](&[Window][21]<R>, [MenuEvent][22]) + [Send][23] \+ [Sync][24] \+ 'static>( self, f: F, ) -> Self

Registers a global menu event listener.

Note that this handler is called for any menu event, whether it is coming from this window, another window or from the tray icon menu.

Also note that this handler will not be called if the window used to register it was closed.

##### §Examples
[code] 
    use tauri::menu::{Menu, Submenu, MenuItem};
    tauri::Builder::default()
      .setup(|app| {
        let handle = app.handle();
        let save_menu_item = MenuItem::new(handle, "Save", true, None::<&str>)?;
        let menu = Menu::with_items(handle, &[
          &Submenu::with_items(handle, "File", true, &[
            &save_menu_item,
          ])?,
        ])?;
        let webview_window = tauri::WebviewWindowBuilder::new(app, "editor", tauri::WebviewUrl::App("index.html".into()))
          .menu(menu)
          .on_menu_event(move |window, event| {
            if event.id == save_menu_item.id() {
              // save menu item
            }
          })
          .build()
          .unwrap();
    
        Ok(())
      });
[/code]

[Source][25]

#### pub fn on_web_resource_request<F: [Fn][20](Request<[Vec][26]<[u8][27]>>, &mut Response<[Cow][28]<'static, [[u8][27]]>>) + [Send][23] \+ [Sync][24] \+ 'static>( self, f: F, ) -> Self

Defines a closure to be executed when the webview makes an HTTP request for a web resource, allowing you to modify the response.

Currently only implemented for the `tauri` URI protocol.

**NOTE:** Currently this is **not** executed when using external URLs such as a development server, but it might be implemented in the future. **Always** check the request URL.

##### §Examples
[code] 
    use tauri::{
      utils::config::{Csp, CspDirectiveSources, WebviewUrl},
      webview::WebviewWindowBuilder,
    };
    use http::header::HeaderValue;
    use std::collections::HashMap;
    tauri::Builder::default()
      .setup(|app| {
        let webview_window = WebviewWindowBuilder::new(app, "core", WebviewUrl::App("index.html".into()))
          .on_web_resource_request(|request, response| {
            if request.uri().scheme_str() == Some("tauri") {
              // if we have a CSP header, Tauri is loading an HTML file
              //  for this example, let's dynamically change the CSP
              if let Some(csp) = response.headers_mut().get_mut("Content-Security-Policy") {
                // use the tauri helper to parse the CSP policy to a map
                let mut csp_map: HashMap<String, CspDirectiveSources> = Csp::Policy(csp.to_str().unwrap().to_string()).into();
                csp_map.entry("script-src".to_string()).or_insert_with(Default::default).push("'unsafe-inline'");
                // use the tauri helper to get a CSP string from the map
                let csp_string = Csp::from(csp_map).to_string();
                *csp = HeaderValue::from_str(&csp_string).unwrap();
              }
            }
          })
          .build()?;
        Ok(())
      });
[/code]

[Source][29]

#### pub fn on_navigation<F: [Fn][20](&[Url][30]) -> [bool][31] \+ [Send][23] \+ 'static>(self, f: F) -> Self

Defines a closure to be executed when the webview navigates to a URL. Returning `false` cancels the navigation.

##### §Examples
[code] 
    use tauri::{
      utils::config::{Csp, CspDirectiveSources, WebviewUrl},
      webview::WebviewWindowBuilder,
    };
    use http::header::HeaderValue;
    use std::collections::HashMap;
    tauri::Builder::default()
      .setup(|app| {
        let webview_window = WebviewWindowBuilder::new(app, "core", WebviewUrl::App("index.html".into()))
          .on_navigation(|url| {
            // allow the production URL or localhost on dev
            url.scheme() == "tauri" || (cfg!(dev) && url.host_str() == Some("localhost"))
          })
          .build()?;
        Ok(())
      });
[/code]

[Source][32]

#### pub fn on_new_window<F: [Fn][20]([Url][30], [NewWindowFeatures][33]) -> [NewWindowResponse][34]<R> \+ [Send][23] \+ [Sync][24] \+ 'static>( self, f: F, ) -> Self

Set a new window request handler to decide if incoming url is allowed to be opened.

A new window is requested to be opened by the [window.open][35] API.

The closure take the URL to open and the window features object and returns [`NewWindowResponse`][34] to determine whether the window should open.

##### §Examples
[code] 
    use tauri::{
      utils::config::WebviewUrl,
      webview::WebviewWindowBuilder,
    };
    use http::header::HeaderValue;
    use std::collections::HashMap;
    tauri::Builder::default()
      .setup(|app| {
        let app_ = app.handle().clone();
        let webview_window = WebviewWindowBuilder::new(app, "core", WebviewUrl::App("index.html".into()))
          .on_new_window(move |url, features| {
            let builder = tauri::WebviewWindowBuilder::new(
              &app_,
              // note: add an ID counter or random label generator to support multiple opened windows at the same time
              "opened-window",
              tauri::WebviewUrl::External("about:blank".parse().unwrap()),
            )
            .window_features(features)
            .on_document_title_changed(|window, title| {
              window.set_title(&title).unwrap();
            })
            .title(url.as_str());
    
            let window = builder.build().unwrap();
            tauri::webview::NewWindowResponse::Create { window }
          })
          .build()?;
        Ok(())
      });
[/code]

##### §Platform-specific

  * **Android / iOS** : Not supported.
  * **Windows** : The closure is executed on a separate thread to prevent a deadlock.



[Source][36]

#### pub fn on_document_title_changed<F: [Fn][20]([WebviewWindow][8]<R>, [String][13]) + [Send][23] \+ 'static>( self, f: F, ) -> Self

Defines a closure to be executed when the document title changes.

Note that it may run before or after the navigation event.

[Source][37]

#### pub fn on_download<F: [Fn][20]([Webview][38]<R>, [DownloadEvent][39]<'_>) -> [bool][31] \+ [Send][23] \+ [Sync][24] \+ 'static>( self, f: F, ) -> Self

Set a download event handler to be notified when a download is requested or finished.

Returning `false` prevents the download from happening on a [`DownloadEvent::Requested`][40] event.

##### §Examples

[Source][41]

#### pub fn on_page_load<F: [Fn][20]([WebviewWindow][8]<R>, [PageLoadPayload][42]<'_>) + [Send][23] \+ [Sync][24] \+ 'static>( self, f: F, ) -> Self

Defines a closure to be executed when a page load event is triggered. The event can be either [`tauri_runtime::webview::PageLoadEvent::Started`][43] if the page has started loading or [`tauri_runtime::webview::PageLoadEvent::Finished`][44] when the page finishes loading.

##### §Examples
[code] 
    use tauri::{
      utils::config::{Csp, CspDirectiveSources, WebviewUrl},
      webview::{PageLoadEvent, WebviewWindowBuilder},
    };
    use http::header::HeaderValue;
    use std::collections::HashMap;
    tauri::Builder::default()
      .setup(|app| {
        let webview_window = WebviewWindowBuilder::new(app, "core", WebviewUrl::App("index.html".into()))
          .on_page_load(|window, payload| {
            match payload.event() {
              PageLoadEvent::Started => {
                println!("{} finished loading", payload.url());
              }
              PageLoadEvent::Finished => {
                println!("{} finished loading", payload.url());
              }
            }
          })
          .build()?;
        Ok(())
      });
[/code]

[Source][45]

#### pub fn build(self) -> [Result][18]<[WebviewWindow][8]<R>>

Creates a new window.

[Source][46]§

### impl<'a, R: [Runtime][6], M: [Manager][7]<R>> [WebviewWindowBuilder][10]<'a, R, M>

Desktop APIs.

[Source][47]

#### pub fn menu(self, menu: [Menu][48]<R>) -> Self

Sets the menu for the window.

[Source][49]

#### pub fn center(self) -> Self

Show window in the center of the screen.

[Source][50]

#### pub fn position(self, x: [f64][51], y: [f64][51]) -> Self

The initial position of the window in logical pixels.

[Source][52]

#### pub fn inner_size(self, width: [f64][51], height: [f64][51]) -> Self

Window size in logical pixels.

[Source][53]

#### pub fn min_inner_size(self, min_width: [f64][51], min_height: [f64][51]) -> Self

Window min inner size in logical pixels.

[Source][54]

#### pub fn max_inner_size(self, max_width: [f64][51], max_height: [f64][51]) -> Self

Window max inner size in logical pixels.

[Source][55]

#### pub fn inner_size_constraints(self, constraints: [WindowSizeConstraints][56]) -> Self

Window inner size constraints.

[Source][57]

#### pub fn prevent_overflow(self) -> Self

Prevent the window from overflowing the working area (e.g. monitor size - taskbar size) on creation, which means the window size will be limited to `monitor size - taskbar size`

**NOTE** : The overflow check is only performed on window creation, resizes can still overflow

###### §Platform-specific

  * **iOS / Android:** Unsupported.



[Source][58]

#### pub fn prevent_overflow_with_margin(self, margin: impl [Into][12]<[Size][59]>) -> Self

Prevent the window from overflowing the working area (e.g. monitor size - taskbar size) on creation with a margin, which means the window size will be limited to `monitor size - taskbar size - margin size`

**NOTE** : The overflow check is only performed on window creation, resizes can still overflow

###### §Platform-specific

  * **iOS / Android:** Unsupported.



[Source][60]

#### pub fn resizable(self, resizable: [bool][31]) -> Self

Whether the window is resizable or not. When resizable is set to false, native window’s maximize button is automatically disabled.

[Source][61]

#### pub fn maximizable(self, maximizable: [bool][31]) -> Self

Whether the window’s native maximize button is enabled or not. If resizable is set to false, this setting is ignored.

###### §Platform-specific

  * **macOS:** Disables the “zoom” button in the window titlebar, which is also used to enter fullscreen mode.
  * **Linux / iOS / Android:** Unsupported.



[Source][62]

#### pub fn minimizable(self, minimizable: [bool][31]) -> Self

Whether the window’s native minimize button is enabled or not.

###### §Platform-specific

  * **Linux / iOS / Android:** Unsupported.



[Source][63]

#### pub fn closable(self, closable: [bool][31]) -> Self

Whether the window’s native close button is enabled or not.

###### §Platform-specific

  * **Linux:** “GTK+ will do its best to convince the window manager not to show a close button. Depending on the system, this function may not have any effect when called on a window that is already visible”
  * **iOS / Android:** Unsupported.



[Source][64]

#### pub fn title<S: [Into][12]<[String][13]>>(self, title: S) -> Self

The title of the window in the title bar.

[Source][65]

#### pub fn fullscreen(self, fullscreen: [bool][31]) -> Self

Whether to start the window in fullscreen or not.

[Source][66]

#### pub fn focus(self) -> Self

👎Deprecated since 1.2.0: The window is automatically focused by default. This function Will be removed in 3.0.0. Use `focused` instead.

Sets the window to be initially focused.

[Source][67]

#### pub fn focusable(self, focusable: [bool][31]) -> Self

Whether the window will be focusable or not.

[Source][68]

#### pub fn focused(self, focused: [bool][31]) -> Self

Whether the window will be initially focused or not.

[Source][69]

#### pub fn maximized(self, maximized: [bool][31]) -> Self

Whether the window should be maximized upon creation.

[Source][70]

#### pub fn visible(self, visible: [bool][31]) -> Self

Whether the window should be immediately visible upon creation.

[Source][71]

#### pub fn theme(self, theme: [Option][72]<[Theme][73]>) -> Self

Forces a theme or uses the system settings if None was provided.

###### §Platform-specific

  * **macOS** : Only supported on macOS 10.14+.



[Source][74]

#### pub fn decorations(self, decorations: [bool][31]) -> Self

Whether the window should have borders and bars.

[Source][75]

#### pub fn always_on_bottom(self, always_on_bottom: [bool][31]) -> Self

Whether the window should always be below other windows.

[Source][76]

#### pub fn always_on_top(self, always_on_top: [bool][31]) -> Self

Whether the window should always be on top of other windows.

[Source][77]

#### pub fn visible_on_all_workspaces(self, visible_on_all_workspaces: [bool][31]) -> Self

Whether the window will be visible on all workspaces or virtual desktops.

[Source][78]

#### pub fn content_protected(self, protected: [bool][31]) -> Self

Prevents the window contents from being captured by other apps.

[Source][79]

#### pub fn icon(self, icon: [Image][80]<'a>) -> [Result][18]<Self>

Sets the window icon.

[Source][81]

#### pub fn skip_taskbar(self, skip: [bool][31]) -> Self

Sets whether or not the window icon should be hidden from the taskbar.

###### §Platform-specific

  * **macOS** : Unsupported.



[Source][82]

#### pub fn window_classname<S: [Into][12]<[String][13]>>(self, classname: S) -> Self

Sets custom name for Windows’ window class. **Windows only**.

[Source][83]

#### pub fn shadow(self, enable: [bool][31]) -> Self

Sets whether or not the window has shadow.

###### §Platform-specific

  * **Windows:**
    * `false` has no effect on decorated window, shadows are always ON.
    * `true` will make undecorated window have a 1px white border, and on Windows 11, it will have a rounded corners.
  * **Linux:** Unsupported.



[Source][84]

#### pub fn parent(self, parent: &[WebviewWindow][8]<R>) -> [Result][18]<Self>

Sets a parent to the window to be created.

###### §Platform-specific

  * **Windows** : This sets the passed parent as an owner window to the window to be created. From [MSDN owned windows docs][85]: 
    * An owned window is always above its owner in the z-order.
    * The system automatically destroys an owned window when its owner is destroyed.
    * An owned window is hidden when its owner is minimized.
  * **Linux** : This makes the new window transient for parent, see <https://docs.gtk.org/gtk3/method.Window.set_transient_for.html>
  * **macOS** : This adds the window as a child of parent, see <https://developer.apple.com/documentation/appkit/nswindow/1419152-addchildwindow?language=objc>



[Source][86]

#### pub fn owner(self, owner: &[WebviewWindow][8]<R>) -> [Result][18]<Self>

Set an owner to the window to be created.

From MSDN:

  * An owned window is always above its owner in the z-order.
  * The system automatically destroys an owned window when its owner is destroyed.
  * An owned window is hidden when its owner is minimized.



For more information, see <https://docs.microsoft.com/en-us/windows/win32/winmsg/window-features#owned-windows>

[Source][87]

#### pub fn owner_raw(self, owner: HWND) -> Self

Set an owner to the window to be created.

From MSDN:

  * An owned window is always above its owner in the z-order.
  * The system automatically destroys an owned window when its owner is destroyed.
  * An owned window is hidden when its owner is minimized.



For more information, see <https://docs.microsoft.com/en-us/windows/win32/winmsg/window-features#owned-windows>

[Source][88]

#### pub fn parent_raw(self, parent: HWND) -> Self

Sets a parent to the window to be created.

A child window has the WS_CHILD style and is confined to the client area of its parent window.

For more information, see <https://docs.microsoft.com/en-us/windows/win32/winmsg/window-features#child-windows>

[Source][89]

#### pub fn drag_and_drop(self, enabled: [bool][31]) -> Self

Enables or disables drag and drop support.

[Source][90]

#### pub fn effects(self, effects: WindowEffectsConfig) -> Self

Sets window effects.

Requires the window to be transparent.

###### §Platform-specific:

  * **Windows** : If using decorations or shadows, you may want to try this workaround <https://github.com/tauri-apps/tao/issues/72#issuecomment-975607891>
  * **Linux** : Unsupported



[Source][91]§

### impl<R: [Runtime][6], M: [Manager][7]<R>> [WebviewWindowBuilder][10]<'_, R, M>

Webview attributes.

[Source][92]

#### pub fn accept_first_mouse(self, accept: [bool][31]) -> Self

Sets whether clicking an inactive window also clicks through to the webview.

[Source][93]

#### pub fn initialization_script(self, script: impl [Into][12]<[String][13]>) -> Self

Adds the provided JavaScript to a list of scripts that should be run after the global object has been created, but before the HTML document has been parsed and before any other script included by the HTML document is run.

Since it runs on all top-level document navigations, it’s recommended to check the `window.location` to guard your script from running on unexpected origins.

This is executed only on the main frame. If you only want to run it in all frames, use [Self::initialization_script_for_all_frames][94] instead.

###### §Platform-specific

  * **Windows:** scripts are always added to subframes.
  * **Android:** When [addDocumentStartJavaScript] is not supported, we prepend initialization scripts to each HTML head (implementation only supported on custom protocol URLs). For remote URLs, we use [onPageStarted] which is not guaranteed to run before other scripts.



##### §Examples
[code] 
    const INIT_SCRIPT: &str = r#"
      if (window.location.origin === 'https://tauri.app') {
        console.log("hello world from js init script");
    
        window.__MY_CUSTOM_PROPERTY__ = { foo: 'bar' };
      }
    "#;
    
    fn main() {
      tauri::Builder::default()
        .setup(|app| {
          let webview = tauri::WebviewWindowBuilder::new(app, "label", tauri::WebviewUrl::App("index.html".into()))
            .initialization_script(INIT_SCRIPT)
            .build()?;
          Ok(())
        });
    }
[/code]

[Source][95]

#### pub fn initialization_script_for_all_frames( self, script: impl [Into][12]<[String][13]>, ) -> Self

Adds the provided JavaScript to a list of scripts that should be run after the global object has been created, but before the HTML document has been parsed and before any other script included by the HTML document is run.

Since it runs on all top-level document navigations and also child frame page navigations, it’s recommended to check the `window.location` to guard your script from running on unexpected origins.

This is executed on all frames (main frame and also sub frames). If you only want to run the script in the main frame, use [Self::initialization_script][96] instead.

###### §Platform-specific

  * **Android:** When [addDocumentStartJavaScript] is not supported, we prepend initialization scripts to each HTML head (implementation only supported on custom protocol URLs). For remote URLs, we use [onPageStarted] which is not guaranteed to run before other scripts.



##### §Examples
[code] 
    const INIT_SCRIPT: &str = r#"
      if (window.location.origin === 'https://tauri.app') {
        console.log("hello world from js init script");
    
        window.__MY_CUSTOM_PROPERTY__ = { foo: 'bar' };
      }
    "#;
    
    fn main() {
      tauri::Builder::default()
        .setup(|app| {
          let webview = tauri::WebviewWindowBuilder::new(app, "label", tauri::WebviewUrl::App("index.html".into()))
            .initialization_script_for_all_frames(INIT_SCRIPT)
            .build()?;
          Ok(())
        });
    }
[/code]

[Source][97]

#### pub fn user_agent(self, user_agent: &[str][98]) -> Self

Set the user agent for the webview

[Source][99]

#### pub fn additional_browser_args(self, additional_args: &[str][98]) -> Self

Set additional arguments for the webview.

###### §Platform-specific

  * **macOS / Linux / Android / iOS** : Unsupported.



###### §Warning

By default wry passes `--disable-features=msWebOOUI,msPdfOOUI,msSmartScreenProtection` so if you use this method, you also need to disable these components by yourself if you want.

[Source][100]

#### pub fn data_directory(self, data_directory: [PathBuf][101]) -> Self

Data directory for the webview.

[Source][102]

#### pub fn disable_drag_drop_handler(self) -> Self

Disables the drag and drop handler. This is required to use HTML5 drag and drop APIs on the frontend on Windows.

[Source][103]

#### pub fn enable_clipboard_access(self) -> Self

Enables clipboard access for the page rendered on **Linux** and **Windows**.

**macOS** doesn’t provide such method and is always enabled by default, but you still need to add menu item accelerators to use shortcuts.

[Source][104]

#### pub fn incognito(self, incognito: [bool][31]) -> Self

Enable or disable incognito mode for the WebView..

###### §Platform-specific:

**Android** : Unsupported.

[Source][105]

#### pub fn auto_resize(self) -> Self

Sets the webview to automatically grow and shrink its size and position when the parent window resizes.

[Source][106]

#### pub fn proxy_url(self, url: [Url][30]) -> Self

Set a proxy URL for the WebView for all network requests.

Must be either a `http://` or a `socks5://` URL.

[Source][107]

#### pub fn transparent(self, transparent: [bool][31]) -> Self

Whether the window should be transparent. If this is true, writing colors with alpha values different than `1.0` will produce a transparent window.

[Source][108]

#### pub fn zoom_hotkeys_enabled(self, enabled: [bool][31]) -> Self

Whether page zooming by hotkeys and mousewheel should be enabled or not.

###### §Platform-specific:

  * **Windows** : Controls WebView2’s [`IsZoomControlEnabled`][109] setting.

  * **MacOS / Linux** : Injects a polyfill that zooms in and out with `Ctrl/Cmd + [- = +]` hotkeys or mousewheel events, 20% in each step, ranging from 20% to 1000%. Requires `core:webview:allow-set-webview-zoom` permission

  * **Android / iOS** : Unsupported.




[Source][110]

#### pub fn browser_extensions_enabled(self, enabled: [bool][31]) -> Self

Whether browser extensions can be installed for the webview process

###### §Platform-specific:

  * **Windows** : Enables the WebView2 environment’s [`AreBrowserExtensionsEnabled`][111]
  * **MacOS / Linux / iOS / Android** \- Unsupported.



[Source][112]

#### pub fn extensions_path(self, path: impl [AsRef][113]<[Path][114]>) -> Self

Set the path from which to load extensions from. Extensions stored in this path should be unpacked Chrome extensions on Windows, and compiled `.so` extensions on Linux.

###### §Platform-specific:

  * **Windows** : Browser extensions must first be enabled. See [`browser_extensions_enabled`][115]
  * **MacOS / iOS / Android** \- Unsupported.



[Source][116]

#### pub fn data_store_identifier(self, data_store_identifier: [[u8][27]; [16][117]]) -> Self

Initialize the WebView with a custom data store identifier. Can be used as a replacement for data_directory not being available in WKWebView.

  * **macOS / iOS** : Available on macOS >= 14 and iOS >= 17
  * **Windows / Linux / Android** : Unsupported.



[Source][118]

#### pub fn use_https_scheme(self, enabled: [bool][31]) -> Self

Sets whether the custom protocols should use `https://<scheme>.localhost` instead of the default `http://<scheme>.localhost` on Windows and Android. Defaults to `false`.

###### §Note

Using a `https` scheme will NOT allow mixed content when trying to fetch `http` endpoints and therefore will not match the behavior of the `<scheme>://localhost` protocols used on macOS and Linux.

###### §Warning

Changing this value between releases will change the IndexedDB, cookies and localstorage location and your app will not be able to access the old data.

[Source][119]

#### pub fn devtools(self, enabled: [bool][31]) -> Self

Whether web inspector, which is usually called browser devtools, is enabled or not. Enabled by default.

This API works in **debug** builds, but requires `devtools` feature flag to enable it in **release** builds.

###### §Platform-specific

  * macOS: This will call private functions on **macOS**.
  * Android: Open `chrome://inspect/#devices` in Chrome to get the devtools window. Wry’s `WebView` devtools API isn’t supported on Android.
  * iOS: Open Safari > Develop > [Your Device Name] > [Your WebView] to get the devtools window.



[Source][120]

#### pub fn background_color(self, color: [Color][121]) -> Self

Set the window and webview background color.

###### §Platform-specific:

  * **Android / iOS:** Unsupported for the window layer.
  * **macOS / iOS** : Not implemented for the webview layer.
  * **Windows** : 
    * alpha channel is ignored for the window layer.
    * On Windows 7, alpha channel is ignored for the webview layer.
    * On Windows 8 and newer, if alpha channel is not `0`, it will be ignored.



[Source][122]

#### pub fn background_throttling(self, policy: BackgroundThrottlingPolicy) -> Self

Change the default background throttling behaviour.

By default, browsers use a suspend policy that will throttle timers and even unload the whole tab (view) to free resources after roughly 5 minutes when a view became minimized or hidden. This will pause all tasks until the documents visibility state changes back from hidden to visible by bringing the view back to the foreground.

###### §Platform-specific

  * **Linux / Windows / Android** : Unsupported. Workarounds like a pending WebLock transaction might suffice.
  * **iOS** : Supported since version 17.0+.
  * **macOS** : Supported since version 14.0+.



see https://github.com/tauri-apps/tauri/issues/5250#issuecomment-2569380578

[Source][123]

#### pub fn disable_javascript(self) -> Self

Whether JavaScript should be disabled.

[Source][124]

#### pub fn scroll_bar_style(self, style: [ScrollBarStyle][125]) -> Self

Specifies the native scrollbar style to use with the webview. CSS styles that modifier the scrollbar are applied on top of the native appearance configured here.

Defaults to [`ScrollBarStyle::Default`][126], which is the browser default.

###### §Platform-specific

  * **Windows** : 
    * [`ScrollBarStyle::FluentOverlay`][127] requires WebView2 Runtime version 125.0.2535.41 or higher, and does nothing on older versions.
    * This option must be given the same value for all webviews that target the same data directory. Use [`WebviewWindowBuilder::data_directory`][128] to change data directories if needed.
  * **Linux / Android / iOS / macOS** : Unsupported. Only supports `Default` and performs no operation.



[Source][129]

#### pub fn with_environment(self, environment: ICoreWebView2Environment) -> Self

Set the environment for the webview. Useful if you need to share the same environment, for instance when using the [`Self::on_new_window`][130].

[Source][131]

#### pub fn window_features(self, features: [NewWindowFeatures][33]) -> Self

Set the window features. Useful if you need to share the same window features, for instance when using the [`Self::on_new_window`][130].

## Auto Trait Implementations§

§

### impl<'a, R, M> [Freeze][132] for [WebviewWindowBuilder][10]<'a, R, M>

where <<R as Runtime<[EventLoopMessage][133]>>::WindowDispatcher as WindowDispatch<[EventLoopMessage][133]>>::WindowBuilder: [Freeze][132],

§

### impl<'a, R, M> ![RefUnwindSafe][134] for [WebviewWindowBuilder][10]<'a, R, M>

§

### impl<'a, R, M> [Send][23] for [WebviewWindowBuilder][10]<'a, R, M>

where <<R as Runtime<[EventLoopMessage][133]>>::WindowDispatcher as WindowDispatch<[EventLoopMessage][133]>>::WindowBuilder: [Send][23], M: [Sync][24],

§

### impl<'a, R, M> ![Sync][24] for [WebviewWindowBuilder][10]<'a, R, M>

§

### impl<'a, R, M> [Unpin][135] for [WebviewWindowBuilder][10]<'a, R, M>

where <<R as Runtime<[EventLoopMessage][133]>>::WindowDispatcher as WindowDispatch<[EventLoopMessage][133]>>::WindowBuilder: [Unpin][135],

§

### impl<'a, R, M> ![UnwindSafe][136] for [WebviewWindowBuilder][10]<'a, R, M>

## Blanket Implementations§

[Source][137]§

### impl<T> [Any][138] for T

where T: 'static + ?[Sized][139],

[Source][140]§

#### fn [type_id][141](&self) -> [TypeId][142]

Gets the `TypeId` of `self`. [Read more][141]

[Source][143]§

### impl<T> [Borrow][144]<T> for T

where T: ?[Sized][139],

[Source][145]§

#### fn [borrow][146](&self) -> [&T][14]

Immutably borrows from an owned value. [Read more][146]

[Source][147]§

### impl<T> [BorrowMut][148]<T> for T

where T: ?[Sized][139],

[Source][149]§

#### fn [borrow_mut][150](&mut self) -> [&mut T][14]

Mutably borrows from an owned value. [Read more][150]

[Source][151]§

### impl<T> [From][152]<T> for T

[Source][153]§

#### fn [from][154](t: T) -> T

Returns the argument unchanged.

[Source][155]§

### impl<T, U> [Into][12]<U> for T

where U: [From][152]<T>,

[Source][156]§

#### fn [into][157](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][152]<T> for U` chooses to do.

[Source][158]§

### impl<T, U> [TryFrom][159]<U> for T

where U: [Into][12]<T>,

[Source][160]§

#### type [Error][161] = [Infallible][162]

The type returned in the event of a conversion error.

[Source][163]§

#### fn [try_from][164](value: U) -> [Result][165]<T, <T as [TryFrom][159]<U>>::[Error][166]>

Performs the conversion.

[Source][167]§

### impl<T, U> [TryInto][168]<U> for T

where U: [TryFrom][159]<T>,

[Source][169]§

#### type [Error][170] = <U as [TryFrom][159]<T>>::[Error][166]

The type returned in the event of a conversion error.

[Source][171]§

#### fn [try_into][172](self) -> [Result][165]<U, <U as [TryFrom][159]<T>>::[Error][166]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/webview/webview_window.rs.html#52-55
   [6]: ../trait.Runtime.html (trait tauri::Runtime)
   [7]: ../trait.Manager.html (trait tauri::Manager)
   [8]: struct.WebviewWindow.html (struct tauri::webview::WebviewWindow)
   [9]: ../../src/tauri/webview/webview_window.rs.html#57-449
   [10]: struct.WebviewWindowBuilder.html (struct tauri::webview::WebviewWindowBuilder)
   [11]: ../../src/tauri/webview/webview_window.rs.html#105-111
   [12]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [13]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [14]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [15]: ../enum.WebviewUrl.html (enum tauri::WebviewUrl)
   [16]: https://github.com/tauri-apps/wry/issues/583
   [17]: ../../src/tauri/webview/webview_window.rs.html#154-159
   [18]: ../type.Result.html (type tauri::Result)
   [19]: ../../src/tauri/webview/webview_window.rs.html#195-201
   [20]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.Fn.html (trait core::ops::function::Fn)
   [21]: ../window/struct.Window.html (struct tauri::window::Window)
   [22]: ../menu/struct.MenuEvent.html (struct tauri::menu::MenuEvent)
   [23]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [24]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [25]: ../../src/tauri/webview/webview_window.rs.html#239-247
   [26]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [27]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [28]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [29]: ../../src/tauri/webview/webview_window.rs.html#270-273
   [30]: ../struct.Url.html (struct tauri::Url)
   [31]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [32]: ../../src/tauri/webview/webview_window.rs.html#320-328
   [33]: struct.NewWindowFeatures.html (struct tauri::webview::NewWindowFeatures)
   [34]: enum.NewWindowResponse.html (enum tauri::webview::NewWindowResponse)
   [35]: https://developer.mozilla.org/en-US/docs/Web/API/Window/open
   [36]: ../../src/tauri/webview/webview_window.rs.html#333-349
   [37]: ../../src/tauri/webview/webview_window.rs.html#391-397
   [38]: struct.Webview.html (struct tauri::webview::Webview)
   [39]: enum.DownloadEvent.html (enum tauri::webview::DownloadEvent)
   [40]: enum.DownloadEvent.html#variant.Requested (variant tauri::webview::DownloadEvent::Requested)
   [41]: ../../src/tauri/webview/webview_window.rs.html#428-442
   [42]: struct.PageLoadPayload.html (struct tauri::webview::PageLoadPayload)
   [43]: enum.PageLoadEvent.html#variant.Started (variant tauri::webview::PageLoadEvent::Started)
   [44]: enum.PageLoadEvent.html#variant.Finished (variant tauri::webview::PageLoadEvent::Finished)
   [45]: ../../src/tauri/webview/webview_window.rs.html#445-448
   [46]: ../../src/tauri/webview/webview_window.rs.html#453-897
   [47]: ../../src/tauri/webview/webview_window.rs.html#456-459
   [48]: ../menu/struct.Menu.html (struct tauri::menu::Menu)
   [49]: ../../src/tauri/webview/webview_window.rs.html#463-466
   [50]: ../../src/tauri/webview/webview_window.rs.html#470-473
   [51]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html
   [52]: ../../src/tauri/webview/webview_window.rs.html#477-480
   [53]: ../../src/tauri/webview/webview_window.rs.html#484-487
   [54]: ../../src/tauri/webview/webview_window.rs.html#491-494
   [55]: ../../src/tauri/webview/webview_window.rs.html#498-504
   [56]: ../struct.WindowSizeConstraints.html (struct tauri::WindowSizeConstraints)
   [57]: ../../src/tauri/webview/webview_window.rs.html#515-518
   [58]: ../../src/tauri/webview/webview_window.rs.html#529-532
   [59]: ../enum.Size.html (enum tauri::Size)
   [60]: ../../src/tauri/webview/webview_window.rs.html#537-540
   [61]: ../../src/tauri/webview/webview_window.rs.html#550-553
   [62]: ../../src/tauri/webview/webview_window.rs.html#561-564
   [63]: ../../src/tauri/webview/webview_window.rs.html#574-577
   [64]: ../../src/tauri/webview/webview_window.rs.html#581-584
   [65]: ../../src/tauri/webview/webview_window.rs.html#588-591
   [66]: ../../src/tauri/webview/webview_window.rs.html#599-603
   [67]: ../../src/tauri/webview/webview_window.rs.html#607-610
   [68]: ../../src/tauri/webview/webview_window.rs.html#614-618
   [69]: ../../src/tauri/webview/webview_window.rs.html#622-625
   [70]: ../../src/tauri/webview/webview_window.rs.html#629-632
   [71]: ../../src/tauri/webview/webview_window.rs.html#640-643
   [72]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [73]: ../enum.Theme.html (enum tauri::Theme)
   [74]: ../../src/tauri/webview/webview_window.rs.html#647-650
   [75]: ../../src/tauri/webview/webview_window.rs.html#654-657
   [76]: ../../src/tauri/webview/webview_window.rs.html#661-664
   [77]: ../../src/tauri/webview/webview_window.rs.html#668-673
   [78]: ../../src/tauri/webview/webview_window.rs.html#677-680
   [79]: ../../src/tauri/webview/webview_window.rs.html#683-686
   [80]: ../image/struct.Image.html (struct tauri::image::Image)
   [81]: ../../src/tauri/webview/webview_window.rs.html#694-697
   [82]: ../../src/tauri/webview/webview_window.rs.html#701-704
   [83]: ../../src/tauri/webview/webview_window.rs.html#716-719
   [84]: ../../src/tauri/webview/webview_window.rs.html#732-735
   [85]: https://docs.microsoft.com/en-us/windows/win32/winmsg/window-features#owned-windows
   [86]: ../../src/tauri/webview/webview_window.rs.html#746-749
   [87]: ../../src/tauri/webview/webview_window.rs.html#761-764
   [88]: ../../src/tauri/webview/webview_window.rs.html#773-776
   [89]: ../../src/tauri/webview/webview_window.rs.html#822-825
   [90]: ../../src/tauri/webview/webview_window.rs.html#893-896
   [91]: ../../src/tauri/webview/webview_window.rs.html#900-1377
   [92]: ../../src/tauri/webview/webview_window.rs.html#903-906
   [93]: ../../src/tauri/webview/webview_window.rs.html#946-949
   [94]: struct.WebviewWindowBuilder.html#method.initialization_script_for_all_frames (method tauri::webview::WebviewWindowBuilder::initialization_script_for_all_frames)
   [95]: ../../src/tauri/webview/webview_window.rs.html#988-993
   [96]: struct.WebviewWindowBuilder.html#method.initialization_script (method tauri::webview::WebviewWindowBuilder::initialization_script)
   [97]: ../../src/tauri/webview/webview_window.rs.html#997-1000
   [98]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [99]: ../../src/tauri/webview/webview_window.rs.html#1013-1018
   [100]: ../../src/tauri/webview/webview_window.rs.html#1022-1025
   [101]: https://doc.rust-lang.org/1.94.1/std/path/struct.PathBuf.html (struct std::path::PathBuf)
   [102]: ../../src/tauri/webview/webview_window.rs.html#1029-1032
   [103]: ../../src/tauri/webview/webview_window.rs.html#1039-1042
   [104]: ../../src/tauri/webview/webview_window.rs.html#1050-1053
   [105]: ../../src/tauri/webview/webview_window.rs.html#1057-1060
   [106]: ../../src/tauri/webview/webview_window.rs.html#1066-1069
   [107]: ../../src/tauri/webview/webview_window.rs.html#1079-1086
   [108]: ../../src/tauri/webview/webview_window.rs.html#1098-1101
   [109]: https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings?view=webview2-winrt-1.0.2420.47#iszoomcontrolenabled
   [110]: ../../src/tauri/webview/webview_window.rs.html#1110-1113
   [111]: https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.2739.15#arebrowserextensionsenabled
   [112]: ../../src/tauri/webview/webview_window.rs.html#1122-1125
   [113]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [114]: https://doc.rust-lang.org/1.94.1/std/path/struct.Path.html (struct std::path::Path)
   [115]: struct.WebviewWindowBuilder.html#method.browser_extensions_enabled (method tauri::webview::WebviewWindowBuilder::browser_extensions_enabled)
   [116]: ../../src/tauri/webview/webview_window.rs.html#1133-1138
   [117]: https://doc.rust-lang.org/1.94.1/std/primitive.array.html
   [118]: ../../src/tauri/webview/webview_window.rs.html#1150-1153
   [119]: ../../src/tauri/webview/webview_window.rs.html#1165-1168
   [120]: ../../src/tauri/webview/webview_window.rs.html#1181-1185
   [121]: struct.Color.html (struct tauri::webview::Color)
   [122]: ../../src/tauri/webview/webview_window.rs.html#1202-1205
   [123]: ../../src/tauri/webview/webview_window.rs.html#1209-1212
   [124]: ../../src/tauri/webview/webview_window.rs.html#1228-1231
   [125]: enum.ScrollBarStyle.html (enum tauri::webview::ScrollBarStyle)
   [126]: enum.ScrollBarStyle.html#variant.Default (variant tauri::webview::ScrollBarStyle::Default)
   [127]: enum.ScrollBarStyle.html#variant.FluentOverlay (variant tauri::webview::ScrollBarStyle::FluentOverlay)
   [128]: struct.WebviewWindowBuilder.html#method.data_directory (method tauri::webview::WebviewWindowBuilder::data_directory)
   [129]: ../../src/tauri/webview/webview_window.rs.html#1288-1294
   [130]: struct.WebviewWindowBuilder.html#method.on_new_window (method tauri::webview::WebviewWindowBuilder::on_new_window)
   [131]: ../../src/tauri/webview/webview_window.rs.html#1337-1376
   [132]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [133]: ../enum.EventLoopMessage.html (enum tauri::EventLoopMessage)
   [134]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [135]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [136]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [137]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [138]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [139]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [140]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [141]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [142]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [143]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [144]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [145]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [146]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [147]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [148]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [149]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [150]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [151]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [152]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [153]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [154]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [155]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [156]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [157]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [158]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [159]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [160]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [161]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [162]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [163]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [164]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [165]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [166]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [167]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [168]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [169]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [170]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [171]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [172]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

