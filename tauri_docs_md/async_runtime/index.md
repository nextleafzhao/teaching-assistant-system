## Module async_runtime

[![logo][1]][2]

## [tauri][2]2.10.3

## Module async_runtime

### Module Items

  * Structs
  * Enums
  * Functions



## [In crate tauri][3]

[tauri][3]

# Module async_runtime Copy item path

[Source][4]

Expand description

The singleton async runtime used by Tauri and exposed to users.

Tauri uses [`tokio`] Runtime to initialize code, such as [`Plugin::initialize`][5] and [`crate::Builder::setup`][6] hooks. This module also re-export some common items most developers need from [`tokio`]. If there’s one you need isn’t here, you could use types in [`tokio`] directly. For custom command handlers, it’s recommended to use a plain `async fn` command.

## Structs§

[Mutex][7]
    An asynchronous `Mutex`-like type.
[Receiver][8]
    Receives values from the associated `Sender`.
[RwLock][9]
    An asynchronous reader-writer lock.
[Sender][10]
    Sends values to the associated `Receiver`.
[TokioHandle][11]
    Handle to the runtime.
[TokioJoinHandle][12]
    An owned permission to join on a task (await its termination).
[TokioRuntime][13]
    The Tokio runtime.

## Enums§

[JoinHandle][14]
    An owned permission to join on a task (await its termination).
[Runtime][15]
    A runtime used to execute asynchronous tasks.
[RuntimeHandle][16]
    A handle to the async runtime

## Functions§

[block_on][17]
    Runs a future to completion on runtime.
[channel][18]
    Creates a bounded mpsc channel for communicating between asynchronous tasks with backpressure.
[handle][19]
    Returns a handle of the async runtime.
[set][20]
    Sets the runtime to use to execute asynchronous tasks. For convenience, this method takes a [`TokioHandle`][11]. Note that you cannot drop the underlying [`TokioRuntime`][13].
[spawn][21]
    Spawns a future onto the runtime.
[spawn_blocking][22]
    Runs the provided function on an executor dedicated to blocking operations.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: ../index.html
   [4]: ../../src/tauri/async_runtime.rs.html#5-348
   [5]: ../plugin/trait.Plugin.html#method.initialize
   [6]: ../struct.Builder.html#method.setup (method tauri::Builder::setup)
   [7]: struct.Mutex.html (struct tauri::async_runtime::Mutex)
   [8]: struct.Receiver.html (struct tauri::async_runtime::Receiver)
   [9]: struct.RwLock.html (struct tauri::async_runtime::RwLock)
   [10]: struct.Sender.html (struct tauri::async_runtime::Sender)
   [11]: struct.TokioHandle.html (struct tauri::async_runtime::TokioHandle)
   [12]: struct.TokioJoinHandle.html (struct tauri::async_runtime::TokioJoinHandle)
   [13]: struct.TokioRuntime.html (struct tauri::async_runtime::TokioRuntime)
   [14]: enum.JoinHandle.html (enum tauri::async_runtime::JoinHandle)
   [15]: enum.Runtime.html (enum tauri::async_runtime::Runtime)
   [16]: enum.RuntimeHandle.html (enum tauri::async_runtime::RuntimeHandle)
   [17]: fn.block_on.html (fn tauri::async_runtime::block_on)
   [18]: fn.channel.html (fn tauri::async_runtime::channel)
   [19]: fn.handle.html (fn tauri::async_runtime::handle)
   [20]: fn.set.html (fn tauri::async_runtime::set)
   [21]: fn.spawn.html (fn tauri::async_runtime::spawn)
   [22]: fn.spawn_blocking.html (fn tauri::async_runtime::spawn_blocking)

