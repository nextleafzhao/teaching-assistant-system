## PoolOptions

## [sqlx][1]0.8.6

## PoolOptions

### Sections

  * Callback Functions: Why Do I Need `Box::pin()`?



### Methods

  * acquire_slow_level
  * acquire_slow_threshold
  * acquire_time_level
  * acquire_timeout
  * after_connect
  * after_release
  * before_acquire
  * connect
  * connect_lazy
  * connect_lazy_with
  * connect_with
  * get_acquire_slow_threshold
  * get_acquire_timeout
  * get_idle_timeout
  * get_max_connections
  * get_max_lifetime
  * get_min_connections
  * get_test_before_acquire
  * idle_timeout
  * max_connections
  * max_lifetime
  * min_connections
  * new
  * test_before_acquire



### Trait Implementations

  * Clone
  * Debug
  * Default



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

# Struct PoolOptions Copy item path
[code]
    pub struct PoolOptions<DB>
    
    where
        DB: [Database][4],
    
    { /* private fields */ }
[/code]

Expand description

Configuration options for [`Pool`][5].

#### §Callback Functions: Why Do I Need `Box::pin()`?

Essentially, because it’s impossible to write generic bounds that describe a closure with a higher-ranked lifetime parameter, returning a future with that same lifetime.

Ideally, you could define it like this:

ⓘ
[code]
    async fn takes_foo_callback(f: impl for<'a> Fn(&'a mut Foo) -> impl Future<'a, Output = ()>)
[/code]

However, the compiler does not allow using `impl Trait` in the return type of an `impl Fn`.

And if you try to do it like this:

ⓘ
[code]
    async fn takes_foo_callback<F, Fut>(f: F)
    where
        F: for<'a> Fn(&'a mut Foo) -> Fut,
        Fut: for<'a> Future<Output = ()> + 'a
[/code]

There’s no way to tell the compiler that those two `'a`s should be the same lifetime.

It’s possible to make this work with a custom trait, but it’s fiddly and requires naming the type of the closure parameter.

Having the closure return `BoxFuture` allows us to work around this, as all the type information fits into a single generic parameter.

We still need to `Box` the future internally to give it a concrete type to avoid leaking a type parameter everywhere, and `Box` is in the prelude so it doesn’t need to be manually imported, so having the closure return `Pin<Box<dyn Future>` directly is the path of least resistance from the perspectives of both API designer and consumer.

## Implementations§

§

### impl<DB> [PoolOptions][6]<DB>

where DB: [Database][4],

#### pub fn new() -> [PoolOptions][6]<DB>

Returns a default “sane” configuration, suitable for testing or light-duty applications.

Production applications will likely want to at least modify [`max_connections`][7].

See the source of this method for the current default values.

#### pub fn max_connections(self, max: [u32][8]) -> [PoolOptions][6]<DB>

Set the maximum number of connections that this pool should maintain.

Be mindful of the connection limits for your database as well as other applications which may want to connect to the same database (or even multiple instances of the same application in high-availability deployments).

#### pub fn get_max_connections(&self) -> [u32][8]

Get the maximum number of connections that this pool should maintain

#### pub fn min_connections(self, min: [u32][8]) -> [PoolOptions][6]<DB>

Set the minimum number of connections to maintain at all times.

When the pool is built, this many connections will be automatically spun up.

If any connection is reaped by [`max_lifetime`][9] or [`idle_timeout`][10], or explicitly closed, and it brings the connection count below this amount, a new connection will be opened to replace it.

This is only done on a best-effort basis, however. The routine that maintains this value has a deadline so it doesn’t wait forever if the database is being slow or returning errors.

This value is clamped internally to not exceed [`max_connections`][7].

We’ve chosen not to assert `min_connections <= max_connections` anywhere because it shouldn’t break anything internally if the condition doesn’t hold, and if the application allows either value to be dynamically set then it should be checking this condition itself and returning a nicer error than a panic anyway.

#### pub fn get_min_connections(&self) -> [u32][8]

