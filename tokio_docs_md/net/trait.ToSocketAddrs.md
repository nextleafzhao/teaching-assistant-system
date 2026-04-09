## ToSocketAddrs

## [tokio][1]1.51.1

## ToSocketAddrs

### Sections

  * DNS
  * Calling



### Implementations on Foreign Types

  * &T
  * &[SocketAddr]
  * (IpAddr, u16)
  * (Ipv4Addr, u16)
  * (Ipv6Addr, u16)
  * SocketAddr
  * SocketAddrV4
  * SocketAddrV6



### Implementors

## [In tokio::net][2]

[tokio][3]::[net][2]

# Trait ToSocketAddrs Copy item path

[Source][4]
[code] 
    pub trait ToSocketAddrs: ToSocketAddrsPriv { }
[/code]

Expand description

Converts or resolves without blocking to one or more `SocketAddr` values.

## §DNS

Implementations of `ToSocketAddrs` for string types require a DNS lookup.

## §Calling

Currently, this trait is only used as an argument to Tokio functions that need to reference a target socket address. To perform a `SocketAddr` conversion directly, use [`lookup_host()`][5].

This trait is sealed and is intended to be opaque. The details of the trait will change. Stabilization is pending enhancements to the Rust language.

## Implementations on Foreign Types§

[Source][6]§

### impl [ToSocketAddrs][7] for &[[SocketAddr][8]]

[Source][9]§

### impl [ToSocketAddrs][7] for ([IpAddr][10], [u16][11])

[Source][12]§

### impl [ToSocketAddrs][7] for ([Ipv4Addr][13], [u16][11])

[Source][14]§

### impl [ToSocketAddrs][7] for ([Ipv6Addr][15], [u16][11])

[Source][16]§

### impl [ToSocketAddrs][7] for [SocketAddr][8]

[Source][17]§

### impl [ToSocketAddrs][7] for [SocketAddrV4][18]

[Source][19]§

### impl [ToSocketAddrs][7] for [SocketAddrV6][20]

[Source][21]§

### impl<T: [ToSocketAddrs][7] \+ ?[Sized][22]> [ToSocketAddrs][7] for [&T][23]

## Implementors§

   [1]: ../../tokio/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../../src/tokio/net/addr.rs.html#19
   [5]: super::lookup_host()
   [6]: ../../src/tokio/net/addr.rs.html#132
   [7]: trait.ToSocketAddrs.html (trait tokio::net::ToSocketAddrs)
   [8]: https://doc.rust-lang.org/1.94.1/core/net/socket_addr/enum.SocketAddr.html (enum core::net::socket_addr::SocketAddr)
   [9]: ../../src/tokio/net/addr.rs.html#90
   [10]: https://doc.rust-lang.org/1.94.1/core/net/ip_addr/enum.IpAddr.html (enum core::net::ip_addr::IpAddr)
   [11]: https://doc.rust-lang.org/1.94.1/std/primitive.u16.html
   [12]: ../../src/tokio/net/addr.rs.html#104
   [13]: https://doc.rust-lang.org/1.94.1/core/net/ip_addr/struct.Ipv4Addr.html (struct core::net::ip_addr::Ipv4Addr)
   [14]: ../../src/tokio/net/addr.rs.html#118
   [15]: https://doc.rust-lang.org/1.94.1/core/net/ip_addr/struct.Ipv6Addr.html (struct core::net::ip_addr::Ipv6Addr)
   [16]: ../../src/tokio/net/addr.rs.html#50
   [17]: ../../src/tokio/net/addr.rs.html#64
   [18]: https://doc.rust-lang.org/1.94.1/core/net/socket_addr/struct.SocketAddrV4.html (struct core::net::socket_addr::SocketAddrV4)
   [19]: ../../src/tokio/net/addr.rs.html#77
   [20]: https://doc.rust-lang.org/1.94.1/core/net/socket_addr/struct.SocketAddrV6.html (struct core::net::socket_addr::SocketAddrV6)
   [21]: ../../src/tokio/net/addr.rs.html#34
   [22]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [23]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html

