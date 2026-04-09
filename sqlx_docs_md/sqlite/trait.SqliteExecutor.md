## SqliteExecutor

## [sqlx][1]0.8.6

## SqliteExecutor

### Dyn Compatibility

### Implementors

## [In sqlx::sqlite][2]

[sqlx][3]::[sqlite][2]

# Trait SqliteExecutor Copy item path
[code]
    pub trait SqliteExecutor<'c>: [Executor][4]<'c, Database = [Sqlite][5]> { }
[/code]

Expand description

An alias for [`Executor<'_, Database = Sqlite>`][4].

## Dyn Compatibility§

This trait is **not** [dyn compatible][6].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementors§

§

### impl<'c, T> [SqliteExecutor][7]<'c> for T

where T: [Executor][4]<'c, Database = [Sqlite][5]>,

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../trait.Executor.html (trait sqlx::Executor)
   [5]: ../struct.Sqlite.html (struct sqlx::Sqlite)
   [6]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [7]: ../trait.SqliteExecutor.html (trait sqlx::SqliteExecutor)

