## Query

## [sqlx][1]0.8.6

## Query

### Methods

  * bind
  * execute
  * execute_many
  * fetch
  * fetch_all
  * fetch_many
  * fetch_one
  * fetch_optional
  * map
  * persistent
  * try_bind
  * try_map



### Trait Implementations

  * Execute<'q, DB>



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



## [In sqlx::query][2]

[sqlx][3]::[query][2]

# Struct Query Copy item path
[code]
    pub struct Query<'q, DB, A>
    
    where
        DB: [Database][4],
    
    { /* private fields */ }
[/code]

Expand description

A single SQL query as a prepared statement. Returned by [`query()`][5].

## Implementations§

§

### impl<'q, DB> [Query][6]<'q, DB, <DB as [Database][4]>::[Arguments][7]<'q>>

where DB: [Database][4],

#### pub fn bind<T>(self, value: T) -> [Query][6]<'q, DB, <DB as [Database][4]>::[Arguments][7]<'q>>

where T: 'q + [Encode][8]<'q, DB> \+ [Type][9]<DB>,

Bind a value for use with this SQL query.

If the number of times this is called does not match the number of bind parameters that appear in the query (`?` for most SQL flavors, `$1 .. $N` for Postgres) then an error will be returned when this query is executed.

There is no validation that the value is of the type expected by the query. Most SQL flavors will perform type coercion (Postgres will return a database error).

If encoding the value fails, the error is stored and later surfaced when executing the query.

#### pub fn try_bind<T>( &mut self, value: T, ) -> [Result][10]<[()][11], [Box][12]<dyn [Error][13] \+ [Send][14] \+ [Sync][15]>>

where T: 'q + [Encode][8]<'q, DB> \+ [Type][9]<DB>,

Like [`Query::try_bind`][16] but immediately returns an error if encoding the value failed.

§

### impl<'q, DB, A> [Query][6]<'q, DB, A>

where DB: [Database][4] \+ [HasStatementCache][17],

#### pub fn persistent(self, value: [bool][18]) -> [Query][6]<'q, DB, A>

If `true`, the statement will get prepared once and cached to the connection’s statement cache.

If queried once with the flag set to `true`, all subsequent queries matching the one with the flag will use the cached statement until the cache is cleared.

If `false`, the prepared statement will be closed after execution.

Default: `true`.

§

### impl<'q, DB, A> [Query][6]<'q, DB, A>

where A: [Send][14] \+ 'q + [IntoArguments][19]<'q, DB>, DB: [Database][4],

#### pub fn map<F, O>( self, f: F, ) -> [Map][20]<'q, DB, impl [FnMut][21](<DB as [Database][4]>::[Row][22]) + [Send][14], A>

where F: [FnMut][21](<DB as [Database][4]>::[Row][22]) -> O + [Send][14], O: [Unpin][23],

Map each row in the result to another type.

See [`try_map`][24] for a fallible version of this method.

The [`query_as`][25] method will construct a mapped query using a [`FromRow`][26] implementation.

#### pub fn try_map<F, O>(self, f: F) -> [Map][20]<'q, DB, F, A>

where F: [FnMut][21](<DB as [Database][4]>::[Row][22]) -> [Result][10]<O, [Error][27]> \+ [Send][14], O: [Unpin][23],

Map each row in the result to another type.

The [`query_as`][25] method will construct a mapped query using a [`FromRow`][26] implementation.

#### pub async fn execute<'e, 'c, E>( self, executor: E, ) -> [Result][10]<<DB as [Database][4]>::[QueryResult][28], [Error][27]>

where 'c: 'e, 'q: 'e, A: 'e, E: [Executor][29]<'c, Database = DB>,

Execute the query and return the total number of rows affected.

#### pub async fn execute_many<'e, 'c, E>( self, executor: E, ) -> [Pin][30]<[Box][12]<dyn Stream<Item = [Result][10]<<DB as [Database][4]>::[QueryResult][28], [Error][27]>> \+ [Send][14] \+ 'e>>

where 'c: 'e, 'q: 'e, A: 'e, E: [Executor][29]<'c, Database = DB>,

👎Deprecated: Only the SQLite driver supports multiple statements in one prepared statement and that behavior is deprecated. Use `sqlx::raw_sql()` instead. See https://github.com/launchbadge/sqlx/issues/3108 for discussion.

Execute multiple queries and return the rows affected from each query, in a stream.

#### pub fn fetch<'e, 'c, E>( self, executor: E, ) -> [Pin][30]<[Box][12]<dyn Stream<Item = [Result][10]<<DB as [Database][4]>::[Row][22], [Error][27]>> \+ [Send][14] \+ 'e>>

where 'c: 'e, 'q: 'e, A: 'e, E: [Executor][29]<'c, Database = DB>,

Execute the query and return the generated results as a stream.

#### pub fn fetch_many<'e, 'c, E>( self, executor: E, ) -> [Pin][30]<[Box][12]<dyn Stream<Item = [Result][10]<[Either][31]<<DB as [Database][4]>::[QueryResult][28], <DB as [Database][4]>::[Row][22]>, [Error][27]>> \+ [Send][14] \+ 'e>>

