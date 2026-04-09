## AsyncBufRead

## [tokio][1]1.51.1

## AsyncBufRead

### Required Methods

  * consume
  * poll_fill_buf



### Implementations on Foreign Types

  * &[u8]
  * &mut T
  * Box<T>
  * Cursor<T>
  * Pin<P>



### Implementors

## [In tokio::io][2]

[tokio][3]::[io][2]

# Trait AsyncBufRead Copy item path

[Source][4]
[code] 
    pub trait AsyncBufRead: [AsyncRead][5] {
        // Required methods
        fn poll_fill_buf(
            self: [Pin][6]<&mut Self>,
            cx: &mut [Context][7]<'_>,
        ) -> [Poll][8]<[Result][9]<&[[u8][10]]>>;
        fn consume(self: [Pin][6]<&mut Self>, amt: [usize][11]);
    }
[/code]

Expand description

Reads bytes asynchronously.

This trait is analogous to [`std::io::BufRead`][12], but integrates with the asynchronous task system. In particular, the [`poll_fill_buf`][13] method, unlike [`BufRead::fill_buf`][14], will automatically queue the current task for wakeup and return if data is not yet available, rather than blocking the calling thread.

Utilities for working with `AsyncBufRead` values are provided by [`AsyncBufReadExt`][15].

## Required Methods§

[Source][16]

#### fn poll_fill_buf( self: [Pin][6]<&mut Self>, cx: &mut [Context][7]<'_>, ) -> [Poll][8]<[Result][9]<&[[u8][10]]>>

Attempts to return the contents of the internal buffer, filling it with more data from the inner reader if it is empty.

On success, returns `Poll::Ready(Ok(buf))`.

If no data is available for reading, the method returns `Poll::Pending` and arranges for the current task (via `cx.waker().wake_by_ref()`) to receive a notification when the object becomes readable or is closed.

This function is a lower-level call. It needs to be paired with the [`consume`][17] method to function properly. When calling this method, none of the contents will be “read” in the sense that later calling [`poll_read`][18] may return the same contents. As such, [`consume`][17] must be called with the number of bytes that are consumed from this buffer to ensure that the bytes are never returned twice.

An empty buffer returned indicates that the stream has reached EOF.

[Source][19]

#### fn consume(self: [Pin][6]<&mut Self>, amt: [usize][11])

Tells this buffer that `amt` bytes have been consumed from the buffer, so they should no longer be returned in calls to [`poll_read`][18].

This function is a lower-level call. It needs to be paired with the [`poll_fill_buf`][13] method to function properly. This function does not perform any I/O, it simply informs this object that some amount of its buffer, returned from [`poll_fill_buf`][13], has been consumed and should no longer be returned. As such, this function may do odd things if [`poll_fill_buf`][13] isn’t called before calling it.

The `amt` must be `<=` the number of bytes in the buffer returned by [`poll_fill_buf`][13].

## Implementations on Foreign Types§

[Source][20]§

### impl [AsyncBufRead][21] for &[[u8][10]]

[Source][22]§

#### fn poll_fill_buf( self: [Pin][6]<&mut Self>, _cx: &mut [Context][7]<'_>, ) -> [Poll][8]<[Result][9]<&[[u8][10]]>>

[Source][23]§

#### fn consume(self: [Pin][6]<&mut Self>, amt: [usize][11])

[Source][24]§

### impl<P> [AsyncBufRead][21] for [Pin][6]<P>

where P: [DerefMut][25], P::[Target][26]: [AsyncBufRead][21],

[Source][27]§

#### fn poll_fill_buf( self: [Pin][6]<&mut Self>, cx: &mut [Context][7]<'_>, ) -> [Poll][8]<[Result][9]<&[[u8][10]]>>

[Source][28]§

#### fn consume(self: [Pin][6]<&mut Self>, amt: [usize][11])

[Source][29]§

### impl<T: [AsRef][30]<[[u8][10]]> \+ [Unpin][31]> [AsyncBufRead][21] for [Cursor][32]<T>

[Source][33]§

#### fn poll_fill_buf( self: [Pin][6]<&mut Self>, _cx: &mut [Context][7]<'_>, ) -> [Poll][8]<[Result][9]<&[[u8][10]]>>

