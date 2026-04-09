## EventTarget

[![logo][1]][2]

## [tauri][2]2.10.3

## EventTarget

### Variants

  * Any
  * AnyLabel
  * App
  * Webview
  * WebviewWindow
  * Window



### Methods

  * any
  * app
  * labeled
  * webview
  * webview_window
  * window



### Trait Implementations

  * Clone
  * Debug
  * Deserialize<'de>
  * Eq
  * From<T>
  * FromStr
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



## [In crate tauri][3]

[tauri][3]

# Enum EventTarget Copy item path

[Source][4]
[code] 
    #[non_exhaustive]
    
    pub enum EventTarget {
        Any,
        AnyLabel {
            label: [String][5],
        },
        App,
        Window {
            label: [String][5],
        },
        Webview {
            label: [String][5],
        },
        WebviewWindow {
            label: [String][5],
        },
    }
[/code]

Expand description

Event Target

## Variants (Non-exhaustive)§

This enum is marked as non-exhaustive

Non-exhaustive enums could have additional variants added in future. Therefore, when matching against variants of non-exhaustive enums, an extra wildcard arm must be added to account for any future variants.

§

### Any

Any and all event targets.

§

### AnyLabel

Any [`Window`][6], [`Webview`][7] or [`WebviewWindow`][8] that have this label.

#### Fields

§`label: [String][5]`

Target label.

§

### App

[`App`][9] and [`AppHandle`][10] targets.

§

### Window

[`Window`][6] target.

#### Fields

§`label: [String][5]`

window label.

§

### Webview

[`Webview`][7] target.

#### Fields

§`label: [String][5]`

webview label.

§

### WebviewWindow

[`WebviewWindow`][8] target.

#### Fields

§`label: [String][5]`

webview window label.

## Implementations§

[Source][11]§

### impl [EventTarget][12]

[Source][13]

#### pub fn any() -> Self

[`Self::Any`][14] target.

[Source][15]

#### pub fn app() -> Self

[`Self::App`][16] target.

[Source][17]

#### pub fn labeled(label: impl [Into][18]<[String][5]>) -> Self

[`Self::AnyLabel`][19] target.

[Source][20]

#### pub fn window(label: impl [Into][18]<[String][5]>) -> Self

[`Self::Window`][21] target.

[Source][22]

#### pub fn webview(label: impl [Into][18]<[String][5]>) -> Self

[`Self::Webview`][23] target.

[Source][24]

#### pub fn webview_window(label: impl [Into][18]<[String][5]>) -> Self

[`Self::WebviewWindow`][25] target.

## Trait Implementations§

[Source][26]§

### impl [Clone][27] for [EventTarget][12]

[Source][26]§

#### fn [clone][28](&self) -> [EventTarget][12]

Returns a duplicate of the value. [Read more][28]

1.0.0 · [Source][29]§

#### fn [clone_from][30](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][30]

[Source][26]§

### impl [Debug][31] for [EventTarget][12]

[Source][26]§

#### fn [fmt][32](&self, f: &mut [Formatter][33]<'_>) -> [Result][34]

Formats the value using the given formatter. [Read more][32]

[Source][26]§

### impl<'de> [Deserialize][35]<'de> for [EventTarget][12]

[Source][26]§

#### fn [deserialize][36]<__D>(__deserializer: __D) -> [Result][37]<Self, __D::[Error][38]>

where __D: [Deserializer][39]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][36]

[Source][40]§

### impl<T: [AsRef][41]<[str][42]>> [From][43]<T> for [EventTarget][12]

[Source][44]§

#### fn [from][45](value: T) -> Self

Converts to this type from the input type.

[Source][46]§

### impl [FromStr][47] for [EventTarget][12]

[Source][48]§

#### type [Err][49] = [Infallible][50]

The associated error which can be returned from parsing.

[Source][51]§

#### fn [from_str][52](s: &[str][42]) -> [Result][37]<Self, Self::[Err][53]>

