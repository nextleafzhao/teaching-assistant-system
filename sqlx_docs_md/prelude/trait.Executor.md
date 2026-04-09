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

## [In sqlx::prelude][2]

[sqlx][3]::[prelude][2]

# Trait Executor Copy item path
[code]
    pub trait Executor<'c>:
        [Sized][4]
        + [Send][5]
        + [Debug][6] {
        type Database: [Database][7];
    
        // Required methods
        fn fetch_many<'e, 'q, E>(
            self,
            query: E,
        ) -> [Pin][8]<[Box][9]<dyn Stream<Item = [Result][10]<[Either][11]<<Self::[Database][12] as [Database][7]>::[QueryResult][13], <Self::[Database][12] as [Database][7]>::[Row][14]>, [Error][15]>> + [Send][5] + 'e>>
           where 'q: 'e,
                 'c: 'e,
                 E: 'q + [Execute][16]<'q, Self::[Database][12]>;
        fn fetch_optional<'e, 'q, E>(
            self,
            query: E,
        ) -> [Pin][8]<[Box][9]<dyn [Future][17]<Output = [Result][10]<[Option][18]<<Self::[Database][12] as [Database][7]>::[Row][14]>, [Error][15]>> + [Send][5] + 'e>>
           where 'q: 'e,
                 'c: 'e,
                 E: 'q + [Execute][16]<'q, Self::[Database][12]>;
        fn prepare_with<'e, 'q>(
            self,
            sql: &'q [str][19],
            parameters: &'e [<Self::[Database][12] as [Database][7]>::[TypeInfo][20]],
        ) -> [Pin][8]<[Box][9]<dyn [Future][17]<Output = [Result][10]<<Self::[Database][12] as [Database][7]>::[Statement][21]<'q>, [Error][15]>> + [Send][5] + 'e>>
           where 'q: 'e,
                 'c: 'e;
    
        // Provided methods
        fn execute<'e, 'q, E>(
            self,
            query: E,
        ) -> [Pin][8]<[Box][9]<dyn [Future][17]<Output = [Result][10]<<Self::[Database][12] as [Database][7]>::[QueryResult][13], [Error][15]>> + [Send][5] + 'e>>
           where 'q: 'e,
                 'c: 'e,
                 E: 'q + [Execute][16]<'q, Self::[Database][12]> { ... }
        fn execute_many<'e, 'q, E>(
            self,
            query: E,
        ) -> [Pin][8]<[Box][9]<dyn Stream<Item = [Result][10]<<Self::[Database][12] as [Database][7]>::[QueryResult][13], [Error][15]>> + [Send][5] + 'e>>
           where 'q: 'e,
                 'c: 'e,
                 E: 'q + [Execute][16]<'q, Self::[Database][12]> { ... }
        fn fetch<'e, 'q, E>(
            self,
            query: E,
        ) -> [Pin][8]<[Box][9]<dyn Stream<Item = [Result][10]<<Self::[Database][12] as [Database][7]>::[Row][14], [Error][15]>> + [Send][5] + 'e>>
           where 'q: 'e,
                 'c: 'e,
                 E: 'q + [Execute][16]<'q, Self::[Database][12]> { ... }
        fn fetch_all<'e, 'q, E>(
            self,
            query: E,
        ) -> [Pin][8]<[Box][9]<dyn [Future][17]<Output = [Result][10]<[Vec][22]<<Self::[Database][12] as [Database][7]>::[Row][14]>, [Error][15]>> + [Send][5] + 'e>>
           where 'q: 'e,
                 'c: 'e,
                 E: 'q + [Execute][16]<'q, Self::[Database][12]> { ... }
        fn fetch_one<'e, 'q, E>(
            self,
            query: E,
        ) -> [Pin][8]<[Box][9]<dyn [Future][17]<Output = [Result][10]<<Self::[Database][12] as [Database][7]>::[Row][14], [Error][15]>> + [Send][5] + 'e>>
           where 'q: 'e,
                 'c: 'e,
                 E: 'q + [Execute][16]<'q, Self::[Database][12]> { ... }
        fn prepare<'e, 'q>(
            self,
            query: &'q [str][19],
        ) -> [Pin][8]<[Box][9]<dyn [Future][17]<Output = [Result][10]<<Self::[Database][12] as [Database][7]>::[Statement][21]<'q>, [Error][15]>> + [Send][5] + 'e>>
           where 'q: 'e,
                 'c: 'e { ... }
    }
