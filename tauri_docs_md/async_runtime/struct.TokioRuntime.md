## TokioRuntime

[![logo][1]][2]

## [tauri][2]2.10.3

## TokioRuntime

### Sections

  * Shutdown
  * Sharing



### Methods

  * block_on
  * enter
  * handle
  * metrics
  * new
  * shutdown_background
  * shutdown_timeout
  * spawn
  * spawn_blocking



### Trait Implementations

  * Debug
  * Drop
  * RefUnwindSafe
  * UnwindSafe



### Auto Trait Implementations

  * !Freeze
  * Send
  * Sync
  * Unpin



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

# Struct TokioRuntime Copy item path
[code]
    pub struct TokioRuntime { /* private fields */ }
[/code]

Expand description

The Tokio runtime.

The runtime provides an I/O driver, task scheduler, [timer][5], and blocking pool, necessary for running asynchronous tasks.

Instances of `Runtime` can be created using [`new`][6], or [`Builder`][7]. However, most users will use the [`#[tokio::main]`][8] annotation on their entry point instead.

See [module level][3] documentation for more details.

## §Shutdown

Shutting down the runtime is done by dropping the value, or calling [`shutdown_background`][9] or [`shutdown_timeout`][10].

Tasks spawned through [`Runtime::spawn`][11] keep running until they yield. Then they are dropped. They are not _guaranteed_ to run to completion, but _might_ do so if they do not yield until completion.

Blocking functions spawned through [`Runtime::spawn_blocking`][12] keep running until they return.

The thread initiating the shutdown blocks until all spawned work has been stopped. This can take an indefinite amount of time. The `Drop` implementation waits forever for this.

The [`shutdown_background`][9] and [`shutdown_timeout`][10] methods can be used if waiting forever is undesired. When the timeout is reached, spawned work that did not stop in time and threads running it are leaked. The work continues to run until one of the stopping conditions is fulfilled, but the thread initiating the shutdown is unblocked.

Once the runtime has been dropped, any outstanding I/O resources bound to it will no longer function. Calling any method on them will result in an error.

## §Sharing

There are several ways to establish shared access to a Tokio runtime:

  * Using an `[Arc][13]<Runtime>`.
  * Using a [`Handle`][14].
  * Entering the runtime context.



Using an `[Arc][13]<Runtime>` or [`Handle`][14] allows you to do various things with the runtime such as spawning new tasks or entering the runtime context. Both types can be cloned to create a new handle that allows access to the same runtime. By passing clones into different tasks or threads, you will be able to access the runtime from those tasks or threads.

The difference between `[Arc][13]<Runtime>` and [`Handle`][14] is that an `[Arc][13]<Runtime>` will prevent the runtime from shutting down, whereas a [`Handle`][14] does not prevent that. This is because shutdown of the runtime happens when the destructor of the `Runtime` object runs.

Calls to [`shutdown_background`][9] and [`shutdown_timeout`][10] require exclusive ownership of the `Runtime` type. When using an `[Arc][13]<Runtime>`, this can be achieved via [`Arc::try_unwrap`][15] when only one strong count reference is left over.

The runtime context is entered using the [`Runtime::enter`][16] or [`Handle::enter`][17] methods, which use a thread-local variable to store the current runtime. Whenever you are inside the runtime context, methods such as [`tokio::spawn`][18] will use the runtime whose context you are inside.

## Implementations§

§

### impl [Runtime][19]

#### pub fn new() -> [Result][20]<[Runtime][19], [Error][21]>

Creates a new runtime instance with default configuration values.

This results in the multi threaded scheduler, I/O driver, and time driver being initialized.

Most applications will not need to call this function directly. Instead, they will use the [`#[tokio::main]` attribute][22]. When a more complex configuration is necessary, the [runtime builder][23] may be used.

See [module level][3] documentation for more details.

##### §Examples

Creating a new `Runtime` with default configuration values.
[code] 
    use tokio::runtime::Runtime;
    
    let rt = Runtime::new()
        .unwrap();
    
    // Use the runtime...
