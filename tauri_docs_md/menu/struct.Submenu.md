## Submenu

[![logo][1]][2]

## [tauri][2]2.10.3

## Submenu

### Methods

  * app_handle
  * append
  * append_items
  * get
  * id
  * insert
  * insert_items
  * is_enabled
  * items
  * new
  * new_with_icon
  * new_with_native_icon
  * prepend
  * prepend_items
  * remove
  * remove_at
  * set_enabled
  * set_icon
  * set_native_icon
  * set_text
  * text
  * with_id
  * with_id_and_icon
  * with_id_and_items
  * with_id_and_native_icon
  * with_items



### Trait Implementations

  * Clone
  * ContextMenu
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

# Struct Submenu Copy item path

[Source][5]
[code] 
    pub struct Submenu<R: [Runtime][6]>(/* private fields */);
[/code]

Expand description

A type that is a submenu inside a [`Menu`][7] or [`Submenu`][8]

## Implementations§

[Source][9]§

### impl<R: [Runtime][6]> [Submenu][8]<R>

[Source][10]

#### pub fn new<M: [Manager][11]<R>, S: [AsRef][12]<[str][13]>>( manager: [&M][14], text: S, enabled: [bool][15], ) -> [Result][16]<Self>

Creates a new submenu.

[Source][17]

#### pub fn new_with_icon<M: [Manager][11]<R>, S: [AsRef][12]<[str][13]>>( manager: [&M][14], text: S, enabled: [bool][15], icon: [Option][18]<[Image][19]<'_>>, ) -> [Result][16]<Self>

Create a new submenu with an icon.

[Source][20]

#### pub fn new_with_native_icon<M: [Manager][11]<R>, S: [AsRef][12]<[str][13]>>( manager: [&M][14], text: S, enabled: [bool][15], icon: [Option][18]<[NativeIcon][21]>, ) -> [Result][16]<Self>

Create a new submenu with a native icon.

[Source][22]

#### pub fn with_id<M: [Manager][11]<R>, I: [Into][23]<[MenuId][24]>, S: [AsRef][12]<[str][13]>>( manager: [&M][14], id: I, text: S, enabled: [bool][15], ) -> [Result][16]<Self>

Creates a new submenu with the specified id.

[Source][25]

#### pub fn with_id_and_icon<M: [Manager][11]<R>, I: [Into][23]<[MenuId][24]>, S: [AsRef][12]<[str][13]>>( manager: [&M][14], id: I, text: S, enabled: [bool][15], icon: [Option][18]<[Image][19]<'_>>, ) -> [Result][16]<Self>

Create a new submenu with an id and an icon.

[Source][26]

#### pub fn with_id_and_native_icon<M: [Manager][11]<R>, I: [Into][23]<[MenuId][24]>, S: [AsRef][12]<[str][13]>>( manager: [&M][14], id: I, text: S, enabled: [bool][15], icon: [Option][18]<[NativeIcon][21]>, ) -> [Result][16]<Self>

Create a new submenu with an id and a native icon.

[Source][27]

#### pub fn with_items<M: [Manager][11]<R>, S: [AsRef][12]<[str][13]>>( manager: [&M][14], text: S, enabled: [bool][15], items: &[&dyn [IsMenuItem][28]<R>], ) -> [Result][16]<Self>

Creates a new menu with given `items`. It calls [`Submenu::new`][29] and [`Submenu::append_items`][30] internally.

[Source][31]

#### pub fn with_id_and_items<M: [Manager][11]<R>, I: [Into][23]<[MenuId][24]>, S: [AsRef][12]<[str][13]>>( manager: [&M][14], id: I, text: S, enabled: [bool][15], items: &[&dyn [IsMenuItem][28]<R>], ) -> [Result][16]<Self>

Creates a new menu with the specified id and given `items`. It calls [`Submenu::new`][29] and [`Submenu::append_items`][30] internally.

[Source][32]

#### pub fn app_handle(&self) -> &[AppHandle][33]<R>

The application handle associated with this type.

[Source][34]

#### pub fn id(&self) -> &[MenuId][24]

Returns a unique identifier associated with this submenu.

[Source][35]

#### pub fn append(&self, item: &dyn [IsMenuItem][28]<R>) -> [Result][16]<[()][36]>

Add a menu item to the end of this submenu.

[Source][37]

#### pub fn append_items(&self, items: &[&dyn [IsMenuItem][28]<R>]) -> [Result][16]<[()][36]>

Add menu items to the end of this submenu. It calls [`Submenu::append`][38] in a loop internally.

