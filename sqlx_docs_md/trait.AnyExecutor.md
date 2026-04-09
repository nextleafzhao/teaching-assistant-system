## AnyExecutor

## [sqlx][1]0.8.6

## AnyExecutor

### Dyn Compatibility

### Implementors

## [In crate sqlx][2]

[sqlx][2]

# Trait AnyExecutor Copy item path
[code]
    pub trait AnyExecutor<'c>: [Executor][3]<'c, Database = [Any][4]> { }
[/code]

Expand description

An alias for [`Executor<'_, Database = Any>`][3].

## Dyn Compatibility§

This trait is **not** [dyn compatible][5].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementors§

§

### impl<'c, T> [AnyExecutor][6]<'c> for T

where T: [Executor][3]<'c, Database = [Any][4]>,

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: trait.Executor.html (trait sqlx::Executor)
   [4]: struct.Any.html (struct sqlx::Any)
   [5]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [6]: trait.AnyExecutor.html (trait sqlx::AnyExecutor)

