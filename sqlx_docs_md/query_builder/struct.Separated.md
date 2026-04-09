## Separated

## [sqlx][1]0.8.6

## Separated

### Methods

  * push
  * push_bind
  * push_bind_unseparated
  * push_unseparated



### Auto Trait Implementations

  * !UnwindSafe
  * Freeze
  * RefUnwindSafe
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
  * Same
  * TryFrom<U>
  * TryInto<U>
  * WithSubscriber



## [In sqlx::query_builder][2]

[sqlx][3]::[query_builder][2]

# Struct Separated Copy item path
[code]
    pub struct Separated<'qb, 'args, DB, Sep>
    
    where
        'args: 'qb,
        DB: [Database][4],
    
    { /* private fields */ }
[/code]

Expand description

A wrapper around `QueryBuilder` for creating comma(or other token)-separated lists.

See [`QueryBuilder::separated()`][5] for details.

## Implementations§

§

### impl<'qb, 'args, DB, Sep> [Separated][6]<'qb, 'args, DB, Sep>

where 'args: 'qb, DB: [Database][4], Sep: [Display][7],

#### pub fn push(&mut self, sql: impl [Display][7]) -> &mut [Separated][6]<'qb, 'args, DB, Sep>

Push the separator if applicable, and then the given SQL fragment.

See [`QueryBuilder::push()`][8] for details.

#### pub fn push_unseparated( &mut self, sql: impl [Display][7], ) -> &mut [Separated][6]<'qb, 'args, DB, Sep>

Push a SQL fragment without a separator.

Simply calls [`QueryBuilder::push()`][8] directly.

#### pub fn push_bind<T>(&mut self, value: T) -> &mut [Separated][6]<'qb, 'args, DB, Sep>

where T: 'args + [Encode][9]<'args, DB> \+ [Type][10]<DB>,

Push the separator if applicable, then append a bind argument.

See [`QueryBuilder::push_bind()`][11] for details.

#### pub fn push_bind_unseparated<T>( &mut self, value: T, ) -> &mut [Separated][6]<'qb, 'args, DB, Sep>

where T: 'args + [Encode][9]<'args, DB> \+ [Type][10]<DB>,

Push a bind argument placeholder (`?` or `$N` for Postgres) and bind a value to it without a separator.

Simply calls [`QueryBuilder::push_bind()`][11] directly.

## Auto Trait Implementations§

§

### impl<'qb, 'args, DB, Sep> [Freeze][12] for [Separated][6]<'qb, 'args, DB, Sep>

where Sep: [Freeze][12],

§

### impl<'qb, 'args, DB, Sep> [RefUnwindSafe][13] for [Separated][6]<'qb, 'args, DB, Sep>

where Sep: [RefUnwindSafe][13], <DB as [Database][4]>::[Arguments][14]<'args>: [RefUnwindSafe][13],

§

### impl<'qb, 'args, DB, Sep> [Send][15] for [Separated][6]<'qb, 'args, DB, Sep>

where Sep: [Send][15],

§

### impl<'qb, 'args, DB, Sep> [Sync][16] for [Separated][6]<'qb, 'args, DB, Sep>

where Sep: [Sync][16], <DB as [Database][4]>::[Arguments][14]<'args>: [Sync][16],

§

### impl<'qb, 'args, DB, Sep> [Unpin][17] for [Separated][6]<'qb, 'args, DB, Sep>

where Sep: [Unpin][17],

§

### impl<'qb, 'args, DB, Sep> ![UnwindSafe][18] for [Separated][6]<'qb, 'args, DB, Sep>

## Blanket Implementations§

[Source][19]§

### impl<T> [Any][20] for T

where T: 'static + ?[Sized][21],

[Source][22]§

#### fn [type_id][23](&self) -> [TypeId][24]

Gets the `TypeId` of `self`. [Read more][23]

[Source][25]§

### impl<T> [Borrow][26]<T> for T

where T: ?[Sized][21],

[Source][27]§

#### fn [borrow][28](&self) -> [&T][29]

