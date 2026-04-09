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

## [In sqlx::prelude][2]

[sqlx][3]::[prelude][2]

# Trait Statement Copy item path
[code]
    pub trait Statement<'q>: [Send][4] + [Sync][5] {
        type Database: [Database][6];
    
        // Required methods
        fn to_owned(&self) -> <Self::[Database][7] as [Database][6]>::[Statement][8]<'static>;
        fn sql(&self) -> &[str][9];
        fn parameters(
            &self,
        ) -> [Option][10]<[Either][11]<&[<Self::[Database][7] as [Database][6]>::[TypeInfo][12]], [usize][13]>>;
        fn columns(&self) -> &[<Self::[Database][7] as [Database][6]>::[Column][14]];
        fn query(
            &self,
        ) -> [Query][15]<'_, Self::[Database][7], <Self::[Database][7] as [Database][6]>::[Arguments][16]<'_>>;
        fn query_with<'s, A>(&'s self, arguments: A) -> [Query][15]<'s, Self::[Database][7], A>
           where A: [IntoArguments][17]<'s, Self::[Database][7]>;
        fn query_as<O>(
            &self,
        ) -> [QueryAs][18]<'_, Self::[Database][7], O, <Self::[Database][7] as [Database][6]>::[Arguments][16]<'_>>
           where O: for<'r> [FromRow][19]<'r, <Self::[Database][7] as [Database][6]>::[Row][20]>;
        fn query_as_with<'s, O, A>(
            &'s self,
            arguments: A,
        ) -> [QueryAs][18]<'s, Self::[Database][7], O, A>
           where O: for<'r> [FromRow][19]<'r, <Self::[Database][7] as [Database][6]>::[Row][20]>,
                 A: [IntoArguments][17]<'s, Self::[Database][7]>;
        fn query_scalar<O>(
            &self,
        ) -> [QueryScalar][21]<'_, Self::[Database][7], O, <Self::[Database][7] as [Database][6]>::[Arguments][16]<'_>>
           where [(O,)][22]: for<'r> [FromRow][19]<'r, <Self::[Database][7] as [Database][6]>::[Row][20]>;
        fn query_scalar_with<'s, O, A>(
            &'s self,
            arguments: A,
        ) -> [QueryScalar][21]<'s, Self::[Database][7], O, A>
           where [(O,)][22]: for<'r> [FromRow][19]<'r, <Self::[Database][7] as [Database][6]>::[Row][20]>,
                 A: [IntoArguments][17]<'s, Self::[Database][7]>;
    
        // Provided methods
        fn column<I>(&self, index: I) -> &<Self::[Database][7] as [Database][6]>::[Column][14]
           where I: [ColumnIndex][23]<Self> { ... }
        fn try_column<I>(
            &self,
            index: I,
        ) -> [Result][24]<&<Self::[Database][7] as [Database][6]>::[Column][14], [Error][25]>
           where I: [ColumnIndex][23]<Self> { ... }
    }
[/code]

Expand description

An explicitly prepared statement.

Statements are prepared and cached by default, per connection. This type allows you to look at that cache in-between the statement being prepared and it being executed. This contains the expected columns to be returned and the expected parameter types (if available).

Statements can be re-used with any connection and on first-use it will be re-prepared and cached within the connection.

## Required Associated Types§

#### type Database: [Database][6]

## Required Methods§

#### fn to_owned(&self) -> <Self::[Database][7] as [Database][6]>::[Statement][8]<'static>

Creates an owned statement from this statement reference. This copies the original SQL text.

#### fn sql(&self) -> &[str][9]

Get the original SQL text used to create this statement.

#### fn parameters( &self, ) -> [Option][10]<[Either][11]<&[<Self::[Database][7] as [Database][6]>::[TypeInfo][12]], [usize][13]>>

Get the expected parameters for this statement.

The information returned depends on what is available from the driver. SQLite can only tell us the number of parameters. PostgreSQL can give us full type information.

#### fn columns(&self) -> &[<Self::[Database][7] as [Database][6]>::[Column][14]]

Get the columns expected to be returned by executing this statement.

#### fn query( &self, ) -> [Query][15]<'_, Self::[Database][7], <Self::[Database][7] as [Database][6]>::[Arguments][16]<'_>>

#### fn query_with<'s, A>(&'s self, arguments: A) -> [Query][15]<'s, Self::[Database][7], A>

where A: [IntoArguments][17]<'s, Self::[Database][7]>,

