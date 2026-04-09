## Error

## [sqlx][1]0.8.6

## Error

### Variants

  * AnyDriverError
  * BeginFailed
  * ColumnDecode
  * ColumnIndexOutOfBounds
  * ColumnNotFound
  * Configuration
  * Database
  * Decode
  * Encode
  * InvalidArgument
  * InvalidSavePointStatement
  * Io
  * Migrate
  * PoolClosed
  * PoolTimedOut
  * Protocol
  * RowNotFound
  * Tls
  * TypeNotFound
  * WorkerCrashed



### Methods

  * as_database_error
  * into_database_error



### Trait Implementations

  * Debug
  * Display
  * Error
  * From<E>
  * From<Error>
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



## [In crate sqlx][2]

[sqlx][2]

# Enum Error Copy item path
[code]
    #[non_exhaustive]
    
    pub enum Error {
    Show 20 variants    Configuration([Box][3]<dyn [Error][4] + [Send][5] + [Sync][6]>),
        InvalidArgument([String][7]),
        Database([Box][3]<dyn [DatabaseError][8]>),
        Io([Error][9]),
        Tls([Box][3]<dyn [Error][4] + [Send][5] + [Sync][6]>),
        Protocol([String][7]),
        RowNotFound,
        TypeNotFound {
            type_name: [String][7],
        },
        ColumnIndexOutOfBounds {
            index: [usize][10],
            len: [usize][10],
        },
        ColumnNotFound([String][7]),
        ColumnDecode {
            index: [String][7],
            source: [Box][3]<dyn [Error][4] + [Send][5] + [Sync][6]>,
        },
        Encode([Box][3]<dyn [Error][4] + [Send][5] + [Sync][6]>),
        Decode([Box][3]<dyn [Error][4] + [Send][5] + [Sync][6]>),
        AnyDriverError([Box][3]<dyn [Error][4] + [Send][5] + [Sync][6]>),
        PoolTimedOut,
        PoolClosed,
        WorkerCrashed,
        Migrate([Box][3]<[MigrateError][11]>),
        InvalidSavePointStatement,
        BeginFailed,
    }
[/code]

Expand description

Represents all the ways a method can fail within SQLx.

## Variants (Non-exhaustive)§

This enum is marked as non-exhaustive

Non-exhaustive enums could have additional variants added in future. Therefore, when matching against variants of non-exhaustive enums, an extra wildcard arm must be added to account for any future variants.

§

### Configuration([Box][3]<dyn [Error][4] \+ [Send][5] \+ [Sync][6]>)

Error occurred while parsing a connection string.

§

### InvalidArgument([String][7])

One or more of the arguments to the called function was invalid.

The string contains more information.

§

### Database([Box][3]<dyn [DatabaseError][8]>)

Error returned from the database.

§

### Io([Error][9])

Error communicating with the database backend.

§

### Tls([Box][3]<dyn [Error][4] \+ [Send][5] \+ [Sync][6]>)

Error occurred while attempting to establish a TLS connection.

§

### Protocol([String][7])

Unexpected or invalid data encountered while communicating with the database.

This should indicate there is a programming error in a SQLx driver or there is something corrupted with the connection to the database itself.

§

### RowNotFound

No rows returned by a query that expected to return at least one row.

§

### TypeNotFound

Type in query doesn’t exist. Likely due to typo or missing user type.

#### Fields

§`type_name: [String][7]`

§

### ColumnIndexOutOfBounds

Column index was out of bounds.

#### Fields

§`index: [usize][10]`

§`len: [usize][10]`

§

### ColumnNotFound([String][7])

No column found for the given name.

§

### ColumnDecode

Error occurred while decoding a value from a specific column.

#### Fields

§`index: [String][7]`

§`source: [Box][3]<dyn [Error][4] + [Send][5] + [Sync][6]>`

§

### Encode([Box][3]<dyn [Error][4] \+ [Send][5] \+ [Sync][6]>)

Error occured while encoding a value.

§

### Decode([Box][3]<dyn [Error][4] \+ [Send][5] \+ [Sync][6]>)

Error occurred while decoding a value.

