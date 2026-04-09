## MenuItem

[![logo][1]][2]

## [tauri][2]2.10.3

## MenuItem

### Methods

  * app_handle
  * id
  * is_enabled
  * new
  * set_accelerator
  * set_enabled
  * set_text
  * text
  * with_id



### Trait Implementations

  * Clone
  * IsMenuItem<R>
  * Resource



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

# Struct MenuItem Copy item path

[Source][5]
[code] 
    pub struct MenuItem<R: [Runtime][6]>(/* private fields */);
[/code]

Expand description

A menu item inside a [`Menu`][7] or [`Submenu`][8] and contains only text.

## Implementations§

[Source][9]§

### impl<R: [Runtime][6]> [MenuItem][10]<R>

[Source][11]

#### pub fn new<M, T, A>( manager: [&M][12], text: T, enabled: [bool][13], accelerator: [Option][14]<A>, ) -> [Result][15]<Self>

where M: [Manager][16]<R>, T: [AsRef][17]<[str][18]>, A: [AsRef][17]<[str][18]>,

Create a new menu item.

  * `text` could optionally contain an `&` before a character to assign this character as the mnemonic for this menu item. To display a `&` without assigning a mnemenonic, use `&&`.



[Source][19]

#### pub fn with_id<M, I, T, A>( manager: [&M][12], id: I, text: T, enabled: [bool][13], accelerator: [Option][14]<A>, ) -> [Result][15]<Self>

where M: [Manager][16]<R>, I: [Into][20]<[MenuId][21]>, T: [AsRef][17]<[str][18]>, A: [AsRef][17]<[str][18]>,

Create a new menu item with the specified id.

  * `text` could optionally contain an `&` before a character to assign this character as the mnemonic for this menu item. To display a `&` without assigning a mnemenonic, use `&&`.



[Source][22]

#### pub fn app_handle(&self) -> &[AppHandle][23]<R>

The application handle associated with this type.

[Source][24]

#### pub fn id(&self) -> &[MenuId][21]

Returns a unique identifier associated with this menu item.

[Source][25]

#### pub fn text(&self) -> [Result][15]<[String][26]>

Get the text for this menu item.

[Source][27]

#### pub fn set_text<S: [AsRef][17]<[str][18]>>(&self, text: S) -> [Result][15]<[()][28]>

Set the text for this menu item. `text` could optionally contain an `&` before a character to assign this character as the mnemonic for this menu item. To display a `&` without assigning a mnemenonic, use `&&`.

[Source][29]

#### pub fn is_enabled(&self) -> [Result][15]<[bool][13]>

Get whether this menu item is enabled or not.

[Source][30]

#### pub fn set_enabled(&self, enabled: [bool][13]) -> [Result][15]<[()][28]>

Enable or disable this menu item.

[Source][31]

#### pub fn set_accelerator<S: [AsRef][17]<[str][18]>>( &self, accelerator: [Option][14]<S>, ) -> [Result][15]<[()][28]>

Set this menu item accelerator.

## Trait Implementations§

[Source][5]§

### impl<R: [Runtime][6]> [Clone][32] for [MenuItem][10]<R>

[Source][5]§

#### fn [clone][33](&self) -> Self

Returns a duplicate of the value. [Read more][33]

1.0.0 · [Source][34]§

#### fn [clone_from][35](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][35]

[Source][5]§

### impl<R: [Runtime][6]> [IsMenuItem][36]<R> for [MenuItem][10]<R>

[Source][5]§

#### fn [kind][37](&self) -> [MenuItemKind][38]<R>

Returns the kind of this menu item.

[Source][5]§

#### fn [id][39](&self) -> &[MenuId][21]

Returns a unique identifier associated with this menu.

[Source][5]§

### impl<R: [Runtime][6]> [Resource][40] for [MenuItem][10]<R>

[Source][41]§

#### fn [name][42](&self) -> [Cow][43]<'_, [str][18]>

Returns a string representation of the resource. The default implementation returns the Rust type name, but specific resource types may override this trait method.

[Source][44]§

#### fn [close][45](self: [Arc][46]<Self>)

Resources may implement the `close()` trait method if they need to do resource specific clean-ups, such as cancelling pending futures, after a resource has been removed from the resource table.

## Auto Trait Implementations§

§

### impl<R> [Freeze][47] for [MenuItem][10]<R>

§

### impl<R> ![RefUnwindSafe][48] for [MenuItem][10]<R>

§

### impl<R> [Send][49] for [MenuItem][10]<R>

§

### impl<R> [Sync][50] for [MenuItem][10]<R>

§

### impl<R> [Unpin][51] for [MenuItem][10]<R>

§

### impl<R> ![UnwindSafe][52] for [MenuItem][10]<R>

## Blanket Implementations§

[Source][53]§

### impl<T> [Any][54] for T

where T: 'static + ?[Sized][55],

[Source][56]§

#### fn [type_id][57](&self) -> [TypeId][58]

Gets the `TypeId` of `self`. [Read more][57]

[Source][59]§

