## SafePathBuf

[![logo][1]][2]

## [tauri][2]2.10.3

## SafePathBuf

### Sections

  * Examples



### Methods

  * display
  * new



### Trait Implementations

  * AsRef<Path>
  * Clone
  * Debug
  * Deserialize<'de>
  * FromStr
  * Serialize



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



## [In tauri::path][3]

[tauri][4]::[path][3]

# Struct SafePathBuf Copy item path

[Source][5]
[code] 
    pub struct SafePathBuf(/* private fields */);
[/code]

Expand description

A wrapper for [`PathBuf`][6] that prevents path traversal.

## §Examples
[code] 
    assert!(SafePathBuf::new("../secret.txt".into()).is_err());
    assert!(SafePathBuf::new("/home/user/stuff/../secret.txt".into()).is_err());
    
    assert!(SafePathBuf::new("./file.txt".into()).is_ok());
    assert!(SafePathBuf::new("/home/user/secret.txt".into()).is_ok());
[/code]

## Implementations§

[Source][7]§

### impl [SafePathBuf][8]

[Source][9]

#### pub fn new(path: [PathBuf][6]) -> [Result][10]<Self, &'static [str][11]>

Validates the path for directory traversal vulnerabilities and returns a new [`SafePathBuf`][8] instance if it is safe.

[Source][12]

#### pub fn display(&self) -> [Display][13]<'_>

Returns an object that implements [`std::fmt::Display`][14] for safely printing paths.

See [`PathBuf`][15] for more information.

## Trait Implementations§

[Source][16]§

### impl [AsRef][17]<[Path][18]> for [SafePathBuf][8]

[Source][19]§

#### fn [as_ref][20](&self) -> &[Path][18]

Converts this type into a shared reference of the (usually inferred) input type.

[Source][21]§

### impl [Clone][22] for [SafePathBuf][8]

[Source][21]§

#### fn [clone][23](&self) -> [SafePathBuf][8]

Returns a duplicate of the value. [Read more][23]

1.0.0 · [Source][24]§

#### fn [clone_from][25](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][25]

[Source][21]§

### impl [Debug][26] for [SafePathBuf][8]

[Source][21]§

#### fn [fmt][27](&self, f: &mut [Formatter][28]<'_>) -> [Result][29]

Formats the value using the given formatter. [Read more][27]

[Source][30]§

### impl<'de> [Deserialize][31]<'de> for [SafePathBuf][8]

[Source][32]§

#### fn [deserialize][33]<D>(deserializer: D) -> [Result][10]<Self, D::[Error][34]>

where D: [Deserializer][35]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][33]

[Source][36]§

### impl [FromStr][37] for [SafePathBuf][8]

[Source][38]§

#### type [Err][39] = &'static [str][11]

The associated error which can be returned from parsing.

[Source][40]§

#### fn [from_str][41](s: &[str][11]) -> [Result][10]<Self, Self::[Err][42]>

Parses a string `s` to return a value of this type. [Read more][41]

[Source][21]§

### impl [Serialize][43] for [SafePathBuf][8]

[Source][21]§

#### fn [serialize][44]<__S>(&self, __serializer: __S) -> [Result][10]<__S::[Ok][45], __S::[Error][46]>

where __S: [Serializer][47],

Serialize this value into the given Serde serializer. [Read more][44]

## Auto Trait Implementations§

§

### impl [Freeze][48] for [SafePathBuf][8]

§

### impl [RefUnwindSafe][49] for [SafePathBuf][8]

§

### impl [Send][50] for [SafePathBuf][8]

§

### impl [Sync][51] for [SafePathBuf][8]

§

### impl [Unpin][52] for [SafePathBuf][8]

§

### impl [UnwindSafe][53] for [SafePathBuf][8]

## Blanket Implementations§

[Source][54]§

### impl<T> [Any][55] for T

where T: 'static + ?[Sized][56],

[Source][57]§

#### fn [type_id][58](&self) -> [TypeId][59]

Gets the `TypeId` of `self`. [Read more][58]

[Source][60]§

### impl<T> [Borrow][61]<T> for T

where T: ?[Sized][56],

[Source][62]§

#### fn [borrow][63](&self) -> [&T][64]

Immutably borrows from an owned value. [Read more][63]

[Source][65]§

### impl<T> [BorrowMut][66]<T> for T

where T: ?[Sized][56],

[Source][67]§

