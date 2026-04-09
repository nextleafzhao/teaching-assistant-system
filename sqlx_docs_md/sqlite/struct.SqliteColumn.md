## SqliteColumn

## [sqlx][1]0.8.6

## SqliteColumn

### Trait Implementations

  * Clone
  * Column
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



## [In sqlx::sqlite][2]

[sqlx][3]::[sqlite][2]

# Struct SqliteColumn Copy item path
[code]
    pub struct SqliteColumn { /* private fields */ }
[/code]

## Trait Implementations§

§

### impl [Clone][4] for [SqliteColumn][5]

§

#### fn [clone][6](&self) -> [SqliteColumn][5]

Returns a duplicate of the value. [Read more][6]

1.0.0 · [Source][7]§

#### fn [clone_from][8](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][8]

§

### impl [Column][9] for [SqliteColumn][5]

§

#### type [Database][10] = [Sqlite][11]

§

#### fn [ordinal][12](&self) -> [usize][13]

Gets the column ordinal. [Read more][12]

§

#### fn [name][14](&self) -> &[str][15]

Gets the column name or alias. [Read more][14]

§

#### fn [type_info][16](&self) -> &[SqliteTypeInfo][17]

Gets the type information for the column.

§

### impl [Debug][18] for [SqliteColumn][5]

§

#### fn [fmt][19](&self, f: &mut [Formatter][20]<'_>) -> [Result][21]<[()][22], [Error][23]>

Formats the value using the given formatter. [Read more][19]

## Auto Trait Implementations§

§

### impl [Freeze][24] for [SqliteColumn][5]

§

### impl [RefUnwindSafe][25] for [SqliteColumn][5]

§

### impl [Send][26] for [SqliteColumn][5]

§

### impl [Sync][27] for [SqliteColumn][5]

§

### impl [Unpin][28] for [SqliteColumn][5]

§

### impl [UnwindSafe][29] for [SqliteColumn][5]

## Blanket Implementations§

[Source][30]§

### impl<T> [Any][31] for T

where T: 'static + ?[Sized][32],

[Source][33]§

#### fn [type_id][34](&self) -> [TypeId][35]

Gets the `TypeId` of `self`. [Read more][34]

[Source][36]§

### impl<T> [Borrow][37]<T> for T

where T: ?[Sized][32],

[Source][38]§

#### fn [borrow][39](&self) -> [&T][40]

Immutably borrows from an owned value. [Read more][39]

[Source][41]§

### impl<T> [BorrowMut][42]<T> for T

where T: ?[Sized][32],

[Source][43]§

#### fn [borrow_mut][44](&mut self) -> [&mut T][40]

Mutably borrows from an owned value. [Read more][44]

[Source][45]§

### impl<T> [CloneToUninit][46] for T

where T: [Clone][4],

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

#### fn [into_either][64](self, into_left: [bool][65]) -> [Either][66]<Self, Self> ⓘ

Converts `self` into a [`Left`][67] variant of [`Either<Self, Self>`][66] if `into_left` is `true`. Converts `self` into a [`Right`][68] variant of [`Either<Self, Self>`][66] otherwise. [Read more][64]

[Source][69]§

#### fn [into_either_with][70]<F>(self, into_left: F) -> [Either][66]<Self, Self> ⓘ

where F: [FnOnce][71](&Self) -> [bool][65],

Converts `self` into a [`Left`][67] variant of [`Either<Self, Self>`][66] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][68] variant of [`Either<Self, Self>`][66] otherwise. [Read more][70]

[Source][72]§

### impl<T> [Same][73] for T

[Source][74]§

#### type [Output][75] = T

Should always be `Self`

[Source][76]§

### impl<T> [ToOwned][77] for T

where T: [Clone][4],

[Source][78]§

#### type [Owned][79] = T

The resulting type after obtaining ownership.

[Source][80]§

#### fn [to_owned][81](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][81]

[Source][82]§

#### fn [clone_into][83](&self, target: [&mut T][40])

Uses borrowed data to replace owned data, usually by cloning. [Read more][83]

[Source][84]§

### impl<T, U> [TryFrom][85]<U> for T

where U: [Into][58]<T>,

[Source][86]§

#### type [Error][87] = [Infallible][88]

The type returned in the event of a conversion error.

[Source][89]§

#### fn [try_from][90](value: U) -> [Result][21]<T, <T as [TryFrom][85]<U>>::[Error][91]>

Performs the conversion.

[Source][92]§

### impl<T, U> [TryInto][93]<U> for T

where U: [TryFrom][85]<T>,

[Source][94]§

#### type [Error][95] = <U as [TryFrom][85]<T>>::[Error][91]

The type returned in the event of a conversion error.

[Source][96]§

#### fn [try_into][97](self) -> [Result][21]<U, <U as [TryFrom][85]<T>>::[Error][91]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][58]<Dispatch>,

Attaches the provided [`Subscriber`][98] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][99] [`Subscriber`][98] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [5]: struct.SqliteColumn.html (struct sqlx::sqlite::SqliteColumn)
   [6]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [7]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [8]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [9]: ../trait.Column.html (trait sqlx::Column)
   [10]: ../trait.Column.html#associatedtype.Database
   [11]: ../struct.Sqlite.html (struct sqlx::Sqlite)
   [12]: ../trait.Column.html#tymethod.ordinal
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [14]: ../trait.Column.html#tymethod.name
   [15]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [16]: ../trait.Column.html#tymethod.type_info
   [17]: struct.SqliteTypeInfo.html (struct sqlx::sqlite::SqliteTypeInfo)
   [18]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [19]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [20]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [21]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [22]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [23]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [24]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [25]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [26]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [27]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [28]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [29]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [30]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [31]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [32]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [33]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [34]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [35]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [36]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [37]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [38]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [39]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [40]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
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
   [65]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [66]: ../enum.Either.html (enum sqlx::Either)
   [67]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [68]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [69]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [70]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [71]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [72]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [73]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [74]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [75]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [76]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [77]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [78]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [79]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [80]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [81]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [82]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [83]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [84]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [85]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [86]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [87]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [88]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [89]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [90]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [91]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [92]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [93]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [94]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [95]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [96]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [97]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [98]: super::Subscriber
   [99]: dispatcher#setting-the-default-subscriber

