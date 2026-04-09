## MenuEvent

[![logo][1]][2]

## [tauri][2]2.10.3

## MenuEvent

### Fields

  * id



### Methods

  * id



### Trait Implementations

  * Clone
  * Debug
  * From<MenuEvent>
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



## [In tauri::menu][3]

[tauri][4]::[menu][3]

# Struct MenuEvent Copy item path

[Source][5]
[code] 
    pub struct MenuEvent {
        pub id: [MenuId][6],
    }
[/code]

Expand description

Describes a menu event emitted when a menu item is activated

## Fields§

§`id: [MenuId][6]`

Id of the menu item which triggered this event

## Implementations§

[Source][7]§

### impl [MenuEvent][8]

[Source][9]

#### pub fn id(&self) -> &[MenuId][6]

Returns the id of the menu item which triggered this event

## Trait Implementations§

[Source][10]§

### impl [Clone][11] for [MenuEvent][8]

[Source][10]§

#### fn [clone][12](&self) -> [MenuEvent][8]

Returns a duplicate of the value. [Read more][12]

1.0.0 · [Source][13]§

#### fn [clone_from][14](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][14]

[Source][10]§

### impl [Debug][15] for [MenuEvent][8]

[Source][10]§

#### fn [fmt][16](&self, f: &mut [Formatter][17]<'_>) -> [Result][18]

Formats the value using the given formatter. [Read more][16]

[Source][19]§

### impl [From][20]<MenuEvent> for [MenuEvent][8]

[Source][21]§

#### fn [from][22](value: MenuEvent) -> Self

Converts to this type from the input type.

[Source][10]§

### impl [Serialize][23] for [MenuEvent][8]

[Source][10]§

#### fn [serialize][24]<__S>(&self, __serializer: __S) -> [Result][25]<__S::[Ok][26], __S::[Error][27]>

where __S: [Serializer][28],

Serialize this value into the given Serde serializer. [Read more][24]

## Auto Trait Implementations§

§

### impl [Freeze][29] for [MenuEvent][8]

§

### impl [RefUnwindSafe][30] for [MenuEvent][8]

§

### impl [Send][31] for [MenuEvent][8]

§

### impl [Sync][32] for [MenuEvent][8]

§

### impl [Unpin][33] for [MenuEvent][8]

§

### impl [UnwindSafe][34] for [MenuEvent][8]

## Blanket Implementations§

[Source][35]§

### impl<T> [Any][36] for T

where T: 'static + ?[Sized][37],

[Source][38]§

#### fn [type_id][39](&self) -> [TypeId][40]

Gets the `TypeId` of `self`. [Read more][39]

[Source][41]§

### impl<T> [Borrow][42]<T> for T

where T: ?[Sized][37],

[Source][43]§

#### fn [borrow][44](&self) -> [&T][45]

Immutably borrows from an owned value. [Read more][44]

[Source][46]§

### impl<T> [BorrowMut][47]<T> for T

where T: ?[Sized][37],

[Source][48]§

#### fn [borrow_mut][49](&mut self) -> [&mut T][45]

Mutably borrows from an owned value. [Read more][49]

[Source][50]§

### impl<T> [CloneToUninit][51] for T

where T: [Clone][11],

[Source][52]§

#### unsafe fn [clone_to_uninit][53](&self, dest: [*mut ][54][u8][55])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][53]

[Source][56]§

### impl<T> [From][20]<T> for T

[Source][57]§

#### fn [from][22](t: T) -> T

Returns the argument unchanged.

[Source][58]§

### impl<T, U> [Into][59]<U> for T

where U: [From][20]<T>,

[Source][60]§

#### fn [into][61](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][20]<T> for U` chooses to do.

[Source][62]§

### impl<T> [IpcResponse][63] for T

where T: [Serialize][23],

[Source][64]§

#### fn [body][65](self) -> [Result][25]<[InvokeResponseBody][66], [Error][67]>

Resolve the IPC response body.

[Source][68]§

### impl<T> [Serialize][69] for T

