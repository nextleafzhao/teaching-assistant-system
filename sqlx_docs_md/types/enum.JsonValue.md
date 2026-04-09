## JsonValue

## [sqlx][1]0.8.6

## JsonValue

### Variants

  * Array
  * Bool
  * Null
  * Number
  * Object
  * String



### Methods

  * as_array
  * as_array_mut
  * as_bool
  * as_f64
  * as_i64
  * as_null
  * as_number
  * as_object
  * as_object_mut
  * as_str
  * as_u64
  * get
  * get_mut
  * is_array
  * is_boolean
  * is_f64
  * is_i64
  * is_null
  * is_number
  * is_object
  * is_string
  * is_u64
  * pointer
  * pointer_mut
  * sort_all_objects
  * take



### Trait Implementations

  * Clone
  * Debug
  * Decode<'r, DB>
  * Default
  * Default
  * Deserialize<'de>
  * Deserializer<'de>
  * Deserializer<'de>
  * Display
  * Encode<'q, DB>
  * Eq
  * From<&[T]>
  * From<&str>
  * From<()>
  * From<Cow<'a, str>>
  * From<Map<String, Value>>
  * From<Number>
  * From<Option<T>>
  * From<String>
  * From<Vec<T>>
  * From<[T; N]>
  * From<bool>
  * From<f32>
  * From<f64>
  * From<i8>
  * From<i16>
  * From<i32>
  * From<i64>
  * From<isize>
  * From<u8>
  * From<u16>
  * From<u32>
  * From<u64>
  * From<usize>
  * FromIterator<(K, V)>
  * FromIterator<T>
  * FromStr
  * Hash
  * Index<I>
  * IndexMut<I>
  * IntoDeserializer<'de, Error>
  * IntoDeserializer<'de, Error>
  * PartialEq
  * PartialEq<&str>
  * PartialEq<String>
  * PartialEq<Value>
  * PartialEq<Value>
  * PartialEq<bool>
  * PartialEq<bool>
  * PartialEq<bool>
  * PartialEq<f32>
  * PartialEq<f32>
  * PartialEq<f32>
  * PartialEq<f64>
  * PartialEq<f64>
  * PartialEq<f64>
  * PartialEq<i8>
  * PartialEq<i8>
  * PartialEq<i8>
  * PartialEq<i16>
  * PartialEq<i16>
  * PartialEq<i16>
  * PartialEq<i32>
  * PartialEq<i32>
  * PartialEq<i32>
  * PartialEq<i64>
  * PartialEq<i64>
  * PartialEq<i64>
  * PartialEq<isize>
  * PartialEq<isize>
  * PartialEq<isize>
  * PartialEq<str>
  * PartialEq<u8>
  * PartialEq<u8>
  * PartialEq<u8>
  * PartialEq<u16>
  * PartialEq<u16>
  * PartialEq<u16>
  * PartialEq<u32>
  * PartialEq<u32>
  * PartialEq<u32>
  * PartialEq<u64>
  * PartialEq<u64>
  * PartialEq<u64>
  * PartialEq<usize>
  * PartialEq<usize>
  * PartialEq<usize>
  * Serialize
  * StructuralPartialEq
  * Type<DB>



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
  * CloneToUninit
  * DeserializeOwned
  * Equivalent<K>
  * Equivalent<K>
  * From<T>
  * Instrument
  * Into<U>
  * IntoEither
  * Same
  * ToOwned
  * ToString
  * TryFrom<U>
  * TryInto<U>
  * WithSubscriber



## [In sqlx::types][2]

[sqlx][3]::[types][2]

# Enum JsonValue Copy item path

[Source][4]
[code] 
    pub enum JsonValue {
        Null,
        Bool([bool][5]),
        Number([Number][6]),
        String([String][7]),
        Array([Vec][8]<[Value][9]>),
        Object([Map][10]<[String][7], [Value][9]>),
    }
[/code]

Expand description

Represents any valid JSON value.

See the [`serde_json::value` module documentation][11] for usage examples.

## Variants§

§

### Null

Represents a JSON null value.
[code] 
    let v = json!(null);
[/code]

§

### Bool([bool][5])

Represents a JSON boolean.
[code] 
    let v = json!(true);
[/code]

§

### Number([Number][6])

Represents a JSON number, whether integer or floating point.
[code] 
    let v = json!(12.5);
[/code]

§

### String([String][7])

Represents a JSON string.
[code] 
    let v = json!("a string");
[/code]

§

### Array([Vec][8]<[Value][9]>)

Represents a JSON array.
[code] 
    let v = json!(["an", "array"]);
[/code]

§

### Object([Map][10]<[String][7], [Value][9]>)

Represents a JSON object.

By default the map is backed by a BTreeMap. Enable the `preserve_order` feature of serde_json to use IndexMap instead, which preserves entries in the order they are inserted into the map. In particular, this allows JSON data to be deserialized into a Value and serialized to a string while retaining the order of map keys in the input.
[code] 
    let v = json!({ "an": "object" });
[/code]

## Implementations§

[Source][12]§

### impl [Value][9]

[Source][13]

#### pub fn get<I>(&self, index: I) -> [Option][14]<&[Value][9]>

where I: [Index][15],

Index into a JSON array or map. A string index can be used to access a value in a map, and a usize index can be used to access an element of an array.

Returns `None` if the type of `self` does not match the type of the index, for example if the index is a string and `self` is an array or a number. Also returns `None` if the given key does not exist in the map or the given index is not within the bounds of the array.
[code] 
    let object = json!({ "A": 65, "B": 66, "C": 67 });
    assert_eq!(*object.get("A").unwrap(), json!(65));
    
    let array = json!([ "A", "B", "C" ]);
    assert_eq!(*array.get(2).unwrap(), json!("C"));
    
    assert_eq!(array.get("A"), None);
[/code]

Square brackets can also be used to index into a value in a more concise way. This returns `Value::Null` in cases where `get` would have returned `None`.
[code] 
    let object = json!({
        "A": ["a", "á", "à"],
        "B": ["b", "b́"],
        "C": ["c", "ć", "ć̣", "ḉ"],
    });
    assert_eq!(object["B"][0], json!("b"));
    
    assert_eq!(object["D"], json!(null));
    assert_eq!(object[0]["x"]["y"]["z"], json!(null));
[/code]

[Source][16]

#### pub fn get_mut<I>(&mut self, index: I) -> [Option][14]<&mut [Value][9]>

where I: [Index][15],

Mutably index into a JSON array or map. A string index can be used to access a value in a map, and a usize index can be used to access an element of an array.

Returns `None` if the type of `self` does not match the type of the index, for example if the index is a string and `self` is an array or a number. Also returns `None` if the given key does not exist in the map or the given index is not within the bounds of the array.
[code] 
    let mut object = json!({ "A": 65, "B": 66, "C": 67 });
    *object.get_mut("A").unwrap() = json!(69);
    
    let mut array = json!([ "A", "B", "C" ]);
    *array.get_mut(2).unwrap() = json!("D");
[/code]

[Source][17]

#### pub fn is_object(&self) -> [bool][5]

Returns true if the `Value` is an Object. Returns false otherwise.

For any Value on which `is_object` returns true, `as_object` and `as_object_mut` are guaranteed to return the map representation of the object.
[code] 
    let obj = json!({ "a": { "nested": true }, "b": ["an", "array"] });
    
    assert!(obj.is_object());
    assert!(obj["a"].is_object());
    
    // array, not an object
    assert!(!obj["b"].is_object());
[/code]

[Source][18]

#### pub fn as_object(&self) -> [Option][14]<&[Map][10]<[String][7], [Value][9]>>

If the `Value` is an Object, returns the associated Map. Returns None otherwise.
[code] 
    let v = json!({ "a": { "nested": true }, "b": ["an", "array"] });
    
    // The length of `{"nested": true}` is 1 entry.
    assert_eq!(v["a"].as_object().unwrap().len(), 1);
    
    // The array `["an", "array"]` is not an object.
    assert_eq!(v["b"].as_object(), None);
[/code]

[Source][19]

#### pub fn as_object_mut(&mut self) -> [Option][14]<&mut [Map][10]<[String][7], [Value][9]>>

