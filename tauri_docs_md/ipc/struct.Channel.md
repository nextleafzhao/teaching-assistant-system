## Channel

[![logo][1]][2]

## [tauri][2]2.10.3

## Channel

### Methods

  * id
  * new
  * send



### Trait Implementations

  * Clone
  * CommandArg<'de, R>
  * Serialize



### Auto Trait Implementations

  * !RefUnwindSafe
  * !UnwindSafe
  * Freeze
  * Send
  * Sync
  * Unpin



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



## [In tauri::ipc][3]

[tauri][4]::[ipc][3]

# Struct Channel Copy item path

[Source][5]
[code] 
    pub struct Channel<TSend = [InvokeResponseBody][6]> { /* private fields */ }
[/code]

Expand description

An IPC channel.

## Implementations§

[Source][7]§

### impl<TSend> [Channel][8]<TSend>

[Source][9]

#### pub fn new<F: [Fn][10]([InvokeResponseBody][6]) -> [Result][11]<[()][12]> \+ [Send][13] \+ [Sync][14] \+ 'static>( on_message: F, ) -> Self

Creates a new channel with the given message handler.

[Source][15]

#### pub fn id(&self) -> [u32][16]

The channel identifier.

[Source][17]

#### pub fn send(&self, data: TSend) -> [Result][11]<[()][12]>

where TSend: [IpcResponse][18],

Sends the given data through the channel.

## Trait Implementations§

[Source][19]§

### impl<TSend> [Clone][20] for [Channel][8]<TSend>

[Source][21]§

#### fn [clone][22](&self) -> Self

Returns a duplicate of the value. [Read more][22]

1.0.0 · [Source][23]§

#### fn [clone_from][24](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][24]

[Source][25]§

### impl<'de, R: [Runtime][26], TSend> [CommandArg][27]<'de, R> for [Channel][8]<TSend>

[Source][28]§

#### fn [from_command][29](command: [CommandItem][30]<'de, R>) -> [Result][31]<Self, [InvokeError][32]>

Grabs the [`Webview`][33] from the [`CommandItem`][30] and returns the associated [`Channel`][8].

[Source][34]§

### impl<TSend> [Serialize][35] for [Channel][8]<TSend>

[Source][36]§

#### fn [serialize][37]<S>(&self, serializer: S) -> [Result][31]<S::[Ok][38], S::[Error][39]>

where S: [Serializer][40],

Serialize this value into the given Serde serializer. [Read more][37]

## Auto Trait Implementations§

§

### impl<TSend> [Freeze][41] for [Channel][8]<TSend>

§

### impl<TSend = [InvokeResponseBody][6]> ![RefUnwindSafe][42] for [Channel][8]<TSend>

§

### impl<TSend> [Send][13] for [Channel][8]<TSend>

where TSend: [Send][13],

§

### impl<TSend> [Sync][14] for [Channel][8]<TSend>

where TSend: [Sync][14],

§

### impl<TSend> [Unpin][43] for [Channel][8]<TSend>

where TSend: [Unpin][43],

§

### impl<TSend = [InvokeResponseBody][6]> ![UnwindSafe][44] for [Channel][8]<TSend>

## Blanket Implementations§

[Source][45]§

### impl<T> [Any][46] for T

where T: 'static + ?[Sized][47],

[Source][48]§

#### fn [type_id][49](&self) -> [TypeId][50]

Gets the `TypeId` of `self`. [Read more][49]

[Source][51]§

### impl<T> [Borrow][52]<T> for T

where T: ?[Sized][47],

[Source][53]§

#### fn [borrow][54](&self) -> [&T][55]

Immutably borrows from an owned value. [Read more][54]

[Source][56]§

### impl<T> [BorrowMut][57]<T> for T

where T: ?[Sized][47],

[Source][58]§

#### fn [borrow_mut][59](&mut self) -> [&mut T][55]

Mutably borrows from an owned value. [Read more][59]

[Source][60]§

### impl<T> [CloneToUninit][61] for T

where T: [Clone][20],

[Source][62]§

#### unsafe fn [clone_to_uninit][63](&self, dest: [*mut ][64][u8][65])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][63]

[Source][66]§

### impl<T> [From][67]<T> for T

[Source][68]§

#### fn [from][69](t: T) -> T

Returns the argument unchanged.

[Source][70]§

### impl<T, U> [Into][71]<U> for T

where U: [From][67]<T>,

[Source][72]§

#### fn [into][73](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][67]<T> for U` chooses to do.

[Source][74]§

### impl<T> [IpcResponse][18] for T

where T: [Serialize][35],

[Source][75]§

#### fn [body][76](self) -> [Result][31]<[InvokeResponseBody][6], [Error][77]>

Resolve the IPC response body.