Parses a string `s` to return a value of this type. [Read more][52]

[Source][26]§

### impl [Hash][54] for [EventTarget][12]

[Source][26]§

#### fn [hash][55]<__H: [Hasher][56]>(&self, state: [&mut __H][57])

Feeds this value into the given [`Hasher`][56]. [Read more][55]

1.3.0 · [Source][58]§

#### fn [hash_slice][59]<H>(data: &[Self], state: [&mut H][57])

where H: [Hasher][56], Self: [Sized][60],

Feeds a slice of this type into the given [`Hasher`][56]. [Read more][59]

[Source][26]§

### impl [PartialEq][61] for [EventTarget][12]

[Source][26]§

#### fn [eq][62](&self, other: &[EventTarget][12]) -> [bool][63]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][64]§

#### fn [ne][65](&self, other: [&Rhs][57]) -> [bool][63]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][26]§

### impl [Serialize][66] for [EventTarget][12]

[Source][26]§

#### fn [serialize][67]<__S>(&self, __serializer: __S) -> [Result][37]<__S::[Ok][68], __S::[Error][69]>

where __S: [Serializer][70],

Serialize this value into the given Serde serializer. [Read more][67]

[Source][26]§

### impl [Eq][71] for [EventTarget][12]

[Source][26]§

### impl [StructuralPartialEq][72] for [EventTarget][12]

## Auto Trait Implementations§

§

### impl [Freeze][73] for [EventTarget][12]

§

### impl [RefUnwindSafe][74] for [EventTarget][12]

§

### impl [Send][75] for [EventTarget][12]

§

### impl [Sync][76] for [EventTarget][12]

§

### impl [Unpin][77] for [EventTarget][12]

§

### impl [UnwindSafe][78] for [EventTarget][12]

## Blanket Implementations§

[Source][79]§

### impl<T> [Any][80] for T

where T: 'static + ?[Sized][60],

[Source][81]§

#### fn [type_id][82](&self) -> [TypeId][83]

Gets the `TypeId` of `self`. [Read more][82]

[Source][84]§

### impl<T> [Borrow][85]<T> for T

where T: ?[Sized][60],

[Source][86]§

#### fn [borrow][87](&self) -> [&T][57]

Immutably borrows from an owned value. [Read more][87]

[Source][88]§

### impl<T> [BorrowMut][89]<T> for T

where T: ?[Sized][60],

[Source][90]§

#### fn [borrow_mut][91](&mut self) -> [&mut T][57]

Mutably borrows from an owned value. [Read more][91]

[Source][92]§

### impl<T> [CloneToUninit][93] for T

where T: [Clone][27],

[Source][94]§

#### unsafe fn [clone_to_uninit][95](&self, dest: [*mut ][96][u8][97])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][95]

[Source][98]§

### impl<'de, D, R> [CommandArg][99]<'de, R> for D

where D: [Deserialize][35]<'de>, R: [Runtime][100],

[Source][101]§

#### fn [from_command][102](command: [CommandItem][103]<'de, R>) -> [Result][37]<D, [InvokeError][104]>

Derives an instance of `Self` from the [`CommandItem`][103]. [Read more][102]

[Source][105]§

### impl<T> [From][43]<T> for T

[Source][106]§

#### fn [from][45](t: T) -> T

Returns the argument unchanged.

[Source][107]§

### impl<T, U> [Into][18]<U> for T

where U: [From][43]<T>,

[Source][108]§

#### fn [into][109](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][43]<T> for U` chooses to do.

[Source][110]§

### impl<T> [IpcResponse][111] for T

where T: [Serialize][66],

[Source][112]§

#### fn [body][113](self) -> [Result][37]<[InvokeResponseBody][114], [Error][115]>

Resolve the IPC response body.

[Source][116]§

### impl<T> [ScopeObject][117] for T

where T: [Send][75] \+ [Sync][76] \+ [Debug][31] \+ [DeserializeOwned][118] \+ 'static,

[Source][119]§

