## Crate tauri

[![logo][1]][2]

## [tauri][2]2.10.3

  * [All Items][3]



### Sections

  * Cargo features
    * Cargo allowlist features



### Crate Items

  * Re-exports
  * Modules
  * Macros
  * Structs
  * Enums
  * Constants
  * Traits
  * Functions
  * Type Aliases
  * Attribute Macros



# Crate tauri Copy item path

[Source][4]

Expand description

Tauri is a framework for building tiny, blazing fast binaries for all major desktop platforms. Developers can integrate any front-end framework that compiles to HTML, JS and CSS for building their user interface. The backend of the application is a rust-sourced binary with an API that the front-end can interact with.

## §Cargo features

The following are a list of [Cargo features][5] that can be enabled or disabled:

  * **wry** _(enabled by default)_ : Enables the [wry][6] runtime. Only disable it if you want a custom runtime.
  * **common-controls-v6** _(enabled by default)_ : Enables [Common Controls v6][7] support on Windows, mainly for the predefined `about` menu item.
  * **x11** _(enabled by default)_ : Enables X11 support. Disable this if you only target Wayland.
  * **unstable** : Enables unstable features. Be careful, it might introduce breaking changes in future minor releases.
  * **tracing** : Enables [`tracing`][8] for window startup, plugins, `Window::eval`, events, IPC, updater and custom protocol request handlers.
  * **test** : Enables the [`mod@test`] module exposing unit test helpers.
  * **objc-exception** : This feature flag is no-op since 2.3.0.
  * **linux-libxdo** : Enables linking to libxdo which enables Cut, Copy, Paste and SelectAll menu items to work on Linux.
  * **isolation** : Enables the isolation pattern. Enabled by default if the `app > security > pattern > use` config option is set to `isolation` on the `tauri.conf.json` file.
  * **custom-protocol** : Feature managed by the Tauri CLI. When enabled, Tauri assumes a production environment instead of a development one.
  * **devtools** : Enables the developer tools (Web inspector) and [`window::Window`][9]. Enabled by default on debug builds. On macOS it uses private APIs, so you can’t enable it if your app will be published to the App Store.
  * **native-tls** : Provides TLS support to connect over HTTPS.
  * **native-tls-vendored** : Compile and statically link to a vendored copy of OpenSSL.
  * **rustls-tls** : Provides TLS support to connect over HTTPS using rustls.
  * **process-relaunch-dangerous-allow-symlink-macos** : Allows the [`process::current_binary`][10] function to allow symlinks on macOS (this is dangerous, see the Security section in the documentation website).
  * **tray-icon** : Enables application tray icon APIs. Enabled by default if the `trayIcon` config is defined on the `tauri.conf.json` file.
  * **macos-private-api** : Enables features only available in **macOS** ’s private APIs, currently the `transparent` window functionality and the `fullScreenEnabled` preference setting to `true`. Enabled by default if the `tauri > macosPrivateApi` config flag is set to `true` on the `tauri.conf.json` file.
  * **webview-data-url** : Enables usage of data URLs on the webview.
  * **compression** *(enabled by default): Enables asset compression. You should only disable this if you want faster compile times in release builds - it produces larger binaries.
  * **config-json5** : Adds support to JSON5 format for `tauri.conf.json`.
  * **config-toml** : Adds support to TOML format for the configuration `Tauri.toml`.
  * **image-ico** : Adds support to parse `.ico` image, see [`Image`].
  * **image-png** : Adds support to parse `.png` image, see [`Image`].
  * **macos-proxy** : Adds support for [`WebviewBuilder::proxy_url`] on macOS. Requires macOS 14+.
  * **specta** : Add support for [`specta::specta`][11] with Tauri arguments such as [`State`][12], [`Window`][13] and [`AppHandle`][14]
  * **dynamic-acl** _(enabled by default)_ : Enables you to add ACLs at runtime, notably it enables the [`Manager::add_capability`][15] function.



### §Cargo allowlist features

The following are a list of [Cargo features][5] that enables commands for Tauri’s API package. These features are automatically enabled by the Tauri CLI based on the `allowlist` configuration under `tauri.conf.json`.

#### §Protocol allowlist

  * **protocol-asset** : Enables the `asset` custom protocol.



## Re-exports§

