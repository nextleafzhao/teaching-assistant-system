## JsonRawValue

## [sqlx][1]0.8.6

## JsonRawValue

### Sections

  * Note
  * Example
  * Ownership



### Associated Constants

  * FALSE
  * NULL
  * TRUE



### Methods

  * from_string
  * get



### Trait Implementations

  * Clone
  * Debug
  * Decode<'r, DB>
  * Default
  * Deserialize<'de>
  * Deserialize<'de>
  * Deserializer<'de>
  * Display
  * IntoDeserializer<'de, Error>
  * Serialize
  * ToOwned
  * Type<DB>



### Auto Trait Implementations

  * !Sized
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
  * ToString



## [In sqlx::types][2]

[sqlx][3]::[types][2]

# Struct JsonRawValue Copy item path

[Source][4]
[code] 
    pub struct JsonRawValue { /* private fields */ }
[/code]

Expand description

Reference to a range of bytes encompassing a single valid JSON value in the input data.

A `RawValue` can be used to defer parsing parts of a payload until later, or to avoid parsing it at all in the case that part of the payload just needs to be transferred verbatim into a different output object.

When serializing, a value of this type will retain its original formatting and will not be minified or pretty-printed.

## §Note

`RawValue` is only available if serde_json is built with the `"raw_value"` feature.
[code] 
    [dependencies]
    serde_json = { version = "1.0", features = ["raw_value"] }
[/code]

## §Example
[code] 
    use serde::{Deserialize, Serialize};
    use serde_json::{Result, value::RawValue};
    
    #[derive(Deserialize)]
    struct Input<'a> {
        code: u32,
        #[serde(borrow)]
        payload: &'a RawValue,
    }
    
    #[derive(Serialize)]
    struct Output<'a> {
        info: (u32, &'a RawValue),
    }
    
    // Efficiently rearrange JSON input containing separate "code" and "payload"
    // keys into a single "info" key holding an array of code and payload.
    //
    // This could be done equivalently using serde_json::Value as the type for
    // payload, but &RawValue will perform better because it does not require
    // memory allocation. The correct range of bytes is borrowed from the input
    // data and pasted verbatim into the output.
    fn rearrange(input: &str) -> Result<String> {
        let input: Input = serde_json::from_str(input)?;
    
        let output = Output {
            info: (input.code, input.payload),
        };
    
        serde_json::to_string(&output)
    }
    
    fn main() -> Result<()> {
        let out = rearrange(r#" {"code": 200, "payload": {}} "#)?;
    
        assert_eq!(out, r#"{"info":[200,{}]}"#);
    
        Ok(())
    }
[/code]

## §Ownership

The typical usage of `RawValue` will be in the borrowed form:
[code] 
    #[derive(Deserialize)]
    struct SomeStruct<'a> {
        #[serde(borrow)]
        raw_value: &'a RawValue,
    }
[/code]

The borrowed form is suitable when deserializing through [`serde_json::from_str`][5] and [`serde_json::from_slice`][6] which support borrowing from the input data without memory allocation.

When deserializing through [`serde_json::from_reader`][7] you will need to use the boxed form of `RawValue` instead. This is almost as efficient but involves buffering the raw value from the I/O stream into memory.
[code] 
    #[derive(Deserialize)]
    struct SomeStruct {
        raw_value: Box<RawValue>,
    }
[/code]

## Implementations§

[Source][8]§

### impl [RawValue][9]

[Source][10]

#### pub const NULL: &'static [RawValue][9]

A constant RawValue with the JSON value `null`.

[Source][11]

#### pub const TRUE: &'static [RawValue][9]

A constant RawValue with the JSON value `true`.

[Source][12]

#### pub const FALSE: &'static [RawValue][9]

A constant RawValue with the JSON value `false`.

[Source][13]

#### pub fn from_string(json: [String][14]) -> [Result][15]<[Box][16]<[RawValue][9]>, [Error][17]>

Convert an owned `String` of JSON data to an owned `RawValue`.

This function is equivalent to `serde_json::from_str::<Box<RawValue>>` except that we avoid an allocation and memcpy if both of the following are true:

  * the input has no leading or trailing whitespace, and
  * the input has capacity equal to its length.



[Source][18]

#### pub fn get(&self) -> &[str][19]

Access the JSON text underlying a raw value.

##### §Example
[code] 
    use serde::Deserialize;
    use serde_json::{Result, value::RawValue};
    
    #[derive(Deserialize)]
    struct Response<'a> {
        code: u32,
        #[serde(borrow)]
        payload: &'a RawValue,
    }
    
    fn process(input: &str) -> Result<()> {
        let response: Response = serde_json::from_str(input)?;
    
        let payload = response.payload.get();
        if payload.starts_with('{') {
            // handle a payload which is a JSON map
        } else {
            // handle any other type
        }
    
        Ok(())
    }
    
    fn main() -> Result<()> {
        process(r#" {"code": 200, "payload": {}} "#)?;
        Ok(())
    }
[/code]

## Trait Implementations§

[Source][20]§

### impl [Clone][21] for [Box][16]<[RawValue][9]>

[Source][22]§

#### fn [clone][23](&self) -> [Box][16]<[RawValue][9]>

Returns a duplicate of the value. [Read more][23]

1.0.0 · [Source][24]§

#### fn [clone_from][25](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][25]

[Source][26]§

### impl [Debug][27] for [RawValue][9]

[Source][28]§

#### fn [fmt][29](&self, formatter: &mut [Formatter][30]<'_>) -> [Result][15]<[()][31], [Error][32]>

Formats the value using the given formatter. [Read more][29]

§

### impl<'r, DB> [Decode][33]<'r, DB> for &'r [RawValue][9]

where [Json][34]<&'r [RawValue][9]>: [Decode][33]<'r, DB>, DB: [Database][35],

§

#### fn [decode][36]( value: <DB as [Database][35]>::[ValueRef][37]<'r>, ) -> [Result][15]<&'r [RawValue][9], [Box][16]<dyn [Error][38] \+ [Send][39] \+ [Sync][40]>>

Decode a new value of this type using a raw value from the database.

[Source][41]§

### impl [Default][42] for [Box][16]<[RawValue][9]>

[Source][43]§

#### fn [default][44]() -> [Box][16]<[RawValue][9]>

Returns the “default value” for a type. [Read more][44]

[Source][45]§

### impl<'de, 'a> [Deserialize][46]<'de> for &'a [RawValue][9]

where 'de: 'a,

[Source][47]§

#### fn [deserialize][48]<D>( deserializer: D, ) -> [Result][15]<&'a [RawValue][9], <D as [Deserializer][49]<'de>>::[Error][50]>

where D: [Deserializer][49]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][48]

