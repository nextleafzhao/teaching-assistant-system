## Effect

[![logo][1]][2]

## [tauri][2]2.10.3

## Effect

### Variants

  * Acrylic
  * AppearanceBased
  * Blur
  * ContentBackground
  * Dark
  * FullScreenUI
  * HeaderView
  * HudWindow
  * Light
  * MediumLight
  * Menu
  * Mica
  * MicaDark
  * MicaLight
  * Popover
  * Selection
  * Sheet
  * Sidebar
  * Tabbed
  * TabbedDark
  * TabbedLight
  * Titlebar
  * Tooltip
  * UltraDark
  * UnderPageBackground
  * UnderWindowBackground
  * WindowBackground



### Trait Implementations

  * Clone
  * Copy
  * Debug
  * Deserialize<'de>
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
  * TryFrom<U>
  * TryInto<U>
  * UserEvent



## [In tauri::window][3]

[tauri][4]::[window][3]

# Enum Effect Copy item path
[code]
    pub enum Effect {
    Show 27 variants    AppearanceBased,
        Light,
        Dark,
        MediumLight,
        UltraDark,
        Titlebar,
        Selection,
        Menu,
        Popover,
        Sidebar,
        HeaderView,
        Sheet,
        WindowBackground,
        HudWindow,
        FullScreenUI,
        Tooltip,
        ContentBackground,
        UnderWindowBackground,
        UnderPageBackground,
        Mica,
        MicaDark,
        MicaLight,
        Tabbed,
        TabbedDark,
        TabbedLight,
        Blur,
        Acrylic,
    }
[/code]

Expand description

Platform-specific window effects

## Variants§

§

### AppearanceBased

👎Deprecated since macOS 10.14: You should instead choose an appropriate semantic material.

A default material appropriate for the view’s effectiveAppearance. **macOS 10.14-**

§

### Light

👎Deprecated since macOS 10.14: Use a semantic material instead.

**macOS 10.14-**

§

### Dark

👎Deprecated since macOS 10.14: Use a semantic material instead.

**macOS 10.14-**

§

### MediumLight

👎Deprecated since macOS 10.14: Use a semantic material instead.

**macOS 10.14-**

§

### UltraDark

👎Deprecated since macOS 10.14: Use a semantic material instead.

**macOS 10.14-**

§

### Titlebar

**macOS 10.10+**

§

### Selection

**macOS 10.10+**

§

### Menu

**macOS 10.11+**

§

### Popover

**macOS 10.11+**

§

### Sidebar

**macOS 10.11+**

§

### HeaderView

**macOS 10.14+**

§

### Sheet

**macOS 10.14+**

§

### WindowBackground

**macOS 10.14+**

§

### HudWindow

**macOS 10.14+**

§

### FullScreenUI

**macOS 10.14+**

§

### Tooltip

**macOS 10.14+**

§

### ContentBackground

**macOS 10.14+**

§

### UnderWindowBackground

**macOS 10.14+**

§

### UnderPageBackground

**macOS 10.14+**

§

### Mica

Mica effect that matches the system dark preference **Windows 11 Only**

§

### MicaDark

Mica effect with dark mode but only if dark mode is enabled on the system **Windows 11 Only**

§

### MicaLight

Mica effect with light mode **Windows 11 Only**

§

### Tabbed

Tabbed effect that matches the system dark preference **Windows 11 Only**

§

### TabbedDark

Tabbed effect with dark mode but only if dark mode is enabled on the system **Windows 11 Only**

§

### TabbedLight

Tabbed effect with light mode **Windows 11 Only**

§

### Blur

**Windows 7/10/11(22H1) Only**

##### §Notes

This effect has bad performance when resizing/dragging the window on Windows 11 build 22621.

§

### Acrylic

**Windows 10/11 Only**

##### §Notes

This effect has bad performance when resizing/dragging the window on Windows 10 v1903+ and Windows 11 build 22000.

## Trait Implementations§

§

### impl [Clone][5] for [WindowEffect][6]

§

#### fn [clone][7](&self) -> [WindowEffect][6]

Returns a duplicate of the value. [Read more][7]

1.0.0 · [Source][8]§

#### fn [clone_from][9](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][9]

§

### impl [Debug][10] for [WindowEffect][6]

§

#### fn [fmt][11](&self, f: &mut [Formatter][12]<'_>) -> [Result][13]<[()][14], [Error][15]>

Formats the value using the given formatter. [Read more][11]

§

### impl<'de> [Deserialize][16]<'de> for [WindowEffect][6]

§