where 'c: 'e, 'q: 'e, A: 'e, E: [Executor][29]<'c, Database = DB>,

👎Deprecated: Only the SQLite driver supports multiple statements in one prepared statement and that behavior is deprecated. Use `sqlx::raw_sql()` instead. See https://github.com/launchbadge/sqlx/issues/3108 for discussion.

Execute multiple queries and return the generated results as a stream.

For each query in the stream, any generated rows are returned first, then the `QueryResult` with the number of rows affected.

#### pub async fn fetch_all<'e, 'c, E>( self, executor: E, ) -> [Result][10]<[Vec][32]<<DB as [Database][4]>::[Row][22]>, [Error][27]>

where 'c: 'e, 'q: 'e, A: 'e, E: [Executor][29]<'c, Database = DB>,

Execute the query and return all the resulting rows collected into a [`Vec`][32].

###### §Note: beware result set size.

This will attempt to collect the full result set of the query into memory.

To avoid exhausting available memory, ensure the result set has a known upper bound, e.g. using `LIMIT`.

#### pub async fn fetch_one<'e, 'c, E>( self, executor: E, ) -> [Result][10]<<DB as [Database][4]>::[Row][22], [Error][27]>

where 'c: 'e, 'q: 'e, A: 'e, E: [Executor][29]<'c, Database = DB>,

Execute the query, returning the first row or [`Error::RowNotFound`][33] otherwise.

###### §Note: for best performance, ensure the query returns at most one row.

Depending on the driver implementation, if your query can return more than one row, it may lead to wasted CPU time and bandwidth on the database server.

Even when the driver implementation takes this into account, ensuring the query returns at most one row can result in a more optimal query plan.

If your query has a `WHERE` clause filtering a unique column by a single value, you’re good.

Otherwise, you might want to add `LIMIT 1` to your query.

#### pub async fn fetch_optional<'e, 'c, E>( self, executor: E, ) -> [Result][10]<[Option][34]<<DB as [Database][4]>::[Row][22]>, [Error][27]>

where 'c: 'e, 'q: 'e, A: 'e, E: [Executor][29]<'c, Database = DB>,

Execute the query, returning the first row or `None` otherwise.

###### §Note: for best performance, ensure the query returns at most one row.

Depending on the driver implementation, if your query can return more than one row, it may lead to wasted CPU time and bandwidth on the database server.

Even when the driver implementation takes this into account, ensuring the query returns at most one row can result in a more optimal query plan.

If your query has a `WHERE` clause filtering a unique column by a single value, you’re good.

Otherwise, you might want to add `LIMIT 1` to your query.

## Trait Implementations§

§

### impl<'q, DB, A> [Execute][35]<'q, DB> for [Query][6]<'q, DB, A>

where DB: [Database][4], A: [Send][14] \+ [IntoArguments][19]<'q, DB>,

§

#### fn [sql][36](&self) -> &'q [str][37]

Gets the SQL that will be executed.

§

#### fn [statement][38](&self) -> [Option][34]<&<DB as [Database][4]>::[Statement][39]<'q>>

Gets the previously cached statement, if available.

§

#### fn [take_arguments][40]( &mut self, ) -> [Result][10]<[Option][34]<<DB as [Database][4]>::[Arguments][7]<'q>>, [Box][12]<dyn [Error][13] \+ [Send][14] \+ [Sync][15]>>

Returns the arguments to be bound against the query string. [Read more][40]

§

#### fn [persistent][41](&self) -> [bool][18]

Returns `true` if the statement should be cached.

## Auto Trait Implementations§

§

### impl<'q, DB, A> [Freeze][42] for [Query][6]<'q, DB, A>

where A: [Freeze][42],

§

### impl<'q, DB, A> ![RefUnwindSafe][43] for [Query][6]<'q, DB, A>

§

### impl<'q, DB, A> [Send][14] for [Query][6]<'q, DB, A>

where A: [Send][14],

§

### impl<'q, DB, A> [Sync][15] for [Query][6]<'q, DB, A>

where DB: [Sync][15], A: [Sync][15],

§

### impl<'q, DB, A> [Unpin][23] for [Query][6]<'q, DB, A>

where DB: [Unpin][23], A: [Unpin][23],

§

### impl<'q, DB, A> ![UnwindSafe][44] for [Query][6]<'q, DB, A>

## Blanket Implementations§

[Source][45]§

### impl<T> [Any][46] for T

where T: 'static + ?[Sized][47],

[Source][48]§

#### fn [type_id][49](&self) -> [TypeId][50]

Gets the `TypeId` of `self`. [Read more][49]

[Source][51]§

### impl<T> [Borrow][52]<T> for T

where T: ?[Sized][47],

[Source][53]§

#### fn [borrow][54](&self) -> [&T][55]

Immutably borrows from an owned value. [Read more][54]

[Source][56]§

### impl<T> [BorrowMut][57]<T> for T

where T: ?[Sized][47],

[Source][58]§