[Source][51]§

### impl<'de> [Deserialize][46]<'de> for [Box][16]<[RawValue][9]>

[Source][52]§

#### fn [deserialize][48]<D>( deserializer: D, ) -> [Result][15]<[Box][16]<[RawValue][9]>, <D as [Deserializer][49]<'de>>::[Error][50]>

where D: [Deserializer][49]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][48]

[Source][53]§

### impl<'de> [Deserializer][49]<'de> for &'de [RawValue][9]

[Source][54]§

#### type [Error][55] = [Error][17]

The error type that can be returned if some error occurs during deserialization.

[Source][56]§

#### fn [deserialize_any][57]<V>( self, visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Require the `Deserializer` to figure out how to drive the visitor based on what data type is in the input. [Read more][57]

[Source][60]§

#### fn [deserialize_bool][61]<V>( self, visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type is expecting a `bool` value.

[Source][62]§

#### fn [deserialize_i8][63]<V>( self, visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type is expecting an `i8` value.

[Source][64]§

#### fn [deserialize_i16][65]<V>( self, visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type is expecting an `i16` value.

[Source][66]§

#### fn [deserialize_i32][67]<V>( self, visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type is expecting an `i32` value.

[Source][68]§

#### fn [deserialize_i64][69]<V>( self, visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type is expecting an `i64` value.

[Source][70]§

#### fn [deserialize_i128][71]<V>( self, visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type is expecting an `i128` value. [Read more][71]

[Source][72]§

#### fn [deserialize_u8][73]<V>( self, visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type is expecting a `u8` value.

[Source][74]§

#### fn [deserialize_u16][75]<V>( self, visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type is expecting a `u16` value.

[Source][76]§

