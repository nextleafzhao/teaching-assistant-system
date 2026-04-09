## Text

## [sqlx][1]0.8.6

## Text

### Sections

  * Panics
  * Example: `SocketAddr`



### Tuple Fields

  * 0



### Methods

  * into_inner



### Trait Implementations

  * Clone
  * Copy
  * Debug
  * Decode<'r, Sqlite>
  * Default
  * Deref
  * DerefMut
  * Encode<'q, Sqlite>
  * Eq
  * Ord
  * PartialEq
  * PartialOrd
  * StructuralPartialEq
  * Type<Sqlite>



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
  * Comparable<K>
  * Equivalent<K>
  * Equivalent<K>
  * From<T>
  * Instrument
  * Into<U>
  * IntoEither
  * Receiver
  * Same
  * ToOwned
  * TryFrom<U>
  * TryInto<U>
  * WithSubscriber



## [In sqlx::types][2]

[sqlx][3]::[types][2]

# Struct Text Copy item path
[code]
    pub struct Text<T>(pub T);
[/code]

Expand description

Map a SQL text value to/from a Rust type using [`Display`][4] and [`FromStr`][5].

This can be useful for types that do not have a direct SQL equivalent, or are simply not supported by SQLx for one reason or another.

For strongly typed databases like Postgres, this will report the value’s type as `TEXT`. Explicit conversion may be necessary on the SQL side depending on the desired type.

#### §Panics

You should only use this adapter with `Display` implementations that are infallible, otherwise you may encounter panics when attempting to bind a value.

This is because the design of the `Encode` trait assumes encoding is infallible, so there is no way to bubble up the error.

Fortunately, most `Display` implementations are infallible by convention anyway (the standard `ToString` trait also assumes this), but you may still want to audit the source code for any types you intend to use with this adapter, just to be safe.

#### §Example: `SocketAddr`

MySQL and SQLite do not have a native SQL equivalent for `SocketAddr`, so if you want to store and retrieve instances of it, it makes sense to map it to `TEXT`:
[code] 
    use std::net::SocketAddr;
    
    use sqlx::Connection;
    use sqlx::mysql::MySqlConnection;
    use sqlx::types::Text;
    
    use uuid::Uuid;
    use time::OffsetDateTime;
    
    #[derive(sqlx::FromRow, Debug)]
    struct Login {
        user_id: Uuid,
        socket_addr: Text<SocketAddr>,
        login_at: OffsetDateTime
    }
    
    
    let mut conn: MySqlConnection = MySqlConnection::connect("<DATABASE URL>").await?;
    
    let user_id: Uuid = "e9a72cdc-d907-48d6-a488-c64a91fd063c".parse().unwrap();
    let socket_addr: SocketAddr = "198.51.100.47:31790".parse().unwrap();
    
    // CREATE TABLE user_login(user_id VARCHAR(36), socket_addr TEXT, login_at TIMESTAMP);
    sqlx::query("INSERT INTO user_login(user_id, socket_addr, login_at) VALUES (?, ?, NOW())")
        .bind(user_id)
        .bind(Text(socket_addr))
        .execute(&mut conn)
        .await?;
    
    let logins: Vec<Login> = sqlx::query_as("SELECT * FROM user_login")
        .fetch_all(&mut conn)
        .await?;
    
    println!("Logins for user ID {user_id}: {logins:?}");
    
[/code]

## Tuple Fields§

§`0: T`

## Implementations§

§

### impl<T> [Text][6]<T>

#### pub fn into_inner(self) -> T

Extract the inner value.

## Trait Implementations§

§

### impl<T> [Clone][7] for [Text][6]<T>

where T: [Clone][7],

§

#### fn [clone][8](&self) -> [Text][6]<T>

Returns a duplicate of the value. [Read more][8]

1.0.0 · [Source][9]§

#### fn [clone_from][10](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][10]

§

### impl<T> [Debug][11] for [Text][6]<T>

where T: [Debug][11],

§

#### fn [fmt][12](&self, f: &mut [Formatter][13]<'_>) -> [Result][14]<[()][15], [Error][16]>

Formats the value using the given formatter. [Read more][12]

§

### impl<'r, T> [Decode][17]<'r, [Sqlite][18]> for [Text][6]<T>

where T: [FromStr][5], [Box][19]<dyn [Error][20] \+ [Send][21] \+ [Sync][22]>: [From][23]<<T as [FromStr][5]>::[Err][24]>,

§

#### fn [decode][25]( value: [SqliteValueRef][26]<'r>, ) -> [Result][14]<[Text][6]<T>, [Box][19]<dyn [Error][20] \+ [Send][21] \+ [Sync][22]>>

Decode a new value of this type using a raw value from the database.

§

