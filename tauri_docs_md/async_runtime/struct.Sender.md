## Sender

[![logo][1]][2]

## [tauri][2]2.10.3

## Sender

### Methods

  * blocking_send
  * capacity
  * closed
  * downgrade
  * is_closed
  * max_capacity
  * reserve
  * reserve_many
  * reserve_owned
  * same_channel
  * send
  * strong_count
  * try_reserve
  * try_reserve_many
  * try_reserve_owned
  * try_send
  * weak_count



### Trait Implementations

  * Clone
  * Debug



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
  * CloneToUninit
  * From<T>
  * Into<U>
  * ToOwned
  * TryFrom<U>
  * TryInto<U>
  * UserEvent



## [In tauri::async_runtime][3]

[tauri][4]::[async_runtime][3]

# Struct Sender Copy item path
[code]
    pub struct Sender<T> { /* private fields */ }
[/code]

Expand description

Sends values to the associated `Receiver`.

Instances are created by the [`channel`][5] function.

To convert the `Sender` into a `Sink` or use it in a poll function, you can use the [`PollSender`][6] utility.

## Implementations§

§

### impl<T> [Sender][7]<T>

#### pub async fn send(&self, value: T) -> [Result][8]<[()][9], SendError<T>>

Sends a value, waiting until there is capacity.

A successful send occurs when it is determined that the other end of the channel has not hung up already. An unsuccessful send would be one where the corresponding receiver has already been closed. Note that a return value of `Err` means that the data will never be received, but a return value of `Ok` does not mean that the data will be received. It is possible for the corresponding receiver to hang up immediately after this function returns `Ok`.

##### §Errors

If the receive half of the channel is closed, either due to [`close`][10] being called or the [`Receiver`][11] handle dropping, the function returns an error. The error includes the value passed to `send`.

##### §Cancel safety

If `send` is used as the event in a [`tokio::select!`][12] statement and some other branch completes first, then it is guaranteed that the message was not sent. **However, in that case, the message is dropped and will be lost.**

To avoid losing messages, use [`reserve`][13] to reserve capacity, then use the returned [`Permit`] to send the message.

This channel uses a queue to ensure that calls to `send` and `reserve` complete in the order they were requested. Cancelling a call to `send` makes you lose your place in the queue.

##### §Examples

In the following example, each call to `send` will block until the previously sent value was received.
[code] 
    use tokio::sync::mpsc;
    
    let (tx, mut rx) = mpsc::channel(1);
    
    tokio::spawn(async move {
        for i in 0..10 {
            if let Err(_) = tx.send(i).await {
                println!("receiver dropped");
                return;
            }
        }
    });
    
    while let Some(i) = rx.recv().await {
        println!("got = {}", i);
    }
[/code]

#### pub async fn closed(&self)

Completes when the receiver has dropped.

This allows the producers to get notified when interest in the produced values is canceled and immediately stop doing work.

##### §Cancel safety

This method is cancel safe. Once the channel is closed, it stays closed forever and all future calls to `closed` will return immediately.

##### §Examples
[code] 
    use tokio::sync::mpsc;
    
    let (tx1, rx) = mpsc::channel::<()>(1);
    let tx2 = tx1.clone();
    let tx3 = tx1.clone();
    let tx4 = tx1.clone();
    let tx5 = tx1.clone();
    tokio::spawn(async move {
        drop(rx);
    });
    
    futures::join!(
        tx1.closed(),
        tx2.closed(),
        tx3.closed(),
        tx4.closed(),
        tx5.closed()
    );
    println!("Receiver dropped");
[/code]

#### pub fn try_send(&self, message: T) -> [Result][8]<[()][9], TrySendError<T>>

Attempts to immediately send a message on this `Sender`.

This method differs from [`send`][14] by returning immediately if the channel’s buffer is full or no receiver is waiting to acquire some data. Compared with [`send`][14], this function has two failure cases instead of one (one for disconnection, one for a full buffer).

##### §Errors

If the channel capacity has been reached, i.e., the channel has `n` buffered values where `n` is the argument passed to [`channel`][5], then an error is returned.

If the receive half of the channel is closed, either due to [`close`][10] being called or the [`Receiver`][11] handle dropping, the function returns an error. The error includes the value passed to `send`.