§

### AnyDriverError([Box][3]<dyn [Error][4] \+ [Send][5] \+ [Sync][6]>)

Error occurred within the `Any` driver mapping to/from the native driver.

§

### PoolTimedOut

A [`Pool::acquire`][12] timed out due to connections not becoming available or because another task encountered too many errors while trying to open a new connection.

§

### PoolClosed

[`Pool::close`][13] was called while we were waiting in [`Pool::acquire`][12].

§

### WorkerCrashed

A background worker has crashed.

§

### Migrate([Box][3]<[MigrateError][11]>)

§

### InvalidSavePointStatement

§

### BeginFailed

## Implementations§

§

### impl [Error][14]

#### pub fn into_database_error(self) -> [Option][15]<[Box][3]<dyn [DatabaseError][8]>>

#### pub fn as_database_error(&self) -> [Option][15]<&(dyn [DatabaseError][8] \+ 'static)>

## Trait Implementations§

§

### impl [Debug][16] for [Error][14]

§

#### fn [fmt][17](&self, f: &mut [Formatter][18]<'_>) -> [Result][19]<[()][20], [Error][21]>

Formats the value using the given formatter. [Read more][17]

§

### impl [Display][22] for [Error][14]

§

#### fn [fmt][23](&self, __formatter: &mut [Formatter][18]<'_>) -> [Result][19]<[()][20], [Error][21]>

Formats the value using the given formatter. [Read more][23]

§

### impl [Error][4] for [Error][14]

§

#### fn [source][24](&self) -> [Option][15]<&(dyn [Error][4] \+ 'static)>

Returns the lower-level source of this error, if any. [Read more][24]

1.0.0 · [Source][25]§

#### fn [description][26](&self) -> &[str][27]

👎Deprecated since 1.42.0: use the Display impl or to_string()

[Read more][26]

1.0.0 · [Source][28]§

#### fn [cause][29](&self) -> [Option][15]<&dyn [Error][4]>

👎Deprecated since 1.33.0: replaced by Error::source, which can support downcasting

[Source][30]§

#### fn [provide][31]<'a>(&'a self, request: &mut [Request][32]<'a>)

🔬This is a nightly-only experimental API. (`error_generic_member_access`)

Provides type-based access to context intended for error reports. [Read more][31]

§

### impl<E> [From][33]<E> for [Error][14]

where E: [DatabaseError][8],

§

#### fn [from][34](error: E) -> [Error][14]

Converts to this type from the input type.

§

### impl [From][33]<[Error][9]> for [Error][14]

§

#### fn [from][34](source: [Error][9]) -> [Error][14]

Converts to this type from the input type.

§

### impl [From][33]<[Error][14]> for [MigrateError][11]

§

#### fn [from][34](source: [Error][14]) -> [MigrateError][11]

Converts to this type from the input type.

§

### impl [From][33]<[MigrateError][11]> for [Error][14]

Available on **crate feature`migrate`** only.

§

#### fn [from][34](error: [MigrateError][11]) -> [Error][14]

Converts to this type from the input type.

## Auto Trait Implementations§

§

### impl [Freeze][35] for [Error][14]

§

### impl ![RefUnwindSafe][36] for [Error][14]

§

### impl [Send][5] for [Error][14]

§

### impl [Sync][6] for [Error][14]

§

### impl [Unpin][37] for [Error][14]

§

### impl ![UnwindSafe][38] for [Error][14]

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

#### fn [borrow][48](&self) -> [&T][49]

Immutably borrows from an owned value. [Read more][48]

[Source][50]§

### impl<T> [BorrowMut][51]<T> for T

where T: ?[Sized][41],

[Source][52]§

#### fn [borrow_mut][53](&mut self) -> [&mut T][49]

Mutably borrows from an owned value. [Read more][53]

[Source][54]§

### impl<T> [From][33]<T> for T

[Source][55]§

#### fn [from][34](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][56] [`Span`][57], returning an `Instrumented` wrapper. Read more

[Source][58]§

### impl<T, U> [Into][59]<U> for T

where U: [From][33]<T>,

[Source][60]§

