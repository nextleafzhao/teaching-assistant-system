## CommandItem

[![logo][1]][2]

## [tauri][2]2.10.3

## CommandItem

### Fields

  * acl
  * key
  * message
  * name
  * plugin



### Trait Implementations

  * Deserializer<'de>



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
  * From<T>
  * Into<U>
  * TryFrom<U>
  * TryInto<U>



## [In tauri::ipc][3]

[tauri][4]::[ipc][3]

# Struct CommandItem Copy item path

[Source][5]
[code] 
    pub struct CommandItem<'a, R: [Runtime][6]> {
        pub plugin: [Option][7]<&'static [str][8]>,
        pub name: &'static [str][8],
        pub key: &'static [str][8],
        pub message: &'a [InvokeMessage][9]<R>,
        pub acl: &'a [Option][7]<[Vec][10]<ResolvedCommand>>,
    }
[/code]

Expand description

Represents a custom command.

## Fields§

§`plugin: [Option][7]<&'static [str][8]>`

Name of the plugin if this command targets one.

§`name: &'static [str][8]`

The name of the command, e.g. `handler` on `#[command] fn handler(value: u64)`

§`key: &'static [str][8]`

The key of the command item, e.g. `value` on `#[command] fn handler(value: u64)`

§`message: &'a [InvokeMessage][9]<R>`

The [`InvokeMessage`][9] that was passed to this command.

§`acl: &'a [Option][7]<[Vec][10]<ResolvedCommand>>`

The resolved ACL for this command.

## Trait Implementations§

[Source][11]§

### impl<'de, R: [Runtime][6]> [Deserializer][12]<'de> for [CommandItem][13]<'de, R>

A [`Deserializer`][12] wrapper around [`CommandItem`][13].

If the key doesn’t exist, an error will be returned if the deserialized type is not expecting an optional item. If the key does exist, the value will be called with [`Value`][14]’s [`Deserializer`][12] implementation.

[Source][15]§

#### type [Error][16] = [Error][17]

The error type that can be returned if some error occurs during deserialization.

[Source][18]§

#### fn [deserialize_any][19]<V: [Visitor][20]<'de>>( self, visitor: V, ) -> [Result][21]<V::[Value][22], Self::[Error][23]>

Require the `Deserializer` to figure out how to drive the visitor based on what data type is in the input. [Read more][19]

[Source][24]§

#### fn [deserialize_bool][25]<V: [Visitor][20]<'de>>( self, visitor: V, ) -> [Result][21]<V::[Value][22], Self::[Error][23]>

Hint that the `Deserialize` type is expecting a `bool` value.

[Source][26]§

#### fn [deserialize_i8][27]<V: [Visitor][20]<'de>>( self, visitor: V, ) -> [Result][21]<V::[Value][22], Self::[Error][23]>

Hint that the `Deserialize` type is expecting an `i8` value.

[Source][28]§

#### fn [deserialize_i16][29]<V: [Visitor][20]<'de>>( self, visitor: V, ) -> [Result][21]<V::[Value][22], Self::[Error][23]>

Hint that the `Deserialize` type is expecting an `i16` value.

[Source][30]§

#### fn [deserialize_i32][31]<V: [Visitor][20]<'de>>( self, visitor: V, ) -> [Result][21]<V::[Value][22], Self::[Error][23]>

Hint that the `Deserialize` type is expecting an `i32` value.

[Source][32]§

#### fn [deserialize_i64][33]<V: [Visitor][20]<'de>>( self, visitor: V, ) -> [Result][21]<V::[Value][22], Self::[Error][23]>

Hint that the `Deserialize` type is expecting an `i64` value.

[Source][34]§

#### fn [deserialize_u8][35]<V: [Visitor][20]<'de>>( self, visitor: V, ) -> [Result][21]<V::[Value][22], Self::[Error][23]>

Hint that the `Deserialize` type is expecting a `u8` value.

[Source][36]§

#### fn [deserialize_u16][37]<V: [Visitor][20]<'de>>( self, visitor: V, ) -> [Result][21]<V::[Value][22], Self::[Error][23]>

Hint that the `Deserialize` type is expecting a `u16` value.

[Source][38]§

#### fn [deserialize_u32][39]<V: [Visitor][20]<'de>>( self, visitor: V, ) -> [Result][21]<V::[Value][22], Self::[Error][23]>

Hint that the `Deserialize` type is expecting a `u32` value.

[Source][40]§

#### fn [deserialize_u64][41]<V: [Visitor][20]<'de>>( self, visitor: V, ) -> [Result][21]<V::[Value][22], Self::[Error][23]>

