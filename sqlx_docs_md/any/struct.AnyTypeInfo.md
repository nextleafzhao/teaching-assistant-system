## AnyTypeInfo

## [sqlx][1]0.8.6

## AnyTypeInfo

### Methods

  * kind



### Trait Implementations

  * Clone
  * Debug
  * Display
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



## [In sqlx::any][2]

[sqlx][3]::[any][2]

# Struct AnyTypeInfo Copy item path
[code]
    pub struct AnyTypeInfo { /* private fields */ }
[/code]

## Implementations§

§

### impl [AnyTypeInfo][4]

#### pub fn kind(&self) -> [AnyTypeInfoKind][5]

## Trait Implementations§

§

### impl [Clone][6] for [AnyTypeInfo][4]

§

#### fn [clone][7](&self) -> [AnyTypeInfo][4]

Returns a duplicate of the value. [Read more][7]

1.0.0 · [Source][8]§

#### fn [clone_from][9](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][9]

§

### impl [Debug][10] for [AnyTypeInfo][4]

§

#### fn [fmt][11](&self, f: &mut [Formatter][12]<'_>) -> [Result][13]<[()][14], [Error][15]>

Formats the value using the given formatter. [Read more][11]

§

### impl [Display][16] for [AnyTypeInfo][4]

§

#### fn [fmt][17](&self, f: &mut [Formatter][12]<'_>) -> [Result][13]<[()][14], [Error][15]>

Formats the value using the given formatter. [Read more][17]

§

### impl [PartialEq][18] for [AnyTypeInfo][4]

§

#### fn [eq][19](&self, other: &[AnyTypeInfo][4]) -> [bool][20]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][21]§

#### fn [ne][22](&self, other: [&Rhs][23]) -> [bool][20]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl<'a> [TryFrom][24]<&'a [SqliteTypeInfo][25]> for [AnyTypeInfo][4]

§

#### type [Error][26] = [Error][27]

The type returned in the event of a conversion error.

§

#### fn [try_from][28]( sqlite_type: &'a [SqliteTypeInfo][25], ) -> [Result][13]<[AnyTypeInfo][4], <[AnyTypeInfo][4] as [TryFrom][24]<&'a [SqliteTypeInfo][25]>>::[Error][29]>

Performs the conversion.

§

### impl [TypeInfo][30] for [AnyTypeInfo][4]

§

#### fn [is_null][31](&self) -> [bool][20]

§

#### fn [name][32](&self) -> &[str][33]

Returns the database system name of the type. Length specifiers should not be included. Common type names are `VARCHAR`, `TEXT`, or `INT`. Type names should be uppercase. They should be a rough approximation of how they are written in SQL in the given database.

§

#### fn [type_compatible][34](&self, other: &Self) -> [bool][20]

where Self: [Sized][35],

Return `true` if `self` and `other` represent mutually compatible types. [Read more][34]

§

### impl [StructuralPartialEq][36] for [AnyTypeInfo][4]

## Auto Trait Implementations§

§

### impl [Freeze][37] for [AnyTypeInfo][4]

§

### impl [RefUnwindSafe][38] for [AnyTypeInfo][4]

§

### impl [Send][39] for [AnyTypeInfo][4]

§

### impl [Sync][40] for [AnyTypeInfo][4]

§

### impl [Unpin][41] for [AnyTypeInfo][4]

§

### impl [UnwindSafe][42] for [AnyTypeInfo][4]

## Blanket Implementations§

[Source][43]§

### impl<T> [Any][44] for T

where T: 'static + ?[Sized][35],

[Source][45]§

#### fn [type_id][46](&self) -> [TypeId][47]

Gets the `TypeId` of `self`. [Read more][46]

[Source][48]§

### impl<T> [Borrow][49]<T> for T

where T: ?[Sized][35],

[Source][50]§

#### fn [borrow][51](&self) -> [&T][23]

Immutably borrows from an owned value. [Read more][51]

[Source][52]§

### impl<T> [BorrowMut][53]<T> for T

where T: ?[Sized][35],

[Source][54]§

#### fn [borrow_mut][55](&mut self) -> [&mut T][23]

Mutably borrows from an owned value. [Read more][55]

[Source][56]§

### impl<T> [CloneToUninit][57] for T

where T: [Clone][6],

[Source][58]§

#### unsafe fn [clone_to_uninit][59](&self, dest: [*mut ][60][u8][61])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][59]

[Source][62]§

### impl<T> [From][63]<T> for T

[Source][64]§

#### fn [from][65](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][66] [`Span`][67], returning an `Instrumented` wrapper. Read more

[Source][68]§