If the `Value` is an Object, returns the associated mutable Map. Returns None otherwise.
[code] 
    let mut v = json!({ "a": { "nested": true } });
    
    v["a"].as_object_mut().unwrap().clear();
    assert_eq!(v, json!({ "a": {} }));
[/code]

[Source][20]

#### pub fn is_array(&self) -> [bool][5]

Returns true if the `Value` is an Array. Returns false otherwise.

For any Value on which `is_array` returns true, `as_array` and `as_array_mut` are guaranteed to return the vector representing the array.
[code] 
    let obj = json!({ "a": ["an", "array"], "b": { "an": "object" } });
    
    assert!(obj["a"].is_array());
    
    // an object, not an array
    assert!(!obj["b"].is_array());
[/code]

[Source][21]

#### pub fn as_array(&self) -> [Option][14]<&[Vec][8]<[Value][9]>>

If the `Value` is an Array, returns the associated vector. Returns None otherwise.
[code] 
    let v = json!({ "a": ["an", "array"], "b": { "an": "object" } });
    
    // The length of `["an", "array"]` is 2 elements.
    assert_eq!(v["a"].as_array().unwrap().len(), 2);
    
    // The object `{"an": "object"}` is not an array.
    assert_eq!(v["b"].as_array(), None);
[/code]

[Source][22]

#### pub fn as_array_mut(&mut self) -> [Option][14]<&mut [Vec][8]<[Value][9]>>

If the `Value` is an Array, returns the associated mutable vector. Returns None otherwise.
[code] 
    let mut v = json!({ "a": ["an", "array"] });
    
    v["a"].as_array_mut().unwrap().clear();
    assert_eq!(v, json!({ "a": [] }));
[/code]

[Source][23]

#### pub fn is_string(&self) -> [bool][5]

Returns true if the `Value` is a String. Returns false otherwise.

For any Value on which `is_string` returns true, `as_str` is guaranteed to return the string slice.
[code] 
    let v = json!({ "a": "some string", "b": false });
    
    assert!(v["a"].is_string());
    
    // The boolean `false` is not a string.
    assert!(!v["b"].is_string());
[/code]

[Source][24]

#### pub fn as_str(&self) -> [Option][14]<&[str][25]>

If the `Value` is a String, returns the associated str. Returns None otherwise.
[code] 
    let v = json!({ "a": "some string", "b": false });
    
    assert_eq!(v["a"].as_str(), Some("some string"));
    
    // The boolean `false` is not a string.
    assert_eq!(v["b"].as_str(), None);
    
    // JSON values are printed in JSON representation, so strings are in quotes.
    //
    //    The value is: "some string"
    println!("The value is: {}", v["a"]);
    
    // Rust strings are printed without quotes.
    //
    //    The value is: some string
    println!("The value is: {}", v["a"].as_str().unwrap());
[/code]

[Source][26]

#### pub fn is_number(&self) -> [bool][5]

Returns true if the `Value` is a Number. Returns false otherwise.
[code] 
    let v = json!({ "a": 1, "b": "2" });
    
    assert!(v["a"].is_number());
    
    // The string `"2"` is a string, not a number.
    assert!(!v["b"].is_number());
[/code]

[Source][27]

#### pub fn as_number(&self) -> [Option][14]<&[Number][6]>

If the `Value` is a Number, returns the associated [`Number`][6]. Returns None otherwise.
[code] 
    let v = json!({ "a": 1, "b": 2.2, "c": -3, "d": "4" });
    
    assert_eq!(v["a"].as_number(), Some(&Number::from(1u64)));
    assert_eq!(v["b"].as_number(), Some(&Number::from_f64(2.2).unwrap()));
    assert_eq!(v["c"].as_number(), Some(&Number::from(-3i64)));
    
    // The string `"4"` is not a number.
    assert_eq!(v["d"].as_number(), None);
[/code]

[Source][28]

#### pub fn is_i64(&self) -> [bool][5]

Returns true if the `Value` is an integer between `i64::MIN` and `i64::MAX`.

For any Value on which `is_i64` returns true, `as_i64` is guaranteed to return the integer value.
[code] 
    let big = i64::max_value() as u64 + 10;
    let v = json!({ "a": 64, "b": big, "c": 256.0 });
    
    assert!(v["a"].is_i64());
    
    // Greater than i64::MAX.
    assert!(!v["b"].is_i64());
    
    // Numbers with a decimal point are not considered integers.
    assert!(!v["c"].is_i64());
[/code]

[Source][29]

#### pub fn is_u64(&self) -> [bool][5]

Returns true if the `Value` is an integer between zero and `u64::MAX`.

For any Value on which `is_u64` returns true, `as_u64` is guaranteed to return the integer value.
[code] 
    let v = json!({ "a": 64, "b": -64, "c": 256.0 });
    
    assert!(v["a"].is_u64());
    
    // Negative integer.
    assert!(!v["b"].is_u64());
    
    // Numbers with a decimal point are not considered integers.
    assert!(!v["c"].is_u64());
[/code]

[Source][30]

#### pub fn is_f64(&self) -> [bool][5]

Returns true if the `Value` is a number that can be represented by f64.

For any Value on which `is_f64` returns true, `as_f64` is guaranteed to return the floating point value.

Currently this function returns true if and only if both `is_i64` and `is_u64` return false but this is not a guarantee in the future.
[code] 
    let v = json!({ "a": 256.0, "b": 64, "c": -64 });
    
    assert!(v["a"].is_f64());
    
    // Integers.
    assert!(!v["b"].is_f64());
    assert!(!v["c"].is_f64());
[/code]

[Source][31]

#### pub fn as_i64(&self) -> [Option][14]<[i64][32]>

If the `Value` is an integer, represent it as i64 if possible. Returns None otherwise.
[code] 
    let big = i64::max_value() as u64 + 10;
    let v = json!({ "a": 64, "b": big, "c": 256.0 });
    
    assert_eq!(v["a"].as_i64(), Some(64));
    assert_eq!(v["b"].as_i64(), None);
    assert_eq!(v["c"].as_i64(), None);
[/code]

[Source][33]

#### pub fn as_u64(&self) -> [Option][14]<[u64][34]>

If the `Value` is an integer, represent it as u64 if possible. Returns None otherwise.
[code] 
    let v = json!({ "a": 64, "b": -64, "c": 256.0 });
    
    assert_eq!(v["a"].as_u64(), Some(64));
    assert_eq!(v["b"].as_u64(), None);
    assert_eq!(v["c"].as_u64(), None);
[/code]

[Source][35]

#### pub fn as_f64(&self) -> [Option][14]<[f64][36]>

If the `Value` is a number, represent it as f64 if possible. Returns None otherwise.
[code] 
    let v = json!({ "a": 256.0, "b": 64, "c": -64 });
    
    assert_eq!(v["a"].as_f64(), Some(256.0));
    assert_eq!(v["b"].as_f64(), Some(64.0));
    assert_eq!(v["c"].as_f64(), Some(-64.0));
[/code]

[Source][37]

#### pub fn is_boolean(&self) -> [bool][5]

Returns true if the `Value` is a Boolean. Returns false otherwise.

For any Value on which `is_boolean` returns true, `as_bool` is guaranteed to return the boolean value.
[code] 
    let v = json!({ "a": false, "b": "false" });
    
    assert!(v["a"].is_boolean());
    
    // The string `"false"` is a string, not a boolean.
    assert!(!v["b"].is_boolean());
[/code]

[Source][38]

#### pub fn as_bool(&self) -> [Option][14]<[bool][5]>

If the `Value` is a Boolean, returns the associated bool. Returns None otherwise.
[code] 
    let v = json!({ "a": false, "b": "false" });
    
    assert_eq!(v["a"].as_bool(), Some(false));
    
    // The string `"false"` is a string, not a boolean.
    assert_eq!(v["b"].as_bool(), None);
[/code]

[Source][39]

#### pub fn is_null(&self) -> [bool][5]

Returns true if the `Value` is a Null. Returns false otherwise.

For any Value on which `is_null` returns true, `as_null` is guaranteed to return `Some(())`.
[code] 
    let v = json!({ "a": null, "b": false });
    
    assert!(v["a"].is_null());
    
    // The boolean `false` is not null.
    assert!(!v["b"].is_null());
[/code]

[Source][40]

#### pub fn as_null(&self) -> [Option][14]<[()][41]>