`pub use self::webview::[Webview][16];`
`pub use self::webview::[WebviewWindow][17];`
`pub use self::webview::[WebviewWindowBuilder][18];`
`pub use self::window::[Monitor][19];`
`pub use self::window::[Window][13];`
`pub use tauri_utils as utils;`
`pub use http;`
`pub use [scope][20]::*;`

## Modules§

[async_runtime][21]
    The singleton async runtime used by Tauri and exposed to users.
[image][22]
    Image types used by this crate and also referenced by the JavaScript API layer.
[ipc][23]
    Types and functions related to Inter Procedure Call(IPC).
[menu][24]
    Menu types and utilities.
[path][25]
    Path APIs.
[plugin][26]
    The Tauri plugin extension to expand Tauri functionality.
[process][27]
    Types and functions related to child processes management.
[scope][20]
    The allowlist scopes.
[webview][28]
    The Tauri webview types and functions.
[window][29]
    The Tauri window types and functions.

## Macros§

[generate_context][30]
    Reads the config file at compile time and generates a [`Context`][31] based on its content.
[generate_handler][32]
    Accepts a list of command functions. Creates a handler that allows commands to be called from JS with invoke().
[include_image][33]
    Convert a .png or .ico icon to an Image for things like `tauri::tray::TrayIconBuilder` to consume, relative paths are resolved from `CARGO_MANIFEST_DIR`, not current file
[tauri_build_context][34]
    Include a [`Context`][31] that was generated by [`tauri-build`][35] inside your build script.

## Structs§

[App][36]
    The instance of the currently running application.
[AppHandle][14]
    A handle to the currently running application.
[Asset][37]
    A resolved asset.
[AssetResolver][38]
    The asset resolver is a helper to access the [`tauri_utils::assets::Assets`] interface.
[Builder][39]
    Builds a Tauri application.
[CloseRequestApi][40]
    Api exposed on the `CloseRequested` event.
[Config][41]
    The Tauri configuration object. It is read from a file where you can define your frontend assets, configure the bundler and define a tray icon.
[Context][31]
    User supplied data required inside of a Tauri application.
[Env][42]
    Information about environment variables.
[Event][43]
    An event that was emitted.
[ExitRequestApi][44]
    Api exposed on the `ExitRequested` event.
[LogicalPosition][45]
    A position represented in logical pixels.
[LogicalRect][46]
    A rectangular region in logical pixels.
[LogicalSize][47]
    A size represented in logical pixels.
[LogicalUnit][48]
    A logical pixel unit.
[PackageInfo][49]
    `tauri::App` package information.
[PhysicalPosition][50]
    A position represented in physical pixels.
[PhysicalRect][51]
    A rectangular region in physical pixels.
[PhysicalSize][52]
    A size represented in physical pixels.
[PhysicalUnit][53]
    A physical pixel unit.
[Rect][54]
    A rectangular region.
[ResourceTable][55]
    Map-like data structure storing Tauri’s resources (equivalent to file descriptors).
[State][12]
    A guard for a state value.
[StateManager][56]
    The Tauri state manager.
[UriSchemeContext][57]
    Uri scheme protocol context
[UriSchemeResponder][58]
    Async uri scheme protocol responder.
[Url][59]
    A parsed URL record.
[WindowSizeConstraints][60]
    Window size constraints

## Enums§

[CursorIcon][61]
    Describes the appearance of the mouse cursor.
[DeviceEventFilter][62]
[DragDropEvent][63]
    The drag drop event payload.
[Error][64]
    Runtime errors that can happen inside a Tauri application.
[EventLoopMessage][65]
    The user event type.
[EventTarget][66]
    Event Target
[Pattern][67]
    An application pattern.
[PixelUnit][68]
    A pixel unit that’s either physical or logical.
[Position][69]
    A position that’s either physical or logical.
[RunEvent][70]
    An application event, triggered from the event loop.
[Size][71]
    A size that’s either physical or logical.
[Theme][72]
    System theme.
[TitleBarStyle][73]
    How the window title bar should be displayed on macOS.
[UserAttentionType][74]
    Type of user attention requested on a window.
[WebviewEvent][75]
    An event from a window.
[WebviewUrl][76]
    An URL to open on a Tauri webview window.
[WindowEvent][77]
    An event from a window.