Get the minimum number of connections to maintain at all times.

#### pub fn acquire_time_level(self, level: [LevelFilter][11]) -> [PoolOptions][6]<DB>

Enable logging of time taken to acquire a connection from the connection pool via [`Pool::acquire()`][12].

If slow acquire logging is also enabled, this level is used for acquires that are not considered slow.

#### pub fn acquire_slow_level(self, level: [LevelFilter][11]) -> [PoolOptions][6]<DB>

Log excessive time taken to acquire a connection at a different log level than time taken for faster connection acquires via [`Pool::acquire()`][12].

#### pub fn acquire_slow_threshold(self, threshold: [Duration][13]) -> [PoolOptions][6]<DB>

Set a threshold for reporting excessive time taken to acquire a connection from the connection pool via [`Pool::acquire()`][12]. When the threshold is exceeded, a warning is logged.

Defaults to a value that should not typically be exceeded by the pool enlarging itself with an additional new connection.

#### pub fn get_acquire_slow_threshold(&self) -> [Duration][13]

Get the threshold for reporting excessive time taken to acquire a connection via [`Pool::acquire()`][12].

#### pub fn acquire_timeout(self, timeout: [Duration][13]) -> [PoolOptions][6]<DB>

Set the maximum amount of time to spend waiting for a connection in [`Pool::acquire()`][12].

Caps the total amount of time `Pool::acquire()` can spend waiting across multiple phases:

  * First, it may need to wait for a permit from the semaphore, which grants it the privilege of opening a connection or popping one from the idle queue.
  * If an existing idle connection is acquired, by default it will be checked for liveness and integrity before being returned, which may require executing a command on the connection. This can be disabled with [`test_before_acquire(false)`][14]. 
    * If [`before_acquire`][15] is set, that will also be executed.
  * If a new connection needs to be opened, that will obviously require I/O, handshaking, and initialization commands. 
    * If [`after_connect`][16] is set, that will also be executed.



#### pub fn get_acquire_timeout(&self) -> [Duration][13]

Get the maximum amount of time to spend waiting for a connection in [`Pool::acquire()`][12].

#### pub fn max_lifetime( self, lifetime: impl [Into][17]<[Option][18]<[Duration][13]>>, ) -> [PoolOptions][6]<DB>

Set the maximum lifetime of individual connections.

Any connection with a lifetime greater than this will be closed.

When set to `None`, all connections live until either reaped by [`idle_timeout`][10] or explicitly disconnected.

Infinite connections are not recommended due to the unfortunate reality of memory/resource leaks on the database-side. It is better to retire connections periodically (even if only once daily) to allow the database the opportunity to clean up data structures (parse trees, query metadata caches, thread-local storage, etc.) that are associated with a session.

#### pub fn get_max_lifetime(&self) -> [Option][18]<[Duration][13]>

Get the maximum lifetime of individual connections.

#### pub fn idle_timeout( self, timeout: impl [Into][17]<[Option][18]<[Duration][13]>>, ) -> [PoolOptions][6]<DB>

Set a maximum idle duration for individual connections.

Any connection that remains in the idle queue longer than this will be closed.

For usage-based database server billing, this can be a cost saver.

#### pub fn get_idle_timeout(&self) -> [Option][18]<[Duration][13]>

Get the maximum idle duration for individual connections.

#### pub fn test_before_acquire(self, test: [bool][19]) -> [PoolOptions][6]<DB>

If true, the health of a connection will be verified by a call to [`Connection::ping`][20] before returning the connection.

Defaults to `true`.

#### pub fn get_test_before_acquire(&self) -> [bool][19]

Get whether `test_before_acquire` is currently set.

#### pub fn after_connect<F>(self, callback: F) -> [PoolOptions][6]<DB>

where F: for<'c> [Fn][21](&'c mut <DB as [Database][4]>::[Connection][22], [PoolConnectionMetadata][23]) -> [Pin][24]<[Box][25]<dyn [Future][26]<Output = [Result][27]<[()][28], [Error][29]>> \+ [Send][30] \+ 'c>> \+ 'static + for<'c> [Send][30] \+ for<'c> [Sync][31],