If the `Value` is a Null, returns (). Returns None otherwise.
[code] 
    let v = json!({ "a": null, "b": false });
    
    assert_eq!(v["a"].as_null(), Some(()));
    
    // The boolean `false` is not null.
    assert_eq!(v["b"].as_null(), None);
[/code]

[Source][42]

#### pub fn pointer(&self, pointer: &[str][25]) -> [Option][14]<&[Value][9]>

Looks up a value by a JSON Pointer.

JSON Pointer defines a string syntax for identifying a specific value within a JavaScript Object Notation (JSON) document.

A Pointer is a Unicode string with the reference tokens separated by `/`. Inside tokens `/` is replaced by `~1` and `~` is replaced by `~0`. The addressed value is returned and if there is no such value `None` is returned.

For more information read [RFC6901][43].

##### §Examples
[code] 
    let data = json!({
        "x": {
            "y": ["z", "zz"]
        }
    });
    
    assert_eq!(data.pointer("/x/y/1").unwrap(), &json!("zz"));
    assert_eq!(data.pointer("/a/b/c"), None);
[/code]

[Source][44]

#### pub fn pointer_mut(&mut self, pointer: &[str][25]) -> [Option][14]<&mut [Value][9]>

Looks up a value by a JSON Pointer and returns a mutable reference to that value.

JSON Pointer defines a string syntax for identifying a specific value within a JavaScript Object Notation (JSON) document.

A Pointer is a Unicode string with the reference tokens separated by `/`. Inside tokens `/` is replaced by `~1` and `~` is replaced by `~0`. The addressed value is returned and if there is no such value `None` is returned.

For more information read [RFC6901][43].

##### §Example of Use
[code] 
    use serde_json::Value;
    
    fn main() {
        let s = r#"{"x": 1.0, "y": 2.0}"#;
        let mut value: Value = serde_json::from_str(s).unwrap();
    
        // Check value using read-only pointer
        assert_eq!(value.pointer("/x"), Some(&1.0.into()));
        // Change value with direct assignment
        *value.pointer_mut("/x").unwrap() = 1.5.into();
        // Check that new value was written
        assert_eq!(value.pointer("/x"), Some(&1.5.into()));
        // Or change the value only if it exists
        value.pointer_mut("/x").map(|v| *v = 1.5.into());
    
        // "Steal" ownership of a value. Can replace with any valid Value.
        let old_x = value.pointer_mut("/x").map(Value::take).unwrap();
        assert_eq!(old_x, 1.5);
        assert_eq!(value.pointer("/x").unwrap(), &Value::Null);
    }
[/code]

[Source][45]

#### pub fn take(&mut self) -> [Value][9]

Takes the value out of the `Value`, leaving a `Null` in its place.
[code] 
    let mut v = json!({ "x": "y" });
    assert_eq!(v["x"].take(), json!("y"));
    assert_eq!(v, json!({ "x": null }));
[/code]

[Source][46]

#### pub fn sort_all_objects(&mut self)

Reorders the entries of all `Value::Object` nested within this JSON value according to `str`’s usual ordering.

If serde_json’s “preserve_order” feature is not enabled, this method does no work because all JSON maps are always kept in a sorted state.

If serde_json’s “preserve_order” feature is enabled, this method destroys the original source order or insertion order of the JSON objects in favor of an alphanumerical order that matches how a BTreeMap with the same contents would be ordered.

## Trait Implementations§

[Source][47]§

### impl [Clone][48] for [Value][9]

[Source][47]§

#### fn [clone][49](&self) -> [Value][9]

Returns a duplicate of the value. [Read more][49]

1.0.0 · [Source][50]§

#### fn [clone_from][51](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][51]

[Source][52]§

### impl [Debug][53] for [Value][9]

[Source][54]§

#### fn [fmt][55](&self, formatter: &mut [Formatter][56]<'_>) -> [Result][57]<[()][41], [Error][58]>

Formats the value using the given formatter. [Read more][55]

§

### impl<'r, DB> [Decode][59]<'r, DB> for [Value][9]

where [Json][60]<[Value][9]>: [Decode][59]<'r, DB>, DB: [Database][61],

§

#### fn [decode][62]( value: <DB as [Database][61]>::[ValueRef][63]<'r>, ) -> [Result][57]<[Value][9], [Box][64]<dyn [Error][65] \+ [Send][66] \+ [Sync][67]>>

Decode a new value of this type using a raw value from the database.

[Source][68]§

### impl [Default][69] for &[Value][9]

[Source][70]§

#### fn [default][71]() -> &[Value][9]

Returns the “default value” for a type. [Read more][71]

[Source][72]§

### impl [Default][69] for [Value][9]

The default value is `Value::Null`.

This is useful for handling omitted `Value` fields when deserializing.

#### §Examples
[code] 
    use serde_json::Value;
    
    #[derive(Deserialize)]
    struct Settings {
        level: i32,
        #[serde(default)]
        extras: Value,
    }
    
    let data = r#" { "level": 42 } "#;
    let s: Settings = serde_json::from_str(data)?;
    
    assert_eq!(s.level, 42);
    assert_eq!(s.extras, Value::Null);
[/code]

[Source][73]§

#### fn [default][71]() -> [Value][9]

Returns the “default value” for a type. [Read more][71]

[Source][74]§

### impl<'de> [Deserialize][75]<'de> for [Value][9]

[Source][76]§

#### fn [deserialize][77]<D>( deserializer: D, ) -> [Result][57]<[Value][9], <D as [Deserializer][78]<'de>>::[Error][79]>

where D: [Deserializer][78]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][77]

[Source][80]§

### impl<'de> [Deserializer][78]<'de> for &'de [Value][9]

[Source][81]§

#### type [Error][82] = [Error][83]

The error type that can be returned if some error occurs during deserialization.

[Source][84]§

#### fn [deserialize_any][85]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Require the `Deserializer` to figure out how to drive the visitor based on what data type is in the input. [Read more][85]

[Source][88]§

#### fn [deserialize_i8][89]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting an `i8` value.

[Source][90]§

#### fn [deserialize_i16][91]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting an `i16` value.

[Source][92]§

#### fn [deserialize_i32][93]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting an `i32` value.

[Source][94]§

#### fn [deserialize_i64][95]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting an `i64` value.

[Source][96]§

#### fn [deserialize_i128][97]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting an `i128` value. [Read more][97]

[Source][98]§

#### fn [deserialize_u8][99]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a `u8` value.

[Source][100]§

#### fn [deserialize_u16][101]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a `u16` value.

[Source][102]§

#### fn [deserialize_u32][103]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a `u32` value.

[Source][104]§

#### fn [deserialize_u64][105]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a `u64` value.

[Source][106]§

#### fn [deserialize_u128][107]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting an `u128` value. [Read more][107]

[Source][108]§

#### fn [deserialize_f32][109]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a `f32` value.

[Source][110]§

#### fn [deserialize_f64][111]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a `f64` value.

[Source][112]§

#### fn [deserialize_option][113]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting an optional value. [Read more][113]

[Source][114]§

#### fn [deserialize_enum][115]<V>( self, name: &'static [str][25], variants: &'static [&'static [str][25]], visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting an enum value with a particular name and possible variants.

[Source][116]§

#### fn [deserialize_newtype_struct][117]<V>( self, name: &'static [str][25], visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a newtype struct with a particular name.

[Source][118]§

#### fn [deserialize_bool][119]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a `bool` value.

[Source][120]§

#### fn [deserialize_char][121]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a `char` value.

[Source][122]§

#### fn [deserialize_str][123]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a string value and does not benefit from taking ownership of buffered data owned by the `Deserializer`. [Read more][123]

[Source][124]§

#### fn [deserialize_string][125]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a string value and would benefit from taking ownership of buffered data owned by the `Deserializer`. [Read more][125]

[Source][126]§

#### fn [deserialize_bytes][127]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a byte array and does not benefit from taking ownership of buffered data owned by the `Deserializer`. [Read more][127]

[Source][128]§

#### fn [deserialize_byte_buf][129]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a byte array and would benefit from taking ownership of buffered data owned by the `Deserializer`. [Read more][129]

[Source][130]§

#### fn [deserialize_unit][131]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a unit value.

[Source][132]§

#### fn [deserialize_unit_struct][133]<V>( self, _name: &'static [str][25], visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a unit struct with a particular name.

