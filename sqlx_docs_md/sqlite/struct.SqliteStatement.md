## SqliteStatement

## [sqlx][1]0.8.6

## SqliteStatement

### Trait Implementations

  * Clone
  * ColumnIndex<SqliteStatement<'_>>
  * ColumnIndex<SqliteStatement<'_>>
  * Debug
  * Statement<'q>



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



## [In sqlx::sqlite][2]

[sqlx][3]::[sqlite][2]

# Struct SqliteStatement Copy item path
[code]
    pub struct SqliteStatement<'q> { /* private fields */ }
[/code]

## Trait Implementations§

§

### impl<'q> [Clone][4] for [SqliteStatement][5]<'q>

§

#### fn [clone][6](&self) -> [SqliteStatement][5]<'q>

Returns a duplicate of the value. [Read more][6]

1.0.0 · [Source][7]§

#### fn [clone_from][8](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][8]

§

### impl [ColumnIndex][9]<[SqliteStatement][5]<'_>> for &[str][10]

§

#### fn [index][11](&self, statement: &[SqliteStatement][5]<'_>) -> [Result][12]<[usize][13], [Error][14]>

Returns a valid positional index into the row or statement, [`ColumnIndexOutOfBounds`][15], or, [`ColumnNotFound`][16].

§

### impl [ColumnIndex][9]<[SqliteStatement][5]<'_>> for [usize][13]

§

#### fn [index][11](&self, statement: &[SqliteStatement][5]<'_>) -> [Result][12]<[usize][13], [Error][14]>

Returns a valid positional index into the row or statement, [`ColumnIndexOutOfBounds`][15], or, [`ColumnNotFound`][16].

§

### impl<'q> [Debug][17] for [SqliteStatement][5]<'q>

§

#### fn [fmt][18](&self, f: &mut [Formatter][19]<'_>) -> [Result][12]<[()][20], [Error][21]>

Formats the value using the given formatter. [Read more][18]

§

### impl<'q> [Statement][22]<'q> for [SqliteStatement][5]<'q>

§

#### type [Database][23] = [Sqlite][24]

§

#### fn [to_owned][25](&self) -> [SqliteStatement][5]<'static>

Creates an owned statement from this statement reference. This copies the original SQL text.

§

#### fn [sql][26](&self) -> &[str][10]

Get the original SQL text used to create this statement.

§

#### fn [parameters][27](&self) -> [Option][28]<[Either][29]<&[[SqliteTypeInfo][30]], [usize][13]>>

Get the expected parameters for this statement. [Read more][27]

§

#### fn [columns][31](&self) -> &[[SqliteColumn][32]]

Get the columns expected to be returned by executing this statement.

§

#### fn [query][33]( &self, ) -> [Query][34]<'_, <[SqliteStatement][5]<'q> as [Statement][22]<'q>>::[Database][35], [SqliteArguments][36]<'_>>

§

#### fn [query_with][37]<'s, A>( &'s self, arguments: A, ) -> [Query][34]<'s, <[SqliteStatement][5]<'q> as [Statement][22]<'q>>::[Database][35], A>

where A: [IntoArguments][38]<'s, <[SqliteStatement][5]<'q> as [Statement][22]<'q>>::[Database][35]>,

§

#### fn [query_as][39]<O>( &self, ) -> [QueryAs][40]<'_, <[SqliteStatement][5]<'q> as [Statement][22]<'q>>::[Database][35], O, <<[SqliteStatement][5]<'q> as [Statement][22]<'q>>::[Database][35] as [Database][41]>::[Arguments][42]<'_>>

where O: for<'r> [FromRow][43]<'r, <<[SqliteStatement][5]<'q> as [Statement][22]<'q>>::[Database][35] as [Database][41]>::[Row][44]>,

§

#### fn [query_as_with][45]<'s, O, A>( &'s self, arguments: A, ) -> [QueryAs][40]<'s, <[SqliteStatement][5]<'q> as [Statement][22]<'q>>::[Database][35], O, A>

where O: for<'r> [FromRow][43]<'r, <<[SqliteStatement][5]<'q> as [Statement][22]<'q>>::[Database][35] as [Database][41]>::[Row][44]>, A: [IntoArguments][38]<'s, <[SqliteStatement][5]<'q> as [Statement][22]<'q>>::[Database][35]>,

§

#### fn [query_scalar][46]<O>( &self, ) -> [QueryScalar][47]<'_, <[SqliteStatement][5]<'q> as [Statement][22]<'q>>::[Database][35], O, <<[SqliteStatement][5]<'q> as [Statement][22]<'q>>::[Database][35] as [Database][41]>::[Arguments][42]<'_>>

