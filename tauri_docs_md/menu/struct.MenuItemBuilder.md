## MenuItemBuilder

[![logo][1]][2]

## [tauri][2]2.10.3

## MenuItemBuilder

### Methods

  * accelerator
  * build
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

# Struct MenuItemBuilder Copy item path

[Source][5]
[code] 
    pub struct MenuItemBuilder { /* private fields */ }
[/code]

Expand description

A builder type for [`MenuItem`][6]

## Implementations§

[Source][7]§

### impl [MenuItemBuilder][8]

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

#### pub fn accelerator<S: [AsRef][10]<[str][11]>>(self, accelerator: S) -> Self

Set the accelerator for this menu item.

[Source][19]

#### pub fn build<R: [Runtime][20], M: [Manager][21]<R>>( self, manager: [&M][22], ) -> [Result][23]<[MenuItem][6]<R>>

Build the menu item

## Auto Trait Implementations§

§

### impl [Freeze][24] for [MenuItemBuilder][8]

§

### impl [RefUnwindSafe][25] for [MenuItemBuilder][8]

§

### impl [Send][26] for [MenuItemBuilder][8]

§

### impl [Sync][27] for [MenuItemBuilder][8]

§

### impl [Unpin][28] for [MenuItemBuilder][8]

§

### impl [UnwindSafe][29] for [MenuItemBuilder][8]

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

#### fn [borrow][39](&self) -> [&T][22]

Immutably borrows from an owned value. [Read more][39]

[Source][40]§

### impl<T> [BorrowMut][41]<T> for T

where T: ?[Sized][32],

[Source][42]§

#### fn [borrow_mut][43](&mut self) -> [&mut T][22]

Mutably borrows from an owned value. [Read more][43]

[Source][44]§

### impl<T> [From][45]<T> for T

[Source][46]§

#### fn [from][47](t: T) -> T

Returns the argument unchanged.

[Source][48]§

### impl<T, U> [Into][13]<U> for T

where U: [From][45]<T>,

[Source][49]§

#### fn [into][50](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][45]<T> for U` chooses to do.

[Source][51]§

### impl<T, U> [TryFrom][52]<U> for T

where U: [Into][13]<T>,

[Source][53]§

#### type [Error][54] = [Infallible][55]

The type returned in the event of a conversion error.

[Source][56]§

#### fn [try_from][57](value: U) -> [Result][58]<T, <T as [TryFrom][52]<U>>::[Error][59]>

Performs the conversion.

[Source][60]§

### impl<T, U> [TryInto][61]<U> for T

where U: [TryFrom][52]<T>,

[Source][62]§

#### type [Error][63] = <U as [TryFrom][52]<T>>::[Error][59]

The type returned in the event of a conversion error.

[Source][64]§

#### fn [try_into][65](self) -> [Result][58]<U, <U as [TryFrom][52]<T>>::[Error][59]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/menu\builders/normal.rs.html#8-13
   [6]: struct.MenuItem.html (struct tauri::menu::MenuItem)
   [7]: ../../src/tauri/menu\builders/normal.rs.html#15-68
   [8]: struct.MenuItemBuilder.html (struct tauri::menu::MenuItemBuilder)
   [9]: ../../src/tauri/menu\builders/normal.rs.html#20-27
   [10]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [11]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [12]: ../../src/tauri/menu\builders/normal.rs.html#33-40
   [13]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [14]: struct.MenuId.html (struct tauri::menu::MenuId)
   [15]: ../../src/tauri/menu\builders/normal.rs.html#43-46
   [16]: ../../src/tauri/menu\builders/normal.rs.html#49-52
   [17]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [18]: ../../src/tauri/menu\builders/normal.rs.html#55-58
   [19]: ../../src/tauri/menu\builders/normal.rs.html#61-67
   [20]: ../trait.Runtime.html (trait tauri::Runtime)
   [21]: ../trait.Manager.html (trait tauri::Manager)
   [22]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [23]: ../type.Result.html (type tauri::Result)
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
   [40]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [41]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [42]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [43]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [44]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [45]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [47]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
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
   [58]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [59]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [60]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [61]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [62]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [63]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [64]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [65]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

