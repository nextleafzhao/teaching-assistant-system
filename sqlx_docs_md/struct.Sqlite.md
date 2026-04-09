## Sqlite

## [sqlx][1]0.8.6

## Sqlite

### Trait Implementations

  * Database
  * Debug
  * Decode<'_, Sqlite>
  * Decode<'_, Sqlite>
  * Decode<'r, Sqlite>
  * Decode<'r, Sqlite>
  * Decode<'r, Sqlite>
  * Decode<'r, Sqlite>
  * Decode<'r, Sqlite>
  * Decode<'r, Sqlite>
  * Decode<'r, Sqlite>
  * Decode<'r, Sqlite>
  * Decode<'r, Sqlite>
  * Decode<'r, Sqlite>
  * Decode<'r, Sqlite>
  * Decode<'r, Sqlite>
  * Decode<'r, Sqlite>
  * Decode<'r, Sqlite>
  * Decode<'r, Sqlite>
  * Decode<'r, Sqlite>
  * Decode<'r, Sqlite>
  * Decode<'r, Sqlite>
  * Encode<'_, Sqlite>
  * Encode<'_, Sqlite>
  * Encode<'_, Sqlite>
  * Encode<'q, Sqlite>
  * Encode<'q, Sqlite>
  * Encode<'q, Sqlite>
  * Encode<'q, Sqlite>
  * Encode<'q, Sqlite>
  * Encode<'q, Sqlite>
  * Encode<'q, Sqlite>
  * Encode<'q, Sqlite>
  * Encode<'q, Sqlite>
  * Encode<'q, Sqlite>
  * Encode<'q, Sqlite>
  * Encode<'q, Sqlite>
  * Encode<'q, Sqlite>
  * Encode<'q, Sqlite>
  * Encode<'q, Sqlite>
  * Encode<'q, Sqlite>
  * Encode<'q, Sqlite>
  * HasStatementCache
  * MigrateDatabase
  * TestSupport
  * Type<Sqlite>
  * Type<Sqlite>
  * Type<Sqlite>
  * Type<Sqlite>
  * Type<Sqlite>
  * Type<Sqlite>
  * Type<Sqlite>
  * Type<Sqlite>
  * Type<Sqlite>
  * Type<Sqlite>
  * Type<Sqlite>
  * Type<Sqlite>
  * Type<Sqlite>
  * Type<Sqlite>
  * Type<Sqlite>
  * Type<Sqlite>
  * Type<Sqlite>
  * Type<Sqlite>
  * Type<Sqlite>
  * Type<Sqlite>
  * TypeChecking



### Auto Trait Implementations

  * Freeze
  * RefUnwindSafe
  * Send
  * Sync
  * Unpin
  * UnwindSafe



### Blanket Implementations

  * Any
  * Borrow<T>
  * BorrowMut<T>
  * From<T>
  * Instrument
  * Into<U>
  * IntoEither
  * Same
  * TryFrom<U>
  * TryInto<U>
  * WithSubscriber



## [In crate sqlx][2]

[sqlx][2]

# Struct Sqlite Copy item path
[code]
    pub struct Sqlite;
[/code]

Expand description

Sqlite database driver.

## Trait Implementations§

§

### impl [Database][3] for [Sqlite][4]

§

#### const [NAME][5]: &'static [str][6] = "SQLite"

The display name for this database driver.

§

#### const [URL_SCHEMES][7]: &'static [&'static [str][6]]

The schemes for database URLs that should match this driver.

§

#### type [Connection][8] = [SqliteConnection][9]

The concrete `Connection` implementation for this database.

§

#### type [TransactionManager][10] = [SqliteTransactionManager][11]

The concrete `TransactionManager` implementation for this database.

§

#### type [Row][12] = [SqliteRow][13]

The concrete `Row` implementation for this database.

§

#### type [QueryResult][14] = [SqliteQueryResult][15]

The concrete `QueryResult` implementation for this database.

§

#### type [Column][16] = [SqliteColumn][17]

The concrete `Column` implementation for this database.

§

#### type [TypeInfo][18] = [SqliteTypeInfo][19]

The concrete `TypeInfo` implementation for this database.

§

#### type [Value][20] = [SqliteValue][21]

The concrete type used to hold an owned copy of the not-yet-decoded value that was received from the database.

§

#### type [ValueRef][22]<'r> = [SqliteValueRef][23]<'r>

The concrete type used to hold a reference to the not-yet-decoded value that has just been received from the database.

§

#### type [Arguments][24]<'q> = [SqliteArguments][25]<'q>

The concrete `Arguments` implementation for this database.

§

#### type [ArgumentBuffer][26]<'q> = [Vec][27]<[SqliteArgumentValue][28]<'q>>

The concrete type used as a buffer for arguments while encoding.

§

#### type [Statement][29]<'q> = [SqliteStatement][30]<'q>

The concrete `Statement` implementation for this database.

§

### impl [Debug][31] for [Sqlite][4]

