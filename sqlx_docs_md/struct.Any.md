## Any

## [sqlx][1]0.8.6

## Any

### Trait Implementations

  * Database
  * Debug
  * Decode<'a, Any>
  * Decode<'r, Any>
  * Decode<'r, Any>
  * Decode<'r, Any>
  * Decode<'r, Any>
  * Decode<'r, Any>
  * Decode<'r, Any>
  * Decode<'r, Any>
  * Decode<'r, Any>
  * Decode<'r, Any>
  * Encode<'a, Any>
  * Encode<'q, Any>
  * Encode<'q, Any>
  * Encode<'q, Any>
  * Encode<'q, Any>
  * Encode<'q, Any>
  * Encode<'q, Any>
  * Encode<'q, Any>
  * Encode<'q, Any>
  * Encode<'q, Any>
  * Encode<'q, Any>
  * HasStatementCache
  * MigrateDatabase
  * Type<Any>
  * Type<Any>
  * Type<Any>
  * Type<Any>
  * Type<Any>
  * Type<Any>
  * Type<Any>
  * Type<Any>
  * Type<Any>
  * Type<Any>



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

# Struct Any Copy item path
[code]
    pub struct Any;
[/code]

Expand description

Opaque database driver. Capable of being used in place of any SQLx database driver. The actual driver used will be selected at runtime, from the connection url.

## Trait Implementations§

§

### impl [Database][3] for [Any][4]

§

#### const [NAME][5]: &'static [str][6] = "Any"

The display name for this database driver.

§

#### const [URL_SCHEMES][7]: &'static [&'static [str][6]]

The schemes for database URLs that should match this driver.

§

#### type [Connection][8] = [AnyConnection][9]

The concrete `Connection` implementation for this database.

§

#### type [TransactionManager][10] = [AnyTransactionManager][11]

The concrete `TransactionManager` implementation for this database.

§

#### type [Row][12] = [AnyRow][13]

The concrete `Row` implementation for this database.

§

#### type [QueryResult][14] = [AnyQueryResult][15]

The concrete `QueryResult` implementation for this database.

§

#### type [Column][16] = AnyColumn

The concrete `Column` implementation for this database.

§

#### type [TypeInfo][17] = [AnyTypeInfo][18]

The concrete `TypeInfo` implementation for this database.

§

#### type [Value][19] = [AnyValue][20]

The concrete type used to hold an owned copy of the not-yet-decoded value that was received from the database.

§

#### type [ValueRef][21]<'r> = [AnyValueRef][22]<'r>

The concrete type used to hold a reference to the not-yet-decoded value that has just been received from the database.

§

#### type [Arguments][23]<'q> = [AnyArguments][24]<'q>

The concrete `Arguments` implementation for this database.

§

#### type [ArgumentBuffer][25]<'q> = AnyArgumentBuffer<'q>

The concrete type used as a buffer for arguments while encoding.

§

#### type [Statement][26]<'q> = [AnyStatement][27]<'q>

The concrete `Statement` implementation for this database.

§

### impl [Debug][28] for [Any][4]

§

#### fn [fmt][29](&self, f: &mut [Formatter][30]<'_>) -> [Result][31]<[()][32], [Error][33]>

Formats the value using the given formatter. [Read more][29]

§

### impl<'a> [Decode][34]<'a, [Any][4]> for &'a [str][6]

§

#### fn [decode][35]( value: <[Any][4] as [Database][3]>::[ValueRef][36]<'a>, ) -> [Result][31]<&'a [str][6], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][34]<'r, [Any][4]> for &'r [[u8][41]]

§

#### fn [decode][35]( value: <[Any][4] as [Database][3]>::[ValueRef][36]<'r>, ) -> [Result][31]<&'r [[u8][41]], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][34]<'r, [Any][4]> for [String][42]

§

#### fn [decode][35]( value: <[Any][4] as [Database][3]>::[ValueRef][36]<'r>, ) -> [Result][31]<[String][42], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][34]<'r, [Any][4]> for [Vec][43]<[u8][41]>

§

#### fn [decode][35]( value: <[Any][4] as [Database][3]>::[ValueRef][36]<'r>, ) -> [Result][31]<[Vec][43]<[u8][41]>, [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][34]<'r, [Any][4]> for [bool][44]

