## Color

[![logo][1]][2]

## [tauri][2]2.10.3

## Color

### Tuple Fields

  * 0
  * 1
  * 2
  * 3



### Trait Implementations

  * Clone
  * Copy
  * Debug
  * Default
  * Deserialize<'de>
  * Eq
  * From<(u8, u8, u8)>
  * From<(u8, u8, u8, u8)>
  * From<[u8; 3]>
  * From<[u8; 4]>
  * FromStr
  * PartialEq
  * Serialize
  * StructuralPartialEq



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
  * CommandArg<'de, R>
  * DeserializeOwned
  * From<T>
  * Into<U>
  * IpcResponse
  * ScopeObject
  * Serialize
  * ToOwned
  * TryFrom<U>
  * TryInto<U>
  * UserEvent



## [In tauri::window][3]

[tauri][4]::[window][3]

# Struct Color Copy item path
[code]
    pub struct Color(pub [u8][5], pub [u8][5], pub [u8][5], pub [u8][5]);
[/code]

Expand description

A tuple struct of RGBA colors. Each value has minimum of 0 and maximum of 255.

## Tuple Fields§

§`0: [u8][5]`§`1: [u8][5]`§`2: [u8][5]`§`3: [u8][5]`

## Trait Implementations§

§

### impl [Clone][6] for [Color][7]

§

#### fn [clone][8](&self) -> [Color][7]

Returns a duplicate of the value. [Read more][8]

1.0.0 · [Source][9]§

#### fn [clone_from][10](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][10]

§

### impl [Debug][11] for [Color][7]

§

#### fn [fmt][12](&self, f: &mut [Formatter][13]<'_>) -> [Result][14]<[()][15], [Error][16]>

Formats the value using the given formatter. [Read more][12]

§

### impl [Default][17] for [Color][7]

§

#### fn [default][18]() -> [Color][7]

Returns the “default value” for a type. [Read more][18]

§

### impl<'de> [Deserialize][19]<'de> for [Color][7]

§

#### fn [deserialize][20]<D>( deserializer: D, ) -> [Result][14]<[Color][7], <D as [Deserializer][21]<'de>>::[Error][22]>

where D: [Deserializer][21]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][20]

§

### impl [From][23]<[[u8][5]; [3][24]]> for [Color][7]

§

#### fn [from][25](value: [[u8][5]; [3][24]]) -> [Color][7]

Converts to this type from the input type.

§

### impl [From][23]<[[u8][5]; [4][24]]> for [Color][7]

§

#### fn [from][25](value: [[u8][5]; [4][24]]) -> [Color][7]

Converts to this type from the input type.

§

### impl [From][23]<([u8][5], [u8][5], [u8][5])> for [Color][7]

§

#### fn [from][25](value: ([u8][5], [u8][5], [u8][5])) -> [Color][7]

Converts to this type from the input type.

§

### impl [From][23]<([u8][5], [u8][5], [u8][5], [u8][5])> for [Color][7]

§

#### fn [from][25](value: ([u8][5], [u8][5], [u8][5], [u8][5])) -> [Color][7]

Converts to this type from the input type.

§

### impl [FromStr][26] for [Color][7]

§

#### type [Err][27] = [String][28]

The associated error which can be returned from parsing.

§

#### fn [from_str][29](color: &[str][30]) -> [Result][14]<[Color][7], <[Color][7] as [FromStr][26]>::[Err][31]>

Parses a string `s` to return a value of this type. [Read more][29]

§

### impl [PartialEq][32] for [Color][7]

§

#### fn [eq][33](&self, other: &[Color][7]) -> [bool][34]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][35]§

#### fn [ne][36](&self, other: [&Rhs][37]) -> [bool][34]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl [Serialize][38] for [Color][7]

§

#### fn [serialize][39]<__S>( &self, __serializer: __S, ) -> [Result][14]<<__S as [Serializer][40]>::[Ok][41], <__S as [Serializer][40]>::[Error][42]>

where __S: [Serializer][40],

Serialize this value into the given Serde serializer. [Read more][39]

§

### impl [Copy][43] for [Color][7]

§

### impl [Eq][44] for [Color][7]

§

### impl [StructuralPartialEq][45] for [Color][7]