§

#### fn [fmt][32](&self, f: &mut [Formatter][33]<'_>) -> [Result][34]<[()][35], [Error][36]>

Formats the value using the given formatter. [Read more][32]

§

### impl [Decode][37]<'_, [Sqlite][4]> for [Box][38]<[[u8][39]]>

§

#### fn [decode][40]( value: [SqliteValueRef][23]<'_>, ) -> [Result][34]<[Box][38]<[[u8][39]]>, [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Decode a new value of this type using a raw value from the database.

§

### impl [Decode][37]<'_, [Sqlite][4]> for [Box][38]<[str][6]>

§

#### fn [decode][40]( value: [SqliteValueRef][23]<'_>, ) -> [Result][34]<[Box][38]<[str][6]>, [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][37]<'r, [Sqlite][4]> for &'r [[u8][39]]

§

#### fn [decode][40]( value: [SqliteValueRef][23]<'r>, ) -> [Result][34]<&'r [[u8][39]], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][37]<'r, [Sqlite][4]> for &'r [str][6]

§

#### fn [decode][40]( value: [SqliteValueRef][23]<'r>, ) -> [Result][34]<&'r [str][6], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][37]<'r, [Sqlite][4]> for [Cow][44]<'r, [str][6]>

§

#### fn [decode][40]( value: [SqliteValueRef][23]<'r>, ) -> [Result][34]<[Cow][44]<'r, [str][6]>, [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r, T> [Decode][37]<'r, [Sqlite][4]> for [Json][45]<T>

where T: 'r + [Deserialize][46]<'r>,

§

#### fn [decode][40]( value: [SqliteValueRef][23]<'r>, ) -> [Result][34]<[Json][45]<T>, [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][37]<'r, [Sqlite][4]> for [String][47]

§

#### fn [decode][40]( value: [SqliteValueRef][23]<'r>, ) -> [Result][34]<[String][47], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r, T> [Decode][37]<'r, [Sqlite][4]> for [Text][48]<T>

where T: [FromStr][49], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>: [From][50]<<T as [FromStr][49]>::[Err][51]>,

§

#### fn [decode][40]( value: [SqliteValueRef][23]<'r>, ) -> [Result][34]<[Text][48]<T>, [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][37]<'r, [Sqlite][4]> for [Vec][27]<[u8][39]>

§

#### fn [decode][40]( value: [SqliteValueRef][23]<'r>, ) -> [Result][34]<[Vec][27]<[u8][39]>, [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][37]<'r, [Sqlite][4]> for [bool][52]

§

#### fn [decode][40]( value: [SqliteValueRef][23]<'r>, ) -> [Result][34]<[bool][52], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][37]<'r, [Sqlite][4]> for [f32][53]

§

#### fn [decode][40]( value: [SqliteValueRef][23]<'r>, ) -> [Result][34]<[f32][53], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][37]<'r, [Sqlite][4]> for [f64][54]

§

#### fn [decode][40]( value: [SqliteValueRef][23]<'r>, ) -> [Result][34]<[f64][54], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][37]<'r, [Sqlite][4]> for [i16][55]

§

#### fn [decode][40]( value: [SqliteValueRef][23]<'r>, ) -> [Result][34]<[i16][55], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][37]<'r, [Sqlite][4]> for [i32][56]

§

#### fn [decode][40]( value: [SqliteValueRef][23]<'r>, ) -> [Result][34]<[i32][56], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][37]<'r, [Sqlite][4]> for [i64][57]

§

#### fn [decode][40]( value: [SqliteValueRef][23]<'r>, ) -> [Result][34]<[i64][57], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][37]<'r, [Sqlite][4]> for [i8][58]

§

#### fn [decode][40](value: [SqliteValueRef][23]<'r>) -> [Result][34]<[i8][58], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][37]<'r, [Sqlite][4]> for [u16][59]

§

#### fn [decode][40]( value: [SqliteValueRef][23]<'r>, ) -> [Result][34]<[u16][59], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][37]<'r, [Sqlite][4]> for [u32][60]

§

#### fn [decode][40]( value: [SqliteValueRef][23]<'r>, ) -> [Result][34]<[u32][60], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][37]<'r, [Sqlite][4]> for [u64][61]

§

#### fn [decode][40]( value: [SqliteValueRef][23]<'r>, ) -> [Result][34]<[u64][61], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][37]<'r, [Sqlite][4]> for [u8][39]

§

#### fn [decode][40](value: [SqliteValueRef][23]<'r>) -> [Result][34]<[u8][39], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Decode a new value of this type using a raw value from the database.

§

### impl [Encode][62]<'_, [Sqlite][4]> for [Box][38]<[[u8][39]]>

§

#### fn [encode][63]( self, args: &mut [Vec][27]<[SqliteArgumentValue][28]<'_>>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [encode_by_ref][65]( &self, args: &mut [Vec][27]<[SqliteArgumentValue][28]<'_>>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][65]

