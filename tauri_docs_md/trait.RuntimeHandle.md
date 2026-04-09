## RuntimeHandle

[![logo][1]][2]

## [tauri][2]2.10.3

## RuntimeHandle

### Dyn Compatibility

### Implementors

## [In crate tauri][3]

[tauri][3]

# Trait RuntimeHandle Copy item path

[Source][4]
[code] 
    pub trait RuntimeHandle: RuntimeHandle<[EventLoopMessage][5]> { }
[/code]

Expand description

The webview runtime handle. A wrapper around [`runtime::RuntimeHandle`] with the proper user event type associated.

## Dyn Compatibility§

This trait is **not** [dyn compatible][6].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementors§

[Source][7]§

### impl<R: RuntimeHandle<[EventLoopMessage][5]>> [RuntimeHandle][8] for R

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/lib.rs.html#272
   [5]: enum.EventLoopMessage.html (enum tauri::EventLoopMessage)
   [6]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [7]: ../src/tauri/lib.rs.html#275
   [8]: trait.RuntimeHandle.html (trait tauri::RuntimeHandle)