##### §Examples
[code] 
    use tokio::sync::mpsc;
    
    // Create a channel with buffer size 1
    let (tx1, mut rx) = mpsc::channel(1);
    let tx2 = tx1.clone();
    
    tokio::spawn(async move {
        tx1.send(1).await.unwrap();
        tx1.send(2).await.unwrap();
        // task waits until the receiver receives a value.
    });
    
    tokio::spawn(async move {
        // This will return an error and send
        // no message if the buffer is full
        let _ = tx2.try_send(3);
    });
    
    let mut msg;
    msg = rx.recv().await.unwrap();
    println!("message {} received", msg);
    
    msg = rx.recv().await.unwrap();
    println!("message {} received", msg);
    
    // Third message may have never been sent
    match rx.recv().await {
        Some(msg) => println!("message {} received", msg),
        None => println!("the third message was never sent"),
    }
[/code]

#### pub fn blocking_send(&self, value: T) -> [Result][8]<[()][9], SendError<T>>

Blocking send to call outside of asynchronous contexts.

This method is intended for use cases where you are sending from synchronous code to asynchronous code, and will work even if the receiver is not using [`blocking_recv`][15] to receive the message.

##### §Panics

This function panics if called within an asynchronous execution context.

##### §Examples
[code] 
    use std::thread;
    use tokio::runtime::Runtime;
    use tokio::sync::mpsc;
    
    fn main() {
        let (tx, mut rx) = mpsc::channel::<u8>(1);
    
        let sync_code = thread::spawn(move || {
            tx.blocking_send(10).unwrap();
        });
    
        Runtime::new().unwrap().block_on(async move {
            assert_eq!(Some(10), rx.recv().await);
        });
        sync_code.join().unwrap()
    }
[/code]

#### pub fn is_closed(&self) -> [bool][16]

Checks if the channel has been closed. This happens when the [`Receiver`][11] is dropped, or when the [`Receiver::close`][10] method is called.
[code] 
    let (tx, rx) = tokio::sync::mpsc::channel::<()>(42);
    assert!(!tx.is_closed());
    
    let tx2 = tx.clone();
    assert!(!tx2.is_closed());
    
    drop(rx);
    assert!(tx.is_closed());
    assert!(tx2.is_closed());
[/code]

#### pub async fn reserve(&self) -> [Result][8]<Permit<'_, T>, SendError<[()][9]>>

Waits for channel capacity. Once capacity to send one message is available, it is reserved for the caller.

If the channel is full, the function waits for the number of unreceived messages to become less than the channel capacity. Capacity to send one message is reserved for the caller. A [`Permit`][17] is returned to track the reserved capacity. The [`send`][18] function on [`Permit`][17] consumes the reserved capacity.

Dropping [`Permit`][17] without sending a message releases the capacity back to the channel.

##### §Cancel safety

This channel uses a queue to ensure that calls to `send` and `reserve` complete in the order they were requested. Cancelling a call to `reserve` makes you lose your place in the queue.

##### §Examples
[code] 
    use tokio::sync::mpsc;
    
    let (tx, mut rx) = mpsc::channel(1);
    
    // Reserve capacity
    let permit = tx.reserve().await.unwrap();
    
    // Trying to send directly on the `tx` will fail due to no
    // available capacity.
    assert!(tx.try_send(123).is_err());
    
    // Sending on the permit succeeds
    permit.send(456);
    
    // The value sent on the permit is received
    assert_eq!(rx.recv().await.unwrap(), 456);
[/code]

#### pub async fn reserve_many( &self, n: [usize][19], ) -> [Result][8]<PermitIterator<'_, T>, SendError<[()][9]>>

Waits for channel capacity. Once capacity to send `n` messages is available, it is reserved for the caller.

If the channel is full or if there are fewer than `n` permits available, the function waits for the number of unreceived messages to become `n` less than the channel capacity. Capacity to send `n` message is then reserved for the caller.

A [`PermitIterator`][20] is returned to track the reserved capacity. You can call this [`Iterator`][21] until it is exhausted to get a [`Permit`][17] and then call [`Permit::send`]. This function is similar to [`try_reserve_many`][22] except it waits for the slots to become available.

If the channel is closed, the function returns a [`SendError`].

Dropping [`PermitIterator`][20] without consuming it entirely releases the remaining permits back to the channel.

##### §Cancel safety

This channel uses a queue to ensure that calls to `send` and `reserve_many` complete in the order they were requested. Cancelling a call to `reserve_many` makes you lose your place in the queue.

