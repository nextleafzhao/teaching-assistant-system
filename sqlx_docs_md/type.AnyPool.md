## AnyPool

## [sqlx][1]0.8.6

## AnyPool

### Aliased Type

## [In crate sqlx][2]

[sqlx][2]

# Type Alias AnyPool Copy item path
[code]
    pub type AnyPool = [Pool][3]<[Any][4]>;
[/code]

Expand description

**SEE DOCUMENTATION BEFORE USE**. Type alias for `Pool<Any>`.

The underlying database drivers are chosen at runtime from the list set via [`install_drivers`][5]. Any use of [`AnyConnection`][6] or [`AnyPool`][7] without this will panic.

It is recommended to use [`install_default_drivers`][8] to activate all currently compiled-in drivers.

## Aliased Type§
[code]
    pub struct AnyPool(/* private fields */);
[/code]

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: struct.Pool.html (struct sqlx::Pool)
   [4]: struct.Any.html (struct sqlx::Any)
   [5]: any/fn.install_drivers.html (fn sqlx::any::install_drivers)
   [6]: struct.AnyConnection.html (struct sqlx::AnyConnection)
   [7]: type.AnyPool.html (type sqlx::AnyPool)
   [8]: any/fn.install_default_drivers.html (fn sqlx::any::install_default_drivers)

