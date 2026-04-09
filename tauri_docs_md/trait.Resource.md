## Resource

[![logo][1]][2]

## [tauri][2]2.10.3

## Resource

### Provided Methods

  * close
  * name



### Implementors

## [In crate tauri][3]

[tauri][3]

# Trait Resource Copy item path

[Source][4]
[code] 
    pub trait Resource:
        [Any][5]
        + 'static
        + [Send][6]
        + [Sync][7] {
        // Provided methods
        fn name(&self) -> [Cow][8]<'_, [str][9]> { ... }
        fn close(self: [Arc][10]<Self>) { ... }
    }
[/code]

Expand description

Resources are Rust objects that are stored in [ResourceTable][11] and managed by tauri.

They are identified in JS by a numeric ID (the resource ID, or rid). Resources can be created in commands. Resources can also be retrieved in commands by their rid. Resources are thread-safe.

Resources are reference counted in Rust. This means that they can be cloned and passed around. When the last reference is dropped, the resource is automatically closed. As long as the resource exists in the resource table, the reference count is at least 1.

## Provided Methods§

[Source][12]

#### fn name(&self) -> [Cow][8]<'_, [str][9]>

Returns a string representation of the resource. The default implementation returns the Rust type name, but specific resource types may override this trait method.

[Source][13]

#### fn close(self: [Arc][10]<Self>)

Resources may implement the `close()` trait method if they need to do resource specific clean-ups, such as cancelling pending futures, after a resource has been removed from the resource table.

## Implementors§

[Source][14]§

### impl [Resource][15] for [Image][16]<'static>

[Source][17]§

### impl<R: [Runtime][18]> [Resource][15] for [CheckMenuItem][19]<R>

[Source][17]§

### impl<R: [Runtime][18]> [Resource][15] for [IconMenuItem][20]<R>

[Source][17]§

### impl<R: [Runtime][18]> [Resource][15] for [Menu][21]<R>

[Source][17]§

### impl<R: [Runtime][18]> [Resource][15] for [MenuItem][22]<R>

[Source][17]§

### impl<R: [Runtime][18]> [Resource][15] for [PredefinedMenuItem][23]<R>

[Source][17]§

### impl<R: [Runtime][18]> [Resource][15] for [Submenu][24]<R>

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/resources/mod.rs.html#27-39
   [5]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [6]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [7]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [8]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [9]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [10]: https://doc.rust-lang.org/1.94.1/alloc/sync/struct.Arc.html (struct alloc::sync::Arc)
   [11]: struct.ResourceTable.html (struct tauri::ResourceTable)
   [12]: ../src/tauri/resources/mod.rs.html#31-33
   [13]: ../src/tauri/resources/mod.rs.html#38
   [14]: ../src/tauri/image/mod.rs.html#46
   [15]: trait.Resource.html (trait tauri::Resource)
   [16]: image/struct.Image.html (struct tauri::image::Image)
   [17]: ../src/tauri/menu/mod.rs.html#144-165
   [18]: trait.Runtime.html (trait tauri::Runtime)
   [19]: menu/struct.CheckMenuItem.html (struct tauri::menu::CheckMenuItem)
   [20]: menu/struct.IconMenuItem.html (struct tauri::menu::IconMenuItem)
   [21]: menu/struct.Menu.html (struct tauri::menu::Menu)
   [22]: menu/struct.MenuItem.html (struct tauri::menu::MenuItem)
   [23]: menu/struct.PredefinedMenuItem.html (struct tauri::menu::PredefinedMenuItem)
   [24]: menu/struct.Submenu.html (struct tauri::menu::Submenu)