§

#### fn [decode][35]( value: <[Any][4] as [Database][3]>::[ValueRef][36]<'r>, ) -> [Result][31]<[bool][44], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][34]<'r, [Any][4]> for [f32][45]

§

#### fn [decode][35](value: [AnyValueRef][22]<'r>) -> [Result][31]<[f32][45], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][34]<'r, [Any][4]> for [f64][46]

§

#### fn [decode][35]( value: <[Any][4] as [Database][3]>::[ValueRef][36]<'r>, ) -> [Result][31]<[f64][46], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][34]<'r, [Any][4]> for [i16][47]

§

#### fn [decode][35]( value: <[Any][4] as [Database][3]>::[ValueRef][36]<'r>, ) -> [Result][31]<[i16][47], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][34]<'r, [Any][4]> for [i32][48]

§

#### fn [decode][35]( value: <[Any][4] as [Database][3]>::[ValueRef][36]<'r>, ) -> [Result][31]<[i32][48], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][34]<'r, [Any][4]> for [i64][49]

§

#### fn [decode][35]( value: <[Any][4] as [Database][3]>::[ValueRef][36]<'r>, ) -> [Result][31]<[i64][49], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'a> [Encode][50]<'a, [Any][4]> for &'a [str][6]

§

#### fn [encode][51]( self, buf: &mut <[Any][4] as [Database][3]>::[ArgumentBuffer][52]<'a>, ) -> [Result][31]<[IsNull][53], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

where &'a [str][6]: [Sized][54],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [encode_by_ref][55]( &self, buf: &mut <[Any][4] as [Database][3]>::[ArgumentBuffer][52]<'a>, ) -> [Result][31]<[IsNull][53], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][55]

§

#### fn [produces][56](&self) -> [Option][57]<<DB as [Database][3]>::[TypeInfo][58]>

§

#### fn [size_hint][59](&self) -> [usize][60]

§

### impl<'q> [Encode][50]<'q, [Any][4]> for &'q [[u8][41]]

§

#### fn [encode_by_ref][55]( &self, buf: &mut <[Any][4] as [Database][3]>::[ArgumentBuffer][52]<'q>, ) -> [Result][31]<[IsNull][53], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][55]

§

#### fn [encode][51]( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][52]<'q>, ) -> [Result][31]<[IsNull][53], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

where Self: [Sized][54],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][56](&self) -> [Option][57]<<DB as [Database][3]>::[TypeInfo][58]>

§

#### fn [size_hint][59](&self) -> [usize][60]

§

### impl<'q, T> [Encode][50]<'q, [Any][4]> for [Option][57]<T>

where T: [Encode][50]<'q, [Any][4]> \+ 'q + [Type][61]<[Any][4]>,

§

#### fn [encode_by_ref][55]( &self, buf: &mut AnyArgumentBuffer<'q>, ) -> [Result][31]<[IsNull][53], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][55]

§

#### fn [encode][51]( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][52]<'q>, ) -> [Result][31]<[IsNull][53], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

where Self: [Sized][54],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][56](&self) -> [Option][57]<<DB as [Database][3]>::[TypeInfo][58]>

§

#### fn [size_hint][59](&self) -> [usize][60]

§

### impl<'q> [Encode][50]<'q, [Any][4]> for [String][42]

§

#### fn [encode_by_ref][55]( &self, buf: &mut <[Any][4] as [Database][3]>::[ArgumentBuffer][52]<'q>, ) -> [Result][31]<[IsNull][53], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][55]

§

#### fn [encode][51]( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][52]<'q>, ) -> [Result][31]<[IsNull][53], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

where Self: [Sized][54],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][56](&self) -> [Option][57]<<DB as [Database][3]>::[TypeInfo][58]>

§

#### fn [size_hint][59](&self) -> [usize][60]

§

### impl<'q> [Encode][50]<'q, [Any][4]> for [Vec][43]<[u8][41]>

§

#### fn [encode_by_ref][55]( &self, buf: &mut <[Any][4] as [Database][3]>::[ArgumentBuffer][52]<'q>, ) -> [Result][31]<[IsNull][53], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][55]

§

#### fn [encode][51]( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][52]<'q>, ) -> [Result][31]<[IsNull][53], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

