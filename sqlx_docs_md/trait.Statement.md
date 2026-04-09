## Statement

## [sqlx][1]0.8.6

## Statement

### Required Associated Types

  * Database



### Required Methods

  * columns
  * parameters
  * query
  * query_as
  * query_as_with
  * query_scalar
  * query_scalar_with
  * query_with
  * sql
  * to_owned



### Provided Methods

  * column
  * try_column



### Dyn Compatibility

### Implementors

## [In crate sqlx][2]

[sqlx][2]

# Trait Statement Copy item path
[code]
    pub trait Statement<'q>: [Send][3] + [Sync][4] {
        type Database: [Database][5];
    
        // Required methods
        fn to_owned(&self) -> <Self::[Database][6] as [Database][5]>::[Statement][7]<'static>;
        fn sql(&self) -> &[str][8];
        fn parameters(
            &self,
        ) -> [Option][9]<[Either][10]<&[<Self::[Database][6] as [Database][5]>::[TypeInfo][11]], [usize][12]>>;
        fn columns(&self) -> &[<Self::[Database][6] as [Database][5]>::[Column][13]];
        fn query(
            &self,
        ) -> [Query][14]<'_, Self::[Database][6], <Self::[Database][6] as [Database][5]>::[Arguments][15]<'_>>;
        fn query_with<'s, A>(&'s self, arguments: A) -> [Query][14]<'s, Self::[Database][6], A>
           where A: [IntoArguments][16]<'s, Self::[Database][6]>;
        fn query_as<O>(
            &self,
        ) -> [QueryAs][17]<'_, Self::[Database][6], O, <Self::[Database][6] as [Database][5]>::[Arguments][15]<'_>>
           where O: for<'r> [FromRow][18]<'r, <Self::[Database][6] as [Database][5]>::[Row][19]>;
        fn query_as_with<'s, O, A>(
            &'s self,
            arguments: A,
        ) -> [QueryAs][17]<'s, Self::[Database][6], O, A>
           where O: for<'r> [FromRow][18]<'r, <Self::[Database][6] as [Database][5]>::[Row][19]>,
                 A: [IntoArguments][16]<'s, Self::[Database][6]>;
        fn query_scalar<O>(
            &self,
        ) -> [QueryScalar][20]<'_, Self::[Database][6], O, <Self::[Database][6] as [Database][5]>::[Arguments][15]<'_>>
           where [(O,)][21]: for<'r> [FromRow][18]<'r, <Self::[Database][6] as [Database][5]>::[Row][19]>;
        fn query_scalar_with<'s, O, A>(
            &'s self,
            arguments: A,
        ) -> [QueryScalar][20]<'s, Self::[Database][6], O, A>
           where [(O,)][21]: for<'r> [FromRow][18]<'r, <Self::[Database][6] as [Database][5]>::[Row][19]>,
                 A: [IntoArguments][16]<'s, Self::[Database][6]>;
    
        // Provided methods
        fn column<I>(&self, index: I) -> &<Self::[Database][6] as [Database][5]>::[Column][13]
           where I: [ColumnIndex][22]<Self> { ... }
        fn try_column<I>(
            &self,
            index: I,
        ) -> [Result][23]<&<Self::[Database][6] as [Database][5]>::[Column][13], [Error][24]>
           where I: [ColumnIndex][22]<Self> { ... }
    }
[/code]

Expand description

An explicitly prepared statement.

Statements are prepared and cached by default, per connection. This type allows you to look at that cache in-between the statement being prepared and it being executed. This contains the expected columns to be returned and the expected parameter types (if available).

Statements can be re-used with any connection and on first-use it will be re-prepared and cached within the connection.

## Required Associated Types§

#### type Database: [Database][5]

## Required Methods§

#### fn to_owned(&self) -> <Self::[Database][6] as [Database][5]>::[Statement][7]<'static>

Creates an owned statement from this statement reference. This copies the original SQL text.

#### fn sql(&self) -> &[str][8]

Get the original SQL text used to create this statement.

#### fn parameters( &self, ) -> [Option][9]<[Either][10]<&[<Self::[Database][6] as [Database][5]>::[TypeInfo][11]], [usize][12]>>

Get the expected parameters for this statement.

The information returned depends on what is available from the driver. SQLite can only tell us the number of parameters. PostgreSQL can give us full type information.

#### fn columns(&self) -> &[<Self::[Database][6] as [Database][5]>::[Column][13]]

Get the columns expected to be returned by executing this statement.

