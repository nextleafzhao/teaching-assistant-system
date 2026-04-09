## ProgressBarStatus

[![logo][1]][2]

## [tauri][2]2.10.3

## ProgressBarStatus

### Variants

  * Error
  * Indeterminate
  * None
  * Normal
  * Paused



### Trait Implementations

  * Clone
  * Copy
  * Debug
  * Deserialize<'de>



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



## [In tauri::window][3]

[tauri][4]::[window][3]

# Enum ProgressBarStatus Copy item path
[code]
    pub enum ProgressBarStatus {
        None,
        Normal,
        Indeterminate,
        Paused,
        Error,
    }
[/code]

Expand description

Progress bar status.

## Variants§

§

### None

Hide progress bar.

§

### Normal

Normal state.

§

### Indeterminate

Indeterminate state. **Treated as Normal on Linux and macOS**

§

### Paused

Paused state. **Treated as Normal on Linux**

§

### Error

Error state. **Treated as Normal on Linux**

## Trait Implementations§

§

### impl [Clone][5] for [ProgressBarStatus][6]

§

#### fn [clone][7](&self) -> [ProgressBarStatus][6]

Returns a duplicate of the value. [Read more][7]

1.0.0 · [Source][8]§

#### fn [clone_from][9](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][9]

§

### impl [Debug][10] for [ProgressBarStatus][6]

§

#### fn [fmt][11](&self, f: &mut [Formatter][12]<'_>) -> [Result][13]<[()][14], [Error][15]>

Formats the value using the given formatter. [Read more][11]

§

### impl<'de> [Deserialize][16]<'de> for [ProgressBarStatus][6]

§

#### fn [deserialize][17]<__D>( __deserializer: __D, ) -> [Result][13]<[ProgressBarStatus][6], <__D as [Deserializer][18]<'de>>::[Error][19]>

where __D: [Deserializer][18]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][17]

§

### impl [Copy][20] for [ProgressBarStatus][6]

## Auto Trait Implementations§

§

### impl [Freeze][21] for [ProgressBarStatus][6]

§

### impl [RefUnwindSafe][22] for [ProgressBarStatus][6]

§

### impl [Send][23] for [ProgressBarStatus][6]

§

### impl [Sync][24] for [ProgressBarStatus][6]

§

### impl [Unpin][25] for [ProgressBarStatus][6]

§

### impl [UnwindSafe][26] for [ProgressBarStatus][6]

## Blanket Implementations§

[Source][27]§

### impl<T> [Any][28] for T

where T: 'static + ?[Sized][29],

[Source][30]§

#### fn [type_id][31](&self) -> [TypeId][32]

Gets the `TypeId` of `self`. [Read more][31]

[Source][33]§

### impl<T> [Borrow][34]<T> for T

where T: ?[Sized][29],

[Source][35]§

#### fn [borrow][36](&self) -> [&T][37]

Immutably borrows from an owned value. [Read more][36]

[Source][38]§

### impl<T> [BorrowMut][39]<T> for T

where T: ?[Sized][29],

[Source][40]§

#### fn [borrow_mut][41](&mut self) -> [&mut T][37]

Mutably borrows from an owned value. [Read more][41]

[Source][42]§

### impl<T> [CloneToUninit][43] for T

where T: [Clone][5],

[Source][44]§

#### unsafe fn [clone_to_uninit][45](&self, dest: [*mut ][46][u8][47])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][45]

[Source][48]§

### impl<'de, D, R> [CommandArg][49]<'de, R> for D

where D: [Deserialize][16]<'de>, R: [Runtime][50],

[Source][51]§

#### fn [from_command][52](command: [CommandItem][53]<'de, R>) -> [Result][13]<D, [InvokeError][54]>

Derives an instance of `Self` from the [`CommandItem`][53]. [Read more][52]

[Source][55]§

### impl<T> [From][56]<T> for T

[Source][57]§

#### fn [from][58](t: T) -> T

Returns the argument unchanged.

[Source][59]§

### impl<T, U> [Into][60]<U> for T

