## SqliteConnection

## [sqlx][1]0.8.6

## SqliteConnection

### Methods

  * deserialize
  * lock_handle
  * serialize



### Trait Implementations

  * Acquire<'c>
  * AnyConnectionBackend
  * Connection
  * Debug
  * Executor<'c>
  * Migrate



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
  * From<T>
  * Instrument
  * Into<U>
  * IntoEither
  * Same
  * TryFrom<U>
  * TryInto<U>
  * WithSubscriber



## [In sqlx::sqlite][2]

[sqlx][3]::[sqlite][2]

# Struct SqliteConnection Copy item path
[code]
    pub struct SqliteConnection { /* private fields */ }
[/code]

Expand description

A connection to an open [Sqlite][4] database.

Because SQLite is an in-process database accessed by blocking API calls, SQLx uses a background thread and communicates with it via channels to allow non-blocking access to the database.

Dropping this struct will signal the worker thread to quit and close the database, though if an error occurs there is no way to pass it back to the user this way.

You can explicitly call [`.close()`][5] to ensure the database is closed successfully or get an error otherwise.

## Implementations§

§

### impl [SqliteConnection][6]

#### pub async fn serialize( &mut self, schema: [Option][7]<&[str][8]>, ) -> [Result][9]<[SqliteOwnedBuf][10], [Error][11]>

Serialize the given SQLite database schema using [`sqlite3_serialize()`][12].

The returned buffer is a SQLite managed allocation containing the equivalent data as writing the database to disk. It is freed on-drop.

To serialize the primary, unqualified schema (`main`), pass `None` for the schema name.

##### §Errors

  * [`Error::InvalidArgument`][13] if the schema name contains a zero/NUL byte (`\0`).
  * [`Error::Database`][14] if the schema does not exist or another error occurs.



#### pub async fn deserialize( &mut self, schema: [Option][7]<&[str][8]>, data: [SqliteOwnedBuf][10], read_only: [bool][15], ) -> [Result][9]<[()][16], [Error][11]>

Deserialize a SQLite database from a buffer into the specified schema using [`sqlite3_deserialize()`][17].

The given schema will be disconnected and re-connected as an in-memory database backed by `data`, which should be the serialized form of a database previously returned by a call to [`Self::serialize()`][18], documented as being equivalent to the contents of the database file on disk.

An error will be returned if a schema with the given name is not already attached.  
You can use `ATTACH ':memory' as "<schema name>"` to create an empty schema first.

Pass `None` to deserialize to the primary, unqualified schema (`main`).

The SQLite connection will take ownership of `data` and will free it when the connection is closed or the schema is detached ([`SQLITE_DESERIALIZE_FREEONCLOSE`][19]).

If `read_only` is `true`, the schema is opened as read-only ([`SQLITE_DESERIALIZE_READONLY`][19]).  
If `false`, the schema is marked as resizable ([`SQLITE_DESERIALIZE_RESIZABLE`][19]).

If the database is in WAL mode, an error is returned. See [`sqlite3_deserialize()`][17] for details.

##### §Errors

  * [`Error::InvalidArgument`][13] if the schema name contains a zero/NUL byte (`\0`).
  * [`Error::Database`][14] if an error occurs during deserialization.



§

### impl [SqliteConnection][6]

#### pub async fn lock_handle(&mut self) -> [Result][9]<[LockedSqliteHandle][20]<'_>, [Error][11]>

Lock the SQLite database handle out from the worker thread so direct SQLite API calls can be made safely.

Returns an error if the worker thread crashed.

## Trait Implementations§

§

### impl<'c> [Acquire][21]<'c> for &'c mut [SqliteConnection][6]

§

#### type [Database][22] = [Sqlite][4]

§

#### type [Connection][23] = &'c mut <[Sqlite][4] as [Database][24]>::[Connection][25]

§

#### fn [acquire][26]( self, ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<<&'c mut [SqliteConnection][6] as [Acquire][21]<'c>>::[Connection][30], [Error][11]>> \+ [Send][31] \+ 'c>>

§

#### fn [begin][32]( self, ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<[Transaction][33]<'c, [Sqlite][4]>, [Error][11]>> \+ [Send][31] \+ 'c>>

§

### impl AnyConnectionBackend for [SqliteConnection][6]

§

#### fn name(&self) -> &[str][8]

The backend name.