where [(O,)][48]: for<'r> [FromRow][43]<'r, <<[SqliteStatement][5]<'q> as [Statement][22]<'q>>::[Database][35] as [Database][41]>::[Row][44]>,

§

#### fn [query_scalar_with][49]<'s, O, A>( &'s self, arguments: A, ) -> [QueryScalar][47]<'s, <[SqliteStatement][5]<'q> as [Statement][22]<'q>>::[Database][35], O, A>

where [(O,)][48]: for<'r> [FromRow][43]<'r, <<[SqliteStatement][5]<'q> as [Statement][22]<'q>>::[Database][35] as [Database][41]>::[Row][44]>, A: [IntoArguments][38]<'s, <[SqliteStatement][5]<'q> as [Statement][22]<'q>>::[Database][35]>,

§

#### fn [column][50]<I>(&self, index: I) -> &<Self::[Database][35] as [Database][41]>::[Column][51]

where I: [ColumnIndex][9]<Self>,

Gets the column information at `index`. [Read more][50]

§

#### fn [try_column][52]<I>( &self, index: I, ) -> [Result][12]<&<Self::[Database][35] as [Database][41]>::[Column][51], [Error][14]>

where I: [ColumnIndex][9]<Self>,

Gets the column information at `index` or a `ColumnIndexOutOfBounds` error if out of bounds.

## Auto Trait Implementations§

§

### impl<'q> [Freeze][53] for [SqliteStatement][5]<'q>

§

### impl<'q> [RefUnwindSafe][54] for [SqliteStatement][5]<'q>

§

### impl<'q> [Send][55] for [SqliteStatement][5]<'q>

§

### impl<'q> [Sync][56] for [SqliteStatement][5]<'q>

§

### impl<'q> [Unpin][57] for [SqliteStatement][5]<'q>

§

### impl<'q> [UnwindSafe][58] for [SqliteStatement][5]<'q>

## Blanket Implementations§

[Source][59]§

### impl<T> [Any][60] for T

where T: 'static + ?[Sized][61],

[Source][62]§

#### fn [type_id][63](&self) -> [TypeId][64]

Gets the `TypeId` of `self`. [Read more][63]

[Source][65]§

### impl<T> [Borrow][66]<T> for T

where T: ?[Sized][61],

[Source][67]§

#### fn [borrow][68](&self) -> [&T][69]

Immutably borrows from an owned value. [Read more][68]

[Source][70]§

### impl<T> [BorrowMut][71]<T> for T

where T: ?[Sized][61],

[Source][72]§

#### fn [borrow_mut][73](&mut self) -> [&mut T][69]

Mutably borrows from an owned value. [Read more][73]

[Source][74]§

### impl<T> [CloneToUninit][75] for T

where T: [Clone][4],

[Source][76]§

#### unsafe fn [clone_to_uninit][77](&self, dest: [*mut ][78][u8][79])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][77]

[Source][80]§

### impl<T> [From][81]<T> for T

[Source][82]§

#### fn [from][83](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][84] [`Span`][85], returning an `Instrumented` wrapper. Read more

[Source][86]§

### impl<T, U> [Into][87]<U> for T

where U: [From][81]<T>,

[Source][88]§

#### fn [into][89](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][81]<T> for U` chooses to do.

[Source][90]§

### impl<T> [IntoEither][91] for T

[Source][92]§

#### fn [into_either][93](self, into_left: [bool][94]) -> [Either][29]<Self, Self> ⓘ

Converts `self` into a [`Left`][95] variant of [`Either<Self, Self>`][29] if `into_left` is `true`. Converts `self` into a [`Right`][96] variant of [`Either<Self, Self>`][29] otherwise. [Read more][93]

[Source][97]§

#### fn [into_either_with][98]<F>(self, into_left: F) -> [Either][29]<Self, Self> ⓘ

where F: [FnOnce][99](&Self) -> [bool][94],

Converts `self` into a [`Left`][95] variant of [`Either<Self, Self>`][29] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][96] variant of [`Either<Self, Self>`][29] otherwise. [Read more][98]

[Source][100]§

### impl<T> [Same][101] for T

[Source][102]§

#### type [Output][103] = T

Should always be `Self`

[Source][104]§

### impl<T> [ToOwned][105] for T

where T: [Clone][4],

[Source][106]§

#### type [Owned][107] = T

The resulting type after obtaining ownership.

[Source][108]§

#### fn [to_owned][109](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][109]

[Source][110]§

#### fn [clone_into][111](&self, target: [&mut T][69])

Uses borrowed data to replace owned data, usually by cloning. [Read more][111]

[Source][112]§

### impl<T, U> [TryFrom][113]<U> for T

where U: [Into][87]<T>,

