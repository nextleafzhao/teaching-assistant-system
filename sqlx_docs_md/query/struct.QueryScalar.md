## QueryScalar

## [sqlx][1]0.8.6

## QueryScalar

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

# Struct QueryScalar Copy item path
[code]
    pub struct QueryScalar<'q, DB, O, A>
    
    where
        DB: [Database][4],
    
    { /* private fields */ }
[/code]

Expand description

A single SQL query as a prepared statement which extracts only the first column of each row. Returned by [`query_scalar()`][5].

## Implementations§

§

### impl<'q, DB, O> [QueryScalar][6]<'q, DB, O, <DB as [Database][4]>::[Arguments][7]<'q>>

where DB: [Database][4],

#### pub fn bind<T>( self, value: T, ) -> [QueryScalar][6]<'q, DB, O, <DB as [Database][4]>::[Arguments][7]<'q>>

where T: 'q + [Encode][8]<'q, DB> \+ [Type][9]<DB>,

Bind a value for use with this SQL query.

See [`Query::bind`][10].

§

### impl<'q, DB, O, A> [QueryScalar][6]<'q, DB, O, A>

where DB: [Database][4] \+ [HasStatementCache][11],

#### pub fn persistent(self, value: [bool][12]) -> [QueryScalar][6]<'q, DB, O, A>

If `true`, the statement will get prepared once and cached to the connection’s statement cache.

If queried once with the flag set to `true`, all subsequent queries matching the one with the flag will use the cached statement until the cache is cleared.

If `false`, the prepared statement will be closed after execution.

Default: `true`.

§

### impl<'q, DB, O, A> [QueryScalar][6]<'q, DB, O, A>

where DB: [Database][4], O: [Send][13] \+ [Unpin][14], A: 'q + [IntoArguments][15]<'q, DB>, [(O,)][16]: [Send][13] \+ [Unpin][14] \+ for<'r> [FromRow][17]<'r, <DB as [Database][4]>::[Row][18]>,

#### pub fn fetch<'e, 'c, E>( self, executor: E, ) -> [Pin][19]<[Box][20]<dyn Stream<Item = [Result][21]<O, [Error][22]>> \+ [Send][13] \+ 'e>>

where 'c: 'e, 'q: 'e, E: 'e + [Executor][23]<'c, Database = DB>, DB: 'e, A: 'e, O: 'e,

Execute the query and return the generated results as a stream.

#### pub fn fetch_many<'e, 'c, E>( self, executor: E, ) -> [Pin][19]<[Box][20]<dyn Stream<Item = [Result][21]<[Either][24]<<DB as [Database][4]>::[QueryResult][25], O>, [Error][22]>> \+ [Send][13] \+ 'e>>

where 'c: 'e, 'q: 'e, E: 'e + [Executor][23]<'c, Database = DB>, DB: 'e, A: 'e, O: 'e,

👎Deprecated: Only the SQLite driver supports multiple statements in one prepared statement and that behavior is deprecated. Use `sqlx::raw_sql()` instead. See https://github.com/launchbadge/sqlx/issues/3108 for discussion.

Execute multiple queries and return the generated results as a stream from each query, in a stream.

#### pub async fn fetch_all<'e, 'c, E>(self, executor: E) -> [Result][21]<[Vec][26]<O>, [Error][22]>

where 'c: 'e, 'q: 'e, E: 'e + [Executor][23]<'c, Database = DB>, DB: 'e, [(O,)][16]: 'e, A: 'e,

Execute the query and return all the resulting rows collected into a [`Vec`][26].

###### §Note: beware result set size.

This will attempt to collect the full result set of the query into memory.

To avoid exhausting available memory, ensure the result set has a known upper bound, e.g. using `LIMIT`.

#### pub async fn fetch_one<'e, 'c, E>(self, executor: E) -> [Result][21]<O, [Error][22]>

where 'c: 'e, 'q: 'e, E: 'e + [Executor][23]<'c, Database = DB>, DB: 'e, O: 'e, A: 'e,

Execute the query, returning the first row or [`Error::RowNotFound`][27] otherwise.

###### §Note: for best performance, ensure the query returns at most one row.

Depending on the driver implementation, if your query can return more than one row, it may lead to wasted CPU time and bandwidth on the database server.

