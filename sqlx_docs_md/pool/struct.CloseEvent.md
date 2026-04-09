## CloseEvent

## [sqlx][1]0.8.6

## CloseEvent

### Methods

  * do_until



### Trait Implementations

  * FusedFuture
  * Future



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
  * FutureExt
  * Instrument
  * Into<U>
  * IntoEither
  * IntoFuture
  * Same
  * TryFrom<U>
  * TryInto<U>
  * WithSubscriber



## [In sqlx::pool][2]

[sqlx][3]::[pool][2]

# Struct CloseEvent Copy item path
[code]
    pub struct CloseEvent { /* private fields */ }
[/code]

Expand description

A future that resolves when the pool is closed.

See [`Pool::close_event()`][4] for details.

## Implementations§

§

### impl [CloseEvent][5]

#### pub async fn do_until<Fut>( &mut self, fut: Fut, ) -> [Result][6]<<Fut as [Future][7]>::[Output][8], [Error][9]>

where Fut: [Future][7],

Execute the given future until it returns or the pool is closed.

Cancels the future and returns `Err(PoolClosed)` if/when the pool is closed. If the pool was already closed, the future is never run.

## Trait Implementations§

§

### impl FusedFuture for [CloseEvent][5]

§

#### fn is_terminated(&self) -> [bool][10]

Returns `true` if the underlying future should no longer be polled.

§

### impl [Future][7] for [CloseEvent][5]

§

#### type [Output][11] = [()][12]

The type of value produced on completion.

§

#### fn [poll][13]( self: [Pin][14]<&mut [CloseEvent][5]>, cx: &mut [Context][15]<'_>, ) -> [Poll][16]<<[CloseEvent][5] as [Future][7]>::[Output][8]>

Attempts to resolve the future to a final value, registering the current task for wakeup if the value is not yet available. [Read more][13]

## Auto Trait Implementations§

§

### impl [Freeze][17] for [CloseEvent][5]

§

### impl [RefUnwindSafe][18] for [CloseEvent][5]

§

### impl [Send][19] for [CloseEvent][5]

§

### impl [Sync][20] for [CloseEvent][5]

§

### impl [Unpin][21] for [CloseEvent][5]

§

### impl [UnwindSafe][22] for [CloseEvent][5]

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

### impl<T> [From][39]<T> for T

[Source][40]§

#### fn [from][41](t: T) -> T

Returns the argument unchanged.

§

### impl<T> FutureExt for T

where T: [Future][7] \+ ?[Sized][25],

§

#### fn map<U, F>(self, f: F) -> Map<Self, F>

where F: [FnOnce][42](Self::[Output][8]) -> U, Self: [Sized][25],

Map this future’s output to a different type, returning a new future of the resulting type. Read more

§

#### fn map_into<U>(self) -> MapInto<Self, U>

where Self::[Output][8]: [Into][43]<U>, Self: [Sized][25],

Map this future’s output to a different type, returning a new future of the resulting type. Read more

§

#### fn then<Fut, F>(self, f: F) -> Then<Self, Fut, F>

where F: [FnOnce][42](Self::[Output][8]) -> Fut, Fut: [Future][7], Self: [Sized][25],

Chain on a computation for when a future finished, passing the result of the future to the provided closure `f`. Read more

§

#### fn left_future<B>(self) -> Either<Self, B>

where B: [Future][7]<Output = Self::[Output][8]>, Self: [Sized][25],

Wrap this future in an `Either` future, making it the left-hand variant of that `Either`. Read more

§

#### fn right_future<A>(self) -> Either<A, Self>

where A: [Future][7]<Output = Self::[Output][8]>, Self: [Sized][25],

Wrap this future in an `Either` future, making it the right-hand variant of that `Either`. Read more

§

#### fn into_stream(self) -> IntoStream<Self>

where Self: [Sized][25],

Convert this future into a single element stream. Read more

§

