## SqliteOperation

## [sqlx][1]0.8.6

## SqliteOperation

### Variants

  * Delete
  * Insert
  * Unknown
  * Update



### Trait Implementations

  * Clone
  * Debug
  * Eq
  * From<i32>
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

# Enum SqliteOperation Copy item path
[code]
    pub enum SqliteOperation {
        Insert,
        Update,
        Delete,
        Unknown([i32][4]),
    }
[/code]

## Variants§

§

### Insert

§

### Update

§

### Delete

§

### Unknown([i32][4])

## Trait Implementations§

§

### impl [Clone][5] for [SqliteOperation][6]

§

#### fn [clone][7](&self) -> [SqliteOperation][6]

Returns a duplicate of the value. [Read more][7]

1.0.0 · [Source][8]§

#### fn [clone_from][9](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][9]

§

### impl [Debug][10] for [SqliteOperation][6]

§

#### fn [fmt][11](&self, f: &mut [Formatter][12]<'_>) -> [Result][13]<[()][14], [Error][15]>

Formats the value using the given formatter. [Read more][11]

§

### impl [From][16]<[i32][4]> for [SqliteOperation][6]

§

#### fn [from][17](value: [i32][4]) -> [SqliteOperation][6]

Converts to this type from the input type.

§

### impl [PartialEq][18] for [SqliteOperation][6]

§

#### fn [eq][19](&self, other: &[SqliteOperation][6]) -> [bool][20]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][21]§

#### fn [ne][22](&self, other: [&Rhs][23]) -> [bool][20]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl [Eq][24] for [SqliteOperation][6]

§

### impl [StructuralPartialEq][25] for [SqliteOperation][6]

## Auto Trait Implementations§

§

### impl [Freeze][26] for [SqliteOperation][6]

§

### impl [RefUnwindSafe][27] for [SqliteOperation][6]

§

### impl [Send][28] for [SqliteOperation][6]

§

### impl [Sync][29] for [SqliteOperation][6]

§

### impl [Unpin][30] for [SqliteOperation][6]

§

### impl [UnwindSafe][31] for [SqliteOperation][6]

## Blanket Implementations§

[Source][32]§

### impl<T> [Any][33] for T

where T: 'static + ?[Sized][34],

[Source][35]§

#### fn [type_id][36](&self) -> [TypeId][37]

Gets the `TypeId` of `self`. [Read more][36]

[Source][38]§

### impl<T> [Borrow][39]<T> for T

where T: ?[Sized][34],

[Source][40]§

#### fn [borrow][41](&self) -> [&T][23]

Immutably borrows from an owned value. [Read more][41]

[Source][42]§

### impl<T> [BorrowMut][43]<T> for T

where T: ?[Sized][34],

[Source][44]§

#### fn [borrow_mut][45](&mut self) -> [&mut T][23]

Mutably borrows from an owned value. [Read more][45]

[Source][46]§

### impl<T> [CloneToUninit][47] for T

where T: [Clone][5],

[Source][48]§

#### unsafe fn [clone_to_uninit][49](&self, dest: [*mut ][50][u8][51])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][49]

§

### impl<Q, K> Equivalent<K> for Q

where Q: [Eq][24] \+ ?[Sized][34], K: [Borrow][39]<Q> \+ ?[Sized][34],

§

#### fn equivalent(&self, key: [&K][23]) -> [bool][20]

Compare self to `key` and return `true` if they are equal.

§

### impl<Q, K> Equivalent<K> for Q

where Q: [Eq][24] \+ ?[Sized][34], K: [Borrow][39]<Q> \+ ?[Sized][34],

§

#### fn equivalent(&self, key: [&K][23]) -> [bool][20]

Checks if this value is equivalent to the given key. Read more

[Source][52]§

### impl<T> [From][16]<T> for T

[Source][53]§

#### fn [from][17](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][54] [`Span`][55], returning an `Instrumented` wrapper. Read more

[Source][56]§

### impl<T, U> [Into][57]<U> for T

where U: [From][16]<T>,

[Source][58]§

#### fn [into][59](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][16]<T> for U` chooses to do.

[Source][60]§

### impl<T> [IntoEither][61] for T

[Source][62]§

#### fn [into_either][63](self, into_left: [bool][20]) -> [Either][64]<Self, Self> ⓘ

Converts `self` into a [`Left`][65] variant of [`Either<Self, Self>`][64] if `into_left` is `true`. Converts `self` into a [`Right`][66] variant of [`Either<Self, Self>`][64] otherwise. [Read more][63]

[Source][67]§

#### fn [into_either_with][68]<F>(self, into_left: F) -> [Either][64]<Self, Self> ⓘ

where F: [FnOnce][69](&Self) -> [bool][20],

Converts `self` into a [`Left`][65] variant of [`Either<Self, Self>`][64] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][66] variant of [`Either<Self, Self>`][64] otherwise. [Read more][68]

[Source][70]§

### impl<T> [Same][71] for T

[Source][72]§

#### type [Output][73] = T

Should always be `Self`

[Source][74]§

### impl<T> [ToOwned][75] for T

where T: [Clone][5],

[Source][76]§

#### type [Owned][77] = T

The resulting type after obtaining ownership.

[Source][78]§

#### fn [to_owned][79](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][79]

[Source][80]§

#### fn [clone_into][81](&self, target: [&mut T][23])

Uses borrowed data to replace owned data, usually by cloning. [Read more][81]

[Source][82]§

### impl<T, U> [TryFrom][83]<U> for T

where U: [Into][57]<T>,

[Source][84]§

#### type [Error][85] = [Infallible][86]

The type returned in the event of a conversion error.

[Source][87]§

#### fn [try_from][88](value: U) -> [Result][13]<T, <T as [TryFrom][83]<U>>::[Error][89]>

Performs the conversion.

[Source][90]§

### impl<T, U> [TryInto][91]<U> for T

where U: [TryFrom][83]<T>,

[Source][92]§

#### type [Error][93] = <U as [TryFrom][83]<T>>::[Error][89]

The type returned in the event of a conversion error.

[Source][94]§

#### fn [try_into][95](self) -> [Result][13]<U, <U as [TryFrom][83]<T>>::[Error][89]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][57]<Dispatch>,

Attaches the provided [`Subscriber`][96] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][97] [`Subscriber`][96] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/std/primitive.i32.html
   [5]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [6]: enum.SqliteOperation.html (enum sqlx::sqlite::SqliteOperation)
   [7]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [8]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [9]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [10]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [11]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [12]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [13]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [14]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [15]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [16]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [17]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [18]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [19]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [20]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [21]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [22]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [23]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [24]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [25]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [26]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [27]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [28]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [29]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [30]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [31]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [32]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [33]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [34]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [35]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [36]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [37]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [38]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [39]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [40]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [41]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [42]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [43]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [44]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [45]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [46]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [47]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [49]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [50]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [51]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [52]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [53]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [54]: super::Span::current()
   [55]: crate::Span
   [56]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [57]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [59]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [60]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [61]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [62]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [63]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [64]: ../enum.Either.html (enum sqlx::Either)
   [65]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [66]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [67]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [68]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [69]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [70]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [71]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [72]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [73]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [74]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [75]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [76]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [77]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [78]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [79]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [80]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [81]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [82]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [83]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [84]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [85]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [86]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [87]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [88]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [89]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [90]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [91]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [92]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [93]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [94]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [95]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [96]: super::Subscriber
   [97]: dispatcher#setting-the-default-subscriber

