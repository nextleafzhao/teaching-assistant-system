## AsyncSeek

## [tokio][1]1.51.1

## AsyncSeek

### Required Methods

  * poll_complete
  * start_seek



### Implementations on Foreign Types

  * &mut T
  * Box<T>
  * Cursor<T>
  * Pin<P>



### Implementors

## [In tokio::io][2]

[tokio][3]::[io][2]

# Trait AsyncSeek Copy item path

[Source][4]
[code] 
    pub trait AsyncSeek {
        // Required methods
        fn start_seek(self: [Pin][5]<&mut Self>, position: [SeekFrom][6]) -> [Result][7]<[()][8]>;
        fn poll_complete(
            self: [Pin][5]<&mut Self>,
            cx: &mut [Context][9]<'_>,
        ) -> [Poll][10]<[Result][7]<[u64][11]>>;
    }
[/code]

Expand description

Seek bytes asynchronously.

This trait is analogous to the [`std::io::Seek`][12] trait, but integrates with the asynchronous task system. In particular, the `start_seek` method, unlike [`Seek::seek`][13], will not block the calling thread.

Utilities for working with `AsyncSeek` values are provided by [`AsyncSeekExt`][14].

## Required Methods§

[Source][15]

#### fn start_seek(self: [Pin][5]<&mut Self>, position: [SeekFrom][6]) -> [Result][7]<[()][8]>

Attempts to seek to an offset, in bytes, in a stream.

A seek beyond the end of a stream is allowed, but behavior is defined by the implementation.

If this function returns successfully, then the job has been submitted. To find out when it completes, call `poll_complete`.

##### §Errors

This function can return [`io::ErrorKind::Other`][16] in case there is another seek in progress. To avoid this, it is advisable that any call to `start_seek` is preceded by a call to `poll_complete` to ensure all pending seeks have completed.

[Source][17]

#### fn poll_complete( self: [Pin][5]<&mut Self>, cx: &mut [Context][9]<'_>, ) -> [Poll][10]<[Result][7]<[u64][11]>>

Waits for a seek operation to complete.

If the seek operation completed successfully, this method returns the new position from the start of the stream. That position can be used later with [`SeekFrom::Start`][18].

The position returned by calling this method can only be relied on right after `start_seek`. If you have changed the position by e.g. reading or writing since calling `start_seek`, then it is unspecified whether the returned position takes that position change into account. Similarly, if `start_seek` has never been called, then it is unspecified whether `poll_complete` returns the actual position or some other placeholder value (such as 0).

##### §Errors

Seeking to a negative offset is considered an error.

## Implementations on Foreign Types§

[Source][19]§

### impl<P> [AsyncSeek][20] for [Pin][5]<P>

where P: [DerefMut][21], P::[Target][22]: [AsyncSeek][20],

[Source][23]§

#### fn start_seek(self: [Pin][5]<&mut Self>, pos: [SeekFrom][6]) -> [Result][7]<[()][8]>

[Source][24]§

#### fn poll_complete( self: [Pin][5]<&mut Self>, cx: &mut [Context][9]<'_>, ) -> [Poll][10]<[Result][7]<[u64][11]>>

[Source][25]§

### impl<T: [AsRef][26]<[[u8][27]]> \+ [Unpin][28]> [AsyncSeek][20] for [Cursor][29]<T>

[Source][30]§

#### fn start_seek(self: [Pin][5]<&mut Self>, pos: [SeekFrom][6]) -> [Result][7]<[()][8]>

[Source][31]§

#### fn poll_complete(self: [Pin][5]<&mut Self>, _: &mut [Context][9]<'_>) -> [Poll][10]<[Result][7]<[u64][11]>>

[Source][32]§

### impl<T: ?[Sized][33] \+ [AsyncSeek][20] \+ [Unpin][28]> [AsyncSeek][20] for [&mut T][34]

[Source][35]§

#### fn start_seek(self: [Pin][5]<&mut Self>, pos: [SeekFrom][6]) -> [Result][7]<[()][8]>

[Source][35]§

#### fn poll_complete( self: [Pin][5]<&mut Self>, cx: &mut [Context][9]<'_>, ) -> [Poll][10]<[Result][7]<[u64][11]>>

[Source][36]§

### impl<T: ?[Sized][33] \+ [AsyncSeek][20] \+ [Unpin][28]> [AsyncSeek][20] for [Box][37]<T>

[Source][38]§

#### fn start_seek(self: [Pin][5]<&mut Self>, pos: [SeekFrom][6]) -> [Result][7]<[()][8]>

[Source][38]§

#### fn poll_complete( self: [Pin][5]<&mut Self>, cx: &mut [Context][9]<'_>, ) -> [Poll][10]<[Result][7]<[u64][11]>>

## Implementors§

   [1]: ../../tokio/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../../src/tokio/io/async_seek.rs.html#18-53
   [5]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [6]: https://doc.rust-lang.org/1.94.1/std/io/enum.SeekFrom.html (enum std::io::SeekFrom)
   [7]: https://doc.rust-lang.org/1.94.1/std/io/error/type.Result.html (type std::io::error::Result)
   [8]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [9]: https://doc.rust-lang.org/1.94.1/core/task/wake/struct.Context.html (struct core::task::wake::Context)
   [10]: https://doc.rust-lang.org/1.94.1/core/task/poll/enum.Poll.html (enum core::task::poll::Poll)
   [11]: https://doc.rust-lang.org/1.94.1/std/primitive.u64.html
   [12]: https://doc.rust-lang.org/1.94.1/std/io/trait.Seek.html (trait std::io::Seek)
   [13]: https://doc.rust-lang.org/1.94.1/std/io/trait.Seek.html#tymethod.seek (method std::io::Seek::seek)
   [14]: crate::io::AsyncSeekExt
   [15]: ../../src/tokio/io/async_seek.rs.html#33
   [16]: https://doc.rust-lang.org/1.94.1/std/io/error/enum.ErrorKind.html#variant.Other (variant std::io::error::ErrorKind::Other)
   [17]: ../../src/tokio/io/async_seek.rs.html#52
   [18]: https://doc.rust-lang.org/1.94.1/std/io/enum.SeekFrom.html#variant.Start (variant std::io::SeekFrom::Start)
   [19]: ../../src/tokio/io/async_seek.rs.html#75-87
   [20]: trait.AsyncSeek.html (trait tokio::io::AsyncSeek)
   [21]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.DerefMut.html (trait core::ops::deref::DerefMut)
   [22]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#associatedtype.Target (type core::ops::deref::Deref::Target)
   [23]: ../../src/tokio/io/async_seek.rs.html#80-82
   [24]: ../../src/tokio/io/async_seek.rs.html#84-86
   [25]: ../../src/tokio/io/async_seek.rs.html#89-96
   [26]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [27]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [28]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [29]: https://doc.rust-lang.org/1.94.1/std/io/cursor/struct.Cursor.html (struct std::io::cursor::Cursor)
   [30]: ../../src/tokio/io/async_seek.rs.html#90-92
   [31]: ../../src/tokio/io/async_seek.rs.html#93-95
   [32]: ../../src/tokio/io/async_seek.rs.html#71-73
   [33]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [34]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [35]: ../../src/tokio/io/async_seek.rs.html#72
   [36]: ../../src/tokio/io/async_seek.rs.html#67-69
   [37]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [38]: ../../src/tokio/io/async_seek.rs.html#68

