## AnyValue

## [sqlx][1]0.8.6

## AnyValue

### Trait Implementations

  * Clone
  * Debug
  * Value



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

# Struct AnyValue Copy item path
[code]
    pub struct AnyValue { /* private fields */ }
[/code]

## Trait Implementations§

§

### impl [Clone][4] for [AnyValue][5]

§

#### fn [clone][6](&self) -> [AnyValue][5]

Returns a duplicate of the value. [Read more][6]

1.0.0 · [Source][7]§

#### fn [clone_from][8](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][8]

§

### impl [Debug][9] for [AnyValue][5]

§

#### fn [fmt][10](&self, f: &mut [Formatter][11]<'_>) -> [Result][12]<[()][13], [Error][14]>

Formats the value using the given formatter. [Read more][10]

§

### impl [Value][15] for [AnyValue][5]

§

#### type [Database][16] = [Any][17]

§

#### fn [as_ref][18](&self) -> <<[AnyValue][5] as [Value][15]>::[Database][19] as [Database][20]>::[ValueRef][21]<'_>

Get this value as a reference.

§

#### fn [type_info][22]( &self, ) -> [Cow][23]<'_, <<[AnyValue][5] as [Value][15]>::[Database][19] as [Database][20]>::[TypeInfo][24]>

Get the type information for this value.

§

#### fn [is_null][25](&self) -> [bool][26]

Returns `true` if the SQL value is `NULL`.

§

#### fn [decode][27]<'r, T>(&'r self) -> T

where T: [Decode][28]<'r, Self::[Database][19]> \+ [Type][29]<Self::[Database][19]>,

Decode this single value into the requested type. [Read more][27]

§

#### fn [decode_unchecked][30]<'r, T>(&'r self) -> T

where T: [Decode][28]<'r, Self::[Database][19]>,

Decode this single value into the requested type. [Read more][30]

§

#### fn [try_decode][31]<'r, T>(&'r self) -> [Result][12]<T, [Error][32]>

where T: [Decode][28]<'r, Self::[Database][19]> \+ [Type][29]<Self::[Database][19]>,

Decode this single value into the requested type. [Read more][31]

§

#### fn [try_decode_unchecked][33]<'r, T>(&'r self) -> [Result][12]<T, [Error][32]>

where T: [Decode][28]<'r, Self::[Database][19]>,

Decode this single value into the requested type. [Read more][33]

## Auto Trait Implementations§

§

### impl [Freeze][34] for [AnyValue][5]

§

### impl [RefUnwindSafe][35] for [AnyValue][5]

§

### impl [Send][36] for [AnyValue][5]

§

### impl [Sync][37] for [AnyValue][5]

§

### impl [Unpin][38] for [AnyValue][5]

§

### impl [UnwindSafe][39] for [AnyValue][5]

## Blanket Implementations§

[Source][40]§

### impl<T> [Any][41] for T

where T: 'static + ?[Sized][42],

[Source][43]§

#### fn [type_id][44](&self) -> [TypeId][45]

Gets the `TypeId` of `self`. [Read more][44]

[Source][46]§

### impl<T> [Borrow][47]<T> for T

where T: ?[Sized][42],

[Source][48]§

#### fn [borrow][49](&self) -> [&T][50]

Immutably borrows from an owned value. [Read more][49]

[Source][51]§

### impl<T> [BorrowMut][52]<T> for T

where T: ?[Sized][42],

[Source][53]§

#### fn [borrow_mut][54](&mut self) -> [&mut T][50]

Mutably borrows from an owned value. [Read more][54]

[Source][55]§

### impl<T> [CloneToUninit][56] for T

where T: [Clone][4],

[Source][57]§

#### unsafe fn [clone_to_uninit][58](&self, dest: [*mut ][59][u8][60])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][58]

[Source][61]§

### impl<T> [From][62]<T> for T

[Source][63]§

#### fn [from][64](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][65] [`Span`][66], returning an `Instrumented` wrapper. Read more

[Source][67]§

### impl<T, U> [Into][68]<U> for T

where U: [From][62]<T>,

[Source][69]§

#### fn [into][70](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][62]<T> for U` chooses to do.

[Source][71]§

### impl<T> [IntoEither][72] for T

[Source][73]§

#### fn [into_either][74](self, into_left: [bool][26]) -> [Either][75]<Self, Self> ⓘ