§

#### fn close( self: [Box][28]<[SqliteConnection][6]>, ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<[()][16], [Error][11]>> \+ [Send][31]>>

Explicitly close this database connection. Read more

§

#### fn ping( &mut self, ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<[()][16], [Error][11]>> \+ [Send][31] \+ '_>>

Checks if a connection to the database is still valid.

§

#### fn begin( &mut self, statement: [Option][7]<[Cow][34]<'static, [str][8]>>, ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<[()][16], [Error][11]>> \+ [Send][31] \+ '_>>

Begin a new transaction or establish a savepoint within the active transaction. Read more

§

#### fn commit( &mut self, ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<[()][16], [Error][11]>> \+ [Send][31] \+ '_>>

§

#### fn rollback( &mut self, ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<[()][16], [Error][11]>> \+ [Send][31] \+ '_>>

§

#### fn start_rollback(&mut self)

§

#### fn get_transaction_depth(&self) -> [usize][35]

Returns the current transaction depth. Read more

§

#### fn shrink_buffers(&mut self)

Forward to [`Connection::shrink_buffers()`][36].

§

#### fn as_migrate(&mut self) -> [Result][9]<&mut (dyn [Migrate][37] \+ [Send][31] \+ 'static), [Error][11]>

§

#### fn fetch_many<'q>( &'q mut self, query: &'q [str][8], persistent: [bool][15], arguments: [Option][7]<[AnyArguments][38]<'q>>, ) -> [Pin][27]<[Box][28]<dyn Stream<Item = [Result][9]<[Either][39]<[AnyQueryResult][40], [AnyRow][41]>, [Error][11]>> \+ [Send][31] \+ 'q>>

§

#### fn fetch_optional<'q>( &'q mut self, query: &'q [str][8], persistent: [bool][15], arguments: [Option][7]<[AnyArguments][38]<'q>>, ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<[Option][7]<[AnyRow][41]>, [Error][11]>> \+ [Send][31] \+ 'q>>

§

#### fn prepare_with<'c, 'q>( &'c mut self, sql: &'q [str][8], _parameters: &[[AnyTypeInfo][42]], ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<[AnyStatement][43]<'q>, [Error][11]>> \+ [Send][31] \+ 'c>>

where 'q: 'c,

§

#### fn describe<'q>( &'q mut self, sql: &'q [str][8], ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<Describe<[Any][44]>, [Error][11]>> \+ [Send][31] \+ 'q>>

§

#### fn is_in_transaction(&self) -> [bool][15]

Checks if the connection is currently in a transaction. Read more

§

#### fn cached_statements_size(&self) -> [usize][35]

The number of statements currently cached in the connection.

§

#### fn clear_cached_statements( &mut self, ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<[()][16], [Error][11]>> \+ [Send][31] \+ '_>>

Removes all statements from the cache, closing them on the server if needed.

§

### impl [Connection][45] for [SqliteConnection][6]

§

#### fn [ping][46]( &mut self, ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<[()][16], [Error][11]>> \+ [Send][31] \+ '_>>

Ensure the background worker thread is alive and accepting commands.

§

#### type [Database][47] = [Sqlite][4]

§

#### type [Options][48] = [SqliteConnectOptions][49]

§

#### fn [close][50](self) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<[()][16], [Error][11]>> \+ [Send][31]>>

Explicitly close this database connection. [Read more][50]

§

#### fn [begin][51]( &mut self, ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<[Transaction][33]<'_, <[SqliteConnection][6] as [Connection][45]>::[Database][52]>, [Error][11]>> \+ [Send][31] \+ '_>>

where [SqliteConnection][6]: [Sized][53],

Begin a new transaction or establish a savepoint within the active transaction. [Read more][51]

§

#### fn [begin_with][54]( &mut self, statement: impl [Into][55]<[Cow][34]<'static, [str][8]>>, ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<[Transaction][33]<'_, <[SqliteConnection][6] as [Connection][45]>::[Database][52]>, [Error][11]>> \+ [Send][31] \+ '_>>

where [SqliteConnection][6]: [Sized][53],

Begin a new transaction with a custom statement. [Read more][54]

§

#### fn [cached_statements_size][56](&self) -> [usize][35]

The number of statements currently cached in the connection.

§

#### fn [clear_cached_statements][57]( &mut self, ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<[()][16], [Error][11]>> \+ [Send][31] \+ '_>>

