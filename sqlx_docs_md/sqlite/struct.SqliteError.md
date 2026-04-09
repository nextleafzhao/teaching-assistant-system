## SqliteError

## [sqlx][1]0.8.6

## SqliteError

### Trait Implementations

  * DatabaseError
  * Debug
  * Display
  * Error



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
  * From<T>
  * Instrument
  * Into<U>
  * IntoEither
  * Same
  * ToString
  * TryFrom<U>
  * TryInto<U>
  * WithSubscriber



## [In sqlx::sqlite][2]

[sqlx][3]::[sqlite][2]

# Struct SqliteError Copy item path
[code]
    pub struct SqliteError { /* private fields */ }
[/code]

## Trait Implementations§

§

### impl [DatabaseError][4] for [SqliteError][5]

§

#### fn [code][6](&self) -> [Option][7]<[Cow][8]<'_, [str][9]>>

The extended result code.

§

#### fn [message][10](&self) -> &[str][9]

The primary, human-readable error message.

§

#### fn [kind][11](&self) -> [ErrorKind][12]

Returns the kind of the error, if supported. [Read more][11]

§

#### fn [constraint][13](&self) -> [Option][7]<&[str][9]>

Returns the name of the constraint that triggered the error, if applicable. If the error was caused by a conflict of a unique index, this will be the index name. [Read more][13]

§

#### fn [table][14](&self) -> [Option][7]<&[str][9]>

Returns the name of the table that was affected by the error, if applicable. [Read more][14]

§

#### fn [is_unique_violation][15](&self) -> [bool][16]

Returns whether the error kind is a violation of a unique/primary key constraint.

§

#### fn [is_foreign_key_violation][17](&self) -> [bool][16]

Returns whether the error kind is a violation of a foreign key.

§

#### fn [is_check_violation][18](&self) -> [bool][16]

Returns whether the error kind is a violation of a check.

§

### impl [Debug][19] for [SqliteError][5]

§

#### fn [fmt][20](&self, f: &mut [Formatter][21]<'_>) -> [Result][22]<[()][23], [Error][24]>

Formats the value using the given formatter. [Read more][20]

§

### impl [Display][25] for [SqliteError][5]

§

#### fn [fmt][26](&self, f: &mut [Formatter][21]<'_>) -> [Result][22]<[()][23], [Error][24]>

Formats the value using the given formatter. [Read more][26]

§

### impl [Error][27] for [SqliteError][5]

1.30.0 · [Source][28]§

#### fn [source][29](&self) -> [Option][7]<&(dyn [Error][27] \+ 'static)>

Returns the lower-level source of this error, if any. [Read more][29]

1.0.0 · [Source][30]§

#### fn [description][31](&self) -> &[str][9]

👎Deprecated since 1.42.0: use the Display impl or to_string()

[Read more][31]

1.0.0 · [Source][32]§

#### fn [cause][33](&self) -> [Option][7]<&dyn [Error][27]>

👎Deprecated since 1.33.0: replaced by Error::source, which can support downcasting

[Source][34]§

#### fn [provide][35]<'a>(&'a self, request: &mut [Request][36]<'a>)

🔬This is a nightly-only experimental API. (`error_generic_member_access`)

Provides type-based access to context intended for error reports. [Read more][35]

## Auto Trait Implementations§

§

### impl [Freeze][37] for [SqliteError][5]

§

### impl [RefUnwindSafe][38] for [SqliteError][5]

§

### impl [Send][39] for [SqliteError][5]

§

### impl [Sync][40] for [SqliteError][5]

§

### impl [Unpin][41] for [SqliteError][5]

§

### impl [UnwindSafe][42] for [SqliteError][5]

## Blanket Implementations§

[Source][43]§

### impl<T> [Any][44] for T

where T: 'static + ?[Sized][45],

[Source][46]§

#### fn [type_id][47](&self) -> [TypeId][48]

Gets the `TypeId` of `self`. [Read more][47]

[Source][49]§

### impl<T> [Borrow][50]<T> for T

where T: ?[Sized][45],

[Source][51]§

#### fn [borrow][52](&self) -> [&T][53]

Immutably borrows from an owned value. [Read more][52]

[Source][54]§

### impl<T> [BorrowMut][55]<T> for T

where T: ?[Sized][45],

[Source][56]§

#### fn [borrow_mut][57](&mut self) -> [&mut T][53]

Mutably borrows from an owned value. [Read more][57]

[Source][58]§

### impl<T> [From][59]<T> for T

[Source][60]§

#### fn [from][61](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][62] [`Span`][63], returning an `Instrumented` wrapper. Read more

[Source][64]§

### impl<T, U> [Into][65]<U> for T

