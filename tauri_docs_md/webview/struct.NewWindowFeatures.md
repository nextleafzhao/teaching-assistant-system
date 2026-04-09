## NewWindowFeatures

[![logo][1]][2]

## [tauri][2]2.10.3

## NewWindowFeatures

### Methods

  * new
  * opener
  * position
  * size



### Trait Implementations

  * Debug



### Auto Trait Implementations

  * !Send
  * !Sync
  * Freeze
  * RefUnwindSafe
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

# Struct NewWindowFeatures Copy item path
[code]
    pub struct NewWindowFeatures { /* private fields */ }
[/code]

Expand description

Window features of a window requested to open.

## Implementations§

§

### impl [NewWindowFeatures][5]

#### pub fn new( size: [Option][6]<[LogicalSize][7]<[f64][8]>>, position: [Option][6]<[LogicalPosition][9]<[f64][8]>>, opener: NewWindowOpener, ) -> [NewWindowFeatures][5]

#### pub fn size(&self) -> [Option][6]<[LogicalSize][7]<[f64][8]>>

Specifies the size of the content area as defined by the user’s operating system where the new window will be generated.

#### pub fn position(&self) -> [Option][6]<[LogicalPosition][9]<[f64][8]>>

Specifies the position of the window relative to the work area as defined by the user’s operating system where the new window will be generated.

#### pub fn opener(&self) -> &NewWindowOpener

Returns information about the webview that initiated a new window request.

## Trait Implementations§

§

### impl [Debug][10] for [NewWindowFeatures][5]

§

#### fn [fmt][11](&self, f: &mut [Formatter][12]<'_>) -> [Result][13]<[()][14], [Error][15]>

Formats the value using the given formatter. [Read more][11]

## Auto Trait Implementations§

§

### impl [Freeze][16] for [NewWindowFeatures][5]

§

### impl [RefUnwindSafe][17] for [NewWindowFeatures][5]

§

### impl ![Send][18] for [NewWindowFeatures][5]

§

### impl ![Sync][19] for [NewWindowFeatures][5]

§

### impl [Unpin][20] for [NewWindowFeatures][5]

§

### impl [UnwindSafe][21] for [NewWindowFeatures][5]

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

#### fn [try_from][51](value: U) -> [Result][13]<T, <T as [TryFrom][46]<U>>::[Error][52]>

Performs the conversion.

[Source][53]§

### impl<T, U> [TryInto][54]<U> for T

where U: [TryFrom][46]<T>,

[Source][55]§

#### type [Error][56] = <U as [TryFrom][46]<T>>::[Error][52]

The type returned in the event of a conversion error.

[Source][57]§

#### fn [try_into][58](self) -> [Result][13]<U, <U as [TryFrom][46]<T>>::[Error][52]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: struct.NewWindowFeatures.html (struct tauri::webview::NewWindowFeatures)
   [6]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [7]: ../struct.LogicalSize.html (struct tauri::LogicalSize)
   [8]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html
   [9]: ../struct.LogicalPosition.html (struct tauri::LogicalPosition)
   [10]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [11]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [12]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [13]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [14]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [15]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
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
   [52]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [54]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [56]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [57]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [58]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

