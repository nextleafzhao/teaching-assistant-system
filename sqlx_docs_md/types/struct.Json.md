## Json

## [sqlx][1]0.8.6

## Json

### Sections

  * Example



### Tuple Fields

  * 0



### Trait Implementations

  * AsMut<T>
  * AsRef<T>
  * Clone
  * Copy
  * Debug
  * Decode<'r, Sqlite>
  * Default
  * Deref
  * DerefMut
  * Deserialize<'de>
  * Encode<'_, Sqlite>
  * Eq
  * From<T>
  * Hash
  * Ord
  * PartialEq
  * PartialOrd
  * Serialize
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
  * DeserializeOwned
  * Equivalent<K>
  * Equivalent<K>
  * From<!>
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

# Struct Json Copy item path
[code]
    pub struct Json<T>(pub T)
    where
        T: ?[Sized][4];
[/code]

Expand description

Json for json and jsonb fields

Will attempt to cast to type passed in as the generic.
[code] 
    [dependencies]
    serde_json = { version = "1.0", features = ["raw_value"] }
    
[/code]

## §Example
[code] 
    #[derive(Deserialize)]
    struct Book {
      name: String
    }
    
    #[derive(sqlx::FromRow)]
    struct Author {
      name: String,
      books: sqlx::types::Json<Book>
    }
[/code]

Can also be used to turn the json/jsonb into a hashmap
[code] 
    use std::collections::HashMap;
    use serde::Deserialize;
    
    #[derive(Deserialize)]
    struct Book {
      name: String
    }
    #[derive(sqlx::FromRow)]
    struct Library {
      id: String,
      dewey_decimal: sqlx::types::Json<HashMap<String, Book>>
    }
[/code]

If the query macros are used, it is necessary to tell the macro to use the `Json` adapter by using the type override syntax

ⓘ
[code]
    #[derive(sqlx::FromRow)]
    struct Book {
        title: String,
    }
    
    #[derive(sqlx::FromRow)]
    struct Author {
        name: String,
        books: sqlx::types::Json<Book>,
    }
    // Note the type override in the query string
    let authors = sqlx::query_as!(
        Author,
        r#"
    SELECT name, books as "books: Json<Book>"
    FROM authors
        "#
    )
    .fetch_all(&mut conn)
    .await?;
[/code]

## Tuple Fields§

§`0: T`

## Trait Implementations§

§

### impl<T> [AsMut][5]<T> for [Json][6]<T>

§

#### fn [as_mut][7](&mut self) -> [&mut T][8]

Converts this type into a mutable reference of the (usually inferred) input type.

§

### impl<T> [AsRef][9]<T> for [Json][6]<T>

§

#### fn [as_ref][10](&self) -> [&T][8]

Converts this type into a shared reference of the (usually inferred) input type.

§

### impl<T> [Clone][11] for [Json][6]<T>

where T: [Clone][11] \+ ?[Sized][4],

§

#### fn [clone][12](&self) -> [Json][6]<T>

Returns a duplicate of the value. [Read more][12]

1.0.0 · [Source][13]§

#### fn [clone_from][14](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][14]

§

### impl<T> [Debug][15] for [Json][6]<T>

where T: [Debug][15] \+ ?[Sized][4],

§

#### fn [fmt][16](&self, f: &mut [Formatter][17]<'_>) -> [Result][18]<[()][19], [Error][20]>

Formats the value using the given formatter. [Read more][16]

§

### impl<'r, T> [Decode][21]<'r, [Sqlite][22]> for [Json][6]<T>

where T: 'r + [Deserialize][23]<'r>,

§

#### fn [decode][24]( value: [SqliteValueRef][25]<'r>, ) -> [Result][18]<[Json][6]<T>, [Box][26]<dyn [Error][27] \+ [Send][28] \+ [Sync][29]>>

Decode a new value of this type using a raw value from the database.

§

### impl<T> [Default][30] for [Json][6]<T>

where T: [Default][30] \+ ?[Sized][4],

§

#### fn [default][31]() -> [Json][6]<T>

Returns the “default value” for a type. [Read more][31]

§

### impl<T> [Deref][32] for [Json][6]<T>

§

#### type [Target][33] = T

The resulting type after dereferencing.

§

