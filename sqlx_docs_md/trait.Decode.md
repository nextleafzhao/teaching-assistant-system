## Decode

## [sqlx][1]0.8.6

## Decode

### Sections

  * How can I implement `Decode`?



### Required Methods

  * decode



### Implementations on Foreign Types

  * &'a str
  * &'r [u8]
  * &'r [u8]
  * &'r str
  * Box<[u8]>
  * Box<str>
  * Cow<'r, str>
  * NonZero<i8>
  * NonZero<i16>
  * NonZero<i32>
  * NonZero<i64>
  * NonZero<u8>
  * NonZero<u16>
  * NonZero<u32>
  * NonZero<u64>
  * Option<T>
  * String
  * String
  * Vec<u8>
  * Vec<u8>
  * bool
  * bool
  * f32
  * f32
  * f64
  * f64
  * i8
  * i16
  * i16
  * i32
  * i32
  * i64
  * i64
  * u8
  * u16
  * u32
  * u64



### Dyn Compatibility

### Implementors

## [In crate sqlx][2]

[sqlx][2]

# Trait Decode Copy item path
[code]
    pub trait Decode<'r, DB>: [Sized][3]
    
    where
        DB: [Database][4],
    
    {
        // Required method
        fn decode(
            value: <DB as [Database][4]>::[ValueRef][5]<'r>,
        ) -> [Result][6]<Self, [Box][7]<dyn [Error][8] + [Send][9] + [Sync][10]>>;
    }
[/code]

Expand description

A type that can be decoded from the database.

### §How can I implement `Decode`?

A manual implementation of `Decode` can be useful when adding support for types externally to SQLx.

The following showcases how to implement `Decode` to be generic over [`Database`][4]. The implementation can be marginally simpler if you remove the `DB` type parameter and explicitly use the concrete [`ValueRef`][11] and [`TypeInfo`][12] types.
[code] 
    struct MyType;
    
    // DB is the database driver
    // `'r` is the lifetime of the `Row` being decoded
    impl<'r, DB: Database> Decode<'r, DB> for MyType
    where
        // we want to delegate some of the work to string decoding so let's make sure strings
        // are supported by the database
        &'r str: Decode<'r, DB>
    {
        fn decode(
            value: <DB as Database>::ValueRef<'r>,
        ) -> Result<MyType, Box<dyn Error + 'static + Send + Sync>> {
            // the interface of ValueRef is largely unstable at the moment
            // so this is not directly implementable
    
            // however, you can delegate to a type that matches the format of the type you want
            // to decode (such as a UTF-8 string)
    
            let value = <&str as Decode<DB>>::decode(value)?;
    
            // now you can parse this into your type (assuming there is a `FromStr`)
    
            Ok(value.parse()?)
        }
    }
[/code]

## Required Methods§

#### fn decode( value: <DB as [Database][4]>::[ValueRef][5]<'r>, ) -> [Result][6]<Self, [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

Decode a new value of this type using a raw value from the database.

## Dyn Compatibility§

This trait is **not** [dyn compatible][13].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementations on Foreign Types§

§

### impl [Decode][14]<'_, [Sqlite][15]> for [Box][7]<[str][16]>

§

#### fn decode( value: [SqliteValueRef][17]<'_>, ) -> [Result][6]<[Box][7]<[str][16]>, [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl [Decode][14]<'_, [Sqlite][15]> for [Box][7]<[[u8][18]]>

§

#### fn decode( value: [SqliteValueRef][17]<'_>, ) -> [Result][6]<[Box][7]<[[u8][18]]>, [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'a> [Decode][14]<'a, [Any][19]> for &'a [str][16]

§

#### fn decode( value: <[Any][19] as [Database][4]>::[ValueRef][5]<'a>, ) -> [Result][6]<&'a [str][16], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r> [Decode][14]<'r, [Any][19]> for &'r [[u8][18]]

§

#### fn decode( value: <[Any][19] as [Database][4]>::[ValueRef][5]<'r>, ) -> [Result][6]<&'r [[u8][18]], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r> [Decode][14]<'r, [Any][19]> for [bool][20]

§

#### fn decode( value: <[Any][19] as [Database][4]>::[ValueRef][5]<'r>, ) -> [Result][6]<[bool][20], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r> [Decode][14]<'r, [Any][19]> for [f32][21]

§

#### fn decode(value: [AnyValueRef][22]<'r>) -> [Result][6]<[f32][21], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r> [Decode][14]<'r, [Any][19]> for [f64][23]

§

#### fn decode( value: <[Any][19] as [Database][4]>::[ValueRef][5]<'r>, ) -> [Result][6]<[f64][23], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r> [Decode][14]<'r, [Any][19]> for [i16][24]

§

#### fn decode( value: <[Any][19] as [Database][4]>::[ValueRef][5]<'r>, ) -> [Result][6]<[i16][24], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r> [Decode][14]<'r, [Any][19]> for [i32][25]

§

#### fn decode( value: <[Any][19] as [Database][4]>::[ValueRef][5]<'r>, ) -> [Result][6]<[i32][25], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r> [Decode][14]<'r, [Any][19]> for [i64][26]

