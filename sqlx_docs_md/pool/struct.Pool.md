## Pool

## [sqlx][1]0.8.6

## Pool

### Sections

  * Note: Drop Behavior
  * Why Use a Pool?
    * 1\. Overhead of Opening a Connection
    * 2\. Connection Limits (MySQL, MSSQL, Postgres)
    * 3\. Resource Reuse



### Methods

  * acquire
  * begin
  * begin_with
  * close
  * close_event
  * connect
  * connect_lazy
  * connect_lazy_with
  * connect_options
  * connect_with
  * is_closed
  * num_idle
  * options
  * set_connect_options
  * size
  * try_acquire
  * try_begin
  * try_begin_with



### Trait Implementations

  * Acquire<'a>
  * Clone
  * Debug
  * Executor<'p>



### Auto Trait Implementations

  * !RefUnwindSafe
  * !UnwindSafe
  * Freeze
  * Send
  * Sync
  * Unpin



### Blanket Implementations

  * Any
  * Borrow<T>
  * BorrowMut<T>
  * CloneToUninit
  * From<T>
  * Instrument
  * Into<U>
  * IntoEither
  * Same
  * ToOwned
  * TryFrom<U>
  * TryInto<U>
  * WithSubscriber



## [In sqlx::pool][2]

[sqlx][3]::[pool][2]

# Struct Pool Copy item path
[code]
    pub struct Pool<DB>(/* private fields */)
    where
        DB: [Database][4];
[/code]

Expand description

An asynchronous pool of SQLx database connections.

Create a pool with [Pool::connect][5] or [Pool::connect_with][6] and then call [Pool::acquire][7] to get a connection from the pool; when the connection is dropped it will return to the pool so it can be reused.

You can also pass `&Pool` directly anywhere an `Executor` is required; this will automatically checkout a connection for you.

See [the module documentation][8] for examples.

The pool has a maximum connection limit that it will not exceed; if `acquire()` is called when at this limit and all connections are checked out, the task will be made to wait until a connection becomes available.

You can configure the connection limit, and other parameters, using [PoolOptions][9].

Calls to `acquire()` are fair, i.e. fulfilled on a first-come, first-serve basis.

`Pool` is `Send`, `Sync` and `Clone`. It is intended to be created once at the start of your application/daemon/web server/etc. and then shared with all tasks throughout the process’ lifetime. How best to accomplish this depends on your program architecture.

In Actix-Web, for example, you can efficiently share a single pool with all request handlers using [web::ThinData][10].

Cloning `Pool` is cheap as it is simply a reference-counted handle to the inner pool state. When the last remaining handle to the pool is dropped, the connections owned by the pool are immediately closed (also by dropping). `PoolConnection` returned by [Pool::acquire][7] and `Transaction` returned by [Pool::begin][11] both implicitly hold a reference to the pool for their lifetimes.

If you prefer to explicitly shutdown the pool and gracefully close its connections (which depending on the database type, may include sending a message to the database server that the connection is being closed), you can call [Pool::close][12] which causes all waiting and subsequent calls to [Pool::acquire][7] to return [Error::PoolClosed][13], and waits until all connections have been returned to the pool and gracefully closed.

Type aliases are provided for each database to make it easier to sprinkle `Pool` through your codebase:

  * [MssqlPool][crate::mssql::MssqlPool] (MSSQL)
  * [MySqlPool][crate::mysql::MySqlPool] (MySQL)
  * [PgPool][crate::postgres::PgPool] (PostgreSQL)
  * [SqlitePool][crate::sqlite::SqlitePool] (SQLite)



#### §Note: Drop Behavior

Due to a lack of async `Drop`, dropping the last `Pool` handle may not immediately clean up connections by itself. The connections will be dropped locally, which is sufficient for SQLite, but for client/server databases like MySQL and Postgres, that only closes the client side of the connection. The server will not know the connection is closed until potentially much later: this is usually dictated by the TCP keepalive timeout in the server settings.

Because the connection may not be cleaned up immediately on the server side, you may run into errors regarding connection limits if you are creating and dropping many pools in short order.

We recommend calling [`.close().await`][12] to gracefully close the pool and its connections when you are done using it. This will also wake any tasks that are waiting on an `.acquire()` call, so for long-lived applications it’s a good idea to call `.close()` during shutdown.

