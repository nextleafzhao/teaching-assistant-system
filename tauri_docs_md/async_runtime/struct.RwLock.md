## RwLock

[![logo][1]][2]

## [tauri][2]2.10.3

## RwLock

### Sections

  * Examples



### Methods

  * blocking_read
  * blocking_write
  * const_new
  * const_with_max_readers
  * get_mut
  * into_inner
  * new
  * read
  * read_owned
  * try_read
  * try_read_owned
  * try_write
  * try_write_owned
  * with_max_readers
  * write
  * write_owned



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

# Struct RwLock Copy item path
[code]
    pub struct RwLock<T>
    
    where
        T: ?[Sized][5],
    
    { /* private fields */ }
[/code]

Expand description

An asynchronous reader-writer lock.

This type of lock allows a number of readers or at most one writer at any point in time. The write portion of this lock typically allows modification of the underlying data (exclusive access) and the read portion of this lock typically allows for read-only access (shared access).

In comparison, a [`Mutex`][6] does not distinguish between readers or writers that acquire the lock, therefore causing any tasks waiting for the lock to become available to yield. An `RwLock` will allow any number of readers to acquire the lock as long as a writer is not holding the lock.

The priority policy of Tokio’s read-write lock is _fair_ (or [_write-preferring_][7]), in order to ensure that readers cannot starve writers. Fairness is ensured using a first-in, first-out queue for the tasks awaiting the lock; a read lock will not be given out until all write lock requests that were queued before it have been acquired and released. This is in contrast to the Rust standard library’s `std::sync::RwLock`, where the priority policy is dependent on the operating system’s implementation.

The type parameter `T` represents the data that this lock protects. It is required that `T` satisfies [`Send`][8] to be shared across threads. The RAII guards returned from the locking methods implement [`Deref`][9] (and [`DerefMut`][10] for the `write` methods) to allow access to the content of the lock.

## §Examples
[code] 
    use tokio::sync::RwLock;
    
    let lock = RwLock::new(5);
    
    // many reader locks can be held at once
    {
        let r1 = lock.read().await;
        let r2 = lock.read().await;
        assert_eq!(*r1, 5);
        assert_eq!(*r2, 5);
    } // read locks are dropped at this point
    
    // only one write lock may be held, however
    {
        let mut w = lock.write().await;
        *w += 1;
        assert_eq!(*w, 6);
    } // write lock is dropped here
[/code]

## Implementations§

§

### impl<T> [RwLock][11]<T>

where T: ?[Sized][5],

#### pub fn new(value: T) -> [RwLock][11]<T>

Creates a new instance of an `RwLock<T>` which is unlocked.

##### §Examples
[code] 
    use tokio::sync::RwLock;
    
    let lock = RwLock::new(5);
[/code]

#### pub fn with_max_readers(value: T, max_reads: [u32][12]) -> [RwLock][11]<T>

Creates a new instance of an `RwLock<T>` which is unlocked and allows a maximum of `max_reads` concurrent readers.

##### §Examples
[code] 
    use tokio::sync::RwLock;
    
    let lock = RwLock::with_max_readers(5, 1024);
[/code]

##### §Panics

Panics if `max_reads` is more than `u32::MAX >> 3`.

#### pub const fn const_new(value: T) -> [RwLock][11]<T>

Creates a new instance of an `RwLock<T>` which is unlocked.

When using the `tracing` [unstable feature][13], a `RwLock` created with `const_new` will not be instrumented. As such, it will not be visible in [`tokio-console`][14]. Instead, [`RwLock::new`][15] should be used to create an instrumented object if that is needed.

##### §Examples
[code] 
    use tokio::sync::RwLock;
    
    static LOCK: RwLock<i32> = RwLock::const_new(5);
[/code]

#### pub const fn const_with_max_readers(value: T, max_reads: [u32][12]) -> [RwLock][11]<T>

Creates a new instance of an `RwLock<T>` which is unlocked and allows a maximum of `max_reads` concurrent readers.

##### §Examples
[code] 
    use tokio::sync::RwLock;
    
    static LOCK: RwLock<i32> = RwLock::const_with_max_readers(5, 1024);
[/code]

#### pub async fn read(&self) -> RwLockReadGuard<'_, T>

Locks this `RwLock` with shared read access, causing the current task to yield until the lock has been acquired.

