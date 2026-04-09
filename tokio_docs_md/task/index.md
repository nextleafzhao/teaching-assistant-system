## Module task

## [tokio][1]1.51.1

## Module task

### Sections

  * What are Tasks?
  * Working with Tasks
    * Spawning
    * Blocking and Yielding



## [In crate tokio][2]

[tokio][2]

# Module task Copy item path

[Source][3]

Expand description

Asynchronous green-threads.

### §What are Tasks?

A _task_ is a light weight, non-blocking unit of execution. A task is similar to an OS thread, but rather than being managed by the OS scheduler, they are managed by the [Tokio runtime][4]. Another name for this general pattern is [green threads][5]. If you are familiar with [Go’s goroutines][6], [Kotlin’s coroutines][7], or [Erlang’s processes][8], you can think of Tokio’s tasks as something similar.

Key points about tasks include:

  * Tasks are **light weight**. Because tasks are scheduled by the Tokio runtime rather than the operating system, creating new tasks or switching between tasks does not require a context switch and has fairly low overhead. Creating, running, and destroying large numbers of tasks is quite cheap, especially compared to OS threads.

  * Tasks are scheduled **cooperatively**. Most operating systems implement _preemptive multitasking_. This is a scheduling technique where the operating system allows each thread to run for a period of time, and then _preempts_ it, temporarily pausing that thread and switching to another. Tasks, on the other hand, implement _cooperative multitasking_. In cooperative multitasking, a task is allowed to run until it _yields_ , indicating to the Tokio runtime’s scheduler that it cannot currently continue executing. When a task yields, the Tokio runtime switches to executing the next task.

  * Tasks are **non-blocking**. Typically, when an OS thread performs I/O or must synchronize with another thread, it _blocks_ , allowing the OS to schedule another thread. When a task cannot continue executing, it must yield instead, allowing the Tokio runtime to schedule another task. Tasks should generally not perform system calls or other operations that could block a thread, as this would prevent other tasks running on the same thread from executing as well. Instead, this module provides APIs for running blocking operations in an asynchronous context.




### §Working with Tasks

This module provides the following APIs for working with tasks:

#### §Spawning

Perhaps the most important function in this module is [`task::spawn`][9]. This function can be thought of as an async equivalent to the standard library’s [`thread::spawn`][10]. It takes an `async` block or other [future][11], and creates a new task to run that work concurrently:
[code] 
    use tokio::task;
    
    task::spawn(async {
        // perform some work here...
    });
[/code]

Like [`std::thread::spawn`][10], `task::spawn` returns a [`JoinHandle`][12] struct. A `JoinHandle` is itself a future which may be used to await the output of the spawned task. For example:
[code] 
    use tokio::task;
    
    let join = task::spawn(async {
        // ...
        "hello world!"
    });
    
    // ...
    
    // Await the result of the spawned task.
    let result = join.await?;
    assert_eq!(result, "hello world!");
[/code]

Again, like `std::thread`’s [`JoinHandle` type][13], if the spawned task panics, awaiting its `JoinHandle` will return a [`JoinError`][14]. For example:
[code] 
    use tokio::task;
    
    let join = task::spawn(async {
        panic!("something bad happened!")
    });
    
    // The returned result indicates that the task failed.
    assert!(join.await.is_err());
[/code]

`spawn`, `JoinHandle`, and `JoinError` are present when the “rt” feature flag is enabled.

##### §Cancellation

Spawned tasks may be cancelled using the [`JoinHandle::abort`][15] or [`AbortHandle::abort`][16] methods. When one of these methods are called, the task is signalled to shut down next time it yields at an `.await` point. If the task is already idle, then it will be shut down as soon as possible without running again before being shut down. Additionally, shutting down a Tokio runtime (e.g. by returning from `#[tokio::main]`) immediately cancels all tasks on it.

When tasks are shut down, it will stop running at whichever `.await` it has yielded at. All local variables are destroyed by running their destructor. Once shutdown has completed, awaiting the [`JoinHandle`][12] will fail with a [cancelled error][17].

Note that aborting a task does not guarantee that it fails with a cancelled error, since it may complete normally first. For example, if the task does not yield to the runtime at any point between the call to `abort` and the end of the task, then the [`JoinHandle`][12] will instead report that the task exited normally.

Be aware that tasks spawned using [`spawn_blocking`] cannot be aborted because they are not async. If you call `abort` on a `spawn_blocking` task, then this _will not have any effect_ , and the task will continue running normally. The exception is if the task has not started running yet; in that case, calling `abort` may prevent the task from starting.

