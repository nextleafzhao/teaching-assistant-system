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



## [In sqlx::any][2]

[sqlx][3]::[any][2]

# Struct Any Copy item path
[code]
    pub struct Any;
[/code]

Expand description

Opaque database driver. Capable of being used in place of any SQLx database driver. The actual driver used will be selected at runtime, from the connection url.

## Trait Implementations§

§

### impl [Database][4] for [Any][5]

§

#### const [NAME][6]: &'static [str][7] = "Any"

The display name for this database driver.

§

#### const [URL_SCHEMES][8]: &'static [&'static [str][7]]

The schemes for database URLs that should match this driver.

§

#### type [Connection][9] = [AnyConnection][10]

The concrete `Connection` implementation for this database.

§

#### type [TransactionManager][11] = [AnyTransactionManager][12]

The concrete `TransactionManager` implementation for this database.

§

#### type [Row][13] = [AnyRow][14]

The concrete `Row` implementation for this database.

§

#### type [QueryResult][15] = [AnyQueryResult][16]

The concrete `QueryResult` implementation for this database.

§

#### type [Column][17] = AnyColumn

The concrete `Column` implementation for this database.

§

#### type [TypeInfo][18] = [AnyTypeInfo][19]

The concrete `TypeInfo` implementation for this database.

§

#### type [Value][20] = [AnyValue][21]

The concrete type used to hold an owned copy of the not-yet-decoded value that was received from the database.

§

#### type [ValueRef][22]<'r> = [AnyValueRef][23]<'r>

The concrete type used to hold a reference to the not-yet-decoded value that has just been received from the database.

§

#### type [Arguments][24]<'q> = [AnyArguments][25]<'q>

The concrete `Arguments` implementation for this database.

§

#### type [ArgumentBuffer][26]<'q> = AnyArgumentBuffer<'q>

The concrete type used as a buffer for arguments while encoding.

§

#### type [Statement][27]<'q> = [AnyStatement][28]<'q>

The concrete `Statement` implementation for this database.

§

### impl [Debug][29] for [Any][5]

§

#### fn [fmt][30](&self, f: &mut [Formatter][31]<'_>) -> [Result][32]<[()][33], [Error][34]>

Formats the value using the given formatter. [Read more][30]

§

### impl<'a> [Decode][35]<'a, [Any][5]> for &'a [str][7]

§

#### fn [decode][36]( value: <[Any][5] as [Database][4]>::[ValueRef][37]<'a>, ) -> [Result][32]<&'a [str][7], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][35]<'r, [Any][5]> for &'r [[u8][42]]

§

#### fn [decode][36]( value: <[Any][5] as [Database][4]>::[ValueRef][37]<'r>, ) -> [Result][32]<&'r [[u8][42]], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][35]<'r, [Any][5]> for [String][43]

§

#### fn [decode][36]( value: <[Any][5] as [Database][4]>::[ValueRef][37]<'r>, ) -> [Result][32]<[String][43], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][35]<'r, [Any][5]> for [Vec][44]<[u8][42]>

§

#### fn [decode][36]( value: <[Any][5] as [Database][4]>::[ValueRef][37]<'r>, ) -> [Result][32]<[Vec][44]<[u8][42]>, [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][35]<'r, [Any][5]> for [bool][45]

§

#### fn [decode][36]( value: <[Any][5] as [Database][4]>::[ValueRef][37]<'r>, ) -> [Result][32]<[bool][45], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][35]<'r, [Any][5]> for [f32][46]

§

#### fn [decode][36](value: [AnyValueRef][23]<'r>) -> [Result][32]<[f32][46], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][35]<'r, [Any][5]> for [f64][47]

§

#### fn [decode][36]( value: <[Any][5] as [Database][4]>::[ValueRef][37]<'r>, ) -> [Result][32]<[f64][47], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][35]<'r, [Any][5]> for [i16][48]

§

#### fn [decode][36]( value: <[Any][5] as [Database][4]>::[ValueRef][37]<'r>, ) -> [Result][32]<[i16][48], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][35]<'r, [Any][5]> for [i32][49]

