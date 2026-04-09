## Module prelude

## [sqlx][1]0.8.6

## Module prelude

### Module Items

  * Traits
  * Derive Macros



## [In crate sqlx][2]

[sqlx][2]

# Module prelude Copy item path

[Source][3]

Expand description

Convenience re-export of common traits.

## Traits§

[Acquire][4]
    Acquire connections or transactions from a database in a generic way.
[ConnectOptions][5]
[Connection][6]
    Represents a single database connection.
[Decode][7]
    A type that can be decoded from the database.
[Encode][8]
    Encode a single value to be sent to the database.
[Executor][9]
    A type that contains or can provide a database connection to use for executing queries against the database.
[FromRow][10]
    A record that can be built from a row returned by the database.
[IntoArguments][11]
[Row][12]
    Represents a single row from the database.
[Statement][13]
    An explicitly prepared statement.
[Type][14]
    Indicates that a SQL type is supported for a database.

## Derive Macros§

[Decode][15]
[Encode][16]
[FromRow][17]
[Type][18]

   [1]: ../../sqlx/index.html
   [2]: ../index.html
   [3]: ../../src/sqlx/lib.rs.html#162
   [4]: trait.Acquire.html (trait sqlx::prelude::Acquire)
   [5]: trait.ConnectOptions.html (trait sqlx::prelude::ConnectOptions)
   [6]: trait.Connection.html (trait sqlx::prelude::Connection)
   [7]: trait.Decode.html (trait sqlx::prelude::Decode)
   [8]: trait.Encode.html (trait sqlx::prelude::Encode)
   [9]: trait.Executor.html (trait sqlx::prelude::Executor)
   [10]: trait.FromRow.html (trait sqlx::prelude::FromRow)
   [11]: trait.IntoArguments.html (trait sqlx::prelude::IntoArguments)
   [12]: trait.Row.html (trait sqlx::prelude::Row)
   [13]: trait.Statement.html (trait sqlx::prelude::Statement)
   [14]: trait.Type.html (trait sqlx::prelude::Type)
   [15]: derive.Decode.html (derive sqlx::prelude::Decode)
   [16]: derive.Encode.html (derive sqlx::prelude::Encode)
   [17]: derive.FromRow.html (derive sqlx::prelude::FromRow)
   [18]: derive.Type.html (derive sqlx::prelude::Type)

