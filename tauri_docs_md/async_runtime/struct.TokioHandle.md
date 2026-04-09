## TokioHandle

[![logo][1]][2]

## [tauri][2]2.10.3

## TokioHandle

### Methods

  * block_on
  * current
  * enter
  * id
  * metrics
  * name
  * runtime_flavor
  * spawn
  * spawn_blocking
  * try_current



### Trait Implementations

  * Clone
  * Debug
  * RefUnwindSafe
  * UnwindSafe



### Auto Trait Implementations

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



## [In tauri::async_runtime][3]

[tauri][4]::[async_runtime][3]

# Struct TokioHandle Copy item path
[code]
    pub struct TokioHandle { /* private fields */ }
[/code]

Expand description

Handle to the runtime.

The handle is internally reference-counted and can be freely cloned. A handle can be obtained using the [`Runtime::handle`][5] method.

## Implementations§

§

### impl [Handle][6]

#### pub fn enter(&self) -> EnterGuard<'_>

Enters the runtime context. This allows you to construct types that must have an executor available on creation such as [`Sleep`][7] or [`TcpStream`][8]. It will also allow you to call methods such as [`tokio::spawn`][9] and [`Handle::current`][10] without panicking.

##### §Panics

When calling `Handle::enter` multiple times, the returned guards **must** be dropped in the reverse order that they were acquired. Failure to do so will result in a panic and possible memory leaks.

##### §Examples
[code] 
    use tokio::runtime::Runtime;
    
    let rt = Runtime::new().unwrap();
    
    let _guard = rt.enter();
    tokio::spawn(async {
        println!("Hello world!");
    });
[/code]

Do **not** do the following, this shows a scenario that will result in a panic and possible memory leak.

ⓘ
[code]
    use tokio::runtime::Runtime;
    
    let rt1 = Runtime::new().unwrap();
    let rt2 = Runtime::new().unwrap();
    
    let enter1 = rt1.enter();
    let enter2 = rt2.enter();
    
    drop(enter1);
    drop(enter2);
[/code]

#### pub fn current() -> [Handle][6]

Returns a `Handle` view over the currently running `Runtime`.

##### §Panics

This will panic if called outside the context of a Tokio runtime. That means that you must call this on one of the threads **being run by the runtime** , or from a thread with an active `EnterGuard`. Calling this from within a thread created by `std::thread::spawn` (for example) will cause a panic unless that thread has an active `EnterGuard`.

##### §Examples

This can be used to obtain the handle of the surrounding runtime from an async block or function running on that runtime.
[code] 
    use tokio::runtime::Handle;
    
    // Inside an async block or function.
    let handle = Handle::current();
    handle.spawn(async {
        println!("now running in the existing Runtime");
    });
    
    thread::spawn(move || {
        // Notice that the handle is created outside of this thread and then moved in
        handle.spawn(async { /* ... */ });
        // This next line would cause a panic because we haven't entered the runtime
        // and created an EnterGuard
        // let handle2 = Handle::current(); // panic
        // So we create a guard here with Handle::enter();
        let _guard = handle.enter();
        // Now we can call Handle::current();
        let handle2 = Handle::current();
    });
[/code]

#### pub fn try_current() -> [Result][11]<[Handle][6], TryCurrentError>

Returns a Handle view over the currently running Runtime

Returns an error if no Runtime has been started

Contrary to `current`, this never panics

#### pub fn spawn<F>(&self, future: F) -> [JoinHandle][12]<<F as [Future][13]>::[Output][14]> ⓘ

where F: [Future][13] \+ [Send][15] \+ 'static, <F as [Future][13]>::[Output][14]: [Send][15] \+ 'static,

Spawns a future onto the Tokio runtime.

This spawns the given future onto the runtime’s executor, usually a thread pool. The thread pool is then responsible for polling the future until it completes.

The provided future will start running in the background immediately when `spawn` is called, even if you don’t await the returned `JoinHandle` (assuming that the runtime [is running][16]).

See [module level][3] documentation for more details.

##### §Examples
[code] 
    use tokio::runtime::Runtime;
    
    // Create the runtime
    let rt = Runtime::new().unwrap();
    // Get a handle from this runtime
    let handle = rt.handle();
    
    // Spawn a future onto the runtime using the handle
    handle.spawn(async {
        println!("now running on a worker thread");
    });
[/code]

#### pub fn spawn_blocking<F, R>(&self, func: F) -> [JoinHandle][12]<R> ⓘ

where F: [FnOnce][17]() -> R + [Send][15] \+ 'static, R: [Send][15] \+ 'static,

Runs the provided function on an executor dedicated to blocking operations.