§

#### fn [produces][66](&self) -> [Option][67]<<DB as [Database][3]>::[TypeInfo][68]>

§

#### fn [size_hint][69](&self) -> [usize][70]

§

### impl [Encode][62]<'_, [Sqlite][4]> for [Box][38]<[str][6]>

§

#### fn [encode][63]( self, args: &mut [Vec][27]<[SqliteArgumentValue][28]<'_>>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [encode_by_ref][65]( &self, args: &mut [Vec][27]<[SqliteArgumentValue][28]<'_>>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][65]

§

#### fn [produces][66](&self) -> [Option][67]<<DB as [Database][3]>::[TypeInfo][68]>

§

#### fn [size_hint][69](&self) -> [usize][70]

§

### impl<T> [Encode][62]<'_, [Sqlite][4]> for [Json][45]<T>

where T: [Serialize][71],

§

#### fn [encode_by_ref][65]( &self, buf: &mut [Vec][27]<[SqliteArgumentValue][28]<'_>>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][65]

§

#### fn [encode][63]( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][72]<'q>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

where Self: [Sized][73],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][66](&self) -> [Option][67]<<DB as [Database][3]>::[TypeInfo][68]>

§

#### fn [size_hint][69](&self) -> [usize][70]

§

### impl<'q> [Encode][62]<'q, [Sqlite][4]> for &'q [[u8][39]]

§

#### fn [encode_by_ref][65]( &self, args: &mut [Vec][27]<[SqliteArgumentValue][28]<'q>>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][65]

§

#### fn [encode][63]( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][72]<'q>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

where Self: [Sized][73],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][66](&self) -> [Option][67]<<DB as [Database][3]>::[TypeInfo][68]>

§

#### fn [size_hint][69](&self) -> [usize][70]

§

### impl<'q> [Encode][62]<'q, [Sqlite][4]> for &'q [str][6]

§

#### fn [encode_by_ref][65]( &self, args: &mut [Vec][27]<[SqliteArgumentValue][28]<'q>>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][65]

§

#### fn [encode][63]( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][72]<'q>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

where Self: [Sized][73],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][66](&self) -> [Option][67]<<DB as [Database][3]>::[TypeInfo][68]>

§

#### fn [size_hint][69](&self) -> [usize][70]

§

### impl<'q> [Encode][62]<'q, [Sqlite][4]> for [Cow][44]<'q, [str][6]>

§

#### fn [encode][63]( self, args: &mut [Vec][27]<[SqliteArgumentValue][28]<'q>>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [encode_by_ref][65]( &self, args: &mut [Vec][27]<[SqliteArgumentValue][28]<'q>>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][65]

§

#### fn [produces][66](&self) -> [Option][67]<<DB as [Database][3]>::[TypeInfo][68]>

§

#### fn [size_hint][69](&self) -> [usize][70]

§

### impl<'q, T> [Encode][62]<'q, [Sqlite][4]> for [Option][67]<T>

where T: [Encode][62]<'q, [Sqlite][4]> \+ [Type][74]<[Sqlite][4]> \+ 'q,

§

#### fn [produces][66](&self) -> [Option][67]<<[Sqlite][4] as [Database][3]>::[TypeInfo][68]>

§

#### fn [encode][63]( self, buf: &mut <[Sqlite][4] as [Database][3]>::[ArgumentBuffer][72]<'q>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [encode_by_ref][65]( &self, buf: &mut <[Sqlite][4] as [Database][3]>::[ArgumentBuffer][72]<'q>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][65]

§

#### fn [size_hint][69](&self) -> [usize][70]

§

### impl<'q> [Encode][62]<'q, [Sqlite][4]> for [String][47]

§

#### fn [encode][63]( self, args: &mut [Vec][27]<[SqliteArgumentValue][28]<'q>>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [encode_by_ref][65]( &self, args: &mut [Vec][27]<[SqliteArgumentValue][28]<'q>>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][65]

§

#### fn [produces][66](&self) -> [Option][67]<<DB as [Database][3]>::[TypeInfo][68]>

§

#### fn [size_hint][69](&self) -> [usize][70]

§

### impl<'q, T> [Encode][62]<'q, [Sqlite][4]> for [Text][48]<T>

where T: [Display][75],

§

#### fn [encode_by_ref][65]( &self, buf: &mut [Vec][27]<[SqliteArgumentValue][28]<'q>>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][65]

§

#### fn [encode][63]( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][72]<'q>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

where Self: [Sized][73],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][66](&self) -> [Option][67]<<DB as [Database][3]>::[TypeInfo][68]>

§

#### fn [size_hint][69](&self) -> [usize][70]

§

### impl<'q> [Encode][62]<'q, [Sqlite][4]> for [Vec][27]<[u8][39]>

§

#### fn [encode][63]( self, args: &mut [Vec][27]<[SqliteArgumentValue][28]<'q>>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [encode_by_ref][65]( &self, args: &mut [Vec][27]<[SqliteArgumentValue][28]<'q>>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][65]