Be aware that calls to [`JoinHandle::abort`][15] just schedule the task for cancellation, and will return before the cancellation has completed. To wait for cancellation to complete, wait for the task to finish by awaiting the [`JoinHandle`][12]. Similarly, the [`JoinHandle::is_finished`][18] method does not return `true` until the cancellation has finished.

Calling [`JoinHandle::abort`][15] multiple times has the same effect as calling it once.

Tokio also provides an [`AbortHandle`][19], which is like the [`JoinHandle`][12], except that it does not provide a mechanism to wait for the task to finish. Each task can only have one [`JoinHandle`][12], but it can have more than one [`AbortHandle`][19].

#### §Blocking and Yielding

As we discussed above, code running in asynchronous tasks should not perform operations that can block. A blocking operation performed in a task running on a thread that is also running other tasks would block the entire thread, preventing other tasks from running.

Instead, Tokio provides two APIs for running blocking operations in an asynchronous context: [`task::spawn_blocking`][20] and [`task::block_in_place`][21].

Be aware that if you call a non-async method from async code, that non-async method is still inside the asynchronous context, so you should also avoid blocking operations there. This includes destructors of objects destroyed in async code.

##### §`spawn_blocking`

The `task::spawn_blocking` function is similar to the `task::spawn` function discussed in the previous section, but rather than spawning a _non-blocking_ future on the Tokio runtime, it instead spawns a _blocking_ function on a dedicated thread pool for blocking tasks. For example:
[code] 
    use tokio::task;
    
    task::spawn_blocking(|| {
        // do some compute-heavy work or call synchronous code
    });
[/code]

Just like `task::spawn`, `task::spawn_blocking` returns a `JoinHandle` which we can use to await the result of the blocking operation:
[code] 
    let join = task::spawn_blocking(|| {
        // do some compute-heavy work or call synchronous code
        "blocking completed"
    });
    
    let result = join.await?;
    assert_eq!(result, "blocking completed");
[/code]

##### §`block_in_place`

When using the [multi-threaded runtime][22], the [`task::block_in_place`][21] function is also available. Like `task::spawn_blocking`, this function allows running a blocking operation from an asynchronous context. Unlike `spawn_blocking`, however, `block_in_place` works by transitioning the _current_ worker thread to a blocking thread, moving other tasks running on that thread to another worker thread. This can improve performance by avoiding context switches.

For example:
[code] 
    use tokio::task;
    
    let result = task::block_in_place(|| {
        // do some compute-heavy work or call synchronous code
        "blocking completed"
    });
    
    assert_eq!(result, "blocking completed");
[/code]

##### §`yield_now`

In addition, this module provides a [`task::yield_now`][23] async function that is analogous to the standard library’s [`thread::yield_now`][24]. Calling and `await`ing this function will cause the current task to yield to the Tokio runtime’s scheduler, allowing other tasks to be scheduled. Eventually, the yielding task will be polled again, allowing it to execute. For example:
[code] 
    use tokio::task;
    
    async {
        task::spawn(async {
            // ...
            println!("spawned task done!")
        });
    
        // Yield, allowing the newly-spawned task to execute first.
        task::yield_now().await;
        println!("main task done!");
    }
[/code]

   [1]: ../../tokio/index.html
   [2]: ../index.html
   [3]: ../../src/tokio/task/mod.rs.html#1-335
   [4]: crate::runtime
   [5]: https://en.wikipedia.org/wiki/Green_threads
   [6]: https://tour.golang.org/concurrency/1
   [7]: https://kotlinlang.org/docs/reference/coroutines-overview.html
   [8]: http://erlang.org/doc/getting_started/conc_prog.html#processes
   [9]: crate::task::spawn()
   [10]: https://doc.rust-lang.org/1.94.1/std/thread/functions/fn.spawn.html (fn std::thread::functions::spawn)
   [11]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [12]: crate::task::JoinHandle
   [13]: https://doc.rust-lang.org/1.94.1/std/thread/join_handle/struct.JoinHandle.html (struct std::thread::join_handle::JoinHandle)
   [14]: crate::task::JoinError
   [15]: crate::task::JoinHandle::abort
   [16]: crate::task::AbortHandle::abort
   [17]: crate::task::JoinError::is_cancelled
   [18]: crate::task::JoinHandle::is_finished
   [19]: crate::task::AbortHandle
   [20]: crate::task::spawn_blocking
   [21]: crate::task::block_in_place
   [22]: ../runtime/index.html#threaded-scheduler
   [23]: crate::task::yield_now()
   [24]: https://doc.rust-lang.org/1.94.1/std/thread/functions/fn.yield_now.html (fn std::thread::functions::yield_now)

