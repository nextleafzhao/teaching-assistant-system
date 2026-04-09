## All

## [sqlx][1]0.8.6

### Crate Items

  * Macros
  * Structs
  * Enums
  * Constants
  * Traits
  * Functions
  * Type Aliases
  * Attribute Macros
  * Derive Macros



# List of all items

### Structs

  * [Any][2]
  * [AnyConnection][3]
  * [Pool][4]
  * [QueryBuilder][5]
  * [RawSql][6]
  * [Sqlite][7]
  * [SqliteConnection][8]
  * [Transaction][9]
  * [any::Any][10]
  * [any::AnyArguments][11]
  * [any::AnyConnectOptions][12]
  * [any::AnyQueryResult][13]
  * [any::AnyRow][14]
  * [any::AnyStatement][15]
  * [any::AnyTransactionManager][16]
  * [any::AnyTypeInfo][17]
  * [any::AnyValue][18]
  * [any::AnyValueRef][19]
  * [error::UnexpectedNullError][20]
  * [migrate::AppliedMigration][21]
  * [migrate::Migration][22]
  * [migrate::Migrator][23]
  * [pool::CloseEvent][24]
  * [pool::Pool][25]
  * [pool::PoolConnection][26]
  * [pool::PoolConnectionMetadata][27]
  * [pool::PoolOptions][28]
  * [query::Map][29]
  * [query::Query][30]
  * [query::QueryAs][31]
  * [query::QueryScalar][32]
  * [query_builder::QueryBuilder][33]
  * [query_builder::Separated][34]
  * [sqlite::LockedSqliteHandle][35]
  * [sqlite::Sqlite][36]
  * [sqlite::SqliteArguments][37]
  * [sqlite::SqliteColumn][38]
  * [sqlite::SqliteConnectOptions][39]
  * [sqlite::SqliteConnection][40]
  * [sqlite::SqliteError][41]
  * [sqlite::SqliteOwnedBuf][42]
  * [sqlite::SqliteQueryResult][43]
  * [sqlite::SqliteRow][44]
  * [sqlite::SqliteStatement][45]
  * [sqlite::SqliteTransactionManager][46]
  * [sqlite::SqliteTypeInfo][47]
  * [sqlite::SqliteValue][48]
  * [sqlite::SqliteValueRef][49]
  * [sqlite::UpdateHookResult][50]
  * [types::Json][51]
  * [types::JsonRawValue][52]
  * [types::Text][53]



### Enums

  * [Either][54]
  * [Error][55]
  * [any::AnyKind][56]
  * [any::AnyTypeInfoKind][57]
  * [encode::IsNull][58]
  * [error::Error][59]
  * [error::ErrorKind][60]
  * [migrate::MigrateError][61]
  * [migrate::MigrationType][62]
  * [pool::MaybePoolConnection][63]
  * [pool::maybe::MaybePoolConnection][64]
  * [sqlite::SqliteArgumentValue][65]
  * [sqlite::SqliteAutoVacuum][66]
  * [sqlite::SqliteJournalMode][67]
  * [sqlite::SqliteLockingMode][68]
  * [sqlite::SqliteOperation][69]
  * [sqlite::SqliteSynchronous][70]
  * [types::JsonValue][71]



### Traits

  * [Acquire][72]
  * [AnyExecutor][73]
  * [Arguments][74]
  * [Column][75]
  * [ColumnIndex][76]
  * [ConnectOptions][77]
  * [Connection][78]
  * [Database][79]
  * [Decode][80]
  * [Encode][81]
  * [Execute][82]
  * [Executor][83]
  * [FromRow][84]
  * [IntoArguments][85]
  * [Row][86]
  * [SqliteExecutor][87]
  * [Statement][88]
  * [Type][89]
  * [TypeInfo][90]
  * [Value][91]
  * [ValueRef][92]
  * [any::AnyExecutor][93]
  * [database::Database][94]
  * [database::HasStatementCache][95]
  * [decode::Decode][96]
  * [encode::Encode][97]
  * [error::DatabaseError][98]
  * [migrate::Migrate][99]
  * [migrate::MigrateDatabase][100]
  * [migrate::MigrationSource][101]
  * [prelude::Acquire][102]
  * [prelude::ConnectOptions][103]
  * [prelude::Connection][104]
  * [prelude::Decode][105]
  * [prelude::Encode][106]
  * [prelude::Executor][107]
  * [prelude::FromRow][108]
  * [prelude::IntoArguments][109]
  * [prelude::Row][110]
  * [prelude::Statement][111]
  * [prelude::Type][112]
  * [sqlite::SqliteExecutor][113]
  * [types::Type][114]