§

#### fn decode( value: <[Any][19] as [Database][4]>::[ValueRef][5]<'r>, ) -> [Result][6]<[i64][26], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r> [Decode][14]<'r, [Any][19]> for [String][27]

§

#### fn decode( value: <[Any][19] as [Database][4]>::[ValueRef][5]<'r>, ) -> [Result][6]<[String][27], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r> [Decode][14]<'r, [Any][19]> for [Vec][28]<[u8][18]>

§

#### fn decode( value: <[Any][19] as [Database][4]>::[ValueRef][5]<'r>, ) -> [Result][6]<[Vec][28]<[u8][18]>, [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r> [Decode][14]<'r, [Sqlite][15]> for &'r [str][16]

§

#### fn decode( value: [SqliteValueRef][17]<'r>, ) -> [Result][6]<&'r [str][16], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r> [Decode][14]<'r, [Sqlite][15]> for &'r [[u8][18]]

§

#### fn decode( value: [SqliteValueRef][17]<'r>, ) -> [Result][6]<&'r [[u8][18]], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r> [Decode][14]<'r, [Sqlite][15]> for [Cow][29]<'r, [str][16]>

§

#### fn decode( value: [SqliteValueRef][17]<'r>, ) -> [Result][6]<[Cow][29]<'r, [str][16]>, [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r> [Decode][14]<'r, [Sqlite][15]> for [bool][20]

§

#### fn decode( value: [SqliteValueRef][17]<'r>, ) -> [Result][6]<[bool][20], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r> [Decode][14]<'r, [Sqlite][15]> for [f32][21]

§

#### fn decode( value: [SqliteValueRef][17]<'r>, ) -> [Result][6]<[f32][21], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r> [Decode][14]<'r, [Sqlite][15]> for [f64][23]

§

#### fn decode( value: [SqliteValueRef][17]<'r>, ) -> [Result][6]<[f64][23], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r> [Decode][14]<'r, [Sqlite][15]> for [i8][30]

§

#### fn decode(value: [SqliteValueRef][17]<'r>) -> [Result][6]<[i8][30], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r> [Decode][14]<'r, [Sqlite][15]> for [i16][24]

§

#### fn decode( value: [SqliteValueRef][17]<'r>, ) -> [Result][6]<[i16][24], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r> [Decode][14]<'r, [Sqlite][15]> for [i32][25]

§

#### fn decode( value: [SqliteValueRef][17]<'r>, ) -> [Result][6]<[i32][25], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r> [Decode][14]<'r, [Sqlite][15]> for [i64][26]

§

#### fn decode( value: [SqliteValueRef][17]<'r>, ) -> [Result][6]<[i64][26], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r> [Decode][14]<'r, [Sqlite][15]> for [u8][18]

§

#### fn decode(value: [SqliteValueRef][17]<'r>) -> [Result][6]<[u8][18], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r> [Decode][14]<'r, [Sqlite][15]> for [u16][31]

§

#### fn decode( value: [SqliteValueRef][17]<'r>, ) -> [Result][6]<[u16][31], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r> [Decode][14]<'r, [Sqlite][15]> for [u32][32]

§

#### fn decode( value: [SqliteValueRef][17]<'r>, ) -> [Result][6]<[u32][32], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r> [Decode][14]<'r, [Sqlite][15]> for [u64][33]

§

#### fn decode( value: [SqliteValueRef][17]<'r>, ) -> [Result][6]<[u64][33], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r> [Decode][14]<'r, [Sqlite][15]> for [String][27]

§

#### fn decode( value: [SqliteValueRef][17]<'r>, ) -> [Result][6]<[String][27], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r> [Decode][14]<'r, [Sqlite][15]> for [Vec][28]<[u8][18]>

§

#### fn decode( value: [SqliteValueRef][17]<'r>, ) -> [Result][6]<[Vec][28]<[u8][18]>, [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r, DB> [Decode][14]<'r, DB> for [NonZero][34]<[i8][30]>

where DB: [Database][4], [i8][30]: [Decode][14]<'r, DB>,

§

#### fn decode( value: <DB as [Database][4]>::[ValueRef][5]<'r>, ) -> [Result][6]<[NonZero][34]<[i8][30]>, [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r, DB> [Decode][14]<'r, DB> for [NonZero][34]<[i16][24]>

where DB: [Database][4], [i16][24]: [Decode][14]<'r, DB>,

§

#### fn decode( value: <DB as [Database][4]>::[ValueRef][5]<'r>, ) -> [Result][6]<[NonZero][34]<[i16][24]>, [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r, DB> [Decode][14]<'r, DB> for [NonZero][34]<[i32][25]>

where DB: [Database][4], [i32][25]: [Decode][14]<'r, DB>,

§

#### fn decode( value: <DB as [Database][4]>::[ValueRef][5]<'r>, ) -> [Result][6]<[NonZero][34]<[i32][25]>, [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r, DB> [Decode][14]<'r, DB> for [NonZero][34]<[i64][26]>

