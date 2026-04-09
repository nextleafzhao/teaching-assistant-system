## PermissionState

[![logo][1]][2]

## [tauri][2]2.10.3

## PermissionState

### Variants

  * Denied
  * Granted
  * Prompt
  * PromptWithRationale



### Trait Implementations

  * Clone
  * Copy
  * Debug
  * Default
  * Deserialize<'de>
  * Display
  * Eq
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
  * ToString
  * TryFrom<U>
  * TryInto<U>
  * UserEvent



## [In tauri::plugin][3]

[tauri][4]::[plugin][3]

# Enum PermissionState Copy item path

[Source][5]
[code] 
    pub enum PermissionState {
        Granted,
        Denied,
        Prompt,
        PromptWithRationale,
    }
[/code]

Expand description

Permission state.

## Variants§

§

### Granted

Permission access has been granted.

§

### Denied

Permission access has been denied.

§

### Prompt

Permission must be requested.

§

### PromptWithRationale

Permission must be requested, but you must explain to the user why your app needs that permission. **Android only**.

## Trait Implementations§

[Source][6]§

### impl [Clone][7] for [PermissionState][8]

[Source][6]§

#### fn [clone][9](&self) -> [PermissionState][8]

Returns a duplicate of the value. [Read more][9]

1.0.0 · [Source][10]§

#### fn [clone_from][11](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][11]

[Source][6]§

### impl [Debug][12] for [PermissionState][8]

[Source][6]§

#### fn [fmt][13](&self, f: &mut [Formatter][14]<'_>) -> [Result][15]

Formats the value using the given formatter. [Read more][13]

[Source][6]§

### impl [Default][16] for [PermissionState][8]

[Source][6]§

#### fn [default][17]() -> [PermissionState][8]

Returns the “default value” for a type. [Read more][17]

[Source][18]§

### impl<'de> [Deserialize][19]<'de> for [PermissionState][8]

[Source][20]§

#### fn [deserialize][21]<D>(deserializer: D) -> [Result][22]<Self, D::[Error][23]>

where D: [Deserializer][24]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][21]

[Source][25]§

### impl [Display][26] for [PermissionState][8]

[Source][27]§

#### fn [fmt][28](&self, f: &mut [Formatter][14]<'_>) -> [Result][15]

Formats the value using the given formatter. [Read more][28]

[Source][6]§

### impl [PartialEq][29] for [PermissionState][8]

[Source][6]§

#### fn [eq][30](&self, other: &[PermissionState][8]) -> [bool][31]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][32]§

#### fn [ne][33](&self, other: [&Rhs][34]) -> [bool][31]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][35]§

### impl [Serialize][36] for [PermissionState][8]

[Source][37]§

#### fn [serialize][38]<S>(&self, serializer: S) -> [Result][22]<S::[Ok][39], S::[Error][40]>

where S: [Serializer][41],

Serialize this value into the given Serde serializer. [Read more][38]

[Source][6]§

### impl [Copy][42] for [PermissionState][8]

[Source][6]§

### impl [Eq][43] for [PermissionState][8]

[Source][6]§

### impl [StructuralPartialEq][44] for [PermissionState][8]

## Auto Trait Implementations§

§

### impl [Freeze][45] for [PermissionState][8]

§

### impl [RefUnwindSafe][46] for [PermissionState][8]

§

### impl [Send][47] for [PermissionState][8]

§

### impl [Sync][48] for [PermissionState][8]

§

### impl [Unpin][49] for [PermissionState][8]

§

### impl [UnwindSafe][50] for [PermissionState][8]

## Blanket Implementations§

[Source][51]§

### impl<T> [Any][52] for T

where T: 'static + ?[Sized][53],

[Source][54]§

#### fn [type_id][55](&self) -> [TypeId][56]

Gets the `TypeId` of `self`. [Read more][55]

[Source][57]§

### impl<T> [Borrow][58]<T> for T

where T: ?[Sized][53],

[Source][59]§

#### fn [borrow][60](&self) -> [&T][34]

Immutably borrows from an owned value. [Read more][60]

[Source][61]§

### impl<T> [BorrowMut][62]<T> for T

