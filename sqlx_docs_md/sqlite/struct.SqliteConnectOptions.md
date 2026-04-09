## SqliteConnectOptions

## [sqlx][1]0.8.6

## SqliteConnectOptions

### Sections

  * Example



### Methods

  * analysis_limit
  * auto_vacuum
  * busy_timeout
  * collation
  * command_buffer_size
  * create_if_missing
  * extension
  * extension_with_entrypoint
  * filename
  * foreign_keys
  * get_filename
  * immutable
  * in_memory
  * journal_mode
  * locking_mode
  * new
  * optimize_on_close
  * page_size
  * pragma
  * read_only
  * row_buffer_size
  * serialized
  * shared_cache
  * statement_cache_capacity
  * synchronous
  * thread_name
  * vfs



### Trait Implementations

  * Clone
  * ConnectOptions
  * Debug
  * Default
  * FromStr
  * TryFrom<&'a AnyConnectOptions>



### Auto Trait Implementations

  * !RefUnwindSafe
  * !UnwindSafe
  * Freeze
  * Send
  * Sync
  * Unpin



### Blanket Implementations

  * Any
  * Borrow<T>
  * BorrowMut<T>
  * CloneToUninit
  * From<T>
  * Instrument
  * Into<U>
  * IntoEither
  * Same
  * ToOwned
  * TryFrom<U>
  * TryInto<U>
  * WithSubscriber



## [In sqlx::sqlite][2]

[sqlx][3]::[sqlite][2]

# Struct SqliteConnectOptions Copy item path
[code]
    pub struct SqliteConnectOptions { /* private fields */ }
[/code]

Expand description

Options and flags which can be used to configure a SQLite connection.

A value of `SqliteConnectOptions` can be parsed from a connection URL, as described by [SQLite][4].

This type also implements [`FromStr`][5] so you can parse it from a string containing a connection URL and then further adjust options if necessary (see example below).

| URL                        | Description                                            |
|----------------------------|--------------------------------------------------------|
| `sqlite::memory:`          | Open an in-memory database.                            |
| `sqlite:data.db`           | Open the file `data.db` in the current directory.      |
| `sqlite://data.db`         | Open the file `data.db` in the current directory.      |
| `sqlite:///data.db`        | Open the file `data.db` from the root (`/`) directory. |
| `sqlite://data.db?mode=ro` | Open the file `data.db` for read-only access.          |



## §Example
[code] 
    use sqlx::ConnectOptions;
    use sqlx::sqlite::{SqliteConnectOptions, SqliteJournalMode, SqlitePool};
    use std::str::FromStr;
    
    let opts = SqliteConnectOptions::from_str("sqlite://data.db")?
        .journal_mode(SqliteJournalMode::Wal)
        .read_only(true);
    
    // use in a pool
    let pool = SqlitePool::connect_with(opts).await?;
    
    // or connect directly
    let conn = opts.connect().await?;
[/code]

## Implementations§

§

### impl [SqliteConnectOptions][6]

#### pub fn new() -> [SqliteConnectOptions][6]

Construct `Self` with default options.

See the source of this method for the current defaults.

#### pub fn filename(self, filename: impl [AsRef][7]<[Path][8]>) -> [SqliteConnectOptions][6]

Sets the name of the database file.

This is a low-level API, and SQLx will apply no special treatment for `":memory:"` as an in-memory database using this method. Using [`SqliteConnectOptions::from_str()`][9] may be preferred for simple use cases.

#### pub fn get_filename(&self) -> &[Path][8]

Gets the current name of the database file.

#### pub fn foreign_keys(self, on: [bool][10]) -> [SqliteConnectOptions][6]

Set the enforcement of [foreign key constraints][11].

SQLx chooses to enable this by default so that foreign keys function as expected, compared to other database flavors.

#### pub fn in_memory(self, in_memory: [bool][10]) -> [SqliteConnectOptions][6]

Set the [`SQLITE_OPEN_MEMORY` flag][12].

By default, this is disabled.

#### pub fn shared_cache(self, on: [bool][10]) -> [SqliteConnectOptions][6]

Set the [`SQLITE_OPEN_SHAREDCACHE` flag][13].

By default, this is disabled.

#### pub fn journal_mode(self, mode: [SqliteJournalMode][14]) -> [SqliteConnectOptions][6]

Sets the [journal mode][15] for the database connection.

Journal modes are ephemeral per connection, with the exception of the [Write-Ahead Log (WAL) mode][16].