§

#### fn [produces][66](&self) -> [Option][67]<<DB as [Database][3]>::[TypeInfo][68]>

§

#### fn [size_hint][69](&self) -> [usize][70]

§

### impl<'q> [Encode][62]<'q, [Sqlite][4]> for [bool][52]

§

#### fn [encode_by_ref][65]( &self, args: &mut [Vec][27]<[SqliteArgumentValue][28]<'q>>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][65]

§

#### fn [encode][63]( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][72]<'q>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

where Self: [Sized][73],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][66](&self) -> [Option][67]<<DB as [Database][3]>::[TypeInfo][68]>

§

#### fn [size_hint][69](&self) -> [usize][70]

§

### impl<'q> [Encode][62]<'q, [Sqlite][4]> for [f32][53]

§

#### fn [encode_by_ref][65]( &self, args: &mut [Vec][27]<[SqliteArgumentValue][28]<'q>>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][65]

§

#### fn [encode][63]( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][72]<'q>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

where Self: [Sized][73],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][66](&self) -> [Option][67]<<DB as [Database][3]>::[TypeInfo][68]>

§

#### fn [size_hint][69](&self) -> [usize][70]

§

### impl<'q> [Encode][62]<'q, [Sqlite][4]> for [f64][54]

§

#### fn [encode_by_ref][65]( &self, args: &mut [Vec][27]<[SqliteArgumentValue][28]<'q>>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][65]

§

#### fn [encode][63]( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][72]<'q>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

where Self: [Sized][73],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][66](&self) -> [Option][67]<<DB as [Database][3]>::[TypeInfo][68]>

§

#### fn [size_hint][69](&self) -> [usize][70]

§

### impl<'q> [Encode][62]<'q, [Sqlite][4]> for [i16][55]

§

#### fn [encode_by_ref][65]( &self, args: &mut [Vec][27]<[SqliteArgumentValue][28]<'q>>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][65]

§

#### fn [encode][63]( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][72]<'q>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

where Self: [Sized][73],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][66](&self) -> [Option][67]<<DB as [Database][3]>::[TypeInfo][68]>

§

#### fn [size_hint][69](&self) -> [usize][70]

§

### impl<'q> [Encode][62]<'q, [Sqlite][4]> for [i32][56]

§

#### fn [encode_by_ref][65]( &self, args: &mut [Vec][27]<[SqliteArgumentValue][28]<'q>>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][65]

§

#### fn [encode][63]( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][72]<'q>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

where Self: [Sized][73],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][66](&self) -> [Option][67]<<DB as [Database][3]>::[TypeInfo][68]>

§

#### fn [size_hint][69](&self) -> [usize][70]

§

### impl<'q> [Encode][62]<'q, [Sqlite][4]> for [i64][57]

§

#### fn [encode_by_ref][65]( &self, args: &mut [Vec][27]<[SqliteArgumentValue][28]<'q>>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][65]

§

#### fn [encode][63]( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][72]<'q>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

where Self: [Sized][73],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][66](&self) -> [Option][67]<<DB as [Database][3]>::[TypeInfo][68]>

§

#### fn [size_hint][69](&self) -> [usize][70]

§

### impl<'q> [Encode][62]<'q, [Sqlite][4]> for [i8][58]

§

#### fn [encode_by_ref][65]( &self, args: &mut [Vec][27]<[SqliteArgumentValue][28]<'q>>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][65]

§

#### fn [encode][63]( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][72]<'q>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

where Self: [Sized][73],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][66](&self) -> [Option][67]<<DB as [Database][3]>::[TypeInfo][68]>

§

#### fn [size_hint][69](&self) -> [usize][70]

§

### impl<'q> [Encode][62]<'q, [Sqlite][4]> for [u16][59]

§

#### fn [encode_by_ref][65]( &self, args: &mut [Vec][27]<[SqliteArgumentValue][28]<'q>>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][65]

§

#### fn [encode][63]( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][72]<'q>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

where Self: [Sized][73],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][66](&self) -> [Option][67]<<DB as [Database][3]>::[TypeInfo][68]>

§

#### fn [size_hint][69](&self) -> [usize][70]

§

### impl<'q> [Encode][62]<'q, [Sqlite][4]> for [u32][60]

§

#### fn [encode_by_ref][65]( &self, args: &mut [Vec][27]<[SqliteArgumentValue][28]<'q>>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][65]

§

#### fn [encode][63]( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][72]<'q>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

where Self: [Sized][73],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][66](&self) -> [Option][67]<<DB as [Database][3]>::[TypeInfo][68]>

§

#### fn [size_hint][69](&self) -> [usize][70]

§

### impl<'q> [Encode][62]<'q, [Sqlite][4]> for [u8][39]

§

#### fn [encode_by_ref][65]( &self, args: &mut [Vec][27]<[SqliteArgumentValue][28]<'q>>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][65]

§