### impl<T> [Default][27] for [Text][6]<T>

where T: [Default][27],

§

#### fn [default][28]() -> [Text][6]<T>

Returns the “default value” for a type. [Read more][28]

§

### impl<T> [Deref][29] for [Text][6]<T>

§

#### type [Target][30] = T

The resulting type after dereferencing.

§

#### fn [deref][31](&self) -> &<[Text][6]<T> as [Deref][29]>::[Target][32]

Dereferences the value.

§

### impl<T> [DerefMut][33] for [Text][6]<T>

§

#### fn [deref_mut][34](&mut self) -> &mut <[Text][6]<T> as [Deref][29]>::[Target][32]

Mutably dereferences the value.

§

### impl<'q, T> [Encode][35]<'q, [Sqlite][18]> for [Text][6]<T>

where T: [Display][4],

§

#### fn [encode_by_ref][36]( &self, buf: &mut [Vec][37]<[SqliteArgumentValue][38]<'q>>, ) -> [Result][14]<[IsNull][39], [Box][19]<dyn [Error][20] \+ [Send][21] \+ [Sync][22]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][36]

§

#### fn [encode][40]( self, buf: &mut <DB as [Database][41]>::[ArgumentBuffer][42]<'q>, ) -> [Result][14]<[IsNull][39], [Box][19]<dyn [Error][20] \+ [Send][21] \+ [Sync][22]>>

where Self: [Sized][43],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][44](&self) -> [Option][45]<<DB as [Database][41]>::[TypeInfo][46]>

§

#### fn [size_hint][47](&self) -> [usize][48]

§

### impl<T> [Ord][49] for [Text][6]<T>

where T: [Ord][49],

§

#### fn [cmp][50](&self, other: &[Text][6]<T>) -> [Ordering][51]

This method returns an [`Ordering`][51] between `self` and `other`. [Read more][50]

1.21.0 · [Source][52]§

#### fn [max][53](self, other: Self) -> Self

where Self: [Sized][43],

Compares and returns the maximum of two values. [Read more][53]

1.21.0 · [Source][54]§

#### fn [min][55](self, other: Self) -> Self

where Self: [Sized][43],

Compares and returns the minimum of two values. [Read more][55]

1.50.0 · [Source][56]§

#### fn [clamp][57](self, min: Self, max: Self) -> Self

where Self: [Sized][43],

Restrict a value to a certain interval. [Read more][57]

§

### impl<T> [PartialEq][58] for [Text][6]<T>

where T: [PartialEq][58],

§

#### fn [eq][59](&self, other: &[Text][6]<T>) -> [bool][60]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][61]§

#### fn [ne][62](&self, other: [&Rhs][63]) -> [bool][60]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl<T> [PartialOrd][64] for [Text][6]<T>

where T: [PartialOrd][64],

§

#### fn [partial_cmp][65](&self, other: &[Text][6]<T>) -> [Option][45]<[Ordering][51]>

This method returns an ordering between `self` and `other` values if one exists. [Read more][65]

1.0.0 · [Source][66]§

#### fn [lt][67](&self, other: [&Rhs][63]) -> [bool][60]

Tests less than (for `self` and `other`) and is used by the `<` operator. [Read more][67]

1.0.0 · [Source][68]§

#### fn [le][69](&self, other: [&Rhs][63]) -> [bool][60]

Tests less than or equal to (for `self` and `other`) and is used by the `<=` operator. [Read more][69]

1.0.0 · [Source][70]§

#### fn [gt][71](&self, other: [&Rhs][63]) -> [bool][60]

Tests greater than (for `self` and `other`) and is used by the `>` operator. [Read more][71]

1.0.0 · [Source][72]§

#### fn [ge][73](&self, other: [&Rhs][63]) -> [bool][60]

Tests greater than or equal to (for `self` and `other`) and is used by the `>=` operator. [Read more][73]

§

### impl<T> [Type][74]<[Sqlite][18]> for [Text][6]<T>

§

#### fn [type_info][75]() -> [SqliteTypeInfo][76]

Returns the canonical SQL type for this Rust type. [Read more][75]

§

#### fn [compatible][77](ty: &[SqliteTypeInfo][76]) -> [bool][60]

Determines if this Rust type is compatible with the given SQL type. [Read more][77]

§

### impl<T> [Copy][78] for [Text][6]<T>

where T: [Copy][78],

§

### impl<T> [Eq][79] for [Text][6]<T>

where T: [Eq][79],

§

### impl<T> [StructuralPartialEq][80] for [Text][6]<T>

## Auto Trait Implementations§

§

### impl<T> [Freeze][81] for [Text][6]<T>

where T: [Freeze][81],

§

### impl<T> [RefUnwindSafe][82] for [Text][6]<T>

