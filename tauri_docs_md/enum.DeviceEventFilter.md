## DeviceEventFilter

[![logo][1]][2]

## [tauri][2]2.10.3

## DeviceEventFilter

### Variants

  * Always
  * Never
  * Unfocused



### Trait Implementations

  * Clone
  * Copy
  * Debug
  * Default
  * Deserialize<'de>
  * Eq
  * PartialEq
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
  * ScopeObject
  * ToOwned
  * TryFrom<U>
  * TryInto<U>
  * UserEvent



## [In crate tauri][3]

[tauri][3]

# Enum DeviceEventFilter Copy item path
[code]
    pub enum DeviceEventFilter {
        Always,
        Unfocused,
        Never,
    }
[/code]

## Variants§

§

### Always

Always filter out device events.

§

### Unfocused

Filter out device events while the window is not focused.

§

### Never

Report all device events regardless of window focus.

## Trait Implementations§

§

### impl [Clone][4] for [DeviceEventFilter][5]

§

#### fn [clone][6](&self) -> [DeviceEventFilter][5]

Returns a duplicate of the value. [Read more][6]

1.0.0 · [Source][7]§

#### fn [clone_from][8](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][8]

§

### impl [Debug][9] for [DeviceEventFilter][5]

§

#### fn [fmt][10](&self, f: &mut [Formatter][11]<'_>) -> [Result][12]<[()][13], [Error][14]>

Formats the value using the given formatter. [Read more][10]

§

### impl [Default][15] for [DeviceEventFilter][5]

§

#### fn [default][16]() -> [DeviceEventFilter][5]

Returns the “default value” for a type. [Read more][16]

§

### impl<'de> [Deserialize][17]<'de> for [DeviceEventFilter][5]

§

#### fn [deserialize][18]<__D>( __deserializer: __D, ) -> [Result][12]<[DeviceEventFilter][5], <__D as [Deserializer][19]<'de>>::[Error][20]>

where __D: [Deserializer][19]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][18]

§

### impl [PartialEq][21] for [DeviceEventFilter][5]

§

#### fn [eq][22](&self, other: &[DeviceEventFilter][5]) -> [bool][23]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][24]§

#### fn [ne][25](&self, other: [&Rhs][26]) -> [bool][23]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl [Copy][27] for [DeviceEventFilter][5]

§

### impl [Eq][28] for [DeviceEventFilter][5]

§

### impl [StructuralPartialEq][29] for [DeviceEventFilter][5]

## Auto Trait Implementations§

§

### impl [Freeze][30] for [DeviceEventFilter][5]

§

### impl [RefUnwindSafe][31] for [DeviceEventFilter][5]

§

### impl [Send][32] for [DeviceEventFilter][5]

§

### impl [Sync][33] for [DeviceEventFilter][5]

§

### impl [Unpin][34] for [DeviceEventFilter][5]

§

### impl [UnwindSafe][35] for [DeviceEventFilter][5]

## Blanket Implementations§

[Source][36]§

### impl<T> [Any][37] for T

where T: 'static + ?[Sized][38],

[Source][39]§

#### fn [type_id][40](&self) -> [TypeId][41]

Gets the `TypeId` of `self`. [Read more][40]

[Source][42]§

### impl<T> [Borrow][43]<T> for T

where T: ?[Sized][38],

[Source][44]§

#### fn [borrow][45](&self) -> [&T][26]

Immutably borrows from an owned value. [Read more][45]

[Source][46]§

### impl<T> [BorrowMut][47]<T> for T

where T: ?[Sized][38],

[Source][48]§

#### fn [borrow_mut][49](&mut self) -> [&mut T][26]

Mutably borrows from an owned value. [Read more][49]

[Source][50]§

### impl<T> [CloneToUninit][51] for T

where T: [Clone][4],

[Source][52]§

#### unsafe fn [clone_to_uninit][53](&self, dest: [*mut ][54][u8][55])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][53]

[Source][56]§

### impl<'de, D, R> [CommandArg][57]<'de, R> for D

where D: [Deserialize][17]<'de>, R: [Runtime][58],

[Source][59]§

#### fn [from_command][60](command: [CommandItem][61]<'de, R>) -> [Result][12]<D, [InvokeError][62]>

