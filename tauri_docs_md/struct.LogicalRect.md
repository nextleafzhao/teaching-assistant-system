## LogicalRect

[![logo][1]][2]

## [tauri][2]2.10.3

## LogicalRect

### Fields

  * position
  * size



### Trait Implementations

  * Clone
  * Copy
  * Debug
  * Default
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



## [In crate tauri][3]

[tauri][3]

# Struct LogicalRect Copy item path
[code]
    pub struct LogicalRect<P, S>
    
    where
        P: [Pixel][4],
        S: [Pixel][4],
    
    {
        pub position: [LogicalPosition][5]<P>,
        pub size: [LogicalSize][6]<S>,
    }
[/code]

Expand description

A rectangular region in logical pixels.

## Fields§

§`position: [LogicalPosition][5]<P>`

Rect position.

§`size: [LogicalSize][6]<S>`

Rect size.

## Trait Implementations§

§

### impl<P, S> [Clone][7] for [LogicalRect][8]<P, S>

where P: [Clone][7] \+ [Pixel][4], S: [Clone][7] \+ [Pixel][4],

§

#### fn [clone][9](&self) -> [LogicalRect][8]<P, S>

Returns a duplicate of the value. [Read more][9]

1.0.0 · [Source][10]§

#### fn [clone_from][11](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][11]

§

### impl<P, S> [Debug][12] for [LogicalRect][8]<P, S>

where P: [Debug][12] \+ [Pixel][4], S: [Debug][12] \+ [Pixel][4],

§

#### fn [fmt][13](&self, f: &mut [Formatter][14]<'_>) -> [Result][15]<[()][16], [Error][17]>

Formats the value using the given formatter. [Read more][13]

§

### impl<P, S> [Default][18] for [LogicalRect][8]<P, S>

where P: [Pixel][4], S: [Pixel][4],

§

#### fn [default][19]() -> [LogicalRect][8]<P, S>

Returns the “default value” for a type. [Read more][19]

§

### impl<P, S> [Serialize][20] for [LogicalRect][8]<P, S>

where P: [Pixel][4] \+ [Serialize][20], S: [Pixel][4] \+ [Serialize][20],

§

#### fn [serialize][21]<__S>( &self, __serializer: __S, ) -> [Result][15]<<__S as [Serializer][22]>::[Ok][23], <__S as [Serializer][22]>::[Error][24]>

where __S: [Serializer][22],

Serialize this value into the given Serde serializer. [Read more][21]

§

### impl<P, S> [Copy][25] for [LogicalRect][8]<P, S>

where P: [Copy][25] \+ [Pixel][4], S: [Copy][25] \+ [Pixel][4],

## Auto Trait Implementations§

§

### impl<P, S> [Freeze][26] for [LogicalRect][8]<P, S>

where P: [Freeze][26], S: [Freeze][26],

§

### impl<P, S> [RefUnwindSafe][27] for [LogicalRect][8]<P, S>

where P: [RefUnwindSafe][27], S: [RefUnwindSafe][27],

§

### impl<P, S> [Send][28] for [LogicalRect][8]<P, S>

where P: [Send][28], S: [Send][28],

§

### impl<P, S> [Sync][29] for [LogicalRect][8]<P, S>

where P: [Sync][29], S: [Sync][29],

§

### impl<P, S> [Unpin][30] for [LogicalRect][8]<P, S>

where P: [Unpin][30], S: [Unpin][30],

§

### impl<P, S> [UnwindSafe][31] for [LogicalRect][8]<P, S>

where P: [UnwindSafe][31], S: [UnwindSafe][31],

## Blanket Implementations§

[Source][32]§

### impl<T> [Any][33] for T

where T: 'static + ?[Sized][34],

[Source][35]§

#### fn [type_id][36](&self) -> [TypeId][37]

Gets the `TypeId` of `self`. [Read more][36]

[Source][38]§

### impl<T> [Borrow][39]<T> for T

where T: ?[Sized][34],

[Source][40]§

#### fn [borrow][41](&self) -> [&T][42]

Immutably borrows from an owned value. [Read more][41]

[Source][43]§

### impl<T> [BorrowMut][44]<T> for T

where T: ?[Sized][34],

[Source][45]§

#### fn [borrow_mut][46](&mut self) -> [&mut T][42]

Mutably borrows from an owned value. [Read more][46]

[Source][47]§

### impl<T> [CloneToUninit][48] for T

where T: [Clone][7],

[Source][49]§

