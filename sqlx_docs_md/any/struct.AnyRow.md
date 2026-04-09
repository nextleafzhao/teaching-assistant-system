## AnyRow

## [sqlx][1]0.8.6

## AnyRow

### Trait Implementations

  * Clone
  * ColumnIndex<AnyRow>
  * ColumnIndex<AnyRow>
  * Row
  * TryFrom<&'a SqliteRow>



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



## [In sqlx::any][2]

[sqlx][3]::[any][2]

# Struct AnyRow Copy item path
[code]
    pub struct AnyRow { /* private fields */ }
[/code]

## Trait Implementations§

§

### impl [Clone][4] for [AnyRow][5]

§

#### fn [clone][6](&self) -> [AnyRow][5]

Returns a duplicate of the value. [Read more][6]

1.0.0 · [Source][7]§

#### fn [clone_from][8](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][8]

§

### impl<'i> [ColumnIndex][9]<[AnyRow][5]> for &'i [str][10]

§

#### fn [index][11](&self, row: &[AnyRow][5]) -> [Result][12]<[usize][13], [Error][14]>

Returns a valid positional index into the row or statement, [`ColumnIndexOutOfBounds`][15], or, [`ColumnNotFound`][16].

§

### impl [ColumnIndex][9]<[AnyRow][5]> for [usize][13]

§

#### fn [index][11](&self, row: &[AnyRow][5]) -> [Result][12]<[usize][13], [Error][14]>

Returns a valid positional index into the row or statement, [`ColumnIndexOutOfBounds`][15], or, [`ColumnNotFound`][16].

§

### impl [Row][17] for [AnyRow][5]

§

#### type [Database][18] = [Any][19]

§

#### fn [columns][20](&self) -> &[AnyColumn]

Gets all columns in this statement.

§

#### fn [try_get_raw][21]<I>( &self, index: I, ) -> [Result][12]<<<[AnyRow][5] as [Row][17]>::[Database][22] as [Database][23]>::[ValueRef][24]<'_>, [Error][14]>

where I: [ColumnIndex][9]<[AnyRow][5]>,

Index into the database row and decode a single value. [Read more][21]

§

#### fn [try_get][25]<'r, T, I>(&'r self, index: I) -> [Result][12]<T, [Error][14]>

where I: [ColumnIndex][9]<[AnyRow][5]>, T: [Decode][26]<'r, <[AnyRow][5] as [Row][17]>::[Database][22]> \+ [Type][27]<<[AnyRow][5] as [Row][17]>::[Database][22]>,

Index into the database row and decode a single value. [Read more][25]

§

#### fn [is_empty][28](&self) -> [bool][29]

Returns `true` if this row has no columns.

§

#### fn [len][30](&self) -> [usize][13]

Returns the number of columns in this row.

§

#### fn [column][31]<I>(&self, index: I) -> &<Self::[Database][22] as [Database][23]>::[Column][32]

where I: [ColumnIndex][9]<Self>,

Gets the column information at `index`. [Read more][31]

§

#### fn [try_column][33]<I>( &self, index: I, ) -> [Result][12]<&<Self::[Database][22] as [Database][23]>::[Column][32], [Error][14]>

where I: [ColumnIndex][9]<Self>,

Gets the column information at `index` or a `ColumnIndexOutOfBounds` error if out of bounds.

§

#### fn [get][34]<'r, T, I>(&'r self, index: I) -> T

where I: [ColumnIndex][9]<Self>, T: [Decode][26]<'r, Self::[Database][22]> \+ [Type][27]<Self::[Database][22]>,

Index into the database row and decode a single value. [Read more][34]

§

#### fn [get_unchecked][35]<'r, T, I>(&'r self, index: I) -> T

where I: [ColumnIndex][9]<Self>, T: [Decode][26]<'r, Self::[Database][22]>,

Index into the database row and decode a single value. [Read more][35]

§

#### fn [try_get_unchecked][36]<'r, T, I>(&'r self, index: I) -> [Result][12]<T, [Error][14]>

where I: [ColumnIndex][9]<Self>, T: [Decode][26]<'r, Self::[Database][22]>,

Index into the database row and decode a single value. [Read more][36]

§

### impl<'a> [TryFrom][37]<&'a [SqliteRow][38]> for [AnyRow][5]

§

#### type [Error][39] = [Error][14]

The type returned in the event of a conversion error.

§

#### fn [try_from][40]( row: &'a [SqliteRow][38], ) -> [Result][12]<[AnyRow][5], <[AnyRow][5] as [TryFrom][37]<&'a [SqliteRow][38]>>::[Error][41]>

Performs the conversion.

## Auto Trait Implementations§

§

### impl [Freeze][42] for [AnyRow][5]

§

### impl [RefUnwindSafe][43] for [AnyRow][5]

§

### impl [Send][44] for [AnyRow][5]

§

### impl [Sync][45] for [AnyRow][5]

§

### impl [Unpin][46] for [AnyRow][5]

§

### impl [UnwindSafe][47] for [AnyRow][5]

## Blanket Implementations§

[Source][48]§

### impl<T> [Any][49] for T

where T: 'static + ?[Sized][50],

[Source][51]§

#### fn [type_id][52](&self) -> [TypeId][53]

Gets the `TypeId` of `self`. [Read more][52]

[Source][54]§

### impl<T> [Borrow][55]<T> for T

where T: ?[Sized][50],

[Source][56]§

#### fn [borrow][57](&self) -> [&T][58]

