## AnyConnectOptions

## [sqlx][1]0.8.6

## AnyConnectOptions

### Fields

  * database_url
  * log_settings



### Trait Implementations

  * Clone
  * ConnectOptions
  * Debug
  * FromStr
  * TryFrom<&'a AnyConnectOptions>



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



## [In sqlx::any][2]

[sqlx][3]::[any][2]

# Struct AnyConnectOptions Copy item path
[code]
    #[non_exhaustive]
    
    pub struct AnyConnectOptions {
        pub database_url: [Url][4],
        pub log_settings: LogSettings,
    }
[/code]

Expand description

Opaque options for connecting to a database. These may only be constructed by parsing from a connection url.
[code] 
    postgres://postgres:password@localhost/database
    mysql://root:password@localhost/database
[/code]

## Fields (Non-exhaustive)§

This struct is marked as non-exhaustive

Non-exhaustive structs could have additional fields added in future. Therefore, non-exhaustive structs cannot be constructed in external crates using the traditional `Struct { .. }` syntax; cannot be matched against without a wildcard `..`; and struct update syntax will not work.

§`database_url: [Url][4]`§`log_settings: LogSettings`

## Trait Implementations§

§

### impl [Clone][5] for [AnyConnectOptions][6]

§

#### fn [clone][7](&self) -> [AnyConnectOptions][6]

Returns a duplicate of the value. [Read more][7]

1.0.0 · [Source][8]§

#### fn [clone_from][9](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][9]

§

### impl [ConnectOptions][10] for [AnyConnectOptions][6]

§

#### type [Connection][11] = [AnyConnection][12]

§

#### fn [from_url][13](url: &[Url][4]) -> [Result][14]<[AnyConnectOptions][6], [Error][15]>

Parse the `ConnectOptions` from a URL.

§

#### fn [to_url_lossy][16](&self) -> [Url][4]

Get a connection URL that may be used to connect to the same database as this `ConnectOptions`. [Read more][16]

§

#### fn [connect][17]( &self, ) -> [Pin][18]<[Box][19]<dyn [Future][20]<Output = [Result][14]<[AnyConnection][12], [Error][15]>> \+ [Send][21] \+ '_>>

Establish a new database connection with the options specified by `self`.

§

#### fn [log_statements][22](self, level: [LevelFilter][23]) -> [AnyConnectOptions][6]

Log executed statements with the specified `level`

§

#### fn [log_slow_statements][24]( self, level: [LevelFilter][23], duration: [Duration][25], ) -> [AnyConnectOptions][6]

Log executed statements with a duration above the specified `duration` at the specified `level`.

§

#### fn [disable_statement_logging][26](self) -> Self

Entirely disables statement logging (both slow and regular).

§

### impl [Debug][27] for [AnyConnectOptions][6]

§

#### fn [fmt][28](&self, f: &mut [Formatter][29]<'_>) -> [Result][14]<[()][30], [Error][31]>

Formats the value using the given formatter. [Read more][28]

§

### impl [FromStr][32] for [AnyConnectOptions][6]

§

#### type [Err][33] = [Error][15]

The associated error which can be returned from parsing.

§

#### fn [from_str][34]( url: &[str][35], ) -> [Result][14]<[AnyConnectOptions][6], <[AnyConnectOptions][6] as [FromStr][32]>::[Err][36]>

Parses a string `s` to return a value of this type. [Read more][34]

§

### impl<'a> [TryFrom][37]<&'a [AnyConnectOptions][6]> for [SqliteConnectOptions][38]

§

#### type [Error][39] = [Error][15]

The type returned in the event of a conversion error.

§

#### fn [try_from][40]( opts: &'a [AnyConnectOptions][6], ) -> [Result][14]<[SqliteConnectOptions][38], <[SqliteConnectOptions][38] as [TryFrom][37]<&'a [AnyConnectOptions][6]>>::[Error][41]>

Performs the conversion.

## Auto Trait Implementations§

§

### impl [Freeze][42] for [AnyConnectOptions][6]

§

### impl [RefUnwindSafe][43] for [AnyConnectOptions][6]

§

### impl [Send][21] for [AnyConnectOptions][6]

§

### impl [Sync][44] for [AnyConnectOptions][6]

§

### impl [Unpin][45] for [AnyConnectOptions][6]

§

### impl [UnwindSafe][46] for [AnyConnectOptions][6]

## Blanket Implementations§

[Source][47]§

### impl<T> [Any][48] for T

where T: 'static + ?[Sized][49],

[Source][50]§

#### fn [type_id][51](&self) -> [TypeId][52]

Gets the `TypeId` of `self`. [Read more][51]

[Source][53]§

### impl<T> [Borrow][54]<T> for T

where T: ?[Sized][49],

[Source][55]§

#### fn [borrow][56](&self) -> [&T][57]

Immutably borrows from an owned value. [Read more][56]

[Source][58]§

### impl<T> [BorrowMut][59]<T> for T

where T: ?[Sized][49],

[Source][60]§

#### fn [borrow_mut][61](&mut self) -> [&mut T][57]

Mutably borrows from an owned value. [Read more][61]

[Source][62]§

### impl<T> [CloneToUninit][63] for T

where T: [Clone][5],

[Source][64]§