where T: [Serialize][23] \+ ?[Sized][37],

[Source][70]§

#### fn [erased_serialize][71](&self, serializer: &mut dyn [Serializer][72]) -> [Result][25]<[()][73], [Error][74]>

[Source][75]§

#### fn [do_erased_serialize][76]( &self, serializer: &mut dyn [Serializer][72], ) -> [Result][25]<[()][73], ErrorImpl>

[Source][77]§

### impl<T> [ToOwned][78] for T

where T: [Clone][11],

[Source][79]§

#### type [Owned][80] = T

The resulting type after obtaining ownership.

[Source][81]§

#### fn [to_owned][82](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][82]

[Source][83]§

#### fn [clone_into][84](&self, target: [&mut T][45])

Uses borrowed data to replace owned data, usually by cloning. [Read more][84]

[Source][85]§

### impl<T, U> [TryFrom][86]<U> for T

where U: [Into][59]<T>,

[Source][87]§

#### type [Error][88] = [Infallible][89]

The type returned in the event of a conversion error.

[Source][90]§

#### fn [try_from][91](value: U) -> [Result][25]<T, <T as [TryFrom][86]<U>>::[Error][92]>

Performs the conversion.

[Source][93]§

### impl<T, U> [TryInto][94]<U> for T

where U: [TryFrom][86]<T>,

[Source][95]§

#### type [Error][96] = <U as [TryFrom][86]<T>>::[Error][92]

The type returned in the event of a conversion error.

[Source][97]§

#### fn [try_into][98](self) -> [Result][25]<U, <U as [TryFrom][86]<T>>::[Error][92]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][15] \+ [Clone][11] \+ [Send][31] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/menu/mod.rs.html#45-48
   [6]: struct.MenuId.html (struct tauri::menu::MenuId)
   [7]: ../../src/tauri/menu/mod.rs.html#50-55
   [8]: struct.MenuEvent.html (struct tauri::menu::MenuEvent)
   [9]: ../../src/tauri/menu/mod.rs.html#52-54
   [10]: ../../src/tauri/menu/mod.rs.html#44
   [11]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [12]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [13]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [14]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [15]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [16]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [17]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [18]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [19]: ../../src/tauri/menu/mod.rs.html#57-61
   [20]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [21]: ../../src/tauri/menu/mod.rs.html#58-60
   [22]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [23]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [24]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html#tymethod.serialize
   [25]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [26]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Ok (type serde_core::ser::Serializer::Ok)
   [27]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Error (type serde_core::ser::Serializer::Error)
   [28]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html (trait serde_core::ser::Serializer)
   [29]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [30]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [31]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [32]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [33]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [34]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [35]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [36]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [37]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [38]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [39]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [40]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [41]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [42]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [44]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [45]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
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
   [56]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [57]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [58]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [59]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [60]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [61]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [62]: ../../src/tauri/ipc/mod.rs.html#181-187
   [63]: ../ipc/trait.IpcResponse.html (trait tauri::ipc::IpcResponse)
   [64]: ../../src/tauri/ipc/mod.rs.html#182-186
   [65]: ../ipc/trait.IpcResponse.html#tymethod.body
   [66]: ../ipc/enum.InvokeResponseBody.html (enum tauri::ipc::InvokeResponseBody)
   [67]: ../enum.Error.html (enum tauri::Error)
   [68]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#233-235
   [69]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html (trait erased_serde::ser::Serialize)
   [70]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#237
   [71]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.erased_serialize
   [72]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serializer.html (trait erased_serde::ser::Serializer)
   [73]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [74]: https://docs.rs/erased-serde/0.4.10/erased_serde/error/struct.Error.html (struct erased_serde::error::Error)
   [75]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#245
   [76]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.do_erased_serialize
   [77]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [78]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [79]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [80]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [81]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [82]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [83]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [84]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [85]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [86]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [87]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [88]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [89]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [90]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [91]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [92]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [93]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [94]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [95]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [96]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [97]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [98]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

