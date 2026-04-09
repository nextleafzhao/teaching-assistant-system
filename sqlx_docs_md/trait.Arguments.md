## Arguments

## [sqlx][1]0.8.6

## Arguments

### Required Associated Types

  * Database



### Required Methods

  * add
  * len
  * reserve



### Provided Methods

  * format_placeholder



### Dyn Compatibility

### Implementors

## [In crate sqlx][2]

[sqlx][2]

# Trait Arguments Copy item path
[code]
    pub trait Arguments<'q>:
        [Sized][3]
        + [Send][4]
        + [Default][5] {
        type Database: [Database][6];
    
        // Required methods
        fn reserve(&mut self, additional: [usize][7], size: [usize][7]);
        fn add<T>(&mut self, value: T) -> [Result][8]<[()][9], [Box][10]<dyn [Error][11] + [Send][4] + [Sync][12]>>
           where T: 'q + [Encode][13]<'q, Self::[Database][14]> + [Type][15]<Self::[Database][14]>;
        fn len(&self) -> [usize][7];
    
        // Provided method
        fn format_placeholder<W>(&self, writer: [&mut W][16]) -> [Result][8]<[()][9], [Error][17]>
           where W: [Write][18] { ... }
    }
[/code]

Expand description

A tuple of arguments to be sent to the database.

## Required Associated Types§

#### type Database: [Database][6]

## Required Methods§

#### fn reserve(&mut self, additional: [usize][7], size: [usize][7])

Reserves the capacity for at least `additional` more values (of `size` total bytes) to be added to the arguments without a reallocation.

#### fn add<T>(&mut self, value: T) -> [Result][8]<[()][9], [Box][10]<dyn [Error][11] \+ [Send][4] \+ [Sync][12]>>

where T: 'q + [Encode][13]<'q, Self::[Database][14]> \+ [Type][15]<Self::[Database][14]>,

Add the value to the end of the arguments.

#### fn len(&self) -> [usize][7]

The number of arguments that were already added.

## Provided Methods§

#### fn format_placeholder<W>(&self, writer: [&mut W][16]) -> [Result][8]<[()][9], [Error][17]>

where W: [Write][18],

## Dyn Compatibility§

This trait is **not** [dyn compatible][19].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementors§

§

### impl<'q> [Arguments][20]<'q> for [AnyArguments][21]<'q>

§

#### type Database = [Any][22]

§

### impl<'q> [Arguments][20]<'q> for [SqliteArguments][23]<'q>

§

#### type Database = [Sqlite][24]

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [4]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [5]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [6]: trait.Database.html (trait sqlx::Database)
   [7]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [8]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [9]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [10]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [11]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [12]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [13]: trait.Encode.html (trait sqlx::Encode)
   [14]: trait.Arguments.html#associatedtype.Database (type sqlx::Arguments::Database)
   [15]: trait.Type.html (trait sqlx::Type)
   [16]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [17]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [18]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Write.html (trait core::fmt::Write)
   [19]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [20]: trait.Arguments.html (trait sqlx::Arguments)
   [21]: any/struct.AnyArguments.html (struct sqlx::any::AnyArguments)
   [22]: struct.Any.html (struct sqlx::Any)
   [23]: sqlite/struct.SqliteArguments.html (struct sqlx::sqlite::SqliteArguments)
   [24]: struct.Sqlite.html (struct sqlx::Sqlite)

