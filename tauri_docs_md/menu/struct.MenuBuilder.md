## MenuBuilder

[![logo][1]][2]

## [tauri][2]2.10.3

## MenuBuilder

### Sections

  * Platform-specific:
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

# Struct MenuBuilder Copy item path

[Source][5]
[code] 
    pub struct MenuBuilder<'m, R: [Runtime][6], M: [Manager][7]<R>> { /* private fields */ }
[/code]

Expand description

A builder type for [`Menu`][8]

### §Platform-specific:

  * **macOS** : if using [`MenuBuilder`][9] for the global menubar, it can only contain [`Submenu`][10]s



## §Example
[code] 
    use tauri::menu::*;
    tauri::Builder::default()
      .setup(move |app| {
        let handle = app.handle();
        let menu = MenuBuilder::new(handle)
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
        app.set_menu(menu);
        Ok(())
      });
[/code]

## Implementations§

[Source][11]§

### impl<'m, R: [Runtime][6], M: [Manager][7]<R>> [MenuBuilder][9]<'m, R, M>

[Source][12]

#### pub fn new(manager: [&'m M][13]) -> Self

Create a new menu builder.

[Source][14]

#### pub fn with_id<I: [Into][15]<[MenuId][16]>>(manager: [&'m M][13], id: I) -> Self

Create a new menu builder with the specified id.

[Source][17]

#### pub fn build(self) -> [Result][18]<[Menu][8]<R>>

Builds this menu

[Source][19]§

### impl<'m, R: [Runtime][6], M: [Manager][7]<R>> [MenuBuilder][9]<'m, R, M>

[Source][19]

#### pub fn id<I: [Into][15]<[MenuId][16]>>(self, id: I) -> Self

Set the id for this menu.

[Source][19]

#### pub fn item(self, item: &dyn [IsMenuItem][20]<R>) -> Self

Add this item to the menu.

[Source][19]

#### pub fn items(self, items: &[&dyn [IsMenuItem][20]<R>]) -> Self

Add these items to the menu.

[Source][19]

#### pub fn text<I: [Into][15]<[MenuId][16]>, S: [AsRef][21]<[str][22]>>(self, id: I, text: S) -> Self

Add a [MenuItem][23] to the menu.

[Source][19]

#### pub fn check<I: [Into][15]<[MenuId][16]>, S: [AsRef][21]<[str][22]>>(self, id: I, text: S) -> Self

Add a [CheckMenuItem][24] to the menu.

[Source][19]

#### pub fn icon<I: [Into][15]<[MenuId][16]>, S: [AsRef][21]<[str][22]>>( self, id: I, text: S, icon: [Image][25]<'_>, ) -> Self

Add an [IconMenuItem][26] to the menu.

[Source][19]

#### pub fn native_icon<I: [Into][15]<[MenuId][16]>, S: [AsRef][21]<[str][22]>>( self, id: I, text: S, icon: [NativeIcon][27], ) -> Self

Add an [IconMenuItem][26] with a native icon to the menu.

###### §Platform-specific:

  * **Windows / Linux** : Unsupported.



[Source][19]

#### pub fn separator(self) -> Self

Add Separator menu item to the menu.

[Source][19]

#### pub fn copy(self) -> Self

Add Copy menu item to the menu.

[Source][19]

#### pub fn copy_with_text<S: [AsRef][21]<[str][22]>>(self, text: S) -> Self

Add Copy menu item with specified text to the menu.

[Source][19]

#### pub fn cut(self) -> Self

Add Cut menu item to the menu.

[Source][19]

#### pub fn cut_with_text<S: [AsRef][21]<[str][22]>>(self, text: S) -> Self

Add Cut menu item with specified text to the menu.

[Source][19]

#### pub fn paste(self) -> Self

Add Paste menu item to the menu.

[Source][19]

#### pub fn paste_with_text<S: [AsRef][21]<[str][22]>>(self, text: S) -> Self

