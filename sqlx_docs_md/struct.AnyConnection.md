## AnyConnection

## [sqlx][1]0.8.6

## AnyConnection

### Methods

  * backend_name



### Trait Implementations

  * Acquire<'c>
  * Connection
  * Debug
  * Executor<'c>
  * Migrate



### Auto Trait Implementations

  * !RefUnwindSafe
  * !Sync
  * !UnwindSafe
  * Freeze
  * Send
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

# Struct AnyConnection Copy item path
[code]
    pub struct AnyConnection { /* private fields */ }
[/code]

Expand description

**SEE DOCUMENTATION BEFORE USE**. Runtime-generic database connection.

The underlying database drivers are chosen at runtime from the list set via [`install_drivers`][3]. Any use of [`AnyConnection`][4] or [`AnyPool`][5] without this will panic.

It is recommended to use [`install_default_drivers`][6] to activate all currently compiled-in drivers.

A connection to _any_ SQLx database.

The database driver used is determined by the scheme of the connection url.
[code] 
    postgres://postgres@localhost/test
    sqlite://a.sqlite
[/code]

## Implementations§

§

### impl [AnyConnection][4]

#### pub fn backend_name(&self) -> &[str][7]

Returns the name of the database backend in use (e.g. PostgreSQL, MySQL, SQLite, etc.)

## Trait Implementations§

§

### impl<'c> [Acquire][8]<'c> for &'c mut [AnyConnection][4]

§

#### type [Database][9] = [Any][10]

§

#### type [Connection][11] = &'c mut <[Any][10] as [Database][12]>::[Connection][13]

§

#### fn [acquire][14]( self, ) -> [Pin][15]<[Box][16]<dyn [Future][17]<Output = [Result][18]<<&'c mut [AnyConnection][4] as [Acquire][8]<'c>>::[Connection][19], [Error][20]>> \+ [Send][21] \+ 'c>>

§

#### fn [begin][22]( self, ) -> [Pin][15]<[Box][16]<dyn [Future][17]<Output = [Result][18]<[Transaction][23]<'c, [Any][10]>, [Error][20]>> \+ [Send][21] \+ 'c>>

§

### impl [Connection][24] for [AnyConnection][4]

§

#### type [Database][25] = [Any][10]

§

#### type [Options][26] = [AnyConnectOptions][27]

§

#### fn [close][28](self) -> [Pin][15]<[Box][16]<dyn [Future][17]<Output = [Result][18]<[()][29], [Error][20]>> \+ [Send][21]>>

Explicitly close this database connection. [Read more][28]

§

#### fn [ping][30]( &mut self, ) -> [Pin][15]<[Box][16]<dyn [Future][17]<Output = [Result][18]<[()][29], [Error][20]>> \+ [Send][21] \+ '_>>

Checks if a connection to the database is still valid.

§

#### fn [begin][31]( &mut self, ) -> [Pin][15]<[Box][16]<dyn [Future][17]<Output = [Result][18]<[Transaction][23]<'_, <[AnyConnection][4] as [Connection][24]>::[Database][32]>, [Error][20]>> \+ [Send][21] \+ '_>>

where [AnyConnection][4]: [Sized][33],

Begin a new transaction or establish a savepoint within the active transaction. [Read more][31]

§

#### fn [begin_with][34]( &mut self, statement: impl [Into][35]<[Cow][36]<'static, [str][7]>>, ) -> [Pin][15]<[Box][16]<dyn [Future][17]<Output = [Result][18]<[Transaction][23]<'_, <[AnyConnection][4] as [Connection][24]>::[Database][32]>, [Error][20]>> \+ [Send][21] \+ '_>>

where [AnyConnection][4]: [Sized][33],

Begin a new transaction with a custom statement. [Read more][34]

§

#### fn [cached_statements_size][37](&self) -> [usize][38]

The number of statements currently cached in the connection.

§

#### fn [clear_cached_statements][39]( &mut self, ) -> [Pin][15]<[Box][16]<dyn [Future][17]<Output = [Result][18]<[()][29], [Error][20]>> \+ [Send][21] \+ '_>>

Removes all statements from the cache, closing them on the server if needed.

§

