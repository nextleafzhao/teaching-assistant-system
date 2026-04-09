## AnyExecutor

## [sqlx][1]0.8.6

## AnyExecutor

### Dyn Compatibility

### Implementors

## [In sqlx::any][2]

[sqlx][3]::[any][2]

# Trait AnyExecutor Copy item path
[code]
    pub trait AnyExecutor<'c>: [Executor][4]<'c, Database = [Any][5]> { }
[/code]

Expand description

An alias for [`Executor<'_, Database = Any>`][4].

## Dyn Compatibility§

This trait is **not** [dyn compatible][6].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementors§

§

### impl<'c, T> [AnyExecutor][7]<'c> for T

where T: [Executor][4]<'c, Database = [Any][5]>,

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../trait.Executor.html (trait sqlx::Executor)
   [5]: ../struct.Any.html (struct sqlx::Any)
   [6]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [7]: ../trait.AnyExecutor.html (trait sqlx::AnyExecutor)

