## MenuItemKind

[![logo][1]][2]

## [tauri][2]2.10.3

## MenuItemKind

### Variants

  * Check
  * Icon
  * MenuItem
  * Predefined
  * Submenu



### Methods

  * as_check_menuitem
  * as_check_menuitem_unchecked
  * as_icon_menuitem
  * as_icon_menuitem_unchecked
  * as_menuitem
  * as_menuitem_unchecked
  * as_predefined_menuitem
  * as_predefined_menuitem_unchecked
  * as_submenu
  * as_submenu_unchecked
  * id



### Trait Implementations

  * Clone
  * IsMenuItem<R>



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
  * CloneToUninit
  * From<T>
  * Into<U>
  * ToOwned
  * TryFrom<U>
  * TryInto<U>



## [In tauri::menu][3]

[tauri][4]::[menu][3]

# Enum MenuItemKind Copy item path

[Source][5]
[code] 
    pub enum MenuItemKind<R: [Runtime][6]> {
        MenuItem([MenuItem][7]<R>),
        Submenu([Submenu][8]<R>),
        Predefined([PredefinedMenuItem][9]<R>),
        Check([CheckMenuItem][10]<R>),
        Icon([IconMenuItem][11]<R>),
    }
[/code]

Expand description

An enumeration of all menu item kinds that could be added to a [`Menu`][12] or [`Submenu`][8]

## Variants§

§

### MenuItem([MenuItem][7]<R>)

Normal menu item

§

### Submenu([Submenu][8]<R>)

Submenu menu item

§

### Predefined([PredefinedMenuItem][9]<R>)

Predefined menu item

§

### Check([CheckMenuItem][10]<R>)

Check menu item

§

### Icon([IconMenuItem][11]<R>)

Icon menu item

## Implementations§

[Source][13]§

### impl<R: [Runtime][6]> [MenuItemKind][14]<R>

[Source][15]

#### pub fn id(&self) -> &[MenuId][16]

Returns a unique identifier associated with this menu item.

[Source][17]

#### pub fn as_menuitem(&self) -> [Option][18]<&[MenuItem][7]<R>>

Casts this item to a [`MenuItem`][7], and returns `None` if it wasn’t.

[Source][19]

#### pub fn as_menuitem_unchecked(&self) -> &[MenuItem][7]<R>

Casts this item to a [`MenuItem`][7], and panics if it wasn’t.

[Source][20]

#### pub fn as_submenu(&self) -> [Option][18]<&[Submenu][8]<R>>

Casts this item to a [`Submenu`][8], and returns `None` if it wasn’t.

[Source][21]

#### pub fn as_submenu_unchecked(&self) -> &[Submenu][8]<R>

Casts this item to a [`Submenu`][8], and panics if it wasn’t.

[Source][22]

#### pub fn as_predefined_menuitem(&self) -> [Option][18]<&[PredefinedMenuItem][9]<R>>

Casts this item to a [`PredefinedMenuItem`][9], and returns `None` if it wasn’t.

[Source][23]

#### pub fn as_predefined_menuitem_unchecked(&self) -> &[PredefinedMenuItem][9]<R>

Casts this item to a [`PredefinedMenuItem`][9], and panics if it wasn’t.

[Source][24]

#### pub fn as_check_menuitem(&self) -> [Option][18]<&[CheckMenuItem][10]<R>>

Casts this item to a [`CheckMenuItem`][10], and returns `None` if it wasn’t.

[Source][25]

#### pub fn as_check_menuitem_unchecked(&self) -> &[CheckMenuItem][10]<R>

Casts this item to a [`CheckMenuItem`][10], and panics if it wasn’t.

[Source][26]

#### pub fn as_icon_menuitem(&self) -> [Option][18]<&[IconMenuItem][11]<R>>

Casts this item to a [`IconMenuItem`][11], and returns `None` if it wasn’t.

[Source][27]

#### pub fn as_icon_menuitem_unchecked(&self) -> &[IconMenuItem][11]<R>

Casts this item to a [`IconMenuItem`][11], and panics if it wasn’t.

## Trait Implementations§

[Source][28]§

### impl<R: [Runtime][6]> [Clone][29] for [MenuItemKind][14]<R>

[Source][30]§

#### fn [clone][31](&self) -> Self

Returns a duplicate of the value. [Read more][31]

1.0.0 · [Source][32]§

#### fn [clone_from][33](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][33]

[Source][34]§

### impl<R: [Runtime][6]> [IsMenuItem][35]<R> for [MenuItemKind][14]<R>

[Source][36]§

#### fn [kind][37](&self) -> [MenuItemKind][14]<R>

Returns the kind of this menu item.

[Source][38]§

#### fn [id][39](&self) -> &[MenuId][16]

Returns a unique identifier associated with this menu.

## Auto Trait Implementations§

§

### impl<R> [Freeze][40] for [MenuItemKind][14]<R>

§

### impl<R> ![RefUnwindSafe][41] for [MenuItemKind][14]<R>

§

### impl<R> [Send][42] for [MenuItemKind][14]<R>

§

### impl<R> [Sync][43] for [MenuItemKind][14]<R>

§

### impl<R> [Unpin][44] for [MenuItemKind][14]<R>

§

### impl<R> ![UnwindSafe][45] for [MenuItemKind][14]<R>

## Blanket Implementations§

[Source][46]§

