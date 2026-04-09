## AnyKind

## [sqlx][1]0.8.6

## AnyKind

### Trait Implementations

  * Clone
  * Copy
  * Debug
  * Eq
  * FromStr
  * PartialEq
  * StructuralPartialEq



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
  * Equivalent<K>
  * Equivalent<K>
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

# Enum AnyKind Copy item path
[code]
    pub enum AnyKind {}
[/code]

👎Deprecated: not used or returned by any API

## Trait Implementations§

§

### impl [Clone][4] for [AnyKind][5]

§

#### fn [clone][6](&self) -> [AnyKind][5]

Returns a duplicate of the value. [Read more][6]

1.0.0 · [Source][7]§

#### fn [clone_from][8](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][8]

§

### impl [Debug][9] for [AnyKind][5]

§

#### fn [fmt][10](&self, f: &mut [Formatter][11]<'_>) -> [Result][12]<[()][13], [Error][14]>

Formats the value using the given formatter. [Read more][10]

§

### impl [FromStr][15] for [AnyKind][5]

§

#### type [Err][16] = [Error][17]

The associated error which can be returned from parsing.

§

#### fn [from_str][18](url: &[str][19]) -> [Result][12]<[AnyKind][5], <[AnyKind][5] as [FromStr][15]>::[Err][20]>

Parses a string `s` to return a value of this type. [Read more][18]

§

### impl [PartialEq][21] for [AnyKind][5]

§

#### fn [eq][22](&self, other: &[AnyKind][5]) -> [bool][23]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][24]§

#### fn [ne][25](&self, other: [&Rhs][26]) -> [bool][23]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl [Copy][27] for [AnyKind][5]

§

### impl [Eq][28] for [AnyKind][5]

§

### impl [StructuralPartialEq][29] for [AnyKind][5]

## Auto Trait Implementations§

§

### impl [Freeze][30] for [AnyKind][5]

§

### impl [RefUnwindSafe][31] for [AnyKind][5]

§

### impl [Send][32] for [AnyKind][5]

§

### impl [Sync][33] for [AnyKind][5]

§

### impl [Unpin][34] for [AnyKind][5]

§

### impl [UnwindSafe][35] for [AnyKind][5]

## Blanket Implementations§

[Source][36]§

### impl<T> [Any][37] for T

where T: 'static + ?[Sized][38],

[Source][39]§

#### fn [type_id][40](&self) -> [TypeId][41]

Gets the `TypeId` of `self`. [Read more][40]

[Source][42]§

### impl<T> [Borrow][43]<T> for T

where T: ?[Sized][38],

[Source][44]§

#### fn [borrow][45](&self) -> [&T][26]

Immutably borrows from an owned value. [Read more][45]

[Source][46]§

### impl<T> [BorrowMut][47]<T> for T

where T: ?[Sized][38],

[Source][48]§

#### fn [borrow_mut][49](&mut self) -> [&mut T][26]

Mutably borrows from an owned value. [Read more][49]

[Source][50]§

### impl<T> [CloneToUninit][51] for T

where T: [Clone][4],

[Source][52]§

#### unsafe fn [clone_to_uninit][53](&self, dest: [*mut ][54][u8][55])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][53]

§

### impl<Q, K> Equivalent<K> for Q

where Q: [Eq][28] \+ ?[Sized][38], K: [Borrow][43]<Q> \+ ?[Sized][38],

§

#### fn equivalent(&self, key: [&K][26]) -> [bool][23]

Compare self to `key` and return `true` if they are equal.

§

### impl<Q, K> Equivalent<K> for Q

where Q: [Eq][28] \+ ?[Sized][38], K: [Borrow][43]<Q> \+ ?[Sized][38],

§

#### fn equivalent(&self, key: [&K][26]) -> [bool][23]

Checks if this value is equivalent to the given key. Read more

[Source][56]§

### impl<T> [From][57]<T> for T

[Source][58]§

