## SqliteExecutor

## [sqlx][1]0.8.6

## SqliteExecutor

### Dyn Compatibility

### Implementors

## [In crate sqlx][2]

[sqlx][2]

# Trait SqliteExecutor Copy item path
[code]
    pub trait SqliteExecutor<'c>: [Executor][3]<'c, Database = [Sqlite][4]> { }
[/code]

Expand description

An alias for [`Executor<'_, Database = Sqlite>`][3].

## Dyn Compatibility§

This trait is **not** [dyn compatible][5].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementors§

§

### impl<'c, T> [SqliteExecutor][6]<'c> for T

where T: [Executor][3]<'c, Database = [Sqlite][4]>,

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: trait.Executor.html (trait sqlx::Executor)
   [4]: struct.Sqlite.html (struct sqlx::Sqlite)
   [5]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [6]: trait.SqliteExecutor.html (trait sqlx::SqliteExecutor)