[Source][78]§

### impl<T> [Serialize][79] for T

where T: [Serialize][35] \+ ?[Sized][47],

[Source][80]§

#### fn [erased_serialize][81](&self, serializer: &mut dyn [Serializer][82]) -> [Result][31]<[()][12], [Error][83]>

[Source][84]§

#### fn [do_erased_serialize][85]( &self, serializer: &mut dyn [Serializer][82], ) -> [Result][31]<[()][12], ErrorImpl>

[Source][86]§

### impl<T> [ToOwned][87] for T

where T: [Clone][20],

[Source][88]§

#### type [Owned][89] = T

The resulting type after obtaining ownership.

[Source][90]§

#### fn [to_owned][91](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][91]

[Source][92]§

#### fn [clone_into][93](&self, target: [&mut T][55])

Uses borrowed data to replace owned data, usually by cloning. [Read more][93]

[Source][94]§

### impl<T, U> [TryFrom][95]<U> for T

where U: [Into][71]<T>,

[Source][96]§

#### type [Error][97] = [Infallible][98]

The type returned in the event of a conversion error.

[Source][99]§

#### fn [try_from][100](value: U) -> [Result][31]<T, <T as [TryFrom][95]<U>>::[Error][101]>

Performs the conversion.

[Source][102]§

### impl<T, U> [TryInto][103]<U> for T

where U: [TryFrom][95]<T>,

[Source][104]§

#### type [Error][105] = <U as [TryFrom][95]<T>>::[Error][101]

The type returned in the event of a conversion error.

[Source][106]§

#### fn [try_into][107](self) -> [Result][31]<U, <U as [TryFrom][95]<T>>::[Error][101]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/ipc/channel.rs.html#49-52
   [6]: enum.InvokeResponseBody.html (enum tauri::ipc::InvokeResponseBody)
   [7]: ../../src/tauri/ipc/channel.rs.html#211-298
   [8]: struct.Channel.html (struct tauri::ipc::Channel)
   [9]: ../../src/tauri/ipc/channel.rs.html#213-221
   [10]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.Fn.html (trait core::ops::function::Fn)
   [11]: ../type.Result.html (type tauri::Result)
   [12]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [13]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [14]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [15]: ../../src/tauri/ipc/channel.rs.html#287-289
   [16]: https://doc.rust-lang.org/1.94.1/std/primitive.u32.html
   [17]: ../../src/tauri/ipc/channel.rs.html#292-297
   [18]: trait.IpcResponse.html (trait tauri::ipc::IpcResponse)
   [19]: ../../src/tauri/ipc/channel.rs.html#62-69
   [20]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [21]: ../../src/tauri/ipc/channel.rs.html#63-68
   [22]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [23]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [24]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [25]: ../../src/tauri/ipc/channel.rs.html#300-316
   [26]: ../trait.Runtime.html (trait tauri::Runtime)
   [27]: trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [28]: ../../src/tauri/ipc/channel.rs.html#302-315
   [29]: trait.CommandArg.html#tymethod.from_command
   [30]: struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [31]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [32]: struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [33]: ../webview/struct.Webview.html (struct tauri::webview::Webview)
   [34]: ../../src/tauri/ipc/channel.rs.html#88-95
   [35]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [36]: ../../src/tauri/ipc/channel.rs.html#89-94
   [37]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html#tymethod.serialize
   [38]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Ok (type serde_core::ser::Serializer::Ok)
   [39]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Error (type serde_core::ser::Serializer::Error)
   [40]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html (trait serde_core::ser::Serializer)
   [41]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [42]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [43]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [44]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [45]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [46]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [47]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [49]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [50]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [51]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [52]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [54]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [55]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [56]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [57]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [59]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [60]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [61]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [62]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [63]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [64]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [65]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [66]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [67]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [68]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [69]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [70]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [72]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [74]: ../../src/tauri/ipc/mod.rs.html#181-187
   [75]: ../../src/tauri/ipc/mod.rs.html#182-186
   [76]: trait.IpcResponse.html#tymethod.body
   [77]: ../enum.Error.html (enum tauri::Error)
   [78]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#233-235
   [79]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html (trait erased_serde::ser::Serialize)
   [80]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#237
   [81]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.erased_serialize
   [82]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serializer.html (trait erased_serde::ser::Serializer)
   [83]: https://docs.rs/erased-serde/0.4.10/erased_serde/error/struct.Error.html (struct erased_serde::error::Error)
   [84]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#245
   [85]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.do_erased_serialize
   [86]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [87]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [88]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [89]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [90]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [91]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [92]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [93]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [94]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [95]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [96]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [97]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [98]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [99]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [100]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [101]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [102]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [103]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [104]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [105]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [106]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [107]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

