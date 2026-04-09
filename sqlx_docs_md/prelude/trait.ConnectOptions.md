## ConnectOptions

## [sqlx][1]0.8.6

## ConnectOptions

### Required Associated Types

  * Connection



### Required Methods

  * connect
  * from_url
  * log_slow_statements
  * log_statements



### Provided Methods

  * disable_statement_logging
  * to_url_lossy



### Dyn Compatibility

### Implementors

## [In sqlx::prelude][2]

[sqlx][3]::[prelude][2]

# Trait ConnectOptions Copy item path
[code]
    pub trait ConnectOptions:
        'static
        + [Send][4]
        + [Sync][5]
        + [FromStr][6]<Err = [Error][7]>
        + [Debug][8]
        + [Clone][9] {
        type Connection: [Connection][10]<Options = Self> + ?[Sized][11];
    
        // Required methods
        fn from_url(url: &[Url][12]) -> [Result][13]<Self, [Error][7]>;
        fn connect(
            &self,
        ) -> [Pin][14]<[Box][15]<dyn [Future][16]<Output = [Result][13]<Self::[Connection][17], [Error][7]>> + [Send][4] + '_>>
           where Self::[Connection][17]: [Sized][11];
        fn log_statements(self, level: [LevelFilter][18]) -> Self;
        fn log_slow_statements(self, level: [LevelFilter][18], duration: [Duration][19]) -> Self;
    
        // Provided methods
        fn to_url_lossy(&self) -> [Url][12] { ... }
        fn disable_statement_logging(self) -> Self { ... }
    }
[/code]

## Required Associated Types§

#### type Connection: [Connection][10]<Options = Self> \+ ?[Sized][11]

## Required Methods§

#### fn from_url(url: &[Url][12]) -> [Result][13]<Self, [Error][7]>

Parse the `ConnectOptions` from a URL.

#### fn connect( &self, ) -> [Pin][14]<[Box][15]<dyn [Future][16]<Output = [Result][13]<Self::[Connection][17], [Error][7]>> \+ [Send][4] \+ '_>>

where Self::[Connection][17]: [Sized][11],

Establish a new database connection with the options specified by `self`.

#### fn log_statements(self, level: [LevelFilter][18]) -> Self

Log executed statements with the specified `level`

#### fn log_slow_statements(self, level: [LevelFilter][18], duration: [Duration][19]) -> Self

Log executed statements with a duration above the specified `duration` at the specified `level`.

## Provided Methods§

#### fn to_url_lossy(&self) -> [Url][12]

Get a connection URL that may be used to connect to the same database as this `ConnectOptions`.

###### §Note: Lossy

Any flags or settings which do not have a representation in the URL format will be lost. They will fall back to their default settings when the URL is parsed.

The only settings guaranteed to be preserved are:

  * Username
  * Password
  * Hostname
  * Port
  * Database name
  * Unix socket or SQLite database file path
  * SSL mode (if applicable)
  * SSL CA certificate path
  * SSL client certificate path
  * SSL client key path



Additional settings are driver-specific. Refer to the source of a given implementation to see which options are preserved in the URL.

###### §Panics

This defaults to `unimplemented!()`.

Individual drivers should override this to implement the intended behavior.

#### fn disable_statement_logging(self) -> Self

Entirely disables statement logging (both slow and regular).

## Dyn Compatibility§

This trait is **not** [dyn compatible][20].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementors§

§

### impl [ConnectOptions][21] for [AnyConnectOptions][22]

§

#### type Connection = [AnyConnection][23]

§

### impl [ConnectOptions][21] for [SqliteConnectOptions][24]

§

#### type Connection = [SqliteConnection][25]

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [5]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [6]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html (trait core::str::traits::FromStr)
   [7]: ../enum.Error.html (enum sqlx::Error)
   [8]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [9]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [10]: ../trait.Connection.html (trait sqlx::Connection)
   [11]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [12]: https://docs.rs/url/2.5.7/url/struct.Url.html (struct url::Url)
   [13]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [14]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [15]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [16]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [17]: ../trait.ConnectOptions.html#associatedtype.Connection (type sqlx::ConnectOptions::Connection)
   [18]: https://docs.rs/log/0.4.29/log/enum.LevelFilter.html (enum log::LevelFilter)
   [19]: https://doc.rust-lang.org/1.94.1/core/time/struct.Duration.html (struct core::time::Duration)
   [20]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [21]: ../trait.ConnectOptions.html (trait sqlx::ConnectOptions)
   [22]: ../any/struct.AnyConnectOptions.html (struct sqlx::any::AnyConnectOptions)
   [23]: ../struct.AnyConnection.html (struct sqlx::AnyConnection)
   [24]: ../sqlite/struct.SqliteConnectOptions.html (struct sqlx::sqlite::SqliteConnectOptions)
   [25]: ../struct.SqliteConnection.html (struct sqlx::SqliteConnection)