[Source][39]

#### pub fn prepend(&self, item: &dyn [IsMenuItem][28]<R>) -> [Result][16]<[()][36]>

Add a menu item to the beginning of this submenu.

[Source][40]

#### pub fn prepend_items(&self, items: &[&dyn [IsMenuItem][28]<R>]) -> [Result][16]<[()][36]>

Add menu items to the beginning of this submenu. It calls [`Submenu::insert_items`][41] with position of `0` internally.

[Source][42]

#### pub fn insert(&self, item: &dyn [IsMenuItem][28]<R>, position: [usize][43]) -> [Result][16]<[()][36]>

Insert a menu item at the specified `position` in this submenu.

[Source][44]

#### pub fn insert_items( &self, items: &[&dyn [IsMenuItem][28]<R>], position: [usize][43], ) -> [Result][16]<[()][36]>

Insert menu items at the specified `position` in this submenu.

[Source][45]

#### pub fn remove(&self, item: &dyn [IsMenuItem][28]<R>) -> [Result][16]<[()][36]>

Remove a menu item from this submenu.

[Source][46]

#### pub fn remove_at(&self, position: [usize][43]) -> [Result][16]<[Option][18]<[MenuItemKind][47]<R>>>

Remove the menu item at the specified position from this submenu and returns it.

[Source][48]

#### pub fn get<'a, I>(&self, id: [&'a I][14]) -> [Option][18]<[MenuItemKind][47]<R>>