## Constants§

[RESTART_EXIT_CODE][78]
    The exit code on [`RunEvent::ExitRequested`][79] when [`AppHandle`][80] is called.
[VERSION][81]
    The Tauri version.

## Traits§

[Assets][82]
    Represents a container of file assets that are retrievable during runtime.
[Emitter][83]
    Emit events.
[Listener][84]
    Listen to events.
[Manager][85]
    Manages a running application.
[Pixel][86]
[Resource][87]
    Resources are Rust objects that are stored in [ResourceTable][55] and managed by tauri.
[Runtime][88]
    The webview runtime interface. A wrapper around [`runtime::Runtime`] with the proper user event type associated.
[RuntimeHandle][89]
    The webview runtime handle. A wrapper around [`runtime::RuntimeHandle`] with the proper user event type associated.

## Functions§

[is_dev][90]
    Whether we are running in development mode or not.
[webview_version][91]
    Get WebView/Webkit version on current platform.

## Type Aliases§

[EventId][92]
    Unique id of an event.
[ResourceId][93]
    A `ResourceId` is an integer value referencing a resource. It could be considered to be the tauri equivalent of a `file descriptor` in POSIX like operating systems.
[Result][94]
    `Result<T, ::tauri::Error>`
[SyncTask][95]
    A task to run on the main thread.
[Wry][96]
    A Tauri [`Runtime`][88] wrapper around wry.
[WryHandle][97]
    A Tauri [`RuntimeHandle`][89] wrapper around wry.

## Attribute Macros§