where Self: [Sized][54],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][56](&self) -> [Option][57]<<DB as [Database][3]>::[TypeInfo][58]>

§

#### fn [size_hint][59](&self) -> [usize][60]

§

### impl<'q> [Encode][50]<'q, [Any][4]> for [bool][44]

§

#### fn [encode_by_ref][55]( &self, buf: &mut <[Any][4] as [Database][3]>::[ArgumentBuffer][52]<'q>, ) -> [Result][31]<[IsNull][53], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][55]

§

#### fn [encode][51]( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][52]<'q>, ) -> [Result][31]<[IsNull][53], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

where Self: [Sized][54],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][56](&self) -> [Option][57]<<DB as [Database][3]>::[TypeInfo][58]>

§

#### fn [size_hint][59](&self) -> [usize][60]

§

### impl<'q> [Encode][50]<'q, [Any][4]> for [f32][45]

§

#### fn [encode_by_ref][55]( &self, buf: &mut AnyArgumentBuffer<'q>, ) -> [Result][31]<[IsNull][53], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][55]

§

#### fn [encode][51]( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][52]<'q>, ) -> [Result][31]<[IsNull][53], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

where Self: [Sized][54],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][56](&self) -> [Option][57]<<DB as [Database][3]>::[TypeInfo][58]>

§

#### fn [size_hint][59](&self) -> [usize][60]

§

### impl<'q> [Encode][50]<'q, [Any][4]> for [f64][46]

§

#### fn [encode_by_ref][55]( &self, buf: &mut <[Any][4] as [Database][3]>::[ArgumentBuffer][52]<'q>, ) -> [Result][31]<[IsNull][53], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][55]

§

#### fn [encode][51]( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][52]<'q>, ) -> [Result][31]<[IsNull][53], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

where Self: [Sized][54],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][56](&self) -> [Option][57]<<DB as [Database][3]>::[TypeInfo][58]>

§

#### fn [size_hint][59](&self) -> [usize][60]

§

### impl<'q> [Encode][50]<'q, [Any][4]> for [i16][47]

§

#### fn [encode_by_ref][55]( &self, buf: &mut <[Any][4] as [Database][3]>::[ArgumentBuffer][52]<'q>, ) -> [Result][31]<[IsNull][53], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][55]

§

#### fn [encode][51]( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][52]<'q>, ) -> [Result][31]<[IsNull][53], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

where Self: [Sized][54],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][56](&self) -> [Option][57]<<DB as [Database][3]>::[TypeInfo][58]>

§

#### fn [size_hint][59](&self) -> [usize][60]

§

### impl<'q> [Encode][50]<'q, [Any][4]> for [i32][48]

§

#### fn [encode_by_ref][55]( &self, buf: &mut <[Any][4] as [Database][3]>::[ArgumentBuffer][52]<'q>, ) -> [Result][31]<[IsNull][53], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][55]

§

#### fn [encode][51]( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][52]<'q>, ) -> [Result][31]<[IsNull][53], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

where Self: [Sized][54],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][56](&self) -> [Option][57]<<DB as [Database][3]>::[TypeInfo][58]>

§

#### fn [size_hint][59](&self) -> [usize][60]

§

### impl<'q> [Encode][50]<'q, [Any][4]> for [i64][49]

§

#### fn [encode_by_ref][55]( &self, buf: &mut <[Any][4] as [Database][3]>::[ArgumentBuffer][52]<'q>, ) -> [Result][31]<[IsNull][53], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][55]

§

#### fn [encode][51]( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][52]<'q>, ) -> [Result][31]<[IsNull][53], [Box][37]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

where Self: [Sized][54],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][56](&self) -> [Option][57]<<DB as [Database][3]>::[TypeInfo][58]>

§

#### fn [size_hint][59](&self) -> [usize][60]

§

### impl [MigrateDatabase][62] for [Any][4]

§

#### fn [create_database][63]( url: &[str][6], ) -> [Pin][64]<[Box][37]<dyn [Future][65]<Output = [Result][31]<[()][32], [Error][66]>> \+ [Send][39] \+ '_>>

§

