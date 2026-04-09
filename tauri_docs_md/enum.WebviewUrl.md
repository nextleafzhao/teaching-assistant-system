## WebviewUrl

[![logo][1]][2]

## [tauri][2]2.10.3

## WebviewUrl

### Variants

  * App
  * CustomProtocol
  * External



### Trait Implementations

  * Clone
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



## [In crate tauri][3]

[tauri][3]

# Enum WebviewUrl Copy item path
[code]
    #[non_exhaustive]
    
    pub enum WebviewUrl {
        External([Url][4]),
        App([PathBuf][5]),
        CustomProtocol([Url][4]),
    }
[/code]

Expand description

An URL to open on a Tauri webview window.

## Variants (Non-exhaustive)§

This enum is marked as non-exhaustive

Non-exhaustive enums could have additional variants added in future. Therefore, when matching against variants of non-exhaustive enums, an extra wildcard arm must be added to account for any future variants.

§

### External([Url][4])

An external URL. Must use either the `http` or `https` schemes.

§

### App([PathBuf][5])

The path portion of an app URL. For instance, to load `tauri://localhost/users/john`, you can simply provide `users/john` in this configuration.

§

### CustomProtocol([Url][4])

A custom protocol url, for example, `doom://index.html`

## Trait Implementations§

§

### impl [Clone][6] for [WebviewUrl][7]

§

#### fn [clone][8](&self) -> [WebviewUrl][7]

Returns a duplicate of the value. [Read more][8]

1.0.0 · [Source][9]§

#### fn [clone_from][10](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][10]

§

### impl [Debug][11] for [WebviewUrl][7]

§

#### fn [fmt][12](&self, f: &mut [Formatter][13]<'_>) -> [Result][14]<[()][15], [Error][16]>

Formats the value using the given formatter. [Read more][12]

§

### impl [Default][17] for [WebviewUrl][7]

§

#### fn [default][18]() -> [WebviewUrl][7]

Returns the “default value” for a type. [Read more][18]

§

### impl<'de> [Deserialize][19]<'de> for [WebviewUrl][7]

§

#### fn [deserialize][20]<D>( deserializer: D, ) -> [Result][14]<[WebviewUrl][7], <D as [Deserializer][21]<'de>>::[Error][22]>

where D: [Deserializer][21]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][20]

§

### impl [Display][23] for [WebviewUrl][7]

§

#### fn [fmt][24](&self, f: &mut [Formatter][13]<'_>) -> [Result][14]<[()][15], [Error][16]>

Formats the value using the given formatter. [Read more][24]

§

### impl [PartialEq][25] for [WebviewUrl][7]

§

#### fn [eq][26](&self, other: &[WebviewUrl][7]) -> [bool][27]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][28]§

#### fn [ne][29](&self, other: [&Rhs][30]) -> [bool][27]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl [Serialize][31] for [WebviewUrl][7]

§

#### fn [serialize][32]<__S>( &self, __serializer: __S, ) -> [Result][14]<<__S as [Serializer][33]>::[Ok][34], <__S as [Serializer][33]>::[Error][35]>

where __S: [Serializer][33],

Serialize this value into the given Serde serializer. [Read more][32]

§

### impl [Eq][36] for [WebviewUrl][7]

§

### impl [StructuralPartialEq][37] for [WebviewUrl][7]

## Auto Trait Implementations§

§

### impl [Freeze][38] for [WebviewUrl][7]

§

### impl [RefUnwindSafe][39] for [WebviewUrl][7]

§

### impl [Send][40] for [WebviewUrl][7]

§

### impl [Sync][41] for [WebviewUrl][7]

§

### impl [Unpin][42] for [WebviewUrl][7]

§

### impl [UnwindSafe][43] for [WebviewUrl][7]

## Blanket Implementations§

[Source][44]§

### impl<T> [Any][45] for T

where T: 'static + ?[Sized][46],

[Source][47]§

#### fn [type_id][48](&self) -> [TypeId][49]

Gets the `TypeId` of `self`. [Read more][48]

[Source][50]§

### impl<T> [Borrow][51]<T> for T

where T: ?[Sized][46],

[Source][52]§

#### fn [borrow][53](&self) -> [&T][30]

Immutably borrows from an owned value. [Read more][53]

[Source][54]§

### impl<T> [BorrowMut][55]<T> for T

where T: ?[Sized][46],

[Source][56]§

#### fn [borrow_mut][57](&mut self) -> [&mut T][30]

Mutably borrows from an owned value. [Read more][57]

[Source][58]§

### impl<T> [CloneToUninit][59] for T

where T: [Clone][6],

