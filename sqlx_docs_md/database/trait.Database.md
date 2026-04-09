## Database

## [sqlx][1]0.8.6

## Database

### Required Associated Constants

  * NAME
  * URL_SCHEMES



### Required Associated Types

  * ArgumentBuffer
  * Arguments
  * Column
  * Connection
  * QueryResult
  * Row
  * Statement
  * TransactionManager
  * TypeInfo
  * Value
  * ValueRef



### Dyn Compatibility

### Implementors

## [In sqlx::database][2]

[sqlx][3]::[database][2]

# Trait Database Copy item path
[code]
    pub trait Database:
        [Sized][4]
        + 'static
        + [Send][5]
        + [Debug][6] {
        type Connection: [Connection][7]<Database = Self>;
        type TransactionManager: TransactionManager<Database = Self>;
        type Row: [Row][8]<Database = Self>;
        type QueryResult: 'static + [Send][5] + [Sync][9] + [Default][10] + [Extend][11]<Self::[QueryResult][12]>;
        type Column: [Column][13]<Database = Self>;
        type TypeInfo: [TypeInfo][14];
        type Value: [Value][15]<Database = Self> + 'static;
        type ValueRef<'r>: [ValueRef][16]<'r, Database = Self>;
        type Arguments<'q>: [Arguments][17]<'q, Database = Self>;
        type ArgumentBuffer<'q>;
        type Statement<'q>: [Statement][18]<'q, Database = Self>;
    Show 2 associated constants and 0 method
        const NAME: &'static [str][19];
        const URL_SCHEMES: &'static [&'static [str][19]];
    }
[/code]

Expand description

A database driver.

This trait encapsulates a complete set of traits that implement a driver for a specific database (e.g., MySQL, PostgreSQL).

## Required Associated Constants§

#### const NAME: &'static [str][19]

The display name for this database driver.

#### const URL_SCHEMES: &'static [&'static [str][19]]

The schemes for database URLs that should match this driver.

## Required Associated Types§

#### type Connection: [Connection][7]<Database = Self>

The concrete `Connection` implementation for this database.

#### type TransactionManager: TransactionManager<Database = Self>

The concrete `TransactionManager` implementation for this database.

#### type Row: [Row][8]<Database = Self>

The concrete `Row` implementation for this database.

#### type QueryResult: 'static + [Send][5] \+ [Sync][9] \+ [Default][10] \+ [Extend][11]<Self::[QueryResult][12]>

The concrete `QueryResult` implementation for this database.

#### type Column: [Column][13]<Database = Self>

The concrete `Column` implementation for this database.

#### type TypeInfo: [TypeInfo][14]

The concrete `TypeInfo` implementation for this database.

#### type Value: [Value][15]<Database = Self> \+ 'static

The concrete type used to hold an owned copy of the not-yet-decoded value that was received from the database.

#### type ValueRef<'r>: [ValueRef][16]<'r, Database = Self>

The concrete type used to hold a reference to the not-yet-decoded value that has just been received from the database.

#### type Arguments<'q>: [Arguments][17]<'q, Database = Self>

The concrete `Arguments` implementation for this database.

#### type ArgumentBuffer<'q>

The concrete type used as a buffer for arguments while encoding.

#### type Statement<'q>: [Statement][18]<'q, Database = Self>

The concrete `Statement` implementation for this database.

## Dyn Compatibility§

This trait is **not** [dyn compatible][20].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementors§

§

### impl [Database][21] for [Any][22]

§

#### const NAME: &'static [str][19] = "Any"

§

#### const URL_SCHEMES: &'static [&'static [str][19]]

§

#### type Connection = [AnyConnection][23]

§

#### type TransactionManager = [AnyTransactionManager][24]

§

#### type Row = [AnyRow][25]

§

#### type QueryResult = [AnyQueryResult][26]

§

#### type Column = AnyColumn

§

#### type TypeInfo = [AnyTypeInfo][27]

§

#### type Value = [AnyValue][28]

§

#### type ValueRef<'r> = [AnyValueRef][29]<'r>

§

#### type Arguments<'q> = [AnyArguments][30]<'q>

§

#### type ArgumentBuffer<'q> = AnyArgumentBuffer<'q>

§

