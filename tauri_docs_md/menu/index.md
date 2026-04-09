## Module menu

[![logo][1]][2]

## [tauri][2]2.10.3

## Module menu

### Module Items

  * Structs
  * Enums
  * Constants
  * Traits



## [In crate tauri][3]

[tauri][3]

# Module menu Copy item path

[Source][4]

Expand description

Menu types and utilities.

## Structs§

[AboutMetadata][5]
    Application metadata for the [`PredefinedMenuItem::about`][6].
[AboutMetadataBuilder][7]
    A builder type for [`AboutMetadata`][5].
[CheckMenuItem][8]
    A menu item inside a [`Menu`][9] or [`Submenu`][10] and usually contains a text and a check mark or a similar toggle that corresponds to a checked and unchecked states.
[CheckMenuItemBuilder][11]
    A builder type for [`CheckMenuItem`][8]
[IconMenuItem][12]
    A menu item inside a [`Menu`][9] or [`Submenu`][10] and usually contains an icon and a text.
[IconMenuItemBuilder][13]
    A builder type for [`IconMenuItem`][12]
[Menu][9]
    A type that is either a menu bar on the window on Windows and Linux or as a global menu in the menubar on macOS.
[MenuBuilder][14]
    A builder type for [`Menu`][9]
[MenuEvent][15]
    Describes a menu event emitted when a menu item is activated
[MenuId][16]
    An unique id that is associated with a menu or a menu item.
[MenuItem][17]
    A menu item inside a [`Menu`][9] or [`Submenu`][10] and contains only text.
[MenuItemBuilder][18]
    A builder type for [`MenuItem`][17]
[PredefinedMenuItem][19]
    A predefined (native) menu item which has a predefined behavior by the OS or by this crate.
[Submenu][10]
    A type that is a submenu inside a [`Menu`][9] or [`Submenu`][10]
[SubmenuBuilder][20]
    A builder type for [`Submenu`][10]

## Enums§

[MenuItemKind][21]
    An enumeration of all menu item kinds that could be added to a [`Menu`][9] or [`Submenu`][10]
[NativeIcon][22]
    A native Icon to be used for the menu item

## Constants§

[HELP_SUBMENU_ID][23]
    Expected submenu id of the Help menu for macOS.
[WINDOW_SUBMENU_ID][24]
    Expected submenu id of the Window menu for macOS.

## Traits§

[ContextMenu][25]
    A helper trait with methods to help creating a context menu.
[IsMenuItem][26]
    A trait that defines a generic item in a menu, which may be one of [`MenuItemKind`][21]

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: ../index.html
   [4]: ../../src/tauri/menu/mod.rs.html#5-782
   [5]: struct.AboutMetadata.html (struct tauri::menu::AboutMetadata)
   [6]: struct.PredefinedMenuItem.html#method.about (associated function tauri::menu::PredefinedMenuItem::about)
   [7]: struct.AboutMetadataBuilder.html (struct tauri::menu::AboutMetadataBuilder)
   [8]: struct.CheckMenuItem.html (struct tauri::menu::CheckMenuItem)
   [9]: struct.Menu.html (struct tauri::menu::Menu)
   [10]: struct.Submenu.html (struct tauri::menu::Submenu)
   [11]: struct.CheckMenuItemBuilder.html (struct tauri::menu::CheckMenuItemBuilder)
   [12]: struct.IconMenuItem.html (struct tauri::menu::IconMenuItem)
   [13]: struct.IconMenuItemBuilder.html (struct tauri::menu::IconMenuItemBuilder)
   [14]: struct.MenuBuilder.html (struct tauri::menu::MenuBuilder)
   [15]: struct.MenuEvent.html (struct tauri::menu::MenuEvent)
   [16]: struct.MenuId.html (struct tauri::menu::MenuId)
   [17]: struct.MenuItem.html (struct tauri::menu::MenuItem)
   [18]: struct.MenuItemBuilder.html (struct tauri::menu::MenuItemBuilder)
   [19]: struct.PredefinedMenuItem.html (struct tauri::menu::PredefinedMenuItem)
   [20]: struct.SubmenuBuilder.html (struct tauri::menu::SubmenuBuilder)
   [21]: enum.MenuItemKind.html (enum tauri::menu::MenuItemKind)
   [22]: enum.NativeIcon.html (enum tauri::menu::NativeIcon)
   [23]: constant.HELP_SUBMENU_ID.html (constant tauri::menu::HELP_SUBMENU_ID)
   [24]: constant.WINDOW_SUBMENU_ID.html (constant tauri::menu::WINDOW_SUBMENU_ID)
   [25]: trait.ContextMenu.html (trait tauri::menu::ContextMenu)
   [26]: trait.IsMenuItem.html (trait tauri::menu::IsMenuItem)