#### fn flatten(self) -> Flatten<Self>

where Self::[Output][8]: [Future][7], Self: [Sized][25],

Flatten the execution of this future when the output of this future is itself another future. Read more

§

#### fn flatten_stream(self) -> FlattenStream<Self>

where Self::[Output][8]: Stream, Self: [Sized][25],

Flatten the execution of this future when the successful result of this future is a stream. Read more

§

#### fn fuse(self) -> Fuse<Self>

where Self: [Sized][25],

Fuse a future such that `poll` will never again be called once it has completed. This method can be used to turn any `Future` into a `FusedFuture`. Read more

§

#### fn inspect<F>(self, f: F) -> Inspect<Self, F>

where F: [FnOnce][42](&Self::[Output][8]), Self: [Sized][25],

Do something with the output of a future before passing it on. Read more

§

#### fn catch_unwind(self) -> CatchUnwind<Self>

where Self: [Sized][25] \+ [UnwindSafe][22],

Catches unwinding panics while polling the future. Read more

§

#### fn shared(self) -> Shared<Self>

where Self: [Sized][25], Self::[Output][8]: [Clone][44],

Create a cloneable handle to this future where all handles will resolve to the same result. Read more

§

#### fn boxed<'a>(self) -> [Pin][14]<[Box][45]<dyn [Future][7]<Output = Self::[Output][8]> \+ [Send][19] \+ 'a>>

where Self: [Sized][25] \+ [Send][19] \+ 'a,

Wrap the future in a Box, pinning it. Read more

§

#### fn boxed_local<'a>(self) -> [Pin][14]<[Box][45]<dyn [Future][7]<Output = Self::[Output][8]> \+ 'a>>

where Self: [Sized][25] \+ 'a,

Wrap the future in a Box, pinning it. Read more

§

#### fn unit_error(self) -> UnitError<Self>

where Self: [Sized][25],

Turns a [`Future<Output = T>`][7] into a [`TryFuture<Ok = T, Error = ()`>][46].

§

#### fn never_error(self) -> NeverError<Self>

where Self: [Sized][25],

Turns a [`Future<Output = T>`][7] into a [`TryFuture<Ok = T, Error = Never`>][46].

§

#### fn poll_unpin(&mut self, cx: &mut [Context][15]<'_>) -> [Poll][16]<Self::[Output][8]>

where Self: [Unpin][21],

A convenience for calling `Future::poll` on `Unpin` future types.

§

#### fn now_or_never(self) -> [Option][47]<Self::[Output][8]>

where Self: [Sized][25],

Evaluates and consumes the future, returning the resulting output if the future is ready after the first call to `Future::poll`. Read more

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][48] [`Span`][49], returning an `Instrumented` wrapper. Read more

[Source][50]§

### impl<T, U> [Into][43]<U> for T

where U: [From][39]<T>,

[Source][51]§

#### fn [into][52](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][39]<T> for U` chooses to do.

[Source][53]§

### impl<T> [IntoEither][54] for T

[Source][55]§

#### fn [into_either][56](self, into_left: [bool][10]) -> [Either][57]<Self, Self> ⓘ

Converts `self` into a [`Left`][58] variant of [`Either<Self, Self>`][57] if `into_left` is `true`. Converts `self` into a [`Right`][59] variant of [`Either<Self, Self>`][57] otherwise. [Read more][56]

[Source][60]§

#### fn [into_either_with][61]<F>(self, into_left: F) -> [Either][57]<Self, Self> ⓘ

where F: [FnOnce][42](&Self) -> [bool][10],

Converts `self` into a [`Left`][58] variant of [`Either<Self, Self>`][57] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][59] variant of [`Either<Self, Self>`][57] otherwise. [Read more][61]

[Source][62]§

### impl<F> [IntoFuture][63] for F

where F: [Future][7],

[Source][64]§

#### type [Output][65] = <F as [Future][7]>::[Output][8]