[Source][134]§

#### fn [deserialize_seq][135]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a sequence of values.

[Source][136]§

#### fn [deserialize_tuple][137]<V>( self, _len: [usize][138], visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a sequence of values and knows how many values there are without looking at the serialized data.

[Source][139]§

#### fn [deserialize_tuple_struct][140]<V>( self, _name: &'static [str][25], _len: [usize][138], visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a tuple struct with a particular name and number of fields.

[Source][141]§

#### fn [deserialize_map][142]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a map of key-value pairs.

[Source][143]§

#### fn [deserialize_struct][144]<V>( self, _name: &'static [str][25], _fields: &'static [&'static [str][25]], visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a struct with a particular name and fields.

[Source][145]§

#### fn [deserialize_identifier][146]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting the name of a struct field or the discriminant of an enum variant.

[Source][147]§

#### fn [deserialize_ignored_any][148]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type needs to deserialize a value whose type doesn’t matter because it is ignored. [Read more][148]

[Source][149]§

#### fn [is_human_readable][150](&self) -> [bool][5]

Determine whether `Deserialize` implementations should expect to deserialize their human-readable form. [Read more][150]

[Source][151]§

### impl<'de> [Deserializer][78]<'de> for [Value][9]

[Source][152]§

#### type [Error][82] = [Error][83]

The error type that can be returned if some error occurs during deserialization.

[Source][153]§

#### fn [deserialize_any][85]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Require the `Deserializer` to figure out how to drive the visitor based on what data type is in the input. [Read more][85]

[Source][154]§

#### fn [deserialize_i8][89]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting an `i8` value.

[Source][155]§

#### fn [deserialize_i16][91]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting an `i16` value.

[Source][156]§

#### fn [deserialize_i32][93]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting an `i32` value.

[Source][157]§

#### fn [deserialize_i64][95]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting an `i64` value.

[Source][158]§

#### fn [deserialize_i128][97]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting an `i128` value. [Read more][97]

[Source][159]§

#### fn [deserialize_u8][99]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a `u8` value.

[Source][160]§

#### fn [deserialize_u16][101]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a `u16` value.

[Source][161]§

#### fn [deserialize_u32][103]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a `u32` value.

[Source][162]§

#### fn [deserialize_u64][105]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a `u64` value.

[Source][163]§

#### fn [deserialize_u128][107]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting an `u128` value. [Read more][107]

[Source][164]§

#### fn [deserialize_f32][109]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a `f32` value.

[Source][165]§

#### fn [deserialize_f64][111]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a `f64` value.

[Source][166]§

#### fn [deserialize_option][113]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting an optional value. [Read more][113]

[Source][167]§

#### fn [deserialize_enum][115]<V>( self, name: &'static [str][25], variants: &'static [&'static [str][25]], visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting an enum value with a particular name and possible variants.

[Source][168]§

#### fn [deserialize_newtype_struct][117]<V>( self, name: &'static [str][25], visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a newtype struct with a particular name.

[Source][169]§

#### fn [deserialize_bool][119]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a `bool` value.

[Source][170]§

#### fn [deserialize_char][121]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a `char` value.

[Source][171]§

#### fn [deserialize_str][123]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a string value and does not benefit from taking ownership of buffered data owned by the `Deserializer`. [Read more][123]

[Source][172]§

#### fn [deserialize_string][125]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a string value and would benefit from taking ownership of buffered data owned by the `Deserializer`. [Read more][125]

[Source][173]§

#### fn [deserialize_bytes][127]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a byte array and does not benefit from taking ownership of buffered data owned by the `Deserializer`. [Read more][127]

[Source][174]§

#### fn [deserialize_byte_buf][129]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a byte array and would benefit from taking ownership of buffered data owned by the `Deserializer`. [Read more][129]

[Source][175]§

#### fn [deserialize_unit][131]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a unit value.

[Source][176]§

#### fn [deserialize_unit_struct][133]<V>( self, _name: &'static [str][25], visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a unit struct with a particular name.

[Source][177]§

#### fn [deserialize_seq][135]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a sequence of values.

[Source][178]§

#### fn [deserialize_tuple][137]<V>( self, _len: [usize][138], visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a sequence of values and knows how many values there are without looking at the serialized data.

[Source][179]§

#### fn [deserialize_tuple_struct][140]<V>( self, _name: &'static [str][25], _len: [usize][138], visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a tuple struct with a particular name and number of fields.

[Source][180]§

#### fn [deserialize_map][142]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a map of key-value pairs.

[Source][181]§

#### fn [deserialize_struct][144]<V>( self, _name: &'static [str][25], _fields: &'static [&'static [str][25]], visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting a struct with a particular name and fields.

[Source][182]§

#### fn [deserialize_identifier][146]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type is expecting the name of a struct field or the discriminant of an enum variant.

[Source][183]§

#### fn [deserialize_ignored_any][148]<V>( self, visitor: V, ) -> [Result][57]<<V as [Visitor][86]<'de>>::[Value][87], [Error][83]>

where V: [Visitor][86]<'de>,

Hint that the `Deserialize` type needs to deserialize a value whose type doesn’t matter because it is ignored. [Read more][148]

[Source][149]§

#### fn [is_human_readable][150](&self) -> [bool][5]

Determine whether `Deserialize` implementations should expect to deserialize their human-readable form. [Read more][150]

[Source][184]§

### impl [Display][185] for [Value][9]

[Source][186]§

#### fn [fmt][187](&self, f: &mut [Formatter][56]<'_>) -> [Result][57]<[()][41], [Error][58]>

Display a JSON value as a string.
[code] 
    let json = json!({ "city": "London", "street": "10 Downing Street" });
    
    // Compact format:
    //
    // {"city":"London","street":"10 Downing Street"}
    let compact = format!("{}", json);
    assert_eq!(compact,
        "{\"city\":\"London\",\"street\":\"10 Downing Street\"}");
    
    // Pretty format:
    //
    // {
    //   "city": "London",
    //   "street": "10 Downing Street"
    // }
    let pretty = format!("{:#}", json);
    assert_eq!(pretty,
        "{\n  \"city\": \"London\",\n  \"street\": \"10 Downing Street\"\n}");
[/code]

§

### impl<'q, DB> [Encode][188]<'q, DB> for [Value][9]

where [Json][60]<&'a [Value][9]>: for<'a> [Encode][188]<'q, DB>, DB: [Database][61],

§

#### fn [encode_by_ref][189]( &self, buf: &mut <DB as [Database][61]>::[ArgumentBuffer][190]<'q>, ) -> [Result][57]<[IsNull][191], [Box][64]<dyn [Error][65] \+ [Send][66] \+ [Sync][67]>>

Writes the value of `self` into `buf` without moving `self`. [Read more][189]

§

#### fn [encode][192]( self, buf: &mut <DB as [Database][61]>::[ArgumentBuffer][190]<'q>, ) -> [Result][57]<[IsNull][191], [Box][64]<dyn [Error][65] \+ [Send][66] \+ [Sync][67]>>

where Self: [Sized][193],

Writes the value of `self` into `buf` in the expected format for the database.

§

#### fn [produces][194](&self) -> [Option][14]<<DB as [Database][61]>::[TypeInfo][195]>

§

#### fn [size_hint][196](&self) -> [usize][138]

[Source][197]§

### impl<T> [From][198]<&[[T]][199]> for [Value][9]

where T: [Clone][48] \+ [Into][200]<[Value][9]>,

[Source][201]§

#### fn [from][202](f: &[[T]][199]) -> [Value][9]

Convert a slice to `Value::Array`.

##### §Examples
[code] 
    use serde_json::Value;
    
    let v: &[&str] = &["lorem", "ipsum", "dolor"];
    let x: Value = v.into();
[/code]

[Source][203]§

### impl [From][198]<&[str][25]> for [Value][9]

[Source][204]§

#### fn [from][202](f: &[str][25]) -> [Value][9]

Convert string slice to `Value::String`.

##### §Examples
[code] 
    use serde_json::Value;
    
    let s: &str = "lorem";
    let x: Value = s.into();
[/code]

[Source][205]§

### impl<T, const N: [usize][138]> [From][198]<[[T; N]][206]> for [Value][9]

where T: [Into][200]<[Value][9]>,

[Source][207]§

