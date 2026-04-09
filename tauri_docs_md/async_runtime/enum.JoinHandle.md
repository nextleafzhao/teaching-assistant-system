## JoinHandle

[![logo][1]][2]

## [tauri][2]2.10.3

## JoinHandle

### Variants

  * Tokio



### Methods

  * abort
  * inner



### Trait Implementations

  * Debug
  * Future



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
  * From<T>
  * Into<U>
  * IntoFuture
  * TryFrom<U>
  * TryInto<U>



## [In tauri::async_runtime][3]

[tauri][4]::[async_runtime][3]

# Enum JoinHandle Copy item path

[Source][5]
[code] 
    pub enum JoinHandle<T> {
        Tokio([TokioJoinHandle][6]<T>),
    }
[/code]

Expand description

An owned permission to join on a task (await its termination).

## Variants§

§

### Tokio([TokioJoinHandle][6]<T>)

The tokio JoinHandle.

## Implementations§

[Source][7]§

### impl<T> [JoinHandle][8]<T>

[Source][9]

#### pub fn inner(&self) -> &[TokioJoinHandle][6]<T> ⓘ

Gets a reference to the [`TokioJoinHandle`][6].

[Source][10]

#### pub fn abort(&self)

Abort the task associated with the handle.

Awaiting a cancelled task might complete as usual if the task was already completed at the time it was cancelled, but most likely it will fail with a cancelled `JoinError`.

## Trait Implementations§

[Source][11]§

### impl<T: [Debug][12]> [Debug][12] for [JoinHandle][8]<T>

[Source][11]§

#### fn [fmt][13](&self, f: &mut [Formatter][14]<'_>) -> [Result][15]

Formats the value using the given formatter. [Read more][13]

[Source][16]§

### impl<T> [Future][17] for [JoinHandle][8]<T>

[Source][18]§

#### type [Output][19] = [Result][20]<T, [Error][21]>

The type of value produced on completion.

[Source][22]§

#### fn [poll][23](self: [Pin][24]<&mut Self>, cx: &mut [Context][25]<'_>) -> [Poll][26]<Self::[Output][27]>

Attempts to resolve the future to a final value, registering the current task for wakeup if the value is not yet available. [Read more][23]

## Auto Trait Implementations§

§

### impl<T> [Freeze][28] for [JoinHandle][8]<T>

§

### impl<T> [RefUnwindSafe][29] for [JoinHandle][8]<T>

§

### impl<T> [Send][30] for [JoinHandle][8]<T>

where T: [Send][30],

§

### impl<T> [Sync][31] for [JoinHandle][8]<T>

where T: [Send][30],

§

### impl<T> [Unpin][32] for [JoinHandle][8]<T>

§

### impl<T> [UnwindSafe][33] for [JoinHandle][8]<T>

## Blanket Implementations§

[Source][34]§

### impl<T> [Any][35] for T

where T: 'static + ?[Sized][36],

[Source][37]§

#### fn [type_id][38](&self) -> [TypeId][39]

Gets the `TypeId` of `self`. [Read more][38]

[Source][40]§

### impl<T> [Borrow][41]<T> for T

where T: ?[Sized][36],

[Source][42]§

#### fn [borrow][43](&self) -> [&T][44]

Immutably borrows from an owned value. [Read more][43]

[Source][45]§

### impl<T> [BorrowMut][46]<T> for T

where T: ?[Sized][36],

[Source][47]§

#### fn [borrow_mut][48](&mut self) -> [&mut T][44]

Mutably borrows from an owned value. [Read more][48]

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

### impl<F> [IntoFuture][58] for F

where F: [Future][17],

[Source][59]§

#### type [Output][60] = <F as [Future][17]>::[Output][27]

The output that the future will produce on completion.

[Source][61]§

#### type [IntoFuture][62] = F

Which kind of future are we turning this into?

[Source][63]§

#### fn [into_future][64](self) -> <F as [IntoFuture][58]>::[IntoFuture][65]

Creates a future from a value. [Read more][64]

[Source][66]§

### impl<T, U> [TryFrom][67]<U> for T

where U: [Into][54]<T>,

[Source][68]§

#### type [Error][69] = [Infallible][70]

The type returned in the event of a conversion error.

[Source][71]§

#### fn [try_from][72](value: U) -> [Result][20]<T, <T as [TryFrom][67]<U>>::[Error][73]>

Performs the conversion.

[Source][74]§

### impl<T, U> [TryInto][75]<U> for T

where U: [TryFrom][67]<T>,

[Source][76]§

#### type [Error][77] = <U as [TryFrom][67]<T>>::[Error][73]

The type returned in the event of a conversion error.

[Source][78]§

#### fn [try_into][79](self) -> [Result][20]<U, <U as [TryFrom][67]<T>>::[Error][73]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/async_runtime.rs.html#133-136
   [6]: struct.TokioJoinHandle.html (struct tauri::async_runtime::TokioJoinHandle)
   [7]: ../../src/tauri/async_runtime.rs.html#138-155
   [8]: enum.JoinHandle.html (enum tauri::async_runtime::JoinHandle)
   [9]: ../../src/tauri/async_runtime.rs.html#140-143
   [10]: ../../src/tauri/async_runtime.rs.html#150-154
   [11]: ../../src/tauri/async_runtime.rs.html#132
   [12]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [13]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [14]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [15]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [16]: ../../src/tauri/async_runtime.rs.html#157-164
   [17]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [18]: ../../src/tauri/async_runtime.rs.html#158
   [19]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html#associatedtype.Output
   [20]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [21]: ../enum.Error.html (enum tauri::Error)
   [22]: ../../src/tauri/async_runtime.rs.html#159-163
   [23]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html#tymethod.poll
   [24]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [25]: https://doc.rust-lang.org/1.94.1/core/task/wake/struct.Context.html (struct core::task::wake::Context)
   [26]: https://doc.rust-lang.org/1.94.1/core/task/poll/enum.Poll.html (enum core::task::poll::Poll)
   [27]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html#associatedtype.Output (type core::future::future::Future::Output)
   [28]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [29]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [30]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [31]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [32]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [33]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [34]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [35]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [36]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [37]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [38]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [39]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [40]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [41]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [42]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [43]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [44]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [45]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [46]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [47]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [48]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [49]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [50]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [51]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [52]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [53]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [54]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [56]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [57]: https://doc.rust-lang.org/1.94.1/src/core/future/into_future.rs.html#138
   [58]: https://doc.rust-lang.org/1.94.1/core/future/into_future/trait.IntoFuture.html (trait core::future::into_future::IntoFuture)
   [59]: https://doc.rust-lang.org/1.94.1/src/core/future/into_future.rs.html#139
   [60]: https://doc.rust-lang.org/1.94.1/core/future/into_future/trait.IntoFuture.html#associatedtype.Output
   [61]: https://doc.rust-lang.org/1.94.1/src/core/future/into_future.rs.html#140
   [62]: https://doc.rust-lang.org/1.94.1/core/future/into_future/trait.IntoFuture.html#associatedtype.IntoFuture
   [63]: https://doc.rust-lang.org/1.94.1/src/core/future/into_future.rs.html#142
   [64]: https://doc.rust-lang.org/1.94.1/core/future/into_future/trait.IntoFuture.html#tymethod.into_future
   [65]: https://doc.rust-lang.org/1.94.1/core/future/into_future/trait.IntoFuture.html#associatedtype.IntoFuture (type core::future::into_future::IntoFuture::IntoFuture)
   [66]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [67]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [68]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [69]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [71]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [72]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [74]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [75]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [76]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [77]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [78]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [79]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

