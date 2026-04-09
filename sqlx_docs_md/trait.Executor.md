## Executor

## [sqlx][1]0.8.6

## Executor

### Required Associated Types

  * Database



### Required Methods

  * fetch_many
  * fetch_optional
  * prepare_with



### Provided Methods

  * execute
  * execute_many
  * fetch
  * fetch_all
  * fetch_one
  * prepare



### Dyn Compatibility

### Implementors

## [In crate sqlx][2]

[sqlx][2]

# Trait Executor Copy item path
[code]
    pub trait Executor<'c>:
        [Sized][3]
        + [Send][4]
        + [Debug][5] {
        type Database: [Database][6];
    
        // Required methods
        fn fetch_many<'e, 'q, E>(
            self,
            query: E,
        ) -> [Pin][7]<[Box][8]<dyn Stream<Item = [Result][9]<[Either][10]<<Self::[Database][11] as [Database][6]>::[QueryResult][12], <Self::[Database][11] as [Database][6]>::[Row][13]>, [Error][14]>> + [Send][4] + 'e>>
           where 'q: 'e,
                 'c: 'e,
                 E: 'q + [Execute][15]<'q, Self::[Database][11]>;
        fn fetch_optional<'e, 'q, E>(
            self,
            query: E,
        ) -> [Pin][7]<[Box][8]<dyn [Future][16]<Output = [Result][9]<[Option][17]<<Self::[Database][11] as [Database][6]>::[Row][13]>, [Error][14]>> + [Send][4] + 'e>>
           where 'q: 'e,
                 'c: 'e,
                 E: 'q + [Execute][15]<'q, Self::[Database][11]>;
        fn prepare_with<'e, 'q>(
            self,
            sql: &'q [str][18],
            parameters: &'e [<Self::[Database][11] as [Database][6]>::[TypeInfo][19]],
        ) -> [Pin][7]<[Box][8]<dyn [Future][16]<Output = [Result][9]<<Self::[Database][11] as [Database][6]>::[Statement][20]<'q>, [Error][14]>> + [Send][4] + 'e>>
           where 'q: 'e,
                 'c: 'e;
    
        // Provided methods
        fn execute<'e, 'q, E>(
            self,
            query: E,
        ) -> [Pin][7]<[Box][8]<dyn [Future][16]<Output = [Result][9]<<Self::[Database][11] as [Database][6]>::[QueryResult][12], [Error][14]>> + [Send][4] + 'e>>
           where 'q: 'e,
                 'c: 'e,
                 E: 'q + [Execute][15]<'q, Self::[Database][11]> { ... }
        fn execute_many<'e, 'q, E>(
            self,
            query: E,
        ) -> [Pin][7]<[Box][8]<dyn Stream<Item = [Result][9]<<Self::[Database][11] as [Database][6]>::[QueryResult][12], [Error][14]>> + [Send][4] + 'e>>
           where 'q: 'e,
                 'c: 'e,
                 E: 'q + [Execute][15]<'q, Self::[Database][11]> { ... }
        fn fetch<'e, 'q, E>(
            self,
            query: E,
        ) -> [Pin][7]<[Box][8]<dyn Stream<Item = [Result][9]<<Self::[Database][11] as [Database][6]>::[Row][13], [Error][14]>> + [Send][4] + 'e>>
           where 'q: 'e,
                 'c: 'e,
                 E: 'q + [Execute][15]<'q, Self::[Database][11]> { ... }
        fn fetch_all<'e, 'q, E>(
            self,
            query: E,
        ) -> [Pin][7]<[Box][8]<dyn [Future][16]<Output = [Result][9]<[Vec][21]<<Self::[Database][11] as [Database][6]>::[Row][13]>, [Error][14]>> + [Send][4] + 'e>>
           where 'q: 'e,
                 'c: 'e,
                 E: 'q + [Execute][15]<'q, Self::[Database][11]> { ... }
        fn fetch_one<'e, 'q, E>(
            self,
            query: E,
        ) -> [Pin][7]<[Box][8]<dyn [Future][16]<Output = [Result][9]<<Self::[Database][11] as [Database][6]>::[Row][13], [Error][14]>> + [Send][4] + 'e>>
           where 'q: 'e,
                 'c: 'e,
                 E: 'q + [Execute][15]<'q, Self::[Database][11]> { ... }
        fn prepare<'e, 'q>(
            self,
            query: &'q [str][18],
        ) -> [Pin][7]<[Box][8]<dyn [Future][16]<Output = [Result][9]<<Self::[Database][11] as [Database][6]>::[Statement][20]<'q>, [Error][14]>> + [Send][4] + 'e>>
           where 'q: 'e,
                 'c: 'e { ... }
    }
