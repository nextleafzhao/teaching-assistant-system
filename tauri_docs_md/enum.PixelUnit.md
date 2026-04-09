## PixelUnit

[![logo][1]][2]

## [tauri][2]2.10.3

## PixelUnit

### Variants

  * Logical
  * Physical



### Associated Constants

  * MAX
  * MIN
  * ZERO



### Methods

  * new
  * to_logical
  * to_physical



### Trait Implementations

  * Clone
  * Copy
  * Debug
  * Deserialize<'de>
  * From<LogicalUnit<P>>
  * From<PhysicalUnit<P>>
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

# Enum PixelUnit Copy item path
[code]
    pub enum PixelUnit {
        Physical([PhysicalUnit][4]<[i32][5]>),
        Logical([LogicalUnit][6]<[f64][7]>),
    }
[/code]

Expand description

A pixel unit that’s either physical or logical.

## Variants§

§

### Physical([PhysicalUnit][4]<[i32][5]>)

§

### Logical([LogicalUnit][6]<[f64][7]>)

## Implementations§

§

### impl [PixelUnit][8]

#### pub const MAX: [PixelUnit][8]

Represents a maximum logical unit that is equal to [`f64::MAX`][9].

#### pub const MIN: [PixelUnit][8]

Represents a minimum logical unit of [`f64::MAX`][9].

#### pub const ZERO: [PixelUnit][8]

Represents a logical unit of `0_f64`.

#### pub fn new<S>(unit: S) -> [PixelUnit][8]

where S: [Into][10]<[PixelUnit][8]>,

#### pub fn to_logical<P>(&self, scale_factor: [f64][7]) -> [LogicalUnit][6]<P>

where P: [Pixel][11],

#### pub fn to_physical<P>(&self, scale_factor: [f64][7]) -> [PhysicalUnit][4]<P>

where P: [Pixel][11],

## Trait Implementations§

§

### impl [Clone][12] for [PixelUnit][8]

§

#### fn [clone][13](&self) -> [PixelUnit][8]

Returns a duplicate of the value. [Read more][13]

1.0.0 · [Source][14]§

#### fn [clone_from][15](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][15]

§

### impl [Debug][16] for [PixelUnit][8]

§

#### fn [fmt][17](&self, f: &mut [Formatter][18]<'_>) -> [Result][19]<[()][20], [Error][21]>

Formats the value using the given formatter. [Read more][17]

§

### impl<'de> [Deserialize][22]<'de> for [PixelUnit][8]

§

#### fn [deserialize][23]<__D>( __deserializer: __D, ) -> [Result][19]<[PixelUnit][8], <__D as [Deserializer][24]<'de>>::[Error][25]>

where __D: [Deserializer][24]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][23]

§

### impl<P> [From][26]<[LogicalUnit][6]<P>> for [PixelUnit][8]

where P: [Pixel][11],

§

#### fn [from][27](unit: [LogicalUnit][6]<P>) -> [PixelUnit][8]

Converts to this type from the input type.

§

### impl<P> [From][26]<[PhysicalUnit][4]<P>> for [PixelUnit][8]

where P: [Pixel][11],

§

#### fn [from][27](unit: [PhysicalUnit][4]<P>) -> [PixelUnit][8]

Converts to this type from the input type.

§

### impl [PartialEq][28] for [PixelUnit][8]

§

#### fn [eq][29](&self, other: &[PixelUnit][8]) -> [bool][30]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][31]§

#### fn [ne][32](&self, other: [&Rhs][33]) -> [bool][30]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl [Serialize][34] for [PixelUnit][8]

§

#### fn [serialize][35]<__S>( &self, __serializer: __S, ) -> [Result][19]<<__S as [Serializer][36]>::[Ok][37], <__S as [Serializer][36]>::[Error][38]>

where __S: [Serializer][36],

Serialize this value into the given Serde serializer. [Read more][35]

§

### impl [Copy][39] for [PixelUnit][8]

§

### impl [StructuralPartialEq][40] for [PixelUnit][8]

## Auto Trait Implementations§

§

### impl [Freeze][41] for [PixelUnit][8]

§

### impl [RefUnwindSafe][42] for [PixelUnit][8]

§

