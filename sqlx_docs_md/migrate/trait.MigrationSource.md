## MigrationSource

## [sqlx][1]0.8.6

## MigrationSource

### Required Methods

  * resolve



### Implementations on Foreign Types

  * &'s Path
  * PathBuf



### Implementors

## [In sqlx::migrate][2]

[sqlx][3]::[migrate][2]

# Trait MigrationSource Copy item path
[code]
    pub trait MigrationSource<'s>: [Debug][4] {
        // Required method
        fn resolve(
            self,
        ) -> [Pin][5]<[Box][6]<dyn [Future][7]<Output = [Result][8]<[Vec][9]<[Migration][10]>, [Box][6]<dyn [Error][11] + [Send][12] + [Sync][13]>>> + [Send][12] + 's>>;
    }
[/code]

Expand description

In the default implementation, a MigrationSource is a directory which contains the migration SQL scripts. All these scripts must be stored in files with names using the format `<VERSION>_<DESCRIPTION>.sql`, where `<VERSION>` is a string that can be parsed into `i64` and its value is greater than zero, and `<DESCRIPTION>` is a string.

Files that don’t match this format are silently ignored.

You can create a new empty migration script using sqlx-cli: `sqlx migrate add <DESCRIPTION>`.

Note that migrations for each database are tracked using the `_sqlx_migrations` table (stored in the database). If a migration’s hash changes and it has already been run, this will cause an error.

## Required Methods§

#### fn resolve( self, ) -> [Pin][5]<[Box][6]<dyn [Future][7]<Output = [Result][8]<[Vec][9]<[Migration][10]>, [Box][6]<dyn [Error][11] \+ [Send][12] \+ [Sync][13]>>> \+ [Send][12] \+ 's>>

## Implementations on Foreign Types§

§

### impl [MigrationSource][14]<'static> for [PathBuf][15]

§

#### fn resolve( self, ) -> [Pin][5]<[Box][6]<dyn [Future][7]<Output = [Result][8]<[Vec][9]<[Migration][10]>, [Box][6]<dyn [Error][11] \+ [Send][12] \+ [Sync][13]>>> \+ [Send][12]>>

§

### impl<'s> [MigrationSource][14]<'s> for &'s [Path][16]

§

#### fn resolve( self, ) -> [Pin][5]<[Box][6]<dyn [Future][7]<Output = [Result][8]<[Vec][9]<[Migration][10]>, [Box][6]<dyn [Error][11] \+ [Send][12] \+ [Sync][13]>>> \+ [Send][12] \+ 's>>

## Implementors§

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [5]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [6]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [7]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [8]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [9]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [10]: struct.Migration.html (struct sqlx::migrate::Migration)
   [11]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [12]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [13]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [14]: trait.MigrationSource.html (trait sqlx::migrate::MigrationSource)
   [15]: https://doc.rust-lang.org/1.94.1/std/path/struct.PathBuf.html (struct std::path::PathBuf)
   [16]: https://doc.rust-lang.org/1.94.1/std/path/struct.Path.html (struct std::path::Path)