#### fn [deref][34](&self) -> &<[Json][6]<T> as [Deref][32]>::[Target][35]

Dereferences the value.

§

### impl<T> [DerefMut][36] for [Json][6]<T>

§

#### fn [deref_mut][37](&mut self) -> &mut <[Json][6]<T> as [Deref][32]>::[Target][35]

Mutably dereferences the value.

§

### impl<'de, T> [Deserialize][23]<'de> for [Json][6]<T>

where T: [Deserialize][23]<'de> \+ ?[Sized][4],

§

#### fn [deserialize][38]<__D>( __deserializer: __D, ) -> [Result][18]<[Json][6]<T>, <__D as [Deserializer][39]<'de>>::[Error][40]>

where __D: [Deserializer][39]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][38]

§

### impl<T> [Encode][41]<'_, [Sqlite][22]> for [Json][6]<T>

where T: [Serialize][42],

§

#### fn [encode_by_ref][43]( &self, buf: &mut [Vec][44]<[SqliteArgumentValue][45]<'_>>, ) -> [Result][18]<[IsNull][46], [Box][26]<dyn [Error][27] \+ [Send][28] \+ [Sync][29]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][43]

§

#### fn [encode][47]( self, buf: &mut <DB as [Database][48]>::[ArgumentBuffer][49]<'q>, ) -> [Result][18]<[IsNull][46], [Box][26]<dyn [Error][27] \+ [Send][28] \+ [Sync][29]>>

where Self: [Sized][4],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][50](&self) -> [Option][51]<<DB as [Database][48]>::[TypeInfo][52]>

§

#### fn [size_hint][53](&self) -> [usize][54]

§

### impl<T> [From][55]<T> for [Json][6]<T>

§

#### fn [from][56](value: T) -> [Json][6]<T>

Converts to this type from the input type.

§

### impl<T> [Hash][57] for [Json][6]<T>

where T: [Hash][57] \+ ?[Sized][4],

§

#### fn [hash][58]<__H>(&self, state: [&mut __H][8])

where __H: [Hasher][59],

Feeds this value into the given [`Hasher`][59]. [Read more][58]

1.3.0 · [Source][60]§

#### fn [hash_slice][61]<H>(data: &[Self], state: [&mut H][8])

where H: [Hasher][59], Self: [Sized][4],

Feeds a slice of this type into the given [`Hasher`][59]. [Read more][61]

§

### impl<T> [Ord][62] for [Json][6]<T>

where T: [Ord][62] \+ ?[Sized][4],

§

#### fn [cmp][63](&self, other: &[Json][6]<T>) -> [Ordering][64]

This method returns an [`Ordering`][64] between `self` and `other`. [Read more][63]

1.21.0 · [Source][65]§

#### fn [max][66](self, other: Self) -> Self

where Self: [Sized][4],

Compares and returns the maximum of two values. [Read more][66]

1.21.0 · [Source][67]§

#### fn [min][68](self, other: Self) -> Self

where Self: [Sized][4],

Compares and returns the minimum of two values. [Read more][68]

1.50.0 · [Source][69]§

#### fn [clamp][70](self, min: Self, max: Self) -> Self

where Self: [Sized][4],

Restrict a value to a certain interval. [Read more][70]

§

### impl<T> [PartialEq][71] for [Json][6]<T>

where T: [PartialEq][71] \+ ?[Sized][4],

§

#### fn [eq][72](&self, other: &[Json][6]<T>) -> [bool][73]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][74]§

#### fn [ne][75](&self, other: [&Rhs][8]) -> [bool][73]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl<T> [PartialOrd][76] for [Json][6]<T>

where T: [PartialOrd][76] \+ ?[Sized][4],

§

#### fn [partial_cmp][77](&self, other: &[Json][6]<T>) -> [Option][51]<[Ordering][64]>

This method returns an ordering between `self` and `other` values if one exists. [Read more][77]

1.0.0 · [Source][78]§

#### fn [lt][79](&self, other: [&Rhs][8]) -> [bool][73]

Tests less than (for `self` and `other`) and is used by the `<` operator. [Read more][79]

1.0.0 · [Source][80]§

#### fn [le][81](&self, other: [&Rhs][8]) -> [bool][73]

Tests less than or equal to (for `self` and `other`) and is used by the `<=` operator. [Read more][81]

