## BaseDirectory

[![logo][1]][2]

## [tauri][2]2.10.3

## BaseDirectory

### Variants

  * AppCache
  * AppConfig
  * AppData
  * AppLocalData
  * AppLog
  * Audio
  * Cache
  * Config
  * Data
  * Desktop
  * Document
  * Download
  * Executable
  * Font
  * Home
  * LocalData
  * Picture
  * Public
  * Resource
  * Runtime
  * Temp
  * Template
  * Video



### Methods

  * from_variable
  * variable



### Trait Implementations

  * Clone
  * Copy
  * Debug
  * Deserialize<'de>
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

# Enum BaseDirectory Copy item path

[Source][5]
[code] 
    #[non_exhaustive]
    
    #[repr(u16)]
    
    pub enum BaseDirectory {
    Show 23 variants    Audio = 1,
        Cache = 2,
        Config = 3,
        Data = 4,
        LocalData = 5,
        Document = 6,
        Download = 7,
        Picture = 8,
        Public = 9,
        Video = 10,
        Resource = 11,
        Temp = 12,
        AppConfig = 13,
        AppData = 14,
        AppLocalData = 15,
        AppCache = 16,
        AppLog = 17,
        Desktop = 18,
        Executable = 19,
        Font = 20,
        Home = 21,
        Runtime = 22,
        Template = 23,
    }
[/code]

Expand description

A base directory for a path.

The base directory is the optional root of a file system operation. If informed by the API call, all paths will be relative to the path of the given directory.

For more information, check the [`dirs` documentation][6].

## Variants (Non-exhaustive)§

This enum is marked as non-exhaustive

Non-exhaustive enums could have additional variants added in future. Therefore, when matching against variants of non-exhaustive enums, an extra wildcard arm must be added to account for any future variants.

§

### Audio = 1

The Audio directory. Resolves to [`crate::path::PathResolver::audio_dir`][7].

§

### Cache = 2

The Cache directory. Resolves to [`crate::path::PathResolver::cache_dir`][8].

§

### Config = 3

The Config directory. Resolves to [`crate::path::PathResolver::config_dir`][9].

§

### Data = 4

The Data directory. Resolves to [`crate::path::PathResolver::data_dir`][10].

§

### LocalData = 5

The LocalData directory. Resolves to [`crate::path::PathResolver::local_data_dir`][11].

§

### Document = 6

The Document directory. Resolves to [`crate::path::PathResolver::document_dir`][12].

§

### Download = 7

The Download directory. Resolves to [`crate::path::PathResolver::download_dir`][13].

§

### Picture = 8

The Picture directory. Resolves to [`crate::path::PathResolver::picture_dir`][14].

§

### Public = 9

The Public directory. Resolves to [`crate::path::PathResolver::public_dir`][15].

§

### Video = 10

The Video directory. Resolves to [`crate::path::PathResolver::video_dir`][16].

§

### Resource = 11

The Resource directory. Resolves to [`crate::path::PathResolver::resource_dir`][17].

§

### Temp = 12

A temporary directory. Resolves to [`std::env::temp_dir`][18].

§

### AppConfig = 13

The default app config directory. Resolves to [`BaseDirectory::Config`][19]`/{bundle_identifier}`.

§

### AppData = 14

The default app data directory. Resolves to [`BaseDirectory::Data`][20]`/{bundle_identifier}`.

§

### AppLocalData = 15

The default app local data directory. Resolves to [`BaseDirectory::LocalData`][21]`/{bundle_identifier}`.

§

### AppCache = 16

The default app cache directory. Resolves to [`BaseDirectory::Cache`][22]`/{bundle_identifier}`.

§

### AppLog = 17

The default app log directory. Resolves to [`BaseDirectory::Home`][23]`/Library/Logs/{bundle_identifier}` on macOS and [`BaseDirectory::Config`][19]`/{bundle_identifier}/logs` on linux and Windows.

§

### Desktop = 18

The Desktop directory. Resolves to [`crate::path::PathResolver::desktop_dir`][24].

§

### Executable = 19

The Executable directory. Resolves to [`crate::path::PathResolver::executable_dir`][25].

§

### Font = 20

The Font directory. Resolves to [`crate::path::PathResolver::font_dir`][26].

§

### Home = 21

The Home directory. Resolves to [`crate::path::PathResolver::home_dir`][27].

§

### Runtime = 22

