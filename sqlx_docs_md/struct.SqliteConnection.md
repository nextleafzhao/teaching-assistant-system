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



## [In crate sqlx][2]

[sqlx][2]

# Struct SqliteConnection Copy item path
[code]
    pub struct SqliteConnection { /* private fields */ }
[/code]

Expand description

A connection to an open [Sqlite][3] database.

Because SQLite is an in-process database accessed by blocking API calls, SQLx uses a background thread and communicates with it via channels to allow non-blocking access to the database.

Dropping this struct will signal the worker thread to quit and close the database, though if an error occurs there is no way to pass it back to the user this way.

You can explicitly call [`.close()`][4] to ensure the database is closed successfully or get an error otherwise.

## Implementations§

§

### impl [SqliteConnection][5]

#### pub async fn serialize( &mut self, schema: [Option][6]<&[str][7]>, ) -> [Result][8]<[SqliteOwnedBuf][9], [Error][10]>

Serialize the given SQLite database schema using [`sqlite3_serialize()`][11].

The returned buffer is a SQLite managed allocation containing the equivalent data as writing the database to disk. It is freed on-drop.

To serialize the primary, unqualified schema (`main`), pass `None` for the schema name.

##### §Errors

  * [`Error::InvalidArgument`][12] if the schema name contains a zero/NUL byte (`\0`).
  * [`Error::Database`][13] if the schema does not exist or another error occurs.



#### pub async fn deserialize( &mut self, schema: [Option][6]<&[str][7]>, data: [SqliteOwnedBuf][9], read_only: [bool][14], ) -> [Result][8]<[()][15], [Error][10]>

Deserialize a SQLite database from a buffer into the specified schema using [`sqlite3_deserialize()`][16].

The given schema will be disconnected and re-connected as an in-memory database backed by `data`, which should be the serialized form of a database previously returned by a call to [`Self::serialize()`][17], documented as being equivalent to the contents of the database file on disk.

An error will be returned if a schema with the given name is not already attached.  
You can use `ATTACH ':memory' as "<schema name>"` to create an empty schema first.

Pass `None` to deserialize to the primary, unqualified schema (`main`).

The SQLite connection will take ownership of `data` and will free it when the connection is closed or the schema is detached ([`SQLITE_DESERIALIZE_FREEONCLOSE`][18]).

If `read_only` is `true`, the schema is opened as read-only ([`SQLITE_DESERIALIZE_READONLY`][18]).  
If `false`, the schema is marked as resizable ([`SQLITE_DESERIALIZE_RESIZABLE`][18]).

If the database is in WAL mode, an error is returned. See [`sqlite3_deserialize()`][16] for details.

##### §Errors

  * [`Error::InvalidArgument`][12] if the schema name contains a zero/NUL byte (`\0`).
  * [`Error::Database`][13] if an error occurs during deserialization.



§

### impl [SqliteConnection][5]

#### pub async fn lock_handle(&mut self) -> [Result][8]<[LockedSqliteHandle][19]<'_>, [Error][10]>

Lock the SQLite database handle out from the worker thread so direct SQLite API calls can be made safely.

Returns an error if the worker thread crashed.

## Trait Implementations§

§

### impl<'c> [Acquire][20]<'c> for &'c mut [SqliteConnection][5]

§

#### type [Database][21] = [Sqlite][3]

§

#### type [Connection][22] = &'c mut <[Sqlite][3] as [Database][23]>::[Connection][24]

§

#### fn [acquire][25]( self, ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<<&'c mut [SqliteConnection][5] as [Acquire][20]<'c>>::[Connection][29], [Error][10]>> \+ [Send][30] \+ 'c>>

§

#### fn [begin][31]( self, ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<[Transaction][32]<'c, [Sqlite][3]>, [Error][10]>> \+ [Send][30] \+ 'c>>

§

### impl AnyConnectionBackend for [SqliteConnection][5]

§

#### fn name(&self) -> &[str][7]

The backend name.

§

#### fn close( self: [Box][27]<[SqliteConnection][5]>, ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<[()][15], [Error][10]>> \+ [Send][30]>>

Explicitly close this database connection. Read more

§

#### fn ping( &mut self, ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<[()][15], [Error][10]>> \+ [Send][30] \+ '_>>