1.0.0 · [Source][82]§

#### fn [gt][83](&self, other: [&Rhs][8]) -> [bool][73]

Tests greater than (for `self` and `other`) and is used by the `>` operator. [Read more][83]

1.0.0 · [Source][84]§

#### fn [ge][85](&self, other: [&Rhs][8]) -> [bool][73]

Tests greater than or equal to (for `self` and `other`) and is used by the `>=` operator. [Read more][85]

§

### impl<T> [Serialize][42] for [Json][6]<T>

where T: [Serialize][42] \+ ?[Sized][4],

§

#### fn [serialize][86]<__S>( &self, __serializer: __S, ) -> [Result][18]<<__S as [Serializer][87]>::[Ok][88], <__S as [Serializer][87]>::[Error][89]>

where __S: [Serializer][87],

Serialize this value into the given Serde serializer. [Read more][86]

§

### impl<T> [Type][90]<[Sqlite][22]> for [Json][6]<T>

§

#### fn [type_info][91]() -> [SqliteTypeInfo][92]

Returns the canonical SQL type for this Rust type. [Read more][91]

§

#### fn [compatible][93](ty: &[SqliteTypeInfo][92]) -> [bool][73]

Determines if this Rust type is compatible with the given SQL type. [Read more][93]

§

### impl<T> [Copy][94] for [Json][6]<T>

where T: [Copy][94] \+ ?[Sized][4],

§

### impl<T> [Eq][95] for [Json][6]<T>

where T: [Eq][95] \+ ?[Sized][4],

§

### impl<T> [StructuralPartialEq][96] for [Json][6]<T>

where T: ?[Sized][4],

## Auto Trait Implementations§

§

### impl<T> [Freeze][97] for [Json][6]<T>

where T: [Freeze][97] \+ ?[Sized][4],

§

### impl<T> [RefUnwindSafe][98] for [Json][6]<T>

where T: [RefUnwindSafe][98] \+ ?[Sized][4],

§

### impl<T> [Send][28] for [Json][6]<T>

where T: [Send][28] \+ ?[Sized][4],

§

### impl<T> [Sync][29] for [Json][6]<T>

where T: [Sync][29] \+ ?[Sized][4],

§

### impl<T> [Unpin][99] for [Json][6]<T>

where T: [Unpin][99] \+ ?[Sized][4],

§

### impl<T> [UnwindSafe][100] for [Json][6]<T>

where T: [UnwindSafe][100] \+ ?[Sized][4],

## Blanket Implementations§

[Source][101]§

### impl<T> [Any][102] for T

where T: 'static + ?[Sized][4],

[Source][103]§

#### fn [type_id][104](&self) -> [TypeId][105]

Gets the `TypeId` of `self`. [Read more][104]

[Source][106]§

### impl<T> [Borrow][107]<T> for T

where T: ?[Sized][4],

[Source][108]§

#### fn [borrow][109](&self) -> [&T][8]

Immutably borrows from an owned value. [Read more][109]

[Source][110]§

### impl<T> [BorrowMut][111]<T> for T

where T: ?[Sized][4],

[Source][112]§

#### fn [borrow_mut][113](&mut self) -> [&mut T][8]

Mutably borrows from an owned value. [Read more][113]

[Source][114]§

### impl<T> [CloneToUninit][115] for T

where T: [Clone][11],

[Source][116]§

#### unsafe fn [clone_to_uninit][117](&self, dest: [*mut ][118][u8][119])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][117]

§

### impl<Q, K> Comparable<K> for Q

where Q: [Ord][62] \+ ?[Sized][4], K: [Borrow][107]<Q> \+ ?[Sized][4],

§

#### fn compare(&self, key: [&K][8]) -> [Ordering][64]

Compare self to `key` and return their ordering.

§

### impl<Q, K> Equivalent<K> for Q

where Q: [Eq][95] \+ ?[Sized][4], K: [Borrow][107]<Q> \+ ?[Sized][4],

§

#### fn equivalent(&self, key: [&K][8]) -> [bool][73]

Compare self to `key` and return `true` if they are equal.

§

### impl<Q, K> Equivalent<K> for Q

where Q: [Eq][95] \+ ?[Sized][4], K: [Borrow][107]<Q> \+ ?[Sized][4],

§

