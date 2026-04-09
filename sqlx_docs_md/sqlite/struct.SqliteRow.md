## SqliteRow

## [sqlx][1]0.8.6

## SqliteRow

### Trait Implementations

  * ColumnIndex<SqliteRow>
  * ColumnIndex<SqliteRow>
  * Row
  * Send
  * Sync
  * TryFrom<&'a SqliteRow>



### Auto Trait Implementations

  * Freeze
  * RefUnwindSafe
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



## [In sqlx::sqlite][2]

[sqlx][3]::[sqlite][2]

# Struct SqliteRow Copy item path
[code]
    pub struct SqliteRow { /* private fields */ }
[/code]

Expand description

Implementation of [`Row`][4] for SQLite.

## Trait Implementations§

§

### impl [ColumnIndex][5]<[SqliteRow][6]> for &[str][7]

§

#### fn [index][8](&self, row: &[SqliteRow][6]) -> [Result][9]<[usize][10], [Error][11]>

Returns a valid positional index into the row or statement, [`ColumnIndexOutOfBounds`][12], or, [`ColumnNotFound`][13].

§

### impl [ColumnIndex][5]<[SqliteRow][6]> for [usize][10]

§

#### fn [index][8](&self, row: &[SqliteRow][6]) -> [Result][9]<[usize][10], [Error][11]>

Returns a valid positional index into the row or statement, [`ColumnIndexOutOfBounds`][12], or, [`ColumnNotFound`][13].

§

### impl [Row][4] for [SqliteRow][6]

§

#### type [Database][14] = [Sqlite][15]

§

#### fn [columns][16](&self) -> &[[SqliteColumn][17]]

Gets all columns in this statement.

§

#### fn [try_get_raw][18]<I>(&self, index: I) -> [Result][9]<[SqliteValueRef][19]<'_>, [Error][11]>

where I: [ColumnIndex][5]<[SqliteRow][6]>,

Index into the database row and decode a single value. [Read more][18]

§

#### fn [is_empty][20](&self) -> [bool][21]

Returns `true` if this row has no columns.

§

#### fn [len][22](&self) -> [usize][10]

Returns the number of columns in this row.

§

#### fn [column][23]<I>(&self, index: I) -> &<Self::[Database][24] as [Database][25]>::[Column][26]

where I: [ColumnIndex][5]<Self>,

Gets the column information at `index`. [Read more][23]

§

#### fn [try_column][27]<I>( &self, index: I, ) -> [Result][9]<&<Self::[Database][24] as [Database][25]>::[Column][26], [Error][11]>

where I: [ColumnIndex][5]<Self>,

Gets the column information at `index` or a `ColumnIndexOutOfBounds` error if out of bounds.

§

#### fn [get][28]<'r, T, I>(&'r self, index: I) -> T

where I: [ColumnIndex][5]<Self>, T: [Decode][29]<'r, Self::[Database][24]> \+ [Type][30]<Self::[Database][24]>,

Index into the database row and decode a single value. [Read more][28]

§

#### fn [get_unchecked][31]<'r, T, I>(&'r self, index: I) -> T

where I: [ColumnIndex][5]<Self>, T: [Decode][29]<'r, Self::[Database][24]>,

Index into the database row and decode a single value. [Read more][31]

§

#### fn [try_get][32]<'r, T, I>(&'r self, index: I) -> [Result][9]<T, [Error][11]>

where I: [ColumnIndex][5]<Self>, T: [Decode][29]<'r, Self::[Database][24]> \+ [Type][30]<Self::[Database][24]>,

Index into the database row and decode a single value. [Read more][32]

§

#### fn [try_get_unchecked][33]<'r, T, I>(&'r self, index: I) -> [Result][9]<T, [Error][11]>

where I: [ColumnIndex][5]<Self>, T: [Decode][29]<'r, Self::[Database][24]>,

Index into the database row and decode a single value. [Read more][33]

§

### impl<'a> [TryFrom][34]<&'a [SqliteRow][6]> for [AnyRow][35]

§

#### type [Error][36] = [Error][11]

The type returned in the event of a conversion error.

§

#### fn [try_from][37]( row: &'a [SqliteRow][6], ) -> [Result][9]<[AnyRow][35], <[AnyRow][35] as [TryFrom][34]<&'a [SqliteRow][6]>>::[Error][38]>

Performs the conversion.

§

### impl [Send][39] for [SqliteRow][6]

§

### impl [Sync][40] for [SqliteRow][6]

## Auto Trait Implementations§

§