§

#### fn [decode][36]( value: <[Any][5] as [Database][4]>::[ValueRef][37]<'r>, ) -> [Result][32]<[i32][49], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'r> [Decode][35]<'r, [Any][5]> for [i64][50]

§

#### fn [decode][36]( value: <[Any][5] as [Database][4]>::[ValueRef][37]<'r>, ) -> [Result][32]<[i64][50], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

Decode a new value of this type using a raw value from the database.

§

### impl<'a> [Encode][51]<'a, [Any][5]> for &'a [str][7]

§

#### fn [encode][52]( self, buf: &mut <[Any][5] as [Database][4]>::[ArgumentBuffer][53]<'a>, ) -> [Result][32]<[IsNull][54], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

where &'a [str][7]: [Sized][55],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [encode_by_ref][56]( &self, buf: &mut <[Any][5] as [Database][4]>::[ArgumentBuffer][53]<'a>, ) -> [Result][32]<[IsNull][54], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][56]

§

#### fn [produces][57](&self) -> [Option][58]<<DB as [Database][4]>::[TypeInfo][59]>

§

#### fn [size_hint][60](&self) -> [usize][61]

§

### impl<'q> [Encode][51]<'q, [Any][5]> for &'q [[u8][42]]

§

#### fn [encode_by_ref][56]( &self, buf: &mut <[Any][5] as [Database][4]>::[ArgumentBuffer][53]<'q>, ) -> [Result][32]<[IsNull][54], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][56]

§

#### fn [encode][52]( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][53]<'q>, ) -> [Result][32]<[IsNull][54], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

where Self: [Sized][55],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][57](&self) -> [Option][58]<<DB as [Database][4]>::[TypeInfo][59]>

§

#### fn [size_hint][60](&self) -> [usize][61]

§

### impl<'q, T> [Encode][51]<'q, [Any][5]> for [Option][58]<T>

where T: [Encode][51]<'q, [Any][5]> \+ 'q + [Type][62]<[Any][5]>,

§

#### fn [encode_by_ref][56]( &self, buf: &mut AnyArgumentBuffer<'q>, ) -> [Result][32]<[IsNull][54], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][56]

§

#### fn [encode][52]( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][53]<'q>, ) -> [Result][32]<[IsNull][54], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

where Self: [Sized][55],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][57](&self) -> [Option][58]<<DB as [Database][4]>::[TypeInfo][59]>

§

#### fn [size_hint][60](&self) -> [usize][61]

§

### impl<'q> [Encode][51]<'q, [Any][5]> for [String][43]

§

#### fn [encode_by_ref][56]( &self, buf: &mut <[Any][5] as [Database][4]>::[ArgumentBuffer][53]<'q>, ) -> [Result][32]<[IsNull][54], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][56]

§

#### fn [encode][52]( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][53]<'q>, ) -> [Result][32]<[IsNull][54], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

where Self: [Sized][55],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][57](&self) -> [Option][58]<<DB as [Database][4]>::[TypeInfo][59]>

§

#### fn [size_hint][60](&self) -> [usize][61]

§

### impl<'q> [Encode][51]<'q, [Any][5]> for [Vec][44]<[u8][42]>

§

#### fn [encode_by_ref][56]( &self, buf: &mut <[Any][5] as [Database][4]>::[ArgumentBuffer][53]<'q>, ) -> [Result][32]<[IsNull][54], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][56]

§

#### fn [encode][52]( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][53]<'q>, ) -> [Result][32]<[IsNull][54], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

where Self: [Sized][55],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][57](&self) -> [Option][58]<<DB as [Database][4]>::[TypeInfo][59]>

§

#### fn [size_hint][60](&self) -> [usize][61]

§

### impl<'q> [Encode][51]<'q, [Any][5]> for [bool][45]

§

#### fn [encode_by_ref][56]( &self, buf: &mut <[Any][5] as [Database][4]>::[ArgumentBuffer][53]<'q>, ) -> [Result][32]<[IsNull][54], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][56]

