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

## [In sqlx::types][2]

[sqlx][3]::[types][2]

# Trait Type Copy item path
[code]
    pub trait Type<DB>
    
    where
        DB: [Database][4],
    
    {
        // Required method
        fn type_info() -> <DB as [Database][4]>::[TypeInfo][5];
    
        // Provided method
        fn compatible(ty: &<DB as [Database][4]>::[TypeInfo][5]) -> [bool][6] { ... }
    }
[/code]

Expand description

Indicates that a SQL type is supported for a database.

### §Compile-time verification

Type definitions are _not_ verified against the database at compile-time. The [`query!()`][7] macros have no implicit knowledge of user-defined types.

When using custom types in query parameters or output columns with `query!()`, the use of [type overrides][8] is required.

ⓘ
[code]
    struct MyUser { id: UserId, name: String }
    
    // fetch all properties from user and override the type in Rust for `id`
    let user = query_as!(MyUser, r#"SELECT users.*, id as "id: UserId" FROM users"#)
        .fetch_one(&pool).await?;
[/code]

### §Derivable

This trait can be derived by SQLx to support Rust-only wrapper types, enumerations, and (for postgres) structured records. Additionally, an implementation of [`Encode`][9] and [`Decode`][10] is generated.

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
  * `#[sqlx(rename_all = "<strategy>")]` on struct definition: See [`derive docs in FromRow`][11]
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

#### fn type_info() -> <DB as [Database][4]>::[TypeInfo][5]

Returns the canonical SQL type for this Rust type.

When binding arguments, this is used to tell the database what is about to be sent; which, the database then uses to guide query plans. This can be overridden by `Encode::produces`.

A map of SQL types to Rust types is populated with this and used to determine the type that is returned from the anonymous struct type from `query!`.

## Provided Methods§

#### fn compatible(ty: &<DB as [Database][4]>::[TypeInfo][5]) -> [bool][6]

Determines if this Rust type is compatible with the given SQL type.

When decoding values from a row, this method is checked to determine if we should continue or raise a runtime type mismatch error.

When binding arguments with `query!` or `query_as!`, this method is consulted to determine if the Rust type is acceptable.

Defaults to checking [`TypeInfo::type_compatible()`][12].

## Dyn Compatibility§

This trait is **not** [dyn compatible][13].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementations on Foreign Types§

§

### impl [Type][14]<[Any][15]> for [bool][6]

§

#### fn type_info() -> [AnyTypeInfo][16]

§

### impl [Type][14]<[Any][15]> for [f32][17]

§

#### fn type_info() -> [AnyTypeInfo][16]

§

### impl [Type][14]<[Any][15]> for [f64][18]

§

#### fn type_info() -> [AnyTypeInfo][16]

§

### impl [Type][14]<[Any][15]> for [i16][19]

§

#### fn type_info() -> [AnyTypeInfo][16]

§

#### fn compatible(ty: &[AnyTypeInfo][16]) -> [bool][6]

§

### impl [Type][14]<[Any][15]> for [i32][20]

§

#### fn type_info() -> [AnyTypeInfo][16]

§

#### fn compatible(ty: &[AnyTypeInfo][16]) -> [bool][6]

§

### impl [Type][14]<[Any][15]> for [i64][21]

§

#### fn type_info() -> [AnyTypeInfo][16]

§

#### fn compatible(ty: &[AnyTypeInfo][16]) -> [bool][6]

§

### impl [Type][14]<[Any][15]> for [str][22]

§

#### fn type_info() -> [AnyTypeInfo][16]

§

### impl [Type][14]<[Any][15]> for [String][23]

§

#### fn type_info() -> [AnyTypeInfo][16]

§

### impl [Type][14]<[Any][15]> for [Vec][24]<[u8][25]>

§

#### fn type_info() -> [AnyTypeInfo][16]

§

### impl [Type][14]<[Any][15]> for [[u8][25]]

§

#### fn type_info() -> [AnyTypeInfo][16]

§

### impl [Type][14]<[Sqlite][26]> for [Cow][27]<'_, [str][22]>

§

#### fn type_info() -> [SqliteTypeInfo][28]

§

#### fn compatible(ty: &[SqliteTypeInfo][28]) -> [bool][6]

§

### impl [Type][14]<[Sqlite][26]> for [bool][6]

§

#### fn type_info() -> [SqliteTypeInfo][28]

§

#### fn compatible(ty: &[SqliteTypeInfo][28]) -> [bool][6]

§

### impl [Type][14]<[Sqlite][26]> for [f32][17]

§

#### fn type_info() -> [SqliteTypeInfo][28]

§

### impl [Type][14]<[Sqlite][26]> for [f64][18]

§

#### fn type_info() -> [SqliteTypeInfo][28]

§

### impl [Type][14]<[Sqlite][26]> for [i8][29]

§

#### fn type_info() -> [SqliteTypeInfo][28]

§

#### fn compatible(ty: &[SqliteTypeInfo][28]) -> [bool][6]

§

### impl [Type][14]<[Sqlite][26]> for [i16][19]

§

#### fn type_info() -> [SqliteTypeInfo][28]

§

#### fn compatible(ty: &[SqliteTypeInfo][28]) -> [bool][6]

§

### impl [Type][14]<[Sqlite][26]> for [i32][20]

§

#### fn type_info() -> [SqliteTypeInfo][28]

§

#### fn compatible(ty: &[SqliteTypeInfo][28]) -> [bool][6]

§

### impl [Type][14]<[Sqlite][26]> for [i64][21]

§

#### fn type_info() -> [SqliteTypeInfo][28]

§

#### fn compatible(ty: &[SqliteTypeInfo][28]) -> [bool][6]

§

### impl [Type][14]<[Sqlite][26]> for [str][22]

§

#### fn type_info() -> [SqliteTypeInfo][28]

§

### impl [Type][14]<[Sqlite][26]> for [u8][25]

§

#### fn type_info() -> [SqliteTypeInfo][28]

§

#### fn compatible(ty: &[SqliteTypeInfo][28]) -> [bool][6]

§

### impl [Type][14]<[Sqlite][26]> for [u16][30]

§

#### fn type_info() -> [SqliteTypeInfo][28]

§

#### fn compatible(ty: &[SqliteTypeInfo][28]) -> [bool][6]

§

### impl [Type][14]<[Sqlite][26]> for [u32][31]

§

#### fn type_info() -> [SqliteTypeInfo][28]

§

#### fn compatible(ty: &[SqliteTypeInfo][28]) -> [bool][6]

§

### impl [Type][14]<[Sqlite][26]> for [u64][32]

§

#### fn type_info() -> [SqliteTypeInfo][28]

§

#### fn compatible(ty: &[SqliteTypeInfo][28]) -> [bool][6]

§

### impl [Type][14]<[Sqlite][26]> for [Box][33]<[str][22]>

§

#### fn type_info() -> [SqliteTypeInfo][28]

§

### impl [Type][14]<[Sqlite][26]> for [Box][33]<[[u8][25]]>

§

#### fn type_info() -> [SqliteTypeInfo][28]

§

#### fn compatible(ty: &[SqliteTypeInfo][28]) -> [bool][6]

§

### impl [Type][14]<[Sqlite][26]> for [String][23]

§

#### fn type_info() -> [SqliteTypeInfo][28]

§

### impl [Type][14]<[Sqlite][26]> for [Vec][24]<[u8][25]>

§

#### fn type_info() -> [SqliteTypeInfo][28]

§

#### fn compatible(ty: &[SqliteTypeInfo][28]) -> [bool][6]

§

### impl [Type][14]<[Sqlite][26]> for [[u8][25]]

§

#### fn type_info() -> [SqliteTypeInfo][28]

§

#### fn compatible(ty: &[SqliteTypeInfo][28]) -> [bool][6]

§

### impl<DB> [Type][14]<DB> for [NonZero][34]<[i8][29]>

where DB: [Database][4], [i8][29]: [Type][14]<DB>,

§

#### fn type_info() -> <DB as [Database][4]>::[TypeInfo][5]

§

#### fn compatible(ty: &<DB as [Database][4]>::[TypeInfo][5]) -> [bool][6]

§

### impl<DB> [Type][14]<DB> for [NonZero][34]<[i16][19]>

where DB: [Database][4], [i16][19]: [Type][14]<DB>,

§

#### fn type_info() -> <DB as [Database][4]>::[TypeInfo][5]

§

#### fn compatible(ty: &<DB as [Database][4]>::[TypeInfo][5]) -> [bool][6]

§

### impl<DB> [Type][14]<DB> for [NonZero][34]<[i32][20]>

where DB: [Database][4], [i32][20]: [Type][14]<DB>,

§

#### fn type_info() -> <DB as [Database][4]>::[TypeInfo][5]

§

#### fn compatible(ty: &<DB as [Database][4]>::[TypeInfo][5]) -> [bool][6]

§

### impl<DB> [Type][14]<DB> for [NonZero][34]<[i64][21]>

where DB: [Database][4], [i64][21]: [Type][14]<DB>,

§

#### fn type_info() -> <DB as [Database][4]>::[TypeInfo][5]

§

#### fn compatible(ty: &<DB as [Database][4]>::[TypeInfo][5]) -> [bool][6]

§

### impl<DB> [Type][14]<DB> for [NonZero][34]<[u8][25]>

where DB: [Database][4], [u8][25]: [Type][14]<DB>,

§

#### fn type_info() -> <DB as [Database][4]>::[TypeInfo][5]

§

#### fn compatible(ty: &<DB as [Database][4]>::[TypeInfo][5]) -> [bool][6]

§

### impl<DB> [Type][14]<DB> for [NonZero][34]<[u16][30]>

where DB: [Database][4], [u16][30]: [Type][14]<DB>,

§

#### fn type_info() -> <DB as [Database][4]>::[TypeInfo][5]

§

#### fn compatible(ty: &<DB as [Database][4]>::[TypeInfo][5]) -> [bool][6]

§

### impl<DB> [Type][14]<DB> for [NonZero][34]<[u32][31]>

where DB: [Database][4], [u32][31]: [Type][14]<DB>,

§

#### fn type_info() -> <DB as [Database][4]>::[TypeInfo][5]

§

#### fn compatible(ty: &<DB as [Database][4]>::[TypeInfo][5]) -> [bool][6]

§

### impl<DB> [Type][14]<DB> for [NonZero][34]<[u64][32]>

where DB: [Database][4], [u64][32]: [Type][14]<DB>,

§

#### fn type_info() -> <DB as [Database][4]>::[TypeInfo][5]

§

#### fn compatible(ty: &<DB as [Database][4]>::[TypeInfo][5]) -> [bool][6]

§

### impl<T, DB> [Type][14]<DB> for [Option][35]<T>

where T: [Type][14]<DB>, DB: [Database][4],

§

#### fn type_info() -> <DB as [Database][4]>::[TypeInfo][5]

§

#### fn compatible(ty: &<DB as [Database][4]>::[TypeInfo][5]) -> [bool][6]

§

### impl<T, DB> [Type][14]<DB> for [&T][36]

where T: [Type][14]<DB> \+ ?[Sized][37], DB: [Database][4],

§

#### fn type_info() -> <DB as [Database][4]>::[TypeInfo][5]

§

#### fn compatible(ty: &<DB as [Database][4]>::[TypeInfo][5]) -> [bool][6]

## Implementors§

§

### impl<DB> [Type][14]<DB> for [Value][38]

where [Json][39]<[Value][38]>: [Type][14]<DB>, DB: [Database][4],

§

### impl<DB> [Type][14]<DB> for [RawValue][40]

where [Json][39]<&'a [RawValue][40]>: for<'a> [Type][14]<DB>, DB: [Database][4],

§

### impl<T> [Type][14]<[Sqlite][26]> for [Json][39]<T>

§

### impl<T> [Type][14]<[Sqlite][26]> for [Text][41]<T>

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../trait.Database.html (trait sqlx::Database)
   [5]: ../trait.Database.html#associatedtype.TypeInfo (type sqlx::Database::TypeInfo)
   [6]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [7]: macro.query.html
   [8]: macro.query.html#type-overrides-bind-parameters-postgres-only
   [9]: ../trait.Encode.html (trait sqlx::Encode)
   [10]: ../trait.Decode.html (trait sqlx::Decode)
   [11]: ../trait.FromRow.html#rename_all (trait sqlx::FromRow)
   [12]: ../trait.TypeInfo.html#method.type_compatible (method sqlx::TypeInfo::type_compatible)
   [13]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [14]: ../trait.Type.html (trait sqlx::Type)
   [15]: ../struct.Any.html (struct sqlx::Any)
   [16]: ../any/struct.AnyTypeInfo.html (struct sqlx::any::AnyTypeInfo)
   [17]: https://doc.rust-lang.org/1.94.1/std/primitive.f32.html
   [18]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html
   [19]: https://doc.rust-lang.org/1.94.1/std/primitive.i16.html
   [20]: https://doc.rust-lang.org/1.94.1/std/primitive.i32.html
   [21]: https://doc.rust-lang.org/1.94.1/std/primitive.i64.html
   [22]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [23]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [24]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [25]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [26]: ../struct.Sqlite.html (struct sqlx::Sqlite)
   [27]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [28]: ../sqlite/struct.SqliteTypeInfo.html (struct sqlx::sqlite::SqliteTypeInfo)
   [29]: https://doc.rust-lang.org/1.94.1/std/primitive.i8.html
   [30]: https://doc.rust-lang.org/1.94.1/std/primitive.u16.html
   [31]: https://doc.rust-lang.org/1.94.1/std/primitive.u32.html
   [32]: https://doc.rust-lang.org/1.94.1/std/primitive.u64.html
   [33]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [34]: https://doc.rust-lang.org/1.94.1/core/num/nonzero/struct.NonZero.html (struct core::num::nonzero::NonZero)
   [35]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [36]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [37]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [38]: enum.JsonValue.html (enum sqlx::types::JsonValue)
   [39]: struct.Json.html (struct sqlx::types::Json)
   [40]: struct.JsonRawValue.html (struct sqlx::types::JsonRawValue)
   [41]: struct.Text.html (struct sqlx::types::Text)