### impl [Send][43] for [PixelUnit][8]

§

### impl [Sync][44] for [PixelUnit][8]

§

### impl [Unpin][45] for [PixelUnit][8]

§

### impl [UnwindSafe][46] for [PixelUnit][8]

## Blanket Implementations§

[Source][47]§

### impl<T> [Any][48] for T

where T: 'static + ?[Sized][49],

[Source][50]§

#### fn [type_id][51](&self) -> [TypeId][52]

Gets the `TypeId` of `self`. [Read more][51]

[Source][53]§

### impl<T> [Borrow][54]<T> for T

where T: ?[Sized][49],

[Source][55]§

#### fn [borrow][56](&self) -> [&T][33]

Immutably borrows from an owned value. [Read more][56]

[Source][57]§

### impl<T> [BorrowMut][58]<T> for T

where T: ?[Sized][49],

[Source][59]§

#### fn [borrow_mut][60](&mut self) -> [&mut T][33]

Mutably borrows from an owned value. [Read more][60]

[Source][61]§

### impl<T> [CloneToUninit][62] for T

where T: [Clone][12],

[Source][63]§

#### unsafe fn [clone_to_uninit][64](&self, dest: [*mut ][65][u8][66])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][64]

[Source][67]§

### impl<'de, D, R> [CommandArg][68]<'de, R> for D

where D: [Deserialize][22]<'de>, R: [Runtime][69],

[Source][70]§

#### fn [from_command][71](command: [CommandItem][72]<'de, R>) -> [Result][19]<D, [InvokeError][73]>

Derives an instance of `Self` from the [`CommandItem`][72]. [Read more][71]

[Source][74]§

### impl<T> [From][26]<T> for T

[Source][75]§

#### fn [from][27](t: T) -> T

Returns the argument unchanged.

[Source][76]§

### impl<T, U> [Into][10]<U> for T

where U: [From][26]<T>,

[Source][77]§

#### fn [into][78](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][26]<T> for U` chooses to do.

[Source][79]§

### impl<T> [IpcResponse][80] for T

where T: [Serialize][34],

[Source][81]§

#### fn [body][82](self) -> [Result][19]<[InvokeResponseBody][83], [Error][84]>

Resolve the IPC response body.

[Source][85]§

### impl<T> [ScopeObject][86] for T

where T: [Send][43] \+ [Sync][44] \+ [Debug][16] \+ [DeserializeOwned][87] \+ 'static,

[Source][88]§

#### type [Error][89] = [Error][90]

The error type.

[Source][91]§

#### fn [deserialize][92]<R>( _app: &[AppHandle][93]<R>, raw: Value, ) -> [Result][19]<T, <T as [ScopeObject][86]>::[Error][94]>

where R: [Runtime][69],

Deserialize the raw scope value.

[Source][95]§

### impl<T> [Serialize][96] for T

where T: [Serialize][34] \+ ?[Sized][49],

[Source][97]§

#### fn [erased_serialize][98](&self, serializer: &mut dyn [Serializer][99]) -> [Result][19]<[()][20], [Error][100]>

[Source][101]§

#### fn [do_erased_serialize][102]( &self, serializer: &mut dyn [Serializer][99], ) -> [Result][19]<[()][20], ErrorImpl>

[Source][103]§

### impl<T> [ToOwned][104] for T

where T: [Clone][12],

[Source][105]§

#### type [Owned][106] = T

The resulting type after obtaining ownership.

[Source][107]§

#### fn [to_owned][108](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][108]

[Source][109]§

#### fn [clone_into][110](&self, target: [&mut T][33])

Uses borrowed data to replace owned data, usually by cloning. [Read more][110]

[Source][111]§

### impl<T, U> [TryFrom][112]<U> for T

where U: [Into][10]<T>,

[Source][113]§

#### type [Error][114] = [Infallible][115]

The type returned in the event of a conversion error.

[Source][116]§

#### fn [try_from][117](value: U) -> [Result][19]<T, <T as [TryFrom][112]<U>>::[Error][118]>

Performs the conversion.

[Source][119]§

### impl<T, U> [TryInto][120]<U> for T

where U: [TryFrom][112]<T>,

[Source][121]§