#### fn [deserialize][17]<__D>( __deserializer: __D, ) -> [Result][13]<[WindowEffect][6], <__D as [Deserializer][18]<'de>>::[Error][19]>

where __D: [Deserializer][18]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][17]

§

### impl [PartialEq][20] for [WindowEffect][6]

§

#### fn [eq][21](&self, other: &[WindowEffect][6]) -> [bool][22]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][23]§

#### fn [ne][24](&self, other: [&Rhs][25]) -> [bool][22]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl [Serialize][26] for [WindowEffect][6]

§

#### fn [serialize][27]<__S>( &self, __serializer: __S, ) -> [Result][13]<<__S as [Serializer][28]>::[Ok][29], <__S as [Serializer][28]>::[Error][30]>

where __S: [Serializer][28],

Serialize this value into the given Serde serializer. [Read more][27]

§

### impl [Copy][31] for [WindowEffect][6]

§

### impl [Eq][32] for [WindowEffect][6]

§

### impl [StructuralPartialEq][33] for [WindowEffect][6]

## Auto Trait Implementations§

§

### impl [Freeze][34] for [WindowEffect][6]

§

### impl [RefUnwindSafe][35] for [WindowEffect][6]

§

### impl [Send][36] for [WindowEffect][6]

§

### impl [Sync][37] for [WindowEffect][6]

§

### impl [Unpin][38] for [WindowEffect][6]

§

### impl [UnwindSafe][39] for [WindowEffect][6]

## Blanket Implementations§

[Source][40]§

### impl<T> [Any][41] for T

where T: 'static + ?[Sized][42],

[Source][43]§

#### fn [type_id][44](&self) -> [TypeId][45]

Gets the `TypeId` of `self`. [Read more][44]

[Source][46]§

### impl<T> [Borrow][47]<T> for T

where T: ?[Sized][42],

[Source][48]§

#### fn [borrow][49](&self) -> [&T][25]

Immutably borrows from an owned value. [Read more][49]

[Source][50]§

### impl<T> [BorrowMut][51]<T> for T

where T: ?[Sized][42],

[Source][52]§

#### fn [borrow_mut][53](&mut self) -> [&mut T][25]

Mutably borrows from an owned value. [Read more][53]

[Source][54]§

### impl<T> [CloneToUninit][55] for T

where T: [Clone][5],

[Source][56]§

#### unsafe fn [clone_to_uninit][57](&self, dest: [*mut ][58][u8][59])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][57]

[Source][60]§

### impl<'de, D, R> [CommandArg][61]<'de, R> for D

where D: [Deserialize][16]<'de>, R: [Runtime][62],

[Source][63]§

#### fn [from_command][64](command: [CommandItem][65]<'de, R>) -> [Result][13]<D, [InvokeError][66]>

Derives an instance of `Self` from the [`CommandItem`][65]. [Read more][64]

[Source][67]§

### impl<T> [From][68]<T> for T

[Source][69]§

#### fn [from][70](t: T) -> T

Returns the argument unchanged.

[Source][71]§

### impl<T, U> [Into][72]<U> for T

where U: [From][68]<T>,

[Source][73]§

#### fn [into][74](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][68]<T> for U` chooses to do.

[Source][75]§

### impl<T> [IpcResponse][76] for T

where T: [Serialize][26],

[Source][77]§

#### fn [body][78](self) -> [Result][13]<[InvokeResponseBody][79], [Error][80]>

Resolve the IPC response body.

[Source][81]§

### impl<T> [ScopeObject][82] for T

where T: [Send][36] \+ [Sync][37] \+ [Debug][10] \+ [DeserializeOwned][83] \+ 'static,

[Source][84]§

#### type [Error][85] = [Error][86]

The error type.

[Source][87]§

#### fn [deserialize][88]<R>( _app: &[AppHandle][89]<R>, raw: Value, ) -> [Result][13]<T, <T as [ScopeObject][82]>::[Error][90]>

where R: [Runtime][62],

Deserialize the raw scope value.

[Source][91]§

### impl<T> [Serialize][92] for T

where T: [Serialize][26] \+ ?[Sized][42],

[Source][93]§

#### fn [erased_serialize][94](&self, serializer: &mut dyn [Serializer][95]) -> [Result][13]<[()][14], [Error][96]>

[Source][97]§

#### fn [do_erased_serialize][98]( &self, serializer: &mut dyn [Serializer][95], ) -> [Result][13]<[()][14], ErrorImpl>

[Source][99]§

### impl<T> [ToOwned][100] for T

where T: [Clone][5],

[Source][101]§

#### type [Owned][102] = T

The resulting type after obtaining ownership.

[Source][103]§

