## PoolConnection

## [sqlx][1]0.8.6

## PoolConnection

### Methods

  * close
  * close_on_drop
  * detach
  * leak



### Trait Implementations

  * Acquire<'c>
  * AsMut<<DB as Database>::Connection>
  * AsRef<<DB as Database>::Connection>
  * Debug
  * Deref
  * DerefMut
  * Drop
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

# Struct PoolConnection Copy item path
[code]
    pub struct PoolConnection<DB>
    
    where
        DB: [Database][4],
    
    { /* private fields */ }
[/code]

Expand description

A connection managed by a [`Pool`][5].

Will be returned to the pool on-drop.

## Implementations§

§

### impl<DB> [PoolConnection][6]<DB>

where DB: [Database][4],

#### pub async fn close(self) -> [Result][7]<[()][8], [Error][9]>

Close this connection, allowing the pool to open a replacement.

Equivalent to calling [`.detach()`][10] then [`.close()`][11], but the connection permit is retained for the duration so that the pool may not exceed `max_connections`.

#### pub fn close_on_drop(&mut self)

Close this connection on-drop, instead of returning it to the pool.

May be used in cases where waiting for the [`.close()`][12] call to complete is unacceptable, but you still want the connection to be closed gracefully so that the server can clean up resources.

#### pub fn detach(self) -> <DB as [Database][4]>::[Connection][13]

Detach this connection from the pool, allowing it to open a replacement.

Note that if your application uses a single shared pool, this effectively lets the application exceed the [`max_connections`][14] setting.

If [`min_connections`][15] is nonzero, a task will be spawned to replace this connection.

If you want the pool to treat this connection as permanently checked-out, use [`.leak()`][16] instead.

#### pub fn leak(self) -> <DB as [Database][4]>::[Connection][13]

Detach this connection from the pool, treating it as permanently checked-out.

This effectively will reduce the maximum capacity of the pool by 1 every time it is used.

If you don’t want to impact the pool’s capacity, use [`.detach()`][10] instead.

## Trait Implementations§

§

### impl<'c, DB> [Acquire][17]<'c> for &'c mut [PoolConnection][6]<DB>

where DB: [Database][4],

§

#### type [Database][18] = DB

§

#### type [Connection][19] = &'c mut <DB as [Database][4]>::[Connection][13]

§

#### fn [acquire][20]( self, ) -> [Pin][21]<[Box][22]<dyn [Future][23]<Output = [Result][7]<<&'c mut [PoolConnection][6]<DB> as [Acquire][17]<'c>>::[Connection][24], [Error][9]>> \+ [Send][25] \+ 'c>>

§

#### fn [begin][26]( self, ) -> [Pin][21]<[Box][22]<dyn [Future][23]<Output = [Result][7]<[Transaction][27]<'c, DB>, [Error][9]>> \+ [Send][25] \+ 'c>>

§

### impl<DB> [AsMut][28]<<DB as [Database][4]>::[Connection][13]> for [PoolConnection][6]<DB>

where DB: [Database][4],

§

#### fn [as_mut][29](&mut self) -> &mut <DB as [Database][4]>::[Connection][13]

Converts this type into a mutable reference of the (usually inferred) input type.

§

### impl<DB> [AsRef][30]<<DB as [Database][4]>::[Connection][13]> for [PoolConnection][6]<DB>

where DB: [Database][4],

§

#### fn [as_ref][31](&self) -> &<DB as [Database][4]>::[Connection][13]

Converts this type into a shared reference of the (usually inferred) input type.

§

### impl<DB> [Debug][32] for [PoolConnection][6]<DB>

where DB: [Database][4],

§

#### fn [fmt][33](&self, f: &mut [Formatter][34]<'_>) -> [Result][7]<[()][8], [Error][35]>

Formats the value using the given formatter. [Read more][33]

§

### impl<DB> [Deref][36] for [PoolConnection][6]<DB>

where DB: [Database][4],

§

#### type [Target][37] = <DB as [Database][4]>::[Connection][13]

The resulting type after dereferencing.

§

#### fn [deref][38](&self) -> &<[PoolConnection][6]<DB> as [Deref][36]>::[Target][39]

Dereferences the value.

§

### impl<DB> [DerefMut][40] for [PoolConnection][6]<DB>

