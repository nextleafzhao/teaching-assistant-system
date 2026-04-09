## PluginApi

[![logo][1]][2]

## [tauri][2]2.10.3

## PluginApi

### Methods

  * app
  * config
  * scope



### Trait Implementations

  * Clone



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



## [In tauri::plugin][3]

[tauri][4]::[plugin][3]

# Struct PluginApi Copy item path

[Source][5]
[code] 
    pub struct PluginApi<R: [Runtime][6], C: [DeserializeOwned][7]> { /* private fields */ }
[/code]

Expand description

Api exposed to the plugin setup hook.

## Implementations§

[Source][8]§

### impl<R: [Runtime][6], C: [DeserializeOwned][7]> [PluginApi][9]<R, C>

[Source][10]

#### pub fn config(&self) -> [&C][11]

Returns the plugin configuration.

[Source][12]

#### pub fn app(&self) -> &[AppHandle][13]<R>

Returns the application handle.

[Source][14]

#### pub fn scope<T: [ScopeObject][15]>(&self) -> [Result][16]<[ScopeValue][17]<T>>

Gets the global scope defined on the permissions that are part of the app ACL.

## Trait Implementations§

[Source][18]§

### impl<R: [Clone][19] \+ [Runtime][6], C: [Clone][19] \+ [DeserializeOwned][7]> [Clone][19] for [PluginApi][9]<R, C>

[Source][18]§

#### fn [clone][20](&self) -> [PluginApi][9]<R, C>

Returns a duplicate of the value. [Read more][20]

1.0.0 · [Source][21]§

#### fn [clone_from][22](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][22]

## Auto Trait Implementations§

§

### impl<R, C> [Freeze][23] for [PluginApi][9]<R, C>

where C: [Freeze][23], <R as Runtime<[EventLoopMessage][24]>>::Handle: [Freeze][23],

§

### impl<R, C> ![RefUnwindSafe][25] for [PluginApi][9]<R, C>

§

### impl<R, C> [Send][26] for [PluginApi][9]<R, C>

where C: [Send][26],

§

### impl<R, C> [Sync][27] for [PluginApi][9]<R, C>

where C: [Sync][27],

§

### impl<R, C> [Unpin][28] for [PluginApi][9]<R, C>

where C: [Unpin][28], <R as Runtime<[EventLoopMessage][24]>>::Handle: [Unpin][28],

§

### impl<R, C> ![UnwindSafe][29] for [PluginApi][9]<R, C>

## Blanket Implementations§

[Source][30]§

### impl<T> [Any][31] for T

where T: 'static + ?[Sized][32],

[Source][33]§

#### fn [type_id][34](&self) -> [TypeId][35]

Gets the `TypeId` of `self`. [Read more][34]

[Source][36]§

### impl<T> [Borrow][37]<T> for T

where T: ?[Sized][32],

[Source][38]§

#### fn [borrow][39](&self) -> [&T][11]

Immutably borrows from an owned value. [Read more][39]

[Source][40]§

### impl<T> [BorrowMut][41]<T> for T

where T: ?[Sized][32],

[Source][42]§

#### fn [borrow_mut][43](&mut self) -> [&mut T][11]

Mutably borrows from an owned value. [Read more][43]

[Source][44]§

### impl<T> [CloneToUninit][45] for T

where T: [Clone][19],

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

where T: [Clone][19],

[Source][60]§

#### type [Owned][61] = T

The resulting type after obtaining ownership.

[Source][62]§

#### fn [to_owned][63](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][63]

[Source][64]§

#### fn [clone_into][65](&self, target: [&mut T][11])

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

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/plugin.rs.html#150-155
   [6]: ../trait.Runtime.html (trait tauri::Runtime)
   [7]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)
   [8]: ../../src/tauri/plugin.rs.html#157-179
   [9]: struct.PluginApi.html (struct tauri::plugin::PluginApi)
   [10]: ../../src/tauri/plugin.rs.html#159-161
   [11]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [12]: ../../src/tauri/plugin.rs.html#164-166
   [13]: ../struct.AppHandle.html (struct tauri::AppHandle)
   [14]: ../../src/tauri/plugin.rs.html#169-178
   [15]: ../ipc/trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [16]: ../type.Result.html (type tauri::Result)
   [17]: ../ipc/struct.ScopeValue.html (struct tauri::ipc::ScopeValue)
   [18]: ../../src/tauri/plugin.rs.html#148
   [19]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [20]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [21]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [22]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [23]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [24]: ../enum.EventLoopMessage.html (enum tauri::EventLoopMessage)
   [25]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [26]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [27]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [28]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [29]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [30]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [31]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [32]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [33]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [34]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [35]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [36]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [37]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [38]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [39]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
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

