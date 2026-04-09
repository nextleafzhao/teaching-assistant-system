## IsMenuItem

[![logo][1]][2]

## [tauri][2]2.10.3

## IsMenuItem

### Sections

  * Safety



### Required Methods

  * id
  * kind



### Implementors

## [In tauri::menu][3]

[tauri][4]::[menu][3]

# Trait IsMenuItem Copy item path

[Source][5]
[code] 
    pub trait IsMenuItem<R: [Runtime][6]>: IsMenuItemBase {
        // Required methods
        fn kind(&self) -> [MenuItemKind][7]<R>;
        fn id(&self) -> &[MenuId][8];
    }
[/code]

Expand description

A trait that defines a generic item in a menu, which may be one of [`MenuItemKind`][7]

## §Safety

This trait is ONLY meant to be implemented internally by the crate.

## Required Methods§

[Source][9]

#### fn kind(&self) -> [MenuItemKind][7]<R>

Returns the kind of this menu item.

[Source][10]

#### fn id(&self) -> &[MenuId][8]

Returns a unique identifier associated with this menu.

## Implementors§

[Source][11]§

### impl<R: [Runtime][6]> [IsMenuItem][12]<R> for [MenuItemKind][7]<R>

[Source][13]§

### impl<R: [Runtime][6]> [IsMenuItem][12]<R> for [CheckMenuItem][14]<R>

[Source][13]§

### impl<R: [Runtime][6]> [IsMenuItem][12]<R> for [IconMenuItem][15]<R>

[Source][13]§

### impl<R: [Runtime][6]> [IsMenuItem][12]<R> for [MenuItem][16]<R>

[Source][13]§

### impl<R: [Runtime][6]> [IsMenuItem][12]<R> for [PredefinedMenuItem][17]<R>

[Source][13]§

### impl<R: [Runtime][6]> [IsMenuItem][12]<R> for [Submenu][18]<R>

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/menu/mod.rs.html#722-728
   [6]: ../trait.Runtime.html (trait tauri::Runtime)
   [7]: enum.MenuItemKind.html (enum tauri::menu::MenuItemKind)
   [8]: struct.MenuId.html (struct tauri::menu::MenuId)
   [9]: ../../src/tauri/menu/mod.rs.html#724
   [10]: ../../src/tauri/menu/mod.rs.html#727
   [11]: ../../src/tauri/menu/mod.rs.html#707-715
   [12]: trait.IsMenuItem.html (trait tauri::menu::IsMenuItem)
   [13]: ../../src/tauri/menu/mod.rs.html#144-165
   [14]: struct.CheckMenuItem.html (struct tauri::menu::CheckMenuItem)
   [15]: struct.IconMenuItem.html (struct tauri::menu::IconMenuItem)
   [16]: struct.MenuItem.html (struct tauri::menu::MenuItem)
   [17]: struct.PredefinedMenuItem.html (struct tauri::menu::PredefinedMenuItem)
   [18]: struct.Submenu.html (struct tauri::menu::Submenu)

