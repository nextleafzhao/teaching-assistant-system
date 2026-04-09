## IconMenuItem

[![logo][1]][2]

## [tauri][2]2.10.3

## IconMenuItem

### Methods

  * app_handle
  * id
  * is_enabled
  * new
  * set_accelerator
  * set_enabled
  * set_icon
  * set_native_icon
  * set_text
  * text
  * with_id
  * with_id_and_native_icon
  * with_native_icon



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

# Struct IconMenuItem Copy item path

[Source][5]
[code] 
    pub struct IconMenuItem<R: [Runtime][6]>(/* private fields */);
[/code]

Expand description

A menu item inside a [`Menu`][7] or [`Submenu`][8] and usually contains an icon and a text.

## Implementations§

[Source][9]§

### impl<R: [Runtime][6]> [IconMenuItem][10]<R>

[Source][11]

#### pub fn new<M, T, A>( manager: [&M][12], text: T, enabled: [bool][13], icon: [Option][14]<[Image][15]<'_>>, accelerator: [Option][14]<A>, ) -> [Result][16]<Self>

where M: [Manager][17]<R>, T: [AsRef][18]<[str][19]>, A: [AsRef][18]<[str][19]>,

Create a new menu item.

  * `text` could optionally contain an `&` before a character to assign this character as the mnemonic for this menu item. To display a `&` without assigning a mnemenonic, use `&&`.



[Source][20]

#### pub fn with_id<M, I, T, A>( manager: [&M][12], id: I, text: T, enabled: [bool][13], icon: [Option][14]<[Image][15]<'_>>, accelerator: [Option][14]<A>, ) -> [Result][16]<Self>

where M: [Manager][17]<R>, I: [Into][21]<[MenuId][22]>, T: [AsRef][18]<[str][19]>, A: [AsRef][18]<[str][19]>,

Create a new menu item with the specified id.

  * `text` could optionally contain an `&` before a character to assign this character as the mnemonic for this menu item. To display a `&` without assigning a mnemenonic, use `&&`.



[Source][23]

#### pub fn with_native_icon<M, T, A>( manager: [&M][12], text: T, enabled: [bool][13], native_icon: [Option][14]<[NativeIcon][24]>, accelerator: [Option][14]<A>, ) -> [Result][16]<Self>

where M: [Manager][17]<R>, T: [AsRef][18]<[str][19]>, A: [AsRef][18]<[str][19]>,

Create a new icon menu item but with a native icon.

See [`IconMenuItem::new`][25] for more info.

###### §Platform-specific:

  * **Windows / Linux** : Unsupported.



[Source][26]

#### pub fn with_id_and_native_icon<M, I, T, A>( manager: [&M][12], id: I, text: T, enabled: [bool][13], native_icon: [Option][14]<[NativeIcon][24]>, accelerator: [Option][14]<A>, ) -> [Result][16]<Self>

where M: [Manager][17]<R>, I: [Into][21]<[MenuId][22]>, T: [AsRef][18]<[str][19]>, A: [AsRef][18]<[str][19]>,

Create a new icon menu item with the specified id but with a native icon.

See [`IconMenuItem::new`][25] for more info.

###### §Platform-specific:

  * **Windows / Linux** : Unsupported.



[Source][27]

#### pub fn app_handle(&self) -> &[AppHandle][28]<R>

The application handle associated with this type.

[Source][29]

#### pub fn id(&self) -> &[MenuId][22]

Returns a unique identifier associated with this menu item.

[Source][30]

#### pub fn text(&self) -> [Result][16]<[String][31]>

Get the text for this menu item.

[Source][32]

#### pub fn set_text<S: [AsRef][18]<[str][19]>>(&self, text: S) -> [Result][16]<[()][33]>

Set the text for this menu item. `text` could optionally contain an `&` before a character to assign this character as the mnemonic for this menu item. To display a `&` without assigning a mnemenonic, use `&&`.

[Source][34]

#### pub fn is_enabled(&self) -> [Result][16]<[bool][13]>

Get whether this menu item is enabled or not.

[Source][35]

#### pub fn set_enabled(&self, enabled: [bool][13]) -> [Result][16]<[()][33]>

Enable or disable this menu item.