The calling task will yield until there are no writers which hold the lock. There may be other readers inside the lock when the task resumes.

Note that under the priority policy of [`RwLock`][11], read locks are not granted until prior write locks, to prevent starvation. Therefore deadlock may occur if a read lock is held by the current task, a write lock attempt is made, and then a subsequent read lock attempt is made by the current task.

Returns an RAII guard which will drop this read access of the `RwLock` when dropped.

##### §Cancel safety

This method uses a queue to fairly distribute locks in the order they were requested. Cancelling a call to `read` makes you lose your place in the queue.

##### §Examples
[code] 
    use std::sync::Arc;
    use tokio::sync::RwLock;
    
    let lock = Arc::new(RwLock::new(1));
    let c_lock = lock.clone();
    
    let n = lock.read().await;
    assert_eq!(*n, 1);
    
    tokio::spawn(async move {
        // While main has an active read lock, we acquire one too.
        let r = c_lock.read().await;
        assert_eq!(*r, 1);
    }).await.expect("The spawned task has panicked");
    
    // Drop the guard after the spawned task finishes.
    drop(n);
[/code]

#### pub fn blocking_read(&self) -> RwLockReadGuard<'_, T>

Blockingly locks this `RwLock` with shared read access.

This method is intended for use cases where you need to use this rwlock in asynchronous code as well as in synchronous code.

Returns an RAII guard which will drop the read access of this `RwLock` when dropped.

##### §Panics

This function panics if called within an asynchronous execution context.

  * If you find yourself in an asynchronous execution context and needing to call some (synchronous) function which performs one of these `blocking_` operations, then consider wrapping that call inside [`spawn_blocking()`][16] (or [`block_in_place()`][crate::task::block_in_place]).



##### §Examples
[code] 
    use std::sync::Arc;
    use tokio::sync::RwLock;
    
    #[tokio::main]
    async fn main() {
        let rwlock = Arc::new(RwLock::new(1));
        let mut write_lock = rwlock.write().await;
    
        let blocking_task = tokio::task::spawn_blocking({
            let rwlock = Arc::clone(&rwlock);
            move || {
                // This shall block until the `write_lock` is released.
                let read_lock = rwlock.blocking_read();
                assert_eq!(*read_lock, 0);
            }
        });
    
        *write_lock -= 1;
        drop(write_lock); // release the lock.
    
        // Await the completion of the blocking task.
        blocking_task.await.unwrap();
    
        // Assert uncontended.
        assert!(rwlock.try_write().is_ok());
    }
[/code]

#### pub async fn read_owned(self: [Arc][17]<[RwLock][11]<T>>) -> OwnedRwLockReadGuard<T>

Locks this `RwLock` with shared read access, causing the current task to yield until the lock has been acquired.

The calling task will yield until there are no writers which hold the lock. There may be other readers inside the lock when the task resumes.

This method is identical to [`RwLock::read`][18], except that the returned guard references the `RwLock` with an [`Arc`][17] rather than by borrowing it. Therefore, the `RwLock` must be wrapped in an `Arc` to call this method, and the guard will live for the `'static` lifetime, as it keeps the `RwLock` alive by holding an `Arc`.

Note that under the priority policy of [`RwLock`][11], read locks are not granted until prior write locks, to prevent starvation. Therefore deadlock may occur if a read lock is held by the current task, a write lock attempt is made, and then a subsequent read lock attempt is made by the current task.

Returns an RAII guard which will drop this read access of the `RwLock` when dropped.

##### §Cancel safety

This method uses a queue to fairly distribute locks in the order they were requested. Cancelling a call to `read_owned` makes you lose your place in the queue.

##### §Examples
[code] 
    use std::sync::Arc;
    use tokio::sync::RwLock;
    
    let lock = Arc::new(RwLock::new(1));
    let c_lock = lock.clone();
    
    let n = lock.read_owned().await;
    assert_eq!(*n, 1);
    
    tokio::spawn(async move {
        // While main has an active read lock, we acquire one too.
        let r = c_lock.read_owned().await;
        assert_eq!(*r, 1);
    }).await.expect("The spawned task has panicked");
    
    // Drop the guard after the spawned task finishes.
    drop(n);
    }
[/code]

#### pub fn try_read(&self) -> [Result][19]<RwLockReadGuard<'_, T>, TryLockError>

