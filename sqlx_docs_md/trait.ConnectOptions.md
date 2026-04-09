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

## [In crate sqlx][2]

[sqlx][2]

# Trait ConnectOptions Copy item path
[code]
    pub trait ConnectOptions:
        'static
        + [Send][3]
        + [Sync][4]
        + [FromStr][5]<Err = [Error][6]>
        + [Debug][7]
        + [Clone][8] {
        type Connection: [Connection][9]<Options = Self> + ?[Sized][10];
    
        // Required methods
        fn from_url(url: &[Url][11]) -> [Result][12]<Self, [Error][6]>;
        fn connect(
            &self,
        ) -> [Pin][13]<[Box][14]<dyn [Future][15]<Output = [Result][12]<Self::[Connection][16], [Error][6]>> + [Send][3] + '_>>
           where Self::[Connection][16]: [Sized][10];
        fn log_statements(self, level: [LevelFilter][17]) -> Self;
        fn log_slow_statements(self, level: [LevelFilter][17], duration: [Duration][18]) -> Self;
    
        // Provided methods
        fn to_url_lossy(&self) -> [Url][11] { ... }
        fn disable_statement_logging(self) -> Self { ... }
    }
[/code]

## Required Associated Types§

#### type Connection: [Connection][9]<Options = Self> \+ ?[Sized][10]

## Required Methods§

#### fn from_url(url: &[Url][11]) -> [Result][12]<Self, [Error][6]>

Parse the `ConnectOptions` from a URL.

#### fn connect( &self, ) -> [Pin][13]<[Box][14]<dyn [Future][15]<Output = [Result][12]<Self::[Connection][16], [Error][6]>> \+ [Send][3] \+ '_>>

where Self::[Connection][16]: [Sized][10],

Establish a new database connection with the options specified by `self`.

#### fn log_statements(self, level: [LevelFilter][17]) -> Self

Log executed statements with the specified `level`

#### fn log_slow_statements(self, level: [LevelFilter][17], duration: [Duration][18]) -> Self

Log executed statements with a duration above the specified `duration` at the specified `level`.

## Provided Methods§

#### fn to_url_lossy(&self) -> [Url][11]

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

This trait is **not** [dyn compatible][19].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementors§

§

### impl [ConnectOptions][20] for [AnyConnectOptions][21]

§

#### type Connection = [AnyConnection][22]

§

### impl [ConnectOptions][20] for [SqliteConnectOptions][23]

§

#### type Connection = [SqliteConnection][24]

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [4]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [5]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html (trait core::str::traits::FromStr)
   [6]: enum.Error.html (enum sqlx::Error)
   [7]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [8]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [9]: trait.Connection.html (trait sqlx::Connection)
   [10]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [11]: https://docs.rs/url/2.5.7/url/struct.Url.html (struct url::Url)
   [12]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [13]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [14]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [15]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [16]: trait.ConnectOptions.html#associatedtype.Connection (type sqlx::ConnectOptions::Connection)
   [17]: https://docs.rs/log/0.4.29/log/enum.LevelFilter.html (enum log::LevelFilter)
   [18]: https://doc.rust-lang.org/1.94.1/core/time/struct.Duration.html (struct core::time::Duration)
   [19]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [20]: trait.ConnectOptions.html (trait sqlx::ConnectOptions)
   [21]: any/struct.AnyConnectOptions.html (struct sqlx::any::AnyConnectOptions)
   [22]: struct.AnyConnection.html (struct sqlx::AnyConnection)
   [23]: sqlite/struct.SqliteConnectOptions.html (struct sqlx::sqlite::SqliteConnectOptions)
   [24]: struct.SqliteConnection.html (struct sqlx::SqliteConnection)

