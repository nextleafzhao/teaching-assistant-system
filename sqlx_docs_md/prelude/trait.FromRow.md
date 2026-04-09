## FromRow

## [sqlx][1]0.8.6

## FromRow

### Sections

  * Derivable
    * Field attributes
  * Manual implementation



### Required Methods

  * from_row



### Implementations on Foreign Types

  * ()
  * (T1, T2)
  * (T1, T2, T3)
  * (T1, T2, T3, T4)
  * (T1, T2, T3, T4, T5)
  * (T1, T2, T3, T4, T5, T6)
  * (T1, T2, T3, T4, T5, T6, T7)
  * (T1, T2, T3, T4, T5, T6, T7, T8)
  * (T1, T2, T3, T4, T5, T6, T7, T8, T9)
  * (T1, T2, T3, T4, T5, T6, T7, T8, T9, T10)
  * (T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11)
  * (T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12)
  * (T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13)
  * (T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14)
  * (T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15)
  * (T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16)
  * (T1,)



### Dyn Compatibility

### Implementors

## [In sqlx::prelude][2]

[sqlx][3]::[prelude][2]

# Trait FromRow Copy item path
[code]
    pub trait FromRow<'r, R>: [Sized][4]
    
    where
        R: [Row][5],
    
    {
        // Required method
        fn from_row(row: [&'r R][6]) -> [Result][7]<Self, [Error][8]>;
    }
[/code]

Expand description

A record that can be built from a row returned by the database.

In order to use [`query_as`][9] the output type must implement `FromRow`.

### §Derivable

This trait can be derived by SQLx for any struct. The generated implementation will consist of a sequence of calls to [`Row::try_get`][10] using the name from each struct field.

ⓘ
[code]
    #[derive(sqlx::FromRow)]
    struct User {
        id: i32,
        name: String,
    }
[/code]

#### §Field attributes

Several attributes can be specified to customize how each column in a row is read:

##### §`rename`

When the name of a field in Rust does not match the name of its corresponding column, you can use the `rename` attribute to specify the name that the field has in the row. For example:

ⓘ
[code]
    #[derive(sqlx::FromRow)]
    struct User {
        id: i32,
        name: String,
        #[sqlx(rename = "description")]
        about_me: String
    }
[/code]

Given a query such as:
[code] 
    SELECT id, name, description FROM users;
[/code]

will read the content of the column `description` into the field `about_me`.

##### §`rename_all`

By default, field names are expected verbatim (with the exception of the raw identifier prefix `r#`, if present). Placed at the struct level, this attribute changes how the field name is mapped to its SQL column name:

ⓘ
[code]
    #[derive(sqlx::FromRow)]
    #[sqlx(rename_all = "camelCase")]
    struct UserPost {
        id: i32,
        // remapped to "userId"
        user_id: i32,
        contents: String
    }
[/code]

The supported values are `snake_case` (available if you have non-snake-case field names for some reason), `lowercase`, `UPPERCASE`, `camelCase`, `PascalCase`, `SCREAMING_SNAKE_CASE` and `kebab-case`. The styling of each option is intended to be an example of its behavior.

Case conversion is handled by the `heck` crate. See [its documentation][11] for details.

Note that numbers are _not_ considered separate words. For example, `Foo1` to snake case would be `foo1`, _not_ `foo_1`. See [this issue][12] for discussion.

##### §`default`

When your struct contains a field that is not present in your query, if the field type has an implementation for [`Default`][13], you can use the `default` attribute to assign the default value to said field. For example:

ⓘ
[code]
    #[derive(sqlx::FromRow)]
    struct User {
        id: i32,
        name: String,
        #[sqlx(default)]
        location: Option<String>
    }
[/code]

Given a query such as:
[code] 
    SELECT id, name FROM users;
[/code]

will set the value of the field `location` to the default value of `Option<String>`, which is `None`.

Moreover, if the struct has an implementation for [`Default`][13], you can use the `default` attribute at the struct level rather than for each single field. If a field does not appear in the result, its value is taken from the `Default` implementation for the struct. For example:

ⓘ
[code]
    #[derive(Default, sqlx::FromRow)]
    #[sqlx(default)]
    struct Options {
        option_a: Option<i32>,
        option_b: Option<String>,
        option_c: Option<bool>,
    }
[/code]

For a derived `Default` implementation this effectively populates each missing field with `Default::default()`, but a manual `Default` implementation can provide different placeholder values, if applicable.

This is similar to how `#[serde(default)]` behaves.

##### §`flatten`

If you want to handle a field that implements [`FromRow`][14], you can use the `flatten` attribute to specify that you want it to use [`FromRow`][14] for parsing rather than the usual method. For example:

ⓘ
[code]
    #[derive(sqlx::FromRow)]
    struct Address {
        country: String,
        city: String,
        road: String,
    }
    
    #[derive(sqlx::FromRow)]
    struct User {
        id: i32,
        name: String,
        #[sqlx(flatten)]
        address: Address,
    }
[/code]

Given a query such as:
[code] 
    SELECT id, name, country, city, road FROM users;
[/code]

This field is compatible with the `default` attribute.

##### §`skip`

This is a variant of the `default` attribute which instead always takes the value from the `Default` implementation for this field type ignoring any results in your query. This can be useful, if some field does not satifisfy the trait bounds (i.e. `sqlx::decode::Decode`, `sqlx::type::Type`), in particular in case of nested structures. For example:

ⓘ
[code]
    #[derive(sqlx::FromRow)]
    struct Address {
        user_name: String,
        street: String,
        city: String,
    }
    
    #[derive(sqlx::FromRow)]
    struct User {
        name: String,
        #[sqlx(skip)]
        addresses: Vec<Address>,
    }
[/code]

Then when querying into `User`, only `name` needs to be set:

ⓘ
[code]
    let user: User = sqlx::query_as("SELECT name FROM users")
       .fetch_one(&mut some_connection)
       .await?;
    
    // `Default` for `Vec<Address>` is an empty vector.
    assert!(user.addresses.is_empty());
[/code]

##### §`try_from`

When your struct contains a field whose type is not matched with the database type, if the field type has an implementation [`TryFrom`][15] for the database type, you can use the `try_from` attribute to convert the database type to the field type. For example:

ⓘ
[code]
    #[derive(sqlx::FromRow)]
    struct User {
        id: i32,
        name: String,
        #[sqlx(try_from = "i64")]
        bigIntInMySql: u64
    }
[/code]

Given a query such as:
[code] 
    SELECT id, name, bigIntInMySql FROM users;
[/code]

In MySql, `BigInt` type matches `i64`, but you can convert it to `u64` by `try_from`.

##### §`json`

If your database supports a JSON type, you can leverage `#[sqlx(json)]` to automatically integrate JSON deserialization in your [`FromRow`][14] implementation using [`serde`][16].

ⓘ
[code]
    #[derive(serde::Deserialize)]
    struct Data {
        field1: String,
        field2: u64
    }
    
    #[derive(sqlx::FromRow)]
    struct User {
        id: i32,
        name: String,
        #[sqlx(json)]
        metadata: Data
    }
[/code]

Given a query like the following:
[code] 
    SELECT
        1 AS id,
        'Name' AS name,
        JSON_OBJECT('field1', 'value1', 'field2', 42) AS metadata
[/code]

The `metadata` field will be deserialized used its `serde::Deserialize` implementation:

ⓘ
[code]
    User {
        id: 1,
        name: "Name",
        metadata: Data {
            field1: "value1",
            field2: 42
        }
    }
[/code]

By default the `#[sqlx(json)]` attribute will assume that the underlying database row is _not_ NULL. This can cause issues when your field type is an `Option<T>` because this would be represented as the _not_ NULL (in terms of DB) JSON value of `null`.

If you wish to describe a database row which _is_ NULLable but _cannot_ contain the JSON value `null`, use the `#[sqlx(json(nullable))]` attribute.

For example

ⓘ
[code]
    #[derive(serde::Deserialize)]
    struct Data {
        field1: String,
        field2: u64
    }
    
    #[derive(sqlx::FromRow)]
    struct User {
        id: i32,
        name: String,
        #[sqlx(json(nullable))]
        metadata: Option<Data>
    }
[/code]

Would describe a database field which _is_ NULLable but if it exists it must be the JSON representation of `Data` and cannot be the JSON value `null`

### §Manual implementation

You can also implement the [`FromRow`][14] trait by hand. This can be useful if you have a struct with a field that needs manual decoding:

ⓘ
[code]
    use sqlx::{FromRow, sqlite::SqliteRow, sqlx::Row};
    struct MyCustomType {
        custom: String,
    }
    
    struct Foo {
        bar: MyCustomType,
    }
    
    impl FromRow<'_, SqliteRow> for Foo {
        fn from_row(row: &SqliteRow) -> sqlx::Result<Self> {
            Ok(Self {
                bar: MyCustomType {
                    custom: row.try_get("custom")?
                }
            })
        }
    }
[/code]

## Required Methods§

#### fn from_row(row: [&'r R][6]) -> [Result][7]<Self, [Error][8]>

## Dyn Compatibility§

This trait is **not** [dyn compatible][17].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementations on Foreign Types§

§

### impl<'r, R> [FromRow][14]<'r, R> for [()][18]

where R: [Row][5],

§

#### fn from_row(_: [&'r R][6]) -> [Result][7]<[()][18], [Error][8]>

§

### impl<'r, R, T1> [FromRow][14]<'r, R> for [(T1,)][19]

where R: [Row][5], [usize][20]: [ColumnIndex][21]<R>, T1: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>,

§

#### fn from_row(row: [&'r R][6]) -> [Result][7]<[(T1,)][19], [Error][8]>

§

### impl<'r, R, T1, T2> [FromRow][14]<'r, R> for [(T1, T2)][19]

where R: [Row][5], [usize][20]: [ColumnIndex][21]<R>, T1: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T2: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>,

§

#### fn from_row(row: [&'r R][6]) -> [Result][7]<[(T1, T2)][19], [Error][8]>

§

### impl<'r, R, T1, T2, T3> [FromRow][14]<'r, R> for [(T1, T2, T3)][19]

where R: [Row][5], [usize][20]: [ColumnIndex][21]<R>, T1: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T2: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T3: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>,

§

#### fn from_row(row: [&'r R][6]) -> [Result][7]<[(T1, T2, T3)][19], [Error][8]>

§

### impl<'r, R, T1, T2, T3, T4> [FromRow][14]<'r, R> for [(T1, T2, T3, T4)][19]

where R: [Row][5], [usize][20]: [ColumnIndex][21]<R>, T1: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T2: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T3: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T4: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>,

§

#### fn from_row(row: [&'r R][6]) -> [Result][7]<[(T1, T2, T3, T4)][19], [Error][8]>

§

### impl<'r, R, T1, T2, T3, T4, T5> [FromRow][14]<'r, R> for [(T1, T2, T3, T4, T5)][19]

where R: [Row][5], [usize][20]: [ColumnIndex][21]<R>, T1: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T2: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T3: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T4: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T5: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>,

§

#### fn from_row(row: [&'r R][6]) -> [Result][7]<[(T1, T2, T3, T4, T5)][19], [Error][8]>

§

### impl<'r, R, T1, T2, T3, T4, T5, T6> [FromRow][14]<'r, R> for [(T1, T2, T3, T4, T5, T6)][19]

where R: [Row][5], [usize][20]: [ColumnIndex][21]<R>, T1: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T2: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T3: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T4: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T5: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T6: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>,

§

#### fn from_row(row: [&'r R][6]) -> [Result][7]<[(T1, T2, T3, T4, T5, T6)][19], [Error][8]>

§

### impl<'r, R, T1, T2, T3, T4, T5, T6, T7> [FromRow][14]<'r, R> for [(T1, T2, T3, T4, T5, T6, T7)][19]

where R: [Row][5], [usize][20]: [ColumnIndex][21]<R>, T1: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T2: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T3: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T4: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T5: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T6: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T7: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>,

§

#### fn from_row(row: [&'r R][6]) -> [Result][7]<[(T1, T2, T3, T4, T5, T6, T7)][19], [Error][8]>

§

### impl<'r, R, T1, T2, T3, T4, T5, T6, T7, T8> [FromRow][14]<'r, R> for [(T1, T2, T3, T4, T5, T6, T7, T8)][19]

where R: [Row][5], [usize][20]: [ColumnIndex][21]<R>, T1: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T2: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T3: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T4: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T5: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T6: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T7: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T8: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>,

§

#### fn from_row(row: [&'r R][6]) -> [Result][7]<[(T1, T2, T3, T4, T5, T6, T7, T8)][19], [Error][8]>

§

### impl<'r, R, T1, T2, T3, T4, T5, T6, T7, T8, T9> [FromRow][14]<'r, R> for [(T1, T2, T3, T4, T5, T6, T7, T8, T9)][19]

where R: [Row][5], [usize][20]: [ColumnIndex][21]<R>, T1: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T2: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T3: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T4: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T5: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T6: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T7: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T8: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T9: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>,

§

#### fn from_row(row: [&'r R][6]) -> [Result][7]<[(T1, T2, T3, T4, T5, T6, T7, T8, T9)][19], [Error][8]>

§

### impl<'r, R, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> [FromRow][14]<'r, R> for [(T1, T2, T3, T4, T5, T6, T7, T8, T9, T10)][19]

where R: [Row][5], [usize][20]: [ColumnIndex][21]<R>, T1: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T2: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T3: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T4: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T5: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T6: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T7: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T8: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T9: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T10: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>,

§

#### fn from_row( row: [&'r R][6], ) -> [Result][7]<[(T1, T2, T3, T4, T5, T6, T7, T8, T9, T10)][19], [Error][8]>

§

### impl<'r, R, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11> [FromRow][14]<'r, R> for [(T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11)][19]

where R: [Row][5], [usize][20]: [ColumnIndex][21]<R>, T1: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T2: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T3: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T4: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T5: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T6: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T7: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T8: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T9: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T10: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T11: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>,

§

#### fn from_row( row: [&'r R][6], ) -> [Result][7]<[(T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11)][19], [Error][8]>

§

### impl<'r, R, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12> [FromRow][14]<'r, R> for [(T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12)][19]

where R: [Row][5], [usize][20]: [ColumnIndex][21]<R>, T1: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T2: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T3: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T4: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T5: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T6: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T7: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T8: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T9: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T10: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T11: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T12: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>,

§

#### fn from_row( row: [&'r R][6], ) -> [Result][7]<[(T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12)][19], [Error][8]>

§

### impl<'r, R, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13> [FromRow][14]<'r, R> for [(T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13)][19]

where R: [Row][5], [usize][20]: [ColumnIndex][21]<R>, T1: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T2: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T3: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T4: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T5: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T6: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T7: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T8: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T9: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T10: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T11: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T12: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T13: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>,

§

#### fn from_row( row: [&'r R][6], ) -> [Result][7]<[(T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13)][19], [Error][8]>

§

### impl<'r, R, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14> [FromRow][14]<'r, R> for [(T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14)][19]

where R: [Row][5], [usize][20]: [ColumnIndex][21]<R>, T1: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T2: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T3: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T4: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T5: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T6: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T7: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T8: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T9: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T10: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T11: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T12: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T13: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T14: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>,

§

#### fn from_row( row: [&'r R][6], ) -> [Result][7]<[(T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14)][19], [Error][8]>

§

### impl<'r, R, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15> [FromRow][14]<'r, R> for [(T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15)][19]

where R: [Row][5], [usize][20]: [ColumnIndex][21]<R>, T1: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T2: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T3: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T4: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T5: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T6: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T7: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T8: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T9: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T10: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T11: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T12: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T13: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T14: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T15: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>,

§

#### fn from_row( row: [&'r R][6], ) -> [Result][7]<[(T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15)][19], [Error][8]>

§

### impl<'r, R, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16> [FromRow][14]<'r, R> for [(T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16)][19]

where R: [Row][5], [usize][20]: [ColumnIndex][21]<R>, T1: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T2: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T3: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T4: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T5: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T6: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T7: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T8: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T9: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T10: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T11: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T12: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T13: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T14: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T15: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>, T16: [Decode][22]<'r, <R as [Row][5]>::[Database][23]> \+ [Type][24]<<R as [Row][5]>::[Database][23]>,

§

#### fn from_row( row: [&'r R][6], ) -> [Result][7]<[(T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16)][19], [Error][8]>

## Implementors§

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [5]: ../trait.Row.html (trait sqlx::Row)
   [6]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [7]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [8]: ../enum.Error.html (enum sqlx::Error)
   [9]: crate::query_as
   [10]: ../trait.Row.html#method.try_get (method sqlx::Row::try_get)
   [11]: https://docs.rs/heck/0.5.0/heck/#definition-of-a-word-boundary
   [12]: https://github.com/launchbadge/sqlx/issues/3864
   [13]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [14]: ../trait.FromRow.html (trait sqlx::FromRow)
   [15]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [16]: https://docs.rs/serde/latest/serde/
   [17]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [18]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [19]: https://doc.rust-lang.org/1.94.1/std/primitive.tuple.html
   [20]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [21]: ../trait.ColumnIndex.html (trait sqlx::ColumnIndex)
   [22]: ../trait.Decode.html (trait sqlx::Decode)
   [23]: ../trait.Row.html#associatedtype.Database (type sqlx::Row::Database)
   [24]: ../trait.Type.html (trait sqlx::Type)