where DB: [Database][4],

§

#### fn [deref_mut][41](&mut self) -> &mut <[PoolConnection][6]<DB> as [Deref][36]>::[Target][39]

Mutably dereferences the value.

§

### impl<DB> [Drop][42] for [PoolConnection][6]<DB>

where DB: [Database][4],

Returns the connection to the [`Pool`][5] it was checked-out from.

§

#### fn [drop][43](&mut self)

Executes the destructor for this type. [Read more][43]

§

### impl<'c, DB> [From][44]<[PoolConnection][6]<DB>> for [MaybePoolConnection][45]<'c, DB>

where DB: [Database][4],

§

#### fn [from][46](v: [PoolConnection][6]<DB>) -> [MaybePoolConnection][45]<'c, DB>

Converts to this type from the input type.

## Auto Trait Implementations§

§

### impl<DB> [Freeze][47] for [PoolConnection][6]<DB>

where <DB as [Database][4]>::[Connection][13]: [Freeze][47],

§

### impl<DB> ![RefUnwindSafe][48] for [PoolConnection][6]<DB>

§

### impl<DB> [Send][25] for [PoolConnection][6]<DB>

§

### impl<DB> [Sync][49] for [PoolConnection][6]<DB>

where <DB as [Database][4]>::[Connection][13]: [Sync][49],

§

### impl<DB> [Unpin][50] for [PoolConnection][6]<DB>

where <DB as [Database][4]>::[Connection][13]: [Unpin][50],

§

### impl<DB> ![UnwindSafe][51] for [PoolConnection][6]<DB>

## Blanket Implementations§

[Source][52]§

### impl<T> [Any][53] for T

where T: 'static + ?[Sized][54],

[Source][55]§

#### fn [type_id][56](&self) -> [TypeId][57]

Gets the `TypeId` of `self`. [Read more][56]

[Source][58]§

### impl<T> [Borrow][59]<T> for T

where T: ?[Sized][54],

[Source][60]§

#### fn [borrow][61](&self) -> [&T][62]

Immutably borrows from an owned value. [Read more][61]

[Source][63]§

### impl<T> [BorrowMut][64]<T> for T

where T: ?[Sized][54],

[Source][65]§

#### fn [borrow_mut][66](&mut self) -> [&mut T][62]

Mutably borrows from an owned value. [Read more][66]

[Source][67]§

### impl<T> [From][44]<T> for T

[Source][68]§

#### fn [from][46](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][69] [`Span`][70], returning an `Instrumented` wrapper. Read more

[Source][71]§

### impl<T, U> [Into][72]<U> for T

where U: [From][44]<T>,

[Source][73]§

#### fn [into][74](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][44]<T> for U` chooses to do.

[Source][75]§

### impl<T> [IntoEither][76] for T

[Source][77]§

#### fn [into_either][78](self, into_left: [bool][79]) -> [Either][80]<Self, Self> ⓘ

Converts `self` into a [`Left`][81] variant of [`Either<Self, Self>`][80] if `into_left` is `true`. Converts `self` into a [`Right`][82] variant of [`Either<Self, Self>`][80] otherwise. [Read more][78]

[Source][83]§

#### fn [into_either_with][84]<F>(self, into_left: F) -> [Either][80]<Self, Self> ⓘ

where F: [FnOnce][85](&Self) -> [bool][79],

Converts `self` into a [`Left`][81] variant of [`Either<Self, Self>`][80] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][82] variant of [`Either<Self, Self>`][80] otherwise. [Read more][84]

[Source][86]§

### impl<P, T> [Receiver][87] for P

where P: [Deref][36]<Target = T> \+ ?[Sized][54], T: ?[Sized][54],

[Source][88]§

#### type [Target][89] = T

🔬This is a nightly-only experimental API. (`arbitrary_self_types`)

The target type on which the method may be called.

[Source][90]§

### impl<T> [Same][91] for T

[Source][92]§

#### type [Output][93] = T

Should always be `Self`

[Source][94]§

### impl<T, U> [TryFrom][95]<U> for T

where U: [Into][72]<T>,

[Source][96]§

#### type [Error][97] = [Infallible][98]

The type returned in the event of a conversion error.

[Source][99]§