### Macros

  * [migrate][115]
  * [query][116]
  * [query_as][117]
  * [query_as_unchecked][118]
  * [query_file][119]
  * [query_file_as][120]
  * [query_file_as_unchecked][121]
  * [query_file_scalar][122]
  * [query_file_scalar_unchecked][123]
  * [query_file_unchecked][124]
  * [query_scalar][125]
  * [query_scalar_unchecked][126]
  * [query_unchecked][127]



### Attribute Macros

  * [test][128]



### Derive Macros

  * [Decode][129]
  * [Encode][130]
  * [prelude::Decode][131]
  * [prelude::Encode][132]
  * [prelude::FromRow][133]
  * [prelude::Type][134]



### Functions

  * [any::install_default_drivers][135]
  * [any::install_drivers][136]
  * [error::mismatched_types][137]
  * [migrate::resolve_blocking][138]
  * [query][139]
  * [query_as][140]
  * [query_as_with][141]
  * [query_scalar][142]
  * [query_scalar_with][143]
  * [query_with][144]
  * [raw_sql][145]



### Type Aliases

  * [AnyPool][146]
  * [Result][147]
  * [SqlitePool][148]
  * [SqliteTransaction][149]
  * [any::AnyPoolOptions][150]
  * [error::BoxDynError][151]
  * [error::Result][152]
  * [sqlite::SqlitePool][153]
  * [sqlite::SqlitePoolOptions][154]
  * [sqlite::SqliteTransaction][155]



