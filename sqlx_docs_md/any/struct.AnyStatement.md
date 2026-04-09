## AnyStatement

## [sqlx][1]0.8.6

## AnyStatement

### Trait Implementations

  * ColumnIndex<AnyStatement<'_>>
  * ColumnIndex<AnyStatement<'_>>
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
  * From<T>
  * Instrument
  * Into<U>
  * IntoEither
  * Same
  * TryFrom<U>
  * TryInto<U>
  * WithSubscriber



## [In sqlx::any][2]

[sqlx][3]::[any][2]

# Struct AnyStatement Copy item path
[code]
    pub struct AnyStatement<'q> { /* private fields */ }
[/code]

## Trait Implementations§

§

### impl<'i> [ColumnIndex][4]<[AnyStatement][5]<'_>> for &'i [str][6]

§

#### fn [index][7](&self, statement: &[AnyStatement][5]<'_>) -> [Result][8]<[usize][9], [Error][10]>

Returns a valid positional index into the row or statement, [`ColumnIndexOutOfBounds`][11], or, [`ColumnNotFound`][12].

§

### impl [ColumnIndex][4]<[AnyStatement][5]<'_>> for [usize][9]

§

#### fn [index][7](&self, statement: &[AnyStatement][5]<'_>) -> [Result][8]<[usize][9], [Error][10]>

Returns a valid positional index into the row or statement, [`ColumnIndexOutOfBounds`][11], or, [`ColumnNotFound`][12].

§

### impl<'q> [Statement][13]<'q> for [AnyStatement][5]<'q>

§

#### type [Database][14] = [Any][15]

§

#### fn [to_owned][16](&self) -> [AnyStatement][5]<'static>

Creates an owned statement from this statement reference. This copies the original SQL text.

§

#### fn [sql][17](&self) -> &[str][6]

Get the original SQL text used to create this statement.

§

#### fn [parameters][18](&self) -> [Option][19]<[Either][20]<&[[AnyTypeInfo][21]], [usize][9]>>

Get the expected parameters for this statement. [Read more][18]

§

#### fn [columns][22](&self) -> &[AnyColumn]

Get the columns expected to be returned by executing this statement.

§

#### fn [query][23]( &self, ) -> [Query][24]<'_, <[AnyStatement][5]<'q> as [Statement][13]<'q>>::[Database][25], [AnyArguments][26]<'_>>

§

#### fn [query_with][27]<'s, A>( &'s self, arguments: A, ) -> [Query][24]<'s, <[AnyStatement][5]<'q> as [Statement][13]<'q>>::[Database][25], A>

where A: [IntoArguments][28]<'s, <[AnyStatement][5]<'q> as [Statement][13]<'q>>::[Database][25]>,

§

#### fn [query_as][29]<O>( &self, ) -> [QueryAs][30]<'_, <[AnyStatement][5]<'q> as [Statement][13]<'q>>::[Database][25], O, <<[AnyStatement][5]<'q> as [Statement][13]<'q>>::[Database][25] as [Database][31]>::[Arguments][32]<'_>>

where O: for<'r> [FromRow][33]<'r, <<[AnyStatement][5]<'q> as [Statement][13]<'q>>::[Database][25] as [Database][31]>::[Row][34]>,

§

#### fn [query_as_with][35]<'s, O, A>( &'s self, arguments: A, ) -> [QueryAs][30]<'s, <[AnyStatement][5]<'q> as [Statement][13]<'q>>::[Database][25], O, A>

where O: for<'r> [FromRow][33]<'r, <<[AnyStatement][5]<'q> as [Statement][13]<'q>>::[Database][25] as [Database][31]>::[Row][34]>, A: [IntoArguments][28]<'s, <[AnyStatement][5]<'q> as [Statement][13]<'q>>::[Database][25]>,

§

#### fn [query_scalar][36]<O>( &self, ) -> [QueryScalar][37]<'_, <[AnyStatement][5]<'q> as [Statement][13]<'q>>::[Database][25], O, <<[AnyStatement][5]<'q> as [Statement][13]<'q>>::[Database][25] as [Database][31]>::[Arguments][32]<'_>>

