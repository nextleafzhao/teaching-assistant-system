## Module io

## [tokio][1]1.51.1

## Module io

### Sections

  * `AsyncRead` and `AsyncWrite`
    * Buffered Readers and Writers
    * Implementing `AsyncRead` and `AsyncWrite`
    * Conversion to and from Stream/Sink
  * Standard input and output
  * `std` re-exports



### Module Items

  * Re-exports
  * Structs
  * Traits



## [In crate tokio][2]

[tokio][2]

# Module io Copy item path

[Source][3]

Expand description

Traits, helpers, and type definitions for asynchronous I/O functionality.

This module is the asynchronous version of `std::io`. Primarily, it defines two traits, [`AsyncRead`][4] and [`AsyncWrite`][5], which are asynchronous versions of the [`Read`][6] and [`Write`][7] traits in the standard library.

## §`AsyncRead` and `AsyncWrite`

Like the standard library’s [`Read`][6] and [`Write`][7] traits, [`AsyncRead`][4] and [`AsyncWrite`][5] provide the most general interface for reading and writing input and output. Unlike the standard library’s traits, however, they are _asynchronous_ — meaning that reading from or writing to a `tokio::io` type will _yield_ to the Tokio scheduler when IO is not ready, rather than blocking. This allows other tasks to run while waiting on IO.

Another difference is that `AsyncRead` and `AsyncWrite` only contain core methods needed to provide asynchronous reading and writing functionality. Instead, utility methods are defined in the [`AsyncReadExt`][8] and [`AsyncWriteExt`][9] extension traits. These traits are automatically implemented for all values that implement `AsyncRead` and `AsyncWrite` respectively.

End users will rarely interact directly with `AsyncRead` and `AsyncWrite`. Instead, they will use the async functions defined in the extension traits. Library authors are expected to implement `AsyncRead` and `AsyncWrite` in order to provide types that behave like byte streams.

Even with these differences, Tokio’s `AsyncRead` and `AsyncWrite` traits can be used in almost exactly the same manner as the standard library’s `Read` and `Write`. Most types in the standard library that implement `Read` and `Write` have asynchronous equivalents in `tokio` that implement `AsyncRead` and `AsyncWrite`, such as [`File`][10] and [`TcpStream`][11].

For example, the standard library documentation introduces `Read` by [demonstrating][12] reading some bytes from a [`std::fs::File`][13]. We can do the same with [`tokio::fs::File`][10]:
[code] 
    use tokio::io::{self, AsyncReadExt};
    use tokio::fs::File;
    
    #[tokio::main]
    async fn main() -> io::Result<()> {
        let mut f = File::open("foo.txt").await?;
        let mut buffer = [0; 10];
    
        // read up to 10 bytes
        let n = f.read(&mut buffer).await?;
    
        println!("The bytes: {:?}", &buffer[..n]);
        Ok(())
    }
[/code]

### §Buffered Readers and Writers

Byte-based interfaces are unwieldy and can be inefficient, as we’d need to be making near-constant calls to the operating system. To help with this, `std::io` comes with [support for _buffered_ readers and writers][14], and therefore, `tokio::io` does as well.

Tokio provides an async version of the [`std::io::BufRead`][15] trait, [`AsyncBufRead`][16]; and async [`BufReader`][17] and [`BufWriter`][18] structs, which wrap readers and writers. These wrappers use a buffer, reducing the number of calls and providing nicer methods for accessing exactly what you want.

For example, [`BufReader`][17] works with the [`AsyncBufRead`][16] trait to add extra methods to any async reader:
[code] 
    use tokio::io::{self, BufReader, AsyncBufReadExt};
    use tokio::fs::File;
    
    #[tokio::main]
    async fn main() -> io::Result<()> {
        let f = File::open("foo.txt").await?;
        let mut reader = BufReader::new(f);
        let mut buffer = String::new();
    
        // read a line into buffer
        reader.read_line(&mut buffer).await?;
    
        println!("{}", buffer);
        Ok(())
    }
[/code]

[`BufWriter`][18] doesn’t add any new ways of writing; it just buffers every call to [`write`][19]. However, you **must** flush [`BufWriter`][18] to ensure that any buffered data is written.
[code] 
    use tokio::io::{self, BufWriter, AsyncWriteExt};
    use tokio::fs::File;
    
    #[tokio::main]
    async fn main() -> io::Result<()> {
        let f = File::create("foo.txt").await?;
        {
            let mut writer = BufWriter::new(f);
    
            // Write a byte to the buffer.
            writer.write(&[42u8]).await?;
    
            // Flush the buffer before it goes out of scope.
            writer.flush().await?;
    
        } // Unless flushed or shut down, the contents of the buffer is discarded on drop.
    
        Ok(())
    }
[/code]

### §Implementing `AsyncRead` and `AsyncWrite`

Because they are traits, we can implement [`AsyncRead`][4] and [`AsyncWrite`][5] for our own types, as well. Note that these traits must only be implemented for non-blocking I/O types that integrate with the futures type system. In other words, these types must never block the thread, and instead the current task is notified when the I/O resource is ready.