where DB: [Database][4], [i64][26]: [Decode][14]<'r, DB>,

§

#### fn decode( value: <DB as [Database][4]>::[ValueRef][5]<'r>, ) -> [Result][6]<[NonZero][34]<[i64][26]>, [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r, DB> [Decode][14]<'r, DB> for [NonZero][34]<[u8][18]>

where DB: [Database][4], [u8][18]: [Decode][14]<'r, DB>,

§

#### fn decode( value: <DB as [Database][4]>::[ValueRef][5]<'r>, ) -> [Result][6]<[NonZero][34]<[u8][18]>, [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r, DB> [Decode][14]<'r, DB> for [NonZero][34]<[u16][31]>

where DB: [Database][4], [u16][31]: [Decode][14]<'r, DB>,

§

#### fn decode( value: <DB as [Database][4]>::[ValueRef][5]<'r>, ) -> [Result][6]<[NonZero][34]<[u16][31]>, [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r, DB> [Decode][14]<'r, DB> for [NonZero][34]<[u32][32]>

where DB: [Database][4], [u32][32]: [Decode][14]<'r, DB>,

§

#### fn decode( value: <DB as [Database][4]>::[ValueRef][5]<'r>, ) -> [Result][6]<[NonZero][34]<[u32][32]>, [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r, DB> [Decode][14]<'r, DB> for [NonZero][34]<[u64][33]>

where DB: [Database][4], [u64][33]: [Decode][14]<'r, DB>,

§

#### fn decode( value: <DB as [Database][4]>::[ValueRef][5]<'r>, ) -> [Result][6]<[NonZero][34]<[u64][33]>, [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'r, DB, T> [Decode][14]<'r, DB> for [Option][35]<T>

where DB: [Database][4], T: [Decode][14]<'r, DB>,

§

#### fn decode( value: <DB as [Database][4]>::[ValueRef][5]<'r>, ) -> [Result][6]<[Option][35]<T>, [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

## Implementors§

§

### impl<'r, DB> [Decode][14]<'r, DB> for &'r [RawValue][36]

where [Json][37]<&'r [RawValue][36]>: [Decode][14]<'r, DB>, DB: [Database][4],

§

### impl<'r, DB> [Decode][14]<'r, DB> for [Value][38]

where [Json][37]<[Value][38]>: [Decode][14]<'r, DB>, DB: [Database][4],

§

### impl<'r, T> [Decode][14]<'r, [Sqlite][15]> for [Json][37]<T>

where T: 'r + [Deserialize][39]<'r>,

§

### impl<'r, T> [Decode][14]<'r, [Sqlite][15]> for [Text][40]<T>

where T: [FromStr][41], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>: [From][42]<<T as [FromStr][41]>::[Err][43]>,

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [4]: trait.Database.html (trait sqlx::Database)
   [5]: trait.Database.html#associatedtype.ValueRef (type sqlx::Database::ValueRef)
   [6]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [7]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [8]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [9]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [10]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [11]: trait.Database.html#associatedtype.ValueRef (associated type sqlx::Database::ValueRef)
   [12]: trait.Database.html#associatedtype.TypeInfo (associated type sqlx::Database::TypeInfo)
   [13]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [14]: trait.Decode.html (trait sqlx::Decode)
   [15]: struct.Sqlite.html (struct sqlx::Sqlite)
   [16]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [17]: sqlite/struct.SqliteValueRef.html (struct sqlx::sqlite::SqliteValueRef)
   [18]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [19]: struct.Any.html (struct sqlx::Any)
   [20]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [21]: https://doc.rust-lang.org/1.94.1/std/primitive.f32.html
   [22]: any/struct.AnyValueRef.html (struct sqlx::any::AnyValueRef)
   [23]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html
   [24]: https://doc.rust-lang.org/1.94.1/std/primitive.i16.html
   [25]: https://doc.rust-lang.org/1.94.1/std/primitive.i32.html
   [26]: https://doc.rust-lang.org/1.94.1/std/primitive.i64.html
   [27]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [28]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [29]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [30]: https://doc.rust-lang.org/1.94.1/std/primitive.i8.html
   [31]: https://doc.rust-lang.org/1.94.1/std/primitive.u16.html
   [32]: https://doc.rust-lang.org/1.94.1/std/primitive.u32.html
   [33]: https://doc.rust-lang.org/1.94.1/std/primitive.u64.html
   [34]: https://doc.rust-lang.org/1.94.1/core/num/nonzero/struct.NonZero.html (struct core::num::nonzero::NonZero)
   [35]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [36]: types/struct.JsonRawValue.html (struct sqlx::types::JsonRawValue)
   [37]: types/struct.Json.html (struct sqlx::types::Json)
   [38]: types/enum.JsonValue.html (enum sqlx::types::JsonValue)
   [39]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html (trait serde_core::de::Deserialize)
   [40]: types/struct.Text.html (struct sqlx::types::Text)
   [41]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html (trait core::str::traits::FromStr)
   [42]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [43]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#associatedtype.Err (type core::str::traits::FromStr::Err)

