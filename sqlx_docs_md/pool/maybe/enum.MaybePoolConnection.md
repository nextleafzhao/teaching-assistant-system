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



## [In sqlx::pool::maybe][2]

[sqlx][3]::[pool][4]::[maybe][2]

# Enum MaybePoolConnection Copy item path
[code]
    pub enum MaybePoolConnection<'c, DB>
    
    where
        DB: [Database][5],
    
    {
        Connection(&'c mut <DB as [Database][5]>::[Connection][6]),
        PoolConnection([PoolConnection][7]<DB>),
    }
[/code]

## Variants§

§

### Connection(&'c mut <DB as [Database][5]>::[Connection][6])

§

### PoolConnection([PoolConnection][7]<DB>)

## Trait Implementations§

§

### impl<'c, DB> [Deref][8] for [MaybePoolConnection][9]<'c, DB>

where DB: [Database][5],

§

#### type [Target][10] = <DB as [Database][5]>::[Connection][6]

The resulting type after dereferencing.

§

#### fn [deref][11](&self) -> &<[MaybePoolConnection][9]<'c, DB> as [Deref][8]>::[Target][12]

Dereferences the value.

§

### impl<'c, DB> [DerefMut][13] for [MaybePoolConnection][9]<'c, DB>

where DB: [Database][5],

§

#### fn [deref_mut][14](&mut self) -> &mut <[MaybePoolConnection][9]<'c, DB> as [Deref][8]>::[Target][12]

Mutably dereferences the value.

§

### impl<'c, DB> [From][15]<&'c mut <DB as [Database][5]>::[Connection][6]> for [MaybePoolConnection][9]<'c, DB>

where DB: [Database][5],

§

#### fn [from][16](v: &'c mut <DB as [Database][5]>::[Connection][6]) -> [MaybePoolConnection][9]<'c, DB>

Converts to this type from the input type.

§

### impl<'c, DB> [From][15]<[PoolConnection][7]<DB>> for [MaybePoolConnection][9]<'c, DB>

where DB: [Database][5],

§

#### fn [from][16](v: [PoolConnection][7]<DB>) -> [MaybePoolConnection][9]<'c, DB>

Converts to this type from the input type.

## Auto Trait Implementations§

§

### impl<'c, DB> [Freeze][17] for [MaybePoolConnection][9]<'c, DB>

where <DB as [Database][5]>::[Connection][6]: [Freeze][17],

§

### impl<'c, DB> ![RefUnwindSafe][18] for [MaybePoolConnection][9]<'c, DB>

§

### impl<'c, DB> [Send][19] for [MaybePoolConnection][9]<'c, DB>

§

### impl<'c, DB> [Sync][20] for [MaybePoolConnection][9]<'c, DB>

where <DB as [Database][5]>::[Connection][6]: [Sync][20],

§

### impl<'c, DB> [Unpin][21] for [MaybePoolConnection][9]<'c, DB>

where <DB as [Database][5]>::[Connection][6]: [Unpin][21],

§

### impl<'c, DB> ![UnwindSafe][22] for [MaybePoolConnection][9]<'c, DB>

## Blanket Implementations§

[Source][23]§

### impl<T> [Any][24] for T

where T: 'static + ?[Sized][25],

[Source][26]§

#### fn [type_id][27](&self) -> [TypeId][28]

Gets the `TypeId` of `self`. [Read more][27]

[Source][29]§

### impl<T> [Borrow][30]<T> for T

where T: ?[Sized][25],

[Source][31]§

#### fn [borrow][32](&self) -> [&T][33]

Immutably borrows from an owned value. [Read more][32]

[Source][34]§

### impl<T> [BorrowMut][35]<T> for T

where T: ?[Sized][25],

[Source][36]§

#### fn [borrow_mut][37](&mut self) -> [&mut T][33]

Mutably borrows from an owned value. [Read more][37]

[Source][38]§

### impl<T> [From][15]<T> for T

[Source][39]§

#### fn [from][16](t: T) -> T

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

where U: [From][15]<T>,

[Source][44]§

#### fn [into][45](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][15]<T> for U` chooses to do.

[Source][46]§

### impl<T> [IntoEither][47] for T

[Source][48]§

#### fn [into_either][49](self, into_left: [bool][50]) -> [Either][51]<Self, Self> ⓘ

Converts `self` into a [`Left`][52] variant of [`Either<Self, Self>`][51] if `into_left` is `true`. Converts `self` into a [`Right`][53] variant of [`Either<Self, Self>`][51] otherwise. [Read more][49]

[Source][54]§

#### fn [into_either_with][55]<F>(self, into_left: F) -> [Either][51]<Self, Self> ⓘ

where F: [FnOnce][56](&Self) -> [bool][50],

Converts `self` into a [`Left`][52] variant of [`Either<Self, Self>`][51] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][53] variant of [`Either<Self, Self>`][51] otherwise. [Read more][55]