If you’re writing tests, consider using `#[sqlx::test]` which handles the lifetime of the pool for you.

#### §Why Use a Pool?

A single database connection (in general) cannot be used by multiple threads simultaneously for various reasons, but an application or web server will typically need to execute numerous queries or commands concurrently (think of concurrent requests against a web server; many or all of them will probably need to hit the database).

You could place the connection in a `Mutex` but this will make it a huge bottleneck.

Naively, you might also think to just open a new connection per request, but this has a number of other caveats, generally due to the high overhead involved in working with a fresh connection. Examples to follow.

Connection pools facilitate reuse of connections to _amortize_ these costs, helping to ensure that you’re not paying for them each time you need a connection.

###### §1\. Overhead of Opening a Connection

Opening a database connection is not exactly a cheap operation.

For SQLite, it means numerous requests to the filesystem and memory allocations, while for server-based databases it involves performing DNS resolution, opening a new TCP connection and allocating buffers.

Each connection involves a nontrivial allocation of resources for the database server, usually including spawning a new thread or process specifically to handle the connection, both for concurrency and isolation of faults.

Additionally, database connections typically involve a complex handshake including authentication, negotiation regarding connection parameters (default character sets, timezones, locales, supported features) and upgrades to encrypted tunnels.

If `acquire()` is called on a pool with all connections checked out but it is not yet at its connection limit (see next section), then a new connection is immediately opened, so this pool does not _automatically_ save you from the overhead of creating a new connection.

However, because this pool by design enforces _reuse_ of connections, this overhead cost is not paid each and every time you need a connection. In fact, if you set [the `min_connections` option in PoolOptions][14], the pool will create that many connections up-front so that they are ready to go when a request comes in, and maintain that number on a best-effort basis for consistent performance.

###### §2\. Connection Limits (MySQL, MSSQL, Postgres)

Database servers usually place hard limits on the number of connections that are allowed open at any given time, to maintain performance targets and prevent excessive allocation of resources, such as RAM, journal files, disk caches, etc.

These limits have different defaults per database flavor, and may vary between different distributions of the same database, but are typically configurable on server start; if you’re paying for managed database hosting then the connection limit will typically vary with your pricing tier.

In MySQL, the default limit is typically 150, plus 1 which is reserved for a user with the `CONNECTION_ADMIN` privilege so you can still access the server to diagnose problems even with all connections being used.

In MSSQL the only documentation for the default maximum limit is that it depends on the version and server configuration.

In Postgres, the default limit is typically 100, minus 3 which are reserved for superusers (putting the default limit for unprivileged users at 97 connections).

In any case, exceeding these limits results in an error when opening a new connection, which in a web server context will turn into a `500 Internal Server Error` if not handled, but should be turned into either `403 Forbidden` or `429 Too Many Requests` depending on your rate-limiting scheme. However, in a web context, telling a client “go away, maybe try again later” results in a sub-optimal user experience.

Instead, with a connection pool, clients are made to wait in a fair queue for a connection to become available; by using a single connection pool for your whole application, you can ensure that you don’t exceed the connection limit of your database server while allowing response time to degrade gracefully at high load.

Of course, if multiple applications are connecting to the same database server, then you should ensure that the connection limits for all applications add up to your server’s maximum connections or less.

###### §3\. Resource Reuse

The first time you execute a query against your database, the database engine must first turn the SQL into an actionable _query plan_ which it may then execute against the database. This involves parsing the SQL query, validating and analyzing it, and in the case of Postgres 12+ and SQLite, generating code to execute the query plan (native or bytecode, respectively).

These database servers provide a way to amortize this overhead by _preparing_ the query, associating it with an object ID and placing its query plan in a cache to be referenced when it is later executed.

Prepared statements have other features, like bind parameters, which make them safer and more ergonomic to use as well. By design, SQLx pushes you towards using prepared queries/statements via the [Query][15] API _et al._ and the `query!()` macro _et al._ , for reasons of safety, ergonomics, and efficiency.

However, because database connections are typically isolated from each other in the database server (either by threads or separate processes entirely), they don’t typically share prepared statements between connections so this work must be redone _for each connection_.