[Source][36]

#### pub fn set_accelerator<S: [AsRef][18]<[str][19]>>( &self, accelerator: [Option][14]<S>, ) -> [Result][16]<[()][33]>

Set this menu item accelerator.

[Source][37]

#### pub fn set_icon(&self, icon: [Option][14]<[Image][15]<'_>>) -> [Result][16]<[()][33]>

Change this menu item icon or remove it.

[Source][38]

#### pub fn set_native_icon(&self, _icon: [Option][14]<[NativeIcon][24]>) -> [Result][16]<[()][33]>

Change this menu item icon to a native image or remove it.

###### §Platform-specific:

  * **Windows / Linux** : Unsupported.



## Trait Implementations§

[Source][5]§

### impl<R: [Runtime][6]> [Clone][39] for [IconMenuItem][10]<R>

[Source][5]§

#### fn [clone][40](&self) -> Self

Returns a duplicate of the value. [Read more][40]

1.0.0 · [Source][41]§

#### fn [clone_from][42](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][42]

[Source][5]§

### impl<R: [Runtime][6]> [IsMenuItem][43]<R> for [IconMenuItem][10]<R>

[Source][5]§

#### fn [kind][44](&self) -> [MenuItemKind][45]<R>

Returns the kind of this menu item.

[Source][5]§

#### fn [id][46](&self) -> &[MenuId][22]

Returns a unique identifier associated with this menu.

[Source][5]§

### impl<R: [Runtime][6]> [Resource][47] for [IconMenuItem][10]<R>

[Source][48]§

#### fn [name][49](&self) -> [Cow][50]<'_, [str][19]>

Returns a string representation of the resource. The default implementation returns the Rust type name, but specific resource types may override this trait method.

[Source][51]§

#### fn [close][52](self: [Arc][53]<Self>)

Resources may implement the `close()` trait method if they need to do resource specific clean-ups, such as cancelling pending futures, after a resource has been removed from the resource table.

## Auto Trait Implementations§

§

### impl<R> [Freeze][54] for [IconMenuItem][10]<R>

§

### impl<R> ![RefUnwindSafe][55] for [IconMenuItem][10]<R>

§

### impl<R> [Send][56] for [IconMenuItem][10]<R>

§

### impl<R> [Sync][57] for [IconMenuItem][10]<R>

§

### impl<R> [Unpin][58] for [IconMenuItem][10]<R>

§

### impl<R> ![UnwindSafe][59] for [IconMenuItem][10]<R>

## Blanket Implementations§

[Source][60]§

### impl<T> [Any][61] for T

where T: 'static + ?[Sized][62],

[Source][63]§

#### fn [type_id][64](&self) -> [TypeId][65]

Gets the `TypeId` of `self`. [Read more][64]

[Source][66]§

### impl<T> [Borrow][67]<T> for T

where T: ?[Sized][62],

[Source][68]§

#### fn [borrow][69](&self) -> [&T][12]

Immutably borrows from an owned value. [Read more][69]

[Source][70]§

### impl<T> [BorrowMut][71]<T> for T

where T: ?[Sized][62],

[Source][72]§

#### fn [borrow_mut][73](&mut self) -> [&mut T][12]

Mutably borrows from an owned value. [Read more][73]

[Source][74]§

### impl<T> [CloneToUninit][75] for T

where T: [Clone][39],

[Source][76]§

#### unsafe fn [clone_to_uninit][77](&self, dest: [*mut ][78][u8][79])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][77]

[Source][80]§

### impl<T> [From][81]<T> for T

[Source][82]§

#### fn [from][83](t: T) -> T

Returns the argument unchanged.

[Source][84]§

### impl<T, U> [Into][21]<U> for T

where U: [From][81]<T>,

[Source][85]§

#### fn [into][86](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][81]<T> for U` chooses to do.

[Source][87]§

### impl<T> [ToOwned][88] for T

where T: [Clone][39],

[Source][89]§

#### type [Owned][90] = T

The resulting type after obtaining ownership.

[Source][91]§

#### fn [to_owned][92](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][92]

[Source][93]§

#### fn [clone_into][94](&self, target: [&mut T][12])

Uses borrowed data to replace owned data, usually by cloning. [Read more][94]

