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



## [In sqlx::error][2]

[sqlx][3]::[error][2]

# Enum Error Copy item path
[code]
    #[non_exhaustive]
    
    pub enum Error {
    Show 20 variants    Configuration([Box][4]<dyn [Error][5] + [Send][6] + [Sync][7]>),
        InvalidArgument([String][8]),
        Database([Box][4]<dyn [DatabaseError][9]>),
        Io([Error][10]),
        Tls([Box][4]<dyn [Error][5] + [Send][6] + [Sync][7]>),
        Protocol([String][8]),
        RowNotFound,
        TypeNotFound {
            type_name: [String][8],
        },
        ColumnIndexOutOfBounds {
            index: [usize][11],
            len: [usize][11],
        },
        ColumnNotFound([String][8]),
        ColumnDecode {
            index: [String][8],
            source: [Box][4]<dyn [Error][5] + [Send][6] + [Sync][7]>,
        },
        Encode([Box][4]<dyn [Error][5] + [Send][6] + [Sync][7]>),
        Decode([Box][4]<dyn [Error][5] + [Send][6] + [Sync][7]>),
        AnyDriverError([Box][4]<dyn [Error][5] + [Send][6] + [Sync][7]>),
        PoolTimedOut,
        PoolClosed,
        WorkerCrashed,
        Migrate([Box][4]<[MigrateError][12]>),
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

### Configuration([Box][4]<dyn [Error][5] \+ [Send][6] \+ [Sync][7]>)

Error occurred while parsing a connection string.

§

### InvalidArgument([String][8])

One or more of the arguments to the called function was invalid.

The string contains more information.

§

### Database([Box][4]<dyn [DatabaseError][9]>)

Error returned from the database.

§

### Io([Error][10])

Error communicating with the database backend.

§

### Tls([Box][4]<dyn [Error][5] \+ [Send][6] \+ [Sync][7]>)

Error occurred while attempting to establish a TLS connection.

§

### Protocol([String][8])

Unexpected or invalid data encountered while communicating with the database.

This should indicate there is a programming error in a SQLx driver or there is something corrupted with the connection to the database itself.

§

### RowNotFound

No rows returned by a query that expected to return at least one row.

§

### TypeNotFound

Type in query doesn’t exist. Likely due to typo or missing user type.

#### Fields

§`type_name: [String][8]`

§

### ColumnIndexOutOfBounds

Column index was out of bounds.

#### Fields

§`index: [usize][11]`

§`len: [usize][11]`

§

### ColumnNotFound([String][8])

No column found for the given name.

§

### ColumnDecode

Error occurred while decoding a value from a specific column.

#### Fields

§`index: [String][8]`

§`source: [Box][4]<dyn [Error][5] + [Send][6] + [Sync][7]>`

§

### Encode([Box][4]<dyn [Error][5] \+ [Send][6] \+ [Sync][7]>)

Error occured while encoding a value.

§

### Decode([Box][4]<dyn [Error][5] \+ [Send][6] \+ [Sync][7]>)

Error occurred while decoding a value.

§

### AnyDriverError([Box][4]<dyn [Error][5] \+ [Send][6] \+ [Sync][7]>)

Error occurred within the `Any` driver mapping to/from the native driver.

§

### PoolTimedOut

A [`Pool::acquire`][13] timed out due to connections not becoming available or because another task encountered too many errors while trying to open a new connection.

§

### PoolClosed

[`Pool::close`][14] was called while we were waiting in [`Pool::acquire`][13].

§

### WorkerCrashed

A background worker has crashed.

§

### Migrate([Box][4]<[MigrateError][12]>)

§

### InvalidSavePointStatement

§

### BeginFailed

## Implementations§

§

### impl [Error][15]

#### pub fn into_database_error(self) -> [Option][16]<[Box][4]<dyn [DatabaseError][9]>>

#### pub fn as_database_error(&self) -> [Option][16]<&(dyn [DatabaseError][9] \+ 'static)>

## Trait Implementations§

§

### impl [Debug][17] for [Error][15]

§

#### fn [fmt][18](&self, f: &mut [Formatter][19]<'_>) -> [Result][20]<[()][21], [Error][22]>

Formats the value using the given formatter. [Read more][18]

§

### impl [Display][23] for [Error][15]

§

#### fn [fmt][24](&self, __formatter: &mut [Formatter][19]<'_>) -> [Result][20]<[()][21], [Error][22]>

Formats the value using the given formatter. [Read more][24]

§

### impl [Error][5] for [Error][15]

§

#### fn [source][25](&self) -> [Option][16]<&(dyn [Error][5] \+ 'static)>

Returns the lower-level source of this error, if any. [Read more][25]

1.0.0 · [Source][26]§

#### fn [description][27](&self) -> &[str][28]

👎Deprecated since 1.42.0: use the Display impl or to_string()

[Read more][27]

1.0.0 · [Source][29]§

#### fn [cause][30](&self) -> [Option][16]<&dyn [Error][5]>

👎Deprecated since 1.33.0: replaced by Error::source, which can support downcasting

[Source][31]§

#### fn [provide][32]<'a>(&'a self, request: &mut [Request][33]<'a>)

🔬This is a nightly-only experimental API. (`error_generic_member_access`)

Provides type-based access to context intended for error reports. [Read more][32]

§

### impl<E> [From][34]<E> for [Error][15]

where E: [DatabaseError][9],

§

#### fn [from][35](error: E) -> [Error][15]

Converts to this type from the input type.

§

### impl [From][34]<[Error][10]> for [Error][15]

§

#### fn [from][35](source: [Error][10]) -> [Error][15]

Converts to this type from the input type.

§

### impl [From][34]<[Error][15]> for [MigrateError][12]

§

#### fn [from][35](source: [Error][15]) -> [MigrateError][12]

Converts to this type from the input type.

§

### impl [From][34]<[MigrateError][12]> for [Error][15]

Available on **crate feature`migrate`** only.

§

#### fn [from][35](error: [MigrateError][12]) -> [Error][15]

Converts to this type from the input type.

## Auto Trait Implementations§

§

### impl [Freeze][36] for [Error][15]

§

### impl ![RefUnwindSafe][37] for [Error][15]

§

### impl [Send][6] for [Error][15]

§

### impl [Sync][7] for [Error][15]

§

### impl [Unpin][38] for [Error][15]

§

### impl ![UnwindSafe][39] for [Error][15]

## Blanket Implementations§

[Source][40]§

### impl<T> [Any][41] for T

where T: 'static + ?[Sized][42],

[Source][43]§

#### fn [type_id][44](&self) -> [TypeId][45]

Gets the `TypeId` of `self`. [Read more][44]

[Source][46]§

### impl<T> [Borrow][47]<T> for T

where T: ?[Sized][42],

[Source][48]§

#### fn [borrow][49](&self) -> [&T][50]

Immutably borrows from an owned value. [Read more][49]

[Source][51]§

### impl<T> [BorrowMut][52]<T> for T

where T: ?[Sized][42],

[Source][53]§

#### fn [borrow_mut][54](&mut self) -> [&mut T][50]

Mutably borrows from an owned value. [Read more][54]

[Source][55]§

### impl<T> [From][34]<T> for T

[Source][56]§

#### fn [from][35](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][57] [`Span`][58], returning an `Instrumented` wrapper. Read more

[Source][59]§

### impl<T, U> [Into][60]<U> for T

where U: [From][34]<T>,

[Source][61]§

#### fn [into][62](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][34]<T> for U` chooses to do.

[Source][63]§

### impl<T> [IntoEither][64] for T

[Source][65]§

#### fn [into_either][66](self, into_left: [bool][67]) -> [Either][68]<Self, Self> ⓘ

Converts `self` into a [`Left`][69] variant of [`Either<Self, Self>`][68] if `into_left` is `true`. Converts `self` into a [`Right`][70] variant of [`Either<Self, Self>`][68] otherwise. [Read more][66]

[Source][71]§

#### fn [into_either_with][72]<F>(self, into_left: F) -> [Either][68]<Self, Self> ⓘ

where F: [FnOnce][73](&Self) -> [bool][67],

Converts `self` into a [`Left`][69] variant of [`Either<Self, Self>`][68] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][70] variant of [`Either<Self, Self>`][68] otherwise. [Read more][72]