Immutably borrows from an owned value. [Read more][28]

[Source][30]§

### impl<T> [BorrowMut][31]<T> for T

where T: ?[Sized][21],

[Source][32]§

#### fn [borrow_mut][33](&mut self) -> [&mut T][29]

Mutably borrows from an owned value. [Read more][33]

[Source][34]§

### impl<T> [From][35]<T> for T

[Source][36]§

#### fn [from][37](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][38] [`Span`][39], returning an `Instrumented` wrapper. Read more

[Source][40]§

### impl<T, U> [Into][41]<U> for T

where U: [From][35]<T>,

[Source][42]§

#### fn [into][43](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][35]<T> for U` chooses to do.

[Source][44]§

### impl<T> [IntoEither][45] for T

[Source][46]§

#### fn [into_either][47](self, into_left: [bool][48]) -> [Either][49]<Self, Self> ⓘ

Converts `self` into a [`Left`][50] variant of [`Either<Self, Self>`][49] if `into_left` is `true`. Converts `self` into a [`Right`][51] variant of [`Either<Self, Self>`][49] otherwise. [Read more][47]

[Source][52]§

#### fn [into_either_with][53]<F>(self, into_left: F) -> [Either][49]<Self, Self> ⓘ

where F: [FnOnce][54](&Self) -> [bool][48],

Converts `self` into a [`Left`][50] variant of [`Either<Self, Self>`][49] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][51] variant of [`Either<Self, Self>`][49] otherwise. [Read more][53]

[Source][55]§

### impl<T> [Same][56] for T

[Source][57]§

#### type [Output][58] = T

Should always be `Self`

[Source][59]§

### impl<T, U> [TryFrom][60]<U> for T

where U: [Into][41]<T>,

[Source][61]§

#### type [Error][62] = [Infallible][63]

The type returned in the event of a conversion error.

[Source][64]§

#### fn [try_from][65](value: U) -> [Result][66]<T, <T as [TryFrom][60]<U>>::[Error][67]>

Performs the conversion.

[Source][68]§

### impl<T, U> [TryInto][69]<U> for T

where U: [TryFrom][60]<T>,

[Source][70]§

#### type [Error][71] = <U as [TryFrom][60]<T>>::[Error][67]

The type returned in the event of a conversion error.

[Source][72]§

#### fn [try_into][73](self) -> [Result][66]<U, <U as [TryFrom][60]<T>>::[Error][67]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][41]<Dispatch>,

Attaches the provided [`Subscriber`][74] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][75] [`Subscriber`][74] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../trait.Database.html (trait sqlx::Database)
   [5]: ../struct.QueryBuilder.html#method.separated (method sqlx::QueryBuilder::separated)
   [6]: struct.Separated.html (struct sqlx::query_builder::Separated)
   [7]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [8]: ../struct.QueryBuilder.html#method.push (method sqlx::QueryBuilder::push)
   [9]: ../trait.Encode.html (trait sqlx::Encode)
   [10]: ../trait.Type.html (trait sqlx::Type)
   [11]: ../struct.QueryBuilder.html#method.push_bind (method sqlx::QueryBuilder::push_bind)
   [12]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [13]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [14]: ../trait.Database.html#associatedtype.Arguments (type sqlx::Database::Arguments)
   [15]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [16]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [17]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [18]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [19]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [20]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [21]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [22]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [23]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [24]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [25]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [26]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [27]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [28]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [29]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [30]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [31]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [32]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [33]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [34]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [35]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [36]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [37]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [38]: super::Span::current()
   [39]: crate::Span
   [40]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [41]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [42]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [43]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [44]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [45]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [46]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [47]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [48]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [49]: ../enum.Either.html (enum sqlx::Either)
   [50]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [51]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [52]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [53]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [54]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [55]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [56]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [57]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [58]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [59]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [60]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [61]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [62]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [63]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [64]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [65]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [66]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [67]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [68]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [69]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [70]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [72]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [74]: super::Subscriber
   [75]: dispatcher#setting-the-default-subscriber