#### fn [to_owned][104](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][104]

[Source][105]§

#### fn [clone_into][106](&self, target: [&mut T][25])

Uses borrowed data to replace owned data, usually by cloning. [Read more][106]

[Source][107]§

### impl<T, U> [TryFrom][108]<U> for T

where U: [Into][72]<T>,

[Source][109]§

#### type [Error][110] = [Infallible][111]

The type returned in the event of a conversion error.

[Source][112]§

#### fn [try_from][113](value: U) -> [Result][13]<T, <T as [TryFrom][108]<U>>::[Error][114]>

Performs the conversion.

[Source][115]§

### impl<T, U> [TryInto][116]<U> for T

where U: [TryFrom][108]<T>,

[Source][117]§

#### type [Error][118] = <U as [TryFrom][108]<T>>::[Error][114]

The type returned in the event of a conversion error.

[Source][119]§

#### fn [try_into][120](self) -> [Result][13]<U, <U as [TryFrom][108]<T>>::[Error][114]>

Performs the conversion.

[Source][121]§

### impl<T> [DeserializeOwned][83] for T

where T: for<'de> [Deserialize][16]<'de>,

§

### impl<T> UserEvent for T

where T: [Debug][10] \+ [Clone][5] \+ [Send][36] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [6]: enum.Effect.html (enum tauri::window::Effect)
   [7]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [8]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [9]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [10]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [11]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [12]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [13]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [14]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [15]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [16]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html (trait serde_core::de::Deserialize)
   [17]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html#tymethod.deserialize
   [18]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html (trait serde_core::de::Deserializer)
   [19]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#associatedtype.Error (type serde_core::de::Deserializer::Error)
   [20]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [21]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [22]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [23]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [24]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [25]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [26]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [27]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html#tymethod.serialize
   [28]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html (trait serde_core::ser::Serializer)
   [29]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Ok (type serde_core::ser::Serializer::Ok)
   [30]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Error (type serde_core::ser::Serializer::Error)
   [31]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [32]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [33]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [34]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [35]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [36]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [37]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [38]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [39]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [40]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [41]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [42]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [44]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [45]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [47]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [49]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [50]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [51]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [53]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [54]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [55]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [56]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [57]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [58]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [59]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [60]: ../../src/tauri/ipc/command.rs.html#62-70
   [61]: ../ipc/trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [62]: ../trait.Runtime.html (trait tauri::Runtime)
   [63]: ../../src/tauri/ipc/command.rs.html#63-69
   [64]: ../ipc/trait.CommandArg.html#tymethod.from_command
   [65]: ../ipc/struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [66]: ../ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [67]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [69]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [71]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [72]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [73]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [74]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [75]: ../../src/tauri/ipc/mod.rs.html#181-187
   [76]: ../ipc/trait.IpcResponse.html (trait tauri::ipc::IpcResponse)
   [77]: ../../src/tauri/ipc/mod.rs.html#182-186
   [78]: ../ipc/trait.IpcResponse.html#tymethod.body
   [79]: ../ipc/enum.InvokeResponseBody.html (enum tauri::ipc::InvokeResponseBody)
   [80]: ../enum.Error.html (enum tauri::Error)
   [81]: ../../src/tauri/ipc/authority.rs.html#686-691
   [82]: ../ipc/trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [83]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)
   [84]: ../../src/tauri/ipc/authority.rs.html#687
   [85]: ../ipc/trait.ScopeObject.html#associatedtype.Error
   [86]: https://docs.rs/serde_json/1.0.149/serde_json/error/struct.Error.html (struct serde_json::error::Error)
   [87]: ../../src/tauri/ipc/authority.rs.html#688-690
   [88]: ../ipc/trait.ScopeObject.html#tymethod.deserialize
   [89]: ../struct.AppHandle.html (struct tauri::AppHandle)
   [90]: ../ipc/trait.ScopeObject.html#associatedtype.Error (type tauri::ipc::ScopeObject::Error)
   [91]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#233-235
   [92]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html (trait erased_serde::ser::Serialize)
   [93]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#237
   [94]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.erased_serialize
   [95]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serializer.html (trait erased_serde::ser::Serializer)
   [96]: https://docs.rs/erased-serde/0.4.10/erased_serde/error/struct.Error.html (struct erased_serde::error::Error)
   [97]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#245
   [98]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.do_erased_serialize
   [99]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [100]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [101]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [102]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [103]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [104]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [105]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [106]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [107]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [108]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [109]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [110]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [111]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [112]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [113]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [114]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [115]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [116]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [117]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [118]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [119]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [120]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [121]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#633

