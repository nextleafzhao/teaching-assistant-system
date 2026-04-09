## SqliteTypeInfo

## [sqlx][1]0.8.6

## SqliteTypeInfo

### Trait Implementations

  * Clone
  * Debug
  * Display
  * Eq
  * Hash
  * PartialEq
  * StructuralPartialEq
  * TryFrom<&'a SqliteTypeInfo>
  * TypeInfo



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
  * ToString
  * TryFrom<U>
  * TryInto<U>
  * WithSubscriber



## [In sqlx::sqlite][2]

[sqlx][3]::[sqlite][2]

# Struct SqliteTypeInfo Copy item path
[code]
    pub struct SqliteTypeInfo(/* private fields */);
[/code]

Expand description

Type information for a SQLite type.

## Trait Implementations§

§

### impl [Clone][4] for [SqliteTypeInfo][5]

§

#### fn [clone][6](&self) -> [SqliteTypeInfo][5]

Returns a duplicate of the value. [Read more][6]

1.0.0 · [Source][7]§

#### fn [clone_from][8](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][8]

§

### impl [Debug][9] for [SqliteTypeInfo][5]

§

#### fn [fmt][10](&self, f: &mut [Formatter][11]<'_>) -> [Result][12]<[()][13], [Error][14]>

Formats the value using the given formatter. [Read more][10]

§

### impl [Display][15] for [SqliteTypeInfo][5]

§

#### fn [fmt][16](&self, f: &mut [Formatter][11]<'_>) -> [Result][12]<[()][13], [Error][14]>

Formats the value using the given formatter. [Read more][16]

§

### impl [Hash][17] for [SqliteTypeInfo][5]

§

#### fn [hash][18]<__H>(&self, state: [&mut __H][19])

where __H: [Hasher][20],

Feeds this value into the given [`Hasher`][20]. [Read more][18]

1.3.0 · [Source][21]§

#### fn [hash_slice][22]<H>(data: &[Self], state: [&mut H][19])

where H: [Hasher][20], Self: [Sized][23],

Feeds a slice of this type into the given [`Hasher`][20]. [Read more][22]

§

### impl [PartialEq][24] for [SqliteTypeInfo][5]

§

#### fn [eq][25](&self, other: &[SqliteTypeInfo][5]) -> [bool][26]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][27]§

#### fn [ne][28](&self, other: [&Rhs][19]) -> [bool][26]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl<'a> [TryFrom][29]<&'a [SqliteTypeInfo][5]> for [AnyTypeInfo][30]

§

#### type [Error][31] = [Error][32]

The type returned in the event of a conversion error.

§

#### fn [try_from][33]( sqlite_type: &'a [SqliteTypeInfo][5], ) -> [Result][12]<[AnyTypeInfo][30], <[AnyTypeInfo][30] as [TryFrom][29]<&'a [SqliteTypeInfo][5]>>::[Error][34]>

Performs the conversion.

§

### impl [TypeInfo][35] for [SqliteTypeInfo][5]

§

#### fn [is_null][36](&self) -> [bool][26]

§

#### fn [name][37](&self) -> &[str][38]

Returns the database system name of the type. Length specifiers should not be included. Common type names are `VARCHAR`, `TEXT`, or `INT`. Type names should be uppercase. They should be a rough approximation of how they are written in SQL in the given database.

§

#### fn [type_compatible][39](&self, other: &Self) -> [bool][26]

where Self: [Sized][23],

Return `true` if `self` and `other` represent mutually compatible types. [Read more][39]

§

### impl [Eq][40] for [SqliteTypeInfo][5]

§

### impl [StructuralPartialEq][41] for [SqliteTypeInfo][5]

## Auto Trait Implementations§

§

### impl [Freeze][42] for [SqliteTypeInfo][5]

§

### impl [RefUnwindSafe][43] for [SqliteTypeInfo][5]

§

### impl [Send][44] for [SqliteTypeInfo][5]

§

### impl [Sync][45] for [SqliteTypeInfo][5]

§

### impl [Unpin][46] for [SqliteTypeInfo][5]

§

### impl [UnwindSafe][47] for [SqliteTypeInfo][5]

## Blanket Implementations§

[Source][48]§

### impl<T> [Any][49] for T

where T: 'static + ?[Sized][23],

[Source][50]§

#### fn [type_id][51](&self) -> [TypeId][52]

Gets the `TypeId` of `self`. [Read more][51]

[Source][53]§

### impl<T> [Borrow][54]<T> for T

where T: ?[Sized][23],

[Source][55]§

#### fn [borrow][56](&self) -> [&T][19]

Immutably borrows from an owned value. [Read more][56]

[Source][57]§

### impl<T> [BorrowMut][58]<T> for T

where T: ?[Sized][23],

[Source][59]§

#### fn [borrow_mut][60](&mut self) -> [&mut T][19]

Mutably borrows from an owned value. [Read more][60]

[Source][61]§

### impl<T> [CloneToUninit][62] for T

where T: [Clone][4],

[Source][63]§

#### unsafe fn [clone_to_uninit][64](&self, dest: [*mut ][65][u8][66])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][64]

§

### impl<Q, K> Equivalent<K> for Q

where Q: [Eq][40] \+ ?[Sized][23], K: [Borrow][54]<Q> \+ ?[Sized][23],

§

