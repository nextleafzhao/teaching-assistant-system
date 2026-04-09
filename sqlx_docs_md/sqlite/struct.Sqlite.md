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



## [In sqlx::sqlite][2]

[sqlx][3]::[sqlite][2]

# Struct Sqlite Copy item path
[code]
    pub struct Sqlite;
[/code]

Expand description

Sqlite database driver.

## Trait Implementations§

§

### impl [Database][4] for [Sqlite][5]

§

#### const [NAME][6]: &'static [str][7] = "SQLite"

The display name for this database driver.

§

#### const [URL_SCHEMES][8]: &'static [&'static [str][7]]

The schemes for database URLs that should match this driver.

§

#### type [Connection][9] = [SqliteConnection][10]

The concrete `Connection` implementation for this database.

§

#### type [TransactionManager][11] = [SqliteTransactionManager][12]

The concrete `TransactionManager` implementation for this database.

§

#### type [Row][13] = [SqliteRow][14]

The concrete `Row` implementation for this database.

§

#### type [QueryResult][15] = [SqliteQueryResult][16]

The concrete `QueryResult` implementation for this database.

§

#### type [Column][17] = [SqliteColumn][18]

The concrete `Column` implementation for this database.

§

#### type [TypeInfo][19] = [SqliteTypeInfo][20]

The concrete `TypeInfo` implementation for this database.

§

#### type [Value][21] = [SqliteValue][22]

The concrete type used to hold an owned copy of the not-yet-decoded value that was received from the database.

§

#### type [ValueRef][23]<'r> = [SqliteValueRef][24]<'r>

The concrete type used to hold a reference to the not-yet-decoded value that has just been received from the database.

§

#### type [Arguments][25]<'q> = [SqliteArguments][26]<'q>

The concrete `Arguments` implementation for this database.

§

#### type [ArgumentBuffer][27]<'q> = [Vec][28]<[SqliteArgumentValue][29]<'q>>

The concrete type used as a buffer for arguments while encoding.

§

#### type [Statement][30]<'q> = [SqliteStatement][31]<'q>

The concrete `Statement` implementation for this database.

§

### impl [Debug][32] for [Sqlite][5]

§

#### fn [fmt][33](&self, f: &mut [Formatter][34]<'_>) -> [Result][35]<[()][36], [Error][37]>

Formats the value using the given formatter. [Read more][33]

§

### impl [Decode][38]<'_, [Sqlite][5]> for [Box][39]<[[u8][40]]>

§

#### fn [decode][41]( value: [SqliteValueRef][24]<'_>, ) -> [Result][35]<[Box][39]<[[u8][40]]>, [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Decode a new value of this type using a raw value from the database.

§

### impl [Decode][38]<'_, [Sqlite][5]> for [Box][39]<[str][7]>

§

#### fn [decode][41]( value: [SqliteValueRef][24]<'_>, ) -> [Result][35]<[Box][39]<[str][7]>, [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][38]<'r, [Sqlite][5]> for &'r [[u8][40]]

§

#### fn [decode][41]( value: [SqliteValueRef][24]<'r>, ) -> [Result][35]<&'r [[u8][40]], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][38]<'r, [Sqlite][5]> for &'r [str][7]

§

#### fn [decode][41]( value: [SqliteValueRef][24]<'r>, ) -> [Result][35]<&'r [str][7], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][38]<'r, [Sqlite][5]> for [Cow][45]<'r, [str][7]>

§

#### fn [decode][41]( value: [SqliteValueRef][24]<'r>, ) -> [Result][35]<[Cow][45]<'r, [str][7]>, [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r, T> [Decode][38]<'r, [Sqlite][5]> for [Json][46]<T>

where T: 'r + [Deserialize][47]<'r>,

§

#### fn [decode][41]( value: [SqliteValueRef][24]<'r>, ) -> [Result][35]<[Json][46]<T>, [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][38]<'r, [Sqlite][5]> for [String][48]

§

#### fn [decode][41]( value: [SqliteValueRef][24]<'r>, ) -> [Result][35]<[String][48], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r, T> [Decode][38]<'r, [Sqlite][5]> for [Text][49]<T>

where T: [FromStr][50], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>: [From][51]<<T as [FromStr][50]>::[Err][52]>,

§

#### fn [decode][41]( value: [SqliteValueRef][24]<'r>, ) -> [Result][35]<[Text][49]<T>, [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][38]<'r, [Sqlite][5]> for [Vec][28]<[u8][40]>

§

#### fn [decode][41]( value: [SqliteValueRef][24]<'r>, ) -> [Result][35]<[Vec][28]<[u8][40]>, [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][38]<'r, [Sqlite][5]> for [bool][53]

§

#### fn [decode][41]( value: [SqliteValueRef][24]<'r>, ) -> [Result][35]<[bool][53], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][38]<'r, [Sqlite][5]> for [f32][54]

