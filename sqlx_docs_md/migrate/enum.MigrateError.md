## MigrateError

## [sqlx][1]0.8.6

## MigrateError

### Variants

  * Dirty
  * Execute
  * ExecuteMigration
  * ForceNotSupported
  * InvalidMixReversibleAndSimple
  * Source
  * VersionMismatch
  * VersionMissing
  * VersionNotPresent
  * VersionTooNew
  * VersionTooOld



### Trait Implementations

  * Debug
  * Display
  * Error
  * From<Error>
  * From<MigrateError>



### Auto Trait Implementations

  * !RefUnwindSafe
  * !UnwindSafe
  * Freeze
  * Send
  * Sync
  * Unpin



### Blanket Implementations

  * Any
  * Borrow<T>
  * BorrowMut<T>
  * From<T>
  * Instrument
  * Into<U>
  * IntoEither
  * Same
  * ToString
  * TryFrom<U>
  * TryInto<U>
  * WithSubscriber



## [In sqlx::migrate][2]

[sqlx][3]::[migrate][2]

# Enum MigrateError Copy item path
[code]
    #[non_exhaustive]
    
    pub enum MigrateError {
        Execute([Error][4]),
        ExecuteMigration([Error][4], [i64][5]),
        Source([Box][6]<dyn [Error][7] + [Send][8] + [Sync][9]>),
        VersionMissing([i64][5]),
        VersionMismatch([i64][5]),
        VersionNotPresent([i64][5]),
        VersionTooOld([i64][5], [i64][5]),
        VersionTooNew([i64][5], [i64][5]),
        ForceNotSupported,
        InvalidMixReversibleAndSimple,
        Dirty([i64][5]),
    }
[/code]

## Variants (Non-exhaustive)§

This enum is marked as non-exhaustive

Non-exhaustive enums could have additional variants added in future. Therefore, when matching against variants of non-exhaustive enums, an extra wildcard arm must be added to account for any future variants.

§

### Execute([Error][4])

§

### ExecuteMigration([Error][4], [i64][5])

§

### Source([Box][6]<dyn [Error][7] \+ [Send][8] \+ [Sync][9]>)

§

### VersionMissing([i64][5])

§

### VersionMismatch([i64][5])

§

### VersionNotPresent([i64][5])

§

### VersionTooOld([i64][5], [i64][5])

§

### VersionTooNew([i64][5], [i64][5])

§

### ForceNotSupported

§

### InvalidMixReversibleAndSimple

👎Deprecated: migration types are now inferred

§

### Dirty([i64][5])

## Trait Implementations§

§

### impl [Debug][10] for [MigrateError][11]

§

#### fn [fmt][12](&self, f: &mut [Formatter][13]<'_>) -> [Result][14]<[()][15], [Error][16]>

Formats the value using the given formatter. [Read more][12]

§

### impl [Display][17] for [MigrateError][11]

§

#### fn [fmt][18](&self, __formatter: &mut [Formatter][13]<'_>) -> [Result][14]<[()][15], [Error][16]>

Formats the value using the given formatter. [Read more][18]

§

### impl [Error][7] for [MigrateError][11]

§

#### fn [source][19](&self) -> [Option][20]<&(dyn [Error][7] \+ 'static)>

Returns the lower-level source of this error, if any. [Read more][19]

1.0.0 · [Source][21]§

#### fn [description][22](&self) -> &[str][23]

👎Deprecated since 1.42.0: use the Display impl or to_string()

[Read more][22]

1.0.0 · [Source][24]§

#### fn [cause][25](&self) -> [Option][20]<&dyn [Error][7]>

👎Deprecated since 1.33.0: replaced by Error::source, which can support downcasting

[Source][26]§

#### fn [provide][27]<'a>(&'a self, request: &mut [Request][28]<'a>)

🔬This is a nightly-only experimental API. (`error_generic_member_access`)

Provides type-based access to context intended for error reports. [Read more][27]

§

### impl [From][29]<[Error][4]> for [MigrateError][11]

§

#### fn [from][30](source: [Error][4]) -> [MigrateError][11]

Converts to this type from the input type.

§

### impl [From][29]<[MigrateError][11]> for [Error][4]

Available on **crate feature`migrate`** only.

§

#### fn [from][30](error: [MigrateError][11]) -> [Error][4]

Converts to this type from the input type.

## Auto Trait Implementations§

§

### impl [Freeze][31] for [MigrateError][11]

§

### impl ![RefUnwindSafe][32] for [MigrateError][11]

§

### impl [Send][8] for [MigrateError][11]

§

### impl [Sync][9] for [MigrateError][11]

§

### impl [Unpin][33] for [MigrateError][11]

§

### impl ![UnwindSafe][34] for [MigrateError][11]

## Blanket Implementations§

[Source][35]§

### impl<T> [Any][36] for T

where T: 'static + ?[Sized][37],

