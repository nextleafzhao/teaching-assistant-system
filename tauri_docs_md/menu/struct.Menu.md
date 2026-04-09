## Menu

[![logo][1]][2]

## [tauri][2]2.10.3

## Menu

### Sections

  * Platform-specific:



### Methods

  * app_handle
  * append
  * append_items
  * default
  * get
  * id
  * insert
  * insert_items
  * items
  * new
  * prepend
  * prepend_items
  * remove
  * remove_at
  * set_as_app_menu
  * set_as_window_menu
  * with_id
  * with_id_and_items
  * with_items



### Trait Implementations

  * Clone
  * ContextMenu
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

# Struct Menu Copy item path

[Source][5]
[code] 
    pub struct Menu<R: [Runtime][6]>(/* private fields */);
[/code]

Expand description

A type that is either a menu bar on the window on Windows and Linux or as a global menu in the menubar on macOS.

### §Platform-specific:

  * **macOS** : if using [`Menu`][7] for the global menubar, it can only contain [`Submenu`][8]s



## Implementations§

[Source][9]§

### impl<R: [Runtime][6]> [Menu][7]<R>

[Source][10]

#### pub fn new<M: [Manager][11]<R>>(manager: [&M][12]) -> [Result][13]<Self>

Creates a new menu.

[Source][14]

#### pub fn with_id<M: [Manager][11]<R>, I: [Into][15]<[MenuId][16]>>( manager: [&M][12], id: I, ) -> [Result][13]<Self>

Creates a new menu with the specified id.

[Source][17]

#### pub fn with_items<M: [Manager][11]<R>>( manager: [&M][12], items: &[&dyn [IsMenuItem][18]<R>], ) -> [Result][13]<Self>

Creates a new menu with given `items`. It calls [`Menu::new`][19] and [`Menu::append_items`][20] internally.

[Source][21]

#### pub fn with_id_and_items<M: [Manager][11]<R>, I: [Into][15]<[MenuId][16]>>( manager: [&M][12], id: I, items: &[&dyn [IsMenuItem][18]<R>], ) -> [Result][13]<Self>

Creates a new menu with the specified id and given `items`. It calls [`Menu::new`][19] and [`Menu::append_items`][20] internally.

[Source][22]

#### pub fn default(app_handle: &[AppHandle][23]<R>) -> [Result][13]<Self>

Creates a menu filled with default menu items and submenus.

[Source][24]

#### pub fn app_handle(&self) -> &[AppHandle][23]<R>

The application handle associated with this type.

[Source][25]

#### pub fn id(&self) -> &[MenuId][16]

Returns a unique identifier associated with this menu.

[Source][26]

#### pub fn append(&self, item: &dyn [IsMenuItem][18]<R>) -> [Result][13]<[()][27]>

Add a menu item to the end of this menu.

###### §Platform-specific:

  * **macOS:** Only [`Submenu`][8] can be added to the menu.



[Source][28]

#### pub fn append_items(&self, items: &[&dyn [IsMenuItem][18]<R>]) -> [Result][13]<[()][27]>

Add menu items to the end of this menu. It calls [`Menu::append`][29] in a loop internally.

###### §Platform-specific:

  * **macOS:** Only [`Submenu`][8] can be added to the menu



[Source][30]

#### pub fn prepend(&self, item: &dyn [IsMenuItem][18]<R>) -> [Result][13]<[()][27]>

Add a menu item to the beginning of this menu.

###### §Platform-specific:

  * **macOS:** Only [`Submenu`][8] can be added to the menu



[Source][31]

#### pub fn prepend_items(&self, items: &[&dyn [IsMenuItem][18]<R>]) -> [Result][13]<[()][27]>

Add menu items to the beginning of this menu. It calls [`Menu::insert_items`][32] with position of `0` internally.

###### §Platform-specific:

  * **macOS:** Only [`Submenu`][8] can be added to the menu



[Source][33]

#### pub fn insert(&self, item: &dyn [IsMenuItem][18]<R>, position: [usize][34]) -> [Result][13]<[()][27]>

Insert a menu item at the specified `position` in the menu.

###### §Platform-specific:

  * **macOS:** Only [`Submenu`][8] can be added to the menu



[Source][35]

#### pub fn insert_items( &self, items: &[&dyn [IsMenuItem][18]<R>], position: [usize][34], ) -> [Result][13]<[()][27]>

Insert menu items at the specified `position` in the menu.

###### §Platform-specific:

  * **macOS:** Only [`Submenu`][8] can be added to the menu



[Source][36]

#### pub fn remove(&self, item: &dyn [IsMenuItem][18]<R>) -> [Result][13]<[()][27]>

Remove a menu item from this menu.

[Source][37]

#### pub fn remove_at(&self, position: [usize][34]) -> [Result][13]<[Option][38]<[MenuItemKind][39]<R>>>

Remove the menu item at the specified position from this menu and returns it.

[Source][40]

#### pub fn get<'a, I>(&self, id: [&'a I][12]) -> [Option][38]<[MenuItemKind][39]<R>>