Derives an instance of `Self` from the [`CommandItem`][61]. [Read more][60]

[Source][63]§

### impl<T> [From][64]<T> for T

[Source][65]§

#### fn [from][66](t: T) -> T

Returns the argument unchanged.

[Source][67]§

### impl<T, U> [Into][68]<U> for T

where U: [From][64]<T>,

[Source][69]§

#### fn [into][70](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][64]<T> for U` chooses to do.

[Source][71]§

### impl<T> [ScopeObject][72] for T

where T: [Send][32] \+ [Sync][33] \+ [Debug][9] \+ [DeserializeOwned][73] \+ 'static,

[Source][74]§

#### type [Error][75] = [Error][76]

The error type.

[Source][77]§

#### fn [deserialize][78]<R>( _app: &[AppHandle][79]<R>, raw: Value, ) -> [Result][12]<T, <T as [ScopeObject][72]>::[Error][80]>

where R: [Runtime][58],

Deserialize the raw scope value.

[Source][81]§

### impl<T> [ToOwned][82] for T

where T: [Clone][4],

[Source][83]§

#### type [Owned][84] = T

The resulting type after obtaining ownership.

[Source][85]§

#### fn [to_owned][86](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][86]

[Source][87]§

#### fn [clone_into][88](&self, target: [&mut T][26])

Uses borrowed data to replace owned data, usually by cloning. [Read more][88]

[Source][89]§

### impl<T, U> [TryFrom][90]<U> for T

where U: [Into][68]<T>,

[Source][91]§

#### type [Error][92] = [Infallible][93]

The type returned in the event of a conversion error.

[Source][94]§

#### fn [try_from][95](value: U) -> [Result][12]<T, <T as [TryFrom][90]<U>>::[Error][96]>

Performs the conversion.

[Source][97]§

### impl<T, U> [TryInto][98]<U> for T

where U: [TryFrom][90]<T>,

[Source][99]§

#### type [Error][100] = <U as [TryFrom][90]<T>>::[Error][96]

The type returned in the event of a conversion error.

[Source][101]§

#### fn [try_into][102](self) -> [Result][12]<U, <U as [TryFrom][90]<T>>::[Error][96]>

Performs the conversion.

[Source][103]§

### impl<T> [DeserializeOwned][73] for T

where T: for<'de> [Deserialize][17]<'de>,

§

### impl<T> UserEvent for T

where T: [Debug][9] \+ [Clone][4] \+ [Send][32] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [5]: enum.DeviceEventFilter.html (enum tauri::DeviceEventFilter)
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
   [21]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [22]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [23]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [24]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [25]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [26]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [27]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [28]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [29]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [30]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [31]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [32]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [33]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [34]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [35]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [36]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [37]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [38]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [39]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [40]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [41]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [42]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [43]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [44]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [45]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [46]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [47]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [49]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [50]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [51]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [53]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [54]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [55]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [56]: ../src/tauri/ipc/command.rs.html#62-70
   [57]: ipc/trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [58]: trait.Runtime.html (trait tauri::Runtime)
   [59]: ../src/tauri/ipc/command.rs.html#63-69
   [60]: ipc/trait.CommandArg.html#tymethod.from_command
   [61]: ipc/struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [62]: ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [63]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [65]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [67]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [69]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [71]: ../src/tauri/ipc/authority.rs.html#686-691
   [72]: ipc/trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [73]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)
   [74]: ../src/tauri/ipc/authority.rs.html#687
   [75]: ipc/trait.ScopeObject.html#associatedtype.Error
   [76]: https://docs.rs/serde_json/1.0.149/serde_json/error/struct.Error.html (struct serde_json::error::Error)
   [77]: ../src/tauri/ipc/authority.rs.html#688-690
   [78]: ipc/trait.ScopeObject.html#tymethod.deserialize
   [79]: struct.AppHandle.html (struct tauri::AppHandle)
   [80]: ipc/trait.ScopeObject.html#associatedtype.Error (type tauri::ipc::ScopeObject::Error)
   [81]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [82]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [83]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [84]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [85]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [86]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [87]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [88]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [89]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [90]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [91]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [92]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [93]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [94]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [95]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [96]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [97]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [98]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [99]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [100]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [101]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [102]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [103]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#633

