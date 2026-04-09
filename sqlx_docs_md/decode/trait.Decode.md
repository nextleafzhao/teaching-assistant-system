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

## [In sqlx::decode][2]

[sqlx][3]::[decode][2]

# Trait Decode Copy item path
[code]
    pub trait Decode<'r, DB>: [Sized][4]
    
    where
        DB: [Database][5],
    
    {
        // Required method
        fn decode(
            value: <DB as [Database][5]>::[ValueRef][6]<'r>,
        ) -> [Result][7]<Self, [Box][8]<dyn [Error][9] + [Send][10] + [Sync][11]>>;
    }
[/code]

Expand description

A type that can be decoded from the database.

### §How can I implement `Decode`?

A manual implementation of `Decode` can be useful when adding support for types externally to SQLx.

The following showcases how to implement `Decode` to be generic over [`Database`][5]. The implementation can be marginally simpler if you remove the `DB` type parameter and explicitly use the concrete [`ValueRef`][12] and [`TypeInfo`][13] types.
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

#### fn decode( value: <DB as [Database][5]>::[ValueRef][6]<'r>, ) -> [Result][7]<Self, [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

Decode a new value of this type using a raw value from the database.

## Dyn Compatibility§

This trait is **not** [dyn compatible][14].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementations on Foreign Types§

§

### impl [Decode][15]<'_, [Sqlite][16]> for [Box][8]<[str][17]>

§

#### fn decode( value: [SqliteValueRef][18]<'_>, ) -> [Result][7]<[Box][8]<[str][17]>, [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl [Decode][15]<'_, [Sqlite][16]> for [Box][8]<[[u8][19]]>

§

#### fn decode( value: [SqliteValueRef][18]<'_>, ) -> [Result][7]<[Box][8]<[[u8][19]]>, [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'a> [Decode][15]<'a, [Any][20]> for &'a [str][17]

§

#### fn decode( value: <[Any][20] as [Database][5]>::[ValueRef][6]<'a>, ) -> [Result][7]<&'a [str][17], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r> [Decode][15]<'r, [Any][20]> for &'r [[u8][19]]

§

#### fn decode( value: <[Any][20] as [Database][5]>::[ValueRef][6]<'r>, ) -> [Result][7]<&'r [[u8][19]], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r> [Decode][15]<'r, [Any][20]> for [bool][21]

§

#### fn decode( value: <[Any][20] as [Database][5]>::[ValueRef][6]<'r>, ) -> [Result][7]<[bool][21], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r> [Decode][15]<'r, [Any][20]> for [f32][22]

§

#### fn decode(value: [AnyValueRef][23]<'r>) -> [Result][7]<[f32][22], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r> [Decode][15]<'r, [Any][20]> for [f64][24]

§

#### fn decode( value: <[Any][20] as [Database][5]>::[ValueRef][6]<'r>, ) -> [Result][7]<[f64][24], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r> [Decode][15]<'r, [Any][20]> for [i16][25]

§

#### fn decode( value: <[Any][20] as [Database][5]>::[ValueRef][6]<'r>, ) -> [Result][7]<[i16][25], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r> [Decode][15]<'r, [Any][20]> for [i32][26]

§

#### fn decode( value: <[Any][20] as [Database][5]>::[ValueRef][6]<'r>, ) -> [Result][7]<[i32][26], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r> [Decode][15]<'r, [Any][20]> for [i64][27]

§

#### fn decode( value: <[Any][20] as [Database][5]>::[ValueRef][6]<'r>, ) -> [Result][7]<[i64][27], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r> [Decode][15]<'r, [Any][20]> for [String][28]

§

#### fn decode( value: <[Any][20] as [Database][5]>::[ValueRef][6]<'r>, ) -> [Result][7]<[String][28], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r> [Decode][15]<'r, [Any][20]> for [Vec][29]<[u8][19]>

§

#### fn decode( value: <[Any][20] as [Database][5]>::[ValueRef][6]<'r>, ) -> [Result][7]<[Vec][29]<[u8][19]>, [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r> [Decode][15]<'r, [Sqlite][16]> for &'r [str][17]

§

#### fn decode( value: [SqliteValueRef][18]<'r>, ) -> [Result][7]<&'r [str][17], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r> [Decode][15]<'r, [Sqlite][16]> for &'r [[u8][19]]

§

#### fn decode( value: [SqliteValueRef][18]<'r>, ) -> [Result][7]<&'r [[u8][19]], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r> [Decode][15]<'r, [Sqlite][16]> for [Cow][30]<'r, [str][17]>