[Source][38]§

#### fn [type_id][39](&self) -> [TypeId][40]

Gets the `TypeId` of `self`. [Read more][39]

[Source][41]§

### impl<T> [Borrow][42]<T> for T

where T: ?[Sized][37],

[Source][43]§

#### fn [borrow][44](&self) -> [&T][45]

Immutably borrows from an owned value. [Read more][44]

[Source][46]§

### impl<T> [BorrowMut][47]<T> for T

where T: ?[Sized][37],

[Source][48]§

#### fn [borrow_mut][49](&mut self) -> [&mut T][45]

Mutably borrows from an owned value. [Read more][49]

[Source][50]§

### impl<T> [From][29]<T> for T

[Source][51]§

#### fn [from][30](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][52] [`Span`][53], returning an `Instrumented` wrapper. Read more

[Source][54]§

### impl<T, U> [Into][55]<U> for T

where U: [From][29]<T>,

[Source][56]§

#### fn [into][57](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][29]<T> for U` chooses to do.

[Source][58]§

### impl<T> [IntoEither][59] for T

[Source][60]§

#### fn [into_either][61](self, into_left: [bool][62]) -> [Either][63]<Self, Self> ⓘ

Converts `self` into a [`Left`][64] variant of [`Either<Self, Self>`][63] if `into_left` is `true`. Converts `self` into a [`Right`][65] variant of [`Either<Self, Self>`][63] otherwise. [Read more][61]

[Source][66]§

#### fn [into_either_with][67]<F>(self, into_left: F) -> [Either][63]<Self, Self> ⓘ

where F: [FnOnce][68](&Self) -> [bool][62],

Converts `self` into a [`Left`][64] variant of [`Either<Self, Self>`][63] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][65] variant of [`Either<Self, Self>`][63] otherwise. [Read more][67]

[Source][69]§

### impl<T> [Same][70] for T

[Source][71]§

#### type [Output][72] = T

Should always be `Self`

[Source][73]§

### impl<T> [ToString][74] for T

where T: [Display][17] \+ ?[Sized][37],

[Source][75]§

#### fn [to_string][76](&self) -> [String][77]

Converts the given value to a `String`. [Read more][76]

[Source][78]§

### impl<T, U> [TryFrom][79]<U> for T

where U: [Into][55]<T>,

[Source][80]§

#### type [Error][81] = [Infallible][82]

The type returned in the event of a conversion error.

[Source][83]§

#### fn [try_from][84](value: U) -> [Result][14]<T, <T as [TryFrom][79]<U>>::[Error][85]>

Performs the conversion.

[Source][86]§

### impl<T, U> [TryInto][87]<U> for T

where U: [TryFrom][79]<T>,

[Source][88]§

#### type [Error][89] = <U as [TryFrom][79]<T>>::[Error][85]

The type returned in the event of a conversion error.

[Source][90]§

#### fn [try_into][91](self) -> [Result][14]<U, <U as [TryFrom][79]<T>>::[Error][85]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][55]<Dispatch>,

Attaches the provided [`Subscriber`][92] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][93] [`Subscriber`][92] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../enum.Error.html (enum sqlx::Error)
   [5]: https://doc.rust-lang.org/1.94.1/std/primitive.i64.html
   [6]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [7]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [8]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [9]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [10]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [11]: enum.MigrateError.html (enum sqlx::migrate::MigrateError)
   [12]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [13]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [14]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [15]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [16]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [17]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [18]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html#tymethod.fmt
   [19]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.source
   [20]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [21]: https://doc.rust-lang.org/1.94.1/src/core/error.rs.html#137
   [22]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.description
   [23]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [24]: https://doc.rust-lang.org/1.94.1/src/core/error.rs.html#147
   [25]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.cause
   [26]: https://doc.rust-lang.org/1.94.1/src/core/error.rs.html#260
   [27]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.provide
   [28]: https://doc.rust-lang.org/1.94.1/core/error/struct.Request.html (struct core::error::Request)
   [29]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [30]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [31]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [32]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [33]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [34]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [35]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [36]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [37]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [38]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [39]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [40]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [41]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [42]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [44]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [45]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [46]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [47]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [49]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [50]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [51]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [52]: super::Span::current()
   [53]: crate::Span
   [54]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [55]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [56]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [57]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [58]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [59]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [60]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [61]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [62]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [63]: ../enum.Either.html (enum sqlx::Either)
   [64]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [65]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [66]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [67]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [68]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [69]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [70]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [71]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [72]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [73]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2893
   [74]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html (trait alloc::string::ToString)
   [75]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2895
   [76]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html#tymethod.to_string
   [77]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [78]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [79]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [80]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [81]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [82]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [83]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [84]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [85]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [86]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [87]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [88]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [89]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [90]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [91]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [92]: super::Subscriber
   [93]: dispatcher#setting-the-default-subscriber