[/code]

#### pub fn handle(&self) -> &[Handle][14]

Returns a handle to the runtime’s spawner.

The returned handle can be used to spawn tasks that run on this runtime, and can be cloned to allow moving the `Handle` to other threads.

Calling [`Handle::block_on`][24] on a handle to a `current_thread` runtime is error-prone. Refer to the documentation of [`Handle::block_on`][24] for more.

##### §Examples
[code] 
    use tokio::runtime::Runtime;
    
    let rt = Runtime::new()
        .unwrap();
    
    let handle = rt.handle();
    
    // Use the handle...
[/code]

#### pub fn spawn<F>(&self, future: F) -> [JoinHandle][25]<<F as [Future][26]>::[Output][27]> ⓘ

where F: [Future][26] \+ [Send][28] \+ 'static, <F as [Future][26]>::[Output][27]: [Send][28] \+ 'static,

Spawns a future onto the Tokio runtime.

This spawns the given future onto the runtime’s executor, usually a thread pool. The thread pool is then responsible for polling the future until it completes.

The provided future will start running in the background immediately when `spawn` is called, even if you don’t await the returned `JoinHandle` (assuming that the runtime [is running][29]).

See [module level][3] documentation for more details.

##### §Examples
[code] 
    use tokio::runtime::Runtime;
    
    // Create the runtime
    let rt = Runtime::new().unwrap();
    
    // Spawn a future onto the runtime
    rt.spawn(async {
        println!("now running on a worker thread");
    });
[/code]

#### pub fn spawn_blocking<F, R>(&self, func: F) -> [JoinHandle][25]<R> ⓘ

where F: [FnOnce][30]() -> R + [Send][28] \+ 'static, R: [Send][28] \+ 'static,

Runs the provided function on an executor dedicated to blocking operations.

##### §Examples
[code] 
    use tokio::runtime::Runtime;
    
    // Create the runtime
    let rt = Runtime::new().unwrap();
    
    // Spawn a blocking function onto the runtime
    rt.spawn_blocking(|| {
        println!("now running on a worker thread");
    });
[/code]

#### pub fn block_on<F>(&self, future: F) -> <F as [Future][26]>::[Output][27]

where F: [Future][26],

Runs a future to completion on the Tokio runtime. This is the runtime’s entry point.

This runs the given future on the current thread, blocking until it is complete, and yielding its resolved result. Any tasks or timers which the future spawns internally will be executed on the runtime.

##### §Non-worker future

Note that the future required by this function does not run as a worker. The expectation is that other tasks are spawned by the future here. Awaiting on other futures from the future provided here will not perform as fast as those spawned as workers.

##### §Multi thread scheduler

When the multi thread scheduler is used this will allow futures to run within the io driver and timer context of the overall runtime.

Any spawned tasks will continue running after `block_on` returns.

##### §Current thread scheduler

When the current thread scheduler is enabled `block_on` can be called concurrently from multiple threads. The first call will take ownership of the io and timer drivers. This means other threads which do not own the drivers will hook into that one. When the first `block_on` completes, other threads will be able to “steal” the driver to allow continued execution of their futures.

Any spawned tasks will be suspended after `block_on` returns. Calling `block_on` again will resume previously spawned tasks.

##### §Panics

This function panics if the provided future panics, or if called within an asynchronous execution context.

##### §Examples
[code] 
    use tokio::runtime::Runtime;
    
    // Create the runtime
    let rt  = Runtime::new().unwrap();
    
    // Execute the future, blocking the current thread until completion
    rt.block_on(async {
        println!("hello");
    });
[/code]

#### pub fn enter(&self) -> EnterGuard<'_>

Enters the runtime context.

This allows you to construct types that must have an executor available on creation such as [`Sleep`][31] or [`TcpStream`][32]. It will also allow you to call methods such as [`tokio::spawn`][33].