#### fn [deserialize_u32][77]<V>( self, visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type is expecting a `u32` value.

[Source][78]§

#### fn [deserialize_u64][79]<V>( self, visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type is expecting a `u64` value.

[Source][80]§

#### fn [deserialize_u128][81]<V>( self, visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type is expecting an `u128` value. [Read more][81]

[Source][82]§

#### fn [deserialize_f32][83]<V>( self, visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type is expecting a `f32` value.

[Source][84]§

#### fn [deserialize_f64][85]<V>( self, visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type is expecting a `f64` value.

[Source][86]§

#### fn [deserialize_char][87]<V>( self, visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type is expecting a `char` value.

[Source][88]§

#### fn [deserialize_str][89]<V>( self, visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type is expecting a string value and does not benefit from taking ownership of buffered data owned by the `Deserializer`. [Read more][89]

[Source][90]§

#### fn [deserialize_string][91]<V>( self, visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type is expecting a string value and would benefit from taking ownership of buffered data owned by the `Deserializer`. [Read more][91]

[Source][92]§

#### fn [deserialize_bytes][93]<V>( self, visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type is expecting a byte array and does not benefit from taking ownership of buffered data owned by the `Deserializer`. [Read more][93]

[Source][94]§

#### fn [deserialize_byte_buf][95]<V>( self, visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type is expecting a byte array and would benefit from taking ownership of buffered data owned by the `Deserializer`. [Read more][95]

[Source][96]§

#### fn [deserialize_option][97]<V>( self, visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type is expecting an optional value. [Read more][97]

[Source][98]§

#### fn [deserialize_unit][99]<V>( self, visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type is expecting a unit value.

[Source][100]§

#### fn [deserialize_unit_struct][101]<V>( self, name: &'static [str][19], visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type is expecting a unit struct with a particular name.

[Source][102]§

#### fn [deserialize_newtype_struct][103]<V>( self, name: &'static [str][19], visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type is expecting a newtype struct with a particular name.

[Source][104]§

#### fn [deserialize_seq][105]<V>( self, visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type is expecting a sequence of values.

[Source][106]§

#### fn [deserialize_tuple][107]<V>( self, len: [usize][108], visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type is expecting a sequence of values and knows how many values there are without looking at the serialized data.

[Source][109]§

#### fn [deserialize_tuple_struct][110]<V>( self, name: &'static [str][19], len: [usize][108], visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type is expecting a tuple struct with a particular name and number of fields.

[Source][111]§

#### fn [deserialize_map][112]<V>( self, visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type is expecting a map of key-value pairs.

[Source][113]§

#### fn [deserialize_struct][114]<V>( self, name: &'static [str][19], fields: &'static [&'static [str][19]], visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type is expecting a struct with a particular name and fields.

[Source][115]§

#### fn [deserialize_enum][116]<V>( self, name: &'static [str][19], variants: &'static [&'static [str][19]], visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type is expecting an enum value with a particular name and possible variants.

[Source][117]§

#### fn [deserialize_identifier][118]<V>( self, visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type is expecting the name of a struct field or the discriminant of an enum variant.

[Source][119]§

#### fn [deserialize_ignored_any][120]<V>( self, visitor: V, ) -> [Result][15]<<V as [Visitor][58]<'de>>::[Value][59], [Error][17]>

where V: [Visitor][58]<'de>,

Hint that the `Deserialize` type needs to deserialize a value whose type doesn’t matter because it is ignored. [Read more][120]

[Source][121]§

#### fn [is_human_readable][122](&self) -> [bool][123]

Determine whether `Deserialize` implementations should expect to deserialize their human-readable form. [Read more][122]

[Source][124]§

### impl [Display][125] for [RawValue][9]

[Source][126]§

#### fn [fmt][127](&self, f: &mut [Formatter][30]<'_>) -> [Result][15]<[()][31], [Error][32]>

Formats the value using the given formatter. [Read more][127]

[Source][128]§

### impl<'de> [IntoDeserializer][129]<'de, [Error][17]> for &'de [RawValue][9]

[Source][130]§

#### type [Deserializer][131] = &'de [RawValue][9]

The type of the deserializer being converted into.

[Source][132]§