Checks if a connection to the database is still valid.

§

#### fn begin( &mut self, statement: [Option][6]<[Cow][33]<'static, [str][7]>>, ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<[()][15], [Error][10]>> \+ [Send][30] \+ '_>>

Begin a new transaction or establish a savepoint within the active transaction. Read more

§

#### fn commit( &mut self, ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<[()][15], [Error][10]>> \+ [Send][30] \+ '_>>

§

#### fn rollback( &mut self, ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<[()][15], [Error][10]>> \+ [Send][30] \+ '_>>

§

#### fn start_rollback(&mut self)

§

#### fn get_transaction_depth(&self) -> [usize][34]

Returns the current transaction depth. Read more

§

#### fn shrink_buffers(&mut self)

Forward to [`Connection::shrink_buffers()`][35].

§

#### fn as_migrate(&mut self) -> [Result][8]<&mut (dyn [Migrate][36] \+ [Send][30] \+ 'static), [Error][10]>

§

#### fn fetch_many<'q>( &'q mut self, query: &'q [str][7], persistent: [bool][14], arguments: [Option][6]<[AnyArguments][37]<'q>>, ) -> [Pin][26]<[Box][27]<dyn Stream<Item = [Result][8]<[Either][38]<[AnyQueryResult][39], [AnyRow][40]>, [Error][10]>> \+ [Send][30] \+ 'q>>

§

#### fn fetch_optional<'q>( &'q mut self, query: &'q [str][7], persistent: [bool][14], arguments: [Option][6]<[AnyArguments][37]<'q>>, ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<[Option][6]<[AnyRow][40]>, [Error][10]>> \+ [Send][30] \+ 'q>>

§

#### fn prepare_with<'c, 'q>( &'c mut self, sql: &'q [str][7], _parameters: &[[AnyTypeInfo][41]], ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<[AnyStatement][42]<'q>, [Error][10]>> \+ [Send][30] \+ 'c>>

where 'q: 'c,

§

#### fn describe<'q>( &'q mut self, sql: &'q [str][7], ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<Describe<[Any][43]>, [Error][10]>> \+ [Send][30] \+ 'q>>

§

#### fn is_in_transaction(&self) -> [bool][14]

Checks if the connection is currently in a transaction. Read more

§

#### fn cached_statements_size(&self) -> [usize][34]

The number of statements currently cached in the connection.

§

#### fn clear_cached_statements( &mut self, ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<[()][15], [Error][10]>> \+ [Send][30] \+ '_>>

Removes all statements from the cache, closing them on the server if needed.

§

### impl [Connection][44] for [SqliteConnection][5]

§

#### fn [ping][45]( &mut self, ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<[()][15], [Error][10]>> \+ [Send][30] \+ '_>>

Ensure the background worker thread is alive and accepting commands.

§

#### type [Database][46] = [Sqlite][3]

§

#### type [Options][47] = [SqliteConnectOptions][48]

§

#### fn [close][49](self) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<[()][15], [Error][10]>> \+ [Send][30]>>

Explicitly close this database connection. [Read more][49]

§

#### fn [begin][50]( &mut self, ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<[Transaction][32]<'_, <[SqliteConnection][5] as [Connection][44]>::[Database][51]>, [Error][10]>> \+ [Send][30] \+ '_>>

where [SqliteConnection][5]: [Sized][52],

Begin a new transaction or establish a savepoint within the active transaction. [Read more][50]

§

#### fn [begin_with][53]( &mut self, statement: impl [Into][54]<[Cow][33]<'static, [str][7]>>, ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<[Transaction][32]<'_, <[SqliteConnection][5] as [Connection][44]>::[Database][51]>, [Error][10]>> \+ [Send][30] \+ '_>>

where [SqliteConnection][5]: [Sized][52],

Begin a new transaction with a custom statement. [Read more][53]

§

#### fn [cached_statements_size][55](&self) -> [usize][34]

The number of statements currently cached in the connection.

§

#### fn [clear_cached_statements][56]( &mut self, ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<[()][15], [Error][10]>> \+ [Send][30] \+ '_>>

Removes all statements from the cache, closing them on the server if needed.

§

#### fn [shrink_buffers][57](&mut self)

