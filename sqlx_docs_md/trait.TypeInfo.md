## TypeInfo

## [sqlx][1]0.8.6

## TypeInfo

### Required Methods

  * is_null
  * name



### Provided Methods

  * type_compatible



### Dyn Compatibility

### Implementors

## [In crate sqlx][2]

[sqlx][2]

# Trait TypeInfo Copy item path
[code]
    pub trait TypeInfo:
        [Debug][3]
        + [Display][4]
        + [Clone][5]
        + [PartialEq][6]
        + [Send][7]
        + [Sync][8] {
        // Required methods
        fn is_null(&self) -> [bool][9];
        fn name(&self) -> &[str][10];
    
        // Provided method
        fn type_compatible(&self, other: &Self) -> [bool][9]
           where Self: [Sized][11] { ... }
    }
[/code]

Expand description

Provides information about a SQL type for the database driver.

## Required Methods§

#### fn is_null(&self) -> [bool][9]

#### fn name(&self) -> &[str][10]

Returns the database system name of the type. Length specifiers should not be included. Common type names are `VARCHAR`, `TEXT`, or `INT`. Type names should be uppercase. They should be a rough approximation of how they are written in SQL in the given database.

## Provided Methods§

#### fn type_compatible(&self, other: &Self) -> [bool][9]

where Self: [Sized][11],

Return `true` if `self` and `other` represent mutually compatible types.

Defaults to `self == other`.

## Dyn Compatibility§

This trait is **not** [dyn compatible][12].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementors§

§

### impl [TypeInfo][13] for [AnyTypeInfo][14]

§

### impl [TypeInfo][13] for [SqliteTypeInfo][15]

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [4]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [5]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [6]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [7]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [8]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [9]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [10]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [11]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [12]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [13]: trait.TypeInfo.html (trait sqlx::TypeInfo)
   [14]: any/struct.AnyTypeInfo.html (struct sqlx::any::AnyTypeInfo)
   [15]: sqlite/struct.SqliteTypeInfo.html (struct sqlx::sqlite::SqliteTypeInfo)