#### fn [shrink_buffers][40](&mut self)

Restore any buffers in the connection to their default capacity, if possible. [Read more][40]

§

#### fn [is_in_transaction][41](&self) -> [bool][42]

Returns `true` if the connection is currently in a transaction. [Read more][41]

§

#### fn [transaction][43]<'a, F, R, E>( &'a mut self, callback: F, ) -> [Pin][15]<[Box][16]<dyn [Future][17]<Output = [Result][18]<R, E>> \+ [Send][21] \+ 'a>>

where F: for<'c> [FnOnce][44](&'c mut [Transaction][23]<'_, Self::[Database][32]>) -> [Pin][15]<[Box][16]<dyn [Future][17]<Output = [Result][18]<R, E>> \+ [Send][21] \+ 'c>> \+ 'a + for<'c> [Send][21] \+ for<'c> [Sync][45], Self: [Sized][33], R: [Send][21], E: [From][46]<[Error][20]> \+ [Send][21],

Execute the function inside a transaction. [Read more][43]

§

#### fn [connect][47]( url: &[str][7], ) -> [Pin][15]<[Box][16]<dyn [Future][17]<Output = [Result][18]<Self, [Error][20]>> \+ [Send][21]>>

where Self: [Sized][33],

Establish a new database connection. [Read more][47]

§

#### fn [connect_with][48]( options: &Self::[Options][49], ) -> [Pin][15]<[Box][16]<dyn [Future][17]<Output = [Result][18]<Self, [Error][20]>> \+ [Send][21] \+ '_>>

where Self: [Sized][33],

Establish a new database connection with the provided options.

§

### impl [Debug][50] for [AnyConnection][4]

§

#### fn [fmt][51](&self, f: &mut [Formatter][52]<'_>) -> [Result][18]<[()][29], [Error][53]>

Formats the value using the given formatter. [Read more][51]

§

### impl<'c> [Executor][54]<'c> for &'c mut [AnyConnection][4]

§

#### type [Database][55] = [Any][10]

§

#### fn [fetch_many][56]<'e, 'q, E>( self, query: E, ) -> [Pin][15]<[Box][16]<dyn Stream<Item = [Result][18]<[Either][57]<[AnyQueryResult][58], [AnyRow][59]>, [Error][20]>> \+ [Send][21] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][60]<'q, [Any][10]>,

Execute multiple queries and return the generated results as a stream from each query, in a stream.

§

#### fn [fetch_optional][61]<'e, 'q, E>( self, query: E, ) -> [Pin][15]<[Box][16]<dyn [Future][17]<Output = [Result][18]<[Option][62]<[AnyRow][59]>, [Error][20]>> \+ [Send][21] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][60]<'q, <&'c mut [AnyConnection][4] as [Executor][54]<'c>>::[Database][63]>,

Execute the query and returns at most one row.

§

#### fn [prepare_with][64]<'e, 'q>( self, sql: &'q [str][7], parameters: &[[AnyTypeInfo][65]], ) -> [Pin][15]<[Box][16]<dyn [Future][17]<Output = [Result][18]<[AnyStatement][66]<'q>, [Error][20]>> \+ [Send][21] \+ 'e>>

where 'q: 'e, 'c: 'e,

Prepare the SQL query, with parameter type information, to inspect the type information about its parameters and results. [Read more][64]

§

#### fn [execute][67]<'e, 'q, E>( self, query: E, ) -> [Pin][15]<[Box][16]<dyn [Future][17]<Output = [Result][18]<<Self::[Database][63] as [Database][12]>::[QueryResult][68], [Error][20]>> \+ [Send][21] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][60]<'q, Self::[Database][63]>,

Execute the query and return the total number of rows affected.

§

#### fn [execute_many][69]<'e, 'q, E>( self, query: E, ) -> [Pin][15]<[Box][16]<dyn Stream<Item = [Result][18]<<Self::[Database][63] as [Database][12]>::[QueryResult][68], [Error][20]>> \+ [Send][21] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][60]<'q, Self::[Database][63]>,

Execute multiple queries and return the rows affected from each query, in a stream.

§

