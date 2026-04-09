## RuntimeHandle

[![logo][1]][2]

## [tauri][2]2.10.3

## RuntimeHandle

### Variants

  * Tokio



### Methods

  * block_on
  * inner
  * spawn
  * spawn_blocking



### Trait Implementations

  * Clone



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



## [In tauri::async_runtime][3]

[tauri][4]::[async_runtime][3]

# Enum RuntimeHandle Copy item path

[Source][5]
[code] 
    pub enum RuntimeHandle {
        Tokio([TokioHandle][6]),
    }
[/code]

Expand description

A handle to the async runtime

## Variants§

§

### Tokio([TokioHandle][6])

The tokio handle.

## Implementations§

[Source][7]§

### impl [RuntimeHandle][8]

[Source][9]

#### pub fn inner(&self) -> &[TokioHandle][6]

Gets a reference to the [`TokioHandle`][6].

[Source][10]

#### pub fn spawn_blocking<F, R>(&self, func: F) -> [JoinHandle][11]<R> ⓘ

where F: [FnOnce][12]() -> R + [Send][13] \+ 'static, R: [Send][13] \+ 'static,

Runs the provided function on an executor dedicated to blocking operations.

[Source][14]

#### pub fn spawn<F>(&self, task: F) -> [JoinHandle][11]<F::[Output][15]> ⓘ

where F: [Future][16] \+ [Send][13] \+ 'static, F::[Output][15]: [Send][13] \+ 'static,

Spawns a future onto the runtime.

[Source][17]

#### pub fn block_on<F: [Future][16]>(&self, task: F) -> F::[Output][15]

Runs a future to completion on runtime.

## Trait Implementations§

[Source][18]§

### impl [Clone][19] for [RuntimeHandle][8]

[Source][18]§

#### fn [clone][20](&self) -> [RuntimeHandle][8]

Returns a duplicate of the value. [Read more][20]

1.0.0 · [Source][21]§

#### fn [clone_from][22](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][22]

## Auto Trait Implementations§

§

### impl [Freeze][23] for [RuntimeHandle][8]

§

### impl [RefUnwindSafe][24] for [RuntimeHandle][8]

§

### impl [Send][13] for [RuntimeHandle][8]

§

### impl [Sync][25] for [RuntimeHandle][8]

§

### impl [Unpin][26] for [RuntimeHandle][8]

§

### impl [UnwindSafe][27] for [RuntimeHandle][8]

## Blanket Implementations§

[Source][28]§

### impl<T> [Any][29] for T

where T: 'static + ?[Sized][30],

[Source][31]§

#### fn [type_id][32](&self) -> [TypeId][33]

Gets the `TypeId` of `self`. [Read more][32]

[Source][34]§

### impl<T> [Borrow][35]<T> for T

where T: ?[Sized][30],

[Source][36]§

#### fn [borrow][37](&self) -> [&T][38]

Immutably borrows from an owned value. [Read more][37]

[Source][39]§

### impl<T> [BorrowMut][40]<T> for T

where T: ?[Sized][30],

[Source][41]§

#### fn [borrow_mut][42](&mut self) -> [&mut T][38]

Mutably borrows from an owned value. [Read more][42]

[Source][43]§

### impl<T> [CloneToUninit][44] for T

where T: [Clone][19],

[Source][45]§

#### unsafe fn [clone_to_uninit][46](&self, dest: [*mut ][47][u8][48])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][46]

[Source][49]§

### impl<T> [From][50]<T> for T

[Source][51]§

#### fn [from][52](t: T) -> T

Returns the argument unchanged.

[Source][53]§

### impl<T, U> [Into][54]<U> for T

where U: [From][50]<T>,

[Source][55]§

#### fn [into][56](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][50]<T> for U` chooses to do.

[Source][57]§

### impl<T> [ToOwned][58] for T

where T: [Clone][19],

[Source][59]§

#### type [Owned][60] = T

The resulting type after obtaining ownership.

[Source][61]§

#### fn [to_owned][62](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][62]

[Source][63]§

#### fn [clone_into][64](&self, target: [&mut T][38])

Uses borrowed data to replace owned data, usually by cloning. [Read more][64]

[Source][65]§

### impl<T, U> [TryFrom][66]<U> for T

where U: [Into][54]<T>,

[Source][67]§

#### type [Error][68] = [Infallible][69]

The type returned in the event of a conversion error.

[Source][70]§

#### fn [try_from][71](value: U) -> [Result][72]<T, <T as [TryFrom][66]<U>>::[Error][73]>

Performs the conversion.

[Source][74]§

### impl<T, U> [TryInto][75]<U> for T

where U: [TryFrom][66]<T>,

[Source][76]§

#### type [Error][77] = <U as [TryFrom][66]<T>>::[Error][73]

The type returned in the event of a conversion error.

[Source][78]§

#### fn [try_into][79](self) -> [Result][72]<U, <U as [TryFrom][66]<T>>::[Error][73]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/async_runtime.rs.html#168-171
   [6]: struct.TokioHandle.html (struct tauri::async_runtime::TokioHandle)
   [7]: ../../src/tauri/async_runtime.rs.html#173-211
   [8]: enum.RuntimeHandle.html (enum tauri::async_runtime::RuntimeHandle)
   [9]: ../../src/tauri/async_runtime.rs.html#175-178
   [10]: ../../src/tauri/async_runtime.rs.html#181-189
   [11]: enum.JoinHandle.html (enum tauri::async_runtime::JoinHandle)
   [12]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [13]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [14]: ../../src/tauri/async_runtime.rs.html#192-203
   [15]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html#associatedtype.Output (type core::future::future::Future::Output)
   [16]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [17]: ../../src/tauri/async_runtime.rs.html#206-210
   [18]: ../../src/tauri/async_runtime.rs.html#167
   [19]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [20]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [21]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [22]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [23]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [24]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [25]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [26]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [27]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [28]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [29]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [30]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [31]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [32]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [33]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [34]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [35]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [36]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [37]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [38]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [39]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [40]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [41]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [42]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [43]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [44]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [45]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [46]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [47]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [48]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [49]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [50]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [51]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [52]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [53]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [54]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [56]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [57]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [58]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [59]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [60]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [61]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [62]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [63]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [64]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [65]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [67]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [69]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [70]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [72]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [74]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [75]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [76]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [77]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [78]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [79]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