Removes all statements from the cache, closing them on the server if needed.

§

#### fn [shrink_buffers][58](&mut self)

Restore any buffers in the connection to their default capacity, if possible. [Read more][58]

§

#### fn [is_in_transaction][59](&self) -> [bool][15]

Returns `true` if the connection is currently in a transaction. [Read more][59]

§

#### fn [transaction][60]<'a, F, R, E>( &'a mut self, callback: F, ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<R, E>> \+ [Send][31] \+ 'a>>

where F: for<'c> [FnOnce][61](&'c mut [Transaction][33]<'_, Self::[Database][52]>) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<R, E>> \+ [Send][31] \+ 'c>> \+ 'a + for<'c> [Send][31] \+ for<'c> [Sync][62], Self: [Sized][53], R: [Send][31], E: [From][63]<[Error][11]> \+ [Send][31],

Execute the function inside a transaction. [Read more][60]

§

#### fn [connect][64]( url: &[str][8], ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<Self, [Error][11]>> \+ [Send][31]>>

where Self: [Sized][53],

Establish a new database connection. [Read more][64]

§

#### fn [connect_with][65]( options: &Self::[Options][66], ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<Self, [Error][11]>> \+ [Send][31] \+ '_>>

where Self: [Sized][53],

Establish a new database connection with the provided options.

§

### impl [Debug][67] for [SqliteConnection][6]

§

#### fn [fmt][68](&self, f: &mut [Formatter][69]<'_>) -> [Result][9]<[()][16], [Error][70]>

Formats the value using the given formatter. [Read more][68]

§

### impl<'c> [Executor][71]<'c> for &'c mut [SqliteConnection][6]

§

#### type [Database][72] = [Sqlite][4]

§

#### fn [fetch_many][73]<'e, 'q, E>( self, query: E, ) -> [Pin][27]<[Box][28]<dyn Stream<Item = [Result][9]<[Either][39]<[SqliteQueryResult][74], [SqliteRow][75]>, [Error][11]>> \+ [Send][31] \+ 'e>>

where 'c: 'e, 'q: 'e, E: [Execute][76]<'q, <&'c mut [SqliteConnection][6] as [Executor][71]<'c>>::[Database][77]> \+ 'q,

Execute multiple queries and return the generated results as a stream from each query, in a stream.

§

#### fn [fetch_optional][78]<'e, 'q, E>( self, query: E, ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<[Option][7]<[SqliteRow][75]>, [Error][11]>> \+ [Send][31] \+ 'e>>

where 'c: 'e, 'q: 'e, E: [Execute][76]<'q, <&'c mut [SqliteConnection][6] as [Executor][71]<'c>>::[Database][77]> \+ 'q,

Execute the query and returns at most one row.

§

#### fn [prepare_with][79]<'e, 'q>( self, sql: &'q [str][8], _parameters: &[[SqliteTypeInfo][80]], ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<[SqliteStatement][81]<'q>, [Error][11]>> \+ [Send][31] \+ 'e>>

where 'q: 'e, 'c: 'e,

Prepare the SQL query, with parameter type information, to inspect the type information about its parameters and results. [Read more][79]

§

#### fn [execute][82]<'e, 'q, E>( self, query: E, ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<<Self::[Database][77] as [Database][24]>::[QueryResult][83], [Error][11]>> \+ [Send][31] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][76]<'q, Self::[Database][77]>,

Execute the query and return the total number of rows affected.

§

#### fn [execute_many][84]<'e, 'q, E>( self, query: E, ) -> [Pin][27]<[Box][28]<dyn Stream<Item = [Result][9]<<Self::[Database][77] as [Database][24]>::[QueryResult][83], [Error][11]>> \+ [Send][31] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][76]<'q, Self::[Database][77]>,

Execute multiple queries and return the rows affected from each query, in a stream.

§

#### fn [fetch][85]<'e, 'q, E>( self, query: E, ) -> [Pin][27]<[Box][28]<dyn Stream<Item = [Result][9]<<Self::[Database][77] as [Database][24]>::[Row][86], [Error][11]>> \+ [Send][31] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][76]<'q, Self::[Database][77]>,

Execute the query and return the generated results as a stream.

§