where T: [RefUnwindSafe][82],

§

### impl<T> [Send][21] for [Text][6]<T>

where T: [Send][21],

§

### impl<T> [Sync][22] for [Text][6]<T>

where T: [Sync][22],

§

### impl<T> [Unpin][83] for [Text][6]<T>

where T: [Unpin][83],

§

### impl<T> [UnwindSafe][84] for [Text][6]<T>

where T: [UnwindSafe][84],

## Blanket Implementations§

[Source][85]§

### impl<T> [Any][86] for T

where T: 'static + ?[Sized][43],

[Source][87]§

#### fn [type_id][88](&self) -> [TypeId][89]

Gets the `TypeId` of `self`. [Read more][88]

[Source][90]§

### impl<T> [Borrow][91]<T> for T

where T: ?[Sized][43],

[Source][92]§

#### fn [borrow][93](&self) -> [&T][63]

Immutably borrows from an owned value. [Read more][93]

[Source][94]§

### impl<T> [BorrowMut][95]<T> for T

where T: ?[Sized][43],

[Source][96]§

#### fn [borrow_mut][97](&mut self) -> [&mut T][63]

Mutably borrows from an owned value. [Read more][97]

[Source][98]§

### impl<T> [CloneToUninit][99] for T

where T: [Clone][7],

[Source][100]§

#### unsafe fn [clone_to_uninit][101](&self, dest: [*mut ][102][u8][103])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][101]

§

### impl<Q, K> Comparable<K> for Q

where Q: [Ord][49] \+ ?[Sized][43], K: [Borrow][91]<Q> \+ ?[Sized][43],

§

#### fn compare(&self, key: [&K][63]) -> [Ordering][51]

Compare self to `key` and return their ordering.

§

### impl<Q, K> Equivalent<K> for Q

where Q: [Eq][79] \+ ?[Sized][43], K: [Borrow][91]<Q> \+ ?[Sized][43],

§

#### fn equivalent(&self, key: [&K][63]) -> [bool][60]

Compare self to `key` and return `true` if they are equal.

§

### impl<Q, K> Equivalent<K> for Q

where Q: [Eq][79] \+ ?[Sized][43], K: [Borrow][91]<Q> \+ ?[Sized][43],

§

#### fn equivalent(&self, key: [&K][63]) -> [bool][60]

Checks if this value is equivalent to the given key. Read more

[Source][104]§

### impl<T> [From][23]<T> for T

[Source][105]§

#### fn [from][106](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][107] [`Span`][108], returning an `Instrumented` wrapper. Read more

[Source][109]§

### impl<T, U> [Into][110]<U> for T

where U: [From][23]<T>,

[Source][111]§

#### fn [into][112](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][23]<T> for U` chooses to do.

[Source][113]§

### impl<T> [IntoEither][114] for T

[Source][115]§

#### fn [into_either][116](self, into_left: [bool][60]) -> [Either][117]<Self, Self> ⓘ

Converts `self` into a [`Left`][118] variant of [`Either<Self, Self>`][117] if `into_left` is `true`. Converts `self` into a [`Right`][119] variant of [`Either<Self, Self>`][117] otherwise. [Read more][116]

[Source][120]§

#### fn [into_either_with][121]<F>(self, into_left: F) -> [Either][117]<Self, Self> ⓘ

where F: [FnOnce][122](&Self) -> [bool][60],

Converts `self` into a [`Left`][118] variant of [`Either<Self, Self>`][117] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][119] variant of [`Either<Self, Self>`][117] otherwise. [Read more][121]

[Source][123]§

### impl<P, T> [Receiver][124] for P

where P: [Deref][29]<Target = T> \+ ?[Sized][43], T: ?[Sized][43],

[Source][125]§

#### type [Target][126] = T

🔬This is a nightly-only experimental API. (`arbitrary_self_types`)

The target type on which the method may be called.

[Source][127]§

### impl<T> [Same][128] for T

[Source][129]§

#### type [Output][130] = T

Should always be `Self`

[Source][131]§

### impl<T> [ToOwned][132] for T

where T: [Clone][7],

[Source][133]§

#### type [Owned][134] = T

The resulting type after obtaining ownership.

[Source][135]§

#### fn [to_owned][136](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][136]

[Source][137]§

#### fn [clone_into][138](&self, target: [&mut T][63])

Uses borrowed data to replace owned data, usually by cloning. [Read more][138]

[Source][139]§

### impl<T, U> [TryFrom][140]<U> for T

where U: [Into][110]<T>,

[Source][141]§

#### type [Error][142] = [Infallible][143]

The type returned in the event of a conversion error.

[Source][144]§

#### fn [try_from][145](value: U) -> [Result][14]<T, <T as [TryFrom][140]<U>>::[Error][146]>

