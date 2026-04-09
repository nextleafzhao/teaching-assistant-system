## Receiver

[![logo][1]][2]

## [tauri][2]2.10.3

## Receiver

### Methods

  * blocking_recv
  * blocking_recv_many
  * capacity
  * close
  * is_closed
  * is_empty
  * len
  * max_capacity
  * poll_recv
  * poll_recv_many
  * recv
  * recv_many
  * sender_strong_count
  * sender_weak_count
  * try_recv



### Trait Implementations

  * Debug
  * Unpin



### Auto Trait Implementations

  * Freeze
  * RefUnwindSafe
  * Send
  * Sync
  * UnwindSafe



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

# Struct Receiver Copy item path
[code]
    pub struct Receiver<T> { /* private fields */ }
[/code]

Expand description

Receives values from the associated `Sender`.

Instances are created by the [`channel`][5] function.

This receiver can be turned into a `Stream` using [`ReceiverStream`][6].

## Implementations§

§

### impl<T> [Receiver][7]<T>

#### pub async fn recv(&mut self) -> [Option][8]<T>

Receives the next value for this receiver.

This method returns `None` if the channel has been closed and there are no remaining messages in the channel’s buffer. This indicates that no further values can ever be received from this `Receiver`. The channel is closed when all senders have been dropped, or when [`close`][9] is called.

If there are no messages in the channel’s buffer, but the channel has not yet been closed, this method will sleep until a message is sent or the channel is closed. Note that if [`close`][9] is called, but there are still outstanding [`Permits`][10] from before it was closed, the channel is not considered closed by `recv` until the permits are released.

##### §Cancel safety

This method is cancel safe. If `recv` is used as the event in a [`tokio::select!`][11] statement and some other branch completes first, it is guaranteed that no messages were received on this channel.

##### §Examples
[code] 
    use tokio::sync::mpsc;
    
    let (tx, mut rx) = mpsc::channel(100);
    
    tokio::spawn(async move {
        tx.send("hello").await.unwrap();
    });
    
    assert_eq!(Some("hello"), rx.recv().await);
    assert_eq!(None, rx.recv().await);
[/code]

Values are buffered:
[code] 
    use tokio::sync::mpsc;
    
    let (tx, mut rx) = mpsc::channel(100);
    
    tx.send("hello").await.unwrap();
    tx.send("world").await.unwrap();
    
    assert_eq!(Some("hello"), rx.recv().await);
    assert_eq!(Some("world"), rx.recv().await);
[/code]

#### pub async fn recv_many(&mut self, buffer: &mut [Vec][12]<T>, limit: [usize][13]) -> [usize][13]

Receives the next values for this receiver and extends `buffer`.

This method extends `buffer` by no more than a fixed number of values as specified by `limit`. If `limit` is zero, the function immediately returns `0`. The return value is the number of values added to `buffer`.

For `limit > 0`, if there are no messages in the channel’s queue, but the channel has not yet been closed, this method will sleep until a message is sent or the channel is closed. Note that if [`close`][9] is called, but there are still outstanding [`Permits`][10] from before it was closed, the channel is not considered closed by `recv_many` until the permits are released.

For non-zero values of `limit`, this method will never return `0` unless the channel has been closed and there are no remaining messages in the channel’s queue. This indicates that no further values can ever be received from this `Receiver`. The channel is closed when all senders have been dropped, or when [`close`][9] is called.

The capacity of `buffer` is increased as needed.

##### §Cancel safety

This method is cancel safe. If `recv_many` is used as the event in a [`tokio::select!`][11] statement and some other branch completes first, it is guaranteed that no messages were received on this channel.

