## IconMenuItemBuilder

[![logo][1]][2]

## [tauri][2]2.10.3

## IconMenuItemBuilder

### Methods

  * accelerator
  * build
  * enabled
  * icon
  * id
  * native_icon
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

# Struct IconMenuItemBuilder Copy item path

[Source][5]
[code] 
    pub struct IconMenuItemBuilder<'a> { /* private fields */ }
[/code]

Expand description

A builder type for [`IconMenuItem`][6]

## Implementations§

[Source][7]§

### impl<'a> [IconMenuItemBuilder][8]<'a>

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

#### pub fn icon(self, icon: [Image][20]<'a>) -> Self

Set the icon for this menu item.

**Note:** This method conflicts with [`Self::native_icon`][21] so calling one of them, will reset the other.

[Source][22]

#### pub fn native_icon(self, icon: [NativeIcon][23]) -> Self

Set the icon for this menu item.

**Note:** This method conflicts with [`Self::icon`][24] so calling one of them, will reset the other.

[Source][25]

#### pub fn build<R: [Runtime][26], M: [Manager][27]<R>>( self, manager: [&M][28], ) -> [Result][29]<[IconMenuItem][6]<R>>

Build the menu item

## Auto Trait Implementations§

§

### impl<'a> [Freeze][30] for [IconMenuItemBuilder][8]<'a>

§

### impl<'a> [RefUnwindSafe][31] for [IconMenuItemBuilder][8]<'a>

§

### impl<'a> [Send][32] for [IconMenuItemBuilder][8]<'a>

§

### impl<'a> [Sync][33] for [IconMenuItemBuilder][8]<'a>

§

### impl<'a> [Unpin][34] for [IconMenuItemBuilder][8]<'a>

§

### impl<'a> [UnwindSafe][35] for [IconMenuItemBuilder][8]<'a>

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

#### fn [borrow][45](&self) -> [&T][28]

Immutably borrows from an owned value. [Read more][45]

[Source][46]§

### impl<T> [BorrowMut][47]<T> for T

where T: ?[Sized][38],

[Source][48]§

#### fn [borrow_mut][49](&mut self) -> [&mut T][28]

Mutably borrows from an owned value. [Read more][49]

[Source][50]§

### impl<T> [From][51]<T> for T

[Source][52]§

#### fn [from][53](t: T) -> T

Returns the argument unchanged.

[Source][54]§

### impl<T, U> [Into][13]<U> for T

where U: [From][51]<T>,

[Source][55]§

#### fn [into][56](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][51]<T> for U` chooses to do.

[Source][57]§

### impl<T, U> [TryFrom][58]<U> for T

where U: [Into][13]<T>,

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
   [5]: ../../src/tauri/menu\builders/icon.rs.html#12-19
   [6]: struct.IconMenuItem.html (struct tauri::menu::IconMenuItem)
   [7]: ../../src/tauri/menu\builders/icon.rs.html#21-130
   [8]: struct.IconMenuItemBuilder.html (struct tauri::menu::IconMenuItemBuilder)
   [9]: ../../src/tauri/menu\builders/icon.rs.html#26-35
   [10]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [11]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [12]: ../../src/tauri/menu\builders/icon.rs.html#41-50
   [13]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [14]: struct.MenuId.html (struct tauri::menu::MenuId)
   [15]: ../../src/tauri/menu\builders/icon.rs.html#53-56
   [16]: ../../src/tauri/menu\builders/icon.rs.html#59-62
   [17]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [18]: ../../src/tauri/menu\builders/icon.rs.html#65-68
   [19]: ../../src/tauri/menu\builders/icon.rs.html#74-78
   [20]: ../image/struct.Image.html (struct tauri::image::Image)
   [21]: struct.IconMenuItemBuilder.html#method.native_icon (method tauri::menu::IconMenuItemBuilder::native_icon)
   [22]: ../../src/tauri/menu\builders/icon.rs.html#84-88
   [23]: enum.NativeIcon.html (enum tauri::menu::NativeIcon)
   [24]: struct.IconMenuItemBuilder.html#method.icon (method tauri::menu::IconMenuItemBuilder::icon)
   [25]: ../../src/tauri/menu\builders/icon.rs.html#91-129
   [26]: ../trait.Runtime.html (trait tauri::Runtime)
   [27]: ../trait.Manager.html (trait tauri::Manager)
   [28]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [29]: ../type.Result.html (type tauri::Result)
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
   [46]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [47]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [49]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [50]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [51]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [53]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [54]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
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