[Source][60]§

#### unsafe fn [clone_to_uninit][61](&self, dest: [*mut ][62][u8][63])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][61]

[Source][64]§

### impl<'de, D, R> [CommandArg][65]<'de, R> for D

where D: [Deserialize][19]<'de>, R: [Runtime][66],

[Source][67]§

#### fn [from_command][68](command: [CommandItem][69]<'de, R>) -> [Result][14]<D, [InvokeError][70]>

Derives an instance of `Self` from the [`CommandItem`][69]. [Read more][68]

[Source][71]§

### impl<T> [From][72]<T> for T

[Source][73]§

#### fn [from][74](t: T) -> T

Returns the argument unchanged.

[Source][75]§

### impl<T, U> [Into][76]<U> for T

where U: [From][72]<T>,

[Source][77]§

#### fn [into][78](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][72]<T> for U` chooses to do.

[Source][79]§

### impl<T> [IpcResponse][80] for T

where T: [Serialize][31],

[Source][81]§

#### fn [body][82](self) -> [Result][14]<[InvokeResponseBody][83], [Error][84]>

Resolve the IPC response body.

[Source][85]§

### impl<T> [ScopeObject][86] for T

where T: [Send][40] \+ [Sync][41] \+ [Debug][11] \+ [DeserializeOwned][87] \+ 'static,

[Source][88]§

#### type [Error][89] = [Error][90]

The error type.

[Source][91]§

#### fn [deserialize][92]<R>( _app: &[AppHandle][93]<R>, raw: Value, ) -> [Result][14]<T, <T as [ScopeObject][86]>::[Error][94]>

where R: [Runtime][66],

Deserialize the raw scope value.

[Source][95]§

### impl<T> [Serialize][96] for T

where T: [Serialize][31] \+ ?[Sized][46],

[Source][97]§

#### fn [erased_serialize][98](&self, serializer: &mut dyn [Serializer][99]) -> [Result][14]<[()][15], [Error][100]>

[Source][101]§

#### fn [do_erased_serialize][102]( &self, serializer: &mut dyn [Serializer][99], ) -> [Result][14]<[()][15], ErrorImpl>

[Source][103]§

### impl<T> [ToOwned][104] for T

where T: [Clone][6],

[Source][105]§

#### type [Owned][106] = T

The resulting type after obtaining ownership.

[Source][107]§

#### fn [to_owned][108](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][108]

[Source][109]§

#### fn [clone_into][110](&self, target: [&mut T][30])

Uses borrowed data to replace owned data, usually by cloning. [Read more][110]

[Source][111]§

### impl<T> [ToString][112] for T

where T: [Display][23] \+ ?[Sized][46],

[Source][113]§

#### fn [to_string][114](&self) -> [String][115]

Converts the given value to a `String`. [Read more][114]

[Source][116]§

### impl<T, U> [TryFrom][117]<U> for T

where U: [Into][76]<T>,

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

### impl<T> [DeserializeOwned][87] for T

where T: for<'de> [Deserialize][19]<'de>,

§

### impl<T> UserEvent for T

where T: [Debug][11] \+ [Clone][6] \+ [Send][40] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: struct.Url.html (struct tauri::Url)
   [5]: https://doc.rust-lang.org/1.94.1/std/path/struct.PathBuf.html (struct std::path::PathBuf)
   [6]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [7]: enum.WebviewUrl.html (enum tauri::WebviewUrl)
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
   [23]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [24]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html#tymethod.fmt
   [25]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [26]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [27]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [28]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [29]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [30]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [31]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [32]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html#tymethod.serialize
   [33]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html (trait serde_core::ser::Serializer)
   [34]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Ok (type serde_core::ser::Serializer::Ok)
   [35]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Error (type serde_core::ser::Serializer::Error)
   [36]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [37]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [38]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [39]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [40]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [41]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [42]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [43]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [44]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [45]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [46]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [47]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [48]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [49]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [50]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [51]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [53]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [54]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [55]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [56]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [57]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [58]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [59]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [60]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [61]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [62]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [63]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [64]: ../src/tauri/ipc/command.rs.html#62-70
   [65]: ipc/trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [66]: trait.Runtime.html (trait tauri::Runtime)
   [67]: ../src/tauri/ipc/command.rs.html#63-69
   [68]: ipc/trait.CommandArg.html#tymethod.from_command
   [69]: ipc/struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [70]: ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [71]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [72]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [73]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [74]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [75]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [76]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
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
   [111]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2893
   [112]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html (trait alloc::string::ToString)
   [113]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2895
   [114]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html#tymethod.to_string
   [115]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
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