#### fn [from][202](array: [[T; N]][206]) -> [Value][9]

Converts to this type from the input type.

[Source][208]§

### impl [From][198]<[()][41]> for [Value][9]

[Source][209]§

#### fn [from][202](_: [()][41]) -> [Value][9]

Convert `()` to `Value::Null`.

##### §Examples
[code] 
    use serde_json::Value;
    
    let u = ();
    let x: Value = u.into();
[/code]

[Source][210]§

### impl<'a> [From][198]<[Cow][211]<'a, [str][25]>> for [Value][9]

[Source][212]§

#### fn [from][202](f: [Cow][211]<'a, [str][25]>) -> [Value][9]

Convert copy-on-write string to `Value::String`.

##### §Examples
[code] 
    use serde_json::Value;
    use std::borrow::Cow;
    
    let s: Cow<str> = Cow::Borrowed("lorem");
    let x: Value = s.into();
[/code]
[code] 
    use serde_json::Value;
    use std::borrow::Cow;
    
    let s: Cow<str> = Cow::Owned("lorem".to_owned());
    let x: Value = s.into();
[/code]

[Source][213]§

### impl [From][198]<[Map][10]<[String][7], [Value][9]>> for [Value][9]

[Source][214]§

#### fn [from][202](f: [Map][10]<[String][7], [Value][9]>) -> [Value][9]

Convert map (with string keys) to `Value::Object`.

##### §Examples
[code] 
    use serde_json::{Map, Value};
    
    let mut m = Map::new();
    m.insert("Lorem".to_owned(), "ipsum".into());
    let x: Value = m.into();
[/code]

[Source][215]§

### impl [From][198]<[Number][6]> for [Value][9]

[Source][216]§

#### fn [from][202](f: [Number][6]) -> [Value][9]

Convert `Number` to `Value::Number`.

##### §Examples
[code] 
    use serde_json::{Number, Value};
    
    let n = Number::from(7);
    let x: Value = n.into();
[/code]

[Source][217]§

### impl<T> [From][198]<[Option][14]<T>> for [Value][9]

where T: [Into][200]<[Value][9]>,

[Source][218]§

#### fn [from][202](opt: [Option][14]<T>) -> [Value][9]

Converts to this type from the input type.

[Source][219]§

### impl [From][198]<[String][7]> for [Value][9]

[Source][220]§

#### fn [from][202](f: [String][7]) -> [Value][9]

Convert `String` to `Value::String`.

##### §Examples
[code] 
    use serde_json::Value;
    
    let s: String = "lorem".to_owned();
    let x: Value = s.into();
[/code]

[Source][221]§

### impl<T> [From][198]<[Vec][8]<T>> for [Value][9]

where T: [Into][200]<[Value][9]>,

[Source][222]§

#### fn [from][202](f: [Vec][8]<T>) -> [Value][9]

Convert a `Vec` to `Value::Array`.

##### §Examples
[code] 
    use serde_json::Value;
    
    let v = vec!["lorem", "ipsum", "dolor"];
    let x: Value = v.into();
[/code]

[Source][223]§

### impl [From][198]<[bool][5]> for [Value][9]

[Source][224]§

#### fn [from][202](f: [bool][5]) -> [Value][9]

Convert boolean to `Value::Bool`.

##### §Examples
[code] 
    use serde_json::Value;
    
    let b = false;
    let x: Value = b.into();
[/code]

[Source][225]§

### impl [From][198]<[f32][226]> for [Value][9]

[Source][227]§

#### fn [from][202](f: [f32][226]) -> [Value][9]

Convert 32-bit floating point number to `Value::Number`, or `Value::Null` if infinite or NaN.

##### §Examples
[code] 
    use serde_json::Value;
    
    let f: f32 = 13.37;
    let x: Value = f.into();
[/code]

[Source][228]§

### impl [From][198]<[f64][36]> for [Value][9]

[Source][229]§

#### fn [from][202](f: [f64][36]) -> [Value][9]

Convert 64-bit floating point number to `Value::Number`, or `Value::Null` if infinite or NaN.

##### §Examples
[code] 
    use serde_json::Value;
    
    let f: f64 = 13.37;
    let x: Value = f.into();
[/code]

[Source][230]§

### impl [From][198]<[i16][231]> for [Value][9]

[Source][230]§

#### fn [from][202](n: [i16][231]) -> [Value][9]

Converts to this type from the input type.

[Source][230]§

### impl [From][198]<[i32][232]> for [Value][9]

[Source][230]§

#### fn [from][202](n: [i32][232]) -> [Value][9]

Converts to this type from the input type.

[Source][230]§

### impl [From][198]<[i64][32]> for [Value][9]

[Source][230]§

#### fn [from][202](n: [i64][32]) -> [Value][9]

Converts to this type from the input type.

[Source][230]§

### impl [From][198]<[i8][233]> for [Value][9]

[Source][230]§

#### fn [from][202](n: [i8][233]) -> [Value][9]

Converts to this type from the input type.

[Source][230]§

### impl [From][198]<[isize][234]> for [Value][9]

[Source][230]§

#### fn [from][202](n: [isize][234]) -> [Value][9]

Converts to this type from the input type.

[Source][230]§

### impl [From][198]<[u16][235]> for [Value][9]

[Source][230]§

#### fn [from][202](n: [u16][235]) -> [Value][9]

Converts to this type from the input type.

[Source][230]§

### impl [From][198]<[u32][236]> for [Value][9]

[Source][230]§

#### fn [from][202](n: [u32][236]) -> [Value][9]

Converts to this type from the input type.

[Source][230]§

### impl [From][198]<[u64][34]> for [Value][9]

[Source][230]§

#### fn [from][202](n: [u64][34]) -> [Value][9]

Converts to this type from the input type.

[Source][230]§

### impl [From][198]<[u8][237]> for [Value][9]

[Source][230]§

#### fn [from][202](n: [u8][237]) -> [Value][9]

Converts to this type from the input type.

[Source][230]§

### impl [From][198]<[usize][138]> for [Value][9]

[Source][230]§

#### fn [from][202](n: [usize][138]) -> [Value][9]

Converts to this type from the input type.

[Source][238]§

### impl<K, V> [FromIterator][239]<[(K, V)][240]> for [Value][9]

where K: [Into][200]<[String][7]>, V: [Into][200]<[Value][9]>,

[Source][241]§

#### fn [from_iter][242]<I>(iter: I) -> [Value][9]

where I: [IntoIterator][243]<Item = [(K, V)][240]>,

Create a `Value::Object` by collecting an iterator of key-value pairs.

##### §Examples
[code] 
    use serde_json::Value;
    
    let v: Vec<_> = vec![("lorem", 40), ("ipsum", 2)];
    let x: Value = v.into_iter().collect();
[/code]

[Source][244]§

### impl<T> [FromIterator][239]<T> for [Value][9]

where T: [Into][200]<[Value][9]>,

[Source][245]§

#### fn [from_iter][242]<I>(iter: I) -> [Value][9]

where I: [IntoIterator][243]<Item = T>,

Create a `Value::Array` by collecting an iterator of array elements.

##### §Examples
[code] 
    use serde_json::Value;
    
    let v = std::iter::repeat(42).take(5);
    let x: Value = v.collect();
[/code]
[code] 
    use serde_json::Value;
    
    let v: Vec<_> = vec!["lorem", "ipsum", "dolor"];
    let x: Value = v.into_iter().collect();
[/code]
[code] 
    use std::iter::FromIterator;
    use serde_json::Value;
    
    let x: Value = Value::from_iter(vec!["lorem", "ipsum", "dolor"]);
[/code]

[Source][246]§

### impl [FromStr][247] for [Value][9]

[Source][248]§

#### type [Err][249] = [Error][83]

The associated error which can be returned from parsing.

[Source][250]§

#### fn [from_str][251](s: &[str][25]) -> [Result][57]<[Value][9], [Error][83]>

Parses a string `s` to return a value of this type. [Read more][251]

[Source][47]§

### impl [Hash][252] for [Value][9]

[Source][47]§

#### fn [hash][253]<__H>(&self, state: [&mut __H][254])

where __H: [Hasher][255],

Feeds this value into the given [`Hasher`][255]. [Read more][253]

1.3.0 · [Source][256]§

#### fn [hash_slice][257]<H>(data: &[Self], state: [&mut H][254])

