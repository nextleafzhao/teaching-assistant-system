## Map

## [sqlx][1]0.8.6

## Map

### Methods

  * fetch
  * fetch_all
  * fetch_many
  * fetch_one
  * fetch_optional
  * map
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

# Struct Map Copy item path
[code]
    pub struct Map<'q, DB, F, A>
    
    where
        DB: [Database][4],
    
    { /* private fields */ }
[/code]

Expand description

A single SQL query that will map its results to an owned Rust type.

Executes as a prepared statement.

Returned by [`Query::try_map`][5], `query!()`, etc. Has most of the same methods as [`Query`][6] but the return types are changed to reflect the mapping. However, there is no equivalent of [`Query::execute`][7] as it doesn’t make sense to map the result type and then ignore it.

[`Query::bind`][8] is also omitted; stylistically we recommend placing your `.bind()` calls before `.try_map()`. This is also to prevent adding superfluous binds to the result of `query!()` et al.

## Implementations§

§

### impl<'q, DB, F, O, A> [Map][9]<'q, DB, F, A>

where DB: [Database][4], F: [FnMut][10](<DB as [Database][4]>::[Row][11]) -> [Result][12]<O, [Error][13]> \+ [Send][14], O: [Send][14] \+ [Unpin][15], A: 'q + [Send][14] \+ [IntoArguments][16]<'q, DB>,

#### pub fn map<G, P>( self, g: G, ) -> [Map][9]<'q, DB, impl [FnMut][10](<DB as [Database][4]>::[Row][11]) + [Send][14], A>

where G: [FnMut][10](O) -> P + [Send][14], P: [Unpin][15],

Map each row in the result to another type.

See [`try_map`][17] for a fallible version of this method.

The [`query_as`][18] method will construct a mapped query using a [`FromRow`][19] implementation.

#### pub fn try_map<G, P>( self, g: G, ) -> [Map][9]<'q, DB, impl [FnMut][10](<DB as [Database][4]>::[Row][11]) + [Send][14], A>

where G: [FnMut][10](O) -> [Result][12]<P, [Error][13]> \+ [Send][14], P: [Unpin][15],

Map each row in the result to another type.

The [`query_as`][18] method will construct a mapped query using a [`FromRow`][19] implementation.

#### pub fn fetch<'e, 'c, E>( self, executor: E, ) -> [Pin][20]<[Box][21]<dyn Stream<Item = [Result][12]<O, [Error][13]>> \+ [Send][14] \+ 'e>>

where 'c: 'e, 'q: 'e, E: 'e + [Executor][22]<'c, Database = DB>, DB: 'e, F: 'e, O: 'e,

Execute the query and return the generated results as a stream.

#### pub fn fetch_many<'e, 'c, E>( self, executor: E, ) -> [Pin][20]<[Box][21]<dyn Stream<Item = [Result][12]<[Either][23]<<DB as [Database][4]>::[QueryResult][24], O>, [Error][13]>> \+ [Send][14] \+ 'e>>

where 'c: 'e, 'q: 'e, E: 'e + [Executor][22]<'c, Database = DB>, DB: 'e, F: 'e, O: 'e,

👎Deprecated: Only the SQLite driver supports multiple statements in one prepared statement and that behavior is deprecated. Use `sqlx::raw_sql()` instead.

Execute multiple queries and return the generated results as a stream from each query, in a stream.

#### pub async fn fetch_all<'e, 'c, E>(self, executor: E) -> [Result][12]<[Vec][25]<O>, [Error][13]>

where 'c: 'e, 'q: 'e, E: 'e + [Executor][22]<'c, Database = DB>, DB: 'e, F: 'e, O: 'e,

Execute the query and return all the resulting rows collected into a [`Vec`][25].

###### §Note: beware result set size.

This will attempt to collect the full result set of the query into memory.

To avoid exhausting available memory, ensure the result set has a known upper bound, e.g. using `LIMIT`.

#### pub async fn fetch_one<'e, 'c, E>(self, executor: E) -> [Result][12]<O, [Error][13]>