where [(O,)][38]: for<'r> [FromRow][33]<'r, <<[AnyStatement][5]<'q> as [Statement][13]<'q>>::[Database][25] as [Database][31]>::[Row][34]>,

§

#### fn [query_scalar_with][39]<'s, O, A>( &'s self, arguments: A, ) -> [QueryScalar][37]<'s, <[AnyStatement][5]<'q> as [Statement][13]<'q>>::[Database][25], O, A>

where [(O,)][38]: for<'r> [FromRow][33]<'r, <<[AnyStatement][5]<'q> as [Statement][13]<'q>>::[Database][25] as [Database][31]>::[Row][34]>, A: [IntoArguments][28]<'s, <[AnyStatement][5]<'q> as [Statement][13]<'q>>::[Database][25]>,

§

#### fn [column][40]<I>(&self, index: I) -> &<Self::[Database][25] as [Database][31]>::[Column][41]

where I: [ColumnIndex][4]<Self>,

Gets the column information at `index`. [Read more][40]

§

#### fn [try_column][42]<I>( &self, index: I, ) -> [Result][8]<&<Self::[Database][25] as [Database][31]>::[Column][41], [Error][10]>

where I: [ColumnIndex][4]<Self>,

Gets the column information at `index` or a `ColumnIndexOutOfBounds` error if out of bounds.

## Auto Trait Implementations§

§

### impl<'q> [Freeze][43] for [AnyStatement][5]<'q>

§

### impl<'q> [RefUnwindSafe][44] for [AnyStatement][5]<'q>

§

### impl<'q> [Send][45] for [AnyStatement][5]<'q>

§

### impl<'q> [Sync][46] for [AnyStatement][5]<'q>

§

### impl<'q> [Unpin][47] for [AnyStatement][5]<'q>

§

### impl<'q> [UnwindSafe][48] for [AnyStatement][5]<'q>

## Blanket Implementations§

[Source][49]§

### impl<T> [Any][50] for T

where T: 'static + ?[Sized][51],

[Source][52]§

#### fn [type_id][53](&self) -> [TypeId][54]

Gets the `TypeId` of `self`. [Read more][53]

[Source][55]§

### impl<T> [Borrow][56]<T> for T

where T: ?[Sized][51],

[Source][57]§

#### fn [borrow][58](&self) -> [&T][59]

Immutably borrows from an owned value. [Read more][58]

[Source][60]§

### impl<T> [BorrowMut][61]<T> for T

where T: ?[Sized][51],

[Source][62]§

#### fn [borrow_mut][63](&mut self) -> [&mut T][59]

Mutably borrows from an owned value. [Read more][63]

[Source][64]§

### impl<T> [From][65]<T> for T

[Source][66]§

#### fn [from][67](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][68] [`Span`][69], returning an `Instrumented` wrapper. Read more

[Source][70]§

### impl<T, U> [Into][71]<U> for T

where U: [From][65]<T>,

[Source][72]§

#### fn [into][73](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][65]<T> for U` chooses to do.

[Source][74]§

### impl<T> [IntoEither][75] for T

[Source][76]§

#### fn [into_either][77](self, into_left: [bool][78]) -> [Either][20]<Self, Self> ⓘ

Converts `self` into a [`Left`][79] variant of [`Either<Self, Self>`][20] if `into_left` is `true`. Converts `self` into a [`Right`][80] variant of [`Either<Self, Self>`][20] otherwise. [Read more][77]

[Source][81]§

#### fn [into_either_with][82]<F>(self, into_left: F) -> [Either][20]<Self, Self> ⓘ

where F: [FnOnce][83](&Self) -> [bool][78],

Converts `self` into a [`Left`][79] variant of [`Either<Self, Self>`][20] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][80] variant of [`Either<Self, Self>`][20] otherwise. [Read more][82]

[Source][84]§

### impl<T> [Same][85] for T

[Source][86]§

#### type [Output][87] = T

Should always be `Self`

[Source][88]§

### impl<T, U> [TryFrom][89]<U> for T

where U: [Into][71]<T>,

[Source][90]§

#### type [Error][91] = [Infallible][92]

The type returned in the event of a conversion error.