Restore any buffers in the connection to their default capacity, if possible. [Read more][57]

§

#### fn [is_in_transaction][58](&self) -> [bool][14]

Returns `true` if the connection is currently in a transaction. [Read more][58]

§

#### fn [transaction][59]<'a, F, R, E>( &'a mut self, callback: F, ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<R, E>> \+ [Send][30] \+ 'a>>

where F: for<'c> [FnOnce][60](&'c mut [Transaction][32]<'_, Self::[Database][51]>) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<R, E>> \+ [Send][30] \+ 'c>> \+ 'a + for<'c> [Send][30] \+ for<'c> [Sync][61], Self: [Sized][52], R: [Send][30], E: [From][62]<[Error][10]> \+ [Send][30],

Execute the function inside a transaction. [Read more][59]

§

#### fn [connect][63]( url: &[str][7], ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<Self, [Error][10]>> \+ [Send][30]>>

where Self: [Sized][52],

Establish a new database connection. [Read more][63]

§

#### fn [connect_with][64]( options: &Self::[Options][65], ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<Self, [Error][10]>> \+ [Send][30] \+ '_>>

where Self: [Sized][52],

Establish a new database connection with the provided options.

§

### impl [Debug][66] for [SqliteConnection][5]

§

#### fn [fmt][67](&self, f: &mut [Formatter][68]<'_>) -> [Result][8]<[()][15], [Error][69]>

Formats the value using the given formatter. [Read more][67]

§

### impl<'c> [Executor][70]<'c> for &'c mut [SqliteConnection][5]

§

#### type [Database][71] = [Sqlite][3]

§

#### fn [fetch_many][72]<'e, 'q, E>( self, query: E, ) -> [Pin][26]<[Box][27]<dyn Stream<Item = [Result][8]<[Either][38]<[SqliteQueryResult][73], [SqliteRow][74]>, [Error][10]>> \+ [Send][30] \+ 'e>>

where 'c: 'e, 'q: 'e, E: [Execute][75]<'q, <&'c mut [SqliteConnection][5] as [Executor][70]<'c>>::[Database][76]> \+ 'q,

Execute multiple queries and return the generated results as a stream from each query, in a stream.

§

#### fn [fetch_optional][77]<'e, 'q, E>( self, query: E, ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<[Option][6]<[SqliteRow][74]>, [Error][10]>> \+ [Send][30] \+ 'e>>

where 'c: 'e, 'q: 'e, E: [Execute][75]<'q, <&'c mut [SqliteConnection][5] as [Executor][70]<'c>>::[Database][76]> \+ 'q,

Execute the query and returns at most one row.

§

#### fn [prepare_with][78]<'e, 'q>( self, sql: &'q [str][7], _parameters: &[[SqliteTypeInfo][79]], ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<[SqliteStatement][80]<'q>, [Error][10]>> \+ [Send][30] \+ 'e>>

where 'q: 'e, 'c: 'e,

Prepare the SQL query, with parameter type information, to inspect the type information about its parameters and results. [Read more][78]

§

#### fn [execute][81]<'e, 'q, E>( self, query: E, ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<<Self::[Database][76] as [Database][23]>::[QueryResult][82], [Error][10]>> \+ [Send][30] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][75]<'q, Self::[Database][76]>,

Execute the query and return the total number of rows affected.

§

#### fn [execute_many][83]<'e, 'q, E>( self, query: E, ) -> [Pin][26]<[Box][27]<dyn Stream<Item = [Result][8]<<Self::[Database][76] as [Database][23]>::[QueryResult][82], [Error][10]>> \+ [Send][30] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][75]<'q, Self::[Database][76]>,

Execute multiple queries and return the rows affected from each query, in a stream.

§

#### fn [fetch][84]<'e, 'q, E>( self, query: E, ) -> [Pin][26]<[Box][27]<dyn Stream<Item = [Result][8]<<Self::[Database][76] as [Database][23]>::[Row][85], [Error][10]>> \+ [Send][30] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][75]<'q, Self::[Database][76]>,

Execute the query and return the generated results as a stream.

§

#### fn [fetch_all][86]<'e, 'q, E>( self, query: E, ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<[Vec][87]<<Self::[Database][76] as [Database][23]>::[Row][85]>, [Error][10]>> \+ [Send][30] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][75]<'q, Self::[Database][76]>,

