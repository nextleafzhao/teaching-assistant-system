## PoolConnectionMetadata

## [sqlx][1]0.8.6

## PoolConnectionMetadata

### Fields

  * age
  * idle_for



### Trait Implementations

  * Debug



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



## [In sqlx::pool][2]

[sqlx][3]::[pool][2]

# Struct PoolConnectionMetadata Copy item path
[code]
    #[non_exhaustive]
    
    pub struct PoolConnectionMetadata {
        pub age: [Duration][4],
        pub idle_for: [Duration][4],
    }
[/code]

Expand description

Metadata for the connection being processed by a [`PoolOptions`][5] callback.

## Fields (Non-exhaustive)§

This struct is marked as non-exhaustive

Non-exhaustive structs could have additional fields added in future. Therefore, non-exhaustive structs cannot be constructed in external crates using the traditional `Struct { .. }` syntax; cannot be matched against without a wildcard `..`; and struct update syntax will not work.

§`age: [Duration][4]`

The duration since the connection was first opened.

For [`after_connect`][6], this is [`Duration::ZERO`][7].

§`idle_for: [Duration][4]`

The duration that the connection spent in the idle queue.

Only relevant for [`before_acquire`][8]. For other callbacks, this is [`Duration::ZERO`][7].

## Trait Implementations§

§

### impl [Debug][9] for [PoolConnectionMetadata][10]

§

#### fn [fmt][11](&self, f: &mut [Formatter][12]<'_>) -> [Result][13]<[()][14], [Error][15]>

Formats the value using the given formatter. [Read more][11]

## Auto Trait Implementations§

§

### impl [Freeze][16] for [PoolConnectionMetadata][10]

§

### impl [RefUnwindSafe][17] for [PoolConnectionMetadata][10]

§

### impl [Send][18] for [PoolConnectionMetadata][10]

§

### impl [Sync][19] for [PoolConnectionMetadata][10]

§

### impl [Unpin][20] for [PoolConnectionMetadata][10]

§

### impl [UnwindSafe][21] for [PoolConnectionMetadata][10]

## Blanket Implementations§

[Source][22]§

### impl<T> [Any][23] for T

where T: 'static + ?[Sized][24],

[Source][25]§

#### fn [type_id][26](&self) -> [TypeId][27]

Gets the `TypeId` of `self`. [Read more][26]

[Source][28]§

### impl<T> [Borrow][29]<T> for T

where T: ?[Sized][24],

[Source][30]§

#### fn [borrow][31](&self) -> [&T][32]

Immutably borrows from an owned value. [Read more][31]

[Source][33]§

### impl<T> [BorrowMut][34]<T> for T

where T: ?[Sized][24],

[Source][35]§

#### fn [borrow_mut][36](&mut self) -> [&mut T][32]

Mutably borrows from an owned value. [Read more][36]

[Source][37]§

### impl<T> [From][38]<T> for T

[Source][39]§

#### fn [from][40](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][41] [`Span`][42], returning an `Instrumented` wrapper. Read more

[Source][43]§

### impl<T, U> [Into][44]<U> for T

where U: [From][38]<T>,

[Source][45]§

#### fn [into][46](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][38]<T> for U` chooses to do.

[Source][47]§

### impl<T> [IntoEither][48] for T

[Source][49]§

#### fn [into_either][50](self, into_left: [bool][51]) -> [Either][52]<Self, Self> ⓘ

Converts `self` into a [`Left`][53] variant of [`Either<Self, Self>`][52] if `into_left` is `true`. Converts `self` into a [`Right`][54] variant of [`Either<Self, Self>`][52] otherwise. [Read more][50]

[Source][55]§

#### fn [into_either_with][56]<F>(self, into_left: F) -> [Either][52]<Self, Self> ⓘ

where F: [FnOnce][57](&Self) -> [bool][51],

Converts `self` into a [`Left`][53] variant of [`Either<Self, Self>`][52] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][54] variant of [`Either<Self, Self>`][52] otherwise. [Read more][56]

[Source][58]§

### impl<T> [Same][59] for T

[Source][60]§

#### type [Output][61] = T

Should always be `Self`

[Source][62]§

### impl<T, U> [TryFrom][63]<U> for T

where U: [Into][44]<T>,

[Source][64]§

#### type [Error][65] = [Infallible][66]

The type returned in the event of a conversion error.

[Source][67]§

#### fn [try_from][68](value: U) -> [Result][13]<T, <T as [TryFrom][63]<U>>::[Error][69]>

Performs the conversion.

[Source][70]§

### impl<T, U> [TryInto][71]<U> for T

where U: [TryFrom][63]<T>,

[Source][72]§

#### type [Error][73] = <U as [TryFrom][63]<T>>::[Error][69]

The type returned in the event of a conversion error.

[Source][74]§

#### fn [try_into][75](self) -> [Result][13]<U, <U as [TryFrom][63]<T>>::[Error][69]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][44]<Dispatch>,

Attaches the provided [`Subscriber`][76] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][77] [`Subscriber`][76] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/time/struct.Duration.html (struct core::time::Duration)
   [5]: struct.PoolOptions.html (struct sqlx::pool::PoolOptions)
   [6]: struct.PoolOptions.html#method.after_connect (method sqlx::pool::PoolOptions::after_connect)
   [7]: https://doc.rust-lang.org/1.94.1/core/time/struct.Duration.html#associatedconstant.ZERO (associated constant core::time::Duration::ZERO)
   [8]: struct.PoolOptions.html#method.before_acquire (method sqlx::pool::PoolOptions::before_acquire)
   [9]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [10]: struct.PoolConnectionMetadata.html (struct sqlx::pool::PoolConnectionMetadata)
   [11]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [12]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [13]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [14]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [15]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [16]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [17]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [18]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [19]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [20]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [21]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [22]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [23]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [24]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [25]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [26]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [27]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [28]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [29]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [30]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [31]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [32]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [33]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [34]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [35]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [36]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [37]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [38]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [39]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [40]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [41]: super::Span::current()
   [42]: crate::Span
   [43]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [44]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [45]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [46]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [47]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [48]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [49]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [50]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [51]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [52]: ../enum.Either.html (enum sqlx::Either)
   [53]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [54]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [55]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [56]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [57]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [58]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [59]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [60]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [61]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [62]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [63]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [64]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [65]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [67]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [69]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [70]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [72]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [74]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [75]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [76]: super::Subscriber
   [77]: dispatcher#setting-the-default-subscriber

