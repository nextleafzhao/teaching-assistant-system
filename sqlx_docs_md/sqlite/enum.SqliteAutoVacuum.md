## SqliteAutoVacuum

## [sqlx][1]0.8.6

## SqliteAutoVacuum

### Variants

  * Full
  * Incremental
  * None



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

# Enum SqliteAutoVacuum Copy item path
[code]
    pub enum SqliteAutoVacuum {
        None,
        Full,
        Incremental,
    }
[/code]

## Variants§

§

### None

§

### Full

§

### Incremental

## Trait Implementations§

§

### impl [Clone][4] for [SqliteAutoVacuum][5]

§

#### fn [clone][6](&self) -> [SqliteAutoVacuum][5]

Returns a duplicate of the value. [Read more][6]

1.0.0 · [Source][7]§

#### fn [clone_from][8](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][8]

§

### impl [Debug][9] for [SqliteAutoVacuum][5]

§

#### fn [fmt][10](&self, f: &mut [Formatter][11]<'_>) -> [Result][12]<[()][13], [Error][14]>

Formats the value using the given formatter. [Read more][10]

§

### impl [Default][15] for [SqliteAutoVacuum][5]

§

#### fn [default][16]() -> [SqliteAutoVacuum][5]

Returns the “default value” for a type. [Read more][16]

§

### impl [FromStr][17] for [SqliteAutoVacuum][5]

§

#### type [Err][18] = [Error][19]

The associated error which can be returned from parsing.

§

#### fn [from_str][20](s: &[str][21]) -> [Result][12]<[SqliteAutoVacuum][5], [Error][19]>

Parses a string `s` to return a value of this type. [Read more][20]

§

### impl [PartialEq][22] for [SqliteAutoVacuum][5]

§

#### fn [eq][23](&self, other: &[SqliteAutoVacuum][5]) -> [bool][24]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][25]§

#### fn [ne][26](&self, other: [&Rhs][27]) -> [bool][24]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl [Copy][28] for [SqliteAutoVacuum][5]

§

### impl [Eq][29] for [SqliteAutoVacuum][5]

§

### impl [StructuralPartialEq][30] for [SqliteAutoVacuum][5]

## Auto Trait Implementations§

§

### impl [Freeze][31] for [SqliteAutoVacuum][5]

§

### impl [RefUnwindSafe][32] for [SqliteAutoVacuum][5]

§

### impl [Send][33] for [SqliteAutoVacuum][5]

§

### impl [Sync][34] for [SqliteAutoVacuum][5]

§

### impl [Unpin][35] for [SqliteAutoVacuum][5]

§

### impl [UnwindSafe][36] for [SqliteAutoVacuum][5]

## Blanket Implementations§

[Source][37]§

### impl<T> [Any][38] for T

where T: 'static + ?[Sized][39],

[Source][40]§

#### fn [type_id][41](&self) -> [TypeId][42]

Gets the `TypeId` of `self`. [Read more][41]

[Source][43]§

### impl<T> [Borrow][44]<T> for T

where T: ?[Sized][39],

[Source][45]§

#### fn [borrow][46](&self) -> [&T][27]

Immutably borrows from an owned value. [Read more][46]

[Source][47]§

### impl<T> [BorrowMut][48]<T> for T

where T: ?[Sized][39],

[Source][49]§

#### fn [borrow_mut][50](&mut self) -> [&mut T][27]

Mutably borrows from an owned value. [Read more][50]

[Source][51]§

### impl<T> [CloneToUninit][52] for T

where T: [Clone][4],

[Source][53]§

#### unsafe fn [clone_to_uninit][54](&self, dest: [*mut ][55][u8][56])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][54]

§

### impl<Q, K> Equivalent<K> for Q

where Q: [Eq][29] \+ ?[Sized][39], K: [Borrow][44]<Q> \+ ?[Sized][39],

§

#### fn equivalent(&self, key: [&K][27]) -> [bool][24]

Compare self to `key` and return `true` if they are equal.

§

### impl<Q, K> Equivalent<K> for Q

where Q: [Eq][29] \+ ?[Sized][39], K: [Borrow][44]<Q> \+ ?[Sized][39],