##### §Examples
[code] 
    use tokio::sync::mpsc;
    
    let mut buffer: Vec<&str> = Vec::with_capacity(2);
    let limit = 2;
    let (tx, mut rx) = mpsc::channel(100);
    let tx2 = tx.clone();
    tx2.send("first").await.unwrap();
    tx2.send("second").await.unwrap();
    tx2.send("third").await.unwrap();
    
    // Call `recv_many` to receive up to `limit` (2) values.
    assert_eq!(2, rx.recv_many(&mut buffer, limit).await);
    assert_eq!(vec!["first", "second"], buffer);
    
    // If the buffer is full, the next call to `recv_many`
    // reserves additional capacity.
    assert_eq!(1, rx.recv_many(&mut buffer, 1).await);
    
    tokio::spawn(async move {
        tx.send("fourth").await.unwrap();
    });
    
    // 'tx' is dropped, but `recv_many`
    // is guaranteed not to return 0 as the channel
    // is not yet closed.
    assert_eq!(1, rx.recv_many(&mut buffer, 1).await);
    assert_eq!(vec!["first", "second", "third", "fourth"], buffer);
    
    // Once the last sender is dropped, the channel is
    // closed and `recv_many` returns 0, capacity unchanged.
    drop(tx2);
    assert_eq!(0, rx.recv_many(&mut buffer, limit).await);
    assert_eq!(vec!["first", "second", "third", "fourth"], buffer);
[/code]

#### pub fn try_recv(&mut self) -> [Result][14]<T, TryRecvError>

Tries to receive the next value for this receiver.

This method returns the [`Empty`][15] error if the channel is currently empty, but there are still outstanding [senders][16] or [permits][17].

This method returns the [`Disconnected`][18] error if the channel is currently empty, and there are no outstanding [senders][16] or [permits][17].

Unlike the [`poll_recv`][19] method, this method will never return an [`Empty`][15] error spuriously.

##### §Examples
[code] 
    use tokio::sync::mpsc;
    use tokio::sync::mpsc::error::TryRecvError;
    
    let (tx, mut rx) = mpsc::channel(100);
    
    tx.send("hello").await.unwrap();
    
    assert_eq!(Ok("hello"), rx.try_recv());
    assert_eq!(Err(TryRecvError::Empty), rx.try_recv());
    
    tx.send("hello").await.unwrap();
    // Drop the last sender, closing the channel.
    drop(tx);
    
    assert_eq!(Ok("hello"), rx.try_recv());
    assert_eq!(Err(TryRecvError::Disconnected), rx.try_recv());
[/code]

#### pub fn blocking_recv(&mut self) -> [Option][8]<T>

Blocking receive to call outside of asynchronous contexts.

This method returns `None` if the channel has been closed and there are no remaining messages in the channel’s buffer. This indicates that no further values can ever be received from this `Receiver`. The channel is closed when all senders have been dropped, or when [`close`][9] is called.

If there are no messages in the channel’s buffer, but the channel has not yet been closed, this method will block until a message is sent or the channel is closed.

This method is intended for use cases where you are sending from asynchronous code to synchronous code, and will work even if the sender is not using [`blocking_send`][20] to send the message.

Note that if [`close`][9] is called, but there are still outstanding [`Permits`][10] from before it was closed, the channel is not considered closed by `blocking_recv` until the permits are released.

##### §Panics

This function panics if called within an asynchronous execution context.

##### §Examples
[code] 
    use std::thread;
    use tokio::runtime::Runtime;
    use tokio::sync::mpsc;
    
    fn main() {
        let (tx, mut rx) = mpsc::channel::<u8>(10);
    
        let sync_code = thread::spawn(move || {
            assert_eq!(Some(10), rx.blocking_recv());
        });
    
        Runtime::new()
            .unwrap()
            .block_on(async move {
                let _ = tx.send(10).await;
            });
        sync_code.join().unwrap()
    }
[/code]

#### pub fn blocking_recv_many(&mut self, buffer: &mut [Vec][12]<T>, limit: [usize][13]) -> [usize][13]

Variant of [`Self::recv_many`][21] for blocking contexts.

The same conditions as in [`Self::blocking_recv`][22] apply.

#### pub fn close(&mut self)

Closes the receiving half of a channel without dropping it.

This prevents any further messages from being sent on the channel while still enabling the receiver to drain messages that are buffered. Any outstanding [`Permit`][23] values will still be able to send messages.

To guarantee that no messages are dropped, after calling `close()`, `recv()` must be called until `None` is returned. If there are outstanding [`Permit`][23] or [`OwnedPermit`][24] values, the `recv` method will not return `None` until those are released.