#### fn [into_deserializer][133]( self, ) -> <&'de [RawValue][9] as [IntoDeserializer][129]<'de, [Error][17]>>::[Deserializer][134]

Convert this value into a deserializer.

[Source][135]§

### impl [Serialize][136] for [RawValue][9]

[Source][137]§

#### fn [serialize][138]<S>( &self, serializer: S, ) -> [Result][15]<<S as [Serializer][139]>::[Ok][140], <S as [Serializer][139]>::[Error][141]>

where S: [Serializer][139],

Serialize this value into the given Serde serializer. [Read more][138]

[Source][142]§

### impl [ToOwned][143] for [RawValue][9]

[Source][144]§

#### type [Owned][145] = [Box][16]<[RawValue][9]>

The resulting type after obtaining ownership.

[Source][146]§

#### fn [to_owned][147](&self) -> <[RawValue][9] as [ToOwned][143]>::[Owned][148]

Creates owned data from borrowed data, usually by cloning. [Read more][147]

1.63.0 · [Source][149]§

#### fn [clone_into][150](&self, target: &mut Self::[Owned][148])

Uses borrowed data to replace owned data, usually by cloning. [Read more][150]

§

### impl<DB> [Type][151]<DB> for [RawValue][9]

where [Json][34]<&'a [RawValue][9]>: for<'a> [Type][151]<DB>, DB: [Database][35],

§

#### fn [type_info][152]() -> <DB as [Database][35]>::[TypeInfo][153]

Returns the canonical SQL type for this Rust type. [Read more][152]

§

#### fn [compatible][154](ty: &<DB as [Database][35]>::[TypeInfo][153]) -> [bool][123]

Determines if this Rust type is compatible with the given SQL type. [Read more][154]

## Auto Trait Implementations§

§

### impl [Freeze][155] for [RawValue][9]

§

### impl [RefUnwindSafe][156] for [RawValue][9]

§

### impl [Send][39] for [RawValue][9]

§

### impl ![Sized][157] for [RawValue][9]

§

### impl [Sync][40] for [RawValue][9]

§

### impl [Unpin][158] for [RawValue][9]

§

### impl [UnwindSafe][159] for [RawValue][9]

## Blanket Implementations§

[Source][160]§

### impl<T> [Any][161] for T

where T: 'static + ?[Sized][157],

[Source][162]§

#### fn [type_id][163](&self) -> [TypeId][164]

Gets the `TypeId` of `self`. [Read more][163]

[Source][165]§

### impl<T> [Borrow][166]<T> for T

where T: ?[Sized][157],

[Source][167]§

#### fn [borrow][168](&self) -> [&T][169]

Immutably borrows from an owned value. [Read more][168]

[Source][170]§

### impl<T> [BorrowMut][171]<T> for T

where T: ?[Sized][157],

[Source][172]§

#### fn [borrow_mut][173](&mut self) -> [&mut T][169]

Mutably borrows from an owned value. [Read more][173]

[Source][174]§

### impl<T> [ToString][175] for T

where T: [Display][125] \+ ?[Sized][157],

[Source][176]§

#### fn [to_string][177](&self) -> [String][14]

