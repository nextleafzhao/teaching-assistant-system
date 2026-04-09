## CheckMenuItem

[![logo][1]][2]

## [tauri][2]2.10.3

## CheckMenuItem

### Methods

  * app_handle
  * id
  * is_checked
  * is_enabled
  * new
  * set_accelerator
  * set_checked
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

# Struct CheckMenuItem Copy item path

[Source][5]
[code] 
    pub struct CheckMenuItem<R: [Runtime][6]>(/* private fields */);
[/code]

Expand description

A menu item inside a [`Menu`][7] or [`Submenu`][8] and usually contains a text and a check mark or a similar toggle that corresponds to a checked and unchecked states.

## Implementations§

[Source][9]§

### impl<R: [Runtime][6]> [CheckMenuItem][10]<R>

[Source][11]

#### pub fn new<M, T, A>( manager: [&M][12], text: T, enabled: [bool][13], checked: [bool][13], accelerator: [Option][14]<A>, ) -> [Result][15]<Self>

where M: [Manager][16]<R>, T: [AsRef][17]<[str][18]>, A: [AsRef][17]<[str][18]>,

Create a new menu item.

  * `text` could optionally contain an `&` before a character to assign this character as the mnemonic for this menu item. To display a `&` without assigning a mnemenonic, use `&&`.



[Source][19]

#### pub fn with_id<M, I, T, A>( manager: [&M][12], id: I, text: T, enabled: [bool][13], checked: [bool][13], accelerator: [Option][14]<A>, ) -> [Result][15]<Self>

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

[Source][32]

#### pub fn is_checked(&self) -> [Result][15]<[bool][13]>

Get whether this check menu item is checked or not.

[Source][33]

#### pub fn set_checked(&self, checked: [bool][13]) -> [Result][15]<[()][28]>

Check or Uncheck this check menu item.

## Trait Implementations§

[Source][5]§

### impl<R: [Runtime][6]> [Clone][34] for [CheckMenuItem][10]<R>

[Source][5]§

#### fn [clone][35](&self) -> Self

Returns a duplicate of the value. [Read more][35]

1.0.0 · [Source][36]§

#### fn [clone_from][37](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][37]

[Source][5]§

### impl<R: [Runtime][6]> [IsMenuItem][38]<R> for [CheckMenuItem][10]<R>

[Source][5]§

#### fn [kind][39](&self) -> [MenuItemKind][40]<R>

Returns the kind of this menu item.

[Source][5]§

#### fn [id][41](&self) -> &[MenuId][21]

Returns a unique identifier associated with this menu.

[Source][5]§

### impl<R: [Runtime][6]> [Resource][42] for [CheckMenuItem][10]<R>

[Source][43]§

#### fn [name][44](&self) -> [Cow][45]<'_, [str][18]>

Returns a string representation of the resource. The default implementation returns the Rust type name, but specific resource types may override this trait method.

[Source][46]§

#### fn [close][47](self: [Arc][48]<Self>)

Resources may implement the `close()` trait method if they need to do resource specific clean-ups, such as cancelling pending futures, after a resource has been removed from the resource table.

## Auto Trait Implementations§

§

### impl<R> [Freeze][49] for [CheckMenuItem][10]<R>

§

### impl<R> ![RefUnwindSafe][50] for [CheckMenuItem][10]<R>

§

### impl<R> [Send][51] for [CheckMenuItem][10]<R>

§

### impl<R> [Sync][52] for [CheckMenuItem][10]<R>

§

### impl<R> [Unpin][53] for [CheckMenuItem][10]<R>

§

### impl<R> ![UnwindSafe][54] for [CheckMenuItem][10]<R>

## Blanket Implementations§

[Source][55]§

### impl<T> [Any][56] for T

where T: 'static + ?[Sized][57],

[Source][58]§

#### fn [type_id][59](&self) -> [TypeId][60]

Gets the `TypeId` of `self`. [Read more][59]

[Source][61]§

### impl<T> [Borrow][62]<T> for T

where T: ?[Sized][57],

[Source][63]§

#### fn [borrow][64](&self) -> [&T][12]

Immutably borrows from an owned value. [Read more][64]

[Source][65]§

### impl<T> [BorrowMut][66]<T> for T

where T: ?[Sized][57],

[Source][67]§

#### fn [borrow_mut][68](&mut self) -> [&mut T][12]

Mutably borrows from an owned value. [Read more][68]

[Source][69]§

### impl<T> [CloneToUninit][70] for T

where T: [Clone][34],

[Source][71]§