##### §Examples
[code] 
    use tokio::sync::mpsc;
    
    let (tx, mut rx) = mpsc::channel(20);
    
    tokio::spawn(async move {
        let mut i = 0;
        while let Ok(permit) = tx.reserve().await {
            permit.send(i);
            i += 1;
        }
    });
    
    rx.close();
    
    while let Some(msg) = rx.recv().await {
        println!("got {}", msg);
    }
    
    // Channel closed and no messages are lost.
[/code]

#### pub fn is_closed(&self) -> [bool][25]

Checks if a channel is closed.

This method returns `true` if the channel has been closed. The channel is closed when all [`Sender`][16] have been dropped, or when [`Receiver::close`][9] is called.

##### §Examples
[code] 
    use tokio::sync::mpsc;
    
    let (_tx, mut rx) = mpsc::channel::<()>(10);
    assert!(!rx.is_closed());
    
    rx.close();
    
    assert!(rx.is_closed());
[/code]

#### pub fn is_empty(&self) -> [bool][25]

Checks if a channel is empty.

This method returns `true` if the channel has no messages.

##### §Examples
[code] 
    use tokio::sync::mpsc;
    
    let (tx, rx) = mpsc::channel(10);
    assert!(rx.is_empty());
    
    tx.send(0).await.unwrap();
    assert!(!rx.is_empty());
    
[/code]

#### pub fn len(&self) -> [usize][13]

Returns the number of messages in the channel.

##### §Examples
[code] 
    use tokio::sync::mpsc;
    
    let (tx, rx) = mpsc::channel(10);
    assert_eq!(0, rx.len());
    
    tx.send(0).await.unwrap();
    assert_eq!(1, rx.len());
[/code]

#### pub fn capacity(&self) -> [usize][13]

Returns the current capacity of the channel.

The capacity goes down when the sender sends a value by calling [`Sender::send`][26] or by reserving capacity with [`Sender::reserve`][27]. The capacity goes up when values are received. This is distinct from [`max_capacity`][28], which always returns buffer capacity initially specified when calling [`channel`][5].

##### §Examples
[code] 
    use tokio::sync::mpsc;
    
    let (tx, mut rx) = mpsc::channel::<()>(5);
    
    assert_eq!(rx.capacity(), 5);
    
    // Making a reservation drops the capacity by one.
    let permit = tx.reserve().await.unwrap();
    assert_eq!(rx.capacity(), 4);
    assert_eq!(rx.len(), 0);
    
    // Sending and receiving a value increases the capacity by one.
    permit.send(());
    assert_eq!(rx.len(), 1);
    rx.recv().await.unwrap();
    assert_eq!(rx.capacity(), 5);
    
    // Directly sending a message drops the capacity by one.
    tx.send(()).await.unwrap();
    assert_eq!(rx.capacity(), 4);
    assert_eq!(rx.len(), 1);
    
    // Receiving the message increases the capacity by one.
    rx.recv().await.unwrap();
    assert_eq!(rx.capacity(), 5);
    assert_eq!(rx.len(), 0);
[/code]

#### pub fn max_capacity(&self) -> [usize][13]

Returns the maximum buffer capacity of the channel.

The maximum capacity is the buffer capacity initially specified when calling [`channel`][5]. This is distinct from [`capacity`][29], which returns the _current_ available buffer capacity: as messages are sent and received, the value returned by [`capacity`][29] will go up or down, whereas the value returned by [`max_capacity`][28] will remain constant.

##### §Examples
[code] 
    use tokio::sync::mpsc;
    
    let (tx, rx) = mpsc::channel::<()>(5);
    
    // both max capacity and capacity are the same at first
    assert_eq!(rx.max_capacity(), 5);
    assert_eq!(rx.capacity(), 5);
    
    // Making a reservation doesn't change the max capacity.
    let permit = tx.reserve().await.unwrap();
    assert_eq!(rx.max_capacity(), 5);
    // but drops the capacity by one
    assert_eq!(rx.capacity(), 4);
[/code]

#### pub fn poll_recv(&mut self, cx: &mut [Context][30]<'_>) -> [Poll][31]<[Option][8]<T>>

Polls to receive the next message on this channel.