#### fn [borrow_mut][59](&mut self) -> [&mut T][55]

Mutably borrows from an owned value. [Read more][59]

[Source][60]§

### impl<T> [From][61]<T> for T

[Source][62]§

#### fn [from][63](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][64] [`Span`][65], returning an `Instrumented` wrapper. Read more

[Source][66]§

### impl<T, U> [Into][67]<U> for T

where U: [From][61]<T>,

[Source][68]§

#### fn [into][69](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][61]<T> for U` chooses to do.

[Source][70]§

### impl<T> [IntoEither][71] for T

[Source][72]§

#### fn [into_either][73](self, into_left: [bool][18]) -> [Either][31]<Self, Self> ⓘ

Converts `self` into a [`Left`][74] variant of [`Either<Self, Self>`][31] if `into_left` is `true`. Converts `self` into a [`Right`][75] variant of [`Either<Self, Self>`][31] otherwise. [Read more][73]

[Source][76]§

#### fn [into_either_with][77]<F>(self, into_left: F) -> [Either][31]<Self, Self> ⓘ

where F: [FnOnce][78](&Self) -> [bool][18],

Converts `self` into a [`Left`][74] variant of [`Either<Self, Self>`][31] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][75] variant of [`Either<Self, Self>`][31] otherwise. [Read more][77]

[Source][79]§

### impl<T> [Same][80] for T

[Source][81]§

#### type [Output][82] = T

Should always be `Self`

[Source][83]§

### impl<T, U> [TryFrom][84]<U> for T

where U: [Into][67]<T>,

[Source][85]§

#### type [Error][86] = [Infallible][87]

The type returned in the event of a conversion error.

[Source][88]§

#### fn [try_from][89](value: U) -> [Result][10]<T, <T as [TryFrom][84]<U>>::[Error][90]>

Performs the conversion.

[Source][91]§

### impl<T, U> [TryInto][92]<U> for T

where U: [TryFrom][84]<T>,

[Source][93]§

#### type [Error][94] = <U as [TryFrom][84]<T>>::[Error][90]

The type returned in the event of a conversion error.

[Source][95]§

#### fn [try_into][96](self) -> [Result][10]<U, <U as [TryFrom][84]<T>>::[Error][90]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][67]<Dispatch>,

Attaches the provided [`Subscriber`][97] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][98] [`Subscriber`][97] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../trait.Database.html (trait sqlx::Database)
   [5]: ../fn.query.html (fn sqlx::query)
   [6]: struct.Query.html (struct sqlx::query::Query)
   [7]: ../trait.Database.html#associatedtype.Arguments (type sqlx::Database::Arguments)
   [8]: ../trait.Encode.html (trait sqlx::Encode)
   [9]: ../trait.Type.html (trait sqlx::Type)
   [10]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [11]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [12]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [13]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [14]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [15]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [16]: struct.Query.html#method.try_bind (method sqlx::query::Query::try_bind)
   [17]: ../database/trait.HasStatementCache.html (trait sqlx::database::HasStatementCache)
   [18]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [19]: ../trait.IntoArguments.html (trait sqlx::IntoArguments)
   [20]: struct.Map.html (struct sqlx::query::Map)
   [21]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnMut.html (trait core::ops::function::FnMut)
   [22]: ../trait.Database.html#associatedtype.Row (type sqlx::Database::Row)
   [23]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [24]: struct.Query.html#method.try_map (method sqlx::query::Query::try_map)
   [25]: ../fn.query_as.html (fn sqlx::query_as)
   [26]: ../trait.FromRow.html (trait sqlx::FromRow)
   [27]: ../enum.Error.html (enum sqlx::Error)
   [28]: ../trait.Database.html#associatedtype.QueryResult (type sqlx::Database::QueryResult)
   [29]: ../trait.Executor.html (trait sqlx::Executor)
   [30]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [31]: ../enum.Either.html (enum sqlx::Either)
   [32]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [33]: ../enum.Error.html#variant.RowNotFound (variant sqlx::Error::RowNotFound)
   [34]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [35]: ../trait.Execute.html (trait sqlx::Execute)
   [36]: ../trait.Execute.html#tymethod.sql
   [37]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [38]: ../trait.Execute.html#tymethod.statement
   [39]: ../trait.Database.html#associatedtype.Statement (type sqlx::Database::Statement)
   [40]: ../trait.Execute.html#tymethod.take_arguments
   [41]: ../trait.Execute.html#tymethod.persistent
   [42]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [43]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [44]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [45]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [46]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [47]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [49]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [50]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [51]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [52]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [54]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [55]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [56]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [57]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [59]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [60]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [61]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [62]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [63]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [64]: super::Span::current()
   [65]: crate::Span
   [66]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [67]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [68]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [69]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [70]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [71]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [72]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [73]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [74]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [75]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [76]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [77]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [78]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [79]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [80]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [81]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [82]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [83]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [84]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [85]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [86]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [87]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [88]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [89]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [90]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [91]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [92]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [93]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [94]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [95]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [96]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [97]: super::Subscriber
   [98]: dispatcher#setting-the-default-subscriber