As with section 1, by facilitating reuse of connections, `Pool` helps to ensure their prepared statements (and thus cached query plans) can be reused as much as possible, thus amortizing the overhead involved.

Depending on the database server, a connection will have caches for all kinds of other data as well and queries will generally benefit from these caches being “warm” (populated with data).

## Implementations§

§

### impl<DB> [Pool][16]<DB>

where DB: [Database][4],

#### pub async fn connect(url: &[str][17]) -> [Result][18]<[Pool][16]<DB>, [Error][19]>

Create a new connection pool with a default pool configuration and the given connection URL, and immediately establish one connection.

Refer to the relevant `ConnectOptions` impl for your database for the expected URL format:

  * Postgres: [`PgConnectOptions`][crate::postgres::PgConnectOptions]
  * MySQL: [`MySqlConnectOptions`][crate::mysql::MySqlConnectOptions]
  * SQLite: [`SqliteConnectOptions`][crate::sqlite::SqliteConnectOptions]
  * MSSQL: [`MssqlConnectOptions`][crate::mssql::MssqlConnectOptions]



The default configuration is mainly suited for testing and light-duty applications. For production applications, you’ll likely want to make at least few tweaks.

See [`PoolOptions::new()`][20] for details.

#### pub async fn connect_with( options: <<DB as [Database][4]>::[Connection][21] as [Connection][22]>::[Options][23], ) -> [Result][18]<[Pool][16]<DB>, [Error][19]>

Create a new connection pool with a default pool configuration and the given `ConnectOptions`, and immediately establish one connection.

The default configuration is mainly suited for testing and light-duty applications. For production applications, you’ll likely want to make at least few tweaks.

See [`PoolOptions::new()`][20] for details.

#### pub fn connect_lazy(url: &[str][17]) -> [Result][18]<[Pool][16]<DB>, [Error][19]>

Create a new connection pool with a default pool configuration and the given connection URL.

The pool will establish connections only as needed.

Refer to the relevant [`ConnectOptions`][24] impl for your database for the expected URL format:

  * Postgres: [`PgConnectOptions`][crate::postgres::PgConnectOptions]
  * MySQL: [`MySqlConnectOptions`][crate::mysql::MySqlConnectOptions]
  * SQLite: [`SqliteConnectOptions`][crate::sqlite::SqliteConnectOptions]
  * MSSQL: [`MssqlConnectOptions`][crate::mssql::MssqlConnectOptions]



The default configuration is mainly suited for testing and light-duty applications. For production applications, you’ll likely want to make at least few tweaks.

See [`PoolOptions::new()`][20] for details.

#### pub fn connect_lazy_with( options: <<DB as [Database][4]>::[Connection][21] as [Connection][22]>::[Options][23], ) -> [Pool][16]<DB>

Create a new connection pool with a default pool configuration and the given `ConnectOptions`.

The pool will establish connections only as needed.

The default configuration is mainly suited for testing and light-duty applications. For production applications, you’ll likely want to make at least few tweaks.

See [`PoolOptions::new()`][20] for details.

#### pub fn acquire( &self, ) -> impl [Future][25]<Output = [Result][18]<[PoolConnection][26]<DB>, [Error][19]>> \+ 'static

Retrieves a connection from the pool.

The total time this method is allowed to execute is capped by [`PoolOptions::acquire_timeout`][27]. If that timeout elapses, this will return [`Error::PoolClosed`][13].

###### §Note: Cancellation/Timeout May Drop Connections

If `acquire` is cancelled or times out after it acquires a connection from the idle queue or opens a new one, it will drop that connection because we don’t want to assume it is safe to return to the pool, and testing it to see if it’s safe to release could introduce subtle bugs if not implemented correctly. To avoid that entirely, we’ve decided to not gracefully handle cancellation here.

However, if your workload is sensitive to dropped connections such as using an in-memory SQLite database with a pool size of 1, you can pretty easily ensure that a cancelled `acquire()` call will never drop connections by tweaking your [`PoolOptions`][9]:

  * Set [`test_before_acquire(false)`][28]
  * Never set [`before_acquire`][29] or [`after_connect`][30].



This should eliminate any potential `.await` points between acquiring a connection and returning it.