### impl [Freeze][41] for [SqliteRow][6]

§

### impl [RefUnwindSafe][42] for [SqliteRow][6]

§

### impl [Unpin][43] for [SqliteRow][6]

§

### impl [UnwindSafe][44] for [SqliteRow][6]

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

#### fn [into_either][73](self, into_left: [bool][21]) -> [Either][74]<Self, Self> ⓘ

Converts `self` into a [`Left`][75] variant of [`Either<Self, Self>`][74] if `into_left` is `true`. Converts `self` into a [`Right`][76] variant of [`Either<Self, Self>`][74] otherwise. [Read more][73]

[Source][77]§

#### fn [into_either_with][78]<F>(self, into_left: F) -> [Either][74]<Self, Self> ⓘ

where F: [FnOnce][79](&Self) -> [bool][21],

Converts `self` into a [`Left`][75] variant of [`Either<Self, Self>`][74] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][76] variant of [`Either<Self, Self>`][74] otherwise. [Read more][78]

[Source][80]§

### impl<T> [Same][81] for T

[Source][82]§

#### type [Output][83] = T

Should always be `Self`

[Source][84]§

### impl<T, U> [TryFrom][34]<U> for T

where U: [Into][67]<T>,

[Source][85]§

#### type [Error][36] = [Infallible][86]

The type returned in the event of a conversion error.

[Source][87]§

#### fn [try_from][37](value: U) -> [Result][9]<T, <T as [TryFrom][34]<U>>::[Error][38]>

Performs the conversion.

[Source][88]§

### impl<T, U> [TryInto][89]<U> for T

where U: [TryFrom][34]<T>,

[Source][90]§

#### type [Error][91] = <U as [TryFrom][34]<T>>::[Error][38]

The type returned in the event of a conversion error.

[Source][92]§

#### fn [try_into][93](self) -> [Result][9]<U, <U as [TryFrom][34]<T>>::[Error][38]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][67]<Dispatch>,

Attaches the provided [`Subscriber`][94] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][95] [`Subscriber`][94] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../trait.Row.html (trait sqlx::Row)
   [5]: ../trait.ColumnIndex.html (trait sqlx::ColumnIndex)
   [6]: struct.SqliteRow.html (struct sqlx::sqlite::SqliteRow)
   [7]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [8]: ../trait.ColumnIndex.html#tymethod.index
   [9]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [10]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [11]: ../enum.Error.html (enum sqlx::Error)
   [12]: ../enum.Error.html#variant.ColumnIndexOutOfBounds (variant sqlx::Error::ColumnIndexOutOfBounds)
   [13]: ../enum.Error.html#variant.ColumnNotFound (variant sqlx::Error::ColumnNotFound)
   [14]: ../trait.Row.html#associatedtype.Database
   [15]: ../struct.Sqlite.html (struct sqlx::Sqlite)
   [16]: ../trait.Row.html#tymethod.columns
   [17]: struct.SqliteColumn.html (struct sqlx::sqlite::SqliteColumn)
   [18]: ../trait.Row.html#tymethod.try_get_raw
   [19]: struct.SqliteValueRef.html (struct sqlx::sqlite::SqliteValueRef)
   [20]: ../trait.Row.html#method.is_empty
   [21]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [22]: ../trait.Row.html#method.len
   [23]: ../trait.Row.html#method.column
   [24]: ../trait.Row.html#associatedtype.Database (type sqlx::Row::Database)
   [25]: ../trait.Database.html (trait sqlx::Database)
   [26]: ../trait.Database.html#associatedtype.Column (type sqlx::Database::Column)
   [27]: ../trait.Row.html#method.try_column
   [28]: ../trait.Row.html#method.get
   [29]: ../trait.Decode.html (trait sqlx::Decode)
   [30]: ../trait.Type.html (trait sqlx::Type)
   [31]: ../trait.Row.html#method.get_unchecked
   [32]: ../trait.Row.html#method.try_get
   [33]: ../trait.Row.html#method.try_get_unchecked
   [34]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [35]: ../any/struct.AnyRow.html (struct sqlx::any::AnyRow)
   [36]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [37]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [38]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [39]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [40]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [41]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [42]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [43]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
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
   [74]: ../enum.Either.html (enum sqlx::Either)
   [75]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [76]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [77]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [78]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [79]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [80]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [81]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [82]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [83]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [84]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [85]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [86]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [87]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [88]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [89]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [90]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [91]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [92]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [93]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [94]: super::Subscriber
   [95]: dispatcher#setting-the-default-subscriber

