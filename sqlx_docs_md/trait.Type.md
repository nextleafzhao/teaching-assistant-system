## Type

## [sqlx][1]0.8.6

## Type

### Sections

  * Compile-time verification
  * Derivable
    * Transparent
    * Enumeration
    * Records



### Required Methods

  * type_info



### Provided Methods

  * compatible



### Implementations on Foreign Types

  * &T
  * Box<[u8]>
  * Box<str>
  * Cow<'_, str>
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
  * [u8]
  * [u8]
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
  * str
  * str
  * u8
  * u16
  * u32
  * u64



### Dyn Compatibility

### Implementors

## [In crate sqlx][2]

[sqlx][2]

# Trait Type Copy item path
[code]
    pub trait Type<DB>
    
    where
        DB: [Database][3],
    
    {
        // Required method
        fn type_info() -> <DB as [Database][3]>::[TypeInfo][4];
    
        // Provided method
        fn compatible(ty: &<DB as [Database][3]>::[TypeInfo][4]) -> [bool][5] { ... }
    }
[/code]

Expand description

Indicates that a SQL type is supported for a database.

### §Compile-time verification

Type definitions are _not_ verified against the database at compile-time. The [`query!()`][6] macros have no implicit knowledge of user-defined types.

When using custom types in query parameters or output columns with `query!()`, the use of [type overrides][7] is required.