##### §Examples
[code] 
    use tokio::sync::mpsc;
    
    let (tx, mut rx) = mpsc::channel(2);
    
    // Reserve capacity
    let mut permit = tx.reserve_many(2).await.unwrap();
    
    // Trying to send directly on the `tx` will fail due to no
    // available capacity.
    assert!(tx.try_send(123).is_err());
    
    // Sending with the permit iterator succeeds
    permit.next().unwrap().send(456);
    permit.next().unwrap().send(457);
    
    // The iterator should now be exhausted
    assert!(permit.next().is_none());
    
    // The value sent on the permit is received
    assert_eq!(rx.recv().await.unwrap(), 456);
    assert_eq!(rx.recv().await.unwrap(), 457);
[/code]

#### pub async fn reserve_owned(self) -> [Result][8]<OwnedPermit<T>, SendError<[()][9]>>

Waits for channel capacity, moving the `Sender` and returning an owned permit. Once capacity to send one message is available, it is reserved for the caller.

This moves the sender _by value_ , and returns an owned permit that can be used to send a message into the channel. Unlike [`Sender::reserve`][13], this method may be used in cases where the permit must be valid for the `'static` lifetime. `Sender`s may be cloned cheaply (`Sender::clone` is essentially a reference count increment, comparable to [`Arc::clone`][23]), so when multiple [`OwnedPermit`][24]s are needed or the `Sender` cannot be moved, it can be cloned prior to calling `reserve_owned`.

If the channel is full, the function waits for the number of unreceived messages to become less than the channel capacity. Capacity to send one message is reserved for the caller. An [`OwnedPermit`][24] is returned to track the reserved capacity. The [`send`][25] function on [`OwnedPermit`][24] consumes the reserved capacity.

Dropping the [`OwnedPermit`][24] without sending a message releases the capacity back to the channel.

##### §Cancel safety

This channel uses a queue to ensure that calls to `send` and `reserve` complete in the order they were requested. Cancelling a call to `reserve_owned` makes you lose your place in the queue.

##### §Examples

Sending a message using an [`OwnedPermit`][24]:
[code] 
    use tokio::sync::mpsc;
    
    let (tx, mut rx) = mpsc::channel(1);
    
    // Reserve capacity, moving the sender.
    let permit = tx.reserve_owned().await.unwrap();
    
    // Send a message, consuming the permit and returning
    // the moved sender.
    let tx = permit.send(123);
    
    // The value sent on the permit is received.
    assert_eq!(rx.recv().await.unwrap(), 123);
    
    // The sender can now be used again.
    tx.send(456).await.unwrap();
[/code]

When multiple [`OwnedPermit`][24]s are needed, or the sender cannot be moved by value, it can be inexpensively cloned before calling `reserve_owned`:
[code] 
    use tokio::sync::mpsc;
    
    let (tx, mut rx) = mpsc::channel(1);
    
    // Clone the sender and reserve capacity.
    let permit = tx.clone().reserve_owned().await.unwrap();
    
    // Trying to send directly on the `tx` will fail due to no
    // available capacity.
    assert!(tx.try_send(123).is_err());
    
    // Sending on the permit succeeds.
    permit.send(456);
    
    // The value sent on the permit is received
    assert_eq!(rx.recv().await.unwrap(), 456);
[/code]

#### pub fn try_reserve(&self) -> [Result][8]<Permit<'_, T>, TrySendError<[()][9]>>

Tries to acquire a slot in the channel without waiting for the slot to become available.

If the channel is full this function will return [`TrySendError`], otherwise if there is a slot available it will return a [`Permit`][17] that will then allow you to [`send`][18] on the channel with a guaranteed slot. This function is similar to [`reserve`][13] except it does not await for the slot to become available.

Dropping [`Permit`][17] without sending a message releases the capacity back to the channel.

##### §Examples
[code] 
    use tokio::sync::mpsc;
    
    let (tx, mut rx) = mpsc::channel(1);
    
    // Reserve capacity
    let permit = tx.try_reserve().unwrap();
    
    // Trying to send directly on the `tx` will fail due to no
    // available capacity.
    assert!(tx.try_send(123).is_err());
    
    // Trying to reserve an additional slot on the `tx` will
    // fail because there is no capacity.
    assert!(tx.try_reserve().is_err());
    
    // Sending on the permit succeeds
    permit.send(456);
    
    // The value sent on the permit is received
    assert_eq!(rx.recv().await.unwrap(), 456);
    
