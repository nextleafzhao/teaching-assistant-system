## SqliteArguments

## [sqlx][1]0.8.6

## SqliteArguments

### Trait Implementations

  * Arguments<'q>
  * Clone
  * Debug
  * Default
  * IntoArguments<'q, <SqliteArguments<'q> as Arguments<'q>>::Database>



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

# Struct SqliteArguments Copy item path
[code]
    pub struct SqliteArguments<'q> { /* private fields */ }
[/code]

## Trait Implementations§

§

### impl<'q> [Arguments][4]<'q> for [SqliteArguments][5]<'q>

§

#### type [Database][6] = [Sqlite][7]

§

#### fn [reserve][8](&mut self, len: [usize][9], _size_hint: [usize][9])

Reserves the capacity for at least `additional` more values (of `size` total bytes) to be added to the arguments without a reallocation.

§

#### fn [add][10]<T>(&mut self, value: T) -> [Result][11]<[()][12], [Box][13]<dyn [Error][14] \+ [Send][15] \+ [Sync][16]>>

where T: [Encode][17]<'q, <[SqliteArguments][5]<'q> as [Arguments][4]<'q>>::[Database][18]>,

Add the value to the end of the arguments.

§

#### fn [len][19](&self) -> [usize][9]

The number of arguments that were already added.

§

#### fn [format_placeholder][20]<W>(&self, writer: [&mut W][21]) -> [Result][11]<[()][12], [Error][22]>

where W: [Write][23],

§

### impl<'q> [Clone][24] for [SqliteArguments][5]<'q>

§

#### fn [clone][25](&self) -> [SqliteArguments][5]<'q>

Returns a duplicate of the value. [Read more][25]

1.0.0 · [Source][26]§

#### fn [clone_from][27](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][27]

§

### impl<'q> [Debug][28] for [SqliteArguments][5]<'q>

§

#### fn [fmt][29](&self, f: &mut [Formatter][30]<'_>) -> [Result][11]<[()][12], [Error][22]>

Formats the value using the given formatter. [Read more][29]

§

### impl<'q> [Default][31] for [SqliteArguments][5]<'q>

§

#### fn [default][32]() -> [SqliteArguments][5]<'q>

Returns the “default value” for a type. [Read more][32]

§

### impl<'q> [IntoArguments][33]<'q, <[SqliteArguments][5]<'q> as [Arguments][4]<'q>>::[Database][18]> for [SqliteArguments][5]<'q>

§

#### fn [into_arguments][34](self) -> [SqliteArguments][5]<'q>

## Auto Trait Implementations§

§

### impl<'q> [Freeze][35] for [SqliteArguments][5]<'q>

§

### impl<'q> [RefUnwindSafe][36] for [SqliteArguments][5]<'q>

§

### impl<'q> [Send][15] for [SqliteArguments][5]<'q>

§

### impl<'q> [Sync][16] for [SqliteArguments][5]<'q>

§

### impl<'q> [Unpin][37] for [SqliteArguments][5]<'q>

§

### impl<'q> [UnwindSafe][38] for [SqliteArguments][5]<'q>

## Blanket Implementations§

[Source][39]§

### impl<T> [Any][40] for T

where T: 'static + ?[Sized][41],

[Source][42]§

#### fn [type_id][43](&self) -> [TypeId][44]

Gets the `TypeId` of `self`. [Read more][43]

[Source][45]§

### impl<T> [Borrow][46]<T> for T

where T: ?[Sized][41],

[Source][47]§

#### fn [borrow][48](&self) -> [&T][21]

Immutably borrows from an owned value. [Read more][48]

[Source][49]§

### impl<T> [BorrowMut][50]<T> for T

where T: ?[Sized][41],

[Source][51]§

#### fn [borrow_mut][52](&mut self) -> [&mut T][21]

Mutably borrows from an owned value. [Read more][52]

[Source][53]§

### impl<T> [CloneToUninit][54] for T

where T: [Clone][24],

[Source][55]§

#### unsafe fn [clone_to_uninit][56](&self, dest: [*mut ][57][u8][58])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][56]

[Source][59]§

### impl<T> [From][60]<T> for T

[Source][61]§

#### fn [from][62](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][63] [`Span`][64], returning an `Instrumented` wrapper. Read more

[Source][65]§

### impl<T, U> [Into][66]<U> for T

where U: [From][60]<T>,

