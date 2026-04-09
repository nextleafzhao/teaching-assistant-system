## Crate tokio

## [tokio][1]1.51.1

  * [All Items][2]



### Sections

  * A Tour of Tokio
    * Authoring applications
    * Authoring libraries
    * Working With Tasks
    * CPU-bound tasks and blocking code
    * Asynchronous IO
  * Examples
  * Feature flags
    * Unstable features
  * Supported platforms
    * `WASM` support
    * Unstable `WASM` support



### Crate Items

  * Modules
  * Macros



# Crate tokio Copy item path

[Source][3]

Expand description

A runtime for writing reliable network applications without compromising speed.

Tokio is an event-driven, non-blocking I/O platform for writing asynchronous applications with the Rust programming language. At a high level, it provides a few major components:

  * Tools for working with asynchronous tasks, including [synchronization primitives and channels][4] and [timeouts, sleeps, and intervals][5].
  * APIs for performing asynchronous I/O, including [TCP and UDP][6] sockets, [filesystem][7] operations, and [process][8] and [signal][9] management.
  * A [runtime][10] for executing asynchronous code, including a task scheduler, an I/O driver backed by the operating system’s event queue (`epoll`, `kqueue`, `IOCP`, etc…), and a high performance timer.



Guide level documentation is found on the [website][11].

## §A Tour of Tokio

Tokio consists of a number of modules that provide a range of functionality essential for implementing asynchronous applications in Rust. In this section, we will take a brief tour of Tokio, summarizing the major APIs and their uses.

The easiest way to get started is to enable all features. Do this by enabling the `full` feature flag:
[code] 
    tokio = { version = "1", features = ["full"] }
[/code]

#### §Authoring applications

Tokio is great for writing applications and most users in this case shouldn’t worry too much about what features they should pick. If you’re unsure, we suggest going with `full` to ensure that you don’t run into any road blocks while you’re building your application.

##### §Example

This example shows the quickest way to get started with Tokio.
[code] 
    tokio = { version = "1", features = ["full"] }
[/code]

#### §Authoring libraries

As a library author your goal should be to provide the lightest weight crate that is based on Tokio. To achieve this you should ensure that you only enable the features you need. This allows users to pick up your crate without having to enable unnecessary features.

##### §Example

This example shows how you may want to import features for a library that just needs to `tokio::spawn` and use a `TcpStream`.
[code] 
    tokio = { version = "1", features = ["rt", "net"] }
[/code]

### §Working With Tasks

Asynchronous programs in Rust are based around lightweight, non-blocking units of execution called _tasks_. The [`tokio::task`][12] module provides important tools for working with tasks:

  * The [`spawn`][13] function and [`JoinHandle`][14] type, for scheduling a new task on the Tokio runtime and awaiting the output of a spawned task, respectively,
  * Functions for [running blocking operations][15] in an asynchronous task context.



The [`tokio::task`][12] module is present only when the “rt” feature flag is enabled.

The [`tokio::sync`][4] module contains synchronization primitives to use when needing to communicate or share data. These include:

  * channels ([`oneshot`][16], [`mpsc`][17], [`watch`][18], and [`broadcast`][19]), for sending values between tasks,
  * a non-blocking [`Mutex`][20], for controlling access to a shared, mutable value,
  * an asynchronous [`Barrier`][21] type, for multiple tasks to synchronize before beginning a computation.



The `tokio::sync` module is present only when the “sync” feature flag is enabled.

The [`tokio::time`][5] module provides utilities for tracking time and scheduling work. This includes functions for setting [timeouts][22] for tasks, [sleeping][23] work to run in the future, or [repeating an operation at an interval][24].

In order to use `tokio::time`, the “time” feature flag must be enabled.

Finally, Tokio provides a _runtime_ for executing asynchronous tasks. Most applications can use the [`#[tokio::main]`][25] macro to run their code on the Tokio runtime. However, this macro provides only basic configuration options. As an alternative, the [`tokio::runtime`][10] module provides more powerful APIs for configuring and managing runtimes. You should use that module if the `#[tokio::main]` macro doesn’t provide the functionality you need.

