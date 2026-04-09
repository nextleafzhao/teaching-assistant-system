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

## [In crate sqlx][2]

[sqlx][2]

# Trait Database Copy item path
[code]
    pub trait Database:
        [Sized][3]
        + 'static
        + [Send][4]
        + [Debug][5] {
        type Connection: [Connection][6]<Database = Self>;
        type TransactionManager: TransactionManager<Database = Self>;
        type Row: [Row][7]<Database = Self>;
        type QueryResult: 'static + [Send][4] + [Sync][8] + [Default][9] + [Extend][10]<Self::[QueryResult][11]>;
        type Column: [Column][12]<Database = Self>;
        type TypeInfo: [TypeInfo][13];
        type Value: [Value][14]<Database = Self> + 'static;
        type ValueRef<'r>: [ValueRef][15]<'r, Database = Self>;
        type Arguments<'q>: [Arguments][16]<'q, Database = Self>;
        type ArgumentBuffer<'q>;
        type Statement<'q>: [Statement][17]<'q, Database = Self>;
    Show 2 associated constants and 0 method
        const NAME: &'static [str][18];
        const URL_SCHEMES: &'static [&'static [str][18]];
    }
[/code]

Expand description

A database driver.

This trait encapsulates a complete set of traits that implement a driver for a specific database (e.g., MySQL, PostgreSQL).

## Required Associated Constants§

#### const NAME: &'static [str][18]

The display name for this database driver.

#### const URL_SCHEMES: &'static [&'static [str][18]]

The schemes for database URLs that should match this driver.

## Required Associated Types§

#### type Connection: [Connection][6]<Database = Self>

The concrete `Connection` implementation for this database.

#### type TransactionManager: TransactionManager<Database = Self>

The concrete `TransactionManager` implementation for this database.

#### type Row: [Row][7]<Database = Self>

The concrete `Row` implementation for this database.

#### type QueryResult: 'static + [Send][4] \+ [Sync][8] \+ [Default][9] \+ [Extend][10]<Self::[QueryResult][11]>

The concrete `QueryResult` implementation for this database.

#### type Column: [Column][12]<Database = Self>

The concrete `Column` implementation for this database.

#### type TypeInfo: [TypeInfo][13]

The concrete `TypeInfo` implementation for this database.

#### type Value: [Value][14]<Database = Self> \+ 'static

The concrete type used to hold an owned copy of the not-yet-decoded value that was received from the database.

#### type ValueRef<'r>: [ValueRef][15]<'r, Database = Self>

The concrete type used to hold a reference to the not-yet-decoded value that has just been received from the database.

#### type Arguments<'q>: [Arguments][16]<'q, Database = Self>

The concrete `Arguments` implementation for this database.

#### type ArgumentBuffer<'q>

The concrete type used as a buffer for arguments while encoding.

#### type Statement<'q>: [Statement][17]<'q, Database = Self>

The concrete `Statement` implementation for this database.

## Dyn Compatibility§

This trait is **not** [dyn compatible][19].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementors§

§

### impl [Database][20] for [Any][21]

§

#### const NAME: &'static [str][18] = "Any"

§

#### const URL_SCHEMES: &'static [&'static [str][18]]

§

#### type Connection = [AnyConnection][22]

§

#### type TransactionManager = [AnyTransactionManager][23]

§

#### type Row = [AnyRow][24]

§

#### type QueryResult = [AnyQueryResult][25]

§

#### type Column = AnyColumn

§

#### type TypeInfo = [AnyTypeInfo][26]

§

#### type Value = [AnyValue][27]

§

#### type ValueRef<'r> = [AnyValueRef][28]<'r>

§

#### type Arguments<'q> = [AnyArguments][29]<'q>

§

#### type ArgumentBuffer<'q> = AnyArgumentBuffer<'q>

§

#### type Statement<'q> = [AnyStatement][30]<'q>

§

### impl [Database][20] for [Sqlite][31]

§