### impl<T> [Any][47] for T

where T: 'static + ?[Sized][48],

[Source][49]§

#### fn [type_id][50](&self) -> [TypeId][51]

Gets the `TypeId` of `self`. [Read more][50]

[Source][52]§

### impl<T> [Borrow][53]<T> for T

where T: ?[Sized][48],

[Source][54]§

#### fn [borrow][55](&self) -> [&T][56]

Immutably borrows from an owned value. [Read more][55]

[Source][57]§

### impl<T> [BorrowMut][58]<T> for T

where T: ?[Sized][48],

[Source][59]§

#### fn [borrow_mut][60](&mut self) -> [&mut T][56]

Mutably borrows from an owned value. [Read more][60]

[Source][61]§

### impl<T> [CloneToUninit][62] for T

where T: [Clone][29],

[Source][63]§

#### unsafe fn [clone_to_uninit][64](&self, dest: [*mut ][65][u8][66])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][64]

[Source][67]§

### impl<T> [From][68]<T> for T

[Source][69]§

#### fn [from][70](t: T) -> T

Returns the argument unchanged.

[Source][71]§

### impl<T, U> [Into][72]<U> for T

where U: [From][68]<T>,

[Source][73]§

#### fn [into][74](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][68]<T> for U` chooses to do.

[Source][75]§

### impl<T> [ToOwned][76] for T

where T: [Clone][29],

[Source][77]§

#### type [Owned][78] = T

The resulting type after obtaining ownership.

[Source][79]§

#### fn [to_owned][80](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][80]

[Source][81]§

#### fn [clone_into][82](&self, target: [&mut T][56])

Uses borrowed data to replace owned data, usually by cloning. [Read more][82]

[Source][83]§

### impl<T, U> [TryFrom][84]<U> for T

where U: [Into][72]<T>,

[Source][85]§

#### type [Error][86] = [Infallible][87]

The type returned in the event of a conversion error.

[Source][88]§

#### fn [try_from][89](value: U) -> [Result][90]<T, <T as [TryFrom][84]<U>>::[Error][91]>

Performs the conversion.

[Source][92]§

### impl<T, U> [TryInto][93]<U> for T

where U: [TryFrom][84]<T>,

[Source][94]§

#### type [Error][95] = <U as [TryFrom][84]<T>>::[Error][91]

The type returned in the event of a conversion error.

[Source][96]§

#### fn [try_into][97](self) -> [Result][90]<U, <U as [TryFrom][84]<T>>::[Error][91]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/menu/mod.rs.html#541-552
   [6]: ../trait.Runtime.html (trait tauri::Runtime)
   [7]: struct.MenuItem.html (struct tauri::menu::MenuItem)
   [8]: struct.Submenu.html (struct tauri::menu::Submenu)
   [9]: struct.PredefinedMenuItem.html (struct tauri::menu::PredefinedMenuItem)
   [10]: struct.CheckMenuItem.html (struct tauri::menu::CheckMenuItem)
   [11]: struct.IconMenuItem.html (struct tauri::menu::IconMenuItem)
   [12]: struct.Menu.html (struct tauri::menu::Menu)
   [13]: ../../src/tauri/menu/mod.rs.html#554-687
   [14]: enum.MenuItemKind.html (enum tauri::menu::MenuItemKind)
   [15]: ../../src/tauri/menu/mod.rs.html#556-564
   [16]: struct.MenuId.html (struct tauri::menu::MenuId)
   [17]: ../../src/tauri/menu/mod.rs.html#609-614
   [18]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [19]: ../../src/tauri/menu/mod.rs.html#617-622
   [20]: ../../src/tauri/menu/mod.rs.html#625-630
   [21]: ../../src/tauri/menu/mod.rs.html#633-638
   [22]: ../../src/tauri/menu/mod.rs.html#641-646
   [23]: ../../src/tauri/menu/mod.rs.html#649-654
   [24]: ../../src/tauri/menu/mod.rs.html#657-662
   [25]: ../../src/tauri/menu/mod.rs.html#665-670
   [26]: ../../src/tauri/menu/mod.rs.html#673-678
   [27]: ../../src/tauri/menu/mod.rs.html#681-686
   [28]: ../../src/tauri/menu/mod.rs.html#689-699
   [29]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [30]: ../../src/tauri/menu/mod.rs.html#690-698
   [31]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [32]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [33]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [34]: ../../src/tauri/menu/mod.rs.html#707-715
   [35]: trait.IsMenuItem.html (trait tauri::menu::IsMenuItem)
   [36]: ../../src/tauri/menu/mod.rs.html#708-710
   [37]: trait.IsMenuItem.html#tymethod.kind
   [38]: ../../src/tauri/menu/mod.rs.html#712-714
   [39]: trait.IsMenuItem.html#tymethod.id
   [40]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [41]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [42]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [43]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [44]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [45]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [47]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [48]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [49]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [50]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [51]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [53]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [54]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [55]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [56]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [57]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [58]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [59]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [60]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [61]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [62]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [63]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [64]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [65]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [66]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [67]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [69]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [71]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [72]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [73]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [74]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [75]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [76]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [77]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [78]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [79]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [80]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [81]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [82]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [83]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [84]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [85]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [86]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [87]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [88]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [89]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [90]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [91]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [92]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [93]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [94]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [95]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [96]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [97]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

