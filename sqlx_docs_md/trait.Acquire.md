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

## [In crate sqlx][2]

[sqlx][2]

# Trait Acquire Copy item path
[code]
    pub trait Acquire<'c> {
        type Database: [Database][3];
        type Connection: [Deref][4]<Target = <Self::[Database][5] as [Database][3]>::[Connection][6]> + [DerefMut][7] + [Send][8];
    
        // Required methods
        fn acquire(
            self,
        ) -> [Pin][9]<[Box][10]<dyn [Future][11]<Output = [Result][12]<Self::[Connection][13], [Error][14]>> + [Send][8] + 'c>>;
        fn begin(
            self,
        ) -> [Pin][9]<[Box][10]<dyn [Future][11]<Output = [Result][12]<[Transaction][15]<'c, Self::[Database][5]>, [Error][14]>> + [Send][8] + 'c>>;
    }
[/code]

Expand description

Acquire connections or transactions from a database in a generic way.

If you want to accept generic database connections that implement [`Acquire`][16] which then allows you to [`acquire`][17] a connection or [`begin`][18] a transaction, then you can do it like that:
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

If you run into a lifetime error about “implementation of `sqlx::Acquire` is not general enough”, the [workaround][19] looks like this:
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

#### type Database: [Database][3]

#### type Connection: [Deref][4]<Target = <Self::[Database][5] as [Database][3]>::[Connection][6]> \+ [DerefMut][7] \+ [Send][8]

## Required Methods§

#### fn acquire( self, ) -> [Pin][9]<[Box][10]<dyn [Future][11]<Output = [Result][12]<Self::[Connection][13], [Error][14]>> \+ [Send][8] \+ 'c>>

#### fn begin( self, ) -> [Pin][9]<[Box][10]<dyn [Future][11]<Output = [Result][12]<[Transaction][15]<'c, Self::[Database][5]>, [Error][14]>> \+ [Send][8] \+ 'c>>

## Implementors§

§

### impl<'a, DB> [Acquire][16]<'a> for &[Pool][20]<DB>

where DB: [Database][3],

§

#### type Database = DB

§

#### type Connection = [PoolConnection][21]<DB>

§

### impl<'c> [Acquire][16]<'c> for &'c mut [AnyConnection][22]

§

#### type Database = [Any][23]

§

#### type Connection = &'c mut <[Any][23] as [Database][3]>::[Connection][6]

§

### impl<'c> [Acquire][16]<'c> for &'c mut [SqliteConnection][24]

§

#### type Database = [Sqlite][25]

§

#### type Connection = &'c mut <[Sqlite][25] as [Database][3]>::[Connection][6]

§

### impl<'c, 't, DB> [Acquire][16]<'t> for &'t mut [Transaction][15]<'c, DB>

where DB: [Database][3],

§

#### type Database = DB

§

#### type Connection = &'t mut <DB as [Database][3]>::[Connection][6]

§

### impl<'c, DB> [Acquire][16]<'c> for &'c mut [PoolConnection][21]<DB>

where DB: [Database][3],

§

#### type Database = DB

§

#### type Connection = &'c mut <DB as [Database][3]>::[Connection][6]

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: trait.Database.html (trait sqlx::Database)
   [4]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html (trait core::ops::deref::Deref)
   [5]: trait.Acquire.html#associatedtype.Database (type sqlx::Acquire::Database)
   [6]: trait.Database.html#associatedtype.Connection (type sqlx::Database::Connection)
   [7]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.DerefMut.html (trait core::ops::deref::DerefMut)
   [8]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [9]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [10]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [11]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [12]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [13]: trait.Acquire.html#associatedtype.Connection (type sqlx::Acquire::Connection)
   [14]: enum.Error.html (enum sqlx::Error)
   [15]: struct.Transaction.html (struct sqlx::Transaction)
   [16]: trait.Acquire.html (trait sqlx::Acquire)
   [17]: trait.Acquire.html#tymethod.acquire (method sqlx::Acquire::acquire)
   [18]: trait.Acquire.html#tymethod.begin (method sqlx::Acquire::begin)
   [19]: https://github.com/launchbadge/sqlx/issues/1015#issuecomment-767787777
   [20]: struct.Pool.html (struct sqlx::Pool)
   [21]: pool/struct.PoolConnection.html (struct sqlx::pool::PoolConnection)
   [22]: struct.AnyConnection.html (struct sqlx::AnyConnection)
   [23]: struct.Any.html (struct sqlx::Any)
   [24]: struct.SqliteConnection.html (struct sqlx::SqliteConnection)
   [25]: struct.Sqlite.html (struct sqlx::Sqlite)

