## Position

[![logo][1]][2]

## [tauri][2]2.10.3

## Position

### Variants

  * Logical
  * Physical



### Methods

  * new
  * to_logical
  * to_physical



### Trait Implementations

  * Clone
  * Copy
  * Debug
  * Deserialize<'de>
  * From<LogicalPosition<P>>
  * From<PhysicalPosition<P>>
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

# Enum Position Copy item path
[code]
    pub enum Position {
        Physical([PhysicalPosition][4]<[i32][5]>),
        Logical([LogicalPosition][6]<[f64][7]>),
    }
[/code]

Expand description

A position that’s either physical or logical.

## Variants§

§

### Physical([PhysicalPosition][4]<[i32][5]>)

§

### Logical([LogicalPosition][6]<[f64][7]>)

## Implementations§

§

### impl [Position][8]

#### pub fn new<S>(position: S) -> [Position][8]

where S: [Into][9]<[Position][8]>,

#### pub fn to_logical<P>(&self, scale_factor: [f64][7]) -> [LogicalPosition][6]<P>

where P: [Pixel][10],

#### pub fn to_physical<P>(&self, scale_factor: [f64][7]) -> [PhysicalPosition][4]<P>

where P: [Pixel][10],

## Trait Implementations§

§

### impl [Clone][11] for [Position][8]

§

#### fn [clone][12](&self) -> [Position][8]

Returns a duplicate of the value. [Read more][12]

1.0.0 · [Source][13]§

#### fn [clone_from][14](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][14]

§

### impl [Debug][15] for [Position][8]

§

#### fn [fmt][16](&self, f: &mut [Formatter][17]<'_>) -> [Result][18]<[()][19], [Error][20]>

Formats the value using the given formatter. [Read more][16]

§

### impl<'de> [Deserialize][21]<'de> for [Position][8]

§

#### fn [deserialize][22]<__D>( __deserializer: __D, ) -> [Result][18]<[Position][8], <__D as [Deserializer][23]<'de>>::[Error][24]>

where __D: [Deserializer][23]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][22]

§

### impl<P> [From][25]<[LogicalPosition][6]<P>> for [Position][8]

where P: [Pixel][10],

§

#### fn [from][26](position: [LogicalPosition][6]<P>) -> [Position][8]

Converts to this type from the input type.

§

### impl<P> [From][25]<[PhysicalPosition][4]<P>> for [Position][8]

where P: [Pixel][10],

§

#### fn [from][26](position: [PhysicalPosition][4]<P>) -> [Position][8]

Converts to this type from the input type.

§

### impl [PartialEq][27] for [Position][8]

§

#### fn [eq][28](&self, other: &[Position][8]) -> [bool][29]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][30]§

#### fn [ne][31](&self, other: [&Rhs][32]) -> [bool][29]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl [Serialize][33] for [Position][8]

§

#### fn [serialize][34]<__S>( &self, __serializer: __S, ) -> [Result][18]<<__S as [Serializer][35]>::[Ok][36], <__S as [Serializer][35]>::[Error][37]>

where __S: [Serializer][35],

Serialize this value into the given Serde serializer. [Read more][34]

§

### impl [Copy][38] for [Position][8]

§

### impl [StructuralPartialEq][39] for [Position][8]

## Auto Trait Implementations§

§

### impl [Freeze][40] for [Position][8]

§

### impl [RefUnwindSafe][41] for [Position][8]

§

### impl [Send][42] for [Position][8]

§

### impl [Sync][43] for [Position][8]

§

### impl [Unpin][44] for [Position][8]

§

### impl [UnwindSafe][45] for [Position][8]

## Blanket Implementations§

[Source][46]§

### impl<T> [Any][47] for T

where T: 'static + ?[Sized][48],

[Source][49]§

#### fn [type_id][50](&self) -> [TypeId][51]

Gets the `TypeId` of `self`. [Read more][50]

[Source][52]§