#### fn query( &self, ) -> [Query][14]<'_, Self::[Database][6], <Self::[Database][6] as [Database][5]>::[Arguments][15]<'_>>

#### fn query_with<'s, A>(&'s self, arguments: A) -> [Query][14]<'s, Self::[Database][6], A>

where A: [IntoArguments][16]<'s, Self::[Database][6]>,

#### fn query_as<O>( &self, ) -> [QueryAs][17]<'_, Self::[Database][6], O, <Self::[Database][6] as [Database][5]>::[Arguments][15]<'_>>

where O: for<'r> [FromRow][18]<'r, <Self::[Database][6] as [Database][5]>::[Row][19]>,

#### fn query_as_with<'s, O, A>( &'s self, arguments: A, ) -> [QueryAs][17]<'s, Self::[Database][6], O, A>

where O: for<'r> [FromRow][18]<'r, <Self::[Database][6] as [Database][5]>::[Row][19]>, A: [IntoArguments][16]<'s, Self::[Database][6]>,

#### fn query_scalar<O>( &self, ) -> [QueryScalar][20]<'_, Self::[Database][6], O, <Self::[Database][6] as [Database][5]>::[Arguments][15]<'_>>

where [(O,)][21]: for<'r> [FromRow][18]<'r, <Self::[Database][6] as [Database][5]>::[Row][19]>,

#### fn query_scalar_with<'s, O, A>( &'s self, arguments: A, ) -> [QueryScalar][20]<'s, Self::[Database][6], O, A>

where [(O,)][21]: for<'r> [FromRow][18]<'r, <Self::[Database][6] as [Database][5]>::[Row][19]>, A: [IntoArguments][16]<'s, Self::[Database][6]>,

## Provided Methods§

#### fn column<I>(&self, index: I) -> &<Self::[Database][6] as [Database][5]>::[Column][13]

where I: [ColumnIndex][22]<Self>,

Gets the column information at `index`.

A string index can be used to access a column by name and a `usize` index can be used to access a column by position.

##### §Panics

Panics if `index` is out of bounds. See [`try_column`][25] for a non-panicking version.

#### fn try_column<I>( &self, index: I, ) -> [Result][23]<&<Self::[Database][6] as [Database][5]>::[Column][13], [Error][24]>

where I: [ColumnIndex][22]<Self>,

Gets the column information at `index` or a `ColumnIndexOutOfBounds` error if out of bounds.

## Dyn Compatibility§

This trait is **not** [dyn compatible][26].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementors§

§

### impl<'q> [Statement][27]<'q> for [AnyStatement][28]<'q>

§

#### type Database = [Any][29]

§

### impl<'q> [Statement][27]<'q> for [SqliteStatement][30]<'q>

§

#### type Database = [Sqlite][31]

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [4]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [5]: trait.Database.html (trait sqlx::Database)
   [6]: trait.Statement.html#associatedtype.Database (type sqlx::Statement::Database)
   [7]: trait.Database.html#associatedtype.Statement (type sqlx::Database::Statement)
   [8]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [9]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [10]: enum.Either.html (enum sqlx::Either)
   [11]: trait.Database.html#associatedtype.TypeInfo (type sqlx::Database::TypeInfo)
   [12]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [13]: trait.Database.html#associatedtype.Column (type sqlx::Database::Column)
   [14]: query/struct.Query.html (struct sqlx::query::Query)
   [15]: trait.Database.html#associatedtype.Arguments (type sqlx::Database::Arguments)
   [16]: trait.IntoArguments.html (trait sqlx::IntoArguments)
   [17]: query/struct.QueryAs.html (struct sqlx::query::QueryAs)
   [18]: trait.FromRow.html (trait sqlx::FromRow)
   [19]: trait.Database.html#associatedtype.Row (type sqlx::Database::Row)
   [20]: query/struct.QueryScalar.html (struct sqlx::query::QueryScalar)
   [21]: https://doc.rust-lang.org/1.94.1/std/primitive.tuple.html
   [22]: trait.ColumnIndex.html (trait sqlx::ColumnIndex)
   [23]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [24]: enum.Error.html (enum sqlx::Error)
   [25]: trait.Statement.html#method.try_column (method sqlx::Statement::try_column)
   [26]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [27]: trait.Statement.html (trait sqlx::Statement)
   [28]: any/struct.AnyStatement.html (struct sqlx::any::AnyStatement)
   [29]: struct.Any.html (struct sqlx::Any)
   [30]: sqlite/struct.SqliteStatement.html (struct sqlx::sqlite::SqliteStatement)
   [31]: struct.Sqlite.html (struct sqlx::Sqlite)

