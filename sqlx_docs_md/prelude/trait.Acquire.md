## Acquire

## [sqlx][1]0.8.6

## Acquire

### Required Associated Types

  * Connection
  * Database



### Required Methods

  * acquire
  * begin



### Implementors

## [In sqlx::prelude][2]

[sqlx][3]::[prelude][2]

# Trait Acquire Copy item path
[code]
    pub trait Acquire<'c> {
        type Database: [Database][4];
        type Connection: [Deref][5]<Target = <Self::[Database][6] as [Database][4]>::[Connection][7]> + [DerefMut][8] + [Send][9];
    
        // Required methods
        fn acquire(
            self,
        ) -> [Pin][10]<[Box][11]<dyn [Future][12]<Output = [Result][13]<Self::[Connection][14], [Error][15]>> + [Send][9] + 'c>>;
        fn begin(
            self,
        ) -> [Pin][10]<[Box][11]<dyn [Future][12]<Output = [Result][13]<[Transaction][16]<'c, Self::[Database][6]>, [Error][15]>> + [Send][9] + 'c>>;
    }
[/code]

Expand description

Acquire connections or transactions from a database in a generic way.

If you want to accept generic database connections that implement [`Acquire`][17] which then allows you to [`acquire`][18] a connection or [`begin`][19] a transaction, then you can do it like that:
[code] 
    async fn run_query<'a, A>(conn: A) -> Result<(), BoxDynError>
    where
        A: Acquire<'a, Database = Postgres>,
    {
        let mut conn = conn.acquire().await?;
    
        sqlx::query!("SELECT 1 as v").fetch_one(&mut *conn).await?;
        sqlx::query!("SELECT 2 as v").fetch_one(&mut *conn).await?;
    
        Ok(())
    }
[/code]

If you run into a lifetime error about “implementation of `sqlx::Acquire` is not general enough”, the [workaround][20] looks like this:
[code] 
    fn run_query<'a, 'c, A>(conn: A) -> impl Future<Output = Result<(), BoxDynError>> + Send + 'a
    where
        A: Acquire<'c, Database = Postgres> + Send + 'a,
    {
        async move {
            let mut conn = conn.acquire().await?;
    
            sqlx::query!("SELECT 1 as v").fetch_one(&mut *conn).await?;
            sqlx::query!("SELECT 2 as v").fetch_one(&mut *conn).await?;
    
            Ok(())
        }
    }
[/code]

However, if you really just want to accept both, a transaction or a connection as an argument to a function, then it’s easier to just accept a mutable reference to a database connection like so:
[code] 
    async fn run_query(conn: &mut PgConnection) -> Result<(), BoxDynError> {
        sqlx::query!("SELECT 1 as v").fetch_one(&mut *conn).await?;
        sqlx::query!("SELECT 2 as v").fetch_one(&mut *conn).await?;
    
        Ok(())
    }
[/code]

The downside of this approach is that you have to `acquire` a connection from a pool first and can’t directly pass the pool as argument.

## Required Associated Types§

#### type Database: [Database][4]

#### type Connection: [Deref][5]<Target = <Self::[Database][6] as [Database][4]>::[Connection][7]> \+ [DerefMut][8] \+ [Send][9]

## Required Methods§

#### fn acquire( self, ) -> [Pin][10]<[Box][11]<dyn [Future][12]<Output = [Result][13]<Self::[Connection][14], [Error][15]>> \+ [Send][9] \+ 'c>>

#### fn begin( self, ) -> [Pin][10]<[Box][11]<dyn [Future][12]<Output = [Result][13]<[Transaction][16]<'c, Self::[Database][6]>, [Error][15]>> \+ [Send][9] \+ 'c>>

## Implementors§

§

### impl<'a, DB> [Acquire][17]<'a> for &[Pool][21]<DB>

where DB: [Database][4],

§

#### type Database = DB

§

#### type Connection = [PoolConnection][22]<DB>

§

### impl<'c> [Acquire][17]<'c> for &'c mut [AnyConnection][23]

§

#### type Database = [Any][24]

§

#### type Connection = &'c mut <[Any][24] as [Database][4]>::[Connection][7]

§

### impl<'c> [Acquire][17]<'c> for &'c mut [SqliteConnection][25]

§

#### type Database = [Sqlite][26]

§

#### type Connection = &'c mut <[Sqlite][26] as [Database][4]>::[Connection][7]

§

### impl<'c, 't, DB> [Acquire][17]<'t> for &'t mut [Transaction][16]<'c, DB>

where DB: [Database][4],

§

#### type Database = DB

§

#### type Connection = &'t mut <DB as [Database][4]>::[Connection][7]

§

### impl<'c, DB> [Acquire][17]<'c> for &'c mut [PoolConnection][22]<DB>

where DB: [Database][4],

§

#### type Database = DB

§

#### type Connection = &'c mut <DB as [Database][4]>::[Connection][7]

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../trait.Database.html (trait sqlx::Database)
   [5]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html (trait core::ops::deref::Deref)
   [6]: ../trait.Acquire.html#associatedtype.Database (type sqlx::Acquire::Database)
   [7]: ../trait.Database.html#associatedtype.Connection (type sqlx::Database::Connection)
   [8]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.DerefMut.html (trait core::ops::deref::DerefMut)
   [9]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [10]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [11]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [12]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [13]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [14]: ../trait.Acquire.html#associatedtype.Connection (type sqlx::Acquire::Connection)
   [15]: ../enum.Error.html (enum sqlx::Error)
   [16]: ../struct.Transaction.html (struct sqlx::Transaction)
   [17]: ../trait.Acquire.html (trait sqlx::Acquire)
   [18]: ../trait.Acquire.html#tymethod.acquire (method sqlx::Acquire::acquire)
   [19]: ../trait.Acquire.html#tymethod.begin (method sqlx::Acquire::begin)
   [20]: https://github.com/launchbadge/sqlx/issues/1015#issuecomment-767787777
   [21]: ../struct.Pool.html (struct sqlx::Pool)
   [22]: ../pool/struct.PoolConnection.html (struct sqlx::pool::PoolConnection)
   [23]: ../struct.AnyConnection.html (struct sqlx::AnyConnection)
   [24]: ../struct.Any.html (struct sqlx::Any)
   [25]: ../struct.SqliteConnection.html (struct sqlx::SqliteConnection)
   [26]: ../struct.Sqlite.html (struct sqlx::Sqlite)