Add Paste menu item with specified text to the menu.

[Source][19]

#### pub fn select_all(self) -> Self

Add SelectAll menu item to the menu.

[Source][19]

#### pub fn select_all_with_text<S: [AsRef][21]<[str][22]>>(self, text: S) -> Self

Add SelectAll menu item with specified text to the menu.

[Source][19]

#### pub fn undo(self) -> Self

Add Undo menu item to the menu.

###### §Platform-specific:

  * **Windows / Linux:** Unsupported.



[Source][19]

#### pub fn undo_with_text<S: [AsRef][21]<[str][22]>>(self, text: S) -> Self

Add Undo menu item with specified text to the menu.

###### §Platform-specific:

  * **Windows / Linux:** Unsupported.



[Source][19]

#### pub fn redo(self) -> Self

Add Redo menu item to the menu.

###### §Platform-specific:

  * **Windows / Linux:** Unsupported.



[Source][19]

#### pub fn redo_with_text<S: [AsRef][21]<[str][22]>>(self, text: S) -> Self

Add Redo menu item with specified text to the menu.

###### §Platform-specific:

  * **Windows / Linux:** Unsupported.



[Source][19]

#### pub fn minimize(self) -> Self

Add Minimize window menu item to the menu.

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][19]

#### pub fn minimize_with_text<S: [AsRef][21]<[str][22]>>(self, text: S) -> Self

Add Minimize window menu item with specified text to the menu.

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][19]

#### pub fn maximize(self) -> Self

Add Maximize window menu item to the menu.

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][19]

#### pub fn maximize_with_text<S: [AsRef][21]<[str][22]>>(self, text: S) -> Self

Add Maximize window menu item with specified text to the menu.

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][19]

#### pub fn fullscreen(self) -> Self

Add Fullscreen menu item to the menu.

###### §Platform-specific:

  * **Windows / Linux:** Unsupported.



[Source][19]

#### pub fn fullscreen_with_text<S: [AsRef][21]<[str][22]>>(self, text: S) -> Self

Add Fullscreen menu item with specified text to the menu.

###### §Platform-specific:

  * **Windows / Linux:** Unsupported.



[Source][19]

#### pub fn hide(self) -> Self

Add Hide window menu item to the menu.

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][19]

#### pub fn hide_with_text<S: [AsRef][21]<[str][22]>>(self, text: S) -> Self

Add Hide window menu item with specified text to the menu.

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][19]

#### pub fn hide_others(self) -> Self

Add Hide other windows menu item to the menu.

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][19]

#### pub fn hide_others_with_text<S: [AsRef][21]<[str][22]>>(self, text: S) -> Self

Add Hide other windows menu item with specified text to the menu.

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][19]

#### pub fn show_all(self) -> Self

Add Show all app windows menu item to the menu.

###### §Platform-specific:

  * **Windows / Linux:** Unsupported.



[Source][19]

#### pub fn show_all_with_text<S: [AsRef][21]<[str][22]>>(self, text: S) -> Self

Add Show all app windows menu item with specified text to the menu.

###### §Platform-specific:

  * **Windows / Linux:** Unsupported.



[Source][19]

#### pub fn close_window(self) -> Self

Add Close window menu item to the menu.

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][19]

#### pub fn close_window_with_text<S: [AsRef][21]<[str][22]>>(self, text: S) -> Self

Add Close window menu item with specified text to the menu.

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][19]

#### pub fn quit(self) -> Self

Add Quit app menu item to the menu.

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][19]

#### pub fn quit_with_text<S: [AsRef][21]<[str][22]>>(self, text: S) -> Self

Add Quit app menu item with specified text to the menu.

###### §Platform-specific:

  * **Linux:** Unsupported.



[Source][19]

#### pub fn about(self, metadata: [Option][28]<[AboutMetadata][29]<'_>>) -> Self

Add About app menu item to the menu.