#### fn [from][59](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][60] [`Span`][61], returning an `Instrumented` wrapper. Read more

[Source][62]§

### impl<T, U> [Into][63]<U> for T

where U: [From][57]<T>,

[Source][64]§

#### fn [into][65](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][57]<T> for U` chooses to do.

[Source][66]§

### impl<T> [IntoEither][67] for T

[Source][68]§

#### fn [into_either][69](self, into_left: [bool][23]) -> [Either][70]<Self, Self> ⓘ

Converts `self` into a [`Left`][71] variant of [`Either<Self, Self>`][70] if `into_left` is `true`. Converts `self` into a [`Right`][72] variant of [`Either<Self, Self>`][70] otherwise. [Read more][69]

[Source][73]§

#### fn [into_either_with][74]<F>(self, into_left: F) -> [Either][70]<Self, Self> ⓘ

where F: [FnOnce][75](&Self) -> [bool][23],

Converts `self` into a [`Left`][71] variant of [`Either<Self, Self>`][70] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][72] variant of [`Either<Self, Self>`][70] otherwise. [Read more][74]

[Source][76]§

### impl<T> [Same][77] for T

[Source][78]§

#### type [Output][79] = T

Should always be `Self`

[Source][80]§

### impl<T> [ToOwned][81] for T

where T: [Clone][4],

[Source][82]§

#### type [Owned][83] = T

The resulting type after obtaining ownership.

[Source][84]§

#### fn [to_owned][85](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][85]

[Source][86]§

#### fn [clone_into][87](&self, target: [&mut T][26])

Uses borrowed data to replace owned data, usually by cloning. [Read more][87]

[Source][88]§

### impl<T, U> [TryFrom][89]<U> for T

where U: [Into][63]<T>,

[Source][90]§

#### type [Error][91] = [Infallible][92]

The type returned in the event of a conversion error.

[Source][93]§

#### fn [try_from][94](value: U) -> [Result][12]<T, <T as [TryFrom][89]<U>>::[Error][95]>

Performs the conversion.

[Source][96]§

### impl<T, U> [TryInto][97]<U> for T

where U: [TryFrom][89]<T>,

[Source][98]§

#### type [Error][99] = <U as [TryFrom][89]<T>>::[Error][95]

The type returned in the event of a conversion error.

[Source][100]§

#### fn [try_into][101](self) -> [Result][12]<U, <U as [TryFrom][89]<T>>::[Error][95]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][63]<Dispatch>,

Attaches the provided [`Subscriber`][102] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][103] [`Subscriber`][102] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [5]: enum.AnyKind.html (enum sqlx::any::AnyKind)
   [6]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [7]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [8]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [9]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [10]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [11]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [12]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [14]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [15]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html (trait core::str::traits::FromStr)
   [16]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#associatedtype.Err
   [17]: ../enum.Error.html (enum sqlx::Error)
   [18]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#tymethod.from_str
   [19]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [20]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#associatedtype.Err (type core::str::traits::FromStr::Err)
   [21]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [22]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [23]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [24]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [25]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [26]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [27]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [28]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [29]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [30]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [31]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [32]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [33]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [34]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [35]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [36]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [37]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [38]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [39]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [40]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [41]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [42]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [43]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [44]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [45]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [46]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [47]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [49]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [50]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [51]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [53]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [54]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [55]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [56]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [57]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [59]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [60]: super::Span::current()
   [61]: crate::Span
   [62]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [63]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [64]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [65]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [66]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [67]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [68]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [69]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [70]: ../enum.Either.html (enum sqlx::Either)
   [71]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [72]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [73]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [74]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [75]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [76]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [77]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [78]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [79]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [80]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [81]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [82]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [83]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [84]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [85]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [86]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [87]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [88]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [89]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [90]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [91]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [92]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [93]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [94]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [95]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [96]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [97]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [98]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [99]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [100]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [101]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [102]: super::Subscriber
   [103]: dispatcher#setting-the-default-subscriber

