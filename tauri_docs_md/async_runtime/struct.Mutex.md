## Mutex

[![logo][1]][2]

## [tauri][2]2.10.3

## Mutex

### Sections

  * Which kind of mutex should you use?
  * Examples:



### Methods

  * blocking_lock
  * blocking_lock_owned
  * const_new
  * get_mut
  * into_inner
  * lock
  * lock_owned
  * new
  * try_lock
  * try_lock_owned



### Trait Implementations

  * Debug
  * Default
  * From<T>
  * Send
  * Sync



### Auto Trait Implementations

  * !Freeze
  * !RefUnwindSafe
  * Unpin
  * UnwindSafe



### Blanket Implementations

  * Any
  * Borrow<T>
  * BorrowMut<T>
  * From<!>
  * From<T>
  * Into<U>
  * TryFrom<U>
  * TryInto<U>



## [In tauri::async_runtime][3]

[tauri][4]::[async_runtime][3]

# Struct Mutex Copy item path
[code]
    pub struct Mutex<T>
    
    where
        T: ?[Sized][5],
    
    { /* private fields */ }
[/code]

Expand description

An asynchronous `Mutex`-like type.

This type acts similarly to [`std::sync::Mutex`][6], with two major differences: [`lock`][7] is an async method so does not block, and the lock guard is designed to be held across `.await` points.

Tokio’s Mutex operates on a guaranteed FIFO basis. This means that the order in which tasks call the [`lock`][7] method is the exact order in which they will acquire the lock.

## §Which kind of mutex should you use?

Contrary to popular belief, it is ok and often preferred to use the ordinary [`Mutex`][6] from the standard library in asynchronous code.

The feature that the async mutex offers over the blocking mutex is the ability to keep it locked across an `.await` point. This makes the async mutex more expensive than the blocking mutex, so the blocking mutex should be preferred in the cases where it can be used. The primary use case for the async mutex is to provide shared mutable access to IO resources such as a database connection. If the value behind the mutex is just data, it’s usually appropriate to use a blocking mutex such as the one in the standard library or [`parking_lot`][8].

Note that, although the compiler will not prevent the std `Mutex` from holding its guard across `.await` points in situations where the task is not movable between threads, this virtually never leads to correct concurrent code in practice as it can easily lead to deadlocks.

A common pattern is to wrap the `Arc<Mutex<...>>` in a struct that provides non-async methods for performing operations on the data within, and only lock the mutex inside these methods. The [mini-redis][9] example provides an illustration of this pattern.

Additionally, when you _do_ want shared access to an IO resource, it is often better to spawn a task to manage the IO resource, and to use message passing to communicate with that task.

## §Examples:
[code] 
    use tokio::sync::Mutex;
    use std::sync::Arc;
    
    let data1 = Arc::new(Mutex::new(0));
    let data2 = Arc::clone(&data1);
    
    tokio::spawn(async move {
        let mut lock = data2.lock().await;
        *lock += 1;
    });
    
    let mut lock = data1.lock().await;
    *lock += 1;
[/code]
[code] 
    use tokio::sync::Mutex;
    use std::sync::Arc;
    
    let count = Arc::new(Mutex::new(0));
    
    for i in 0..5 {
        let my_count = Arc::clone(&count);
        tokio::spawn(async move {
            for j in 0..10 {
                let mut lock = my_count.lock().await;
                *lock += 1;
                println!("{} {} {}", i, j, lock);
            }
        });
    }
    
    loop {
        if *count.lock().await >= 50 {
            break;
        }
    }
    println!("Count hit 50.");
[/code]

There are a few things of note here to pay attention to in this example.

  1. The mutex is wrapped in an [`Arc`][10] to allow it to be shared across threads.
  2. Each spawned task obtains a lock and releases it on every iteration.
  3. Mutation of the data protected by the Mutex is done by de-referencing the obtained lock as seen on lines 13 and 20.



Tokio’s Mutex works in a simple FIFO (first in, first out) style where all calls to [`lock`][7] complete in the order they were performed. In that way the Mutex is “fair” and predictable in how it distributes the locks to inner data. Locks are released and reacquired after every iteration, so basically, each thread goes to the back of the line after it increments the value once. Note that there’s some unpredictability to the timing between when the threads are started, but once they are going they alternate predictably. Finally, since there is only a single valid lock at any given time, there is no possibility of a race condition when mutating the inner value.