A database created in WAL mode retains the setting and will apply it to all connections opened against it that don’t set a `journal_mode`.

Opening a connection to a database created in WAL mode with a different `journal_mode` will erase the setting on the database, requiring an exclusive lock to do so. You may get a `database is locked` (corresponding to `SQLITE_BUSY`) error if another connection is accessing the database file at the same time.

SQLx does not set a journal mode by default, to avoid unintentionally changing a database into or out of WAL mode.

The default journal mode for non-WAL databases is `DELETE`, or `MEMORY` for in-memory databases.

For consistency, any commands in `sqlx-cli` which create a SQLite database will create it in WAL mode.

#### pub fn locking_mode(self, mode: [SqliteLockingMode][17]) -> [SqliteConnectOptions][6]

Sets the [locking mode][18] for the database connection.

The default locking mode is NORMAL.

#### pub fn read_only(self, read_only: [bool][10]) -> [SqliteConnectOptions][6]

Sets the [access mode][19] to open the database for read-only access.

#### pub fn create_if_missing(self, create: [bool][10]) -> [SqliteConnectOptions][6]

Sets the [access mode][19] to create the database file if the file does not exist.

By default, a new file **will not be created** if one is not found.

#### pub fn statement_cache_capacity(self, capacity: [usize][20]) -> [SqliteConnectOptions][6]

Sets the capacity of the connection’s statement cache in a number of stored distinct statements. Caching is handled using LRU, meaning when the amount of queries hits the defined limit, the oldest statement will get dropped.

The default cache capacity is 100 statements.

#### pub fn busy_timeout(self, timeout: [Duration][21]) -> [SqliteConnectOptions][6]

Sets a timeout value to wait when the database is locked, before returning a busy timeout error.

The default busy timeout is 5 seconds.

#### pub fn synchronous(self, synchronous: [SqliteSynchronous][22]) -> [SqliteConnectOptions][6]

Sets the [synchronous][23] setting for the database connection.

The default synchronous settings is FULL. However, if durability is not a concern, then NORMAL is normally all one needs in WAL mode.

#### pub fn auto_vacuum(self, auto_vacuum: [SqliteAutoVacuum][24]) -> [SqliteConnectOptions][6]

Sets the [auto_vacuum][25] setting for the database connection.

The default auto_vacuum setting is NONE.

For existing databases, a change to this value does not take effect unless a [`VACUUM` command][26] is executed.

#### pub fn page_size(self, page_size: [u32][27]) -> [SqliteConnectOptions][6]

Sets the [page_size][28] setting for the database connection.

The default page_size setting is 4096.

For existing databases, a change to this value does not take effect unless a [`VACUUM` command][26] is executed. However, it cannot be changed in WAL mode.

#### pub fn pragma<K, V>(self, key: K, value: V) -> [SqliteConnectOptions][6]

where K: [Into][29]<[Cow][30]<'static, [str][31]>>, V: [Into][29]<[Cow][30]<'static, [str][31]>>,

Sets custom initial pragma for the database connection.

#### pub fn collation<N, F>(self, name: N, collate: F) -> [SqliteConnectOptions][6]

where N: [Into][29]<[Arc][32]<[str][31]>>, F: [Fn][33](&[str][31], &[str][31]) -> [Ordering][34] \+ [Send][35] \+ [Sync][36] \+ 'static,

Add a custom collation for comparing strings in SQL.

If a collation with the same name already exists, it will be replaced.

See [`sqlite3_create_collation()`][37] for details.

Note this excerpt:

> The collating function must obey the following properties for all strings A, B, and C:
> 
> If A==B then B==A. If A==B and B==C then A==C. If A<B then B>A. If A<B and B<C then A<C.
> 
> If a collating function fails any of the above constraints and that collating function is registered and used, then the behavior of SQLite is undefined.

#### pub fn immutable(self, immutable: [bool][10]) -> [SqliteConnectOptions][6]

Set to `true` to signal to SQLite that the database file is on read-only media.

If enabled, SQLite assumes the database file _cannot_ be modified, even by higher privileged processes, and so disables locking and change detection. This is intended to improve performance but can produce incorrect query results or errors if the file _does_ change.

Note that this is different from the `SQLITE_OPEN_READONLY` flag set by [`.read_only()`][38], though the documentation suggests that this does _imply_ `SQLITE_OPEN_READONLY`.

