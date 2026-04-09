## Pattern

[![logo][1]][2]

## [tauri][2]2.10.3

## Pattern

### Variants

  * Brownfield



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



## [In crate tauri][3]

[tauri][3]

# Enum Pattern Copy item path

[Source][4]
[code] 
    pub enum Pattern {
        Brownfield,
    }
[/code]

Expand description

An application pattern.

## Variants§

§

### Brownfield

The brownfield pattern.

## Trait Implementations§

[Source][5]§

### impl [Debug][6] for [Pattern][7]

[Source][5]§

#### fn [fmt][8](&self, f: &mut [Formatter][9]<'_>) -> [Result][10]

Formats the value using the given formatter. [Read more][8]

## Auto Trait Implementations§

§

### impl [Freeze][11] for [Pattern][7]

§

### impl [RefUnwindSafe][12] for [Pattern][7]

§

### impl [Send][13] for [Pattern][7]

§

### impl [Sync][14] for [Pattern][7]

§

### impl [Unpin][15] for [Pattern][7]

§

### impl [UnwindSafe][16] for [Pattern][7]

## Blanket Implementations§

[Source][17]§

### impl<T> [Any][18] for T

where T: 'static + ?[Sized][19],

[Source][20]§

#### fn [type_id][21](&self) -> [TypeId][22]

Gets the `TypeId` of `self`. [Read more][21]

[Source][23]§

### impl<T> [Borrow][24]<T> for T

where T: ?[Sized][19],

[Source][25]§

#### fn [borrow][26](&self) -> [&T][27]

Immutably borrows from an owned value. [Read more][26]

[Source][28]§

### impl<T> [BorrowMut][29]<T> for T

where T: ?[Sized][19],

[Source][30]§

#### fn [borrow_mut][31](&mut self) -> [&mut T][27]

Mutably borrows from an owned value. [Read more][31]

[Source][32]§

### impl<T> [From][33]<T> for T

[Source][34]§

#### fn [from][35](t: T) -> T

Returns the argument unchanged.

[Source][36]§

### impl<T, U> [Into][37]<U> for T

where U: [From][33]<T>,

[Source][38]§

#### fn [into][39](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][33]<T> for U` chooses to do.

[Source][40]§

### impl<T, U> [TryFrom][41]<U> for T

where U: [Into][37]<T>,

[Source][42]§

#### type [Error][43] = [Infallible][44]

The type returned in the event of a conversion error.

[Source][45]§

#### fn [try_from][46](value: U) -> [Result][47]<T, <T as [TryFrom][41]<U>>::[Error][48]>

Performs the conversion.

[Source][49]§

### impl<T, U> [TryInto][50]<U> for T

where U: [TryFrom][41]<T>,

[Source][51]§

#### type [Error][52] = <U as [TryFrom][41]<T>>::[Error][48]

The type returned in the event of a conversion error.

[Source][53]§

#### fn [try_into][54](self) -> [Result][47]<U, <U as [TryFrom][41]<T>>::[Error][48]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/pattern.rs.html#17-37
   [5]: ../src/tauri/pattern.rs.html#16
   [6]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [7]: enum.Pattern.html (enum tauri::Pattern)
   [8]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [9]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [10]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [11]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [12]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [13]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [14]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [15]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [16]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [17]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [18]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [19]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [20]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [21]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [22]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [23]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [24]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [25]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [26]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [27]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [28]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [29]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [30]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [31]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [32]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [33]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [34]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [35]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [36]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [37]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [38]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [39]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [40]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [41]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [42]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [43]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [44]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [45]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [46]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [47]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [48]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [49]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [50]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [51]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [52]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [53]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [54]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

