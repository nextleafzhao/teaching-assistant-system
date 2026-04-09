## SubmenuBuilder

[![logo][1]][2]

## [tauri][2]2.10.3

## SubmenuBuilder

### Sections

  * Example



### Methods

  * about
  * about_with_text
  * build
  * check
  * close_window
  * close_window_with_text
  * copy
  * copy_with_text
  * cut
  * cut_with_text
  * enabled
  * fullscreen
  * fullscreen_with_text
  * hide
  * hide_others
  * hide_others_with_text
  * hide_with_text
  * icon
  * id
  * item
  * items
  * maximize
  * maximize_with_text
  * minimize
  * minimize_with_text
  * native_icon
  * new
  * paste
  * paste_with_text
  * quit
  * quit_with_text
  * redo
  * redo_with_text
  * select_all
  * select_all_with_text
  * separator
  * services
  * services_with_text
  * show_all
  * show_all_with_text
  * submenu_icon
  * submenu_native_icon
  * text
  * undo
  * undo_with_text
  * with_id



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
  * From<T>
  * Into<U>
  * TryFrom<U>
  * TryInto<U>



## [In tauri::menu][3]

[tauri][4]::[menu][3]

# Struct SubmenuBuilder Copy item path

[Source][5]
[code] 
    pub struct SubmenuBuilder<'m, R: [Runtime][6], M: [Manager][7]<R>> { /* private fields */ }
[/code]

Expand description

A builder type for [`Submenu`][8]

## §Example
[code] 
    use tauri::menu::*;
    tauri::Builder::default()
      .setup(move |app| {
        let handle = app.handle();
        let menu = Menu::new(handle)?;
        let submenu = SubmenuBuilder::new(handle, "File")
          .item(&MenuItem::new(handle, "MenuItem 1", true, None::<&str>)?)
          .items(&[
            &CheckMenuItem::new(handle, "CheckMenuItem 1", true, true, None::<&str>)?,
            &IconMenuItem::new(handle, "IconMenuItem 1", true, Some(icon1), None::<&str>)?,
          ])
          .separator()
          .cut()
          .copy()
          .paste()
          .separator()
          .text("item2", "MenuItem 2")
          .check("checkitem2", "CheckMenuItem 2")
          .icon("iconitem2", "IconMenuItem 2", app.default_window_icon().cloned().unwrap())
          .build()?;
        menu.append(&submenu)?;
        app.set_menu(menu);
        Ok(())
      });
[/code]

## Implementations§

[Source][9]§

### impl<'m, R: [Runtime][6], M: [Manager][7]<R>> [SubmenuBuilder][10]<'m, R, M>

[Source][11]

#### pub fn new<S: [AsRef][12]<[str][13]>>(manager: [&'m M][14], text: S) -> Self

Create a new submenu builder.

  * `text` could optionally contain an `&` before a character to assign this character as the mnemonic for this menu item. To display a `&` without assigning a mnemenonic, use `&&`.



[Source][15]

#### pub fn with_id<I: [Into][16]<[MenuId][17]>, S: [AsRef][12]<[str][13]>>( manager: [&'m M][14], id: I, text: S, ) -> Self

Create a new submenu builder with the specified id.

  * `text` could optionally contain an `&` before a character to assign this character as the mnemonic for this menu item. To display a `&` without assigning a mnemenonic, use `&&`.



[Source][18]

#### pub fn submenu_icon(self, icon: [Image][19]<'m>) -> Self

Set an icon for the submenu. Calling this method resets the native_icon.

[Source][20]

#### pub fn submenu_native_icon(self, icon: [NativeIcon][21]) -> Self

Set a native icon for the submenu. Calling this method resets the icon.

[Source][22]

#### pub fn enabled(self, enabled: [bool][23]) -> Self

Set the enabled state for the submenu.

[Source][24]

#### pub fn build(self) -> [Result][25]<[Submenu][8]<R>>

Builds this submenu

