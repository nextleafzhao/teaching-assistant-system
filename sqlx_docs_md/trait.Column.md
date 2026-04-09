## Column

## [sqlx][1]0.8.6

## Column

### Required Associated Types

  * Database



### Required Methods

  * name
  * ordinal
  * type_info



### Implementors

## [In crate sqlx][2]

[sqlx][2]

# Trait Column Copy item path
[code]
    pub trait Column:
        'static
        + [Send][3]
        + [Sync][4]
        + [Debug][5] {
        type Database: [Database][6]<Column = Self>;
    
        // Required methods
        fn ordinal(&self) -> [usize][7];
        fn name(&self) -> &[str][8];
        fn type_info(&self) -> &<Self::[Database][9] as [Database][6]>::[TypeInfo][10];
    }
[/code]

## Required Associated Types§

#### type Database: [Database][6]<Column = Self>

## Required Methods§

#### fn ordinal(&self) -> [usize][7]

Gets the column ordinal.

This can be used to unambiguously refer to this column within a row in case more than one column have the same name

#### fn name(&self) -> &[str][8]

Gets the column name or alias.

The column name is unreliable (and can change between database minor versions) if this column is an expression that has not been aliased.

#### fn type_info(&self) -> &<Self::[Database][9] as [Database][6]>::[TypeInfo][10]

Gets the type information for the column.

## Implementors§

§

### impl [Column][11] for [SqliteColumn][12]

§

#### type Database = [Sqlite][13]

§

### impl [Column][11] for AnyColumn

§

#### type Database = [Any][14]

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [4]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [5]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [6]: trait.Database.html (trait sqlx::Database)
   [7]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [8]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [9]: trait.Column.html#associatedtype.Database (type sqlx::Column::Database)
   [10]: trait.Database.html#associatedtype.TypeInfo (type sqlx::Database::TypeInfo)
   [11]: trait.Column.html (trait sqlx::Column)
   [12]: sqlite/struct.SqliteColumn.html (struct sqlx::sqlite::SqliteColumn)
   [13]: struct.Sqlite.html (struct sqlx::Sqlite)
   [14]: struct.Any.html (struct sqlx::Any)

