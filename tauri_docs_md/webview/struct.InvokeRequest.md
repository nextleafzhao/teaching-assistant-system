## InvokeRequest

[![logo][1]][2]

## [tauri][2]2.10.3

## InvokeRequest

### Sections

  * Stability



### Fields

  * body
  * callback
  * cmd
  * error
  * headers
  * invoke_key
  * url



### Trait Implementations

  * Debug



### Auto Trait Implementations

  * Freeze
  * RefUnwindSafe
  * Send
  * Sync
  * Unpin
  * UnwindSafe



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

# Struct InvokeRequest Copy item path

[Source][5]
[code] 
    pub struct InvokeRequest {
        pub cmd: [String][6],
        pub callback: [CallbackFn][7],
        pub error: [CallbackFn][7],
        pub url: [Url][8],
        pub body: [InvokeBody][9],
        pub headers: HeaderMap,
        pub invoke_key: [String][6],
    }
[/code]

Expand description

The IPC invoke request.

## §Stability

This struct is **NOT** part of the public stable API and is only meant to be used by internal code and external testing/fuzzing tools or custom invoke systems.

## Fields§

§`cmd: [String][6]`

The invoke command.

§`callback: [CallbackFn][7]`

The success callback.

§`error: [CallbackFn][7]`

The error callback.

§`url: [Url][8]`

URL of the frame that requested this command.

§`body: [InvokeBody][9]`

The body of the request.

§`headers: HeaderMap`

The request headers.

§`invoke_key: [String][6]`

The invoke key. Must match what was passed to the app manager.

## Trait Implementations§

[Source][10]§

### impl [Debug][11] for [InvokeRequest][12]

[Source][10]§

#### fn [fmt][13](&self, f: &mut [Formatter][14]<'_>) -> [Result][15]

Formats the value using the given formatter. [Read more][13]

## Auto Trait Implementations§

§

### impl [Freeze][16] for [InvokeRequest][12]

§

### impl [RefUnwindSafe][17] for [InvokeRequest][12]

§

### impl [Send][18] for [InvokeRequest][12]

§

### impl [Sync][19] for [InvokeRequest][12]

§

### impl [Unpin][20] for [InvokeRequest][12]

§

### impl [UnwindSafe][21] for [InvokeRequest][12]

## Blanket Implementations§

[Source][22]§

### impl<T> [Any][23] for T

where T: 'static + ?[Sized][24],

[Source][25]§

#### fn [type_id][26](&self) -> [TypeId][27]

Gets the `TypeId` of `self`. [Read more][26]

[Source][28]§

### impl<T> [Borrow][29]<T> for T

where T: ?[Sized][24],

[Source][30]§

#### fn [borrow][31](&self) -> [&T][32]

Immutably borrows from an owned value. [Read more][31]

[Source][33]§

### impl<T> [BorrowMut][34]<T> for T

where T: ?[Sized][24],

[Source][35]§

#### fn [borrow_mut][36](&mut self) -> [&mut T][32]

Mutably borrows from an owned value. [Read more][36]

[Source][37]§

### impl<T> [From][38]<T> for T

[Source][39]§

#### fn [from][40](t: T) -> T

Returns the argument unchanged.

[Source][41]§

### impl<T, U> [Into][42]<U> for T

where U: [From][38]<T>,

[Source][43]§

#### fn [into][44](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][38]<T> for U` chooses to do.

[Source][45]§

### impl<T, U> [TryFrom][46]<U> for T

where U: [Into][42]<T>,

[Source][47]§

#### type [Error][48] = [Infallible][49]

The type returned in the event of a conversion error.

[Source][50]§

#### fn [try_from][51](value: U) -> [Result][52]<T, <T as [TryFrom][46]<U>>::[Error][53]>

Performs the conversion.

[Source][54]§

### impl<T, U> [TryInto][55]<U> for T

where U: [TryFrom][46]<T>,

[Source][56]§

#### type [Error][57] = <U as [TryFrom][46]<T>>::[Error][53]

The type returned in the event of a conversion error.

[Source][58]§

#### fn [try_into][59](self) -> [Result][52]<U, <U as [TryFrom][46]<T>>::[Error][53]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/webview/mod.rs.html#132-147
   [6]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [7]: ../ipc/struct.CallbackFn.html (struct tauri::ipc::CallbackFn)
   [8]: ../struct.Url.html (struct tauri::Url)
   [9]: ../ipc/enum.InvokeBody.html (enum tauri::ipc::InvokeBody)
   [10]: ../../src/tauri/webview/mod.rs.html#131
   [11]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [12]: struct.InvokeRequest.html (struct tauri::webview::InvokeRequest)
   [13]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [14]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [15]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [16]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [17]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [18]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [19]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [20]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [21]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [22]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [23]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [24]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [25]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [26]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [27]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [28]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [29]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [30]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [31]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [32]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [33]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [34]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [35]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [36]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [37]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [38]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [39]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [40]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [41]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [42]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [44]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [45]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [46]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [47]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [48]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [49]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [50]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [51]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [52]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [53]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [54]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [55]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [56]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [57]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [58]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [59]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