[Source][19]

#### pub fn about_with_text<S: [AsRef][21]<[str][22]>>( self, text: S, metadata: [Option][28]<[AboutMetadata][29]<'_>>, ) -> Self

Add About app menu item with specified text to the menu.

[Source][19]

#### pub fn services(self) -> Self

Add Services menu item to the menu.

###### §Platform-specific:

  * **Windows / Linux:** Unsupported.



[Source][19]

#### pub fn services_with_text<S: [AsRef][21]<[str][22]>>(self, text: S) -> Self

Add Services menu item with specified text to the menu.

###### §Platform-specific:

  * **Windows / Linux:** Unsupported.



## Auto Trait Implementations§

§

### impl<'m, R, M> [Freeze][30] for [MenuBuilder][9]<'m, R, M>

§

### impl<'m, R, M> ![RefUnwindSafe][31] for [MenuBuilder][9]<'m, R, M>

§

### impl<'m, R, M> [Send][32] for [MenuBuilder][9]<'m, R, M>

where M: [Sync][33],

§

### impl<'m, R, M> [Sync][33] for [MenuBuilder][9]<'m, R, M>

where M: [Sync][33],

§

### impl<'m, R, M> [Unpin][34] for [MenuBuilder][9]<'m, R, M>

§

### impl<'m, R, M> ![UnwindSafe][35] for [MenuBuilder][9]<'m, R, M>

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

#### fn [borrow][45](&self) -> [&T][13]

Immutably borrows from an owned value. [Read more][45]

[Source][46]§

### impl<T> [BorrowMut][47]<T> for T

where T: ?[Sized][38],

[Source][48]§

#### fn [borrow_mut][49](&mut self) -> [&mut T][13]

Mutably borrows from an owned value. [Read more][49]

[Source][50]§

### impl<T> [From][51]<T> for T

[Source][52]§

#### fn [from][53](t: T) -> T

Returns the argument unchanged.

[Source][54]§

### impl<T, U> [Into][15]<U> for T

where U: [From][51]<T>,

[Source][55]§

#### fn [into][56](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][51]<T> for U` chooses to do.

[Source][57]§

### impl<T, U> [TryFrom][58]<U> for T

where U: [Into][15]<T>,

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
   [5]: ../../src/tauri/menu\builders/menu.rs.html#40-44
   [6]: ../trait.Runtime.html (trait tauri::Runtime)
   [7]: ../trait.Manager.html (trait tauri::Manager)
   [8]: struct.Menu.html (struct tauri::menu::Menu)
   [9]: struct.MenuBuilder.html (struct tauri::menu::MenuBuilder)
   [10]: struct.Submenu.html (struct tauri::menu::Submenu)
   [11]: ../../src/tauri/menu\builders/menu.rs.html#46-80
   [12]: ../../src/tauri/menu\builders/menu.rs.html#48-54
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [14]: ../../src/tauri/menu\builders/menu.rs.html#57-63
   [15]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [16]: struct.MenuId.html (struct tauri::menu::MenuId)
   [17]: ../../src/tauri/menu\builders/menu.rs.html#66-79
   [18]: ../type.Result.html (type tauri::Result)
   [19]: ../../src/tauri/menu\builders/menu.rs.html#649
   [20]: trait.IsMenuItem.html (trait tauri::menu::IsMenuItem)
   [21]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [22]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [23]: struct.MenuItem.html (struct tauri::menu::MenuItem)
   [24]: struct.CheckMenuItem.html (struct tauri::menu::CheckMenuItem)
   [25]: ../image/struct.Image.html (struct tauri::image::Image)
   [26]: struct.IconMenuItem.html (struct tauri::menu::IconMenuItem)
   [27]: enum.NativeIcon.html (enum tauri::menu::NativeIcon)
   [28]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [29]: struct.AboutMetadata.html (struct tauri::menu::AboutMetadata)
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

