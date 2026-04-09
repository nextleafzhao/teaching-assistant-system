## MigrateDatabase

## [sqlx][1]0.8.6

## MigrateDatabase

### Required Methods

  * create_database
  * database_exists
  * drop_database



### Provided Methods

  * force_drop_database



### Dyn Compatibility

### Implementors

## [In sqlx::migrate][2]

[sqlx][3]::[migrate][2]

# Trait MigrateDatabase Copy item path
[code]
    pub trait MigrateDatabase {
        // Required methods
        fn create_database(
            url: &[str][4],
        ) -> [Pin][5]<[Box][6]<dyn [Future][7]<Output = [Result][8]<[()][9], [Error][10]>> + [Send][11] + '_>>;
        fn database_exists(
            url: &[str][4],
        ) -> [Pin][5]<[Box][6]<dyn [Future][7]<Output = [Result][8]<[bool][12], [Error][10]>> + [Send][11] + '_>>;
        fn drop_database(
            url: &[str][4],
        ) -> [Pin][5]<[Box][6]<dyn [Future][7]<Output = [Result][8]<[()][9], [Error][10]>> + [Send][11] + '_>>;
    
        // Provided method
        fn force_drop_database(
            _url: &[str][4],
        ) -> [Pin][5]<[Box][6]<dyn [Future][7]<Output = [Result][8]<[()][9], [Error][10]>> + [Send][11] + '_>> { ... }
    }
[/code]

## Required Methods§

#### fn create_database( url: &[str][4], ) -> [Pin][5]<[Box][6]<dyn [Future][7]<Output = [Result][8]<[()][9], [Error][10]>> \+ [Send][11] \+ '_>>

#### fn database_exists( url: &[str][4], ) -> [Pin][5]<[Box][6]<dyn [Future][7]<Output = [Result][8]<[bool][12], [Error][10]>> \+ [Send][11] \+ '_>>

#### fn drop_database( url: &[str][4], ) -> [Pin][5]<[Box][6]<dyn [Future][7]<Output = [Result][8]<[()][9], [Error][10]>> \+ [Send][11] \+ '_>>

## Provided Methods§

#### fn force_drop_database( _url: &[str][4], ) -> [Pin][5]<[Box][6]<dyn [Future][7]<Output = [Result][8]<[()][9], [Error][10]>> \+ [Send][11] \+ '_>>

## Dyn Compatibility§

This trait is **not** [dyn compatible][13].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementors§

§

### impl [MigrateDatabase][14] for [Any][15]

§

### impl [MigrateDatabase][14] for [Sqlite][16]

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [5]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [6]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [7]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [8]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [9]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [10]: ../enum.Error.html (enum sqlx::Error)
   [11]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [12]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [13]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [14]: trait.MigrateDatabase.html (trait sqlx::migrate::MigrateDatabase)
   [15]: ../struct.Any.html (struct sqlx::Any)
   [16]: ../struct.Sqlite.html (struct sqlx::Sqlite)

