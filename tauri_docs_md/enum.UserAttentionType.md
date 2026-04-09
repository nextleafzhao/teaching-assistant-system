## UserAttentionType

[![logo][1]][2]

## [tauri][2]2.10.3

## UserAttentionType

### Variants

  * Critical
  * Informational



### Trait Implementations

  * Clone
  * Copy
  * Debug
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

# Enum UserAttentionType Copy item path
[code]
    pub enum UserAttentionType {
        Critical,
        Informational,
    }
[/code]

Expand description

Type of user attention requested on a window.

## Variants§

§

### Critical

##### §Platform-specific

  * **macOS:** Bounces the dock icon until the application is in focus.
  * **Windows:** Flashes both the window and the taskbar button until the application is in focus.



§

### Informational

##### §Platform-specific

  * **macOS:** Bounces the dock icon once.
  * **Windows:** Flashes the taskbar button until the application is in focus.



## Trait Implementations§

§

### impl [Clone][4] for [UserAttentionType][5]

§

#### fn [clone][6](&self) -> [UserAttentionType][5]

Returns a duplicate of the value. [Read more][6]

1.0.0 · [Source][7]§

#### fn [clone_from][8](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][8]

§

### impl [Debug][9] for [UserAttentionType][5]

§

#### fn [fmt][10](&self, f: &mut [Formatter][11]<'_>) -> [Result][12]<[()][13], [Error][14]>

Formats the value using the given formatter. [Read more][10]

§

### impl<'de> [Deserialize][15]<'de> for [UserAttentionType][5]

§

#### fn [deserialize][16]<__D>( __deserializer: __D, ) -> [Result][12]<[UserAttentionType][5], <__D as [Deserializer][17]<'de>>::[Error][18]>

where __D: [Deserializer][17]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][16]

§

### impl [PartialEq][19] for [UserAttentionType][5]

§

#### fn [eq][20](&self, other: &[UserAttentionType][5]) -> [bool][21]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][22]§

#### fn [ne][23](&self, other: [&Rhs][24]) -> [bool][21]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl [Copy][25] for [UserAttentionType][5]

§

### impl [Eq][26] for [UserAttentionType][5]

§

### impl [StructuralPartialEq][27] for [UserAttentionType][5]

## Auto Trait Implementations§

§

### impl [Freeze][28] for [UserAttentionType][5]

§

### impl [RefUnwindSafe][29] for [UserAttentionType][5]

§

### impl [Send][30] for [UserAttentionType][5]

§

### impl [Sync][31] for [UserAttentionType][5]

§

### impl [Unpin][32] for [UserAttentionType][5]

§

### impl [UnwindSafe][33] for [UserAttentionType][5]

## Blanket Implementations§

[Source][34]§

### impl<T> [Any][35] for T

where T: 'static + ?[Sized][36],

[Source][37]§

#### fn [type_id][38](&self) -> [TypeId][39]

Gets the `TypeId` of `self`. [Read more][38]

[Source][40]§

### impl<T> [Borrow][41]<T> for T

where T: ?[Sized][36],

[Source][42]§

#### fn [borrow][43](&self) -> [&T][24]

Immutably borrows from an owned value. [Read more][43]

[Source][44]§

### impl<T> [BorrowMut][45]<T> for T

where T: ?[Sized][36],

[Source][46]§

#### fn [borrow_mut][47](&mut self) -> [&mut T][24]

Mutably borrows from an owned value. [Read more][47]

[Source][48]§

### impl<T> [CloneToUninit][49] for T

where T: [Clone][4],

[Source][50]§

#### unsafe fn [clone_to_uninit][51](&self, dest: [*mut ][52][u8][53])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][51]

[Source][54]§

### impl<'de, D, R> [CommandArg][55]<'de, R> for D

where D: [Deserialize][15]<'de>, R: [Runtime][56],

[Source][57]§

#### fn [from_command][58](command: [CommandItem][59]<'de, R>) -> [Result][12]<D, [InvokeError][60]>

Derives an instance of `Self` from the [`CommandItem`][59]. [Read more][58]

[Source][61]§

### impl<T> [From][62]<T> for T

