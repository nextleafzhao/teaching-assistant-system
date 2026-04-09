## Crate sqlx

## [sqlx][1]0.8.6

  * [All Items][2]



### Sections

  * Runtime Support
  * TLS Support



### Crate Items

  * Modules
  * Macros
  * Structs
  * Enums
  * Traits
  * Functions
  * Type Aliases
  * Attribute Macros
  * Derive Macros



# Crate sqlx Copy item path

[Source][3]

Expand description

The async SQL toolkit for Rust, built with ❤️ by [the LaunchBadge team][4].

See our [README][5] to get started or [browse our example projects][6]. Have a question? [Check our FAQ][7] or [open a discussion][8].

#### §Runtime Support

SQLx supports both the [Tokio][9] and [async-std][10] runtimes.

You choose which runtime SQLx uses by default by enabling one of the following features:

  * `runtime-async-std`
  * `runtime-tokio`



The `runtime-actix` feature also exists but is an alias of `runtime-tokio`.

If more than one runtime feature is enabled, the Tokio runtime is used if a Tokio context exists on the current thread, i.e. [`tokio::runtime::Handle::try_current()`][11] returns `Ok`; `async-std` is used otherwise.

Note that while SQLx no longer produces a compile error if zero or multiple runtime features are enabled, which is useful for libraries building on top of it, **the use of nearly any async function in the API will panic without at least one runtime feature enabled**.

The chief exception is the SQLite driver, which is runtime-agnostic, including its integration with the query macros. However, [`SqlitePool`][12] _does_ require runtime support for timeouts and spawning internal management tasks.

#### §TLS Support

For securely communicating with SQL servers over an untrusted network connection such as the internet, you can enable Transport Layer Security (TLS) by enabling one of the following features:

  * `tls-native-tls`: Enables the [`native-tls`][13] backend which uses the OS-native TLS capabilities: 
    * SecureTransport on macOS.
    * SChannel on Windows.
    * OpenSSL on all other platforms.
  * `tls-rustls`: Enables the [rustls][14] backend, a cross-platform TLS library. 
    * Only supports TLS revisions 1.2 and 1.3.
    * If you get `HandshakeFailure` errors when using this feature, it likely means your database server does not support these newer revisions. This might be resolved by enabling or switching to the `tls-native-tls` feature.
    * rustls supports several providers of cryptographic primitives. The default (enabled when you use the `tls-rustls` feature or `tls-rustls-ring`) is the `ring` provider, which has fewer build-time dependencies but also has fewer features. Alternatively, you can use `tls-rustls-aws-lc-rs` to use the `aws-lc-rs` provider, which enables additional cipher suite support at the cost of more onerous build requirements (depending on platform support).



If more than one TLS feature is enabled, the `tls-native-tls` feature takes precedent so that it is only necessary to enable it to see if it resolves the `HandshakeFailure` error without disabling `tls-rustls`.

Consult the user manual for your database to find the TLS versions it supports.

If your connection configuration requires a TLS upgrade but TLS support was not enabled, the connection attempt will return an error.

The legacy runtime+TLS combination feature flags are still supported, but for forward-compatibility, use of the separate runtime and TLS feature flags is recommended.

## Modules§

[any][15]
    **SEE DOCUMENTATION BEFORE USE**. Runtime-generic database driver.
[database][16]
    Traits to represent a database driver.
[decode][17]
    Provides [`Decode`][18] for decoding values from the database.
[encode][19]
    Provides [`Encode`][20] for encoding values for the database.
[error][21]
    Types for working with errors produced by SQLx.
[migrate][22]
[pool][23]
    Provides the connection pool for asynchronous SQLx connections.
[prelude][24]
    Convenience re-export of common traits.
[query][25]
    Types and traits for the `query` family of functions and macros.
[query_builder][26]
    Runtime query-builder API.
[sqlite][27]
    **SQLite** database driver.
[types][28]
    Conversions between Rust and SQL types.

## Macros§

[migrate][29]
    Embeds migrations into the binary by expanding to a static instance of [Migrator][30].
[query][31]
    Statically checked SQL query with `println!()` style syntax.
[query_as][32]
    A variant of [`query!`][31] which takes a path to an explicitly defined struct as the output type.
[query_as_unchecked][33]
    A variant of [`query_as!`][32] which does not check the input or output types. This still does parse the query to ensure it’s syntactically and semantically valid for the current database.
[query_file][34]
    A variant of [`query!`][31] where the SQL query is stored in a separate file.
[query_file_as][35]
    Combines the syntaxes of [`query_as!`][32] and [`query_file!`][34].
[query_file_as_unchecked][36]
    A variant of [`query_file_as!`][35] which does not check the input or output types. This still does parse the query to ensure it’s syntactically and semantically valid for the current database.
[query_file_scalar][37]
    A variant of [`query_scalar!`][38] which takes a file path like [`query_file!`][34].
[query_file_scalar_unchecked][39]
    A variant of [`query_file_scalar!`][37] which does not typecheck bind parameters and leaves the output type to inference. The query itself is still checked that it is syntactically and semantically valid for the database, that it only produces one column and that the number of bind parameters is correct.