### impl<T> [Borrow][53]<T> for T

where T: ?[Sized][48],

[Source][54]§

#### fn [borrow][55](&self) -> [&T][32]

Immutably borrows from an owned value. [Read more][55]

[Source][56]§

### impl<T> [BorrowMut][57]<T> for T

where T: ?[Sized][48],

[Source][58]§

#### fn [borrow_mut][59](&mut self) -> [&mut T][32]

Mutably borrows from an owned value. [Read more][59]

[Source][60]§

### impl<T> [CloneToUninit][61] for T

where T: [Clone][11],

[Source][62]§

#### unsafe fn [clone_to_uninit][63](&self, dest: [*mut ][64][u8][65])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][63]

[Source][66]§

### impl<'de, D, R> [CommandArg][67]<'de, R> for D

where D: [Deserialize][21]<'de>, R: [Runtime][68],

[Source][69]§

#### fn [from_command][70](command: [CommandItem][71]<'de, R>) -> [Result][18]<D, [InvokeError][72]>

Derives an instance of `Self` from the [`CommandItem`][71]. [Read more][70]

[Source][73]§

### impl<T> [From][25]<T> for T

[Source][74]§

#### fn [from][26](t: T) -> T

Returns the argument unchanged.

[Source][75]§

### impl<T, U> [Into][9]<U> for T

where U: [From][25]<T>,

[Source][76]§

#### fn [into][77](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][25]<T> for U` chooses to do.

[Source][78]§

### impl<T> [IpcResponse][79] for T

where T: [Serialize][33],

[Source][80]§

#### fn [body][81](self) -> [Result][18]<[InvokeResponseBody][82], [Error][83]>

Resolve the IPC response body.

[Source][84]§

### impl<T> [ScopeObject][85] for T

where T: [Send][42] \+ [Sync][43] \+ [Debug][15] \+ [DeserializeOwned][86] \+ 'static,

[Source][87]§

#### type [Error][88] = [Error][89]

The error type.

[Source][90]§

#### fn [deserialize][91]<R>( _app: &[AppHandle][92]<R>, raw: Value, ) -> [Result][18]<T, <T as [ScopeObject][85]>::[Error][93]>

where R: [Runtime][68],

Deserialize the raw scope value.

[Source][94]§

### impl<T> [Serialize][95] for T

where T: [Serialize][33] \+ ?[Sized][48],

[Source][96]§

#### fn [erased_serialize][97](&self, serializer: &mut dyn [Serializer][98]) -> [Result][18]<[()][19], [Error][99]>

[Source][100]§

#### fn [do_erased_serialize][101]( &self, serializer: &mut dyn [Serializer][98], ) -> [Result][18]<[()][19], ErrorImpl>

[Source][102]§

### impl<T> [ToOwned][103] for T

where T: [Clone][11],

[Source][104]§

#### type [Owned][105] = T

The resulting type after obtaining ownership.

[Source][106]§

#### fn [to_owned][107](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][107]

[Source][108]§

#### fn [clone_into][109](&self, target: [&mut T][32])

Uses borrowed data to replace owned data, usually by cloning. [Read more][109]

[Source][110]§

### impl<T, U> [TryFrom][111]<U> for T

where U: [Into][9]<T>,

[Source][112]§

#### type [Error][113] = [Infallible][114]

The type returned in the event of a conversion error.

[Source][115]§

#### fn [try_from][116](value: U) -> [Result][18]<T, <T as [TryFrom][111]<U>>::[Error][117]>

Performs the conversion.

[Source][118]§

### impl<T, U> [TryInto][119]<U> for T

where U: [TryFrom][111]<T>,

[Source][120]§

#### type [Error][121] = <U as [TryFrom][111]<T>>::[Error][117]

The type returned in the event of a conversion error.

[Source][122]§

#### fn [try_into][123](self) -> [Result][18]<U, <U as [TryFrom][111]<T>>::[Error][117]>