Execute the query and return all the generated results, collected into a [`Vec`][87].

§

#### fn [fetch_one][88]<'e, 'q, E>( self, query: E, ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<<Self::[Database][76] as [Database][23]>::[Row][85], [Error][10]>> \+ [Send][30] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][75]<'q, Self::[Database][76]>,

Execute the query and returns exactly one row.

§

#### fn [prepare][89]<'e, 'q>( self, query: &'q [str][7], ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<<Self::[Database][76] as [Database][23]>::[Statement][90]<'q>, [Error][10]>> \+ [Send][30] \+ 'e>>

where 'q: 'e, 'c: 'e,

Prepare the SQL query to inspect the type information of its parameters and results. [Read more][89]

§

### impl [Migrate][36] for [SqliteConnection][5]

§

#### fn [ensure_migrations_table][91]( &mut self, ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<[()][15], [MigrateError][92]>> \+ [Send][30] \+ '_>>

§

#### fn [dirty_version][93]( &mut self, ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<[Option][6]<[i64][94]>, [MigrateError][92]>> \+ [Send][30] \+ '_>>

§

#### fn [list_applied_migrations][95]( &mut self, ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<[Vec][87]<[AppliedMigration][96]>, [MigrateError][92]>> \+ [Send][30] \+ '_>>

§

#### fn [lock][97]( &mut self, ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<[()][15], [MigrateError][92]>> \+ [Send][30] \+ '_>>

§

#### fn [unlock][98]( &mut self, ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<[()][15], [MigrateError][92]>> \+ [Send][30] \+ '_>>

§

#### fn [apply][99]<'e, 'm>( &'e mut self, migration: &'m [Migration][100], ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<[Duration][101], [MigrateError][92]>> \+ [Send][30] \+ 'm>>

where 'e: 'm,

§

#### fn [revert][102]<'e, 'm>( &'e mut self, migration: &'m [Migration][100], ) -> [Pin][26]<[Box][27]<dyn [Future][28]<Output = [Result][8]<[Duration][101], [MigrateError][92]>> \+ [Send][30] \+ 'm>>

where 'e: 'm,

## Auto Trait Implementations§

§

### impl [Freeze][103] for [SqliteConnection][5]

§

### impl ![RefUnwindSafe][104] for [SqliteConnection][5]

§

### impl [Send][30] for [SqliteConnection][5]

§

### impl [Sync][61] for [SqliteConnection][5]

§

### impl [Unpin][105] for [SqliteConnection][5]

§

### impl ![UnwindSafe][106] for [SqliteConnection][5]

## Blanket Implementations§

[Source][107]§

### impl<T> [Any][108] for T

where T: 'static + ?[Sized][52],

[Source][109]§

#### fn [type_id][110](&self) -> [TypeId][111]

Gets the `TypeId` of `self`. [Read more][110]

[Source][112]§

### impl<T> [Borrow][113]<T> for T

where T: ?[Sized][52],

[Source][114]§

#### fn [borrow][115](&self) -> [&T][116]

Immutably borrows from an owned value. [Read more][115]

[Source][117]§

### impl<T> [BorrowMut][118]<T> for T

where T: ?[Sized][52],

[Source][119]§

#### fn [borrow_mut][120](&mut self) -> [&mut T][116]

Mutably borrows from an owned value. [Read more][120]

[Source][121]§

### impl<T> [From][62]<T> for T

[Source][122]§

#### fn [from][123](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][124] [`Span`][125], returning an `Instrumented` wrapper. Read more

[Source][126]§

### impl<T, U> [Into][54]<U> for T

where U: [From][62]<T>,

[Source][127]§

#### fn [into][128](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][62]<T> for U` chooses to do.

[Source][129]§

### impl<T> [IntoEither][130] for T

[Source][131]§

#### fn [into_either][132](self, into_left: [bool][14]) -> [Either][38]<Self, Self> ⓘ

Converts `self` into a [`Left`][133] variant of [`Either<Self, Self>`][38] if `into_left` is `true`. Converts `self` into a [`Right`][134] variant of [`Either<Self, Self>`][38] otherwise. [Read more][132]

[Source][135]§