#### fn [database_exists][67]( url: &[str][6], ) -> [Pin][64]<[Box][37]<dyn [Future][65]<Output = [Result][31]<[bool][44], [Error][66]>> \+ [Send][39] \+ '_>>

§

#### fn [drop_database][68]( url: &[str][6], ) -> [Pin][64]<[Box][37]<dyn [Future][65]<Output = [Result][31]<[()][32], [Error][66]>> \+ [Send][39] \+ '_>>

§

#### fn [force_drop_database][69]( url: &[str][6], ) -> [Pin][64]<[Box][37]<dyn [Future][65]<Output = [Result][31]<[()][32], [Error][66]>> \+ [Send][39] \+ '_>>

§

### impl [Type][61]<[Any][4]> for [[u8][41]]

§

#### fn [type_info][70]() -> [AnyTypeInfo][18]

Returns the canonical SQL type for this Rust type. [Read more][70]

§

#### fn [compatible][71](ty: &<DB as [Database][3]>::[TypeInfo][58]) -> [bool][44]

Determines if this Rust type is compatible with the given SQL type. [Read more][71]

§

### impl [Type][61]<[Any][4]> for [String][42]

§

#### fn [type_info][70]() -> [AnyTypeInfo][18]

Returns the canonical SQL type for this Rust type. [Read more][70]

§

#### fn [compatible][71](ty: &<DB as [Database][3]>::[TypeInfo][58]) -> [bool][44]

Determines if this Rust type is compatible with the given SQL type. [Read more][71]

§

### impl [Type][61]<[Any][4]> for [Vec][43]<[u8][41]>

§

#### fn [type_info][70]() -> [AnyTypeInfo][18]

Returns the canonical SQL type for this Rust type. [Read more][70]

§

#### fn [compatible][71](ty: &<DB as [Database][3]>::[TypeInfo][58]) -> [bool][44]

Determines if this Rust type is compatible with the given SQL type. [Read more][71]

§

### impl [Type][61]<[Any][4]> for [bool][44]

§

#### fn [type_info][70]() -> [AnyTypeInfo][18]

Returns the canonical SQL type for this Rust type. [Read more][70]

§

#### fn [compatible][71](ty: &<DB as [Database][3]>::[TypeInfo][58]) -> [bool][44]

Determines if this Rust type is compatible with the given SQL type. [Read more][71]

§

### impl [Type][61]<[Any][4]> for [f32][45]

§

#### fn [type_info][70]() -> [AnyTypeInfo][18]

Returns the canonical SQL type for this Rust type. [Read more][70]

§

#### fn [compatible][71](ty: &<DB as [Database][3]>::[TypeInfo][58]) -> [bool][44]

Determines if this Rust type is compatible with the given SQL type. [Read more][71]

§

### impl [Type][61]<[Any][4]> for [f64][46]

§

#### fn [type_info][70]() -> [AnyTypeInfo][18]

Returns the canonical SQL type for this Rust type. [Read more][70]

§

#### fn [compatible][71](ty: &<DB as [Database][3]>::[TypeInfo][58]) -> [bool][44]

Determines if this Rust type is compatible with the given SQL type. [Read more][71]

§

### impl [Type][61]<[Any][4]> for [i16][47]

§

#### fn [type_info][70]() -> [AnyTypeInfo][18]

Returns the canonical SQL type for this Rust type. [Read more][70]

§

#### fn [compatible][71](ty: &[AnyTypeInfo][18]) -> [bool][44]

Determines if this Rust type is compatible with the given SQL type. [Read more][71]

§

### impl [Type][61]<[Any][4]> for [i32][48]

§

#### fn [type_info][70]() -> [AnyTypeInfo][18]

Returns the canonical SQL type for this Rust type. [Read more][70]

§

#### fn [compatible][71](ty: &[AnyTypeInfo][18]) -> [bool][44]

Determines if this Rust type is compatible with the given SQL type. [Read more][71]

§

### impl [Type][61]<[Any][4]> for [i64][49]

§

#### fn [type_info][70]() -> [AnyTypeInfo][18]

Returns the canonical SQL type for this Rust type. [Read more][70]

§

#### fn [compatible][71](ty: &[AnyTypeInfo][18]) -> [bool][44]

Determines if this Rust type is compatible with the given SQL type. [Read more][71]

§

