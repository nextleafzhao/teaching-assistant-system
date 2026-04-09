## RawSql

## [sqlx][1]0.8.6

## RawSql

### Methods

  * execute
  * execute_many
  * fetch
  * fetch_all
  * fetch_many
  * fetch_one
  * fetch_optional



### Trait Implementations

  * Execute<'q, DB>



### Auto Trait Implementations

  * Freeze
  * RefUnwindSafe
  * Send
  * Sync
  * Unpin
  * UnwindSafe



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

# Struct RawSql Copy item path
[code]
    pub struct RawSql<'q>(/* private fields */);
[/code]

Expand description

One or more raw SQL statements, separated by semicolons (`;`).

See [`raw_sql()`][3] for details.

## Implementations§

§

### impl<'q> [RawSql][4]<'q>

#### pub async fn execute<'e, E>( self, executor: E, ) -> [Result][5]<<<E as [Executor][6]<'e>>::[Database][7] as [Database][8]>::[QueryResult][9], [Error][10]>

where 'q: 'e, E: [Executor][6]<'e>,

Execute the SQL string and return the total number of rows affected.

#### pub fn execute_many<'e, E>( self, executor: E, ) -> [Pin][11]<[Box][12]<dyn Stream<Item = [Result][5]<<<E as [Executor][6]<'e>>::[Database][7] as [Database][8]>::[QueryResult][9], [Error][10]>> \+ [Send][13] \+ 'e>>

where 'q: 'e, E: [Executor][6]<'e>,

Execute the SQL string. Returns a stream which gives the number of rows affected for each statement in the string.

#### pub fn fetch<'e, E>( self, executor: E, ) -> [Pin][11]<[Box][12]<dyn Stream<Item = [Result][5]<<<E as [Executor][6]<'e>>::[Database][7] as [Database][8]>::[Row][14], [Error][10]>> \+ [Send][13] \+ 'e>>

where 'q: 'e, E: [Executor][6]<'e>,

Execute the SQL string and return the generated results as a stream.

If the string contains multiple statements, their results will be concatenated together.

#### pub fn fetch_many<'e, E>( self, executor: E, ) -> [Pin][11]<[Box][12]<dyn Stream<Item = [Result][5]<[Either][15]<<<E as [Executor][6]<'e>>::[Database][7] as [Database][8]>::[QueryResult][9], <<E as [Executor][6]<'e>>::[Database][7] as [Database][8]>::[Row][14]>, [Error][10]>> \+ [Send][13] \+ 'e>>

where 'q: 'e, E: [Executor][6]<'e>,

Execute the SQL string and return the generated results as a stream.

For each query in the stream, any generated rows are returned first, then the `QueryResult` with the number of rows affected.

#### pub async fn fetch_all<'e, E>( self, executor: E, ) -> [Result][5]<[Vec][16]<<<E as [Executor][6]<'e>>::[Database][7] as [Database][8]>::[Row][14]>, [Error][10]>

where 'q: 'e, E: [Executor][6]<'e>,

Execute the SQL string and return all the resulting rows collected into a [`Vec`][16].

###### §Note: beware result set size.

This will attempt to collect the full result set of the query into memory.

To avoid exhausting available memory, ensure the result set has a known upper bound, e.g. using `LIMIT`.

#### pub async fn fetch_one<'e, E>( self, executor: E, ) -> [Result][5]<<<E as [Executor][6]<'e>>::[Database][7] as [Database][8]>::[Row][14], [Error][10]>

where 'q: 'e, E: [Executor][6]<'e>,

Execute the SQL string, returning the first row or [`Error::RowNotFound`][17] otherwise.

###### §Note: for best performance, ensure the query returns at most one row.

Depending on the driver implementation, if your query can return more than one row, it may lead to wasted CPU time and bandwidth on the database server.

Even when the driver implementation takes this into account, ensuring the query returns at most one row can result in a more optimal query plan.

If your query has a `WHERE` clause filtering a unique column by a single value, you’re good.

Otherwise, you might want to add `LIMIT 1` to your query.

#### pub async fn fetch_optional<'e, E>( self, executor: E, ) -> [Result][5]<<<E as [Executor][6]<'e>>::[Database][7] as [Database][8]>::[Row][14], [Error][10]>

where 'q: 'e, E: [Executor][6]<'e>,

Execute the SQL string, returning the first row or [`None`][18] otherwise.

###### §Note: for best performance, ensure the query returns at most one row.

Depending on the driver implementation, if your query can return more than one row, it may lead to wasted CPU time and bandwidth on the database server.

Even when the driver implementation takes this into account, ensuring the query returns at most one row can result in a more optimal query plan.

If your query has a `WHERE` clause filtering a unique column by a single value, you’re good.

Otherwise, you might want to add `LIMIT 1` to your query.

## Trait Implementations§

§

### impl<'q, DB> [Execute][19]<'q, DB> for [RawSql][4]<'q>

where DB: [Database][8],

§

#### fn [sql][20](&self) -> &'q [str][21]

Gets the SQL that will be executed.

§

#### fn [statement][22](&self) -> [Option][23]<&<DB as [Database][8]>::[Statement][24]<'q>>

Gets the previously cached statement, if available.

§

#### fn [take_arguments][25]( &mut self, ) -> [Result][5]<[Option][23]<<DB as [Database][8]>::[Arguments][26]<'q>>, [Box][12]<dyn [Error][27] \+ [Send][13] \+ [Sync][28]>>

Returns the arguments to be bound against the query string. [Read more][25]

§

#### fn [persistent][29](&self) -> [bool][30]