#### fn [try_from][100](value: U) -> [Result][7]<T, <T as [TryFrom][95]<U>>::[Error][101]>

Performs the conversion.

[Source][102]§

### impl<T, U> [TryInto][103]<U> for T

where U: [TryFrom][95]<T>,

[Source][104]§

#### type [Error][105] = <U as [TryFrom][95]<T>>::[Error][101]

The type returned in the event of a conversion error.

[Source][106]§

#### fn [try_into][107](self) -> [Result][7]<U, <U as [TryFrom][95]<T>>::[Error][101]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][72]<Dispatch>,

Attaches the provided [`Subscriber`][108] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][109] [`Subscriber`][108] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../trait.Database.html (trait sqlx::Database)
   [5]: ../struct.Pool.html (struct sqlx::Pool)
   [6]: struct.PoolConnection.html (struct sqlx::pool::PoolConnection)
   [7]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [8]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [9]: ../enum.Error.html (enum sqlx::Error)
   [10]: struct.PoolConnection.html#method.detach (method sqlx::pool::PoolConnection::detach)
   [11]: ../trait.Connection.html#tymethod.close (method sqlx::Connection::close)
   [12]: struct.PoolConnection.html#method.close (method sqlx::pool::PoolConnection::close)
   [13]: ../trait.Database.html#associatedtype.Connection (type sqlx::Database::Connection)
   [14]: struct.PoolOptions.html#method.max_connections (method sqlx::pool::PoolOptions::max_connections)
   [15]: struct.PoolOptions.html#method.min_connections (method sqlx::pool::PoolOptions::min_connections)
   [16]: struct.PoolConnection.html#method.leak (method sqlx::pool::PoolConnection::leak)
   [17]: ../trait.Acquire.html (trait sqlx::Acquire)
   [18]: ../trait.Acquire.html#associatedtype.Database
   [19]: ../trait.Acquire.html#associatedtype.Connection
   [20]: ../trait.Acquire.html#tymethod.acquire
   [21]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [22]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [23]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [24]: ../trait.Acquire.html#associatedtype.Connection (type sqlx::Acquire::Connection)
   [25]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [26]: ../trait.Acquire.html#tymethod.begin
   [27]: ../struct.Transaction.html (struct sqlx::Transaction)
   [28]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsMut.html (trait core::convert::AsMut)
   [29]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsMut.html#tymethod.as_mut
   [30]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [31]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html#tymethod.as_ref
   [32]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [33]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [34]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [35]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [36]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html (trait core::ops::deref::Deref)
   [37]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#associatedtype.Target
   [38]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#tymethod.deref
   [39]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#associatedtype.Target (type core::ops::deref::Deref::Target)
   [40]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.DerefMut.html (trait core::ops::deref::DerefMut)
   [41]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.DerefMut.html#tymethod.deref_mut
   [42]: https://doc.rust-lang.org/1.94.1/core/ops/drop/trait.Drop.html (trait core::ops::drop::Drop)
   [43]: https://doc.rust-lang.org/1.94.1/core/ops/drop/trait.Drop.html#tymethod.drop
   [44]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [45]: enum.MaybePoolConnection.html (enum sqlx::pool::MaybePoolConnection)
   [46]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [47]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [48]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [49]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [50]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [51]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [53]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [54]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [56]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [57]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [59]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [60]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [61]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [62]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [63]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [64]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [65]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [66]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [67]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [68]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [69]: super::Span::current()
   [70]: crate::Span
   [71]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [72]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [73]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [74]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [75]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [76]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [77]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [78]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [79]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [80]: ../enum.Either.html (enum sqlx::Either)
   [81]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [82]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [83]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [84]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [85]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [86]: https://doc.rust-lang.org/1.94.1/src/core/ops/deref.rs.html#378-380
   [87]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Receiver.html (trait core::ops::deref::Receiver)
   [88]: https://doc.rust-lang.org/1.94.1/src/core/ops/deref.rs.html#382
   [89]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Receiver.html#associatedtype.Target
   [90]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [91]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [92]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [93]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [94]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [95]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [96]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [97]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [98]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [99]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [100]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [101]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [102]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [103]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [104]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [105]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [106]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [107]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [108]: super::Subscriber
   [109]: dispatcher#setting-the-default-subscriber