Note that in contrast to [`std::sync::Mutex`][6], this implementation does not poison the mutex when a thread holding the [`MutexGuard`][11] panics. In such a case, the mutex will be unlocked. If the panic is caught, this might leave the data protected by the mutex in an inconsistent state.

## Implementations§

§

### impl<T> [Mutex][12]<T>

where T: ?[Sized][5],

#### pub fn new(t: T) -> [Mutex][12]<T>

Creates a new lock in an unlocked state ready for use.

##### §Examples
[code] 
    use tokio::sync::Mutex;
    
    let lock = Mutex::new(5);
[/code]

#### pub const fn const_new(t: T) -> [Mutex][12]<T>

Creates a new lock in an unlocked state ready for use.

When using the `tracing` [unstable feature][13], a `Mutex` created with `const_new` will not be instrumented. As such, it will not be visible in [`tokio-console`][14]. Instead, [`Mutex::new`][15] should be used to create an instrumented object if that is needed.

##### §Examples
[code] 
    use tokio::sync::Mutex;
    
    static LOCK: Mutex<i32> = Mutex::const_new(5);
[/code]

#### pub async fn lock(&self) -> MutexGuard<'_, T>

Locks this mutex, causing the current task to yield until the lock has been acquired. When the lock has been acquired, function returns a [`MutexGuard`].

If the mutex is available to be acquired immediately, then this call will typically not yield to the runtime. However, this is not guaranteed under all circumstances.

##### §Cancel safety

This method uses a queue to fairly distribute locks in the order they were requested. Cancelling a call to `lock` makes you lose your place in the queue.

##### §Examples
[code] 
    use tokio::sync::Mutex;
    
    let mutex = Mutex::new(1);
    
    let mut n = mutex.lock().await;
    *n = 2;
[/code]

#### pub fn blocking_lock(&self) -> MutexGuard<'_, T>

Blockingly locks this `Mutex`. When the lock has been acquired, function returns a [`MutexGuard`].

This method is intended for use cases where you need to use this mutex in asynchronous code as well as in synchronous code.

##### §Panics

This function panics if called within an asynchronous execution context.

  * If you find yourself in an asynchronous execution context and needing to call some (synchronous) function which performs one of these `blocking_` operations, then consider wrapping that call inside [`spawn_blocking()`][16] (or [`block_in_place()`][crate::task::block_in_place]).



##### §Examples
[code] 
    use std::sync::Arc;
    use tokio::sync::Mutex;
    
    #[tokio::main]
    async fn main() {
        let mutex =  Arc::new(Mutex::new(1));
        let lock = mutex.lock().await;
    
        let mutex1 = Arc::clone(&mutex);
        let blocking_task = tokio::task::spawn_blocking(move || {
            // This shall block until the `lock` is released.
            let mut n = mutex1.blocking_lock();
            *n = 2;
        });
    
        assert_eq!(*lock, 1);
        // Release the lock.
        drop(lock);
    
        // Await the completion of the blocking task.
        blocking_task.await.unwrap();
    
        // Assert uncontended.
        let n = mutex.try_lock().unwrap();
        assert_eq!(*n, 2);
    }
[/code]

#### pub fn blocking_lock_owned(self: [Arc][10]<[Mutex][12]<T>>) -> OwnedMutexGuard<T>

Blockingly locks this `Mutex`. When the lock has been acquired, function returns an [`OwnedMutexGuard`].

This method is identical to [`Mutex::blocking_lock`][17], except that the returned guard references the `Mutex` with an [`Arc`][10] rather than by borrowing it. Therefore, the `Mutex` must be wrapped in an `Arc` to call this method, and the guard will live for the `'static` lifetime, as it keeps the `Mutex` alive by holding an `Arc`.

##### §Panics

This function panics if called within an asynchronous execution context.

  * If you find yourself in an asynchronous execution context and needing to call some (synchronous) function which performs one of these `blocking_` operations, then consider wrapping that call inside [`spawn_blocking()`][16] (or [`block_in_place()`][crate::task::block_in_place]).



##### §Examples
[code] 
    use std::sync::Arc;
    use tokio::sync::Mutex;
    
    #[tokio::main]
    async fn main() {
        let mutex =  Arc::new(Mutex::new(1));
        let lock = mutex.lock().await;
    
        let mutex1 = Arc::clone(&mutex);
        let blocking_task = tokio::task::spawn_blocking(move || {
            // This shall block until the `lock` is released.
            let mut n = mutex1.blocking_lock_owned();
            *n = 2;
        });
    
        assert_eq!(*lock, 1);
        // Release the lock.
        drop(lock);
    
        // Await the completion of the blocking task.
        blocking_task.await.unwrap();
    
        // Assert uncontended.
        let n = mutex.try_lock().unwrap();
        assert_eq!(*n, 2);
    }
