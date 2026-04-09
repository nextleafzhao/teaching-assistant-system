## InvokeResponseBody

[![logo][1]][2]

## [tauri][2]2.10.3

## InvokeResponseBody

### Variants

  * Json
  * Raw



### Methods

  * deserialize



### Trait Implementations

  * Clone
  * Debug
  * From<InvokeBody>
  * From<String>
  * From<Vec<u8>>
  * IpcResponse



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
  * ToOwned
  * TryFrom<U>
  * TryInto<U>
  * UserEvent



## [In tauri::ipc][3]

[tauri][4]::[ipc][3]

# Enum InvokeResponseBody Copy item path

[Source][5]
[code] 
    pub enum InvokeResponseBody {
        Json([String][6]),
        Raw([Vec][7]<[u8][8]>),
    }
[/code]

Expand description

Possible values of an IPC response.

## Variants§

§

### Json([String][6])

Json payload.

§

### Raw([Vec][7]<[u8][8]>)

Bytes payload.

## Implementations§

[Source][9]§

### impl [InvokeResponseBody][10]

[Source][11]

#### pub fn deserialize<T: [DeserializeOwned][12]>(self) -> [Result][13]<T>

Attempts to deserialize the response.

## Trait Implementations§

[Source][14]§

### impl [Clone][15] for [InvokeResponseBody][10]

[Source][14]§

#### fn [clone][16](&self) -> [InvokeResponseBody][10]

Returns a duplicate of the value. [Read more][16]

1.0.0 · [Source][17]§

#### fn [clone_from][18](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][18]

[Source][14]§

### impl [Debug][19] for [InvokeResponseBody][10]

[Source][14]§

#### fn [fmt][20](&self, f: &mut [Formatter][21]<'_>) -> [Result][22]

Formats the value using the given formatter. [Read more][20]

[Source][23]§

### impl [From][24]<[InvokeBody][25]> for [InvokeResponseBody][10]

[Source][26]§

#### fn [from][27](value: [InvokeBody][25]) -> Self

Converts to this type from the input type.

[Source][28]§

### impl [From][24]<[String][6]> for [InvokeResponseBody][10]

[Source][29]§

#### fn [from][27](value: [String][6]) -> Self

Converts to this type from the input type.

[Source][30]§

### impl [From][24]<[Vec][7]<[u8][8]>> for [InvokeResponseBody][10]

[Source][31]§

#### fn [from][27](value: [Vec][7]<[u8][8]>) -> Self

Converts to this type from the input type.

[Source][32]§

### impl [IpcResponse][33] for [InvokeResponseBody][10]

[Source][34]§

#### fn [body][35](self) -> [Result][36]<[InvokeResponseBody][10]>

Resolve the IPC response body.

## Auto Trait Implementations§

§

### impl [Freeze][37] for [InvokeResponseBody][10]

§

### impl [RefUnwindSafe][38] for [InvokeResponseBody][10]

§

### impl [Send][39] for [InvokeResponseBody][10]

§

### impl [Sync][40] for [InvokeResponseBody][10]

§

### impl [Unpin][41] for [InvokeResponseBody][10]

§

### impl [UnwindSafe][42] for [InvokeResponseBody][10]

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

#### fn [borrow][52](&self) -> [&T][53]

Immutably borrows from an owned value. [Read more][52]

[Source][54]§

### impl<T> [BorrowMut][55]<T> for T

where T: ?[Sized][45],

[Source][56]§

#### fn [borrow_mut][57](&mut self) -> [&mut T][53]

Mutably borrows from an owned value. [Read more][57]

[Source][58]§

### impl<T> [CloneToUninit][59] for T

where T: [Clone][15],

[Source][60]§

#### unsafe fn [clone_to_uninit][61](&self, dest: [*mut ][62][u8][8])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][61]

[Source][63]§

### impl<T> [From][24]<T> for T

[Source][64]§

#### fn [from][27](t: T) -> T

Returns the argument unchanged.

[Source][65]§

### impl<T, U> [Into][66]<U> for T

where U: [From][24]<T>,

[Source][67]§

#### fn [into][68](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][24]<T> for U` chooses to do.

[Source][69]§

### impl<T> [ToOwned][70] for T

where T: [Clone][15],

[Source][71]§

#### type [Owned][72] = T

The resulting type after obtaining ownership.

[Source][73]§

#### fn [to_owned][74](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][74]

[Source][75]§

#### fn [clone_into][76](&self, target: [&mut T][53])

Uses borrowed data to replace owned data, usually by cloning. [Read more][76]

[Source][77]§

### impl<T, U> [TryFrom][78]<U> for T

where U: [Into][66]<T>,

[Source][79]§

#### type [Error][80] = [Infallible][81]

The type returned in the event of a conversion error.

[Source][82]§

#### fn [try_from][83](value: U) -> [Result][84]<T, <T as [TryFrom][78]<U>>::[Error][85]>

Performs the conversion.

[Source][86]§

### impl<T, U> [TryInto][87]<U> for T

where U: [TryFrom][78]<T>,

[Source][88]§

#### type [Error][89] = <U as [TryFrom][78]<T>>::[Error][85]

The type returned in the event of a conversion error.

[Source][90]§

#### fn [try_into][91](self) -> [Result][84]<U, <U as [TryFrom][78]<T>>::[Error][85]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][19] \+ [Clone][15] \+ [Send][39] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/ipc/mod.rs.html#99-104
   [6]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [7]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [8]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [9]: ../../src/tauri/ipc/mod.rs.html#133-141
   [10]: enum.InvokeResponseBody.html (enum tauri::ipc::InvokeResponseBody)
   [11]: ../../src/tauri/ipc/mod.rs.html#135-140
   [12]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)
   [13]: https://docs.rs/serde_json/1.0.149/serde_json/error/type.Result.html (type serde_json::error::Result)
   [14]: ../../src/tauri/ipc/mod.rs.html#97
   [15]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [16]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [17]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [18]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [19]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [20]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [21]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [22]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [23]: ../../src/tauri/ipc/mod.rs.html#118-125
   [24]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [25]: enum.InvokeBody.html (enum tauri::ipc::InvokeBody)
   [26]: ../../src/tauri/ipc/mod.rs.html#119-124
   [27]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [28]: ../../src/tauri/ipc/mod.rs.html#106-110
   [29]: ../../src/tauri/ipc/mod.rs.html#107-109
   [30]: ../../src/tauri/ipc/mod.rs.html#112-116
   [31]: ../../src/tauri/ipc/mod.rs.html#113-115
   [32]: ../../src/tauri/ipc/mod.rs.html#127-131
   [33]: trait.IpcResponse.html (trait tauri::ipc::IpcResponse)
   [34]: ../../src/tauri/ipc/mod.rs.html#128-130
   [35]: trait.IpcResponse.html#tymethod.body
   [36]: ../type.Result.html (type tauri::Result)
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
   [53]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [54]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [55]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [56]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [57]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [58]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [59]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [60]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [61]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [62]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [63]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [64]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [65]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [67]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [69]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [70]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [71]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [72]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [73]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [74]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [75]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [76]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [77]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [78]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [79]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [80]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [81]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [82]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [83]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [84]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [85]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [86]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [87]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [88]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [89]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [90]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [91]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