This method returns:

  * `Poll::Pending` if no messages are available but the channel is not closed, or if a spurious failure happens.
  * `Poll::Ready(Some(message))` if a message is available.
  * `Poll::Ready(None)` if the channel has been closed and all messages sent before it was closed have been received.



When the method returns `Poll::Pending`, the `Waker` in the provided `Context` is scheduled to receive a wakeup when a message is sent on any receiver, or when the channel is closed. Note that on multiple calls to `poll_recv` or `poll_recv_many`, only the `Waker` from the `Context` passed to the most recent call is scheduled to receive a wakeup.

If this method returns `Poll::Pending` due to a spurious failure, then the `Waker` will be notified when the situation causing the spurious failure has been resolved. Note that receiving such a wakeup does not guarantee that the next call will succeed — it could fail with another spurious failure.

#### pub fn poll_recv_many( &mut self, cx: &mut [Context][30]<'_>, buffer: &mut [Vec][12]<T>, limit: [usize][13], ) -> [Poll][31]<[usize][13]>

Polls to receive multiple messages on this channel, extending the provided buffer.

This method returns:

  * `Poll::Pending` if no messages are available but the channel is not closed, or if a spurious failure happens.
  * `Poll::Ready(count)` where `count` is the number of messages successfully received and stored in `buffer`. This can be less than, or equal to, `limit`.
  * `Poll::Ready(0)` if `limit` is set to zero or when the channel is closed.



When the method returns `Poll::Pending`, the `Waker` in the provided `Context` is scheduled to receive a wakeup when a message is sent on any receiver, or when the channel is closed. Note that on multiple calls to `poll_recv` or `poll_recv_many`, only the `Waker` from the `Context` passed to the most recent call is scheduled to receive a wakeup.

Note that this method does not guarantee that exactly `limit` messages are received. Rather, if at least one message is available, it returns as many messages as it can up to the given limit. This method returns zero only if the channel is closed (or if `limit` is zero).

