## PredefinedMenuItem

[![logo][1]][2]

## [tauri][2]2.10.3

## PredefinedMenuItem

### Methods

  * about
  * app_handle
  * close_window
  * copy
  * cut
  * fullscreen
  * hide
  * hide_others
  * id
  * maximize
  * minimize
  * paste
  * quit
  * redo
  * select_all
  * separator
  * services
  * set_text
  * show_all
  * text
  * undo



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

# Struct PredefinedMenuItem Copy item path

[Source][5]
[code] 
    pub struct PredefinedMenuItem<R: [Runtime][6]>(/* private fields */);
[/code]

Expand description

A predefined (native) menu item which has a predefined behavior by the OS or by this crate.

## Implementations§

[Source][7]§

### impl<R: [Runtime][6]> [PredefinedMenuItem][8]<R>

[Source][9]

#### pub fn separator<M: [Manager][10]<R>>(manager: [&M][11]) -> [Result][12]<Self>

Separator menu item

[Source][13]

#### pub fn copy<M: [Manager][10]<R>>(manager: [&M][11], text: [Option][14]<&[str][15]>) -> [Result][12]<Self>

Copy menu item

[Source][16]

#### pub fn cut<M: [Manager][10]<R>>(manager: [&M][11], text: [Option][14]<&[str][15]>) -> [Result][12]<Self>

Cut menu item

[Source][17]

#### pub fn paste<M: [Manager][10]<R>>(manager: [&M][11], text: [Option][14]<&[str][15]>) -> [Result][12]<Self>

Paste menu item

[Source][18]

#### pub fn select_all<M: [Manager][10]<R>>( manager: [&M][11], text: [Option][14]<&[str][15]>, ) -> [Result][12]<Self>

SelectAll menu item

[Source][19]

#### pub fn undo<M: [Manager][10]<R>>(manager: [&M][11], text: [Option][14]<&[str][15]>) -> [Result][12]<Self>

Undo menu item

###### §Platform-specific:

  * **Windows / Linux:** Unsupported.



[Source][20]

#### pub fn redo<M: [Manager][10]<R>>(manager: [&M][11], text: [Option][14]<&[str][15]>) -> [Result][12]<Self>

Redo menu item

###### §Platform-specific:

  * **Windows / Linux:** Unsupported.



[Source][21]

#### pub fn minimize<M: [Manager][10]<R>>(manager: [&M][11], text: [Option][14]<&[str][15]>) -> [Result][12]<Self>

Minimize window menu item

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][22]

#### pub fn maximize<M: [Manager][10]<R>>(manager: [&M][11], text: [Option][14]<&[str][15]>) -> [Result][12]<Self>

Maximize window menu item

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][23]

#### pub fn fullscreen<M: [Manager][10]<R>>( manager: [&M][11], text: [Option][14]<&[str][15]>, ) -> [Result][12]<Self>

Fullscreen menu item

###### §Platform-specific:

  * **Windows / Linux:** Unsupported.



[Source][24]

#### pub fn hide<M: [Manager][10]<R>>(manager: [&M][11], text: [Option][14]<&[str][15]>) -> [Result][12]<Self>

Hide window menu item

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][25]

#### pub fn hide_others<M: [Manager][10]<R>>( manager: [&M][11], text: [Option][14]<&[str][15]>, ) -> [Result][12]<Self>

Hide other windows menu item

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][26]

#### pub fn show_all<M: [Manager][10]<R>>(manager: [&M][11], text: [Option][14]<&[str][15]>) -> [Result][12]<Self>

Show all app windows menu item

###### §Platform-specific:

  * **Windows / Linux:** Unsupported.



[Source][27]

#### pub fn close_window<M: [Manager][10]<R>>( manager: [&M][11], text: [Option][14]<&[str][15]>, ) -> [Result][12]<Self>

Close window menu item

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][28]

#### pub fn quit<M: [Manager][10]<R>>(manager: [&M][11], text: [Option][14]<&[str][15]>) -> [Result][12]<Self>

Quit app menu item

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][29]

#### pub fn about<M: [Manager][10]<R>>( manager: [&M][11], text: [Option][14]<&[str][15]>, metadata: [Option][14]<[AboutMetadata][30]<'_>>, ) -> [Result][12]<Self>

About app menu item

[Source][31]

#### pub fn services<M: [Manager][10]<R>>(manager: [&M][11], text: [Option][14]<&[str][15]>) -> [Result][12]<Self>

