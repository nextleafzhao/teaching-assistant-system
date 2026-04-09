## AsyncWrite

## [tokio][1]1.51.1

## AsyncWrite

### Required Methods

  * poll_flush
  * poll_shutdown
  * poll_write



### Provided Methods

  * is_write_vectored
  * poll_write_vectored



### Implementations on Foreign Types

  * &mut T
  * Box<T>
  * Cursor<&mut Vec<u8>>
  * Cursor<&mut [u8]>
  * Cursor<Box<[u8]>>
  * Cursor<Vec<u8>>
  * Pin<P>
  * Vec<u8>



### Implementors

## [In tokio::io][2]

[tokio][3]::[io][2]

# Trait AsyncWrite Copy item path

[Source][4]
[code] 
    pub trait AsyncWrite {
        // Required methods
        fn poll_write(
            self: [Pin][5]<&mut Self>,
            cx: &mut [Context][6]<'_>,
            buf: &[[u8][7]],
        ) -> [Poll][8]<[Result][9]<[usize][10]>>;
        fn poll_flush(
            self: [Pin][5]<&mut Self>,
            cx: &mut [Context][6]<'_>,
        ) -> [Poll][8]<[Result][9]<[()][11]>>;
        fn poll_shutdown(
            self: [Pin][5]<&mut Self>,
            cx: &mut [Context][6]<'_>,
        ) -> [Poll][8]<[Result][9]<[()][11]>>;
    
        // Provided methods
        fn poll_write_vectored(
            self: [Pin][5]<&mut Self>,
            cx: &mut [Context][6]<'_>,
            bufs: &[[IoSlice][12]<'_>],
        ) -> [Poll][8]<[Result][9]<[usize][10]>> { ... }
        fn is_write_vectored(&self) -> [bool][13] { ... }
    }
[/code]

Expand description

Writes bytes asynchronously.

This trait is analogous to the [`std::io::Write`][14] trait, but integrates with the asynchronous task system. In particular, the [`poll_write`][15] method, unlike [`Write::write`][16], will automatically queue the current task for wakeup and return if data is not yet available, rather than blocking the calling thread.

Specifically, this means that the [`poll_write`][15] function will return one of the following:

  * `Poll::Ready(Ok(n))` means that `n` bytes of data was immediately written.

  * `Poll::Pending` means that no data was written from the buffer provided. The I/O object is not currently writable but may become writable in the future. Most importantly, **the current future’s task is scheduled to get unparked when the object is writable**. This means that like `Future::poll` you’ll receive a notification when the I/O object is writable again.

  * `Poll::Ready(Err(e))` for other errors are standard I/O errors coming from the underlying object.




Utilities for working with `AsyncWrite` values are provided by [`AsyncWriteExt`][17]. Most users will interact with `AsyncWrite` types through these extension methods, which provide ergonomic async functions such as `write_all` and `flush`.

## Required Methods§

[Source][18]

#### fn poll_write( self: [Pin][5]<&mut Self>, cx: &mut [Context][6]<'_>, buf: &[[u8][7]], ) -> [Poll][8]<[Result][9]<[usize][10]>>

Attempt to write bytes from `buf` into the object.

On success, returns `Poll::Ready(Ok(num_bytes_written))`. If successful, then it must be guaranteed that `n <= buf.len()`. A return value of `0` typically means that the underlying object is no longer able to accept bytes and will likely not be able to in the future as well, or that the buffer provided is empty.

If the object is not ready for writing, the method returns `Poll::Pending` and arranges for the current task (via `cx.waker()`) to receive a notification when the object becomes writable or is closed.

[Source][19]

#### fn poll_flush(self: [Pin][5]<&mut Self>, cx: &mut [Context][6]<'_>) -> [Poll][8]<[Result][9]<[()][11]>>

Attempts to flush the object, ensuring that any buffered data reach their destination.

On success, returns `Poll::Ready(Ok(()))`.

If flushing cannot immediately complete, this method returns `Poll::Pending` and arranges for the current task (via `cx.waker()`) to receive a notification when the object can make progress towards flushing.

[Source][20]

#### fn poll_shutdown(self: [Pin][5]<&mut Self>, cx: &mut [Context][6]<'_>) -> [Poll][8]<[Result][9]<[()][11]>>

Initiates or attempts to shut down this writer, returning success when the I/O connection has completely shut down.

This method is intended to be used for asynchronous shutdown of I/O connections. For example this is suitable for implementing shutdown of a TLS connection or calling `TcpStream::shutdown` on a proxied connection. Protocols sometimes need to flush out final pieces of data or otherwise perform a graceful shutdown handshake, reading/writing more data as appropriate. This method is the hook for such protocols to implement the graceful shutdown logic.

This `shutdown` method is required by implementers of the `AsyncWrite` trait. Wrappers typically just want to proxy this call through to the wrapped type, and base types will typically implement shutdown logic here or just return `Ok(().into())`. Note that if you’re wrapping an underlying `AsyncWrite` a call to `shutdown` implies that transitively the entire stream has been shut down. After your wrapper’s shutdown logic has been executed you should shut down the underlying stream.

Invocation of a `shutdown` implies an invocation of `flush`. Once this method returns `Ready` it implies that a flush successfully happened before the shutdown happened. That is, callers don’t need to call `flush` before calling `shutdown`. They can rely that by calling `shutdown` any pending buffered data will be written out.

##### §Return value

This function returns a `Poll<io::Result<()>>` classified as such:

  * `Poll::Ready(Ok(()))` \- indicates that the connection was successfully shut down and is now safe to deallocate/drop/close resources associated with it. This method means that the current task will no longer receive any notifications due to this method and the I/O object itself is likely no longer usable.

  * `Poll::Pending` \- indicates that shutdown is initiated but could not complete just yet. This may mean that more I/O needs to happen to continue this shutdown operation. The current task is scheduled to receive a notification when it’s otherwise ready to continue the shutdown operation. When woken up this method should be called again.

  * `Poll::Ready(Err(e))` \- indicates a fatal error has happened with shutdown, indicating that the shutdown operation did not complete successfully. This typically means that the I/O object is no longer usable.




##### §Errors

This function can return normal I/O errors through `Err`, described above. Additionally this method may also render the underlying `Write::write` method no longer usable (e.g. will return errors in the future). It’s recommended that once `shutdown` is called the `write` method is no longer called.

##### §Panics

This function will panic if not called within the context of a future’s task.

## Provided Methods§

[Source][21]

#### fn poll_write_vectored( self: [Pin][5]<&mut Self>, cx: &mut [Context][6]<'_>, bufs: &[[IoSlice][12]<'_>], ) -> [Poll][8]<[Result][9]<[usize][10]>>

Like [`poll_write`][15], except that it writes from a slice of buffers.

Data is copied from each buffer in order, with the final buffer read from possibly being only partially consumed. This method must behave as a call to [`write`][22] with the buffers concatenated would.

The default implementation calls [`poll_write`][15] with either the first nonempty buffer provided, or an empty one if none exists.

On success, returns `Poll::Ready(Ok(num_bytes_written))`.

If the object is not ready for writing, the method returns `Poll::Pending` and arranges for the current task (via `cx.waker()`) to receive a notification when the object becomes writable or is closed.

##### §Note

This should be implemented as a single “atomic” write action. If any data has been partially written, it is wrong to return an error or pending.

[Source][23]

#### fn is_write_vectored(&self) -> [bool][13]

Determines if this writer has an efficient [`poll_write_vectored`][24] implementation.

If a writer does not override the default [`poll_write_vectored`][24] implementation, code using it may want to avoid the method all together and coalesce writes into a single buffer for higher performance.

The default implementation returns `false`.

## Implementations on Foreign Types§

[Source][25]§

### impl [AsyncWrite][26] for [Vec][27]<[u8][7]>

[Source][28]§

#### fn poll_write( self: [Pin][5]<&mut Self>, _cx: &mut [Context][6]<'_>, buf: &[[u8][7]], ) -> [Poll][8]<[Result][9]<[usize][10]>>

[Source][29]§

#### fn poll_write_vectored( self: [Pin][5]<&mut Self>, _: &mut [Context][6]<'_>, bufs: &[[IoSlice][12]<'_>], ) -> [Poll][8]<[Result][9]<[usize][10]>>

[Source][30]§

#### fn is_write_vectored(&self) -> [bool][13]

[Source][31]§

#### fn poll_flush(self: [Pin][5]<&mut Self>, _cx: &mut [Context][6]<'_>) -> [Poll][8]<[Result][9]<[()][11]>>

[Source][32]§

#### fn poll_shutdown( self: [Pin][5]<&mut Self>, _cx: &mut [Context][6]<'_>, ) -> [Poll][8]<[Result][9]<[()][11]>>

[Source][33]§

### impl [AsyncWrite][26] for [Cursor][34]<&mut [Vec][27]<[u8][7]>>

[Source][35]§

#### fn poll_write( self: [Pin][5]<&mut Self>, _: &mut [Context][6]<'_>, buf: &[[u8][7]], ) -> [Poll][8]<[Result][9]<[usize][10]>>

[Source][36]§

#### fn poll_write_vectored( self: [Pin][5]<&mut Self>, _: &mut [Context][6]<'_>, bufs: &[[IoSlice][12]<'_>], ) -> [Poll][8]<[Result][9]<[usize][10]>>

[Source][37]§

#### fn is_write_vectored(&self) -> [bool][13]

[Source][38]§

#### fn poll_flush(self: [Pin][5]<&mut Self>, _: &mut [Context][6]<'_>) -> [Poll][8]<[Result][9]<[()][11]>>

[Source][39]§

#### fn poll_shutdown(self: [Pin][5]<&mut Self>, cx: &mut [Context][6]<'_>) -> [Poll][8]<[Result][9]<[()][11]>>

[Source][40]§

### impl [AsyncWrite][26] for [Cursor][34]<&mut [[u8][7]]>

[Source][41]§

#### fn poll_write( self: [Pin][5]<&mut Self>, _: &mut [Context][6]<'_>, buf: &[[u8][7]], ) -> [Poll][8]<[Result][9]<[usize][10]>>

[Source][42]§

#### fn poll_write_vectored( self: [Pin][5]<&mut Self>, _: &mut [Context][6]<'_>, bufs: &[[IoSlice][12]<'_>], ) -> [Poll][8]<[Result][9]<[usize][10]>>

[Source][43]§

#### fn is_write_vectored(&self) -> [bool][13]

[Source][44]§

#### fn poll_flush(self: [Pin][5]<&mut Self>, _: &mut [Context][6]<'_>) -> [Poll][8]<[Result][9]<[()][11]>>

[Source][45]§

#### fn poll_shutdown(self: [Pin][5]<&mut Self>, cx: &mut [Context][6]<'_>) -> [Poll][8]<[Result][9]<[()][11]>>

[Source][46]§

### impl [AsyncWrite][26] for [Cursor][34]<[Box][47]<[[u8][7]]>>

[Source][48]§

#### fn poll_write( self: [Pin][5]<&mut Self>, _: &mut [Context][6]<'_>, buf: &[[u8][7]], ) -> [Poll][8]<[Result][9]<[usize][10]>>

[Source][49]§

#### fn poll_write_vectored( self: [Pin][5]<&mut Self>, _: &mut [Context][6]<'_>, bufs: &[[IoSlice][12]<'_>], ) -> [Poll][8]<[Result][9]<[usize][10]>>

[Source][50]§

#### fn is_write_vectored(&self) -> [bool][13]

[Source][51]§

#### fn poll_flush(self: [Pin][5]<&mut Self>, _: &mut [Context][6]<'_>) -> [Poll][8]<[Result][9]<[()][11]>>

[Source][52]§

#### fn poll_shutdown(self: [Pin][5]<&mut Self>, cx: &mut [Context][6]<'_>) -> [Poll][8]<[Result][9]<[()][11]>>

[Source][53]§

### impl [AsyncWrite][26] for [Cursor][34]<[Vec][27]<[u8][7]>>

[Source][54]§

#### fn poll_write( self: [Pin][5]<&mut Self>, _: &mut [Context][6]<'_>, buf: &[[u8][7]], ) -> [Poll][8]<[Result][9]<[usize][10]>>

[Source][55]§

#### fn poll_write_vectored( self: [Pin][5]<&mut Self>, _: &mut [Context][6]<'_>, bufs: &[[IoSlice][12]<'_>], ) -> [Poll][8]<[Result][9]<[usize][10]>>

[Source][56]§

#### fn is_write_vectored(&self) -> [bool][13]

[Source][57]§

#### fn poll_flush(self: [Pin][5]<&mut Self>, _: &mut [Context][6]<'_>) -> [Poll][8]<[Result][9]<[()][11]>>

[Source][58]§

#### fn poll_shutdown(self: [Pin][5]<&mut Self>, cx: &mut [Context][6]<'_>) -> [Poll][8]<[Result][9]<[()][11]>>

[Source][59]§

### impl<P> [AsyncWrite][26] for [Pin][5]<P>

where P: [DerefMut][60], P::[Target][61]: [AsyncWrite][26],

[Source][62]§

#### fn poll_write( self: [Pin][5]<&mut Self>, cx: &mut [Context][6]<'_>, buf: &[[u8][7]], ) -> [Poll][8]<[Result][9]<[usize][10]>>

[Source][63]§

#### fn poll_write_vectored( self: [Pin][5]<&mut Self>, cx: &mut [Context][6]<'_>, bufs: &[[IoSlice][12]<'_>], ) -> [Poll][8]<[Result][9]<[usize][10]>>

[Source][64]§

#### fn is_write_vectored(&self) -> [bool][13]

[Source][65]§

#### fn poll_flush(self: [Pin][5]<&mut Self>, cx: &mut [Context][6]<'_>) -> [Poll][8]<[Result][9]<[()][11]>>

[Source][66]§

#### fn poll_shutdown(self: [Pin][5]<&mut Self>, cx: &mut [Context][6]<'_>) -> [Poll][8]<[Result][9]<[()][11]>>

[Source][67]§

### impl<T: ?[Sized][68] \+ [AsyncWrite][26] \+ [Unpin][69]> [AsyncWrite][26] for [&mut T][70]

[Source][71]§

#### fn poll_write( self: [Pin][5]<&mut Self>, cx: &mut [Context][6]<'_>, buf: &[[u8][7]], ) -> [Poll][8]<[Result][9]<[usize][10]>>

[Source][71]§

#### fn poll_write_vectored( self: [Pin][5]<&mut Self>, cx: &mut [Context][6]<'_>, bufs: &[[IoSlice][12]<'_>], ) -> [Poll][8]<[Result][9]<[usize][10]>>

[Source][71]§

#### fn is_write_vectored(&self) -> [bool][13]

[Source][71]§

#### fn poll_flush(self: [Pin][5]<&mut Self>, cx: &mut [Context][6]<'_>) -> [Poll][8]<[Result][9]<[()][11]>>

[Source][71]§

#### fn poll_shutdown(self: [Pin][5]<&mut Self>, cx: &mut [Context][6]<'_>) -> [Poll][8]<[Result][9]<[()][11]>>

[Source][72]§

### impl<T: ?[Sized][68] \+ [AsyncWrite][26] \+ [Unpin][69]> [AsyncWrite][26] for [Box][47]<T>

[Source][73]§

#### fn poll_write( self: [Pin][5]<&mut Self>, cx: &mut [Context][6]<'_>, buf: &[[u8][7]], ) -> [Poll][8]<[Result][9]<[usize][10]>>

[Source][73]§

#### fn poll_write_vectored( self: [Pin][5]<&mut Self>, cx: &mut [Context][6]<'_>, bufs: &[[IoSlice][12]<'_>], ) -> [Poll][8]<[Result][9]<[usize][10]>>

[Source][73]§

#### fn is_write_vectored(&self) -> [bool][13]

[Source][73]§

#### fn poll_flush(self: [Pin][5]<&mut Self>, cx: &mut [Context][6]<'_>) -> [Poll][8]<[Result][9]<[()][11]>>

[Source][73]§

#### fn poll_shutdown(self: [Pin][5]<&mut Self>, cx: &mut [Context][6]<'_>) -> [Poll][8]<[Result][9]<[()][11]>>

## Implementors§

   [1]: ../../tokio/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../../src/tokio/io/async_write.rs.html#39-177
   [5]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [6]: https://doc.rust-lang.org/1.94.1/core/task/wake/struct.Context.html (struct core::task::wake::Context)
   [7]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [8]: https://doc.rust-lang.org/1.94.1/core/task/poll/enum.Poll.html (enum core::task::poll::Poll)
   [9]: https://doc.rust-lang.org/1.94.1/std/io/error/type.Result.html (type std::io::error::Result)
   [10]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [11]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [12]: https://doc.rust-lang.org/1.94.1/std/io/struct.IoSlice.html (struct std::io::IoSlice)
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [14]: https://doc.rust-lang.org/1.94.1/std/io/trait.Write.html (trait std::io::Write)
   [15]: trait.AsyncWrite.html#tymethod.poll_write (method tokio::io::AsyncWrite::poll_write)
   [16]: https://doc.rust-lang.org/1.94.1/std/io/trait.Write.html#tymethod.write (method std::io::Write::write)
   [17]: crate::io::AsyncWriteExt
   [18]: ../../src/tokio/io/async_write.rs.html#52-56
   [19]: ../../src/tokio/io/async_write.rs.html#67
   [20]: ../../src/tokio/io/async_write.rs.html#127
   [21]: ../../src/tokio/io/async_write.rs.html#152-162
   [22]: https://doc.rust-lang.org/1.94.1/core/macro.write.html (macro core::write)
   [23]: ../../src/tokio/io/async_write.rs.html#174-176
   [24]: trait.AsyncWrite.html#method.poll_write_vectored (method tokio::io::AsyncWrite::poll_write_vectored)
   [25]: ../../src/tokio/io/async_write.rs.html#253-282
   [26]: trait.AsyncWrite.html (trait tokio::io::AsyncWrite)
   [27]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [28]: ../../src/tokio/io/async_write.rs.html#254-261
   [29]: ../../src/tokio/io/async_write.rs.html#263-269
   [30]: ../../src/tokio/io/async_write.rs.html#271-273
   [31]: ../../src/tokio/io/async_write.rs.html#275-277
   [32]: ../../src/tokio/io/async_write.rs.html#279-281
   [33]: ../../src/tokio/io/async_write.rs.html#314-342
   [34]: https://doc.rust-lang.org/1.94.1/std/io/cursor/struct.Cursor.html (struct std::io::cursor::Cursor)
   [35]: ../../src/tokio/io/async_write.rs.html#315-321
   [36]: ../../src/tokio/io/async_write.rs.html#323-329
   [37]: ../../src/tokio/io/async_write.rs.html#331-333
   [38]: ../../src/tokio/io/async_write.rs.html#335-337
   [39]: ../../src/tokio/io/async_write.rs.html#339-341
   [40]: ../../src/tokio/io/async_write.rs.html#284-312
   [41]: ../../src/tokio/io/async_write.rs.html#285-291
   [42]: ../../src/tokio/io/async_write.rs.html#293-299
   [43]: ../../src/tokio/io/async_write.rs.html#301-303
   [44]: ../../src/tokio/io/async_write.rs.html#305-307
   [45]: ../../src/tokio/io/async_write.rs.html#309-311
   [46]: ../../src/tokio/io/async_write.rs.html#374-402
   [47]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [48]: ../../src/tokio/io/async_write.rs.html#375-381
   [49]: ../../src/tokio/io/async_write.rs.html#383-389
   [50]: ../../src/tokio/io/async_write.rs.html#391-393
   [51]: ../../src/tokio/io/async_write.rs.html#395-397
   [52]: ../../src/tokio/io/async_write.rs.html#399-401
   [53]: ../../src/tokio/io/async_write.rs.html#344-372
   [54]: ../../src/tokio/io/async_write.rs.html#345-351
   [55]: ../../src/tokio/io/async_write.rs.html#353-359
   [56]: ../../src/tokio/io/async_write.rs.html#361-363
   [57]: ../../src/tokio/io/async_write.rs.html#365-367
   [58]: ../../src/tokio/io/async_write.rs.html#369-371
   [59]: ../../src/tokio/io/async_write.rs.html#219-251
   [60]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.DerefMut.html (trait core::ops::deref::DerefMut)
   [61]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#associatedtype.Target (type core::ops::deref::Deref::Target)
   [62]: ../../src/tokio/io/async_write.rs.html#224-230
   [63]: ../../src/tokio/io/async_write.rs.html#232-238
   [64]: ../../src/tokio/io/async_write.rs.html#240-242
   [65]: ../../src/tokio/io/async_write.rs.html#244-246
   [66]: ../../src/tokio/io/async_write.rs.html#248-250
   [67]: ../../src/tokio/io/async_write.rs.html#215-217
   [68]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [69]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [70]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [71]: ../../src/tokio/io/async_write.rs.html#216
   [72]: ../../src/tokio/io/async_write.rs.html#211-213
   [73]: ../../src/tokio/io/async_write.rs.html#212

