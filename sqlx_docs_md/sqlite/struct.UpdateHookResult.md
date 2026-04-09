## UpdateHookResult

## [sqlx][1]0.8.6

## UpdateHookResult

### Fields

  * database
  * operation
  * rowid
  * table



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

# Struct UpdateHookResult Copy item path
[code]
    pub struct UpdateHookResult<'a> {
        pub operation: [SqliteOperation][4],
        pub database: &'a [str][5],
        pub table: &'a [str][5],
        pub rowid: [i64][6],
    }
[/code]

## Fields§

§`operation: [SqliteOperation][4]`§`database: &'a [str][5]`§`table: &'a [str][5]`§`rowid: [i64][6]`

## Auto Trait Implementations§

§

### impl<'a> [Freeze][7] for [UpdateHookResult][8]<'a>

§

### impl<'a> [RefUnwindSafe][9] for [UpdateHookResult][8]<'a>

§

### impl<'a> [Send][10] for [UpdateHookResult][8]<'a>

§

### impl<'a> [Sync][11] for [UpdateHookResult][8]<'a>

§

### impl<'a> [Unpin][12] for [UpdateHookResult][8]<'a>

§

### impl<'a> [UnwindSafe][13] for [UpdateHookResult][8]<'a>

## Blanket Implementations§

[Source][14]§

### impl<T> [Any][15] for T

where T: 'static + ?[Sized][16],

[Source][17]§

#### fn [type_id][18](&self) -> [TypeId][19]

Gets the `TypeId` of `self`. [Read more][18]

[Source][20]§

### impl<T> [Borrow][21]<T> for T

where T: ?[Sized][16],

[Source][22]§

#### fn [borrow][23](&self) -> [&T][24]

Immutably borrows from an owned value. [Read more][23]

[Source][25]§

### impl<T> [BorrowMut][26]<T> for T

where T: ?[Sized][16],

[Source][27]§

#### fn [borrow_mut][28](&mut self) -> [&mut T][24]

Mutably borrows from an owned value. [Read more][28]

[Source][29]§

### impl<T> [From][30]<T> for T

[Source][31]§

#### fn [from][32](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][33] [`Span`][34], returning an `Instrumented` wrapper. Read more

[Source][35]§

### impl<T, U> [Into][36]<U> for T

where U: [From][30]<T>,

[Source][37]§

#### fn [into][38](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][30]<T> for U` chooses to do.

[Source][39]§

### impl<T> [IntoEither][40] for T

[Source][41]§

#### fn [into_either][42](self, into_left: [bool][43]) -> [Either][44]<Self, Self> ⓘ

Converts `self` into a [`Left`][45] variant of [`Either<Self, Self>`][44] if `into_left` is `true`. Converts `self` into a [`Right`][46] variant of [`Either<Self, Self>`][44] otherwise. [Read more][42]

[Source][47]§

#### fn [into_either_with][48]<F>(self, into_left: F) -> [Either][44]<Self, Self> ⓘ

where F: [FnOnce][49](&Self) -> [bool][43],

Converts `self` into a [`Left`][45] variant of [`Either<Self, Self>`][44] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][46] variant of [`Either<Self, Self>`][44] otherwise. [Read more][48]

[Source][50]§

### impl<T> [Same][51] for T

[Source][52]§

#### type [Output][53] = T

Should always be `Self`

[Source][54]§

### impl<T, U> [TryFrom][55]<U> for T

where U: [Into][36]<T>,

[Source][56]§

#### type [Error][57] = [Infallible][58]

The type returned in the event of a conversion error.

[Source][59]§

#### fn [try_from][60](value: U) -> [Result][61]<T, <T as [TryFrom][55]<U>>::[Error][62]>

Performs the conversion.

[Source][63]§

### impl<T, U> [TryInto][64]<U> for T

where U: [TryFrom][55]<T>,

[Source][65]§

#### type [Error][66] = <U as [TryFrom][55]<T>>::[Error][62]

The type returned in the event of a conversion error.

[Source][67]§

#### fn [try_into][68](self) -> [Result][61]<U, <U as [TryFrom][55]<T>>::[Error][62]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][36]<Dispatch>,

Attaches the provided [`Subscriber`][69] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][70] [`Subscriber`][69] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: enum.SqliteOperation.html (enum sqlx::sqlite::SqliteOperation)
   [5]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [6]: https://doc.rust-lang.org/1.94.1/std/primitive.i64.html
   [7]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [8]: struct.UpdateHookResult.html (struct sqlx::sqlite::UpdateHookResult)
   [9]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [10]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [11]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [12]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [13]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [14]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [15]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [16]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [17]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [18]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [19]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [20]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [21]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [22]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [23]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [24]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [25]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [26]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [27]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [28]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [29]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [30]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [31]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [32]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [33]: super::Span::current()
   [34]: crate::Span
   [35]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [36]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [37]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [38]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [39]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [40]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [41]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [42]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [43]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [44]: ../enum.Either.html (enum sqlx::Either)
   [45]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [46]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [47]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [48]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [49]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [50]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [51]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [52]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [53]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [54]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [55]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [56]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [57]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [58]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [59]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [60]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [61]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [62]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [63]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [65]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [67]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [69]: super::Subscriber
   [70]: dispatcher#setting-the-default-subscriber