[/code]

Expand description

A type that contains or can provide a database connection to use for executing queries against the database.

No guarantees are provided that successive queries run on the same physical database connection.

A [`Connection`][23] is an `Executor` that guarantees that successive queries are ran on the same physical database connection.

Implemented for the following:

  * [`&Pool`][24]
  * [`&mut Connection`][23]



The [`Executor`][25] impls for [`Transaction`][26] and [`PoolConnection`][27] have been deleted because they cannot exist in the new crate architecture without rewriting the Executor trait entirely. To fix this breakage, simply add a dereference where an impl [`Executor`][25] is expected, as they both dereference to the inner connection type which will still implement it:

  * `&mut transaction` -> `&mut *transaction`
  * `&mut connection` -> `&mut *connection`



## Required Associated Types§

#### type Database: [Database][7]

## Required Methods§

#### fn fetch_many<'e, 'q, E>( self, query: E, ) -> [Pin][8]<[Box][9]<dyn Stream<Item = [Result][10]<[Either][11]<<Self::[Database][12] as [Database][7]>::[QueryResult][13], <Self::[Database][12] as [Database][7]>::[Row][14]>, [Error][15]>> \+ [Send][5] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][16]<'q, Self::[Database][12]>,

Execute multiple queries and return the generated results as a stream from each query, in a stream.

#### fn fetch_optional<'e, 'q, E>( self, query: E, ) -> [Pin][8]<[Box][9]<dyn [Future][17]<Output = [Result][10]<[Option][18]<<Self::[Database][12] as [Database][7]>::[Row][14]>, [Error][15]>> \+ [Send][5] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][16]<'q, Self::[Database][12]>,

Execute the query and returns at most one row.

#### fn prepare_with<'e, 'q>( self, sql: &'q [str][19], parameters: &'e [<Self::[Database][12] as [Database][7]>::[TypeInfo][20]], ) -> [Pin][8]<[Box][9]<dyn [Future][17]<Output = [Result][10]<<Self::[Database][12] as [Database][7]>::[Statement][21]<'q>, [Error][15]>> \+ [Send][5] \+ 'e>>

where 'q: 'e, 'c: 'e,

Prepare the SQL query, with parameter type information, to inspect the type information about its parameters and results.

Only some database drivers (PostgreSQL, MSSQL) can take advantage of this extra information to influence parameter type inference.

## Provided Methods§

#### fn execute<'e, 'q, E>( self, query: E, ) -> [Pin][8]<[Box][9]<dyn [Future][17]<Output = [Result][10]<<Self::[Database][12] as [Database][7]>::[QueryResult][13], [Error][15]>> \+ [Send][5] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][16]<'q, Self::[Database][12]>,

Execute the query and return the total number of rows affected.

#### fn execute_many<'e, 'q, E>( self, query: E, ) -> [Pin][8]<[Box][9]<dyn Stream<Item = [Result][10]<<Self::[Database][12] as [Database][7]>::[QueryResult][13], [Error][15]>> \+ [Send][5] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][16]<'q, Self::[Database][12]>,

Execute multiple queries and return the rows affected from each query, in a stream.

#### fn fetch<'e, 'q, E>( self, query: E, ) -> [Pin][8]<[Box][9]<dyn Stream<Item = [Result][10]<<Self::[Database][12] as [Database][7]>::[Row][14], [Error][15]>> \+ [Send][5] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][16]<'q, Self::[Database][12]>,