#### fn [into_either_with][136]<F>(self, into_left: F) -> [Either][38]<Self, Self> ⓘ

where F: [FnOnce][60](&Self) -> [bool][14],

Converts `self` into a [`Left`][133] variant of [`Either<Self, Self>`][38] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][134] variant of [`Either<Self, Self>`][38] otherwise. [Read more][136]

[Source][137]§

### impl<T> [Same][138] for T

[Source][139]§

#### type [Output][140] = T

Should always be `Self`

[Source][141]§

### impl<T, U> [TryFrom][142]<U> for T

where U: [Into][54]<T>,

[Source][143]§

#### type [Error][144] = [Infallible][145]

The type returned in the event of a conversion error.

[Source][146]§

#### fn [try_from][147](value: U) -> [Result][8]<T, <T as [TryFrom][142]<U>>::[Error][148]>

Performs the conversion.

[Source][149]§

### impl<T, U> [TryInto][150]<U> for T

where U: [TryFrom][142]<T>,

[Source][151]§

#### type [Error][152] = <U as [TryFrom][142]<T>>::[Error][148]

The type returned in the event of a conversion error.

[Source][153]§

#### fn [try_into][154](self) -> [Result][8]<U, <U as [TryFrom][142]<T>>::[Error][148]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][54]<Dispatch>,

