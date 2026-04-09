## QueryAs

## [sqlx][1]0.8.6

## QueryAs

### Methods

  * bind
  * fetch
  * fetch_all
  * fetch_many
  * fetch_one
  * fetch_optional
  * persistent



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

# Struct QueryAs Copy item path
[code]
    pub struct QueryAs<'q, DB, O, A>
    
    where
        DB: [Database][4],
    
    { /* private fields */ }
[/code]

Expand description

A single SQL query as a prepared statement, mapping results using [`FromRow`][5]. Returned by [`query_as()`][6].

## Implementations§

§

### impl<'q, DB, O> [QueryAs][7]<'q, DB, O, <DB as [Database][4]>::[Arguments][8]<'q>>

where DB: [Database][4],

#### pub fn bind<T>( self, value: T, ) -> [QueryAs][7]<'q, DB, O, <DB as [Database][4]>::[Arguments][8]<'q>>

where T: 'q + [Encode][9]<'q, DB> \+ [Type][10]<DB>,

Bind a value for use with this SQL query.

See [`Query::bind`][11].

§

### impl<'q, DB, O, A> [QueryAs][7]<'q, DB, O, A>

where DB: [Database][4] \+ [HasStatementCache][12],

#### pub fn persistent(self, value: [bool][13]) -> [QueryAs][7]<'q, DB, O, A>

If `true`, the statement will get prepared once and cached to the connection’s statement cache.

If queried once with the flag set to `true`, all subsequent queries matching the one with the flag will use the cached statement until the cache is cleared.

If `false`, the prepared statement will be closed after execution.

Default: `true`.

§

### impl<'q, DB, O, A> [QueryAs][7]<'q, DB, O, A>

where DB: [Database][4], A: 'q + [IntoArguments][14]<'q, DB>, O: [Send][15] \+ [Unpin][16] \+ for<'r> [FromRow][5]<'r, <DB as [Database][4]>::[Row][17]>,

#### pub fn fetch<'e, 'c, E>( self, executor: E, ) -> [Pin][18]<[Box][19]<dyn Stream<Item = [Result][20]<O, [Error][21]>> \+ [Send][15] \+ 'e>>

where 'c: 'e, 'q: 'e, E: 'e + [Executor][22]<'c, Database = DB>, DB: 'e, O: 'e, A: 'e,

Execute the query and return the generated results as a stream.

#### pub fn fetch_many<'e, 'c, E>( self, executor: E, ) -> [Pin][18]<[Box][19]<dyn Stream<Item = [Result][20]<[Either][23]<<DB as [Database][4]>::[QueryResult][24], O>, [Error][21]>> \+ [Send][15] \+ 'e>>

where 'c: 'e, 'q: 'e, E: 'e + [Executor][22]<'c, Database = DB>, DB: 'e, O: 'e, A: 'e,

👎Deprecated: Only the SQLite driver supports multiple statements in one prepared statement and that behavior is deprecated. Use `sqlx::raw_sql()` instead. See https://github.com/launchbadge/sqlx/issues/3108 for discussion.

Execute multiple queries and return the generated results as a stream from each query, in a stream.

#### pub async fn fetch_all<'e, 'c, E>(self, executor: E) -> [Result][20]<[Vec][25]<O>, [Error][21]>

where 'c: 'e, 'q: 'e, E: 'e + [Executor][22]<'c, Database = DB>, DB: 'e, O: 'e, A: 'e,

Execute the query and return all the resulting rows collected into a [`Vec`][25].

###### §Note: beware result set size.

This will attempt to collect the full result set of the query into memory.

To avoid exhausting available memory, ensure the result set has a known upper bound, e.g. using `LIMIT`.

#### pub async fn fetch_one<'e, 'c, E>(self, executor: E) -> [Result][20]<O, [Error][21]>

where 'c: 'e, 'q: 'e, E: 'e + [Executor][22]<'c, Database = DB>, DB: 'e, O: 'e, A: 'e,

Execute the query, returning the first row or [`Error::RowNotFound`][26] otherwise.

###### §Note: for best performance, ensure the query returns at most one row.

Depending on the driver implementation, if your query can return more than one row, it may lead to wasted CPU time and bandwidth on the database server.