§

#### fn [encode][52]( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][53]<'q>, ) -> [Result][32]<[IsNull][54], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

where Self: [Sized][55],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][57](&self) -> [Option][58]<<DB as [Database][4]>::[TypeInfo][59]>

§

#### fn [size_hint][60](&self) -> [usize][61]

§

### impl<'q> [Encode][51]<'q, [Any][5]> for [f32][46]

§

#### fn [encode_by_ref][56]( &self, buf: &mut AnyArgumentBuffer<'q>, ) -> [Result][32]<[IsNull][54], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][56]

§

#### fn [encode][52]( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][53]<'q>, ) -> [Result][32]<[IsNull][54], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

where Self: [Sized][55],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][57](&self) -> [Option][58]<<DB as [Database][4]>::[TypeInfo][59]>

§

#### fn [size_hint][60](&self) -> [usize][61]

§

### impl<'q> [Encode][51]<'q, [Any][5]> for [f64][47]

§

#### fn [encode_by_ref][56]( &self, buf: &mut <[Any][5] as [Database][4]>::[ArgumentBuffer][53]<'q>, ) -> [Result][32]<[IsNull][54], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][56]

§

#### fn [encode][52]( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][53]<'q>, ) -> [Result][32]<[IsNull][54], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

where Self: [Sized][55],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][57](&self) -> [Option][58]<<DB as [Database][4]>::[TypeInfo][59]>

§

#### fn [size_hint][60](&self) -> [usize][61]

§

### impl<'q> [Encode][51]<'q, [Any][5]> for [i16][48]

§

#### fn [encode_by_ref][56]( &self, buf: &mut <[Any][5] as [Database][4]>::[ArgumentBuffer][53]<'q>, ) -> [Result][32]<[IsNull][54], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][56]

§

#### fn [encode][52]( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][53]<'q>, ) -> [Result][32]<[IsNull][54], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

where Self: [Sized][55],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][57](&self) -> [Option][58]<<DB as [Database][4]>::[TypeInfo][59]>

§

#### fn [size_hint][60](&self) -> [usize][61]

§

### impl<'q> [Encode][51]<'q, [Any][5]> for [i32][49]

§

#### fn [encode_by_ref][56]( &self, buf: &mut <[Any][5] as [Database][4]>::[ArgumentBuffer][53]<'q>, ) -> [Result][32]<[IsNull][54], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][56]

§

#### fn [encode][52]( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][53]<'q>, ) -> [Result][32]<[IsNull][54], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

where Self: [Sized][55],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][57](&self) -> [Option][58]<<DB as [Database][4]>::[TypeInfo][59]>

§

#### fn [size_hint][60](&self) -> [usize][61]

§

### impl<'q> [Encode][51]<'q, [Any][5]> for [i64][50]

§

#### fn [encode_by_ref][56]( &self, buf: &mut <[Any][5] as [Database][4]>::[ArgumentBuffer][53]<'q>, ) -> [Result][32]<[IsNull][54], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][56]

§

#### fn [encode][52]( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][53]<'q>, ) -> [Result][32]<[IsNull][54], [Box][38]<dyn [Error][39] \+ [Send][40] \+ [Sync][41]>>

where Self: [Sized][55],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][57](&self) -> [Option][58]<<DB as [Database][4]>::[TypeInfo][59]>

§

#### fn [size_hint][60](&self) -> [usize][61]

§

### impl [MigrateDatabase][63] for [Any][5]

§

#### fn [create_database][64]( url: &[str][7], ) -> [Pin][65]<[Box][38]<dyn [Future][66]<Output = [Result][32]<[()][33], [Error][67]>> \+ [Send][40] \+ '_>>

§

#### fn [database_exists][68]( url: &[str][7], ) -> [Pin][65]<[Box][38]<dyn [Future][66]<Output = [Result][32]<[bool][45], [Error][67]>> \+ [Send][40] \+ '_>>

§