Immutably borrows from an owned value. [Read more][57]

[Source][59]§

### impl<T> [BorrowMut][60]<T> for T

where T: ?[Sized][50],

[Source][61]§

#### fn [borrow_mut][62](&mut self) -> [&mut T][58]

Mutably borrows from an owned value. [Read more][62]

[Source][63]§

### impl<T> [CloneToUninit][64] for T

where T: [Clone][4],

[Source][65]§

#### unsafe fn [clone_to_uninit][66](&self, dest: [*mut ][67][u8][68])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][66]

[Source][69]§

### impl<T> [From][70]<T> for T

[Source][71]§

#### fn [from][72](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][73] [`Span`][74], returning an `Instrumented` wrapper. Read more

[Source][75]§

### impl<T, U> [Into][76]<U> for T

where U: [From][70]<T>,

[Source][77]§

#### fn [into][78](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][70]<T> for U` chooses to do.

[Source][79]§

### impl<T> [IntoEither][80] for T

[Source][81]§

#### fn [into_either][82](self, into_left: [bool][29]) -> [Either][83]<Self, Self> ⓘ

Converts `self` into a [`Left`][84] variant of [`Either<Self, Self>`][83] if `into_left` is `true`. Converts `self` into a [`Right`][85] variant of [`Either<Self, Self>`][83] otherwise. [Read more][82]

[Source][86]§

#### fn [into_either_with][87]<F>(self, into_left: F) -> [Either][83]<Self, Self> ⓘ

where F: [FnOnce][88](&Self) -> [bool][29],

Converts `self` into a [`Left`][84] variant of [`Either<Self, Self>`][83] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][85] variant of [`Either<Self, Self>`][83] otherwise. [Read more][87]

[Source][89]§

### impl<T> [Same][90] for T

[Source][91]§

#### type [Output][92] = T

Should always be `Self`

[Source][93]§

### impl<T> [ToOwned][94] for T

where T: [Clone][4],

[Source][95]§

#### type [Owned][96] = T

The resulting type after obtaining ownership.

[Source][97]§

#### fn [to_owned][98](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][98]

[Source][99]§

#### fn [clone_into][100](&self, target: [&mut T][58])

Uses borrowed data to replace owned data, usually by cloning. [Read more][100]

[Source][101]§

### impl<T, U> [TryFrom][37]<U> for T

where U: [Into][76]<T>,

[Source][102]§

#### type [Error][39] = [Infallible][103]

The type returned in the event of a conversion error.

[Source][104]§

#### fn [try_from][40](value: U) -> [Result][12]<T, <T as [TryFrom][37]<U>>::[Error][41]>

Performs the conversion.

[Source][105]§

### impl<T, U> [TryInto][106]<U> for T

where U: [TryFrom][37]<T>,

[Source][107]§

#### type [Error][108] = <U as [TryFrom][37]<T>>::[Error][41]

The type returned in the event of a conversion error.

[Source][109]§

#### fn [try_into][110](self) -> [Result][12]<U, <U as [TryFrom][37]<T>>::[Error][41]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][76]<Dispatch>,

Attaches the provided [`Subscriber`][111] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][112] [`Subscriber`][111] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [5]: struct.AnyRow.html (struct sqlx::any::AnyRow)
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
   [17]: ../trait.Row.html (trait sqlx::Row)
   [18]: ../trait.Row.html#associatedtype.Database
   [19]: ../struct.Any.html (struct sqlx::Any)
   [20]: ../trait.Row.html#tymethod.columns
   [21]: ../trait.Row.html#tymethod.try_get_raw
   [22]: ../trait.Row.html#associatedtype.Database (type sqlx::Row::Database)
   [23]: ../trait.Database.html (trait sqlx::Database)
   [24]: ../trait.Database.html#associatedtype.ValueRef (type sqlx::Database::ValueRef)
   [25]: ../trait.Row.html#method.try_get
   [26]: ../trait.Decode.html (trait sqlx::Decode)
   [27]: ../trait.Type.html (trait sqlx::Type)
   [28]: ../trait.Row.html#method.is_empty
   [29]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [30]: ../trait.Row.html#method.len
   [31]: ../trait.Row.html#method.column
   [32]: ../trait.Database.html#associatedtype.Column (type sqlx::Database::Column)
   [33]: ../trait.Row.html#method.try_column
   [34]: ../trait.Row.html#method.get
   [35]: ../trait.Row.html#method.get_unchecked
   [36]: ../trait.Row.html#method.try_get_unchecked
   [37]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [38]: ../sqlite/struct.SqliteRow.html (struct sqlx::sqlite::SqliteRow)
   [39]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [40]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [41]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [42]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [43]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [44]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [45]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [46]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [47]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [49]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [50]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [51]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [52]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [53]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [54]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [55]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [56]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [57]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [58]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [59]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [60]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [61]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [62]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [63]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [64]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [65]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [66]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [67]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [68]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [69]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [71]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [72]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [73]: super::Span::current()
   [74]: crate::Span
   [75]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [76]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [77]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [78]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [79]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [80]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [81]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [82]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [83]: ../enum.Either.html (enum sqlx::Either)
   [84]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [85]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [86]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [87]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [88]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [89]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [90]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [91]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [92]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [93]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [94]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [95]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [96]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [97]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [98]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [99]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [100]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [101]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [102]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [103]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [104]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [105]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [106]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [107]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [108]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [109]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [110]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [111]: super::Subscriber
   [112]: dispatcher#setting-the-default-subscriber