Even when the driver implementation takes this into account, ensuring the query returns at most one row can result in a more optimal query plan.

If your query has a `WHERE` clause filtering a unique column by a single value, you’re good.

Otherwise, you might want to add `LIMIT 1` to your query.

#### pub async fn fetch_optional<'e, 'c, E>( self, executor: E, ) -> [Result][20]<[Option][27]<O>, [Error][21]>

where 'c: 'e, 'q: 'e, E: 'e + [Executor][22]<'c, Database = DB>, DB: 'e, O: 'e, A: 'e,

Execute the query, returning the first row or `None` otherwise.

###### §Note: for best performance, ensure the query returns at most one row.

Depending on the driver implementation, if your query can return more than one row, it may lead to wasted CPU time and bandwidth on the database server.

Even when the driver implementation takes this into account, ensuring the query returns at most one row can result in a more optimal query plan.

If your query has a `WHERE` clause filtering a unique column by a single value, you’re good.

Otherwise, you might want to add `LIMIT 1` to your query.

## Trait Implementations§

§

### impl<'q, DB, O, A> [Execute][28]<'q, DB> for [QueryAs][7]<'q, DB, O, A>

where O: [Send][15], A: [Send][15] \+ 'q + [IntoArguments][14]<'q, DB>, DB: [Database][4],

§

#### fn [sql][29](&self) -> &'q [str][30]

Gets the SQL that will be executed.

§

#### fn [statement][31](&self) -> [Option][27]<&<DB as [Database][4]>::[Statement][32]<'q>>

Gets the previously cached statement, if available.

§

#### fn [take_arguments][33]( &mut self, ) -> [Result][20]<[Option][27]<<DB as [Database][4]>::[Arguments][8]<'q>>, [Box][19]<dyn [Error][34] \+ [Send][15] \+ [Sync][35]>>

Returns the arguments to be bound against the query string. [Read more][33]

§

#### fn [persistent][36](&self) -> [bool][13]

Returns `true` if the statement should be cached.

## Auto Trait Implementations§

§

### impl<'q, DB, O, A> [Freeze][37] for [QueryAs][7]<'q, DB, O, A>

where A: [Freeze][37],

§

### impl<'q, DB, O, A> ![RefUnwindSafe][38] for [QueryAs][7]<'q, DB, O, A>

§

### impl<'q, DB, O, A> [Send][15] for [QueryAs][7]<'q, DB, O, A>

where O: [Send][15], A: [Send][15],

§

### impl<'q, DB, O, A> [Sync][35] for [QueryAs][7]<'q, DB, O, A>

where O: [Sync][35], DB: [Sync][35], A: [Sync][35],

§

### impl<'q, DB, O, A> [Unpin][16] for [QueryAs][7]<'q, DB, O, A>

where O: [Unpin][16], DB: [Unpin][16], A: [Unpin][16],

§

### impl<'q, DB, O, A> ![UnwindSafe][39] for [QueryAs][7]<'q, DB, O, A>

## Blanket Implementations§

[Source][40]§

### impl<T> [Any][41] for T

where T: 'static + ?[Sized][42],

[Source][43]§

#### fn [type_id][44](&self) -> [TypeId][45]

Gets the `TypeId` of `self`. [Read more][44]

[Source][46]§

### impl<T> [Borrow][47]<T> for T

where T: ?[Sized][42],

[Source][48]§

#### fn [borrow][49](&self) -> [&T][50]

Immutably borrows from an owned value. [Read more][49]

[Source][51]§

### impl<T> [BorrowMut][52]<T> for T

where T: ?[Sized][42],

[Source][53]§

#### fn [borrow_mut][54](&mut self) -> [&mut T][50]

Mutably borrows from an owned value. [Read more][54]

[Source][55]§

### impl<T> [From][56]<T> for T

[Source][57]§

#### fn [from][58](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][59] [`Span`][60], returning an `Instrumented` wrapper. Read more

[Source][61]§

### impl<T, U> [Into][62]<U> for T

where U: [From][56]<T>,

[Source][63]§

#### fn [into][64](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][56]<T> for U` chooses to do.

[Source][65]§

### impl<T> [IntoEither][66] for T

[Source][67]§