See [`sqlite3_open`][39] (subheading “URI Filenames”) for details.

#### pub fn serialized(self, serialized: [bool][10]) -> [SqliteConnectOptions][6]

Sets the [threading mode][40] for the database connection.

The default setting is `false` corresponding to using `OPEN_NOMUTEX`. If set to `true` then `OPEN_FULLMUTEX`.

See [open][19] for more details.

###### §Note

Setting this to `true` may help if you are getting access violation errors or segmentation faults, but will also incur a significant performance penalty. You should leave this set to `false` if at all possible.

If you do end up needing to set this to `true` for some reason, please [open an issue][41] as this may indicate a concurrency bug in SQLx. Please provide clear instructions for reproducing the issue, including a sample database schema if applicable.

#### pub fn thread_name( self, generator: impl [Fn][33]([u64][42]) -> [String][43] \+ [Send][35] \+ [Sync][36] \+ 'static, ) -> [SqliteConnectOptions][6]

Provide a callback to generate the name of the background worker thread.

The value passed to the callback is an auto-incremented integer for use as the thread ID.

#### pub fn command_buffer_size(self, size: [usize][20]) -> [SqliteConnectOptions][6]

Set the maximum number of commands to buffer for the worker thread before backpressure is applied.

Given that most commands sent to the worker thread involve waiting for a result, the command channel is unlikely to fill up unless a lot queries are executed in a short period but cancelled before their full resultsets are returned.

#### pub fn row_buffer_size(self, size: [usize][20]) -> [SqliteConnectOptions][6]

Set the maximum number of rows to buffer back to the calling task when a query is executed.

If the calling task cannot keep up, backpressure will be applied to the worker thread in order to limit CPU and memory usage.

#### pub fn vfs(self, vfs_name: impl [Into][29]<[Cow][30]<'static, [str][31]>>) -> [SqliteConnectOptions][6]

Sets the [`vfs`][44] parameter of the database connection.

The default value is empty, and sqlite will use the default VFS object depending on the operating system.

#### pub fn extension( self, extension_name: impl [Into][29]<[Cow][30]<'static, [str][31]>>, ) -> [SqliteConnectOptions][6]

Load an [extension][45] at run-time when the database connection is established, using the default entry point.

Most common SQLite extensions can be loaded using this method, for extensions where you need to specify the entry point, use [`extension_with_entrypoint`][46] instead.

Multiple extensions can be loaded by calling the method repeatedly on the options struct, they will be loaded in the order they are added.
[code] 
    let options = SqliteConnectOptions::from_str("sqlite://data.db")?
        .extension("vsv")
        .extension("mod_spatialite");
[/code]

#### pub fn extension_with_entrypoint( self, extension_name: impl [Into][29]<[Cow][30]<'static, [str][31]>>, entry_point: impl [Into][29]<[Cow][30]<'static, [str][31]>>, ) -> [SqliteConnectOptions][6]

Load an extension with a specified entry point.

Useful when using non-standard extensions, or when developing your own, the second argument specifies where SQLite should expect to find the extension init routine.

#### pub fn optimize_on_close( self, enabled: [bool][10], analysis_limit: impl [Into][29]<[Option][47]<[u32][27]>>, ) -> [SqliteConnectOptions][6]

Execute `PRAGMA optimize;` on the SQLite connection before closing.

The SQLite manual recommends using this for long-lived databases.

This will collect and store statistics about the layout of data in your tables to help the query planner make better decisions. Over the connection’s lifetime, the query planner will make notes about which tables could use up-to-date statistics so this command doesn’t have to scan the whole database every time. Thus, the best time to execute this is on connection close.

`analysis_limit` sets a soft limit on the maximum number of rows to scan per index. It is equivalent to setting [`Self::analysis_limit`][48] but only takes effect for the `PRAGMA optimize;` call and does not affect the behavior of any `ANALYZE` statements made during the connection’s lifetime.

If not `None`, the `analysis_limit` here overrides the global `analysis_limit` setting, but only for the `PRAGMA optimize;` call.

Not enabled by default.

See [the SQLite manual][49] for details.

#### pub fn analysis_limit( self, limit: impl [Into][29]<[Option][47]<[u32][27]>>, ) -> [SqliteConnectOptions][6]

Set a soft limit on the number of rows that `ANALYZE` touches per index.

This also affects `PRAGMA optimize` which is set by [Self::optimize_on_close][50].

The value recommended by SQLite is `400`. There is no default.