#### pub fn try_acquire(&self) -> [Option][31]<[PoolConnection][26]<DB>>

Attempts to retrieve a connection from the pool if there is one available.

Returns `None` immediately if there are no idle connections available in the pool or there are tasks waiting for a connection which have yet to wake.

#### pub async fn begin(&self) -> [Result][18]<[Transaction][32]<'static, DB>, [Error][19]>

Retrieves a connection and immediately begins a new transaction.

#### pub async fn try_begin(&self) -> [Result][18]<[Option][31]<[Transaction][32]<'static, DB>>, [Error][19]>

Attempts to retrieve a connection and immediately begins a new transaction if successful.

#### pub async fn begin_with( &self, statement: impl [Into][33]<[Cow][34]<'static, [str][17]>>, ) -> [Result][18]<[Transaction][32]<'static, DB>, [Error][19]>

Retrieves a connection and immediately begins a new transaction using `statement`.

#### pub async fn try_begin_with( &self, statement: impl [Into][33]<[Cow][34]<'static, [str][17]>>, ) -> [Result][18]<[Option][31]<[Transaction][32]<'static, DB>>, [Error][19]>

Attempts to retrieve a connection and, if successful, immediately begins a new transaction using `statement`.

#### pub fn close(&self) -> impl [Future][25]<Output = [()][35]>

Shut down the connection pool, immediately waking all tasks waiting for a connection.

Upon calling this method, any currently waiting or subsequent calls to [`Pool::acquire`][7] and the like will immediately return [`Error::PoolClosed`][13] and no new connections will be opened. Checked-out connections are unaffected, but will be gracefully closed on-drop rather than being returned to the pool.

Returns a `Future` which can be `.await`ed to ensure all connections are gracefully closed. It will first close any idle connections currently waiting in the pool, then wait for all checked-out connections to be returned or closed.

Waiting for connections to be gracefully closed is optional, but will allow the database server to clean up the resources sooner rather than later. This is especially important for tests that create a new pool every time, otherwise you may see errors about connection limits being exhausted even when running tests in a single thread.

If the returned `Future` is not run to completion, any remaining connections will be dropped when the last handle for the given pool instance is dropped, which could happen in a task spawned by `Pool` internally and so may be unpredictable otherwise.

`.close()` may be safely called and `.await`ed on multiple handles concurrently.

#### pub fn is_closed(&self) -> [bool][36]

Returns `true` if [`.close()`][12] has been called on the pool, `false` otherwise.

#### pub fn close_event(&self) -> [CloseEvent][37] ⓘ

Get a future that resolves when [`Pool::close()`][12] is called.

If the pool is already closed, the future resolves immediately.

This can be used to cancel long-running operations that hold onto a [`PoolConnection`][26] so they don’t prevent the pool from closing (which would otherwise wait until all connections are returned).

##### §Examples

These examples use Postgres and Tokio, but should suffice to demonstrate the concept.

Do something when the pool is closed:
[code] 
    use sqlx::PgPool;
    
    let pool = PgPool::connect("postgresql://...").await?;
    
    let pool2 = pool.clone();
    
    tokio::spawn(async move {
        // Demonstrates that `CloseEvent` is itself a `Future` you can wait on.
        // This lets you implement any kind of on-close event that you like.
        pool2.close_event().await;
    
        println!("Pool is closing!");
    
        // Imagine maybe recording application statistics or logging a report, etc.
    });
    
    // The rest of the application executes normally...
    
    // Close the pool before the application exits...
    pool.close().await;
    
[/code]

Cancel a long-running operation:
[code] 
    use sqlx::{Executor, PgPool};
    
    let pool = PgPool::connect("postgresql://...").await?;
    
    let pool2 = pool.clone();
    
    tokio::spawn(async move {
        // `do_until` yields the inner future's output wrapped in `sqlx::Result`,
        // in this case giving a double-wrapped result.
        let res: sqlx::Result<sqlx::Result<()>> = pool2.close_event().do_until(async {
            // This statement normally won't return for 30 days!
            // (Assuming the connection doesn't time out first, of course.)
            pool2.execute("SELECT pg_sleep('30 days')").await?;
    
            // If the pool is closed before the statement completes, this won't be printed.
            // This is because `.do_until()` cancels the future it's given if the
            // pool is closed first.
            println!("Waited!");
    
            Ok(())
        }).await;
    
        match res {
            Ok(Ok(())) => println!("Wait succeeded"),
            Ok(Err(e)) => println!("Error from inside do_until: {e:?}"),
            Err(e) => println!("Error from do_until: {e:?}"),
        }
    });
    
    // This normally wouldn't return until the above statement completed and the connection
    // was returned to the pool. However, thanks to `.do_until()`, the operation was
    // cancelled as soon as we called `.close().await`.
    pool.close().await;
    
