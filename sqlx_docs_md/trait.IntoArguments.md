## IntoArguments

## [sqlx][1]0.8.6

## IntoArguments

### Required Methods

  * into_arguments



### Dyn Compatibility

### Implementors

## [In crate sqlx][2]

[sqlx][2]

# Trait IntoArguments Copy item path
[code]
    pub trait IntoArguments<'q, DB>: [Sized][3] + [Send][4]
    
    where
        DB: [Database][5],
    
    {
        // Required method
        fn into_arguments(self) -> <DB as [Database][5]>::[Arguments][6]<'q>;
    }
[/code]

## Required Methods§

#### fn into_arguments(self) -> <DB as [Database][5]>::[Arguments][6]<'q>

## Dyn Compatibility§

This trait is **not** [dyn compatible][7].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementors§

§

### impl<'q> [IntoArguments][8]<'q, <[AnyArguments][9]<'q> as [Arguments][10]<'q>>::[Database][11]> for [AnyArguments][9]<'q>

§

### impl<'q> [IntoArguments][8]<'q, <[SqliteArguments][12]<'q> as [Arguments][10]<'q>>::[Database][11]> for [SqliteArguments][12]<'q>

§

### impl<'q, DB> [IntoArguments][8]<'q, DB> for ImmutableArguments<'q, DB>

where DB: [Database][5],

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [4]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [5]: trait.Database.html (trait sqlx::Database)
   [6]: trait.Database.html#associatedtype.Arguments (type sqlx::Database::Arguments)
   [7]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [8]: trait.IntoArguments.html (trait sqlx::IntoArguments)
   [9]: any/struct.AnyArguments.html (struct sqlx::any::AnyArguments)
   [10]: trait.Arguments.html (trait sqlx::Arguments)
   [11]: trait.Arguments.html#associatedtype.Database (type sqlx::Arguments::Database)
   [12]: sqlite/struct.SqliteArguments.html (struct sqlx::sqlite::SqliteArguments)