#### unsafe fn [clone_to_uninit][65](&self, dest: [*mut ][66][u8][67])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][65]

[Source][68]§

### impl<T> [From][69]<T> for T

[Source][70]§

#### fn [from][71](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][72] [`Span`][73], returning an `Instrumented` wrapper. Read more

[Source][74]§

### impl<T, U> [Into][75]<U> for T

where U: [From][69]<T>,

[Source][76]§

#### fn [into][77](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][69]<T> for U` chooses to do.

[Source][78]§

### impl<T> [IntoEither][79] for T

[Source][80]§

#### fn [into_either][81](self, into_left: [bool][82]) -> [Either][83]<Self, Self> ⓘ

Converts `self` into a [`Left`][84] variant of [`Either<Self, Self>`][83] if `into_left` is `true`. Converts `self` into a [`Right`][85] variant of [`Either<Self, Self>`][83] otherwise. [Read more][81]

[Source][86]§

#### fn [into_either_with][87]<F>(self, into_left: F) -> [Either][83]<Self, Self> ⓘ

where F: [FnOnce][88](&Self) -> [bool][82],

Converts `self` into a [`Left`][84] variant of [`Either<Self, Self>`][83] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][85] variant of [`Either<Self, Self>`][83] otherwise. [Read more][87]

[Source][89]§

### impl<T> [Same][90] for T

[Source][91]§

#### type [Output][92] = T

Should always be `Self`

[Source][93]§

### impl<T> [ToOwned][94] for T

where T: [Clone][5],

[Source][95]§

#### type [Owned][96] = T

The resulting type after obtaining ownership.

[Source][97]§

#### fn [to_owned][98](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][98]

[Source][99]§

#### fn [clone_into][100](&self, target: [&mut T][57])

Uses borrowed data to replace owned data, usually by cloning. [Read more][100]

[Source][101]§

### impl<T, U> [TryFrom][37]<U> for T

where U: [Into][75]<T>,

[Source][102]§

#### type [Error][39] = [Infallible][103]

The type returned in the event of a conversion error.

[Source][104]§

#### fn [try_from][40](value: U) -> [Result][14]<T, <T as [TryFrom][37]<U>>::[Error][41]>

Performs the conversion.

[Source][105]§

### impl<T, U> [TryInto][106]<U> for T

where U: [TryFrom][37]<T>,

[Source][107]§

#### type [Error][108] = <U as [TryFrom][37]<T>>::[Error][41]

The type returned in the event of a conversion error.

[Source][109]§

#### fn [try_into][110](self) -> [Result][14]<U, <U as [TryFrom][37]<T>>::[Error][41]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][75]<Dispatch>,

Attaches the provided [`Subscriber`][111] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][112] [`Subscriber`][111] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://docs.rs/url/2.5.7/url/struct.Url.html (struct url::Url)
   [5]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [6]: struct.AnyConnectOptions.html (struct sqlx::any::AnyConnectOptions)
   [7]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [8]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [9]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [10]: ../trait.ConnectOptions.html (trait sqlx::ConnectOptions)
   [11]: ../trait.ConnectOptions.html#associatedtype.Connection
   [12]: ../struct.AnyConnection.html (struct sqlx::AnyConnection)
   [13]: ../trait.ConnectOptions.html#tymethod.from_url
   [14]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [15]: ../enum.Error.html (enum sqlx::Error)
   [16]: ../trait.ConnectOptions.html#method.to_url_lossy
   [17]: ../trait.ConnectOptions.html#tymethod.connect
   [18]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [19]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [20]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [21]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [22]: ../trait.ConnectOptions.html#tymethod.log_statements
   [23]: https://docs.rs/log/0.4.29/log/enum.LevelFilter.html (enum log::LevelFilter)
   [24]: ../trait.ConnectOptions.html#tymethod.log_slow_statements
   [25]: https://doc.rust-lang.org/1.94.1/core/time/struct.Duration.html (struct core::time::Duration)
   [26]: ../trait.ConnectOptions.html#method.disable_statement_logging
   [27]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [28]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [29]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [30]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [31]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [32]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html (trait core::str::traits::FromStr)
   [33]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#associatedtype.Err
   [34]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#tymethod.from_str
   [35]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [36]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#associatedtype.Err (type core::str::traits::FromStr::Err)
   [37]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [38]: ../sqlite/struct.SqliteConnectOptions.html (struct sqlx::sqlite::SqliteConnectOptions)
   [39]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [40]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [41]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [42]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [43]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [44]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [45]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [46]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [47]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [48]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [49]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [50]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [51]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [52]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [54]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [56]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [57]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [58]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [59]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [60]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [61]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [62]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [63]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [64]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [65]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [66]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [67]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [68]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [69]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [70]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [72]: super::Span::current()
   [73]: crate::Span
   [74]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [75]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [76]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [77]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [78]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [79]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [80]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [81]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [82]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [83]: ../enum.Either.html (enum sqlx::Either)
   [84]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [85]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [86]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [87]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [88]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [89]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [90]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [91]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [92]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [93]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [94]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [95]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [96]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [97]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [98]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [99]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [100]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [101]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [102]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [103]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [104]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [105]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [106]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [107]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [108]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [109]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [110]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [111]: super::Subscriber
   [112]: dispatcher#setting-the-default-subscriber