See [the SQLite manual][51] for details.

## Trait Implementations§

§

### impl [Clone][52] for [SqliteConnectOptions][6]

§

#### fn [clone][53](&self) -> [SqliteConnectOptions][6]

Returns a duplicate of the value. [Read more][53]

1.0.0 · [Source][54]§

#### fn [clone_from][55](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][55]

§

### impl [ConnectOptions][56] for [SqliteConnectOptions][6]

§

#### type [Connection][57] = [SqliteConnection][58]

§

#### fn [from_url][59](url: &[Url][60]) -> [Result][61]<[SqliteConnectOptions][6], [Error][62]>

Parse the `ConnectOptions` from a URL.

§

#### fn [to_url_lossy][63](&self) -> [Url][60]

Get a connection URL that may be used to connect to the same database as this `ConnectOptions`. [Read more][63]

§

#### fn [connect][64]( &self, ) -> [Pin][65]<[Box][66]<dyn [Future][67]<Output = [Result][61]<<[SqliteConnectOptions][6] as [ConnectOptions][56]>::[Connection][68], [Error][62]>> \+ [Send][35] \+ '_>>

where <[SqliteConnectOptions][6] as [ConnectOptions][56]>::[Connection][68]: [Sized][69],

Establish a new database connection with the options specified by `self`.

§

#### fn [log_statements][70](self, level: [LevelFilter][71]) -> [SqliteConnectOptions][6]

Log executed statements with the specified `level`

§

#### fn [log_slow_statements][72]( self, level: [LevelFilter][71], duration: [Duration][21], ) -> [SqliteConnectOptions][6]

Log executed statements with a duration above the specified `duration` at the specified `level`.

§

#### fn [disable_statement_logging][73](self) -> Self

Entirely disables statement logging (both slow and regular).

§

### impl [Debug][74] for [SqliteConnectOptions][6]

§

#### fn [fmt][75](&self, f: &mut [Formatter][76]<'_>) -> [Result][61]<[()][77], [Error][78]>

Formats the value using the given formatter. [Read more][75]

§

### impl [Default][79] for [SqliteConnectOptions][6]

§

#### fn [default][80]() -> [SqliteConnectOptions][6]

Returns the “default value” for a type. [Read more][80]

§

### impl [FromStr][5] for [SqliteConnectOptions][6]

§

#### type [Err][81] = [Error][62]

The associated error which can be returned from parsing.

§

#### fn [from_str][82]( url: &[str][31], ) -> [Result][61]<[SqliteConnectOptions][6], <[SqliteConnectOptions][6] as [FromStr][5]>::[Err][83]>

Parses a string `s` to return a value of this type. [Read more][82]

§

### impl<'a> [TryFrom][84]<&'a [AnyConnectOptions][85]> for [SqliteConnectOptions][6]

§

#### type [Error][86] = [Error][62]

The type returned in the event of a conversion error.

§

#### fn [try_from][87]( opts: &'a [AnyConnectOptions][85], ) -> [Result][61]<[SqliteConnectOptions][6], <[SqliteConnectOptions][6] as [TryFrom][84]<&'a [AnyConnectOptions][85]>>::[Error][88]>

Performs the conversion.

## Auto Trait Implementations§

§

### impl [Freeze][89] for [SqliteConnectOptions][6]

§

### impl ![RefUnwindSafe][90] for [SqliteConnectOptions][6]

§

### impl [Send][35] for [SqliteConnectOptions][6]

§

### impl [Sync][36] for [SqliteConnectOptions][6]

§

### impl [Unpin][91] for [SqliteConnectOptions][6]

§

### impl ![UnwindSafe][92] for [SqliteConnectOptions][6]

## Blanket Implementations§

[Source][93]§

### impl<T> [Any][94] for T

where T: 'static + ?[Sized][69],

[Source][95]§

#### fn [type_id][96](&self) -> [TypeId][97]

Gets the `TypeId` of `self`. [Read more][96]

[Source][98]§

### impl<T> [Borrow][99]<T> for T

where T: ?[Sized][69],

[Source][100]§

#### fn [borrow][101](&self) -> [&T][102]

Immutably borrows from an owned value. [Read more][101]

[Source][103]§

### impl<T> [BorrowMut][104]<T> for T

where T: ?[Sized][69],

[Source][105]§

#### fn [borrow_mut][106](&mut self) -> [&mut T][102]

Mutably borrows from an owned value. [Read more][106]

