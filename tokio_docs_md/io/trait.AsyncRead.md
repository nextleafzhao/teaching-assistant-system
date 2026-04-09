## AsyncRead

## [tokio][1]1.51.1

## AsyncRead

### Required Methods

  * poll_read



### Implementations on Foreign Types

  * &[u8]
  * &mut T
  * Box<T>
  * Cursor<T>
  * Pin<P>



### Implementors

## [In tokio::io][2]

[tokio][3]::[io][2]

# Trait AsyncRead Copy item path

[Source][4]
[code] 
    pub trait AsyncRead {
        // Required method
        fn poll_read(
            self: [Pin][5]<&mut Self>,
            cx: &mut [Context][6]<'_>,
            buf: &mut [ReadBuf][7]<'_>,
        ) -> [Poll][8]<[Result][9]<[()][10]>>;
    }
[/code]

Expand description

Reads bytes from a source.

This trait is analogous to the [`std::io::Read`][11] trait, but integrates with the asynchronous task system. In particular, the [`poll_read`][12] method, unlike [`Read::read`][13], will automatically queue the current task for wakeup and return if data is not yet available, rather than blocking the calling thread.

Specifically, this means that the `poll_read` function will return one of the following:

  * `Poll::Ready(Ok(()))` means that data was immediately read and placed into the output buffer. The amount of data read can be determined by the increase in the length of the slice returned by `ReadBuf::filled`. If the difference is 0, either EOF has been reached, or the output buffer had zero capacity (i.e. `buf.remaining()` == 0).

  * `Poll::Pending` means that no data was read into the buffer provided. The I/O object is not currently readable but may become readable in the future. Most importantly, **the current future’s task is scheduled to get unparked when the object is readable**. This means that like `Future::poll` you’ll receive a notification when the I/O object is readable again.

  * `Poll::Ready(Err(e))` for other errors are standard I/O errors coming from the underlying object.




This trait importantly means that the `read` method only works in the context of a future’s task. The object may panic if used outside of a task.

Utilities for working with `AsyncRead` values are provided by [`AsyncReadExt`][14].

## Required Methods§

[Source][15]

#### fn poll_read( self: [Pin][5]<&mut Self>, cx: &mut [Context][6]<'_>, buf: &mut [ReadBuf][7]<'_>, ) -> [Poll][8]<[Result][9]<[()][10]>>

Attempts to read from the `AsyncRead` into `buf`.

On success, returns `Poll::Ready(Ok(()))` and places data in the unfilled portion of `buf`. If no data was read (`buf.filled().len()` is unchanged), it implies that EOF has been reached, or the output buffer had zero capacity (i.e. `buf.remaining()` == 0).

If no data is available for reading, the method returns `Poll::Pending` and arranges for the current task (via `cx.waker()`) to receive a notification when the object becomes readable or is closed.

## Implementations on Foreign Types§

[Source][16]§

### impl [AsyncRead][17] for &[[u8][18]]

[Source][19]§

#### fn poll_read( self: [Pin][5]<&mut Self>, _cx: &mut [Context][6]<'_>, buf: &mut [ReadBuf][7]<'_>, ) -> [Poll][8]<[Result][9]<[()][10]>>

[Source][20]§

### impl<P> [AsyncRead][17] for [Pin][5]<P>

where P: [DerefMut][21], P::[Target][22]: [AsyncRead][17],

[Source][23]§

#### fn poll_read( self: [Pin][5]<&mut Self>, cx: &mut [Context][6]<'_>, buf: &mut [ReadBuf][7]<'_>, ) -> [Poll][8]<[Result][9]<[()][10]>>

[Source][24]§

### impl<T: [AsRef][25]<[[u8][18]]> \+ [Unpin][26]> [AsyncRead][17] for [Cursor][27]<T>

[Source][28]§

#### fn poll_read( self: [Pin][5]<&mut Self>, _cx: &mut [Context][6]<'_>, buf: &mut [ReadBuf][7]<'_>, ) -> [Poll][8]<[Result][9]<[()][10]>>

[Source][29]§

### impl<T: ?[Sized][30] \+ [AsyncRead][17] \+ [Unpin][26]> [AsyncRead][17] for [&mut T][31]

[Source][32]§

#### fn poll_read( self: [Pin][5]<&mut Self>, cx: &mut [Context][6]<'_>, buf: &mut [ReadBuf][7]<'_>, ) -> [Poll][8]<[Result][9]<[()][10]>>

[Source][33]§

### impl<T: ?[Sized][30] \+ [AsyncRead][17] \+ [Unpin][26]> [AsyncRead][17] for [Box][34]<T>

[Source][35]§

#### fn poll_read( self: [Pin][5]<&mut Self>, cx: &mut [Context][6]<'_>, buf: &mut [ReadBuf][7]<'_>, ) -> [Poll][8]<[Result][9]<[()][10]>>

## Implementors§

   [1]: ../../tokio/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../../src/tokio/io/async_read.rs.html#44-60
   [5]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [6]: https://doc.rust-lang.org/1.94.1/core/task/wake/struct.Context.html (struct core::task::wake::Context)
   [7]: struct.ReadBuf.html (struct tokio::io::ReadBuf)
   [8]: https://doc.rust-lang.org/1.94.1/core/task/poll/enum.Poll.html (enum core::task::poll::Poll)
   [9]: https://doc.rust-lang.org/1.94.1/std/io/error/type.Result.html (type std::io::error::Result)
   [10]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [11]: https://doc.rust-lang.org/1.94.1/std/io/trait.Read.html (trait std::io::Read)
   [12]: trait.AsyncRead.html#tymethod.poll_read (method tokio::io::AsyncRead::poll_read)
   [13]: https://doc.rust-lang.org/1.94.1/std/io/trait.Read.html#tymethod.read (method std::io::Read::read)
   [14]: crate::io::AsyncReadExt
   [15]: ../../src/tokio/io/async_read.rs.html#55-59
   [16]: ../../src/tokio/io/async_read.rs.html#96-108
   [17]: trait.AsyncRead.html (trait tokio::io::AsyncRead)
   [18]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [19]: ../../src/tokio/io/async_read.rs.html#97-107
   [20]: ../../src/tokio/io/async_read.rs.html#82-94
   [21]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.DerefMut.html (trait core::ops::deref::DerefMut)
   [22]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#associatedtype.Target (type core::ops::deref::Deref::Target)
   [23]: ../../src/tokio/io/async_read.rs.html#87-93
   [24]: ../../src/tokio/io/async_read.rs.html#110-133
   [25]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [26]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [27]: https://doc.rust-lang.org/1.94.1/std/io/cursor/struct.Cursor.html (struct std::io::cursor::Cursor)
   [28]: ../../src/tokio/io/async_read.rs.html#111-132
   [29]: ../../src/tokio/io/async_read.rs.html#78-80
   [30]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [31]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [32]: ../../src/tokio/io/async_read.rs.html#79
   [33]: ../../src/tokio/io/async_read.rs.html#74-76
   [34]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [35]: ../../src/tokio/io/async_read.rs.html#75

