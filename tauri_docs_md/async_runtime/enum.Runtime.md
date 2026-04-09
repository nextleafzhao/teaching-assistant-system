## Runtime

[![logo][1]][2]

## [tauri][2]2.10.3

## Runtime

### Variants

  * Tokio



### Methods

  * block_on
  * handle
  * inner
  * spawn
  * spawn_blocking



### Auto Trait Implementations

  * !Freeze
  * RefUnwindSafe
  * Send
  * Sync
  * Unpin
  * UnwindSafe



### Blanket Implementations

  * Any
  * Borrow<T>
  * BorrowMut<T>
  * From<T>
  * Into<U>
  * TryFrom<U>
  * TryInto<U>



## [In tauri::async_runtime][3]

[tauri][4]::[async_runtime][3]

# Enum Runtime Copy item path

[Source][5]
[code] 
    pub enum Runtime {
        Tokio([TokioRuntime][6]),
    }
[/code]

Expand description

A runtime used to execute asynchronous tasks.

## Variants§

§

### Tokio([TokioRuntime][6])

The tokio runtime.

## Implementations§

[Source][7]§

### impl [Runtime][8]

[Source][9]

#### pub fn inner(&self) -> &[TokioRuntime][6]

Gets a reference to the [`TokioRuntime`][6].

[Source][10]

#### pub fn handle(&self) -> [RuntimeHandle][11]

Returns a handle of the async runtime.

[Source][12]

#### pub fn spawn<F>(&self, task: F) -> [JoinHandle][13]<F::[Output][14]> ⓘ

where F: [Future][15] \+ [Send][16] \+ 'static, F::[Output][14]: [Send][16] \+ 'static,

Spawns a future onto the runtime.

[Source][17]

#### pub fn spawn_blocking<F, R>(&self, func: F) -> [JoinHandle][13]<R> ⓘ

where F: [FnOnce][18]() -> R + [Send][16] \+ 'static, R: [Send][16] \+ 'static,

Runs the provided function on an executor dedicated to blocking operations.

[Source][19]

#### pub fn block_on<F: [Future][15]>(&self, task: F) -> F::[Output][14]

Runs a future to completion on runtime.

## Auto Trait Implementations§

§

### impl ![Freeze][20] for [Runtime][8]

§

### impl [RefUnwindSafe][21] for [Runtime][8]

§

### impl [Send][16] for [Runtime][8]

§

### impl [Sync][22] for [Runtime][8]

§

### impl [Unpin][23] for [Runtime][8]

§

### impl [UnwindSafe][24] for [Runtime][8]

## Blanket Implementations§

[Source][25]§

### impl<T> [Any][26] for T

where T: 'static + ?[Sized][27],

[Source][28]§

#### fn [type_id][29](&self) -> [TypeId][30]

Gets the `TypeId` of `self`. [Read more][29]

[Source][31]§

### impl<T> [Borrow][32]<T> for T

where T: ?[Sized][27],

[Source][33]§

#### fn [borrow][34](&self) -> [&T][35]

Immutably borrows from an owned value. [Read more][34]

[Source][36]§

### impl<T> [BorrowMut][37]<T> for T

where T: ?[Sized][27],

[Source][38]§

#### fn [borrow_mut][39](&mut self) -> [&mut T][35]

Mutably borrows from an owned value. [Read more][39]

[Source][40]§

### impl<T> [From][41]<T> for T

[Source][42]§

#### fn [from][43](t: T) -> T

Returns the argument unchanged.

[Source][44]§

### impl<T, U> [Into][45]<U> for T

where U: [From][41]<T>,

[Source][46]§

#### fn [into][47](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][41]<T> for U` chooses to do.

[Source][48]§

### impl<T, U> [TryFrom][49]<U> for T

where U: [Into][45]<T>,

[Source][50]§

#### type [Error][51] = [Infallible][52]

The type returned in the event of a conversion error.

[Source][53]§

#### fn [try_from][54](value: U) -> [Result][55]<T, <T as [TryFrom][49]<U>>::[Error][56]>

Performs the conversion.

[Source][57]§

### impl<T, U> [TryInto][58]<U> for T

where U: [TryFrom][49]<T>,

[Source][59]§

#### type [Error][60] = <U as [TryFrom][49]<T>>::[Error][56]

The type returned in the event of a conversion error.

[Source][61]§

#### fn [try_into][62](self) -> [Result][55]<U, <U as [TryFrom][49]<T>>::[Error][56]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/async_runtime.rs.html#79-82
   [6]: struct.TokioRuntime.html (struct tauri::async_runtime::TokioRuntime)
   [7]: ../../src/tauri/async_runtime.rs.html#84-129
   [8]: enum.Runtime.html (enum tauri::async_runtime::Runtime)
   [9]: ../../src/tauri/async_runtime.rs.html#86-89
   [10]: ../../src/tauri/async_runtime.rs.html#92-96
   [11]: enum.RuntimeHandle.html (enum tauri::async_runtime::RuntimeHandle)
   [12]: ../../src/tauri/async_runtime.rs.html#99-110
   [13]: enum.JoinHandle.html (enum tauri::async_runtime::JoinHandle)
   [14]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html#associatedtype.Output (type core::future::future::Future::Output)
   [15]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [16]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [17]: ../../src/tauri/async_runtime.rs.html#113-121
   [18]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [19]: ../../src/tauri/async_runtime.rs.html#124-128
   [20]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [21]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [22]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [23]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [24]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [25]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [26]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [27]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [28]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [29]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [30]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [31]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [32]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [33]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [34]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [35]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [36]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [37]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [38]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [39]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [40]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [41]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [42]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [43]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [44]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [45]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [47]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [48]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [49]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [50]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [51]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [52]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [54]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [55]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [56]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [57]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [58]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [59]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [60]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [61]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [62]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