### impl [Type][61]<[Any][4]> for [str][6]

§

#### fn [type_info][70]() -> [AnyTypeInfo][18]

Returns the canonical SQL type for this Rust type. [Read more][70]

§

#### fn [compatible][71](ty: &<DB as [Database][3]>::[TypeInfo][58]) -> [bool][44]

Determines if this Rust type is compatible with the given SQL type. [Read more][71]

§

### impl [HasStatementCache][72] for [Any][4]

## Auto Trait Implementations§

§

### impl [Freeze][73] for [Any][4]

§

### impl [RefUnwindSafe][74] for [Any][4]

§

### impl [Send][39] for [Any][4]

§

### impl [Sync][40] for [Any][4]

§

### impl [Unpin][75] for [Any][4]

§

### impl [UnwindSafe][76] for [Any][4]

## Blanket Implementations§

[Source][77]§

### impl<T> [Any][78] for T

where T: 'static + ?[Sized][54],

[Source][79]§

#### fn [type_id][80](&self) -> [TypeId][81]

Gets the `TypeId` of `self`. [Read more][80]

[Source][82]§

### impl<T> [Borrow][83]<T> for T

where T: ?[Sized][54],

[Source][84]§

#### fn [borrow][85](&self) -> [&T][86]

Immutably borrows from an owned value. [Read more][85]

[Source][87]§

### impl<T> [BorrowMut][88]<T> for T

where T: ?[Sized][54],

[Source][89]§

#### fn [borrow_mut][90](&mut self) -> [&mut T][86]

Mutably borrows from an owned value. [Read more][90]

[Source][91]§

### impl<T> [From][92]<T> for T

[Source][93]§

#### fn [from][94](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][95] [`Span`][96], returning an `Instrumented` wrapper. Read more

[Source][97]§

### impl<T, U> [Into][98]<U> for T

where U: [From][92]<T>,

[Source][99]§

#### fn [into][100](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][92]<T> for U` chooses to do.

[Source][101]§

### impl<T> [IntoEither][102] for T

[Source][103]§

#### fn [into_either][104](self, into_left: [bool][44]) -> [Either][105]<Self, Self> ⓘ

Converts `self` into a [`Left`][106] variant of [`Either<Self, Self>`][105] if `into_left` is `true`. Converts `self` into a [`Right`][107] variant of [`Either<Self, Self>`][105] otherwise. [Read more][104]

[Source][108]§

#### fn [into_either_with][109]<F>(self, into_left: F) -> [Either][105]<Self, Self> ⓘ

where F: [FnOnce][110](&Self) -> [bool][44],

Converts `self` into a [`Left`][106] variant of [`Either<Self, Self>`][105] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][107] variant of [`Either<Self, Self>`][105] otherwise. [Read more][109]

[Source][111]§

### impl<T> [Same][112] for T

[Source][113]§

#### type [Output][114] = T

Should always be `Self`

[Source][115]§

### impl<T, U> [TryFrom][116]<U> for T

where U: [Into][98]<T>,

[Source][117]§

#### type [Error][118] = [Infallible][119]

The type returned in the event of a conversion error.

[Source][120]§

#### fn [try_from][121](value: U) -> [Result][31]<T, <T as [TryFrom][116]<U>>::[Error][122]>

Performs the conversion.

[Source][123]§

### impl<T, U> [TryInto][124]<U> for T

where U: [TryFrom][116]<T>,

[Source][125]§

#### type [Error][126] = <U as [TryFrom][116]<T>>::[Error][122]

The type returned in the event of a conversion error.

[Source][127]§

#### fn [try_into][128](self) -> [Result][31]<U, <U as [TryFrom][116]<T>>::[Error][122]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][98]<Dispatch>,

