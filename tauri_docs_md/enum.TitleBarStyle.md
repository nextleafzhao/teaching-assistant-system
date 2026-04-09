## TitleBarStyle

[![logo][1]][2]

## [tauri][2]2.10.3

## TitleBarStyle

### Variants

  * Overlay
  * Transparent
  * Visible



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



## [In crate tauri][3]

[tauri][3]

# Enum TitleBarStyle Copy item path
[code]
    #[non_exhaustive]
    
    pub enum TitleBarStyle {
        Visible,
        Transparent,
        Overlay,
    }
[/code]

Expand description

How the window title bar should be displayed on macOS.

## Variants (Non-exhaustive)§

This enum is marked as non-exhaustive

Non-exhaustive enums could have additional variants added in future. Therefore, when matching against variants of non-exhaustive enums, an extra wildcard arm must be added to account for any future variants.

§

### Visible

A normal title bar.

§

### Transparent

Makes the title bar transparent, so the window background color is shown instead.

Useful if you don’t need to have actual HTML under the title bar. This lets you avoid the caveats of using `TitleBarStyle::Overlay`. Will be more useful when Tauri lets you set a custom window background color.

§

### Overlay

Shows the title bar as a transparent overlay over the window’s content.

Keep in mind:

  * The height of the title bar is different on different OS versions, which can lead to window the controls and title not being where you don’t expect.
  * You need to define a custom drag region to make your window draggable, however due to a limitation you can’t drag the window when it’s not in focus <https://github.com/tauri-apps/tauri/issues/4316>.
  * The color of the window title depends on the system theme.



## Trait Implementations§

§

### impl [Clone][4] for [TitleBarStyle][5]

§

#### fn [clone][6](&self) -> [TitleBarStyle][5]

Returns a duplicate of the value. [Read more][6]

1.0.0 · [Source][7]§

#### fn [clone_from][8](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][8]

§

### impl [Debug][9] for [TitleBarStyle][5]

§

#### fn [fmt][10](&self, f: &mut [Formatter][11]<'_>) -> [Result][12]<[()][13], [Error][14]>

Formats the value using the given formatter. [Read more][10]

§

### impl [Default][15] for [TitleBarStyle][5]

§

#### fn [default][16]() -> [TitleBarStyle][5]

Returns the “default value” for a type. [Read more][16]

§

### impl<'de> [Deserialize][17]<'de> for [TitleBarStyle][5]

§

#### fn [deserialize][18]<D>( deserializer: D, ) -> [Result][12]<[TitleBarStyle][5], <D as [Deserializer][19]<'de>>::[Error][20]>

where D: [Deserializer][19]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][18]

§

### impl [Display][21] for [TitleBarStyle][5]

§

#### fn [fmt][22](&self, f: &mut [Formatter][11]<'_>) -> [Result][12]<[()][13], [Error][14]>

Formats the value using the given formatter. [Read more][22]

§

### impl [PartialEq][23] for [TitleBarStyle][5]

§

#### fn [eq][24](&self, other: &[TitleBarStyle][5]) -> [bool][25]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][26]§

#### fn [ne][27](&self, other: [&Rhs][28]) -> [bool][25]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl [Serialize][29] for [TitleBarStyle][5]

§

#### fn [serialize][30]<S>( &self, serializer: S, ) -> [Result][12]<<S as [Serializer][31]>::[Ok][32], <S as [Serializer][31]>::[Error][33]>

where S: [Serializer][31],

Serialize this value into the given Serde serializer. [Read more][30]

§

### impl [Copy][34] for [TitleBarStyle][5]

§

### impl [Eq][35] for [TitleBarStyle][5]

§

### impl [StructuralPartialEq][36] for [TitleBarStyle][5]

## Auto Trait Implementations§

§

### impl [Freeze][37] for [TitleBarStyle][5]

§

### impl [RefUnwindSafe][38] for [TitleBarStyle][5]

§

### impl [Send][39] for [TitleBarStyle][5]

§

### impl [Sync][40] for [TitleBarStyle][5]

§

### impl [Unpin][41] for [TitleBarStyle][5]

§

### impl [UnwindSafe][42] for [TitleBarStyle][5]

## Blanket Implementations§

[Source][43]§

### impl<T> [Any][44] for T

where T: 'static + ?[Sized][45],

[Source][46]§

#### fn [type_id][47](&self) -> [TypeId][48]

Gets the `TypeId` of `self`. [Read more][47]

[Source][49]§

### impl<T> [Borrow][50]<T> for T

where T: ?[Sized][45],

[Source][51]§

#### fn [borrow][52](&self) -> [&T][28]

Immutably borrows from an owned value. [Read more][52]

[Source][53]§

### impl<T> [BorrowMut][54]<T> for T

where T: ?[Sized][45],

[Source][55]§

#### fn [borrow_mut][56](&mut self) -> [&mut T][28]

Mutably borrows from an owned value. [Read more][56]

[Source][57]§

### impl<T> [CloneToUninit][58] for T

where T: [Clone][4],

[Source][59]§

#### unsafe fn [clone_to_uninit][60](&self, dest: [*mut ][61][u8][62])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][60]

[Source][63]§

### impl<'de, D, R> [CommandArg][64]<'de, R> for D

