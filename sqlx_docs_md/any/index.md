## Module any

## [sqlx][1]0.8.6

## Module any

### Module Items

  * Structs
  * Enums
  * Traits
  * Functions
  * Type Aliases



## [In crate sqlx][2]

[sqlx][2]

# Module any Copy item path

[Source][3]

Expand description

**SEE DOCUMENTATION BEFORE USE**. Runtime-generic database driver.

The underlying database drivers are chosen at runtime from the list set via [`install_drivers`][4]. Any use of [`AnyConnection`][5] or [`AnyPool`][6] without this will panic.

It is recommended to use [`install_default_drivers`][7] to activate all currently compiled-in drivers.

## Structs§

[Any][8]
    Opaque database driver. Capable of being used in place of any SQLx database driver. The actual driver used will be selected at runtime, from the connection url.
[AnyArguments][9]
[AnyConnectOptions][10]
    Opaque options for connecting to a database. These may only be constructed by parsing from a connection url.
[AnyQueryResult][11]
[AnyRow][12]
[AnyStatement][13]
[AnyTransactionManager][14]
[AnyTypeInfo][15]
[AnyValue][16]
[AnyValueRef][17]

## Enums§

[AnyKind][18]Deprecated
[AnyTypeInfoKind][19]

## Traits§

[AnyExecutor][20]
    An alias for [`Executor<'_, Database = Any>`][21].

## Functions§

[install_default_drivers][7]
    Install all currently compiled-in drivers for [`AnyConnection`][5] to use.
[install_drivers][4]
    Install the list of drivers for [`AnyConnection`][5] to use.

## Type Aliases§

[AnyPoolOptions][22]

   [1]: ../../sqlx/index.html
   [2]: ../index.html
   [3]: ../../src/sqlx/any/mod.rs.html#1-49
   [4]: fn.install_drivers.html (fn sqlx::any::install_drivers)
   [5]: ../struct.AnyConnection.html (struct sqlx::AnyConnection)
   [6]: ../type.AnyPool.html (type sqlx::AnyPool)
   [7]: fn.install_default_drivers.html (fn sqlx::any::install_default_drivers)
   [8]: struct.Any.html (struct sqlx::any::Any)
   [9]: struct.AnyArguments.html (struct sqlx::any::AnyArguments)
   [10]: struct.AnyConnectOptions.html (struct sqlx::any::AnyConnectOptions)
   [11]: struct.AnyQueryResult.html (struct sqlx::any::AnyQueryResult)
   [12]: struct.AnyRow.html (struct sqlx::any::AnyRow)
   [13]: struct.AnyStatement.html (struct sqlx::any::AnyStatement)
   [14]: struct.AnyTransactionManager.html (struct sqlx::any::AnyTransactionManager)
   [15]: struct.AnyTypeInfo.html (struct sqlx::any::AnyTypeInfo)
   [16]: struct.AnyValue.html (struct sqlx::any::AnyValue)
   [17]: struct.AnyValueRef.html (struct sqlx::any::AnyValueRef)
   [18]: enum.AnyKind.html (enum sqlx::any::AnyKind)
   [19]: enum.AnyTypeInfoKind.html (enum sqlx::any::AnyTypeInfoKind)
   [20]: trait.AnyExecutor.html (trait sqlx::any::AnyExecutor)
   [21]: ../trait.Executor.html (trait sqlx::Executor)
   [22]: type.AnyPoolOptions.html (type sqlx::any::AnyPoolOptions)