#### type Statement<'q> = [AnyStatement][31]<'q>

§

### impl [Database][21] for [Sqlite][32]

§

#### const NAME: &'static [str][19] = "SQLite"

§

#### const URL_SCHEMES: &'static [&'static [str][19]]

§

#### type Connection = [SqliteConnection][33]

§

#### type TransactionManager = [SqliteTransactionManager][34]

§

#### type Row = [SqliteRow][35]

§

#### type QueryResult = [SqliteQueryResult][36]

§

#### type Column = [SqliteColumn][37]

§

#### type TypeInfo = [SqliteTypeInfo][38]

§

#### type Value = [SqliteValue][39]

§

#### type ValueRef<'r> = [SqliteValueRef][40]<'r>

§

#### type Arguments<'q> = [SqliteArguments][41]<'q>

§

#### type ArgumentBuffer<'q> = [Vec][42]<[SqliteArgumentValue][43]<'q>>

§

#### type Statement<'q> = [SqliteStatement][44]<'q>

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [5]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [6]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [7]: ../trait.Connection.html (trait sqlx::Connection)
   [8]: ../trait.Row.html (trait sqlx::Row)
   [9]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [10]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [11]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.Extend.html (trait core::iter::traits::collect::Extend)
   [12]: ../trait.Database.html#associatedtype.QueryResult (type sqlx::Database::QueryResult)
   [13]: ../trait.Column.html (trait sqlx::Column)
   [14]: ../trait.TypeInfo.html (trait sqlx::TypeInfo)
   [15]: ../trait.Value.html (trait sqlx::Value)
   [16]: ../trait.ValueRef.html (trait sqlx::ValueRef)
   [17]: ../trait.Arguments.html (trait sqlx::Arguments)
   [18]: ../trait.Statement.html (trait sqlx::Statement)
   [19]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [20]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [21]: ../trait.Database.html (trait sqlx::Database)
   [22]: ../struct.Any.html (struct sqlx::Any)
   [23]: ../struct.AnyConnection.html (struct sqlx::AnyConnection)
   [24]: ../any/struct.AnyTransactionManager.html (struct sqlx::any::AnyTransactionManager)
   [25]: ../any/struct.AnyRow.html (struct sqlx::any::AnyRow)
   [26]: ../any/struct.AnyQueryResult.html (struct sqlx::any::AnyQueryResult)
   [27]: ../any/struct.AnyTypeInfo.html (struct sqlx::any::AnyTypeInfo)
   [28]: ../any/struct.AnyValue.html (struct sqlx::any::AnyValue)
   [29]: ../any/struct.AnyValueRef.html (struct sqlx::any::AnyValueRef)
   [30]: ../any/struct.AnyArguments.html (struct sqlx::any::AnyArguments)
   [31]: ../any/struct.AnyStatement.html (struct sqlx::any::AnyStatement)
   [32]: ../struct.Sqlite.html (struct sqlx::Sqlite)
   [33]: ../struct.SqliteConnection.html (struct sqlx::SqliteConnection)
   [34]: ../sqlite/struct.SqliteTransactionManager.html (struct sqlx::sqlite::SqliteTransactionManager)
   [35]: ../sqlite/struct.SqliteRow.html (struct sqlx::sqlite::SqliteRow)
   [36]: ../sqlite/struct.SqliteQueryResult.html (struct sqlx::sqlite::SqliteQueryResult)
   [37]: ../sqlite/struct.SqliteColumn.html (struct sqlx::sqlite::SqliteColumn)
   [38]: ../sqlite/struct.SqliteTypeInfo.html (struct sqlx::sqlite::SqliteTypeInfo)
   [39]: ../sqlite/struct.SqliteValue.html (struct sqlx::sqlite::SqliteValue)
   [40]: ../sqlite/struct.SqliteValueRef.html (struct sqlx::sqlite::SqliteValueRef)
   [41]: ../sqlite/struct.SqliteArguments.html (struct sqlx::sqlite::SqliteArguments)
   [42]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [43]: ../sqlite/enum.SqliteArgumentValue.html (enum sqlx::sqlite::SqliteArgumentValue)
   [44]: ../sqlite/struct.SqliteStatement.html (struct sqlx::sqlite::SqliteStatement)