Using the runtime requires the “rt” or “rt-multi-thread” feature flags, to enable the current-thread [single-threaded scheduler][26] and the [multi-thread scheduler][27], respectively. See the [`runtime` module documentation][28] for details. In addition, the “macros” feature flag enables the `#[tokio::main]` and `#[tokio::test]` attributes.

### §CPU-bound tasks and blocking code

Tokio is able to concurrently run many tasks on a few threads by repeatedly swapping the currently running task on each thread. However, this kind of swapping can only happen at `.await` points, so code that spends a long time without reaching an `.await` will prevent other tasks from running. To combat this, Tokio provides two kinds of threads: Core threads and blocking threads.

The core threads are where all asynchronous code runs, and Tokio will by default spawn one for each CPU core. You can use the environment variable `TOKIO_WORKER_THREADS` to override the default value.

The blocking threads are spawned on demand, can be used to run blocking code that would otherwise block other tasks from running and are kept alive when not used for a certain amount of time which can be configured with [`thread_keep_alive`][29]. Since it is not possible for Tokio to swap out blocking tasks, like it can do with asynchronous code, the upper limit on the number of blocking threads is very large. These limits can be configured on the [`Builder`][30].

To spawn a blocking task, you should use the [`spawn_blocking`][31] function.
[code] 
    #[tokio::main]
    async fn main() {
        // This is running on a core thread.
    
        let blocking_task = tokio::task::spawn_blocking(|| {
            // This is running on a blocking thread.
            // Blocking here is ok.
        });
    
        // We can wait for the blocking task like this:
        // If the blocking task panics, the unwrap below will propagate the
        // panic.
        blocking_task.await.unwrap();
    }
[/code]

If your code is CPU-bound and you wish to limit the number of threads used to run it, you should use a separate thread pool dedicated to CPU bound tasks. For example, you could consider using the [rayon][32] library for CPU-bound tasks. It is also possible to create an extra Tokio runtime dedicated to CPU-bound tasks, but if you do this, you should be careful that the extra runtime runs _only_ CPU-bound tasks, as IO-bound tasks on that runtime will behave poorly.

Hint: If using rayon, you can use a [`oneshot`][16] channel to send the result back to Tokio when the rayon task finishes.

### §Asynchronous IO

As well as scheduling and running tasks, Tokio provides everything you need to perform input and output asynchronously.

The [`tokio::io`][33] module provides Tokio’s asynchronous core I/O primitives, the [`AsyncRead`][34], [`AsyncWrite`][35], and [`AsyncBufRead`][36] traits. In addition, when the “io-util” feature flag is enabled, it also provides combinators and functions for working with these traits, forming as an asynchronous counterpart to [`std::io`][37].

Tokio also includes APIs for performing various kinds of I/O and interacting with the operating system asynchronously. These include:

  * [`tokio::net`][6], which contains non-blocking versions of [TCP][38], [UDP][39], and [Unix Domain Sockets][40] (enabled by the “net” feature flag),
  * [`tokio::fs`][7], similar to [`std::fs`][41] but for performing filesystem I/O asynchronously (enabled by the “fs” feature flag),
  * [`tokio::signal`][9], for asynchronously handling Unix and Windows OS signals (enabled by the “signal” feature flag),
  * [`tokio::process`][8], for spawning and managing child processes (enabled by the “process” feature flag).



## §Examples

A simple TCP echo server:
[code] 
    use tokio::net::TcpListener;
    use tokio::io::{AsyncReadExt, AsyncWriteExt};
    
    #[tokio::main]
    async fn main() -> Result<(), Box<dyn std::error::Error>> {
        let listener = TcpListener::bind("127.0.0.1:8080").await?;
    
        loop {
            let (mut socket, _) = listener.accept().await?;
    
            tokio::spawn(async move {
                let mut buf = [0; 1024];
    
                // In a loop, read data from the socket and write the data back.
                loop {
                    let n = match socket.read(&mut buf).await {
                        // socket closed
                        Ok(0) => return,
                        Ok(n) => n,
                        Err(e) => {
                            eprintln!("failed to read from socket; err = {:?}", e);
                            return;
                        }
                    };
    
                    // Write the data back
                    if let Err(e) = socket.write_all(&buf[0..n]).await {
                        eprintln!("failed to write to socket; err = {:?}", e);
                        return;
                    }
                }
            });
        }
    }
