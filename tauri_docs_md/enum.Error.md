## Error

[![logo][1]][2]

## [tauri][2]2.10.3

## Error

### Variants

  * Anyhow
  * AssetNotFound
  * BadMenuIcon
  * BadResourceId
  * CannotDeserializeScope
  * CannotReparentWebviewWindow
  * Csprng
  * CurrentDir
  * FailedToReceiveMessage
  * GlobPattern
  * IllegalEventName
  * InvalidArgs
  * InvalidIcon
  * InvalidUrl
  * InvalidWebviewUrl
  * InvalidWindowHandle
  * InvokeKey
  * Io
  * JoinError
  * Json
  * Menu
  * NoBasename
  * NoExtension
  * NoParent
  * PluginInitialization
  * RawHandleError
  * Runtime
  * Setup
  * TokioOneshotRecv
  * UnknownPath
  * UnstableFeatureNotSupported
  * WebviewLabelAlreadyExists
  * WebviewNotFound
  * WindowLabelAlreadyExists
  * WindowNotFound



### Trait Implementations

  * Debug
  * Display
  * Error
  * From<BadIcon>
  * From<Error>
  * From<Error>
  * From<Error>
  * From<Error>
  * From<Error>
  * From<Error>
  * From<Error>
  * From<HandleError>
  * From<JoinError>
  * From<PatternError>
  * From<RecvError>



### Auto Trait Implementations

  * !RefUnwindSafe
  * !UnwindSafe
  * Freeze
  * Send
  * Sync
  * Unpin



### Blanket Implementations

  * Any
  * Borrow<T>
  * BorrowMut<T>
  * From<T>
  * Into<U>
  * ToString
  * TryFrom<U>
  * TryInto<U>



## [In crate tauri][3]

[tauri][3]

# Enum Error Copy item path