##### §Examples
[code] 
    use tokio::runtime::Runtime;
    
    // Create the runtime
    let rt = Runtime::new().unwrap();
    // Get a handle from this runtime
    let handle = rt.handle();
    
    // Spawn a blocking function onto the runtime using the handle
    handle.spawn_blocking(|| {
        println!("now running on a worker thread");
    });
[/code]

#### pub fn block_on<F>(&self, future: F) -> <F as [Future][13]>::[Output][14]

where F: [Future][13],

Runs a future to completion on this `Handle`’s associated `Runtime`.

This runs the given future on the current thread, blocking until it is complete, and yielding its resolved result. Any tasks or timers which the future spawns internally will be executed on the runtime.

When this is used on a `current_thread` runtime, only the [`Runtime::block_on`][18] method can drive the IO and timer drivers, but the `Handle::block_on` method cannot drive them. This means that, when using this method on a `current_thread` runtime, anything that relies on IO or timers will not work unless there is another thread currently calling [`Runtime::block_on`][18] on the same runtime.

##### §If the runtime has been shut down

If the `Handle`’s associated `Runtime` has been shut down (through [`Runtime::shutdown_background`][19], [`Runtime::shutdown_timeout`][20], or by dropping it) and `Handle::block_on` is used it might return an error or panic. Specifically IO resources will return an error and timers will panic. Runtime independent futures will run as normal.

##### §Panics

This function will panic if any of the following conditions are met:

  * The provided future panics.
  * It is called from within an asynchronous context, such as inside [`Runtime::block_on`][18], `Handle::block_on`, or from a function annotated with [`tokio::main`][21].
  * A timer future is executed on a runtime that has been shut down.



##### §Examples
[code] 
    use tokio::runtime::Runtime;
    
    // Create the runtime
    let rt  = Runtime::new().unwrap();
    
    // Get a handle from this runtime
    let handle = rt.handle();
    
    // Execute the future, blocking the current thread until completion
    handle.block_on(async {
        println!("hello");
    });
[/code]

Or using `Handle::current`:
[code] 
    use tokio::runtime::Handle;
    
    #[tokio::main]
    async fn main () {
        let handle = Handle::current();
        std::thread::spawn(move || {
            // Using Handle::block_on to run async code in the new thread.
            handle.block_on(async {
                println!("hello");
            });
        });
    }
[/code]

`Handle::block_on` may be combined with [`task::block_in_place`][22] to re-enter the async context of a multi-thread scheduler runtime:
[code] 
    use tokio::task;
    use tokio::runtime::Handle;
    
    task::block_in_place(move || {
        Handle::current().block_on(async move {
            // do something async
        });
    });
[/code]

#### pub fn runtime_flavor(&self) -> RuntimeFlavor

Returns the flavor of the current `Runtime`.

##### §Examples
[code] 
    use tokio::runtime::{Handle, RuntimeFlavor};
    
    #[tokio::main(flavor = "current_thread")]
    async fn main() {
      assert_eq!(RuntimeFlavor::CurrentThread, Handle::current().runtime_flavor());
    }
[/code]
[code] 
    use tokio::runtime::{Handle, RuntimeFlavor};
    
    #[tokio::main(flavor = "multi_thread", worker_threads = 4)]
    async fn main() {
      assert_eq!(RuntimeFlavor::MultiThread, Handle::current().runtime_flavor());
    }
[/code]

#### pub fn id(&self) -> Id

Returns the [`Id`][23] of the current `Runtime`.

##### §Examples
[code] 
    use tokio::runtime::Handle;
    
    #[tokio::main(flavor = "current_thread")]
    async fn main() {
      println!("Current runtime id: {}", Handle::current().id());
    }
[/code]

#### pub fn name(&self) -> [Option][24]<&[str][25]>

Returns the name of the current `Runtime`.

##### §Examples
[code] 
    use tokio::runtime::Handle;
    
    #[tokio::main(flavor = "current_thread", name = "my-runtime")]
    async fn main() {
      println!("Current runtime name: {}", Handle::current().name().unwrap());
    }
[/code]

#### pub fn metrics(&self) -> RuntimeMetrics

Returns a view that lets you get information about how the runtime is performing.

## Trait Implementations§

§

### impl [Clone][26] for [Handle][6]

§

#### fn [clone][27](&self) -> [Handle][6]

Returns a duplicate of the value. [Read more][27]

1.0.0 · [Source][28]§

#### fn [clone_from][29](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][29]

§

### impl [Debug][30] for [Handle][6]

§

#### fn [fmt][31](&self, f: &mut [Formatter][32]<'_>) -> [Result][11]<[()][33], [Error][34]>

Formats the value using the given formatter. [Read more][31]

§

### impl [RefUnwindSafe][35] for [Handle][6]

§