[Source][107]§

### impl<T> [CloneToUninit][108] for T

where T: [Clone][52],

[Source][109]§

#### unsafe fn [clone_to_uninit][110](&self, dest: [*mut ][111][u8][112])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][110]

[Source][113]§

### impl<T> [From][114]<T> for T

[Source][115]§

#### fn [from][116](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][117] [`Span`][118], returning an `Instrumented` wrapper. Read more

[Source][119]§

### impl<T, U> [Into][29]<U> for T

where U: [From][114]<T>,

[Source][120]§

#### fn [into][121](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][114]<T> for U` chooses to do.

[Source][122]§

### impl<T> [IntoEither][123] for T

[Source][124]§

#### fn [into_either][125](self, into_left: [bool][10]) -> [Either][126]<Self, Self> ⓘ

Converts `self` into a [`Left`][127] variant of [`Either<Self, Self>`][126] if `into_left` is `true`. Converts `self` into a [`Right`][128] variant of [`Either<Self, Self>`][126] otherwise. [Read more][125]

[Source][129]§

#### fn [into_either_with][130]<F>(self, into_left: F) -> [Either][126]<Self, Self> ⓘ

where F: [FnOnce][131](&Self) -> [bool][10],

Converts `self` into a [`Left`][127] variant of [`Either<Self, Self>`][126] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][128] variant of [`Either<Self, Self>`][126] otherwise. [Read more][130]

[Source][132]§

### impl<T> [Same][133] for T

[Source][134]§

#### type [Output][135] = T

Should always be `Self`

[Source][136]§

### impl<T> [ToOwned][137] for T

where T: [Clone][52],

[Source][138]§

#### type [Owned][139] = T

The resulting type after obtaining ownership.

[Source][140]§

#### fn [to_owned][141](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][141]

[Source][142]§

#### fn [clone_into][143](&self, target: [&mut T][102])

Uses borrowed data to replace owned data, usually by cloning. [Read more][143]

[Source][144]§

### impl<T, U> [TryFrom][84]<U> for T

where U: [Into][29]<T>,

[Source][145]§

#### type [Error][86] = [Infallible][146]

The type returned in the event of a conversion error.

[Source][147]§

#### fn [try_from][87](value: U) -> [Result][61]<T, <T as [TryFrom][84]<U>>::[Error][88]>

Performs the conversion.

[Source][148]§

### impl<T, U> [TryInto][149]<U> for T

where U: [TryFrom][84]<T>,

[Source][150]§

#### type [Error][151] = <U as [TryFrom][84]<T>>::[Error][88]

The type returned in the event of a conversion error.

[Source][152]§

#### fn [try_into][153](self) -> [Result][61]<U, <U as [TryFrom][84]<T>>::[Error][88]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][29]<Dispatch>,