#### fn equivalent(&self, key: [&K][8]) -> [bool][73]

Checks if this value is equivalent to the given key. Read more

[Source][120]§

### impl<T> [From][55]<[!][121]> for T

[Source][122]§

#### fn [from][56](t: [!][121]) -> T

Converts to this type from the input type.

[Source][123]§

### impl<T> [From][55]<T> for T

[Source][124]§

#### fn [from][56](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][125] [`Span`][126], returning an `Instrumented` wrapper. Read more

[Source][127]§

### impl<T, U> [Into][128]<U> for T

where U: [From][55]<T>,

[Source][129]§

#### fn [into][130](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][55]<T> for U` chooses to do.

[Source][131]§

### impl<T> [IntoEither][132] for T

[Source][133]§

#### fn [into_either][134](self, into_left: [bool][73]) -> [Either][135]<Self, Self> ⓘ

Converts `self` into a [`Left`][136] variant of [`Either<Self, Self>`][135] if `into_left` is `true`. Converts `self` into a [`Right`][137] variant of [`Either<Self, Self>`][135] otherwise. [Read more][134]

[Source][138]§

#### fn [into_either_with][139]<F>(self, into_left: F) -> [Either][135]<Self, Self> ⓘ

where F: [FnOnce][140](&Self) -> [bool][73],

Converts `self` into a [`Left`][136] variant of [`Either<Self, Self>`][135] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][137] variant of [`Either<Self, Self>`][135] otherwise. [Read more][139]

[Source][141]§

### impl<P, T> [Receiver][142] for P

where P: [Deref][32]<Target = T> \+ ?[Sized][4], T: ?[Sized][4],

[Source][143]§

#### type [Target][144] = T

🔬This is a nightly-only experimental API. (`arbitrary_self_types`)

The target type on which the method may be called.

[Source][145]§

### impl<T> [Same][146] for T

[Source][147]§

#### type [Output][148] = T

Should always be `Self`

[Source][149]§

### impl<T> [ToOwned][150] for T

where T: [Clone][11],

[Source][151]§

#### type [Owned][152] = T

The resulting type after obtaining ownership.

[Source][153]§

#### fn [to_owned][154](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][154]

[Source][155]§

#### fn [clone_into][156](&self, target: [&mut T][8])

Uses borrowed data to replace owned data, usually by cloning. [Read more][156]

[Source][157]§

### impl<T, U> [TryFrom][158]<U> for T

where U: [Into][128]<T>,

[Source][159]§

#### type [Error][160] = [Infallible][161]

The type returned in the event of a conversion error.

[Source][162]§

#### fn [try_from][163](value: U) -> [Result][18]<T, <T as [TryFrom][158]<U>>::[Error][164]>

Performs the conversion.

[Source][165]§

### impl<T, U> [TryInto][166]<U> for T

where U: [TryFrom][158]<T>,

[Source][167]§

#### type [Error][168] = <U as [TryFrom][158]<T>>::[Error][164]

The type returned in the event of a conversion error.

[Source][169]§

#### fn [try_into][170](self) -> [Result][18]<U, <U as [TryFrom][158]<T>>::[Error][164]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][128]<Dispatch>,

Attaches the provided [`Subscriber`][171] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][172] [`Subscriber`][171] to this type, returning a [`WithDispatch`] wrapper. Read more

[Source][173]§

### impl<T> [DeserializeOwned][174] for T