[Source][114]§

#### type [Error][115] = [Infallible][116]

The type returned in the event of a conversion error.

[Source][117]§

#### fn [try_from][118](value: U) -> [Result][12]<T, <T as [TryFrom][113]<U>>::[Error][119]>

Performs the conversion.

[Source][120]§

### impl<T, U> [TryInto][121]<U> for T

where U: [TryFrom][113]<T>,

[Source][122]§

#### type [Error][123] = <U as [TryFrom][113]<T>>::[Error][119]

The type returned in the event of a conversion error.

[Source][124]§

#### fn [try_into][125](self) -> [Result][12]<U, <U as [TryFrom][113]<T>>::[Error][119]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][87]<Dispatch>,

Attaches the provided [`Subscriber`][126] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][127] [`Subscriber`][126] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [5]: struct.SqliteStatement.html (struct sqlx::sqlite::SqliteStatement)
   [6]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [7]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [8]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [9]: ../trait.ColumnIndex.html (trait sqlx::ColumnIndex)
   [10]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [11]: ../trait.ColumnIndex.html#tymethod.index
   [12]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [14]: ../enum.Error.html (enum sqlx::Error)
   [15]: ../enum.Error.html#variant.ColumnIndexOutOfBounds (variant sqlx::Error::ColumnIndexOutOfBounds)
   [16]: ../enum.Error.html#variant.ColumnNotFound (variant sqlx::Error::ColumnNotFound)
   [17]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [18]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [19]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [20]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [21]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [22]: ../trait.Statement.html (trait sqlx::Statement)
   [23]: ../trait.Statement.html#associatedtype.Database
   [24]: ../struct.Sqlite.html (struct sqlx::Sqlite)
   [25]: ../trait.Statement.html#tymethod.to_owned
   [26]: ../trait.Statement.html#tymethod.sql
   [27]: ../trait.Statement.html#tymethod.parameters
   [28]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [29]: ../enum.Either.html (enum sqlx::Either)
   [30]: struct.SqliteTypeInfo.html (struct sqlx::sqlite::SqliteTypeInfo)
   [31]: ../trait.Statement.html#tymethod.columns
   [32]: struct.SqliteColumn.html (struct sqlx::sqlite::SqliteColumn)
   [33]: ../trait.Statement.html#tymethod.query
   [34]: ../query/struct.Query.html (struct sqlx::query::Query)
   [35]: ../trait.Statement.html#associatedtype.Database (type sqlx::Statement::Database)
   [36]: struct.SqliteArguments.html (struct sqlx::sqlite::SqliteArguments)
   [37]: ../trait.Statement.html#tymethod.query_with
   [38]: ../trait.IntoArguments.html (trait sqlx::IntoArguments)
   [39]: ../trait.Statement.html#tymethod.query_as
   [40]: ../query/struct.QueryAs.html (struct sqlx::query::QueryAs)
   [41]: ../trait.Database.html (trait sqlx::Database)
   [42]: ../trait.Database.html#associatedtype.Arguments (type sqlx::Database::Arguments)
   [43]: ../trait.FromRow.html (trait sqlx::FromRow)
   [44]: ../trait.Database.html#associatedtype.Row (type sqlx::Database::Row)
   [45]: ../trait.Statement.html#tymethod.query_as_with
   [46]: ../trait.Statement.html#tymethod.query_scalar
   [47]: ../query/struct.QueryScalar.html (struct sqlx::query::QueryScalar)
   [48]: https://doc.rust-lang.org/1.94.1/std/primitive.tuple.html
   [49]: ../trait.Statement.html#tymethod.query_scalar_with
   [50]: ../trait.Statement.html#method.column
   [51]: ../trait.Database.html#associatedtype.Column (type sqlx::Database::Column)
   [52]: ../trait.Statement.html#method.try_column
   [53]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [54]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [55]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [56]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [57]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [58]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [59]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [60]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [61]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [62]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [63]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [64]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [65]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [66]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [67]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [68]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [69]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [70]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [71]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [72]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [73]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [74]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [75]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [76]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [77]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [78]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [79]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [80]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [81]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [82]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [83]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [84]: super::Span::current()
   [85]: crate::Span
   [86]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [87]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [88]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [89]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [90]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [91]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [92]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [93]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [94]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [95]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [96]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [97]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [98]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [99]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [100]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [101]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [102]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [103]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [104]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [105]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [106]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [107]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [108]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [109]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [110]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [111]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [112]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [113]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [114]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [115]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [116]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [117]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [118]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [119]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [120]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [121]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [122]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [123]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [124]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [125]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [126]: super::Subscriber
   [127]: dispatcher#setting-the-default-subscriber

