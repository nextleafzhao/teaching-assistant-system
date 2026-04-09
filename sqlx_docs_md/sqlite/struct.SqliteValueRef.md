## SqliteValueRef

## [sqlx][1]0.8.6

## SqliteValueRef

### Trait Implementations

  * ValueRef<'r>



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

# Struct SqliteValueRef Copy item path
[code]
    pub struct SqliteValueRef<'r>(/* private fields */);
[/code]

## Trait Implementations§

§

### impl<'r> [ValueRef][4]<'r> for [SqliteValueRef][5]<'r>

§

#### type [Database][6] = [Sqlite][7]

§

#### fn [to_owned][8](&self) -> [SqliteValue][9]

Creates an owned value from this value reference. [Read more][8]

§

#### fn [type_info][10](&self) -> [Cow][11]<'_, [SqliteTypeInfo][12]>

Get the type information for this value.

§

#### fn [is_null][13](&self) -> [bool][14]

Returns `true` if the SQL value is `NULL`.

## Auto Trait Implementations§

§

### impl<'r> [Freeze][15] for [SqliteValueRef][5]<'r>

§

### impl<'r> [RefUnwindSafe][16] for [SqliteValueRef][5]<'r>

§

### impl<'r> [Send][17] for [SqliteValueRef][5]<'r>

§

### impl<'r> [Sync][18] for [SqliteValueRef][5]<'r>

§

### impl<'r> [Unpin][19] for [SqliteValueRef][5]<'r>

§

### impl<'r> [UnwindSafe][20] for [SqliteValueRef][5]<'r>

## Blanket Implementations§

[Source][21]§

### impl<T> [Any][22] for T

where T: 'static + ?[Sized][23],

[Source][24]§

#### fn [type_id][25](&self) -> [TypeId][26]

Gets the `TypeId` of `self`. [Read more][25]

[Source][27]§

### impl<T> [Borrow][28]<T> for T

where T: ?[Sized][23],

[Source][29]§

#### fn [borrow][30](&self) -> [&T][31]

Immutably borrows from an owned value. [Read more][30]

[Source][32]§

### impl<T> [BorrowMut][33]<T> for T

where T: ?[Sized][23],

[Source][34]§

#### fn [borrow_mut][35](&mut self) -> [&mut T][31]

Mutably borrows from an owned value. [Read more][35]

[Source][36]§

### impl<T> [From][37]<T> for T

[Source][38]§

#### fn [from][39](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][40] [`Span`][41], returning an `Instrumented` wrapper. Read more

[Source][42]§

### impl<T, U> [Into][43]<U> for T

where U: [From][37]<T>,

[Source][44]§

#### fn [into][45](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][37]<T> for U` chooses to do.

[Source][46]§

### impl<T> [IntoEither][47] for T

[Source][48]§

#### fn [into_either][49](self, into_left: [bool][14]) -> [Either][50]<Self, Self> ⓘ

Converts `self` into a [`Left`][51] variant of [`Either<Self, Self>`][50] if `into_left` is `true`. Converts `self` into a [`Right`][52] variant of [`Either<Self, Self>`][50] otherwise. [Read more][49]

[Source][53]§

#### fn [into_either_with][54]<F>(self, into_left: F) -> [Either][50]<Self, Self> ⓘ

where F: [FnOnce][55](&Self) -> [bool][14],

Converts `self` into a [`Left`][51] variant of [`Either<Self, Self>`][50] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][52] variant of [`Either<Self, Self>`][50] otherwise. [Read more][54]

[Source][56]§

### impl<T> [Same][57] for T

[Source][58]§

#### type [Output][59] = T

Should always be `Self`

[Source][60]§

### impl<T, U> [TryFrom][61]<U> for T

where U: [Into][43]<T>,

[Source][62]§

#### type [Error][63] = [Infallible][64]

The type returned in the event of a conversion error.

[Source][65]§

#### fn [try_from][66](value: U) -> [Result][67]<T, <T as [TryFrom][61]<U>>::[Error][68]>

Performs the conversion.

[Source][69]§

### impl<T, U> [TryInto][70]<U> for T

where U: [TryFrom][61]<T>,

[Source][71]§

#### type [Error][72] = <U as [TryFrom][61]<T>>::[Error][68]

The type returned in the event of a conversion error.

[Source][73]§

#### fn [try_into][74](self) -> [Result][67]<U, <U as [TryFrom][61]<T>>::[Error][68]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][43]<Dispatch>,

Attaches the provided [`Subscriber`][75] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][76] [`Subscriber`][75] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../trait.ValueRef.html (trait sqlx::ValueRef)
   [5]: struct.SqliteValueRef.html (struct sqlx::sqlite::SqliteValueRef)
   [6]: ../trait.ValueRef.html#associatedtype.Database
   [7]: ../struct.Sqlite.html (struct sqlx::Sqlite)
   [8]: ../trait.ValueRef.html#tymethod.to_owned
   [9]: struct.SqliteValue.html (struct sqlx::sqlite::SqliteValue)
   [10]: ../trait.ValueRef.html#tymethod.type_info
   [11]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [12]: struct.SqliteTypeInfo.html (struct sqlx::sqlite::SqliteTypeInfo)
   [13]: ../trait.ValueRef.html#tymethod.is_null
   [14]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [15]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [16]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [17]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [18]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [19]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [20]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [21]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [22]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [23]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [24]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [25]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [26]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [27]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [28]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [29]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [30]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [31]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [32]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [33]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [34]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [35]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [36]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [37]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [38]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [39]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [40]: super::Span::current()
   [41]: crate::Span
   [42]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [43]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [44]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [45]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [46]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [47]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [48]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [49]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [50]: ../enum.Either.html (enum sqlx::Either)
   [51]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [52]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [53]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [54]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [55]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [56]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [57]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [58]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [59]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [60]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [61]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [62]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [63]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [65]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [67]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [69]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [71]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [72]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [73]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [74]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [75]: super::Subscriber
   [76]: dispatcher#setting-the-default-subscriber

