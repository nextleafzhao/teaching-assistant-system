## UriSchemeContext

[![logo][1]][2]

## [tauri][2]2.10.3

## UriSchemeContext

### Methods

  * app_handle
  * webview_label



### Auto Trait Implementations

  * !RefUnwindSafe
  * !UnwindSafe
  * Freeze
  * Send
  * Sync
  * Unpin



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

# Struct UriSchemeContext Copy item path

[Source][4]
[code] 
    pub struct UriSchemeContext<'a, R: [Runtime][5]> { /* private fields */ }
[/code]

Expand description

Uri scheme protocol context

## Implementations§

[Source][6]§

### impl<'a, R: [Runtime][5]> [UriSchemeContext][7]<'a, R>

[Source][8]

#### pub fn app_handle(&self) -> &'a [AppHandle][9]<R>

Get a reference to an [`AppHandle`][9].

[Source][10]

#### pub fn webview_label(&self) -> &'a [str][11]

Get the webview label that made the uri scheme request.

## Auto Trait Implementations§

§

### impl<'a, R> [Freeze][12] for [UriSchemeContext][7]<'a, R>

§

### impl<'a, R> ![RefUnwindSafe][13] for [UriSchemeContext][7]<'a, R>

§

### impl<'a, R> [Send][14] for [UriSchemeContext][7]<'a, R>

§

### impl<'a, R> [Sync][15] for [UriSchemeContext][7]<'a, R>

§

### impl<'a, R> [Unpin][16] for [UriSchemeContext][7]<'a, R>

§

### impl<'a, R> ![UnwindSafe][17] for [UriSchemeContext][7]<'a, R>

## Blanket Implementations§

[Source][18]§

### impl<T> [Any][19] for T

where T: 'static + ?[Sized][20],

[Source][21]§

#### fn [type_id][22](&self) -> [TypeId][23]

Gets the `TypeId` of `self`. [Read more][22]

[Source][24]§

### impl<T> [Borrow][25]<T> for T

where T: ?[Sized][20],

[Source][26]§

#### fn [borrow][27](&self) -> [&T][28]

Immutably borrows from an owned value. [Read more][27]

[Source][29]§

### impl<T> [BorrowMut][30]<T> for T

where T: ?[Sized][20],

[Source][31]§

#### fn [borrow_mut][32](&mut self) -> [&mut T][28]

Mutably borrows from an owned value. [Read more][32]

[Source][33]§

### impl<T> [From][34]<T> for T

[Source][35]§

#### fn [from][36](t: T) -> T

Returns the argument unchanged.

[Source][37]§

### impl<T, U> [Into][38]<U> for T

where U: [From][34]<T>,

[Source][39]§

#### fn [into][40](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][34]<T> for U` chooses to do.

[Source][41]§

### impl<T, U> [TryFrom][42]<U> for T

where U: [Into][38]<T>,

[Source][43]§

#### type [Error][44] = [Infallible][45]

The type returned in the event of a conversion error.

[Source][46]§

#### fn [try_from][47](value: U) -> [Result][48]<T, <T as [TryFrom][42]<U>>::[Error][49]>

Performs the conversion.

[Source][50]§

### impl<T, U> [TryInto][51]<U> for T

where U: [TryFrom][42]<T>,

[Source][52]§

#### type [Error][53] = <U as [TryFrom][42]<T>>::[Error][49]

The type returned in the event of a conversion error.

[Source][54]§

#### fn [try_into][55](self) -> [Result][48]<U, <U as [TryFrom][42]<T>>::[Error][49]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/app.rs.html#2318-2321
   [5]: trait.Runtime.html (trait tauri::Runtime)
   [6]: ../src/tauri/app.rs.html#2323-2333
   [7]: struct.UriSchemeContext.html (struct tauri::UriSchemeContext)
   [8]: ../src/tauri/app.rs.html#2325-2327
   [9]: struct.AppHandle.html (struct tauri::AppHandle)
   [10]: ../src/tauri/app.rs.html#2330-2332
   [11]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [12]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [13]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [14]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [15]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [16]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [17]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [18]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [19]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [20]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [21]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [22]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [23]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [24]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [25]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [26]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [27]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [28]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [29]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [30]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [31]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [32]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [33]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [34]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [35]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [36]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [37]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [38]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [39]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [40]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [41]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [42]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [44]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [45]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [47]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [48]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [49]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [50]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [51]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [53]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [54]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [55]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