##### §Example
[code] 
    use tokio::runtime::Runtime;
    use tokio::task::JoinHandle;
    
    fn function_that_spawns(msg: String) -> JoinHandle<()> {
        // Had we not used `rt.enter` below, this would panic.
        tokio::spawn(async move {
            println!("{}", msg);
        })
    }
    
    fn main() {
        let rt = Runtime::new().unwrap();
    
        let s = "Hello World!".to_string();
    
        // By entering the context, we tie `tokio::spawn` to this executor.
        let _guard = rt.enter();
        let handle = function_that_spawns(s);
    
        // Wait for the task before we end the test.
        rt.block_on(handle).unwrap();
    }
[/code]

#### pub fn shutdown_timeout(self, duration: [Duration][34])

Shuts down the runtime, waiting for at most `duration` for all spawned work to stop.

See the [struct level documentation][35] for more details.

##### §Examples
[code] 
    use tokio::runtime::Runtime;
    use tokio::task;
    
    use std::thread;
    use std::time::Duration;
    
    fn main() {
       let runtime = Runtime::new().unwrap();
    
       runtime.block_on(async move {
           task::spawn_blocking(move || {
               thread::sleep(Duration::from_secs(10_000));
           });
       });
    
       runtime.shutdown_timeout(Duration::from_millis(100));
    }
[/code]

#### pub fn shutdown_background(self)

Shuts down the runtime, without waiting for any spawned work to stop.

This can be useful if you want to drop a runtime from within another runtime. Normally, dropping a runtime will block indefinitely for spawned blocking tasks to complete, which would normally not be permitted within an asynchronous context. By calling `shutdown_background()`, you can drop the runtime from such a context.