#### unsafe fn [clone_to_uninit][50](&self, dest: [*mut ][51][u8][52])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][50]

[Source][53]§

### impl<T> [From][54]<T> for T

[Source][55]§

#### fn [from][56](t: T) -> T

Returns the argument unchanged.

[Source][57]§

### impl<T, U> [Into][58]<U> for T

where U: [From][54]<T>,

[Source][59]§

#### fn [into][60](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][54]<T> for U` chooses to do.

[Source][61]§

### impl<T> [IpcResponse][62] for T

where T: [Serialize][20],

[Source][63]§

#### fn [body][64](self) -> [Result][15]<[InvokeResponseBody][65], [Error][66]>

Resolve the IPC response body.

[Source][67]§

### impl<T> [Serialize][68] for T

where T: [Serialize][20] \+ ?[Sized][34],

[Source][69]§

#### fn [erased_serialize][70](&self, serializer: &mut dyn [Serializer][71]) -> [Result][15]<[()][16], [Error][72]>

[Source][73]§

#### fn [do_erased_serialize][74]( &self, serializer: &mut dyn [Serializer][71], ) -> [Result][15]<[()][16], ErrorImpl>

[Source][75]§

### impl<T> [ToOwned][76] for T

where T: [Clone][7],

[Source][77]§

#### type [Owned][78] = T

The resulting type after obtaining ownership.

[Source][79]§

#### fn [to_owned][80](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][80]

[Source][81]§

#### fn [clone_into][82](&self, target: [&mut T][42])

Uses borrowed data to replace owned data, usually by cloning. [Read more][82]

[Source][83]§

### impl<T, U> [TryFrom][84]<U> for T

where U: [Into][58]<T>,

[Source][85]§

#### type [Error][86] = [Infallible][87]

The type returned in the event of a conversion error.

[Source][88]§

#### fn [try_from][89](value: U) -> [Result][15]<T, <T as [TryFrom][84]<U>>::[Error][90]>

Performs the conversion.

[Source][91]§

### impl<T, U> [TryInto][92]<U> for T

where U: [TryFrom][84]<T>,

[Source][93]§

#### type [Error][94] = <U as [TryFrom][84]<T>>::[Error][90]

The type returned in the event of a conversion error.

[Source][95]§

#### fn [try_into][96](self) -> [Result][15]<U, <U as [TryFrom][84]<T>>::[Error][90]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][12] \+ [Clone][7] \+ [Send][28] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: trait.Pixel.html (trait tauri::Pixel)
   [5]: struct.LogicalPosition.html (struct tauri::LogicalPosition)
   [6]: struct.LogicalSize.html (struct tauri::LogicalSize)
   [7]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [8]: struct.LogicalRect.html (struct tauri::LogicalRect)
   [9]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [10]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [11]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [12]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [13]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [14]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [15]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [16]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [17]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [18]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [19]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [20]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [21]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html#tymethod.serialize
   [22]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html (trait serde_core::ser::Serializer)
   [23]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Ok (type serde_core::ser::Serializer::Ok)
   [24]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Error (type serde_core::ser::Serializer::Error)
   [25]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [26]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [27]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [28]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [29]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [30]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [31]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [32]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [33]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [34]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [35]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [36]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [37]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [38]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [39]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [40]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [41]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [42]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [43]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [44]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [45]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [46]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [47]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [48]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [49]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [50]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [51]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [52]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [53]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [54]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [56]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [57]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [58]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [59]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [60]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [61]: ../src/tauri/ipc/mod.rs.html#181-187
   [62]: ipc/trait.IpcResponse.html (trait tauri::ipc::IpcResponse)
   [63]: ../src/tauri/ipc/mod.rs.html#182-186
   [64]: ipc/trait.IpcResponse.html#tymethod.body
   [65]: ipc/enum.InvokeResponseBody.html (enum tauri::ipc::InvokeResponseBody)
   [66]: enum.Error.html (enum tauri::Error)
   [67]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#233-235
   [68]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html (trait erased_serde::ser::Serialize)
   [69]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#237
   [70]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.erased_serialize
   [71]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serializer.html (trait erased_serde::ser::Serializer)
   [72]: https://docs.rs/erased-serde/0.4.10/erased_serde/error/struct.Error.html (struct erased_serde::error::Error)
   [73]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#245
   [74]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.do_erased_serialize
   [75]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [76]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [77]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [78]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [79]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [80]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [81]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [82]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [83]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [84]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [85]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [86]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [87]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [88]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [89]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [90]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [91]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [92]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [93]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [94]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [95]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [96]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