Perform an asynchronous action after connecting to the database.

If the operation returns with an error then the error is logged, the connection is closed and a new one is opened in its place and the callback is invoked again.

This occurs in a backoff loop to avoid high CPU usage and spamming logs during a transient error condition.

Note that this may be called for internally opened connections, such as when maintaining [`min_connections`][32], that are then immediately returned to the pool without invoking [`after_release`][33].

##### §Example: Additional Parameters

This callback may be used to set additional configuration parameters that are not exposed by the database’s `ConnectOptions`.

This example is written for PostgreSQL but can likely be adapted to other databases.
[code] 
    use sqlx::Executor;
    use sqlx::postgres::PgPoolOptions;
    
    let pool = PgPoolOptions::new()
        .after_connect(|conn, _meta| Box::pin(async move {
            // When directly invoking `Executor` methods,
            // it is possible to execute multiple statements with one call.
            conn.execute("SET application_name = 'your_app'; SET search_path = 'my_schema';")
                .await?;
    
            Ok(())
        }))
        .connect("postgres:// …").await?;
[/code]

For a discussion on why `Box::pin()` is required, see [the type-level docs][6].

#### pub fn before_acquire<F>(self, callback: F) -> [PoolOptions][6]<DB>

where F: for<'c> [Fn][21](&'c mut <DB as [Database][4]>::[Connection][22], [PoolConnectionMetadata][23]) -> [Pin][24]<[Box][25]<dyn [Future][26]<Output = [Result][27]<[bool][19], [Error][29]>> \+ [Send][30] \+ 'c>> \+ 'static + for<'c> [Send][30] \+ for<'c> [Sync][31],

Perform an asynchronous action on a previously idle connection before giving it out.

Alongside the connection, the closure gets [`PoolConnectionMetadata`][23] which contains potentially useful information such as the connection’s age and the duration it was idle.

If the operation returns `Ok(true)`, the connection is returned to the task that called [`Pool::acquire`][12].

If the operation returns `Ok(false)` or an error, the error is logged (if applicable) and then the connection is closed and [`Pool::acquire`][12] tries again with another idle connection. If it runs out of idle connections, it opens a new connection instead.

This is _not_ invoked for new connections. Use [`after_connect`][16] for those.

##### §Example: Custom `test_before_acquire` Logic

If you only want to ping connections if they’ve been idle a certain amount of time, you can implement your own logic here:

This example is written for Postgres but should be trivially adaptable to other databases.
[code] 
    use sqlx::{Connection, Executor};
    use sqlx::postgres::PgPoolOptions;
    
    let pool = PgPoolOptions::new()
        .test_before_acquire(false)
        .before_acquire(|conn, meta| Box::pin(async move {
            // One minute
            if meta.idle_for.as_secs() > 60 {
                conn.ping().await?;
            }
    
            Ok(true)
        }))
        .connect("postgres:// …").await?;
[/code]

For a discussion on why `Box::pin()` is required, see [the type-level docs][6].

#### pub fn after_release<F>(self, callback: F) -> [PoolOptions][6]<DB>

where F: for<'c> [Fn][21](&'c mut <DB as [Database][4]>::[Connection][22], [PoolConnectionMetadata][23]) -> [Pin][24]<[Box][25]<dyn [Future][26]<Output = [Result][27]<[bool][19], [Error][29]>> \+ [Send][30] \+ 'c>> \+ 'static + for<'c> [Send][30] \+ for<'c> [Sync][31],

Perform an asynchronous action on a connection before it is returned to the pool.

Alongside the connection, the closure gets [`PoolConnectionMetadata`][23] which contains potentially useful information such as the connection’s age.

If the operation returns `Ok(true)`, the connection is returned to the pool’s idle queue. If the operation returns `Ok(false)` or an error, the error is logged (if applicable) and the connection is closed, allowing a task waiting on [`Pool::acquire`][12] to open a new one in its place.

