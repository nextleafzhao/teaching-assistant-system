## IntoArguments

## [sqlx][1]0.8.6

## IntoArguments

### Required Methods

  * into_arguments



### Dyn Compatibility

### Implementors

## [In sqlx::prelude][2]

[sqlx][3]::[prelude][2]

# Trait IntoArguments Copy item path
[code]
    pub trait IntoArguments<'q, DB>: [Sized][4] + [Send][5]
    
    where
        DB: [Database][6],
    
    {
        // Required method
        fn into_arguments(self) -> <DB as [Database][6]>::[Arguments][7]<'q>;
    }
[/code]

## Required Methods§

#### fn into_arguments(self) -> <DB as [Database][6]>::[Arguments][7]<'q>

## Dyn Compatibility§

This trait is **not** [dyn compatible][8].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementors§

§

### impl<'q> [IntoArguments][9]<'q, <[AnyArguments][10]<'q> as [Arguments][11]<'q>>::[Database][12]> for [AnyArguments][10]<'q>

§

### impl<'q> [IntoArguments][9]<'q, <[SqliteArguments][13]<'q> as [Arguments][11]<'q>>::[Database][12]> for [SqliteArguments][13]<'q>

§

### impl<'q, DB> [IntoArguments][9]<'q, DB> for ImmutableArguments<'q, DB>

where DB: [Database][6],

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [5]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [6]: ../trait.Database.html (trait sqlx::Database)
   [7]: ../trait.Database.html#associatedtype.Arguments (type sqlx::Database::Arguments)
   [8]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [9]: ../trait.IntoArguments.html (trait sqlx::IntoArguments)
   [10]: ../any/struct.AnyArguments.html (struct sqlx::any::AnyArguments)
   [11]: ../trait.Arguments.html (trait sqlx::Arguments)
   [12]: ../trait.Arguments.html#associatedtype.Database (type sqlx::Arguments::Database)
   [13]: ../sqlite/struct.SqliteArguments.html (struct sqlx::sqlite::SqliteArguments)

