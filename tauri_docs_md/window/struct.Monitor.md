## Monitor

[![logo][1]][2]

## [tauri][2]2.10.3

## Monitor

### Methods

  * name
  * position
  * scale_factor
  * size
  * work_area



### Trait Implementations

  * Clone
  * Debug
  * From<Monitor>
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
  * From<T>
  * Into<U>
  * IpcResponse
  * Serialize
  * ToOwned
  * TryFrom<U>
  * TryInto<U>
  * UserEvent



## [In tauri::window][3]

[tauri][4]::[window][3]

# Struct Monitor Copy item path

[Source][5]
[code] 
    pub struct Monitor { /* private fields */ }
[/code]

Expand description

Monitor descriptor.

## Implementations§

[Source][6]§

### impl [Monitor][7]

[Source][8]

#### pub fn name(&self) -> [Option][9]<&[String][10]>

Returns a human-readable name of the monitor. Returns None if the monitor doesn’t exist anymore.

[Source][11]

#### pub fn size(&self) -> &[PhysicalSize][12]<[u32][13]>

Returns the monitor’s resolution.

[Source][14]

#### pub fn position(&self) -> &[PhysicalPosition][15]<[i32][16]>

Returns the top-left corner position of the monitor relative to the larger full screen area.

[Source][17]

#### pub fn work_area(&self) -> &[PhysicalRect][18]<[i32][16], [u32][13]>

Returns the monitor’s work_area.

[Source][19]

#### pub fn scale_factor(&self) -> [f64][20]

Returns the scale factor that can be used to map logical pixels to physical pixels, and vice versa.

## Trait Implementations§

[Source][21]§

### impl [Clone][22] for [Monitor][7]

[Source][21]§

#### fn [clone][23](&self) -> [Monitor][7]

Returns a duplicate of the value. [Read more][23]

1.0.0 · [Source][24]§

#### fn [clone_from][25](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][25]

[Source][21]§

### impl [Debug][26] for [Monitor][7]

[Source][21]§

#### fn [fmt][27](&self, f: &mut [Formatter][28]<'_>) -> [Result][29]

Formats the value using the given formatter. [Read more][27]

[Source][30]§

### impl [From][31]<Monitor> for [Monitor][7]

[Source][32]§

#### fn [from][33](monitor: RuntimeMonitor) -> Self

Converts to this type from the input type.

[Source][21]§

### impl [Serialize][34] for [Monitor][7]

[Source][21]§

#### fn [serialize][35]<__S>(&self, __serializer: __S) -> [Result][36]<__S::[Ok][37], __S::[Error][38]>

where __S: [Serializer][39],

Serialize this value into the given Serde serializer. [Read more][35]

## Auto Trait Implementations§

§

### impl [Freeze][40] for [Monitor][7]

§

### impl [RefUnwindSafe][41] for [Monitor][7]

§

### impl [Send][42] for [Monitor][7]

§

### impl [Sync][43] for [Monitor][7]

§

### impl [Unpin][44] for [Monitor][7]

§

### impl [UnwindSafe][45] for [Monitor][7]

## Blanket Implementations§

[Source][46]§

### impl<T> [Any][47] for T

where T: 'static + ?[Sized][48],

[Source][49]§

#### fn [type_id][50](&self) -> [TypeId][51]

Gets the `TypeId` of `self`. [Read more][50]

[Source][52]§

### impl<T> [Borrow][53]<T> for T

where T: ?[Sized][48],

[Source][54]§

#### fn [borrow][55](&self) -> [&T][56]

Immutably borrows from an owned value. [Read more][55]

[Source][57]§

### impl<T> [BorrowMut][58]<T> for T

where T: ?[Sized][48],

[Source][59]§

#### fn [borrow_mut][60](&mut self) -> [&mut T][56]

Mutably borrows from an owned value. [Read more][60]

[Source][61]§

### impl<T> [CloneToUninit][62] for T

where T: [Clone][22],

[Source][63]§

#### unsafe fn [clone_to_uninit][64](&self, dest: [*mut ][65][u8][66])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][64]

[Source][67]§

### impl<T> [From][31]<T> for T

[Source][68]§

#### fn [from][33](t: T) -> T

Returns the argument unchanged.

[Source][69]§

### impl<T, U> [Into][70]<U> for T

where U: [From][31]<T>,

[Source][71]§

#### fn [into][72](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][31]<T> for U` chooses to do.

[Source][73]§

### impl<T> [IpcResponse][74] for T

where T: [Serialize][34],

[Source][75]§

#### fn [body][76](self) -> [Result][36]<[InvokeResponseBody][77], [Error][78]>

Resolve the IPC response body.

[Source][79]§

