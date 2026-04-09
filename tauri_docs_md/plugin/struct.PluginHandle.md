## PluginHandle

[![logo][1]][2]

## [tauri][2]2.10.3

## PluginHandle

### Methods

  * app



### Trait Implementations

  * Clone
  * Debug



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
  * ToOwned
  * TryFrom<U>
  * TryInto<U>
  * UserEvent



## [In tauri::plugin][3]

[tauri][4]::[plugin][3]

# Struct PluginHandle Copy item path

[Source][5]
[code] 
    pub struct PluginHandle<R: [Runtime][6]> { /* private fields */ }
[/code]

Expand description

A handle to a plugin.

## Implementations§

[Source][7]§

### impl<R: [Runtime][6]> [PluginHandle][8]<R>

[Source][9]

#### pub fn app(&self) -> &[AppHandle][10]<R>

Returns the application handle.

## Trait Implementations§

[Source][11]§

### impl<R: [Runtime][6]> [Clone][12] for [PluginHandle][8]<R>

[Source][13]§

#### fn [clone][14](&self) -> Self

Returns a duplicate of the value. [Read more][14]

1.0.0 · [Source][15]§

#### fn [clone_from][16](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][16]

[Source][17]§

### impl<R: [Debug][18] \+ [Runtime][6]> [Debug][18] for [PluginHandle][8]<R>

[Source][17]§

#### fn [fmt][19](&self, f: &mut [Formatter][20]<'_>) -> [Result][21]

Formats the value using the given formatter. [Read more][19]

## Auto Trait Implementations§

§

### impl<R> [Freeze][22] for [PluginHandle][8]<R>

where <R as Runtime<[EventLoopMessage][23]>>::Handle: [Freeze][22],

§

### impl<R> ![RefUnwindSafe][24] for [PluginHandle][8]<R>

§

### impl<R> [Send][25] for [PluginHandle][8]<R>

§

### impl<R> [Sync][26] for [PluginHandle][8]<R>

§

### impl<R> [Unpin][27] for [PluginHandle][8]<R>

where <R as Runtime<[EventLoopMessage][23]>>::Handle: [Unpin][27],

§

### impl<R> ![UnwindSafe][28] for [PluginHandle][8]<R>

## Blanket Implementations§

[Source][29]§

### impl<T> [Any][30] for T

where T: 'static + ?[Sized][31],

[Source][32]§

#### fn [type_id][33](&self) -> [TypeId][34]

Gets the `TypeId` of `self`. [Read more][33]

[Source][35]§

### impl<T> [Borrow][36]<T> for T

where T: ?[Sized][31],

[Source][37]§

#### fn [borrow][38](&self) -> [&T][39]

Immutably borrows from an owned value. [Read more][38]

[Source][40]§

### impl<T> [BorrowMut][41]<T> for T

where T: ?[Sized][31],

[Source][42]§

#### fn [borrow_mut][43](&mut self) -> [&mut T][39]

Mutably borrows from an owned value. [Read more][43]

[Source][44]§

### impl<T> [CloneToUninit][45] for T

where T: [Clone][12],

[Source][46]§

#### unsafe fn [clone_to_uninit][47](&self, dest: [*mut ][48][u8][49])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][47]

[Source][50]§

### impl<T> [From][51]<T> for T

[Source][52]§

#### fn [from][53](t: T) -> T

Returns the argument unchanged.

[Source][54]§

### impl<T, U> [Into][55]<U> for T

where U: [From][51]<T>,

[Source][56]§

#### fn [into][57](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][51]<T> for U` chooses to do.

[Source][58]§

### impl<T> [ToOwned][59] for T

where T: [Clone][12],

[Source][60]§

#### type [Owned][61] = T

The resulting type after obtaining ownership.

[Source][62]§

#### fn [to_owned][63](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][63]

[Source][64]§

#### fn [clone_into][65](&self, target: [&mut T][39])

Uses borrowed data to replace owned data, usually by cloning. [Read more][65]

[Source][66]§

### impl<T, U> [TryFrom][67]<U> for T

where U: [Into][55]<T>,

[Source][68]§

#### type [Error][69] = [Infallible][70]

The type returned in the event of a conversion error.

[Source][71]§

#### fn [try_from][72](value: U) -> [Result][73]<T, <T as [TryFrom][67]<U>>::[Error][74]>

Performs the conversion.

[Source][75]§

### impl<T, U> [TryInto][76]<U> for T

where U: [TryFrom][67]<T>,

[Source][77]§

#### type [Error][78] = <U as [TryFrom][67]<T>>::[Error][74]

The type returned in the event of a conversion error.

[Source][79]§

#### fn [try_into][80](self) -> [Result][73]<U, <U as [TryFrom][67]<T>>::[Error][74]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][18] \+ [Clone][12] \+ [Send][25] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/plugin.rs.html#126-129
   [6]: ../trait.Runtime.html (trait tauri::Runtime)
   [7]: ../../src/tauri/plugin.rs.html#140-145
   [8]: struct.PluginHandle.html (struct tauri::plugin::PluginHandle)
   [9]: ../../src/tauri/plugin.rs.html#142-144
   [10]: ../struct.AppHandle.html (struct tauri::AppHandle)
   [11]: ../../src/tauri/plugin.rs.html#131-138
   [12]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [13]: ../../src/tauri/plugin.rs.html#132-137
   [14]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [15]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [16]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [17]: ../../src/tauri/plugin.rs.html#124
   [18]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [19]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [20]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [21]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [22]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [23]: ../enum.EventLoopMessage.html (enum tauri::EventLoopMessage)
   [24]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [25]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [26]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [27]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [28]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [29]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [30]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [31]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [32]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [33]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [34]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [35]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [36]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [37]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [38]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [39]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [40]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [41]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [42]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [43]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [44]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [45]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [47]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [48]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [49]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [50]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [51]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [53]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [54]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [55]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [56]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [57]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [58]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [59]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [60]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [61]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [62]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [63]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [64]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [65]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [66]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [67]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [68]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [69]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [71]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [72]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [73]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [74]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [75]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [76]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [77]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [78]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [79]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [80]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