§

#### fn [decode][41]( value: [SqliteValueRef][24]<'r>, ) -> [Result][35]<[f32][54], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][38]<'r, [Sqlite][5]> for [f64][55]

§

#### fn [decode][41]( value: [SqliteValueRef][24]<'r>, ) -> [Result][35]<[f64][55], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][38]<'r, [Sqlite][5]> for [i16][56]

§

#### fn [decode][41]( value: [SqliteValueRef][24]<'r>, ) -> [Result][35]<[i16][56], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][38]<'r, [Sqlite][5]> for [i32][57]

§

#### fn [decode][41]( value: [SqliteValueRef][24]<'r>, ) -> [Result][35]<[i32][57], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][38]<'r, [Sqlite][5]> for [i64][58]

§

#### fn [decode][41]( value: [SqliteValueRef][24]<'r>, ) -> [Result][35]<[i64][58], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][38]<'r, [Sqlite][5]> for [i8][59]

§

#### fn [decode][41](value: [SqliteValueRef][24]<'r>) -> [Result][35]<[i8][59], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][38]<'r, [Sqlite][5]> for [u16][60]

§

#### fn [decode][41]( value: [SqliteValueRef][24]<'r>, ) -> [Result][35]<[u16][60], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][38]<'r, [Sqlite][5]> for [u32][61]

§

#### fn [decode][41]( value: [SqliteValueRef][24]<'r>, ) -> [Result][35]<[u32][61], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][38]<'r, [Sqlite][5]> for [u64][62]

§

#### fn [decode][41]( value: [SqliteValueRef][24]<'r>, ) -> [Result][35]<[u64][62], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][38]<'r, [Sqlite][5]> for [u8][40]

§

#### fn [decode][41](value: [SqliteValueRef][24]<'r>) -> [Result][35]<[u8][40], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Decode a new value of this type using a raw value from the database.

§

### impl [Encode][63]<'_, [Sqlite][5]> for [Box][39]<[[u8][40]]>

§

#### fn [encode][64]( self, args: &mut [Vec][28]<[SqliteArgumentValue][29]<'_>>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [encode_by_ref][66]( &self, args: &mut [Vec][28]<[SqliteArgumentValue][29]<'_>>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][66]

§

#### fn [produces][67](&self) -> [Option][68]<<DB as [Database][4]>::[TypeInfo][69]>

§

#### fn [size_hint][70](&self) -> [usize][71]

§

### impl [Encode][63]<'_, [Sqlite][5]> for [Box][39]<[str][7]>

§

#### fn [encode][64]( self, args: &mut [Vec][28]<[SqliteArgumentValue][29]<'_>>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [encode_by_ref][66]( &self, args: &mut [Vec][28]<[SqliteArgumentValue][29]<'_>>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][66]

§

#### fn [produces][67](&self) -> [Option][68]<<DB as [Database][4]>::[TypeInfo][69]>

§

#### fn [size_hint][70](&self) -> [usize][71]

§

### impl<T> [Encode][63]<'_, [Sqlite][5]> for [Json][46]<T>

where T: [Serialize][72],

§

#### fn [encode_by_ref][66]( &self, buf: &mut [Vec][28]<[SqliteArgumentValue][29]<'_>>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][66]

§

#### fn [encode][64]( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][73]<'q>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

where Self: [Sized][74],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][67](&self) -> [Option][68]<<DB as [Database][4]>::[TypeInfo][69]>

§

#### fn [size_hint][70](&self) -> [usize][71]

§

### impl<'q> [Encode][63]<'q, [Sqlite][5]> for &'q [[u8][40]]

§

#### fn [encode_by_ref][66]( &self, args: &mut [Vec][28]<[SqliteArgumentValue][29]<'q>>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][66]

§

#### fn [encode][64]( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][73]<'q>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

where Self: [Sized][74],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][67](&self) -> [Option][68]<<DB as [Database][4]>::[TypeInfo][69]>

§

#### fn [size_hint][70](&self) -> [usize][71]

§

### impl<'q> [Encode][63]<'q, [Sqlite][5]> for &'q [str][7]

§

#### fn [encode_by_ref][66]( &self, args: &mut [Vec][28]<[SqliteArgumentValue][29]<'q>>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][66]

§

#### fn [encode][64]( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][73]<'q>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

where Self: [Sized][74],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][67](&self) -> [Option][68]<<DB as [Database][4]>::[TypeInfo][69]>

§

#### fn [size_hint][70](&self) -> [usize][71]

§

### impl<'q> [Encode][63]<'q, [Sqlite][5]> for [Cow][45]<'q, [str][7]>

§

#### fn [encode][64]( self, args: &mut [Vec][28]<[SqliteArgumentValue][29]<'q>>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [encode_by_ref][66]( &self, args: &mut [Vec][28]<[SqliteArgumentValue][29]<'q>>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][66]