Services menu item

###### §Platform-specific:

  * **Windows / Linux:** Unsupported.



[Source][32]

#### pub fn id(&self) -> &[MenuId][33]

Returns a unique identifier associated with this menu item.

[Source][34]

#### pub fn text(&self) -> [Result][12]<[String][35]>

Get the text for this menu item.

[Source][36]

#### pub fn set_text<S: [AsRef][37]<[str][15]>>(&self, text: S) -> [Result][12]<[()][38]>

Set the text for this menu item. `text` could optionally contain an `&` before a character to assign this character as the mnemonic for this menu item. To display a `&` without assigning a mnemenonic, use `&&`.

[Source][39]

#### pub fn app_handle(&self) -> &[AppHandle][40]<R>

The application handle associated with this type.

## Trait Implementations§

[Source][5]§

### impl<R: [Runtime][6]> [Clone][41] for [PredefinedMenuItem][8]<R>

[Source][5]§

#### fn [clone][42](&self) -> Self

Returns a duplicate of the value. [Read more][42]

1.0.0 · [Source][43]§

#### fn [clone_from][44](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][44]

[Source][5]§

### impl<R: [Runtime][6]> [IsMenuItem][45]<R> for [PredefinedMenuItem][8]<R>

[Source][5]§

#### fn [kind][46](&self) -> [MenuItemKind][47]<R>

Returns the kind of this menu item.

[Source][5]§

#### fn [id][48](&self) -> &[MenuId][33]

Returns a unique identifier associated with this menu.

[Source][5]§

### impl<R: [Runtime][6]> [Resource][49] for [PredefinedMenuItem][8]<R>

[Source][50]§

#### fn [name][51](&self) -> [Cow][52]<'_, [str][15]>

Returns a string representation of the resource. The default implementation returns the Rust type name, but specific resource types may override this trait method.

[Source][53]§

#### fn [close][54](self: [Arc][55]<Self>)

Resources may implement the `close()` trait method if they need to do resource specific clean-ups, such as cancelling pending futures, after a resource has been removed from the resource table.

## Auto Trait Implementations§

§

### impl<R> [Freeze][56] for [PredefinedMenuItem][8]<R>

§

### impl<R> ![RefUnwindSafe][57] for [PredefinedMenuItem][8]<R>

§

### impl<R> [Send][58] for [PredefinedMenuItem][8]<R>

§

### impl<R> [Sync][59] for [PredefinedMenuItem][8]<R>

§

### impl<R> [Unpin][60] for [PredefinedMenuItem][8]<R>

§

### impl<R> ![UnwindSafe][61] for [PredefinedMenuItem][8]<R>

## Blanket Implementations§

[Source][62]§

### impl<T> [Any][63] for T

where T: 'static + ?[Sized][64],

[Source][65]§

#### fn [type_id][66](&self) -> [TypeId][67]

Gets the `TypeId` of `self`. [Read more][66]

[Source][68]§

### impl<T> [Borrow][69]<T> for T

where T: ?[Sized][64],

[Source][70]§

#### fn [borrow][71](&self) -> [&T][11]

Immutably borrows from an owned value. [Read more][71]

[Source][72]§

### impl<T> [BorrowMut][73]<T> for T

where T: ?[Sized][64],

[Source][74]§

#### fn [borrow_mut][75](&mut self) -> [&mut T][11]

Mutably borrows from an owned value. [Read more][75]

[Source][76]§

### impl<T> [CloneToUninit][77] for T

where T: [Clone][41],

[Source][78]§

#### unsafe fn [clone_to_uninit][79](&self, dest: [*mut ][80][u8][81])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][79]

[Source][82]§

### impl<T> [From][83]<T> for T

[Source][84]§

#### fn [from][85](t: T) -> T

Returns the argument unchanged.

[Source][86]§

### impl<T, U> [Into][87]<U> for T

where U: [From][83]<T>,

[Source][88]§

#### fn [into][89](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][83]<T> for U` chooses to do.

[Source][90]§

### impl<T> [ToOwned][91] for T

where T: [Clone][41],

[Source][92]§

#### type [Owned][93] = T

The resulting type after obtaining ownership.

[Source][94]§

#### fn [to_owned][95](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][95]

[Source][96]§

#### fn [clone_into][97](&self, target: [&mut T][11])

Uses borrowed data to replace owned data, usually by cloning. [Read more][97]

[Source][98]§

### impl<T, U> [TryFrom][99]<U> for T