[Source][26]§

### impl<'m, R: [Runtime][6], M: [Manager][7]<R>> [SubmenuBuilder][10]<'m, R, M>

[Source][26]

#### pub fn id<I: [Into][16]<[MenuId][17]>>(self, id: I) -> Self

Set the id for this menu.

[Source][26]

#### pub fn item(self, item: &dyn [IsMenuItem][27]<R>) -> Self

Add this item to the menu.

[Source][26]

#### pub fn items(self, items: &[&dyn [IsMenuItem][27]<R>]) -> Self

Add these items to the menu.

[Source][26]

#### pub fn text<I: [Into][16]<[MenuId][17]>, S: [AsRef][12]<[str][13]>>(self, id: I, text: S) -> Self

Add a [MenuItem][28] to the menu.

[Source][26]

#### pub fn check<I: [Into][16]<[MenuId][17]>, S: [AsRef][12]<[str][13]>>(self, id: I, text: S) -> Self

Add a [CheckMenuItem][29] to the menu.

[Source][26]

#### pub fn icon<I: [Into][16]<[MenuId][17]>, S: [AsRef][12]<[str][13]>>( self, id: I, text: S, icon: [Image][19]<'_>, ) -> Self

Add an [IconMenuItem][30] to the menu.

[Source][26]

#### pub fn native_icon<I: [Into][16]<[MenuId][17]>, S: [AsRef][12]<[str][13]>>( self, id: I, text: S, icon: [NativeIcon][21], ) -> Self

Add an [IconMenuItem][30] with a native icon to the menu.

###### §Platform-specific:

  * **Windows / Linux** : Unsupported.



[Source][26]

#### pub fn separator(self) -> Self

Add Separator menu item to the menu.

[Source][26]

#### pub fn copy(self) -> Self

Add Copy menu item to the menu.

[Source][26]

#### pub fn copy_with_text<S: [AsRef][12]<[str][13]>>(self, text: S) -> Self

Add Copy menu item with specified text to the menu.

[Source][26]

#### pub fn cut(self) -> Self

Add Cut menu item to the menu.

[Source][26]

#### pub fn cut_with_text<S: [AsRef][12]<[str][13]>>(self, text: S) -> Self

Add Cut menu item with specified text to the menu.

[Source][26]

#### pub fn paste(self) -> Self

Add Paste menu item to the menu.

[Source][26]

#### pub fn paste_with_text<S: [AsRef][12]<[str][13]>>(self, text: S) -> Self

Add Paste menu item with specified text to the menu.

[Source][26]

#### pub fn select_all(self) -> Self

Add SelectAll menu item to the menu.

[Source][26]

#### pub fn select_all_with_text<S: [AsRef][12]<[str][13]>>(self, text: S) -> Self

Add SelectAll menu item with specified text to the menu.

[Source][26]

#### pub fn undo(self) -> Self

Add Undo menu item to the menu.

###### §Platform-specific:

  * **Windows / Linux:** Unsupported.



[Source][26]

#### pub fn undo_with_text<S: [AsRef][12]<[str][13]>>(self, text: S) -> Self

Add Undo menu item with specified text to the menu.

###### §Platform-specific:

  * **Windows / Linux:** Unsupported.



[Source][26]

#### pub fn redo(self) -> Self

Add Redo menu item to the menu.

###### §Platform-specific:

  * **Windows / Linux:** Unsupported.



[Source][26]

#### pub fn redo_with_text<S: [AsRef][12]<[str][13]>>(self, text: S) -> Self

Add Redo menu item with specified text to the menu.

###### §Platform-specific:

  * **Windows / Linux:** Unsupported.



[Source][26]

#### pub fn minimize(self) -> Self

Add Minimize window menu item to the menu.

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][26]

#### pub fn minimize_with_text<S: [AsRef][12]<[str][13]>>(self, text: S) -> Self

Add Minimize window menu item with specified text to the menu.

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][26]

