## IsNull

## [sqlx][1]0.8.6

## IsNull

### Variants

  * No
  * Yes



### Methods

  * is_null



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



## [In sqlx::encode][2]

[sqlx][3]::[encode][2]

# Enum IsNull Copy item path
[code]
    pub enum IsNull {
        Yes,
        No,
    }
[/code]

Expand description

The return type of [Encode::encode][4].

## Variants§

§

### Yes

The value is null; no data was written.

§

### No

The value is not null.

This does not mean that data was written.

## Implementations§

§

### impl [IsNull][5]

#### pub fn is_null(&self) -> [bool][6]

## Auto Trait Implementations§

§

### impl [Freeze][7] for [IsNull][5]

§

### impl [RefUnwindSafe][8] for [IsNull][5]

§

### impl [Send][9] for [IsNull][5]

§

### impl [Sync][10] for [IsNull][5]

§

### impl [Unpin][11] for [IsNull][5]

§

### impl [UnwindSafe][12] for [IsNull][5]

## Blanket Implementations§

[Source][13]§

### impl<T> [Any][14] for T

where T: 'static + ?[Sized][15],

[Source][16]§

#### fn [type_id][17](&self) -> [TypeId][18]

Gets the `TypeId` of `self`. [Read more][17]

[Source][19]§

### impl<T> [Borrow][20]<T> for T

where T: ?[Sized][15],

[Source][21]§

#### fn [borrow][22](&self) -> [&T][23]

Immutably borrows from an owned value. [Read more][22]

[Source][24]§

### impl<T> [BorrowMut][25]<T> for T

where T: ?[Sized][15],

[Source][26]§

#### fn [borrow_mut][27](&mut self) -> [&mut T][23]

Mutably borrows from an owned value. [Read more][27]

[Source][28]§

### impl<T> [From][29]<T> for T

[Source][30]§

#### fn [from][31](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][32] [`Span`][33], returning an `Instrumented` wrapper. Read more

[Source][34]§

### impl<T, U> [Into][35]<U> for T

where U: [From][29]<T>,

[Source][36]§

#### fn [into][37](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][29]<T> for U` chooses to do.

[Source][38]§

### impl<T> [IntoEither][39] for T

[Source][40]§

#### fn [into_either][41](self, into_left: [bool][6]) -> [Either][42]<Self, Self> ⓘ

Converts `self` into a [`Left`][43] variant of [`Either<Self, Self>`][42] if `into_left` is `true`. Converts `self` into a [`Right`][44] variant of [`Either<Self, Self>`][42] otherwise. [Read more][41]

[Source][45]§

#### fn [into_either_with][46]<F>(self, into_left: F) -> [Either][42]<Self, Self> ⓘ

where F: [FnOnce][47](&Self) -> [bool][6],

Converts `self` into a [`Left`][43] variant of [`Either<Self, Self>`][42] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][44] variant of [`Either<Self, Self>`][42] otherwise. [Read more][46]

[Source][48]§

### impl<T> [Same][49] for T

[Source][50]§

#### type [Output][51] = T

Should always be `Self`

[Source][52]§

### impl<T, U> [TryFrom][53]<U> for T

where U: [Into][35]<T>,

[Source][54]§

#### type [Error][55] = [Infallible][56]

The type returned in the event of a conversion error.

[Source][57]§

#### fn [try_from][58](value: U) -> [Result][59]<T, <T as [TryFrom][53]<U>>::[Error][60]>

Performs the conversion.

[Source][61]§

### impl<T, U> [TryInto][62]<U> for T

where U: [TryFrom][53]<T>,

[Source][63]§

#### type [Error][64] = <U as [TryFrom][53]<T>>::[Error][60]

The type returned in the event of a conversion error.

[Source][65]§

#### fn [try_into][66](self) -> [Result][59]<U, <U as [TryFrom][53]<T>>::[Error][60]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][35]<Dispatch>,

Attaches the provided [`Subscriber`][67] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][68] [`Subscriber`][67] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../trait.Encode.html#method.encode (method sqlx::Encode::encode)
   [5]: enum.IsNull.html (enum sqlx::encode::IsNull)
   [6]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [7]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [8]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [9]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [10]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [11]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [12]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [13]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [14]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [15]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [16]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [17]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [18]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [19]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [20]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [21]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [22]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [23]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [24]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [25]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [26]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [27]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [28]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [29]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [30]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [31]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [32]: super::Span::current()
   [33]: crate::Span
   [34]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [35]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [36]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [37]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [38]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [39]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [40]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [41]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [42]: ../enum.Either.html (enum sqlx::Either)
   [43]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [44]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [45]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [46]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [47]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [48]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [49]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [50]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [51]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [52]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [53]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [54]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [55]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [56]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [57]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [58]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [59]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [60]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [61]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [62]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [63]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [65]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [67]: super::Subscriber
   [68]: dispatcher#setting-the-default-subscriber