where D: [Deserialize][17]<'de>, R: [Runtime][65],

[Source][66]§

#### fn [from_command][67](command: [CommandItem][68]<'de, R>) -> [Result][12]<D, [InvokeError][69]>

Derives an instance of `Self` from the [`CommandItem`][68]. [Read more][67]

[Source][70]§

### impl<T> [From][71]<T> for T

[Source][72]§

#### fn [from][73](t: T) -> T

Returns the argument unchanged.

[Source][74]§

### impl<T, U> [Into][75]<U> for T

where U: [From][71]<T>,

[Source][76]§

#### fn [into][77](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][71]<T> for U` chooses to do.

[Source][78]§

### impl<T> [IpcResponse][79] for T

where T: [Serialize][29],

[Source][80]§

#### fn [body][81](self) -> [Result][12]<[InvokeResponseBody][82], [Error][83]>

Resolve the IPC response body.

[Source][84]§

### impl<T> [ScopeObject][85] for T

where T: [Send][39] \+ [Sync][40] \+ [Debug][9] \+ [DeserializeOwned][86] \+ 'static,

[Source][87]§

#### type [Error][88] = [Error][89]

The error type.

[Source][90]§

#### fn [deserialize][91]<R>( _app: &[AppHandle][92]<R>, raw: Value, ) -> [Result][12]<T, <T as [ScopeObject][85]>::[Error][93]>

where R: [Runtime][65],

Deserialize the raw scope value.

[Source][94]§

### impl<T> [Serialize][95] for T

where T: [Serialize][29] \+ ?[Sized][45],

[Source][96]§

#### fn [erased_serialize][97](&self, serializer: &mut dyn [Serializer][98]) -> [Result][12]<[()][13], [Error][99]>

[Source][100]§

#### fn [do_erased_serialize][101]( &self, serializer: &mut dyn [Serializer][98], ) -> [Result][12]<[()][13], ErrorImpl>

[Source][102]§

### impl<T> [ToOwned][103] for T

where T: [Clone][4],

[Source][104]§

#### type [Owned][105] = T

The resulting type after obtaining ownership.

[Source][106]§

#### fn [to_owned][107](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][107]

[Source][108]§

#### fn [clone_into][109](&self, target: [&mut T][28])

Uses borrowed data to replace owned data, usually by cloning. [Read more][109]

[Source][110]§

### impl<T> [ToString][111] for T

where T: [Display][21] \+ ?[Sized][45],

[Source][112]§

#### fn [to_string][113](&self) -> [String][114]

Converts the given value to a `String`. [Read more][113]

[Source][115]§

### impl<T, U> [TryFrom][116]<U> for T

where U: [Into][75]<T>,

[Source][117]§

#### type [Error][118] = [Infallible][119]

The type returned in the event of a conversion error.

[Source][120]§

#### fn [try_from][121](value: U) -> [Result][12]<T, <T as [TryFrom][116]<U>>::[Error][122]>

Performs the conversion.

[Source][123]§

### impl<T, U> [TryInto][124]<U> for T

where U: [TryFrom][116]<T>,

[Source][125]§

#### type [Error][126] = <U as [TryFrom][116]<T>>::[Error][122]

The type returned in the event of a conversion error.

[Source][127]§

#### fn [try_into][128](self) -> [Result][12]<U, <U as [TryFrom][116]<T>>::[Error][122]>

Performs the conversion.

[Source][129]§

### impl<T> [DeserializeOwned][86] for T

where T: for<'de> [Deserialize][17]<'de>,

§

### impl<T> UserEvent for T

where T: [Debug][9] \+ [Clone][4] \+ [Send][39] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [5]: enum.TitleBarStyle.html (enum tauri::TitleBarStyle)
   [6]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [7]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [8]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [9]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [10]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [11]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [12]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [14]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [15]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [16]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [17]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html (trait serde_core::de::Deserialize)
   [18]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html#tymethod.deserialize
   [19]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html (trait serde_core::de::Deserializer)
   [20]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#associatedtype.Error (type serde_core::de::Deserializer::Error)
   [21]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [22]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html#tymethod.fmt
   [23]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [24]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [25]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [26]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [27]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [28]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [29]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [30]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html#tymethod.serialize
   [31]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html (trait serde_core::ser::Serializer)
   [32]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Ok (type serde_core::ser::Serializer::Ok)
   [33]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Error (type serde_core::ser::Serializer::Error)
   [34]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [35]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [36]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [37]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [38]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [39]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [40]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [41]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [42]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [44]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [45]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [47]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [48]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [49]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [50]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [51]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [52]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [53]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [54]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [56]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [57]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [58]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [59]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [60]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [61]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [62]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [63]: ../src/tauri/ipc/command.rs.html#62-70
   [64]: ipc/trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [65]: trait.Runtime.html (trait tauri::Runtime)
   [66]: ../src/tauri/ipc/command.rs.html#63-69
   [67]: ipc/trait.CommandArg.html#tymethod.from_command
   [68]: ipc/struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [69]: ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [70]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [72]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [74]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [75]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
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
   [110]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2893
   [111]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html (trait alloc::string::ToString)
   [112]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2895
   [113]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html#tymethod.to_string
   [114]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
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

