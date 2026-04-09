## CheckMenuItemBuilder

[![logo][1]][2]

## [tauri][2]2.10.3

## CheckMenuItemBuilder

### Methods

  * accelerator
  * build
  * checked
  * enabled
  * id
  * new
  * with_id



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



## [In tauri::menu][3]

[tauri][4]::[menu][3]

# Struct CheckMenuItemBuilder Copy item path

[Source][5]
[code] 
    pub struct CheckMenuItemBuilder { /* private fields */ }
[/code]

Expand description

A builder type for [`CheckMenuItem`][6]

## Implementations§

[Source][7]§

### impl [CheckMenuItemBuilder][8]

[Source][9]

#### pub fn new<S: [AsRef][10]<[str][11]>>(text: S) -> Self

Create a new menu item builder.

  * `text` could optionally contain an `&` before a character to assign this character as the mnemonic for this menu item. To display a `&` without assigning a mnemenonic, use `&&`.



[Source][12]

#### pub fn with_id<I: [Into][13]<[MenuId][14]>, S: [AsRef][10]<[str][11]>>(id: I, text: S) -> Self

Create a new menu item builder with the specified id.

  * `text` could optionally contain an `&` before a character to assign this character as the mnemonic for this menu item. To display a `&` without assigning a mnemenonic, use `&&`.



[Source][15]

#### pub fn id<I: [Into][13]<[MenuId][14]>>(self, id: I) -> Self

Set the id for this menu item.

[Source][16]

#### pub fn enabled(self, enabled: [bool][17]) -> Self

Set the enabled state for this menu item.

[Source][18]

#### pub fn checked(self, checked: [bool][17]) -> Self

Set the checked state for this menu item.

[Source][19]

#### pub fn accelerator<S: [AsRef][10]<[str][11]>>(self, accelerator: S) -> Self

Set the accelerator for this menu item.

[Source][20]

#### pub fn build<R: [Runtime][21], M: [Manager][22]<R>>( self, manager: [&M][23], ) -> [Result][24]<[CheckMenuItem][6]<R>>

Build the menu item

## Auto Trait Implementations§

§

### impl [Freeze][25] for [CheckMenuItemBuilder][8]

§

### impl [RefUnwindSafe][26] for [CheckMenuItemBuilder][8]

§

### impl [Send][27] for [CheckMenuItemBuilder][8]

§

### impl [Sync][28] for [CheckMenuItemBuilder][8]

§

### impl [Unpin][29] for [CheckMenuItemBuilder][8]

§

### impl [UnwindSafe][30] for [CheckMenuItemBuilder][8]

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

#### fn [borrow][40](&self) -> [&T][23]

Immutably borrows from an owned value. [Read more][40]

[Source][41]§

### impl<T> [BorrowMut][42]<T> for T

where T: ?[Sized][33],

[Source][43]§

#### fn [borrow_mut][44](&mut self) -> [&mut T][23]

Mutably borrows from an owned value. [Read more][44]

[Source][45]§

### impl<T> [From][46]<T> for T

[Source][47]§

#### fn [from][48](t: T) -> T

Returns the argument unchanged.

[Source][49]§

### impl<T, U> [Into][13]<U> for T

where U: [From][46]<T>,

[Source][50]§

#### fn [into][51](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][46]<T> for U` chooses to do.

[Source][52]§

### impl<T, U> [TryFrom][53]<U> for T

where U: [Into][13]<T>,

[Source][54]§

#### type [Error][55] = [Infallible][56]

The type returned in the event of a conversion error.

[Source][57]§

#### fn [try_from][58](value: U) -> [Result][59]<T, <T as [TryFrom][53]<U>>::[Error][60]>

Performs the conversion.

[Source][61]§

### impl<T, U> [TryInto][62]<U> for T

where U: [TryFrom][53]<T>,

[Source][63]§

#### type [Error][64] = <U as [TryFrom][53]<T>>::[Error][60]

The type returned in the event of a conversion error.

[Source][65]§

#### fn [try_into][66](self) -> [Result][59]<U, <U as [TryFrom][53]<T>>::[Error][60]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/menu\builders/check.rs.html#8-14
   [6]: struct.CheckMenuItem.html (struct tauri::menu::CheckMenuItem)
   [7]: ../../src/tauri/menu\builders/check.rs.html#16-90
   [8]: struct.CheckMenuItemBuilder.html (struct tauri::menu::CheckMenuItemBuilder)
   [9]: ../../src/tauri/menu\builders/check.rs.html#21-29
   [10]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [11]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [12]: ../../src/tauri/menu\builders/check.rs.html#35-43
   [13]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [14]: struct.MenuId.html (struct tauri::menu::MenuId)
   [15]: ../../src/tauri/menu\builders/check.rs.html#46-49
   [16]: ../../src/tauri/menu\builders/check.rs.html#52-55
   [17]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [18]: ../../src/tauri/menu\builders/check.rs.html#58-61
   [19]: ../../src/tauri/menu\builders/check.rs.html#64-67
   [20]: ../../src/tauri/menu\builders/check.rs.html#70-89
   [21]: ../trait.Runtime.html (trait tauri::Runtime)
   [22]: ../trait.Manager.html (trait tauri::Manager)
   [23]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [24]: ../type.Result.html (type tauri::Result)
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
   [41]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [42]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [44]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [45]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [46]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [47]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [48]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [49]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [50]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [51]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [52]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [53]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [54]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [55]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [56]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [57]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [58]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [59]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [60]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [61]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [62]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [63]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [65]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