[query_file_unchecked][40]
    A variant of [`query_file!`][34] which does not check the input or output types. This still does parse the query to ensure it’s syntactically and semantically valid for the current database.
[query_scalar][38]
    A variant of [`query!`][31] which expects a single column from the query and evaluates to an instance of [QueryScalar][41].
[query_scalar_unchecked][42]
    A variant of [`query_scalar!`][38] which does not typecheck bind parameters and leaves the output type to inference. The query itself is still checked that it is syntactically and semantically valid for the database, that it only produces one column and that the number of bind parameters is correct.
[query_unchecked][43]
    A variant of [`query!`][31] which does not check the input or output types. This still does parse the query to ensure it’s syntactically and semantically valid for the current database.

## Structs§

[Any][44]
    Opaque database driver. Capable of being used in place of any SQLx database driver. The actual driver used will be selected at runtime, from the connection url.
[AnyConnection][45]
    **SEE DOCUMENTATION BEFORE USE**. Runtime-generic database connection.
[Pool][46]
    An asynchronous pool of SQLx database connections.
[QueryBuilder][47]
    A builder type for constructing queries at runtime.
[RawSql][48]
    One or more raw SQL statements, separated by semicolons (`;`).
[Sqlite][49]
    Sqlite database driver.
[SqliteConnection][50]
    A connection to an open [Sqlite][49] database.
[Transaction][51]
    An in-progress database transaction or savepoint.

## Enums§

[Either][52]
    The enum `Either` with variants `Left` and `Right` is a general purpose sum type with two cases.
[Error][53]
    Represents all the ways a method can fail within SQLx.

## Traits§

[Acquire][54]
    Acquire connections or transactions from a database in a generic way.
[AnyExecutor][55]
    An alias for [`Executor<'_, Database = Any>`][56].
[Arguments][57]
    A tuple of arguments to be sent to the database.
[Column][58]
[ColumnIndex][59]
    A type that can be used to index into a [`Row`][60] or [`Statement`][61].
[ConnectOptions][62]
[Connection][63]
    Represents a single database connection.
[Database][64]
    A database driver.
[Decode][18]
    A type that can be decoded from the database.
[Encode][20]
    Encode a single value to be sent to the database.
[Execute][65]
    A type that may be executed against a database connection.
[Executor][56]
    A type that contains or can provide a database connection to use for executing queries against the database.
[FromRow][66]
    A record that can be built from a row returned by the database.
[IntoArguments][67]
[Row][60]
    Represents a single row from the database.
[SqliteExecutor][68]
    An alias for [`Executor<'_, Database = Sqlite>`][56].
[Statement][61]
    An explicitly prepared statement.
[Type][69]
    Indicates that a SQL type is supported for a database.
[TypeInfo][70]
    Provides information about a SQL type for the database driver.
[Value][71]
    An owned value from the database.
[ValueRef][72]
    A reference to a single value from the database.

## Functions§

[query][73]
    Execute a single SQL query as a prepared statement (transparently cached).
[query_as][74]
    Execute a single SQL query as a prepared statement (transparently cached). Maps rows to Rust types using [`FromRow`][66].
[query_as_with][75]
    Execute a single SQL query, with the given arguments as a prepared statement (transparently cached). Maps rows to Rust types using [`FromRow`][66].
[query_scalar][76]
    Execute a single SQL query as a prepared statement (transparently cached) and extract the first column of each row.
[query_scalar_with][77]
    Execute a SQL query as a prepared statement (transparently cached), with the given arguments, and extract the first column of each row.
[query_with][78]
    Execute a SQL query as a prepared statement (transparently cached), with the given arguments.
[raw_sql][79]
    Execute one or more statements as raw SQL, separated by semicolons (`;`).

## Type Aliases§

[AnyPool][80]
    **SEE DOCUMENTATION BEFORE USE**. Type alias for `Pool<Any>`.
[Result][81]
    A specialized `Result` type for SQLx.
[SqlitePool][12]
    An alias for [`Pool`][46], specialized for SQLite.
[SqliteTransaction][82]
    An alias for [`Transaction`][51], specialized for SQLite.

## Attribute Macros§

[test][83]
    Mark an `async fn` as a test with SQLx support.

## Derive Macros§