[/code]

#### pub fn size(&self) -> [u32][38]

Returns the number of connections currently active. This includes idle connections.

#### pub fn num_idle(&self) -> [usize][39]

Returns the number of connections active and idle (not in use).

#### pub fn connect_options( &self, ) -> [Arc][40]<<<DB as [Database][4]>::[Connection][21] as [Connection][22]>::[Options][23]>

Gets a clone of the connection options for this pool

#### pub fn set_connect_options( &self, connect_options: <<DB as [Database][4]>::[Connection][21] as [Connection][22]>::[Options][23], )

Updates the connection options this pool will use when opening any future connections. Any existing open connection in the pool will be left as-is.

#### pub fn options(&self) -> &[PoolOptions][9]<DB>

Get the options for this pool

## Trait Implementations§

§

### impl<'a, DB> [Acquire][41]<'a> for &[Pool][16]<DB>

where DB: [Database][4],

§

#### type [Database][42] = DB

§

#### type [Connection][43] = [PoolConnection][26]<DB>

§

#### fn [acquire][44]( self, ) -> [Pin][45]<[Box][46]<dyn [Future][25]<Output = [Result][18]<<&[Pool][16]<DB> as [Acquire][41]<'a>>::[Connection][47], [Error][19]>> \+ [Send][48]>>

§

#### fn [begin][49]( self, ) -> [Pin][45]<[Box][46]<dyn [Future][25]<Output = [Result][18]<[Transaction][32]<'a, DB>, [Error][19]>> \+ [Send][48]>>

§

### impl<DB> [Clone][50] for [Pool][16]<DB>

where DB: [Database][4],

Returns a new [Pool][16] tied to the same shared connection pool.

§

#### fn [clone][51](&self) -> [Pool][16]<DB>

Returns a duplicate of the value. [Read more][51]

1.0.0 · [Source][52]§

#### fn [clone_from][53](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][53]

§

### impl<DB> [Debug][54] for [Pool][16]<DB>

where DB: [Database][4],

§

#### fn [fmt][55](&self, fmt: &mut [Formatter][56]<'_>) -> [Result][18]<[()][35], [Error][57]>

Formats the value using the given formatter. [Read more][55]

§

### impl<'p, DB> [Executor][58]<'p> for &[Pool][16]<DB>

where DB: [Database][4], &'c mut <DB as [Database][4]>::[Connection][21]: for<'c> [Executor][58]<'c, Database = DB>,

§

#### type [Database][59] = DB

§

#### fn [fetch_many][60]<'e, 'q, E>( self, query: E, ) -> [Pin][45]<[Box][46]<dyn Stream<Item = [Result][18]<[Either][61]<<DB as [Database][4]>::[QueryResult][62], <DB as [Database][4]>::[Row][63]>, [Error][19]>> \+ [Send][48] \+ 'e>>

where 'q: 'e, E: 'q + [Execute][64]<'q, <&[Pool][16]<DB> as [Executor][58]<'p>>::[Database][65]>,

Execute multiple queries and return the generated results as a stream from each query, in a stream.

§

#### fn [fetch_optional][66]<'e, 'q, E>( self, query: E, ) -> [Pin][45]<[Box][46]<dyn [Future][25]<Output = [Result][18]<[Option][31]<<DB as [Database][4]>::[Row][63]>, [Error][19]>> \+ [Send][48] \+ 'e>>

where 'q: 'e, E: 'q + [Execute][64]<'q, <&[Pool][16]<DB> as [Executor][58]<'p>>::[Database][65]>,

Execute the query and returns at most one row.

§