### impl [UnwindSafe][36] for [Handle][6]

## Auto Trait Implementations§

§

### impl [Freeze][37] for [Handle][6]

§

### impl [Send][15] for [Handle][6]

§

### impl [Sync][38] for [Handle][6]

§

### impl [Unpin][39] for [Handle][6]

## Blanket Implementations§

[Source][40]§

### impl<T> [Any][41] for T

where T: 'static + ?[Sized][42],

[Source][43]§

#### fn [type_id][44](&self) -> [TypeId][45]

Gets the `TypeId` of `self`. [Read more][44]

[Source][46]§

### impl<T> [Borrow][47]<T> for T

where T: ?[Sized][42],

[Source][48]§

#### fn [borrow][49](&self) -> [&T][50]

Immutably borrows from an owned value. [Read more][49]

[Source][51]§

### impl<T> [BorrowMut][52]<T> for T

where T: ?[Sized][42],

[Source][53]§

#### fn [borrow_mut][54](&mut self) -> [&mut T][50]

Mutably borrows from an owned value. [Read more][54]

[Source][55]§

### impl<T> [CloneToUninit][56] for T

where T: [Clone][26],

[Source][57]§

#### unsafe fn [clone_to_uninit][58](&self, dest: [*mut ][59][u8][60])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][58]

[Source][61]§

### impl<T> [From][62]<T> for T

[Source][63]§

#### fn [from][64](t: T) -> T

Returns the argument unchanged.

[Source][65]§

### impl<T, U> [Into][66]<U> for T

where U: [From][62]<T>,

[Source][67]§

#### fn [into][68](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][62]<T> for U` chooses to do.

[Source][69]§

### impl<T> [ToOwned][70] for T

where T: [Clone][26],

[Source][71]§

#### type [Owned][72] = T

The resulting type after obtaining ownership.

[Source][73]§

#### fn [to_owned][74](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][74]

[Source][75]§

#### fn [clone_into][76](&self, target: [&mut T][50])

Uses borrowed data to replace owned data, usually by cloning. [Read more][76]

[Source][77]§

### impl<T, U> [TryFrom][78]<U> for T

where U: [Into][66]<T>,

[Source][79]§

#### type [Error][80] = [Infallible][81]

The type returned in the event of a conversion error.

[Source][82]§

#### fn [try_from][83](value: U) -> [Result][11]<T, <T as [TryFrom][78]<U>>::[Error][84]>

Performs the conversion.

[Source][85]§

### impl<T, U> [TryInto][86]<U> for T

where U: [TryFrom][78]<T>,

[Source][87]§

#### type [Error][88] = <U as [TryFrom][78]<T>>::[Error][84]

The type returned in the event of a conversion error.

[Source][89]§

#### fn [try_into][90](self) -> [Result][11]<U, <U as [TryFrom][78]<T>>::[Error][84]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][30] \+ [Clone][26] \+ [Send][15] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: struct.TokioRuntime.html#method.handle (method tauri::async_runtime::TokioRuntime::handle)
   [6]: struct.TokioHandle.html (struct tauri::async_runtime::TokioHandle)
   [7]: struct@crate::time::Sleep
   [8]: struct@crate::net::TcpStream
   [9]: fn@crate::spawn
   [10]: struct.TokioHandle.html#method.current (associated function tauri::async_runtime::TokioHandle::current)
   [11]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [12]: struct.TokioJoinHandle.html (struct tauri::async_runtime::TokioJoinHandle)
   [13]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [14]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html#associatedtype.Output (type core::future::future::Future::Output)
   [15]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [16]: index.html#driving-the-runtime
   [17]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [18]: struct.TokioRuntime.html#method.block_on (method tauri::async_runtime::TokioRuntime::block_on)
   [19]: struct.TokioRuntime.html#method.shutdown_background (method tauri::async_runtime::TokioRuntime::shutdown_background)
   [20]: struct.TokioRuntime.html#method.shutdown_timeout (method tauri::async_runtime::TokioRuntime::shutdown_timeout)
   [21]: ../attr.main.html
   [22]: crate::task::block_in_place
   [23]: struct@crate::runtime::Id
   [24]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [25]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [26]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [27]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [28]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [29]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [30]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [31]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [32]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [33]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [34]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [35]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [36]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [37]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [38]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [39]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [40]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [41]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [42]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [44]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [45]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [47]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [49]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [50]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [51]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [52]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [54]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [55]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [56]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [57]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [58]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [59]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [60]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [61]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [62]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [63]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [65]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [67]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [69]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [70]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [71]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [72]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [73]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [74]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [75]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [76]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [77]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [78]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [79]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [80]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [81]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [82]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [83]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [84]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [85]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [86]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [87]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [88]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [89]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [90]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