Hint that the `Deserialize` type is expecting a `u64` value.

[Source][42]§

#### fn [deserialize_f32][43]<V: [Visitor][20]<'de>>( self, visitor: V, ) -> [Result][21]<V::[Value][22], Self::[Error][23]>

Hint that the `Deserialize` type is expecting a `f32` value.

[Source][44]§

#### fn [deserialize_f64][45]<V: [Visitor][20]<'de>>( self, visitor: V, ) -> [Result][21]<V::[Value][22], Self::[Error][23]>

Hint that the `Deserialize` type is expecting a `f64` value.

[Source][46]§

#### fn [deserialize_char][47]<V: [Visitor][20]<'de>>( self, visitor: V, ) -> [Result][21]<V::[Value][22], Self::[Error][23]>

Hint that the `Deserialize` type is expecting a `char` value.

[Source][48]§

#### fn [deserialize_str][49]<V: [Visitor][20]<'de>>( self, visitor: V, ) -> [Result][21]<V::[Value][22], Self::[Error][23]>

Hint that the `Deserialize` type is expecting a string value and does not benefit from taking ownership of buffered data owned by the `Deserializer`. [Read more][49]

[Source][50]§

#### fn [deserialize_string][51]<V: [Visitor][20]<'de>>( self, visitor: V, ) -> [Result][21]<V::[Value][22], Self::[Error][23]>

Hint that the `Deserialize` type is expecting a string value and would benefit from taking ownership of buffered data owned by the `Deserializer`. [Read more][51]

[Source][52]§

#### fn [deserialize_bytes][53]<V: [Visitor][20]<'de>>( self, visitor: V, ) -> [Result][21]<V::[Value][22], Self::[Error][23]>

Hint that the `Deserialize` type is expecting a byte array and does not benefit from taking ownership of buffered data owned by the `Deserializer`. [Read more][53]

[Source][54]§

#### fn [deserialize_byte_buf][55]<V: [Visitor][20]<'de>>( self, visitor: V, ) -> [Result][21]<V::[Value][22], Self::[Error][23]>

Hint that the `Deserialize` type is expecting a byte array and would benefit from taking ownership of buffered data owned by the `Deserializer`. [Read more][55]

[Source][56]§

#### fn [deserialize_option][57]<V: [Visitor][20]<'de>>( self, visitor: V, ) -> [Result][21]<V::[Value][22], Self::[Error][23]>

Hint that the `Deserialize` type is expecting an optional value. [Read more][57]

[Source][58]§

#### fn [deserialize_unit][59]<V: [Visitor][20]<'de>>( self, visitor: V, ) -> [Result][21]<V::[Value][22], Self::[Error][23]>

Hint that the `Deserialize` type is expecting a unit value.

[Source][60]§

#### fn [deserialize_unit_struct][61]<V: [Visitor][20]<'de>>( self, name: &'static [str][8], visitor: V, ) -> [Result][21]<V::[Value][22], Self::[Error][23]>

Hint that the `Deserialize` type is expecting a unit struct with a particular name.

[Source][62]§

#### fn [deserialize_newtype_struct][63]<V: [Visitor][20]<'de>>( self, name: &'static [str][8], visitor: V, ) -> [Result][21]<V::[Value][22], Self::[Error][23]>

Hint that the `Deserialize` type is expecting a newtype struct with a particular name.

[Source][64]§

#### fn [deserialize_seq][65]<V: [Visitor][20]<'de>>( self, visitor: V, ) -> [Result][21]<V::[Value][22], Self::[Error][23]>

Hint that the `Deserialize` type is expecting a sequence of values.

[Source][66]§

#### fn [deserialize_tuple][67]<V: [Visitor][20]<'de>>( self, len: [usize][68], visitor: V, ) -> [Result][21]<V::[Value][22], Self::[Error][23]>

Hint that the `Deserialize` type is expecting a sequence of values and knows how many values there are without looking at the serialized data.

[Source][69]§

#### fn [deserialize_tuple_struct][70]<V: [Visitor][20]<'de>>( self, name: &'static [str][8], len: [usize][68], visitor: V, ) -> [Result][21]<V::[Value][22], Self::[Error][23]>

Hint that the `Deserialize` type is expecting a tuple struct with a particular name and number of fields.

[Source][71]§

#### fn [deserialize_map][72]<V: [Visitor][20]<'de>>( self, visitor: V, ) -> [Result][21]<V::[Value][22], Self::[Error][23]>