where H: [Hasher][255], Self: [Sized][193],

Feeds a slice of this type into the given [`Hasher`][255]. [Read more][257]

[Source][258]§

### impl<I> [Index][259]<I> for [Value][9]

where I: [Index][15],

[Source][260]§

#### fn [index][261](&self, index: I) -> &[Value][9]

Index into a `serde_json::Value` using the syntax `value[0]` or `value["k"]`.

Returns `Value::Null` if the type of `self` does not match the type of the index, for example if the index is a string and `self` is an array or a number. Also returns `Value::Null` if the given key does not exist in the map or the given index is not within the bounds of the array.

For retrieving deeply nested values, you should have a look at the `Value::pointer` method.

##### §Examples
[code] 
    let data = json!({
        "x": {
            "y": ["z", "zz"]
        }
    });
    
    assert_eq!(data["x"]["y"], json!(["z", "zz"]));
    assert_eq!(data["x"]["y"][0], json!("z"));
    
    assert_eq!(data["a"], json!(null)); // returns null for undefined values
    assert_eq!(data["a"]["b"], json!(null)); // does not panic
[/code]

[Source][262]§

#### type [Output][263] = [Value][9]

The returned type after indexing.

[Source][264]§

### impl<I> [IndexMut][265]<I> for [Value][9]

where I: [Index][15],

[Source][266]§

#### fn [index_mut][267](&mut self, index: I) -> &mut [Value][9]

Write into a `serde_json::Value` using the syntax `value[0] = ...` or `value["k"] = ...`.

If the index is a number, the value must be an array of length bigger than the index. Indexing into a value that is not an array or an array that is too small will panic.

If the index is a string, the value must be an object or null which is treated like an empty object. If the key is not already present in the object, it will be inserted with a value of null. Indexing into a value that is neither an object nor null will panic.

##### §Examples
[code] 
    let mut data = json!({ "x": 0 });
    
    // replace an existing key
    data["x"] = json!(1);
    
    // insert a new key
    data["y"] = json!([false, false, false]);
    
    // replace an array value
    data["y"][0] = json!(true);
    
    // inserted a deeply nested key
    data["a"]["b"]["c"]["d"] = json!(true);
    
    println!("{}", data);
[/code]

[Source][268]§

### impl<'de> [IntoDeserializer][269]<'de, [Error][83]> for &'de [Value][9]

[Source][270]§

#### type [Deserializer][271] = &'de [Value][9]

The type of the deserializer being converted into.

[Source][272]§

#### fn [into_deserializer][273]( self, ) -> <&'de [Value][9] as [IntoDeserializer][269]<'de, [Error][83]>>::[Deserializer][274]

Convert this value into a deserializer.

[Source][275]§

### impl<'de> [IntoDeserializer][269]<'de, [Error][83]> for [Value][9]

[Source][276]§

#### type [Deserializer][271] = [Value][9]

The type of the deserializer being converted into.

[Source][277]§

#### fn [into_deserializer][273]( self, ) -> <[Value][9] as [IntoDeserializer][269]<'de, [Error][83]>>::[Deserializer][274]

Convert this value into a deserializer.

[Source][278]§

### impl [PartialEq][279]<&[str][25]> for [Value][9]

[Source][280]§

#### fn [eq][281](&self, other: &&[str][25]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][284]§

### impl [PartialEq][279]<[Value][9]> for &[str][25]

[Source][285]§

#### fn [eq][281](&self, other: &[Value][9]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][286]§

### impl [PartialEq][279]<[Value][9]> for [str][25]

[Source][287]§

#### fn [eq][281](&self, other: &[Value][9]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][288]§

### impl [PartialEq][279]<[String][7]> for [Value][9]

[Source][289]§

#### fn [eq][281](&self, other: &[String][7]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl<'a> [PartialEq][279]<[bool][5]> for &'a [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[bool][5]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl<'a> [PartialEq][279]<[bool][5]> for &'a mut [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[bool][5]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl [PartialEq][279]<[bool][5]> for [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[bool][5]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl<'a> [PartialEq][279]<[f32][226]> for &'a [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[f32][226]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl<'a> [PartialEq][279]<[f32][226]> for &'a mut [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[f32][226]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl [PartialEq][279]<[f32][226]> for [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[f32][226]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl<'a> [PartialEq][279]<[f64][36]> for &'a [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[f64][36]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl<'a> [PartialEq][279]<[f64][36]> for &'a mut [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[f64][36]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl [PartialEq][279]<[f64][36]> for [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[f64][36]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl<'a> [PartialEq][279]<[i16][231]> for &'a [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[i16][231]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl<'a> [PartialEq][279]<[i16][231]> for &'a mut [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[i16][231]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl [PartialEq][279]<[i16][231]> for [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[i16][231]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl<'a> [PartialEq][279]<[i32][232]> for &'a [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[i32][232]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl<'a> [PartialEq][279]<[i32][232]> for &'a mut [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[i32][232]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl [PartialEq][279]<[i32][232]> for [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[i32][232]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl<'a> [PartialEq][279]<[i64][32]> for &'a [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[i64][32]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl<'a> [PartialEq][279]<[i64][32]> for &'a mut [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[i64][32]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl [PartialEq][279]<[i64][32]> for [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[i64][32]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl<'a> [PartialEq][279]<[i8][233]> for &'a [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[i8][233]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl<'a> [PartialEq][279]<[i8][233]> for &'a mut [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[i8][233]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl [PartialEq][279]<[i8][233]> for [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[i8][233]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl<'a> [PartialEq][279]<[isize][234]> for &'a [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[isize][234]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl<'a> [PartialEq][279]<[isize][234]> for &'a mut [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[isize][234]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl [PartialEq][279]<[isize][234]> for [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[isize][234]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][291]§

### impl [PartialEq][279]<[str][25]> for [Value][9]

[Source][292]§

#### fn [eq][281](&self, other: &[str][25]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl<'a> [PartialEq][279]<[u16][235]> for &'a [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[u16][235]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl<'a> [PartialEq][279]<[u16][235]> for &'a mut [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[u16][235]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl [PartialEq][279]<[u16][235]> for [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[u16][235]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl<'a> [PartialEq][279]<[u32][236]> for &'a [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[u32][236]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl<'a> [PartialEq][279]<[u32][236]> for &'a mut [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[u32][236]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl [PartialEq][279]<[u32][236]> for [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[u32][236]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl<'a> [PartialEq][279]<[u64][34]> for &'a [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[u64][34]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl<'a> [PartialEq][279]<[u64][34]> for &'a mut [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[u64][34]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl [PartialEq][279]<[u64][34]> for [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[u64][34]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl<'a> [PartialEq][279]<[u8][237]> for &'a [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[u8][237]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl<'a> [PartialEq][279]<[u8][237]> for &'a mut [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[u8][237]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl [PartialEq][279]<[u8][237]> for [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[u8][237]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl<'a> [PartialEq][279]<[usize][138]> for &'a [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[usize][138]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl<'a> [PartialEq][279]<[usize][138]> for &'a mut [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[usize][138]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][290]§

### impl [PartialEq][279]<[usize][138]> for [Value][9]

[Source][290]§

#### fn [eq][281](&self, other: &[usize][138]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][47]§

### impl [PartialEq][279] for [Value][9]

[Source][47]§

#### fn [eq][281](&self, other: &[Value][9]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][282]§

#### fn [ne][283](&self, other: [&Rhs][254]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][293]§

### impl [Serialize][294] for [Value][9]

[Source][295]§

#### fn [serialize][296]<S>( &self, serializer: S, ) -> [Result][57]<<S as [Serializer][297]>::[Ok][298], <S as [Serializer][297]>::[Error][299]>

where S: [Serializer][297],

Serialize this value into the given Serde serializer. [Read more][296]

§

### impl<DB> [Type][300]<DB> for [Value][9]

where [Json][60]<[Value][9]>: [Type][300]<DB>, DB: [Database][61],

§

#### fn [type_info][301]() -> <DB as [Database][61]>::[TypeInfo][195]

Returns the canonical SQL type for this Rust type. [Read more][301]

§

#### fn [compatible][302](ty: &<DB as [Database][61]>::[TypeInfo][195]) -> [bool][5]

Determines if this Rust type is compatible with the given SQL type. [Read more][302]

