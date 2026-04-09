## UnexpectedNullError

## [sqlx][1]0.8.6

## UnexpectedNullError

### Trait Implementations

  * Debug
  * Display
  * Error



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
  * ToString
  * TryFrom<U>
  * TryInto<U>
  * WithSubscriber



## [In sqlx::error][2]

[sqlx][3]::[error][2]

# Struct UnexpectedNullError Copy item path
[code]
    pub struct UnexpectedNullError;
[/code]

Expand description

An unexpected `NULL` was encountered during decoding.

Returned from [`Row::get`][4] if the value from the database is `NULL`, and you are not decoding into an `Option`.

## Trait Implementations§

§

### impl [Debug][5] for [UnexpectedNullError][6]

§

#### fn [fmt][7](&self, f: &mut [Formatter][8]<'_>) -> [Result][9]<[()][10], [Error][11]>

Formats the value using the given formatter. [Read more][7]

§

### impl [Display][12] for [UnexpectedNullError][6]

§

#### fn [fmt][13](&self, __formatter: &mut [Formatter][8]<'_>) -> [Result][9]<[()][10], [Error][11]>

Formats the value using the given formatter. [Read more][13]

§

### impl [Error][14] for [UnexpectedNullError][6]

1.30.0 · [Source][15]§

#### fn [source][16](&self) -> [Option][17]<&(dyn [Error][14] \+ 'static)>

Returns the lower-level source of this error, if any. [Read more][16]

1.0.0 · [Source][18]§

#### fn [description][19](&self) -> &[str][20]

👎Deprecated since 1.42.0: use the Display impl or to_string()

[Read more][19]

1.0.0 · [Source][21]§

#### fn [cause][22](&self) -> [Option][17]<&dyn [Error][14]>

👎Deprecated since 1.33.0: replaced by Error::source, which can support downcasting

[Source][23]§

#### fn [provide][24]<'a>(&'a self, request: &mut [Request][25]<'a>)

🔬This is a nightly-only experimental API. (`error_generic_member_access`)

Provides type-based access to context intended for error reports. [Read more][24]

## Auto Trait Implementations§

§

### impl [Freeze][26] for [UnexpectedNullError][6]

§

### impl [RefUnwindSafe][27] for [UnexpectedNullError][6]

§

### impl [Send][28] for [UnexpectedNullError][6]

§

### impl [Sync][29] for [UnexpectedNullError][6]

§

### impl [Unpin][30] for [UnexpectedNullError][6]

§

### impl [UnwindSafe][31] for [UnexpectedNullError][6]

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

### impl<T> [From][48]<T> for T

[Source][49]§

#### fn [from][50](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][51] [`Span`][52], returning an `Instrumented` wrapper. Read more

[Source][53]§

### impl<T, U> [Into][54]<U> for T

where U: [From][48]<T>,

[Source][55]§

#### fn [into][56](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][48]<T> for U` chooses to do.

[Source][57]§

### impl<T> [IntoEither][58] for T

[Source][59]§

#### fn [into_either][60](self, into_left: [bool][61]) -> [Either][62]<Self, Self> ⓘ

Converts `self` into a [`Left`][63] variant of [`Either<Self, Self>`][62] if `into_left` is `true`. Converts `self` into a [`Right`][64] variant of [`Either<Self, Self>`][62] otherwise. [Read more][60]

[Source][65]§

#### fn [into_either_with][66]<F>(self, into_left: F) -> [Either][62]<Self, Self> ⓘ

where F: [FnOnce][67](&Self) -> [bool][61],

Converts `self` into a [`Left`][63] variant of [`Either<Self, Self>`][62] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][64] variant of [`Either<Self, Self>`][62] otherwise. [Read more][66]

[Source][68]§

### impl<T> [Same][69] for T

[Source][70]§

#### type [Output][71] = T

Should always be `Self`

[Source][72]§

### impl<T> [ToString][73] for T

where T: [Display][12] \+ ?[Sized][34],

[Source][74]§

#### fn [to_string][75](&self) -> [String][76]

Converts the given value to a `String`. [Read more][75]

[Source][77]§

### impl<T, U> [TryFrom][78]<U> for T

where U: [Into][54]<T>,

[Source][79]§

#### type [Error][80] = [Infallible][81]

The type returned in the event of a conversion error.

[Source][82]§

#### fn [try_from][83](value: U) -> [Result][9]<T, <T as [TryFrom][78]<U>>::[Error][84]>

Performs the conversion.

[Source][85]§

### impl<T, U> [TryInto][86]<U> for T

where U: [TryFrom][78]<T>,

[Source][87]§

#### type [Error][88] = <U as [TryFrom][78]<T>>::[Error][84]

The type returned in the event of a conversion error.

[Source][89]§

#### fn [try_into][90](self) -> [Result][9]<U, <U as [TryFrom][78]<T>>::[Error][84]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][54]<Dispatch>,

Attaches the provided [`Subscriber`][91] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][92] [`Subscriber`][91] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../trait.Row.html#method.get (method sqlx::Row::get)
   [5]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [6]: struct.UnexpectedNullError.html (struct sqlx::error::UnexpectedNullError)
   [7]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [8]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [9]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [10]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [11]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [12]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [13]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html#tymethod.fmt
   [14]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [15]: https://doc.rust-lang.org/1.94.1/src/core/error.rs.html#111
   [16]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.source
   [17]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [18]: https://doc.rust-lang.org/1.94.1/src/core/error.rs.html#137
   [19]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.description
   [20]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [21]: https://doc.rust-lang.org/1.94.1/src/core/error.rs.html#147
   [22]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.cause
   [23]: https://doc.rust-lang.org/1.94.1/src/core/error.rs.html#260
   [24]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.provide
   [25]: https://doc.rust-lang.org/1.94.1/core/error/struct.Request.html (struct core::error::Request)
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
   [48]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [49]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [50]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [51]: super::Span::current()
   [52]: crate::Span
   [53]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [54]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [56]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [57]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [58]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [59]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [60]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [61]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [62]: ../enum.Either.html (enum sqlx::Either)
   [63]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [64]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [65]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [66]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [67]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [68]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [69]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [70]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [71]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [72]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2893
   [73]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html (trait alloc::string::ToString)
   [74]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2895
   [75]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html#tymethod.to_string
   [76]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [77]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [78]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [79]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [80]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [81]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [82]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [83]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [84]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [85]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [86]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [87]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [88]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [89]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [90]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [91]: super::Subscriber
   [92]: dispatcher#setting-the-default-subscriber

