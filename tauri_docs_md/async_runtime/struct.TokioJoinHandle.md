## TokioJoinHandle

[![logo][1]][2]

## [tauri][2]2.10.3

## TokioJoinHandle

### Sections

  * Cancel safety
  * Examples



### Methods

  * abort
  * abort_handle
  * id
  * is_finished



### Trait Implementations

  * Debug
  * Drop
  * Future
  * RefUnwindSafe
  * Send
  * Sync
  * Unpin
  * UnwindSafe



### Auto Trait Implementations

  * Freeze



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

# Struct TokioJoinHandle Copy item path
[code]
    pub struct TokioJoinHandle<T> { /* private fields */ }
[/code]

Expand description

An owned permission to join on a task (await its termination).

This can be thought of as the equivalent of [`std::thread::JoinHandle`][5] for a Tokio task rather than a thread. Note that the background task associated with this `JoinHandle` started running immediately when you called spawn, even if you have not yet awaited the `JoinHandle`.

A `JoinHandle` _detaches_ the associated task when it is dropped, which means that there is no longer any handle to the task, and no way to `join` on it.

This `struct` is created by the [`task::spawn`][6] and [`task::spawn_blocking`][7] functions.

It is guaranteed that the destructor of the spawned task has finished before task completion is observed via `JoinHandle` `await`, [`JoinHandle::is_finished`][8] or [`AbortHandle::is_finished`].

## §Cancel safety

The `&mut JoinHandle<T>` type is cancel safe. If it is used as the event in a `tokio::select!` statement and some other branch completes first, then it is guaranteed that the output of the task is not lost.

If a `JoinHandle` is dropped, then the task continues running in the background and its return value is lost.

## §Examples

Creation from [`task::spawn`][6]:
[code] 
    use tokio::task;
    
    let join_handle: task::JoinHandle<_> = task::spawn(async {
        // some work here
    });
[/code]

Creation from [`task::spawn_blocking`][7]:
[code] 
    use tokio::task;
    
    let join_handle: task::JoinHandle<_> = task::spawn_blocking(|| {
        // some blocking work here
    });
[/code]

The generic parameter `T` in `JoinHandle<T>` is the return type of the spawned task. If the return value is an `i32`, the join handle has type `JoinHandle<i32>`:
[code] 
    use tokio::task;
    
    let join_handle: task::JoinHandle<i32> = task::spawn(async {
        5 + 3
    });
    
[/code]

If the task does not have a return value, the join handle has type `JoinHandle<()>`:
[code] 
    use tokio::task;
    
    let join_handle: task::JoinHandle<()> = task::spawn(async {
        println!("I return nothing.");
    });
[/code]

Note that `handle.await` doesn’t give you the return type directly. It is wrapped in a `Result` because panics in the spawned task are caught by Tokio. The `?` operator has to be double chained to extract the returned value:
[code] 
    use tokio::task;
    use std::io;
    
    let join_handle: task::JoinHandle<Result<i32, io::Error>> = tokio::spawn(async {
        Ok(5 + 3)
    });
    
    let result = join_handle.await??;
    assert_eq!(result, 8);
    Ok(())
[/code]

If the task panics, the error is a [`JoinError`][9] that contains the panic:
[code] 
    use tokio::task;
    use std::io;
    use std::panic;
    
    #[tokio::main]
    async fn main() -> io::Result<()> {
        let join_handle: task::JoinHandle<Result<i32, io::Error>> = tokio::spawn(async {
            panic!("boom");
        });
    
        let err = join_handle.await.unwrap_err();
        assert!(err.is_panic());
        Ok(())
    }
[/code]

Child being detached and outliving its parent:
[code] 
    use tokio::task;
    use tokio::time;
    use std::time::Duration;
    
    let original_task = task::spawn(async {
        let _detached_task = task::spawn(async {
            // Here we sleep to make sure that the first task returns before.
            time::sleep(Duration::from_millis(10)).await;
            // This will be called, even though the JoinHandle is dropped.
            println!("♫ Still alive ♫");
        });
    });
    
    original_task.await.expect("The task being joined has panicked");
    println!("Original task is joined.");
    
    // We make sure that the new task has time to run, before the main
    // task returns.
    
    time::sleep(Duration::from_millis(1000)).await;
[/code]

## Implementations§

§

### impl<T> [JoinHandle][10]<T>

#### pub fn abort(&self)

Abort the task associated with the handle.

Awaiting a cancelled task might complete as usual if the task was already completed at the time it was cancelled, but most likely it will fail with a [cancelled][11] `JoinError`.

Be aware that tasks spawned using [`spawn_blocking`][7] cannot be aborted because they are not async. If you call `abort` on a `spawn_blocking` task, then this _will not have any effect_ , and the task will continue running normally. The exception is if the task has not started running yet; in that case, calling `abort` may prevent the task from starting.

