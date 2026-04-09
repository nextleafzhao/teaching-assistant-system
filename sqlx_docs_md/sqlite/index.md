## Crate sqlite

## [sqlx][1]0.8.6

  * [All Items][2]



### Sections

  * Note: linkage is semver-exempt.
  * Dynamic linking



### Crate Items

  * Modules
  * Structs
  * Enums
  * Traits
  * Type Aliases



[sqlx][3]

# Crate sqlite Copy item path

Expand description

**SQLite** database driver.

#### §Note: linkage is semver-exempt.

This driver uses the `libsqlite3-sys` crate which links the native library for SQLite 3. With the “sqlite” feature, we enable the `bundled` feature which builds and links SQLite from source.

We reserve the right to upgrade the version of `libsqlite3-sys` as necessary to pick up new `3.x.y` versions of SQLite.

Due to Cargo’s requirement that only one version of a crate that links a given native library exists in the dependency graph at a time, using SQLx alongside another crate linking `libsqlite3-sys` like `rusqlite` is a semver hazard.

If you are doing so, we recommend pinning the version of both SQLx and the other crate you’re using to prevent a `cargo update` from breaking things, e.g.:
[code] 
    sqlx = { version = "=0.8.1", features = ["sqlite"] }
    rusqlite = "=0.32.1"
[/code]

and then upgrade these crates in lockstep when necessary.

#### §Dynamic linking

To dynamically link to a system SQLite library, the “sqlite-unbundled” feature can be used instead.

This allows updating SQLite independently of SQLx or using forked versions, but you must have SQLite installed on the system or provide a path to the library at build time (See [the `rusqlite` README][4] for details).

It may result in link errors if the SQLite version is too old. Version `3.20.0` or newer is recommended. It can increase build time due to the use of bindgen.

## Modules§

[any][5]
[types][6]
    Conversions between Rust and **SQLite** types.

## Structs§

[LockedSqliteHandle][7]
[Sqlite][8]
    Sqlite database driver.
[SqliteArguments][9]
[SqliteColumn][10]
[SqliteConnectOptions][11]
    Options and flags which can be used to configure a SQLite connection.
[SqliteConnection][12]
    A connection to an open [Sqlite][13] database.
[SqliteError][14]
[SqliteOwnedBuf][15]
    Memory buffer owned and allocated by SQLite. Freed on drop.
[SqliteQueryResult][16]
[SqliteRow][17]
    Implementation of [`Row`][18] for SQLite.
[SqliteStatement][19]
[SqliteTransactionManager][20]
    Implementation of [`TransactionManager`] for SQLite.
[SqliteTypeInfo][21]
    Type information for a SQLite type.
[SqliteValue][22]
[SqliteValueRef][23]
[UpdateHookResult][24]

## Enums§

[SqliteArgumentValue][25]
[SqliteAutoVacuum][26]
[SqliteJournalMode][27]
    Refer to [SQLite documentation][28] for the meaning of the database journaling mode.
[SqliteLockingMode][29]
    Refer to [SQLite documentation][30] for the meaning of the connection locking mode.
[SqliteOperation][31]
[SqliteSynchronous][32]
    Refer to [SQLite documentation][33] for the meaning of various synchronous settings.

## Traits§

[SqliteExecutor][34]
    An alias for [`Executor<'_, Database = Sqlite>`][35].

## Type Aliases§

[SqlitePool][36]
    An alias for [`Pool`][37], specialized for SQLite.
[SqlitePoolOptions][38]
    An alias for [`PoolOptions`][39], specialized for SQLite.
[SqliteTransaction][40]
    An alias for [`Transaction`][41], specialized for SQLite.

   [1]: ../../sqlx/index.html
   [2]: all.html
   [3]: ../index.html
   [4]: https://github.com/rusqlite/rusqlite?tab=readme-ov-file#notes-on-building-rusqlite-and-libsqlite3-sys
   [5]: any/index.html (mod sqlx::sqlite::any)
   [6]: types/index.html (mod sqlx::sqlite::types)
   [7]: struct.LockedSqliteHandle.html (struct sqlx::sqlite::LockedSqliteHandle)
   [8]: struct.Sqlite.html (struct sqlx::sqlite::Sqlite)
   [9]: struct.SqliteArguments.html (struct sqlx::sqlite::SqliteArguments)
   [10]: struct.SqliteColumn.html (struct sqlx::sqlite::SqliteColumn)
   [11]: struct.SqliteConnectOptions.html (struct sqlx::sqlite::SqliteConnectOptions)
   [12]: struct.SqliteConnection.html (struct sqlx::sqlite::SqliteConnection)
   [13]: ../struct.Sqlite.html (struct sqlx::Sqlite)
   [14]: struct.SqliteError.html (struct sqlx::sqlite::SqliteError)
   [15]: struct.SqliteOwnedBuf.html (struct sqlx::sqlite::SqliteOwnedBuf)
   [16]: struct.SqliteQueryResult.html (struct sqlx::sqlite::SqliteQueryResult)
   [17]: struct.SqliteRow.html (struct sqlx::sqlite::SqliteRow)
   [18]: ../trait.Row.html (trait sqlx::Row)
   [19]: struct.SqliteStatement.html (struct sqlx::sqlite::SqliteStatement)
   [20]: struct.SqliteTransactionManager.html (struct sqlx::sqlite::SqliteTransactionManager)
   [21]: struct.SqliteTypeInfo.html (struct sqlx::sqlite::SqliteTypeInfo)
   [22]: struct.SqliteValue.html (struct sqlx::sqlite::SqliteValue)
   [23]: struct.SqliteValueRef.html (struct sqlx::sqlite::SqliteValueRef)
   [24]: struct.UpdateHookResult.html (struct sqlx::sqlite::UpdateHookResult)
   [25]: enum.SqliteArgumentValue.html (enum sqlx::sqlite::SqliteArgumentValue)
   [26]: enum.SqliteAutoVacuum.html (enum sqlx::sqlite::SqliteAutoVacuum)
   [27]: enum.SqliteJournalMode.html (enum sqlx::sqlite::SqliteJournalMode)
   [28]: https://www.sqlite.org/pragma.html#pragma_journal_mode
   [29]: enum.SqliteLockingMode.html (enum sqlx::sqlite::SqliteLockingMode)
   [30]: https://www.sqlite.org/pragma.html#pragma_locking_mode
   [31]: enum.SqliteOperation.html (enum sqlx::sqlite::SqliteOperation)
   [32]: enum.SqliteSynchronous.html (enum sqlx::sqlite::SqliteSynchronous)
   [33]: https://www.sqlite.org/pragma.html#pragma_synchronous
   [34]: trait.SqliteExecutor.html (trait sqlx::sqlite::SqliteExecutor)
   [35]: ../trait.Executor.html (trait sqlx::Executor)
   [36]: type.SqlitePool.html (type sqlx::sqlite::SqlitePool)
   [37]: ../struct.Pool.html (struct sqlx::Pool)
   [38]: type.SqlitePoolOptions.html (type sqlx::sqlite::SqlitePoolOptions)
   [39]: ../pool/struct.PoolOptions.html (struct sqlx::pool::PoolOptions)
   [40]: type.SqliteTransaction.html (type sqlx::sqlite::SqliteTransaction)
   [41]: ../struct.Transaction.html (struct sqlx::Transaction)

