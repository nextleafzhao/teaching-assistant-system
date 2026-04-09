## SqliteTransaction

## [sqlx][1]0.8.6

## SqliteTransaction

### Aliased Type

## [In sqlx::sqlite][2]

[sqlx][3]::[sqlite][2]

# Type Alias SqliteTransaction Copy item path
[code]
    pub type SqliteTransaction<'c> = [Transaction][4]<'c, [Sqlite][5]>;
[/code]

Expand description

An alias for [`Transaction`][4], specialized for SQLite.

## Aliased Type§
[code]
    pub struct SqliteTransaction<'c> { /* private fields */ }
[/code]

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../struct.Transaction.html (struct sqlx::Transaction)
   [5]: ../struct.Sqlite.html (struct sqlx::Sqlite)

