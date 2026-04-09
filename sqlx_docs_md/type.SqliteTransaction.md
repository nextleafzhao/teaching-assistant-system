## SqliteTransaction

## [sqlx][1]0.8.6

## SqliteTransaction

### Aliased Type

## [In crate sqlx][2]

[sqlx][2]

# Type Alias SqliteTransaction Copy item path
[code]
    pub type SqliteTransaction<'c> = [Transaction][3]<'c, [Sqlite][4]>;
[/code]

Expand description

An alias for [`Transaction`][3], specialized for SQLite.

## Aliased Type§
[code]
    pub struct SqliteTransaction<'c> { /* private fields */ }
[/code]

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: struct.Transaction.html (struct sqlx::Transaction)
   [4]: struct.Sqlite.html (struct sqlx::Sqlite)