[command][98]
    Mark a function as a command handler. It creates a wrapper function with the necessary glue code.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: all.html
   [4]: ../src/tauri/lib.rs.html#5-1256
   [5]: https://doc.rust-lang.org/stable/cargo/reference/manifest.html#the-features-section
   [6]: https://github.com/tauri-apps/wry
   [7]: https://learn.microsoft.com/en-us/windows/win32/controls/common-control-versions
   [8]: https://docs.rs/tracing/latest/tracing
   [9]: window/struct.Window.html#method.open_devtools (struct tauri::window::Window)
   [10]: process/fn.current_binary.html (fn tauri::process::current_binary)
   [11]: https://docs.rs/specta/%5E2.0.0-rc.9/specta/attr.specta.html
   [12]: struct.State.html (struct tauri::State)
   [13]: window/struct.Window.html (struct tauri::window::Window)
   [14]: struct.AppHandle.html (struct tauri::AppHandle)
   [15]: trait.Manager.html#method.add_capability (method tauri::Manager::add_capability)
   [16]: webview/struct.Webview.html (struct tauri::webview::Webview)
   [17]: webview/struct.WebviewWindow.html (struct tauri::webview::WebviewWindow)
   [18]: webview/struct.WebviewWindowBuilder.html (struct tauri::webview::WebviewWindowBuilder)
   [19]: window/struct.Monitor.html (struct tauri::window::Monitor)
   [20]: scope/index.html (mod tauri::scope)
   [21]: async_runtime/index.html (mod tauri::async_runtime)
   [22]: image/index.html (mod tauri::image)
   [23]: ipc/index.html (mod tauri::ipc)
   [24]: menu/index.html (mod tauri::menu)
   [25]: path/index.html (mod tauri::path)
   [26]: plugin/index.html (mod tauri::plugin)
   [27]: process/index.html (mod tauri::process)
   [28]: webview/index.html (mod tauri::webview)
   [29]: window/index.html (mod tauri::window)
   [30]: macro.generate_context.html (macro tauri::generate_context)
   [31]: struct.Context.html (struct tauri::Context)
   [32]: macro.generate_handler.html (macro tauri::generate_handler)
   [33]: macro.include_image.html (macro tauri::include_image)
   [34]: macro.tauri_build_context.html (macro tauri::tauri_build_context)
   [35]: https://docs.rs/tauri-build
   [36]: struct.App.html (struct tauri::App)
   [37]: struct.Asset.html (struct tauri::Asset)
   [38]: struct.AssetResolver.html (struct tauri::AssetResolver)
   [39]: struct.Builder.html (struct tauri::Builder)
   [40]: struct.CloseRequestApi.html (struct tauri::CloseRequestApi)
   [41]: struct.Config.html (struct tauri::Config)
   [42]: struct.Env.html (struct tauri::Env)
   [43]: struct.Event.html (struct tauri::Event)
   [44]: struct.ExitRequestApi.html (struct tauri::ExitRequestApi)
   [45]: struct.LogicalPosition.html (struct tauri::LogicalPosition)
   [46]: struct.LogicalRect.html (struct tauri::LogicalRect)
   [47]: struct.LogicalSize.html (struct tauri::LogicalSize)
   [48]: struct.LogicalUnit.html (struct tauri::LogicalUnit)
   [49]: struct.PackageInfo.html (struct tauri::PackageInfo)
   [50]: struct.PhysicalPosition.html (struct tauri::PhysicalPosition)
   [51]: struct.PhysicalRect.html (struct tauri::PhysicalRect)
   [52]: struct.PhysicalSize.html (struct tauri::PhysicalSize)
   [53]: struct.PhysicalUnit.html (struct tauri::PhysicalUnit)
   [54]: struct.Rect.html (struct tauri::Rect)
   [55]: struct.ResourceTable.html (struct tauri::ResourceTable)
   [56]: struct.StateManager.html (struct tauri::StateManager)
   [57]: struct.UriSchemeContext.html (struct tauri::UriSchemeContext)
   [58]: struct.UriSchemeResponder.html (struct tauri::UriSchemeResponder)
   [59]: struct.Url.html (struct tauri::Url)
   [60]: struct.WindowSizeConstraints.html (struct tauri::WindowSizeConstraints)
   [61]: enum.CursorIcon.html (enum tauri::CursorIcon)
   [62]: enum.DeviceEventFilter.html (enum tauri::DeviceEventFilter)
   [63]: enum.DragDropEvent.html (enum tauri::DragDropEvent)
   [64]: enum.Error.html (enum tauri::Error)
   [65]: enum.EventLoopMessage.html (enum tauri::EventLoopMessage)
   [66]: enum.EventTarget.html (enum tauri::EventTarget)
   [67]: enum.Pattern.html (enum tauri::Pattern)
   [68]: enum.PixelUnit.html (enum tauri::PixelUnit)
   [69]: enum.Position.html (enum tauri::Position)
   [70]: enum.RunEvent.html (enum tauri::RunEvent)
   [71]: enum.Size.html (enum tauri::Size)
   [72]: enum.Theme.html (enum tauri::Theme)
   [73]: enum.TitleBarStyle.html (enum tauri::TitleBarStyle)
   [74]: enum.UserAttentionType.html (enum tauri::UserAttentionType)
   [75]: enum.WebviewEvent.html (enum tauri::WebviewEvent)
   [76]: enum.WebviewUrl.html (enum tauri::WebviewUrl)
   [77]: enum.WindowEvent.html (enum tauri::WindowEvent)
   [78]: constant.RESTART_EXIT_CODE.html (constant tauri::RESTART_EXIT_CODE)
   [79]: enum.RunEvent.html#variant.ExitRequested (variant tauri::RunEvent::ExitRequested)
   [80]: struct.AppHandle.html#method.restart (struct tauri::AppHandle)
   [81]: constant.VERSION.html (constant tauri::VERSION)
   [82]: trait.Assets.html (trait tauri::Assets)
   [83]: trait.Emitter.html (trait tauri::Emitter)
   [84]: trait.Listener.html (trait tauri::Listener)
   [85]: trait.Manager.html (trait tauri::Manager)
   [86]: trait.Pixel.html (trait tauri::Pixel)
   [87]: trait.Resource.html (trait tauri::Resource)
   [88]: trait.Runtime.html (trait tauri::Runtime)
   [89]: trait.RuntimeHandle.html (trait tauri::RuntimeHandle)
   [90]: fn.is_dev.html (fn tauri::is_dev)
   [91]: fn.webview_version.html (fn tauri::webview_version)
   [92]: type.EventId.html (type tauri::EventId)
   [93]: type.ResourceId.html (type tauri::ResourceId)
   [94]: type.Result.html (type tauri::Result)
   [95]: type.SyncTask.html (type tauri::SyncTask)
   [96]: type.Wry.html (type tauri::Wry)
   [97]: type.WryHandle.html (type tauri::WryHandle)
   [98]: attr.command.html (attr tauri::command)