The Runtime directory. Resolves to [`crate::path::PathResolver::runtime_dir`][28].

§

### Template = 23

The Template directory. Resolves to [`crate::path::PathResolver::template_dir`][29].

## Implementations§

[Source][30]§

### impl [BaseDirectory][31]

[Source][32]

#### pub fn variable(self) -> &'static [str][33]

Gets the variable that represents this [`BaseDirectory`][31] for string paths.

[Source][34]

#### pub fn from_variable(variable: &[str][33]) -> [Option][35]<Self>

Gets the [`BaseDirectory`][31] associated with the given variable, or [`None`][36] if the variable doesn’t match any.

## Trait Implementations§

[Source][37]§

### impl [Clone][38] for [BaseDirectory][31]

[Source][37]§

#### fn [clone][39](&self) -> [BaseDirectory][31]

Returns a duplicate of the value. [Read more][39]

1.0.0 · [Source][40]§

#### fn [clone_from][41](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][41]

[Source][37]§

### impl [Debug][42] for [BaseDirectory][31]

[Source][37]§

#### fn [fmt][43](&self, f: &mut [Formatter][44]<'_>) -> [Result][45]

Formats the value using the given formatter. [Read more][43]

[Source][37]§

### impl<'de> [Deserialize][46]<'de> for [BaseDirectory][31]

[Source][37]§

#### fn [deserialize][47]<D>(deserializer: D) -> [Result][48]<Self, D::[Error][49]>

where D: [Deserializer][50]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][47]

[Source][37]§

### impl [Serialize][51] for [BaseDirectory][31]

[Source][37]§

#### fn [serialize][52]<S>(&self, serializer: S) -> [Result][48]<S::[Ok][53], S::[Error][54]>

where S: [Serializer][55],

Serialize this value into the given Serde serializer. [Read more][52]

[Source][37]§

### impl [Copy][56] for [BaseDirectory][31]

## Auto Trait Implementations§

§

### impl [Freeze][57] for [BaseDirectory][31]

§

### impl [RefUnwindSafe][58] for [BaseDirectory][31]

§

### impl [Send][59] for [BaseDirectory][31]

§

### impl [Sync][60] for [BaseDirectory][31]

§

### impl [Unpin][61] for [BaseDirectory][31]

§

### impl [UnwindSafe][62] for [BaseDirectory][31]

## Blanket Implementations§

[Source][63]§

### impl<T> [Any][64] for T

where T: 'static + ?[Sized][65],

[Source][66]§

#### fn [type_id][67](&self) -> [TypeId][68]

Gets the `TypeId` of `self`. [Read more][67]

[Source][69]§

### impl<T> [Borrow][70]<T> for T

where T: ?[Sized][65],

[Source][71]§

#### fn [borrow][72](&self) -> [&T][73]

Immutably borrows from an owned value. [Read more][72]

[Source][74]§

### impl<T> [BorrowMut][75]<T> for T

where T: ?[Sized][65],

[Source][76]§

#### fn [borrow_mut][77](&mut self) -> [&mut T][73]

Mutably borrows from an owned value. [Read more][77]

[Source][78]§

### impl<T> [CloneToUninit][79] for T

where T: [Clone][38],

[Source][80]§

#### unsafe fn [clone_to_uninit][81](&self, dest: [*mut ][82][u8][83])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][81]

[Source][84]§

### impl<'de, D, R> [CommandArg][85]<'de, R> for D

where D: [Deserialize][46]<'de>, R: [Runtime][86],

[Source][87]§

#### fn [from_command][88](command: [CommandItem][89]<'de, R>) -> [Result][48]<D, [InvokeError][90]>

Derives an instance of `Self` from the [`CommandItem`][89]. [Read more][88]

[Source][91]§

### impl<T> [From][92]<T> for T

[Source][93]§

#### fn [from][94](t: T) -> T

Returns the argument unchanged.

[Source][95]§

### impl<T, U> [Into][96]<U> for T

where U: [From][92]<T>,

[Source][97]§

#### fn [into][98](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][92]<T> for U` chooses to do.

[Source][99]§

### impl<T> [IpcResponse][100] for T

where T: [Serialize][51],

[Source][101]§

#### fn [body][102](self) -> [Result][48]<[InvokeResponseBody][103], [Error][104]>

Resolve the IPC response body.

[Source][105]§

### impl<T> [ScopeObject][106] for T

