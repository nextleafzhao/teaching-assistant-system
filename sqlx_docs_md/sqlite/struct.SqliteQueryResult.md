## SqliteQueryResult

## [sqlx][1]0.8.6

## SqliteQueryResult

### Methods

  * last_insert_rowid
  * rows_affected



### Trait Implementations

  * Debug
  * Default
  * Extend<SqliteQueryResult>
  * From<SqliteQueryResult>



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



## [In sqlx::sqlite][2]

[sqlx][3]::[sqlite][2]

# Struct SqliteQueryResult Copy item path
[code]
    pub struct SqliteQueryResult { /* private fields */ }
[/code]

## Implementations§

§

### impl [SqliteQueryResult][4]

#### pub fn rows_affected(&self) -> [u64][5]

#### pub fn last_insert_rowid(&self) -> [i64][6]

## Trait Implementations§

§

### impl [Debug][7] for [SqliteQueryResult][4]

§

#### fn [fmt][8](&self, f: &mut [Formatter][9]<'_>) -> [Result][10]<[()][11], [Error][12]>

Formats the value using the given formatter. [Read more][8]

§

### impl [Default][13] for [SqliteQueryResult][4]

§

#### fn [default][14]() -> [SqliteQueryResult][4]

Returns the “default value” for a type. [Read more][14]

§

### impl [Extend][15]<[SqliteQueryResult][4]> for [SqliteQueryResult][4]

§

#### fn [extend][16]<T>(&mut self, iter: T)

where T: [IntoIterator][17]<Item = [SqliteQueryResult][4]>,

Extends a collection with the contents of an iterator. [Read more][16]

[Source][18]§

#### fn [extend_one][19](&mut self, item: A)

🔬This is a nightly-only experimental API. (`extend_one`)

Extends a collection with exactly one element.

[Source][20]§

#### fn [extend_reserve][21](&mut self, additional: [usize][22])

🔬This is a nightly-only experimental API. (`extend_one`)

Reserves capacity in a collection for the given number of additional elements. [Read more][21]

§

### impl [From][23]<[SqliteQueryResult][4]> for [AnyQueryResult][24]

Available on **crate feature`any`** only.

§

#### fn [from][25](done: [SqliteQueryResult][4]) -> [AnyQueryResult][24]

Converts to this type from the input type.

## Auto Trait Implementations§

§

### impl [Freeze][26] for [SqliteQueryResult][4]

§

### impl [RefUnwindSafe][27] for [SqliteQueryResult][4]

§

### impl [Send][28] for [SqliteQueryResult][4]

§

### impl [Sync][29] for [SqliteQueryResult][4]

§

### impl [Unpin][30] for [SqliteQueryResult][4]

§

### impl [UnwindSafe][31] for [SqliteQueryResult][4]

## Blanket Implementations§

[Source][32]§

### impl<T> [Any][33] for T

where T: 'static + ?[Sized][34],

[Source][35]§

#### fn [type_id][36](&self) -> [TypeId][37]

Gets the `TypeId` of `self`. [Read more][36]

[Source][38]§

### impl<T> [Borrow][39]<T> for T

where T: ?[Sized][34],

[Source][40]§

#### fn [borrow][41](&self) -> [&T][42]

Immutably borrows from an owned value. [Read more][41]

[Source][43]§

### impl<T> [BorrowMut][44]<T> for T

where T: ?[Sized][34],

[Source][45]§

#### fn [borrow_mut][46](&mut self) -> [&mut T][42]

Mutably borrows from an owned value. [Read more][46]

[Source][47]§

### impl<T> [From][23]<T> for T

[Source][48]§

#### fn [from][25](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][49] [`Span`][50], returning an `Instrumented` wrapper. Read more

[Source][51]§

### impl<T, U> [Into][52]<U> for T

where U: [From][23]<T>,

[Source][53]§

#### fn [into][54](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][23]<T> for U` chooses to do.

[Source][55]§

### impl<T> [IntoEither][56] for T

[Source][57]§

#### fn [into_either][58](self, into_left: [bool][59]) -> [Either][60]<Self, Self> ⓘ

Converts `self` into a [`Left`][61] variant of [`Either<Self, Self>`][60] if `into_left` is `true`. Converts `self` into a [`Right`][62] variant of [`Either<Self, Self>`][60] otherwise. [Read more][58]

[Source][63]§

#### fn [into_either_with][64]<F>(self, into_left: F) -> [Either][60]<Self, Self> ⓘ

where F: [FnOnce][65](&Self) -> [bool][59],

Converts `self` into a [`Left`][61] variant of [`Either<Self, Self>`][60] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][62] variant of [`Either<Self, Self>`][60] otherwise. [Read more][64]

[Source][66]§

### impl<T> [Same][67] for T

[Source][68]§

#### type [Output][69] = T

Should always be `Self`

[Source][70]§

### impl<T, U> [TryFrom][71]<U> for T

where U: [Into][52]<T>,

[Source][72]§

#### type [Error][73] = [Infallible][74]

The type returned in the event of a conversion error.

[Source][75]§

#### fn [try_from][76](value: U) -> [Result][10]<T, <T as [TryFrom][71]<U>>::[Error][77]>

Performs the conversion.

[Source][78]§

### impl<T, U> [TryInto][79]<U> for T

where U: [TryFrom][71]<T>,

[Source][80]§

#### type [Error][81] = <U as [TryFrom][71]<T>>::[Error][77]

The type returned in the event of a conversion error.

[Source][82]§

#### fn [try_into][83](self) -> [Result][10]<U, <U as [TryFrom][71]<T>>::[Error][77]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][52]<Dispatch>,

Attaches the provided [`Subscriber`][84] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][85] [`Subscriber`][84] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: struct.SqliteQueryResult.html (struct sqlx::sqlite::SqliteQueryResult)
   [5]: https://doc.rust-lang.org/1.94.1/std/primitive.u64.html
   [6]: https://doc.rust-lang.org/1.94.1/std/primitive.i64.html
   [7]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [8]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [9]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [10]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [11]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [12]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [13]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [14]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [15]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.Extend.html (trait core::iter::traits::collect::Extend)
   [16]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.Extend.html#tymethod.extend
   [17]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.IntoIterator.html (trait core::iter::traits::collect::IntoIterator)
   [18]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/collect.rs.html#417
   [19]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.Extend.html#method.extend_one
   [20]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/collect.rs.html#425
   [21]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.Extend.html#method.extend_reserve
   [22]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [23]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [24]: ../any/struct.AnyQueryResult.html (struct sqlx::any::AnyQueryResult)
   [25]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [26]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [27]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [28]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [29]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [30]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [31]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [32]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [33]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [34]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [35]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [36]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [37]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [38]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [39]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [40]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [41]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [42]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [43]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [44]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [45]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [46]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [47]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [48]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [49]: super::Span::current()
   [50]: crate::Span
   [51]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [52]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [54]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [55]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [56]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [57]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [58]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [59]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [60]: ../enum.Either.html (enum sqlx::Either)
   [61]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [62]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [63]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [64]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [65]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [66]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [67]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [68]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [69]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [70]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [72]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [74]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [75]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [76]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [77]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [78]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [79]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [80]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [81]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [82]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [83]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [84]: super::Subscriber
   [85]: dispatcher#setting-the-default-subscriber

