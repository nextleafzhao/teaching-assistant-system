## Assets

[![logo][1]][2]

## [tauri][2]2.10.3

## Assets

### Required Methods

  * csp_hashes
  * get
  * iter



### Provided Methods

  * setup



### Implementations on Foreign Types

  * EmbeddedAssets



### Implementors

## [In crate tauri][3]

[tauri][3]

# Trait Assets Copy item path

[Source][4]
[code] 
    pub trait Assets<R: [Runtime][5]>:
        [Send][6]
        + [Sync][7]
        + 'static {
        // Required methods
        fn get(&self, key: &AssetKey) -> [Option][8]<[Cow][9]<'_, [[u8][10]]>>;
        fn iter(&self) -> [Box][11]<AssetsIter<'_>>;
        fn csp_hashes(
            &self,
            html_path: &AssetKey,
        ) -> [Box][11]<dyn [Iterator][12]<Item = CspHash<'_>> + '_>;
    
        // Provided method
        fn setup(&self, app: &[App][13]<R>) { ... }
    }
[/code]

Expand description

Represents a container of file assets that are retrievable during runtime.

## Required Methods§

[Source][14]

#### fn get(&self, key: &AssetKey) -> [Option][8]<[Cow][9]<'_, [[u8][10]]>>

Get the content of the passed [`AssetKey`].

[Source][15]

#### fn iter(&self) -> [Box][11]<AssetsIter<'_>>

Iterator for the assets.

[Source][16]

#### fn csp_hashes( &self, html_path: &AssetKey, ) -> [Box][11]<dyn [Iterator][12]<Item = CspHash<'_>> \+ '_>

Gets the hashes for the CSP tag of the HTML on the given path.

## Provided Methods§

[Source][17]

#### fn setup(&self, app: &[App][13]<R>)

Initialize the asset provider.

## Implementations on Foreign Types§

[Source][18]§

### impl<R: [Runtime][5]> [Assets][19]<R> for EmbeddedAssets

[Source][20]§

#### fn get(&self, key: &AssetKey) -> [Option][8]<[Cow][9]<'_, [[u8][10]]>>

[Source][21]§

#### fn iter(&self) -> [Box][11]<AssetsIter<'_>>

[Source][22]§

#### fn csp_hashes( &self, html_path: &AssetKey, ) -> [Box][11]<dyn [Iterator][12]<Item = CspHash<'_>> \+ '_>

## Implementors§

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/lib.rs.html#319-333
   [5]: trait.Runtime.html (trait tauri::Runtime)
   [6]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [7]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [8]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [9]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [10]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [11]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [12]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html (trait core::iter::traits::iterator::Iterator)
   [13]: struct.App.html (struct tauri::App)
   [14]: ../src/tauri/lib.rs.html#326
   [15]: ../src/tauri/lib.rs.html#329
   [16]: ../src/tauri/lib.rs.html#332
   [17]: ../src/tauri/lib.rs.html#321-323
   [18]: ../src/tauri/lib.rs.html#335-347
   [19]: trait.Assets.html (trait tauri::Assets)
   [20]: ../src/tauri/lib.rs.html#336-338
   [21]: ../src/tauri/lib.rs.html#340-342
   [22]: ../src/tauri/lib.rs.html#344-346