Note however, that because we do not wait for any blocking tasks to complete, this may result in a resource leak (in that any blocking tasks are still running until they return.

See the [struct level documentation][35] for more details.

This function is equivalent to calling `shutdown_timeout(Duration::from_nanos(0))`.
[code] 
    use tokio::runtime::Runtime;
    
    fn main() {
       let runtime = Runtime::new().unwrap();
    
       runtime.block_on(async move {
           let inner_runtime = Runtime::new().unwrap();
           // ...
           inner_runtime.shutdown_background();
       });
    }
[/code]

#### pub fn metrics(&self) -> RuntimeMetrics

Returns a view that lets you get information about how the runtime is performing.

## Trait Implementations§

§

### impl [Debug][36] for [Runtime][19]

§

#### fn [fmt][37](&self, f: &mut [Formatter][38]<'_>) -> [Result][20]<[()][39], [Error][40]>

Formats the value using the given formatter. [Read more][37]

§

### impl [Drop][41] for [Runtime][19]

§

#### fn [drop][42](&mut self)

Executes the destructor for this type. [Read more][42]

§

### impl [RefUnwindSafe][43] for [Runtime][19]

§

### impl [UnwindSafe][44] for [Runtime][19]

## Auto Trait Implementations§

§

### impl ![Freeze][45] for [Runtime][19]

§

### impl [Send][28] for [Runtime][19]

§

### impl [Sync][46] for [Runtime][19]

§

### impl [Unpin][47] for [Runtime][19]

## Blanket Implementations§

[Source][48]§

### impl<T> [Any][49] for T

where T: 'static + ?[Sized][50],

[Source][51]§

#### fn [type_id][52](&self) -> [TypeId][53]

Gets the `TypeId` of `self`. [Read more][52]

[Source][54]§

### impl<T> [Borrow][55]<T> for T

where T: ?[Sized][50],

[Source][56]§

#### fn [borrow][57](&self) -> [&T][58]

Immutably borrows from an owned value. [Read more][57]

[Source][59]§

### impl<T> [BorrowMut][60]<T> for T

where T: ?[Sized][50],

[Source][61]§

#### fn [borrow_mut][62](&mut self) -> [&mut T][58]

Mutably borrows from an owned value. [Read more][62]

[Source][63]§

### impl<T> [From][64]<T> for T

[Source][65]§

#### fn [from][66](t: T) -> T

Returns the argument unchanged.

[Source][67]§

### impl<T, U> [Into][68]<U> for T

where U: [From][64]<T>,

[Source][69]§

#### fn [into][70](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][64]<T> for U` chooses to do.

[Source][71]§

### impl<T, U> [TryFrom][72]<U> for T

where U: [Into][68]<T>,

[Source][73]§

#### type [Error][74] = [Infallible][75]

The type returned in the event of a conversion error.

[Source][76]§

#### fn [try_from][77](value: U) -> [Result][20]<T, <T as [TryFrom][72]<U>>::[Error][78]>

Performs the conversion.

[Source][79]§

### impl<T, U> [TryInto][80]<U> for T

where U: [TryFrom][72]<T>,

[Source][81]§

#### type [Error][82] = <U as [TryFrom][72]<T>>::[Error][78]

The type returned in the event of a conversion error.

[Source][83]§

#### fn [try_into][84](self) -> [Result][20]<U, <U as [TryFrom][72]<T>>::[Error][78]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: crate::time
   [6]: struct.TokioRuntime.html#method.new (associated function tauri::async_runtime::TokioRuntime::new)
   [7]: struct@Builder
   [8]: macro@crate::main
   [9]: struct.TokioRuntime.html#method.shutdown_background (method tauri::async_runtime::TokioRuntime::shutdown_background)
   [10]: struct.TokioRuntime.html#method.shutdown_timeout (method tauri::async_runtime::TokioRuntime::shutdown_timeout)
   [11]: struct.TokioRuntime.html#method.spawn (method tauri::async_runtime::TokioRuntime::spawn)
   [12]: struct.TokioRuntime.html#method.spawn_blocking (method tauri::async_runtime::TokioRuntime::spawn_blocking)
   [13]: https://doc.rust-lang.org/1.94.1/alloc/sync/struct.Arc.html (struct alloc::sync::Arc)
   [14]: struct.TokioHandle.html (struct tauri::async_runtime::TokioHandle)
   [15]: https://doc.rust-lang.org/1.94.1/alloc/sync/struct.Arc.html#method.try_unwrap (associated function alloc::sync::Arc::try_unwrap)
   [16]: struct.TokioRuntime.html#method.enter (method tauri::async_runtime::TokioRuntime::enter)
   [17]: struct.TokioHandle.html#method.enter (method tauri::async_runtime::TokioHandle::enter)
   [18]: crate::spawn
   [19]: struct.TokioRuntime.html (struct tauri::async_runtime::TokioRuntime)
   [20]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [21]: https://doc.rust-lang.org/1.94.1/std/io/error/struct.Error.html (struct std::io::error::Error)
   [22]: ../attr.main.html
   [23]: crate::runtime::Builder
   [24]: struct.TokioHandle.html#method.block_on (method tauri::async_runtime::TokioHandle::block_on)
   [25]: struct.TokioJoinHandle.html (struct tauri::async_runtime::TokioJoinHandle)
   [26]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [27]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html#associatedtype.Output (type core::future::future::Future::Output)
   [28]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [29]: index.html#driving-the-runtime
   [30]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [31]: struct@crate::time::Sleep
   [32]: struct@crate::net::TcpStream
   [33]: fn@crate::spawn
   [34]: https://doc.rust-lang.org/1.94.1/core/time/struct.Duration.html (struct core::time::Duration)
   [35]: struct.TokioRuntime.html#shutdown (struct tauri::async_runtime::TokioRuntime)
   [36]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [37]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [38]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [39]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [40]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [41]: https://doc.rust-lang.org/1.94.1/core/ops/drop/trait.Drop.html (trait core::ops::drop::Drop)
   [42]: https://doc.rust-lang.org/1.94.1/core/ops/drop/trait.Drop.html#tymethod.drop
   [43]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [44]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [45]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [46]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [47]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [49]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [50]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [51]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [52]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [53]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [54]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [55]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [56]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [57]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [58]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [59]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [60]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [61]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [62]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [63]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [65]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [67]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [69]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [71]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [72]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [73]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [74]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [75]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [76]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [77]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [78]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [79]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [80]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [81]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [82]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [83]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [84]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

