## SqliteSynchronous

## [sqlx][1]0.8.6

## SqliteSynchronous

### Variants

  * Extra
  * Full
  * Normal
  * Off



### Trait Implementations

  * Clone
  * Copy
  * Debug
  * Default
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



## [In sqlx::sqlite][2]

[sqlx][3]::[sqlite][2]

# Enum SqliteSynchronous Copy item path
[code]
    pub enum SqliteSynchronous {
        Off,
        Normal,
        Full,
        Extra,
    }
[/code]

Expand description

Refer to [SQLite documentation][4] for the meaning of various synchronous settings.

## Variants§

§

### Off

§

### Normal

§

### Full

§

### Extra

## Trait Implementations§

§

### impl [Clone][5] for [SqliteSynchronous][6]

§

#### fn [clone][7](&self) -> [SqliteSynchronous][6]

Returns a duplicate of the value. [Read more][7]

1.0.0 · [Source][8]§

#### fn [clone_from][9](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][9]

§

### impl [Debug][10] for [SqliteSynchronous][6]

§

#### fn [fmt][11](&self, f: &mut [Formatter][12]<'_>) -> [Result][13]<[()][14], [Error][15]>

Formats the value using the given formatter. [Read more][11]

§

### impl [Default][16] for [SqliteSynchronous][6]

§

#### fn [default][17]() -> [SqliteSynchronous][6]

Returns the “default value” for a type. [Read more][17]

§

### impl [FromStr][18] for [SqliteSynchronous][6]

§

#### type [Err][19] = [Error][20]

The associated error which can be returned from parsing.

§

#### fn [from_str][21](s: &[str][22]) -> [Result][13]<[SqliteSynchronous][6], [Error][20]>

Parses a string `s` to return a value of this type. [Read more][21]

§

### impl [PartialEq][23] for [SqliteSynchronous][6]

§

#### fn [eq][24](&self, other: &[SqliteSynchronous][6]) -> [bool][25]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][26]§

#### fn [ne][27](&self, other: [&Rhs][28]) -> [bool][25]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl [Copy][29] for [SqliteSynchronous][6]

§

### impl [Eq][30] for [SqliteSynchronous][6]

§

### impl [StructuralPartialEq][31] for [SqliteSynchronous][6]

## Auto Trait Implementations§

§

### impl [Freeze][32] for [SqliteSynchronous][6]

§

### impl [RefUnwindSafe][33] for [SqliteSynchronous][6]

§

### impl [Send][34] for [SqliteSynchronous][6]

§

### impl [Sync][35] for [SqliteSynchronous][6]

§

### impl [Unpin][36] for [SqliteSynchronous][6]

§

### impl [UnwindSafe][37] for [SqliteSynchronous][6]

## Blanket Implementations§

[Source][38]§

### impl<T> [Any][39] for T

where T: 'static + ?[Sized][40],

[Source][41]§

#### fn [type_id][42](&self) -> [TypeId][43]

Gets the `TypeId` of `self`. [Read more][42]

[Source][44]§

### impl<T> [Borrow][45]<T> for T

where T: ?[Sized][40],

[Source][46]§

#### fn [borrow][47](&self) -> [&T][28]

Immutably borrows from an owned value. [Read more][47]

[Source][48]§

### impl<T> [BorrowMut][49]<T> for T

where T: ?[Sized][40],

[Source][50]§

#### fn [borrow_mut][51](&mut self) -> [&mut T][28]

Mutably borrows from an owned value. [Read more][51]

[Source][52]§

### impl<T> [CloneToUninit][53] for T

where T: [Clone][5],

[Source][54]§

#### unsafe fn [clone_to_uninit][55](&self, dest: [*mut ][56][u8][57])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][55]

§

### impl<Q, K> Equivalent<K> for Q

where Q: [Eq][30] \+ ?[Sized][40], K: [Borrow][45]<Q> \+ ?[Sized][40],

§

#### fn equivalent(&self, key: [&K][28]) -> [bool][25]

Compare self to `key` and return `true` if they are equal.

§

### impl<Q, K> Equivalent<K> for Q

where Q: [Eq][30] \+ ?[Sized][40], K: [Borrow][45]<Q> \+ ?[Sized][40],

§

