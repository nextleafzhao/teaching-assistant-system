## Module database

## [sqlx][1]0.8.6

## Module database

### Sections

  * Support
    * Tier 1
    * Tier 2
  * `Any`
    * Example



### Module Items

  * Traits



## [In crate sqlx][2]

[sqlx][2]

# Module database Copy item path

Expand description

Traits to represent a database driver.

## §Support

### §Tier 1

Tier 1 support can be thought of as “guaranteed to work”. Automated testing is setup to ensure a high level of stability and functionality.

| Database                  | Version       | Driver                                |
|---------------------------|---------------|---------------------------------------|
| [MariaDB][3]              | 10.1+         | [`mysql`][4]                          |
| [Microsoft SQL Server][5] | 2019          | [`mssql`][6] (Pending a full rewrite) |
| [MySQL][7]                | 5.6, 5.7, 8.0 | [`mysql`][4]                          |
| [PostgreSQL][8]           | 9.5+          | [`postgres`][9]                       |
| [SQLite][10]              | 3.20.1+       | [`sqlite`][11]                        |



### §Tier 2

Tier 2 support can be thought as “should work”. No specific automated testing is done, at this time, but there are efforts to ensure compatibility. Tier 2 support also includes database distributions that provide protocols that closely match a database from Tier 1.

_No databases are in tier 2 at this time._

## §`Any`

Selecting a database driver is, by default, a compile-time decision. SQLx is designed this way to take full advantage of the performance and type safety made available by Rust.

We recognize that you may wish to make a runtime decision to decide the database driver. The [`Any`][12] driver is provided for that purpose.

### §Example

ⓘ
[code]
    // connect to SQLite
    let conn = AnyConnection::connect("sqlite://file.db").await?;
    
    // connect to Postgres, no code change
    // required, decided by the scheme of the URL
    let conn = AnyConnection::connect("postgres://localhost/sqlx").await?;
[/code]

## Traits§

[Database][13]
    A database driver.
[HasStatementCache][14]
    A [`Database`][15] that maintains a client-side cache of prepared statements.

   [1]: ../../sqlx/index.html
   [2]: ../index.html
   [3]: https://mariadb.com/
   [4]: crate::mysql
   [5]: https://www.microsoft.com/en-us/sql-server
   [6]: crate::mssql
   [7]: https://www.mysql.com/
   [8]: https://www.postgresql.org/
   [9]: crate::postgres
   [10]: https://www.sqlite.org/
   [11]: crate::sqlite
   [12]: crate::any
   [13]: trait.Database.html (trait sqlx::database::Database)
   [14]: trait.HasStatementCache.html (trait sqlx::database::HasStatementCache)
   [15]: ../trait.Database.html (trait sqlx::Database)

