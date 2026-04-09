## Theme

[![logo][1]][2]

## [tauri][2]2.10.3

## Theme

### Variants

  * Dark
  * Light



### Trait Implementations

  * Clone
  * Copy
  * Debug
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



## [In crate tauri][3]

[tauri][3]

# Enum Theme Copy item path
[code]
    #[non_exhaustive]
    
    pub enum Theme {
        Light,
        Dark,
    }
[/code]

Expand description

System theme.

## Variants (Non-exhaustive)§

This enum is marked as non-exhaustive

Non-exhaustive enums could have additional variants added in future. Therefore, when matching against variants of non-exhaustive enums, an extra wildcard arm must be added to account for any future variants.

§

### Light

Light theme.

§

### Dark

Dark theme.

## Trait Implementations§

§

### impl [Clone][4] for [Theme][5]

§

#### fn [clone][6](&self) -> [Theme][5]

Returns a duplicate of the value. [Read more][6]

1.0.0 · [Source][7]§

#### fn [clone_from][8](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][8]

§

### impl [Debug][9] for [Theme][5]

§

#### fn [fmt][10](&self, f: &mut [Formatter][11]<'_>) -> [Result][12]<[()][13], [Error][14]>

Formats the value using the given formatter. [Read more][10]

§

### impl<'de> [Deserialize][15]<'de> for [Theme][5]

§

#### fn [deserialize][16]<D>( deserializer: D, ) -> [Result][12]<[Theme][5], <D as [Deserializer][17]<'de>>::[Error][18]>

where D: [Deserializer][17]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][16]

§

### impl [Display][19] for [Theme][5]

§

#### fn [fmt][20](&self, f: &mut [Formatter][11]<'_>) -> [Result][12]<[()][13], [Error][14]>

Formats the value using the given formatter. [Read more][20]

§

### impl [PartialEq][21] for [Theme][5]

§

#### fn [eq][22](&self, other: &[Theme][5]) -> [bool][23]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][24]§

#### fn [ne][25](&self, other: [&Rhs][26]) -> [bool][23]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl [Serialize][27] for [Theme][5]

§

#### fn [serialize][28]<S>( &self, serializer: S, ) -> [Result][12]<<S as [Serializer][29]>::[Ok][30], <S as [Serializer][29]>::[Error][31]>

where S: [Serializer][29],

Serialize this value into the given Serde serializer. [Read more][28]

§

### impl [Copy][32] for [Theme][5]

§

### impl [Eq][33] for [Theme][5]

§

### impl [StructuralPartialEq][34] for [Theme][5]

## Auto Trait Implementations§

§

### impl [Freeze][35] for [Theme][5]

§

### impl [RefUnwindSafe][36] for [Theme][5]

§

### impl [Send][37] for [Theme][5]

§

### impl [Sync][38] for [Theme][5]

§

### impl [Unpin][39] for [Theme][5]

§

### impl [UnwindSafe][40] for [Theme][5]

## Blanket Implementations§

[Source][41]§

### impl<T> [Any][42] for T

where T: 'static + ?[Sized][43],

[Source][44]§

#### fn [type_id][45](&self) -> [TypeId][46]

Gets the `TypeId` of `self`. [Read more][45]

[Source][47]§

### impl<T> [Borrow][48]<T> for T

where T: ?[Sized][43],

[Source][49]§

#### fn [borrow][50](&self) -> [&T][26]

Immutably borrows from an owned value. [Read more][50]

[Source][51]§

### impl<T> [BorrowMut][52]<T> for T

where T: ?[Sized][43],

[Source][53]§

#### fn [borrow_mut][54](&mut self) -> [&mut T][26]

Mutably borrows from an owned value. [Read more][54]

[Source][55]§

### impl<T> [CloneToUninit][56] for T

where T: [Clone][4],

[Source][57]§

#### unsafe fn [clone_to_uninit][58](&self, dest: [*mut ][59][u8][60])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][58]

[Source][61]§

### impl<'de, D, R> [CommandArg][62]<'de, R> for D

where D: [Deserialize][15]<'de>, R: [Runtime][63],

[Source][64]§

#### fn [from_command][65](command: [CommandItem][66]<'de, R>) -> [Result][12]<D, [InvokeError][67]>

Derives an instance of `Self` from the [`CommandItem`][66]. [Read more][65]

[Source][68]§

### impl<T> [From][69]<T> for T

[Source][70]§

#### fn [from][71](t: T) -> T

Returns the argument unchanged.

[Source][72]§

### impl<T, U> [Into][73]<U> for T

where U: [From][69]<T>,

[Source][74]§

#### fn [into][75](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][69]<T> for U` chooses to do.

[Source][76]§

### impl<T> [IpcResponse][77] for T

where T: [Serialize][27],

[Source][78]§

#### fn [body][79](self) -> [Result][12]<[InvokeResponseBody][80], [Error][81]>

Resolve the IPC response body.

[Source][82]§

### impl<T> [ScopeObject][83] for T

where T: [Send][37] \+ [Sync][38] \+ [Debug][9] \+ [DeserializeOwned][84] \+ 'static,

[Source][85]§

#### type [Error][86] = [Error][87]

The error type.

[Source][88]§

#### fn [deserialize][89]<R>( _app: &[AppHandle][90]<R>, raw: Value, ) -> [Result][12]<T, <T as [ScopeObject][83]>::[Error][91]>

where R: [Runtime][63],

Deserialize the raw scope value.

[Source][92]§

### impl<T> [Serialize][93] for T