#### fn equivalent(&self, key: [&K][28]) -> [bool][25]

Checks if this value is equivalent to the given key. Read more

[Source][58]§

### impl<T> [From][59]<T> for T

[Source][60]§

#### fn [from][61](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][62] [`Span`][63], returning an `Instrumented` wrapper. Read more

[Source][64]§

### impl<T, U> [Into][65]<U> for T

where U: [From][59]<T>,

[Source][66]§

#### fn [into][67](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][59]<T> for U` chooses to do.

[Source][68]§

### impl<T> [IntoEither][69] for T

[Source][70]§

#### fn [into_either][71](self, into_left: [bool][25]) -> [Either][72]<Self, Self> ⓘ

Converts `self` into a [`Left`][73] variant of [`Either<Self, Self>`][72] if `into_left` is `true`. Converts `self` into a [`Right`][74] variant of [`Either<Self, Self>`][72] otherwise. [Read more][71]

[Source][75]§

#### fn [into_either_with][76]<F>(self, into_left: F) -> [Either][72]<Self, Self> ⓘ

where F: [FnOnce][77](&Self) -> [bool][25],

Converts `self` into a [`Left`][73] variant of [`Either<Self, Self>`][72] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][74] variant of [`Either<Self, Self>`][72] otherwise. [Read more][76]

[Source][78]§

### impl<T> [Same][79] for T

[Source][80]§

#### type [Output][81] = T

Should always be `Self`

[Source][82]§

### impl<T> [ToOwned][83] for T

where T: [Clone][5],

[Source][84]§

#### type [Owned][85] = T

The resulting type after obtaining ownership.

[Source][86]§

#### fn [to_owned][87](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][87]

[Source][88]§

#### fn [clone_into][89](&self, target: [&mut T][28])

Uses borrowed data to replace owned data, usually by cloning. [Read more][89]

[Source][90]§

### impl<T, U> [TryFrom][91]<U> for T

where U: [Into][65]<T>,

[Source][92]§

#### type [Error][93] = [Infallible][94]

The type returned in the event of a conversion error.

[Source][95]§

#### fn [try_from][96](value: U) -> [Result][13]<T, <T as [TryFrom][91]<U>>::[Error][97]>

Performs the conversion.

[Source][98]§

### impl<T, U> [TryInto][99]<U> for T

where U: [TryFrom][91]<T>,

[Source][100]§

#### type [Error][101] = <U as [TryFrom][91]<T>>::[Error][97]

The type returned in the event of a conversion error.

[Source][102]§

#### fn [try_into][103](self) -> [Result][13]<U, <U as [TryFrom][91]<T>>::[Error][97]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][65]<Dispatch>,

Attaches the provided [`Subscriber`][104] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][105] [`Subscriber`][104] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://www.sqlite.org/pragma.html#pragma_synchronous
   [5]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [6]: enum.SqliteSynchronous.html (enum sqlx::sqlite::SqliteSynchronous)
   [7]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [8]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [9]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [10]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [11]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [12]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [13]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [14]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [15]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [16]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [17]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [18]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html (trait core::str::traits::FromStr)
   [19]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#associatedtype.Err
   [20]: ../enum.Error.html (enum sqlx::Error)
   [21]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#tymethod.from_str
   [22]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [23]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [24]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [25]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [26]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [27]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [28]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [29]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [30]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [31]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [32]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [33]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [34]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [35]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [36]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [37]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [38]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [39]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [40]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [41]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [42]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [43]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [44]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [45]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [47]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [48]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [49]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [50]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [51]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [52]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [53]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [54]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [55]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [56]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [57]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [58]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [59]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [60]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [61]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [62]: super::Span::current()
   [63]: crate::Span
   [64]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [65]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [66]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [67]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [68]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [69]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [70]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [71]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [72]: ../enum.Either.html (enum sqlx::Either)
   [73]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [74]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [75]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [76]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [77]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [78]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [79]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [80]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [81]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [82]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [83]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [84]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [85]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [86]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [87]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [88]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [89]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [90]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [91]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [92]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [93]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [94]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [95]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [96]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [97]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [98]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [99]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [100]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [101]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [102]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [103]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [104]: super::Subscriber
   [105]: dispatcher#setting-the-default-subscriber