§

#### fn [produces][67](&self) -> [Option][68]<<DB as [Database][4]>::[TypeInfo][69]>

§

#### fn [size_hint][70](&self) -> [usize][71]

§

### impl<'q, T> [Encode][63]<'q, [Sqlite][5]> for [Option][68]<T>

where T: [Encode][63]<'q, [Sqlite][5]> \+ [Type][75]<[Sqlite][5]> \+ 'q,

§

#### fn [produces][67](&self) -> [Option][68]<<[Sqlite][5] as [Database][4]>::[TypeInfo][69]>

§

#### fn [encode][64]( self, buf: &mut <[Sqlite][5] as [Database][4]>::[ArgumentBuffer][73]<'q>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [encode_by_ref][66]( &self, buf: &mut <[Sqlite][5] as [Database][4]>::[ArgumentBuffer][73]<'q>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][66]

§

#### fn [size_hint][70](&self) -> [usize][71]

§

### impl<'q> [Encode][63]<'q, [Sqlite][5]> for [String][48]

§

#### fn [encode][64]( self, args: &mut [Vec][28]<[SqliteArgumentValue][29]<'q>>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [encode_by_ref][66]( &self, args: &mut [Vec][28]<[SqliteArgumentValue][29]<'q>>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][66]

§

#### fn [produces][67](&self) -> [Option][68]<<DB as [Database][4]>::[TypeInfo][69]>

§

#### fn [size_hint][70](&self) -> [usize][71]

§

### impl<'q, T> [Encode][63]<'q, [Sqlite][5]> for [Text][49]<T>

where T: [Display][76],

§

#### fn [encode_by_ref][66]( &self, buf: &mut [Vec][28]<[SqliteArgumentValue][29]<'q>>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][66]

§

#### fn [encode][64]( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][73]<'q>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

where Self: [Sized][74],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][67](&self) -> [Option][68]<<DB as [Database][4]>::[TypeInfo][69]>

§

#### fn [size_hint][70](&self) -> [usize][71]

§

### impl<'q> [Encode][63]<'q, [Sqlite][5]> for [Vec][28]<[u8][40]>

§

#### fn [encode][64]( self, args: &mut [Vec][28]<[SqliteArgumentValue][29]<'q>>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [encode_by_ref][66]( &self, args: &mut [Vec][28]<[SqliteArgumentValue][29]<'q>>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][66]

§

#### fn [produces][67](&self) -> [Option][68]<<DB as [Database][4]>::[TypeInfo][69]>

§

#### fn [size_hint][70](&self) -> [usize][71]

§

### impl<'q> [Encode][63]<'q, [Sqlite][5]> for [bool][53]

§

#### fn [encode_by_ref][66]( &self, args: &mut [Vec][28]<[SqliteArgumentValue][29]<'q>>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][66]

§

#### fn [encode][64]( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][73]<'q>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

where Self: [Sized][74],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][67](&self) -> [Option][68]<<DB as [Database][4]>::[TypeInfo][69]>

§

#### fn [size_hint][70](&self) -> [usize][71]

§

### impl<'q> [Encode][63]<'q, [Sqlite][5]> for [f32][54]

§

#### fn [encode_by_ref][66]( &self, args: &mut [Vec][28]<[SqliteArgumentValue][29]<'q>>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][66]

§

#### fn [encode][64]( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][73]<'q>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

where Self: [Sized][74],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][67](&self) -> [Option][68]<<DB as [Database][4]>::[TypeInfo][69]>

§

#### fn [size_hint][70](&self) -> [usize][71]

§

### impl<'q> [Encode][63]<'q, [Sqlite][5]> for [f64][55]

§

#### fn [encode_by_ref][66]( &self, args: &mut [Vec][28]<[SqliteArgumentValue][29]<'q>>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][66]

§

#### fn [encode][64]( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][73]<'q>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

where Self: [Sized][74],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][67](&self) -> [Option][68]<<DB as [Database][4]>::[TypeInfo][69]>

§

#### fn [size_hint][70](&self) -> [usize][71]

§

### impl<'q> [Encode][63]<'q, [Sqlite][5]> for [i16][56]

§

#### fn [encode_by_ref][66]( &self, args: &mut [Vec][28]<[SqliteArgumentValue][29]<'q>>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][66]

§

#### fn [encode][64]( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][73]<'q>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

where Self: [Sized][74],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][67](&self) -> [Option][68]<<DB as [Database][4]>::[TypeInfo][69]>

§

#### fn [size_hint][70](&self) -> [usize][71]

§

### impl<'q> [Encode][63]<'q, [Sqlite][5]> for [i32][57]

§

#### fn [encode_by_ref][66]( &self, args: &mut [Vec][28]<[SqliteArgumentValue][29]<'q>>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][66]