where 'c: 'e, 'q: 'e, E: 'e + [Executor][22]<'c, Database = DB>, DB: 'e, F: 'e, O: 'e,

Execute the query, returning the first row or [`Error::RowNotFound`][26] otherwise.

###### §Note: for best performance, ensure the query returns at most one row.

Depending on the driver implementation, if your query can return more than one row, it may lead to wasted CPU time and bandwidth on the database server.

Even when the driver implementation takes this into account, ensuring the query returns at most one row can result in a more optimal query plan.

If your query has a `WHERE` clause filtering a unique column by a single value, you’re good.

Otherwise, you might want to add `LIMIT 1` to your query.

#### pub async fn fetch_optional<'e, 'c, E>( self, executor: E, ) -> [Result][12]<[Option][27]<O>, [Error][13]>

where 'c: 'e, 'q: 'e, E: 'e + [Executor][22]<'c, Database = DB>, DB: 'e, F: 'e, O: 'e,

Execute the query, returning the first row or `None` otherwise.

###### §Note: for best performance, ensure the query returns at most one row.

Depending on the driver implementation, if your query can return more than one row, it may lead to wasted CPU time and bandwidth on the database server.

Even when the driver implementation takes this into account, ensuring the query returns at most one row can result in a more optimal query plan.

If your query has a `WHERE` clause filtering a unique column by a single value, you’re good.

Otherwise, you might want to add `LIMIT 1` to your query.

## Trait Implementations§

§

### impl<'q, DB, F, A> [Execute][28]<'q, DB> for [Map][9]<'q, DB, F, A>

where F: [Send][14], A: [Send][14] \+ [IntoArguments][16]<'q, DB>, DB: [Database][4],

§

#### fn [sql][29](&self) -> &'q [str][30]

Gets the SQL that will be executed.

§

#### fn [statement][31](&self) -> [Option][27]<&<DB as [Database][4]>::[Statement][32]<'q>>

Gets the previously cached statement, if available.

§

#### fn [take_arguments][33]( &mut self, ) -> [Result][12]<[Option][27]<<DB as [Database][4]>::[Arguments][34]<'q>>, [Box][21]<dyn [Error][35] \+ [Send][14] \+ [Sync][36]>>

Returns the arguments to be bound against the query string. [Read more][33]

§

#### fn [persistent][37](&self) -> [bool][38]

Returns `true` if the statement should be cached.

## Auto Trait Implementations§

§

### impl<'q, DB, F, A> [Freeze][39] for [Map][9]<'q, DB, F, A>

where F: [Freeze][39], A: [Freeze][39],

§

### impl<'q, DB, F, A> ![RefUnwindSafe][40] for [Map][9]<'q, DB, F, A>

§

### impl<'q, DB, F, A> [Send][14] for [Map][9]<'q, DB, F, A>

where F: [Send][14], A: [Send][14],

§

### impl<'q, DB, F, A> [Sync][36] for [Map][9]<'q, DB, F, A>

where F: [Sync][36], DB: [Sync][36], A: [Sync][36],

§

### impl<'q, DB, F, A> [Unpin][15] for [Map][9]<'q, DB, F, A>

where F: [Unpin][15], DB: [Unpin][15], A: [Unpin][15],

§

### impl<'q, DB, F, A> ![UnwindSafe][41] for [Map][9]<'q, DB, F, A>

## Blanket Implementations§

[Source][42]§

### impl<T> [Any][43] for T

where T: 'static + ?[Sized][44],

[Source][45]§

#### fn [type_id][46](&self) -> [TypeId][47]

Gets the `TypeId` of `self`. [Read more][46]

[Source][48]§

### impl<T> [Borrow][49]<T> for T

where T: ?[Sized][44],

[Source][50]§

#### fn [borrow][51](&self) -> [&T][52]

Immutably borrows from an owned value. [Read more][51]

[Source][53]§

### impl<T> [BorrowMut][54]<T> for T

where T: ?[Sized][44],

[Source][55]§

#### fn [borrow_mut][56](&mut self) -> [&mut T][52]

Mutably borrows from an owned value. [Read more][56]

[Source][57]§

