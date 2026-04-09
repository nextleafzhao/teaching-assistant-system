## InvokeBody

[![logo][1]][2]

## [tauri][2]2.10.3

## InvokeBody

### Sections

  * Android



### Variants

  * Json
  * Raw



### Trait Implementations

  * Clone
  * Debug
  * Default
  * From<InvokeBody>
  * From<Value>
  * From<Vec<u8>>



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

# Enum InvokeBody Copy item path

[Source][5]
[code] 
    pub enum InvokeBody {
        Json([Value][6]),
        Raw([Vec][7]<[u8][8]>),
    }
[/code]

Expand description

Possible values of an IPC payload.

#### §Android

On Android, [InvokeBody::Raw][9] is not supported. The enum will always contain [InvokeBody::Json][10]. When targeting Android Devices, consider passing raw bytes as a base64 [[std::string::String][11]], which is still more efficient than passing them as a number array in [InvokeBody::Json][10]

## Variants§

§

### Json([Value][6])

Json payload.

§

### Raw([Vec][7]<[u8][8]>)

Bytes payload.

## Trait Implementations§

[Source][12]§

### impl [Clone][13] for [InvokeBody][14]

[Source][12]§

#### fn [clone][15](&self) -> [InvokeBody][14]

Returns a duplicate of the value. [Read more][15]

1.0.0 · [Source][16]§

#### fn [clone_from][17](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][17]

[Source][12]§

### impl [Debug][18] for [InvokeBody][14]

[Source][12]§

#### fn [fmt][19](&self, f: &mut [Formatter][20]<'_>) -> [Result][21]

Formats the value using the given formatter. [Read more][19]

[Source][22]§

### impl [Default][23] for [InvokeBody][14]

[Source][24]§

#### fn [default][25]() -> Self

Returns the “default value” for a type. [Read more][25]

[Source][26]§

### impl [From][27]<[InvokeBody][14]> for [InvokeResponseBody][28]

[Source][29]§

#### fn [from][30](value: [InvokeBody][14]) -> Self

Converts to this type from the input type.

[Source][31]§

### impl [From][27]<[Value][6]> for [InvokeBody][14]

[Source][32]§

#### fn [from][30](value: [JsonValue][6]) -> Self

Converts to this type from the input type.

[Source][33]§

### impl [From][27]<[Vec][7]<[u8][8]>> for [InvokeBody][14]

[Source][34]§

#### fn [from][30](value: [Vec][7]<[u8][8]>) -> Self

Converts to this type from the input type.

## Auto Trait Implementations§

§

### impl [Freeze][35] for [InvokeBody][14]

§

### impl [RefUnwindSafe][36] for [InvokeBody][14]

§

### impl [Send][37] for [InvokeBody][14]

§

### impl [Sync][38] for [InvokeBody][14]

§

### impl [Unpin][39] for [InvokeBody][14]

§

### impl [UnwindSafe][40] for [InvokeBody][14]

## Blanket Implementations§

[Source][41]§

### impl<T> [Any][42] for T

where T: 'static + ?[Sized][43],

[Source][44]§

#### fn [type_id][45](&self) -> [TypeId][46]

Gets the `TypeId` of `self`. [Read more][45]

[Source][47]§

### impl<T> [Borrow][48]<T> for T

where T: ?[Sized][43],

[Source][49]§

#### fn [borrow][50](&self) -> [&T][51]

Immutably borrows from an owned value. [Read more][50]

[Source][52]§

### impl<T> [BorrowMut][53]<T> for T

where T: ?[Sized][43],

[Source][54]§

#### fn [borrow_mut][55](&mut self) -> [&mut T][51]

Mutably borrows from an owned value. [Read more][55]

[Source][56]§

### impl<T> [CloneToUninit][57] for T

where T: [Clone][13],

[Source][58]§

#### unsafe fn [clone_to_uninit][59](&self, dest: [*mut ][60][u8][8])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][59]

[Source][61]§

### impl<T> [From][27]<T> for T

[Source][62]§

#### fn [from][30](t: T) -> T

Returns the argument unchanged.

[Source][63]§

### impl<T, U> [Into][64]<U> for T

where U: [From][27]<T>,

[Source][65]§

#### fn [into][66](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][27]<T> for U` chooses to do.

[Source][67]§

### impl<T> [ToOwned][68] for T

where T: [Clone][13],

[Source][69]§

#### type [Owned][70] = T

The resulting type after obtaining ownership.

[Source][71]§

#### fn [to_owned][72](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][72]

[Source][73]§

#### fn [clone_into][74](&self, target: [&mut T][51])

Uses borrowed data to replace owned data, usually by cloning. [Read more][74]

[Source][75]§

### impl<T, U> [TryFrom][76]<U> for T

where U: [Into][64]<T>,

[Source][77]§

#### type [Error][78] = [Infallible][79]

The type returned in the event of a conversion error.

[Source][80]§

#### fn [try_from][81](value: U) -> [Result][82]<T, <T as [TryFrom][76]<U>>::[Error][83]>

Performs the conversion.

[Source][84]§

### impl<T, U> [TryInto][85]<U> for T

where U: [TryFrom][76]<T>,

[Source][86]§

#### type [Error][87] = <U as [TryFrom][76]<T>>::[Error][83]

The type returned in the event of a conversion error.

[Source][88]§

#### fn [try_into][89](self) -> [Result][82]<U, <U as [TryFrom][76]<T>>::[Error][83]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][18] \+ [Clone][13] \+ [Send][37] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/ipc/mod.rs.html#59-64
   [6]: https://docs.rs/serde_json/1.0.149/serde_json/value/enum.Value.html (enum serde_json::value::Value)
   [7]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [8]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [9]: enum.InvokeBody.html#variant.Raw (variant tauri::ipc::InvokeBody::Raw)
   [10]: enum.InvokeBody.html#variant.Json (variant tauri::ipc::InvokeBody::Json)
   [11]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [12]: ../../src/tauri/ipc/mod.rs.html#57
   [13]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [14]: enum.InvokeBody.html (enum tauri::ipc::InvokeBody)
   [15]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [16]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [17]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [18]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [19]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [20]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [21]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [22]: ../../src/tauri/ipc/mod.rs.html#66-70
   [23]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [24]: ../../src/tauri/ipc/mod.rs.html#67-69
   [25]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [26]: ../../src/tauri/ipc/mod.rs.html#118-125
   [27]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [28]: enum.InvokeResponseBody.html (enum tauri::ipc::InvokeResponseBody)
   [29]: ../../src/tauri/ipc/mod.rs.html#119-124
   [30]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [31]: ../../src/tauri/ipc/mod.rs.html#72-76
   [32]: ../../src/tauri/ipc/mod.rs.html#73-75
   [33]: ../../src/tauri/ipc/mod.rs.html#78-82
   [34]: ../../src/tauri/ipc/mod.rs.html#79-81
   [35]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [36]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [37]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [38]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [39]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [40]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [41]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [42]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [43]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [44]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [45]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [46]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [47]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [48]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [49]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [50]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [51]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [52]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [53]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [54]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [55]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [56]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [57]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [59]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [60]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [61]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [62]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [63]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [65]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [67]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [68]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [69]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [70]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [71]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [72]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [73]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [74]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [75]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [76]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [77]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [78]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [79]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [80]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [81]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [82]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [83]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [84]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [85]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [86]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [87]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [88]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [89]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