#### fn [borrow_mut][68](&mut self) -> [&mut T][64]

Mutably borrows from an owned value. [Read more][68]

[Source][69]§

### impl<T> [CloneToUninit][70] for T

where T: [Clone][22],

[Source][71]§

#### unsafe fn [clone_to_uninit][72](&self, dest: [*mut ][73][u8][74])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][72]

[Source][75]§

### impl<'de, D, R> [CommandArg][76]<'de, R> for D

where D: [Deserialize][31]<'de>, R: [Runtime][77],

[Source][78]§

#### fn [from_command][79](command: [CommandItem][80]<'de, R>) -> [Result][10]<D, [InvokeError][81]>

Derives an instance of `Self` from the [`CommandItem`][80]. [Read more][79]

[Source][82]§

### impl<T> [From][83]<T> for T

[Source][84]§

#### fn [from][85](t: T) -> T

Returns the argument unchanged.

[Source][86]§

### impl<T, U> [Into][87]<U> for T

where U: [From][83]<T>,

[Source][88]§

#### fn [into][89](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][83]<T> for U` chooses to do.

[Source][90]§

### impl<T> [IpcResponse][91] for T

where T: [Serialize][43],

[Source][92]§

#### fn [body][93](self) -> [Result][10]<[InvokeResponseBody][94], [Error][95]>

Resolve the IPC response body.

[Source][96]§

### impl<T> [ScopeObject][97] for T

where T: [Send][50] \+ [Sync][51] \+ [Debug][26] \+ [DeserializeOwned][98] \+ 'static,

[Source][99]§

#### type [Error][100] = [Error][101]

The error type.

[Source][102]§

#### fn [deserialize][103]<R>( _app: &[AppHandle][104]<R>, raw: Value, ) -> [Result][10]<T, <T as [ScopeObject][97]>::[Error][105]>

where R: [Runtime][77],

Deserialize the raw scope value.

[Source][106]§

### impl<T> [Serialize][107] for T

where T: [Serialize][43] \+ ?[Sized][56],

[Source][108]§

#### fn [erased_serialize][109](&self, serializer: &mut dyn [Serializer][110]) -> [Result][10]<[()][111], [Error][112]>

[Source][113]§

#### fn [do_erased_serialize][114]( &self, serializer: &mut dyn [Serializer][110], ) -> [Result][10]<[()][111], ErrorImpl>

[Source][115]§

### impl<T> [ToOwned][116] for T

where T: [Clone][22],

[Source][117]§

#### type [Owned][118] = T

The resulting type after obtaining ownership.

[Source][119]§

#### fn [to_owned][120](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][120]

[Source][121]§

#### fn [clone_into][122](&self, target: [&mut T][64])

Uses borrowed data to replace owned data, usually by cloning. [Read more][122]

[Source][123]§

### impl<T, U> [TryFrom][124]<U> for T

where U: [Into][87]<T>,

[Source][125]§

#### type [Error][126] = [Infallible][127]

The type returned in the event of a conversion error.

[Source][128]§

#### fn [try_from][129](value: U) -> [Result][10]<T, <T as [TryFrom][124]<U>>::[Error][130]>

Performs the conversion.

[Source][131]§

### impl<T, U> [TryInto][132]<U> for T

where U: [TryFrom][124]<T>,

[Source][133]§

#### type [Error][134] = <U as [TryFrom][124]<T>>::[Error][130]

The type returned in the event of a conversion error.

[Source][135]§

#### fn [try_into][136](self) -> [Result][10]<U, <U as [TryFrom][124]<T>>::[Error][130]>

Performs the conversion.

[Source][137]§

### impl<T> [DeserializeOwned][98] for T

where T: for<'de> [Deserialize][31]<'de>,

§

### impl<T> UserEvent for T