[/code]

## §Feature flags

Tokio uses a set of [feature flags][42] to reduce the amount of compiled code. It is possible to just enable certain features over others. By default, Tokio does not enable any features but allows one to enable a subset for their use case. Below is a list of the available feature flags. You may also notice above each function, struct and trait there is listed one or more feature flags that are required for that item to be used. If you are new to Tokio it is recommended that you use the `full` feature flag which will enable all public APIs. Beware though that this will pull in many extra dependencies that you may not need.

  * `full`: Enables all features listed below except `test-util` and unstable features.
  * `rt`: Enables `tokio::spawn`, the current-thread scheduler, and non-scheduler utilities.
  * `rt-multi-thread`: Enables the heavier, multi-threaded, work-stealing scheduler.
  * `io-util`: Enables the IO based `Ext` traits.
  * `io-std`: Enable `Stdout`, `Stdin` and `Stderr` types.
  * `net`: Enables `tokio::net` types such as `TcpStream`, `UnixStream` and `UdpSocket`, as well as (on Unix-like systems) `AsyncFd` and (on FreeBSD) `PollAio`.
  * `time`: Enables `tokio::time` types and allows the schedulers to enable the built-in timer.
  * `process`: Enables `tokio::process` types.
  * `macros`: Enables `#[tokio::main]` and `#[tokio::test]` macros.
  * `sync`: Enables all `tokio::sync` types.
  * `signal`: Enables all `tokio::signal` types.
  * `fs`: Enables `tokio::fs` types.
  * `test-util`: Enables testing based infrastructure for the Tokio runtime.
  * `parking_lot`: As a potential optimization, use the [`parking_lot`] crate’s synchronization primitives internally. Also, this dependency is necessary to construct some of our primitives in a `const` context. `MSRV` may increase according to the [`parking_lot`] release in use.



_Note:`AsyncRead` and `AsyncWrite` traits do not require any features and are always available._

### §Unstable features

Some feature flags are only available when specifying the `tokio_unstable` flag:

  * `tracing`: Enables tracing events.
  * `io-uring`: Enables `io-uring` (Linux only).
  * `taskdump`: Enables `taskdump` (Linux only).



Likewise, this flag enables access to unstable APIs.

This flag enables **unstable** features. The public API of these features may break in 1.x releases. To enable these features, the `--cfg tokio_unstable` argument must be passed to `rustc` when compiling. This serves to explicitly opt-in to features which may break semver conventions, since Cargo [does not yet directly support such opt-ins][43].

You can specify it in your project’s `.cargo/config.toml` file:
[code] 
    [build]
    rustflags = ["--cfg", "tokio_unstable"]
[/code]

The `[build]` section does **not** go in a `Cargo.toml` file. Instead it must be placed in the Cargo config file `.cargo/config.toml`. 

Alternatively, you can specify it with an environment variable:
[code] 
    ## Many *nix shells:
    export RUSTFLAGS="--cfg tokio_unstable"
    cargo build
[/code]
[code]
    ## Windows PowerShell:
    $Env:RUSTFLAGS="--cfg tokio_unstable"
    cargo build
[/code]

## §Supported platforms

Tokio currently guarantees support for the following platforms:

  * Linux
  * Windows
  * Android (API level 21)
  * macOS
  * iOS
  * FreeBSD



Tokio will continue to support these platforms in the future. However, future releases may change requirements such as the minimum required libc version on Linux, the API level on Android, or the supported FreeBSD release.

Beyond the above platforms, Tokio is intended to work on all platforms supported by the mio crate. You can find a longer list [in mio’s documentation][44]. However, these additional platforms may become unsupported in the future.