#### fn [fetch][70]<'e, 'q, E>( self, query: E, ) -> [Pin][15]<[Box][16]<dyn Stream<Item = [Result][18]<<Self::[Database][63] as [Database][12]>::[Row][71], [Error][20]>> \+ [Send][21] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][60]<'q, Self::[Database][63]>,

Execute the query and return the generated results as a stream.

§

#### fn [fetch_all][72]<'e, 'q, E>( self, query: E, ) -> [Pin][15]<[Box][16]<dyn [Future][17]<Output = [Result][18]<[Vec][73]<<Self::[Database][63] as [Database][12]>::[Row][71]>, [Error][20]>> \+ [Send][21] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][60]<'q, Self::[Database][63]>,

Execute the query and return all the generated results, collected into a [`Vec`][73].

§

#### fn [fetch_one][74]<'e, 'q, E>( self, query: E, ) -> [Pin][15]<[Box][16]<dyn [Future][17]<Output = [Result][18]<<Self::[Database][63] as [Database][12]>::[Row][71], [Error][20]>> \+ [Send][21] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][60]<'q, Self::[Database][63]>,

Execute the query and returns exactly one row.

§

#### fn [prepare][75]<'e, 'q>( self, query: &'q [str][7], ) -> [Pin][15]<[Box][16]<dyn [Future][17]<Output = [Result][18]<<Self::[Database][63] as [Database][12]>::[Statement][76]<'q>, [Error][20]>> \+ [Send][21] \+ 'e>>

where 'q: 'e, 'c: 'e,

Prepare the SQL query to inspect the type information of its parameters and results. [Read more][75]

§

### impl [Migrate][77] for [AnyConnection][4]

§

#### fn [ensure_migrations_table][78]( &mut self, ) -> [Pin][15]<[Box][16]<dyn [Future][17]<Output = [Result][18]<[()][29], [MigrateError][79]>> \+ [Send][21] \+ '_>>

§

#### fn [dirty_version][80]( &mut self, ) -> [Pin][15]<[Box][16]<dyn [Future][17]<Output = [Result][18]<[Option][62]<[i64][81]>, [MigrateError][79]>> \+ [Send][21] \+ '_>>

§

#### fn [list_applied_migrations][82]( &mut self, ) -> [Pin][15]<[Box][16]<dyn [Future][17]<Output = [Result][18]<[Vec][73]<[AppliedMigration][83]>, [MigrateError][79]>> \+ [Send][21] \+ '_>>

§

#### fn [lock][84]( &mut self, ) -> [Pin][15]<[Box][16]<dyn [Future][17]<Output = [Result][18]<[()][29], [MigrateError][79]>> \+ [Send][21] \+ '_>>

§

#### fn [unlock][85]( &mut self, ) -> [Pin][15]<[Box][16]<dyn [Future][17]<Output = [Result][18]<[()][29], [MigrateError][79]>> \+ [Send][21] \+ '_>>

§

#### fn [apply][86]<'e, 'm>( &'e mut self, migration: &'m [Migration][87], ) -> [Pin][15]<[Box][16]<dyn [Future][17]<Output = [Result][18]<[Duration][88], [MigrateError][79]>> \+ [Send][21] \+ 'm>>

where 'e: 'm,

§

#### fn [revert][89]<'e, 'm>( &'e mut self, migration: &'m [Migration][87], ) -> [Pin][15]<[Box][16]<dyn [Future][17]<Output = [Result][18]<[Duration][88], [MigrateError][79]>> \+ [Send][21] \+ 'm>>

where 'e: 'm,

## Auto Trait Implementations§

§

### impl [Freeze][90] for [AnyConnection][4]

§

### impl ![RefUnwindSafe][91] for [AnyConnection][4]

§

### impl [Send][21] for [AnyConnection][4]

§

### impl ![Sync][45] for [AnyConnection][4]

§

### impl [Unpin][92] for [AnyConnection][4]

§

### impl ![UnwindSafe][93] for [AnyConnection][4]

## Blanket Implementations§

[Source][94]§

### impl<T> [Any][95] for T

where T: 'static + ?[Sized][33],

[Source][96]§

#### fn [type_id][97](&self) -> [TypeId][98]

Gets the `TypeId` of `self`. [Read more][97]

[Source][99]§