### impl<T> [From][58]<T> for T

[Source][59]§

#### fn [from][60](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][61] [`Span`][62], returning an `Instrumented` wrapper. Read more

[Source][63]§

### impl<T, U> [Into][64]<U> for T

where U: [From][58]<T>,

[Source][65]§

#### fn [into][66](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][58]<T> for U` chooses to do.

[Source][67]§

### impl<T> [IntoEither][68] for T

[Source][69]§

#### fn [into_either][70](self, into_left: [bool][38]) -> [Either][23]<Self, Self> ⓘ

Converts `self` into a [`Left`][71] variant of [`Either<Self, Self>`][23] if `into_left` is `true`. Converts `self` into a [`Right`][72] variant of [`Either<Self, Self>`][23] otherwise. [Read more][70]

[Source][73]§

#### fn [into_either_with][74]<F>(self, into_left: F) -> [Either][23]<Self, Self> ⓘ

where F: [FnOnce][75](&Self) -> [bool][38],

Converts `self` into a [`Left`][71] variant of [`Either<Self, Self>`][23] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][72] variant of [`Either<Self, Self>`][23] otherwise. [Read more][74]

[Source][76]§

### impl<T> [Same][77] for T

[Source][78]§

#### type [Output][79] = T

Should always be `Self`

[Source][80]§

### impl<T, U> [TryFrom][81]<U> for T

where U: [Into][64]<T>,

[Source][82]§

#### type [Error][83] = [Infallible][84]

The type returned in the event of a conversion error.

[Source][85]§

#### fn [try_from][86](value: U) -> [Result][12]<T, <T as [TryFrom][81]<U>>::[Error][87]>

Performs the conversion.

[Source][88]§

### impl<T, U> [TryInto][89]<U> for T

where U: [TryFrom][81]<T>,

[Source][90]§

#### type [Error][91] = <U as [TryFrom][81]<T>>::[Error][87]

The type returned in the event of a conversion error.

[Source][92]§

#### fn [try_into][93](self) -> [Result][12]<U, <U as [TryFrom][81]<T>>::[Error][87]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][64]<Dispatch>,

Attaches the provided [`Subscriber`][94] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][95] [`Subscriber`][94] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../trait.Database.html (trait sqlx::Database)
   [5]: struct.Query.html#method.try_map (method sqlx::query::Query::try_map)
   [6]: struct.Query.html (struct sqlx::query::Query)
   [7]: struct.Query.html#method.execute (method sqlx::query::Query::execute)
   [8]: struct.Query.html#method.bind (method sqlx::query::Query::bind)
   [9]: struct.Map.html (struct sqlx::query::Map)
   [10]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnMut.html (trait core::ops::function::FnMut)
   [11]: ../trait.Database.html#associatedtype.Row (type sqlx::Database::Row)
   [12]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [13]: ../enum.Error.html (enum sqlx::Error)
   [14]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [15]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [16]: ../trait.IntoArguments.html (trait sqlx::IntoArguments)
   [17]: struct.Map.html#method.try_map (method sqlx::query::Map::try_map)
   [18]: ../fn.query_as.html (fn sqlx::query_as)
   [19]: ../trait.FromRow.html (trait sqlx::FromRow)
   [20]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [21]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
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
   [34]: ../trait.Database.html#associatedtype.Arguments (type sqlx::Database::Arguments)
   [35]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [36]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [37]: ../trait.Execute.html#tymethod.persistent
   [38]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [39]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [40]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [41]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [42]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [43]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [44]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [45]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [46]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [47]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [49]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [50]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [51]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [52]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [53]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [54]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [56]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [57]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [58]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [59]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [60]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [61]: super::Span::current()
   [62]: crate::Span
   [63]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [65]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [67]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [68]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [69]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [70]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [71]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [72]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [73]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [74]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [75]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [76]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [77]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [78]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [79]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [80]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [81]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [82]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [83]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [84]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [85]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [86]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [87]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [88]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [89]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [90]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [91]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [92]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [93]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [94]: super::Subscriber
   [95]: dispatcher#setting-the-default-subscriber