#### fn [drop_database][69]( url: &[str][7], ) -> [Pin][65]<[Box][38]<dyn [Future][66]<Output = [Result][32]<[()][33], [Error][67]>> \+ [Send][40] \+ '_>>

§

#### fn [force_drop_database][70]( url: &[str][7], ) -> [Pin][65]<[Box][38]<dyn [Future][66]<Output = [Result][32]<[()][33], [Error][67]>> \+ [Send][40] \+ '_>>

§

### impl [Type][62]<[Any][5]> for [[u8][42]]

§

#### fn [type_info][71]() -> [AnyTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][71]

§

#### fn [compatible][72](ty: &<DB as [Database][4]>::[TypeInfo][59]) -> [bool][45]

Determines if this Rust type is compatible with the given SQL type. [Read more][72]

§

### impl [Type][62]<[Any][5]> for [String][43]

§

#### fn [type_info][71]() -> [AnyTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][71]

§

#### fn [compatible][72](ty: &<DB as [Database][4]>::[TypeInfo][59]) -> [bool][45]

Determines if this Rust type is compatible with the given SQL type. [Read more][72]

§

### impl [Type][62]<[Any][5]> for [Vec][44]<[u8][42]>

§

#### fn [type_info][71]() -> [AnyTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][71]

§

#### fn [compatible][72](ty: &<DB as [Database][4]>::[TypeInfo][59]) -> [bool][45]

Determines if this Rust type is compatible with the given SQL type. [Read more][72]

§

### impl [Type][62]<[Any][5]> for [bool][45]

§

#### fn [type_info][71]() -> [AnyTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][71]

§

#### fn [compatible][72](ty: &<DB as [Database][4]>::[TypeInfo][59]) -> [bool][45]

Determines if this Rust type is compatible with the given SQL type. [Read more][72]

§

### impl [Type][62]<[Any][5]> for [f32][46]

§

#### fn [type_info][71]() -> [AnyTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][71]

§

#### fn [compatible][72](ty: &<DB as [Database][4]>::[TypeInfo][59]) -> [bool][45]

Determines if this Rust type is compatible with the given SQL type. [Read more][72]

§

### impl [Type][62]<[Any][5]> for [f64][47]

§

#### fn [type_info][71]() -> [AnyTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][71]

§

#### fn [compatible][72](ty: &<DB as [Database][4]>::[TypeInfo][59]) -> [bool][45]

Determines if this Rust type is compatible with the given SQL type. [Read more][72]

§

### impl [Type][62]<[Any][5]> for [i16][48]

§

#### fn [type_info][71]() -> [AnyTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][71]

§

#### fn [compatible][72](ty: &[AnyTypeInfo][19]) -> [bool][45]

Determines if this Rust type is compatible with the given SQL type. [Read more][72]

§

### impl [Type][62]<[Any][5]> for [i32][49]

§

#### fn [type_info][71]() -> [AnyTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][71]

§

#### fn [compatible][72](ty: &[AnyTypeInfo][19]) -> [bool][45]

Determines if this Rust type is compatible with the given SQL type. [Read more][72]

§

### impl [Type][62]<[Any][5]> for [i64][50]

§

#### fn [type_info][71]() -> [AnyTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][71]

§

#### fn [compatible][72](ty: &[AnyTypeInfo][19]) -> [bool][45]

Determines if this Rust type is compatible with the given SQL type. [Read more][72]

§

### impl [Type][62]<[Any][5]> for [str][7]

§

#### fn [type_info][71]() -> [AnyTypeInfo][19]

Returns the canonical SQL type for this Rust type. [Read more][71]

§

#### fn [compatible][72](ty: &<DB as [Database][4]>::[TypeInfo][59]) -> [bool][45]

Determines if this Rust type is compatible with the given SQL type. [Read more][72]

§

### impl [HasStatementCache][73] for [Any][5]

## Auto Trait Implementations§

§

### impl [Freeze][74] for [Any][5]

§

### impl [RefUnwindSafe][75] for [Any][5]

§