[/code]

#### pub fn try_reserve_many( &self, n: [usize][19], ) -> [Result][8]<PermitIterator<'_, T>, TrySendError<[()][9]>>

Tries to acquire `n` slots in the channel without waiting for the slot to become available.

A [`PermitIterator`][20] is returned to track the reserved capacity. You can call this [`Iterator`][21] until it is exhausted to get a [`Permit`] and then call [`Permit::send`]. This function is similar to [`reserve_many`][26] except it does not await for the slots to become available.

If there are fewer than `n` permits available on the channel, then this function will return a [`TrySendError::Full`]. If the channel is closed this function will return a [`TrySendError::Closed`].

Dropping [`PermitIterator`][20] without consuming it entirely releases the remaining permits back to the channel.

##### §Examples
[code] 
    use tokio::sync::mpsc;
    
    let (tx, mut rx) = mpsc::channel(2);
    
    // Reserve capacity
    let mut permit = tx.try_reserve_many(2).unwrap();
    
    // Trying to send directly on the `tx` will fail due to no
    // available capacity.
    assert!(tx.try_send(123).is_err());
    
    // Trying to reserve an additional slot on the `tx` will
    // fail because there is no capacity.
    assert!(tx.try_reserve().is_err());
    
    // Sending with the permit iterator succeeds
    permit.next().unwrap().send(456);
    permit.next().unwrap().send(457);
    
    // The iterator should now be exhausted
    assert!(permit.next().is_none());
    
    // The value sent on the permit is received
    assert_eq!(rx.recv().await.unwrap(), 456);
    assert_eq!(rx.recv().await.unwrap(), 457);
    
    // Trying to call try_reserve_many with 0 will return an empty iterator
    let mut permit = tx.try_reserve_many(0).unwrap();
    assert!(permit.next().is_none());
    
    // Trying to call try_reserve_many with a number greater than the channel
    // capacity will return an error
    let permit = tx.try_reserve_many(3);
    assert!(permit.is_err());
    
    // Trying to call try_reserve_many on a closed channel will return an error
    drop(rx);
    let permit = tx.try_reserve_many(1);
    assert!(permit.is_err());
    
    let permit = tx.try_reserve_many(0);
    assert!(permit.is_err());
[/code]

#### pub fn try_reserve_owned( self, ) -> [Result][8]<OwnedPermit<T>, TrySendError<[Sender][7]<T>>>

Tries to acquire a slot in the channel without waiting for the slot to become available, returning an owned permit.

This moves the sender _by value_ , and returns an owned permit that can be used to send a message into the channel. Unlike [`Sender::try_reserve`][27], this method may be used in cases where the permit must be valid for the `'static` lifetime. `Sender`s may be cloned cheaply (`Sender::clone` is essentially a reference count increment, comparable to [`Arc::clone`][23]), so when multiple [`OwnedPermit`][24]s are needed or the `Sender` cannot be moved, it can be cloned prior to calling `try_reserve_owned`.

If the channel is full this function will return a [`TrySendError`]. Since the sender is taken by value, the `TrySendError` returned in this case contains the sender, so that it may be used again. Otherwise, if there is a slot available, this method will return an [`OwnedPermit`][24] that can then be used to [`send`][25] on the channel with a guaranteed slot. This function is similar to [`reserve_owned`][28] except it does not await for the slot to become available.

Dropping the [`OwnedPermit`][24] without sending a message releases the capacity back to the channel.

##### §Examples
[code] 
    use tokio::sync::mpsc;
    
    let (tx, mut rx) = mpsc::channel(1);
    
    // Reserve capacity
    let permit = tx.clone().try_reserve_owned().unwrap();
    
    // Trying to send directly on the `tx` will fail due to no
    // available capacity.
    assert!(tx.try_send(123).is_err());
    
    // Trying to reserve an additional slot on the `tx` will
    // fail because there is no capacity.
    assert!(tx.try_reserve().is_err());
    
    // Sending on the permit succeeds
    permit.send(456);
    
    // The value sent on the permit is received
    assert_eq!(rx.recv().await.unwrap(), 456);
    
[/code]

#### pub fn same_channel(&self, other: &[Sender][7]<T>) -> [bool][16]

Returns `true` if senders belong to the same channel.

