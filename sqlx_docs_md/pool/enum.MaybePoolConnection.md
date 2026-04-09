## MaybePoolConnection

## [sqlx][1]0.8.6

## MaybePoolConnection

### Variants

  * Connection
  * PoolConnection



### Trait Implementations

  * Deref
  * DerefMut
  * From<&'c mut <DB as Database>::Connection>
  * From<PoolConnection<DB>>



### Auto Trait Implementations

  * !RefUnwindSafe
  * !UnwindSafe
  * Freeze
  * Send
  * Sync
  * Unpin



### Blanket Implementations

  * Any
  * Borrow<T>
  * BorrowMut<T>
  * From<T>
  * Instrument
  * Into<U>
  * IntoEither
  * Receiver
  * Same
  * TryFrom<U>
  * TryInto<U>
  * WithSubscriber



## [In sqlx::pool][2]

[sqlx][3]::[pool][2]

# Enum MaybePoolConnection Copy item path
[code]
    pub enum MaybePoolConnection<'c, DB>
    
    where
        DB: [Database][4],
    
    {
        Connection(&'c mut <DB as [Database][4]>::[Connection][5]),
        PoolConnection([PoolConnection][6]<DB>),
    }
[/code]

## Variants§

§

### Connection(&'c mut <DB as [Database][4]>::[Connection][5])

§

### PoolConnection([PoolConnection][6]<DB>)

## Trait Implementations§

§

### impl<'c, DB> [Deref][7] for [MaybePoolConnection][8]<'c, DB>

where DB: [Database][4],

§

#### type [Target][9] = <DB as [Database][4]>::[Connection][5]

The resulting type after dereferencing.

§

#### fn [deref][10](&self) -> &<[MaybePoolConnection][8]<'c, DB> as [Deref][7]>::[Target][11]

Dereferences the value.

§

### impl<'c, DB> [DerefMut][12] for [MaybePoolConnection][8]<'c, DB>

where DB: [Database][4],

§

#### fn [deref_mut][13](&mut self) -> &mut <[MaybePoolConnection][8]<'c, DB> as [Deref][7]>::[Target][11]

Mutably dereferences the value.

§

### impl<'c, DB> [From][14]<&'c mut <DB as [Database][4]>::[Connection][5]> for [MaybePoolConnection][8]<'c, DB>

where DB: [Database][4],

§

#### fn [from][15](v: &'c mut <DB as [Database][4]>::[Connection][5]) -> [MaybePoolConnection][8]<'c, DB>

Converts to this type from the input type.

§

### impl<'c, DB> [From][14]<[PoolConnection][6]<DB>> for [MaybePoolConnection][8]<'c, DB>

where DB: [Database][4],

§

#### fn [from][15](v: [PoolConnection][6]<DB>) -> [MaybePoolConnection][8]<'c, DB>

Converts to this type from the input type.

## Auto Trait Implementations§

§

### impl<'c, DB> [Freeze][16] for [MaybePoolConnection][8]<'c, DB>

where <DB as [Database][4]>::[Connection][5]: [Freeze][16],

§

### impl<'c, DB> ![RefUnwindSafe][17] for [MaybePoolConnection][8]<'c, DB>

§

### impl<'c, DB> [Send][18] for [MaybePoolConnection][8]<'c, DB>

§

### impl<'c, DB> [Sync][19] for [MaybePoolConnection][8]<'c, DB>

where <DB as [Database][4]>::[Connection][5]: [Sync][19],

§

### impl<'c, DB> [Unpin][20] for [MaybePoolConnection][8]<'c, DB>

where <DB as [Database][4]>::[Connection][5]: [Unpin][20],

§

### impl<'c, DB> ![UnwindSafe][21] for [MaybePoolConnection][8]<'c, DB>

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

### impl<T> [From][14]<T> for T

[Source][38]§

#### fn [from][15](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][39] [`Span`][40], returning an `Instrumented` wrapper. Read more

[Source][41]§

### impl<T, U> [Into][42]<U> for T

where U: [From][14]<T>,

[Source][43]§

#### fn [into][44](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][14]<T> for U` chooses to do.

[Source][45]§

### impl<T> [IntoEither][46] for T

[Source][47]§

#### fn [into_either][48](self, into_left: [bool][49]) -> [Either][50]<Self, Self> ⓘ

Converts `self` into a [`Left`][51] variant of [`Either<Self, Self>`][50] if `into_left` is `true`. Converts `self` into a [`Right`][52] variant of [`Either<Self, Self>`][50] otherwise. [Read more][48]

[Source][53]§

#### fn [into_either_with][54]<F>(self, into_left: F) -> [Either][50]<Self, Self> ⓘ

where F: [FnOnce][55](&Self) -> [bool][49],

Converts `self` into a [`Left`][51] variant of [`Either<Self, Self>`][50] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][52] variant of [`Either<Self, Self>`][50] otherwise. [Read more][54]