where T: ?[Sized][53],

[Source][63]§

#### fn [borrow_mut][64](&mut self) -> [&mut T][34]

Mutably borrows from an owned value. [Read more][64]

[Source][65]§

### impl<T> [CloneToUninit][66] for T

where T: [Clone][7],

[Source][67]§

#### unsafe fn [clone_to_uninit][68](&self, dest: [*mut ][69][u8][70])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][68]

[Source][71]§

### impl<'de, D, R> [CommandArg][72]<'de, R> for D

where D: [Deserialize][19]<'de>, R: [Runtime][73],

[Source][74]§

#### fn [from_command][75](command: [CommandItem][76]<'de, R>) -> [Result][22]<D, [InvokeError][77]>

Derives an instance of `Self` from the [`CommandItem`][76]. [Read more][75]

[Source][78]§

### impl<T> [From][79]<T> for T

[Source][80]§

#### fn [from][81](t: T) -> T

Returns the argument unchanged.

[Source][82]§

### impl<T, U> [Into][83]<U> for T

where U: [From][79]<T>,

[Source][84]§

#### fn [into][85](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][79]<T> for U` chooses to do.

[Source][86]§

### impl<T> [IpcResponse][87] for T

where T: [Serialize][36],

[Source][88]§

#### fn [body][89](self) -> [Result][22]<[InvokeResponseBody][90], [Error][91]>

Resolve the IPC response body.

[Source][92]§

### impl<T> [ScopeObject][93] for T

where T: [Send][47] \+ [Sync][48] \+ [Debug][12] \+ [DeserializeOwned][94] \+ 'static,

[Source][95]§

#### type [Error][96] = [Error][97]

The error type.

[Source][98]§

#### fn [deserialize][99]<R>( _app: &[AppHandle][100]<R>, raw: Value, ) -> [Result][22]<T, <T as [ScopeObject][93]>::[Error][101]>

where R: [Runtime][73],

Deserialize the raw scope value.

[Source][102]§

### impl<T> [Serialize][103] for T

where T: [Serialize][36] \+ ?[Sized][53],

[Source][104]§

#### fn [erased_serialize][105](&self, serializer: &mut dyn [Serializer][106]) -> [Result][22]<[()][107], [Error][108]>

[Source][109]§

#### fn [do_erased_serialize][110]( &self, serializer: &mut dyn [Serializer][106], ) -> [Result][22]<[()][107], ErrorImpl>

[Source][111]§

### impl<T> [ToOwned][112] for T

where T: [Clone][7],

[Source][113]§

#### type [Owned][114] = T

The resulting type after obtaining ownership.

[Source][115]§

#### fn [to_owned][116](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][116]

[Source][117]§

#### fn [clone_into][118](&self, target: [&mut T][34])

Uses borrowed data to replace owned data, usually by cloning. [Read more][118]

[Source][119]§

### impl<T> [ToString][120] for T

where T: [Display][26] \+ ?[Sized][53],

[Source][121]§

#### fn [to_string][122](&self) -> [String][123]

Converts the given value to a `String`. [Read more][122]

[Source][124]§

### impl<T, U> [TryFrom][125]<U> for T

where U: [Into][83]<T>,

[Source][126]§

#### type [Error][127] = [Infallible][128]

The type returned in the event of a conversion error.

[Source][129]§

#### fn [try_from][130](value: U) -> [Result][22]<T, <T as [TryFrom][125]<U>>::[Error][131]>

Performs the conversion.

[Source][132]§

### impl<T, U> [TryInto][133]<U> for T

where U: [TryFrom][125]<T>,

[Source][134]§

#### type [Error][135] = <U as [TryFrom][125]<T>>::[Error][131]

The type returned in the event of a conversion error.

[Source][136]§

#### fn [try_into][137](self) -> [Result][22]<U, <U as [TryFrom][125]<T>>::[Error][131]>

Performs the conversion.

[Source][138]§

### impl<T> [DeserializeOwned][94] for T

where T: for<'de> [Deserialize][19]<'de>,

§

### impl<T> UserEvent for T