§

#### fn equivalent(&self, key: [&K][27]) -> [bool][24]

Checks if this value is equivalent to the given key. Read more

[Source][57]§

### impl<T> [From][58]<T> for T

[Source][59]§

#### fn [from][60](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][61] [`Span`][62], returning an `Instrumented` wrapper. Read more

[Source][63]§

### impl<T, U> [Into][64]<U> for T

where U: [From][58]<T>,

[Source][65]§

#### fn [into][66](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][58]<T> for U` chooses to do.

[Source][67]§

### impl<T> [IntoEither][68] for T

[Source][69]§

#### fn [into_either][70](self, into_left: [bool][24]) -> [Either][71]<Self, Self> ⓘ

Converts `self` into a [`Left`][72] variant of [`Either<Self, Self>`][71] if `into_left` is `true`. Converts `self` into a [`Right`][73] variant of [`Either<Self, Self>`][71] otherwise. [Read more][70]

[Source][74]§

#### fn [into_either_with][75]<F>(self, into_left: F) -> [Either][71]<Self, Self> ⓘ

where F: [FnOnce][76](&Self) -> [bool][24],

Converts `self` into a [`Left`][72] variant of [`Either<Self, Self>`][71] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][73] variant of [`Either<Self, Self>`][71] otherwise. [Read more][75]

[Source][77]§

### impl<T> [Same][78] for T

[Source][79]§

#### type [Output][80] = T

Should always be `Self`

[Source][81]§

### impl<T> [ToOwned][82] for T

where T: [Clone][4],

[Source][83]§

#### type [Owned][84] = T

The resulting type after obtaining ownership.

[Source][85]§

#### fn [to_owned][86](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][86]

[Source][87]§

#### fn [clone_into][88](&self, target: [&mut T][27])

Uses borrowed data to replace owned data, usually by cloning. [Read more][88]

[Source][89]§

### impl<T, U> [TryFrom][90]<U> for T

where U: [Into][64]<T>,

[Source][91]§

#### type [Error][92] = [Infallible][93]

The type returned in the event of a conversion error.

[Source][94]§

#### fn [try_from][95](value: U) -> [Result][12]<T, <T as [TryFrom][90]<U>>::[Error][96]>

Performs the conversion.

[Source][97]§

### impl<T, U> [TryInto][98]<U> for T

where U: [TryFrom][90]<T>,

[Source][99]§

#### type [Error][100] = <U as [TryFrom][90]<T>>::[Error][96]

The type returned in the event of a conversion error.

[Source][101]§

#### fn [try_into][102](self) -> [Result][12]<U, <U as [TryFrom][90]<T>>::[Error][96]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][64]<Dispatch>,

Attaches the provided [`Subscriber`][103] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][104] [`Subscriber`][103] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [5]: enum.SqliteAutoVacuum.html (enum sqlx::sqlite::SqliteAutoVacuum)
   [6]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [7]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [8]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [9]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [10]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [11]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [12]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [14]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [15]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [16]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [17]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html (trait core::str::traits::FromStr)
   [18]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#associatedtype.Err
   [19]: ../enum.Error.html (enum sqlx::Error)
   [20]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#tymethod.from_str
   [21]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [22]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [23]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [24]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [25]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [26]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [27]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [28]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [29]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [30]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [31]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [32]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [33]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [34]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [35]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [36]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [37]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [38]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [39]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [40]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [41]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [42]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [44]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [45]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [46]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [47]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [48]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [49]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [50]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [51]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [52]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [54]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [55]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [56]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [57]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [58]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [59]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [60]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [61]: super::Span::current()
   [62]: crate::Span
   [63]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [65]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [67]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [68]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [69]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [70]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [71]: ../enum.Either.html (enum sqlx::Either)
   [72]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [73]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [74]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [75]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [76]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [77]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [78]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [79]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [80]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [81]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [82]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [83]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [84]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [85]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [86]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [87]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [88]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [89]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [90]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [91]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [92]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [93]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [94]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [95]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [96]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [97]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [98]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [99]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [100]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [101]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [102]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [103]: super::Subscriber
   [104]: dispatcher#setting-the-default-subscriber

