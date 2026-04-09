## ErrorKind

## [sqlx][1]0.8.6

## ErrorKind

### Variants

  * CheckViolation
  * ForeignKeyViolation
  * NotNullViolation
  * Other
  * UniqueViolation



### Trait Implementations

  * Debug
  * Eq
  * PartialEq
  * StructuralPartialEq



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
  * Equivalent<K>
  * Equivalent<K>
  * From<T>
  * Instrument
  * Into<U>
  * IntoEither
  * Same
  * TryFrom<U>
  * TryInto<U>
  * WithSubscriber



## [In sqlx::error][2]

[sqlx][3]::[error][2]

# Enum ErrorKind Copy item path
[code]
    #[non_exhaustive]
    
    pub enum ErrorKind {
        UniqueViolation,
        ForeignKeyViolation,
        NotNullViolation,
        CheckViolation,
        Other,
    }
[/code]

Expand description

The error kind.

This enum is to be used to identify frequent errors that can be handled by the program. Although it currently only supports constraint violations, the type may grow in the future.

## Variants (Non-exhaustive)§

This enum is marked as non-exhaustive

Non-exhaustive enums could have additional variants added in future. Therefore, when matching against variants of non-exhaustive enums, an extra wildcard arm must be added to account for any future variants.

§

### UniqueViolation

Unique/primary key constraint violation.

§

### ForeignKeyViolation

Foreign key constraint violation.

§

### NotNullViolation

Not-null constraint violation.

§

### CheckViolation

Check constraint violation.

§

### Other

An unmapped error.

## Trait Implementations§

§

### impl [Debug][4] for [ErrorKind][5]

§

#### fn [fmt][6](&self, f: &mut [Formatter][7]<'_>) -> [Result][8]<[()][9], [Error][10]>

Formats the value using the given formatter. [Read more][6]

§

### impl [PartialEq][11] for [ErrorKind][5]

§

#### fn [eq][12](&self, other: &[ErrorKind][5]) -> [bool][13]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][14]§

#### fn [ne][15](&self, other: [&Rhs][16]) -> [bool][13]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl [Eq][17] for [ErrorKind][5]

§

### impl [StructuralPartialEq][18] for [ErrorKind][5]

## Auto Trait Implementations§

§

### impl [Freeze][19] for [ErrorKind][5]

§

### impl [RefUnwindSafe][20] for [ErrorKind][5]

§

### impl [Send][21] for [ErrorKind][5]

§

### impl [Sync][22] for [ErrorKind][5]

§

### impl [Unpin][23] for [ErrorKind][5]

§

### impl [UnwindSafe][24] for [ErrorKind][5]

## Blanket Implementations§

[Source][25]§

### impl<T> [Any][26] for T

where T: 'static + ?[Sized][27],

[Source][28]§

#### fn [type_id][29](&self) -> [TypeId][30]

Gets the `TypeId` of `self`. [Read more][29]

[Source][31]§

### impl<T> [Borrow][32]<T> for T

where T: ?[Sized][27],

[Source][33]§

#### fn [borrow][34](&self) -> [&T][16]

Immutably borrows from an owned value. [Read more][34]

[Source][35]§

### impl<T> [BorrowMut][36]<T> for T

where T: ?[Sized][27],

[Source][37]§

#### fn [borrow_mut][38](&mut self) -> [&mut T][16]

Mutably borrows from an owned value. [Read more][38]

§

### impl<Q, K> Equivalent<K> for Q

where Q: [Eq][17] \+ ?[Sized][27], K: [Borrow][32]<Q> \+ ?[Sized][27],

§

#### fn equivalent(&self, key: [&K][16]) -> [bool][13]

Compare self to `key` and return `true` if they are equal.

§

### impl<Q, K> Equivalent<K> for Q

where Q: [Eq][17] \+ ?[Sized][27], K: [Borrow][32]<Q> \+ ?[Sized][27],

§

#### fn equivalent(&self, key: [&K][16]) -> [bool][13]

Checks if this value is equivalent to the given key. Read more

[Source][39]§

### impl<T> [From][40]<T> for T

[Source][41]§

#### fn [from][42](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][43] [`Span`][44], returning an `Instrumented` wrapper. Read more

[Source][45]§

### impl<T, U> [Into][46]<U> for T

where U: [From][40]<T>,

[Source][47]§

#### fn [into][48](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][40]<T> for U` chooses to do.

[Source][49]§

### impl<T> [IntoEither][50] for T

[Source][51]§

#### fn [into_either][52](self, into_left: [bool][13]) -> [Either][53]<Self, Self> ⓘ

Converts `self` into a [`Left`][54] variant of [`Either<Self, Self>`][53] if `into_left` is `true`. Converts `self` into a [`Right`][55] variant of [`Either<Self, Self>`][53] otherwise. [Read more][52]

[Source][56]§

#### fn [into_either_with][57]<F>(self, into_left: F) -> [Either][53]<Self, Self> ⓘ

where F: [FnOnce][58](&Self) -> [bool][13],

Converts `self` into a [`Left`][54] variant of [`Either<Self, Self>`][53] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][55] variant of [`Either<Self, Self>`][53] otherwise. [Read more][57]

[Source][59]§

### impl<T> [Same][60] for T

[Source][61]§

#### type [Output][62] = T

Should always be `Self`

[Source][63]§

### impl<T, U> [TryFrom][64]<U> for T

where U: [Into][46]<T>,

[Source][65]§

#### type [Error][66] = [Infallible][67]

The type returned in the event of a conversion error.

[Source][68]§

#### fn [try_from][69](value: U) -> [Result][8]<T, <T as [TryFrom][64]<U>>::[Error][70]>

Performs the conversion.

[Source][71]§

### impl<T, U> [TryInto][72]<U> for T

where U: [TryFrom][64]<T>,

[Source][73]§

#### type [Error][74] = <U as [TryFrom][64]<T>>::[Error][70]

The type returned in the event of a conversion error.

[Source][75]§

#### fn [try_into][76](self) -> [Result][8]<U, <U as [TryFrom][64]<T>>::[Error][70]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][46]<Dispatch>,

Attaches the provided [`Subscriber`][77] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][78] [`Subscriber`][77] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [5]: enum.ErrorKind.html (enum sqlx::error::ErrorKind)
   [6]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [7]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [8]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [9]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [10]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [11]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [12]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [14]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [15]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [16]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [17]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [18]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [19]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [20]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [21]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [22]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [23]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [24]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [25]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [26]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [27]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [28]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [29]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [30]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [31]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [32]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [33]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [34]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [35]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [36]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [37]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [38]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [39]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [40]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [41]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [42]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [43]: super::Span::current()
   [44]: crate::Span
   [45]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [46]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [47]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [48]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [49]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [50]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [51]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [52]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [53]: ../enum.Either.html (enum sqlx::Either)
   [54]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [55]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [56]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [57]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [58]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [59]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [60]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [61]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [62]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [63]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [65]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [67]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [68]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [69]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [71]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [72]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [73]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [74]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [75]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [76]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [77]: super::Subscriber
   [78]: dispatcher#setting-the-default-subscriber

