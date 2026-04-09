## AnyValueRef

## [sqlx][1]0.8.6

## AnyValueRef

### Trait Implementations

  * Clone
  * Debug
  * ValueRef<'a>



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
  * CloneToUninit
  * From<T>
  * Instrument
  * Into<U>
  * IntoEither
  * Same
  * ToOwned
  * TryFrom<U>
  * TryInto<U>
  * WithSubscriber



## [In sqlx::any][2]

[sqlx][3]::[any][2]

# Struct AnyValueRef Copy item path
[code]
    pub struct AnyValueRef<'a> { /* private fields */ }
[/code]

## Trait Implementations§

§

### impl<'a> [Clone][4] for [AnyValueRef][5]<'a>

§

#### fn [clone][6](&self) -> [AnyValueRef][5]<'a>

Returns a duplicate of the value. [Read more][6]

1.0.0 · [Source][7]§

#### fn [clone_from][8](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][8]

§

### impl<'a> [Debug][9] for [AnyValueRef][5]<'a>

§

#### fn [fmt][10](&self, f: &mut [Formatter][11]<'_>) -> [Result][12]<[()][13], [Error][14]>

Formats the value using the given formatter. [Read more][10]

§

### impl<'a> [ValueRef][15]<'a> for [AnyValueRef][5]<'a>

§

#### type [Database][16] = [Any][17]

§

#### fn [to_owned][18]( &self, ) -> <<[AnyValueRef][5]<'a> as [ValueRef][15]<'a>>::[Database][19] as [Database][20]>::[Value][21]

Creates an owned value from this value reference. [Read more][18]

§

#### fn [type_info][22]( &self, ) -> [Cow][23]<'_, <<[AnyValueRef][5]<'a> as [ValueRef][15]<'a>>::[Database][19] as [Database][20]>::[TypeInfo][24]>

Get the type information for this value.

§

#### fn [is_null][25](&self) -> [bool][26]

Returns `true` if the SQL value is `NULL`.

## Auto Trait Implementations§

§

### impl<'a> [Freeze][27] for [AnyValueRef][5]<'a>

§

### impl<'a> [RefUnwindSafe][28] for [AnyValueRef][5]<'a>

§

### impl<'a> [Send][29] for [AnyValueRef][5]<'a>

§

### impl<'a> [Sync][30] for [AnyValueRef][5]<'a>

§

### impl<'a> [Unpin][31] for [AnyValueRef][5]<'a>

§

### impl<'a> [UnwindSafe][32] for [AnyValueRef][5]<'a>

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

#### fn [borrow][42](&self) -> [&T][43]

Immutably borrows from an owned value. [Read more][42]

[Source][44]§

### impl<T> [BorrowMut][45]<T> for T

where T: ?[Sized][35],

[Source][46]§

#### fn [borrow_mut][47](&mut self) -> [&mut T][43]

Mutably borrows from an owned value. [Read more][47]

[Source][48]§

### impl<T> [CloneToUninit][49] for T

where T: [Clone][4],

[Source][50]§

#### unsafe fn [clone_to_uninit][51](&self, dest: [*mut ][52][u8][53])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][51]

[Source][54]§

### impl<T> [From][55]<T> for T

[Source][56]§

#### fn [from][57](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][58] [`Span`][59], returning an `Instrumented` wrapper. Read more

[Source][60]§

### impl<T, U> [Into][61]<U> for T

where U: [From][55]<T>,

[Source][62]§

#### fn [into][63](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][55]<T> for U` chooses to do.

[Source][64]§

### impl<T> [IntoEither][65] for T

[Source][66]§

#### fn [into_either][67](self, into_left: [bool][26]) -> [Either][68]<Self, Self> ⓘ

Converts `self` into a [`Left`][69] variant of [`Either<Self, Self>`][68] if `into_left` is `true`. Converts `self` into a [`Right`][70] variant of [`Either<Self, Self>`][68] otherwise. [Read more][67]

[Source][71]§

#### fn [into_either_with][72]<F>(self, into_left: F) -> [Either][68]<Self, Self> ⓘ

where F: [FnOnce][73](&Self) -> [bool][26],

Converts `self` into a [`Left`][69] variant of [`Either<Self, Self>`][68] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][70] variant of [`Either<Self, Self>`][68] otherwise. [Read more][72]

[Source][74]§

### impl<T> [Same][75] for T

[Source][76]§

#### type [Output][77] = T

Should always be `Self`

[Source][78]§

### impl<T> [ToOwned][79] for T

where T: [Clone][4],

[Source][80]§

#### type [Owned][81] = T

The resulting type after obtaining ownership.

[Source][82]§

#### fn [to_owned][83](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][83]

[Source][84]§

#### fn [clone_into][85](&self, target: [&mut T][43])

Uses borrowed data to replace owned data, usually by cloning. [Read more][85]

[Source][86]§

### impl<T, U> [TryFrom][87]<U> for T

where U: [Into][61]<T>,

[Source][88]§

#### type [Error][89] = [Infallible][90]

The type returned in the event of a conversion error.

[Source][91]§

#### fn [try_from][92](value: U) -> [Result][12]<T, <T as [TryFrom][87]<U>>::[Error][93]>

Performs the conversion.

[Source][94]§

### impl<T, U> [TryInto][95]<U> for T

where U: [TryFrom][87]<T>,

[Source][96]§

#### type [Error][97] = <U as [TryFrom][87]<T>>::[Error][93]

The type returned in the event of a conversion error.

[Source][98]§

#### fn [try_into][99](self) -> [Result][12]<U, <U as [TryFrom][87]<T>>::[Error][93]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][61]<Dispatch>,

Attaches the provided [`Subscriber`][100] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][101] [`Subscriber`][100] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [5]: struct.AnyValueRef.html (struct sqlx::any::AnyValueRef)
   [6]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [7]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [8]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [9]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [10]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [11]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [12]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [14]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [15]: ../trait.ValueRef.html (trait sqlx::ValueRef)
   [16]: ../trait.ValueRef.html#associatedtype.Database
   [17]: ../struct.Any.html (struct sqlx::Any)
   [18]: ../trait.ValueRef.html#tymethod.to_owned
   [19]: ../trait.ValueRef.html#associatedtype.Database (type sqlx::ValueRef::Database)
   [20]: ../trait.Database.html (trait sqlx::Database)
   [21]: ../trait.Database.html#associatedtype.Value (type sqlx::Database::Value)
   [22]: ../trait.ValueRef.html#tymethod.type_info
   [23]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [24]: ../trait.Database.html#associatedtype.TypeInfo (type sqlx::Database::TypeInfo)
   [25]: ../trait.ValueRef.html#tymethod.is_null
   [26]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [27]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [28]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [29]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [30]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
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
   [43]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [44]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [45]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [47]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [48]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [49]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [50]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [51]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [52]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [53]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [54]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [55]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [56]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [57]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [58]: super::Span::current()
   [59]: crate::Span
   [60]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [61]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [62]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [63]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [64]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [65]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [66]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [67]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [68]: ../enum.Either.html (enum sqlx::Either)
   [69]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [70]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [71]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [72]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [73]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [74]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [75]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [76]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [77]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [78]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [79]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [80]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [81]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [82]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [83]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [84]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [85]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [86]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [87]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [88]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [89]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [90]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [91]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [92]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [93]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [94]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [95]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [96]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [97]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [98]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [99]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [100]: super::Subscriber
   [101]: dispatcher#setting-the-default-subscriber