where I: ?[Sized][49], [MenuId][24]: [PartialEq][50]<[&'a I][14]>,

Retrieves the menu item matching the given identifier.

[Source][51]

#### pub fn items(&self) -> [Result][16]<[Vec][52]<[MenuItemKind][47]<R>>>

Returns a list of menu items that has been added to this submenu.

[Source][53]

#### pub fn text(&self) -> [Result][16]<[String][54]>

Get the text for this submenu.

[Source][55]

#### pub fn set_text<S: [AsRef][12]<[str][13]>>(&self, text: S) -> [Result][16]<[()][36]>

Set the text for this submenu. `text` could optionally contain an `&` before a character to assign this character as the mnemonic for this submenu. To display a `&` without assigning a mnemonic, use `&&`.

[Source][56]

#### pub fn is_enabled(&self) -> [Result][16]<[bool][15]>

Get whether this submenu is enabled or not.

[Source][57]

#### pub fn set_enabled(&self, enabled: [bool][15]) -> [Result][16]<[()][36]>

Enable or disable this submenu.

[Source][58]

#### pub fn set_icon(&self, icon: [Option][18]<[Image][19]<'_>>) -> [Result][16]<[()][36]>

Change this submenu icon or remove it.

[Source][59]

#### pub fn set_native_icon(&self, _icon: [Option][18]<[NativeIcon][21]>) -> [Result][16]<[()][36]>

Change this submenu icon to a native image or remove it.

###### §Platform-specific:

  * **Windows / Linux** : Unsupported.



## Trait Implementations§

[Source][5]§

### impl<R: [Runtime][6]> [Clone][60] for [Submenu][8]<R>

[Source][5]§

#### fn [clone][61](&self) -> Self

Returns a duplicate of the value. [Read more][61]

1.0.0 · [Source][62]§

#### fn [clone_from][63](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][63]

[Source][64]§

### impl<R: [Runtime][6]> [ContextMenu][65] for [Submenu][8]<R>

[Source][66]§

#### fn [hpopupmenu][67](&self) -> [Result][16]<[isize][68]>

Get the popup [`HMENU`][69] for this menu. [Read more][67]

[Source][70]§

#### fn [popup][71]<T: [Runtime][6]>(&self, window: [Window][72]<T>) -> [Result][16]<[()][36]>

Popup this menu as a context menu on the specified window at the cursor position.

[Source][73]§

#### fn [popup_at][74]<T: [Runtime][6], P: [Into][23]<[Position][75]>>( &self, window: [Window][72]<T>, position: P, ) -> [Result][16]<[()][36]>

Popup this menu as a context menu on the specified window at the specified position. [Read more][74]

[Source][5]§

### impl<R: [Runtime][6]> [IsMenuItem][28]<R> for [Submenu][8]<R>

[Source][5]§

#### fn [kind][76](&self) -> [MenuItemKind][47]<R>

Returns the kind of this menu item.

[Source][5]§

#### fn [id][77](&self) -> &[MenuId][24]

Returns a unique identifier associated with this menu.

[Source][5]§

### impl<R: [Runtime][6]> [Resource][78] for [Submenu][8]<R>

[Source][79]§

#### fn [name][80](&self) -> [Cow][81]<'_, [str][13]>

Returns a string representation of the resource. The default implementation returns the Rust type name, but specific resource types may override this trait method.

[Source][82]§

#### fn [close][83](self: [Arc][84]<Self>)

Resources may implement the `close()` trait method if they need to do resource specific clean-ups, such as cancelling pending futures, after a resource has been removed from the resource table.

## Auto Trait Implementations§

§

### impl<R> [Freeze][85] for [Submenu][8]<R>

§

### impl<R> ![RefUnwindSafe][86] for [Submenu][8]<R>

§

### impl<R> [Send][87] for [Submenu][8]<R>

§

### impl<R> [Sync][88] for [Submenu][8]<R>

§

### impl<R> [Unpin][89] for [Submenu][8]<R>

§

### impl<R> ![UnwindSafe][90] for [Submenu][8]<R>

## Blanket Implementations§

[Source][91]§

### impl<T> [Any][92] for T

where T: 'static + ?[Sized][49],

[Source][93]§

#### fn [type_id][94](&self) -> [TypeId][95]

Gets the `TypeId` of `self`. [Read more][94]

[Source][96]§

### impl<T> [Borrow][97]<T> for T

where T: ?[Sized][49],

[Source][98]§

#### fn [borrow][99](&self) -> [&T][14]

Immutably borrows from an owned value. [Read more][99]

[Source][100]§

### impl<T> [BorrowMut][101]<T> for T

where T: ?[Sized][49],

[Source][102]§

#### fn [borrow_mut][103](&mut self) -> [&mut T][14]

Mutably borrows from an owned value. [Read more][103]

[Source][104]§

### impl<T> [CloneToUninit][105] for T

where T: [Clone][60],

[Source][106]§

#### unsafe fn [clone_to_uninit][107](&self, dest: [*mut ][108][u8][109])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][107]

[Source][110]§

### impl<T> [From][111]<T> for T

[Source][112]§

#### fn [from][113](t: T) -> T

Returns the argument unchanged.

[Source][114]§

### impl<T, U> [Into][23]<U> for T

where U: [From][111]<T>,

[Source][115]§

#### fn [into][116](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][111]<T> for U` chooses to do.

[Source][117]§

### impl<T> [ToOwned][118] for T

where T: [Clone][60],

[Source][119]§

#### type [Owned][120] = T

The resulting type after obtaining ownership.

[Source][121]§

#### fn [to_owned][122](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][122]

[Source][123]§

#### fn [clone_into][124](&self, target: [&mut T][14])

Uses borrowed data to replace owned data, usually by cloning. [Read more][124]

[Source][125]§

### impl<T, U> [TryFrom][126]<U> for T

where U: [Into][23]<T>,

[Source][127]§

#### type [Error][128] = [Infallible][129]

The type returned in the event of a conversion error.

[Source][130]§

#### fn [try_from][131](value: U) -> [Result][132]<T, <T as [TryFrom][126]<U>>::[Error][133]>

Performs the conversion.

[Source][134]§

### impl<T, U> [TryInto][135]<U> for T

where U: [TryFrom][126]<T>,

[Source][136]§

#### type [Error][137] = <U as [TryFrom][126]<T>>::[Error][133]

The type returned in the event of a conversion error.

[Source][138]§

#### fn [try_into][139](self) -> [Result][132]<U, <U as [TryFrom][126]<T>>::[Error][133]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/menu/mod.rs.html#144-165
   [6]: ../trait.Runtime.html (trait tauri::Runtime)
   [7]: struct.Menu.html (struct tauri::menu::Menu)
   [8]: struct.Submenu.html (struct tauri::menu::Submenu)
   [9]: ../../src/tauri/menu/submenu.rs.html#85-443
   [10]: ../../src/tauri/menu/submenu.rs.html#87-107
   [11]: ../trait.Manager.html (trait tauri::Manager)
   [12]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [14]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [15]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [16]: ../type.Result.html (type tauri::Result)
   [17]: ../../src/tauri/menu/submenu.rs.html#110-132
   [18]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [19]: ../image/struct.Image.html (struct tauri::image::Image)
   [20]: ../../src/tauri/menu/submenu.rs.html#135-156
   [21]: enum.NativeIcon.html (enum tauri::menu::NativeIcon)
   [22]: ../../src/tauri/menu/submenu.rs.html#159-181
   [23]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [24]: struct.MenuId.html (struct tauri::menu::MenuId)
   [25]: ../../src/tauri/menu/submenu.rs.html#184-208
   [26]: ../../src/tauri/menu/submenu.rs.html#211-234
   [27]: ../../src/tauri/menu/submenu.rs.html#237-246
   [28]: trait.IsMenuItem.html (trait tauri::menu::IsMenuItem)
   [29]: struct.Submenu.html#method.new (associated function tauri::menu::Submenu::new)
   [30]: struct.Submenu.html#method.append_items (method tauri::menu::Submenu::append_items)
   [31]: ../../src/tauri/menu/submenu.rs.html#250-260
   [32]: ../../src/tauri/menu/submenu.rs.html#267-269
   [33]: ../struct.AppHandle.html (struct tauri::AppHandle)
   [34]: ../../src/tauri/menu/submenu.rs.html#272-274
   [35]: ../../src/tauri/menu/submenu.rs.html#277-283
   [36]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [37]: ../../src/tauri/menu/submenu.rs.html#286-292
   [38]: struct.Submenu.html#method.append (method tauri::menu::Submenu::append)
   [39]: ../../src/tauri/menu/submenu.rs.html#295-301
   [40]: ../../src/tauri/menu/submenu.rs.html#304-306
   [41]: struct.Submenu.html#method.insert_items (method tauri::menu::Submenu::insert_items)
   [42]: ../../src/tauri/menu/submenu.rs.html#309-317
   [43]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [44]: ../../src/tauri/menu/submenu.rs.html#320-326
   [45]: ../../src/tauri/menu/submenu.rs.html#329-335
   [46]: ../../src/tauri/menu/submenu.rs.html#338-345
   [47]: enum.MenuItemKind.html (enum tauri::menu::MenuItemKind)
   [48]: ../../src/tauri/menu/submenu.rs.html#348-358
   [49]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [50]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [51]: ../../src/tauri/menu/submenu.rs.html#361-370
   [52]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [53]: ../../src/tauri/menu/submenu.rs.html#373-375
   [54]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [55]: ../../src/tauri/menu/submenu.rs.html#380-383
   [56]: ../../src/tauri/menu/submenu.rs.html#386-388
   [57]: ../../src/tauri/menu/submenu.rs.html#391-393
   [58]: ../../src/tauri/menu/submenu.rs.html#422-428
   [59]: ../../src/tauri/menu/submenu.rs.html#435-442
   [60]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [61]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [62]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [63]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [64]: ../../src/tauri/menu/submenu.rs.html#16-33
   [65]: trait.ContextMenu.html (trait tauri::menu::ContextMenu)
   [66]: ../../src/tauri/menu/submenu.rs.html#18-20
   [67]: trait.ContextMenu.html#tymethod.hpopupmenu
   [68]: https://doc.rust-lang.org/1.94.1/std/primitive.isize.html
   [69]: https://learn.microsoft.com/en-us/windows/win32/winprog/windows-data-types#HMENU
   [70]: ../../src/tauri/menu/submenu.rs.html#22-24
   [71]: trait.ContextMenu.html#tymethod.popup
   [72]: ../window/struct.Window.html (struct tauri::window::Window)
   [73]: ../../src/tauri/menu/submenu.rs.html#26-32
   [74]: trait.ContextMenu.html#tymethod.popup_at
   [75]: ../enum.Position.html (enum tauri::Position)
   [76]: trait.IsMenuItem.html#tymethod.kind
   [77]: trait.IsMenuItem.html#tymethod.id
   [78]: ../trait.Resource.html (trait tauri::Resource)
   [79]: ../../src/tauri/resources/mod.rs.html#31-33
   [80]: ../trait.Resource.html#method.name
   [81]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [82]: ../../src/tauri/resources/mod.rs.html#38
   [83]: ../trait.Resource.html#method.close
   [84]: https://doc.rust-lang.org/1.94.1/alloc/sync/struct.Arc.html (struct alloc::sync::Arc)
   [85]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [86]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [87]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [88]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [89]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [90]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [91]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [92]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [93]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [94]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [95]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [96]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [97]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [98]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [99]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [100]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [101]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [102]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [103]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [104]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [105]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [106]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [107]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [108]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [109]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [110]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [111]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [112]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [113]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [114]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [115]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [116]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [117]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [118]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [119]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [120]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [121]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [122]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [123]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [124]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [125]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [126]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [127]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [128]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [129]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [130]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [131]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [132]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [133]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [134]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [135]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [136]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [137]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [138]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [139]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