### impl<T> [Borrow][100]<T> for T

where T: ?[Sized][33],

[Source][101]§

#### fn [borrow][102](&self) -> [&T][103]

Immutably borrows from an owned value. [Read more][102]

[Source][104]§

### impl<T> [BorrowMut][105]<T> for T

where T: ?[Sized][33],

[Source][106]§

#### fn [borrow_mut][107](&mut self) -> [&mut T][103]

Mutably borrows from an owned value. [Read more][107]

[Source][108]§

### impl<T> [From][46]<T> for T

[Source][109]§

#### fn [from][110](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][111] [`Span`][112], returning an `Instrumented` wrapper. Read more

[Source][113]§

### impl<T, U> [Into][35]<U> for T

where U: [From][46]<T>,

[Source][114]§

#### fn [into][115](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][46]<T> for U` chooses to do.

[Source][116]§

### impl<T> [IntoEither][117] for T

[Source][118]§

#### fn [into_either][119](self, into_left: [bool][42]) -> [Either][57]<Self, Self> ⓘ

Converts `self` into a [`Left`][120] variant of [`Either<Self, Self>`][57] if `into_left` is `true`. Converts `self` into a [`Right`][121] variant of [`Either<Self, Self>`][57] otherwise. [Read more][119]

[Source][122]§

#### fn [into_either_with][123]<F>(self, into_left: F) -> [Either][57]<Self, Self> ⓘ

where F: [FnOnce][44](&Self) -> [bool][42],

Converts `self` into a [`Left`][120] variant of [`Either<Self, Self>`][57] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][121] variant of [`Either<Self, Self>`][57] otherwise. [Read more][123]

[Source][124]§

### impl<T> [Same][125] for T

[Source][126]§

#### type [Output][127] = T

Should always be `Self`

[Source][128]§

### impl<T, U> [TryFrom][129]<U> for T

where U: [Into][35]<T>,

[Source][130]§

#### type [Error][131] = [Infallible][132]

The type returned in the event of a conversion error.

[Source][133]§

#### fn [try_from][134](value: U) -> [Result][18]<T, <T as [TryFrom][129]<U>>::[Error][135]>

Performs the conversion.

[Source][136]§

### impl<T, U> [TryInto][137]<U> for T

where U: [TryFrom][129]<T>,

[Source][138]§

#### type [Error][139] = <U as [TryFrom][129]<T>>::[Error][135]

The type returned in the event of a conversion error.

[Source][140]§

#### fn [try_into][141](self) -> [Result][18]<U, <U as [TryFrom][129]<T>>::[Error][135]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][35]<Dispatch>,