#### fn query_as<O>( &self, ) -> [QueryAs][18]<'_, Self::[Database][7], O, <Self::[Database][7] as [Database][6]>::[Arguments][16]<'_>>

where O: for<'r> [FromRow][19]<'r, <Self::[Database][7] as [Database][6]>::[Row][20]>,

#### fn query_as_with<'s, O, A>( &'s self, arguments: A, ) -> [QueryAs][18]<'s, Self::[Database][7], O, A>

where O: for<'r> [FromRow][19]<'r, <Self::[Database][7] as [Database][6]>::[Row][20]>, A: [IntoArguments][17]<'s, Self::[Database][7]>,

#### fn query_scalar<O>( &self, ) -> [QueryScalar][21]<'_, Self::[Database][7], O, <Self::[Database][7] as [Database][6]>::[Arguments][16]<'_>>

where [(O,)][22]: for<'r> [FromRow][19]<'r, <Self::[Database][7] as [Database][6]>::[Row][20]>,

#### fn query_scalar_with<'s, O, A>( &'s self, arguments: A, ) -> [QueryScalar][21]<'s, Self::[Database][7], O, A>

where [(O,)][22]: for<'r> [FromRow][19]<'r, <Self::[Database][7] as [Database][6]>::[Row][20]>, A: [IntoArguments][17]<'s, Self::[Database][7]>,

## Provided Methods§

#### fn column<I>(&self, index: I) -> &<Self::[Database][7] as [Database][6]>::[Column][14]

where I: [ColumnIndex][23]<Self>,

Gets the column information at `index`.

A string index can be used to access a column by name and a `usize` index can be used to access a column by position.

##### §Panics

Panics if `index` is out of bounds. See [`try_column`][26] for a non-panicking version.

#### fn try_column<I>( &self, index: I, ) -> [Result][24]<&<Self::[Database][7] as [Database][6]>::[Column][14], [Error][25]>

where I: [ColumnIndex][23]<Self>,

Gets the column information at `index` or a `ColumnIndexOutOfBounds` error if out of bounds.

## Dyn Compatibility§

This trait is **not** [dyn compatible][27].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementors§

§

### impl<'q> [Statement][28]<'q> for [AnyStatement][29]<'q>

§

#### type Database = [Any][30]

§

### impl<'q> [Statement][28]<'q> for [SqliteStatement][31]<'q>

§

#### type Database = [Sqlite][32]

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [5]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [6]: ../trait.Database.html (trait sqlx::Database)
   [7]: ../trait.Statement.html#associatedtype.Database (type sqlx::Statement::Database)
   [8]: ../trait.Database.html#associatedtype.Statement (type sqlx::Database::Statement)
   [9]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [10]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [11]: ../enum.Either.html (enum sqlx::Either)
   [12]: ../trait.Database.html#associatedtype.TypeInfo (type sqlx::Database::TypeInfo)
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [14]: ../trait.Database.html#associatedtype.Column (type sqlx::Database::Column)
   [15]: ../query/struct.Query.html (struct sqlx::query::Query)
   [16]: ../trait.Database.html#associatedtype.Arguments (type sqlx::Database::Arguments)
   [17]: ../trait.IntoArguments.html (trait sqlx::IntoArguments)
   [18]: ../query/struct.QueryAs.html (struct sqlx::query::QueryAs)
   [19]: ../trait.FromRow.html (trait sqlx::FromRow)
   [20]: ../trait.Database.html#associatedtype.Row (type sqlx::Database::Row)
   [21]: ../query/struct.QueryScalar.html (struct sqlx::query::QueryScalar)
   [22]: https://doc.rust-lang.org/1.94.1/std/primitive.tuple.html
   [23]: ../trait.ColumnIndex.html (trait sqlx::ColumnIndex)
   [24]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [25]: ../enum.Error.html (enum sqlx::Error)
   [26]: ../trait.Statement.html#method.try_column (method sqlx::Statement::try_column)
   [27]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [28]: ../trait.Statement.html (trait sqlx::Statement)
   [29]: ../any/struct.AnyStatement.html (struct sqlx::any::AnyStatement)
   [30]: ../struct.Any.html (struct sqlx::Any)
   [31]: ../sqlite/struct.SqliteStatement.html (struct sqlx::sqlite::SqliteStatement)
   [32]: ../struct.Sqlite.html (struct sqlx::Sqlite)