[Source][93]§

#### fn [try_from][94](value: U) -> [Result][8]<T, <T as [TryFrom][89]<U>>::[Error][95]>

Performs the conversion.

[Source][96]§

### impl<T, U> [TryInto][97]<U> for T

where U: [TryFrom][89]<T>,

[Source][98]§

#### type [Error][99] = <U as [TryFrom][89]<T>>::[Error][95]

The type returned in the event of a conversion error.

[Source][100]§

#### fn [try_into][101](self) -> [Result][8]<U, <U as [TryFrom][89]<T>>::[Error][95]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][71]<Dispatch>,

Attaches the provided [`Subscriber`][102] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][103] [`Subscriber`][102] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../trait.ColumnIndex.html (trait sqlx::ColumnIndex)
   [5]: struct.AnyStatement.html (struct sqlx::any::AnyStatement)
   [6]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [7]: ../trait.ColumnIndex.html#tymethod.index
   [8]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [9]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [10]: ../enum.Error.html (enum sqlx::Error)
   [11]: ../enum.Error.html#variant.ColumnIndexOutOfBounds (variant sqlx::Error::ColumnIndexOutOfBounds)
   [12]: ../enum.Error.html#variant.ColumnNotFound (variant sqlx::Error::ColumnNotFound)
   [13]: ../trait.Statement.html (trait sqlx::Statement)
   [14]: ../trait.Statement.html#associatedtype.Database
   [15]: ../struct.Any.html (struct sqlx::Any)
   [16]: ../trait.Statement.html#tymethod.to_owned
   [17]: ../trait.Statement.html#tymethod.sql
   [18]: ../trait.Statement.html#tymethod.parameters
   [19]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [20]: ../enum.Either.html (enum sqlx::Either)
   [21]: struct.AnyTypeInfo.html (struct sqlx::any::AnyTypeInfo)
   [22]: ../trait.Statement.html#tymethod.columns
   [23]: ../trait.Statement.html#tymethod.query
   [24]: ../query/struct.Query.html (struct sqlx::query::Query)
   [25]: ../trait.Statement.html#associatedtype.Database (type sqlx::Statement::Database)
   [26]: struct.AnyArguments.html (struct sqlx::any::AnyArguments)
   [27]: ../trait.Statement.html#tymethod.query_with
   [28]: ../trait.IntoArguments.html (trait sqlx::IntoArguments)
   [29]: ../trait.Statement.html#tymethod.query_as
   [30]: ../query/struct.QueryAs.html (struct sqlx::query::QueryAs)
   [31]: ../trait.Database.html (trait sqlx::Database)
   [32]: ../trait.Database.html#associatedtype.Arguments (type sqlx::Database::Arguments)
   [33]: ../trait.FromRow.html (trait sqlx::FromRow)
   [34]: ../trait.Database.html#associatedtype.Row (type sqlx::Database::Row)
   [35]: ../trait.Statement.html#tymethod.query_as_with
   [36]: ../trait.Statement.html#tymethod.query_scalar
   [37]: ../query/struct.QueryScalar.html (struct sqlx::query::QueryScalar)
   [38]: https://doc.rust-lang.org/1.94.1/std/primitive.tuple.html
   [39]: ../trait.Statement.html#tymethod.query_scalar_with
   [40]: ../trait.Statement.html#method.column
   [41]: ../trait.Database.html#associatedtype.Column (type sqlx::Database::Column)
   [42]: ../trait.Statement.html#method.try_column
   [43]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [44]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [45]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [46]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [47]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [48]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [49]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [50]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [51]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [53]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [54]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [56]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [57]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [58]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [59]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [60]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [61]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [62]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [63]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [64]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [65]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [66]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [67]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [68]: super::Span::current()
   [69]: crate::Span
   [70]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [72]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [74]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [75]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [76]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [77]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [78]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [79]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [80]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [81]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [82]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [83]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [84]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [85]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [86]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [87]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [88]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [89]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [90]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [91]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [92]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [93]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [94]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [95]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [96]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [97]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [98]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [99]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [100]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [101]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [102]: super::Subscriber
   [103]: dispatcher#setting-the-default-subscriber