[/code]

Expand description

A type that contains or can provide a database connection to use for executing queries against the database.

No guarantees are provided that successive queries run on the same physical database connection.

A [`Connection`][22] is an `Executor` that guarantees that successive queries are ran on the same physical database connection.

Implemented for the following:

  * [`&Pool`][23]
  * [`&mut Connection`][22]



The [`Executor`][24] impls for [`Transaction`][25] and [`PoolConnection`][26] have been deleted because they cannot exist in the new crate architecture without rewriting the Executor trait entirely. To fix this breakage, simply add a dereference where an impl [`Executor`][24] is expected, as they both dereference to the inner connection type which will still implement it:

  * `&mut transaction` -> `&mut *transaction`
  * `&mut connection` -> `&mut *connection`



## Required Associated Types§

#### type Database: [Database][6]

## Required Methods§

#### fn fetch_many<'e, 'q, E>( self, query: E, ) -> [Pin][7]<[Box][8]<dyn Stream<Item = [Result][9]<[Either][10]<<Self::[Database][11] as [Database][6]>::[QueryResult][12], <Self::[Database][11] as [Database][6]>::[Row][13]>, [Error][14]>> \+ [Send][4] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][15]<'q, Self::[Database][11]>,

Execute multiple queries and return the generated results as a stream from each query, in a stream.

#### fn fetch_optional<'e, 'q, E>( self, query: E, ) -> [Pin][7]<[Box][8]<dyn [Future][16]<Output = [Result][9]<[Option][17]<<Self::[Database][11] as [Database][6]>::[Row][13]>, [Error][14]>> \+ [Send][4] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][15]<'q, Self::[Database][11]>,

Execute the query and returns at most one row.

#### fn prepare_with<'e, 'q>( self, sql: &'q [str][18], parameters: &'e [<Self::[Database][11] as [Database][6]>::[TypeInfo][19]], ) -> [Pin][7]<[Box][8]<dyn [Future][16]<Output = [Result][9]<<Self::[Database][11] as [Database][6]>::[Statement][20]<'q>, [Error][14]>> \+ [Send][4] \+ 'e>>

where 'q: 'e, 'c: 'e,

Prepare the SQL query, with parameter type information, to inspect the type information about its parameters and results.

Only some database drivers (PostgreSQL, MSSQL) can take advantage of this extra information to influence parameter type inference.

## Provided Methods§

#### fn execute<'e, 'q, E>( self, query: E, ) -> [Pin][7]<[Box][8]<dyn [Future][16]<Output = [Result][9]<<Self::[Database][11] as [Database][6]>::[QueryResult][12], [Error][14]>> \+ [Send][4] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][15]<'q, Self::[Database][11]>,

Execute the query and return the total number of rows affected.

#### fn execute_many<'e, 'q, E>( self, query: E, ) -> [Pin][7]<[Box][8]<dyn Stream<Item = [Result][9]<<Self::[Database][11] as [Database][6]>::[QueryResult][12], [Error][14]>> \+ [Send][4] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][15]<'q, Self::[Database][11]>,

Execute multiple queries and return the rows affected from each query, in a stream.