Performs the conversion.

[Source][124]§

### impl<T> [DeserializeOwned][86] for T

where T: for<'de> [Deserialize][21]<'de>,

§

### impl<T> UserEvent for T

where T: [Debug][15] \+ [Clone][11] \+ [Send][42] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: struct.PhysicalPosition.html (struct tauri::PhysicalPosition)
   [5]: https://doc.rust-lang.org/1.94.1/std/primitive.i32.html
   [6]: struct.LogicalPosition.html (struct tauri::LogicalPosition)
   [7]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html
   [8]: enum.Position.html (enum tauri::Position)
   [9]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [10]: trait.Pixel.html (trait tauri::Pixel)
   [11]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [12]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [13]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [14]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [15]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [16]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [17]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [18]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [19]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [20]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [21]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html (trait serde_core::de::Deserialize)
   [22]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html#tymethod.deserialize
   [23]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html (trait serde_core::de::Deserializer)
   [24]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#associatedtype.Error (type serde_core::de::Deserializer::Error)
   [25]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [26]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [27]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [28]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [29]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [30]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [31]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [32]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [33]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [34]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html#tymethod.serialize
   [35]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html (trait serde_core::ser::Serializer)
   [36]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Ok (type serde_core::ser::Serializer::Ok)
   [37]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Error (type serde_core::ser::Serializer::Error)
   [38]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [39]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [40]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [41]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [42]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [43]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [44]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [45]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [47]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [48]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [49]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [50]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [51]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [53]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [54]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [55]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [56]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [57]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [59]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [60]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [61]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [62]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [63]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [64]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [65]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [66]: ../src/tauri/ipc/command.rs.html#62-70
   [67]: ipc/trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [68]: trait.Runtime.html (trait tauri::Runtime)
   [69]: ../src/tauri/ipc/command.rs.html#63-69
   [70]: ipc/trait.CommandArg.html#tymethod.from_command
   [71]: ipc/struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [72]: ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [73]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [74]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [75]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [76]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [77]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [78]: ../src/tauri/ipc/mod.rs.html#181-187
   [79]: ipc/trait.IpcResponse.html (trait tauri::ipc::IpcResponse)
   [80]: ../src/tauri/ipc/mod.rs.html#182-186
   [81]: ipc/trait.IpcResponse.html#tymethod.body
   [82]: ipc/enum.InvokeResponseBody.html (enum tauri::ipc::InvokeResponseBody)
   [83]: enum.Error.html (enum tauri::Error)
   [84]: ../src/tauri/ipc/authority.rs.html#686-691
   [85]: ipc/trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [86]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)
   [87]: ../src/tauri/ipc/authority.rs.html#687
   [88]: ipc/trait.ScopeObject.html#associatedtype.Error
   [89]: https://docs.rs/serde_json/1.0.149/serde_json/error/struct.Error.html (struct serde_json::error::Error)
   [90]: ../src/tauri/ipc/authority.rs.html#688-690
   [91]: ipc/trait.ScopeObject.html#tymethod.deserialize
   [92]: struct.AppHandle.html (struct tauri::AppHandle)
   [93]: ipc/trait.ScopeObject.html#associatedtype.Error (type tauri::ipc::ScopeObject::Error)
   [94]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#233-235
   [95]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html (trait erased_serde::ser::Serialize)
   [96]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#237
   [97]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.erased_serialize
   [98]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serializer.html (trait erased_serde::ser::Serializer)
   [99]: https://docs.rs/erased-serde/0.4.10/erased_serde/error/struct.Error.html (struct erased_serde::error::Error)
   [100]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#245
   [101]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.do_erased_serialize
   [102]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [103]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [104]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [105]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [106]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [107]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [108]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [109]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [110]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [111]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [112]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [113]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [114]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [115]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [116]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [117]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [118]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [119]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [120]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [121]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [122]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [123]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [124]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#633