where T: [Send][59] \+ [Sync][60] \+ [Debug][42] \+ [DeserializeOwned][107] \+ 'static,

[Source][108]§

#### type [Error][109] = [Error][110]

The error type.

[Source][111]§

#### fn [deserialize][112]<R>( _app: &[AppHandle][113]<R>, raw: Value, ) -> [Result][48]<T, <T as [ScopeObject][106]>::[Error][114]>

where R: [Runtime][86],

Deserialize the raw scope value.

[Source][115]§

### impl<T> [Serialize][116] for T

where T: [Serialize][51] \+ ?[Sized][65],

[Source][117]§

#### fn [erased_serialize][118](&self, serializer: &mut dyn [Serializer][119]) -> [Result][48]<[()][120], [Error][121]>

[Source][122]§

#### fn [do_erased_serialize][123]( &self, serializer: &mut dyn [Serializer][119], ) -> [Result][48]<[()][120], ErrorImpl>

[Source][124]§

### impl<T> [ToOwned][125] for T

where T: [Clone][38],

[Source][126]§

#### type [Owned][127] = T

The resulting type after obtaining ownership.

[Source][128]§

#### fn [to_owned][129](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][129]

[Source][130]§

#### fn [clone_into][131](&self, target: [&mut T][73])

Uses borrowed data to replace owned data, usually by cloning. [Read more][131]

[Source][132]§

### impl<T, U> [TryFrom][133]<U> for T

where U: [Into][96]<T>,

[Source][134]§

#### type [Error][135] = [Infallible][136]

The type returned in the event of a conversion error.

[Source][137]§

#### fn [try_from][138](value: U) -> [Result][48]<T, <T as [TryFrom][133]<U>>::[Error][139]>

Performs the conversion.

[Source][140]§

### impl<T, U> [TryInto][141]<U> for T

where U: [TryFrom][133]<T>,

[Source][142]§

#### type [Error][143] = <U as [TryFrom][133]<T>>::[Error][139]

The type returned in the event of a conversion error.

[Source][144]§

#### fn [try_into][145](self) -> [Result][48]<U, <U as [TryFrom][133]<T>>::[Error][139]>

Performs the conversion.

[Source][146]§

### impl<T> [DeserializeOwned][107] for T

where T: for<'de> [Deserialize][46]<'de>,

§

### impl<T> UserEvent for T

