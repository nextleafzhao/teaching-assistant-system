## MigrationType

## [sqlx][1]0.8.6

## MigrationType

### Variants

  * ReversibleDown
  * ReversibleUp
  * Simple



### Methods

  * file_content
  * from_filename
  * infer
  * is_down_migration
  * is_reversible
  * is_up_migration
  * label
  * suffix



### Trait Implementations

  * Clone
  * Copy
  * Debug
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

# Enum MigrationType Copy item path
[code]
    pub enum MigrationType {
        Simple,
        ReversibleUp,
        ReversibleDown,
    }
[/code]

Expand description

Migration Type represents the type of migration

## Variants§

§

### Simple

Simple migration are single file migrations with no up / down queries

§

### ReversibleUp

ReversibleUp migrations represents the add or update part of a reversible migrations It is expected the every migration of this type will have a corresponding down file

§

### ReversibleDown

ReversibleDown migrations represents the delete or downgrade part of a reversible migrations It is expected the every migration of this type will have a corresponding up file

## Implementations§

§

### impl [MigrationType][4]

#### pub fn from_filename(filename: &[str][5]) -> [MigrationType][4]

#### pub fn is_reversible(&self) -> [bool][6]

#### pub fn is_up_migration(&self) -> [bool][6]

#### pub fn is_down_migration(&self) -> [bool][6]

#### pub fn label(&self) -> &'static [str][5]

#### pub fn suffix(&self) -> &'static [str][5]

#### pub fn file_content(&self) -> &'static [str][5]

#### pub fn infer(migrator: &[Migrator][7], reversible: [bool][6]) -> [MigrationType][4]

## Trait Implementations§

§

### impl [Clone][8] for [MigrationType][4]

§

#### fn [clone][9](&self) -> [MigrationType][4]

Returns a duplicate of the value. [Read more][9]

1.0.0 · [Source][10]§

#### fn [clone_from][11](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][11]

§

### impl [Debug][12] for [MigrationType][4]

§

#### fn [fmt][13](&self, f: &mut [Formatter][14]<'_>) -> [Result][15]<[()][16], [Error][17]>

Formats the value using the given formatter. [Read more][13]

§

### impl [PartialEq][18] for [MigrationType][4]

§

#### fn [eq][19](&self, other: &[MigrationType][4]) -> [bool][6]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][20]§

#### fn [ne][21](&self, other: [&Rhs][22]) -> [bool][6]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl [Copy][23] for [MigrationType][4]

§

### impl [StructuralPartialEq][24] for [MigrationType][4]

## Auto Trait Implementations§

§

### impl [Freeze][25] for [MigrationType][4]

§

### impl [RefUnwindSafe][26] for [MigrationType][4]

§

### impl [Send][27] for [MigrationType][4]

§

### impl [Sync][28] for [MigrationType][4]

§

### impl [Unpin][29] for [MigrationType][4]

§

### impl [UnwindSafe][30] for [MigrationType][4]

## Blanket Implementations§

[Source][31]§

### impl<T> [Any][32] for T

where T: 'static + ?[Sized][33],

[Source][34]§

#### fn [type_id][35](&self) -> [TypeId][36]

Gets the `TypeId` of `self`. [Read more][35]

[Source][37]§

### impl<T> [Borrow][38]<T> for T

where T: ?[Sized][33],

[Source][39]§

#### fn [borrow][40](&self) -> [&T][22]

Immutably borrows from an owned value. [Read more][40]

[Source][41]§

### impl<T> [BorrowMut][42]<T> for T

where T: ?[Sized][33],

[Source][43]§

#### fn [borrow_mut][44](&mut self) -> [&mut T][22]

Mutably borrows from an owned value. [Read more][44]

[Source][45]§

### impl<T> [CloneToUninit][46] for T

where T: [Clone][8],

[Source][47]§

#### unsafe fn [clone_to_uninit][48](&self, dest: [*mut ][49][u8][50])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][48]

