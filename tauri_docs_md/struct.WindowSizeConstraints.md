## WindowSizeConstraints

[![logo][1]][2]

## [tauri][2]2.10.3

## WindowSizeConstraints

### Fields

  * max_height
  * max_width
  * min_height
  * min_width



### Trait Implementations

  * Clone
  * Copy
  * Debug
  * Default
  * Deserialize<'de>
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



## [In crate tauri][3]

[tauri][3]

# Struct WindowSizeConstraints Copy item path
[code]
    pub struct WindowSizeConstraints {
        pub min_width: [Option][4]<[PixelUnit][5]>,
        pub min_height: [Option][4]<[PixelUnit][5]>,
        pub max_width: [Option][4]<[PixelUnit][5]>,
        pub max_height: [Option][4]<[PixelUnit][5]>,
    }
[/code]

Expand description

Window size constraints

## Fields§

§`min_width: [Option][4]<[PixelUnit][5]>`

The minimum width a window can be, If this is `None`, the window will have no minimum width.

The default is `None`.

§`min_height: [Option][4]<[PixelUnit][5]>`

The minimum height a window can be, If this is `None`, the window will have no minimum height.

The default is `None`.

§`max_width: [Option][4]<[PixelUnit][5]>`

The maximum width a window can be, If this is `None`, the window will have no maximum width.

The default is `None`.

§`max_height: [Option][4]<[PixelUnit][5]>`

The maximum height a window can be, If this is `None`, the window will have no maximum height.

The default is `None`.

## Trait Implementations§

§

### impl [Clone][6] for [WindowSizeConstraints][7]

§

#### fn [clone][8](&self) -> [WindowSizeConstraints][7]

Returns a duplicate of the value. [Read more][8]

1.0.0 · [Source][9]§

#### fn [clone_from][10](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][10]

§

### impl [Debug][11] for [WindowSizeConstraints][7]

§

#### fn [fmt][12](&self, f: &mut [Formatter][13]<'_>) -> [Result][14]<[()][15], [Error][16]>

Formats the value using the given formatter. [Read more][12]

§

### impl [Default][17] for [WindowSizeConstraints][7]

§

#### fn [default][18]() -> [WindowSizeConstraints][7]

Returns the “default value” for a type. [Read more][18]

§

### impl<'de> [Deserialize][19]<'de> for [WindowSizeConstraints][7]

§

#### fn [deserialize][20]<__D>( __deserializer: __D, ) -> [Result][14]<[WindowSizeConstraints][7], <__D as [Deserializer][21]<'de>>::[Error][22]>

where __D: [Deserializer][21]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][20]

§

### impl [PartialEq][23] for [WindowSizeConstraints][7]

§

#### fn [eq][24](&self, other: &[WindowSizeConstraints][7]) -> [bool][25]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][26]§

#### fn [ne][27](&self, other: [&Rhs][28]) -> [bool][25]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl [Serialize][29] for [WindowSizeConstraints][7]

§

#### fn [serialize][30]<__S>( &self, __serializer: __S, ) -> [Result][14]<<__S as [Serializer][31]>::[Ok][32], <__S as [Serializer][31]>::[Error][33]>

where __S: [Serializer][31],

Serialize this value into the given Serde serializer. [Read more][30]

§

### impl [Copy][34] for [WindowSizeConstraints][7]

§

### impl [StructuralPartialEq][35] for [WindowSizeConstraints][7]

## Auto Trait Implementations§

§

### impl [Freeze][36] for [WindowSizeConstraints][7]

§

### impl [RefUnwindSafe][37] for [WindowSizeConstraints][7]

§

### impl [Send][38] for [WindowSizeConstraints][7]

§

### impl [Sync][39] for [WindowSizeConstraints][7]

§

### impl [Unpin][40] for [WindowSizeConstraints][7]

§

### impl [UnwindSafe][41] for [WindowSizeConstraints][7]

## Blanket Implementations§

[Source][42]§

### impl<T> [Any][43] for T

where T: 'static + ?[Sized][44],

[Source][45]§

#### fn [type_id][46](&self) -> [TypeId][47]

Gets the `TypeId` of `self`. [Read more][46]

[Source][48]§

### impl<T> [Borrow][49]<T> for T

where T: ?[Sized][44],

[Source][50]§

#### fn [borrow][51](&self) -> [&T][28]

Immutably borrows from an owned value. [Read more][51]

[Source][52]§

### impl<T> [BorrowMut][53]<T> for T

where T: ?[Sized][44],

[Source][54]§

#### fn [borrow_mut][55](&mut self) -> [&mut T][28]

Mutably borrows from an owned value. [Read more][55]

[Source][56]§

### impl<T> [CloneToUninit][57] for T

where T: [Clone][6],

[Source][58]§

#### unsafe fn [clone_to_uninit][59](&self, dest: [*mut ][60][u8][61])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][59]

[Source][62]§

### impl<'de, D, R> [CommandArg][63]<'de, R> for D

where D: [Deserialize][19]<'de>, R: [Runtime][64],

[Source][65]§

#### fn [from_command][66](command: [CommandItem][67]<'de, R>) -> [Result][14]<D, [InvokeError][68]>

Derives an instance of `Self` from the [`CommandItem`][67]. [Read more][66]

[Source][69]§

### impl<T> [From][70]<T> for T

[Source][71]§

#### fn [from][72](t: T) -> T

Returns the argument unchanged.

[Source][73]§

### impl<T, U> [Into][74]<U> for T

where U: [From][70]<T>,

[Source][75]§

#### fn [into][76](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][70]<T> for U` chooses to do.

[Source][77]§

### impl<T> [IpcResponse][78] for T

where T: [Serialize][29],