where T: [Debug][42] \+ [Clone][38] \+ [Send][59] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/path/mod.rs.html#95-171
   [6]: https://docs.rs/dirs/
   [7]: struct.PathResolver.html#method.audio_dir (method tauri::path::PathResolver::audio_dir)
   [8]: struct.PathResolver.html#method.cache_dir (method tauri::path::PathResolver::cache_dir)
   [9]: struct.PathResolver.html#method.config_dir (method tauri::path::PathResolver::config_dir)
   [10]: struct.PathResolver.html#method.data_dir (method tauri::path::PathResolver::data_dir)
   [11]: struct.PathResolver.html#method.local_data_dir (method tauri::path::PathResolver::local_data_dir)
   [12]: struct.PathResolver.html#method.document_dir (method tauri::path::PathResolver::document_dir)
   [13]: struct.PathResolver.html#method.download_dir (method tauri::path::PathResolver::download_dir)
   [14]: struct.PathResolver.html#method.picture_dir (method tauri::path::PathResolver::picture_dir)
   [15]: struct.PathResolver.html#method.public_dir (method tauri::path::PathResolver::public_dir)
   [16]: struct.PathResolver.html#method.video_dir (method tauri::path::PathResolver::video_dir)
   [17]: struct.PathResolver.html#method.resource_dir (method tauri::path::PathResolver::resource_dir)
   [18]: https://doc.rust-lang.org/1.94.1/std/env/fn.temp_dir.html (fn std::env::temp_dir)
   [19]: enum.BaseDirectory.html#variant.Config (variant tauri::path::BaseDirectory::Config)
   [20]: enum.BaseDirectory.html#variant.Data (variant tauri::path::BaseDirectory::Data)
   [21]: enum.BaseDirectory.html#variant.LocalData (variant tauri::path::BaseDirectory::LocalData)
   [22]: enum.BaseDirectory.html#variant.Cache (variant tauri::path::BaseDirectory::Cache)
   [23]: enum.BaseDirectory.html#variant.Home (variant tauri::path::BaseDirectory::Home)
   [24]: struct.PathResolver.html#method.desktop_dir (method tauri::path::PathResolver::desktop_dir)
   [25]: struct.PathResolver.html#method.executable_dir (method tauri::path::PathResolver::executable_dir)
   [26]: struct.PathResolver.html#method.font_dir (method tauri::path::PathResolver::font_dir)
   [27]: struct.PathResolver.html#method.home_dir (method tauri::path::PathResolver::home_dir)
   [28]: struct.PathResolver.html#method.runtime_dir (method tauri::path::PathResolver::runtime_dir)
   [29]: struct.PathResolver.html#method.template_dir (method tauri::path::PathResolver::template_dir)
   [30]: ../../src/tauri/path/mod.rs.html#173-247
   [31]: enum.BaseDirectory.html (enum tauri::path::BaseDirectory)
   [32]: ../../src/tauri/path/mod.rs.html#175-207
   [33]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [34]: ../../src/tauri/path/mod.rs.html#210-246
   [35]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [36]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html#variant.None (variant core::option::Option::None)
   [37]: ../../src/tauri/path/mod.rs.html#92
   [38]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [39]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [40]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [41]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [42]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [43]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [44]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [45]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [46]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html (trait serde_core::de::Deserialize)
   [47]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html#tymethod.deserialize
   [48]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [49]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#associatedtype.Error (type serde_core::de::Deserializer::Error)
   [50]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html (trait serde_core::de::Deserializer)
   [51]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [52]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html#tymethod.serialize
   [53]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Ok (type serde_core::ser::Serializer::Ok)
   [54]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Error (type serde_core::ser::Serializer::Error)
   [55]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html (trait serde_core::ser::Serializer)
   [56]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [57]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [58]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [59]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [60]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [61]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [62]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [63]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [64]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [65]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [66]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [67]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [68]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [69]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [70]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [71]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [72]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [73]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [74]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [75]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [76]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [77]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [78]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [79]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [80]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [81]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [82]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [83]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [84]: ../../src/tauri/ipc/command.rs.html#62-70
   [85]: ../ipc/trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [86]: ../trait.Runtime.html (trait tauri::Runtime)
   [87]: ../../src/tauri/ipc/command.rs.html#63-69
   [88]: ../ipc/trait.CommandArg.html#tymethod.from_command
   [89]: ../ipc/struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [90]: ../ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [91]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [92]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [93]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [94]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [95]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [96]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [97]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [98]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [99]: ../../src/tauri/ipc/mod.rs.html#181-187
   [100]: ../ipc/trait.IpcResponse.html (trait tauri::ipc::IpcResponse)
   [101]: ../../src/tauri/ipc/mod.rs.html#182-186
   [102]: ../ipc/trait.IpcResponse.html#tymethod.body
   [103]: ../ipc/enum.InvokeResponseBody.html (enum tauri::ipc::InvokeResponseBody)
   [104]: ../enum.Error.html (enum tauri::Error)
   [105]: ../../src/tauri/ipc/authority.rs.html#686-691
   [106]: ../ipc/trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [107]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)
   [108]: ../../src/tauri/ipc/authority.rs.html#687
   [109]: ../ipc/trait.ScopeObject.html#associatedtype.Error
   [110]: https://docs.rs/serde_json/1.0.149/serde_json/error/struct.Error.html (struct serde_json::error::Error)
   [111]: ../../src/tauri/ipc/authority.rs.html#688-690
   [112]: ../ipc/trait.ScopeObject.html#tymethod.deserialize
   [113]: ../struct.AppHandle.html (struct tauri::AppHandle)
   [114]: ../ipc/trait.ScopeObject.html#associatedtype.Error (type tauri::ipc::ScopeObject::Error)
   [115]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#233-235
   [116]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html (trait erased_serde::ser::Serialize)
   [117]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#237
   [118]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.erased_serialize
   [119]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serializer.html (trait erased_serde::ser::Serializer)
   [120]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [121]: https://docs.rs/erased-serde/0.4.10/erased_serde/error/struct.Error.html (struct erased_serde::error::Error)
   [122]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#245
   [123]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.do_erased_serialize
   [124]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [125]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [126]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [127]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [128]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [129]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [130]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [131]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [132]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [133]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [134]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [135]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [136]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [137]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [138]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [139]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [140]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [141]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [142]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [143]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [144]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [145]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [146]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#633