#### fn [encode][63]( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][72]<'q>, ) -> [Result][34]<[IsNull][64], [Box][38]<dyn [Error][41] \+ [Send][42] \+ [Sync][43]>>

where Self: [Sized][73],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][66](&self) -> [Option][67]<<DB as [Database][3]>::[TypeInfo][68]>

§

#### fn [size_hint][69](&self) -> [usize][70]

§

### impl [MigrateDatabase][76] for [Sqlite][4]

§

#### fn [create_database][77]( url: &[str][6], ) -> [Pin][78]<[Box][38]<dyn [Future][79]<Output = [Result][34]<[()][35], [Error][80]>> \+ [Send][42] \+ '_>>

§

#### fn [database_exists][81]( url: &[str][6], ) -> [Pin][78]<[Box][38]<dyn [Future][79]<Output = [Result][34]<[bool][52], [Error][80]>> \+ [Send][42] \+ '_>>

§

#### fn [drop_database][82]( url: &[str][6], ) -> [Pin][78]<[Box][38]<dyn [Future][79]<Output = [Result][34]<[()][35], [Error][80]>> \+ [Send][42] \+ '_>>

§

#### fn [force_drop_database][83]( _url: &[str][6], ) -> [Pin][78]<[Box][38]<dyn [Future][79]<Output = [Result][34]<[()][35], [Error][80]>> \+ [Send][42] \+ '_>>

§

### impl TestSupport for [Sqlite][4]

§

#### fn test_context( args: &TestArgs, ) -> [Pin][78]<[Box][38]<dyn [Future][79]<Output = [Result][34]<TestContext<[Sqlite][4]>, [Error][80]>> \+ [Send][42] \+ '_>>

Get parameters to construct a `Pool` suitable for testing. Read more

§

#### fn cleanup_test( db_name: &[str][6], ) -> [Pin][78]<[Box][38]<dyn [Future][79]<Output = [Result][34]<[()][35], [Error][80]>> \+ [Send][42] \+ '_>>

§

#### fn cleanup_test_dbs() -> [Pin][78]<[Box][38]<dyn [Future][79]<Output = [Result][34]<[Option][67]<[usize][70]>, [Error][80]>> \+ [Send][42]>>

Cleanup any test databases that are no longer in-use. Read more

§

#### fn snapshot( _conn: &mut <[Sqlite][4] as [Database][3]>::[Connection][84], ) -> [Pin][78]<[Box][38]<dyn [Future][79]<Output = [Result][34]<FixtureSnapshot<[Sqlite][4]>, [Error][80]>> \+ [Send][42] \+ '_>>

Take a snapshot of the current state of the database (data only). Read more

§

#### fn db_name(args: &TestArgs) -> [String][47]

Generate a unique database name for the given test path.

§

### impl [Type][74]<[Sqlite][4]> for [[u8][39]]

§

#### fn [type_info][85]() -> [SqliteTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][85]

§

#### fn [compatible][86](ty: &[SqliteTypeInfo][19]) -> [bool][52]

Determines if this Rust type is compatible with the given SQL type. [Read more][86]

§

### impl [Type][74]<[Sqlite][4]> for [Box][38]<[[u8][39]]>

§

#### fn [type_info][85]() -> [SqliteTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][85]

§

#### fn [compatible][86](ty: &[SqliteTypeInfo][19]) -> [bool][52]

Determines if this Rust type is compatible with the given SQL type. [Read more][86]

§

### impl [Type][74]<[Sqlite][4]> for [Box][38]<[str][6]>

§

#### fn [type_info][85]() -> [SqliteTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][85]

§

#### fn [compatible][86](ty: &<DB as [Database][3]>::[TypeInfo][68]) -> [bool][52]

Determines if this Rust type is compatible with the given SQL type. [Read more][86]

§

### impl [Type][74]<[Sqlite][4]> for [Cow][44]<'_, [str][6]>

§

#### fn [type_info][85]() -> [SqliteTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][85]

§

#### fn [compatible][86](ty: &[SqliteTypeInfo][19]) -> [bool][52]

Determines if this Rust type is compatible with the given SQL type. [Read more][86]

§

### impl<T> [Type][74]<[Sqlite][4]> for [Json][45]<T>

§

#### fn [type_info][85]() -> [SqliteTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][85]

§

#### fn [compatible][86](ty: &[SqliteTypeInfo][19]) -> [bool][52]

Determines if this Rust type is compatible with the given SQL type. [Read more][86]

§

### impl [Type][74]<[Sqlite][4]> for [String][47]

§

#### fn [type_info][85]() -> [SqliteTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][85]

§

#### fn [compatible][86](ty: &<DB as [Database][3]>::[TypeInfo][68]) -> [bool][52]

Determines if this Rust type is compatible with the given SQL type. [Read more][86]

§

### impl<T> [Type][74]<[Sqlite][4]> for [Text][48]<T>

§

#### fn [type_info][85]() -> [SqliteTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][85]