### impl<T, U> [Into][69]<U> for T

where U: [From][63]<T>,

[Source][70]§

#### fn [into][71](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][63]<T> for U` chooses to do.

[Source][72]§

### impl<T> [IntoEither][73] for T

[Source][74]§

#### fn [into_either][75](self, into_left: [bool][20]) -> [Either][76]<Self, Self> ⓘ

Converts `self` into a [`Left`][77] variant of [`Either<Self, Self>`][76] if `into_left` is `true`. Converts `self` into a [`Right`][78] variant of [`Either<Self, Self>`][76] otherwise. [Read more][75]

[Source][79]§

#### fn [into_either_with][80]<F>(self, into_left: F) -> [Either][76]<Self, Self> ⓘ

where F: [FnOnce][81](&Self) -> [bool][20],

Converts `self` into a [`Left`][77] variant of [`Either<Self, Self>`][76] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][78] variant of [`Either<Self, Self>`][76] otherwise. [Read more][80]

[Source][82]§

### impl<T> [Same][83] for T

[Source][84]§

#### type [Output][85] = T

Should always be `Self`

[Source][86]§

### impl<T> [ToOwned][87] for T

where T: [Clone][6],

[Source][88]§

#### type [Owned][89] = T

The resulting type after obtaining ownership.

[Source][90]§

#### fn [to_owned][91](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][91]

[Source][92]§

#### fn [clone_into][93](&self, target: [&mut T][23])

Uses borrowed data to replace owned data, usually by cloning. [Read more][93]

[Source][94]§

### impl<T> [ToString][95] for T

where T: [Display][16] \+ ?[Sized][35],

[Source][96]§

#### fn [to_string][97](&self) -> [String][98]

Converts the given value to a `String`. [Read more][97]

[Source][99]§

### impl<T, U> [TryFrom][24]<U> for T

where U: [Into][69]<T>,

[Source][100]§

#### type [Error][26] = [Infallible][101]

The type returned in the event of a conversion error.

[Source][102]§

#### fn [try_from][28](value: U) -> [Result][13]<T, <T as [TryFrom][24]<U>>::[Error][29]>

Performs the conversion.

[Source][103]§

### impl<T, U> [TryInto][104]<U> for T

where U: [TryFrom][24]<T>,

[Source][105]§

#### type [Error][106] = <U as [TryFrom][24]<T>>::[Error][29]

The type returned in the event of a conversion error.

[Source][107]§

#### fn [try_into][108](self) -> [Result][13]<U, <U as [TryFrom][24]<T>>::[Error][29]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][69]<Dispatch>,

Attaches the provided [`Subscriber`][109] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][110] [`Subscriber`][109] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: struct.AnyTypeInfo.html (struct sqlx::any::AnyTypeInfo)
   [5]: enum.AnyTypeInfoKind.html (enum sqlx::any::AnyTypeInfoKind)
   [6]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [7]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [8]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [9]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [10]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [11]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [12]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [13]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [14]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [15]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [16]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [17]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html#tymethod.fmt
   [18]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [19]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [20]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [21]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [22]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [23]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [24]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [25]: ../sqlite/struct.SqliteTypeInfo.html (struct sqlx::sqlite::SqliteTypeInfo)
   [26]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [27]: ../enum.Error.html (enum sqlx::Error)
   [28]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [29]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [30]: ../trait.TypeInfo.html (trait sqlx::TypeInfo)
   [31]: ../trait.TypeInfo.html#tymethod.is_null
   [32]: ../trait.TypeInfo.html#tymethod.name
   [33]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [34]: ../trait.TypeInfo.html#method.type_compatible
   [35]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [36]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [37]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [38]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [39]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [40]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [41]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [42]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [44]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [45]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [46]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [47]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [49]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [50]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [51]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [52]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [53]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [54]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [55]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [56]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [57]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [59]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [60]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [61]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [62]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [63]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [64]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [65]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [66]: super::Span::current()
   [67]: crate::Span
   [68]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [69]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [70]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [72]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [73]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [74]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [75]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [76]: ../enum.Either.html (enum sqlx::Either)
   [77]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [78]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [79]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [80]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [81]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [82]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [83]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [84]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [85]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [86]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [87]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [88]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [89]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [90]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [91]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [92]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [93]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [94]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2893
   [95]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html (trait alloc::string::ToString)
   [96]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2895
   [97]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html#tymethod.to_string
   [98]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [99]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [100]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [101]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [102]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [103]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [104]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [105]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [106]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [107]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [108]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [109]: super::Subscriber
   [110]: dispatcher#setting-the-default-subscriber