##### §Examples
[code] 
    let (tx, rx) = tokio::sync::mpsc::channel::<()>(1);
    let  tx2 = tx.clone();
    assert!(tx.same_channel(&tx2));
    
    let (tx3, rx3) = tokio::sync::mpsc::channel::<()>(1);
    assert!(!tx3.same_channel(&tx2));
[/code]

#### pub fn capacity(&self) -> [usize][19]

Returns the current capacity of the channel.

The capacity goes down when sending a value by calling [`send`][14] or by reserving capacity with [`reserve`][13]. The capacity goes up when values are received by the [`Receiver`][11]. This is distinct from [`max_capacity`][29], which always returns buffer capacity initially specified when calling [`channel`][5]

##### §Examples
[code] 
    use tokio::sync::mpsc;
    
    let (tx, mut rx) = mpsc::channel::<()>(5);
    
    assert_eq!(tx.capacity(), 5);
    
    // Making a reservation drops the capacity by one.
    let permit = tx.reserve().await.unwrap();
    assert_eq!(tx.capacity(), 4);
    
    // Sending and receiving a value increases the capacity by one.
    permit.send(());
    rx.recv().await.unwrap();
    assert_eq!(tx.capacity(), 5);
[/code]

#### pub fn downgrade(&self) -> WeakSender<T>

Converts the `Sender` to a [`WeakSender`] that does not count towards RAII semantics, i.e. if all `Sender` instances of the channel were dropped and only `WeakSender` instances remain, the channel is closed.

#### pub fn max_capacity(&self) -> [usize][19]

Returns the maximum buffer capacity of the channel.

The maximum capacity is the buffer capacity initially specified when calling [`channel`][5]. This is distinct from [`capacity`][30], which returns the _current_ available buffer capacity: as messages are sent and received, the value returned by [`capacity`][30] will go up or down, whereas the value returned by [`max_capacity`][29] will remain constant.

##### §Examples
[code] 
    use tokio::sync::mpsc;
    
    let (tx, _rx) = mpsc::channel::<()>(5);
    
    // both max capacity and capacity are the same at first
    assert_eq!(tx.max_capacity(), 5);
    assert_eq!(tx.capacity(), 5);
    
    // Making a reservation doesn't change the max capacity.
    let permit = tx.reserve().await.unwrap();
    assert_eq!(tx.max_capacity(), 5);
    // but drops the capacity by one
    assert_eq!(tx.capacity(), 4);
[/code]

#### pub fn strong_count(&self) -> [usize][19]

Returns the number of [`Sender`][7] handles.

#### pub fn weak_count(&self) -> [usize][19]

Returns the number of [`WeakSender`] handles.

## Trait Implementations§

§

### impl<T> [Clone][31] for [Sender][7]<T>

§

#### fn [clone][32](&self) -> [Sender][7]<T>

Returns a duplicate of the value. [Read more][32]

1.0.0 · [Source][33]§

#### fn [clone_from][34](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][34]

§

### impl<T> [Debug][35] for [Sender][7]<T>

§

#### fn [fmt][36](&self, fmt: &mut [Formatter][37]<'_>) -> [Result][8]<[()][9], [Error][38]>

Formats the value using the given formatter. [Read more][36]

## Auto Trait Implementations§

§

### impl<T> [Freeze][39] for [Sender][7]<T>

§

### impl<T> [RefUnwindSafe][40] for [Sender][7]<T>

§

### impl<T> [Send][41] for [Sender][7]<T>

where T: [Send][41],

§

### impl<T> [Sync][42] for [Sender][7]<T>

where T: [Send][41],

§

### impl<T> [Unpin][43] for [Sender][7]<T>

§

### impl<T> [UnwindSafe][44] for [Sender][7]<T>

## Blanket Implementations§

[Source][45]§

### impl<T> [Any][46] for T

where T: 'static + ?[Sized][47],

[Source][48]§

#### fn [type_id][49](&self) -> [TypeId][50]

Gets the `TypeId` of `self`. [Read more][49]

[Source][51]§

### impl<T> [Borrow][52]<T> for T

where T: ?[Sized][47],

[Source][53]§

#### fn [borrow][54](&self) -> [&T][55]

Immutably borrows from an owned value. [Read more][54]

[Source][56]§

### impl<T> [BorrowMut][57]<T> for T

where T: ?[Sized][47],

[Source][58]§

#### fn [borrow_mut][59](&mut self) -> [&mut T][55]

