## ContextMenu

[![logo][1]][2]

## [tauri][2]2.10.3

## ContextMenu

### Sections

  * Safety



### Required Methods

  * hpopupmenu
  * popup
  * popup_at



### Dyn Compatibility

### Implementors

## [In tauri::menu][3]

[tauri][4]::[menu][3]

# Trait ContextMenu Copy item path

[Source][5]
[code] 
    pub trait ContextMenu:
        ContextMenuBase
        + [Send][6]
        + [Sync][7] {
        // Required methods
        fn hpopupmenu(&self) -> [Result][8]<[isize][9]>;
        fn popup<R: [Runtime][10]>(&self, window: [Window][11]<R>) -> [Result][8]<[()][12]>;
        fn popup_at<R: [Runtime][10], P: [Into][13]<[Position][14]>>(
            &self,
            window: [Window][11]<R>,
            position: P,
        ) -> [Result][8]<[()][12]>;
    }
[/code]

Expand description

A helper trait with methods to help creating a context menu.

## §Safety

This trait is ONLY meant to be implemented internally by the crate.

## Required Methods§

[Source][15]

#### fn hpopupmenu(&self) -> [Result][8]<[isize][9]>

Get the popup [`HMENU`][16] for this menu.

The returned [`HMENU`][16] is valid as long as the [`ContextMenu`][17] is.

[Source][18]

#### fn popup<R: [Runtime][10]>(&self, window: [Window][11]<R>) -> [Result][8]<[()][12]>

Popup this menu as a context menu on the specified window at the cursor position.

[Source][19]

#### fn popup_at<R: [Runtime][10], P: [Into][13]<[Position][14]>>( &self, window: [Window][11]<R>, position: P, ) -> [Result][8]<[()][12]>

Popup this menu as a context menu on the specified window at the specified position.

The position is relative to the window’s top-left corner.

## Dyn Compatibility§

This trait is **not** [dyn compatible][20].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementors§

[Source][21]§

### impl<R: [Runtime][10]> [ContextMenu][17] for [Menu][22]<R>

[Source][23]§

### impl<R: [Runtime][10]> [ContextMenu][17] for [Submenu][24]<R>

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/menu/mod.rs.html#735-756
   [6]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [7]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [8]: ../type.Result.html (type tauri::Result)
   [9]: https://doc.rust-lang.org/1.94.1/std/primitive.isize.html
   [10]: ../trait.Runtime.html (trait tauri::Runtime)
   [11]: ../window/struct.Window.html (struct tauri::window::Window)
   [12]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [13]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [14]: ../enum.Position.html (enum tauri::Position)
   [15]: ../../src/tauri/menu/mod.rs.html#743
   [16]: https://learn.microsoft.com/en-us/windows/win32/winprog/windows-data-types#HMENU
   [17]: trait.ContextMenu.html (trait tauri::menu::ContextMenu)
   [18]: ../../src/tauri/menu/mod.rs.html#746
   [19]: ../../src/tauri/menu/mod.rs.html#751-755
   [20]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [21]: ../../src/tauri/menu/menu.rs.html#23-40
   [22]: struct.Menu.html (struct tauri::menu::Menu)
   [23]: ../../src/tauri/menu/submenu.rs.html#16-33
   [24]: struct.Submenu.html (struct tauri::menu::Submenu)