[Source][79]§

#### fn [body][80](self) -> [Result][14]<[InvokeResponseBody][81], [Error][82]>

Resolve the IPC response body.

[Source][83]§

### impl<T> [ScopeObject][84] for T

where T: [Send][38] \+ [Sync][39] \+ [Debug][11] \+ [DeserializeOwned][85] \+ 'static,

[Source][86]§

#### type [Error][87] = [Error][88]

The error type.

[Source][89]§

#### fn [deserialize][90]<R>( _app: &[AppHandle][91]<R>, raw: Value, ) -> [Result][14]<T, <T as [ScopeObject][84]>::[Error][92]>

where R: [Runtime][64],

Deserialize the raw scope value.

[Source][93]§

### impl<T> [Serialize][94] for T

where T: [Serialize][29] \+ ?[Sized][44],

[Source][95]§

#### fn [erased_serialize][96](&self, serializer: &mut dyn [Serializer][97]) -> [Result][14]<[()][15], [Error][98]>

[Source][99]§

#### fn [do_erased_serialize][100]( &self, serializer: &mut dyn [Serializer][97], ) -> [Result][14]<[()][15], ErrorImpl>

[Source][101]§

### impl<T> [ToOwned][102] for T

where T: [Clone][6],

[Source][103]§

#### type [Owned][104] = T

The resulting type after obtaining ownership.

[Source][105]§

#### fn [to_owned][106](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][106]

[Source][107]§

#### fn [clone_into][108](&self, target: [&mut T][28])

Uses borrowed data to replace owned data, usually by cloning. [Read more][108]

[Source][109]§

### impl<T, U> [TryFrom][110]<U> for T

where U: [Into][74]<T>,

[Source][111]§

#### type [Error][112] = [Infallible][113]

The type returned in the event of a conversion error.

[Source][114]§

#### fn [try_from][115](value: U) -> [Result][14]<T, <T as [TryFrom][110]<U>>::[Error][116]>

Performs the conversion.

[Source][117]§

### impl<T, U> [TryInto][118]<U> for T

where U: [TryFrom][110]<T>,

[Source][119]§

#### type [Error][120] = <U as [TryFrom][110]<T>>::[Error][116]

The type returned in the event of a conversion error.

[Source][121]§

#### fn [try_into][122](self) -> [Result][14]<U, <U as [TryFrom][110]<T>>::[Error][116]>

Performs the conversion.

[Source][123]§

### impl<T> [DeserializeOwned][85] for T

where T: for<'de> [Deserialize][19]<'de>,

§

### impl<T> UserEvent for T

where T: [Debug][11] \+ [Clone][6] \+ [Send][38] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [5]: enum.PixelUnit.html (enum tauri::PixelUnit)
   [6]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [7]: struct.WindowSizeConstraints.html (struct tauri::WindowSizeConstraints)
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
   [23]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [24]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [25]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [26]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [27]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [28]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [29]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [30]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html#tymethod.serialize
   [31]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html (trait serde_core::ser::Serializer)
   [32]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Ok (type serde_core::ser::Serializer::Ok)
   [33]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Error (type serde_core::ser::Serializer::Error)
   [34]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [35]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [36]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [37]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [38]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [39]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [40]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [41]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [42]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [43]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [44]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [45]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [46]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [47]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [49]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [50]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [51]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [52]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [53]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [54]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [55]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [56]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [57]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [59]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [60]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [61]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [62]: ../src/tauri/ipc/command.rs.html#62-70
   [63]: ipc/trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [64]: trait.Runtime.html (trait tauri::Runtime)
   [65]: ../src/tauri/ipc/command.rs.html#63-69
   [66]: ipc/trait.CommandArg.html#tymethod.from_command
   [67]: ipc/struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [68]: ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [69]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [71]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [72]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [73]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [74]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [75]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [76]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [77]: ../src/tauri/ipc/mod.rs.html#181-187
   [78]: ipc/trait.IpcResponse.html (trait tauri::ipc::IpcResponse)
   [79]: ../src/tauri/ipc/mod.rs.html#182-186
   [80]: ipc/trait.IpcResponse.html#tymethod.body
   [81]: ipc/enum.InvokeResponseBody.html (enum tauri::ipc::InvokeResponseBody)
   [82]: enum.Error.html (enum tauri::Error)
   [83]: ../src/tauri/ipc/authority.rs.html#686-691
   [84]: ipc/trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [85]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)
   [86]: ../src/tauri/ipc/authority.rs.html#687
   [87]: ipc/trait.ScopeObject.html#associatedtype.Error
   [88]: https://docs.rs/serde_json/1.0.149/serde_json/error/struct.Error.html (struct serde_json::error::Error)
   [89]: ../src/tauri/ipc/authority.rs.html#688-690
   [90]: ipc/trait.ScopeObject.html#tymethod.deserialize
   [91]: struct.AppHandle.html (struct tauri::AppHandle)
   [92]: ipc/trait.ScopeObject.html#associatedtype.Error (type tauri::ipc::ScopeObject::Error)
   [93]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#233-235
   [94]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html (trait erased_serde::ser::Serialize)
   [95]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#237
   [96]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.erased_serialize
   [97]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serializer.html (trait erased_serde::ser::Serializer)
   [98]: https://docs.rs/erased-serde/0.4.10/erased_serde/error/struct.Error.html (struct erased_serde::error::Error)
   [99]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#245
   [100]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.do_erased_serialize
   [101]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [102]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [103]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [104]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [105]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [106]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [107]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [108]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [109]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [110]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [111]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [112]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [113]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [114]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [115]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [116]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [117]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [118]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [119]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [120]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [121]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [122]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [123]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#633