[Source][47]§

### impl [Eq][303] for [Value][9]

[Source][47]§

### impl [StructuralPartialEq][304] for [Value][9]

## Auto Trait Implementations§

§

### impl [Freeze][305] for [Value][9]

§

### impl [RefUnwindSafe][306] for [Value][9]

§

### impl [Send][66] for [Value][9]

§

### impl [Sync][67] for [Value][9]

§

### impl [Unpin][307] for [Value][9]

§

### impl [UnwindSafe][308] for [Value][9]

## Blanket Implementations§

[Source][309]§

### impl<T> [Any][310] for T

where T: 'static + ?[Sized][193],

[Source][311]§

#### fn [type_id][312](&self) -> [TypeId][313]

Gets the `TypeId` of `self`. [Read more][312]

[Source][314]§

### impl<T> [Borrow][315]<T> for T

where T: ?[Sized][193],

[Source][316]§

#### fn [borrow][317](&self) -> [&T][254]

Immutably borrows from an owned value. [Read more][317]

[Source][318]§

### impl<T> [BorrowMut][319]<T> for T

where T: ?[Sized][193],

[Source][320]§

#### fn [borrow_mut][321](&mut self) -> [&mut T][254]

Mutably borrows from an owned value. [Read more][321]

[Source][322]§

### impl<T> [CloneToUninit][323] for T

where T: [Clone][48],

[Source][324]§

#### unsafe fn [clone_to_uninit][325](&self, dest: [*mut ][326][u8][237])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][325]

§

### impl<Q, K> Equivalent<K> for Q

where Q: [Eq][303] \+ ?[Sized][193], K: [Borrow][315]<Q> \+ ?[Sized][193],

§

#### fn equivalent(&self, key: [&K][254]) -> [bool][5]

Compare self to `key` and return `true` if they are equal.

§

### impl<Q, K> Equivalent<K> for Q

where Q: [Eq][303] \+ ?[Sized][193], K: [Borrow][315]<Q> \+ ?[Sized][193],

§

#### fn equivalent(&self, key: [&K][254]) -> [bool][5]

Checks if this value is equivalent to the given key. Read more

[Source][327]§

### impl<T> [From][198]<T> for T

[Source][328]§

#### fn [from][202](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][329] [`Span`][330], returning an `Instrumented` wrapper. Read more

[Source][331]§

### impl<T, U> [Into][200]<U> for T

where U: [From][198]<T>,

[Source][332]§

#### fn [into][333](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][198]<T> for U` chooses to do.

[Source][334]§

### impl<T> [IntoEither][335] for T

[Source][336]§

#### fn [into_either][337](self, into_left: [bool][5]) -> [Either][338]<Self, Self> ⓘ

Converts `self` into a [`Left`][339] variant of [`Either<Self, Self>`][338] if `into_left` is `true`. Converts `self` into a [`Right`][340] variant of [`Either<Self, Self>`][338] otherwise. [Read more][337]

[Source][341]§

#### fn [into_either_with][342]<F>(self, into_left: F) -> [Either][338]<Self, Self> ⓘ

where F: [FnOnce][343](&Self) -> [bool][5],

Converts `self` into a [`Left`][339] variant of [`Either<Self, Self>`][338] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][340] variant of [`Either<Self, Self>`][338] otherwise. [Read more][342]

[Source][344]§

### impl<T> [Same][345] for T

[Source][346]§

#### type [Output][347] = T

Should always be `Self`

[Source][348]§

### impl<T> [ToOwned][349] for T

where T: [Clone][48],

[Source][350]§

#### type [Owned][351] = T

The resulting type after obtaining ownership.

[Source][352]§

#### fn [to_owned][353](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][353]

[Source][354]§

#### fn [clone_into][355](&self, target: [&mut T][254])

Uses borrowed data to replace owned data, usually by cloning. [Read more][355]

[Source][356]§

### impl<T> [ToString][357] for T

where T: [Display][185] \+ ?[Sized][193],

[Source][358]§

#### fn [to_string][359](&self) -> [String][7]

Converts the given value to a `String`. [Read more][359]

[Source][360]§

### impl<T, U> [TryFrom][361]<U> for T

where U: [Into][200]<T>,

[Source][362]§

#### type [Error][363] = [Infallible][364]

The type returned in the event of a conversion error.

[Source][365]§

#### fn [try_from][366](value: U) -> [Result][57]<T, <T as [TryFrom][361]<U>>::[Error][367]>

Performs the conversion.

[Source][368]§

### impl<T, U> [TryInto][369]<U> for T

where U: [TryFrom][361]<T>,

[Source][370]§

#### type [Error][371] = <U as [TryFrom][361]<T>>::[Error][367]

The type returned in the event of a conversion error.

[Source][372]§

#### fn [try_into][373](self) -> [Result][57]<U, <U as [TryFrom][361]<T>>::[Error][367]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][200]<Dispatch>,

Attaches the provided [`Subscriber`][374] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][375] [`Subscriber`][374] to this type, returning a [`WithDispatch`] wrapper. Read more

[Source][376]§

### impl<T> [DeserializeOwned][377] for T