#### fn equivalent(&self, key: [&K][19]) -> [bool][26]

Compare self to `key` and return `true` if they are equal.

§

### impl<Q, K> Equivalent<K> for Q

where Q: [Eq][40] \+ ?[Sized][23], K: [Borrow][54]<Q> \+ ?[Sized][23],

§

#### fn equivalent(&self, key: [&K][19]) -> [bool][26]

Checks if this value is equivalent to the given key. Read more

[Source][67]§

### impl<T> [From][68]<T> for T

[Source][69]§

#### fn [from][70](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][71] [`Span`][72], returning an `Instrumented` wrapper. Read more

[Source][73]§

### impl<T, U> [Into][74]<U> for T

where U: [From][68]<T>,

[Source][75]§

#### fn [into][76](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][68]<T> for U` chooses to do.

[Source][77]§

### impl<T> [IntoEither][78] for T

[Source][79]§

#### fn [into_either][80](self, into_left: [bool][26]) -> [Either][81]<Self, Self> ⓘ

Converts `self` into a [`Left`][82] variant of [`Either<Self, Self>`][81] if `into_left` is `true`. Converts `self` into a [`Right`][83] variant of [`Either<Self, Self>`][81] otherwise. [Read more][80]

[Source][84]§

#### fn [into_either_with][85]<F>(self, into_left: F) -> [Either][81]<Self, Self> ⓘ

where F: [FnOnce][86](&Self) -> [bool][26],

Converts `self` into a [`Left`][82] variant of [`Either<Self, Self>`][81] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][83] variant of [`Either<Self, Self>`][81] otherwise. [Read more][85]

[Source][87]§

### impl<T> [Same][88] for T

[Source][89]§

#### type [Output][90] = T

Should always be `Self`

[Source][91]§

### impl<T> [ToOwned][92] for T

where T: [Clone][4],

[Source][93]§

#### type [Owned][94] = T

The resulting type after obtaining ownership.

[Source][95]§

#### fn [to_owned][96](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][96]

[Source][97]§

#### fn [clone_into][98](&self, target: [&mut T][19])

Uses borrowed data to replace owned data, usually by cloning. [Read more][98]

[Source][99]§

### impl<T> [ToString][100] for T

where T: [Display][15] \+ ?[Sized][23],

[Source][101]§

#### fn [to_string][102](&self) -> [String][103]

Converts the given value to a `String`. [Read more][102]

[Source][104]§

### impl<T, U> [TryFrom][29]<U> for T

where U: [Into][74]<T>,

[Source][105]§

#### type [Error][31] = [Infallible][106]

The type returned in the event of a conversion error.

[Source][107]§

#### fn [try_from][33](value: U) -> [Result][12]<T, <T as [TryFrom][29]<U>>::[Error][34]>

Performs the conversion.

[Source][108]§

### impl<T, U> [TryInto][109]<U> for T

where U: [TryFrom][29]<T>,

[Source][110]§

#### type [Error][111] = <U as [TryFrom][29]<T>>::[Error][34]

The type returned in the event of a conversion error.

[Source][112]§

#### fn [try_into][113](self) -> [Result][12]<U, <U as [TryFrom][29]<T>>::[Error][34]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][74]<Dispatch>,

Attaches the provided [`Subscriber`][114] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][115] [`Subscriber`][114] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [5]: struct.SqliteTypeInfo.html (struct sqlx::sqlite::SqliteTypeInfo)
   [6]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [7]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [8]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [9]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [10]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [11]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [12]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [14]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [15]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [16]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html#tymethod.fmt
   [17]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html (trait core::hash::Hash)
   [18]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#tymethod.hash
   [19]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [20]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hasher.html (trait core::hash::Hasher)
   [21]: https://doc.rust-lang.org/1.94.1/src/core/hash/mod.rs.html#235-237
   [22]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#method.hash_slice
   [23]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [24]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [25]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [26]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [27]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [28]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [29]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [30]: ../any/struct.AnyTypeInfo.html (struct sqlx::any::AnyTypeInfo)
   [31]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [32]: ../enum.Error.html (enum sqlx::Error)
   [33]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [34]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [35]: ../trait.TypeInfo.html (trait sqlx::TypeInfo)
   [36]: ../trait.TypeInfo.html#tymethod.is_null
   [37]: ../trait.TypeInfo.html#tymethod.name
   [38]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [39]: ../trait.TypeInfo.html#method.type_compatible
   [40]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [41]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [42]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [43]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [44]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [45]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [46]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [47]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [49]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [50]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [51]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [52]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [54]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [56]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [57]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [58]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [59]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [60]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [61]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [62]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [63]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [64]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [65]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [66]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [67]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [69]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [71]: super::Span::current()
   [72]: crate::Span
   [73]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [74]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [75]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [76]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [77]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [78]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [79]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [80]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [81]: ../enum.Either.html (enum sqlx::Either)
   [82]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [83]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [84]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [85]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [86]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [87]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [88]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [89]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [90]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [91]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [92]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [93]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [94]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [95]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [96]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [97]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [98]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [99]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2893
   [100]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html (trait alloc::string::ToString)
   [101]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2895
   [102]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html#tymethod.to_string
   [103]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [104]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [105]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [106]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [107]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [108]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [109]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [110]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [111]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [112]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [113]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [114]: super::Subscriber
   [115]: dispatcher#setting-the-default-subscriber