#### fn fetch<'e, 'q, E>( self, query: E, ) -> [Pin][7]<[Box][8]<dyn Stream<Item = [Result][9]<<Self::[Database][11] as [Database][6]>::[Row][13], [Error][14]>> \+ [Send][4] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][15]<'q, Self::[Database][11]>,

Execute the query and return the generated results as a stream.

#### fn fetch_all<'e, 'q, E>( self, query: E, ) -> [Pin][7]<[Box][8]<dyn [Future][16]<Output = [Result][9]<[Vec][21]<<Self::[Database][11] as [Database][6]>::[Row][13]>, [Error][14]>> \+ [Send][4] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][15]<'q, Self::[Database][11]>,

Execute the query and return all the generated results, collected into a [`Vec`][21].

#### fn fetch_one<'e, 'q, E>( self, query: E, ) -> [Pin][7]<[Box][8]<dyn [Future][16]<Output = [Result][9]<<Self::[Database][11] as [Database][6]>::[Row][13], [Error][14]>> \+ [Send][4] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][15]<'q, Self::[Database][11]>,

Execute the query and returns exactly one row.

#### fn prepare<'e, 'q>( self, query: &'q [str][18], ) -> [Pin][7]<[Box][8]<dyn [Future][16]<Output = [Result][9]<<Self::[Database][11] as [Database][6]>::[Statement][20]<'q>, [Error][14]>> \+ [Send][4] \+ 'e>>

where 'q: 'e, 'c: 'e,

Prepare the SQL query to inspect the type information of its parameters and results.

Be advised that when using the `query`, `query_as`, or `query_scalar` functions, the query is transparently prepared and executed.

This explicit API is provided to allow access to the statement metadata available after it prepared but before the first row is returned.

## Dyn Compatibility§

This trait is **not** [dyn compatible][27].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementors§

§

### impl<'c> [Executor][24]<'c> for &'c mut [AnyConnection][28]

§

#### type Database = [Any][29]

§

### impl<'c> [Executor][24]<'c> for &'c mut [SqliteConnection][30]

§

#### type Database = [Sqlite][31]

§

### impl<'p, DB> [Executor][24]<'p> for &[Pool][23]<DB>

where DB: [Database][6], &'c mut <DB as [Database][6]>::[Connection][32]: for<'c> [Executor][24]<'c, Database = DB>,

§

#### type Database = DB

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [4]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [5]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [6]: trait.Database.html (trait sqlx::Database)
   [7]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [8]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [9]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [10]: enum.Either.html (enum sqlx::Either)
   [11]: trait.Executor.html#associatedtype.Database (type sqlx::Executor::Database)
   [12]: trait.Database.html#associatedtype.QueryResult (type sqlx::Database::QueryResult)
   [13]: trait.Database.html#associatedtype.Row (type sqlx::Database::Row)
   [14]: enum.Error.html (enum sqlx::Error)
   [15]: trait.Execute.html (trait sqlx::Execute)
   [16]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [17]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [18]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [19]: trait.Database.html#associatedtype.TypeInfo (type sqlx::Database::TypeInfo)
   [20]: trait.Database.html#associatedtype.Statement (type sqlx::Database::Statement)
   [21]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [22]: trait.Connection.html (trait sqlx::Connection)
   [23]: struct.Pool.html (struct sqlx::Pool)
   [24]: trait.Executor.html (trait sqlx::Executor)
   [25]: struct.Transaction.html (struct sqlx::Transaction)
   [26]: pool/struct.PoolConnection.html (struct sqlx::pool::PoolConnection)
   [27]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [28]: struct.AnyConnection.html (struct sqlx::AnyConnection)
   [29]: struct.Any.html (struct sqlx::Any)
   [30]: struct.SqliteConnection.html (struct sqlx::SqliteConnection)
   [31]: struct.Sqlite.html (struct sqlx::Sqlite)
   [32]: trait.Database.html#associatedtype.Connection (type sqlx::Database::Connection)