where T: for<'de> [Deserialize][75]<'de>,

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#116
   [5]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [6]: https://docs.rs/serde_json/1.0.149/serde_json/number/struct.Number.html (struct serde_json::number::Number)
   [7]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [8]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [9]: enum.JsonValue.html (enum sqlx::types::JsonValue)
   [10]: https://docs.rs/serde_json/1.0.149/serde_json/map/struct.Map.html (struct serde_json::map::Map)
   [11]: https://docs.rs/serde_json/1.0.149/serde_json/value/index.html (mod serde_json::value)
   [12]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#266
   [13]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#305
   [14]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [15]: https://docs.rs/serde_json/1.0.149/serde_json/value/index/trait.Index.html (trait serde_json::value::index::Index)
   [16]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#327
   [17]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#348
   [18]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#366
   [19]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#384
   [20]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#407
   [21]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#425
   [22]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#443
   [23]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#465
   [24]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#492
   [25]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [26]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#511
   [27]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#533
   [28]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#560
   [29]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#585
   [30]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#611
   [31]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#631
   [32]: https://doc.rust-lang.org/1.94.1/std/primitive.i64.html
   [33]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#650
   [34]: https://doc.rust-lang.org/1.94.1/std/primitive.u64.html
   [35]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#669
   [36]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html
   [37]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#691
   [38]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#708
   [39]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#730
   [40]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#746
   [41]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [42]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#779
   [43]: https://tools.ietf.org/html/rfc6901
   [44]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#834
   [45]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#861
   [46]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#875
   [47]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#115
   [48]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [49]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [50]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [51]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [52]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#178
   [53]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [54]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#179
   [55]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [56]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [57]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [58]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [59]: ../trait.Decode.html (trait sqlx::Decode)
   [60]: struct.Json.html (struct sqlx::types::Json)
   [61]: ../trait.Database.html (trait sqlx::Database)
   [62]: ../trait.Decode.html#tymethod.decode
   [63]: ../trait.Database.html#associatedtype.ValueRef (type sqlx::Database::ValueRef)
   [64]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [65]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [66]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [67]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [68]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#927
   [69]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [70]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#928
   [71]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [72]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#921
   [73]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#922
   [74]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#22
   [75]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html (trait serde_core::de::Deserialize)
   [76]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#24-26
   [77]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html#tymethod.deserialize
   [78]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html (trait serde_core::de::Deserializer)
   [79]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#associatedtype.Error (type serde_core::de::Deserializer::Error)
   [80]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#817
   [81]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#818
   [82]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#associatedtype.Error
   [83]: https://docs.rs/serde_json/1.0.149/serde_json/error/struct.Error.html (struct serde_json::error::Error)
   [84]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#820-822
   [85]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_any
   [86]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Visitor.html (trait serde_core::de::Visitor)
   [87]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Visitor.html#associatedtype.Value (type serde_core::de::Visitor::Value)
   [88]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#834
   [89]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_i8
   [90]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#835
   [91]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_i16
   [92]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#836
   [93]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_i32
   [94]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#837
   [95]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_i64
   [96]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#838
   [97]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#method.deserialize_i128
   [98]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#839
   [99]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_u8
   [100]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#840
   [101]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_u16
   [102]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#841
   [103]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_u32
   [104]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#842
   [105]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_u64
   [106]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#843
   [107]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#method.deserialize_u128
   [108]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#844
   [109]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_f32
   [110]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#845
   [111]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_f64
   [112]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#847-849
   [113]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_option
   [114]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#857-864
   [115]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_enum
   [116]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#880-886
   [117]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_newtype_struct
   [118]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#901-903
   [119]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_bool
   [120]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#911-913
   [121]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_char
   [122]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#918-920
   [123]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_str
   [124]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#928-930
   [125]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_string
   [126]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#935-937
   [127]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_bytes
   [128]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#946-948
   [129]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_byte_buf
   [130]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#953-955
   [131]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_unit
   [132]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#963-965
   [133]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_unit_struct
   [134]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#970-972
   [135]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_seq
   [136]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#980-982
   [137]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_tuple
   [138]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [139]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#987-994
   [140]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_tuple_struct
   [141]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#999-1001
   [142]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_map
   [143]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#1009-1016
   [144]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_struct
   [145]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#1025-1027
   [146]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_identifier
   [147]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#1032-1034
   [148]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_ignored_any
   [149]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#1253
   [150]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#method.is_human_readable
   [151]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#282
   [152]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#283
   [153]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#286-288
   [154]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#303
   [155]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#304
   [156]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#305
   [157]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#306
   [158]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#307
   [159]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#308
   [160]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#309
   [161]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#310
   [162]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#311
   [163]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#312
   [164]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#313
   [165]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#314
   [166]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#317-319
   [167]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#328-335
   [168]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#351-357
   [169]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#372-374
   [170]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#382-384
   [171]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#389-391
   [172]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#396-398
   [173]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#407-409
   [174]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#414-416
   [175]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#426-428
   [176]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#436-438
   [177]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#443-445
   [178]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#453-455
   [179]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#460-467
   [180]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#472-474
   [181]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#482-489
   [182]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#498-500
   [183]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#505-507
   [184]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#197
   [185]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [186]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/mod.rs.html#222
   [187]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html#tymethod.fmt
   [188]: ../trait.Encode.html (trait sqlx::Encode)
   [189]: ../trait.Encode.html#tymethod.encode_by_ref
   [190]: ../trait.Database.html#associatedtype.ArgumentBuffer (type sqlx::Database::ArgumentBuffer)
   [191]: ../encode/enum.IsNull.html (enum sqlx::encode::IsNull)
   [192]: ../trait.Encode.html#method.encode
   [193]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [194]: ../trait.Encode.html#method.produces
   [195]: ../trait.Database.html#associatedtype.TypeInfo (type sqlx::Database::TypeInfo)
   [196]: ../trait.Encode.html#method.size_hint
   [197]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#192
   [198]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [199]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html
   [200]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [201]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#203
   [202]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [203]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#96
   [204]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#107
   [205]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#186
   [206]: https://doc.rust-lang.org/1.94.1/std/primitive.array.html
   [207]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#187
   [208]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#258
   [209]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#269
   [210]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#112
   [211]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [212]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#132
   [213]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#153
   [214]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#165
   [215]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#137
   [216]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#148
   [217]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#274-276
   [218]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#278
   [219]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#80
   [220]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#91
   [221]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#170
   [222]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#181
   [223]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#64
   [224]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#75
   [225]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#30
   [226]: https://doc.rust-lang.org/1.94.1/std/primitive.f32.html
   [227]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#42
   [228]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#47
   [229]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#59
   [230]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#20-23
   [231]: https://doc.rust-lang.org/1.94.1/std/primitive.i16.html
   [232]: https://doc.rust-lang.org/1.94.1/std/primitive.i32.html
   [233]: https://doc.rust-lang.org/1.94.1/std/primitive.i8.html
   [234]: https://doc.rust-lang.org/1.94.1/std/primitive.isize.html
   [235]: https://doc.rust-lang.org/1.94.1/std/primitive.u16.html
   [236]: https://doc.rust-lang.org/1.94.1/std/primitive.u32.html
   [237]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [238]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#238
   [239]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.FromIterator.html (trait core::iter::traits::collect::FromIterator)
   [240]: https://doc.rust-lang.org/1.94.1/std/primitive.tuple.html
   [241]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#249
   [242]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.FromIterator.html#tymethod.from_iter
   [243]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.IntoIterator.html (trait core::iter::traits::collect::IntoIterator)
   [244]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#208
   [245]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/from.rs.html#233
   [246]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#155
   [247]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html (trait core::str::traits::FromStr)
   [248]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#156
   [249]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#associatedtype.Err
   [250]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#157
   [251]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#tymethod.from_str
   [252]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html (trait core::hash::Hash)
   [253]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#tymethod.hash
   [254]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [255]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hasher.html (trait core::hash::Hasher)
   [256]: https://doc.rust-lang.org/1.94.1/src/core/hash/mod.rs.html#235-237
   [257]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#method.hash_slice
   [258]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/index.rs.html#178-180
   [259]: https://doc.rust-lang.org/1.94.1/core/ops/index/trait.Index.html (trait core::ops::index::Index)
   [260]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/index.rs.html#212
   [261]: https://doc.rust-lang.org/1.94.1/core/ops/index/trait.Index.html#tymethod.index
   [262]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/index.rs.html#182
   [263]: https://doc.rust-lang.org/1.94.1/core/ops/index/trait.Index.html#associatedtype.Output
   [264]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/index.rs.html#218-220
   [265]: https://doc.rust-lang.org/1.94.1/core/ops/index/trait.IndexMut.html (trait core::ops::index::IndexMut)
   [266]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/index.rs.html#255
   [267]: https://doc.rust-lang.org/1.94.1/core/ops/index/trait.IndexMut.html#tymethod.index_mut
   [268]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#541
   [269]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.IntoDeserializer.html (trait serde_core::de::IntoDeserializer)
   [270]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#542
   [271]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.IntoDeserializer.html#associatedtype.Deserializer
   [272]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#544
   [273]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.IntoDeserializer.html#tymethod.into_deserializer
   [274]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.IntoDeserializer.html#associatedtype.Deserializer (type serde_core::de::IntoDeserializer::Deserializer)
   [275]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#533
   [276]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#534
   [277]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/de.rs.html#536
   [278]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/partial_eq.rs.html#37
   [279]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [280]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/partial_eq.rs.html#38
   [281]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [282]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [283]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [284]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/partial_eq.rs.html#49
   [285]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/partial_eq.rs.html#50
   [286]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/partial_eq.rs.html#43
   [287]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/partial_eq.rs.html#44
   [288]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/partial_eq.rs.html#55
   [289]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/partial_eq.rs.html#56
   [290]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/partial_eq.rs.html#97-103
   [291]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/partial_eq.rs.html#31
   [292]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/partial_eq.rs.html#32
   [293]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/ser.rs.html#11
   [294]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [295]: https://docs.rs/serde_json/1.0.149/src/serde_json/value/ser.rs.html#13-15
   [296]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html#tymethod.serialize
   [297]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html (trait serde_core::ser::Serializer)
   [298]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Ok (type serde_core::ser::Serializer::Ok)
   [299]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Error (type serde_core::ser::Serializer::Error)
   [300]: ../trait.Type.html (trait sqlx::Type)
   [301]: ../trait.Type.html#tymethod.type_info
   [302]: ../trait.Type.html#method.compatible
   [303]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [304]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [305]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [306]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [307]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [308]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [309]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [310]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [311]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [312]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [313]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [314]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [315]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [316]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [317]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [318]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [319]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [320]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [321]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [322]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [323]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [324]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [325]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [326]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [327]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [328]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [329]: super::Span::current()
   [330]: crate::Span
   [331]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [332]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [333]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [334]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [335]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [336]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [337]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [338]: ../enum.Either.html (enum sqlx::Either)
   [339]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [340]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [341]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [342]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [343]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [344]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [345]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [346]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [347]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [348]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [349]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [350]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [351]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [352]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [353]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [354]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [355]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [356]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2893
   [357]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html (trait alloc::string::ToString)
   [358]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2895
   [359]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html#tymethod.to_string
   [360]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [361]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [362]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [363]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [364]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [365]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [366]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [367]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [368]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [369]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [370]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [371]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [372]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [373]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [374]: super::Subscriber
   [375]: dispatcher#setting-the-default-subscriber
   [376]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#633
   [377]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)