where U: [From][56]<T>,

[Source][61]§

#### fn [into][62](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][56]<T> for U` chooses to do.

[Source][63]§

### impl<T> [ScopeObject][64] for T

where T: [Send][23] \+ [Sync][24] \+ [Debug][10] \+ [DeserializeOwned][65] \+ 'static,

[Source][66]§

#### type [Error][67] = [Error][68]

The error type.

[Source][69]§

#### fn [deserialize][70]<R>( _app: &[AppHandle][71]<R>, raw: Value, ) -> [Result][13]<T, <T as [ScopeObject][64]>::[Error][72]>

where R: [Runtime][50],

Deserialize the raw scope value.

[Source][73]§

### impl<T> [ToOwned][74] for T

where T: [Clone][5],

[Source][75]§

#### type [Owned][76] = T

The resulting type after obtaining ownership.

[Source][77]§

#### fn [to_owned][78](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][78]

[Source][79]§

#### fn [clone_into][80](&self, target: [&mut T][37])

Uses borrowed data to replace owned data, usually by cloning. [Read more][80]

[Source][81]§

### impl<T, U> [TryFrom][82]<U> for T

where U: [Into][60]<T>,

[Source][83]§

#### type [Error][84] = [Infallible][85]

The type returned in the event of a conversion error.

[Source][86]§

#### fn [try_from][87](value: U) -> [Result][13]<T, <T as [TryFrom][82]<U>>::[Error][88]>

Performs the conversion.

[Source][89]§

### impl<T, U> [TryInto][90]<U> for T

where U: [TryFrom][82]<T>,

[Source][91]§

#### type [Error][92] = <U as [TryFrom][82]<T>>::[Error][88]

The type returned in the event of a conversion error.

[Source][93]§

#### fn [try_into][94](self) -> [Result][13]<U, <U as [TryFrom][82]<T>>::[Error][88]>

Performs the conversion.

[Source][95]§

### impl<T> [DeserializeOwned][65] for T

where T: for<'de> [Deserialize][16]<'de>,

§

### impl<T> UserEvent for T

where T: [Debug][10] \+ [Clone][5] \+ [Send][23] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [6]: enum.ProgressBarStatus.html (enum tauri::window::ProgressBarStatus)
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
   [20]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [21]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [22]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [23]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [24]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [25]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [26]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [27]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [28]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [29]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [30]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [31]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [32]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [33]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [34]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [35]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [36]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [37]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [38]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [39]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [40]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [41]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [42]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [43]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [44]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [45]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [46]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [47]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [48]: ../../src/tauri/ipc/command.rs.html#62-70
   [49]: ../ipc/trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [50]: ../trait.Runtime.html (trait tauri::Runtime)
   [51]: ../../src/tauri/ipc/command.rs.html#63-69
   [52]: ../ipc/trait.CommandArg.html#tymethod.from_command
   [53]: ../ipc/struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [54]: ../ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [56]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [57]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [58]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [59]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [60]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [61]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [62]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [63]: ../../src/tauri/ipc/authority.rs.html#686-691
   [64]: ../ipc/trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [65]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)
   [66]: ../../src/tauri/ipc/authority.rs.html#687
   [67]: ../ipc/trait.ScopeObject.html#associatedtype.Error
   [68]: https://docs.rs/serde_json/1.0.149/serde_json/error/struct.Error.html (struct serde_json::error::Error)
   [69]: ../../src/tauri/ipc/authority.rs.html#688-690
   [70]: ../ipc/trait.ScopeObject.html#tymethod.deserialize
   [71]: ../struct.AppHandle.html (struct tauri::AppHandle)
   [72]: ../ipc/trait.ScopeObject.html#associatedtype.Error (type tauri::ipc::ScopeObject::Error)
   [73]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [74]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [75]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [76]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [77]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [78]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [79]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [80]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [81]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [82]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [83]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [84]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [85]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [86]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [87]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [88]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [89]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [90]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [91]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [92]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [93]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [94]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [95]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#633