where T: for<'de> [Deserialize][23]<'de>,

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [5]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsMut.html (trait core::convert::AsMut)
   [6]: struct.Json.html (struct sqlx::types::Json)
   [7]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsMut.html#tymethod.as_mut
   [8]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [9]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [10]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html#tymethod.as_ref
   [11]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [12]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [13]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [14]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [15]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [16]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [17]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [18]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [19]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [20]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [21]: ../trait.Decode.html (trait sqlx::Decode)
   [22]: ../struct.Sqlite.html (struct sqlx::Sqlite)
   [23]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html (trait serde_core::de::Deserialize)
   [24]: ../trait.Decode.html#tymethod.decode
   [25]: ../sqlite/struct.SqliteValueRef.html (struct sqlx::sqlite::SqliteValueRef)
   [26]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [27]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [28]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [29]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [30]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [31]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [32]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html (trait core::ops::deref::Deref)
   [33]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#associatedtype.Target
   [34]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#tymethod.deref
   [35]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#associatedtype.Target (type core::ops::deref::Deref::Target)
   [36]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.DerefMut.html (trait core::ops::deref::DerefMut)
   [37]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.DerefMut.html#tymethod.deref_mut
   [38]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html#tymethod.deserialize
   [39]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html (trait serde_core::de::Deserializer)
   [40]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#associatedtype.Error (type serde_core::de::Deserializer::Error)
   [41]: ../trait.Encode.html (trait sqlx::Encode)
   [42]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [43]: ../trait.Encode.html#tymethod.encode_by_ref
   [44]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [45]: ../sqlite/enum.SqliteArgumentValue.html (enum sqlx::sqlite::SqliteArgumentValue)
   [46]: ../encode/enum.IsNull.html (enum sqlx::encode::IsNull)
   [47]: ../trait.Encode.html#method.encode
   [48]: ../trait.Database.html (trait sqlx::Database)
   [49]: ../trait.Database.html#associatedtype.ArgumentBuffer (type sqlx::Database::ArgumentBuffer)
   [50]: ../trait.Encode.html#method.produces
   [51]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [52]: ../trait.Database.html#associatedtype.TypeInfo (type sqlx::Database::TypeInfo)
   [53]: ../trait.Encode.html#method.size_hint
   [54]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [55]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [56]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [57]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html (trait core::hash::Hash)
   [58]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#tymethod.hash
   [59]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hasher.html (trait core::hash::Hasher)
   [60]: https://doc.rust-lang.org/1.94.1/src/core/hash/mod.rs.html#235-237
   [61]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#method.hash_slice
   [62]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html (trait core::cmp::Ord)
   [63]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#tymethod.cmp
   [64]: https://doc.rust-lang.org/1.94.1/core/cmp/enum.Ordering.html (enum core::cmp::Ordering)
   [65]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1025-1027
   [66]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#method.max
   [67]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1064-1066
   [68]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#method.min
   [69]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1090-1092
   [70]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#method.clamp
   [71]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [72]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [73]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [74]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [75]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [76]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html (trait core::cmp::PartialOrd)
   [77]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp
   [78]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1402
   [79]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.lt
   [80]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1420
   [81]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.le
   [82]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1438
   [83]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.gt
   [84]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1456
   [85]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.ge
   [86]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html#tymethod.serialize
   [87]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html (trait serde_core::ser::Serializer)
   [88]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Ok (type serde_core::ser::Serializer::Ok)
   [89]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Error (type serde_core::ser::Serializer::Error)
   [90]: ../trait.Type.html (trait sqlx::Type)
   [91]: ../trait.Type.html#tymethod.type_info
   [92]: ../sqlite/struct.SqliteTypeInfo.html (struct sqlx::sqlite::SqliteTypeInfo)
   [93]: ../trait.Type.html#method.compatible
   [94]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [95]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [96]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [97]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [98]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [99]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [100]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [101]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [102]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [103]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [104]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [105]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [106]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [107]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [108]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [109]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [110]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [111]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [112]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [113]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [114]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [115]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [116]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [117]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [118]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [119]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [120]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#802
   [121]: https://doc.rust-lang.org/1.94.1/std/primitive.never.html
   [122]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#803
   [123]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [124]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [125]: super::Span::current()
   [126]: crate::Span
   [127]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [128]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [129]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [130]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [131]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [132]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [133]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [134]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [135]: ../enum.Either.html (enum sqlx::Either)
   [136]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [137]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [138]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [139]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [140]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [141]: https://doc.rust-lang.org/1.94.1/src/core/ops/deref.rs.html#378-380
   [142]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Receiver.html (trait core::ops::deref::Receiver)
   [143]: https://doc.rust-lang.org/1.94.1/src/core/ops/deref.rs.html#382
   [144]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Receiver.html#associatedtype.Target
   [145]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [146]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [147]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [148]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [149]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [150]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [151]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [152]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [153]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [154]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [155]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [156]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [157]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [158]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [159]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [160]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [161]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [162]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [163]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [164]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [165]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [166]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [167]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [168]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [169]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [170]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [171]: super::Subscriber
   [172]: dispatcher#setting-the-default-subscriber
   [173]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#633
   [174]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)