#### pub fn maximize(self) -> Self

Add Maximize window menu item to the menu.

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][26]

#### pub fn maximize_with_text<S: [AsRef][12]<[str][13]>>(self, text: S) -> Self

Add Maximize window menu item with specified text to the menu.

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][26]

#### pub fn fullscreen(self) -> Self

Add Fullscreen menu item to the menu.

###### §Platform-specific:

  * **Windows / Linux:** Unsupported.



[Source][26]

#### pub fn fullscreen_with_text<S: [AsRef][12]<[str][13]>>(self, text: S) -> Self

Add Fullscreen menu item with specified text to the menu.

###### §Platform-specific:

  * **Windows / Linux:** Unsupported.



[Source][26]

#### pub fn hide(self) -> Self

Add Hide window menu item to the menu.

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][26]

#### pub fn hide_with_text<S: [AsRef][12]<[str][13]>>(self, text: S) -> Self

Add Hide window menu item with specified text to the menu.

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][26]

#### pub fn hide_others(self) -> Self

Add Hide other windows menu item to the menu.

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][26]

#### pub fn hide_others_with_text<S: [AsRef][12]<[str][13]>>(self, text: S) -> Self

Add Hide other windows menu item with specified text to the menu.

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][26]

#### pub fn show_all(self) -> Self

Add Show all app windows menu item to the menu.

###### §Platform-specific:

  * **Windows / Linux:** Unsupported.



[Source][26]

#### pub fn show_all_with_text<S: [AsRef][12]<[str][13]>>(self, text: S) -> Self

Add Show all app windows menu item with specified text to the menu.

###### §Platform-specific:

  * **Windows / Linux:** Unsupported.



[Source][26]

#### pub fn close_window(self) -> Self

Add Close window menu item to the menu.

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][26]

#### pub fn close_window_with_text<S: [AsRef][12]<[str][13]>>(self, text: S) -> Self

Add Close window menu item with specified text to the menu.

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][26]

#### pub fn quit(self) -> Self

Add Quit app menu item to the menu.

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][26]

#### pub fn quit_with_text<S: [AsRef][12]<[str][13]>>(self, text: S) -> Self

Add Quit app menu item with specified text to the menu.

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][26]

#### pub fn about(self, metadata: [Option][31]<[AboutMetadata][32]<'_>>) -> Self

Add About app menu item to the menu.

[Source][26]

#### pub fn about_with_text<S: [AsRef][12]<[str][13]>>( self, text: S, metadata: [Option][31]<[AboutMetadata][32]<'_>>, ) -> Self

Add About app menu item with specified text to the menu.

[Source][26]

#### pub fn services(self) -> Self

Add Services menu item to the menu.

###### §Platform-specific:

  * **Windows / Linux:** Unsupported.



[Source][26]

#### pub fn services_with_text<S: [AsRef][12]<[str][13]>>(self, text: S) -> Self

Add Services menu item with specified text to the menu.

###### §Platform-specific:

  * **Windows / Linux:** Unsupported.



## Auto Trait Implementations§

§

### impl<'m, R, M> [Freeze][33] for [SubmenuBuilder][10]<'m, R, M>

§

### impl<'m, R, M> ![RefUnwindSafe][34] for [SubmenuBuilder][10]<'m, R, M>

§

### impl<'m, R, M> [Send][35] for [SubmenuBuilder][10]<'m, R, M>

where M: [Sync][36],

§

### impl<'m, R, M> [Sync][36] for [SubmenuBuilder][10]<'m, R, M>

where M: [Sync][36],

§

### impl<'m, R, M> [Unpin][37] for [SubmenuBuilder][10]<'m, R, M>

§

### impl<'m, R, M> ![UnwindSafe][38] for [SubmenuBuilder][10]<'m, R, M>

## Blanket Implementations§

[Source][39]§

### impl<T> [Any][40] for T

where T: 'static + ?[Sized][41],

[Source][42]§

