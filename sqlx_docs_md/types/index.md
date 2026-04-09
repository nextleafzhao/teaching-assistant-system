## Module types

## [sqlx][1]0.8.6

## Module types

### Module Items

  * Structs
  * Enums
  * Traits



## [In crate sqlx][2]

[sqlx][2]

# Module types Copy item path

[Source][3]

Expand description

Conversions between Rust and SQL types.

To see how each SQL type maps to a Rust type, see the corresponding `types` module for each database:

  * Postgres: [postgres::types]
  * MySQL: [mysql::types]
  * SQLite: [sqlite::types][4]



Any external types that have had [`Type`][5] implemented for, are re-exported in this module for convenience as downstream users need to use a compatible version of the external crate to take advantage of the implementation.

## Structs§

[Json][6]
    Json for json and jsonb fields
[JsonRawValue][7]
    Reference to a range of bytes encompassing a single valid JSON value in the input data.
[Text][8]
    Map a SQL text value to/from a Rust type using [`Display`][9] and [`FromStr`][10].

## Enums§

[JsonValue][11]
    Represents any valid JSON value.

## Traits§

[Type][12]
    Indicates that a SQL type is supported for a database.

   [1]: ../../sqlx/index.html
   [2]: ../index.html
   [3]: ../../src/sqlx/lib.rs.html#124
   [4]: ../sqlite/types/index.html (mod sqlx::sqlite::types)
   [5]: ../trait.Type.html (trait sqlx::Type)
   [6]: struct.Json.html (struct sqlx::types::Json)
   [7]: struct.JsonRawValue.html (struct sqlx::types::JsonRawValue)
   [8]: struct.Text.html (struct sqlx::types::Text)
   [9]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [10]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html (trait core::str::traits::FromStr)
   [11]: enum.JsonValue.html (enum sqlx::types::JsonValue)
   [12]: trait.Type.html (trait sqlx::types::Type)