§

#### fn [encode][64]( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][73]<'q>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

where Self: [Sized][74],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][67](&self) -> [Option][68]<<DB as [Database][4]>::[TypeInfo][69]>

§

#### fn [size_hint][70](&self) -> [usize][71]

§

### impl<'q> [Encode][63]<'q, [Sqlite][5]> for [i64][58]

§

#### fn [encode_by_ref][66]( &self, args: &mut [Vec][28]<[SqliteArgumentValue][29]<'q>>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][66]

§

#### fn [encode][64]( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][73]<'q>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

where Self: [Sized][74],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][67](&self) -> [Option][68]<<DB as [Database][4]>::[TypeInfo][69]>

§

#### fn [size_hint][70](&self) -> [usize][71]

§

### impl<'q> [Encode][63]<'q, [Sqlite][5]> for [i8][59]

§

#### fn [encode_by_ref][66]( &self, args: &mut [Vec][28]<[SqliteArgumentValue][29]<'q>>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][66]

§

#### fn [encode][64]( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][73]<'q>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

where Self: [Sized][74],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][67](&self) -> [Option][68]<<DB as [Database][4]>::[TypeInfo][69]>

§

#### fn [size_hint][70](&self) -> [usize][71]

§

### impl<'q> [Encode][63]<'q, [Sqlite][5]> for [u16][60]

§

#### fn [encode_by_ref][66]( &self, args: &mut [Vec][28]<[SqliteArgumentValue][29]<'q>>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][66]

§

#### fn [encode][64]( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][73]<'q>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

where Self: [Sized][74],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][67](&self) -> [Option][68]<<DB as [Database][4]>::[TypeInfo][69]>

§

#### fn [size_hint][70](&self) -> [usize][71]

§

### impl<'q> [Encode][63]<'q, [Sqlite][5]> for [u32][61]

§

#### fn [encode_by_ref][66]( &self, args: &mut [Vec][28]<[SqliteArgumentValue][29]<'q>>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][66]

§

#### fn [encode][64]( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][73]<'q>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

where Self: [Sized][74],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][67](&self) -> [Option][68]<<DB as [Database][4]>::[TypeInfo][69]>

§

#### fn [size_hint][70](&self) -> [usize][71]

§

### impl<'q> [Encode][63]<'q, [Sqlite][5]> for [u8][40]

§

#### fn [encode_by_ref][66]( &self, args: &mut [Vec][28]<[SqliteArgumentValue][29]<'q>>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][66]

§

#### fn [encode][64]( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][73]<'q>, ) -> [Result][35]<[IsNull][65], [Box][39]<dyn [Error][42] \+ [Send][43] \+ [Sync][44]>>

where Self: [Sized][74],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][67](&self) -> [Option][68]<<DB as [Database][4]>::[TypeInfo][69]>

§

#### fn [size_hint][70](&self) -> [usize][71]

§

### impl [MigrateDatabase][77] for [Sqlite][5]

§

#### fn [create_database][78]( url: &[str][7], ) -> [Pin][79]<[Box][39]<dyn [Future][80]<Output = [Result][35]<[()][36], [Error][81]>> \+ [Send][43] \+ '_>>

§

#### fn [database_exists][82]( url: &[str][7], ) -> [Pin][79]<[Box][39]<dyn [Future][80]<Output = [Result][35]<[bool][53], [Error][81]>> \+ [Send][43] \+ '_>>

§

#### fn [drop_database][83]( url: &[str][7], ) -> [Pin][79]<[Box][39]<dyn [Future][80]<Output = [Result][35]<[()][36], [Error][81]>> \+ [Send][43] \+ '_>>

§

#### fn [force_drop_database][84]( _url: &[str][7], ) -> [Pin][79]<[Box][39]<dyn [Future][80]<Output = [Result][35]<[()][36], [Error][81]>> \+ [Send][43] \+ '_>>

§

### impl TestSupport for [Sqlite][5]

§

#### fn test_context( args: &TestArgs, ) -> [Pin][79]<[Box][39]<dyn [Future][80]<Output = [Result][35]<TestContext<[Sqlite][5]>, [Error][81]>> \+ [Send][43] \+ '_>>

Get parameters to construct a `Pool` suitable for testing. Read more

§

#### fn cleanup_test( db_name: &[str][7], ) -> [Pin][79]<[Box][39]<dyn [Future][80]<Output = [Result][35]<[()][36], [Error][81]>> \+ [Send][43] \+ '_>>

§

#### fn cleanup_test_dbs() -> [Pin][79]<[Box][39]<dyn [Future][80]<Output = [Result][35]<[Option][68]<[usize][71]>, [Error][81]>> \+ [Send][43]>>

Cleanup any test databases that are no longer in-use. Read more

§

