## Module webview

[![logo][1]][2]

## [tauri][2]2.10.3

## Module webview

### Module Items

  * Re-exports
  * Structs
  * Enums



## [In crate tauri][3]

[tauri][3]

# Module webview Copy item path

[Source][4]

Expand description

The Tauri webview types and functions.

## Re-exports§

`pub use cookie;`

## Structs§

[Color][5]
    A tuple struct of RGBA colors. Each value has minimum of 0 and maximum of 255.
[Cookie][6]
    Representation of an HTTP cookie.
[InvokeRequest][7]
    The IPC invoke request.
[NewWindowFeatures][8]
    Window features of a window requested to open.
[PageLoadPayload][9]
    The payload for the [`WebviewBuilder::on_page_load`] hook.
[PlatformWebview][10]
    The platform webview handle. Accessed with [`Webview`][11];
[ResolvedScope][12]
    Resolved scope that can be obtained via [`Webview::resolve_command_scope`][13].
[Url][14]
    A parsed URL record.
[Webview][15]
    Webview.
[WebviewWindow][16]
    A type that wraps a [`Window`][17] together with a [`Webview`][15].
[WebviewWindowBuilder][18]
    A builder for [`WebviewWindow`][16], a window that hosts a single webview.

## Enums§

[DownloadEvent][19]
    Download event for the [`WebviewBuilder#method.on_download`] hook.
[NewWindowResponse][20]
    Response for the new window request handler.
[PageLoadEvent][21]
    Kind of event for the page load handler.
[ScrollBarStyle][22]
    The scrollbar style to use in the webview.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: ../index.html
   [4]: ../../src/tauri/webview/mod.rs.html#5-2336
   [5]: struct.Color.html (struct tauri::webview::Color)
   [6]: struct.Cookie.html (struct tauri::webview::Cookie)
   [7]: struct.InvokeRequest.html (struct tauri::webview::InvokeRequest)
   [8]: struct.NewWindowFeatures.html (struct tauri::webview::NewWindowFeatures)
   [9]: struct.PageLoadPayload.html (struct tauri::webview::PageLoadPayload)
   [10]: struct.PlatformWebview.html (struct tauri::webview::PlatformWebview)
   [11]: struct.Webview.html#method.with_webview (struct tauri::webview::Webview)
   [12]: struct.ResolvedScope.html (struct tauri::webview::ResolvedScope)
   [13]: struct.Webview.html#method.resolve_command_scope (method tauri::webview::Webview::resolve_command_scope)
   [14]: struct.Url.html (struct tauri::webview::Url)
   [15]: struct.Webview.html (struct tauri::webview::Webview)
   [16]: struct.WebviewWindow.html (struct tauri::webview::WebviewWindow)
   [17]: ../window/struct.Window.html (struct tauri::window::Window)
   [18]: struct.WebviewWindowBuilder.html (struct tauri::webview::WebviewWindowBuilder)
   [19]: enum.DownloadEvent.html (enum tauri::webview::DownloadEvent)
   [20]: enum.NewWindowResponse.html (enum tauri::webview::NewWindowResponse)
   [21]: enum.PageLoadEvent.html (enum tauri::webview::PageLoadEvent)
   [22]: enum.ScrollBarStyle.html (enum tauri::webview::ScrollBarStyle)