Attempts to acquire this `RwLock` with shared read access.

If the access couldn’t be acquired immediately, returns [`TryLockError`][20]. Otherwise, an RAII guard is returned which will release read access when dropped.

##### §Examples
[code] 
    use std::sync::Arc;
    use tokio::sync::RwLock;
    
    let lock = Arc::new(RwLock::new(1));
    let c_lock = lock.clone();
    
    let v = lock.try_read().unwrap();
    assert_eq!(*v, 1);
    
    tokio::spawn(async move {
        // While main has an active read lock, we acquire one too.
        let n = c_lock.read().await;
        assert_eq!(*n, 1);
    }).await.expect("The spawned task has panicked");
    
    // Drop the guard when spawned task finishes.
    drop(v);
[/code]

#### pub fn try_read_owned( self: [Arc][17]<[RwLock][11]<T>>, ) -> [Result][19]<OwnedRwLockReadGuard<T>, TryLockError>

Attempts to acquire this `RwLock` with shared read access.

If the access couldn’t be acquired immediately, returns [`TryLockError`][20]. Otherwise, an RAII guard is returned which will release read access when dropped.

This method is identical to [`RwLock::try_read`][21], except that the returned guard references the `RwLock` with an [`Arc`][17] rather than by borrowing it. Therefore, the `RwLock` must be wrapped in an `Arc` to call this method, and the guard will live for the `'static` lifetime, as it keeps the `RwLock` alive by holding an `Arc`.

##### §Examples
[code] 
    use std::sync::Arc;
    use tokio::sync::RwLock;
    
    let lock = Arc::new(RwLock::new(1));
    let c_lock = lock.clone();
    
    let v = lock.try_read_owned().unwrap();
    assert_eq!(*v, 1);
    
    tokio::spawn(async move {
        // While main has an active read lock, we acquire one too.
        let n = c_lock.read_owned().await;
        assert_eq!(*n, 1);
    }).await.expect("The spawned task has panicked");
    
    // Drop the guard when spawned task finishes.
    drop(v);
[/code]

#### pub async fn write(&self) -> RwLockWriteGuard<'_, T>

Locks this `RwLock` with exclusive write access, causing the current task to yield until the lock has been acquired.

The calling task will yield while other writers or readers currently have access to the lock.

Returns an RAII guard which will drop the write access of this `RwLock` when dropped.

##### §Cancel safety

This method uses a queue to fairly distribute locks in the order they were requested. Cancelling a call to `write` makes you lose your place in the queue.

##### §Examples
[code] 
    use tokio::sync::RwLock;
    
    let lock = RwLock::new(1);
    
    let mut n = lock.write().await;
    *n = 2;
[/code]

#### pub fn blocking_write(&self) -> RwLockWriteGuard<'_, T>

Blockingly locks this `RwLock` with exclusive write access.

This method is intended for use cases where you need to use this rwlock in asynchronous code as well as in synchronous code.

Returns an RAII guard which will drop the write access of this `RwLock` when dropped.

##### §Panics

This function panics if called within an asynchronous execution context.

  * If you find yourself in an asynchronous execution context and needing to call some (synchronous) function which performs one of these `blocking_` operations, then consider wrapping that call inside [`spawn_blocking()`][16] (or [`block_in_place()`][crate::task::block_in_place]).



##### §Examples
[code] 
    use std::sync::Arc;
    use tokio::{sync::RwLock};
    
    #[tokio::main]
    async fn main() {
        let rwlock =  Arc::new(RwLock::new(1));
        let read_lock = rwlock.read().await;
    
        let blocking_task = tokio::task::spawn_blocking({
            let rwlock = Arc::clone(&rwlock);
            move || {
                // This shall block until the `read_lock` is released.
                let mut write_lock = rwlock.blocking_write();
                *write_lock = 2;
            }
        });
    
        assert_eq!(*read_lock, 1);
        // Release the last outstanding read lock.
        drop(read_lock);
    
        // Await the completion of the blocking task.
        blocking_task.await.unwrap();
    
        // Assert uncontended.
        let read_lock = rwlock.try_read().unwrap();
        assert_eq!(*read_lock, 2);
    }
[/code]

#### pub async fn write_owned(self: [Arc][17]<[RwLock][11]<T>>) -> OwnedRwLockWriteGuard<T>