#### fn [fetch_all][87]<'e, 'q, E>( self, query: E, ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<[Vec][88]<<Self::[Database][77] as [Database][24]>::[Row][86]>, [Error][11]>> \+ [Send][31] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][76]<'q, Self::[Database][77]>,

Execute the query and return all the generated results, collected into a [`Vec`][88].

§

#### fn [fetch_one][89]<'e, 'q, E>( self, query: E, ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<<Self::[Database][77] as [Database][24]>::[Row][86], [Error][11]>> \+ [Send][31] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][76]<'q, Self::[Database][77]>,

Execute the query and returns exactly one row.

§

#### fn [prepare][90]<'e, 'q>( self, query: &'q [str][8], ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<<Self::[Database][77] as [Database][24]>::[Statement][91]<'q>, [Error][11]>> \+ [Send][31] \+ 'e>>

where 'q: 'e, 'c: 'e,

Prepare the SQL query to inspect the type information of its parameters and results. [Read more][90]

§

### impl [Migrate][37] for [SqliteConnection][6]

§

#### fn [ensure_migrations_table][92]( &mut self, ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<[()][16], [MigrateError][93]>> \+ [Send][31] \+ '_>>

§

#### fn [dirty_version][94]( &mut self, ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<[Option][7]<[i64][95]>, [MigrateError][93]>> \+ [Send][31] \+ '_>>

§

#### fn [list_applied_migrations][96]( &mut self, ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<[Vec][88]<[AppliedMigration][97]>, [MigrateError][93]>> \+ [Send][31] \+ '_>>

§

#### fn [lock][98]( &mut self, ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<[()][16], [MigrateError][93]>> \+ [Send][31] \+ '_>>

§

#### fn [unlock][99]( &mut self, ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<[()][16], [MigrateError][93]>> \+ [Send][31] \+ '_>>

§

#### fn [apply][100]<'e, 'm>( &'e mut self, migration: &'m [Migration][101], ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<[Duration][102], [MigrateError][93]>> \+ [Send][31] \+ 'm>>

where 'e: 'm,

§

#### fn [revert][103]<'e, 'm>( &'e mut self, migration: &'m [Migration][101], ) -> [Pin][27]<[Box][28]<dyn [Future][29]<Output = [Result][9]<[Duration][102], [MigrateError][93]>> \+ [Send][31] \+ 'm>>

where 'e: 'm,

## Auto Trait Implementations§

§

### impl [Freeze][104] for [SqliteConnection][6]

§

### impl ![RefUnwindSafe][105] for [SqliteConnection][6]

§

### impl [Send][31] for [SqliteConnection][6]

§

### impl [Sync][62] for [SqliteConnection][6]

§

### impl [Unpin][106] for [SqliteConnection][6]

§

### impl ![UnwindSafe][107] for [SqliteConnection][6]

## Blanket Implementations§

[Source][108]§

### impl<T> [Any][109] for T

where T: 'static + ?[Sized][53],

[Source][110]§

#### fn [type_id][111](&self) -> [TypeId][112]

Gets the `TypeId` of `self`. [Read more][111]

[Source][113]§

### impl<T> [Borrow][114]<T> for T

where T: ?[Sized][53],

[Source][115]§

#### fn [borrow][116](&self) -> [&T][117]

Immutably borrows from an owned value. [Read more][116]

[Source][118]§

### impl<T> [BorrowMut][119]<T> for T

where T: ?[Sized][53],

[Source][120]§

#### fn [borrow_mut][121](&mut self) -> [&mut T][117]

Mutably borrows from an owned value. [Read more][121]

[Source][122]§

### impl<T> [From][63]<T> for T

[Source][123]§

#### fn [from][124](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][125] [`Span`][126], returning an `Instrumented` wrapper. Read more

[Source][127]§

### impl<T, U> [Into][55]<U> for T

where U: [From][63]<T>,

[Source][128]§

#### fn [into][129](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][63]<T> for U` chooses to do.

[Source][130]§

### impl<T> [IntoEither][131] for T

[Source][132]§

#### fn [into_either][133](self, into_left: [bool][15]) -> [Either][39]<Self, Self> ⓘ

Converts `self` into a [`Left`][134] variant of [`Either<Self, Self>`][39] if `into_left` is `true`. Converts `self` into a [`Right`][135] variant of [`Either<Self, Self>`][39] otherwise. [Read more][133]

[Source][136]§