[Source][63]§

#### fn [from][64](t: T) -> T

Returns the argument unchanged.

[Source][65]§

### impl<T, U> [Into][66]<U> for T

where U: [From][62]<T>,

[Source][67]§

#### fn [into][68](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][62]<T> for U` chooses to do.

[Source][69]§

### impl<T> [ScopeObject][70] for T

where T: [Send][30] \+ [Sync][31] \+ [Debug][9] \+ [DeserializeOwned][71] \+ 'static,

[Source][72]§

#### type [Error][73] = [Error][74]

The error type.

[Source][75]§

#### fn [deserialize][76]<R>( _app: &[AppHandle][77]<R>, raw: Value, ) -> [Result][12]<T, <T as [ScopeObject][70]>::[Error][78]>

where R: [Runtime][56],

Deserialize the raw scope value.

[Source][79]§

### impl<T> [ToOwned][80] for T

where T: [Clone][4],

[Source][81]§

#### type [Owned][82] = T

The resulting type after obtaining ownership.

[Source][83]§

#### fn [to_owned][84](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][84]

[Source][85]§

#### fn [clone_into][86](&self, target: [&mut T][24])

Uses borrowed data to replace owned data, usually by cloning. [Read more][86]

[Source][87]§

### impl<T, U> [TryFrom][88]<U> for T

where U: [Into][66]<T>,

[Source][89]§

#### type [Error][90] = [Infallible][91]

The type returned in the event of a conversion error.

[Source][92]§

#### fn [try_from][93](value: U) -> [Result][12]<T, <T as [TryFrom][88]<U>>::[Error][94]>

Performs the conversion.

[Source][95]§

### impl<T, U> [TryInto][96]<U> for T

where U: [TryFrom][88]<T>,

[Source][97]§

#### type [Error][98] = <U as [TryFrom][88]<T>>::[Error][94]

The type returned in the event of a conversion error.

[Source][99]§

#### fn [try_into][100](self) -> [Result][12]<U, <U as [TryFrom][88]<T>>::[Error][94]>

Performs the conversion.

[Source][101]§

### impl<T> [DeserializeOwned][71] for T

where T: for<'de> [Deserialize][15]<'de>,

§

### impl<T> UserEvent for T

where T: [Debug][9] \+ [Clone][4] \+ [Send][30] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [5]: enum.UserAttentionType.html (enum tauri::UserAttentionType)
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
   [19]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [20]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [21]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [22]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [23]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [24]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [25]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [26]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [27]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [28]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [29]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [30]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [31]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [32]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [33]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [34]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [35]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [36]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [37]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [38]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [39]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [40]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [41]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [42]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [43]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [44]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [45]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [47]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [48]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [49]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [50]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [51]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [52]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [53]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [54]: ../src/tauri/ipc/command.rs.html#62-70
   [55]: ipc/trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [56]: trait.Runtime.html (trait tauri::Runtime)
   [57]: ../src/tauri/ipc/command.rs.html#63-69
   [58]: ipc/trait.CommandArg.html#tymethod.from_command
   [59]: ipc/struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [60]: ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [61]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [62]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [63]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [65]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [67]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [69]: ../src/tauri/ipc/authority.rs.html#686-691
   [70]: ipc/trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [71]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)
   [72]: ../src/tauri/ipc/authority.rs.html#687
   [73]: ipc/trait.ScopeObject.html#associatedtype.Error
   [74]: https://docs.rs/serde_json/1.0.149/serde_json/error/struct.Error.html (struct serde_json::error::Error)
   [75]: ../src/tauri/ipc/authority.rs.html#688-690
   [76]: ipc/trait.ScopeObject.html#tymethod.deserialize
   [77]: struct.AppHandle.html (struct tauri::AppHandle)
   [78]: ipc/trait.ScopeObject.html#associatedtype.Error (type tauri::ipc::ScopeObject::Error)
   [79]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [80]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [81]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [82]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [83]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [84]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [85]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [86]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [87]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [88]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [89]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [90]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [91]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [92]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [93]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [94]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [95]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [96]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [97]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [98]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [99]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [100]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [101]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#633