Locks this `RwLock` with exclusive write access, causing the current task to yield until the lock has been acquired.

The calling task will yield while other writers or readers currently have access to the lock.

This method is identical to [`RwLock::write`][22], except that the returned guard references the `RwLock` with an [`Arc`][17] rather than by borrowing it. Therefore, the `RwLock` must be wrapped in an `Arc` to call this method, and the guard will live for the `'static` lifetime, as it keeps the `RwLock` alive by holding an `Arc`.

Returns an RAII guard which will drop the write access of this `RwLock` when dropped.

##### §Cancel safety

This method uses a queue to fairly distribute locks in the order they were requested. Cancelling a call to `write_owned` makes you lose your place in the queue.

##### §Examples
[code] 
    use std::sync::Arc;
    use tokio::sync::RwLock;
    
    let lock = Arc::new(RwLock::new(1));
    
    let mut n = lock.write_owned().await;
    *n = 2;
    }
[/code]

#### pub fn try_write(&self) -> [Result][19]<RwLockWriteGuard<'_, T>, TryLockError>

Attempts to acquire this `RwLock` with exclusive write access.

If the access couldn’t be acquired immediately, returns [`TryLockError`][20]. Otherwise, an RAII guard is returned which will release write access when dropped.

##### §Examples
[code] 
    use tokio::sync::RwLock;
    
    let rw = RwLock::new(1);
    
    let v = rw.read().await;
    assert_eq!(*v, 1);
    
    assert!(rw.try_write().is_err());
[/code]

#### pub fn try_write_owned( self: [Arc][17]<[RwLock][11]<T>>, ) -> [Result][19]<OwnedRwLockWriteGuard<T>, TryLockError>

Attempts to acquire this `RwLock` with exclusive write access.

If the access couldn’t be acquired immediately, returns [`TryLockError`][20]. Otherwise, an RAII guard is returned which will release write access when dropped.

This method is identical to [`RwLock::try_write`][23], except that the returned guard references the `RwLock` with an [`Arc`][17] rather than by borrowing it. Therefore, the `RwLock` must be wrapped in an `Arc` to call this method, and the guard will live for the `'static` lifetime, as it keeps the `RwLock` alive by holding an `Arc`.

##### §Examples
[code] 
    use std::sync::Arc;
    use tokio::sync::RwLock;
    
    let rw = Arc::new(RwLock::new(1));
    
    let v = Arc::clone(&rw).read_owned().await;
    assert_eq!(*v, 1);
    
    assert!(rw.try_write_owned().is_err());
[/code]

#### pub fn get_mut(&mut self) -> [&mut T][24]

Returns a mutable reference to the underlying data.

Since this call borrows the `RwLock` mutably, no actual locking needs to take place – the mutable borrow statically guarantees no locks exist.

##### §Examples
[code] 
    use tokio::sync::RwLock;
    
    fn main() {
        let mut lock = RwLock::new(1);
    
        let n = lock.get_mut();
        *n = 2;
    }
[/code]

#### pub fn into_inner(self) -> T

Consumes the lock, returning the underlying data.

## Trait Implementations§

§

### impl<T> [Debug][25] for [RwLock][11]<T>

where T: [Debug][25] \+ ?[Sized][5],

§

#### fn [fmt][26](&self, f: &mut [Formatter][27]<'_>) -> [Result][19]<[()][28], [Error][29]>

Formats the value using the given formatter. [Read more][26]

§

### impl<T> [Default][30] for [RwLock][11]<T>

where T: [Default][30],

§

#### fn [default][31]() -> [RwLock][11]<T>

Returns the “default value” for a type. [Read more][31]

§

### impl<T> [From][32]<T> for [RwLock][11]<T>

§

#### fn [from][33](s: T) -> [RwLock][11]<T>

Converts to this type from the input type.

§

### impl<T> [Send][8] for [RwLock][11]<T>

where T: [Send][8] \+ ?[Sized][5],

§

### impl<T> [Sync][34] for [RwLock][11]<T>

where T: [Send][8] \+ [Sync][34] \+ ?[Sized][5],

## Auto Trait Implementations§

§

### impl<T> ![Freeze][35] for [RwLock][11]<T>

§

### impl<T> ![RefUnwindSafe][36] for [RwLock][11]<T>

§