Performs the conversion.

[Source][147]§

### impl<T, U> [TryInto][148]<U> for T

where U: [TryFrom][140]<T>,

[Source][149]§

#### type [Error][150] = <U as [TryFrom][140]<T>>::[Error][146]

The type returned in the event of a conversion error.

[Source][151]§

#### fn [try_into][152](self) -> [Result][14]<U, <U as [TryFrom][140]<T>>::[Error][146]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][110]<Dispatch>,

Attaches the provided [`Subscriber`][153] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][154] [`Subscriber`][153] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [5]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html (trait core::str::traits::FromStr)
   [6]: struct.Text.html (struct sqlx::types::Text)
   [7]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [8]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [9]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [10]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [11]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [12]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [13]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [14]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [15]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [16]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [17]: ../trait.Decode.html (trait sqlx::Decode)
   [18]: ../struct.Sqlite.html (struct sqlx::Sqlite)
   [19]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [20]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [21]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [22]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [23]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [24]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#associatedtype.Err (type core::str::traits::FromStr::Err)
   [25]: ../trait.Decode.html#tymethod.decode
   [26]: ../sqlite/struct.SqliteValueRef.html (struct sqlx::sqlite::SqliteValueRef)
   [27]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [28]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [29]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html (trait core::ops::deref::Deref)
   [30]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#associatedtype.Target
   [31]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#tymethod.deref
   [32]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#associatedtype.Target (type core::ops::deref::Deref::Target)
   [33]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.DerefMut.html (trait core::ops::deref::DerefMut)
   [34]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.DerefMut.html#tymethod.deref_mut
   [35]: ../trait.Encode.html (trait sqlx::Encode)
   [36]: ../trait.Encode.html#tymethod.encode_by_ref
   [37]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [38]: ../sqlite/enum.SqliteArgumentValue.html (enum sqlx::sqlite::SqliteArgumentValue)
   [39]: ../encode/enum.IsNull.html (enum sqlx::encode::IsNull)
   [40]: ../trait.Encode.html#method.encode
   [41]: ../trait.Database.html (trait sqlx::Database)
   [42]: ../trait.Database.html#associatedtype.ArgumentBuffer (type sqlx::Database::ArgumentBuffer)
   [43]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [44]: ../trait.Encode.html#method.produces
   [45]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [46]: ../trait.Database.html#associatedtype.TypeInfo (type sqlx::Database::TypeInfo)
   [47]: ../trait.Encode.html#method.size_hint
   [48]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [49]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html (trait core::cmp::Ord)
   [50]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#tymethod.cmp
   [51]: https://doc.rust-lang.org/1.94.1/core/cmp/enum.Ordering.html (enum core::cmp::Ordering)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1025-1027
   [53]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#method.max
   [54]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1064-1066
   [55]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#method.min
   [56]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1090-1092
   [57]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#method.clamp
   [58]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [59]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [60]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [61]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [62]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [63]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [64]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html (trait core::cmp::PartialOrd)
   [65]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp
   [66]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1402
   [67]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.lt
   [68]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1420
   [69]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.le
   [70]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1438
   [71]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.gt
   [72]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1456
   [73]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.ge
   [74]: ../trait.Type.html (trait sqlx::Type)
   [75]: ../trait.Type.html#tymethod.type_info
   [76]: ../sqlite/struct.SqliteTypeInfo.html (struct sqlx::sqlite::SqliteTypeInfo)
   [77]: ../trait.Type.html#method.compatible
   [78]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [79]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [80]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [81]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [82]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [83]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [84]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [85]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [86]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [87]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [88]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [89]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [90]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [91]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [92]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [93]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [94]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [95]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [96]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [97]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [98]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [99]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [100]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [101]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [102]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [103]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [104]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [105]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [106]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [107]: super::Span::current()
   [108]: crate::Span
   [109]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [110]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [111]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [112]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [113]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [114]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [115]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [116]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [117]: ../enum.Either.html (enum sqlx::Either)
   [118]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [119]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [120]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [121]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [122]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [123]: https://doc.rust-lang.org/1.94.1/src/core/ops/deref.rs.html#378-380
   [124]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Receiver.html (trait core::ops::deref::Receiver)
   [125]: https://doc.rust-lang.org/1.94.1/src/core/ops/deref.rs.html#382
   [126]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Receiver.html#associatedtype.Target
   [127]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [128]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [129]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [130]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [131]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [132]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [133]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [134]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [135]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [136]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [137]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [138]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [139]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [140]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [141]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [142]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [143]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [144]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [145]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [146]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [147]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [148]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [149]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [150]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [151]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [152]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [153]: super::Subscriber
   [154]: dispatcher#setting-the-default-subscriber

