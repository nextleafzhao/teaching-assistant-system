## State

[![logo][1]][2]

## [tauri][2]2.10.3

## State

### Methods

  * inner



### Trait Implementations

  * Clone
  * CommandArg<'de, R>
  * Debug
  * Deref
  * PartialEq



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
  * Formattable
  * From<T>
  * Into<U>
  * Parsable
  * Receiver
  * ToOwned
  * TryFrom<U>
  * TryInto<U>
  * UserEvent



## [In crate tauri][3]

[tauri][3]

# Struct State Copy item path

[Source][4]
[code] 
    pub struct State<'r, T: [Send][5] + [Sync][6] + 'static>(/* private fields */);
[/code]

Expand description

A guard for a state value.

See [`Manager::manage`][7] for usage examples.

## Implementations§

[Source][8]§

### impl<'r, T: [Send][5] \+ [Sync][6] \+ 'static> [State][9]<'r, T>

[Source][10]

#### pub fn inner(&self) -> [&'r T][11]

Retrieve a borrow to the underlying value with a lifetime of `'r`. Using this method is typically unnecessary as `State` implements [`std::ops::Deref`][12] with a [`std::ops::Deref::Target`][13] of `T`.

## Trait Implementations§

[Source][14]§

### impl<T: [Send][5] \+ [Sync][6] \+ 'static> [Clone][15] for [State][9]<'_, T>

[Source][16]§

#### fn [clone][17](&self) -> Self

Returns a duplicate of the value. [Read more][17]

1.0.0 · [Source][18]§

#### fn [clone_from][19](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][19]

[Source][20]§

### impl<'r, 'de: 'r, T: [Send][5] \+ [Sync][6] \+ 'static, R: [Runtime][21]> [CommandArg][22]<'de, R> for [State][9]<'r, T>

[Source][23]§

#### fn [from_command][24](command: [CommandItem][25]<'de, R>) -> [Result][26]<Self, [InvokeError][27]>

Grabs the [`State`][9] from the [`CommandItem`][25]. This will never fail.

[Source][28]§

### impl<T: [Send][5] \+ [Sync][6] \+ [Debug][29]> [Debug][29] for [State][9]<'_, T>

[Source][30]§

#### fn [fmt][31](&self, f: &mut [Formatter][32]<'_>) -> [Result][33]

Formats the value using the given formatter. [Read more][31]

[Source][34]§

### impl<T: [Send][5] \+ [Sync][6] \+ 'static> [Deref][12] for [State][9]<'_, T>

[Source][35]§

#### type [Target][36] = T

The resulting type after dereferencing.

[Source][37]§

#### fn [deref][38](&self) -> [&T][11]

Dereferences the value.

[Source][39]§

### impl<T: [Send][5] \+ [Sync][6] \+ 'static + [PartialEq][40]> [PartialEq][40] for [State][9]<'_, T>

[Source][41]§

#### fn [eq][42](&self, other: &Self) -> [bool][43]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][44]§

#### fn [ne][45](&self, other: [&Rhs][11]) -> [bool][43]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

## Auto Trait Implementations§

§

### impl<'r, T> [Freeze][46] for [State][9]<'r, T>

§

### impl<'r, T> [RefUnwindSafe][47] for [State][9]<'r, T>

where T: [RefUnwindSafe][47],

§

### impl<'r, T> [Send][5] for [State][9]<'r, T>

§

### impl<'r, T> [Sync][6] for [State][9]<'r, T>

§

### impl<'r, T> [Unpin][48] for [State][9]<'r, T>

§

### impl<'r, T> [UnwindSafe][49] for [State][9]<'r, T>

where T: [RefUnwindSafe][47],

## Blanket Implementations§

[Source][50]§

### impl<T> [Any][51] for T

where T: 'static + ?[Sized][52],

[Source][53]§

#### fn [type_id][54](&self) -> [TypeId][55]

Gets the `TypeId` of `self`. [Read more][54]

[Source][56]§

### impl<T> [Borrow][57]<T> for T

where T: ?[Sized][52],

[Source][58]§

#### fn [borrow][59](&self) -> [&T][11]

Immutably borrows from an owned value. [Read more][59]

[Source][60]§

### impl<T> [BorrowMut][61]<T> for T

where T: ?[Sized][52],

[Source][62]§

#### fn [borrow_mut][63](&mut self) -> [&mut T][11]

Mutably borrows from an owned value. [Read more][63]

[Source][64]§

### impl<T> [CloneToUninit][65] for T

where T: [Clone][15],

[Source][66]§

#### unsafe fn [clone_to_uninit][67](&self, dest: [*mut ][68][u8][69])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][67]

[Source][70]§