§

#### fn decode( value: [SqliteValueRef][18]<'r>, ) -> [Result][7]<[Cow][30]<'r, [str][17]>, [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r> [Decode][15]<'r, [Sqlite][16]> for [bool][21]

§

#### fn decode( value: [SqliteValueRef][18]<'r>, ) -> [Result][7]<[bool][21], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r> [Decode][15]<'r, [Sqlite][16]> for [f32][22]

§

#### fn decode( value: [SqliteValueRef][18]<'r>, ) -> [Result][7]<[f32][22], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r> [Decode][15]<'r, [Sqlite][16]> for [f64][24]

§

#### fn decode( value: [SqliteValueRef][18]<'r>, ) -> [Result][7]<[f64][24], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r> [Decode][15]<'r, [Sqlite][16]> for [i8][31]

§

#### fn decode(value: [SqliteValueRef][18]<'r>) -> [Result][7]<[i8][31], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r> [Decode][15]<'r, [Sqlite][16]> for [i16][25]

§

#### fn decode( value: [SqliteValueRef][18]<'r>, ) -> [Result][7]<[i16][25], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r> [Decode][15]<'r, [Sqlite][16]> for [i32][26]

§

#### fn decode( value: [SqliteValueRef][18]<'r>, ) -> [Result][7]<[i32][26], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r> [Decode][15]<'r, [Sqlite][16]> for [i64][27]

§

#### fn decode( value: [SqliteValueRef][18]<'r>, ) -> [Result][7]<[i64][27], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r> [Decode][15]<'r, [Sqlite][16]> for [u8][19]

§

#### fn decode(value: [SqliteValueRef][18]<'r>) -> [Result][7]<[u8][19], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r> [Decode][15]<'r, [Sqlite][16]> for [u16][32]

§

#### fn decode( value: [SqliteValueRef][18]<'r>, ) -> [Result][7]<[u16][32], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r> [Decode][15]<'r, [Sqlite][16]> for [u32][33]

§

#### fn decode( value: [SqliteValueRef][18]<'r>, ) -> [Result][7]<[u32][33], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r> [Decode][15]<'r, [Sqlite][16]> for [u64][34]

§

#### fn decode( value: [SqliteValueRef][18]<'r>, ) -> [Result][7]<[u64][34], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r> [Decode][15]<'r, [Sqlite][16]> for [String][28]

§

#### fn decode( value: [SqliteValueRef][18]<'r>, ) -> [Result][7]<[String][28], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r> [Decode][15]<'r, [Sqlite][16]> for [Vec][29]<[u8][19]>

§

#### fn decode( value: [SqliteValueRef][18]<'r>, ) -> [Result][7]<[Vec][29]<[u8][19]>, [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r, DB> [Decode][15]<'r, DB> for [NonZero][35]<[i8][31]>

where DB: [Database][5], [i8][31]: [Decode][15]<'r, DB>,

§

#### fn decode( value: <DB as [Database][5]>::[ValueRef][6]<'r>, ) -> [Result][7]<[NonZero][35]<[i8][31]>, [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r, DB> [Decode][15]<'r, DB> for [NonZero][35]<[i16][25]>

where DB: [Database][5], [i16][25]: [Decode][15]<'r, DB>,

§

#### fn decode( value: <DB as [Database][5]>::[ValueRef][6]<'r>, ) -> [Result][7]<[NonZero][35]<[i16][25]>, [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r, DB> [Decode][15]<'r, DB> for [NonZero][35]<[i32][26]>

where DB: [Database][5], [i32][26]: [Decode][15]<'r, DB>,

§

#### fn decode( value: <DB as [Database][5]>::[ValueRef][6]<'r>, ) -> [Result][7]<[NonZero][35]<[i32][26]>, [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r, DB> [Decode][15]<'r, DB> for [NonZero][35]<[i64][27]>

where DB: [Database][5], [i64][27]: [Decode][15]<'r, DB>,

§

#### fn decode( value: <DB as [Database][5]>::[ValueRef][6]<'r>, ) -> [Result][7]<[NonZero][35]<[i64][27]>, [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r, DB> [Decode][15]<'r, DB> for [NonZero][35]<[u8][19]>

where DB: [Database][5], [u8][19]: [Decode][15]<'r, DB>,

§

#### fn decode( value: <DB as [Database][5]>::[ValueRef][6]<'r>, ) -> [Result][7]<[NonZero][35]<[u8][19]>, [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r, DB> [Decode][15]<'r, DB> for [NonZero][35]<[u16][32]>