[Source][51]§

### impl<T> [From][52]<T> for T

[Source][53]§

#### fn [from][54](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][55] [`Span`][56], returning an `Instrumented` wrapper. Read more

[Source][57]§

### impl<T, U> [Into][58]<U> for T

where U: [From][52]<T>,

[Source][59]§

#### fn [into][60](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][52]<T> for U` chooses to do.

[Source][61]§

### impl<T> [IntoEither][62] for T

[Source][63]§

#### fn [into_either][64](self, into_left: [bool][6]) -> [Either][65]<Self, Self> ⓘ

Converts `self` into a [`Left`][66] variant of [`Either<Self, Self>`][65] if `into_left` is `true`. Converts `self` into a [`Right`][67] variant of [`Either<Self, Self>`][65] otherwise. [Read more][64]

[Source][68]§

#### fn [into_either_with][69]<F>(self, into_left: F) -> [Either][65]<Self, Self> ⓘ

where F: [FnOnce][70](&Self) -> [bool][6],

Converts `self` into a [`Left`][66] variant of [`Either<Self, Self>`][65] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][67] variant of [`Either<Self, Self>`][65] otherwise. [Read more][69]

[Source][71]§

### impl<T> [Same][72] for T

[Source][73]§

#### type [Output][74] = T

Should always be `Self`

[Source][75]§

### impl<T> [ToOwned][76] for T

where T: [Clone][8],

[Source][77]§

#### type [Owned][78] = T

The resulting type after obtaining ownership.

[Source][79]§

#### fn [to_owned][80](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][80]

[Source][81]§

#### fn [clone_into][82](&self, target: [&mut T][22])

Uses borrowed data to replace owned data, usually by cloning. [Read more][82]

[Source][83]§

### impl<T, U> [TryFrom][84]<U> for T

where U: [Into][58]<T>,

[Source][85]§

#### type [Error][86] = [Infallible][87]

The type returned in the event of a conversion error.

[Source][88]§

#### fn [try_from][89](value: U) -> [Result][15]<T, <T as [TryFrom][84]<U>>::[Error][90]>

Performs the conversion.

[Source][91]§

### impl<T, U> [TryInto][92]<U> for T

where U: [TryFrom][84]<T>,

[Source][93]§

#### type [Error][94] = <U as [TryFrom][84]<T>>::[Error][90]

The type returned in the event of a conversion error.

[Source][95]§

#### fn [try_into][96](self) -> [Result][15]<U, <U as [TryFrom][84]<T>>::[Error][90]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][58]<Dispatch>,

Attaches the provided [`Subscriber`][97] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][98] [`Subscriber`][97] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: enum.MigrationType.html (enum sqlx::migrate::MigrationType)
   [5]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [6]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [7]: struct.Migrator.html (struct sqlx::migrate::Migrator)
   [8]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [9]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [10]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [11]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [12]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [13]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [14]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [15]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [16]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [17]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [18]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [19]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [20]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [21]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [22]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [23]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [24]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [25]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [26]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [27]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [28]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [29]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [30]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [31]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [32]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [33]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [34]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [35]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [36]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [37]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [38]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [39]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [40]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [41]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [42]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [44]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [45]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [46]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [47]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [48]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [49]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [50]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [51]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [52]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [54]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [55]: super::Span::current()
   [56]: crate::Span
   [57]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [58]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [59]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [60]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [61]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [62]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [63]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [64]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [65]: ../enum.Either.html (enum sqlx::Either)
   [66]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [67]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [68]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [69]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [70]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [71]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [72]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [73]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [74]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [75]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [76]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [77]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [78]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [79]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [80]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [81]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [82]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [83]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [84]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [85]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [86]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [87]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [88]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [89]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [90]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [91]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [92]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [93]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [94]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [95]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [96]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [97]: super::Subscriber
   [98]: dispatcher#setting-the-default-subscriber

