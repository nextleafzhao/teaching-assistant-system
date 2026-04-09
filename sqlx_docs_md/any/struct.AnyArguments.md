## AnyArguments

## [sqlx][1]0.8.6

## AnyArguments

### Trait Implementations

  * Arguments<'q>
  * Default
  * IntoArguments<'q, <AnyArguments<'q> as Arguments<'q>>::Database>



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

# Struct AnyArguments Copy item path
[code]
    pub struct AnyArguments<'q> { /* private fields */ }
[/code]

## Trait Implementations§

§

### impl<'q> [Arguments][4]<'q> for [AnyArguments][5]<'q>

§

#### type [Database][6] = [Any][7]

§

#### fn [reserve][8](&mut self, additional: [usize][9], _size: [usize][9])

Reserves the capacity for at least `additional` more values (of `size` total bytes) to be added to the arguments without a reallocation.

§

#### fn [add][10]<T>(&mut self, value: T) -> [Result][11]<[()][12], [Box][13]<dyn [Error][14] \+ [Send][15] \+ [Sync][16]>>

where T: 'q + [Encode][17]<'q, <[AnyArguments][5]<'q> as [Arguments][4]<'q>>::[Database][18]> \+ [Type][19]<<[AnyArguments][5]<'q> as [Arguments][4]<'q>>::[Database][18]>,

Add the value to the end of the arguments.

§

#### fn [len][20](&self) -> [usize][9]

The number of arguments that were already added.

§

#### fn [format_placeholder][21]<W>(&self, writer: [&mut W][22]) -> [Result][11]<[()][12], [Error][23]>

where W: [Write][24],

§

### impl<'q> [Default][25] for [AnyArguments][5]<'q>

§

#### fn [default][26]() -> [AnyArguments][5]<'q>

Returns the “default value” for a type. [Read more][26]

§

### impl<'q> [IntoArguments][27]<'q, <[AnyArguments][5]<'q> as [Arguments][4]<'q>>::[Database][18]> for [AnyArguments][5]<'q>

§

#### fn [into_arguments][28](self) -> [AnyArguments][5]<'q>

## Auto Trait Implementations§

§

### impl<'q> [Freeze][29] for [AnyArguments][5]<'q>

§

### impl<'q> [RefUnwindSafe][30] for [AnyArguments][5]<'q>

§

### impl<'q> [Send][15] for [AnyArguments][5]<'q>

§

### impl<'q> [Sync][16] for [AnyArguments][5]<'q>

§

### impl<'q> [Unpin][31] for [AnyArguments][5]<'q>

§

### impl<'q> [UnwindSafe][32] for [AnyArguments][5]<'q>

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

#### fn [borrow][42](&self) -> [&T][22]

Immutably borrows from an owned value. [Read more][42]

[Source][43]§

### impl<T> [BorrowMut][44]<T> for T

where T: ?[Sized][35],

[Source][45]§

#### fn [borrow_mut][46](&mut self) -> [&mut T][22]

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

### impl<T, U> [TryFrom][73]<U> for T

where U: [Into][54]<T>,

[Source][74]§

#### type [Error][75] = [Infallible][76]

The type returned in the event of a conversion error.

[Source][77]§

#### fn [try_from][78](value: U) -> [Result][11]<T, <T as [TryFrom][73]<U>>::[Error][79]>

Performs the conversion.

[Source][80]§

### impl<T, U> [TryInto][81]<U> for T

where U: [TryFrom][73]<T>,

[Source][82]§

#### type [Error][83] = <U as [TryFrom][73]<T>>::[Error][79]

The type returned in the event of a conversion error.

[Source][84]§

#### fn [try_into][85](self) -> [Result][11]<U, <U as [TryFrom][73]<T>>::[Error][79]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][54]<Dispatch>,

Attaches the provided [`Subscriber`][86] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][87] [`Subscriber`][86] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../trait.Arguments.html (trait sqlx::Arguments)
   [5]: struct.AnyArguments.html (struct sqlx::any::AnyArguments)
   [6]: ../trait.Arguments.html#associatedtype.Database
   [7]: ../struct.Any.html (struct sqlx::Any)
   [8]: ../trait.Arguments.html#tymethod.reserve
   [9]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [10]: ../trait.Arguments.html#tymethod.add
   [11]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [12]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [13]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [14]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [15]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [16]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [17]: ../trait.Encode.html (trait sqlx::Encode)
   [18]: ../trait.Arguments.html#associatedtype.Database (type sqlx::Arguments::Database)
   [19]: ../trait.Type.html (trait sqlx::Type)
   [20]: ../trait.Arguments.html#tymethod.len
   [21]: ../trait.Arguments.html#method.format_placeholder
   [22]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [23]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [24]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Write.html (trait core::fmt::Write)
   [25]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [26]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [27]: ../trait.IntoArguments.html (trait sqlx::IntoArguments)
   [28]: ../trait.IntoArguments.html#tymethod.into_arguments
   [29]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [30]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
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
   [72]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [74]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [75]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [76]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [77]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [78]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [79]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [80]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [81]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [82]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [83]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [84]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [85]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [86]: super::Subscriber
   [87]: dispatcher#setting-the-default-subscriber

