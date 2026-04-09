## AnyQueryResult

## [sqlx][1]0.8.6

## AnyQueryResult

### Methods

  * last_insert_id
  * rows_affected



### Trait Implementations

  * Debug
  * Default
  * Extend<AnyQueryResult>
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



## [In sqlx::any][2]

[sqlx][3]::[any][2]

# Struct AnyQueryResult Copy item path
[code]
    pub struct AnyQueryResult { /* private fields */ }
[/code]

## Implementations§

§

### impl [AnyQueryResult][4]

#### pub fn rows_affected(&self) -> [u64][5]

#### pub fn last_insert_id(&self) -> [Option][6]<[i64][7]>

## Trait Implementations§

§

### impl [Debug][8] for [AnyQueryResult][4]

§

#### fn [fmt][9](&self, f: &mut [Formatter][10]<'_>) -> [Result][11]<[()][12], [Error][13]>

Formats the value using the given formatter. [Read more][9]

§

### impl [Default][14] for [AnyQueryResult][4]

§

#### fn [default][15]() -> [AnyQueryResult][4]

Returns the “default value” for a type. [Read more][15]

§

### impl [Extend][16]<[AnyQueryResult][4]> for [AnyQueryResult][4]

§

#### fn [extend][17]<T>(&mut self, iter: T)

where T: [IntoIterator][18]<Item = [AnyQueryResult][4]>,

Extends a collection with the contents of an iterator. [Read more][17]

[Source][19]§

#### fn [extend_one][20](&mut self, item: A)

🔬This is a nightly-only experimental API. (`extend_one`)

Extends a collection with exactly one element.

[Source][21]§

#### fn [extend_reserve][22](&mut self, additional: [usize][23])

🔬This is a nightly-only experimental API. (`extend_one`)

Reserves capacity in a collection for the given number of additional elements. [Read more][22]

§

### impl [From][24]<[SqliteQueryResult][25]> for [AnyQueryResult][4]

Available on **crate feature`any`** only.

§

#### fn [from][26](done: [SqliteQueryResult][25]) -> [AnyQueryResult][4]

Converts to this type from the input type.

## Auto Trait Implementations§

§

### impl [Freeze][27] for [AnyQueryResult][4]

§

### impl [RefUnwindSafe][28] for [AnyQueryResult][4]

§

### impl [Send][29] for [AnyQueryResult][4]

§

### impl [Sync][30] for [AnyQueryResult][4]

§

### impl [Unpin][31] for [AnyQueryResult][4]

§

### impl [UnwindSafe][32] for [AnyQueryResult][4]

## Blanket Implementations§

[Source][33]§

### impl<T> [Any][34] for T

where T: 'static + ?[Sized][35],

[Source][36]§

#### fn [type_id][37](&self) -> [TypeId][38]

Gets the `TypeId` of `self`. [Read more][37]

[Source][39]§

### impl<T> [Borrow][40]<T> for T

where T: ?[Sized][35],

[Source][41]§

#### fn [borrow][42](&self) -> [&T][43]

Immutably borrows from an owned value. [Read more][42]

[Source][44]§

### impl<T> [BorrowMut][45]<T> for T

where T: ?[Sized][35],

[Source][46]§

#### fn [borrow_mut][47](&mut self) -> [&mut T][43]

Mutably borrows from an owned value. [Read more][47]

[Source][48]§

### impl<T> [From][24]<T> for T

[Source][49]§

#### fn [from][26](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][50] [`Span`][51], returning an `Instrumented` wrapper. Read more

[Source][52]§

### impl<T, U> [Into][53]<U> for T

where U: [From][24]<T>,

[Source][54]§

#### fn [into][55](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][24]<T> for U` chooses to do.

[Source][56]§

### impl<T> [IntoEither][57] for T

[Source][58]§

#### fn [into_either][59](self, into_left: [bool][60]) -> [Either][61]<Self, Self> ⓘ

Converts `self` into a [`Left`][62] variant of [`Either<Self, Self>`][61] if `into_left` is `true`. Converts `self` into a [`Right`][63] variant of [`Either<Self, Self>`][61] otherwise. [Read more][59]

[Source][64]§

#### fn [into_either_with][65]<F>(self, into_left: F) -> [Either][61]<Self, Self> ⓘ

where F: [FnOnce][66](&Self) -> [bool][60],

Converts `self` into a [`Left`][62] variant of [`Either<Self, Self>`][61] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][63] variant of [`Either<Self, Self>`][61] otherwise. [Read more][65]

[Source][67]§

### impl<T> [Same][68] for T

[Source][69]§

#### type [Output][70] = T

Should always be `Self`

[Source][71]§

### impl<T, U> [TryFrom][72]<U> for T

where U: [Into][53]<T>,

[Source][73]§

#### type [Error][74] = [Infallible][75]

The type returned in the event of a conversion error.

[Source][76]§

#### fn [try_from][77](value: U) -> [Result][11]<T, <T as [TryFrom][72]<U>>::[Error][78]>

Performs the conversion.

[Source][79]§

### impl<T, U> [TryInto][80]<U> for T

where U: [TryFrom][72]<T>,

[Source][81]§

#### type [Error][82] = <U as [TryFrom][72]<T>>::[Error][78]

The type returned in the event of a conversion error.

[Source][83]§

#### fn [try_into][84](self) -> [Result][11]<U, <U as [TryFrom][72]<T>>::[Error][78]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][53]<Dispatch>,

Attaches the provided [`Subscriber`][85] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][86] [`Subscriber`][85] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: struct.AnyQueryResult.html (struct sqlx::any::AnyQueryResult)
   [5]: https://doc.rust-lang.org/1.94.1/std/primitive.u64.html
   [6]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [7]: https://doc.rust-lang.org/1.94.1/std/primitive.i64.html
   [8]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [9]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [10]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [11]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [12]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [13]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [14]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [15]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [16]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.Extend.html (trait core::iter::traits::collect::Extend)
   [17]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.Extend.html#tymethod.extend
   [18]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.IntoIterator.html (trait core::iter::traits::collect::IntoIterator)
   [19]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/collect.rs.html#417
   [20]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.Extend.html#method.extend_one
   [21]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/collect.rs.html#425
   [22]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.Extend.html#method.extend_reserve
   [23]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [24]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [25]: ../sqlite/struct.SqliteQueryResult.html (struct sqlx::sqlite::SqliteQueryResult)
   [26]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [27]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [28]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [29]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [30]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [31]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [32]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [33]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [34]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [35]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [36]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [37]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [38]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [39]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [40]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [41]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [42]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [43]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [44]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [45]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [47]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [48]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [49]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [50]: super::Span::current()
   [51]: crate::Span
   [52]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [53]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [54]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [55]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [56]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [57]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [58]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [59]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [60]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [61]: ../enum.Either.html (enum sqlx::Either)
   [62]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [63]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [64]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [65]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [66]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [67]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [68]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [69]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [70]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [71]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [72]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [73]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [74]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [75]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [76]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [77]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [78]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [79]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [80]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [81]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [82]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [83]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [84]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [85]: super::Subscriber
   [86]: dispatcher#setting-the-default-subscriber