Attaches the provided [`Subscriber`][155] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][156] [`Subscriber`][155] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: struct.Sqlite.html (struct sqlx::Sqlite)
   [4]: struct.SqliteConnection.html#method.close (method sqlx::SqliteConnection::close)
   [5]: struct.SqliteConnection.html (struct sqlx::SqliteConnection)
   [6]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [7]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [8]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [9]: sqlite/struct.SqliteOwnedBuf.html (struct sqlx::sqlite::SqliteOwnedBuf)
   [10]: enum.Error.html (enum sqlx::Error)
   [11]: https://sqlite.org/c3ref/serialize.html
   [12]: enum.Error.html#variant.InvalidArgument (variant sqlx::Error::InvalidArgument)
   [13]: enum.Error.html#variant.Database (variant sqlx::Error::Database)
   [14]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [15]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [16]: https://sqlite.org/c3ref/deserialize.html
   [17]: struct.SqliteConnection.html#method.serialize (method sqlx::SqliteConnection::serialize)
   [18]: https://sqlite.org/c3ref/c_deserialize_freeonclose.html
   [19]: sqlite/struct.LockedSqliteHandle.html (struct sqlx::sqlite::LockedSqliteHandle)
   [20]: trait.Acquire.html (trait sqlx::Acquire)
   [21]: trait.Acquire.html#associatedtype.Database
   [22]: trait.Acquire.html#associatedtype.Connection
   [23]: trait.Database.html (trait sqlx::Database)
   [24]: trait.Database.html#associatedtype.Connection (type sqlx::Database::Connection)
   [25]: trait.Acquire.html#tymethod.acquire
   [26]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [27]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [28]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [29]: trait.Acquire.html#associatedtype.Connection (type sqlx::Acquire::Connection)
   [30]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [31]: trait.Acquire.html#tymethod.begin
   [32]: struct.Transaction.html (struct sqlx::Transaction)
   [33]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [34]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [35]: trait.Connection.html#tymethod.shrink_buffers (method sqlx::Connection::shrink_buffers)
   [36]: migrate/trait.Migrate.html (trait sqlx::migrate::Migrate)
   [37]: any/struct.AnyArguments.html (struct sqlx::any::AnyArguments)
   [38]: enum.Either.html (enum sqlx::Either)
   [39]: any/struct.AnyQueryResult.html (struct sqlx::any::AnyQueryResult)
   [40]: any/struct.AnyRow.html (struct sqlx::any::AnyRow)
   [41]: any/struct.AnyTypeInfo.html (struct sqlx::any::AnyTypeInfo)
   [42]: any/struct.AnyStatement.html (struct sqlx::any::AnyStatement)
   [43]: struct.Any.html (struct sqlx::Any)
   [44]: trait.Connection.html (trait sqlx::Connection)
   [45]: trait.Connection.html#tymethod.ping
   [46]: trait.Connection.html#associatedtype.Database
   [47]: trait.Connection.html#associatedtype.Options
   [48]: sqlite/struct.SqliteConnectOptions.html (struct sqlx::sqlite::SqliteConnectOptions)
   [49]: trait.Connection.html#tymethod.close
   [50]: trait.Connection.html#tymethod.begin
   [51]: trait.Connection.html#associatedtype.Database (type sqlx::Connection::Database)
   [52]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [53]: trait.Connection.html#method.begin_with
   [54]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [55]: trait.Connection.html#method.cached_statements_size
   [56]: trait.Connection.html#method.clear_cached_statements
   [57]: trait.Connection.html#tymethod.shrink_buffers
   [58]: trait.Connection.html#method.is_in_transaction
   [59]: trait.Connection.html#method.transaction
   [60]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [61]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [62]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [63]: trait.Connection.html#method.connect
   [64]: trait.Connection.html#method.connect_with
   [65]: trait.Connection.html#associatedtype.Options (type sqlx::Connection::Options)
   [66]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [67]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [68]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [69]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [70]: trait.Executor.html (trait sqlx::Executor)
   [71]: trait.Executor.html#associatedtype.Database
   [72]: trait.Executor.html#tymethod.fetch_many
   [73]: sqlite/struct.SqliteQueryResult.html (struct sqlx::sqlite::SqliteQueryResult)
   [74]: sqlite/struct.SqliteRow.html (struct sqlx::sqlite::SqliteRow)
   [75]: trait.Execute.html (trait sqlx::Execute)
   [76]: trait.Executor.html#associatedtype.Database (type sqlx::Executor::Database)
   [77]: trait.Executor.html#tymethod.fetch_optional
   [78]: trait.Executor.html#tymethod.prepare_with
   [79]: sqlite/struct.SqliteTypeInfo.html (struct sqlx::sqlite::SqliteTypeInfo)
   [80]: sqlite/struct.SqliteStatement.html (struct sqlx::sqlite::SqliteStatement)
   [81]: trait.Executor.html#method.execute
   [82]: trait.Database.html#associatedtype.QueryResult (type sqlx::Database::QueryResult)
   [83]: trait.Executor.html#method.execute_many
   [84]: trait.Executor.html#method.fetch
   [85]: trait.Database.html#associatedtype.Row (type sqlx::Database::Row)
   [86]: trait.Executor.html#method.fetch_all
   [87]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [88]: trait.Executor.html#method.fetch_one
   [89]: trait.Executor.html#method.prepare
   [90]: trait.Database.html#associatedtype.Statement (type sqlx::Database::Statement)
   [91]: migrate/trait.Migrate.html#tymethod.ensure_migrations_table
   [92]: migrate/enum.MigrateError.html (enum sqlx::migrate::MigrateError)
   [93]: migrate/trait.Migrate.html#tymethod.dirty_version
   [94]: https://doc.rust-lang.org/1.94.1/std/primitive.i64.html
   [95]: migrate/trait.Migrate.html#tymethod.list_applied_migrations
   [96]: migrate/struct.AppliedMigration.html (struct sqlx::migrate::AppliedMigration)
   [97]: migrate/trait.Migrate.html#tymethod.lock
   [98]: migrate/trait.Migrate.html#tymethod.unlock
   [99]: migrate/trait.Migrate.html#tymethod.apply
   [100]: migrate/struct.Migration.html (struct sqlx::migrate::Migration)
   [101]: https://doc.rust-lang.org/1.94.1/core/time/struct.Duration.html (struct core::time::Duration)
   [102]: migrate/trait.Migrate.html#tymethod.revert
   [103]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [104]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [105]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [106]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [107]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [108]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [109]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [110]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [111]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [112]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [113]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [114]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [115]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [116]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [117]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [118]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [119]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [120]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [121]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [122]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [123]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [124]: super::Span::current()
   [125]: crate::Span
   [126]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [127]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [128]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [129]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [130]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [131]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [132]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [133]: enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [134]: enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [135]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [136]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [137]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [138]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [139]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [140]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [141]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [142]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [143]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [144]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [145]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [146]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [147]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [148]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [149]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [150]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [151]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [152]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [153]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [154]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [155]: super::Subscriber
   [156]: dispatcher#setting-the-default-subscriber