[Source][74]§

### impl<T> [Same][75] for T

[Source][76]§

#### type [Output][77] = T

Should always be `Self`

[Source][78]§

### impl<T> [ToString][79] for T

where T: [Display][23] \+ ?[Sized][42],

[Source][80]§

#### fn [to_string][81](&self) -> [String][8]

Converts the given value to a `String`. [Read more][81]

[Source][82]§

### impl<T, U> [TryFrom][83]<U> for T

where U: [Into][60]<T>,

[Source][84]§

#### type [Error][85] = [Infallible][86]

The type returned in the event of a conversion error.

[Source][87]§

#### fn [try_from][88](value: U) -> [Result][20]<T, <T as [TryFrom][83]<U>>::[Error][89]>

Performs the conversion.

[Source][90]§

### impl<T, U> [TryInto][91]<U> for T

where U: [TryFrom][83]<T>,

[Source][92]§

#### type [Error][93] = <U as [TryFrom][83]<T>>::[Error][89]

The type returned in the event of a conversion error.

[Source][94]§

#### fn [try_into][95](self) -> [Result][20]<U, <U as [TryFrom][83]<T>>::[Error][89]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][60]<Dispatch>,

Attaches the provided [`Subscriber`][96] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][97] [`Subscriber`][96] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [5]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [6]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [7]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [8]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [9]: trait.DatabaseError.html (trait sqlx::error::DatabaseError)
   [10]: https://doc.rust-lang.org/1.94.1/std/io/error/struct.Error.html (struct std::io::error::Error)
   [11]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [12]: ../migrate/enum.MigrateError.html (enum sqlx::migrate::MigrateError)
   [13]: ../struct.Pool.html#method.acquire (method sqlx::Pool::acquire)
   [14]: ../struct.Pool.html#method.close (method sqlx::Pool::close)
   [15]: ../enum.Error.html (enum sqlx::Error)
   [16]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [17]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [18]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [19]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [20]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [21]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [22]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [23]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [24]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html#tymethod.fmt
   [25]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.source
   [26]: https://doc.rust-lang.org/1.94.1/src/core/error.rs.html#137
   [27]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.description
   [28]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [29]: https://doc.rust-lang.org/1.94.1/src/core/error.rs.html#147
   [30]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.cause
   [31]: https://doc.rust-lang.org/1.94.1/src/core/error.rs.html#260
   [32]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.provide
   [33]: https://doc.rust-lang.org/1.94.1/core/error/struct.Request.html (struct core::error::Request)
   [34]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [35]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [36]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [37]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [38]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [39]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [40]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [41]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [42]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [44]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [45]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [47]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [49]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [50]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [51]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [52]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [54]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [55]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [56]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [57]: super::Span::current()
   [58]: crate::Span
   [59]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [60]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [61]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [62]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [63]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [64]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [65]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [66]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [67]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [68]: ../enum.Either.html (enum sqlx::Either)
   [69]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [70]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [71]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [72]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [73]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [74]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [75]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [76]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [77]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [78]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2893
   [79]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html (trait alloc::string::ToString)
   [80]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2895
   [81]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html#tymethod.to_string
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