Hint that the `Deserialize` type is expecting a map of key-value pairs.

[Source][73]§

#### fn [deserialize_struct][74]<V: [Visitor][20]<'de>>( self, name: &'static [str][8], fields: &'static [&'static [str][8]], visitor: V, ) -> [Result][21]<V::[Value][22], Self::[Error][23]>

Hint that the `Deserialize` type is expecting a struct with a particular name and fields.

[Source][75]§

#### fn [deserialize_enum][76]<V: [Visitor][20]<'de>>( self, name: &'static [str][8], fields: &'static [&'static [str][8]], visitor: V, ) -> [Result][21]<V::[Value][22], Self::[Error][23]>

Hint that the `Deserialize` type is expecting an enum value with a particular name and possible variants.

[Source][77]§

#### fn [deserialize_identifier][78]<V: [Visitor][20]<'de>>( self, visitor: V, ) -> [Result][21]<V::[Value][22], Self::[Error][23]>

Hint that the `Deserialize` type is expecting the name of a struct field or the discriminant of an enum variant.

[Source][79]§

#### fn [deserialize_ignored_any][80]<V: [Visitor][20]<'de>>( self, visitor: V, ) -> [Result][21]<V::[Value][22], Self::[Error][23]>

Hint that the `Deserialize` type needs to deserialize a value whose type doesn’t matter because it is ignored. [Read more][80]

[Source][81]§

#### fn [deserialize_i128][82]<V>( self, visitor: V, ) -> [Result][21]<<V as [Visitor][20]<'de>>::[Value][22], Self::[Error][23]>

where V: [Visitor][20]<'de>,

Hint that the `Deserialize` type is expecting an `i128` value. [Read more][82]

[Source][83]§

#### fn [deserialize_u128][84]<V>( self, visitor: V, ) -> [Result][21]<<V as [Visitor][20]<'de>>::[Value][22], Self::[Error][23]>

where V: [Visitor][20]<'de>,

Hint that the `Deserialize` type is expecting an `u128` value. [Read more][84]

[Source][85]§

#### fn [is_human_readable][86](&self) -> [bool][87]

Determine whether `Deserialize` implementations should expect to deserialize their human-readable form. [Read more][86]

## Auto Trait Implementations§

§

### impl<'a, R> [Freeze][88] for [CommandItem][13]<'a, R>

§

### impl<'a, R> ![RefUnwindSafe][89] for [CommandItem][13]<'a, R>

§

### impl<'a, R> [Send][90] for [CommandItem][13]<'a, R>

§

### impl<'a, R> [Sync][91] for [CommandItem][13]<'a, R>

§

### impl<'a, R> [Unpin][92] for [CommandItem][13]<'a, R>

§

### impl<'a, R> ![UnwindSafe][93] for [CommandItem][13]<'a, R>

## Blanket Implementations§

[Source][94]§

### impl<T> [Any][95] for T

where T: 'static + ?[Sized][96],

[Source][97]§

#### fn [type_id][98](&self) -> [TypeId][99]

Gets the `TypeId` of `self`. [Read more][98]

[Source][100]§

### impl<T> [Borrow][101]<T> for T

where T: ?[Sized][96],

[Source][102]§

#### fn [borrow][103](&self) -> [&T][104]

Immutably borrows from an owned value. [Read more][103]

[Source][105]§

### impl<T> [BorrowMut][106]<T> for T

where T: ?[Sized][96],

[Source][107]§

#### fn [borrow_mut][108](&mut self) -> [&mut T][104]

Mutably borrows from an owned value. [Read more][108]

[Source][109]§

### impl<T> [From][110]<T> for T

[Source][111]§

#### fn [from][112](t: T) -> T

Returns the argument unchanged.

[Source][113]§

### impl<T, U> [Into][114]<U> for T

where U: [From][110]<T>,

[Source][115]§

#### fn [into][116](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][110]<T> for U` chooses to do.

[Source][117]§

### impl<T, U> [TryFrom][118]<U> for T

where U: [Into][114]<T>,

[Source][119]§

#### type [Error][120] = [Infallible][121]

The type returned in the event of a conversion error.

[Source][122]§

#### fn [try_from][123](value: U) -> [Result][21]<T, <T as [TryFrom][118]<U>>::[Error][124]>

Performs the conversion.

[Source][125]§

### impl<T, U> [TryInto][126]<U> for T

where U: [TryFrom][118]<T>,

[Source][127]§

#### type [Error][128] = <U as [TryFrom][118]<T>>::[Error][124]

The type returned in the event of a conversion error.