[/code]

#### pub async fn lock_owned(self: [Arc][10]<[Mutex][12]<T>>) -> OwnedMutexGuard<T>

Locks this mutex, causing the current task to yield until the lock has been acquired. When the lock has been acquired, this returns an [`OwnedMutexGuard`].

If the mutex is available to be acquired immediately, then this call will typically not yield to the runtime. However, this is not guaranteed under all circumstances.

This method is identical to [`Mutex::lock`][7], except that the returned guard references the `Mutex` with an [`Arc`][10] rather than by borrowing it. Therefore, the `Mutex` must be wrapped in an `Arc` to call this method, and the guard will live for the `'static` lifetime, as it keeps the `Mutex` alive by holding an `Arc`.

##### §Cancel safety

This method uses a queue to fairly distribute locks in the order they were requested. Cancelling a call to `lock_owned` makes you lose your place in the queue.

##### §Examples
[code] 
    use tokio::sync::Mutex;
    use std::sync::Arc;
    
    let mutex = Arc::new(Mutex::new(1));
    
    let mut n = mutex.clone().lock_owned().await;
    *n = 2;
[/code]

#### pub fn try_lock(&self) -> [Result][18]<MutexGuard<'_, T>, TryLockError>

Attempts to acquire the lock, and returns [`TryLockError`][19] if the lock is currently held somewhere else.

##### §Examples
[code] 
    use tokio::sync::Mutex;
    
    let mutex = Mutex::new(1);
    
    let n = mutex.try_lock()?;
    assert_eq!(*n, 1);
[/code]

#### pub fn get_mut(&mut self) -> [&mut T][20]

Returns a mutable reference to the underlying data.

Since this call borrows the `Mutex` mutably, no actual locking needs to take place – the mutable borrow statically guarantees no locks exist.

##### §Examples
[code] 
    use tokio::sync::Mutex;
    
    fn main() {
        let mut mutex = Mutex::new(1);
    
        let n = mutex.get_mut();
        *n = 2;
    }
[/code]

#### pub fn try_lock_owned( self: [Arc][10]<[Mutex][12]<T>>, ) -> [Result][18]<OwnedMutexGuard<T>, TryLockError>

Attempts to acquire the lock, and returns [`TryLockError`][19] if the lock is currently held somewhere else.

This method is identical to [`Mutex::try_lock`][21], except that the returned guard references the `Mutex` with an [`Arc`][10] rather than by borrowing it. Therefore, the `Mutex` must be wrapped in an `Arc` to call this method, and the guard will live for the `'static` lifetime, as it keeps the `Mutex` alive by holding an `Arc`.

##### §Examples
[code] 
    use tokio::sync::Mutex;
    use std::sync::Arc;
    
    let mutex = Arc::new(Mutex::new(1));
    
    let n = mutex.clone().try_lock_owned()?;
    assert_eq!(*n, 1);
[/code]

#### pub fn into_inner(self) -> T

Consumes the mutex, returning the underlying data.

##### §Examples
[code] 
    use tokio::sync::Mutex;
    
    let mutex = Mutex::new(1);
    
    let n = mutex.into_inner();
    assert_eq!(n, 1);
[/code]

## Trait Implementations§

§

### impl<T> [Debug][22] for [Mutex][12]<T>

where T: [Debug][22] \+ ?[Sized][5],

§

#### fn [fmt][23](&self, f: &mut [Formatter][24]<'_>) -> [Result][18]<[()][25], [Error][26]>

Formats the value using the given formatter. [Read more][23]

§

### impl<T> [Default][27] for [Mutex][12]<T>

where T: [Default][27],

§

#### fn [default][28]() -> [Mutex][12]<T>

Returns the “default value” for a type. [Read more][28]

§

### impl<T> [From][29]<T> for [Mutex][12]<T>

§

#### fn [from][30](s: T) -> [Mutex][12]<T>

Converts to this type from the input type.

§

### impl<T> [Send][31] for [Mutex][12]<T>

where T: [Send][31] \+ ?[Sized][5],

§

### impl<T> [Sync][32] for [Mutex][12]<T>