#### fn [prepare_with][67]<'e, 'q>( self, sql: &'q [str][17], parameters: &'e [<<&[Pool][16]<DB> as [Executor][58]<'p>>::[Database][65] as [Database][4]>::[TypeInfo][68]], ) -> [Pin][45]<[Box][46]<dyn [Future][25]<Output = [Result][18]<<<&[Pool][16]<DB> as [Executor][58]<'p>>::[Database][65] as [Database][4]>::[Statement][69]<'q>, [Error][19]>> \+ [Send][48] \+ 'e>>

where 'q: 'e,

Prepare the SQL query, with parameter type information, to inspect the type information about its parameters and results. [Read more][67]

§

#### fn [execute][70]<'e, 'q, E>( self, query: E, ) -> [Pin][45]<[Box][46]<dyn [Future][25]<Output = [Result][18]<<Self::[Database][65] as [Database][4]>::[QueryResult][62], [Error][19]>> \+ [Send][48] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][64]<'q, Self::[Database][65]>,

Execute the query and return the total number of rows affected.

§

#### fn [execute_many][71]<'e, 'q, E>( self, query: E, ) -> [Pin][45]<[Box][46]<dyn Stream<Item = [Result][18]<<Self::[Database][65] as [Database][4]>::[QueryResult][62], [Error][19]>> \+ [Send][48] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][64]<'q, Self::[Database][65]>,

Execute multiple queries and return the rows affected from each query, in a stream.

§

#### fn [fetch][72]<'e, 'q, E>( self, query: E, ) -> [Pin][45]<[Box][46]<dyn Stream<Item = [Result][18]<<Self::[Database][65] as [Database][4]>::[Row][63], [Error][19]>> \+ [Send][48] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][64]<'q, Self::[Database][65]>,

Execute the query and return the generated results as a stream.

§

#### fn [fetch_all][73]<'e, 'q, E>( self, query: E, ) -> [Pin][45]<[Box][46]<dyn [Future][25]<Output = [Result][18]<[Vec][74]<<Self::[Database][65] as [Database][4]>::[Row][63]>, [Error][19]>> \+ [Send][48] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][64]<'q, Self::[Database][65]>,

Execute the query and return all the generated results, collected into a [`Vec`][74].

§

#### fn [fetch_one][75]<'e, 'q, E>( self, query: E, ) -> [Pin][45]<[Box][46]<dyn [Future][25]<Output = [Result][18]<<Self::[Database][65] as [Database][4]>::[Row][63], [Error][19]>> \+ [Send][48] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][64]<'q, Self::[Database][65]>,

Execute the query and returns exactly one row.

§

#### fn [prepare][76]<'e, 'q>( self, query: &'q [str][17], ) -> [Pin][45]<[Box][46]<dyn [Future][25]<Output = [Result][18]<<Self::[Database][65] as [Database][4]>::[Statement][69]<'q>, [Error][19]>> \+ [Send][48] \+ 'e>>

where 'q: 'e, 'c: 'e,

Prepare the SQL query to inspect the type information of its parameters and results. [Read more][76]

## Auto Trait Implementations§

§

### impl<DB> [Freeze][77] for [Pool][16]<DB>

§

### impl<DB> ![RefUnwindSafe][78] for [Pool][16]<DB>

§

### impl<DB> [Send][48] for [Pool][16]<DB>

§

### impl<DB> [Sync][79] for [Pool][16]<DB>

§

### impl<DB> [Unpin][80] for [Pool][16]<DB>

§

### impl<DB> ![UnwindSafe][81] for [Pool][16]<DB>

## Blanket Implementations§

[Source][82]§

### impl<T> [Any][83] for T

where T: 'static + ?[Sized][84],

[Source][85]§

#### fn [type_id][86](&self) -> [TypeId][87]

Gets the `TypeId` of `self`. [Read more][86]

[Source][88]§

### impl<T> [Borrow][89]<T> for T

where T: ?[Sized][84],

[Source][90]§

#### fn [borrow][91](&self) -> [&T][92]

Immutably borrows from an owned value. [Read more][91]

[Source][93]§

### impl<T> [BorrowMut][94]<T> for T

where T: ?[Sized][84],

[Source][95]§