#### type [Error][120] = [Error][121]

The error type.

[Source][122]§

#### fn [deserialize][123]<R>( _app: &[AppHandle][10]<R>, raw: Value, ) -> [Result][37]<T, <T as [ScopeObject][117]>::[Error][124]>

where R: [Runtime][100],

Deserialize the raw scope value.

[Source][125]§

### impl<T> [Serialize][126] for T

where T: [Serialize][66] \+ ?[Sized][60],

[Source][127]§

#### fn [erased_serialize][128](&self, serializer: &mut dyn [Serializer][129]) -> [Result][37]<[()][130], [Error][131]>

[Source][132]§

#### fn [do_erased_serialize][133]( &self, serializer: &mut dyn [Serializer][129], ) -> [Result][37]<[()][130], ErrorImpl>

[Source][134]§

### impl<T> [ToOwned][135] for T

where T: [Clone][27],

[Source][136]§

#### type [Owned][137] = T

The resulting type after obtaining ownership.

[Source][138]§

#### fn [to_owned][139](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][139]

[Source][140]§

#### fn [clone_into][141](&self, target: [&mut T][57])

Uses borrowed data to replace owned data, usually by cloning. [Read more][141]

[Source][142]§

### impl<T, U> [TryFrom][143]<U> for T

where U: [Into][18]<T>,

[Source][144]§

#### type [Error][145] = [Infallible][50]

The type returned in the event of a conversion error.

[Source][146]§

#### fn [try_from][147](value: U) -> [Result][37]<T, <T as [TryFrom][143]<U>>::[Error][148]>

Performs the conversion.

[Source][149]§

### impl<T, U> [TryInto][150]<U> for T

where U: [TryFrom][143]<T>,

[Source][151]§

#### type [Error][152] = <U as [TryFrom][143]<T>>::[Error][148]

The type returned in the event of a conversion error.

[Source][153]§

#### fn [try_into][154](self) -> [Result][37]<U, <U as [TryFrom][143]<T>>::[Error][148]>

Performs the conversion.

[Source][155]§

### impl<T> [DeserializeOwned][118] for T

where T: for<'de> [Deserialize][35]<'de>,

§

### impl<T> UserEvent for T