#### fn [into_either_with][137]<F>(self, into_left: F) -> [Either][39]<Self, Self> ⓘ

where F: [FnOnce][61](&Self) -> [bool][15],

Converts `self` into a [`Left`][134] variant of [`Either<Self, Self>`][39] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][135] variant of [`Either<Self, Self>`][39] otherwise. [Read more][137]

[Source][138]§

### impl<T> [Same][139] for T

[Source][140]§

#### type [Output][141] = T

Should always be `Self`

[Source][142]§

### impl<T, U> [TryFrom][143]<U> for T

where U: [Into][55]<T>,

[Source][144]§

#### type [Error][145] = [Infallible][146]

The type returned in the event of a conversion error.

[Source][147]§

#### fn [try_from][148](value: U) -> [Result][9]<T, <T as [TryFrom][143]<U>>::[Error][149]>

Performs the conversion.

[Source][150]§

### impl<T, U> [TryInto][151]<U> for T

where U: [TryFrom][143]<T>,

[Source][152]§

#### type [Error][153] = <U as [TryFrom][143]<T>>::[Error][149]

The type returned in the event of a conversion error.

[Source][154]§

#### fn [try_into][155](self) -> [Result][9]<U, <U as [TryFrom][143]<T>>::[Error][149]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][55]<Dispatch>,

