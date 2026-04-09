## Response

[![logo][1]][2]

## [tauri][2]2.10.3

## Response

### Methods

  * new



### Trait Implementations

  * IpcResponse



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



## [In tauri::ipc][3]

[tauri][4]::[ipc][3]

# Struct Response Copy item path

[Source][5]
[code] 
    pub struct Response { /* private fields */ }
[/code]

Expand description

The IPC response.

## Implementations§

[Source][6]§

### impl [Response][7]

[Source][8]

#### pub fn new(body: impl [Into][9]<[InvokeResponseBody][10]>) -> Self

Defines a response with the given body.

## Trait Implementations§

[Source][11]§

### impl [IpcResponse][12] for [Response][7]

[Source][13]§

#### fn [body][14](self) -> [Result][15]<[InvokeResponseBody][10]>

Resolve the IPC response body.

## Auto Trait Implementations§

§

### impl [Freeze][16] for [Response][7]

§

### impl [RefUnwindSafe][17] for [Response][7]

§

### impl [Send][18] for [Response][7]

§

### impl [Sync][19] for [Response][7]

§

### impl [Unpin][20] for [Response][7]

§

### impl [UnwindSafe][21] for [Response][7]

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

### impl<T, U> [Into][9]<U> for T

where U: [From][38]<T>,

[Source][42]§

#### fn [into][43](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][38]<T> for U` chooses to do.

[Source][44]§

### impl<T, U> [TryFrom][45]<U> for T

where U: [Into][9]<T>,

[Source][46]§

#### type [Error][47] = [Infallible][48]

The type returned in the event of a conversion error.

[Source][49]§

#### fn [try_from][50](value: U) -> [Result][51]<T, <T as [TryFrom][45]<U>>::[Error][52]>

Performs the conversion.

[Source][53]§

### impl<T, U> [TryInto][54]<U> for T

where U: [TryFrom][45]<T>,

[Source][55]§

#### type [Error][56] = <U as [TryFrom][45]<T>>::[Error][52]

The type returned in the event of a conversion error.

[Source][57]§

#### fn [try_into][58](self) -> [Result][51]<U, <U as [TryFrom][45]<T>>::[Error][52]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/ipc/mod.rs.html#190-192
   [6]: ../../src/tauri/ipc/mod.rs.html#200-205
   [7]: struct.Response.html (struct tauri::ipc::Response)
   [8]: ../../src/tauri/ipc/mod.rs.html#202-204
   [9]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [10]: enum.InvokeResponseBody.html (enum tauri::ipc::InvokeResponseBody)
   [11]: ../../src/tauri/ipc/mod.rs.html#194-198
   [12]: trait.IpcResponse.html (trait tauri::ipc::IpcResponse)
   [13]: ../../src/tauri/ipc/mod.rs.html#195-197
   [14]: trait.IpcResponse.html#tymethod.body
   [15]: ../type.Result.html (type tauri::Result)
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
   [42]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [43]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [44]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [45]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [47]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [48]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [49]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [50]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [51]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [52]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [54]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [56]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [57]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [58]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

