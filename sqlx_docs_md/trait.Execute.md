## Execute

## [sqlx][1]0.8.6

## Execute

### Required Methods

  * persistent
  * sql
  * statement
  * take_arguments



### Implementations on Foreign Types

  * &'q str
  * (&'q str, Option<<DB as Database>::Arguments<'q>>)



### Dyn Compatibility

### Implementors

## [In crate sqlx][2]

[sqlx][2]

# Trait Execute Copy item path
[code]
    pub trait Execute<'q, DB>: [Sized][3] + [Send][4]
    
    where
        DB: [Database][5],
    
    {
        // Required methods
        fn sql(&self) -> &'q [str][6];
        fn statement(&self) -> [Option][7]<&<DB as [Database][5]>::[Statement][8]<'q>>;
        fn take_arguments(
            &mut self,
        ) -> [Result][9]<[Option][7]<<DB as [Database][5]>::[Arguments][10]<'q>>, [Box][11]<dyn [Error][12] + [Send][4] + [Sync][13]>>;
        fn persistent(&self) -> [bool][14];
    }
[/code]

Expand description

A type that may be executed against a database connection.

Implemented for the following:

  * [`&str`][15]
  * [`Query`][16]



## Required Methods§

#### fn sql(&self) -> &'q [str][6]

Gets the SQL that will be executed.

#### fn statement(&self) -> [Option][7]<&<DB as [Database][5]>::[Statement][8]<'q>>

Gets the previously cached statement, if available.

#### fn take_arguments( &mut self, ) -> [Result][9]<[Option][7]<<DB as [Database][5]>::[Arguments][10]<'q>>, [Box][11]<dyn [Error][12] \+ [Send][4] \+ [Sync][13]>>

Returns the arguments to be bound against the query string.

Returning `Ok(None)` for `Arguments` indicates to use a “simple” query protocol and to not prepare the query. Returning `Ok(Some(Default::default()))` is an empty arguments object that will be prepared (and cached) before execution.

Returns `Err` if encoding any of the arguments failed.

#### fn persistent(&self) -> [bool][14]

Returns `true` if the statement should be cached.

## Dyn Compatibility§

This trait is **not** [dyn compatible][17].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementations on Foreign Types§

§

### impl<'q, DB> [Execute][18]<'q, DB> for &'q [str][6]

where DB: [Database][5],

§

#### fn sql(&self) -> &'q [str][6]

§

#### fn statement(&self) -> [Option][7]<&<DB as [Database][5]>::[Statement][8]<'q>>

§

#### fn take_arguments( &mut self, ) -> [Result][9]<[Option][7]<<DB as [Database][5]>::[Arguments][10]<'q>>, [Box][11]<dyn [Error][12] \+ [Send][4] \+ [Sync][13]>>

§

#### fn persistent(&self) -> [bool][14]

§

### impl<'q, DB> [Execute][18]<'q, DB> for (&'q [str][6], [Option][7]<<DB as [Database][5]>::[Arguments][10]<'q>>)

where DB: [Database][5],

§

#### fn sql(&self) -> &'q [str][6]

§

#### fn statement(&self) -> [Option][7]<&<DB as [Database][5]>::[Statement][8]<'q>>

§

#### fn take_arguments( &mut self, ) -> [Result][9]<[Option][7]<<DB as [Database][5]>::[Arguments][10]<'q>>, [Box][11]<dyn [Error][12] \+ [Send][4] \+ [Sync][13]>>

§

#### fn persistent(&self) -> [bool][14]

## Implementors§

§

### impl<'q, DB> [Execute][18]<'q, DB> for [RawSql][19]<'q>

where DB: [Database][5],

§

### impl<'q, DB, A> [Execute][18]<'q, DB> for [Query][16]<'q, DB, A>

where DB: [Database][5], A: [Send][4] \+ [IntoArguments][20]<'q, DB>,

§

### impl<'q, DB, F, A> [Execute][18]<'q, DB> for [Map][21]<'q, DB, F, A>

where F: [Send][4], A: [Send][4] \+ [IntoArguments][20]<'q, DB>, DB: [Database][5],

§

### impl<'q, DB, O, A> [Execute][18]<'q, DB> for [QueryAs][22]<'q, DB, O, A>

where O: [Send][4], A: [Send][4] \+ 'q + [IntoArguments][20]<'q, DB>, DB: [Database][5],

§

### impl<'q, DB, O, A> [Execute][18]<'q, DB> for [QueryScalar][23]<'q, DB, O, A>

where DB: [Database][5], O: [Send][4], A: [Send][4] \+ 'q + [IntoArguments][20]<'q, DB>,

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [4]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [5]: trait.Database.html (trait sqlx::Database)
   [6]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [7]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [8]: trait.Database.html#associatedtype.Statement (type sqlx::Database::Statement)
   [9]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [10]: trait.Database.html#associatedtype.Arguments (type sqlx::Database::Arguments)
   [11]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [12]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [13]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [14]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [15]: https://doc.rust-lang.org/1.94.1/alloc/str/index.html (mod alloc::str)
   [16]: query/struct.Query.html (struct sqlx::query::Query)
   [17]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [18]: trait.Execute.html (trait sqlx::Execute)
   [19]: struct.RawSql.html (struct sqlx::RawSql)
   [20]: trait.IntoArguments.html (trait sqlx::IntoArguments)
   [21]: query/struct.Map.html (struct sqlx::query::Map)
   [22]: query/struct.QueryAs.html (struct sqlx::query::QueryAs)
   [23]: query/struct.QueryScalar.html (struct sqlx::query::QueryScalar)