### impl<T> [From][71]<T> for T

[Source][72]§

#### fn [from][73](t: T) -> T

Returns the argument unchanged.

[Source][74]§

### impl<T, U> [Into][75]<U> for T

where U: [From][71]<T>,

[Source][76]§

#### fn [into][77](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][71]<T> for U` chooses to do.

[Source][78]§

### impl<P, T> [Receiver][79] for P

where P: [Deref][12]<Target = T> \+ ?[Sized][52], T: ?[Sized][52],

[Source][80]§

#### type [Target][81] = T

🔬This is a nightly-only experimental API. (`arbitrary_self_types`)

The target type on which the method may be called.

[Source][82]§

### impl<T> [ToOwned][83] for T

where T: [Clone][15],

[Source][84]§

#### type [Owned][85] = T

The resulting type after obtaining ownership.

[Source][86]§

#### fn [to_owned][87](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][87]

[Source][88]§

#### fn [clone_into][89](&self, target: [&mut T][11])

Uses borrowed data to replace owned data, usually by cloning. [Read more][89]

[Source][90]§

### impl<T, U> [TryFrom][91]<U> for T

where U: [Into][75]<T>,

[Source][92]§

#### type [Error][93] = [Infallible][94]

The type returned in the event of a conversion error.

[Source][95]§

#### fn [try_from][96](value: U) -> [Result][26]<T, <T as [TryFrom][91]<U>>::[Error][97]>

Performs the conversion.

[Source][98]§

### impl<T, U> [TryInto][99]<U> for T

where U: [TryFrom][91]<T>,

[Source][100]§

#### type [Error][101] = <U as [TryFrom][91]<T>>::[Error][97]

The type returned in the event of a conversion error.

[Source][102]§

#### fn [try_into][103](self) -> [Result][26]<U, <U as [TryFrom][91]<T>>::[Error][97]>

Performs the conversion.

§

### impl<T> Formattable for T

where T: [Deref][12], <T as [Deref][12]>::[Target][104]: Formattable,

§

### impl<T> Parsable for T

where T: [Deref][12], <T as [Deref][12]>::[Target][104]: Parsable,

§

### impl<T> UserEvent for T

where T: [Debug][29] \+ [Clone][15] \+ [Send][5] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/state.rs.html#21
   [5]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [6]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [7]: trait.Manager.html#method.manage (method tauri::Manager::manage)
   [8]: ../src/tauri/state.rs.html#23-31
   [9]: struct.State.html (struct tauri::State)
   [10]: ../src/tauri/state.rs.html#28-30
   [11]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [12]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html (trait core::ops::deref::Deref)
   [13]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#associatedtype.Target (associated type core::ops::deref::Deref::Target)
   [14]: ../src/tauri/state.rs.html#42-46
   [15]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [16]: ../src/tauri/state.rs.html#43-45
   [17]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [18]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [19]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [20]: ../src/tauri/state.rs.html#60-70
   [21]: trait.Runtime.html (trait tauri::Runtime)
   [22]: ipc/trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [23]: ../src/tauri/state.rs.html#62-69
   [24]: ipc/trait.CommandArg.html#tymethod.from_command
   [25]: ipc/struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [26]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [27]: ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [28]: ../src/tauri/state.rs.html#54-58
   [29]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [30]: ../src/tauri/state.rs.html#55-57
   [31]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [32]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [33]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [34]: ../src/tauri/state.rs.html#33-40
   [35]: ../src/tauri/state.rs.html#34
   [36]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#associatedtype.Target
   [37]: ../src/tauri/state.rs.html#37-39
   [38]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#tymethod.deref
   [39]: ../src/tauri/state.rs.html#48-52
   [40]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [41]: ../src/tauri/state.rs.html#49-51
   [42]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [43]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [44]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [45]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [46]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [47]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [48]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [49]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [50]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [51]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [52]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [54]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [55]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [56]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [57]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [59]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [60]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [61]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [62]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [63]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [64]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [65]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [66]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [67]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [68]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [69]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [70]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [72]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [74]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [75]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [76]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [77]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [78]: https://doc.rust-lang.org/1.94.1/src/core/ops/deref.rs.html#378-380
   [79]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Receiver.html (trait core::ops::deref::Receiver)
   [80]: https://doc.rust-lang.org/1.94.1/src/core/ops/deref.rs.html#382
   [81]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Receiver.html#associatedtype.Target
   [82]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [83]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [84]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [85]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [86]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [87]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [88]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [89]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [90]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [91]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [92]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [93]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [94]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [95]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [96]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [97]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [98]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [99]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [100]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [101]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [102]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [103]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [104]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#associatedtype.Target (type core::ops::deref::Deref::Target)