Attaches the provided [`Subscriber`][129] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][130] [`Subscriber`][129] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: trait.Database.html (trait sqlx::Database)
   [4]: struct.Any.html (struct sqlx::Any)
   [5]: trait.Database.html#associatedconstant.NAME
   [6]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [7]: trait.Database.html#associatedconstant.URL_SCHEMES
   [8]: trait.Database.html#associatedtype.Connection
   [9]: struct.AnyConnection.html (struct sqlx::AnyConnection)
   [10]: trait.Database.html#associatedtype.TransactionManager
   [11]: any/struct.AnyTransactionManager.html (struct sqlx::any::AnyTransactionManager)
   [12]: trait.Database.html#associatedtype.Row
   [13]: any/struct.AnyRow.html (struct sqlx::any::AnyRow)
   [14]: trait.Database.html#associatedtype.QueryResult
   [15]: any/struct.AnyQueryResult.html (struct sqlx::any::AnyQueryResult)
   [16]: trait.Database.html#associatedtype.Column
   [17]: trait.Database.html#associatedtype.TypeInfo
   [18]: any/struct.AnyTypeInfo.html (struct sqlx::any::AnyTypeInfo)
   [19]: trait.Database.html#associatedtype.Value
   [20]: any/struct.AnyValue.html (struct sqlx::any::AnyValue)
   [21]: trait.Database.html#associatedtype.ValueRef
   [22]: any/struct.AnyValueRef.html (struct sqlx::any::AnyValueRef)
   [23]: trait.Database.html#associatedtype.Arguments
   [24]: any/struct.AnyArguments.html (struct sqlx::any::AnyArguments)
   [25]: trait.Database.html#associatedtype.ArgumentBuffer
   [26]: trait.Database.html#associatedtype.Statement
   [27]: any/struct.AnyStatement.html (struct sqlx::any::AnyStatement)
   [28]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [29]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [30]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [31]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [32]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [33]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [34]: trait.Decode.html (trait sqlx::Decode)
   [35]: trait.Decode.html#tymethod.decode
   [36]: trait.Database.html#associatedtype.ValueRef (type sqlx::Database::ValueRef)
   [37]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [38]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [39]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [40]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [41]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [42]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [43]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [44]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [45]: https://doc.rust-lang.org/1.94.1/std/primitive.f32.html
   [46]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html
   [47]: https://doc.rust-lang.org/1.94.1/std/primitive.i16.html
   [48]: https://doc.rust-lang.org/1.94.1/std/primitive.i32.html
   [49]: https://doc.rust-lang.org/1.94.1/std/primitive.i64.html
   [50]: trait.Encode.html (trait sqlx::Encode)
   [51]: trait.Encode.html#method.encode
   [52]: trait.Database.html#associatedtype.ArgumentBuffer (type sqlx::Database::ArgumentBuffer)
   [53]: encode/enum.IsNull.html (enum sqlx::encode::IsNull)
   [54]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [55]: trait.Encode.html#tymethod.encode_by_ref
   [56]: trait.Encode.html#method.produces
   [57]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [58]: trait.Database.html#associatedtype.TypeInfo (type sqlx::Database::TypeInfo)
   [59]: trait.Encode.html#method.size_hint
   [60]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [61]: trait.Type.html (trait sqlx::Type)
   [62]: migrate/trait.MigrateDatabase.html (trait sqlx::migrate::MigrateDatabase)
   [63]: migrate/trait.MigrateDatabase.html#tymethod.create_database
   [64]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [65]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [66]: enum.Error.html (enum sqlx::Error)
   [67]: migrate/trait.MigrateDatabase.html#tymethod.database_exists
   [68]: migrate/trait.MigrateDatabase.html#tymethod.drop_database
   [69]: migrate/trait.MigrateDatabase.html#method.force_drop_database
   [70]: trait.Type.html#tymethod.type_info
   [71]: trait.Type.html#method.compatible
   [72]: database/trait.HasStatementCache.html (trait sqlx::database::HasStatementCache)
   [73]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [74]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [75]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [76]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [77]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [78]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [79]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [80]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [81]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [82]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [83]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [84]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [85]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [86]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [87]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [88]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [89]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [90]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [91]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [92]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [93]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [94]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [95]: super::Span::current()
   [96]: crate::Span
   [97]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [98]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [99]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [100]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [101]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [102]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [103]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [104]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [105]: enum.Either.html (enum sqlx::Either)
   [106]: enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [107]: enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [108]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [109]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [110]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [111]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [112]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [113]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [114]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [115]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [116]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [117]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [118]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [119]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [120]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [121]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [122]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [123]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [124]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [125]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [126]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [127]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [128]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [129]: super::Subscriber
   [130]: dispatcher#setting-the-default-subscriber