#### fn [type_id][43](&self) -> [TypeId][44]

Gets the `TypeId` of `self`. [Read more][43]

[Source][45]§

### impl<T> [Borrow][46]<T> for T

where T: ?[Sized][41],

[Source][47]§

#### fn [borrow][48](&self) -> [&T][14]

Immutably borrows from an owned value. [Read more][48]

[Source][49]§

### impl<T> [BorrowMut][50]<T> for T

where T: ?[Sized][41],

[Source][51]§

#### fn [borrow_mut][52](&mut self) -> [&mut T][14]

Mutably borrows from an owned value. [Read more][52]

[Source][53]§

### impl<T> [From][54]<T> for T

[Source][55]§

#### fn [from][56](t: T) -> T

Returns the argument unchanged.

[Source][57]§

### impl<T, U> [Into][16]<U> for T

where U: [From][54]<T>,

[Source][58]§

#### fn [into][59](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][54]<T> for U` chooses to do.

[Source][60]§

### impl<T, U> [TryFrom][61]<U> for T

where U: [Into][16]<T>,

[Source][62]§

#### type [Error][63] = [Infallible][64]

The type returned in the event of a conversion error.

[Source][65]§

#### fn [try_from][66](value: U) -> [Result][67]<T, <T as [TryFrom][61]<U>>::[Error][68]>

Performs the conversion.

[Source][69]§

### impl<T, U> [TryInto][70]<U> for T

where U: [TryFrom][61]<T>,

[Source][71]§

#### type [Error][72] = <U as [TryFrom][61]<T>>::[Error][68]

The type returned in the event of a conversion error.

[Source][73]§

#### fn [try_into][74](self) -> [Result][67]<U, <U as [TryFrom][61]<T>>::[Error][68]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/menu\builders/menu.rs.html#114-122
   [6]: ../trait.Runtime.html (trait tauri::Runtime)
   [7]: ../trait.Manager.html (trait tauri::Manager)
   [8]: struct.Submenu.html (struct tauri::menu::Submenu)
   [9]: ../../src/tauri/menu\builders/menu.rs.html#124-210
   [10]: struct.SubmenuBuilder.html (struct tauri::menu::SubmenuBuilder)
   [11]: ../../src/tauri/menu\builders/menu.rs.html#129-139
   [12]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [14]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [15]: ../../src/tauri/menu\builders/menu.rs.html#145-155
   [16]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [17]: struct.MenuId.html (struct tauri::menu::MenuId)
   [18]: ../../src/tauri/menu\builders/menu.rs.html#159-163
   [19]: ../image/struct.Image.html (struct tauri::image::Image)
   [20]: ../../src/tauri/menu\builders/menu.rs.html#167-171
   [21]: enum.NativeIcon.html (enum tauri::menu::NativeIcon)
   [22]: ../../src/tauri/menu\builders/menu.rs.html#174-177
   [23]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [24]: ../../src/tauri/menu\builders/menu.rs.html#180-209
   [25]: ../type.Result.html (type tauri::Result)
   [26]: ../../src/tauri/menu\builders/menu.rs.html#650
   [27]: trait.IsMenuItem.html (trait tauri::menu::IsMenuItem)
   [28]: struct.MenuItem.html (struct tauri::menu::MenuItem)
   [29]: struct.CheckMenuItem.html (struct tauri::menu::CheckMenuItem)
   [30]: struct.IconMenuItem.html (struct tauri::menu::IconMenuItem)
   [31]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [32]: struct.AboutMetadata.html (struct tauri::menu::AboutMetadata)
   [33]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [34]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [35]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [36]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [37]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [38]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [39]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [40]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [41]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [42]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [43]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [44]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [45]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [46]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [47]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [48]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [49]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [50]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [51]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [52]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [53]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [54]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [56]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [57]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [58]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [59]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [60]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [61]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [62]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [63]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [65]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [67]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [69]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [71]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [72]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [73]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [74]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