where T: [Serialize][27] \+ ?[Sized][43],

[Source][94]§

#### fn [erased_serialize][95](&self, serializer: &mut dyn [Serializer][96]) -> [Result][12]<[()][13], [Error][97]>

[Source][98]§

#### fn [do_erased_serialize][99]( &self, serializer: &mut dyn [Serializer][96], ) -> [Result][12]<[()][13], ErrorImpl>

[Source][100]§

### impl<T> [ToOwned][101] for T

where T: [Clone][4],

[Source][102]§

#### type [Owned][103] = T

The resulting type after obtaining ownership.

[Source][104]§

#### fn [to_owned][105](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][105]

[Source][106]§

#### fn [clone_into][107](&self, target: [&mut T][26])

Uses borrowed data to replace owned data, usually by cloning. [Read more][107]

[Source][108]§

### impl<T> [ToString][109] for T

where T: [Display][19] \+ ?[Sized][43],

[Source][110]§

#### fn [to_string][111](&self) -> [String][112]

Converts the given value to a `String`. [Read more][111]

[Source][113]§

### impl<T, U> [TryFrom][114]<U> for T

where U: [Into][73]<T>,

[Source][115]§

#### type [Error][116] = [Infallible][117]

The type returned in the event of a conversion error.

[Source][118]§

#### fn [try_from][119](value: U) -> [Result][12]<T, <T as [TryFrom][114]<U>>::[Error][120]>

Performs the conversion.

[Source][121]§

### impl<T, U> [TryInto][122]<U> for T

where U: [TryFrom][114]<T>,

[Source][123]§

#### type [Error][124] = <U as [TryFrom][114]<T>>::[Error][120]

The type returned in the event of a conversion error.

[Source][125]§

#### fn [try_into][126](self) -> [Result][12]<U, <U as [TryFrom][114]<T>>::[Error][120]>

Performs the conversion.

[Source][127]§

### impl<T> [DeserializeOwned][84] for T

where T: for<'de> [Deserialize][15]<'de>,

§

### impl<T> UserEvent for T

where T: [Debug][9] \+ [Clone][4] \+ [Send][37] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [5]: enum.Theme.html (enum tauri::Theme)
   [6]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [7]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [8]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [9]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [10]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [11]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [12]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [14]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [15]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html (trait serde_core::de::Deserialize)
   [16]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html#tymethod.deserialize
   [17]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html (trait serde_core::de::Deserializer)
   [18]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#associatedtype.Error (type serde_core::de::Deserializer::Error)
   [19]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [20]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html#tymethod.fmt
   [21]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [22]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [23]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [24]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [25]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [26]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [27]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [28]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html#tymethod.serialize
   [29]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html (trait serde_core::ser::Serializer)
   [30]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Ok (type serde_core::ser::Serializer::Ok)
   [31]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Error (type serde_core::ser::Serializer::Error)
   [32]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [33]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [34]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [35]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [36]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [37]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [38]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [39]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [40]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [41]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [42]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [43]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [44]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [45]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [46]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [47]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [48]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [49]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [50]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [51]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [52]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [54]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [55]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [56]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [57]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [58]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [59]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [60]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [61]: ../src/tauri/ipc/command.rs.html#62-70
   [62]: ipc/trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [63]: trait.Runtime.html (trait tauri::Runtime)
   [64]: ../src/tauri/ipc/command.rs.html#63-69
   [65]: ipc/trait.CommandArg.html#tymethod.from_command
   [66]: ipc/struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [67]: ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [68]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [69]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [70]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [72]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [74]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [75]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [76]: ../src/tauri/ipc/mod.rs.html#181-187
   [77]: ipc/trait.IpcResponse.html (trait tauri::ipc::IpcResponse)
   [78]: ../src/tauri/ipc/mod.rs.html#182-186
   [79]: ipc/trait.IpcResponse.html#tymethod.body
   [80]: ipc/enum.InvokeResponseBody.html (enum tauri::ipc::InvokeResponseBody)
   [81]: enum.Error.html (enum tauri::Error)
   [82]: ../src/tauri/ipc/authority.rs.html#686-691
   [83]: ipc/trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [84]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)
   [85]: ../src/tauri/ipc/authority.rs.html#687
   [86]: ipc/trait.ScopeObject.html#associatedtype.Error
   [87]: https://docs.rs/serde_json/1.0.149/serde_json/error/struct.Error.html (struct serde_json::error::Error)
   [88]: ../src/tauri/ipc/authority.rs.html#688-690
   [89]: ipc/trait.ScopeObject.html#tymethod.deserialize
   [90]: struct.AppHandle.html (struct tauri::AppHandle)
   [91]: ipc/trait.ScopeObject.html#associatedtype.Error (type tauri::ipc::ScopeObject::Error)
   [92]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#233-235
   [93]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html (trait erased_serde::ser::Serialize)
   [94]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#237
   [95]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.erased_serialize
   [96]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serializer.html (trait erased_serde::ser::Serializer)
   [97]: https://docs.rs/erased-serde/0.4.10/erased_serde/error/struct.Error.html (struct erased_serde::error::Error)
   [98]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#245
   [99]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.do_erased_serialize
   [100]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [101]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [102]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [103]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [104]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [105]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [106]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [107]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [108]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2893
   [109]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html (trait alloc::string::ToString)
   [110]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2895
   [111]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html#tymethod.to_string
   [112]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [113]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [114]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [115]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [116]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [117]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [118]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [119]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [120]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [121]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [122]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [123]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [124]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [125]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [126]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [127]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#633