Attaches the provided [`Subscriber`][156] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][157] [`Subscriber`][156] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../struct.Sqlite.html (struct sqlx::Sqlite)
   [5]: ../struct.SqliteConnection.html#method.close (method sqlx::SqliteConnection::close)
   [6]: ../struct.SqliteConnection.html (struct sqlx::SqliteConnection)
   [7]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [8]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [9]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [10]: struct.SqliteOwnedBuf.html (struct sqlx::sqlite::SqliteOwnedBuf)
   [11]: ../enum.Error.html (enum sqlx::Error)
   [12]: https://sqlite.org/c3ref/serialize.html
   [13]: ../enum.Error.html#variant.InvalidArgument (variant sqlx::Error::InvalidArgument)
   [14]: ../enum.Error.html#variant.Database (variant sqlx::Error::Database)
   [15]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [16]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [17]: https://sqlite.org/c3ref/deserialize.html
   [18]: ../struct.SqliteConnection.html#method.serialize (method sqlx::SqliteConnection::serialize)
   [19]: https://sqlite.org/c3ref/c_deserialize_freeonclose.html
   [20]: struct.LockedSqliteHandle.html (struct sqlx::sqlite::LockedSqliteHandle)
   [21]: ../trait.Acquire.html (trait sqlx::Acquire)
   [22]: ../trait.Acquire.html#associatedtype.Database
   [23]: ../trait.Acquire.html#associatedtype.Connection
   [24]: ../trait.Database.html (trait sqlx::Database)
   [25]: ../trait.Database.html#associatedtype.Connection (type sqlx::Database::Connection)
   [26]: ../trait.Acquire.html#tymethod.acquire
   [27]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [28]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [29]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [30]: ../trait.Acquire.html#associatedtype.Connection (type sqlx::Acquire::Connection)
   [31]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [32]: ../trait.Acquire.html#tymethod.begin
   [33]: ../struct.Transaction.html (struct sqlx::Transaction)
   [34]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [35]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [36]: ../trait.Connection.html#tymethod.shrink_buffers (method sqlx::Connection::shrink_buffers)
   [37]: ../migrate/trait.Migrate.html (trait sqlx::migrate::Migrate)
   [38]: ../any/struct.AnyArguments.html (struct sqlx::any::AnyArguments)
   [39]: ../enum.Either.html (enum sqlx::Either)
   [40]: ../any/struct.AnyQueryResult.html (struct sqlx::any::AnyQueryResult)
   [41]: ../any/struct.AnyRow.html (struct sqlx::any::AnyRow)
   [42]: ../any/struct.AnyTypeInfo.html (struct sqlx::any::AnyTypeInfo)
   [43]: ../any/struct.AnyStatement.html (struct sqlx::any::AnyStatement)
   [44]: ../struct.Any.html (struct sqlx::Any)
   [45]: ../trait.Connection.html (trait sqlx::Connection)
   [46]: ../trait.Connection.html#tymethod.ping
   [47]: ../trait.Connection.html#associatedtype.Database
   [48]: ../trait.Connection.html#associatedtype.Options
   [49]: struct.SqliteConnectOptions.html (struct sqlx::sqlite::SqliteConnectOptions)
   [50]: ../trait.Connection.html#tymethod.close
   [51]: ../trait.Connection.html#tymethod.begin
   [52]: ../trait.Connection.html#associatedtype.Database (type sqlx::Connection::Database)
   [53]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [54]: ../trait.Connection.html#method.begin_with
   [55]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [56]: ../trait.Connection.html#method.cached_statements_size
   [57]: ../trait.Connection.html#method.clear_cached_statements
   [58]: ../trait.Connection.html#tymethod.shrink_buffers
   [59]: ../trait.Connection.html#method.is_in_transaction
   [60]: ../trait.Connection.html#method.transaction
   [61]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [62]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [63]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [64]: ../trait.Connection.html#method.connect
   [65]: ../trait.Connection.html#method.connect_with
   [66]: ../trait.Connection.html#associatedtype.Options (type sqlx::Connection::Options)
   [67]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [68]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [69]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [70]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [71]: ../trait.Executor.html (trait sqlx::Executor)
   [72]: ../trait.Executor.html#associatedtype.Database
   [73]: ../trait.Executor.html#tymethod.fetch_many
   [74]: struct.SqliteQueryResult.html (struct sqlx::sqlite::SqliteQueryResult)
   [75]: struct.SqliteRow.html (struct sqlx::sqlite::SqliteRow)
   [76]: ../trait.Execute.html (trait sqlx::Execute)
   [77]: ../trait.Executor.html#associatedtype.Database (type sqlx::Executor::Database)
   [78]: ../trait.Executor.html#tymethod.fetch_optional
   [79]: ../trait.Executor.html#tymethod.prepare_with
   [80]: struct.SqliteTypeInfo.html (struct sqlx::sqlite::SqliteTypeInfo)
   [81]: struct.SqliteStatement.html (struct sqlx::sqlite::SqliteStatement)
   [82]: ../trait.Executor.html#method.execute
   [83]: ../trait.Database.html#associatedtype.QueryResult (type sqlx::Database::QueryResult)
   [84]: ../trait.Executor.html#method.execute_many
   [85]: ../trait.Executor.html#method.fetch
   [86]: ../trait.Database.html#associatedtype.Row (type sqlx::Database::Row)
   [87]: ../trait.Executor.html#method.fetch_all
   [88]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [89]: ../trait.Executor.html#method.fetch_one
   [90]: ../trait.Executor.html#method.prepare
   [91]: ../trait.Database.html#associatedtype.Statement (type sqlx::Database::Statement)
   [92]: ../migrate/trait.Migrate.html#tymethod.ensure_migrations_table
   [93]: ../migrate/enum.MigrateError.html (enum sqlx::migrate::MigrateError)
   [94]: ../migrate/trait.Migrate.html#tymethod.dirty_version
   [95]: https://doc.rust-lang.org/1.94.1/std/primitive.i64.html
   [96]: ../migrate/trait.Migrate.html#tymethod.list_applied_migrations
   [97]: ../migrate/struct.AppliedMigration.html (struct sqlx::migrate::AppliedMigration)
   [98]: ../migrate/trait.Migrate.html#tymethod.lock
   [99]: ../migrate/trait.Migrate.html#tymethod.unlock
   [100]: ../migrate/trait.Migrate.html#tymethod.apply
   [101]: ../migrate/struct.Migration.html (struct sqlx::migrate::Migration)
   [102]: https://doc.rust-lang.org/1.94.1/core/time/struct.Duration.html (struct core::time::Duration)
   [103]: ../migrate/trait.Migrate.html#tymethod.revert
   [104]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [105]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [106]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [107]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [108]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [109]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [110]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [111]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [112]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [113]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [114]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [115]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [116]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [117]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [118]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [119]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [120]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [121]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [122]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [123]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [124]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [125]: super::Span::current()
   [126]: crate::Span
   [127]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [128]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [129]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [130]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [131]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [132]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [133]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [134]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [135]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [136]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [137]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [138]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [139]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [140]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [141]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [142]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [143]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [144]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [145]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [146]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [147]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [148]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [149]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [150]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [151]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [152]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [153]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [154]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [155]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [156]: super::Subscriber
   [157]: dispatcher#setting-the-default-subscriber