#### fn [into_either][68](self, into_left: [bool][13]) -> [Either][23]<Self, Self> ⓘ

Converts `self` into a [`Left`][69] variant of [`Either<Self, Self>`][23] if `into_left` is `true`. Converts `self` into a [`Right`][70] variant of [`Either<Self, Self>`][23] otherwise. [Read more][68]

[Source][71]§

#### fn [into_either_with][72]<F>(self, into_left: F) -> [Either][23]<Self, Self> ⓘ

where F: [FnOnce][73](&Self) -> [bool][13],

Converts `self` into a [`Left`][69] variant of [`Either<Self, Self>`][23] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][70] variant of [`Either<Self, Self>`][23] otherwise. [Read more][72]

[Source][74]§

### impl<T> [Same][75] for T

[Source][76]§

#### type [Output][77] = T

Should always be `Self`

[Source][78]§

### impl<T, U> [TryFrom][79]<U> for T

where U: [Into][62]<T>,

[Source][80]§

#### type [Error][81] = [Infallible][82]

The type returned in the event of a conversion error.

[Source][83]§

#### fn [try_from][84](value: U) -> [Result][20]<T, <T as [TryFrom][79]<U>>::[Error][85]>

Performs the conversion.

[Source][86]§

### impl<T, U> [TryInto][87]<U> for T

where U: [TryFrom][79]<T>,

[Source][88]§

#### type [Error][89] = <U as [TryFrom][79]<T>>::[Error][85]

The type returned in the event of a conversion error.

[Source][90]§

#### fn [try_into][91](self) -> [Result][20]<U, <U as [TryFrom][79]<T>>::[Error][85]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][62]<Dispatch>,

Attaches the provided [`Subscriber`][92] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][93] [`Subscriber`][92] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../trait.Database.html (trait sqlx::Database)
   [5]: ../trait.FromRow.html (trait sqlx::FromRow)
   [6]: ../fn.query_as.html (fn sqlx::query_as)
   [7]: struct.QueryAs.html (struct sqlx::query::QueryAs)
   [8]: ../trait.Database.html#associatedtype.Arguments (type sqlx::Database::Arguments)
   [9]: ../trait.Encode.html (trait sqlx::Encode)
   [10]: ../trait.Type.html (trait sqlx::Type)
   [11]: struct.Query.html#method.bind (method sqlx::query::Query::bind)
   [12]: ../database/trait.HasStatementCache.html (trait sqlx::database::HasStatementCache)
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [14]: ../trait.IntoArguments.html (trait sqlx::IntoArguments)
   [15]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [16]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [17]: ../trait.Database.html#associatedtype.Row (type sqlx::Database::Row)
   [18]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [19]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [20]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [21]: ../enum.Error.html (enum sqlx::Error)
   [22]: ../trait.Executor.html (trait sqlx::Executor)
   [23]: ../enum.Either.html (enum sqlx::Either)
   [24]: ../trait.Database.html#associatedtype.QueryResult (type sqlx::Database::QueryResult)
   [25]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [26]: ../enum.Error.html#variant.RowNotFound (variant sqlx::Error::RowNotFound)
   [27]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [28]: ../trait.Execute.html (trait sqlx::Execute)
   [29]: ../trait.Execute.html#tymethod.sql
   [30]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [31]: ../trait.Execute.html#tymethod.statement
   [32]: ../trait.Database.html#associatedtype.Statement (type sqlx::Database::Statement)
   [33]: ../trait.Execute.html#tymethod.take_arguments
   [34]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [35]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [36]: ../trait.Execute.html#tymethod.persistent
   [37]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [38]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [39]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [40]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [41]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [42]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [44]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [45]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [47]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [49]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [50]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [51]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [52]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [54]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [55]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [56]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [57]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [58]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [59]: super::Span::current()
   [60]: crate::Span
   [61]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [62]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [63]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [65]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [66]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [67]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [68]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [69]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [70]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [71]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [72]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [73]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [74]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [75]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [76]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [77]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [78]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [79]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [80]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [81]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [82]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [83]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [84]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [85]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [86]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [87]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [88]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [89]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [90]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [91]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [92]: super::Subscriber
   [93]: dispatcher#setting-the-default-subscriber