### Constants

  * [sqlite::any::DRIVER][156]



   [1]: ../sqlx/index.html
   [2]: struct.Any.html
   [3]: struct.AnyConnection.html
   [4]: struct.Pool.html
   [5]: struct.QueryBuilder.html
   [6]: struct.RawSql.html
   [7]: struct.Sqlite.html
   [8]: struct.SqliteConnection.html
   [9]: struct.Transaction.html
   [10]: any/struct.Any.html
   [11]: any/struct.AnyArguments.html
   [12]: any/struct.AnyConnectOptions.html
   [13]: any/struct.AnyQueryResult.html
   [14]: any/struct.AnyRow.html
   [15]: any/struct.AnyStatement.html
   [16]: any/struct.AnyTransactionManager.html
   [17]: any/struct.AnyTypeInfo.html
   [18]: any/struct.AnyValue.html
   [19]: any/struct.AnyValueRef.html
   [20]: error/struct.UnexpectedNullError.html
   [21]: migrate/struct.AppliedMigration.html
   [22]: migrate/struct.Migration.html
   [23]: migrate/struct.Migrator.html
   [24]: pool/struct.CloseEvent.html
   [25]: pool/struct.Pool.html
   [26]: pool/struct.PoolConnection.html
   [27]: pool/struct.PoolConnectionMetadata.html
   [28]: pool/struct.PoolOptions.html
   [29]: query/struct.Map.html
   [30]: query/struct.Query.html
   [31]: query/struct.QueryAs.html
   [32]: query/struct.QueryScalar.html
   [33]: query_builder/struct.QueryBuilder.html
   [34]: query_builder/struct.Separated.html
   [35]: sqlite/struct.LockedSqliteHandle.html
   [36]: sqlite/struct.Sqlite.html
   [37]: sqlite/struct.SqliteArguments.html
   [38]: sqlite/struct.SqliteColumn.html
   [39]: sqlite/struct.SqliteConnectOptions.html
   [40]: sqlite/struct.SqliteConnection.html
   [41]: sqlite/struct.SqliteError.html
   [42]: sqlite/struct.SqliteOwnedBuf.html
   [43]: sqlite/struct.SqliteQueryResult.html
   [44]: sqlite/struct.SqliteRow.html
   [45]: sqlite/struct.SqliteStatement.html
   [46]: sqlite/struct.SqliteTransactionManager.html
   [47]: sqlite/struct.SqliteTypeInfo.html
   [48]: sqlite/struct.SqliteValue.html
   [49]: sqlite/struct.SqliteValueRef.html
   [50]: sqlite/struct.UpdateHookResult.html
   [51]: types/struct.Json.html
   [52]: types/struct.JsonRawValue.html
   [53]: types/struct.Text.html
   [54]: enum.Either.html
   [55]: enum.Error.html
   [56]: any/enum.AnyKind.html
   [57]: any/enum.AnyTypeInfoKind.html
   [58]: encode/enum.IsNull.html
   [59]: error/enum.Error.html
   [60]: error/enum.ErrorKind.html
   [61]: migrate/enum.MigrateError.html
   [62]: migrate/enum.MigrationType.html
   [63]: pool/enum.MaybePoolConnection.html
   [64]: pool/maybe/enum.MaybePoolConnection.html
   [65]: sqlite/enum.SqliteArgumentValue.html
   [66]: sqlite/enum.SqliteAutoVacuum.html
   [67]: sqlite/enum.SqliteJournalMode.html
   [68]: sqlite/enum.SqliteLockingMode.html
   [69]: sqlite/enum.SqliteOperation.html
   [70]: sqlite/enum.SqliteSynchronous.html
   [71]: types/enum.JsonValue.html
   [72]: trait.Acquire.html
   [73]: trait.AnyExecutor.html
   [74]: trait.Arguments.html
   [75]: trait.Column.html
   [76]: trait.ColumnIndex.html
   [77]: trait.ConnectOptions.html
   [78]: trait.Connection.html
   [79]: trait.Database.html
   [80]: trait.Decode.html
   [81]: trait.Encode.html
   [82]: trait.Execute.html
   [83]: trait.Executor.html
   [84]: trait.FromRow.html
   [85]: trait.IntoArguments.html
   [86]: trait.Row.html
   [87]: trait.SqliteExecutor.html
   [88]: trait.Statement.html
   [89]: trait.Type.html
   [90]: trait.TypeInfo.html
   [91]: trait.Value.html
   [92]: trait.ValueRef.html
   [93]: any/trait.AnyExecutor.html
   [94]: database/trait.Database.html
   [95]: database/trait.HasStatementCache.html
   [96]: decode/trait.Decode.html
   [97]: encode/trait.Encode.html
   [98]: error/trait.DatabaseError.html
   [99]: migrate/trait.Migrate.html
   [100]: migrate/trait.MigrateDatabase.html
   [101]: migrate/trait.MigrationSource.html
   [102]: prelude/trait.Acquire.html
   [103]: prelude/trait.ConnectOptions.html
   [104]: prelude/trait.Connection.html
   [105]: prelude/trait.Decode.html
   [106]: prelude/trait.Encode.html
   [107]: prelude/trait.Executor.html
   [108]: prelude/trait.FromRow.html
   [109]: prelude/trait.IntoArguments.html
   [110]: prelude/trait.Row.html
   [111]: prelude/trait.Statement.html
   [112]: prelude/trait.Type.html
   [113]: sqlite/trait.SqliteExecutor.html
   [114]: types/trait.Type.html
   [115]: macro.migrate.html
   [116]: macro.query.html
   [117]: macro.query_as.html
   [118]: macro.query_as_unchecked.html
   [119]: macro.query_file.html
   [120]: macro.query_file_as.html
   [121]: macro.query_file_as_unchecked.html
   [122]: macro.query_file_scalar.html
   [123]: macro.query_file_scalar_unchecked.html
   [124]: macro.query_file_unchecked.html
   [125]: macro.query_scalar.html
   [126]: macro.query_scalar_unchecked.html
   [127]: macro.query_unchecked.html
   [128]: attr.test.html
   [129]: derive.Decode.html
   [130]: derive.Encode.html
   [131]: prelude/derive.Decode.html
   [132]: prelude/derive.Encode.html
   [133]: prelude/derive.FromRow.html
   [134]: prelude/derive.Type.html
   [135]: any/fn.install_default_drivers.html
   [136]: any/fn.install_drivers.html
   [137]: error/fn.mismatched_types.html
   [138]: migrate/fn.resolve_blocking.html
   [139]: fn.query.html
   [140]: fn.query_as.html
   [141]: fn.query_as_with.html
   [142]: fn.query_scalar.html
   [143]: fn.query_scalar_with.html
   [144]: fn.query_with.html
   [145]: fn.raw_sql.html
   [146]: type.AnyPool.html
   [147]: type.Result.html
   [148]: type.SqlitePool.html
   [149]: type.SqliteTransaction.html
   [150]: any/type.AnyPoolOptions.html
   [151]: error/type.BoxDynError.html
   [152]: error/type.Result.html
   [153]: sqlite/type.SqlitePool.html
   [154]: sqlite/type.SqlitePoolOptions.html
   [155]: sqlite/type.SqliteTransaction.html
   [156]: sqlite/any/constant.DRIVER.html