### impl<T> [Borrow][60]<T> for T

where T: ?[Sized][55],

[Source][61]§

#### fn [borrow][62](&self) -> [&T][12]

Immutably borrows from an owned value. [Read more][62]

[Source][63]§

### impl<T> [BorrowMut][64]<T> for T

where T: ?[Sized][55],

[Source][65]§

#### fn [borrow_mut][66](&mut self) -> [&mut T][12]

Mutably borrows from an owned value. [Read more][66]

[Source][67]§

### impl<T> [CloneToUninit][68] for T

where T: [Clone][32],

[Source][69]§

#### unsafe fn [clone_to_uninit][70](&self, dest: [*mut ][71][u8][72])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][70]

[Source][73]§

### impl<T> [From][74]<T> for T

[Source][75]§

#### fn [from][76](t: T) -> T

Returns the argument unchanged.

[Source][77]§

### impl<T, U> [Into][20]<U> for T

where U: [From][74]<T>,

[Source][78]§

#### fn [into][79](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][74]<T> for U` chooses to do.

[Source][80]§

### impl<T> [ToOwned][81] for T

where T: [Clone][32],

[Source][82]§

#### type [Owned][83] = T

The resulting type after obtaining ownership.

[Source][84]§

#### fn [to_owned][85](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][85]

[Source][86]§

#### fn [clone_into][87](&self, target: [&mut T][12])

Uses borrowed data to replace owned data, usually by cloning. [Read more][87]

[Source][88]§

### impl<T, U> [TryFrom][89]<U> for T

where U: [Into][20]<T>,

[Source][90]§

#### type [Error][91] = [Infallible][92]

The type returned in the event of a conversion error.

[Source][93]§

#### fn [try_from][94](value: U) -> [Result][95]<T, <T as [TryFrom][89]<U>>::[Error][96]>

Performs the conversion.

[Source][97]§

### impl<T, U> [TryInto][98]<U> for T

where U: [TryFrom][89]<T>,

[Source][99]§

#### type [Error][100] = <U as [TryFrom][89]<T>>::[Error][96]

The type returned in the event of a conversion error.

[Source][101]§

#### fn [try_into][102](self) -> [Result][95]<U, <U as [TryFrom][89]<T>>::[Error][96]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/menu/mod.rs.html#144-165
   [6]: ../trait.Runtime.html (trait tauri::Runtime)
   [7]: struct.Menu.html (struct tauri::menu::Menu)
   [8]: struct.Submenu.html (struct tauri::menu::Submenu)
   [9]: ../../src/tauri/menu/normal.rs.html#14-125
   [10]: struct.MenuItem.html (struct tauri::menu::MenuItem)
   [11]: ../../src/tauri/menu/normal.rs.html#19-46
   [12]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [14]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [15]: ../type.Result.html (type tauri::Result)
   [16]: ../trait.Manager.html (trait tauri::Manager)
   [17]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [18]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [19]: ../../src/tauri/menu/normal.rs.html#52-82
   [20]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [21]: struct.MenuId.html (struct tauri::menu::MenuId)
   [22]: ../../src/tauri/menu/normal.rs.html#85-87
   [23]: ../struct.AppHandle.html (struct tauri::AppHandle)
   [24]: ../../src/tauri/menu/normal.rs.html#90-92
   [25]: ../../src/tauri/menu/normal.rs.html#95-97
   [26]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [27]: ../../src/tauri/menu/normal.rs.html#102-105
   [28]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [29]: ../../src/tauri/menu/normal.rs.html#108-110
   [30]: ../../src/tauri/menu/normal.rs.html#113-115
   [31]: ../../src/tauri/menu/normal.rs.html#118-124
   [32]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [33]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [34]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [35]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [36]: trait.IsMenuItem.html (trait tauri::menu::IsMenuItem)
   [37]: trait.IsMenuItem.html#tymethod.kind
   [38]: enum.MenuItemKind.html (enum tauri::menu::MenuItemKind)
   [39]: trait.IsMenuItem.html#tymethod.id
   [40]: ../trait.Resource.html (trait tauri::Resource)
   [41]: ../../src/tauri/resources/mod.rs.html#31-33
   [42]: ../trait.Resource.html#method.name
   [43]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [44]: ../../src/tauri/resources/mod.rs.html#38
   [45]: ../trait.Resource.html#method.close
   [46]: https://doc.rust-lang.org/1.94.1/alloc/sync/struct.Arc.html (struct alloc::sync::Arc)
   [47]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [48]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [49]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [50]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [51]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [52]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [54]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [55]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [56]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [57]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [58]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [59]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [60]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [61]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [62]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [63]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [64]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [65]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [66]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [67]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [68]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [69]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [70]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [71]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [72]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [73]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [74]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [75]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [76]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [77]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [78]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [79]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [80]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [81]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [82]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [83]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [84]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [85]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [86]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [87]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [88]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [89]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [90]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [91]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [92]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [93]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [94]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [95]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [96]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [97]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [98]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [99]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [100]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [101]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [102]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