ⓘ
[code]
    struct MyUser { id: UserId, name: String }
    
    // fetch all properties from user and override the type in Rust for `id`
    let user = query_as!(MyUser, r#"SELECT users.*, id as "id: UserId" FROM users"#)
        .fetch_one(&pool).await?;
[/code]

### §Derivable

This trait can be derived by SQLx to support Rust-only wrapper types, enumerations, and (for postgres) structured records. Additionally, an implementation of [`Encode`][8] and [`Decode`][9] is generated.

#### §Transparent

Rust-only domain wrappers around SQL types. The generated implementations directly delegate to the implementation of the inner type.

ⓘ
[code]
    #[derive(sqlx::Type)]
    #[sqlx(transparent)]
    struct UserId(i64);
[/code]

###### §Note: `PgHasArrayType`

If you have the `postgres` feature enabled, this derive also generates a `PgHasArrayType` impl so that you may use it with `Vec` and other types that decode from an array in Postgres:

ⓘ
[code]
    let user_ids: Vec<UserId> = sqlx::query_scalar("select '{ 123, 456 }'::int8[]")
       .fetch(&mut pg_connection)
       .await?;
[/code]

However, if you are wrapping a type that does not implement `PgHasArrayType` (e.g. `Vec` itself, because we don’t currently support multidimensional arrays), you may receive an error:

ⓘ
[code]
    #[derive(sqlx::Type)] // ERROR: `Vec<i64>` does not implement `PgHasArrayType`
    #[sqlx(transparent)]
    struct UserIds(Vec<i64>);
[/code]

To remedy this, add `#[sqlx(no_pg_array)]`, which disables the generation of the `PgHasArrayType` impl:

ⓘ
[code]
    #[derive(sqlx::Type)]
    #[sqlx(transparent, no_pg_array)]
    struct UserIds(Vec<i64>);
[/code]

###### §Attributes

  * `#[sqlx(type_name = "<SQL type name>")]` on struct definition: instead of inferring the SQL type name from the inner field (in the above case, `BIGINT`), explicitly set it to `<SQL type name>` instead. May trigger errors or unexpected behavior if the encoding of the given type is different than that of the inferred type (e.g. if you rename the above to `VARCHAR`). Affects Postgres only.
  * `#[sqlx(rename_all = "<strategy>")]` on struct definition: See [`derive docs in FromRow`][10]
  * `#[sqlx(no_pg_array)]`: do not emit a `PgHasArrayType` impl (see above).



#### §Enumeration

Enumerations may be defined in Rust and can match SQL by integer discriminant or variant name.

With `#[repr(_)]` the integer representation is used when converting from/to SQL and expects that SQL type (e.g., `INT`). Without, the names of the variants are used instead and expects a textual SQL type (e.g., `VARCHAR`, `TEXT`).

ⓘ
[code]
    #[derive(sqlx::Type)]
    #[repr(i32)]
    enum Color { Red = 1, Green = 2, Blue = 3 }
[/code]

ⓘ
[code]
    #[derive(sqlx::Type)]
    #[sqlx(type_name = "color")] // only for PostgreSQL to match a type definition
    #[sqlx(rename_all = "lowercase")]
    enum Color { Red, Green, Blue }
[/code]

#### §Records

User-defined composite types are supported through deriving a `struct`.

This is only supported for PostgreSQL.

ⓘ
[code]
    #[derive(sqlx::Type)]
    #[sqlx(type_name = "interface_type")]
    struct InterfaceType {
        name: String,
        supplier_id: i32,
        price: f64
    }
[/code]

## Required Methods§

#### fn type_info() -> <DB as [Database][3]>::[TypeInfo][4]

Returns the canonical SQL type for this Rust type.

When binding arguments, this is used to tell the database what is about to be sent; which, the database then uses to guide query plans. This can be overridden by `Encode::produces`.

A map of SQL types to Rust types is populated with this and used to determine the type that is returned from the anonymous struct type from `query!`.

## Provided Methods§

#### fn compatible(ty: &<DB as [Database][3]>::[TypeInfo][4]) -> [bool][5]

Determines if this Rust type is compatible with the given SQL type.

When decoding values from a row, this method is checked to determine if we should continue or raise a runtime type mismatch error.

When binding arguments with `query!` or `query_as!`, this method is consulted to determine if the Rust type is acceptable.

Defaults to checking [`TypeInfo::type_compatible()`][11].

## Dyn Compatibility§

This trait is **not** [dyn compatible][12].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementations on Foreign Types§

§

### impl [Type][13]<[Any][14]> for [bool][5]

§

#### fn type_info() -> [AnyTypeInfo][15]

§

### impl [Type][13]<[Any][14]> for [f32][16]

§

#### fn type_info() -> [AnyTypeInfo][15]

§

### impl [Type][13]<[Any][14]> for [f64][17]

§

#### fn type_info() -> [AnyTypeInfo][15]

§

### impl [Type][13]<[Any][14]> for [i16][18]

§

#### fn type_info() -> [AnyTypeInfo][15]

§

#### fn compatible(ty: &[AnyTypeInfo][15]) -> [bool][5]

§

### impl [Type][13]<[Any][14]> for [i32][19]

§

#### fn type_info() -> [AnyTypeInfo][15]

§

#### fn compatible(ty: &[AnyTypeInfo][15]) -> [bool][5]

§

### impl [Type][13]<[Any][14]> for [i64][20]

§

#### fn type_info() -> [AnyTypeInfo][15]

§

#### fn compatible(ty: &[AnyTypeInfo][15]) -> [bool][5]

§

### impl [Type][13]<[Any][14]> for [str][21]

§

#### fn type_info() -> [AnyTypeInfo][15]

§

### impl [Type][13]<[Any][14]> for [String][22]

§

#### fn type_info() -> [AnyTypeInfo][15]

§

### impl [Type][13]<[Any][14]> for [Vec][23]<[u8][24]>

§

#### fn type_info() -> [AnyTypeInfo][15]

§

### impl [Type][13]<[Any][14]> for [[u8][24]]

§

#### fn type_info() -> [AnyTypeInfo][15]

§

### impl [Type][13]<[Sqlite][25]> for [Cow][26]<'_, [str][21]>

§

#### fn type_info() -> [SqliteTypeInfo][27]

§

#### fn compatible(ty: &[SqliteTypeInfo][27]) -> [bool][5]

§

### impl [Type][13]<[Sqlite][25]> for [bool][5]

§

#### fn type_info() -> [SqliteTypeInfo][27]

§

#### fn compatible(ty: &[SqliteTypeInfo][27]) -> [bool][5]

§

### impl [Type][13]<[Sqlite][25]> for [f32][16]

§

#### fn type_info() -> [SqliteTypeInfo][27]

§

### impl [Type][13]<[Sqlite][25]> for [f64][17]

§

#### fn type_info() -> [SqliteTypeInfo][27]

§

### impl [Type][13]<[Sqlite][25]> for [i8][28]

§

#### fn type_info() -> [SqliteTypeInfo][27]

§

#### fn compatible(ty: &[SqliteTypeInfo][27]) -> [bool][5]

§

### impl [Type][13]<[Sqlite][25]> for [i16][18]

§

#### fn type_info() -> [SqliteTypeInfo][27]

§

#### fn compatible(ty: &[SqliteTypeInfo][27]) -> [bool][5]

§

### impl [Type][13]<[Sqlite][25]> for [i32][19]

§

#### fn type_info() -> [SqliteTypeInfo][27]

§

#### fn compatible(ty: &[SqliteTypeInfo][27]) -> [bool][5]

§

### impl [Type][13]<[Sqlite][25]> for [i64][20]

§

#### fn type_info() -> [SqliteTypeInfo][27]

§

#### fn compatible(ty: &[SqliteTypeInfo][27]) -> [bool][5]

§

### impl [Type][13]<[Sqlite][25]> for [str][21]

§

#### fn type_info() -> [SqliteTypeInfo][27]

§

### impl [Type][13]<[Sqlite][25]> for [u8][24]

§

#### fn type_info() -> [SqliteTypeInfo][27]

§

#### fn compatible(ty: &[SqliteTypeInfo][27]) -> [bool][5]

§

### impl [Type][13]<[Sqlite][25]> for [u16][29]

§

#### fn type_info() -> [SqliteTypeInfo][27]

§

#### fn compatible(ty: &[SqliteTypeInfo][27]) -> [bool][5]

§

### impl [Type][13]<[Sqlite][25]> for [u32][30]

§

#### fn type_info() -> [SqliteTypeInfo][27]

§

#### fn compatible(ty: &[SqliteTypeInfo][27]) -> [bool][5]

§

### impl [Type][13]<[Sqlite][25]> for [u64][31]

§

#### fn type_info() -> [SqliteTypeInfo][27]

§

#### fn compatible(ty: &[SqliteTypeInfo][27]) -> [bool][5]

§

### impl [Type][13]<[Sqlite][25]> for [Box][32]<[str][21]>

§

#### fn type_info() -> [SqliteTypeInfo][27]

§

### impl [Type][13]<[Sqlite][25]> for [Box][32]<[[u8][24]]>

§

#### fn type_info() -> [SqliteTypeInfo][27]

§

#### fn compatible(ty: &[SqliteTypeInfo][27]) -> [bool][5]

§

### impl [Type][13]<[Sqlite][25]> for [String][22]

§

#### fn type_info() -> [SqliteTypeInfo][27]

§

### impl [Type][13]<[Sqlite][25]> for [Vec][23]<[u8][24]>

§

#### fn type_info() -> [SqliteTypeInfo][27]

§

#### fn compatible(ty: &[SqliteTypeInfo][27]) -> [bool][5]

§

### impl [Type][13]<[Sqlite][25]> for [[u8][24]]

§

#### fn type_info() -> [SqliteTypeInfo][27]

§

#### fn compatible(ty: &[SqliteTypeInfo][27]) -> [bool][5]

§

### impl<DB> [Type][13]<DB> for [NonZero][33]<[i8][28]>

where DB: [Database][3], [i8][28]: [Type][13]<DB>,

§

#### fn type_info() -> <DB as [Database][3]>::[TypeInfo][4]

§

#### fn compatible(ty: &<DB as [Database][3]>::[TypeInfo][4]) -> [bool][5]

§

### impl<DB> [Type][13]<DB> for [NonZero][33]<[i16][18]>

where DB: [Database][3], [i16][18]: [Type][13]<DB>,

§

#### fn type_info() -> <DB as [Database][3]>::[TypeInfo][4]

§

#### fn compatible(ty: &<DB as [Database][3]>::[TypeInfo][4]) -> [bool][5]

§

### impl<DB> [Type][13]<DB> for [NonZero][33]<[i32][19]>

where DB: [Database][3], [i32][19]: [Type][13]<DB>,

§

#### fn type_info() -> <DB as [Database][3]>::[TypeInfo][4]

§

#### fn compatible(ty: &<DB as [Database][3]>::[TypeInfo][4]) -> [bool][5]

§

### impl<DB> [Type][13]<DB> for [NonZero][33]<[i64][20]>

where DB: [Database][3], [i64][20]: [Type][13]<DB>,

§

#### fn type_info() -> <DB as [Database][3]>::[TypeInfo][4]

§

#### fn compatible(ty: &<DB as [Database][3]>::[TypeInfo][4]) -> [bool][5]

§

### impl<DB> [Type][13]<DB> for [NonZero][33]<[u8][24]>

where DB: [Database][3], [u8][24]: [Type][13]<DB>,

§

#### fn type_info() -> <DB as [Database][3]>::[TypeInfo][4]

§

#### fn compatible(ty: &<DB as [Database][3]>::[TypeInfo][4]) -> [bool][5]

§

### impl<DB> [Type][13]<DB> for [NonZero][33]<[u16][29]>

where DB: [Database][3], [u16][29]: [Type][13]<DB>,

§

#### fn type_info() -> <DB as [Database][3]>::[TypeInfo][4]

§

#### fn compatible(ty: &<DB as [Database][3]>::[TypeInfo][4]) -> [bool][5]

§

### impl<DB> [Type][13]<DB> for [NonZero][33]<[u32][30]>

where DB: [Database][3], [u32][30]: [Type][13]<DB>,

§

#### fn type_info() -> <DB as [Database][3]>::[TypeInfo][4]

§

#### fn compatible(ty: &<DB as [Database][3]>::[TypeInfo][4]) -> [bool][5]

§

### impl<DB> [Type][13]<DB> for [NonZero][33]<[u64][31]>

where DB: [Database][3], [u64][31]: [Type][13]<DB>,

§

#### fn type_info() -> <DB as [Database][3]>::[TypeInfo][4]

§

#### fn compatible(ty: &<DB as [Database][3]>::[TypeInfo][4]) -> [bool][5]

§

### impl<T, DB> [Type][13]<DB> for [Option][34]<T>

where T: [Type][13]<DB>, DB: [Database][3],

§

#### fn type_info() -> <DB as [Database][3]>::[TypeInfo][4]

§

#### fn compatible(ty: &<DB as [Database][3]>::[TypeInfo][4]) -> [bool][5]

§

### impl<T, DB> [Type][13]<DB> for [&T][35]

where T: [Type][13]<DB> \+ ?[Sized][36], DB: [Database][3],

§

#### fn type_info() -> <DB as [Database][3]>::[TypeInfo][4]

§

#### fn compatible(ty: &<DB as [Database][3]>::[TypeInfo][4]) -> [bool][5]

## Implementors§

§

### impl<DB> [Type][13]<DB> for [Value][37]

where [Json][38]<[Value][37]>: [Type][13]<DB>, DB: [Database][3],

§

### impl<DB> [Type][13]<DB> for [RawValue][39]

where [Json][38]<&'a [RawValue][39]>: for<'a> [Type][13]<DB>, DB: [Database][3],

§

### impl<T> [Type][13]<[Sqlite][25]> for [Json][38]<T>

§

### impl<T> [Type][13]<[Sqlite][25]> for [Text][40]<T>

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: trait.Database.html (trait sqlx::Database)
   [4]: trait.Database.html#associatedtype.TypeInfo (type sqlx::Database::TypeInfo)
   [5]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [6]: macro.query.html
   [7]: macro.query.html#type-overrides-bind-parameters-postgres-only
   [8]: trait.Encode.html (trait sqlx::Encode)
   [9]: trait.Decode.html (trait sqlx::Decode)
   [10]: trait.FromRow.html#rename_all (trait sqlx::FromRow)
   [11]: trait.TypeInfo.html#method.type_compatible (method sqlx::TypeInfo::type_compatible)
   [12]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [13]: trait.Type.html (trait sqlx::Type)
   [14]: struct.Any.html (struct sqlx::Any)
   [15]: any/struct.AnyTypeInfo.html (struct sqlx::any::AnyTypeInfo)
   [16]: https://doc.rust-lang.org/1.94.1/std/primitive.f32.html
   [17]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html
   [18]: https://doc.rust-lang.org/1.94.1/std/primitive.i16.html
   [19]: https://doc.rust-lang.org/1.94.1/std/primitive.i32.html
   [20]: https://doc.rust-lang.org/1.94.1/std/primitive.i64.html
   [21]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [22]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [23]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [24]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [25]: struct.Sqlite.html (struct sqlx::Sqlite)
   [26]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [27]: sqlite/struct.SqliteTypeInfo.html (struct sqlx::sqlite::SqliteTypeInfo)
   [28]: https://doc.rust-lang.org/1.94.1/std/primitive.i8.html
   [29]: https://doc.rust-lang.org/1.94.1/std/primitive.u16.html
   [30]: https://doc.rust-lang.org/1.94.1/std/primitive.u32.html
   [31]: https://doc.rust-lang.org/1.94.1/std/primitive.u64.html
   [32]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [33]: https://doc.rust-lang.org/1.94.1/core/num/nonzero/struct.NonZero.html (struct core::num::nonzero::NonZero)
   [34]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [35]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [36]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [37]: types/enum.JsonValue.html (enum sqlx::types::JsonValue)
   [38]: types/struct.Json.html (struct sqlx::types::Json)
   [39]: types/struct.JsonRawValue.html (struct sqlx::types::JsonRawValue)
   [40]: types/struct.Text.html (struct sqlx::types::Text)