### impl<T> [Unpin][37] for [RwLock][11]<T>

where T: [Unpin][37] \+ ?[Sized][5],

§

### impl<T> [UnwindSafe][38] for [RwLock][11]<T>

where T: [UnwindSafe][38] \+ ?[Sized][5],

## Blanket Implementations§

[Source][39]§

### impl<T> [Any][40] for T

where T: 'static + ?[Sized][5],

[Source][41]§

#### fn [type_id][42](&self) -> [TypeId][43]

Gets the `TypeId` of `self`. [Read more][42]

[Source][44]§

### impl<T> [Borrow][45]<T> for T

where T: ?[Sized][5],

[Source][46]§

#### fn [borrow][47](&self) -> [&T][24]

Immutably borrows from an owned value. [Read more][47]

[Source][48]§

### impl<T> [BorrowMut][49]<T> for T

where T: ?[Sized][5],

[Source][50]§

#### fn [borrow_mut][51](&mut self) -> [&mut T][24]

Mutably borrows from an owned value. [Read more][51]

[Source][52]§

### impl<T> [From][32]<[!][53]> for T

[Source][54]§

#### fn [from][33](t: [!][53]) -> T

Converts to this type from the input type.

[Source][55]§

### impl<T> [From][32]<T> for T

[Source][56]§

#### fn [from][33](t: T) -> T

Returns the argument unchanged.

[Source][57]§

### impl<T, U> [Into][58]<U> for T

where U: [From][32]<T>,

[Source][59]§

#### fn [into][60](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][32]<T> for U` chooses to do.

[Source][61]§

### impl<T, U> [TryFrom][62]<U> for T

where U: [Into][58]<T>,

[Source][63]§

#### type [Error][64] = [Infallible][65]

The type returned in the event of a conversion error.

[Source][66]§

#### fn [try_from][67](value: U) -> [Result][19]<T, <T as [TryFrom][62]<U>>::[Error][68]>

Performs the conversion.

[Source][69]§

### impl<T, U> [TryInto][70]<U> for T

where U: [TryFrom][62]<T>,

[Source][71]§

#### type [Error][72] = <U as [TryFrom][62]<T>>::[Error][68]

The type returned in the event of a conversion error.

[Source][73]§

#### fn [try_into][74](self) -> [Result][19]<U, <U as [TryFrom][62]<T>>::[Error][68]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [6]: struct.Mutex.html (struct tauri::async_runtime::Mutex)
   [7]: https://en.wikipedia.org/wiki/Readers%E2%80%93writer_lock#Priority_policies
   [8]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [9]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html (trait core::ops::deref::Deref)
   [10]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.DerefMut.html (trait core::ops::deref::DerefMut)
   [11]: struct.RwLock.html (struct tauri::async_runtime::RwLock)
   [12]: https://doc.rust-lang.org/1.94.1/std/primitive.u32.html
   [13]: crate#unstable-features
   [14]: https://github.com/tokio-rs/console
   [15]: struct.RwLock.html#method.new (associated function tauri::async_runtime::RwLock::new)
   [16]: struct.TokioHandle.html#method.spawn_blocking (method tauri::async_runtime::TokioHandle::spawn_blocking)
   [17]: https://doc.rust-lang.org/1.94.1/alloc/sync/struct.Arc.html (struct alloc::sync::Arc)
   [18]: struct.RwLock.html#method.read (method tauri::async_runtime::RwLock::read)
   [19]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [20]: TryLockError
   [21]: struct.RwLock.html#method.try_read (method tauri::async_runtime::RwLock::try_read)
   [22]: struct.RwLock.html#method.write (method tauri::async_runtime::RwLock::write)
   [23]: struct.RwLock.html#method.try_write (method tauri::async_runtime::RwLock::try_write)
   [24]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [25]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [26]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [27]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [28]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [29]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [30]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [31]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [32]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [33]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [34]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [35]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [36]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [37]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [38]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [39]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [40]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [41]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [42]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [43]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [44]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [45]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [47]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [48]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [49]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [50]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [51]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [52]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#802
   [53]: https://doc.rust-lang.org/1.94.1/std/primitive.never.html
   [54]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#803
   [55]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [56]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [57]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [58]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [59]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [60]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [61]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [62]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [63]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [65]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [66]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [67]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [69]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [71]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [72]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [73]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [74]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