#### unsafe fn [clone_to_uninit][72](&self, dest: [*mut ][73][u8][74])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][72]

[Source][75]§

### impl<T> [From][76]<T> for T

[Source][77]§

#### fn [from][78](t: T) -> T

Returns the argument unchanged.

[Source][79]§

### impl<T, U> [Into][20]<U> for T

where U: [From][76]<T>,

[Source][80]§

#### fn [into][81](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][76]<T> for U` chooses to do.

[Source][82]§

### impl<T> [ToOwned][83] for T

where T: [Clone][34],

[Source][84]§

#### type [Owned][85] = T

The resulting type after obtaining ownership.

[Source][86]§

#### fn [to_owned][87](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][87]

[Source][88]§

#### fn [clone_into][89](&self, target: [&mut T][12])

Uses borrowed data to replace owned data, usually by cloning. [Read more][89]

[Source][90]§

### impl<T, U> [TryFrom][91]<U> for T

where U: [Into][20]<T>,

[Source][92]§

#### type [Error][93] = [Infallible][94]

The type returned in the event of a conversion error.

[Source][95]§

#### fn [try_from][96](value: U) -> [Result][97]<T, <T as [TryFrom][91]<U>>::[Error][98]>

Performs the conversion.

[Source][99]§

### impl<T, U> [TryInto][100]<U> for T

where U: [TryFrom][91]<T>,

[Source][101]§

#### type [Error][102] = <U as [TryFrom][91]<T>>::[Error][98]

The type returned in the event of a conversion error.

[Source][103]§

#### fn [try_into][104](self) -> [Result][97]<U, <U as [TryFrom][91]<T>>::[Error][98]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/menu/mod.rs.html#144-165
   [6]: ../trait.Runtime.html (trait tauri::Runtime)
   [7]: struct.Menu.html (struct tauri::menu::Menu)
   [8]: struct.Submenu.html (struct tauri::menu::Submenu)
   [9]: ../../src/tauri/menu/check.rs.html#14-137
   [10]: struct.CheckMenuItem.html (struct tauri::menu::CheckMenuItem)
   [11]: ../../src/tauri/menu/check.rs.html#19-47
   [12]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [14]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [15]: ../type.Result.html (type tauri::Result)
   [16]: ../trait.Manager.html (trait tauri::Manager)
   [17]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [18]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [19]: ../../src/tauri/menu/check.rs.html#53-84
   [20]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [21]: struct.MenuId.html (struct tauri::menu::MenuId)
   [22]: ../../src/tauri/menu/check.rs.html#87-89
   [23]: ../struct.AppHandle.html (struct tauri::AppHandle)
   [24]: ../../src/tauri/menu/check.rs.html#92-94
   [25]: ../../src/tauri/menu/check.rs.html#97-99
   [26]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [27]: ../../src/tauri/menu/check.rs.html#104-107
   [28]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [29]: ../../src/tauri/menu/check.rs.html#110-112
   [30]: ../../src/tauri/menu/check.rs.html#115-117
   [31]: ../../src/tauri/menu/check.rs.html#120-126
   [32]: ../../src/tauri/menu/check.rs.html#129-131
   [33]: ../../src/tauri/menu/check.rs.html#134-136
   [34]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [35]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [36]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [37]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [38]: trait.IsMenuItem.html (trait tauri::menu::IsMenuItem)
   [39]: trait.IsMenuItem.html#tymethod.kind
   [40]: enum.MenuItemKind.html (enum tauri::menu::MenuItemKind)
   [41]: trait.IsMenuItem.html#tymethod.id
   [42]: ../trait.Resource.html (trait tauri::Resource)
   [43]: ../../src/tauri/resources/mod.rs.html#31-33
   [44]: ../trait.Resource.html#method.name
   [45]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [46]: ../../src/tauri/resources/mod.rs.html#38
   [47]: ../trait.Resource.html#method.close
   [48]: https://doc.rust-lang.org/1.94.1/alloc/sync/struct.Arc.html (struct alloc::sync::Arc)
   [49]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [50]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [51]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [52]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [53]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [54]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [56]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [57]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [59]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [60]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [61]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [62]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [63]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [64]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [65]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [66]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [67]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [68]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [69]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [70]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [71]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [72]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [73]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [74]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [75]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [76]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [77]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [78]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [79]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [80]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [81]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [82]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [83]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [84]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [85]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [86]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [87]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [88]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [89]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [90]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [91]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [92]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [93]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [94]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [95]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [96]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [97]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [98]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [99]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [100]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [101]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [102]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [103]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [104]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