Execute the query and return the generated results as a stream.

#### fn fetch_all<'e, 'q, E>( self, query: E, ) -> [Pin][8]<[Box][9]<dyn [Future][17]<Output = [Result][10]<[Vec][22]<<Self::[Database][12] as [Database][7]>::[Row][14]>, [Error][15]>> \+ [Send][5] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][16]<'q, Self::[Database][12]>,

Execute the query and return all the generated results, collected into a [`Vec`][22].

#### fn fetch_one<'e, 'q, E>( self, query: E, ) -> [Pin][8]<[Box][9]<dyn [Future][17]<Output = [Result][10]<<Self::[Database][12] as [Database][7]>::[Row][14], [Error][15]>> \+ [Send][5] \+ 'e>>

where 'q: 'e, 'c: 'e, E: 'q + [Execute][16]<'q, Self::[Database][12]>,

Execute the query and returns exactly one row.

#### fn prepare<'e, 'q>( self, query: &'q [str][19], ) -> [Pin][8]<[Box][9]<dyn [Future][17]<Output = [Result][10]<<Self::[Database][12] as [Database][7]>::[Statement][21]<'q>, [Error][15]>> \+ [Send][5] \+ 'e>>

where 'q: 'e, 'c: 'e,

Prepare the SQL query to inspect the type information of its parameters and results.

Be advised that when using the `query`, `query_as`, or `query_scalar` functions, the query is transparently prepared and executed.

This explicit API is provided to allow access to the statement metadata available after it prepared but before the first row is returned.

## Dyn Compatibility§

This trait is **not** [dyn compatible][28].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementors§

§

### impl<'c> [Executor][25]<'c> for &'c mut [AnyConnection][29]

§

#### type Database = [Any][30]

§

### impl<'c> [Executor][25]<'c> for &'c mut [SqliteConnection][31]

§

#### type Database = [Sqlite][32]

§

### impl<'p, DB> [Executor][25]<'p> for &[Pool][24]<DB>

where DB: [Database][7], &'c mut <DB as [Database][7]>::[Connection][33]: for<'c> [Executor][25]<'c, Database = DB>,

§

#### type Database = DB

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [5]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [6]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [7]: ../trait.Database.html (trait sqlx::Database)
   [8]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [9]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [10]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [11]: ../enum.Either.html (enum sqlx::Either)
   [12]: ../trait.Executor.html#associatedtype.Database (type sqlx::Executor::Database)
   [13]: ../trait.Database.html#associatedtype.QueryResult (type sqlx::Database::QueryResult)
   [14]: ../trait.Database.html#associatedtype.Row (type sqlx::Database::Row)
   [15]: ../enum.Error.html (enum sqlx::Error)
   [16]: ../trait.Execute.html (trait sqlx::Execute)
   [17]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [18]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [19]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [20]: ../trait.Database.html#associatedtype.TypeInfo (type sqlx::Database::TypeInfo)
   [21]: ../trait.Database.html#associatedtype.Statement (type sqlx::Database::Statement)
   [22]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [23]: ../trait.Connection.html (trait sqlx::Connection)
   [24]: ../struct.Pool.html (struct sqlx::Pool)
   [25]: ../trait.Executor.html (trait sqlx::Executor)
   [26]: ../struct.Transaction.html (struct sqlx::Transaction)
   [27]: ../pool/struct.PoolConnection.html (struct sqlx::pool::PoolConnection)
   [28]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [29]: ../struct.AnyConnection.html (struct sqlx::AnyConnection)
   [30]: ../struct.Any.html (struct sqlx::Any)
   [31]: ../struct.SqliteConnection.html (struct sqlx::SqliteConnection)
   [32]: ../struct.Sqlite.html (struct sqlx::Sqlite)
   [33]: ../trait.Database.html#associatedtype.Connection (type sqlx::Database::Connection)