[Source][4]
[code] 
    #[non_exhaustive]
    
    pub enum Error {
    Show 35 variants    Runtime(Error),
        WindowLabelAlreadyExists([String][5]),
        WebviewLabelAlreadyExists([String][5]),
        CannotReparentWebviewWindow,
        AssetNotFound([String][5]),
        Json([Error][6]),
        Io([Error][7]),
        InvalidIcon([Error][7]),
        InvalidArgs(&'static [str][8], &'static [str][8], [Error][6]),
        Setup(SetupError),
        PluginInitialization([String][5], [String][5]),
        InvalidUrl([ParseError][9]),
        JoinError(JoinError),
        InvalidWebviewUrl(&'static [str][8]),
        GlobPattern([PatternError][10]),
        InvalidWindowHandle,
        FailedToReceiveMessage,
        Menu(Error),
        BadMenuIcon(BadIcon),
        NoParent,
        NoExtension,
        NoBasename,
        CurrentDir([Error][7]),
        UnknownPath,
        WindowNotFound,
        BadResourceId([ResourceId][11]),
        Anyhow([Error][12]),
        WebviewNotFound,
        UnstableFeatureNotSupported,
        CannotDeserializeScope([Box][13]<dyn [Error][14] + [Send][15] + [Sync][16]>),
        RawHandleError(HandleError),
        Csprng(Error),
        InvokeKey,
        IllegalEventName([String][5]),
        TokioOneshotRecv(RecvError),
    }
[/code]

Expand description

Runtime errors that can happen inside a Tauri application.

## Variants (Non-exhaustive)§

This enum is marked as non-exhaustive

Non-exhaustive enums could have additional variants added in future. Therefore, when matching against variants of non-exhaustive enums, an extra wildcard arm must be added to account for any future variants.

§

### Runtime(Error)

Runtime error.

§

### WindowLabelAlreadyExists([String][5])

Window label must be unique.

§

### WebviewLabelAlreadyExists([String][5])

Webview label must be unique.

§

### CannotReparentWebviewWindow

Cannot use the webview reparent function on webview windows.

§

### AssetNotFound([String][5])

Embedded asset not found.

§

### Json([Error][6])

Failed to serialize/deserialize.

§

### Io([Error][7])

IO error.

§

### InvalidIcon([Error][7])

Failed to load window icon.

§

### InvalidArgs(&'static [str][8], &'static [str][8], [Error][6])

Invalid args when running a command.

§

### Setup(SetupError)

Encountered an error in the setup hook,

§

### PluginInitialization([String][5], [String][5])

Error initializing plugin.

§

### InvalidUrl([ParseError][9])

A part of the URL is malformed or invalid. This may occur when parsing and combining user-provided URLs and paths.

§

### JoinError(JoinError)

Task join error.

§

### InvalidWebviewUrl(&'static [str][8])

An invalid window URL was provided. Includes details about the error.

§

### GlobPattern([PatternError][10])

Invalid glob pattern.

§

### InvalidWindowHandle

The Window’s raw handle is invalid for the platform.

§

### FailedToReceiveMessage

Failed to receive message .

§

### Menu(Error)

Menu error.

§

### BadMenuIcon(BadIcon)

Bad menu icon error.

§

### NoParent

Path does not have a parent.

§

### NoExtension

Path does not have an extension.

§

### NoBasename

Path does not have a basename.

§

### CurrentDir([Error][7])

Cannot resolve current directory.

§

### UnknownPath

Unknown path.

§

### WindowNotFound

window not found.

§

### BadResourceId([ResourceId][11])

The resource id is invalid.

§

### Anyhow([Error][12])

The anyhow crate error.

§

### WebviewNotFound

webview not found.

§

### UnstableFeatureNotSupported

API requires the unstable feature flag.

§

### CannotDeserializeScope([Box][13]<dyn [Error][14] \+ [Send][15] \+ [Sync][16]>)

Failed to deserialize scope object.

§

### RawHandleError(HandleError)

Failed to get a raw handle.

§

### Csprng(Error)

Something went wrong with the CSPRNG.

§

### InvokeKey

Bad `__TAURI_INVOKE_KEY__` value received in ipc message.

§

### IllegalEventName([String][5])

Illegal event name.

§

### TokioOneshotRecv(RecvError)

tokio oneshot channel failed to receive message

## Trait Implementations§

[Source][17]§

### impl [Debug][18] for [Error][19]

[Source][17]§

#### fn [fmt][20](&self, f: &mut [Formatter][21]<'_>) -> [Result][22]

Formats the value using the given formatter. [Read more][20]

[Source][17]§

### impl [Display][23] for [Error][19]

[Source][17]§

#### fn [fmt][24](&self, __formatter: &mut [Formatter][21]<'_>) -> [Result][22]

Formats the value using the given formatter. [Read more][24]

[Source][17]§

### impl [Error][14] for [Error][19]

[Source][17]§

#### fn [source][25](&self) -> [Option][26]<&(dyn [Error][14] \+ 'static)>

Returns the lower-level source of this error, if any. [Read more][25]

1.0.0 · [Source][27]§

#### fn [description][28](&self) -> &[str][8]

👎Deprecated since 1.42.0: use the Display impl or to_string()

[Read more][28]

1.0.0 · [Source][29]§

#### fn [cause][30](&self) -> [Option][26]<&dyn [Error][14]>

👎Deprecated since 1.33.0: replaced by Error::source, which can support downcasting

[Source][31]§

#### fn [provide][32]<'a>(&'a self, request: &mut [Request][33]<'a>)

🔬This is a nightly-only experimental API. (`error_generic_member_access`)

Provides type-based access to context intended for error reports. [Read more][32]

[Source][34]§

### impl [From][35]<BadIcon> for [Error][19]

[Source][17]§

#### fn [from][36](source: BadIcon) -> Self

Converts to this type from the input type.

[Source][37]§

### impl [From][35]<Error> for [Error][19]

[Source][17]§

#### fn [from][36](source: Error) -> Self

Converts to this type from the input type.

[Source][38]§

### impl [From][35]<[Error][6]> for [Error][19]

[Source][17]§

#### fn [from][36](source: [Error][6]) -> Self

Converts to this type from the input type.

[Source][39]§

### impl [From][35]<[Error][7]> for [Error][19]

[Source][17]§

#### fn [from][36](source: [Error][7]) -> Self

Converts to this type from the input type.

[Source][40]§

### impl [From][35]<Error> for [Error][19]

[Source][17]§

#### fn [from][36](source: Error) -> Self

Converts to this type from the input type.

[Source][41]§

### impl [From][35]<[Error][12]> for [Error][19]

[Source][17]§

#### fn [from][36](source: [Error][12]) -> Self

Converts to this type from the input type.

[Source][42]§

### impl [From][35]<Error> for [Error][19]

[Source][43]§

#### fn [from][36](value: Error) -> Self

Converts to this type from the input type.

[Source][44]§

### impl [From][35]<[Error][19]> for [InvokeError][45]

[Source][46]§

#### fn [from][36](error: [Error][19]) -> Self

Converts to this type from the input type.

[Source][47]§

### impl [From][35]<HandleError> for [Error][19]

[Source][17]§

#### fn [from][36](source: HandleError) -> Self

Converts to this type from the input type.

[Source][48]§

### impl [From][35]<JoinError> for [Error][19]

[Source][17]§

#### fn [from][36](source: JoinError) -> Self

Converts to this type from the input type.

[Source][49]§

### impl [From][35]<[PatternError][10]> for [Error][19]

[Source][17]§

#### fn [from][36](source: [PatternError][10]) -> Self

Converts to this type from the input type.

[Source][50]§

### impl [From][35]<RecvError> for [Error][19]

[Source][17]§

#### fn [from][36](source: RecvError) -> Self

Converts to this type from the input type.

## Auto Trait Implementations§

§

### impl [Freeze][51] for [Error][19]

§

### impl ![RefUnwindSafe][52] for [Error][19]

§

### impl [Send][15] for [Error][19]

§

### impl [Sync][16] for [Error][19]

§

### impl [Unpin][53] for [Error][19]

§

### impl ![UnwindSafe][54] for [Error][19]

## Blanket Implementations§

[Source][55]§

### impl<T> [Any][56] for T

where T: 'static + ?[Sized][57],

[Source][58]§

#### fn [type_id][59](&self) -> [TypeId][60]

Gets the `TypeId` of `self`. [Read more][59]

[Source][61]§

### impl<T> [Borrow][62]<T> for T

where T: ?[Sized][57],

[Source][63]§

#### fn [borrow][64](&self) -> [&T][65]

Immutably borrows from an owned value. [Read more][64]

[Source][66]§

### impl<T> [BorrowMut][67]<T> for T

where T: ?[Sized][57],

[Source][68]§

#### fn [borrow_mut][69](&mut self) -> [&mut T][65]

Mutably borrows from an owned value. [Read more][69]

[Source][70]§

### impl<T> [From][35]<T> for T

[Source][71]§

#### fn [from][36](t: T) -> T

Returns the argument unchanged.

[Source][72]§

### impl<T, U> [Into][73]<U> for T

where U: [From][35]<T>,

[Source][74]§

#### fn [into][75](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][35]<T> for U` chooses to do.

[Source][76]§

### impl<T> [ToString][77] for T

where T: [Display][23] \+ ?[Sized][57],

[Source][78]§

#### fn [to_string][79](&self) -> [String][5]

Converts the given value to a `String`. [Read more][79]

[Source][80]§

### impl<T, U> [TryFrom][81]<U> for T

where U: [Into][73]<T>,

[Source][82]§

#### type [Error][83] = [Infallible][84]

The type returned in the event of a conversion error.

[Source][85]§

#### fn [try_from][86](value: U) -> [Result][87]<T, <T as [TryFrom][81]<U>>::[Error][88]>

Performs the conversion.

[Source][89]§

### impl<T, U> [TryInto][90]<U> for T

where U: [TryFrom][81]<T>,

[Source][91]§

#### type [Error][92] = <U as [TryFrom][81]<T>>::[Error][88]

The type returned in the event of a conversion error.

[Source][93]§

#### fn [try_into][94](self) -> [Result][87]<U, <U as [TryFrom][81]<T>>::[Error][88]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/error.rs.html#33-169
   [5]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [6]: https://docs.rs/serde_json/1.0.149/serde_json/error/struct.Error.html (struct serde_json::error::Error)
   [7]: https://doc.rust-lang.org/1.94.1/std/io/error/struct.Error.html (struct std::io::error::Error)
   [8]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [9]: https://docs.rs/url/2.5.7/url/parser/enum.ParseError.html (enum url::parser::ParseError)
   [10]: https://docs.rs/glob/0.3.1/glob/struct.PatternError.html (struct glob::PatternError)
   [11]: type.ResourceId.html (type tauri::ResourceId)
   [12]: https://docs.rs/anyhow/1.0.102/anyhow/struct.Error.html (struct anyhow::Error)
   [13]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [14]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [15]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [16]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [17]: ../src/tauri/error.rs.html#31
   [18]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [19]: enum.Error.html (enum tauri::Error)
   [20]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [21]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [22]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [23]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [24]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html#tymethod.fmt
   [25]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.source
   [26]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [27]: https://doc.rust-lang.org/1.94.1/src/core/error.rs.html#137
   [28]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.description
   [29]: https://doc.rust-lang.org/1.94.1/src/core/error.rs.html#147
   [30]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.cause
   [31]: https://doc.rust-lang.org/1.94.1/src/core/error.rs.html#260
   [32]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.provide
   [33]: https://doc.rust-lang.org/1.94.1/core/error/struct.Request.html (struct core::error::Request)
   [34]: ../src/tauri/error.rs.html#105
   [35]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [36]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [37]: ../src/tauri/error.rs.html#36
   [38]: ../src/tauri/error.rs.html#51
   [39]: ../src/tauri/error.rs.html#54
   [40]: ../src/tauri/error.rs.html#101
   [41]: ../src/tauri/error.rs.html#144
   [42]: ../src/tauri/error.rs.html#171-175
   [43]: ../src/tauri/error.rs.html#172-174
   [44]: ../src/tauri/ipc/mod.rs.html#249-254
   [45]: ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [46]: ../src/tauri/ipc/mod.rs.html#251-253
   [47]: ../src/tauri/error.rs.html#156
   [48]: ../src/tauri/error.rs.html#73
   [49]: ../src/tauri/error.rs.html#83
   [50]: ../src/tauri/error.rs.html#168
   [51]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [52]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [53]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [54]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [56]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [57]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [59]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [60]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [61]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [62]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [63]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [64]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [65]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [66]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [67]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [68]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [69]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [70]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [71]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [72]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [74]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [75]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [76]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2893
   [77]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html (trait alloc::string::ToString)
   [78]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2895
   [79]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html#tymethod.to_string
   [80]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [81]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [82]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [83]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [84]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [85]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [86]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [87]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [88]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [89]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [90]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [91]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [92]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [93]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [94]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