### impl [Send][40] for [Any][5]

§

### impl [Sync][41] for [Any][5]

§

### impl [Unpin][76] for [Any][5]

§

### impl [UnwindSafe][77] for [Any][5]

## Blanket Implementations§

[Source][78]§

### impl<T> [Any][79] for T

where T: 'static + ?[Sized][55],

[Source][80]§

#### fn [type_id][81](&self) -> [TypeId][82]

Gets the `TypeId` of `self`. [Read more][81]

[Source][83]§

### impl<T> [Borrow][84]<T> for T

where T: ?[Sized][55],

[Source][85]§

#### fn [borrow][86](&self) -> [&T][87]

Immutably borrows from an owned value. [Read more][86]

[Source][88]§

### impl<T> [BorrowMut][89]<T> for T

where T: ?[Sized][55],

[Source][90]§

#### fn [borrow_mut][91](&mut self) -> [&mut T][87]

Mutably borrows from an owned value. [Read more][91]

[Source][92]§

### impl<T> [From][93]<T> for T

[Source][94]§

#### fn [from][95](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][96] [`Span`][97], returning an `Instrumented` wrapper. Read more

[Source][98]§

### impl<T, U> [Into][99]<U> for T

where U: [From][93]<T>,

[Source][100]§

#### fn [into][101](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][93]<T> for U` chooses to do.

[Source][102]§

### impl<T> [IntoEither][103] for T

[Source][104]§

#### fn [into_either][105](self, into_left: [bool][45]) -> [Either][106]<Self, Self> ⓘ

Converts `self` into a [`Left`][107] variant of [`Either<Self, Self>`][106] if `into_left` is `true`. Converts `self` into a [`Right`][108] variant of [`Either<Self, Self>`][106] otherwise. [Read more][105]

[Source][109]§

#### fn [into_either_with][110]<F>(self, into_left: F) -> [Either][106]<Self, Self> ⓘ

where F: [FnOnce][111](&Self) -> [bool][45],

Converts `self` into a [`Left`][107] variant of [`Either<Self, Self>`][106] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][108] variant of [`Either<Self, Self>`][106] otherwise. [Read more][110]

[Source][112]§

### impl<T> [Same][113] for T

[Source][114]§

#### type [Output][115] = T

Should always be `Self`

[Source][116]§

### impl<T, U> [TryFrom][117]<U> for T

where U: [Into][99]<T>,

[Source][118]§

#### type [Error][119] = [Infallible][120]

The type returned in the event of a conversion error.

[Source][121]§

#### fn [try_from][122](value: U) -> [Result][32]<T, <T as [TryFrom][117]<U>>::[Error][123]>

Performs the conversion.

[Source][124]§

### impl<T, U> [TryInto][125]<U> for T

where U: [TryFrom][117]<T>,

[Source][126]§

#### type [Error][127] = <U as [TryFrom][117]<T>>::[Error][123]

The type returned in the event of a conversion error.

[Source][128]§

#### fn [try_into][129](self) -> [Result][32]<U, <U as [TryFrom][117]<T>>::[Error][123]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][99]<Dispatch>,