##### §Example (Postgres): Close Memory-Hungry Connections

Instead of relying on [`max_lifetime`][9] to close connections, we can monitor their memory usage directly and close any that have allocated too much.

Note that this is purely an example showcasing a possible use for this callback and may be flawed as it has not been tested.

This example queries [`pg_backend_memory_contexts`][34] which is only allowed for superusers.
[code] 
    use sqlx::{Connection, Executor};
    use sqlx::postgres::PgPoolOptions;
    
    let pool = PgPoolOptions::new()
        // Let connections live as long as they want.
        .max_lifetime(None)
        .after_release(|conn, meta| Box::pin(async move {
            // Only check connections older than 6 hours.
            if meta.age.as_secs() < 6 * 60 * 60 {
                return Ok(true);
            }
    
            let total_memory_usage: i64 = sqlx::query_scalar(
                "select sum(used_bytes) from pg_backend_memory_contexts"
            )
            .fetch_one(conn)
            .await?;
    
            // Close the connection if the backend memory usage exceeds 256 MiB.
            Ok(total_memory_usage <= (1 << 28))
        }))
        .connect("postgres:// …").await?;
[/code]

#### pub async fn connect(self, url: &[str][35]) -> [Result][27]<[Pool][5]<DB>, [Error][29]>

Create a new pool from this `PoolOptions` and immediately open at least one connection.

This ensures the configuration is correct.

The total number of connections opened is `max(1, [min_connections][32])`.

Refer to the relevant `ConnectOptions` impl for your database for the expected URL format:

  * Postgres: [`PgConnectOptions`][crate::postgres::PgConnectOptions]
  * MySQL: [`MySqlConnectOptions`][crate::mysql::MySqlConnectOptions]
  * SQLite: [`SqliteConnectOptions`][crate::sqlite::SqliteConnectOptions]
  * MSSQL: [`MssqlConnectOptions`][crate::mssql::MssqlConnectOptions]



#### pub async fn connect_with( self, options: <<DB as [Database][4]>::[Connection][22] as [Connection][36]>::[Options][37], ) -> [Result][27]<[Pool][5]<DB>, [Error][29]>

Create a new pool from this `PoolOptions` and immediately open at least one connection.

This ensures the configuration is correct.

The total number of connections opened is `max(1, [min_connections][32])`.

#### pub fn connect_lazy(self, url: &[str][35]) -> [Result][27]<[Pool][5]<DB>, [Error][29]>

Create a new pool from this `PoolOptions`, but don’t open any connections right now.

If [`min_connections`][32] is set, a background task will be spawned to optimistically establish that many connections for the pool.

Refer to the relevant `ConnectOptions` impl for your database for the expected URL format:

  * Postgres: [`PgConnectOptions`][crate::postgres::PgConnectOptions]
  * MySQL: [`MySqlConnectOptions`][crate::mysql::MySqlConnectOptions]
  * SQLite: [`SqliteConnectOptions`][crate::sqlite::SqliteConnectOptions]
  * MSSQL: [`MssqlConnectOptions`][crate::mssql::MssqlConnectOptions]



#### pub fn connect_lazy_with( self, options: <<DB as [Database][4]>::[Connection][22] as [Connection][36]>::[Options][37], ) -> [Pool][5]<DB>

Create a new pool from this `PoolOptions`, but don’t open any connections right now.

If [`min_connections`][32] is set, a background task will be spawned to optimistically establish that many connections for the pool.

## Trait Implementations§

§

### impl<DB> [Clone][38] for [PoolOptions][6]<DB>

where DB: [Database][4],

§

#### fn [clone][39](&self) -> [PoolOptions][6]<DB>

Returns a duplicate of the value. [Read more][39]

1.0.0 · [Source][40]§

#### fn [clone_from][41](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][41]

§

### impl<DB> [Debug][42] for [PoolOptions][6]<DB>

where DB: [Database][4],