[Source][129]§

#### fn [try_into][130](self) -> [Result][21]<U, <U as [TryFrom][118]<T>>::[Error][124]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/ipc/command.rs.html#22-37
   [6]: ../trait.Runtime.html (trait tauri::Runtime)
   [7]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [8]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [9]: struct.InvokeMessage.html (struct tauri::ipc::InvokeMessage)
   [10]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [11]: ../../src/tauri/ipc/command.rs.html#113-178
   [12]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html (trait serde_core::de::Deserializer)
   [13]: struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [14]: https://docs.rs/serde_json/1.0.149/serde_json/value/enum.Value.html (enum serde_json::value::Value)
   [15]: ../../src/tauri/ipc/command.rs.html#114
   [16]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#associatedtype.Error
   [17]: https://docs.rs/serde_json/1.0.149/serde_json/error/struct.Error.html (struct serde_json::error::Error)
   [18]: ../../src/tauri/ipc/command.rs.html#116
   [19]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_any
   [20]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Visitor.html (trait serde_core::de::Visitor)
   [21]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [22]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Visitor.html#associatedtype.Value (type serde_core::de::Visitor::Value)
   [23]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#associatedtype.Error (type serde_core::de::Deserializer::Error)
   [24]: ../../src/tauri/ipc/command.rs.html#117
   [25]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_bool
   [26]: ../../src/tauri/ipc/command.rs.html#118
   [27]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_i8
   [28]: ../../src/tauri/ipc/command.rs.html#119
   [29]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_i16
   [30]: ../../src/tauri/ipc/command.rs.html#120
   [31]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_i32
   [32]: ../../src/tauri/ipc/command.rs.html#121
   [33]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_i64
   [34]: ../../src/tauri/ipc/command.rs.html#122
   [35]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_u8
   [36]: ../../src/tauri/ipc/command.rs.html#123
   [37]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_u16
   [38]: ../../src/tauri/ipc/command.rs.html#124
   [39]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_u32
   [40]: ../../src/tauri/ipc/command.rs.html#125
   [41]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_u64
   [42]: ../../src/tauri/ipc/command.rs.html#126
   [43]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_f32
   [44]: ../../src/tauri/ipc/command.rs.html#127
   [45]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_f64
   [46]: ../../src/tauri/ipc/command.rs.html#128
   [47]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_char
   [48]: ../../src/tauri/ipc/command.rs.html#129
   [49]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_str
   [50]: ../../src/tauri/ipc/command.rs.html#130
   [51]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_string
   [52]: ../../src/tauri/ipc/command.rs.html#131
   [53]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_bytes
   [54]: ../../src/tauri/ipc/command.rs.html#132
   [55]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_byte_buf
   [56]: ../../src/tauri/ipc/command.rs.html#134-145
   [57]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_option
   [58]: ../../src/tauri/ipc/command.rs.html#147
   [59]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_unit
   [60]: ../../src/tauri/ipc/command.rs.html#148
   [61]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_unit_struct
   [62]: ../../src/tauri/ipc/command.rs.html#149
   [63]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_newtype_struct
   [64]: ../../src/tauri/ipc/command.rs.html#150
   [65]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_seq
   [66]: ../../src/tauri/ipc/command.rs.html#151
   [67]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_tuple
   [68]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [69]: ../../src/tauri/ipc/command.rs.html#153-158
   [70]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_tuple_struct
   [71]: ../../src/tauri/ipc/command.rs.html#160
   [72]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_map
   [73]: ../../src/tauri/ipc/command.rs.html#162-167
   [74]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_struct
   [75]: ../../src/tauri/ipc/command.rs.html#169-174
   [76]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_enum
   [77]: ../../src/tauri/ipc/command.rs.html#176
   [78]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_identifier
   [79]: ../../src/tauri/ipc/command.rs.html#177
   [80]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#tymethod.deserialize_ignored_any
   [81]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#991-993
   [82]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#method.deserialize_i128
   [83]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#1022-1024
   [84]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#method.deserialize_u128
   [85]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#1253
   [86]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#method.is_human_readable
   [87]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [88]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [89]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [90]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [91]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [92]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [93]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [94]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [95]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [96]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [97]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [98]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [99]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [100]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [101]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [102]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [103]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [104]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [105]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [106]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [107]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [108]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [109]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [110]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [111]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [112]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [113]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [114]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [115]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [116]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [117]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [118]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [119]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [120]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [121]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [122]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [123]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [124]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [125]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [126]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [127]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [128]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [129]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [130]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

