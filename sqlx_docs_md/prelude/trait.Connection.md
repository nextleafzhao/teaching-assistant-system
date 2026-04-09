## Connection

## [sqlx][1]0.8.6

## Connection

### Required Associated Types

  * Database
  * Options



### Required Methods

  * begin
  * close
  * ping
  * shrink_buffers



### Provided Methods

  * begin_with
  * cached_statements_size
  * clear_cached_statements
  * connect
  * connect_with
  * is_in_transaction
  * transaction



### Implementors

## [In sqlx::prelude][2]

[sqlx][3]::[prelude][2]

# Trait Connection Copy item path
[code]
    pub trait Connection: [Send][4] {
        type Database: [Database][5]<Connection = Self>;
        type Options: [ConnectOptions][6]<Connection = Self>;
    
        // Required methods
        fn close(self) -> [Pin][7]<[Box][8]<dyn [Future][9]<Output = [Result][10]<[()][11], [Error][12]>> + [Send][4]>>;
        fn ping(
            &mut self,
        ) -> [Pin][7]<[Box][8]<dyn [Future][9]<Output = [Result][10]<[()][11], [Error][12]>> + [Send][4] + '_>>;
        fn begin(
            &mut self,
        ) -> [Pin][7]<[Box][8]<dyn [Future][9]<Output = [Result][10]<[Transaction][13]<'_, Self::[Database][14]>, [Error][12]>> + [Send][4] + '_>>
           where Self: [Sized][15];
        fn shrink_buffers(&mut self);
    
        // Provided methods
        fn begin_with(
            &mut self,
            statement: impl [Into][16]<[Cow][17]<'static, [str][18]>>,
        ) -> [Pin][7]<[Box][8]<dyn [Future][9]<Output = [Result][10]<[Transaction][13]<'_, Self::[Database][14]>, [Error][12]>> + [Send][4] + '_>>
           where Self: [Sized][15] { ... }
        fn is_in_transaction(&self) -> [bool][19] { ... }
        fn transaction<'a, F, R, E>(
            &'a mut self,
            callback: F,
        ) -> [Pin][7]<[Box][8]<dyn [Future][9]<Output = [Result][10]<R, E>> + [Send][4] + 'a>>
           where F: for<'c> [FnOnce][20](&'c mut [Transaction][13]<'_, Self::[Database][14]>) -> [Pin][7]<[Box][8]<dyn [Future][9]<Output = [Result][10]<R, E>> + [Send][4] + 'c>> + 'a + for<'c> [Send][4] + for<'c> [Sync][21],
                 Self: [Sized][15],
                 R: [Send][4],
                 E: [From][22]<[Error][12]> + [Send][4] { ... }
        fn cached_statements_size(&self) -> [usize][23]
           where Self::[Database][14]: [HasStatementCache][24] { ... }
        fn clear_cached_statements(
            &mut self,
        ) -> [Pin][7]<[Box][8]<dyn [Future][9]<Output = [Result][10]<[()][11], [Error][12]>> + [Send][4] + '_>>
           where Self::[Database][14]: [HasStatementCache][24] { ... }
        fn connect(
            url: &[str][18],
        ) -> [Pin][7]<[Box][8]<dyn [Future][9]<Output = [Result][10]<Self, [Error][12]>> + [Send][4]>>
           where Self: [Sized][15] { ... }
        fn connect_with(
            options: &Self::[Options][25],
        ) -> [Pin][7]<[Box][8]<dyn [Future][9]<Output = [Result][10]<Self, [Error][12]>> + [Send][4] + '_>>
           where Self: [Sized][15] { ... }
    }
[/code]

Expand description

Represents a single database connection.

## Required Associated Types§

#### type Database: [Database][5]<Connection = Self>

#### type Options: [ConnectOptions][6]<Connection = Self>

## Required Methods§

#### fn close(self) -> [Pin][7]<[Box][8]<dyn [Future][9]<Output = [Result][10]<[()][11], [Error][12]>> \+ [Send][4]>>

Explicitly close this database connection.

This notifies the database server that the connection is closing so that it can free up any server-side resources in use.

While connections can simply be dropped to clean up local resources, the `Drop` handler itself cannot notify the server that the connection is being closed because that may require I/O to send a termination message. That can result in a delay before the server learns that the connection is gone, usually from a TCP keepalive timeout.

Creating and dropping many connections in short order without calling `.close()` may lead to errors from the database server because those senescent connections will still count against any connection limit or quota that is configured.

Therefore it is recommended to call `.close()` on a connection when you are done using it and to `.await` the result to ensure the termination message is sent.

#### fn ping( &mut self, ) -> [Pin][7]<[Box][8]<dyn [Future][9]<Output = [Result][10]<[()][11], [Error][12]>> \+ [Send][4] \+ '_>>

Checks if a connection to the database is still valid.

#### fn begin( &mut self, ) -> [Pin][7]<[Box][8]<dyn [Future][9]<Output = [Result][10]<[Transaction][13]<'_, Self::[Database][14]>, [Error][12]>> \+ [Send][4] \+ '_>>

where Self: [Sized][15],

Begin a new transaction or establish a savepoint within the active transaction.

Returns a [`Transaction`][13] for controlling and tracking the new transaction.

#### fn shrink_buffers(&mut self)

Restore any buffers in the connection to their default capacity, if possible.