### impl<T> [Serialize][80] for T

where T: [Serialize][34] \+ ?[Sized][48],

[Source][81]§

#### fn [erased_serialize][82](&self, serializer: &mut dyn [Serializer][83]) -> [Result][36]<[()][84], [Error][85]>

[Source][86]§

#### fn [do_erased_serialize][87]( &self, serializer: &mut dyn [Serializer][83], ) -> [Result][36]<[()][84], ErrorImpl>

[Source][88]§

### impl<T> [ToOwned][89] for T

where T: [Clone][22],

[Source][90]§

#### type [Owned][91] = T

The resulting type after obtaining ownership.

[Source][92]§

#### fn [to_owned][93](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][93]

[Source][94]§

#### fn [clone_into][95](&self, target: [&mut T][56])

Uses borrowed data to replace owned data, usually by cloning. [Read more][95]

[Source][96]§

### impl<T, U> [TryFrom][97]<U> for T

where U: [Into][70]<T>,

[Source][98]§

#### type [Error][99] = [Infallible][100]

The type returned in the event of a conversion error.

[Source][101]§

#### fn [try_from][102](value: U) -> [Result][36]<T, <T as [TryFrom][97]<U>>::[Error][103]>

Performs the conversion.

[Source][104]§

### impl<T, U> [TryInto][105]<U> for T

where U: [TryFrom][97]<T>,

[Source][106]§

#### type [Error][107] = <U as [TryFrom][97]<T>>::[Error][103]

The type returned in the event of a conversion error.

[Source][108]§

#### fn [try_into][109](self) -> [Result][36]<U, <U as [TryFrom][97]<T>>::[Error][103]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][26] \+ [Clone][22] \+ [Send][42] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/window/mod.rs.html#60-66
   [6]: ../../src/tauri/window/mod.rs.html#80-106
   [7]: struct.Monitor.html (struct tauri::window::Monitor)
   [8]: ../../src/tauri/window/mod.rs.html#83-85
   [9]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [10]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [11]: ../../src/tauri/window/mod.rs.html#88-90
   [12]: ../struct.PhysicalSize.html (struct tauri::PhysicalSize)
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.u32.html
   [14]: ../../src/tauri/window/mod.rs.html#93-95
   [15]: ../struct.PhysicalPosition.html (struct tauri::PhysicalPosition)
   [16]: https://doc.rust-lang.org/1.94.1/std/primitive.i32.html
   [17]: ../../src/tauri/window/mod.rs.html#98-100
   [18]: ../struct.PhysicalRect.html (struct tauri::PhysicalRect)
   [19]: ../../src/tauri/window/mod.rs.html#103-105
   [20]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html
   [21]: ../../src/tauri/window/mod.rs.html#58
   [22]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [23]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [24]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [25]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [26]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [27]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [28]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [29]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [30]: ../../src/tauri/window/mod.rs.html#68-78
   [31]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [32]: ../../src/tauri/window/mod.rs.html#69-77
   [33]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [34]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [35]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html#tymethod.serialize
   [36]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [37]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Ok (type serde_core::ser::Serializer::Ok)
   [38]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Error (type serde_core::ser::Serializer::Error)
   [39]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html (trait serde_core::ser::Serializer)
   [40]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [41]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [42]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [43]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [44]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [45]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [47]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [48]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [49]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [50]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [51]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [53]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [54]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [55]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [56]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [57]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [58]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [59]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [60]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [61]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [62]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [63]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [64]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [65]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [66]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [67]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [68]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [69]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [71]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [72]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [73]: ../../src/tauri/ipc/mod.rs.html#181-187
   [74]: ../ipc/trait.IpcResponse.html (trait tauri::ipc::IpcResponse)
   [75]: ../../src/tauri/ipc/mod.rs.html#182-186
   [76]: ../ipc/trait.IpcResponse.html#tymethod.body
   [77]: ../ipc/enum.InvokeResponseBody.html (enum tauri::ipc::InvokeResponseBody)
   [78]: ../enum.Error.html (enum tauri::Error)
   [79]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#233-235
   [80]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html (trait erased_serde::ser::Serialize)
   [81]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#237
   [82]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.erased_serialize
   [83]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serializer.html (trait erased_serde::ser::Serializer)
   [84]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [85]: https://docs.rs/erased-serde/0.4.10/erased_serde/error/struct.Error.html (struct erased_serde::error::Error)
   [86]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#245
   [87]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.do_erased_serialize
   [88]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [89]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [90]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [91]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [92]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [93]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [94]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [95]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [96]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [97]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [98]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [99]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [100]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [101]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [102]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [103]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [104]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [105]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [106]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [107]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [108]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [109]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