where T: [Debug][31] \+ [Clone][27] \+ [Send][75] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/event/mod.rs.html#25-55
   [5]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [6]: window/struct.Window.html (struct tauri::window::Window)
   [7]: webview/struct.Webview.html (struct tauri::webview::Webview)
   [8]: webview/struct.WebviewWindow.html (struct tauri::webview::WebviewWindow)
   [9]: struct.App.html (struct tauri::App)
   [10]: struct.AppHandle.html (struct tauri::AppHandle)
   [11]: ../src/tauri/event/mod.rs.html#57-95
   [12]: enum.EventTarget.html (enum tauri::EventTarget)
   [13]: ../src/tauri/event/mod.rs.html#59-61
   [14]: enum.EventTarget.html#variant.Any (variant tauri::EventTarget::Any)
   [15]: ../src/tauri/event/mod.rs.html#64-66
   [16]: enum.EventTarget.html#variant.App (variant tauri::EventTarget::App)
   [17]: ../src/tauri/event/mod.rs.html#69-73
   [18]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [19]: enum.EventTarget.html#variant.AnyLabel (variant tauri::EventTarget::AnyLabel)
   [20]: ../src/tauri/event/mod.rs.html#76-80
   [21]: enum.EventTarget.html#variant.Window (variant tauri::EventTarget::Window)
   [22]: ../src/tauri/event/mod.rs.html#83-87
   [23]: enum.EventTarget.html#variant.Webview (variant tauri::EventTarget::Webview)
   [24]: ../src/tauri/event/mod.rs.html#90-94
   [25]: enum.EventTarget.html#variant.WebviewWindow (variant tauri::EventTarget::WebviewWindow)
   [26]: ../src/tauri/event/mod.rs.html#22
   [27]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [28]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [29]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [30]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [31]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [32]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [33]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [34]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [35]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html (trait serde_core::de::Deserialize)
   [36]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html#tymethod.deserialize
   [37]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [38]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#associatedtype.Error (type serde_core::de::Deserializer::Error)
   [39]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html (trait serde_core::de::Deserializer)
   [40]: ../src/tauri/event/mod.rs.html#97-103
   [41]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [42]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [43]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [44]: ../src/tauri/event/mod.rs.html#98-102
   [45]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [46]: ../src/tauri/event/mod.rs.html#105-113
   [47]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html (trait core::str::traits::FromStr)
   [48]: ../src/tauri/event/mod.rs.html#106
   [49]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#associatedtype.Err
   [50]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [51]: ../src/tauri/event/mod.rs.html#108-112
   [52]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#tymethod.from_str
   [53]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#associatedtype.Err (type core::str::traits::FromStr::Err)
   [54]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html (trait core::hash::Hash)
   [55]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#tymethod.hash
   [56]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hasher.html (trait core::hash::Hasher)
   [57]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [58]: https://doc.rust-lang.org/1.94.1/src/core/hash/mod.rs.html#235-237
   [59]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#method.hash_slice
   [60]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [61]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [62]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [63]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [64]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [65]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [66]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [67]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html#tymethod.serialize
   [68]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Ok (type serde_core::ser::Serializer::Ok)
   [69]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Error (type serde_core::ser::Serializer::Error)
   [70]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html (trait serde_core::ser::Serializer)
   [71]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [72]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [73]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [74]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [75]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [76]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [77]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [78]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [79]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [80]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [81]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [82]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [83]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [84]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [85]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [86]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [87]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [88]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [89]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [90]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [91]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [92]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [93]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [94]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [95]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [96]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [97]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [98]: ../src/tauri/ipc/command.rs.html#62-70
   [99]: ipc/trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [100]: trait.Runtime.html (trait tauri::Runtime)
   [101]: ../src/tauri/ipc/command.rs.html#63-69
   [102]: ipc/trait.CommandArg.html#tymethod.from_command
   [103]: ipc/struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [104]: ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [105]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [106]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [107]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [108]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [109]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [110]: ../src/tauri/ipc/mod.rs.html#181-187
   [111]: ipc/trait.IpcResponse.html (trait tauri::ipc::IpcResponse)
   [112]: ../src/tauri/ipc/mod.rs.html#182-186
   [113]: ipc/trait.IpcResponse.html#tymethod.body
   [114]: ipc/enum.InvokeResponseBody.html (enum tauri::ipc::InvokeResponseBody)
   [115]: enum.Error.html (enum tauri::Error)
   [116]: ../src/tauri/ipc/authority.rs.html#686-691
   [117]: ipc/trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [118]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)
   [119]: ../src/tauri/ipc/authority.rs.html#687
   [120]: ipc/trait.ScopeObject.html#associatedtype.Error
   [121]: https://docs.rs/serde_json/1.0.149/serde_json/error/struct.Error.html (struct serde_json::error::Error)
   [122]: ../src/tauri/ipc/authority.rs.html#688-690
   [123]: ipc/trait.ScopeObject.html#tymethod.deserialize
   [124]: ipc/trait.ScopeObject.html#associatedtype.Error (type tauri::ipc::ScopeObject::Error)
   [125]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#233-235
   [126]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html (trait erased_serde::ser::Serialize)
   [127]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#237
   [128]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.erased_serialize
   [129]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serializer.html (trait erased_serde::ser::Serializer)
   [130]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [131]: https://docs.rs/erased-serde/0.4.10/erased_serde/error/struct.Error.html (struct erased_serde::error::Error)
   [132]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#245
   [133]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.do_erased_serialize
   [134]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [135]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [136]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [137]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [138]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [139]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [140]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [141]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [142]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [143]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [144]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [145]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [146]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [147]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [148]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [149]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [150]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [151]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [152]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [153]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [154]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [155]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#633