See also [the module level docs][12] for more information on cancellation.
[code] 
    use tokio::time;
    
    let mut handles = Vec::new();
    
    handles.push(tokio::spawn(async {
       time::sleep(time::Duration::from_secs(10)).await;
       true
    }));
    
    handles.push(tokio::spawn(async {
       time::sleep(time::Duration::from_secs(10)).await;
       false
    }));
    
    for handle in &handles {
        handle.abort();
    }
    
    for handle in handles {
        assert!(handle.await.unwrap_err().is_cancelled());
    }
[/code]

#### pub fn is_finished(&self) -> [bool][13]

Checks if the task associated with this `JoinHandle` has finished.

Please note that this method can return `false` even if [`abort`][14] has been called on the task. This is because the cancellation process may take some time, and this method does not return `true` until it has completed.
[code] 
    use tokio::time;
    
    let handle1 = tokio::spawn(async {
        // do some stuff here
    });
    let handle2 = tokio::spawn(async {
        // do some other stuff here
        time::sleep(time::Duration::from_secs(10)).await;
    });
    // Wait for the task to finish
    handle2.abort();
    time::sleep(time::Duration::from_secs(1)).await;
    assert!(handle1.is_finished());
    assert!(handle2.is_finished());
[/code]

#### pub fn abort_handle(&self) -> AbortHandle

Returns a new `AbortHandle` that can be used to remotely abort this task.

Awaiting a task cancelled by the `AbortHandle` might complete as usual if the task was already completed at the time it was cancelled, but most likely it will fail with a [cancelled][11] `JoinError`.
[code] 
    use tokio::{time, task};
    
    let mut handles = Vec::new();
    
    handles.push(tokio::spawn(async {
       time::sleep(time::Duration::from_secs(10)).await;
       true
    }));
    
    handles.push(tokio::spawn(async {
       time::sleep(time::Duration::from_secs(10)).await;
       false
    }));
    
    let abort_handles: Vec<task::AbortHandle> = handles.iter().map(|h| h.abort_handle()).collect();
    
    for handle in abort_handles {
        handle.abort();
    }
    
    for handle in handles {
        assert!(handle.await.unwrap_err().is_cancelled());
    }
[/code]

#### pub fn id(&self) -> Id

Returns a [task ID][15] that uniquely identifies this task relative to other currently spawned tasks.

## Trait Implementations§

§

### impl<T> [Debug][16] for [JoinHandle][10]<T>

where T: [Debug][16],

§

#### fn [fmt][17](&self, fmt: &mut [Formatter][18]<'_>) -> [Result][19]<[()][20], [Error][21]>

Formats the value using the given formatter. [Read more][17]

§

### impl<T> [Drop][22] for [JoinHandle][10]<T>

§

#### fn [drop][23](&mut self)

Executes the destructor for this type. [Read more][23]

§

### impl<T> [Future][24] for [JoinHandle][10]<T>

§

#### type [Output][25] = [Result][19]<T, JoinError>

The type of value produced on completion.

§

#### fn [poll][26]( self: [Pin][27]<&mut [JoinHandle][10]<T>>, cx: &mut [Context][28]<'_>, ) -> [Poll][29]<<[JoinHandle][10]<T> as [Future][24]>::[Output][30]>

Attempts to resolve the future to a final value, registering the current task for wakeup if the value is not yet available. [Read more][26]

§

### impl<T> [RefUnwindSafe][31] for [JoinHandle][10]<T>

§

### impl<T> [Send][32] for [JoinHandle][10]<T>

where T: [Send][32],

§

### impl<T> [Sync][33] for [JoinHandle][10]<T>

where T: [Send][32],

§

### impl<T> [Unpin][34] for [JoinHandle][10]<T>

§

### impl<T> [UnwindSafe][35] for [JoinHandle][10]<T>

## Auto Trait Implementations§

§

### impl<T> [Freeze][36] for [JoinHandle][10]<T>

## Blanket Implementations§

[Source][37]§

### impl<T> [Any][38] for T

where T: 'static + ?[Sized][39],

[Source][40]§

#### fn [type_id][41](&self) -> [TypeId][42]

Gets the `TypeId` of `self`. [Read more][41]

[Source][43]§

### impl<T> [Borrow][44]<T> for T

where T: ?[Sized][39],

[Source][45]§

#### fn [borrow][46](&self) -> [&T][47]

Immutably borrows from an owned value. [Read more][46]

[Source][48]§

### impl<T> [BorrowMut][49]<T> for T

where T: ?[Sized][39],

[Source][50]§

#### fn [borrow_mut][51](&mut self) -> [&mut T][47]

Mutably borrows from an owned value. [Read more][51]