§

#### fn [compatible][86](ty: &[SqliteTypeInfo][19]) -> [bool][52]

Determines if this Rust type is compatible with the given SQL type. [Read more][86]

§

### impl [Type][74]<[Sqlite][4]> for [Vec][27]<[u8][39]>

§

#### fn [type_info][85]() -> [SqliteTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][85]

§

#### fn [compatible][86](ty: &[SqliteTypeInfo][19]) -> [bool][52]

Determines if this Rust type is compatible with the given SQL type. [Read more][86]

§

### impl [Type][74]<[Sqlite][4]> for [bool][52]

§

#### fn [type_info][85]() -> [SqliteTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][85]

§

#### fn [compatible][86](ty: &[SqliteTypeInfo][19]) -> [bool][52]

Determines if this Rust type is compatible with the given SQL type. [Read more][86]

§

### impl [Type][74]<[Sqlite][4]> for [f32][53]

§

#### fn [type_info][85]() -> [SqliteTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][85]

§

#### fn [compatible][86](ty: &<DB as [Database][3]>::[TypeInfo][68]) -> [bool][52]

Determines if this Rust type is compatible with the given SQL type. [Read more][86]

§

### impl [Type][74]<[Sqlite][4]> for [f64][54]

§

#### fn [type_info][85]() -> [SqliteTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][85]

§

#### fn [compatible][86](ty: &<DB as [Database][3]>::[TypeInfo][68]) -> [bool][52]

Determines if this Rust type is compatible with the given SQL type. [Read more][86]

§

### impl [Type][74]<[Sqlite][4]> for [i16][55]

§

#### fn [type_info][85]() -> [SqliteTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][85]

§

#### fn [compatible][86](ty: &[SqliteTypeInfo][19]) -> [bool][52]

Determines if this Rust type is compatible with the given SQL type. [Read more][86]

§

### impl [Type][74]<[Sqlite][4]> for [i32][56]

§

#### fn [type_info][85]() -> [SqliteTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][85]

§

#### fn [compatible][86](ty: &[SqliteTypeInfo][19]) -> [bool][52]

Determines if this Rust type is compatible with the given SQL type. [Read more][86]

§

### impl [Type][74]<[Sqlite][4]> for [i64][57]

§

#### fn [type_info][85]() -> [SqliteTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][85]

§

#### fn [compatible][86](ty: &[SqliteTypeInfo][19]) -> [bool][52]

Determines if this Rust type is compatible with the given SQL type. [Read more][86]

§

### impl [Type][74]<[Sqlite][4]> for [i8][58]

§

#### fn [type_info][85]() -> [SqliteTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][85]

§

#### fn [compatible][86](ty: &[SqliteTypeInfo][19]) -> [bool][52]

Determines if this Rust type is compatible with the given SQL type. [Read more][86]

§

### impl [Type][74]<[Sqlite][4]> for [str][6]

§

#### fn [type_info][85]() -> [SqliteTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][85]

§

#### fn [compatible][86](ty: &<DB as [Database][3]>::[TypeInfo][68]) -> [bool][52]

Determines if this Rust type is compatible with the given SQL type. [Read more][86]

§

### impl [Type][74]<[Sqlite][4]> for [u16][59]

§

#### fn [type_info][85]() -> [SqliteTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][85]

§

#### fn [compatible][86](ty: &[SqliteTypeInfo][19]) -> [bool][52]

Determines if this Rust type is compatible with the given SQL type. [Read more][86]

§

### impl [Type][74]<[Sqlite][4]> for [u32][60]

§

#### fn [type_info][85]() -> [SqliteTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][85]

§

#### fn [compatible][86](ty: &[SqliteTypeInfo][19]) -> [bool][52]

Determines if this Rust type is compatible with the given SQL type. [Read more][86]

§

### impl [Type][74]<[Sqlite][4]> for [u64][61]

§

#### fn [type_info][85]() -> [SqliteTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][85]

§

#### fn [compatible][86](ty: &[SqliteTypeInfo][19]) -> [bool][52]

Determines if this Rust type is compatible with the given SQL type. [Read more][86]

§

### impl [Type][74]<[Sqlite][4]> for [u8][39]

§

#### fn [type_info][85]() -> [SqliteTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][85]

§

#### fn [compatible][86](ty: &[SqliteTypeInfo][19]) -> [bool][52]

Determines if this Rust type is compatible with the given SQL type. [Read more][86]

§

### impl TypeChecking for [Sqlite][4]

§

#### const PARAM_CHECKING: ParamChecking = ::sqlx_core::type_checking::ParamChecking::Weak

Describes how the database in question typechecks query parameters.

§

#### fn param_type_for_id( info: &<[Sqlite][4] as [Database][3]>::[TypeInfo][68], ) -> [Option][67]<&'static [str][6]>

Get the full path of the Rust type that corresponds to the given `TypeInfo`, if applicable. Read more

§