[Source][67]§

#### fn [into][68](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][60]<T> for U` chooses to do.

[Source][69]§

### impl<T> [IntoEither][70] for T

[Source][71]§

#### fn [into_either][72](self, into_left: [bool][73]) -> [Either][74]<Self, Self> ⓘ

Converts `self` into a [`Left`][75] variant of [`Either<Self, Self>`][74] if `into_left` is `true`. Converts `self` into a [`Right`][76] variant of [`Either<Self, Self>`][74] otherwise. [Read more][72]

[Source][77]§

#### fn [into_either_with][78]<F>(self, into_left: F) -> [Either][74]<Self, Self> ⓘ

where F: [FnOnce][79](&Self) -> [bool][73],

Converts `self` into a [`Left`][75] variant of [`Either<Self, Self>`][74] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][76] variant of [`Either<Self, Self>`][74] otherwise. [Read more][78]

[Source][80]§

### impl<T> [Same][81] for T

[Source][82]§

#### type [Output][83] = T

Should always be `Self`

[Source][84]§

### impl<T> [ToOwned][85] for T

where T: [Clone][24],

[Source][86]§

#### type [Owned][87] = T

The resulting type after obtaining ownership.

[Source][88]§

#### fn [to_owned][89](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][89]

[Source][90]§

#### fn [clone_into][91](&self, target: [&mut T][21])

Uses borrowed data to replace owned data, usually by cloning. [Read more][91]

[Source][92]§

### impl<T, U> [TryFrom][93]<U> for T

where U: [Into][66]<T>,

[Source][94]§

#### type [Error][95] = [Infallible][96]

The type returned in the event of a conversion error.

[Source][97]§

#### fn [try_from][98](value: U) -> [Result][11]<T, <T as [TryFrom][93]<U>>::[Error][99]>

Performs the conversion.

[Source][100]§

### impl<T, U> [TryInto][101]<U> for T

where U: [TryFrom][93]<T>,

[Source][102]§

#### type [Error][103] = <U as [TryFrom][93]<T>>::[Error][99]

The type returned in the event of a conversion error.

[Source][104]§

#### fn [try_into][105](self) -> [Result][11]<U, <U as [TryFrom][93]<T>>::[Error][99]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][66]<Dispatch>,

Attaches the provided [`Subscriber`][106] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][107] [`Subscriber`][106] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../trait.Arguments.html (trait sqlx::Arguments)
   [5]: struct.SqliteArguments.html (struct sqlx::sqlite::SqliteArguments)
   [6]: ../trait.Arguments.html#associatedtype.Database
   [7]: ../struct.Sqlite.html (struct sqlx::Sqlite)
   [8]: ../trait.Arguments.html#tymethod.reserve
   [9]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [10]: ../trait.Arguments.html#tymethod.add
   [11]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [12]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [13]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [14]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [15]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [16]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [17]: ../trait.Encode.html (trait sqlx::Encode)
   [18]: ../trait.Arguments.html#associatedtype.Database (type sqlx::Arguments::Database)
   [19]: ../trait.Arguments.html#tymethod.len
   [20]: ../trait.Arguments.html#method.format_placeholder
   [21]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [22]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [23]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Write.html (trait core::fmt::Write)
   [24]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [25]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [26]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [27]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [28]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [29]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [30]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [31]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [32]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [33]: ../trait.IntoArguments.html (trait sqlx::IntoArguments)
   [34]: ../trait.IntoArguments.html#tymethod.into_arguments
   [35]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [36]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [37]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [38]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [39]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [40]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [41]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [42]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [43]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [44]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [45]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [46]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [47]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [48]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [49]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [50]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [51]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [52]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [53]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [54]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [56]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [57]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [58]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [59]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [60]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [61]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [62]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [63]: super::Span::current()
   [64]: crate::Span
   [65]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [67]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [69]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [70]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [71]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [72]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [73]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [74]: ../enum.Either.html (enum sqlx::Either)
   [75]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [76]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [77]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [78]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [79]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [80]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [81]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [82]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [83]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [84]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [85]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [86]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [87]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [88]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [89]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [90]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [91]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [92]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [93]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [94]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [95]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [96]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [97]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [98]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [99]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [100]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [101]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [102]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [103]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [104]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [105]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [106]: super::Subscriber
   [107]: dispatcher#setting-the-default-subscriber