where I: ?[Sized][41], [MenuId][16]: [PartialEq][42]<[&'a I][12]>,

Retrieves the menu item matching the given identifier.

[Source][43]

#### pub fn items(&self) -> [Result][13]<[Vec][44]<[MenuItemKind][39]<R>>>

Returns a list of menu items that has been added to this menu.

[Source][45]

#### pub fn set_as_app_menu(&self) -> [Result][13]<[Option][38]<[Menu][7]<R>>>

Set this menu as the application menu.

This is an alias for [`AppHandle::set_menu`][46].

[Source][47]

#### pub fn set_as_window_menu(&self, window: &[Window][48]<R>) -> [Result][13]<[Option][38]<[Menu][7]<R>>>

Set this menu as the window menu.

This is an alias for [`Window::set_menu`][49].

## Trait Implementations§

[Source][5]§

### impl<R: [Runtime][6]> [Clone][50] for [Menu][7]<R>

[Source][5]§

#### fn [clone][51](&self) -> Self

Returns a duplicate of the value. [Read more][51]

1.0.0 · [Source][52]§

#### fn [clone_from][53](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][53]

[Source][54]§

### impl<R: [Runtime][6]> [ContextMenu][55] for [Menu][7]<R>

[Source][56]§

#### fn [hpopupmenu][57](&self) -> [Result][13]<[isize][58]>

Get the popup [`HMENU`][59] for this menu. [Read more][57]

[Source][60]§

#### fn [popup][61]<T: [Runtime][6]>(&self, window: [Window][48]<T>) -> [Result][13]<[()][27]>

Popup this menu as a context menu on the specified window at the cursor position.

[Source][62]§

#### fn [popup_at][63]<T: [Runtime][6], P: [Into][15]<[Position][64]>>( &self, window: [Window][48]<T>, position: P, ) -> [Result][13]<[()][27]>

Popup this menu as a context menu on the specified window at the specified position. [Read more][63]

[Source][5]§

### impl<R: [Runtime][6]> [Resource][65] for [Menu][7]<R>

[Source][66]§

#### fn [name][67](&self) -> [Cow][68]<'_, [str][69]>

Returns a string representation of the resource. The default implementation returns the Rust type name, but specific resource types may override this trait method.

[Source][70]§

#### fn [close][71](self: [Arc][72]<Self>)

Resources may implement the `close()` trait method if they need to do resource specific clean-ups, such as cancelling pending futures, after a resource has been removed from the resource table.

## Auto Trait Implementations§

§

### impl<R> [Freeze][73] for [Menu][7]<R>

§

### impl<R> ![RefUnwindSafe][74] for [Menu][7]<R>

§

### impl<R> [Send][75] for [Menu][7]<R>

§

### impl<R> [Sync][76] for [Menu][7]<R>

§

### impl<R> [Unpin][77] for [Menu][7]<R>

§

### impl<R> ![UnwindSafe][78] for [Menu][7]<R>

## Blanket Implementations§

[Source][79]§

### impl<T> [Any][80] for T

where T: 'static + ?[Sized][41],

[Source][81]§

#### fn [type_id][82](&self) -> [TypeId][83]

Gets the `TypeId` of `self`. [Read more][82]

[Source][84]§

### impl<T> [Borrow][85]<T> for T

where T: ?[Sized][41],

[Source][86]§

#### fn [borrow][87](&self) -> [&T][12]

Immutably borrows from an owned value. [Read more][87]

[Source][88]§

### impl<T> [BorrowMut][89]<T> for T

where T: ?[Sized][41],

[Source][90]§

#### fn [borrow_mut][91](&mut self) -> [&mut T][12]

Mutably borrows from an owned value. [Read more][91]

[Source][92]§

### impl<T> [CloneToUninit][93] for T

where T: [Clone][50],

[Source][94]§

#### unsafe fn [clone_to_uninit][95](&self, dest: [*mut ][96][u8][97])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][95]

[Source][98]§

### impl<T> [From][99]<T> for T

[Source][100]§

#### fn [from][101](t: T) -> T

Returns the argument unchanged.

[Source][102]§

### impl<T, U> [Into][15]<U> for T

where U: [From][99]<T>,

[Source][103]§

#### fn [into][104](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][99]<T> for U` chooses to do.

[Source][105]§

### impl<T> [ToOwned][106] for T

where T: [Clone][50],

[Source][107]§

#### type [Owned][108] = T

The resulting type after obtaining ownership.

[Source][109]§

#### fn [to_owned][110](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][110]

[Source][111]§

#### fn [clone_into][112](&self, target: [&mut T][12])

Uses borrowed data to replace owned data, usually by cloning. [Read more][112]

[Source][113]§

### impl<T, U> [TryFrom][114]<U> for T

where U: [Into][15]<T>,

[Source][115]§

#### type [Error][116] = [Infallible][117]

The type returned in the event of a conversion error.

[Source][118]§

#### fn [try_from][119](value: U) -> [Result][120]<T, <T as [TryFrom][114]<U>>::[Error][121]>

Performs the conversion.

[Source][122]§

### impl<T, U> [TryInto][123]<U> for T

where U: [TryFrom][114]<T>,

[Source][124]§

#### type [Error][125] = <U as [TryFrom][114]<T>>::[Error][121]

The type returned in the event of a conversion error.

[Source][126]§

#### fn [try_into][127](self) -> [Result][120]<U, <U as [TryFrom][114]<T>>::[Error][121]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/menu/mod.rs.html#144-165
   [6]: ../trait.Runtime.html (trait tauri::Runtime)
   [7]: struct.Menu.html (struct tauri::menu::Menu)
   [8]: struct.Submenu.html (struct tauri::menu::Submenu)
   [9]: ../../src/tauri/menu/menu.rs.html#91-408
   [10]: ../../src/tauri/menu/menu.rs.html#93-107
   [11]: ../trait.Manager.html (trait tauri::Manager)
   [12]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [13]: ../type.Result.html (type tauri::Result)
   [14]: ../../src/tauri/menu/menu.rs.html#110-125
   [15]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [16]: struct.MenuId.html (struct tauri::menu::MenuId)
   [17]: ../../src/tauri/menu/menu.rs.html#128-135
   [18]: trait.IsMenuItem.html (trait tauri::menu::IsMenuItem)
   [19]: struct.Menu.html#method.new (associated function tauri::menu::Menu::new)
   [20]: struct.Menu.html#method.append_items (method tauri::menu::Menu::append_items)
   [21]: ../../src/tauri/menu/menu.rs.html#139-147
   [22]: ../../src/tauri/menu/menu.rs.html#150-249
   [23]: ../struct.AppHandle.html (struct tauri::AppHandle)
   [24]: ../../src/tauri/menu/menu.rs.html#256-258
   [25]: ../../src/tauri/menu/menu.rs.html#261-263
   [26]: ../../src/tauri/menu/menu.rs.html#272-278
   [27]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [28]: ../../src/tauri/menu/menu.rs.html#287-293
   [29]: struct.Menu.html#method.append (method tauri::menu::Menu::append)
   [30]: ../../src/tauri/menu/menu.rs.html#302-308
   [31]: ../../src/tauri/menu/menu.rs.html#317-319
   [32]: struct.Menu.html#method.insert_items (method tauri::menu::Menu::insert_items)
   [33]: ../../src/tauri/menu/menu.rs.html#328-334
   [34]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [35]: ../../src/tauri/menu/menu.rs.html#343-349
   [36]: ../../src/tauri/menu/menu.rs.html#352-358
   [37]: ../../src/tauri/menu/menu.rs.html#361-368
   [38]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [39]: enum.MenuItemKind.html (enum tauri::menu::MenuItemKind)
   [40]: ../../src/tauri/menu/menu.rs.html#371-381
   [41]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [42]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [43]: ../../src/tauri/menu/menu.rs.html#384-393
   [44]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [45]: ../../src/tauri/menu/menu.rs.html#398-400
   [46]: ../struct.AppHandle.html#method.set_menu (method tauri::AppHandle::set_menu)
   [47]: ../../src/tauri/menu/menu.rs.html#405-407
   [48]: ../window/struct.Window.html (struct tauri::window::Window)
   [49]: ../window/struct.Window.html#method.set_menu (method tauri::window::Window::set_menu)
   [50]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [51]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [52]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [53]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [54]: ../../src/tauri/menu/menu.rs.html#23-40
   [55]: trait.ContextMenu.html (trait tauri::menu::ContextMenu)
   [56]: ../../src/tauri/menu/menu.rs.html#25-27
   [57]: trait.ContextMenu.html#tymethod.hpopupmenu
   [58]: https://doc.rust-lang.org/1.94.1/std/primitive.isize.html
   [59]: https://learn.microsoft.com/en-us/windows/win32/winprog/windows-data-types#HMENU
   [60]: ../../src/tauri/menu/menu.rs.html#29-31
   [61]: trait.ContextMenu.html#tymethod.popup
   [62]: ../../src/tauri/menu/menu.rs.html#33-39
   [63]: trait.ContextMenu.html#tymethod.popup_at
   [64]: ../enum.Position.html (enum tauri::Position)
   [65]: ../trait.Resource.html (trait tauri::Resource)
   [66]: ../../src/tauri/resources/mod.rs.html#31-33
   [67]: ../trait.Resource.html#method.name
   [68]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [69]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [70]: ../../src/tauri/resources/mod.rs.html#38
   [71]: ../trait.Resource.html#method.close
   [72]: https://doc.rust-lang.org/1.94.1/alloc/sync/struct.Arc.html (struct alloc::sync::Arc)
   [73]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [74]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [75]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [76]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [77]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [78]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [79]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [80]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [81]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [82]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [83]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [84]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [85]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [86]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [87]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [88]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [89]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [90]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [91]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [92]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [93]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [94]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [95]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [96]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [97]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [98]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [99]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [100]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [101]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [102]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [103]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [104]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [105]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [106]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [107]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [108]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [109]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [110]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [111]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [112]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [113]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [114]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [115]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [116]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [117]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [118]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [119]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [120]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [121]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [122]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [123]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [124]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [125]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [126]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [127]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