Note that Wine is considered to be a different platform from Windows. See mio’s documentation for more information on Wine support.

### §`WASM` support

Tokio has some limited support for the `WASM` platform. Without the `tokio_unstable` flag, the following features are supported:

  * `sync`
  * `macros`
  * `io-util`
  * `rt`
  * `time`



Enabling any other feature (including `full`) will cause a compilation failure.

The `time` module will only work on `WASM` platforms that have support for timers (e.g. wasm32-wasi). The timing functions will panic if used on a `WASM` platform that does not support timers.

Note also that if the runtime becomes indefinitely idle, it will panic immediately instead of blocking forever. On platforms that don’t support time, this means that the runtime can never be idle in any way.

### §Unstable `WASM` support

Tokio also has unstable support for some additional `WASM` features. This requires the use of the `tokio_unstable` flag.

Using this flag enables the use of `tokio::net` on the wasm32-wasi target. However, not all methods are available on the networking types as `WASI` currently does not support the creation of new sockets from within `WASM`. Because of this, sockets must currently be created via the `FromRawFd` trait.

## Modules§

[io][33]
    Traits, helpers, and type definitions for asynchronous I/O functionality.
[net][6]
    TCP/UDP/Unix bindings for `tokio`.
[stream][45]
    Due to the `Stream` trait’s inclusion in `std` landing later than Tokio’s 1.0 release, most of the Tokio stream utilities have been moved into the [`tokio-stream`][46] crate.
[task][12]
    Asynchronous green-threads.

## Macros§

[pin][47]
    Pins a value on the stack.

   [1]: ../tokio/index.html
   [2]: all.html
   [3]: ../src/tokio/lib.rs.html#1-694
   [4]: crate::sync
   [5]: crate::time
   [6]: net/index.html (mod tokio::net)
   [7]: crate::fs
   [8]: crate::process
   [9]: crate::signal
   [10]: crate::runtime
   [11]: https://tokio.rs/tokio/tutorial
   [12]: task/index.html (mod tokio::task)
   [13]: crate::task::spawn()
   [14]: crate::task::JoinHandle
   [15]: task/index.html#blocking-and-yielding
   [16]: crate::sync::oneshot
   [17]: crate::sync::mpsc
   [18]: crate::sync::watch
   [19]: crate::sync::broadcast
   [20]: crate::sync::Mutex
   [21]: crate::sync::Barrier
   [22]: crate::time::timeout()
   [23]: crate::time::sleep()
   [24]: crate::time::interval()
   [25]: attr.main.html
   [26]: runtime/index.html#current-thread-scheduler
   [27]: runtime/index.html#multi-thread-scheduler
   [28]: runtime/index.html#runtime-scheduler
   [29]: crate::runtime::Builder::thread_keep_alive()
   [30]: crate::runtime::Builder
   [31]: crate::task::spawn_blocking()
   [32]: https://docs.rs/rayon
   [33]: io/index.html (mod tokio::io)
   [34]: io/trait.AsyncRead.html (trait tokio::io::AsyncRead)
   [35]: io/trait.AsyncWrite.html (trait tokio::io::AsyncWrite)
   [36]: io/trait.AsyncBufRead.html (trait tokio::io::AsyncBufRead)
   [37]: https://doc.rust-lang.org/1.94.1/std/io/index.html (mod std::io)
   [38]: crate::net::tcp
   [39]: crate::net::UdpSocket
   [40]: crate::net::unix
   [41]: https://doc.rust-lang.org/1.94.1/std/fs/index.html (mod std::fs)
   [42]: https://doc.rust-lang.org/cargo/reference/manifest.html#the-features-section
   [43]: https://internals.rust-lang.org/t/feature-request-unstable-opt-in-non-transitive-crate-features/16193#why-not-a-crate-feature-2
   [44]: https://crates.io/crates/mio#platforms
   [45]: stream/index.html (mod tokio::stream)
   [46]: https://docs.rs/tokio-stream
   [47]: macro.pin.html (macro tokio::pin)