#### const NAME: &'static [str][18] = "SQLite"

§

#### const URL_SCHEMES: &'static [&'static [str][18]]

§

#### type Connection = [SqliteConnection][32]

§

#### type TransactionManager = [SqliteTransactionManager][33]

§

#### type Row = [SqliteRow][34]

§

#### type QueryResult = [SqliteQueryResult][35]

§

#### type Column = [SqliteColumn][36]

§

#### type TypeInfo = [SqliteTypeInfo][37]

§

#### type Value = [SqliteValue][38]

§

#### type ValueRef<'r> = [SqliteValueRef][39]<'r>

§

#### type Arguments<'q> = [SqliteArguments][40]<'q>

§

#### type ArgumentBuffer<'q> = [Vec][41]<[SqliteArgumentValue][42]<'q>>

§

#### type Statement<'q> = [SqliteStatement][43]<'q>

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [4]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [5]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [6]: trait.Connection.html (trait sqlx::Connection)
   [7]: trait.Row.html (trait sqlx::Row)
   [8]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [9]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [10]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.Extend.html (trait core::iter::traits::collect::Extend)
   [11]: trait.Database.html#associatedtype.QueryResult (type sqlx::Database::QueryResult)
   [12]: trait.Column.html (trait sqlx::Column)
   [13]: trait.TypeInfo.html (trait sqlx::TypeInfo)
   [14]: trait.Value.html (trait sqlx::Value)
   [15]: trait.ValueRef.html (trait sqlx::ValueRef)
   [16]: trait.Arguments.html (trait sqlx::Arguments)
   [17]: trait.Statement.html (trait sqlx::Statement)
   [18]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [19]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [20]: trait.Database.html (trait sqlx::Database)
   [21]: struct.Any.html (struct sqlx::Any)
   [22]: struct.AnyConnection.html (struct sqlx::AnyConnection)
   [23]: any/struct.AnyTransactionManager.html (struct sqlx::any::AnyTransactionManager)
   [24]: any/struct.AnyRow.html (struct sqlx::any::AnyRow)
   [25]: any/struct.AnyQueryResult.html (struct sqlx::any::AnyQueryResult)
   [26]: any/struct.AnyTypeInfo.html (struct sqlx::any::AnyTypeInfo)
   [27]: any/struct.AnyValue.html (struct sqlx::any::AnyValue)
   [28]: any/struct.AnyValueRef.html (struct sqlx::any::AnyValueRef)
   [29]: any/struct.AnyArguments.html (struct sqlx::any::AnyArguments)
   [30]: any/struct.AnyStatement.html (struct sqlx::any::AnyStatement)
   [31]: struct.Sqlite.html (struct sqlx::Sqlite)
   [32]: struct.SqliteConnection.html (struct sqlx::SqliteConnection)
   [33]: sqlite/struct.SqliteTransactionManager.html (struct sqlx::sqlite::SqliteTransactionManager)
   [34]: sqlite/struct.SqliteRow.html (struct sqlx::sqlite::SqliteRow)
   [35]: sqlite/struct.SqliteQueryResult.html (struct sqlx::sqlite::SqliteQueryResult)
   [36]: sqlite/struct.SqliteColumn.html (struct sqlx::sqlite::SqliteColumn)
   [37]: sqlite/struct.SqliteTypeInfo.html (struct sqlx::sqlite::SqliteTypeInfo)
   [38]: sqlite/struct.SqliteValue.html (struct sqlx::sqlite::SqliteValue)
   [39]: sqlite/struct.SqliteValueRef.html (struct sqlx::sqlite::SqliteValueRef)
   [40]: sqlite/struct.SqliteArguments.html (struct sqlx::sqlite::SqliteArguments)
   [41]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [42]: sqlite/enum.SqliteArgumentValue.html (enum sqlx::sqlite::SqliteArgumentValue)
   [43]: sqlite/struct.SqliteStatement.html (struct sqlx::sqlite::SqliteStatement)