where DB: [Database][5], [u16][32]: [Decode][15]<'r, DB>,

§

#### fn decode( value: <DB as [Database][5]>::[ValueRef][6]<'r>, ) -> [Result][7]<[NonZero][35]<[u16][32]>, [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r, DB> [Decode][15]<'r, DB> for [NonZero][35]<[u32][33]>

where DB: [Database][5], [u32][33]: [Decode][15]<'r, DB>,

§

#### fn decode( value: <DB as [Database][5]>::[ValueRef][6]<'r>, ) -> [Result][7]<[NonZero][35]<[u32][33]>, [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r, DB> [Decode][15]<'r, DB> for [NonZero][35]<[u64][34]>

where DB: [Database][5], [u64][34]: [Decode][15]<'r, DB>,

§

#### fn decode( value: <DB as [Database][5]>::[ValueRef][6]<'r>, ) -> [Result][7]<[NonZero][35]<[u64][34]>, [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'r, DB, T> [Decode][15]<'r, DB> for [Option][36]<T>

where DB: [Database][5], T: [Decode][15]<'r, DB>,

§

#### fn decode( value: <DB as [Database][5]>::[ValueRef][6]<'r>, ) -> [Result][7]<[Option][36]<T>, [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

## Implementors§

§

### impl<'r, DB> [Decode][15]<'r, DB> for &'r [RawValue][37]

where [Json][38]<&'r [RawValue][37]>: [Decode][15]<'r, DB>, DB: [Database][5],

§

### impl<'r, DB> [Decode][15]<'r, DB> for [Value][39]

where [Json][38]<[Value][39]>: [Decode][15]<'r, DB>, DB: [Database][5],

§

### impl<'r, T> [Decode][15]<'r, [Sqlite][16]> for [Json][38]<T>

where T: 'r + [Deserialize][40]<'r>,

§

### impl<'r, T> [Decode][15]<'r, [Sqlite][16]> for [Text][41]<T>

where T: [FromStr][42], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>: [From][43]<<T as [FromStr][42]>::[Err][44]>,

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [5]: ../trait.Database.html (trait sqlx::Database)
   [6]: ../trait.Database.html#associatedtype.ValueRef (type sqlx::Database::ValueRef)
   [7]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [8]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [9]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [10]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [11]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [12]: ../trait.Database.html#associatedtype.ValueRef (associated type sqlx::Database::ValueRef)
   [13]: ../trait.Database.html#associatedtype.TypeInfo (associated type sqlx::Database::TypeInfo)
   [14]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [15]: ../trait.Decode.html (trait sqlx::Decode)
   [16]: ../struct.Sqlite.html (struct sqlx::Sqlite)
   [17]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [18]: ../sqlite/struct.SqliteValueRef.html (struct sqlx::sqlite::SqliteValueRef)
   [19]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [20]: ../struct.Any.html (struct sqlx::Any)
   [21]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [22]: https://doc.rust-lang.org/1.94.1/std/primitive.f32.html
   [23]: ../any/struct.AnyValueRef.html (struct sqlx::any::AnyValueRef)
   [24]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html
   [25]: https://doc.rust-lang.org/1.94.1/std/primitive.i16.html
   [26]: https://doc.rust-lang.org/1.94.1/std/primitive.i32.html
   [27]: https://doc.rust-lang.org/1.94.1/std/primitive.i64.html
   [28]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [29]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [30]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [31]: https://doc.rust-lang.org/1.94.1/std/primitive.i8.html
   [32]: https://doc.rust-lang.org/1.94.1/std/primitive.u16.html
   [33]: https://doc.rust-lang.org/1.94.1/std/primitive.u32.html
   [34]: https://doc.rust-lang.org/1.94.1/std/primitive.u64.html
   [35]: https://doc.rust-lang.org/1.94.1/core/num/nonzero/struct.NonZero.html (struct core::num::nonzero::NonZero)
   [36]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [37]: ../types/struct.JsonRawValue.html (struct sqlx::types::JsonRawValue)
   [38]: ../types/struct.Json.html (struct sqlx::types::Json)
   [39]: ../types/enum.JsonValue.html (enum sqlx::types::JsonValue)
   [40]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html (trait serde_core::de::Deserialize)
   [41]: ../types/struct.Text.html (struct sqlx::types::Text)
   [42]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html (trait core::str::traits::FromStr)
   [43]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [44]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#associatedtype.Err (type core::str::traits::FromStr::Err)

