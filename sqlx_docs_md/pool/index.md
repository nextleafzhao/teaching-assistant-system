## Module pool

## [sqlx][1]0.8.6

## Module pool

### Sections

  * Opening a connection pool
  * Using a connection pool



### Module Items

  * Modules
  * Structs
  * Enums



## [In crate sqlx][2]

[sqlx][2]

# Module pool Copy item path

Expand description

Provides the connection pool for asynchronous SQLx connections.

Opening a database connection for each and every operation to the database can quickly become expensive. Furthermore, sharing a database connection between threads and functions can be difficult to express in Rust.

A connection pool is a standard technique that can manage opening and re-using connections. Normally it also enforces a maximum number of connections as these are an expensive resource on the database server.

SQLx provides a canonical connection pool implementation intended to satisfy the majority of use cases.

See [Pool][3] for details.

Type aliases are provided for each database to make it easier to sprinkle `Pool` through your codebase:

  * [MssqlPool][crate::mssql::MssqlPool] (MSSQL)
  * [MySqlPool][crate::mysql::MySqlPool] (MySQL)
  * [PgPool][crate::postgres::PgPool] (PostgreSQL)
  * [SqlitePool][crate::sqlite::SqlitePool] (SQLite)



## §Opening a connection pool

A new connection pool with a default configuration can be created by supplying `Pool` with the database driver and a connection string.

ⓘ
[code]
    use sqlx::Pool;
    use sqlx::postgres::Postgres;
    
    let pool = Pool::<Postgres>::connect("postgres://").await?;
[/code]

For convenience, database-specific type aliases are provided:

ⓘ
[code]
    use sqlx::mssql::MssqlPool;
    
    let pool = MssqlPool::connect("mssql://").await?;
[/code]

## §Using a connection pool

A connection pool implements [`Executor`][4] and can be used directly when executing a query. Notice that only an immutable reference (`&Pool`) is needed.

ⓘ
[code]
    sqlx::query("DELETE FROM articles").execute(&pool).await?;
[/code]

A connection or transaction may also be manually acquired with [`Pool::acquire`][5] or [`Pool::begin`][6].

## Modules§

[maybe][7]

## Structs§

[CloseEvent][8]
    A future that resolves when the pool is closed.
[Pool][9]
    An asynchronous pool of SQLx database connections.
[PoolConnection][10]
    A connection managed by a [`Pool`][3].
[PoolConnectionMetadata][11]
    Metadata for the connection being processed by a [`PoolOptions`][12] callback.
[PoolOptions][12]
    Configuration options for [`Pool`][3].

## Enums§

[MaybePoolConnection][13]

   [1]: ../../sqlx/index.html
   [2]: ../index.html
   [3]: ../struct.Pool.html (struct sqlx::Pool)
   [4]: ../trait.Executor.html (trait sqlx::Executor)
   [5]: ../struct.Pool.html#method.acquire (method sqlx::Pool::acquire)
   [6]: ../struct.Pool.html#method.begin (method sqlx::Pool::begin)
   [7]: maybe/index.html (mod sqlx::pool::maybe)
   [8]: struct.CloseEvent.html (struct sqlx::pool::CloseEvent)
   [9]: struct.Pool.html (struct sqlx::pool::Pool)
   [10]: struct.PoolConnection.html (struct sqlx::pool::PoolConnection)
   [11]: struct.PoolConnectionMetadata.html (struct sqlx::pool::PoolConnectionMetadata)
   [12]: struct.PoolOptions.html (struct sqlx::pool::PoolOptions)
   [13]: enum.MaybePoolConnection.html (enum sqlx::pool::MaybePoolConnection)