#### fn [borrow_mut][96](&mut self) -> [&mut T][92]

Mutably borrows from an owned value. [Read more][96]

[Source][97]§

### impl<T> [CloneToUninit][98] for T

where T: [Clone][50],

[Source][99]§

#### unsafe fn [clone_to_uninit][100](&self, dest: [*mut ][101][u8][102])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][100]

[Source][103]§

### impl<T> [From][104]<T> for T

[Source][105]§

#### fn [from][106](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][107] [`Span`][108], returning an `Instrumented` wrapper. Read more

[Source][109]§

### impl<T, U> [Into][33]<U> for T

where U: [From][104]<T>,

[Source][110]§

#### fn [into][111](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][104]<T> for U` chooses to do.

[Source][112]§

### impl<T> [IntoEither][113] for T

[Source][114]§

#### fn [into_either][115](self, into_left: [bool][36]) -> [Either][61]<Self, Self> ⓘ

Converts `self` into a [`Left`][116] variant of [`Either<Self, Self>`][61] if `into_left` is `true`. Converts `self` into a [`Right`][117] variant of [`Either<Self, Self>`][61] otherwise. [Read more][115]

[Source][118]§

#### fn [into_either_with][119]<F>(self, into_left: F) -> [Either][61]<Self, Self> ⓘ

where F: [FnOnce][120](&Self) -> [bool][36],

Converts `self` into a [`Left`][116] variant of [`Either<Self, Self>`][61] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][117] variant of [`Either<Self, Self>`][61] otherwise. [Read more][119]

[Source][121]§

### impl<T> [Same][122] for T

[Source][123]§

#### type [Output][124] = T

Should always be `Self`

[Source][125]§

### impl<T> [ToOwned][126] for T

where T: [Clone][50],

[Source][127]§

#### type [Owned][128] = T

The resulting type after obtaining ownership.

[Source][129]§

#### fn [to_owned][130](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][130]

[Source][131]§

#### fn [clone_into][132](&self, target: [&mut T][92])

Uses borrowed data to replace owned data, usually by cloning. [Read more][132]

[Source][133]§

### impl<T, U> [TryFrom][134]<U> for T

where U: [Into][33]<T>,

[Source][135]§

#### type [Error][136] = [Infallible][137]

The type returned in the event of a conversion error.

[Source][138]§

#### fn [try_from][139](value: U) -> [Result][18]<T, <T as [TryFrom][134]<U>>::[Error][140]>

Performs the conversion.

[Source][141]§

### impl<T, U> [TryInto][142]<U> for T

where U: [TryFrom][134]<T>,

[Source][143]§

#### type [Error][144] = <U as [TryFrom][134]<T>>::[Error][140]

The type returned in the event of a conversion error.

[Source][145]§

#### fn [try_into][146](self) -> [Result][18]<U, <U as [TryFrom][134]<T>>::[Error][140]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][33]<Dispatch>,