#### fn snapshot( _conn: &mut <[Sqlite][5] as [Database][4]>::[Connection][85], ) -> [Pin][79]<[Box][39]<dyn [Future][80]<Output = [Result][35]<FixtureSnapshot<[Sqlite][5]>, [Error][81]>> \+ [Send][43] \+ '_>>

Take a snapshot of the current state of the database (data only). Read more

§

#### fn db_name(args: &TestArgs) -> [String][48]

Generate a unique database name for the given test path.

§

### impl [Type][75]<[Sqlite][5]> for [[u8][40]]

§

#### fn [type_info][86]() -> [SqliteTypeInfo][20]

Returns the canonical SQL type for this Rust type. [Read more][86]

§

#### fn [compatible][87](ty: &[SqliteTypeInfo][20]) -> [bool][53]

Determines if this Rust type is compatible with the given SQL type. [Read more][87]

§

### impl [Type][75]<[Sqlite][5]> for [Box][39]<[[u8][40]]>

§

#### fn [type_info][86]() -> [SqliteTypeInfo][20]

Returns the canonical SQL type for this Rust type. [Read more][86]

§

#### fn [compatible][87](ty: &[SqliteTypeInfo][20]) -> [bool][53]

Determines if this Rust type is compatible with the given SQL type. [Read more][87]

§

### impl [Type][75]<[Sqlite][5]> for [Box][39]<[str][7]>

§

#### fn [type_info][86]() -> [SqliteTypeInfo][20]

Returns the canonical SQL type for this Rust type. [Read more][86]

§

#### fn [compatible][87](ty: &<DB as [Database][4]>::[TypeInfo][69]) -> [bool][53]

Determines if this Rust type is compatible with the given SQL type. [Read more][87]

§

### impl [Type][75]<[Sqlite][5]> for [Cow][45]<'_, [str][7]>

§

#### fn [type_info][86]() -> [SqliteTypeInfo][20]

Returns the canonical SQL type for this Rust type. [Read more][86]

§

#### fn [compatible][87](ty: &[SqliteTypeInfo][20]) -> [bool][53]

Determines if this Rust type is compatible with the given SQL type. [Read more][87]

§

### impl<T> [Type][75]<[Sqlite][5]> for [Json][46]<T>

§

#### fn [type_info][86]() -> [SqliteTypeInfo][20]

Returns the canonical SQL type for this Rust type. [Read more][86]

§

#### fn [compatible][87](ty: &[SqliteTypeInfo][20]) -> [bool][53]

Determines if this Rust type is compatible with the given SQL type. [Read more][87]

§

### impl [Type][75]<[Sqlite][5]> for [String][48]

§

#### fn [type_info][86]() -> [SqliteTypeInfo][20]

Returns the canonical SQL type for this Rust type. [Read more][86]

§

#### fn [compatible][87](ty: &<DB as [Database][4]>::[TypeInfo][69]) -> [bool][53]

Determines if this Rust type is compatible with the given SQL type. [Read more][87]

§

### impl<T> [Type][75]<[Sqlite][5]> for [Text][49]<T>

§

#### fn [type_info][86]() -> [SqliteTypeInfo][20]

Returns the canonical SQL type for this Rust type. [Read more][86]

§

#### fn [compatible][87](ty: &[SqliteTypeInfo][20]) -> [bool][53]

Determines if this Rust type is compatible with the given SQL type. [Read more][87]

§

### impl [Type][75]<[Sqlite][5]> for [Vec][28]<[u8][40]>

§

#### fn [type_info][86]() -> [SqliteTypeInfo][20]

Returns the canonical SQL type for this Rust type. [Read more][86]

§

#### fn [compatible][87](ty: &[SqliteTypeInfo][20]) -> [bool][53]

Determines if this Rust type is compatible with the given SQL type. [Read more][87]

§

### impl [Type][75]<[Sqlite][5]> for [bool][53]

§

#### fn [type_info][86]() -> [SqliteTypeInfo][20]

Returns the canonical SQL type for this Rust type. [Read more][86]

§

#### fn [compatible][87](ty: &[SqliteTypeInfo][20]) -> [bool][53]

Determines if this Rust type is compatible with the given SQL type. [Read more][87]

§

### impl [Type][75]<[Sqlite][5]> for [f32][54]

§

#### fn [type_info][86]() -> [SqliteTypeInfo][20]

Returns the canonical SQL type for this Rust type. [Read more][86]

§

#### fn [compatible][87](ty: &<DB as [Database][4]>::[TypeInfo][69]) -> [bool][53]

Determines if this Rust type is compatible with the given SQL type. [Read more][87]

§

### impl [Type][75]<[Sqlite][5]> for [f64][55]

§

#### fn [type_info][86]() -> [SqliteTypeInfo][20]

Returns the canonical SQL type for this Rust type. [Read more][86]

