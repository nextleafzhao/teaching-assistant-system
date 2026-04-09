## CallbackFn

[![logo][1]][2]

## [tauri][2]2.10.3

## CallbackFn

### Tuple Fields

  * 0



### Trait Implementations

  * Clone
  * Copy
  * Debug
  * Deserialize<'de>
  * Eq
  * Hash
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



## [In tauri::ipc][3]

[tauri][4]::[ipc][3]

# Struct CallbackFn Copy item path

[Source][5]
[code] 
    pub struct CallbackFn(pub [u32][6]);
[/code]

Expand description

The `Callback` type is the return value of the `transformCallback` JavaScript function.

## Tuple Fields§

§`0: [u32][6]`

## Trait Implementations§

[Source][7]§

### impl [Clone][8] for [CallbackFn][9]

[Source][7]§

#### fn [clone][10](&self) -> [CallbackFn][9]

Returns a duplicate of the value. [Read more][10]

1.0.0 · [Source][11]§

#### fn [clone_from][12](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][12]

[Source][7]§

### impl [Debug][13] for [CallbackFn][9]

[Source][7]§

#### fn [fmt][14](&self, f: &mut [Formatter][15]<'_>) -> [Result][16]

Formats the value using the given formatter. [Read more][14]

[Source][7]§

### impl<'de> [Deserialize][17]<'de> for [CallbackFn][9]

[Source][7]§

#### fn [deserialize][18]<__D>(__deserializer: __D) -> [Result][19]<Self, __D::[Error][20]>

where __D: [Deserializer][21]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][18]

[Source][7]§

### impl [Hash][22] for [CallbackFn][9]

[Source][7]§

#### fn [hash][23]<__H: [Hasher][24]>(&self, state: [&mut __H][25])

Feeds this value into the given [`Hasher`][24]. [Read more][23]

1.3.0 · [Source][26]§

#### fn [hash_slice][27]<H>(data: &[Self], state: [&mut H][25])

where H: [Hasher][24], Self: [Sized][28],

Feeds a slice of this type into the given [`Hasher`][24]. [Read more][27]

[Source][7]§

### impl [PartialEq][29] for [CallbackFn][9]

[Source][7]§

#### fn [eq][30](&self, other: &[CallbackFn][9]) -> [bool][31]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][32]§

#### fn [ne][33](&self, other: [&Rhs][25]) -> [bool][31]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][7]§

### impl [Serialize][34] for [CallbackFn][9]

[Source][7]§

#### fn [serialize][35]<__S>(&self, __serializer: __S) -> [Result][19]<__S::[Ok][36], __S::[Error][37]>

where __S: [Serializer][38],

Serialize this value into the given Serde serializer. [Read more][35]

[Source][7]§

### impl [Copy][39] for [CallbackFn][9]

[Source][7]§

### impl [Eq][40] for [CallbackFn][9]

[Source][7]§

### impl [StructuralPartialEq][41] for [CallbackFn][9]

## Auto Trait Implementations§

§

### impl [Freeze][42] for [CallbackFn][9]

§

### impl [RefUnwindSafe][43] for [CallbackFn][9]

§

### impl [Send][44] for [CallbackFn][9]

§

### impl [Sync][45] for [CallbackFn][9]

§

### impl [Unpin][46] for [CallbackFn][9]

§

### impl [UnwindSafe][47] for [CallbackFn][9]

## Blanket Implementations§

[Source][48]§

### impl<T> [Any][49] for T

where T: 'static + ?[Sized][28],

[Source][50]§

#### fn [type_id][51](&self) -> [TypeId][52]

Gets the `TypeId` of `self`. [Read more][51]

[Source][53]§

### impl<T> [Borrow][54]<T> for T

where T: ?[Sized][28],

[Source][55]§

#### fn [borrow][56](&self) -> [&T][25]

Immutably borrows from an owned value. [Read more][56]

[Source][57]§

### impl<T> [BorrowMut][58]<T> for T

where T: ?[Sized][28],

[Source][59]§

#### fn [borrow_mut][60](&mut self) -> [&mut T][25]

Mutably borrows from an owned value. [Read more][60]

[Source][61]§

### impl<T> [CloneToUninit][62] for T

where T: [Clone][8],

[Source][63]§

#### unsafe fn [clone_to_uninit][64](&self, dest: [*mut ][65][u8][66])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][64]

[Source][67]§

### impl<'de, D, R> [CommandArg][68]<'de, R> for D

where D: [Deserialize][17]<'de>, R: [Runtime][69],

[Source][70]§

#### fn [from_command][71](command: [CommandItem][72]<'de, R>) -> [Result][19]<D, [InvokeError][73]>

Derives an instance of `Self` from the [`CommandItem`][72]. [Read more][71]

[Source][74]§

### impl<T> [From][75]<T> for T

[Source][76]§

#### fn [from][77](t: T) -> T

Returns the argument unchanged.

[Source][78]§

### impl<T, U> [Into][79]<U> for T

where U: [From][75]<T>,

[Source][80]§

#### fn [into][81](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][75]<T> for U` chooses to do.

[Source][82]§

### impl<T> [IpcResponse][83] for T

where T: [Serialize][34],

[Source][84]§

#### fn [body][85](self) -> [Result][19]<[InvokeResponseBody][86], [Error][87]>

Resolve the IPC response body.

[Source][88]§

### impl<T> [ScopeObject][89] for T

where T: [Send][44] \+ [Sync][45] \+ [Debug][13] \+ [DeserializeOwned][90] \+ 'static,

[Source][91]§

#### type [Error][92] = [Error][93]

The error type.

[Source][94]§

