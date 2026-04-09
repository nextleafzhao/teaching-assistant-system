## AppliedMigration

## [sqlx][1]0.8.6

## AppliedMigration

### Fields

  * checksum
  * version



### Trait Implementations

  * Clone
  * Debug



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



## [In sqlx::migrate][2]

[sqlx][3]::[migrate][2]

# Struct AppliedMigration Copy item path
[code]
    pub struct AppliedMigration {
        pub version: [i64][4],
        pub checksum: [Cow][5]<'static, [[u8][6]]>,
    }
[/code]

## Fields§

§`version: [i64][4]`§`checksum: [Cow][5]<'static, [[u8][6]]>`

## Trait Implementations§

§

### impl [Clone][7] for [AppliedMigration][8]

§

#### fn [clone][9](&self) -> [AppliedMigration][8]

Returns a duplicate of the value. [Read more][9]

1.0.0 · [Source][10]§

#### fn [clone_from][11](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][11]

§

### impl [Debug][12] for [AppliedMigration][8]

§

#### fn [fmt][13](&self, f: &mut [Formatter][14]<'_>) -> [Result][15]<[()][16], [Error][17]>

Formats the value using the given formatter. [Read more][13]

## Auto Trait Implementations§

§

### impl [Freeze][18] for [AppliedMigration][8]

§

### impl [RefUnwindSafe][19] for [AppliedMigration][8]

§

### impl [Send][20] for [AppliedMigration][8]

§

### impl [Sync][21] for [AppliedMigration][8]

§

### impl [Unpin][22] for [AppliedMigration][8]

§

### impl [UnwindSafe][23] for [AppliedMigration][8]

## Blanket Implementations§

[Source][24]§

### impl<T> [Any][25] for T

where T: 'static + ?[Sized][26],

[Source][27]§

#### fn [type_id][28](&self) -> [TypeId][29]

Gets the `TypeId` of `self`. [Read more][28]

[Source][30]§

### impl<T> [Borrow][31]<T> for T

where T: ?[Sized][26],

[Source][32]§

#### fn [borrow][33](&self) -> [&T][34]

Immutably borrows from an owned value. [Read more][33]

[Source][35]§

### impl<T> [BorrowMut][36]<T> for T

where T: ?[Sized][26],

[Source][37]§

#### fn [borrow_mut][38](&mut self) -> [&mut T][34]

Mutably borrows from an owned value. [Read more][38]

[Source][39]§

### impl<T> [CloneToUninit][40] for T

where T: [Clone][7],

[Source][41]§

#### unsafe fn [clone_to_uninit][42](&self, dest: [*mut ][43][u8][6])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][42]

[Source][44]§

### impl<T> [From][45]<T> for T

[Source][46]§

#### fn [from][47](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][48] [`Span`][49], returning an `Instrumented` wrapper. Read more

[Source][50]§

### impl<T, U> [Into][51]<U> for T

where U: [From][45]<T>,

[Source][52]§

#### fn [into][53](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][45]<T> for U` chooses to do.

[Source][54]§

### impl<T> [IntoEither][55] for T

[Source][56]§

#### fn [into_either][57](self, into_left: [bool][58]) -> [Either][59]<Self, Self> ⓘ

Converts `self` into a [`Left`][60] variant of [`Either<Self, Self>`][59] if `into_left` is `true`. Converts `self` into a [`Right`][61] variant of [`Either<Self, Self>`][59] otherwise. [Read more][57]

[Source][62]§

#### fn [into_either_with][63]<F>(self, into_left: F) -> [Either][59]<Self, Self> ⓘ

where F: [FnOnce][64](&Self) -> [bool][58],

Converts `self` into a [`Left`][60] variant of [`Either<Self, Self>`][59] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][61] variant of [`Either<Self, Self>`][59] otherwise. [Read more][63]

[Source][65]§

### impl<T> [Same][66] for T

[Source][67]§

#### type [Output][68] = T

Should always be `Self`

[Source][69]§

### impl<T> [ToOwned][70] for T

where T: [Clone][7],

[Source][71]§

#### type [Owned][72] = T

The resulting type after obtaining ownership.

[Source][73]§

#### fn [to_owned][74](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][74]

[Source][75]§

#### fn [clone_into][76](&self, target: [&mut T][34])

Uses borrowed data to replace owned data, usually by cloning. [Read more][76]

[Source][77]§

### impl<T, U> [TryFrom][78]<U> for T

where U: [Into][51]<T>,

[Source][79]§

#### type [Error][80] = [Infallible][81]

The type returned in the event of a conversion error.

[Source][82]§

#### fn [try_from][83](value: U) -> [Result][15]<T, <T as [TryFrom][78]<U>>::[Error][84]>

Performs the conversion.

[Source][85]§

### impl<T, U> [TryInto][86]<U> for T

where U: [TryFrom][78]<T>,

[Source][87]§

#### type [Error][88] = <U as [TryFrom][78]<T>>::[Error][84]

The type returned in the event of a conversion error.

[Source][89]§

#### fn [try_into][90](self) -> [Result][15]<U, <U as [TryFrom][78]<T>>::[Error][84]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][51]<Dispatch>,

Attaches the provided [`Subscriber`][91] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][92] [`Subscriber`][91] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/std/primitive.i64.html
   [5]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [6]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [7]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [8]: struct.AppliedMigration.html (struct sqlx::migrate::AppliedMigration)
   [9]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [10]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [11]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [12]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [13]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [14]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [15]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [16]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [17]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [18]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [19]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [20]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [21]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [22]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [23]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [24]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [25]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [26]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [27]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [28]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [29]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [30]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [31]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [32]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [33]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [34]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [35]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [36]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [37]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [38]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [39]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [40]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [41]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [42]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [43]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [44]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [45]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [47]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [48]: super::Span::current()
   [49]: crate::Span
   [50]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [51]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [53]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [54]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [55]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [56]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [57]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [58]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [59]: ../enum.Either.html (enum sqlx::Either)
   [60]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [61]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [62]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [63]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [64]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [65]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [66]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [67]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [68]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [69]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [70]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [71]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [72]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [73]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [74]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [75]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [76]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [77]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [78]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [79]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [80]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [81]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [82]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [83]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [84]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [85]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [86]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [87]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [88]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [89]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [90]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [91]: super::Subscriber
   [92]: dispatcher#setting-the-default-subscriber