## Auto Trait Implementations§

§

### impl [Freeze][46] for [Color][7]

§

### impl [RefUnwindSafe][47] for [Color][7]

§

### impl [Send][48] for [Color][7]

§

### impl [Sync][49] for [Color][7]

§

### impl [Unpin][50] for [Color][7]

§

### impl [UnwindSafe][51] for [Color][7]

## Blanket Implementations§

[Source][52]§

### impl<T> [Any][53] for T

where T: 'static + ?[Sized][54],

[Source][55]§

#### fn [type_id][56](&self) -> [TypeId][57]

Gets the `TypeId` of `self`. [Read more][56]

[Source][58]§

### impl<T> [Borrow][59]<T> for T

where T: ?[Sized][54],

[Source][60]§

#### fn [borrow][61](&self) -> [&T][37]

Immutably borrows from an owned value. [Read more][61]

[Source][62]§

### impl<T> [BorrowMut][63]<T> for T

where T: ?[Sized][54],

[Source][64]§

#### fn [borrow_mut][65](&mut self) -> [&mut T][37]

Mutably borrows from an owned value. [Read more][65]

[Source][66]§

### impl<T> [CloneToUninit][67] for T

where T: [Clone][6],

[Source][68]§

#### unsafe fn [clone_to_uninit][69](&self, dest: [*mut ][70][u8][5])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][69]

[Source][71]§

### impl<'de, D, R> [CommandArg][72]<'de, R> for D

where D: [Deserialize][19]<'de>, R: [Runtime][73],

[Source][74]§

#### fn [from_command][75](command: [CommandItem][76]<'de, R>) -> [Result][14]<D, [InvokeError][77]>

Derives an instance of `Self` from the [`CommandItem`][76]. [Read more][75]

[Source][78]§

### impl<T> [From][23]<T> for T

[Source][79]§

#### fn [from][25](t: T) -> T

Returns the argument unchanged.

[Source][80]§

### impl<T, U> [Into][81]<U> for T

where U: [From][23]<T>,

[Source][82]§

#### fn [into][83](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][23]<T> for U` chooses to do.

[Source][84]§

### impl<T> [IpcResponse][85] for T

where T: [Serialize][38],

[Source][86]§

#### fn [body][87](self) -> [Result][14]<[InvokeResponseBody][88], [Error][89]>

Resolve the IPC response body.

[Source][90]§

### impl<T> [ScopeObject][91] for T

where T: [Send][48] \+ [Sync][49] \+ [Debug][11] \+ [DeserializeOwned][92] \+ 'static,

[Source][93]§

#### type [Error][94] = [Error][95]

The error type.

[Source][96]§

#### fn [deserialize][97]<R>( _app: &[AppHandle][98]<R>, raw: Value, ) -> [Result][14]<T, <T as [ScopeObject][91]>::[Error][99]>

where R: [Runtime][73],

Deserialize the raw scope value.

[Source][100]§

### impl<T> [Serialize][101] for T

where T: [Serialize][38] \+ ?[Sized][54],

[Source][102]§

#### fn [erased_serialize][103](&self, serializer: &mut dyn [Serializer][104]) -> [Result][14]<[()][15], [Error][105]>

[Source][106]§

#### fn [do_erased_serialize][107]( &self, serializer: &mut dyn [Serializer][104], ) -> [Result][14]<[()][15], ErrorImpl>

[Source][108]§

### impl<T> [ToOwned][109] for T

where T: [Clone][6],

[Source][110]§

#### type [Owned][111] = T

The resulting type after obtaining ownership.

[Source][112]§

#### fn [to_owned][113](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][113]

[Source][114]§

#### fn [clone_into][115](&self, target: [&mut T][37])

Uses borrowed data to replace owned data, usually by cloning. [Read more][115]

[Source][116]§

### impl<T, U> [TryFrom][117]<U> for T

where U: [Into][81]<T>,

[Source][118]§

#### type [Error][119] = [Infallible][120]

The type returned in the event of a conversion error.

[Source][121]§

#### fn [try_from][122](value: U) -> [Result][14]<T, <T as [TryFrom][117]<U>>::[Error][123]>

Performs the conversion.

[Source][124]§

