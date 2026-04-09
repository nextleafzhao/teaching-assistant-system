## Runtime

[![logo][1]][2]

## [tauri][2]2.10.3

## Runtime

### Dyn Compatibility

### Implementors

## [In crate tauri][3]

[tauri][3]

# Trait Runtime Copy item path

[Source][4]
[code] 
    pub trait Runtime: Runtime<[EventLoopMessage][5]> { }
[/code]

Expand description

The webview runtime interface. A wrapper around [`runtime::Runtime`] with the proper user event type associated.

## Dyn Compatibility§

This trait is **not** [dyn compatible][6].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementors§

[Source][7]§

### impl<W: Runtime<[EventLoopMessage][5]>> [Runtime][8] for W

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/lib.rs.html#270
   [5]: enum.EventLoopMessage.html (enum tauri::EventLoopMessage)
   [6]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [7]: ../src/tauri/lib.rs.html#274
   [8]: trait.Runtime.html (trait tauri::Runtime)

