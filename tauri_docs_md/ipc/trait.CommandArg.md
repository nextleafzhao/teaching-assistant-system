## CommandArg

[![logo][1]][2]

## [tauri][2]2.10.3

## CommandArg

### Sections

  * Command Arguments
  * Provided Implementations



### Required Methods

  * from_command



### Dyn Compatibility

### Implementors

## [In tauri::ipc][3]

[tauri][4]::[ipc][3]

# Trait CommandArg Copy item path

[Source][5]
[code] 
    pub trait CommandArg<'de, R: [Runtime][6]>: [Sized][7] {
        // Required method
        fn from_command(command: [CommandItem][8]<'de, R>) -> [Result][9]<Self, [InvokeError][10]>;
    }
[/code]

Expand description

Trait implemented by command arguments to derive a value from a [`CommandItem`][8].

## §Command Arguments

A command argument is any type that represents an item parsable from a [`CommandItem`][8]. Most implementations will use the data stored in [`InvokeMessage`][11] since [`CommandItem`][8] is mostly a wrapper around it.

## §Provided Implementations

Tauri implements [`CommandArg`][12] automatically for a number of types.

  * [`crate::Window`][13]
  * [`crate::State`][14]
  * `T where T: serde::Deserialize`
    * Any type that implements `Deserialize` can automatically be used as a [`CommandArg`][12].



## Required Methods§

[Source][15]

#### fn from_command(command: [CommandItem][8]<'de, R>) -> [Result][9]<Self, [InvokeError][10]>

Derives an instance of `Self` from the [`CommandItem`][8].

If the derivation fails, the corresponding message will be rejected using [`InvokeMessage`][16].

## Dyn Compatibility§

This trait is **not** [dyn compatible][17].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementors§

[Source][18]§

### impl<'a, R: [Runtime][6]> [CommandArg][12]<'a, R> for [Request][19]<'a>

[Source][20]§

### impl<'a, R: [Runtime][6], T: [ScopeObject][21]> [CommandArg][12]<'a, R> for [CommandScope][22]<T>

[Source][23]§

### impl<'a, R: [Runtime][6], T: [ScopeObject][21]> [CommandArg][12]<'a, R> for [GlobalScope][24]<T>

[Source][25]§

### impl<'de, D: [Deserialize][26]<'de>, R: [Runtime][6]> [CommandArg][12]<'de, R> for D

Automatically implement [`CommandArg`][12] for any type that can be deserialized.

[Source][27]§

### impl<'de, R: [Runtime][6]> [CommandArg][12]<'de, R> for [AppHandle][28]<R>

[Source][29]§

### impl<'de, R: [Runtime][6]> [CommandArg][12]<'de, R> for [Webview][30]<R>

[Source][31]§

### impl<'de, R: [Runtime][6]> [CommandArg][12]<'de, R> for [WebviewWindow][32]<R>

[Source][33]§

### impl<'de, R: [Runtime][6]> [CommandArg][12]<'de, R> for [Window][13]<R>

[Source][34]§

### impl<'de, R: [Runtime][6], TSend> [CommandArg][12]<'de, R> for [Channel][35]<TSend>

[Source][36]§

### impl<'r, 'de: 'r, T: [Send][37] \+ [Sync][38] \+ 'static, R: [Runtime][6]> [CommandArg][12]<'de, R> for [State][14]<'r, T>

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/ipc/command.rs.html#54-59
   [6]: ../trait.Runtime.html (trait tauri::Runtime)
   [7]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [8]: struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [9]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [10]: struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [11]: struct.InvokeMessage.html (struct tauri::ipc::InvokeMessage)
   [12]: trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [13]: ../window/struct.Window.html (struct tauri::window::Window)
   [14]: ../struct.State.html (struct tauri::State)
   [15]: ../../src/tauri/ipc/command.rs.html#58
   [16]: struct.InvokeMessage.html#reject (struct tauri::ipc::InvokeMessage)
   [17]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [18]: ../../src/tauri/ipc/mod.rs.html#165-173
   [19]: struct.Request.html (struct tauri::ipc::Request)
   [20]: ../../src/tauri/ipc/authority.rs.html#609-627
   [21]: trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [22]: struct.CommandScope.html (struct tauri::ipc::CommandScope)
   [23]: ../../src/tauri/ipc/authority.rs.html#656-665
   [24]: struct.GlobalScope.html (struct tauri::ipc::GlobalScope)
   [25]: ../../src/tauri/ipc/command.rs.html#62-70
   [26]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html (trait serde_core::de::Deserialize)
   [27]: ../../src/tauri/app.rs.html#444-449
   [28]: ../struct.AppHandle.html (struct tauri::AppHandle)
   [29]: ../../src/tauri/webview/mod.rs.html#2283-2288
   [30]: ../webview/struct.Webview.html (struct tauri::webview::Webview)
   [31]: ../../src/tauri/webview/webview_window.rs.html#1428-1439
   [32]: ../webview/struct.WebviewWindow.html (struct tauri::webview::WebviewWindow)
   [33]: ../../src/tauri/window/mod.rs.html#1014-1019
   [34]: ../../src/tauri/ipc/channel.rs.html#300-316
   [35]: struct.Channel.html (struct tauri::ipc::Channel)
   [36]: ../../src/tauri/state.rs.html#60-70
   [37]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [38]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)

