## InvokeResponse

[![logo][1]][2]

## [tauri][2]2.10.3

## InvokeResponse

### Variants

  * Err
  * Ok



### Trait Implementations

  * Debug
  * From<InvokeError>
  * From<Result<T, E>>



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

# Enum InvokeResponse Copy item path

[Source][5]
[code] 
    pub enum InvokeResponse {
        Ok([InvokeResponseBody][6]),
        Err([InvokeError][7]),
    }
[/code]

Expand description

Response from a [`InvokeMessage`][8] passed to the [`InvokeResolver`][9].

## Variants§

§

### Ok([InvokeResponseBody][6])

Resolve the promise.

§

### Err([InvokeError][7])

Reject the promise.

## Trait Implementations§

[Source][10]§

### impl [Debug][11] for [InvokeResponse][12]

[Source][10]§

#### fn [fmt][13](&self, f: &mut [Formatter][14]<'_>) -> [Result][15]

Formats the value using the given formatter. [Read more][13]

[Source][16]§

### impl [From][17]<[InvokeError][7]> for [InvokeResponse][12]

[Source][18]§

#### fn [from][19](error: [InvokeError][7]) -> Self

Converts to this type from the input type.

[Source][20]§

### impl<T: [IpcResponse][21], E: [Into][22]<[InvokeError][7]>> [From][17]<[Result][23]<T, E>> for [InvokeResponse][12]

[Source][24]§

#### fn [from][19](result: [Result][23]<T, E>) -> Self

Converts to this type from the input type.

## Auto Trait Implementations§

§

### impl [Freeze][25] for [InvokeResponse][12]

§

### impl [RefUnwindSafe][26] for [InvokeResponse][12]

§

### impl [Send][27] for [InvokeResponse][12]

§

### impl [Sync][28] for [InvokeResponse][12]

§

### impl [Unpin][29] for [InvokeResponse][12]

§

### impl [UnwindSafe][30] for [InvokeResponse][12]

## Blanket Implementations§

[Source][31]§

### impl<T> [Any][32] for T

where T: 'static + ?[Sized][33],

[Source][34]§

#### fn [type_id][35](&self) -> [TypeId][36]

Gets the `TypeId` of `self`. [Read more][35]

[Source][37]§

### impl<T> [Borrow][38]<T> for T

where T: ?[Sized][33],

[Source][39]§

#### fn [borrow][40](&self) -> [&T][41]

Immutably borrows from an owned value. [Read more][40]

[Source][42]§

### impl<T> [BorrowMut][43]<T> for T

where T: ?[Sized][33],

[Source][44]§

#### fn [borrow_mut][45](&mut self) -> [&mut T][41]

Mutably borrows from an owned value. [Read more][45]

[Source][46]§

### impl<T> [From][17]<T> for T

[Source][47]§

#### fn [from][19](t: T) -> T

Returns the argument unchanged.

[Source][48]§

### impl<T, U> [Into][22]<U> for T

where U: [From][17]<T>,

[Source][49]§

#### fn [into][50](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][17]<T> for U` chooses to do.

[Source][51]§

### impl<T, U> [TryFrom][52]<U> for T

where U: [Into][22]<T>,

[Source][53]§

#### type [Error][54] = [Infallible][55]

The type returned in the event of a conversion error.

[Source][56]§

#### fn [try_from][57](value: U) -> [Result][23]<T, <T as [TryFrom][52]<U>>::[Error][58]>

Performs the conversion.

[Source][59]§

### impl<T, U> [TryInto][60]<U> for T

where U: [TryFrom][52]<T>,

[Source][61]§

#### type [Error][62] = <U as [TryFrom][52]<T>>::[Error][58]

The type returned in the event of a conversion error.

[Source][63]§

#### fn [try_into][64](self) -> [Result][23]<U, <U as [TryFrom][52]<T>>::[Error][58]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/ipc/mod.rs.html#258-263
   [6]: enum.InvokeResponseBody.html (enum tauri::ipc::InvokeResponseBody)
   [7]: struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [8]: struct.InvokeMessage.html (struct tauri::ipc::InvokeMessage)
   [9]: struct.InvokeResolver.html (struct tauri::ipc::InvokeResolver)
   [10]: ../../src/tauri/ipc/mod.rs.html#257
   [11]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [12]: enum.InvokeResponse.html (enum tauri::ipc::InvokeResponse)
   [13]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [14]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [15]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [16]: ../../src/tauri/ipc/mod.rs.html#278-282
   [17]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [18]: ../../src/tauri/ipc/mod.rs.html#279-281
   [19]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [20]: ../../src/tauri/ipc/mod.rs.html#265-276
   [21]: trait.IpcResponse.html (trait tauri::ipc::IpcResponse)
   [22]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [23]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [24]: ../../src/tauri/ipc/mod.rs.html#267-275
   [25]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [26]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [27]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [28]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [29]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [30]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [31]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [32]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [33]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [34]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [35]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [36]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [37]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [38]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [39]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [40]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [41]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [42]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [43]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [44]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [45]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [46]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [47]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [48]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [49]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [50]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [51]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [52]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [54]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [55]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [56]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [57]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [58]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [59]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [60]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [61]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [62]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [63]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