Even when the driver implementation takes this into account, ensuring the query returns at most one row can result in a more optimal query plan.

If your query has a `WHERE` clause filtering a unique column by a single value, you’re good.

Otherwise, you might want to add `LIMIT 1` to your query.

#### pub async fn fetch_optional<'e, 'c, E>( self, executor: E, ) -> [Result][21]<[Option][28]<O>, [Error][22]>

where 'c: 'e, 'q: 'e, E: 'e + [Executor][23]<'c, Database = DB>, DB: 'e, O: 'e, A: 'e,

Execute the query, returning the first row or `None` otherwise.

###### §Note: for best performance, ensure the query returns at most one row.

Depending on the driver implementation, if your query can return more than one row, it may lead to wasted CPU time and bandwidth on the database server.

Even when the driver implementation takes this into account, ensuring the query returns at most one row can result in a more optimal query plan.

If your query has a `WHERE` clause filtering a unique column by a single value, you’re good.

Otherwise, you might want to add `LIMIT 1` to your query.

## Trait Implementations§

§

### impl<'q, DB, O, A> [Execute][29]<'q, DB> for [QueryScalar][6]<'q, DB, O, A>

where DB: [Database][4], O: [Send][13], A: [Send][13] \+ 'q + [IntoArguments][15]<'q, DB>,

§

#### fn [sql][30](&self) -> &'q [str][31]

Gets the SQL that will be executed.

§

#### fn [statement][32](&self) -> [Option][28]<&<DB as [Database][4]>::[Statement][33]<'q>>

Gets the previously cached statement, if available.

§

#### fn [take_arguments][34]( &mut self, ) -> [Result][21]<[Option][28]<<DB as [Database][4]>::[Arguments][7]<'q>>, [Box][20]<dyn [Error][35] \+ [Send][13] \+ [Sync][36]>>

Returns the arguments to be bound against the query string. [Read more][34]

§

#### fn [persistent][37](&self) -> [bool][12]

Returns `true` if the statement should be cached.

## Auto Trait Implementations§

§

### impl<'q, DB, O, A> [Freeze][38] for [QueryScalar][6]<'q, DB, O, A>

where A: [Freeze][38],

§

### impl<'q, DB, O, A> ![RefUnwindSafe][39] for [QueryScalar][6]<'q, DB, O, A>

§

### impl<'q, DB, O, A> [Send][13] for [QueryScalar][6]<'q, DB, O, A>

where O: [Send][13], A: [Send][13],

§

### impl<'q, DB, O, A> [Sync][36] for [QueryScalar][6]<'q, DB, O, A>

where DB: [Sync][36], O: [Sync][36], A: [Sync][36],

§

### impl<'q, DB, O, A> [Unpin][14] for [QueryScalar][6]<'q, DB, O, A>

where DB: [Unpin][14], O: [Unpin][14], A: [Unpin][14],

§

### impl<'q, DB, O, A> ![UnwindSafe][40] for [QueryScalar][6]<'q, DB, O, A>

## Blanket Implementations§

[Source][41]§

### impl<T> [Any][42] for T

where T: 'static + ?[Sized][43],

[Source][44]§

#### fn [type_id][45](&self) -> [TypeId][46]

Gets the `TypeId` of `self`. [Read more][45]

[Source][47]§

### impl<T> [Borrow][48]<T> for T

where T: ?[Sized][43],

[Source][49]§

#### fn [borrow][50](&self) -> [&T][51]

Immutably borrows from an owned value. [Read more][50]

[Source][52]§

### impl<T> [BorrowMut][53]<T> for T

where T: ?[Sized][43],

[Source][54]§

#### fn [borrow_mut][55](&mut self) -> [&mut T][51]

Mutably borrows from an owned value. [Read more][55]

[Source][56]§

### impl<T> [From][57]<T> for T

[Source][58]§

#### fn [from][59](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][60] [`Span`][61], returning an `Instrumented` wrapper. Read more

[Source][62]§

### impl<T, U> [Into][63]<U> for T

where U: [From][57]<T>,

[Source][64]§

#### fn [into][65](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][57]<T> for U` chooses to do.

[Source][66]§

### impl<T> [IntoEither][67] for T

[Source][68]§

#### fn [into_either][69](self, into_left: [bool][12]) -> [Either][24]<Self, Self> ⓘ