§

#### fn [compatible][87](ty: &<DB as [Database][4]>::[TypeInfo][69]) -> [bool][53]

Determines if this Rust type is compatible with the given SQL type. [Read more][87]

§

### impl [Type][75]<[Sqlite][5]> for [i16][56]

§

#### fn [type_info][86]() -> [SqliteTypeInfo][20]

Returns the canonical SQL type for this Rust type. [Read more][86]

§

#### fn [compatible][87](ty: &[SqliteTypeInfo][20]) -> [bool][53]

Determines if this Rust type is compatible with the given SQL type. [Read more][87]

§

### impl [Type][75]<[Sqlite][5]> for [i32][57]

§

#### fn [type_info][86]() -> [SqliteTypeInfo][20]

Returns the canonical SQL type for this Rust type. [Read more][86]

§

#### fn [compatible][87](ty: &[SqliteTypeInfo][20]) -> [bool][53]

Determines if this Rust type is compatible with the given SQL type. [Read more][87]

§

### impl [Type][75]<[Sqlite][5]> for [i64][58]

§

#### fn [type_info][86]() -> [SqliteTypeInfo][20]

Returns the canonical SQL type for this Rust type. [Read more][86]

§

#### fn [compatible][87](ty: &[SqliteTypeInfo][20]) -> [bool][53]

Determines if this Rust type is compatible with the given SQL type. [Read more][87]

§

### impl [Type][75]<[Sqlite][5]> for [i8][59]

§

#### fn [type_info][86]() -> [SqliteTypeInfo][20]

Returns the canonical SQL type for this Rust type. [Read more][86]

§

#### fn [compatible][87](ty: &[SqliteTypeInfo][20]) -> [bool][53]

Determines if this Rust type is compatible with the given SQL type. [Read more][87]

§

### impl [Type][75]<[Sqlite][5]> for [str][7]

§

#### fn [type_info][86]() -> [SqliteTypeInfo][20]

Returns the canonical SQL type for this Rust type. [Read more][86]

§

#### fn [compatible][87](ty: &<DB as [Database][4]>::[TypeInfo][69]) -> [bool][53]

Determines if this Rust type is compatible with the given SQL type. [Read more][87]

§

### impl [Type][75]<[Sqlite][5]> for [u16][60]

§

#### fn [type_info][86]() -> [SqliteTypeInfo][20]

Returns the canonical SQL type for this Rust type. [Read more][86]

§

#### fn [compatible][87](ty: &[SqliteTypeInfo][20]) -> [bool][53]

Determines if this Rust type is compatible with the given SQL type. [Read more][87]

§

### impl [Type][75]<[Sqlite][5]> for [u32][61]

§

#### fn [type_info][86]() -> [SqliteTypeInfo][20]

Returns the canonical SQL type for this Rust type. [Read more][86]

§

#### fn [compatible][87](ty: &[SqliteTypeInfo][20]) -> [bool][53]

Determines if this Rust type is compatible with the given SQL type. [Read more][87]

§

### impl [Type][75]<[Sqlite][5]> for [u64][62]

§

#### fn [type_info][86]() -> [SqliteTypeInfo][20]

Returns the canonical SQL type for this Rust type. [Read more][86]

§

#### fn [compatible][87](ty: &[SqliteTypeInfo][20]) -> [bool][53]

Determines if this Rust type is compatible with the given SQL type. [Read more][87]

§

### impl [Type][75]<[Sqlite][5]> for [u8][40]

§

#### fn [type_info][86]() -> [SqliteTypeInfo][20]

Returns the canonical SQL type for this Rust type. [Read more][86]

§

#### fn [compatible][87](ty: &[SqliteTypeInfo][20]) -> [bool][53]

Determines if this Rust type is compatible with the given SQL type. [Read more][87]

§

### impl TypeChecking for [Sqlite][5]

§

#### const PARAM_CHECKING: ParamChecking = ::sqlx_core::type_checking::ParamChecking::Weak

Describes how the database in question typechecks query parameters.

§

#### fn param_type_for_id( info: &<[Sqlite][5] as [Database][4]>::[TypeInfo][69], ) -> [Option][68]<&'static [str][7]>

Get the full path of the Rust type that corresponds to the given `TypeInfo`, if applicable. Read more

§

#### fn return_type_for_id( info: &<[Sqlite][5] as [Database][4]>::[TypeInfo][69], ) -> [Option][68]<&'static [str][7]>

Get the full path of the Rust type that corresponds to the given `TypeInfo`, if applicable. Read more

§

#### fn get_feature_gate( _info: &<[Sqlite][5] as [Database][4]>::[TypeInfo][69], ) -> [Option][68]<&'static [str][7]>

Get the name of the Cargo feature gate that must be enabled to process the given `TypeInfo`, if applicable.

§