Converts `self` into a [`Left`][76] variant of [`Either<Self, Self>`][75] if `into_left` is `true`. Converts `self` into a [`Right`][77] variant of [`Either<Self, Self>`][75] otherwise. [Read more][74]

[Source][78]§

#### fn [into_either_with][79]<F>(self, into_left: F) -> [Either][75]<Self, Self> ⓘ

where F: [FnOnce][80](&Self) -> [bool][26],

Converts `self` into a [`Left`][76] variant of [`Either<Self, Self>`][75] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][77] variant of [`Either<Self, Self>`][75] otherwise. [Read more][79]

[Source][81]§

### impl<T> [Same][82] for T

[Source][83]§

#### type [Output][84] = T

Should always be `Self`

[Source][85]§

### impl<T> [ToOwned][86] for T

where T: [Clone][4],

[Source][87]§

#### type [Owned][88] = T

The resulting type after obtaining ownership.

[Source][89]§

#### fn [to_owned][90](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][90]

[Source][91]§

#### fn [clone_into][92](&self, target: [&mut T][50])

Uses borrowed data to replace owned data, usually by cloning. [Read more][92]

[Source][93]§

### impl<T, U> [TryFrom][94]<U> for T

where U: [Into][68]<T>,

[Source][95]§

#### type [Error][96] = [Infallible][97]

The type returned in the event of a conversion error.

[Source][98]§

#### fn [try_from][99](value: U) -> [Result][12]<T, <T as [TryFrom][94]<U>>::[Error][100]>

Performs the conversion.

[Source][101]§

### impl<T, U> [TryInto][102]<U> for T

where U: [TryFrom][94]<T>,

[Source][103]§

#### type [Error][104] = <U as [TryFrom][94]<T>>::[Error][100]

The type returned in the event of a conversion error.

[Source][105]§

#### fn [try_into][106](self) -> [Result][12]<U, <U as [TryFrom][94]<T>>::[Error][100]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][68]<Dispatch>,

Attaches the provided [`Subscriber`][107] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][108] [`Subscriber`][107] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [5]: struct.AnyValue.html (struct sqlx::any::AnyValue)
   [6]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [7]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [8]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [9]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [10]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [11]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [12]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [14]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [15]: ../trait.Value.html (trait sqlx::Value)
   [16]: ../trait.Value.html#associatedtype.Database
   [17]: ../struct.Any.html (struct sqlx::Any)
   [18]: ../trait.Value.html#tymethod.as_ref
   [19]: ../trait.Value.html#associatedtype.Database (type sqlx::Value::Database)
   [20]: ../trait.Database.html (trait sqlx::Database)
   [21]: ../trait.Database.html#associatedtype.ValueRef (type sqlx::Database::ValueRef)
   [22]: ../trait.Value.html#tymethod.type_info
   [23]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [24]: ../trait.Database.html#associatedtype.TypeInfo (type sqlx::Database::TypeInfo)
   [25]: ../trait.Value.html#tymethod.is_null
   [26]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [27]: ../trait.Value.html#method.decode
   [28]: ../trait.Decode.html (trait sqlx::Decode)
   [29]: ../trait.Type.html (trait sqlx::Type)
   [30]: ../trait.Value.html#method.decode_unchecked
   [31]: ../trait.Value.html#method.try_decode
   [32]: ../enum.Error.html (enum sqlx::Error)
   [33]: ../trait.Value.html#method.try_decode_unchecked
   [34]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [35]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [36]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [37]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [38]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [39]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [40]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [41]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [42]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [44]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [45]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [47]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [49]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [50]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [51]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [52]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [54]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [55]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [56]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [57]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [58]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [59]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [60]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [61]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [62]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [63]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [65]: super::Span::current()
   [66]: crate::Span
   [67]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [69]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [71]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [72]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [73]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [74]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [75]: ../enum.Either.html (enum sqlx::Either)
   [76]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [77]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [78]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [79]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [80]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [81]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [82]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [83]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [84]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [85]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [86]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [87]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [88]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [89]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [90]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [91]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [92]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [93]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [94]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [95]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [96]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [97]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [98]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [99]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [100]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [101]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [102]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [103]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [104]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [105]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [106]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [107]: super::Subscriber
   [108]: dispatcher#setting-the-default-subscriber