§

#### fn [fmt][43](&self, f: &mut [Formatter][44]<'_>) -> [Result][27]<[()][28], [Error][45]>

Formats the value using the given formatter. [Read more][43]

§

### impl<DB> [Default][46] for [PoolOptions][6]<DB>

where DB: [Database][4],

§

#### fn [default][47]() -> [PoolOptions][6]<DB>

Returns the “default value” for a type. [Read more][47]

## Auto Trait Implementations§

§

### impl<DB> [Freeze][48] for [PoolOptions][6]<DB>

§

### impl<DB> ![RefUnwindSafe][49] for [PoolOptions][6]<DB>

§

### impl<DB> [Send][30] for [PoolOptions][6]<DB>

§

### impl<DB> [Sync][31] for [PoolOptions][6]<DB>

§

### impl<DB> [Unpin][50] for [PoolOptions][6]<DB>

§

### impl<DB> ![UnwindSafe][51] for [PoolOptions][6]<DB>

## Blanket Implementations§

[Source][52]§

### impl<T> [Any][53] for T

where T: 'static + ?[Sized][54],

[Source][55]§

#### fn [type_id][56](&self) -> [TypeId][57]

Gets the `TypeId` of `self`. [Read more][56]

[Source][58]§

### impl<T> [Borrow][59]<T> for T

where T: ?[Sized][54],

[Source][60]§

#### fn [borrow][61](&self) -> [&T][62]

Immutably borrows from an owned value. [Read more][61]

[Source][63]§

### impl<T> [BorrowMut][64]<T> for T

where T: ?[Sized][54],

[Source][65]§

#### fn [borrow_mut][66](&mut self) -> [&mut T][62]

Mutably borrows from an owned value. [Read more][66]

[Source][67]§

### impl<T> [CloneToUninit][68] for T

where T: [Clone][38],

[Source][69]§

#### unsafe fn [clone_to_uninit][70](&self, dest: [*mut ][71][u8][72])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][70]

[Source][73]§

### impl<T> [From][74]<T> for T

[Source][75]§

#### fn [from][76](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][77] [`Span`][78], returning an `Instrumented` wrapper. Read more

[Source][79]§

### impl<T, U> [Into][17]<U> for T

where U: [From][74]<T>,

[Source][80]§

#### fn [into][81](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][74]<T> for U` chooses to do.

[Source][82]§

### impl<T> [IntoEither][83] for T

[Source][84]§

#### fn [into_either][85](self, into_left: [bool][19]) -> [Either][86]<Self, Self> ⓘ

Converts `self` into a [`Left`][87] variant of [`Either<Self, Self>`][86] if `into_left` is `true`. Converts `self` into a [`Right`][88] variant of [`Either<Self, Self>`][86] otherwise. [Read more][85]

[Source][89]§

#### fn [into_either_with][90]<F>(self, into_left: F) -> [Either][86]<Self, Self> ⓘ

where F: [FnOnce][91](&Self) -> [bool][19],

Converts `self` into a [`Left`][87] variant of [`Either<Self, Self>`][86] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][88] variant of [`Either<Self, Self>`][86] otherwise. [Read more][90]

[Source][92]§

### impl<T> [Same][93] for T

[Source][94]§

#### type [Output][95] = T

Should always be `Self`

[Source][96]§

### impl<T> [ToOwned][97] for T

where T: [Clone][38],

[Source][98]§

#### type [Owned][99] = T

The resulting type after obtaining ownership.

[Source][100]§

#### fn [to_owned][101](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][101]

[Source][102]§

#### fn [clone_into][103](&self, target: [&mut T][62])

Uses borrowed data to replace owned data, usually by cloning. [Read more][103]

[Source][104]§

### impl<T, U> [TryFrom][105]<U> for T

where U: [Into][17]<T>,

[Source][106]§

#### type [Error][107] = [Infallible][108]

The type returned in the event of a conversion error.

[Source][109]§