Attaches the provided [`Subscriber`][142] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][143] [`Subscriber`][142] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: any/fn.install_drivers.html (fn sqlx::any::install_drivers)
   [4]: struct.AnyConnection.html (struct sqlx::AnyConnection)
   [5]: type.AnyPool.html (type sqlx::AnyPool)
   [6]: any/fn.install_default_drivers.html (fn sqlx::any::install_default_drivers)
   [7]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [8]: trait.Acquire.html (trait sqlx::Acquire)
   [9]: trait.Acquire.html#associatedtype.Database
   [10]: struct.Any.html (struct sqlx::Any)
   [11]: trait.Acquire.html#associatedtype.Connection
   [12]: trait.Database.html (trait sqlx::Database)
   [13]: trait.Database.html#associatedtype.Connection (type sqlx::Database::Connection)
   [14]: trait.Acquire.html#tymethod.acquire
   [15]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [16]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [17]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [18]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [19]: trait.Acquire.html#associatedtype.Connection (type sqlx::Acquire::Connection)
   [20]: enum.Error.html (enum sqlx::Error)
   [21]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [22]: trait.Acquire.html#tymethod.begin
   [23]: struct.Transaction.html (struct sqlx::Transaction)
   [24]: trait.Connection.html (trait sqlx::Connection)
   [25]: trait.Connection.html#associatedtype.Database
   [26]: trait.Connection.html#associatedtype.Options
   [27]: any/struct.AnyConnectOptions.html (struct sqlx::any::AnyConnectOptions)
   [28]: trait.Connection.html#tymethod.close
   [29]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [30]: trait.Connection.html#tymethod.ping
   [31]: trait.Connection.html#tymethod.begin
   [32]: trait.Connection.html#associatedtype.Database (type sqlx::Connection::Database)
   [33]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [34]: trait.Connection.html#method.begin_with
   [35]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [36]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [37]: trait.Connection.html#method.cached_statements_size
   [38]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [39]: trait.Connection.html#method.clear_cached_statements
   [40]: trait.Connection.html#tymethod.shrink_buffers
   [41]: trait.Connection.html#method.is_in_transaction
   [42]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [43]: trait.Connection.html#method.transaction
   [44]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [45]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [46]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [47]: trait.Connection.html#method.connect
   [48]: trait.Connection.html#method.connect_with
   [49]: trait.Connection.html#associatedtype.Options (type sqlx::Connection::Options)
   [50]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [51]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [52]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [53]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [54]: trait.Executor.html (trait sqlx::Executor)
   [55]: trait.Executor.html#associatedtype.Database
   [56]: trait.Executor.html#tymethod.fetch_many
   [57]: enum.Either.html (enum sqlx::Either)
   [58]: any/struct.AnyQueryResult.html (struct sqlx::any::AnyQueryResult)
   [59]: any/struct.AnyRow.html (struct sqlx::any::AnyRow)
   [60]: trait.Execute.html (trait sqlx::Execute)
   [61]: trait.Executor.html#tymethod.fetch_optional
   [62]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [63]: trait.Executor.html#associatedtype.Database (type sqlx::Executor::Database)
   [64]: trait.Executor.html#tymethod.prepare_with
   [65]: any/struct.AnyTypeInfo.html (struct sqlx::any::AnyTypeInfo)
   [66]: any/struct.AnyStatement.html (struct sqlx::any::AnyStatement)
   [67]: trait.Executor.html#method.execute
   [68]: trait.Database.html#associatedtype.QueryResult (type sqlx::Database::QueryResult)
   [69]: trait.Executor.html#method.execute_many
   [70]: trait.Executor.html#method.fetch
   [71]: trait.Database.html#associatedtype.Row (type sqlx::Database::Row)
   [72]: trait.Executor.html#method.fetch_all
   [73]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [74]: trait.Executor.html#method.fetch_one
   [75]: trait.Executor.html#method.prepare
   [76]: trait.Database.html#associatedtype.Statement (type sqlx::Database::Statement)
   [77]: migrate/trait.Migrate.html (trait sqlx::migrate::Migrate)
   [78]: migrate/trait.Migrate.html#tymethod.ensure_migrations_table
   [79]: migrate/enum.MigrateError.html (enum sqlx::migrate::MigrateError)
   [80]: migrate/trait.Migrate.html#tymethod.dirty_version
   [81]: https://doc.rust-lang.org/1.94.1/std/primitive.i64.html
   [82]: migrate/trait.Migrate.html#tymethod.list_applied_migrations
   [83]: migrate/struct.AppliedMigration.html (struct sqlx::migrate::AppliedMigration)
   [84]: migrate/trait.Migrate.html#tymethod.lock
   [85]: migrate/trait.Migrate.html#tymethod.unlock
   [86]: migrate/trait.Migrate.html#tymethod.apply
   [87]: migrate/struct.Migration.html (struct sqlx::migrate::Migration)
   [88]: https://doc.rust-lang.org/1.94.1/core/time/struct.Duration.html (struct core::time::Duration)
   [89]: migrate/trait.Migrate.html#tymethod.revert
   [90]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [91]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [92]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [93]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [94]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [95]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [96]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [97]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [98]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [99]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [100]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [101]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [102]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [103]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [104]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [105]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [106]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [107]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [108]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [109]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [110]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [111]: super::Span::current()
   [112]: crate::Span
   [113]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [114]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [115]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [116]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [117]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [118]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [119]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [120]: enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [121]: enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [122]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [123]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [124]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [125]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [126]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [127]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [128]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [129]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [130]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [131]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [132]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [133]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [134]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [135]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [136]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [137]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [138]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [139]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [140]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [141]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [142]: super::Subscriber
   [143]: dispatcher#setting-the-default-subscriber