#### fn [deserialize][95]<R>( _app: &[AppHandle][96]<R>, raw: Value, ) -> [Result][19]<T, <T as [ScopeObject][89]>::[Error][97]>

where R: [Runtime][69],

Deserialize the raw scope value.

[Source][98]§

### impl<T> [Serialize][99] for T

where T: [Serialize][34] \+ ?[Sized][28],

[Source][100]§

#### fn [erased_serialize][101](&self, serializer: &mut dyn [Serializer][102]) -> [Result][19]<[()][103], [Error][104]>

[Source][105]§

#### fn [do_erased_serialize][106]( &self, serializer: &mut dyn [Serializer][102], ) -> [Result][19]<[()][103], ErrorImpl>

[Source][107]§

### impl<T> [ToOwned][108] for T

where T: [Clone][8],

[Source][109]§

#### type [Owned][110] = T

The resulting type after obtaining ownership.

[Source][111]§

#### fn [to_owned][112](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][112]

[Source][113]§

#### fn [clone_into][114](&self, target: [&mut T][25])

Uses borrowed data to replace owned data, usually by cloning. [Read more][114]

[Source][115]§

### impl<T, U> [TryFrom][116]<U> for T

where U: [Into][79]<T>,

[Source][117]§

#### type [Error][118] = [Infallible][119]

The type returned in the event of a conversion error.

[Source][120]§

#### fn [try_from][121](value: U) -> [Result][19]<T, <T as [TryFrom][116]<U>>::[Error][122]>

Performs the conversion.

[Source][123]§

### impl<T, U> [TryInto][124]<U> for T

where U: [TryFrom][116]<T>,

[Source][125]§

#### type [Error][126] = <U as [TryFrom][116]<T>>::[Error][122]

The type returned in the event of a conversion error.

[Source][127]§

#### fn [try_into][128](self) -> [Result][19]<U, <U as [TryFrom][116]<T>>::[Error][122]>

Performs the conversion.

[Source][129]§

### impl<T> [DeserializeOwned][90] for T

where T: for<'de> [Deserialize][17]<'de>,

§

### impl<T> UserEvent for T

where T: [Debug][13] \+ [Clone][8] \+ [Send][44] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/ipc/mod.rs.html#586
   [6]: https://doc.rust-lang.org/1.94.1/std/primitive.u32.html
   [7]: ../../src/tauri/ipc/mod.rs.html#585
   [8]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [9]: struct.CallbackFn.html (struct tauri::ipc::CallbackFn)
   [10]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [11]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [12]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [13]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [14]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [15]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [16]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [17]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html (trait serde_core::de::Deserialize)
   [18]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html#tymethod.deserialize
   [19]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [20]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#associatedtype.Error (type serde_core::de::Deserializer::Error)
   [21]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html (trait serde_core::de::Deserializer)
   [22]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html (trait core::hash::Hash)
   [23]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#tymethod.hash
   [24]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hasher.html (trait core::hash::Hasher)
   [25]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [26]: https://doc.rust-lang.org/1.94.1/src/core/hash/mod.rs.html#235-237
   [27]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#method.hash_slice
   [28]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [29]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [30]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [31]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [32]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [33]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [34]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [35]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html#tymethod.serialize
   [36]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Ok (type serde_core::ser::Serializer::Ok)
   [37]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Error (type serde_core::ser::Serializer::Error)
   [38]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html (trait serde_core::ser::Serializer)
   [39]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [40]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [41]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [42]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [43]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [44]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [45]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [46]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [47]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [49]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
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
   [67]: ../../src/tauri/ipc/command.rs.html#62-70
   [68]: trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [69]: ../trait.Runtime.html (trait tauri::Runtime)
   [70]: ../../src/tauri/ipc/command.rs.html#63-69
   [71]: trait.CommandArg.html#tymethod.from_command
   [72]: struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [73]: struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [74]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [75]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [76]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [77]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [78]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [79]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [80]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [81]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [82]: ../../src/tauri/ipc/mod.rs.html#181-187
   [83]: trait.IpcResponse.html (trait tauri::ipc::IpcResponse)
   [84]: ../../src/tauri/ipc/mod.rs.html#182-186
   [85]: trait.IpcResponse.html#tymethod.body
   [86]: enum.InvokeResponseBody.html (enum tauri::ipc::InvokeResponseBody)
   [87]: ../enum.Error.html (enum tauri::Error)
   [88]: ../../src/tauri/ipc/authority.rs.html#686-691
   [89]: trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [90]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)
   [91]: ../../src/tauri/ipc/authority.rs.html#687
   [92]: trait.ScopeObject.html#associatedtype.Error
   [93]: https://docs.rs/serde_json/1.0.149/serde_json/error/struct.Error.html (struct serde_json::error::Error)
   [94]: ../../src/tauri/ipc/authority.rs.html#688-690
   [95]: trait.ScopeObject.html#tymethod.deserialize
   [96]: ../struct.AppHandle.html (struct tauri::AppHandle)
   [97]: trait.ScopeObject.html#associatedtype.Error (type tauri::ipc::ScopeObject::Error)
   [98]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#233-235
   [99]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html (trait erased_serde::ser::Serialize)
   [100]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#237
   [101]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.erased_serialize
   [102]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serializer.html (trait erased_serde::ser::Serializer)
   [103]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [104]: https://docs.rs/erased-serde/0.4.10/erased_serde/error/struct.Error.html (struct erased_serde::error::Error)
   [105]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#245
   [106]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.do_erased_serialize
   [107]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [108]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [109]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [110]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [111]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [112]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [113]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [114]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
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
   [129]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#633