The output that the future will produce on completion.

[Source][66]§

#### type [IntoFuture][67] = F

Which kind of future are we turning this into?

[Source][68]§

#### fn [into_future][69](self) -> <F as [IntoFuture][63]>::[IntoFuture][70]

Creates a future from a value. [Read more][69]

[Source][71]§

### impl<T> [Same][72] for T

[Source][73]§

#### type [Output][74] = T

Should always be `Self`

[Source][75]§

### impl<T, U> [TryFrom][76]<U> for T

where U: [Into][43]<T>,

[Source][77]§

#### type [Error][78] = [Infallible][79]

The type returned in the event of a conversion error.

[Source][80]§

#### fn [try_from][81](value: U) -> [Result][6]<T, <T as [TryFrom][76]<U>>::[Error][82]>

Performs the conversion.

[Source][83]§

### impl<T, U> [TryInto][84]<U> for T

where U: [TryFrom][76]<T>,

[Source][85]§

#### type [Error][86] = <U as [TryFrom][76]<T>>::[Error][82]

The type returned in the event of a conversion error.

[Source][87]§

#### fn [try_into][88](self) -> [Result][6]<U, <U as [TryFrom][76]<T>>::[Error][82]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][43]<Dispatch>,

Attaches the provided [`Subscriber`][89] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][90] [`Subscriber`][89] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../struct.Pool.html#method.close_event (method sqlx::Pool::close_event)
   [5]: struct.CloseEvent.html (struct sqlx::pool::CloseEvent)
   [6]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [7]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [8]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html#associatedtype.Output (type core::future::future::Future::Output)
   [9]: ../enum.Error.html (enum sqlx::Error)
   [10]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [11]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html#associatedtype.Output
   [12]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [13]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html#tymethod.poll
   [14]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [15]: https://doc.rust-lang.org/1.94.1/core/task/wake/struct.Context.html (struct core::task::wake::Context)
   [16]: https://doc.rust-lang.org/1.94.1/core/task/poll/enum.Poll.html (enum core::task::poll::Poll)
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
   [39]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [40]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [41]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [42]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [43]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [44]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [45]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [46]: futures_core::future::TryFuture
   [47]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [48]: super::Span::current()
   [49]: crate::Span
   [50]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [51]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [52]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [53]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [54]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [55]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [56]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [57]: ../enum.Either.html (enum sqlx::Either)
   [58]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [59]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [60]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [61]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [62]: https://doc.rust-lang.org/1.94.1/src/core/future/into_future.rs.html#138
   [63]: https://doc.rust-lang.org/1.94.1/core/future/into_future/trait.IntoFuture.html (trait core::future::into_future::IntoFuture)
   [64]: https://doc.rust-lang.org/1.94.1/src/core/future/into_future.rs.html#139
   [65]: https://doc.rust-lang.org/1.94.1/core/future/into_future/trait.IntoFuture.html#associatedtype.Output
   [66]: https://doc.rust-lang.org/1.94.1/src/core/future/into_future.rs.html#140
   [67]: https://doc.rust-lang.org/1.94.1/core/future/into_future/trait.IntoFuture.html#associatedtype.IntoFuture
   [68]: https://doc.rust-lang.org/1.94.1/src/core/future/into_future.rs.html#142
   [69]: https://doc.rust-lang.org/1.94.1/core/future/into_future/trait.IntoFuture.html#tymethod.into_future
   [70]: https://doc.rust-lang.org/1.94.1/core/future/into_future/trait.IntoFuture.html#associatedtype.IntoFuture (type core::future::into_future::IntoFuture::IntoFuture)
   [71]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [72]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [73]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [74]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [75]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [76]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [77]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [78]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [79]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [80]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [81]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [82]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [83]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [84]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [85]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [86]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [87]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [88]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [89]: super::Subscriber
   [90]: dispatcher#setting-the-default-subscriber