where T: [Send][31] \+ ?[Sized][5],

## Auto Trait Implementations§

§

### impl<T> ![Freeze][33] for [Mutex][12]<T>

§

### impl<T> ![RefUnwindSafe][34] for [Mutex][12]<T>

§

### impl<T> [Unpin][35] for [Mutex][12]<T>

where T: [Unpin][35] \+ ?[Sized][5],

§

### impl<T> [UnwindSafe][36] for [Mutex][12]<T>

where T: [UnwindSafe][36] \+ ?[Sized][5],

## Blanket Implementations§

[Source][37]§

### impl<T> [Any][38] for T

where T: 'static + ?[Sized][5],

[Source][39]§

#### fn [type_id][40](&self) -> [TypeId][41]

Gets the `TypeId` of `self`. [Read more][40]

[Source][42]§

### impl<T> [Borrow][43]<T> for T

where T: ?[Sized][5],

[Source][44]§

#### fn [borrow][45](&self) -> [&T][20]

Immutably borrows from an owned value. [Read more][45]

[Source][46]§

### impl<T> [BorrowMut][47]<T> for T

where T: ?[Sized][5],

[Source][48]§

#### fn [borrow_mut][49](&mut self) -> [&mut T][20]

Mutably borrows from an owned value. [Read more][49]

[Source][50]§

### impl<T> [From][29]<[!][51]> for T

[Source][52]§

#### fn [from][30](t: [!][51]) -> T

Converts to this type from the input type.

[Source][53]§

### impl<T> [From][29]<T> for T

[Source][54]§

#### fn [from][30](t: T) -> T

Returns the argument unchanged.

[Source][55]§

### impl<T, U> [Into][56]<U> for T

where U: [From][29]<T>,

[Source][57]§

#### fn [into][58](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][29]<T> for U` chooses to do.

[Source][59]§

### impl<T, U> [TryFrom][60]<U> for T

where U: [Into][56]<T>,

[Source][61]§

#### type [Error][62] = [Infallible][63]

The type returned in the event of a conversion error.

[Source][64]§

#### fn [try_from][65](value: U) -> [Result][18]<T, <T as [TryFrom][60]<U>>::[Error][66]>

Performs the conversion.

[Source][67]§

### impl<T, U> [TryInto][68]<U> for T

where U: [TryFrom][60]<T>,

[Source][69]§

#### type [Error][70] = <U as [TryFrom][60]<T>>::[Error][66]

The type returned in the event of a conversion error.

[Source][71]§

#### fn [try_into][72](self) -> [Result][18]<U, <U as [TryFrom][60]<T>>::[Error][66]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [6]: https://doc.rust-lang.org/1.94.1/std/sync/poison/mutex/struct.Mutex.html (struct std::sync::poison::mutex::Mutex)
   [7]: struct.Mutex.html#method.lock (method tauri::async_runtime::Mutex::lock)
   [8]: https://docs.rs/parking_lot
   [9]: https://github.com/tokio-rs/mini-redis/blob/master/src/db.rs
   [10]: https://doc.rust-lang.org/1.94.1/alloc/sync/struct.Arc.html (struct alloc::sync::Arc)
   [11]: struct@MutexGuard
   [12]: struct.Mutex.html (struct tauri::async_runtime::Mutex)
   [13]: crate#unstable-features
   [14]: https://github.com/tokio-rs/console
   [15]: struct.Mutex.html#method.new (associated function tauri::async_runtime::Mutex::new)
   [16]: struct.TokioHandle.html#method.spawn_blocking (method tauri::async_runtime::TokioHandle::spawn_blocking)
   [17]: struct.Mutex.html#method.blocking_lock (method tauri::async_runtime::Mutex::blocking_lock)
   [18]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [19]: TryLockError
   [20]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [21]: struct.Mutex.html#method.try_lock (method tauri::async_runtime::Mutex::try_lock)
   [22]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [23]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [24]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [25]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [26]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [27]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [28]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [29]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [30]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [31]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [32]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [33]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [34]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [35]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [36]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [37]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [38]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [39]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [40]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [41]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [42]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [43]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [44]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [45]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [46]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [47]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [49]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [50]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#802
   [51]: https://doc.rust-lang.org/1.94.1/std/primitive.never.html
   [52]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#803
   [53]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [54]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [55]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [56]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [57]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [58]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [59]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [60]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [61]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [62]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [63]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [64]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [65]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [67]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [69]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [71]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [72]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