Attaches the provided [`Subscriber`][130] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][131] [`Subscriber`][130] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../trait.Database.html (trait sqlx::Database)
   [5]: ../struct.Any.html (struct sqlx::Any)
   [6]: ../trait.Database.html#associatedconstant.NAME
   [7]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [8]: ../trait.Database.html#associatedconstant.URL_SCHEMES
   [9]: ../trait.Database.html#associatedtype.Connection
   [10]: ../struct.AnyConnection.html (struct sqlx::AnyConnection)
   [11]: ../trait.Database.html#associatedtype.TransactionManager
   [12]: struct.AnyTransactionManager.html (struct sqlx::any::AnyTransactionManager)
   [13]: ../trait.Database.html#associatedtype.Row
   [14]: struct.AnyRow.html (struct sqlx::any::AnyRow)
   [15]: ../trait.Database.html#associatedtype.QueryResult
   [16]: struct.AnyQueryResult.html (struct sqlx::any::AnyQueryResult)
   [17]: ../trait.Database.html#associatedtype.Column
   [18]: ../trait.Database.html#associatedtype.TypeInfo
   [19]: struct.AnyTypeInfo.html (struct sqlx::any::AnyTypeInfo)
   [20]: ../trait.Database.html#associatedtype.Value
   [21]: struct.AnyValue.html (struct sqlx::any::AnyValue)
   [22]: ../trait.Database.html#associatedtype.ValueRef
   [23]: struct.AnyValueRef.html (struct sqlx::any::AnyValueRef)
   [24]: ../trait.Database.html#associatedtype.Arguments
   [25]: struct.AnyArguments.html (struct sqlx::any::AnyArguments)
   [26]: ../trait.Database.html#associatedtype.ArgumentBuffer
   [27]: ../trait.Database.html#associatedtype.Statement
   [28]: struct.AnyStatement.html (struct sqlx::any::AnyStatement)
   [29]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [30]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [31]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [32]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [33]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [34]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [35]: ../trait.Decode.html (trait sqlx::Decode)
   [36]: ../trait.Decode.html#tymethod.decode
   [37]: ../trait.Database.html#associatedtype.ValueRef (type sqlx::Database::ValueRef)
   [38]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [39]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [40]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [41]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [42]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [43]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [44]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [45]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [46]: https://doc.rust-lang.org/1.94.1/std/primitive.f32.html
   [47]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html
   [48]: https://doc.rust-lang.org/1.94.1/std/primitive.i16.html
   [49]: https://doc.rust-lang.org/1.94.1/std/primitive.i32.html
   [50]: https://doc.rust-lang.org/1.94.1/std/primitive.i64.html
   [51]: ../trait.Encode.html (trait sqlx::Encode)
   [52]: ../trait.Encode.html#method.encode
   [53]: ../trait.Database.html#associatedtype.ArgumentBuffer (type sqlx::Database::ArgumentBuffer)
   [54]: ../encode/enum.IsNull.html (enum sqlx::encode::IsNull)
   [55]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [56]: ../trait.Encode.html#tymethod.encode_by_ref
   [57]: ../trait.Encode.html#method.produces
   [58]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [59]: ../trait.Database.html#associatedtype.TypeInfo (type sqlx::Database::TypeInfo)
   [60]: ../trait.Encode.html#method.size_hint
   [61]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [62]: ../trait.Type.html (trait sqlx::Type)
   [63]: ../migrate/trait.MigrateDatabase.html (trait sqlx::migrate::MigrateDatabase)
   [64]: ../migrate/trait.MigrateDatabase.html#tymethod.create_database
   [65]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [66]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [67]: ../enum.Error.html (enum sqlx::Error)
   [68]: ../migrate/trait.MigrateDatabase.html#tymethod.database_exists
   [69]: ../migrate/trait.MigrateDatabase.html#tymethod.drop_database
   [70]: ../migrate/trait.MigrateDatabase.html#method.force_drop_database
   [71]: ../trait.Type.html#tymethod.type_info
   [72]: ../trait.Type.html#method.compatible
   [73]: ../database/trait.HasStatementCache.html (trait sqlx::database::HasStatementCache)
   [74]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [75]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [76]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [77]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [78]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [79]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [80]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [81]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [82]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [83]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [84]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [85]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [86]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [87]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [88]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [89]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [90]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [91]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [92]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [93]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [94]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [95]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [96]: super::Span::current()
   [97]: crate::Span
   [98]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [99]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [100]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [101]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [102]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [103]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [104]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [105]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [106]: ../enum.Either.html (enum sqlx::Either)
   [107]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [108]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [109]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [110]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [111]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [112]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [113]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [114]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [115]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [116]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [117]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [118]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [119]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [120]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [121]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [122]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [123]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [124]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [125]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [126]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [127]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [128]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [129]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [130]: super::Subscriber
   [131]: dispatcher#setting-the-default-subscriber