#### fn return_type_for_id( info: &<[Sqlite][4] as [Database][3]>::[TypeInfo][68], ) -> [Option][67]<&'static [str][6]>

Get the full path of the Rust type that corresponds to the given `TypeInfo`, if applicable. Read more

§

#### fn get_feature_gate( _info: &<[Sqlite][4] as [Database][3]>::[TypeInfo][68], ) -> [Option][67]<&'static [str][6]>

Get the name of the Cargo feature gate that must be enabled to process the given `TypeInfo`, if applicable.

§

#### fn fmt_value_debug(value: &<[Sqlite][4] as [Database][3]>::[Value][87]) -> FmtValue<'_, [Sqlite][4]>

If `value` is a well-known type, decode and format it using `Debug`. Read more

§

### impl [HasStatementCache][88] for [Sqlite][4]

## Auto Trait Implementations§

§

### impl [Freeze][89] for [Sqlite][4]

§

### impl [RefUnwindSafe][90] for [Sqlite][4]

§

### impl [Send][42] for [Sqlite][4]

§

### impl [Sync][43] for [Sqlite][4]

§

### impl [Unpin][91] for [Sqlite][4]

§

### impl [UnwindSafe][92] for [Sqlite][4]

## Blanket Implementations§

[Source][93]§

### impl<T> [Any][94] for T

where T: 'static + ?[Sized][73],

[Source][95]§

#### fn [type_id][96](&self) -> [TypeId][97]

Gets the `TypeId` of `self`. [Read more][96]

[Source][98]§

### impl<T> [Borrow][99]<T> for T

where T: ?[Sized][73],

[Source][100]§

#### fn [borrow][101](&self) -> [&T][102]

Immutably borrows from an owned value. [Read more][101]

[Source][103]§

### impl<T> [BorrowMut][104]<T> for T

where T: ?[Sized][73],

[Source][105]§

#### fn [borrow_mut][106](&mut self) -> [&mut T][102]

Mutably borrows from an owned value. [Read more][106]

[Source][107]§

### impl<T> [From][50]<T> for T

[Source][108]§

#### fn [from][109](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][110] [`Span`][111], returning an `Instrumented` wrapper. Read more

[Source][112]§

### impl<T, U> [Into][113]<U> for T

where U: [From][50]<T>,

[Source][114]§

#### fn [into][115](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][50]<T> for U` chooses to do.

[Source][116]§

### impl<T> [IntoEither][117] for T

[Source][118]§

#### fn [into_either][119](self, into_left: [bool][52]) -> [Either][120]<Self, Self> ⓘ

Converts `self` into a [`Left`][121] variant of [`Either<Self, Self>`][120] if `into_left` is `true`. Converts `self` into a [`Right`][122] variant of [`Either<Self, Self>`][120] otherwise. [Read more][119]

[Source][123]§

#### fn [into_either_with][124]<F>(self, into_left: F) -> [Either][120]<Self, Self> ⓘ

where F: [FnOnce][125](&Self) -> [bool][52],

Converts `self` into a [`Left`][121] variant of [`Either<Self, Self>`][120] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][122] variant of [`Either<Self, Self>`][120] otherwise. [Read more][124]

[Source][126]§

### impl<T> [Same][127] for T

[Source][128]§

#### type [Output][129] = T

Should always be `Self`

[Source][130]§

### impl<T, U> [TryFrom][131]<U> for T

where U: [Into][113]<T>,

[Source][132]§

#### type [Error][133] = [Infallible][134]

The type returned in the event of a conversion error.

[Source][135]§

#### fn [try_from][136](value: U) -> [Result][34]<T, <T as [TryFrom][131]<U>>::[Error][137]>

Performs the conversion.

[Source][138]§

### impl<T, U> [TryInto][139]<U> for T

where U: [TryFrom][131]<T>,

[Source][140]§

#### type [Error][141] = <U as [TryFrom][131]<T>>::[Error][137]

The type returned in the event of a conversion error.

[Source][142]§

#### fn [try_into][143](self) -> [Result][34]<U, <U as [TryFrom][131]<T>>::[Error][137]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][113]<Dispatch>,