[Source][95]§

### impl<T, U> [TryFrom][96]<U> for T

where U: [Into][21]<T>,

[Source][97]§

#### type [Error][98] = [Infallible][99]

The type returned in the event of a conversion error.

[Source][100]§

#### fn [try_from][101](value: U) -> [Result][102]<T, <T as [TryFrom][96]<U>>::[Error][103]>

Performs the conversion.

[Source][104]§

### impl<T, U> [TryInto][105]<U> for T

where U: [TryFrom][96]<T>,

[Source][106]§

#### type [Error][107] = <U as [TryFrom][96]<T>>::[Error][103]

The type returned in the event of a conversion error.

[Source][108]§

#### fn [try_into][109](self) -> [Result][102]<U, <U as [TryFrom][96]<T>>::[Error][103]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/menu/mod.rs.html#144-165
   [6]: ../trait.Runtime.html (trait tauri::Runtime)
   [7]: struct.Menu.html (struct tauri::menu::Menu)
   [8]: struct.Submenu.html (struct tauri::menu::Submenu)
   [9]: ../../src/tauri/menu/icon.rs.html#13-237
   [10]: struct.IconMenuItem.html (struct tauri::menu::IconMenuItem)
   [11]: ../../src/tauri/menu/icon.rs.html#18-50
   [12]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [14]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [15]: ../image/struct.Image.html (struct tauri::image::Image)
   [16]: ../type.Result.html (type tauri::Result)
   [17]: ../trait.Manager.html (trait tauri::Manager)
   [18]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [19]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [20]: ../../src/tauri/menu/icon.rs.html#56-91
   [21]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [22]: struct.MenuId.html (struct tauri::menu::MenuId)
   [23]: ../../src/tauri/menu/icon.rs.html#100-129
   [24]: enum.NativeIcon.html (enum tauri::menu::NativeIcon)
   [25]: struct.IconMenuItem.html#method.new (associated function tauri::menu::IconMenuItem::new)
   [26]: ../../src/tauri/menu/icon.rs.html#138-171
   [27]: ../../src/tauri/menu/icon.rs.html#174-176
   [28]: ../struct.AppHandle.html (struct tauri::AppHandle)
   [29]: ../../src/tauri/menu/icon.rs.html#179-181
   [30]: ../../src/tauri/menu/icon.rs.html#184-186
   [31]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [32]: ../../src/tauri/menu/icon.rs.html#191-194
   [33]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [34]: ../../src/tauri/menu/icon.rs.html#197-199
   [35]: ../../src/tauri/menu/icon.rs.html#202-204
   [36]: ../../src/tauri/menu/icon.rs.html#207-213
   [37]: ../../src/tauri/menu/icon.rs.html#216-222
   [38]: ../../src/tauri/menu/icon.rs.html#229-236
   [39]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [40]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [41]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [42]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [43]: trait.IsMenuItem.html (trait tauri::menu::IsMenuItem)
   [44]: trait.IsMenuItem.html#tymethod.kind
   [45]: enum.MenuItemKind.html (enum tauri::menu::MenuItemKind)
   [46]: trait.IsMenuItem.html#tymethod.id
   [47]: ../trait.Resource.html (trait tauri::Resource)
   [48]: ../../src/tauri/resources/mod.rs.html#31-33
   [49]: ../trait.Resource.html#method.name
   [50]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [51]: ../../src/tauri/resources/mod.rs.html#38
   [52]: ../trait.Resource.html#method.close
   [53]: https://doc.rust-lang.org/1.94.1/alloc/sync/struct.Arc.html (struct alloc::sync::Arc)
   [54]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [55]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [56]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [57]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [58]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [59]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [60]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [61]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [62]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [63]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [64]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [65]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [66]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [67]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [68]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [69]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [70]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [71]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [72]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [73]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [74]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [75]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [76]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [77]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [78]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [79]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [80]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [81]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [82]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [83]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [84]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [85]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [86]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [87]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [88]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [89]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [90]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [91]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [92]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [93]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [94]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [95]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [96]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [97]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [98]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [99]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [100]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [101]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [102]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [103]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [104]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [105]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [106]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [107]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [108]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [109]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

