## Request

[![logo][1]][2]

## [tauri][2]2.10.3

## Request

### Methods

  * body
  * headers



### Trait Implementations

  * CommandArg<'a, R>
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



## [In tauri::ipc][3]

[tauri][4]::[ipc][3]

# Struct Request Copy item path

[Source][5]
[code] 
    pub struct Request<'a> { /* private fields */ }
[/code]

Expand description

The IPC request.

Includes the `body` and `headers` parameters of a Tauri command invocation. This allows commands to accept raw bytes - on all platforms except Android.

## Implementations§

[Source][6]§

### impl [Request][7]<'_>

[Source][8]

#### pub fn body(&self) -> &[InvokeBody][9]

The request body.

[Source][10]

#### pub fn headers(&self) -> &HeaderMap

Thr request headers.

## Trait Implementations§

[Source][11]§

### impl<'a, R: [Runtime][12]> [CommandArg][13]<'a, R> for [Request][7]<'a>

[Source][14]§

#### fn [from_command][15](command: [CommandItem][16]<'a, R>) -> [Result][17]<Self, [InvokeError][18]>

Returns the invoke [`Request`][7].

[Source][19]§

### impl<'a> [Debug][20] for [Request][7]<'a>

[Source][19]§

#### fn [fmt][21](&self, f: &mut [Formatter][22]<'_>) -> [Result][23]

Formats the value using the given formatter. [Read more][21]

## Auto Trait Implementations§

§

### impl<'a> [Freeze][24] for [Request][7]<'a>

§

### impl<'a> [RefUnwindSafe][25] for [Request][7]<'a>

§

### impl<'a> [Send][26] for [Request][7]<'a>

§

### impl<'a> [Sync][27] for [Request][7]<'a>

§

### impl<'a> [Unpin][28] for [Request][7]<'a>

§

### impl<'a> [UnwindSafe][29] for [Request][7]<'a>

## Blanket Implementations§

[Source][30]§

### impl<T> [Any][31] for T

where T: 'static + ?[Sized][32],

[Source][33]§

#### fn [type_id][34](&self) -> [TypeId][35]

Gets the `TypeId` of `self`. [Read more][34]

[Source][36]§

### impl<T> [Borrow][37]<T> for T

where T: ?[Sized][32],

[Source][38]§

#### fn [borrow][39](&self) -> [&T][40]

Immutably borrows from an owned value. [Read more][39]

[Source][41]§

### impl<T> [BorrowMut][42]<T> for T

where T: ?[Sized][32],

[Source][43]§

#### fn [borrow_mut][44](&mut self) -> [&mut T][40]

Mutably borrows from an owned value. [Read more][44]

[Source][45]§

### impl<T> [From][46]<T> for T

[Source][47]§

#### fn [from][48](t: T) -> T

Returns the argument unchanged.

[Source][49]§

### impl<T, U> [Into][50]<U> for T

where U: [From][46]<T>,

[Source][51]§

#### fn [into][52](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][46]<T> for U` chooses to do.

[Source][53]§

### impl<T, U> [TryFrom][54]<U> for T

where U: [Into][50]<T>,

[Source][55]§

#### type [Error][56] = [Infallible][57]

The type returned in the event of a conversion error.

[Source][58]§

#### fn [try_from][59](value: U) -> [Result][17]<T, <T as [TryFrom][54]<U>>::[Error][60]>

Performs the conversion.

[Source][61]§

### impl<T, U> [TryInto][62]<U> for T

where U: [TryFrom][54]<T>,

[Source][63]§

#### type [Error][64] = <U as [TryFrom][54]<T>>::[Error][60]

The type returned in the event of a conversion error.

[Source][65]§

#### fn [try_into][66](self) -> [Result][17]<U, <U as [TryFrom][54]<T>>::[Error][60]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/ipc/mod.rs.html#148-151
   [6]: ../../src/tauri/ipc/mod.rs.html#153-163
   [7]: struct.Request.html (struct tauri::ipc::Request)
   [8]: ../../src/tauri/ipc/mod.rs.html#155-157
   [9]: enum.InvokeBody.html (enum tauri::ipc::InvokeBody)
   [10]: ../../src/tauri/ipc/mod.rs.html#160-162
   [11]: ../../src/tauri/ipc/mod.rs.html#165-173
   [12]: ../trait.Runtime.html (trait tauri::Runtime)
   [13]: trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [14]: ../../src/tauri/ipc/mod.rs.html#167-172
   [15]: trait.CommandArg.html#tymethod.from_command
   [16]: struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [17]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [18]: struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [19]: ../../src/tauri/ipc/mod.rs.html#147
   [20]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [21]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [22]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [23]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [24]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [25]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [26]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [27]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [28]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [29]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [30]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [31]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [32]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [33]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [34]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [35]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [36]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [37]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [38]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [39]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [40]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [41]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [42]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [44]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [45]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [46]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [47]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [48]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [49]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [50]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [51]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [52]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [53]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [54]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [56]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [57]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [59]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [60]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [61]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [62]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [63]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [65]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