Attaches the provided [`Subscriber`][144] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][145] [`Subscriber`][144] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: trait.Database.html (trait sqlx::Database)
   [4]: struct.Sqlite.html (struct sqlx::Sqlite)
   [5]: trait.Database.html#associatedconstant.NAME
   [6]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [7]: trait.Database.html#associatedconstant.URL_SCHEMES
   [8]: trait.Database.html#associatedtype.Connection
   [9]: struct.SqliteConnection.html (struct sqlx::SqliteConnection)
   [10]: trait.Database.html#associatedtype.TransactionManager
   [11]: sqlite/struct.SqliteTransactionManager.html (struct sqlx::sqlite::SqliteTransactionManager)
   [12]: trait.Database.html#associatedtype.Row
   [13]: sqlite/struct.SqliteRow.html (struct sqlx::sqlite::SqliteRow)
   [14]: trait.Database.html#associatedtype.QueryResult
   [15]: sqlite/struct.SqliteQueryResult.html (struct sqlx::sqlite::SqliteQueryResult)
   [16]: trait.Database.html#associatedtype.Column
   [17]: sqlite/struct.SqliteColumn.html (struct sqlx::sqlite::SqliteColumn)
   [18]: trait.Database.html#associatedtype.TypeInfo
   [19]: sqlite/struct.SqliteTypeInfo.html (struct sqlx::sqlite::SqliteTypeInfo)
   [20]: trait.Database.html#associatedtype.Value
   [21]: sqlite/struct.SqliteValue.html (struct sqlx::sqlite::SqliteValue)
   [22]: trait.Database.html#associatedtype.ValueRef
   [23]: sqlite/struct.SqliteValueRef.html (struct sqlx::sqlite::SqliteValueRef)
   [24]: trait.Database.html#associatedtype.Arguments
   [25]: sqlite/struct.SqliteArguments.html (struct sqlx::sqlite::SqliteArguments)
   [26]: trait.Database.html#associatedtype.ArgumentBuffer
   [27]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [28]: sqlite/enum.SqliteArgumentValue.html (enum sqlx::sqlite::SqliteArgumentValue)
   [29]: trait.Database.html#associatedtype.Statement
   [30]: sqlite/struct.SqliteStatement.html (struct sqlx::sqlite::SqliteStatement)
   [31]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [32]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [33]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [34]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [35]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [36]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [37]: trait.Decode.html (trait sqlx::Decode)
   [38]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [39]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [40]: trait.Decode.html#tymethod.decode
   [41]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [42]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [43]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [44]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [45]: types/struct.Json.html (struct sqlx::types::Json)
   [46]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html (trait serde_core::de::Deserialize)
   [47]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [48]: types/struct.Text.html (struct sqlx::types::Text)
   [49]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html (trait core::str::traits::FromStr)
   [50]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [51]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#associatedtype.Err (type core::str::traits::FromStr::Err)
   [52]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [53]: https://doc.rust-lang.org/1.94.1/std/primitive.f32.html
   [54]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html
   [55]: https://doc.rust-lang.org/1.94.1/std/primitive.i16.html
   [56]: https://doc.rust-lang.org/1.94.1/std/primitive.i32.html
   [57]: https://doc.rust-lang.org/1.94.1/std/primitive.i64.html
   [58]: https://doc.rust-lang.org/1.94.1/std/primitive.i8.html
   [59]: https://doc.rust-lang.org/1.94.1/std/primitive.u16.html
   [60]: https://doc.rust-lang.org/1.94.1/std/primitive.u32.html
   [61]: https://doc.rust-lang.org/1.94.1/std/primitive.u64.html
   [62]: trait.Encode.html (trait sqlx::Encode)
   [63]: trait.Encode.html#method.encode
   [64]: encode/enum.IsNull.html (enum sqlx::encode::IsNull)
   [65]: trait.Encode.html#tymethod.encode_by_ref
   [66]: trait.Encode.html#method.produces
   [67]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [68]: trait.Database.html#associatedtype.TypeInfo (type sqlx::Database::TypeInfo)
   [69]: trait.Encode.html#method.size_hint
   [70]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [71]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [72]: trait.Database.html#associatedtype.ArgumentBuffer (type sqlx::Database::ArgumentBuffer)
   [73]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [74]: trait.Type.html (trait sqlx::Type)
   [75]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [76]: migrate/trait.MigrateDatabase.html (trait sqlx::migrate::MigrateDatabase)
   [77]: migrate/trait.MigrateDatabase.html#tymethod.create_database
   [78]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [79]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [80]: enum.Error.html (enum sqlx::Error)
   [81]: migrate/trait.MigrateDatabase.html#tymethod.database_exists
   [82]: migrate/trait.MigrateDatabase.html#tymethod.drop_database
   [83]: migrate/trait.MigrateDatabase.html#method.force_drop_database
   [84]: trait.Database.html#associatedtype.Connection (type sqlx::Database::Connection)
   [85]: trait.Type.html#tymethod.type_info
   [86]: trait.Type.html#method.compatible
   [87]: trait.Database.html#associatedtype.Value (type sqlx::Database::Value)
   [88]: database/trait.HasStatementCache.html (trait sqlx::database::HasStatementCache)
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
   [107]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [108]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [109]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [110]: super::Span::current()
   [111]: crate::Span
   [112]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [113]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [114]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [115]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [116]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [117]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [118]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [119]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [120]: enum.Either.html (enum sqlx::Either)
   [121]: enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [122]: enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [123]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [124]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [125]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [126]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [127]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [128]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [129]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [130]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [131]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [132]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [133]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [134]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [135]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [136]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [137]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [138]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [139]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [140]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [141]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [142]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [143]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [144]: super::Subscriber
   [145]: dispatcher#setting-the-default-subscriber