Returns `true` if the statement should be cached.

## Auto Trait Implementations§

§

### impl<'q> [Freeze][31] for [RawSql][4]<'q>

§

### impl<'q> [RefUnwindSafe][32] for [RawSql][4]<'q>

§

### impl<'q> [Send][13] for [RawSql][4]<'q>

§

### impl<'q> [Sync][28] for [RawSql][4]<'q>

§

### impl<'q> [Unpin][33] for [RawSql][4]<'q>

§

### impl<'q> [UnwindSafe][34] for [RawSql][4]<'q>

## Blanket Implementations§

[Source][35]§

### impl<T> [Any][36] for T

where T: 'static + ?[Sized][37],

[Source][38]§

#### fn [type_id][39](&self) -> [TypeId][40]

Gets the `TypeId` of `self`. [Read more][39]

[Source][41]§

### impl<T> [Borrow][42]<T> for T

where T: ?[Sized][37],

[Source][43]§

#### fn [borrow][44](&self) -> [&T][45]

Immutably borrows from an owned value. [Read more][44]

[Source][46]§

### impl<T> [BorrowMut][47]<T> for T

where T: ?[Sized][37],

[Source][48]§

#### fn [borrow_mut][49](&mut self) -> [&mut T][45]

Mutably borrows from an owned value. [Read more][49]

[Source][50]§

### impl<T> [From][51]<T> for T

[Source][52]§

#### fn [from][53](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][54] [`Span`][55], returning an `Instrumented` wrapper. Read more

[Source][56]§

### impl<T, U> [Into][57]<U> for T

where U: [From][51]<T>,

[Source][58]§

#### fn [into][59](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][51]<T> for U` chooses to do.

[Source][60]§

### impl<T> [IntoEither][61] for T

[Source][62]§

#### fn [into_either][63](self, into_left: [bool][30]) -> [Either][15]<Self, Self> ⓘ

Converts `self` into a [`Left`][64] variant of [`Either<Self, Self>`][15] if `into_left` is `true`. Converts `self` into a [`Right`][65] variant of [`Either<Self, Self>`][15] otherwise. [Read more][63]

[Source][66]§

#### fn [into_either_with][67]<F>(self, into_left: F) -> [Either][15]<Self, Self> ⓘ

where F: [FnOnce][68](&Self) -> [bool][30],

Converts `self` into a [`Left`][64] variant of [`Either<Self, Self>`][15] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][65] variant of [`Either<Self, Self>`][15] otherwise. [Read more][67]

[Source][69]§

### impl<T> [Same][70] for T

[Source][71]§

#### type [Output][72] = T

Should always be `Self`

[Source][73]§

### impl<T, U> [TryFrom][74]<U> for T

where U: [Into][57]<T>,

[Source][75]§

#### type [Error][76] = [Infallible][77]

The type returned in the event of a conversion error.

[Source][78]§

#### fn [try_from][79](value: U) -> [Result][5]<T, <T as [TryFrom][74]<U>>::[Error][80]>

Performs the conversion.

[Source][81]§

### impl<T, U> [TryInto][82]<U> for T

where U: [TryFrom][74]<T>,

[Source][83]§

#### type [Error][84] = <U as [TryFrom][74]<T>>::[Error][80]

The type returned in the event of a conversion error.

[Source][85]§

#### fn [try_into][86](self) -> [Result][5]<U, <U as [TryFrom][74]<T>>::[Error][80]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][57]<Dispatch>,

Attaches the provided [`Subscriber`][87] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][88] [`Subscriber`][87] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: fn.raw_sql.html (fn sqlx::raw_sql)
   [4]: struct.RawSql.html (struct sqlx::RawSql)
   [5]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [6]: trait.Executor.html (trait sqlx::Executor)
   [7]: trait.Executor.html#associatedtype.Database (type sqlx::Executor::Database)
   [8]: trait.Database.html (trait sqlx::Database)
   [9]: trait.Database.html#associatedtype.QueryResult (type sqlx::Database::QueryResult)
   [10]: enum.Error.html (enum sqlx::Error)
   [11]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [12]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [13]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [14]: trait.Database.html#associatedtype.Row (type sqlx::Database::Row)
   [15]: enum.Either.html (enum sqlx::Either)
   [16]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [17]: enum.Error.html#variant.RowNotFound (variant sqlx::Error::RowNotFound)
   [18]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html#variant.None (variant core::option::Option::None)
   [19]: trait.Execute.html (trait sqlx::Execute)
   [20]: trait.Execute.html#tymethod.sql
   [21]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [22]: trait.Execute.html#tymethod.statement
   [23]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [24]: trait.Database.html#associatedtype.Statement (type sqlx::Database::Statement)
   [25]: trait.Execute.html#tymethod.take_arguments
   [26]: trait.Database.html#associatedtype.Arguments (type sqlx::Database::Arguments)
   [27]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [28]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [29]: trait.Execute.html#tymethod.persistent
   [30]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [31]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [32]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [33]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [34]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [35]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [36]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [37]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [38]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [39]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [40]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [41]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [42]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [44]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [45]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [46]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [47]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [49]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [50]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [51]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [53]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [54]: super::Span::current()
   [55]: crate::Span
   [56]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [57]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [59]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [60]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [61]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [62]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [63]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [64]: enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [65]: enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [66]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [67]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [68]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [69]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [70]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [71]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [72]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [73]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [74]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [75]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [76]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [77]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [78]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [79]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [80]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [81]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [82]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [83]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [84]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [85]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [86]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [87]: super::Subscriber
   [88]: dispatcher#setting-the-default-subscriber

