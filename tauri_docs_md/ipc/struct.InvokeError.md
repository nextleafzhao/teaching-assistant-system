## InvokeError

[![logo][1]][2]

## [tauri][2]2.10.3

## InvokeError

### Tuple Fields

  * 0



### Methods

  * from_anyhow
  * from_error



### Trait Implementations

  * Debug
  * From<Error>
  * From<InvokeError>
  * From<T>



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

# Struct InvokeError Copy item path

[Source][5]
[code] 
    pub struct InvokeError(pub [Value][6]);
[/code]

Expand description

Error response from an [`InvokeMessage`][7].

## Tuple Fields§

§`0: [Value][6]`

## Implementations§

[Source][8]§

### impl [InvokeError][9]

[Source][10]

#### pub fn from_error<E: [Error][11]>(error: E) -> Self

Create an [`InvokeError`][9] as a string of the [`std::error::Error`][11] message.

[Source][12]

#### pub fn from_anyhow(error: [Error][13]) -> Self

Create an [`InvokeError`][9] as a string of the [`anyhow::Error`][13] message.

## Trait Implementations§

[Source][14]§

### impl [Debug][15] for [InvokeError][9]

[Source][14]§

#### fn [fmt][16](&self, f: &mut [Formatter][17]<'_>) -> [Result][18]

Formats the value using the given formatter. [Read more][16]

[Source][19]§

### impl [From][20]<[Error][21]> for [InvokeError][9]

[Source][22]§

#### fn [from][23](error: [Error][21]) -> Self

Converts to this type from the input type.

[Source][24]§

### impl [From][20]<[InvokeError][9]> for [InvokeResponse][25]

[Source][26]§

#### fn [from][23](error: [InvokeError][9]) -> Self

Converts to this type from the input type.

[Source][27]§

### impl<T: [Serialize][28]> [From][20]<T> for [InvokeError][9]

[Source][29]§

#### fn [from][23](value: T) -> Self

Converts to this type from the input type.

## Auto Trait Implementations§

§

### impl [Freeze][30] for [InvokeError][9]

§

### impl [RefUnwindSafe][31] for [InvokeError][9]

§

### impl [Send][32] for [InvokeError][9]

§

### impl [Sync][33] for [InvokeError][9]

§

### impl [Unpin][34] for [InvokeError][9]

§

### impl [UnwindSafe][35] for [InvokeError][9]

## Blanket Implementations§

[Source][36]§

### impl<T> [Any][37] for T

where T: 'static + ?[Sized][38],

[Source][39]§

#### fn [type_id][40](&self) -> [TypeId][41]

Gets the `TypeId` of `self`. [Read more][40]

[Source][42]§

### impl<T> [Borrow][43]<T> for T

where T: ?[Sized][38],

[Source][44]§

#### fn [borrow][45](&self) -> [&T][46]

Immutably borrows from an owned value. [Read more][45]

[Source][47]§

### impl<T> [BorrowMut][48]<T> for T

where T: ?[Sized][38],

[Source][49]§

#### fn [borrow_mut][50](&mut self) -> [&mut T][46]

Mutably borrows from an owned value. [Read more][50]

[Source][51]§

### impl<T> [From][20]<T> for T

[Source][52]§

#### fn [from][23](t: T) -> T

Returns the argument unchanged.

[Source][53]§

### impl<T, U> [Into][54]<U> for T

where U: [From][20]<T>,

[Source][55]§

#### fn [into][56](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][20]<T> for U` chooses to do.

[Source][57]§

### impl<T, U> [TryFrom][58]<U> for T

where U: [Into][54]<T>,

[Source][59]§

#### type [Error][60] = [Infallible][61]

The type returned in the event of a conversion error.

[Source][62]§

#### fn [try_from][63](value: U) -> [Result][64]<T, <T as [TryFrom][58]<U>>::[Error][65]>

Performs the conversion.

[Source][66]§

### impl<T, U> [TryInto][67]<U> for T

where U: [TryFrom][58]<T>,

[Source][68]§

#### type [Error][69] = <U as [TryFrom][58]<T>>::[Error][65]

The type returned in the event of a conversion error.

[Source][70]§

#### fn [try_into][71](self) -> [Result][64]<U, <U as [TryFrom][58]<T>>::[Error][65]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/ipc/mod.rs.html#224
   [6]: https://docs.rs/serde_json/1.0.149/serde_json/value/enum.Value.html (enum serde_json::value::Value)
   [7]: struct.InvokeMessage.html (struct tauri::ipc::InvokeMessage)
   [8]: ../../src/tauri/ipc/mod.rs.html#226-238
   [9]: struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [10]: ../../src/tauri/ipc/mod.rs.html#229-231
   [11]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [12]: ../../src/tauri/ipc/mod.rs.html#235-237
   [13]: https://docs.rs/anyhow/1.0.102/anyhow/struct.Error.html (struct anyhow::Error)
   [14]: ../../src/tauri/ipc/mod.rs.html#223
   [15]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [16]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [17]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [18]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [19]: ../../src/tauri/ipc/mod.rs.html#249-254
   [20]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [21]: ../enum.Error.html (enum tauri::Error)
   [22]: ../../src/tauri/ipc/mod.rs.html#251-253
   [23]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [24]: ../../src/tauri/ipc/mod.rs.html#278-282
   [25]: enum.InvokeResponse.html (enum tauri::ipc::InvokeResponse)
   [26]: ../../src/tauri/ipc/mod.rs.html#279-281
   [27]: ../../src/tauri/ipc/mod.rs.html#240-247
   [28]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [29]: ../../src/tauri/ipc/mod.rs.html#242-246
   [30]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [31]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [32]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [33]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [34]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [35]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [36]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [37]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [38]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [39]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [40]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [41]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [42]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [43]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [44]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [45]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [46]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [47]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [48]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [49]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [50]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [51]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [52]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [53]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [54]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [56]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [57]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [58]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [59]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [60]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [61]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [62]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [63]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [64]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [65]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [66]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [67]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [68]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [69]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [70]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

