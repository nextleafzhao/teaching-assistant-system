## Rect

[![logo][1]][2]

## [tauri][2]2.10.3

## Rect

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

# Struct Rect Copy item path
[code]
    pub struct Rect {
        pub position: [Position][4],
        pub size: [Size][5],
    }
[/code]

Expand description

A rectangular region.

## Fields§

§`position: [Position][4]`

Rect position.

§`size: [Size][5]`

Rect size.

## Trait Implementations§

§

### impl [Clone][6] for [Rect][7]

§

#### fn [clone][8](&self) -> [Rect][7]

Returns a duplicate of the value. [Read more][8]

1.0.0 · [Source][9]§

#### fn [clone_from][10](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][10]

§

### impl [Debug][11] for [Rect][7]

§

#### fn [fmt][12](&self, f: &mut [Formatter][13]<'_>) -> [Result][14]<[()][15], [Error][16]>

Formats the value using the given formatter. [Read more][12]

§

### impl [Default][17] for [Rect][7]

§

#### fn [default][18]() -> [Rect][7]

Returns the “default value” for a type. [Read more][18]

§

### impl [Serialize][19] for [Rect][7]

§

#### fn [serialize][20]<__S>( &self, __serializer: __S, ) -> [Result][14]<<__S as [Serializer][21]>::[Ok][22], <__S as [Serializer][21]>::[Error][23]>

where __S: [Serializer][21],

Serialize this value into the given Serde serializer. [Read more][20]

§

### impl [Copy][24] for [Rect][7]

## Auto Trait Implementations§

§

### impl [Freeze][25] for [Rect][7]

§

### impl [RefUnwindSafe][26] for [Rect][7]

§

### impl [Send][27] for [Rect][7]

§

### impl [Sync][28] for [Rect][7]

§

### impl [Unpin][29] for [Rect][7]

§

### impl [UnwindSafe][30] for [Rect][7]

## Blanket Implementations§

[Source][31]§

### impl<T> [Any][32] for T

where T: 'static + ?[Sized][33],

[Source][34]§

#### fn [type_id][35](&self) -> [TypeId][36]

Gets the `TypeId` of `self`. [Read more][35]

[Source][37]§

### impl<T> [Borrow][38]<T> for T

where T: ?[Sized][33],

[Source][39]§

#### fn [borrow][40](&self) -> [&T][41]

Immutably borrows from an owned value. [Read more][40]

[Source][42]§

### impl<T> [BorrowMut][43]<T> for T

where T: ?[Sized][33],

[Source][44]§

#### fn [borrow_mut][45](&mut self) -> [&mut T][41]

Mutably borrows from an owned value. [Read more][45]

[Source][46]§

### impl<T> [CloneToUninit][47] for T

where T: [Clone][6],

[Source][48]§

#### unsafe fn [clone_to_uninit][49](&self, dest: [*mut ][50][u8][51])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][49]

[Source][52]§

### impl<T> [From][53]<T> for T

[Source][54]§

#### fn [from][55](t: T) -> T

Returns the argument unchanged.

[Source][56]§

### impl<T, U> [Into][57]<U> for T

where U: [From][53]<T>,

[Source][58]§

#### fn [into][59](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][53]<T> for U` chooses to do.

[Source][60]§

### impl<T> [IpcResponse][61] for T

where T: [Serialize][19],

[Source][62]§

#### fn [body][63](self) -> [Result][14]<[InvokeResponseBody][64], [Error][65]>

Resolve the IPC response body.

[Source][66]§

### impl<T> [Serialize][67] for T

where T: [Serialize][19] \+ ?[Sized][33],

[Source][68]§

#### fn [erased_serialize][69](&self, serializer: &mut dyn [Serializer][70]) -> [Result][14]<[()][15], [Error][71]>

[Source][72]§

#### fn [do_erased_serialize][73]( &self, serializer: &mut dyn [Serializer][70], ) -> [Result][14]<[()][15], ErrorImpl>

[Source][74]§

### impl<T> [ToOwned][75] for T

where T: [Clone][6],

[Source][76]§

#### type [Owned][77] = T

The resulting type after obtaining ownership.

[Source][78]§

#### fn [to_owned][79](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][79]

[Source][80]§

#### fn [clone_into][81](&self, target: [&mut T][41])

Uses borrowed data to replace owned data, usually by cloning. [Read more][81]

[Source][82]§

### impl<T, U> [TryFrom][83]<U> for T

where U: [Into][57]<T>,

[Source][84]§

#### type [Error][85] = [Infallible][86]

The type returned in the event of a conversion error.

[Source][87]§

#### fn [try_from][88](value: U) -> [Result][14]<T, <T as [TryFrom][83]<U>>::[Error][89]>

Performs the conversion.

[Source][90]§

### impl<T, U> [TryInto][91]<U> for T

where U: [TryFrom][83]<T>,

[Source][92]§

#### type [Error][93] = <U as [TryFrom][83]<T>>::[Error][89]

The type returned in the event of a conversion error.

[Source][94]§

#### fn [try_into][95](self) -> [Result][14]<U, <U as [TryFrom][83]<T>>::[Error][89]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][11] \+ [Clone][6] \+ [Send][27] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: enum.Position.html (enum tauri::Position)
   [5]: enum.Size.html (enum tauri::Size)
   [6]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [7]: struct.Rect.html (struct tauri::Rect)
   [8]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [9]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [10]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [11]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [12]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [13]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [14]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [15]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [16]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [17]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [18]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [19]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [20]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html#tymethod.serialize
   [21]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html (trait serde_core::ser::Serializer)
   [22]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Ok (type serde_core::ser::Serializer::Ok)
   [23]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Error (type serde_core::ser::Serializer::Error)
   [24]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [25]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [26]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [27]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [28]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [29]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [30]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [31]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [32]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [33]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [34]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [35]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [36]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [37]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [38]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [39]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [40]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [41]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [42]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [43]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [44]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [45]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [46]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [47]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [49]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [50]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [51]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [52]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [53]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [54]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [55]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [56]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [57]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [59]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [60]: ../src/tauri/ipc/mod.rs.html#181-187
   [61]: ipc/trait.IpcResponse.html (trait tauri::ipc::IpcResponse)
   [62]: ../src/tauri/ipc/mod.rs.html#182-186
   [63]: ipc/trait.IpcResponse.html#tymethod.body
   [64]: ipc/enum.InvokeResponseBody.html (enum tauri::ipc::InvokeResponseBody)
   [65]: enum.Error.html (enum tauri::Error)
   [66]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#233-235
   [67]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html (trait erased_serde::ser::Serialize)
   [68]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#237
   [69]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.erased_serialize
   [70]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serializer.html (trait erased_serde::ser::Serializer)
   [71]: https://docs.rs/erased-serde/0.4.10/erased_serde/error/struct.Error.html (struct erased_serde::error::Error)
   [72]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#245
   [73]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.do_erased_serialize
   [74]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [75]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [76]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [77]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [78]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [79]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [80]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [81]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [82]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [83]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [84]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [85]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [86]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [87]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [88]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [89]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [90]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [91]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [92]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [93]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [94]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [95]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