where U: [From][59]<T>,

[Source][66]§

#### fn [into][67](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][59]<T> for U` chooses to do.

[Source][68]§

### impl<T> [IntoEither][69] for T

[Source][70]§

#### fn [into_either][71](self, into_left: [bool][16]) -> [Either][72]<Self, Self> ⓘ

Converts `self` into a [`Left`][73] variant of [`Either<Self, Self>`][72] if `into_left` is `true`. Converts `self` into a [`Right`][74] variant of [`Either<Self, Self>`][72] otherwise. [Read more][71]

[Source][75]§

#### fn [into_either_with][76]<F>(self, into_left: F) -> [Either][72]<Self, Self> ⓘ

where F: [FnOnce][77](&Self) -> [bool][16],

Converts `self` into a [`Left`][73] variant of [`Either<Self, Self>`][72] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][74] variant of [`Either<Self, Self>`][72] otherwise. [Read more][76]

[Source][78]§

### impl<T> [Same][79] for T

[Source][80]§

#### type [Output][81] = T

Should always be `Self`

[Source][82]§

### impl<T> [ToString][83] for T

where T: [Display][25] \+ ?[Sized][45],

[Source][84]§

#### fn [to_string][85](&self) -> [String][86]

Converts the given value to a `String`. [Read more][85]

[Source][87]§

### impl<T, U> [TryFrom][88]<U> for T

where U: [Into][65]<T>,

[Source][89]§

#### type [Error][90] = [Infallible][91]

The type returned in the event of a conversion error.

[Source][92]§

#### fn [try_from][93](value: U) -> [Result][22]<T, <T as [TryFrom][88]<U>>::[Error][94]>

Performs the conversion.

[Source][95]§

### impl<T, U> [TryInto][96]<U> for T

where U: [TryFrom][88]<T>,

[Source][97]§

#### type [Error][98] = <U as [TryFrom][88]<T>>::[Error][94]

The type returned in the event of a conversion error.

[Source][99]§

#### fn [try_into][100](self) -> [Result][22]<U, <U as [TryFrom][88]<T>>::[Error][94]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][65]<Dispatch>,

Attaches the provided [`Subscriber`][101] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][102] [`Subscriber`][101] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../error/trait.DatabaseError.html (trait sqlx::error::DatabaseError)
   [5]: struct.SqliteError.html (struct sqlx::sqlite::SqliteError)
   [6]: ../error/trait.DatabaseError.html#method.code
   [7]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [8]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [9]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [10]: ../error/trait.DatabaseError.html#tymethod.message
   [11]: ../error/trait.DatabaseError.html#tymethod.kind
   [12]: ../error/enum.ErrorKind.html (enum sqlx::error::ErrorKind)
   [13]: ../error/trait.DatabaseError.html#method.constraint
   [14]: ../error/trait.DatabaseError.html#method.table
   [15]: ../error/trait.DatabaseError.html#method.is_unique_violation
   [16]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [17]: ../error/trait.DatabaseError.html#method.is_foreign_key_violation
   [18]: ../error/trait.DatabaseError.html#method.is_check_violation
   [19]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [20]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [21]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [22]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [23]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [24]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [25]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [26]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html#tymethod.fmt
   [27]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [28]: https://doc.rust-lang.org/1.94.1/src/core/error.rs.html#111
   [29]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.source
   [30]: https://doc.rust-lang.org/1.94.1/src/core/error.rs.html#137
   [31]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.description
   [32]: https://doc.rust-lang.org/1.94.1/src/core/error.rs.html#147
   [33]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.cause
   [34]: https://doc.rust-lang.org/1.94.1/src/core/error.rs.html#260
   [35]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.provide
   [36]: https://doc.rust-lang.org/1.94.1/core/error/struct.Request.html (struct core::error::Request)
   [37]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [38]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [39]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [40]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [41]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [42]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [44]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [45]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [47]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [48]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [49]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [50]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [51]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [52]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [53]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [54]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [55]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [56]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [57]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [58]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [59]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [60]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [61]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [62]: super::Span::current()
   [63]: crate::Span
   [64]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [65]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [66]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [67]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [68]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [69]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [70]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [71]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [72]: ../enum.Either.html (enum sqlx::Either)
   [73]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [74]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [75]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [76]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [77]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [78]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [79]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [80]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [81]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [82]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2893
   [83]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html (trait alloc::string::ToString)
   [84]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2895
   [85]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html#tymethod.to_string
   [86]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [87]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [88]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [89]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [90]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [91]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [92]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [93]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [94]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [95]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [96]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [97]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [98]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [99]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [100]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [101]: super::Subscriber
   [102]: dispatcher#setting-the-default-subscriber