#### fn fmt_value_debug(value: &<[Sqlite][5] as [Database][4]>::[Value][88]) -> FmtValue<'_, [Sqlite][5]>

If `value` is a well-known type, decode and format it using `Debug`. Read more

§

### impl [HasStatementCache][89] for [Sqlite][5]

## Auto Trait Implementations§

§

### impl [Freeze][90] for [Sqlite][5]

§

### impl [RefUnwindSafe][91] for [Sqlite][5]

§

### impl [Send][43] for [Sqlite][5]

§

### impl [Sync][44] for [Sqlite][5]

§

### impl [Unpin][92] for [Sqlite][5]

§

### impl [UnwindSafe][93] for [Sqlite][5]

## Blanket Implementations§

[Source][94]§

### impl<T> [Any][95] for T

where T: 'static + ?[Sized][74],

[Source][96]§

#### fn [type_id][97](&self) -> [TypeId][98]

Gets the `TypeId` of `self`. [Read more][97]

[Source][99]§

### impl<T> [Borrow][100]<T> for T

where T: ?[Sized][74],

[Source][101]§

#### fn [borrow][102](&self) -> [&T][103]

Immutably borrows from an owned value. [Read more][102]

[Source][104]§

### impl<T> [BorrowMut][105]<T> for T

where T: ?[Sized][74],

[Source][106]§

#### fn [borrow_mut][107](&mut self) -> [&mut T][103]

Mutably borrows from an owned value. [Read more][107]

[Source][108]§

### impl<T> [From][51]<T> for T

[Source][109]§

#### fn [from][110](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][111] [`Span`][112], returning an `Instrumented` wrapper. Read more

[Source][113]§

### impl<T, U> [Into][114]<U> for T

where U: [From][51]<T>,

[Source][115]§

#### fn [into][116](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][51]<T> for U` chooses to do.

[Source][117]§

### impl<T> [IntoEither][118] for T

[Source][119]§

#### fn [into_either][120](self, into_left: [bool][53]) -> [Either][121]<Self, Self> ⓘ

Converts `self` into a [`Left`][122] variant of [`Either<Self, Self>`][121] if `into_left` is `true`. Converts `self` into a [`Right`][123] variant of [`Either<Self, Self>`][121] otherwise. [Read more][120]

[Source][124]§

#### fn [into_either_with][125]<F>(self, into_left: F) -> [Either][121]<Self, Self> ⓘ

where F: [FnOnce][126](&Self) -> [bool][53],

Converts `self` into a [`Left`][122] variant of [`Either<Self, Self>`][121] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][123] variant of [`Either<Self, Self>`][121] otherwise. [Read more][125]

[Source][127]§

### impl<T> [Same][128] for T

[Source][129]§

#### type [Output][130] = T

Should always be `Self`

[Source][131]§

### impl<T, U> [TryFrom][132]<U> for T

where U: [Into][114]<T>,

[Source][133]§

#### type [Error][134] = [Infallible][135]

The type returned in the event of a conversion error.

[Source][136]§

#### fn [try_from][137](value: U) -> [Result][35]<T, <T as [TryFrom][132]<U>>::[Error][138]>

Performs the conversion.

[Source][139]§

### impl<T, U> [TryInto][140]<U> for T

where U: [TryFrom][132]<T>,

[Source][141]§

#### type [Error][142] = <U as [TryFrom][132]<T>>::[Error][138]

The type returned in the event of a conversion error.

[Source][143]§

#### fn [try_into][144](self) -> [Result][35]<U, <U as [TryFrom][132]<T>>::[Error][138]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][114]<Dispatch>,