Attaches the provided [`Subscriber`][154] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][155] [`Subscriber`][154] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://www.sqlite.org/uri.html
   [5]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html (trait core::str::traits::FromStr)
   [6]: struct.SqliteConnectOptions.html (struct sqlx::sqlite::SqliteConnectOptions)
   [7]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [8]: https://doc.rust-lang.org/1.94.1/std/path/struct.Path.html (struct std::path::Path)
   [9]: struct.SqliteConnectOptions.html#from_str (struct sqlx::sqlite::SqliteConnectOptions)
   [10]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [11]: https://www.sqlite.org/pragma.html#pragma_foreign_keys
   [12]: https://sqlite.org/c3ref/open.html
   [13]: https://sqlite.org/sharedcache.html
   [14]: enum.SqliteJournalMode.html (enum sqlx::sqlite::SqliteJournalMode)
   [15]: https://www.sqlite.org/pragma.html#pragma_journal_mode
   [16]: https://www.sqlite.org/wal.html
   [17]: enum.SqliteLockingMode.html (enum sqlx::sqlite::SqliteLockingMode)
   [18]: https://www.sqlite.org/pragma.html#pragma_locking_mode
   [19]: https://www.sqlite.org/c3ref/open.html
   [20]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [21]: https://doc.rust-lang.org/1.94.1/core/time/struct.Duration.html (struct core::time::Duration)
   [22]: enum.SqliteSynchronous.html (enum sqlx::sqlite::SqliteSynchronous)
   [23]: https://www.sqlite.org/pragma.html#pragma_synchronous
   [24]: enum.SqliteAutoVacuum.html (enum sqlx::sqlite::SqliteAutoVacuum)
   [25]: https://www.sqlite.org/pragma.html#pragma_auto_vacuum
   [26]: https://www.sqlite.org/lang_vacuum.html
   [27]: https://doc.rust-lang.org/1.94.1/std/primitive.u32.html
   [28]: https://www.sqlite.org/pragma.html#pragma_page_size
   [29]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [30]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [31]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [32]: https://doc.rust-lang.org/1.94.1/alloc/sync/struct.Arc.html (struct alloc::sync::Arc)
   [33]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.Fn.html (trait core::ops::function::Fn)
   [34]: https://doc.rust-lang.org/1.94.1/core/cmp/enum.Ordering.html (enum core::cmp::Ordering)
   [35]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [36]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [37]: https://www.sqlite.org/c3ref/create_collation.html
   [38]: struct.SqliteConnectOptions.html#method.read_only (method sqlx::sqlite::SqliteConnectOptions::read_only)
   [39]: https://www.sqlite.org/capi3ref.html#sqlite3_open
   [40]: https://www.sqlite.org/threadsafe.html
   [41]: https://github.com/launchbadge/sqlx/issues/new/choose
   [42]: https://doc.rust-lang.org/1.94.1/std/primitive.u64.html
   [43]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [44]: https://www.sqlite.org/vfs.html
   [45]: https://www.sqlite.org/loadext.html
   [46]: struct.SqliteConnectOptions.html#method.extension_with_entrypoint (method sqlx::sqlite::SqliteConnectOptions::extension_with_entrypoint)
   [47]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [48]: struct.SqliteConnectOptions.html#method.analysis_limit (method sqlx::sqlite::SqliteConnectOptions::analysis_limit)
   [49]: https://www.sqlite.org/lang_analyze.html#automatically_running_analyze
   [50]: struct.SqliteConnectOptions.html#method.optimize_on_close (method sqlx::sqlite::SqliteConnectOptions::optimize_on_close)
   [51]: https://www.sqlite.org/lang_analyze.html#approx
   [52]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [53]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [54]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [55]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [56]: ../trait.ConnectOptions.html (trait sqlx::ConnectOptions)
   [57]: ../trait.ConnectOptions.html#associatedtype.Connection
   [58]: ../struct.SqliteConnection.html (struct sqlx::SqliteConnection)
   [59]: ../trait.ConnectOptions.html#tymethod.from_url
   [60]: https://docs.rs/url/2.5.7/url/struct.Url.html (struct url::Url)
   [61]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [62]: ../enum.Error.html (enum sqlx::Error)
   [63]: ../trait.ConnectOptions.html#method.to_url_lossy
   [64]: ../trait.ConnectOptions.html#tymethod.connect
   [65]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [66]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [67]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [68]: ../trait.ConnectOptions.html#associatedtype.Connection (type sqlx::ConnectOptions::Connection)
   [69]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [70]: ../trait.ConnectOptions.html#tymethod.log_statements
   [71]: https://docs.rs/log/0.4.29/log/enum.LevelFilter.html (enum log::LevelFilter)
   [72]: ../trait.ConnectOptions.html#tymethod.log_slow_statements
   [73]: ../trait.ConnectOptions.html#method.disable_statement_logging
   [74]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [75]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [76]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [77]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [78]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [79]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [80]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [81]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#associatedtype.Err
   [82]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#tymethod.from_str
   [83]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#associatedtype.Err (type core::str::traits::FromStr::Err)
   [84]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [85]: ../any/struct.AnyConnectOptions.html (struct sqlx::any::AnyConnectOptions)
   [86]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [87]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [88]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [89]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [90]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [91]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [92]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [93]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [94]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [95]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [96]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [97]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [98]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [99]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [100]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [101]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [102]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [103]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [104]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [105]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [106]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [107]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [108]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [109]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [110]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [111]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [112]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [113]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [114]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [115]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [116]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [117]: super::Span::current()
   [118]: crate::Span
   [119]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [120]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [121]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [122]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [123]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [124]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [125]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [126]: ../enum.Either.html (enum sqlx::Either)
   [127]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [128]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [129]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [130]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [131]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [132]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [133]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [134]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [135]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [136]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [137]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [138]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [139]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [140]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [141]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [142]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [143]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [144]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [145]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [146]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [147]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [148]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [149]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [150]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [151]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [152]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [153]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [154]: super::Subscriber
   [155]: dispatcher#setting-the-default-subscriber