[Source][56]§

### impl<P, T> [Receiver][57] for P

where P: [Deref][7]<Target = T> \+ ?[Sized][24], T: ?[Sized][24],

[Source][58]§

#### type [Target][59] = T

🔬This is a nightly-only experimental API. (`arbitrary_self_types`)

The target type on which the method may be called.

[Source][60]§

### impl<T> [Same][61] for T

[Source][62]§

#### type [Output][63] = T

Should always be `Self`

[Source][64]§

### impl<T, U> [TryFrom][65]<U> for T

where U: [Into][42]<T>,

[Source][66]§

#### type [Error][67] = [Infallible][68]

The type returned in the event of a conversion error.

[Source][69]§

#### fn [try_from][70](value: U) -> [Result][71]<T, <T as [TryFrom][65]<U>>::[Error][72]>

Performs the conversion.

[Source][73]§

### impl<T, U> [TryInto][74]<U> for T

where U: [TryFrom][65]<T>,

[Source][75]§

#### type [Error][76] = <U as [TryFrom][65]<T>>::[Error][72]

The type returned in the event of a conversion error.

[Source][77]§

#### fn [try_into][78](self) -> [Result][71]<U, <U as [TryFrom][65]<T>>::[Error][72]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][42]<Dispatch>,

Attaches the provided [`Subscriber`][79] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][80] [`Subscriber`][79] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../trait.Database.html (trait sqlx::Database)
   [5]: ../trait.Database.html#associatedtype.Connection (type sqlx::Database::Connection)
   [6]: struct.PoolConnection.html (struct sqlx::pool::PoolConnection)
   [7]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html (trait core::ops::deref::Deref)
   [8]: enum.MaybePoolConnection.html (enum sqlx::pool::MaybePoolConnection)
   [9]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#associatedtype.Target
   [10]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#tymethod.deref
   [11]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#associatedtype.Target (type core::ops::deref::Deref::Target)
   [12]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.DerefMut.html (trait core::ops::deref::DerefMut)
   [13]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.DerefMut.html#tymethod.deref_mut
   [14]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [15]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
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
   [38]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [39]: super::Span::current()
   [40]: crate::Span
   [41]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [42]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [44]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [45]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [46]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [47]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [48]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [49]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [50]: ../enum.Either.html (enum sqlx::Either)
   [51]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [52]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [53]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [54]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [55]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [56]: https://doc.rust-lang.org/1.94.1/src/core/ops/deref.rs.html#378-380
   [57]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Receiver.html (trait core::ops::deref::Receiver)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/ops/deref.rs.html#382
   [59]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Receiver.html#associatedtype.Target
   [60]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [61]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [62]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [63]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [64]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [65]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [66]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [67]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [69]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [71]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [72]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [73]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [74]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [75]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [76]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [77]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [78]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [79]: super::Subscriber
   [80]: dispatcher#setting-the-default-subscriber