Attaches the provided [`Subscriber`][145] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][146] [`Subscriber`][145] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../trait.Database.html (trait sqlx::Database)
   [5]: ../struct.Sqlite.html (struct sqlx::Sqlite)
   [6]: ../trait.Database.html#associatedconstant.NAME
   [7]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [8]: ../trait.Database.html#associatedconstant.URL_SCHEMES
   [9]: ../trait.Database.html#associatedtype.Connection
   [10]: ../struct.SqliteConnection.html (struct sqlx::SqliteConnection)
   [11]: ../trait.Database.html#associatedtype.TransactionManager
   [12]: struct.SqliteTransactionManager.html (struct sqlx::sqlite::SqliteTransactionManager)
   [13]: ../trait.Database.html#associatedtype.Row
   [14]: struct.SqliteRow.html (struct sqlx::sqlite::SqliteRow)
   [15]: ../trait.Database.html#associatedtype.QueryResult
   [16]: struct.SqliteQueryResult.html (struct sqlx::sqlite::SqliteQueryResult)
   [17]: ../trait.Database.html#associatedtype.Column
   [18]: struct.SqliteColumn.html (struct sqlx::sqlite::SqliteColumn)
   [19]: ../trait.Database.html#associatedtype.TypeInfo
   [20]: struct.SqliteTypeInfo.html (struct sqlx::sqlite::SqliteTypeInfo)
   [21]: ../trait.Database.html#associatedtype.Value
   [22]: struct.SqliteValue.html (struct sqlx::sqlite::SqliteValue)
   [23]: ../trait.Database.html#associatedtype.ValueRef
   [24]: struct.SqliteValueRef.html (struct sqlx::sqlite::SqliteValueRef)
   [25]: ../trait.Database.html#associatedtype.Arguments
   [26]: struct.SqliteArguments.html (struct sqlx::sqlite::SqliteArguments)
   [27]: ../trait.Database.html#associatedtype.ArgumentBuffer
   [28]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [29]: enum.SqliteArgumentValue.html (enum sqlx::sqlite::SqliteArgumentValue)
   [30]: ../trait.Database.html#associatedtype.Statement
   [31]: struct.SqliteStatement.html (struct sqlx::sqlite::SqliteStatement)
   [32]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [33]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [34]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [35]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [36]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [37]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [38]: ../trait.Decode.html (trait sqlx::Decode)
   [39]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [40]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [41]: ../trait.Decode.html#tymethod.decode
   [42]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [43]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [44]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [45]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [46]: ../types/struct.Json.html (struct sqlx::types::Json)
   [47]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html (trait serde_core::de::Deserialize)
   [48]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [49]: ../types/struct.Text.html (struct sqlx::types::Text)
   [50]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html (trait core::str::traits::FromStr)
   [51]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [52]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#associatedtype.Err (type core::str::traits::FromStr::Err)
   [53]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [54]: https://doc.rust-lang.org/1.94.1/std/primitive.f32.html
   [55]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html
   [56]: https://doc.rust-lang.org/1.94.1/std/primitive.i16.html
   [57]: https://doc.rust-lang.org/1.94.1/std/primitive.i32.html
   [58]: https://doc.rust-lang.org/1.94.1/std/primitive.i64.html
   [59]: https://doc.rust-lang.org/1.94.1/std/primitive.i8.html
   [60]: https://doc.rust-lang.org/1.94.1/std/primitive.u16.html
   [61]: https://doc.rust-lang.org/1.94.1/std/primitive.u32.html
   [62]: https://doc.rust-lang.org/1.94.1/std/primitive.u64.html
   [63]: ../trait.Encode.html (trait sqlx::Encode)
   [64]: ../trait.Encode.html#method.encode
   [65]: ../encode/enum.IsNull.html (enum sqlx::encode::IsNull)
   [66]: ../trait.Encode.html#tymethod.encode_by_ref
   [67]: ../trait.Encode.html#method.produces
   [68]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [69]: ../trait.Database.html#associatedtype.TypeInfo (type sqlx::Database::TypeInfo)
   [70]: ../trait.Encode.html#method.size_hint
   [71]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [72]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [73]: ../trait.Database.html#associatedtype.ArgumentBuffer (type sqlx::Database::ArgumentBuffer)
   [74]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [75]: ../trait.Type.html (trait sqlx::Type)
   [76]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [77]: ../migrate/trait.MigrateDatabase.html (trait sqlx::migrate::MigrateDatabase)
   [78]: ../migrate/trait.MigrateDatabase.html#tymethod.create_database
   [79]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [80]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [81]: ../enum.Error.html (enum sqlx::Error)
   [82]: ../migrate/trait.MigrateDatabase.html#tymethod.database_exists
   [83]: ../migrate/trait.MigrateDatabase.html#tymethod.drop_database
   [84]: ../migrate/trait.MigrateDatabase.html#method.force_drop_database
   [85]: ../trait.Database.html#associatedtype.Connection (type sqlx::Database::Connection)
   [86]: ../trait.Type.html#tymethod.type_info
   [87]: ../trait.Type.html#method.compatible
   [88]: ../trait.Database.html#associatedtype.Value (type sqlx::Database::Value)
   [89]: ../database/trait.HasStatementCache.html (trait sqlx::database::HasStatementCache)
   [90]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [91]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [92]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [93]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [94]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [95]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [96]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [97]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [98]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [99]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [100]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [101]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [102]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [103]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [104]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [105]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [106]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [107]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [108]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [109]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [110]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [111]: super::Span::current()
   [112]: crate::Span
   [113]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [114]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [115]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [116]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [117]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [118]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [119]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [120]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [121]: ../enum.Either.html (enum sqlx::Either)
   [122]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [123]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [124]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [125]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [126]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [127]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [128]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [129]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [130]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [131]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [132]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [133]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [134]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [135]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [136]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [137]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [138]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [139]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [140]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [141]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [142]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [143]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [144]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [145]: super::Subscriber
   [146]: dispatcher#setting-the-default-subscriber