### §Conversion to and from Stream/Sink

It is often convenient to encapsulate the reading and writing of bytes in a [`Stream`][20] or [`Sink`][21] of data.

Tokio provides simple wrappers for converting [`AsyncRead`][4] to [`Stream`][20] and vice-versa in the [tokio-util][22] crate, see [`ReaderStream`][23] and [`StreamReader`][24].

There are also utility traits that abstract the asynchronous buffering necessary to write your own adaptors for encoding and decoding bytes to/from your structured data, allowing to transform something that implements [`AsyncRead`][4]/[`AsyncWrite`][5] into a [`Stream`][20]/[`Sink`][21], see [`Decoder`][25] and [`Encoder`][26] in the [tokio-util::codec][27] module.

## §Standard input and output

Tokio provides asynchronous APIs to standard [input][28], [output][29], and [error][30]. These APIs are very similar to the ones provided by `std`, but they also implement [`AsyncRead`][4] and [`AsyncWrite`][5].

Note that the standard input / output APIs **must** be used from the context of the Tokio runtime, as they require Tokio-specific features to function. Calling these functions outside of a Tokio runtime will panic.

## §`std` re-exports

Additionally, [`Error`][31], [`ErrorKind`][32], [`Result`][33], and [`SeekFrom`][34] are re-exported from `std::io` for ease of use.

## Re-exports§

`pub use std::io::[Error][31];`
`pub use std::io::[ErrorKind][32];`
`pub use std::io::[Result][33];`
`pub use std::io::[SeekFrom][34];`

## Structs§

[ReadBuf][35]
    A wrapper around a byte buffer that is incrementally filled and initialized.

## Traits§

[AsyncBufRead][16]
    Reads bytes asynchronously.
[AsyncRead][4]
    Reads bytes from a source.
[AsyncSeek][36]
    Seek bytes asynchronously.
[AsyncWrite][5]
    Writes bytes asynchronously.

   [1]: ../../tokio/index.html
   [2]: ../index.html
   [3]: ../../src/tokio/io/mod.rs.html#1-308
   [4]: trait.AsyncRead.html (trait tokio::io::AsyncRead)
   [5]: trait.AsyncWrite.html (trait tokio::io::AsyncWrite)
   [6]: https://doc.rust-lang.org/1.94.1/std/io/trait.Read.html (trait std::io::Read)
   [7]: https://doc.rust-lang.org/1.94.1/std/io/trait.Write.html (trait std::io::Write)
   [8]: trait@AsyncReadExt
   [9]: trait@AsyncWriteExt
   [10]: crate::fs::File
   [11]: crate::net::TcpStream
   [12]: https://doc.rust-lang.org/1.94.1/std/io/index.html#read-and-write (mod std::io)
   [13]: https://doc.rust-lang.org/1.94.1/std/fs/struct.File.html (struct std::fs::File)
   [14]: https://doc.rust-lang.org/1.94.1/std/io/index.html#bufreader-and-bufwriter (mod std::io)
   [15]: https://doc.rust-lang.org/1.94.1/std/io/trait.BufRead.html (trait std::io::BufRead)
   [16]: trait.AsyncBufRead.html (trait tokio::io::AsyncBufRead)
   [17]: crate::io::BufReader
   [18]: crate::io::BufWriter
   [19]: crate::io::AsyncWriteExt::write
   [20]: https://docs.rs/futures/0.3/futures/stream/trait.Stream.html
   [21]: https://docs.rs/futures/0.3/futures/sink/trait.Sink.html
   [22]: https://docs.rs/tokio-util
   [23]: https://docs.rs/tokio-util/latest/tokio_util/io/struct.ReaderStream.html
   [24]: https://docs.rs/tokio-util/latest/tokio_util/io/struct.StreamReader.html
   [25]: https://docs.rs/tokio-util/latest/tokio_util/codec/trait.Decoder.html
   [26]: https://docs.rs/tokio-util/latest/tokio_util/codec/trait.Encoder.html
   [27]: https://docs.rs/tokio-util/latest/tokio_util/codec/index.html
   [28]: fn@stdin
   [29]: fn@stdout
   [30]: fn@stderr
   [31]: https://doc.rust-lang.org/1.94.1/std/io/error/struct.Error.html (struct std::io::error::Error)
   [32]: https://doc.rust-lang.org/1.94.1/std/io/error/enum.ErrorKind.html (enum std::io::error::ErrorKind)
   [33]: https://doc.rust-lang.org/1.94.1/std/io/error/type.Result.html (type std::io::error::Result)
   [34]: https://doc.rust-lang.org/1.94.1/std/io/enum.SeekFrom.html (enum std::io::SeekFrom)
   [35]: struct.ReadBuf.html (struct tokio::io::ReadBuf)
   [36]: trait.AsyncSeek.html (trait tokio::io::AsyncSeek)

