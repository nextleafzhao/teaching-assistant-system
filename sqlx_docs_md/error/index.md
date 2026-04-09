## Module error

## [sqlx][1]0.8.6

## Module error

### Module Items

  * Structs
  * Enums
  * Traits
  * Functions
  * Type Aliases



## [In crate sqlx][2]

[sqlx][2]

# Module error Copy item path

Expand description

Types for working with errors produced by SQLx.

## Structs§

[UnexpectedNullError][3]
    An unexpected `NULL` was encountered during decoding.

## Enums§

[Error][4]
    Represents all the ways a method can fail within SQLx.
[ErrorKind][5]
    The error kind.

## Traits§

[DatabaseError][6]
    An error that was returned from the database.

## Functions§

[mismatched_types][7]

## Type Aliases§

[BoxDynError][8]
[Result][9]
    A specialized `Result` type for SQLx.

   [1]: ../../sqlx/index.html
   [2]: ../index.html
   [3]: struct.UnexpectedNullError.html (struct sqlx::error::UnexpectedNullError)
   [4]: enum.Error.html (enum sqlx::error::Error)
   [5]: enum.ErrorKind.html (enum sqlx::error::ErrorKind)
   [6]: trait.DatabaseError.html (trait sqlx::error::DatabaseError)
   [7]: fn.mismatched_types.html (fn sqlx::error::mismatched_types)
   [8]: type.BoxDynError.html (type sqlx::error::BoxDynError)
   [9]: type.Result.html (type sqlx::error::Result)