[Source][52]§

### impl<T> [From][53]<T> for T

[Source][54]§

#### fn [from][55](t: T) -> T

Returns the argument unchanged.

[Source][56]§

### impl<T, U> [Into][57]<U> for T

where U: [From][53]<T>,

[Source][58]§

#### fn [into][59](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][53]<T> for U` chooses to do.

[Source][60]§

### impl<F> [IntoFuture][61] for F

where F: [Future][24],

[Source][62]§

#### type [Output][63] = <F as [Future][24]>::[Output][30]

The output that the future will produce on completion.

[Source][64]§

#### type [IntoFuture][65] = F

Which kind of future are we turning this into?

[Source][66]§

#### fn [into_future][67](self) -> <F as [IntoFuture][61]>::[IntoFuture][68]

Creates a future from a value. [Read more][67]

[Source][69]§

### impl<T, U> [TryFrom][70]<U> for T

where U: [Into][57]<T>,

[Source][71]§

#### type [Error][72] = [Infallible][73]

The type returned in the event of a conversion error.

[Source][74]§

#### fn [try_from][75](value: U) -> [Result][19]<T, <T as [TryFrom][70]<U>>::[Error][76]>

Performs the conversion.

[Source][77]§

### impl<T, U> [TryInto][78]<U> for T

where U: [TryFrom][70]<T>,

[Source][79]§

#### type [Error][80] = <U as [TryFrom][70]<T>>::[Error][76]

The type returned in the event of a conversion error.

[Source][81]§

#### fn [try_into][82](self) -> [Result][19]<U, <U as [TryFrom][70]<T>>::[Error][76]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: https://doc.rust-lang.org/1.94.1/std/thread/join_handle/struct.JoinHandle.html (struct std::thread::join_handle::JoinHandle)
   [6]: crate::task::spawn()
   [7]: crate::task::spawn_blocking
   [8]: struct.TokioJoinHandle.html#method.is_finished (method tauri::async_runtime::TokioJoinHandle::is_finished)
   [9]: crate::task::JoinError
   [10]: struct.TokioJoinHandle.html (struct tauri::async_runtime::TokioJoinHandle)
   [11]: method@super::error::JoinError::is_cancelled
   [12]: crate::task#cancellation
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [14]: struct.TokioJoinHandle.html#method.abort (method tauri::async_runtime::TokioJoinHandle::abort)
   [15]: crate::task::Id
   [16]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [17]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [18]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [19]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [20]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [21]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [22]: https://doc.rust-lang.org/1.94.1/core/ops/drop/trait.Drop.html (trait core::ops::drop::Drop)
   [23]: https://doc.rust-lang.org/1.94.1/core/ops/drop/trait.Drop.html#tymethod.drop
   [24]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [25]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html#associatedtype.Output
   [26]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html#tymethod.poll
   [27]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [28]: https://doc.rust-lang.org/1.94.1/core/task/wake/struct.Context.html (struct core::task::wake::Context)
   [29]: https://doc.rust-lang.org/1.94.1/core/task/poll/enum.Poll.html (enum core::task::poll::Poll)
   [30]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html#associatedtype.Output (type core::future::future::Future::Output)
   [31]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [32]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [33]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [34]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [35]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [36]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [37]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [38]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [39]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [40]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [41]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [42]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [44]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [45]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [46]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [47]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [48]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [49]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [50]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [51]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [52]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [53]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [54]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [55]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [56]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [57]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [59]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [60]: https://doc.rust-lang.org/1.94.1/src/core/future/into_future.rs.html#138
   [61]: https://doc.rust-lang.org/1.94.1/core/future/into_future/trait.IntoFuture.html (trait core::future::into_future::IntoFuture)
   [62]: https://doc.rust-lang.org/1.94.1/src/core/future/into_future.rs.html#139
   [63]: https://doc.rust-lang.org/1.94.1/core/future/into_future/trait.IntoFuture.html#associatedtype.Output
   [64]: https://doc.rust-lang.org/1.94.1/src/core/future/into_future.rs.html#140
   [65]: https://doc.rust-lang.org/1.94.1/core/future/into_future/trait.IntoFuture.html#associatedtype.IntoFuture
   [66]: https://doc.rust-lang.org/1.94.1/src/core/future/into_future.rs.html#142
   [67]: https://doc.rust-lang.org/1.94.1/core/future/into_future/trait.IntoFuture.html#tymethod.into_future
   [68]: https://doc.rust-lang.org/1.94.1/core/future/into_future/trait.IntoFuture.html#associatedtype.IntoFuture (type core::future::into_future::IntoFuture::IntoFuture)
   [69]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [71]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [72]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [74]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [75]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [76]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [77]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [78]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [79]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [80]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [81]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [82]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