### impl<T, U> [TryInto][125]<U> for T

where U: [TryFrom][117]<T>,

[Source][126]§

#### type [Error][127] = <U as [TryFrom][117]<T>>::[Error][123]

The type returned in the event of a conversion error.

[Source][128]§

#### fn [try_into][129](self) -> [Result][14]<U, <U as [TryFrom][117]<T>>::[Error][123]>

Performs the conversion.

[Source][130]§

### impl<T> [DeserializeOwned][92] for T

where T: for<'de> [Deserialize][19]<'de>,

§

### impl<T> UserEvent for T

where T: [Debug][11] \+ [Clone][6] \+ [Send][48] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [6]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [7]: ../webview/struct.Color.html (struct tauri::webview::Color)
   [8]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [9]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [10]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [11]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [12]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [13]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [14]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [15]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [16]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [17]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [18]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [19]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html (trait serde_core::de::Deserialize)
   [20]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html#tymethod.deserialize
   [21]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html (trait serde_core::de::Deserializer)
   [22]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#associatedtype.Error (type serde_core::de::Deserializer::Error)
   [23]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [24]: https://doc.rust-lang.org/1.94.1/std/primitive.array.html
   [25]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [26]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html (trait core::str::traits::FromStr)
   [27]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#associatedtype.Err
   [28]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [29]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#tymethod.from_str
   [30]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [31]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#associatedtype.Err (type core::str::traits::FromStr::Err)
   [32]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [33]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [34]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [35]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [36]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [37]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [38]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [39]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html#tymethod.serialize
   [40]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html (trait serde_core::ser::Serializer)
   [41]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Ok (type serde_core::ser::Serializer::Ok)
   [42]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Error (type serde_core::ser::Serializer::Error)
   [43]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [44]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [45]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [46]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [47]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [48]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [49]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [50]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [51]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [53]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [54]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [56]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [57]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [59]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [60]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [61]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [62]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [63]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [64]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [65]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [66]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [67]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [68]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [69]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [70]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [71]: ../../src/tauri/ipc/command.rs.html#62-70
   [72]: ../ipc/trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [73]: ../trait.Runtime.html (trait tauri::Runtime)
   [74]: ../../src/tauri/ipc/command.rs.html#63-69
   [75]: ../ipc/trait.CommandArg.html#tymethod.from_command
   [76]: ../ipc/struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [77]: ../ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [78]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [79]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [80]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [81]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [82]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [83]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [84]: ../../src/tauri/ipc/mod.rs.html#181-187
   [85]: ../ipc/trait.IpcResponse.html (trait tauri::ipc::IpcResponse)
   [86]: ../../src/tauri/ipc/mod.rs.html#182-186
   [87]: ../ipc/trait.IpcResponse.html#tymethod.body
   [88]: ../ipc/enum.InvokeResponseBody.html (enum tauri::ipc::InvokeResponseBody)
   [89]: ../enum.Error.html (enum tauri::Error)
   [90]: ../../src/tauri/ipc/authority.rs.html#686-691
   [91]: ../ipc/trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [92]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)
   [93]: ../../src/tauri/ipc/authority.rs.html#687
   [94]: ../ipc/trait.ScopeObject.html#associatedtype.Error
   [95]: https://docs.rs/serde_json/1.0.149/serde_json/error/struct.Error.html (struct serde_json::error::Error)
   [96]: ../../src/tauri/ipc/authority.rs.html#688-690
   [97]: ../ipc/trait.ScopeObject.html#tymethod.deserialize
   [98]: ../struct.AppHandle.html (struct tauri::AppHandle)
   [99]: ../ipc/trait.ScopeObject.html#associatedtype.Error (type tauri::ipc::ScopeObject::Error)
   [100]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#233-235
   [101]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html (trait erased_serde::ser::Serialize)
   [102]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#237
   [103]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.erased_serialize
   [104]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serializer.html (trait erased_serde::ser::Serializer)
   [105]: https://docs.rs/erased-serde/0.4.10/erased_serde/error/struct.Error.html (struct erased_serde::error::Error)
   [106]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#245
   [107]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.do_erased_serialize
   [108]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [109]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [110]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [111]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [112]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [113]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [114]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [115]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
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
   [130]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#633