[Decode][84]
[Encode][85]

   [1]: ../sqlx/index.html
   [2]: all.html
   [3]: ../src/sqlx/lib.rs.html#1-174
   [4]: https://www.launchbadge.com
   [5]: https://www.github.com/launchbadge/sqlx/tree/main/README.md
   [6]: https://www.github.com/launchbadge/sqlx/tree/main/examples
   [7]: https://www.github.com/launchbadge/sqlx/tree/main/FAQ.md
   [8]: https://github.com/launchbadge/sqlx/discussions/new?category=q-a
   [9]: https://www.tokio.rs
   [10]: https://www.async.rs
   [11]: https://docs.rs/tokio/latest/tokio/runtime/struct.Handle.html#method.try_current
   [12]: type.SqlitePool.html (type sqlx::SqlitePool)
   [13]: https://docs.rs/native-tls/latest/native_tls/
   [14]: https://docs.rs/rustls/latest/rustls/
   [15]: any/index.html (mod sqlx::any)
   [16]: database/index.html (mod sqlx::database)
   [17]: decode/index.html (mod sqlx::decode)
   [18]: trait.Decode.html (trait sqlx::Decode)
   [19]: encode/index.html (mod sqlx::encode)
   [20]: trait.Encode.html (trait sqlx::Encode)
   [21]: error/index.html (mod sqlx::error)
   [22]: migrate/index.html (mod sqlx::migrate)
   [23]: pool/index.html (mod sqlx::pool)
   [24]: prelude/index.html (mod sqlx::prelude)
   [25]: query/index.html (mod sqlx::query)
   [26]: query_builder/index.html (mod sqlx::query_builder)
   [27]: sqlite/index.html (mod sqlx::sqlite)
   [28]: types/index.html (mod sqlx::types)
   [29]: macro.migrate.html (macro sqlx::migrate)
   [30]: migrate/struct.Migrator.html (struct sqlx::migrate::Migrator)
   [31]: macro.query.html (macro sqlx::query)
   [32]: macro.query_as.html (macro sqlx::query_as)
   [33]: macro.query_as_unchecked.html (macro sqlx::query_as_unchecked)
   [34]: macro.query_file.html (macro sqlx::query_file)
   [35]: macro.query_file_as.html (macro sqlx::query_file_as)
   [36]: macro.query_file_as_unchecked.html (macro sqlx::query_file_as_unchecked)
   [37]: macro.query_file_scalar.html (macro sqlx::query_file_scalar)
   [38]: macro.query_scalar.html (macro sqlx::query_scalar)
   [39]: macro.query_file_scalar_unchecked.html (macro sqlx::query_file_scalar_unchecked)
   [40]: macro.query_file_unchecked.html (macro sqlx::query_file_unchecked)
   [41]: query/struct.QueryScalar.html (struct sqlx::query::QueryScalar)
   [42]: macro.query_scalar_unchecked.html (macro sqlx::query_scalar_unchecked)
   [43]: macro.query_unchecked.html (macro sqlx::query_unchecked)
   [44]: struct.Any.html (struct sqlx::Any)
   [45]: struct.AnyConnection.html (struct sqlx::AnyConnection)
   [46]: struct.Pool.html (struct sqlx::Pool)
   [47]: struct.QueryBuilder.html (struct sqlx::QueryBuilder)
   [48]: struct.RawSql.html (struct sqlx::RawSql)
   [49]: struct.Sqlite.html (struct sqlx::Sqlite)
   [50]: struct.SqliteConnection.html (struct sqlx::SqliteConnection)
   [51]: struct.Transaction.html (struct sqlx::Transaction)
   [52]: enum.Either.html (enum sqlx::Either)
   [53]: enum.Error.html (enum sqlx::Error)
   [54]: trait.Acquire.html (trait sqlx::Acquire)
   [55]: trait.AnyExecutor.html (trait sqlx::AnyExecutor)
   [56]: trait.Executor.html (trait sqlx::Executor)
   [57]: trait.Arguments.html (trait sqlx::Arguments)
   [58]: trait.Column.html (trait sqlx::Column)
   [59]: trait.ColumnIndex.html (trait sqlx::ColumnIndex)
   [60]: trait.Row.html (trait sqlx::Row)
   [61]: trait.Statement.html (trait sqlx::Statement)
   [62]: trait.ConnectOptions.html (trait sqlx::ConnectOptions)
   [63]: trait.Connection.html (trait sqlx::Connection)
   [64]: trait.Database.html (trait sqlx::Database)
   [65]: trait.Execute.html (trait sqlx::Execute)
   [66]: trait.FromRow.html (trait sqlx::FromRow)
   [67]: trait.IntoArguments.html (trait sqlx::IntoArguments)
   [68]: trait.SqliteExecutor.html (trait sqlx::SqliteExecutor)
   [69]: trait.Type.html (trait sqlx::Type)
   [70]: trait.TypeInfo.html (trait sqlx::TypeInfo)
   [71]: trait.Value.html (trait sqlx::Value)
   [72]: trait.ValueRef.html (trait sqlx::ValueRef)
   [73]: fn.query.html (fn sqlx::query)
   [74]: fn.query_as.html (fn sqlx::query_as)
   [75]: fn.query_as_with.html (fn sqlx::query_as_with)
   [76]: fn.query_scalar.html (fn sqlx::query_scalar)
   [77]: fn.query_scalar_with.html (fn sqlx::query_scalar_with)
   [78]: fn.query_with.html (fn sqlx::query_with)
   [79]: fn.raw_sql.html (fn sqlx::raw_sql)
   [80]: type.AnyPool.html (type sqlx::AnyPool)
   [81]: type.Result.html (type sqlx::Result)
   [82]: type.SqliteTransaction.html (type sqlx::SqliteTransaction)
   [83]: attr.test.html (attr sqlx::test)
   [84]: derive.Decode.html (derive sqlx::Decode)
   [85]: derive.Encode.html (derive sqlx::Encode)