Attaches the provided [`Subscriber`][147] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][148] [`Subscriber`][147] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../trait.Database.html (trait sqlx::Database)
   [5]: ../struct.Pool.html#method.connect (associated function sqlx::Pool::connect)
   [6]: ../struct.Pool.html#method.connect_with (associated function sqlx::Pool::connect_with)
   [7]: ../struct.Pool.html#method.acquire (method sqlx::Pool::acquire)
   [8]: index.html (mod sqlx::pool)
   [9]: struct.PoolOptions.html (struct sqlx::pool::PoolOptions)
   [10]: https://docs.rs/actix-web/4.9.0/actix_web/web/struct.ThinData.html
   [11]: ../struct.Pool.html#method.begin (method sqlx::Pool::begin)
   [12]: ../struct.Pool.html#method.close (method sqlx::Pool::close)
   [13]: ../enum.Error.html#variant.PoolClosed (variant sqlx::Error::PoolClosed)
   [14]: struct.PoolOptions.html#method.min_connections (method sqlx::pool::PoolOptions::min_connections)
   [15]: ../query/struct.Query.html (struct sqlx::query::Query)
   [16]: ../struct.Pool.html (struct sqlx::Pool)
   [17]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [18]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [19]: ../enum.Error.html (enum sqlx::Error)
   [20]: struct.PoolOptions.html#method.new (associated function sqlx::pool::PoolOptions::new)
   [21]: ../trait.Database.html#associatedtype.Connection (type sqlx::Database::Connection)
   [22]: ../trait.Connection.html (trait sqlx::Connection)
   [23]: ../trait.Connection.html#associatedtype.Options (type sqlx::Connection::Options)
   [24]: ../trait.ConnectOptions.html (trait sqlx::ConnectOptions)
   [25]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [26]: struct.PoolConnection.html (struct sqlx::pool::PoolConnection)
   [27]: struct.PoolOptions.html#method.acquire_timeout (method sqlx::pool::PoolOptions::acquire_timeout)
   [28]: struct.PoolOptions.html#method.test_before_acquire (method sqlx::pool::PoolOptions::test_before_acquire)
   [29]: struct.PoolOptions.html#method.before_acquire (method sqlx::pool::PoolOptions::before_acquire)
   [30]: struct.PoolOptions.html#method.after_connect (method sqlx::pool::PoolOptions::after_connect)
   [31]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [32]: ../struct.Transaction.html (struct sqlx::Transaction)
   [33]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [34]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [35]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [36]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [37]: struct.CloseEvent.html (struct sqlx::pool::CloseEvent)
   [38]: https://doc.rust-lang.org/1.94.1/std/primitive.u32.html
   [39]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [40]: https://doc.rust-lang.org/1.94.1/alloc/sync/struct.Arc.html (struct alloc::sync::Arc)
   [41]: ../trait.Acquire.html (trait sqlx::Acquire)
   [42]: ../trait.Acquire.html#associatedtype.Database
   [43]: ../trait.Acquire.html#associatedtype.Connection
   [44]: ../trait.Acquire.html#tymethod.acquire
   [45]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [46]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [47]: ../trait.Acquire.html#associatedtype.Connection (type sqlx::Acquire::Connection)
   [48]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [49]: ../trait.Acquire.html#tymethod.begin
   [50]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [51]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [52]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [53]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [54]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [55]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [56]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [57]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [58]: ../trait.Executor.html (trait sqlx::Executor)
   [59]: ../trait.Executor.html#associatedtype.Database
   [60]: ../trait.Executor.html#tymethod.fetch_many
   [61]: ../enum.Either.html (enum sqlx::Either)
   [62]: ../trait.Database.html#associatedtype.QueryResult (type sqlx::Database::QueryResult)
   [63]: ../trait.Database.html#associatedtype.Row (type sqlx::Database::Row)
   [64]: ../trait.Execute.html (trait sqlx::Execute)
   [65]: ../trait.Executor.html#associatedtype.Database (type sqlx::Executor::Database)
   [66]: ../trait.Executor.html#tymethod.fetch_optional
   [67]: ../trait.Executor.html#tymethod.prepare_with
   [68]: ../trait.Database.html#associatedtype.TypeInfo (type sqlx::Database::TypeInfo)
   [69]: ../trait.Database.html#associatedtype.Statement (type sqlx::Database::Statement)
   [70]: ../trait.Executor.html#method.execute
   [71]: ../trait.Executor.html#method.execute_many
   [72]: ../trait.Executor.html#method.fetch
   [73]: ../trait.Executor.html#method.fetch_all
   [74]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [75]: ../trait.Executor.html#method.fetch_one
   [76]: ../trait.Executor.html#method.prepare
   [77]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [78]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [79]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [80]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [81]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [82]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [83]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [84]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [85]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [86]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [87]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [88]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [89]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [90]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [91]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [92]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [93]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [94]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [95]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [96]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [97]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [98]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [99]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [100]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [101]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [102]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [103]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [104]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [105]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [106]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [107]: super::Span::current()
   [108]: crate::Span
   [109]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [110]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [111]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [112]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [113]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [114]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [115]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [116]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [117]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [118]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [119]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [120]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [121]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [122]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [123]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [124]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [125]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [126]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [127]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [128]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [129]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [130]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [131]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [132]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [133]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [134]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [135]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [136]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [137]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [138]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [139]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [140]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [141]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [142]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [143]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [144]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [145]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [146]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [147]: super::Subscriber
   [148]: dispatcher#setting-the-default-subscriber

