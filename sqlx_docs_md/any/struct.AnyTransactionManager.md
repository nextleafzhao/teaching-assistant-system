## AnyTransactionManager

## [sqlx][1]0.8.6

## AnyTransactionManager

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

# Struct AnyTransactionManager Copy item path
[code]
    pub struct AnyTransactionManager;
[/code]

## Auto Trait Implementations§

§

### impl [Freeze][4] for [AnyTransactionManager][5]

§

### impl [RefUnwindSafe][6] for [AnyTransactionManager][5]

§

### impl [Send][7] for [AnyTransactionManager][5]

§

### impl [Sync][8] for [AnyTransactionManager][5]

§

### impl [Unpin][9] for [AnyTransactionManager][5]

§

### impl [UnwindSafe][10] for [AnyTransactionManager][5]

## Blanket Implementations§

[Source][11]§

### impl<T> [Any][12] for T

where T: 'static + ?[Sized][13],

[Source][14]§

#### fn [type_id][15](&self) -> [TypeId][16]

Gets the `TypeId` of `self`. [Read more][15]

[Source][17]§

### impl<T> [Borrow][18]<T> for T

where T: ?[Sized][13],

[Source][19]§

#### fn [borrow][20](&self) -> [&T][21]

Immutably borrows from an owned value. [Read more][20]

[Source][22]§

### impl<T> [BorrowMut][23]<T> for T

where T: ?[Sized][13],

[Source][24]§

#### fn [borrow_mut][25](&mut self) -> [&mut T][21]

Mutably borrows from an owned value. [Read more][25]

[Source][26]§

### impl<T> [From][27]<T> for T

[Source][28]§

#### fn [from][29](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][30] [`Span`][31], returning an `Instrumented` wrapper. Read more

[Source][32]§

### impl<T, U> [Into][33]<U> for T

where U: [From][27]<T>,

[Source][34]§

#### fn [into][35](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][27]<T> for U` chooses to do.

[Source][36]§

### impl<T> [IntoEither][37] for T

[Source][38]§

#### fn [into_either][39](self, into_left: [bool][40]) -> [Either][41]<Self, Self> ⓘ

Converts `self` into a [`Left`][42] variant of [`Either<Self, Self>`][41] if `into_left` is `true`. Converts `self` into a [`Right`][43] variant of [`Either<Self, Self>`][41] otherwise. [Read more][39]

[Source][44]§

#### fn [into_either_with][45]<F>(self, into_left: F) -> [Either][41]<Self, Self> ⓘ

where F: [FnOnce][46](&Self) -> [bool][40],

Converts `self` into a [`Left`][42] variant of [`Either<Self, Self>`][41] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][43] variant of [`Either<Self, Self>`][41] otherwise. [Read more][45]

[Source][47]§

### impl<T> [Same][48] for T

[Source][49]§

#### type [Output][50] = T

Should always be `Self`

[Source][51]§

### impl<T, U> [TryFrom][52]<U> for T

where U: [Into][33]<T>,

[Source][53]§

#### type [Error][54] = [Infallible][55]

The type returned in the event of a conversion error.

[Source][56]§

#### fn [try_from][57](value: U) -> [Result][58]<T, <T as [TryFrom][52]<U>>::[Error][59]>

Performs the conversion.

[Source][60]§

### impl<T, U> [TryInto][61]<U> for T

where U: [TryFrom][52]<T>,

[Source][62]§

#### type [Error][63] = <U as [TryFrom][52]<T>>::[Error][59]

The type returned in the event of a conversion error.

[Source][64]§

#### fn [try_into][65](self) -> [Result][58]<U, <U as [TryFrom][52]<T>>::[Error][59]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][33]<Dispatch>,

Attaches the provided [`Subscriber`][66] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][67] [`Subscriber`][66] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [5]: struct.AnyTransactionManager.html (struct sqlx::any::AnyTransactionManager)
   [6]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [7]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [8]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [9]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [10]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [11]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [12]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [13]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [14]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [15]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [16]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [17]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [18]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [19]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [20]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [21]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [22]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [23]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [24]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [25]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [26]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [27]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [28]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [29]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [30]: super::Span::current()
   [31]: crate::Span
   [32]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [33]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [34]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [35]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [36]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [37]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [38]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [39]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [40]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [41]: ../enum.Either.html (enum sqlx::Either)
   [42]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [43]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [44]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [45]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [46]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [47]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [48]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [49]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [50]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [51]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [52]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [54]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [55]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [56]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [57]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [58]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [59]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [60]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [61]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [62]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [63]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [64]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [65]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [66]: super::Subscriber
   [67]: dispatcher#setting-the-default-subscriber