Mutably borrows from an owned value. [Read more][59]

[Source][60]§

### impl<T> [CloneToUninit][61] for T

where T: [Clone][31],

[Source][62]§

#### unsafe fn [clone_to_uninit][63](&self, dest: [*mut ][64][u8][65])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][63]

[Source][66]§

### impl<T> [From][67]<T> for T

[Source][68]§

#### fn [from][69](t: T) -> T

Returns the argument unchanged.

[Source][70]§

### impl<T, U> [Into][71]<U> for T

where U: [From][67]<T>,

[Source][72]§

#### fn [into][73](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][67]<T> for U` chooses to do.

[Source][74]§

### impl<T> [ToOwned][75] for T

where T: [Clone][31],

[Source][76]§

#### type [Owned][77] = T

The resulting type after obtaining ownership.

[Source][78]§

#### fn [to_owned][79](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][79]

[Source][80]§

#### fn [clone_into][81](&self, target: [&mut T][55])

Uses borrowed data to replace owned data, usually by cloning. [Read more][81]

[Source][82]§

### impl<T, U> [TryFrom][83]<U> for T

where U: [Into][71]<T>,

[Source][84]§

#### type [Error][85] = [Infallible][86]

The type returned in the event of a conversion error.

[Source][87]§

#### fn [try_from][88](value: U) -> [Result][8]<T, <T as [TryFrom][83]<U>>::[Error][89]>

Performs the conversion.

[Source][90]§

### impl<T, U> [TryInto][91]<U> for T

where U: [TryFrom][83]<T>,

[Source][92]§

#### type [Error][93] = <U as [TryFrom][83]<T>>::[Error][89]

The type returned in the event of a conversion error.

[Source][94]§

#### fn [try_into][95](self) -> [Result][8]<U, <U as [TryFrom][83]<T>>::[Error][89]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][35] \+ [Clone][31] \+ [Send][41] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: fn.channel.html (fn tauri::async_runtime::channel)
   [6]: https://docs.rs/tokio-util/latest/tokio_util/sync/struct.PollSender.html
   [7]: struct.Sender.html (struct tauri::async_runtime::Sender)
   [8]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [9]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [10]: struct.Receiver.html#method.close (method tauri::async_runtime::Receiver::close)
   [11]: struct.Receiver.html (struct tauri::async_runtime::Receiver)
   [12]: crate::select
   [13]: struct.Sender.html#method.reserve (method tauri::async_runtime::Sender::reserve)
   [14]: struct.Sender.html#method.send (method tauri::async_runtime::Sender::send)
   [15]: struct.Receiver.html#method.blocking_recv (method tauri::async_runtime::Receiver::blocking_recv)
   [16]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [17]: Permit
   [18]: Permit::send
   [19]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [20]: PermitIterator
   [21]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html (trait core::iter::traits::iterator::Iterator)
   [22]: struct.Sender.html#method.try_reserve_many (method tauri::async_runtime::Sender::try_reserve_many)
   [23]: https://doc.rust-lang.org/1.94.1/alloc/sync/struct.Arc.html#method.clone (method alloc::sync::Arc::clone)
   [24]: OwnedPermit
   [25]: OwnedPermit::send
   [26]: struct.Sender.html#method.reserve_many (method tauri::async_runtime::Sender::reserve_many)
   [27]: struct.Sender.html#method.try_reserve (method tauri::async_runtime::Sender::try_reserve)
   [28]: struct.Sender.html#method.reserve_owned (method tauri::async_runtime::Sender::reserve_owned)
   [29]: struct.Sender.html#method.max_capacity (method tauri::async_runtime::Sender::max_capacity)
   [30]: struct.Sender.html#method.capacity (method tauri::async_runtime::Sender::capacity)
   [31]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [32]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [33]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [34]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [35]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [36]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [37]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [38]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [39]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [40]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [41]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [42]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [43]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [44]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [45]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [46]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [47]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [49]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [50]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [51]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [52]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [54]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [55]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [56]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [57]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [59]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [60]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [61]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [62]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [63]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [64]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [65]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [66]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [67]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [68]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [69]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [70]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [72]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [74]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [75]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [76]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [77]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [78]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [79]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [80]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [81]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [82]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [83]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [84]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [85]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [86]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [87]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [88]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [89]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [90]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [91]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [92]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [93]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [94]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [95]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