#### fn [into][61](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][33]<T> for U` chooses to do.

[Source][62]§

### impl<T> [IntoEither][63] for T

[Source][64]§

#### fn [into_either][65](self, into_left: [bool][66]) -> [Either][67]<Self, Self> ⓘ

Converts `self` into a [`Left`][68] variant of [`Either<Self, Self>`][67] if `into_left` is `true`. Converts `self` into a [`Right`][69] variant of [`Either<Self, Self>`][67] otherwise. [Read more][65]

[Source][70]§

#### fn [into_either_with][71]<F>(self, into_left: F) -> [Either][67]<Self, Self> ⓘ

where F: [FnOnce][72](&Self) -> [bool][66],

Converts `self` into a [`Left`][68] variant of [`Either<Self, Self>`][67] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][69] variant of [`Either<Self, Self>`][67] otherwise. [Read more][71]

[Source][73]§

### impl<T> [Same][74] for T

[Source][75]§

#### type [Output][76] = T

Should always be `Self`

[Source][77]§

### impl<T> [ToString][78] for T

where T: [Display][22] \+ ?[Sized][41],

[Source][79]§

#### fn [to_string][80](&self) -> [String][7]

Converts the given value to a `String`. [Read more][80]

[Source][81]§

### impl<T, U> [TryFrom][82]<U> for T

where U: [Into][59]<T>,

[Source][83]§

#### type [Error][84] = [Infallible][85]

The type returned in the event of a conversion error.

[Source][86]§

#### fn [try_from][87](value: U) -> [Result][19]<T, <T as [TryFrom][82]<U>>::[Error][88]>

Performs the conversion.

[Source][89]§

### impl<T, U> [TryInto][90]<U> for T

where U: [TryFrom][82]<T>,

[Source][91]§

#### type [Error][92] = <U as [TryFrom][82]<T>>::[Error][88]

The type returned in the event of a conversion error.

[Source][93]§

#### fn [try_into][94](self) -> [Result][19]<U, <U as [TryFrom][82]<T>>::[Error][88]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][59]<Dispatch>,

Attaches the provided [`Subscriber`][95] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][96] [`Subscriber`][95] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [4]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [5]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [6]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [7]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [8]: error/trait.DatabaseError.html (trait sqlx::error::DatabaseError)
   [9]: https://doc.rust-lang.org/1.94.1/std/io/error/struct.Error.html (struct std::io::error::Error)
   [10]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [11]: migrate/enum.MigrateError.html (enum sqlx::migrate::MigrateError)
   [12]: struct.Pool.html#method.acquire (method sqlx::Pool::acquire)
   [13]: struct.Pool.html#method.close (method sqlx::Pool::close)
   [14]: enum.Error.html (enum sqlx::Error)
   [15]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [16]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [17]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [18]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [19]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [20]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [21]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [22]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [23]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html#tymethod.fmt
   [24]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.source
   [25]: https://doc.rust-lang.org/1.94.1/src/core/error.rs.html#137
   [26]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.description
   [27]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [28]: https://doc.rust-lang.org/1.94.1/src/core/error.rs.html#147
   [29]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.cause
   [30]: https://doc.rust-lang.org/1.94.1/src/core/error.rs.html#260
   [31]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.provide
   [32]: https://doc.rust-lang.org/1.94.1/core/error/struct.Request.html (struct core::error::Request)
   [33]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [34]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
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
   [49]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [50]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [51]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [53]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [54]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [55]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [56]: super::Span::current()
   [57]: crate::Span
   [58]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [59]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [60]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [61]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [62]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [63]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [64]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [65]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [66]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [67]: enum.Either.html (enum sqlx::Either)
   [68]: enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [69]: enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [70]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [71]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [72]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [73]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [74]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [75]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [76]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [77]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2893
   [78]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html (trait alloc::string::ToString)
   [79]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2895
   [80]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html#tymethod.to_string
   [81]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [82]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [83]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [84]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [85]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [86]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [87]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [88]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [89]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [90]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [91]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [92]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [93]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [94]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [95]: super::Subscriber
   [96]: dispatcher#setting-the-default-subscriber