Converts the given value to a `String`. [Read more][177]

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#117
   [5]: https://docs.rs/serde_json/1.0.149/serde_json/de/fn.from_str.html (fn serde_json::de::from_str)
   [6]: https://docs.rs/serde_json/1.0.149/serde_json/de/fn.from_slice.html (fn serde_json::de::from_slice)
   [7]: https://docs.rs/serde_json/1.0.149/serde_json/de/fn.from_reader.html (fn serde_json::de::from_reader)
   [8]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#170
   [9]: struct.JsonRawValue.html (struct sqlx::types::JsonRawValue)
   [10]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#172
   [11]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#174
   [12]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#176
   [13]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#186
   [14]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [15]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [16]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [17]: https://docs.rs/serde_json/1.0.149/serde_json/error/struct.Error.html (struct serde_json::error::Error)
   [18]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#227
   [19]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [20]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#135
   [21]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [22]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#136
   [23]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [24]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [25]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [26]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#155
   [27]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [28]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#156
   [29]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [30]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [31]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [32]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [33]: ../trait.Decode.html (trait sqlx::Decode)
   [34]: struct.Json.html (struct sqlx::types::Json)
   [35]: ../trait.Database.html (trait sqlx::Database)
   [36]: ../trait.Decode.html#tymethod.decode
   [37]: ../trait.Database.html#associatedtype.ValueRef (type sqlx::Database::ValueRef)
   [38]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [39]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [40]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [41]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#149
   [42]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [43]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#150
   [44]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [45]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#312
   [46]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html (trait serde_core::de::Deserialize)
   [47]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#313-315
   [48]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html#tymethod.deserialize
   [49]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html (trait serde_core::de::Deserializer)
   [50]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#associatedtype.Error (type serde_core::de::Deserializer::Error)
   [51]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#342
   [52]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#343-345
   [53]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#546
   [54]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#547
   [55]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#associatedtype.Error
   [56]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#549-551
   [57]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_any
   [58]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Visitor.html (trait serde_core::de::Visitor)
   [59]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Visitor.html#associatedtype.Value (type serde_core::de::Visitor::Value)
   [60]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#556-558
   [61]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_bool
   [62]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#563-565
   [63]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_i8
   [64]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#570-572
   [65]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_i16
   [66]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#577-579
   [67]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_i32
   [68]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#584-586
   [69]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_i64
   [70]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#591-593
   [71]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#method.deserialize_i128
   [72]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#598-600
   [73]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_u8
   [74]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#605-607
   [75]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_u16
   [76]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#612-614
   [77]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_u32
   [78]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#619-621
   [79]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_u64
   [80]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#626-628
   [81]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#method.deserialize_u128
   [82]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#633-635
   [83]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_f32
   [84]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#640-642
   [85]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_f64
   [86]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#647-649
   [87]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_char
   [88]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#654-656
   [89]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_str
   [90]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#661-663
   [91]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_string
   [92]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#668-670
   [93]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_bytes
   [94]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#675-677
   [95]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_byte_buf
   [96]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#682-684
   [97]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_option
   [98]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#689-691
   [99]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_unit
   [100]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#696-698
   [101]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_unit_struct
   [102]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#703-709
   [103]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_newtype_struct
   [104]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#714-716
   [105]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_seq
   [106]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#721-723
   [107]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_tuple
   [108]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [109]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#728-735
   [110]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_tuple_struct
   [111]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#740-742
   [112]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_map
   [113]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#747-754
   [114]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_struct
   [115]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#759-766
   [116]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_enum
   [117]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#771-773
   [118]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_identifier
   [119]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#778-780
   [120]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_ignored_any
   [121]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#1253
   [122]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#method.is_human_readable
   [123]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [124]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#164
   [125]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [126]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#165
   [127]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html#tymethod.fmt
   [128]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#538
   [129]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.IntoDeserializer.html (trait serde_core::de::IntoDeserializer)
   [130]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#539
   [131]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.IntoDeserializer.html#associatedtype.Deserializer
   [132]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#541
   [133]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.IntoDeserializer.html#tymethod.into_deserializer
   [134]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.IntoDeserializer.html#associatedtype.Deserializer (type serde_core::de::IntoDeserializer::Deserializer)
   [135]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#301
   [136]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [137]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#302-304
   [138]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html#tymethod.serialize
   [139]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html (trait serde_core::ser::Serializer)
   [140]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Ok (type serde_core::ser::Serializer::Ok)
   [141]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Error (type serde_core::ser::Serializer::Error)
   [142]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#141
   [143]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [144]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#142
   [145]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [146]: https://docs.rs/serde_json/1.0.149/src/serde_json/raw.rs.html#144
   [147]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [148]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned (type alloc::borrow::ToOwned::Owned)
   [149]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#66
   [150]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [151]: ../trait.Type.html (trait sqlx::Type)
   [152]: ../trait.Type.html#tymethod.type_info
   [153]: ../trait.Database.html#associatedtype.TypeInfo (type sqlx::Database::TypeInfo)
   [154]: ../trait.Type.html#method.compatible
   [155]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [156]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [157]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [158]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [159]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [160]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [161]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [162]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [163]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [164]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [165]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [166]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [167]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [168]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [169]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [170]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [171]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [172]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [173]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [174]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2893
   [175]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html (trait alloc::string::ToString)
   [176]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2895
   [177]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html#tymethod.to_string