#### type [Error][122] = <U as [TryFrom][112]<T>>::[Error][118]

The type returned in the event of a conversion error.

[Source][123]§

#### fn [try_into][124](self) -> [Result][19]<U, <U as [TryFrom][112]<T>>::[Error][118]>

Performs the conversion.

[Source][125]§

### impl<T> [DeserializeOwned][87] for T

where T: for<'de> [Deserialize][22]<'de>,

§

### impl<T> UserEvent for T

where T: [Debug][16] \+ [Clone][12] \+ [Send][43] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: struct.PhysicalUnit.html (struct tauri::PhysicalUnit)
   [5]: https://doc.rust-lang.org/1.94.1/std/primitive.i32.html
   [6]: struct.LogicalUnit.html (struct tauri::LogicalUnit)
   [7]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html
   [8]: enum.PixelUnit.html (enum tauri::PixelUnit)
   [9]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html#associatedconstant.MAX (associated constant f64::MAX)
   [10]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [11]: trait.Pixel.html (trait tauri::Pixel)
   [12]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [13]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [14]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [15]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [16]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [17]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [18]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [19]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [20]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [21]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [22]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html (trait serde_core::de::Deserialize)
   [23]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html#tymethod.deserialize
   [24]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html (trait serde_core::de::Deserializer)
   [25]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#associatedtype.Error (type serde_core::de::Deserializer::Error)
   [26]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [27]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [28]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [29]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [30]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [31]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [32]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [33]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [34]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [35]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html#tymethod.serialize
   [36]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html (trait serde_core::ser::Serializer)
   [37]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Ok (type serde_core::ser::Serializer::Ok)
   [38]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Error (type serde_core::ser::Serializer::Error)
   [39]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [40]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [41]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [42]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [43]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [44]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [45]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [46]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [47]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [48]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [49]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [50]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [51]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [52]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [54]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [56]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [57]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [58]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [59]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [60]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [61]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [62]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [63]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [64]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [65]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [66]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [67]: ../src/tauri/ipc/command.rs.html#62-70
   [68]: ipc/trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [69]: trait.Runtime.html (trait tauri::Runtime)
   [70]: ../src/tauri/ipc/command.rs.html#63-69
   [71]: ipc/trait.CommandArg.html#tymethod.from_command
   [72]: ipc/struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [73]: ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [74]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [75]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [76]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [77]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [78]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [79]: ../src/tauri/ipc/mod.rs.html#181-187
   [80]: ipc/trait.IpcResponse.html (trait tauri::ipc::IpcResponse)
   [81]: ../src/tauri/ipc/mod.rs.html#182-186
   [82]: ipc/trait.IpcResponse.html#tymethod.body
   [83]: ipc/enum.InvokeResponseBody.html (enum tauri::ipc::InvokeResponseBody)
   [84]: enum.Error.html (enum tauri::Error)
   [85]: ../src/tauri/ipc/authority.rs.html#686-691
   [86]: ipc/trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [87]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)
   [88]: ../src/tauri/ipc/authority.rs.html#687
   [89]: ipc/trait.ScopeObject.html#associatedtype.Error
   [90]: https://docs.rs/serde_json/1.0.149/serde_json/error/struct.Error.html (struct serde_json::error::Error)
   [91]: ../src/tauri/ipc/authority.rs.html#688-690
   [92]: ipc/trait.ScopeObject.html#tymethod.deserialize
   [93]: struct.AppHandle.html (struct tauri::AppHandle)
   [94]: ipc/trait.ScopeObject.html#associatedtype.Error (type tauri::ipc::ScopeObject::Error)
   [95]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#233-235
   [96]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html (trait erased_serde::ser::Serialize)
   [97]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#237
   [98]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.erased_serialize
   [99]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serializer.html (trait erased_serde::ser::Serializer)
   [100]: https://docs.rs/erased-serde/0.4.10/erased_serde/error/struct.Error.html (struct erased_serde::error::Error)
   [101]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#245
   [102]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.do_erased_serialize
   [103]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [104]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [105]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [106]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [107]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [108]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [109]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [110]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [111]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [112]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [113]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [114]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [115]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [116]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [117]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [118]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [119]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [120]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [121]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [122]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [123]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [124]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [125]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#633