##### §Examples
[code] 
    use std::task::{Context, Poll};
    use std::pin::Pin;
    use tokio::sync::mpsc;
    use futures::Future;
    
    struct MyReceiverFuture<'a> {
        receiver: mpsc::Receiver<i32>,
        buffer: &'a mut Vec<i32>,
        limit: usize,
    }
    
    impl<'a> Future for MyReceiverFuture<'a> {
        type Output = usize; // Number of messages received
    
        fn poll(mut self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output> {
            let MyReceiverFuture { receiver, buffer, limit } = &mut *self;
    
            // Now `receiver` and `buffer` are mutable references, and `limit` is copied
            match receiver.poll_recv_many(cx, *buffer, *limit) {
                Poll::Pending => Poll::Pending,
                Poll::Ready(count) => Poll::Ready(count),
            }
        }
    }
    
    let (tx, rx) = mpsc::channel(32);
    let mut buffer = Vec::new();
    
    let my_receiver_future = MyReceiverFuture {
        receiver: rx,
        buffer: &mut buffer,
        limit: 3,
    };
    
    for i in 0..10 {
        tx.send(i).await.unwrap();
    }
    
    let count = my_receiver_future.await;
    assert_eq!(count, 3);
    assert_eq!(buffer, vec![0,1,2])
[/code]

#### pub fn sender_strong_count(&self) -> [usize][13]

Returns the number of [`Sender`][16] handles.

#### pub fn sender_weak_count(&self) -> [usize][13]

Returns the number of [`WeakSender`] handles.

## Trait Implementations§

§

### impl<T> [Debug][32] for [Receiver][7]<T>

§

#### fn [fmt][33](&self, fmt: &mut [Formatter][34]<'_>) -> [Result][14]<[()][35], [Error][36]>

Formats the value using the given formatter. [Read more][33]

§

### impl<T> [Unpin][37] for [Receiver][7]<T>

## Auto Trait Implementations§

§

### impl<T> [Freeze][38] for [Receiver][7]<T>

§

### impl<T> [RefUnwindSafe][39] for [Receiver][7]<T>

§

### impl<T> [Send][40] for [Receiver][7]<T>

where T: [Send][40],

§

### impl<T> [Sync][41] for [Receiver][7]<T>

where T: [Send][40],

§

### impl<T> [UnwindSafe][42] for [Receiver][7]<T>

## Blanket Implementations§

[Source][43]§

### impl<T> [Any][44] for T

where T: 'static + ?[Sized][45],

[Source][46]§

#### fn [type_id][47](&self) -> [TypeId][48]

Gets the `TypeId` of `self`. [Read more][47]

[Source][49]§

### impl<T> [Borrow][50]<T> for T

where T: ?[Sized][45],

[Source][51]§

#### fn [borrow][52](&self) -> [&T][53]

Immutably borrows from an owned value. [Read more][52]

[Source][54]§

### impl<T> [BorrowMut][55]<T> for T

where T: ?[Sized][45],

[Source][56]§

#### fn [borrow_mut][57](&mut self) -> [&mut T][53]

Mutably borrows from an owned value. [Read more][57]

[Source][58]§

### impl<T> [From][59]<T> for T

[Source][60]§

#### fn [from][61](t: T) -> T

Returns the argument unchanged.

[Source][62]§

### impl<T, U> [Into][63]<U> for T

where U: [From][59]<T>,

[Source][64]§

#### fn [into][65](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][59]<T> for U` chooses to do.

[Source][66]§

### impl<T, U> [TryFrom][67]<U> for T

where U: [Into][63]<T>,

[Source][68]§

#### type [Error][69] = [Infallible][70]

The type returned in the event of a conversion error.

[Source][71]§

#### fn [try_from][72](value: U) -> [Result][14]<T, <T as [TryFrom][67]<U>>::[Error][73]>

Performs the conversion.

[Source][74]§

### impl<T, U> [TryInto][75]<U> for T

where U: [TryFrom][67]<T>,

[Source][76]§

#### type [Error][77] = <U as [TryFrom][67]<T>>::[Error][73]

The type returned in the event of a conversion error.

[Source][78]§

#### fn [try_into][79](self) -> [Result][14]<U, <U as [TryFrom][67]<T>>::[Error][73]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: fn.channel.html (fn tauri::async_runtime::channel)
   [6]: https://docs.rs/tokio-stream/0.1/tokio_stream/wrappers/struct.ReceiverStream.html
   [7]: struct.Receiver.html (struct tauri::async_runtime::Receiver)
   [8]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [9]: struct.Receiver.html#method.close (method tauri::async_runtime::Receiver::close)
   [10]: struct@crate::sync::mpsc::Permit
   [11]: crate::select
   [12]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [14]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [15]: crate::sync::mpsc::error::TryRecvError::Empty
   [16]: struct.Sender.html (struct tauri::async_runtime::Sender)
   [17]: crate::sync::mpsc::Permit
   [18]: crate::sync::mpsc::error::TryRecvError::Disconnected
   [19]: struct.Receiver.html#method.poll_recv (method tauri::async_runtime::Receiver::poll_recv)
   [20]: struct.Sender.html#method.blocking_send (method tauri::async_runtime::Sender::blocking_send)
   [21]: struct.Receiver.html#method.recv_many (method tauri::async_runtime::Receiver::recv_many)
   [22]: struct.Receiver.html#method.blocking_recv (method tauri::async_runtime::Receiver::blocking_recv)
   [23]: Permit
   [24]: OwnedPermit
   [25]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [26]: struct.Sender.html#method.send (method tauri::async_runtime::Sender::send)
   [27]: struct.Sender.html#method.reserve (method tauri::async_runtime::Sender::reserve)
   [28]: struct.Receiver.html#method.max_capacity (method tauri::async_runtime::Receiver::max_capacity)
   [29]: struct.Receiver.html#method.capacity (method tauri::async_runtime::Receiver::capacity)
   [30]: https://doc.rust-lang.org/1.94.1/core/task/wake/struct.Context.html (struct core::task::wake::Context)
   [31]: https://doc.rust-lang.org/1.94.1/core/task/poll/enum.Poll.html (enum core::task::poll::Poll)
   [32]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [33]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [34]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [35]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [36]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [37]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [38]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [39]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [40]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [41]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [42]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [44]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [45]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [47]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [48]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [49]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [50]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [51]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [52]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [53]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [54]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [55]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [56]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [57]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [58]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [59]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [60]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [61]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [62]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [63]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [64]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [65]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
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