Sending a large query or receiving a resultset with many columns can cause the connection to allocate additional buffer space to fit the data which is retained afterwards in case it’s needed again. This can give the outward appearance of a memory leak, but is in fact the intended behavior.

Calling this method tells the connection to release that excess memory if it can, though be aware that calling this too often can cause unnecessary thrashing or fragmentation in the global allocator. If there’s still data in the connection buffers (unlikely if the last query was run to completion) then it may need to be moved to allow the buffers to shrink.

## Provided Methods§

#### fn begin_with( &mut self, statement: impl [Into][16]<[Cow][17]<'static, [str][18]>>, ) -> [Pin][7]<[Box][8]<dyn [Future][9]<Output = [Result][10]<[Transaction][13]<'_, Self::[Database][14]>, [Error][12]>> \+ [Send][4] \+ '_>>

where Self: [Sized][15],

Begin a new transaction with a custom statement.

Returns a [`Transaction`][13] for controlling and tracking the new transaction.

Returns an error if the connection is already in a transaction or if `statement` does not put the connection into a transaction.

#### fn is_in_transaction(&self) -> [bool][19]

Returns `true` if the connection is currently in a transaction.

##### §Note: Automatic Rollbacks May Not Be Counted

Certain database errors (such as a serializable isolation failure) can cause automatic rollbacks of a transaction which may not be indicated in the return value of this method.

#### fn transaction<'a, F, R, E>( &'a mut self, callback: F, ) -> [Pin][7]<[Box][8]<dyn [Future][9]<Output = [Result][10]<R, E>> \+ [Send][4] \+ 'a>>

where F: for<'c> [FnOnce][20](&'c mut [Transaction][13]<'_, Self::[Database][14]>) -> [Pin][7]<[Box][8]<dyn [Future][9]<Output = [Result][10]<R, E>> \+ [Send][4] \+ 'c>> \+ 'a + for<'c> [Send][4] \+ for<'c> [Sync][21], Self: [Sized][15], R: [Send][4], E: [From][22]<[Error][12]> \+ [Send][4],

Execute the function inside a transaction.

If the function returns an error, the transaction will be rolled back. If it does not return an error, the transaction will be committed.

##### §Example
[code] 
    use sqlx::postgres::{PgConnection, PgRow};
    use sqlx::Connection;
    
    conn.transaction(|txn| Box::pin(async move {
        sqlx::query("select * from ..").fetch_all(&mut **txn).await
    })).await
[/code]

#### fn cached_statements_size(&self) -> [usize][23]

where Self::[Database][14]: [HasStatementCache][24],

The number of statements currently cached in the connection.

#### fn clear_cached_statements( &mut self, ) -> [Pin][7]<[Box][8]<dyn [Future][9]<Output = [Result][10]<[()][11], [Error][12]>> \+ [Send][4] \+ '_>>

where Self::[Database][14]: [HasStatementCache][24],

Removes all statements from the cache, closing them on the server if needed.

#### fn connect( url: &[str][18], ) -> [Pin][7]<[Box][8]<dyn [Future][9]<Output = [Result][10]<Self, [Error][12]>> \+ [Send][4]>>

where Self: [Sized][15],

Establish a new database connection.

A value of [`Options`][26] is parsed from the provided connection string. This parsing is database-specific.

#### fn connect_with( options: &Self::[Options][25], ) -> [Pin][7]<[Box][8]<dyn [Future][9]<Output = [Result][10]<Self, [Error][12]>> \+ [Send][4] \+ '_>>

where Self: [Sized][15],

Establish a new database connection with the provided options.

## Implementors§

§

### impl [Connection][27] for [AnyConnection][28]

§

#### type Database = [Any][29]

§

#### type Options = [AnyConnectOptions][30]

§

### impl [Connection][27] for [SqliteConnection][31]

§

#### type Database = [Sqlite][32]

§

#### type Options = [SqliteConnectOptions][33]

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [5]: ../trait.Database.html (trait sqlx::Database)
   [6]: ../trait.ConnectOptions.html (trait sqlx::ConnectOptions)
   [7]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [8]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [9]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [10]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [11]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [12]: ../enum.Error.html (enum sqlx::Error)
   [13]: ../struct.Transaction.html (struct sqlx::Transaction)
   [14]: ../trait.Connection.html#associatedtype.Database (type sqlx::Connection::Database)
   [15]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [16]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [17]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [18]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [19]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [20]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [21]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [22]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [23]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [24]: ../database/trait.HasStatementCache.html (trait sqlx::database::HasStatementCache)
   [25]: ../trait.Connection.html#associatedtype.Options (type sqlx::Connection::Options)
   [26]: ../trait.Connection.html#associatedtype.Options (associated type sqlx::Connection::Options)
   [27]: ../trait.Connection.html (trait sqlx::Connection)
   [28]: ../struct.AnyConnection.html (struct sqlx::AnyConnection)
   [29]: ../struct.Any.html (struct sqlx::Any)
   [30]: ../any/struct.AnyConnectOptions.html (struct sqlx::any::AnyConnectOptions)
   [31]: ../struct.SqliteConnection.html (struct sqlx::SqliteConnection)
   [32]: ../struct.Sqlite.html (struct sqlx::Sqlite)
   [33]: ../sqlite/struct.SqliteConnectOptions.html (struct sqlx::sqlite::SqliteConnectOptions)