where T: [Debug][12] \+ [Clone][7] \+ [Send][47] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/plugin.rs.html#1015-1025
   [6]: ../../src/tauri/plugin.rs.html#1013
   [7]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [8]: enum.PermissionState.html (enum tauri::plugin::PermissionState)
   [9]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [10]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [11]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [12]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [13]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [14]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [15]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [16]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [17]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [18]: ../../src/tauri/plugin.rs.html#1047-1061
   [19]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html (trait serde_core::de::Deserialize)
   [20]: ../../src/tauri/plugin.rs.html#1048-1060
   [21]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html#tymethod.deserialize
   [22]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [23]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#associatedtype.Error (type serde_core::de::Deserializer::Error)
   [24]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html (trait serde_core::de::Deserializer)
   [25]: ../../src/tauri/plugin.rs.html#1027-1036
   [26]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [27]: ../../src/tauri/plugin.rs.html#1028-1035
   [28]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html#tymethod.fmt
   [29]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [30]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [31]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [32]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [33]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [34]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [35]: ../../src/tauri/plugin.rs.html#1038-1045
   [36]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [37]: ../../src/tauri/plugin.rs.html#1039-1044
   [38]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html#tymethod.serialize
   [39]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Ok (type serde_core::ser::Serializer::Ok)
   [40]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Error (type serde_core::ser::Serializer::Error)
   [41]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html (trait serde_core::ser::Serializer)
   [42]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [43]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [44]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [45]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [46]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [47]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [48]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [49]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [50]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [51]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [52]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [53]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [54]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [55]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [56]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [57]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [58]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [59]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [60]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [61]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [62]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [63]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [64]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [65]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [66]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [67]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [68]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [69]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [70]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [71]: ../../src/tauri/ipc/command.rs.html#62-70
   [72]: ../ipc/trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [73]: ../trait.Runtime.html (trait tauri::Runtime)
   [74]: ../../src/tauri/ipc/command.rs.html#63-69
   [75]: ../ipc/trait.CommandArg.html#tymethod.from_command
   [76]: ../ipc/struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [77]: ../ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [78]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [79]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [80]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [81]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [82]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [83]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [84]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [85]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [86]: ../../src/tauri/ipc/mod.rs.html#181-187
   [87]: ../ipc/trait.IpcResponse.html (trait tauri::ipc::IpcResponse)
   [88]: ../../src/tauri/ipc/mod.rs.html#182-186
   [89]: ../ipc/trait.IpcResponse.html#tymethod.body
   [90]: ../ipc/enum.InvokeResponseBody.html (enum tauri::ipc::InvokeResponseBody)
   [91]: ../enum.Error.html (enum tauri::Error)
   [92]: ../../src/tauri/ipc/authority.rs.html#686-691
   [93]: ../ipc/trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [94]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)
   [95]: ../../src/tauri/ipc/authority.rs.html#687
   [96]: ../ipc/trait.ScopeObject.html#associatedtype.Error
   [97]: https://docs.rs/serde_json/1.0.149/serde_json/error/struct.Error.html (struct serde_json::error::Error)
   [98]: ../../src/tauri/ipc/authority.rs.html#688-690
   [99]: ../ipc/trait.ScopeObject.html#tymethod.deserialize
   [100]: ../struct.AppHandle.html (struct tauri::AppHandle)
   [101]: ../ipc/trait.ScopeObject.html#associatedtype.Error (type tauri::ipc::ScopeObject::Error)
   [102]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#233-235
   [103]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html (trait erased_serde::ser::Serialize)
   [104]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#237
   [105]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.erased_serialize
   [106]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serializer.html (trait erased_serde::ser::Serializer)
   [107]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [108]: https://docs.rs/erased-serde/0.4.10/erased_serde/error/struct.Error.html (struct erased_serde::error::Error)
   [109]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#245
   [110]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.do_erased_serialize
   [111]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [112]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [113]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [114]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [115]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [116]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [117]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [118]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [119]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2893
   [120]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html (trait alloc::string::ToString)
   [121]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2895
   [122]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html#tymethod.to_string
   [123]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [124]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [125]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [126]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [127]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [128]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [129]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [130]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [131]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [132]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [133]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [134]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [135]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [136]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [137]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [138]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#633

