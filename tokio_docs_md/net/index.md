## Module net

## [tokio][1]1.51.1

## Module net

### Sections

  * Organization



### Module Items

  * Traits



## [In crate tokio][2]

[tokio][2]

# Module net Copy item path

[Source][3]

Expand description

TCP/UDP/Unix bindings for `tokio`.

This module contains the TCP/UDP/Unix networking types, similar to the standard library, which can be used to implement networking protocols.

## §Organization

  * [`TcpListener`][4] and [`TcpStream`][5] provide functionality for communication over TCP
  * [`UdpSocket`][6] provides functionality for communication over UDP
  * [`UnixListener`][7] and [`UnixStream`][8] provide functionality for communication over a Unix Domain Stream Socket **(available on Unix only)**
  * [`UnixDatagram`][9] provides functionality for communication over Unix Domain Datagram Socket **(available on Unix only)**
  * [`tokio::net::unix::pipe`][10] for FIFO pipes **(available on Unix only)**
  * [`tokio::net::windows::named_pipe`][11] for Named Pipes **(available on Windows only)**



For IO resources not available in `tokio::net`, you can use [`AsyncFd`][12].

## Traits§

[ToSocketAddrs][13]
    Converts or resolves without blocking to one or more `SocketAddr` values.

   [1]: ../../tokio/index.html
   [2]: ../index.html
   [3]: ../../src/tokio/net/mod.rs.html#1-64
   [4]: TcpListener
   [5]: TcpStream
   [6]: UdpSocket
   [7]: UnixListener
   [8]: UnixStream
   [9]: UnixDatagram
   [10]: unix::pipe
   [11]: windows::named_pipe
   [12]: crate::io::unix::AsyncFd
   [13]: trait.ToSocketAddrs.html (trait tokio::net::ToSocketAddrs)