[Source][57]§

### impl<P, T> [Receiver][58] for P

where P: [Deref][8]<Target = T> \+ ?[Sized][25], T: ?[Sized][25],

[Source][59]§

#### type [Target][60] = T

🔬This is a nightly-only experimental API. (`arbitrary_self_types`)

The target type on which the method may be called.

[Source][61]§

### impl<T> [Same][62] for T

[Source][63]§

#### type [Output][64] = T

Should always be `Self`

[Source][65]§

### impl<T, U> [TryFrom][66]<U> for T

where U: [Into][43]<T>,

[Source][67]§

#### type [Error][68] = [Infallible][69]

The type returned in the event of a conversion error.

[Source][70]§

#### fn [try_from][71](value: U) -> [Result][72]<T, <T as [TryFrom][66]<U>>::[Error][73]>

Performs the conversion.

[Source][74]§

### impl<T, U> [TryInto][75]<U> for T

where U: [TryFrom][66]<T>,

[Source][76]§

#### type [Error][77] = <U as [TryFrom][66]<T>>::[Error][73]

The type returned in the event of a conversion error.

[Source][78]§

#### fn [try_into][79](self) -> [Result][72]<U, <U as [TryFrom][66]<T>>::[Error][73]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][43]<Dispatch>,

Attaches the provided [`Subscriber`][80] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][81] [`Subscriber`][80] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../../sqlx/index.html
   [2]: index.html
   [3]: ../../index.html
   [4]: ../index.html
   [5]: ../../trait.Database.html (trait sqlx::Database)
   [6]: ../../trait.Database.html#associatedtype.Connection (type sqlx::Database::Connection)
   [7]: ../struct.PoolConnection.html (struct sqlx::pool::PoolConnection)
   [8]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html (trait core::ops::deref::Deref)
   [9]: ../enum.MaybePoolConnection.html (enum sqlx::pool::MaybePoolConnection)
   [10]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#associatedtype.Target
   [11]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#tymethod.deref
   [12]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#associatedtype.Target (type core::ops::deref::Deref::Target)
   [13]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.DerefMut.html (trait core::ops::deref::DerefMut)
   [14]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.DerefMut.html#tymethod.deref_mut
   [15]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [16]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [17]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [18]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [19]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [20]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [21]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [22]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [23]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [24]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [25]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [26]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [27]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [28]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [29]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [30]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [31]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [32]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [33]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [34]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [35]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [36]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [37]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [38]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [39]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
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
   [50]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [51]: ../../enum.Either.html (enum sqlx::Either)
   [52]: ../../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [53]: ../../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [54]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [55]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [56]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [57]: https://doc.rust-lang.org/1.94.1/src/core/ops/deref.rs.html#378-380
   [58]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Receiver.html (trait core::ops::deref::Receiver)
   [59]: https://doc.rust-lang.org/1.94.1/src/core/ops/deref.rs.html#382
   [60]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Receiver.html#associatedtype.Target
   [61]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [62]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [63]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [64]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [65]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [67]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [69]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [70]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [72]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [74]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [75]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [76]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [77]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [78]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [79]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [80]: super::Subscriber
   [81]: dispatcher#setting-the-default-subscriber