Converts `self` into a [`Left`][70] variant of [`Either<Self, Self>`][24] if `into_left` is `true`. Converts `self` into a [`Right`][71] variant of [`Either<Self, Self>`][24] otherwise. [Read more][69]

[Source][72]§

#### fn [into_either_with][73]<F>(self, into_left: F) -> [Either][24]<Self, Self> ⓘ

where F: [FnOnce][74](&Self) -> [bool][12],

Converts `self` into a [`Left`][70] variant of [`Either<Self, Self>`][24] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][71] variant of [`Either<Self, Self>`][24] otherwise. [Read more][73]

[Source][75]§

### impl<T> [Same][76] for T

[Source][77]§

#### type [Output][78] = T

Should always be `Self`

[Source][79]§

### impl<T, U> [TryFrom][80]<U> for T

where U: [Into][63]<T>,

[Source][81]§

#### type [Error][82] = [Infallible][83]

The type returned in the event of a conversion error.

[Source][84]§

#### fn [try_from][85](value: U) -> [Result][21]<T, <T as [TryFrom][80]<U>>::[Error][86]>

Performs the conversion.

[Source][87]§

### impl<T, U> [TryInto][88]<U> for T

where U: [TryFrom][80]<T>,

[Source][89]§

#### type [Error][90] = <U as [TryFrom][80]<T>>::[Error][86]

The type returned in the event of a conversion error.

[Source][91]§

#### fn [try_into][92](self) -> [Result][21]<U, <U as [TryFrom][80]<T>>::[Error][86]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][63]<Dispatch>,

Attaches the provided [`Subscriber`][93] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][94] [`Subscriber`][93] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../trait.Database.html (trait sqlx::Database)
   [5]: ../fn.query_scalar.html (fn sqlx::query_scalar)
   [6]: struct.QueryScalar.html (struct sqlx::query::QueryScalar)
   [7]: ../trait.Database.html#associatedtype.Arguments (type sqlx::Database::Arguments)
   [8]: ../trait.Encode.html (trait sqlx::Encode)
   [9]: ../trait.Type.html (trait sqlx::Type)
   [10]: struct.Query.html#method.bind (method sqlx::query::Query::bind)
   [11]: ../database/trait.HasStatementCache.html (trait sqlx::database::HasStatementCache)
   [12]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [13]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [14]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [15]: ../trait.IntoArguments.html (trait sqlx::IntoArguments)
   [16]: https://doc.rust-lang.org/1.94.1/std/primitive.tuple.html
   [17]: ../trait.FromRow.html (trait sqlx::FromRow)
   [18]: ../trait.Database.html#associatedtype.Row (type sqlx::Database::Row)
   [19]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [20]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [21]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [22]: ../enum.Error.html (enum sqlx::Error)
   [23]: ../trait.Executor.html (trait sqlx::Executor)
   [24]: ../enum.Either.html (enum sqlx::Either)
   [25]: ../trait.Database.html#associatedtype.QueryResult (type sqlx::Database::QueryResult)
   [26]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [27]: ../enum.Error.html#variant.RowNotFound (variant sqlx::Error::RowNotFound)
   [28]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [29]: ../trait.Execute.html (trait sqlx::Execute)
   [30]: ../trait.Execute.html#tymethod.sql
   [31]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [32]: ../trait.Execute.html#tymethod.statement
   [33]: ../trait.Database.html#associatedtype.Statement (type sqlx::Database::Statement)
   [34]: ../trait.Execute.html#tymethod.take_arguments
   [35]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [36]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [37]: ../trait.Execute.html#tymethod.persistent
   [38]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [39]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [40]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [41]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [42]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [43]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [44]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [45]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [46]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [47]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [48]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [49]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [50]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [51]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [52]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [53]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [54]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [55]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [56]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [57]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [59]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [60]: super::Span::current()
   [61]: crate::Span
   [62]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [63]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [64]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [65]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [66]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [67]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [68]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [69]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [70]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [71]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [72]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [73]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [74]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [75]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [76]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [77]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [78]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [79]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [80]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [81]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [82]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [83]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [84]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [85]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [86]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [87]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [88]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [89]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [90]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [91]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [92]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [93]: super::Subscriber
   [94]: dispatcher#setting-the-default-subscriber