where U: [Into][87]<T>,

[Source][100]§

#### type [Error][101] = [Infallible][102]

The type returned in the event of a conversion error.

[Source][103]§

#### fn [try_from][104](value: U) -> [Result][105]<T, <T as [TryFrom][99]<U>>::[Error][106]>

Performs the conversion.

[Source][107]§

### impl<T, U> [TryInto][108]<U> for T

where U: [TryFrom][99]<T>,

[Source][109]§

#### type [Error][110] = <U as [TryFrom][99]<T>>::[Error][106]

The type returned in the event of a conversion error.

[Source][111]§

#### fn [try_into][112](self) -> [Result][105]<U, <U as [TryFrom][99]<T>>::[Error][106]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/menu/mod.rs.html#144-165
   [6]: ../trait.Runtime.html (trait tauri::Runtime)
   [7]: ../../src/tauri/menu/predefined.rs.html#13-409
   [8]: struct.PredefinedMenuItem.html (struct tauri::menu::PredefinedMenuItem)
   [9]: ../../src/tauri/menu/predefined.rs.html#15-29
   [10]: ../trait.Manager.html (trait tauri::Manager)
   [11]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [12]: ../type.Result.html (type tauri::Result)
   [13]: ../../src/tauri/menu/predefined.rs.html#32-48
   [14]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [15]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [16]: ../../src/tauri/menu/predefined.rs.html#51-67
   [17]: ../../src/tauri/menu/predefined.rs.html#70-86
   [18]: ../../src/tauri/menu/predefined.rs.html#89-105
   [19]: ../../src/tauri/menu/predefined.rs.html#112-128
   [20]: ../../src/tauri/menu/predefined.rs.html#134-150
   [21]: ../../src/tauri/menu/predefined.rs.html#157-173
   [22]: ../../src/tauri/menu/predefined.rs.html#180-196
   [23]: ../../src/tauri/menu/predefined.rs.html#203-219
   [24]: ../../src/tauri/menu/predefined.rs.html#226-242
   [25]: ../../src/tauri/menu/predefined.rs.html#249-265
   [26]: ../../src/tauri/menu/predefined.rs.html#272-288
   [27]: ../../src/tauri/menu/predefined.rs.html#295-311
   [28]: ../../src/tauri/menu/predefined.rs.html#318-334
   [29]: ../../src/tauri/menu/predefined.rs.html#337-362
   [30]: struct.AboutMetadata.html (struct tauri::menu::AboutMetadata)
   [31]: ../../src/tauri/menu/predefined.rs.html#369-385
   [32]: ../../src/tauri/menu/predefined.rs.html#388-390
   [33]: struct.MenuId.html (struct tauri::menu::MenuId)
   [34]: ../../src/tauri/menu/predefined.rs.html#393-395
   [35]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [36]: ../../src/tauri/menu/predefined.rs.html#400-403
   [37]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [38]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [39]: ../../src/tauri/menu/predefined.rs.html#406-408
   [40]: ../struct.AppHandle.html (struct tauri::AppHandle)
   [41]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [42]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [43]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [44]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [45]: trait.IsMenuItem.html (trait tauri::menu::IsMenuItem)
   [46]: trait.IsMenuItem.html#tymethod.kind
   [47]: enum.MenuItemKind.html (enum tauri::menu::MenuItemKind)
   [48]: trait.IsMenuItem.html#tymethod.id
   [49]: ../trait.Resource.html (trait tauri::Resource)
   [50]: ../../src/tauri/resources/mod.rs.html#31-33
   [51]: ../trait.Resource.html#method.name
   [52]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [53]: ../../src/tauri/resources/mod.rs.html#38
   [54]: ../trait.Resource.html#method.close
   [55]: https://doc.rust-lang.org/1.94.1/alloc/sync/struct.Arc.html (struct alloc::sync::Arc)
   [56]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [57]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [58]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [59]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [60]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [61]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [62]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [63]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [64]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [65]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [66]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [67]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [68]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [69]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [70]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [71]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [72]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [73]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [74]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [75]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [76]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [77]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [78]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [79]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [80]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [81]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [82]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [83]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [84]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [85]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [86]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [87]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [88]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [89]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [90]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [91]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [92]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [93]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [94]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [95]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [96]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [97]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [98]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [99]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [100]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [101]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [102]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [103]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [104]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [105]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [106]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [107]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [108]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [109]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [110]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [111]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [112]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