where T: [Debug][26] \+ [Clone][22] \+ [Send][50] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/path/mod.rs.html#42
   [6]: https://doc.rust-lang.org/1.94.1/std/path/struct.PathBuf.html (struct std::path::PathBuf)
   [7]: ../../src/tauri/path/mod.rs.html#44-60
   [8]: struct.SafePathBuf.html (struct tauri::path::SafePathBuf)
   [9]: ../../src/tauri/path/mod.rs.html#46-52
   [10]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [11]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [12]: ../../src/tauri/path/mod.rs.html#57-59
   [13]: https://doc.rust-lang.org/1.94.1/std/path/struct.Display.html (struct std::path::Display)
   [14]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [15]: https://doc.rust-lang.org/1.94.1/std/path/struct.PathBuf.html#method.display (struct std::path::PathBuf)
   [16]: ../../src/tauri/path/mod.rs.html#62-66
   [17]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [18]: https://doc.rust-lang.org/1.94.1/std/path/struct.Path.html (struct std::path::Path)
   [19]: ../../src/tauri/path/mod.rs.html#63-65
   [20]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html#tymethod.as_ref
   [21]: ../../src/tauri/path/mod.rs.html#41
   [22]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [23]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [24]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [25]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [26]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [27]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [28]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [29]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [30]: ../../src/tauri/path/mod.rs.html#76-84
   [31]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html (trait serde_core::de::Deserialize)
   [32]: ../../src/tauri/path/mod.rs.html#77-83
   [33]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html#tymethod.deserialize
   [34]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#associatedtype.Error (type serde_core::de::Deserializer::Error)
   [35]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html (trait serde_core::de::Deserializer)
   [36]: ../../src/tauri/path/mod.rs.html#68-74
   [37]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html (trait core::str::traits::FromStr)
   [38]: ../../src/tauri/path/mod.rs.html#69
   [39]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#associatedtype.Err
   [40]: ../../src/tauri/path/mod.rs.html#71-73
   [41]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#tymethod.from_str
   [42]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#associatedtype.Err (type core::str::traits::FromStr::Err)
   [43]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [44]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html#tymethod.serialize
   [45]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Ok (type serde_core::ser::Serializer::Ok)
   [46]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Error (type serde_core::ser::Serializer::Error)
   [47]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html (trait serde_core::ser::Serializer)
   [48]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [49]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [50]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [51]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [52]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [53]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [54]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [55]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [56]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [57]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [58]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [59]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [60]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [61]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [62]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [63]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [64]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [65]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [66]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [67]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [68]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [69]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [70]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [71]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [72]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [73]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [74]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [75]: ../../src/tauri/ipc/command.rs.html#62-70
   [76]: ../ipc/trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [77]: ../trait.Runtime.html (trait tauri::Runtime)
   [78]: ../../src/tauri/ipc/command.rs.html#63-69
   [79]: ../ipc/trait.CommandArg.html#tymethod.from_command
   [80]: ../ipc/struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [81]: ../ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [82]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [83]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [84]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [85]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [86]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [87]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [88]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [89]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [90]: ../../src/tauri/ipc/mod.rs.html#181-187
   [91]: ../ipc/trait.IpcResponse.html (trait tauri::ipc::IpcResponse)
   [92]: ../../src/tauri/ipc/mod.rs.html#182-186
   [93]: ../ipc/trait.IpcResponse.html#tymethod.body
   [94]: ../ipc/enum.InvokeResponseBody.html (enum tauri::ipc::InvokeResponseBody)
   [95]: ../enum.Error.html (enum tauri::Error)
   [96]: ../../src/tauri/ipc/authority.rs.html#686-691
   [97]: ../ipc/trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [98]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)
   [99]: ../../src/tauri/ipc/authority.rs.html#687
   [100]: ../ipc/trait.ScopeObject.html#associatedtype.Error
   [101]: https://docs.rs/serde_json/1.0.149/serde_json/error/struct.Error.html (struct serde_json::error::Error)
   [102]: ../../src/tauri/ipc/authority.rs.html#688-690
   [103]: ../ipc/trait.ScopeObject.html#tymethod.deserialize
   [104]: ../struct.AppHandle.html (struct tauri::AppHandle)
   [105]: ../ipc/trait.ScopeObject.html#associatedtype.Error (type tauri::ipc::ScopeObject::Error)
   [106]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#233-235
   [107]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html (trait erased_serde::ser::Serialize)
   [108]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#237
   [109]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.erased_serialize
   [110]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serializer.html (trait erased_serde::ser::Serializer)
   [111]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [112]: https://docs.rs/erased-serde/0.4.10/erased_serde/error/struct.Error.html (struct erased_serde::error::Error)
   [113]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#245
   [114]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.do_erased_serialize
   [115]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [116]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [117]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [118]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [119]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [120]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [121]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [122]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [123]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [124]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [125]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [126]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [127]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [128]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [129]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [130]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [131]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [132]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [133]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [134]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [135]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [136]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [137]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#633

