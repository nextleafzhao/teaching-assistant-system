## Migration

## [sqlx][1]0.8.6

## Migration

### Fields

  * checksum
  * description
  * migration_type
  * no_tx
  * sql
  * version



### Methods

  * new



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

# Struct Migration Copy item path
[code]
    pub struct Migration {
        pub version: [i64][4],
        pub description: [Cow][5]<'static, [str][6]>,
        pub migration_type: [MigrationType][7],
        pub sql: [Cow][5]<'static, [str][6]>,
        pub checksum: [Cow][5]<'static, [[u8][8]]>,
        pub no_tx: [bool][9],
    }
[/code]

## Fields§

§`version: [i64][4]`§`description: [Cow][5]<'static, [str][6]>`§`migration_type: [MigrationType][7]`§`sql: [Cow][5]<'static, [str][6]>`§`checksum: [Cow][5]<'static, [[u8][8]]>`§`no_tx: [bool][9]`

## Implementations§

§

### impl [Migration][10]

#### pub fn new( version: [i64][4], description: [Cow][5]<'static, [str][6]>, migration_type: [MigrationType][7], sql: [Cow][5]<'static, [str][6]>, no_tx: [bool][9], ) -> [Migration][10]

## Trait Implementations§

§

### impl [Clone][11] for [Migration][10]

§

#### fn [clone][12](&self) -> [Migration][10]

Returns a duplicate of the value. [Read more][12]

1.0.0 · [Source][13]§

#### fn [clone_from][14](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][14]

§

### impl [Debug][15] for [Migration][10]

§

#### fn [fmt][16](&self, f: &mut [Formatter][17]<'_>) -> [Result][18]<[()][19], [Error][20]>

Formats the value using the given formatter. [Read more][16]

## Auto Trait Implementations§

§

### impl [Freeze][21] for [Migration][10]

§

### impl [RefUnwindSafe][22] for [Migration][10]

§

### impl [Send][23] for [Migration][10]

§

### impl [Sync][24] for [Migration][10]

§

### impl [Unpin][25] for [Migration][10]

§

### impl [UnwindSafe][26] for [Migration][10]

## Blanket Implementations§

[Source][27]§

### impl<T> [Any][28] for T

where T: 'static + ?[Sized][29],

[Source][30]§

#### fn [type_id][31](&self) -> [TypeId][32]

Gets the `TypeId` of `self`. [Read more][31]

[Source][33]§

### impl<T> [Borrow][34]<T> for T

where T: ?[Sized][29],

[Source][35]§

#### fn [borrow][36](&self) -> [&T][37]

Immutably borrows from an owned value. [Read more][36]

[Source][38]§

### impl<T> [BorrowMut][39]<T> for T

where T: ?[Sized][29],

[Source][40]§

#### fn [borrow_mut][41](&mut self) -> [&mut T][37]

Mutably borrows from an owned value. [Read more][41]

[Source][42]§

### impl<T> [CloneToUninit][43] for T

where T: [Clone][11],

[Source][44]§

#### unsafe fn [clone_to_uninit][45](&self, dest: [*mut ][46][u8][8])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][45]

[Source][47]§

### impl<T> [From][48]<T> for T

[Source][49]§

#### fn [from][50](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][51] [`Span`][52], returning an `Instrumented` wrapper. Read more

[Source][53]§

### impl<T, U> [Into][54]<U> for T

where U: [From][48]<T>,

[Source][55]§

#### fn [into][56](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][48]<T> for U` chooses to do.

[Source][57]§

### impl<T> [IntoEither][58] for T

[Source][59]§

#### fn [into_either][60](self, into_left: [bool][9]) -> [Either][61]<Self, Self> ⓘ

Converts `self` into a [`Left`][62] variant of [`Either<Self, Self>`][61] if `into_left` is `true`. Converts `self` into a [`Right`][63] variant of [`Either<Self, Self>`][61] otherwise. [Read more][60]

[Source][64]§

#### fn [into_either_with][65]<F>(self, into_left: F) -> [Either][61]<Self, Self> ⓘ

where F: [FnOnce][66](&Self) -> [bool][9],

Converts `self` into a [`Left`][62] variant of [`Either<Self, Self>`][61] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][63] variant of [`Either<Self, Self>`][61] otherwise. [Read more][65]

[Source][67]§

### impl<T> [Same][68] for T

[Source][69]§

#### type [Output][70] = T

Should always be `Self`

[Source][71]§

### impl<T> [ToOwned][72] for T

where T: [Clone][11],

[Source][73]§

#### type [Owned][74] = T

The resulting type after obtaining ownership.

[Source][75]§

#### fn [to_owned][76](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][76]

[Source][77]§

#### fn [clone_into][78](&self, target: [&mut T][37])

Uses borrowed data to replace owned data, usually by cloning. [Read more][78]

[Source][79]§

### impl<T, U> [TryFrom][80]<U> for T

where U: [Into][54]<T>,

[Source][81]§

#### type [Error][82] = [Infallible][83]

The type returned in the event of a conversion error.

[Source][84]§

#### fn [try_from][85](value: U) -> [Result][18]<T, <T as [TryFrom][80]<U>>::[Error][86]>

Performs the conversion.

[Source][87]§

### impl<T, U> [TryInto][88]<U> for T

where U: [TryFrom][80]<T>,

[Source][89]§

#### type [Error][90] = <U as [TryFrom][80]<T>>::[Error][86]

The type returned in the event of a conversion error.

[Source][91]§

#### fn [try_into][92](self) -> [Result][18]<U, <U as [TryFrom][80]<T>>::[Error][86]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][54]<Dispatch>,

Attaches the provided [`Subscriber`][93] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][94] [`Subscriber`][93] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/std/primitive.i64.html
   [5]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [6]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [7]: enum.MigrationType.html (enum sqlx::migrate::MigrationType)
   [8]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [9]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [10]: struct.Migration.html (struct sqlx::migrate::Migration)
   [11]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [12]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [13]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [14]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [15]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [16]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [17]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [18]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [19]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [20]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [21]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [22]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [23]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [24]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [25]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [26]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [27]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [28]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [29]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [30]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [31]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [32]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [33]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [34]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [35]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [36]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [37]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [38]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [39]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [40]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [41]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [42]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [43]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [44]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [45]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [46]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [47]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [48]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [49]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [50]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [51]: super::Span::current()
   [52]: crate::Span
   [53]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [54]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [56]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [57]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [58]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [59]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [60]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [61]: ../enum.Either.html (enum sqlx::Either)
   [62]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [63]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [64]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [65]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [66]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [67]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [68]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [69]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [70]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [71]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [72]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [73]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [74]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [75]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [76]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [77]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [78]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [79]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [80]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [81]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [82]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [83]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [84]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [85]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [86]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [87]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [88]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [89]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [90]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [91]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [92]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [93]: super::Subscriber
   [94]: dispatcher#setting-the-default-subscriber

