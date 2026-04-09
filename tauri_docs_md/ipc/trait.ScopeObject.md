## ScopeObject

[![logo][1]][2]

## [tauri][2]2.10.3

## ScopeObject

### Required Associated Types

  * Error



### Required Methods

  * deserialize



### Dyn Compatibility

### Implementors

## [In tauri::ipc][3]

[tauri][4]::[ipc][3]

# Trait ScopeObject Copy item path

[Source][5]
[code] 
    pub trait ScopeObject:
        [Sized][6]
        + [Send][7]
        + [Sync][8]
        + [Debug][9]
        + 'static {
        type Error: [Error][10] + [Send][7] + [Sync][8];
    
        // Required method
        fn deserialize<R: [Runtime][11]>(
            app: &[AppHandle][12]<R>,
            raw: Value,
        ) -> [Result][13]<Self, Self::[Error][14]>;
    }
[/code]

Expand description

Marks a type as a scope object.

Usually you will just rely on [`serde::de::DeserializeOwned`][15] instead of implementing it manually, though this is useful if you need to do some initialization logic on the type itself.

## Required Associated Types§

[Source][16]

#### type Error: [Error][10] \+ [Send][7] \+ [Sync][8]

The error type.

## Required Methods§

[Source][17]

#### fn deserialize<R: [Runtime][11]>( app: &[AppHandle][12]<R>, raw: Value, ) -> [Result][13]<Self, Self::[Error][14]>

Deserialize the raw scope value.

## Dyn Compatibility§

This trait is **not** [dyn compatible][18].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementors§

[Source][19]§

### impl<T: [Send][7] \+ [Sync][8] \+ [Debug][9] \+ [DeserializeOwned][15] \+ 'static> [ScopeObject][20] for T

[Source][21]§

#### type Error = [Error][22]

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/ipc/authority.rs.html#679-684
   [6]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [7]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [8]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [9]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [10]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [11]: ../trait.Runtime.html (trait tauri::Runtime)
   [12]: ../struct.AppHandle.html (struct tauri::AppHandle)
   [13]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [14]: trait.ScopeObject.html#associatedtype.Error (type tauri::ipc::ScopeObject::Error)
   [15]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)
   [16]: ../../src/tauri/ipc/authority.rs.html#681
   [17]: ../../src/tauri/ipc/authority.rs.html#683
   [18]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [19]: ../../src/tauri/ipc/authority.rs.html#686-691
   [20]: trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [21]: ../../src/tauri/ipc/authority.rs.html#687
   [22]: https://docs.rs/serde_json/1.0.149/serde_json/error/struct.Error.html (struct serde_json::error::Error)