#### fn [try_from][110](value: U) -> [Result][27]<T, <T as [TryFrom][105]<U>>::[Error][111]>

Performs the conversion.

[Source][112]§

### impl<T, U> [TryInto][113]<U> for T

where U: [TryFrom][105]<T>,

[Source][114]§

#### type [Error][115] = <U as [TryFrom][105]<T>>::[Error][111]

The type returned in the event of a conversion error.

[Source][116]§

#### fn [try_into][117](self) -> [Result][27]<U, <U as [TryFrom][105]<T>>::[Error][111]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][17]<Dispatch>,

Attaches the provided [`Subscriber`][118] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][119] [`Subscriber`][118] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../trait.Database.html (trait sqlx::Database)
   [5]: ../struct.Pool.html (struct sqlx::Pool)
   [6]: struct.PoolOptions.html (struct sqlx::pool::PoolOptions)
   [7]: struct.PoolOptions.html#method.max_connections (method sqlx::pool::PoolOptions::max_connections)
   [8]: https://doc.rust-lang.org/1.94.1/std/primitive.u32.html
   [9]: struct.PoolOptions.html#method.max_lifetime (method sqlx::pool::PoolOptions::max_lifetime)
   [10]: struct.PoolOptions.html#method.idle_timeout (method sqlx::pool::PoolOptions::idle_timeout)
   [11]: https://docs.rs/log/0.4.29/log/enum.LevelFilter.html (enum log::LevelFilter)
   [12]: ../struct.Pool.html#method.acquire (method sqlx::Pool::acquire)
   [13]: https://doc.rust-lang.org/1.94.1/core/time/struct.Duration.html (struct core::time::Duration)
   [14]: struct.PoolOptions.html#method.test_before_acquire (method sqlx::pool::PoolOptions::test_before_acquire)
   [15]: struct.PoolOptions.html#method.before_acquire (method sqlx::pool::PoolOptions::before_acquire)
   [16]: struct.PoolOptions.html#method.after_connect (method sqlx::pool::PoolOptions::after_connect)
   [17]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [18]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [19]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [20]: ../trait.Connection.html#tymethod.ping (method sqlx::Connection::ping)
   [21]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.Fn.html (trait core::ops::function::Fn)
   [22]: ../trait.Database.html#associatedtype.Connection (type sqlx::Database::Connection)
   [23]: struct.PoolConnectionMetadata.html (struct sqlx::pool::PoolConnectionMetadata)
   [24]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [25]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [26]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [27]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [28]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [29]: ../enum.Error.html (enum sqlx::Error)
   [30]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [31]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [32]: struct.PoolOptions.html#method.min_connections (method sqlx::pool::PoolOptions::min_connections)
   [33]: struct.PoolOptions.html#method.after_release (method sqlx::pool::PoolOptions::after_release)
   [34]: https://www.postgresql.org/docs/current/view-pg-backend-memory-contexts.html
   [35]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [36]: ../trait.Connection.html (trait sqlx::Connection)
   [37]: ../trait.Connection.html#associatedtype.Options (type sqlx::Connection::Options)
   [38]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [39]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [40]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [41]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [42]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [43]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [44]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [45]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [46]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [47]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [48]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [49]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [50]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [51]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [53]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [54]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [56]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [57]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [59]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [60]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [61]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [62]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [63]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [64]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [65]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [66]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [67]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [68]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [69]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [70]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [71]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [72]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [73]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [74]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [75]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [76]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [77]: super::Span::current()
   [78]: crate::Span
   [79]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [80]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [81]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [82]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [83]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [84]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [85]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [86]: ../enum.Either.html (enum sqlx::Either)
   [87]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [88]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [89]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [90]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [91]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [92]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [93]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [94]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [95]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [96]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [97]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [98]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [99]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [100]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [101]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [102]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [103]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [104]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [105]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [106]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [107]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [108]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [109]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [110]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [111]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [112]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [113]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [114]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [115]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [116]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [117]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [118]: super::Subscriber
   [119]: dispatcher#setting-the-default-subscriber