[Source][34]§

#### fn consume(self: [Pin][6]<&mut Self>, amt: [usize][11])

[Source][35]§

### impl<T: ?[Sized][36] \+ [AsyncBufRead][21] \+ [Unpin][31]> [AsyncBufRead][21] for [&mut T][37]

[Source][38]§

#### fn poll_fill_buf( self: [Pin][6]<&mut Self>, cx: &mut [Context][7]<'_>, ) -> [Poll][8]<[Result][9]<&[[u8][10]]>>

[Source][38]§

#### fn consume(self: [Pin][6]<&mut Self>, amt: [usize][11])

[Source][39]§

### impl<T: ?[Sized][36] \+ [AsyncBufRead][21] \+ [Unpin][31]> [AsyncBufRead][21] for [Box][40]<T>

[Source][41]§

#### fn poll_fill_buf( self: [Pin][6]<&mut Self>, cx: &mut [Context][7]<'_>, ) -> [Poll][8]<[Result][9]<&[[u8][10]]>>

[Source][41]§

#### fn consume(self: [Pin][6]<&mut Self>, amt: [usize][11])

## Implementors§

   [1]: ../../tokio/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../../src/tokio/io/async_buf_read.rs.html#23-63
   [5]: trait.AsyncRead.html (trait tokio::io::AsyncRead)
   [6]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [7]: https://doc.rust-lang.org/1.94.1/core/task/wake/struct.Context.html (struct core::task::wake::Context)
   [8]: https://doc.rust-lang.org/1.94.1/core/task/poll/enum.Poll.html (enum core::task::poll::Poll)
   [9]: https://doc.rust-lang.org/1.94.1/std/io/error/type.Result.html (type std::io::error::Result)
   [10]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [11]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [12]: https://doc.rust-lang.org/1.94.1/std/io/trait.BufRead.html (trait std::io::BufRead)
   [13]: trait.AsyncBufRead.html#tymethod.poll_fill_buf (method tokio::io::AsyncBufRead::poll_fill_buf)
   [14]: https://doc.rust-lang.org/1.94.1/std/io/trait.BufRead.html#tymethod.fill_buf (method std::io::BufRead::fill_buf)
   [15]: crate::io::AsyncBufReadExt
   [16]: ../../src/tokio/io/async_buf_read.rs.html#45
   [17]: trait.AsyncBufRead.html#tymethod.consume (method tokio::io::AsyncBufRead::consume)
   [18]: trait.AsyncRead.html#tymethod.poll_read (method tokio::io::AsyncRead::poll_read)
   [19]: ../../src/tokio/io/async_buf_read.rs.html#62
   [20]: ../../src/tokio/io/async_buf_read.rs.html#99-107
   [21]: trait.AsyncBufRead.html (trait tokio::io::AsyncBufRead)
   [22]: ../../src/tokio/io/async_buf_read.rs.html#100-102
   [23]: ../../src/tokio/io/async_buf_read.rs.html#104-106
   [24]: ../../src/tokio/io/async_buf_read.rs.html#85-97
   [25]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.DerefMut.html (trait core::ops::deref::DerefMut)
   [26]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#associatedtype.Target (type core::ops::deref::Deref::Target)
   [27]: ../../src/tokio/io/async_buf_read.rs.html#90-92
   [28]: ../../src/tokio/io/async_buf_read.rs.html#94-96
   [29]: ../../src/tokio/io/async_buf_read.rs.html#109-117
   [30]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [31]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [32]: https://doc.rust-lang.org/1.94.1/std/io/cursor/struct.Cursor.html (struct std::io::cursor::Cursor)
   [33]: ../../src/tokio/io/async_buf_read.rs.html#110-112
   [34]: ../../src/tokio/io/async_buf_read.rs.html#114-116
   [35]: ../../src/tokio/io/async_buf_read.rs.html#81-83
   [36]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [37]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [38]: ../../src/tokio/io/async_buf_read.rs.html#82
   [39]: ../../src/tokio/io/async_buf_read.rs.html#77-79
   [40]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [41]: ../../src/tokio/io/async_buf_read.rs.html#78

