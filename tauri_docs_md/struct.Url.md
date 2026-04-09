## Url

[![logo][1]][2]

## [tauri][2]2.10.3

## Url

### Methods

  * as_str
  * authority
  * cannot_be_a_base
  * deserialize_internal
  * domain
  * fragment
  * from_directory_path
  * from_file_path
  * has_authority
  * has_host
  * host
  * host_str
  * into_string
  * is_special
  * join
  * make_relative
  * options
  * origin
  * parse
  * parse_with_params
  * password
  * path
  * path_segments
  * path_segments_mut
  * port
  * port_or_known_default
  * query
  * query_pairs
  * query_pairs_mut
  * scheme
  * serialize_internal
  * set_fragment
  * set_host
  * set_ip_host
  * set_password
  * set_path
  * set_port
  * set_query
  * set_scheme
  * set_username
  * socket_addrs
  * to_file_path
  * username



### Trait Implementations

  * AsRef<str>
  * Clone
  * Debug
  * Deserialize<'de>
  * Display
  * Eq
  * From<Url>
  * FromStr
  * Hash
  * Index<Range<Position>>
  * Index<RangeFrom<Position>>
  * Index<RangeFull>
  * Index<RangeTo<Position>>
  * Ord
  * PartialEq
  * PartialOrd
  * Serialize
  * TryFrom<&'a str>



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
  * CommandArg<'de, R>
  * DeserializeOwned
  * From<T>
  * Into<U>
  * IpcResponse
  * RuntimeCapability
  * ScopeObject
  * Serialize
  * ToOwned
  * ToString
  * TryFrom<U>
  * TryInto<U>
  * UserEvent



## [In crate tauri][3]

[tauri][3]

# Struct Url Copy item path

[Source][4]
[code] 
    pub struct Url { /* private fields */ }
[/code]

Expand description

A parsed URL record.

## Implementations§

[Source][5]§

### impl [Url][6]

[Source][7]

#### pub fn parse(input: &[str][8]) -> [Result][9]<[Url][6], [ParseError][10]>

Parse an absolute URL from a string.

##### §Examples
[code] 
    use url::Url;
    
    let url = Url::parse("https://example.net")?;
[/code]

##### §Errors

If the function can not parse an absolute URL from the given string, a [`ParseError`][11] variant will be returned.

[Source][12]

#### pub fn parse_with_params<I, K, V>( input: &[str][8], iter: I, ) -> [Result][9]<[Url][6], [ParseError][10]>

where I: [IntoIterator][13], <I as [IntoIterator][13]>::[Item][14]: [Borrow][15]<[(K, V)][16]>, K: [AsRef][17]<[str][8]>, V: [AsRef][17]<[str][8]>,

Parse an absolute URL from a string and add params to its query string.

Existing params are not removed.

##### §Examples
[code] 
    use url::Url;
    
    let url = Url::parse_with_params("https://example.net?dont=clobberme",
                                     &[("lang", "rust"), ("browser", "servo")])?;
    assert_eq!("https://example.net/?dont=clobberme&lang=rust&browser=servo", url.as_str());
[/code]

##### §Errors

If the function can not parse an absolute URL from the given string, a [`ParseError`][11] variant will be returned.

[Source][18]

#### pub fn join(&self, input: &[str][8]) -> [Result][9]<[Url][6], [ParseError][10]>

Parse a string as an URL, with this URL as the base URL.

The inverse of this is `make_relative`.

##### §Notes

  * A trailing slash is significant. Without it, the last path component is considered to be a “file” name to be removed to get at the “directory” that is used as the base.
  * A [scheme relative special URL][19] as input replaces everything in the base URL after the scheme.
  * An absolute URL (with a scheme) as input replaces the whole base URL (even the scheme).



##### §Examples
[code] 
    use url::Url;
    
    // Base without a trailing slash
    let base = Url::parse("https://example.net/a/b.html")?;
    let url = base.join("c.png")?;
    assert_eq!(url.as_str(), "https://example.net/a/c.png");  // Not /a/b.html/c.png
    
    // Base with a trailing slash
    let base = Url::parse("https://example.net/a/b/")?;
    let url = base.join("c.png")?;
    assert_eq!(url.as_str(), "https://example.net/a/b/c.png");
    
    // Input as scheme relative special URL
    let base = Url::parse("https://alice.com/a")?;
    let url = base.join("//eve.com/b")?;
    assert_eq!(url.as_str(), "https://eve.com/b");
    
    // Input as base url relative special URL
    let base = Url::parse("https://alice.com/a")?;
    let url = base.join("/v1/meta")?;
    assert_eq!(url.as_str(), "https://alice.com/v1/meta");
    
    // Input as absolute URL
    let base = Url::parse("https://alice.com/a")?;
    let url = base.join("http://eve.com/b")?;
    assert_eq!(url.as_str(), "http://eve.com/b");  // http instead of https
    
[/code]

##### §Errors

If the function can not parse an URL from the given string with this URL as the base URL, a [`ParseError`][11] variant will be returned.

[Source][20]

#### pub fn make_relative(&self, url: &[Url][6]) -> [Option][21]<[String][22]>

Creates a relative URL if possible, with this URL as the base URL.

This is the inverse of `join`.

##### §Examples
[code] 
    use url::Url;
    
    let base = Url::parse("https://example.net/a/b.html")?;
    let url = Url::parse("https://example.net/a/c.png")?;
    let relative = base.make_relative(&url);
    assert_eq!(relative.as_ref().map(|s| s.as_str()), Some("c.png"));
    
    let base = Url::parse("https://example.net/a/b/")?;
    let url = Url::parse("https://example.net/a/b/c.png")?;
    let relative = base.make_relative(&url);
    assert_eq!(relative.as_ref().map(|s| s.as_str()), Some("c.png"));
    
    let base = Url::parse("https://example.net/a/b/")?;
    let url = Url::parse("https://example.net/a/d/c.png")?;
    let relative = base.make_relative(&url);
    assert_eq!(relative.as_ref().map(|s| s.as_str()), Some("../d/c.png"));
    
    let base = Url::parse("https://example.net/a/b.html?c=d")?;
    let url = Url::parse("https://example.net/a/b.html?e=f")?;
    let relative = base.make_relative(&url);
    assert_eq!(relative.as_ref().map(|s| s.as_str()), Some("?e=f"));
[/code]

##### §Errors

If this URL can’t be a base for the given URL, `None` is returned. This is for example the case if the scheme, host or port are not the same.

[Source][23]

#### pub fn options<'a>() -> [ParseOptions][24]<'a>

Return a default `ParseOptions` that can fully configure the URL parser.

##### §Examples

Get default `ParseOptions`, then change base url
[code] 
    use url::Url;
    let options = Url::options();
    let api = Url::parse("https://api.example.com")?;
    let base_url = options.base_url(Some(&api));
    let version_url = base_url.parse("version.json")?;
    assert_eq!(version_url.as_str(), "https://api.example.com/version.json");
[/code]

[Source][25]

#### pub fn as_str(&self) -> &[str][8]

Return the serialization of this URL.

This is fast since that serialization is already stored in the `Url` struct.

##### §Examples
[code] 
    use url::Url;
    
    let url_str = "https://example.net/";
    let url = Url::parse(url_str)?;
    assert_eq!(url.as_str(), url_str);
[/code]

[Source][26]

#### pub fn into_string(self) -> [String][22]

👎Deprecated since 2.3.0: use Into<String>

Return the serialization of this URL.

This consumes the `Url` and takes ownership of the `String` stored in it.

##### §Examples
[code] 
    use url::Url;
    
    let url_str = "https://example.net/";
    let url = Url::parse(url_str)?;
    assert_eq!(String::from(url), url_str);
[/code]

[Source][27]

#### pub fn origin(&self) -> [Origin][28]

Return the origin of this URL (<https://url.spec.whatwg.org/#origin>)

Note: this returns an opaque origin for `file:` URLs, which causes `url.origin() != url.origin()`.

##### §Examples

URL with `ftp` scheme:
[code] 
    use url::{Host, Origin, Url};
    
    let url = Url::parse("ftp://example.com/foo")?;
    assert_eq!(url.origin(),
               Origin::Tuple("ftp".into(),
                             Host::Domain("example.com".into()),
                             21));
[/code]

URL with `blob` scheme:
[code] 
    use url::{Host, Origin, Url};
    
    let url = Url::parse("blob:https://example.com/foo")?;
    assert_eq!(url.origin(),
               Origin::Tuple("https".into(),
                             Host::Domain("example.com".into()),
                             443));
[/code]

URL with `file` scheme:
[code] 
    use url::{Host, Origin, Url};
    
    let url = Url::parse("file:///tmp/foo")?;
    assert!(!url.origin().is_tuple());
    
    let other_url = Url::parse("file:///tmp/foo")?;
    assert!(url.origin() != other_url.origin());
[/code]

URL with other scheme:
[code] 
    use url::{Host, Origin, Url};
    
    let url = Url::parse("foo:bar")?;
    assert!(!url.origin().is_tuple());
[/code]

[Source][29]

#### pub fn scheme(&self) -> &[str][8]

Return the scheme of this URL, lower-cased, as an ASCII string without the ‘:’ delimiter.

##### §Examples
[code] 
    use url::Url;
    
    let url = Url::parse("file:///tmp/foo")?;
    assert_eq!(url.scheme(), "file");
[/code]

[Source][30]

#### pub fn is_special(&self) -> [bool][31]

Return whether the URL is special (has a special scheme)

##### §Examples
[code] 
    use url::Url;
    
    assert!(Url::parse("http:///tmp/foo")?.is_special());
    assert!(Url::parse("file:///tmp/foo")?.is_special());
    assert!(!Url::parse("moz:///tmp/foo")?.is_special());
[/code]

[Source][32]

#### pub fn has_authority(&self) -> [bool][31]

Return whether the URL has an ‘authority’, which can contain a username, password, host, and port number.

URLs that do _not_ are either path-only like `unix:/run/foo.socket` or cannot-be-a-base like `data:text/plain,Stuff`.

See also the `authority` method.

##### §Examples
[code] 
    use url::Url;
    
    let url = Url::parse("ftp://rms@example.com")?;
    assert!(url.has_authority());
    
    let url = Url::parse("unix:/run/foo.socket")?;
    assert!(!url.has_authority());
    
    let url = Url::parse("data:text/plain,Stuff")?;
    assert!(!url.has_authority());
[/code]

[Source][33]

#### pub fn authority(&self) -> &[str][8]

Return the authority of this URL as an ASCII string.

Non-ASCII domains are punycode-encoded per IDNA if this is the host of a special URL, or percent encoded for non-special URLs. IPv6 addresses are given between `[` and `]` brackets. Ports are omitted if they match the well known port of a special URL.

Username and password are percent-encoded.

See also the `has_authority` method.

##### §Examples
[code] 
    use url::Url;
    
    let url = Url::parse("unix:/run/foo.socket")?;
    assert_eq!(url.authority(), "");
    let url = Url::parse("file:///tmp/foo")?;
    assert_eq!(url.authority(), "");
    let url = Url::parse("https://user:password@example.com/tmp/foo")?;
    assert_eq!(url.authority(), "user:password@example.com");
    let url = Url::parse("irc://àlex.рф.example.com:6667/foo")?;
    assert_eq!(url.authority(), "%C3%A0lex.%D1%80%D1%84.example.com:6667");
    let url = Url::parse("http://àlex.рф.example.com:80/foo")?;
    assert_eq!(url.authority(), "xn--lex-8ka.xn--p1ai.example.com");
[/code]

[Source][34]

#### pub fn cannot_be_a_base(&self) -> [bool][31]

Return whether this URL is a cannot-be-a-base URL, meaning that parsing a relative URL string with this URL as the base will return an error.

This is the case if the scheme and `:` delimiter are not followed by a `/` slash, as is typically the case of `data:` and `mailto:` URLs.

##### §Examples
[code] 
    use url::Url;
    
    let url = Url::parse("ftp://rms@example.com")?;
    assert!(!url.cannot_be_a_base());
    
    let url = Url::parse("unix:/run/foo.socket")?;
    assert!(!url.cannot_be_a_base());
    
    let url = Url::parse("data:text/plain,Stuff")?;
    assert!(url.cannot_be_a_base());
[/code]

[Source][35]

#### pub fn username(&self) -> &[str][8]

Return the username for this URL (typically the empty string) as a percent-encoded ASCII string.

##### §Examples
[code] 
    use url::Url;
    
    let url = Url::parse("ftp://rms@example.com")?;
    assert_eq!(url.username(), "rms");
    
    let url = Url::parse("ftp://:secret123@example.com")?;
    assert_eq!(url.username(), "");
    
    let url = Url::parse("https://example.com")?;
    assert_eq!(url.username(), "");
[/code]

[Source][36]

#### pub fn password(&self) -> [Option][21]<&[str][8]>

Return the password for this URL, if any, as a percent-encoded ASCII string.

##### §Examples
[code] 
    use url::Url;
    
    let url = Url::parse("ftp://rms:secret123@example.com")?;
    assert_eq!(url.password(), Some("secret123"));
    
    let url = Url::parse("ftp://:secret123@example.com")?;
    assert_eq!(url.password(), Some("secret123"));
    
    let url = Url::parse("ftp://rms@example.com")?;
    assert_eq!(url.password(), None);
    
    let url = Url::parse("https://example.com")?;
    assert_eq!(url.password(), None);
[/code]

[Source][37]

#### pub fn has_host(&self) -> [bool][31]

Equivalent to `url.host().is_some()`.

##### §Examples
[code] 
    use url::Url;
    
    let url = Url::parse("ftp://rms@example.com")?;
    assert!(url.has_host());
    
    let url = Url::parse("unix:/run/foo.socket")?;
    assert!(!url.has_host());
    
    let url = Url::parse("data:text/plain,Stuff")?;
    assert!(!url.has_host());
[/code]

[Source][38]

#### pub fn host_str(&self) -> [Option][21]<&[str][8]>

Return the string representation of the host (domain or IP address) for this URL, if any.

Non-ASCII domains are punycode-encoded per IDNA if this is the host of a special URL, or percent encoded for non-special URLs. IPv6 addresses are given between `[` and `]` brackets.

Cannot-be-a-base URLs (typical of `data:` and `mailto:`) and some `file:` URLs don’t have a host.

See also the `host` method.

##### §Examples
[code] 
    use url::Url;
    
    let url = Url::parse("https://127.0.0.1/index.html")?;
    assert_eq!(url.host_str(), Some("127.0.0.1"));
    
    let url = Url::parse("https://subdomain.example.com")?;
    assert_eq!(url.host_str(), Some("subdomain.example.com"));
    
    let url = Url::parse("ftp://rms@example.com")?;
    assert_eq!(url.host_str(), Some("example.com"));
    
    let url = Url::parse("unix:/run/foo.socket")?;
    assert_eq!(url.host_str(), None);
    
    let url = Url::parse("data:text/plain,Stuff")?;
    assert_eq!(url.host_str(), None);
[/code]

[Source][39]

#### pub fn host(&self) -> [Option][21]<[Host][40]<&[str][8]>>

Return the parsed representation of the host for this URL. Non-ASCII domain labels are punycode-encoded per IDNA if this is the host of a special URL, or percent encoded for non-special URLs.

Cannot-be-a-base URLs (typical of `data:` and `mailto:`) and some `file:` URLs don’t have a host.

See also the `host_str` method.

##### §Examples
[code] 
    use url::Url;
    
    let url = Url::parse("https://127.0.0.1/index.html")?;
    assert!(url.host().is_some());
    
    let url = Url::parse("ftp://rms@example.com")?;
    assert!(url.host().is_some());
    
    let url = Url::parse("unix:/run/foo.socket")?;
    assert!(url.host().is_none());
    
    let url = Url::parse("data:text/plain,Stuff")?;
    assert!(url.host().is_none());
[/code]

[Source][41]

#### pub fn domain(&self) -> [Option][21]<&[str][8]>

If this URL has a host and it is a domain name (not an IP address), return it. Non-ASCII domains are punycode-encoded per IDNA if this is the host of a special URL, or percent encoded for non-special URLs.

##### §Examples
[code] 
    use url::Url;
    
    let url = Url::parse("https://127.0.0.1/")?;
    assert_eq!(url.domain(), None);
    
    let url = Url::parse("mailto:rms@example.net")?;
    assert_eq!(url.domain(), None);
    
    let url = Url::parse("https://example.com/")?;
    assert_eq!(url.domain(), Some("example.com"));
    
    let url = Url::parse("https://subdomain.example.com/")?;
    assert_eq!(url.domain(), Some("subdomain.example.com"));
    
[/code]

[Source][42]

#### pub fn port(&self) -> [Option][21]<[u16][43]>

Return the port number for this URL, if any.

Note that default port numbers are never reflected by the serialization, use the `port_or_known_default()` method if you want a default port number returned.

##### §Examples
[code] 
    use url::Url;
    
    let url = Url::parse("https://example.com")?;
    assert_eq!(url.port(), None);
    
    let url = Url::parse("https://example.com:443/")?;
    assert_eq!(url.port(), None);
    
    let url = Url::parse("ssh://example.com:22")?;
    assert_eq!(url.port(), Some(22));
[/code]

[Source][44]

#### pub fn port_or_known_default(&self) -> [Option][21]<[u16][43]>

Return the port number for this URL, or the default port number if it is known.

This method only knows the default port number of the `http`, `https`, `ws`, `wss` and `ftp` schemes.

For URLs in these schemes, this method always returns `Some(_)`. For other schemes, it is the same as `Url::port()`.

##### §Examples
[code] 
    use url::Url;
    
    let url = Url::parse("foo://example.com")?;
    assert_eq!(url.port_or_known_default(), None);
    
    let url = Url::parse("foo://example.com:1456")?;
    assert_eq!(url.port_or_known_default(), Some(1456));
    
    let url = Url::parse("https://example.com")?;
    assert_eq!(url.port_or_known_default(), Some(443));
[/code]

[Source][45]

#### pub fn socket_addrs( &self, default_port_number: impl [Fn][46]() -> [Option][21]<[u16][43]>, ) -> [Result][9]<[Vec][47]<[SocketAddr][48]>, [Error][49]>

Resolve a URL’s host and port number to `SocketAddr`.

If the URL has the default port number of a scheme that is unknown to this library, `default_port_number` provides an opportunity to provide the actual port number. In non-example code this should be implemented either simply as `|| None`, or by matching on the URL’s `.scheme()`.

If the host is a domain, it is resolved using the standard library’s DNS support.

##### §Examples
[code] 
    let url = url::Url::parse("https://example.net/").unwrap();
    let addrs = url.socket_addrs(|| None).unwrap();
    std::net::TcpStream::connect(&*addrs)
[/code]
[code] 
    /// With application-specific known default port numbers
    fn socket_addrs(url: url::Url) -> std::io::Result<Vec<std::net::SocketAddr>> {
        url.socket_addrs(|| match url.scheme() {
            "socks5" | "socks5h" => Some(1080),
            _ => None,
        })
    }
[/code]

[Source][50]

#### pub fn path(&self) -> &[str][8]

Return the path for this URL, as a percent-encoded ASCII string. For cannot-be-a-base URLs, this is an arbitrary string that doesn’t start with ‘/’. For other URLs, this starts with a ‘/’ slash and continues with slash-separated path segments.

##### §Examples
[code] 
    use url::{Url, ParseError};
    
    let url = Url::parse("https://example.com/api/versions?page=2")?;
    assert_eq!(url.path(), "/api/versions");
    
    let url = Url::parse("https://example.com")?;
    assert_eq!(url.path(), "/");
    
    let url = Url::parse("https://example.com/countries/việt nam")?;
    assert_eq!(url.path(), "/countries/vi%E1%BB%87t%20nam");
[/code]

[Source][51]

#### pub fn path_segments(&self) -> [Option][21]<[Split][52]<'_, [char][53]>>

Unless this URL is cannot-be-a-base, return an iterator of ‘/’ slash-separated path segments, each as a percent-encoded ASCII string.

Return `None` for cannot-be-a-base URLs.

When `Some` is returned, the iterator always contains at least one string (which may be empty).

##### §Examples
[code] 
    use url::Url;
    
    
    let url = Url::parse("https://example.com/foo/bar")?;
    let mut path_segments = url.path_segments().ok_or_else(|| "cannot be base")?;
    assert_eq!(path_segments.next(), Some("foo"));
    assert_eq!(path_segments.next(), Some("bar"));
    assert_eq!(path_segments.next(), None);
    
    let url = Url::parse("https://example.com")?;
    let mut path_segments = url.path_segments().ok_or_else(|| "cannot be base")?;
    assert_eq!(path_segments.next(), Some(""));
    assert_eq!(path_segments.next(), None);
    
    let url = Url::parse("data:text/plain,HelloWorld")?;
    assert!(url.path_segments().is_none());
    
    let url = Url::parse("https://example.com/countries/việt nam")?;
    let mut path_segments = url.path_segments().ok_or_else(|| "cannot be base")?;
    assert_eq!(path_segments.next(), Some("countries"));
    assert_eq!(path_segments.next(), Some("vi%E1%BB%87t%20nam"));
[/code]

[Source][54]

#### pub fn query(&self) -> [Option][21]<&[str][8]>

Return this URL’s query string, if any, as a percent-encoded ASCII string.

##### §Examples
[code] 
    use url::Url;
    
    fn run() -> Result<(), ParseError> {
    let url = Url::parse("https://example.com/products?page=2")?;
    let query = url.query();
    assert_eq!(query, Some("page=2"));
    
    let url = Url::parse("https://example.com/products")?;
    let query = url.query();
    assert!(query.is_none());
    
    let url = Url::parse("https://example.com/?country=español")?;
    let query = url.query();
    assert_eq!(query, Some("country=espa%C3%B1ol"));
[/code]

[Source][55]

#### pub fn query_pairs(&self) -> Parse<'_>

Parse the URL’s query string, if any, as `application/x-www-form-urlencoded` and return an iterator of (key, value) pairs.

##### §Examples
[code] 
    use std::borrow::Cow;
    
    use url::Url;
    
    let url = Url::parse("https://example.com/products?page=2&sort=desc")?;
    let mut pairs = url.query_pairs();
    
    assert_eq!(pairs.count(), 2);
    
    assert_eq!(pairs.next(), Some((Cow::Borrowed("page"), Cow::Borrowed("2"))));
    assert_eq!(pairs.next(), Some((Cow::Borrowed("sort"), Cow::Borrowed("desc"))));
[/code]

[Source][56]

#### pub fn fragment(&self) -> [Option][21]<&[str][8]>

Return this URL’s fragment identifier, if any.

A fragment is the part of the URL after the `#` symbol. The fragment is optional and, if present, contains a fragment identifier that identifies a secondary resource, such as a section heading of a document.

In HTML, the fragment identifier is usually the id attribute of a an element that is scrolled to on load. Browsers typically will not send the fragment portion of a URL to the server.

**Note:** the parser did _not_ percent-encode this component, but the input may have been percent-encoded already.

##### §Examples
[code] 
    use url::Url;
    
    let url = Url::parse("https://example.com/data.csv#row=4")?;
    
    assert_eq!(url.fragment(), Some("row=4"));
    
    let url = Url::parse("https://example.com/data.csv#cell=4,1-6,2")?;
    
    assert_eq!(url.fragment(), Some("cell=4,1-6,2"));
[/code]

[Source][57]

#### pub fn set_fragment(&mut self, fragment: [Option][21]<&[str][8]>)

Change this URL’s fragment identifier.

##### §Examples
[code] 
    use url::Url;
    
    let mut url = Url::parse("https://example.com/data.csv")?;
    assert_eq!(url.as_str(), "https://example.com/data.csv");
    
    url.set_fragment(Some("cell=4,1-6,2"));
    assert_eq!(url.as_str(), "https://example.com/data.csv#cell=4,1-6,2");
    assert_eq!(url.fragment(), Some("cell=4,1-6,2"));
    
    url.set_fragment(None);
    assert_eq!(url.as_str(), "https://example.com/data.csv");
    assert!(url.fragment().is_none());
[/code]

[Source][58]

#### pub fn set_query(&mut self, query: [Option][21]<&[str][8]>)

Change this URL’s query string. If `query` is `None`, this URL’s query string will be cleared.

##### §Examples
[code] 
    use url::Url;
    
    let mut url = Url::parse("https://example.com/products")?;
    assert_eq!(url.as_str(), "https://example.com/products");
    
    url.set_query(Some("page=2"));
    assert_eq!(url.as_str(), "https://example.com/products?page=2");
    assert_eq!(url.query(), Some("page=2"));
[/code]

[Source][59]

#### pub fn query_pairs_mut(&mut self) -> Serializer<'_, [UrlQuery][60]<'_>>

Manipulate this URL’s query string, viewed as a sequence of name/value pairs in `application/x-www-form-urlencoded` syntax.

The return value has a method-chaining API:
[code] 
    let mut url = Url::parse("https://example.net?lang=fr#nav")?;
    assert_eq!(url.query(), Some("lang=fr"));
    
    url.query_pairs_mut().append_pair("foo", "bar");
    assert_eq!(url.query(), Some("lang=fr&foo=bar"));
    assert_eq!(url.as_str(), "https://example.net/?lang=fr&foo=bar#nav");
    
    url.query_pairs_mut()
        .clear()
        .append_pair("foo", "bar & baz")
        .append_pair("saisons", "\u{00C9}t\u{00E9}+hiver");
    assert_eq!(url.query(), Some("foo=bar+%26+baz&saisons=%C3%89t%C3%A9%2Bhiver"));
    assert_eq!(url.as_str(),
               "https://example.net/?foo=bar+%26+baz&saisons=%C3%89t%C3%A9%2Bhiver#nav");
[/code]

Note: `url.query_pairs_mut().clear();` is equivalent to `url.set_query(Some(""))`, not `url.set_query(None)`.

The state of `Url` is unspecified if this return value is leaked without being dropped.

[Source][61]

#### pub fn set_path(&mut self, path: &[str][8])

Change this URL’s path.

##### §Examples
[code] 
    use url::Url;
    
    let mut url = Url::parse("https://example.com")?;
    url.set_path("api/comments");
    assert_eq!(url.as_str(), "https://example.com/api/comments");
    assert_eq!(url.path(), "/api/comments");
    
    let mut url = Url::parse("https://example.com/api")?;
    url.set_path("data/report.csv");
    assert_eq!(url.as_str(), "https://example.com/data/report.csv");
    assert_eq!(url.path(), "/data/report.csv");
    
    // `set_path` percent-encodes the given string if it's not already percent-encoded.
    let mut url = Url::parse("https://example.com")?;
    url.set_path("api/some comments");
    assert_eq!(url.as_str(), "https://example.com/api/some%20comments");
    assert_eq!(url.path(), "/api/some%20comments");
    
    // `set_path` will not double percent-encode the string if it's already percent-encoded.
    let mut url = Url::parse("https://example.com")?;
    url.set_path("api/some%20comments");
    assert_eq!(url.as_str(), "https://example.com/api/some%20comments");
    assert_eq!(url.path(), "/api/some%20comments");
    
[/code]

[Source][62]

#### pub fn path_segments_mut(&mut self) -> [Result][9]<[PathSegmentsMut][63]<'_>, [()][64]>

Return an object with methods to manipulate this URL’s path segments.

Return `Err(())` if this URL is cannot-be-a-base.

[Source][65]

#### pub fn set_port(&mut self, port: [Option][21]<[u16][43]>) -> [Result][9]<[()][64], [()][64]>

Change this URL’s port number.

Note that default port numbers are not reflected in the serialization.

If this URL is cannot-be-a-base, does not have a host, or has the `file` scheme; do nothing and return `Err`.

##### §Examples
[code] 
    use url::Url;
    
    
    let mut url = Url::parse("ssh://example.net:2048/")?;
    
    url.set_port(Some(4096)).map_err(|_| "cannot be base")?;
    assert_eq!(url.as_str(), "ssh://example.net:4096/");
    
    url.set_port(None).map_err(|_| "cannot be base")?;
    assert_eq!(url.as_str(), "ssh://example.net/");
[/code]

Known default port numbers are not reflected:
[code] 
    use url::Url;
    
    
    let mut url = Url::parse("https://example.org/")?;
    
    url.set_port(Some(443)).map_err(|_| "cannot be base")?;
    assert!(url.port().is_none());
[/code]

Cannot set port for cannot-be-a-base URLs:
[code] 
    use url::Url;
    
    let mut url = Url::parse("mailto:rms@example.net")?;
    
    let result = url.set_port(Some(80));
    assert!(result.is_err());
    
    let result = url.set_port(None);
    assert!(result.is_err());
[/code]

[Source][66]

#### pub fn set_host(&mut self, host: [Option][21]<&[str][8]>) -> [Result][9]<[()][64], [ParseError][10]>

Change this URL’s host.

Removing the host (calling this with `None`) will also remove any username, password, and port number.

##### §Examples

Change host:
[code] 
    use url::Url;
    
    let mut url = Url::parse("https://example.net")?;
    let result = url.set_host(Some("rust-lang.org"));
    assert!(result.is_ok());
    assert_eq!(url.as_str(), "https://rust-lang.org/");
[/code]

Remove host:
[code] 
    use url::Url;
    
    let mut url = Url::parse("foo://example.net")?;
    let result = url.set_host(None);
    assert!(result.is_ok());
    assert_eq!(url.as_str(), "foo:/");
[/code]

Cannot remove host for ‘special’ schemes (e.g. `http`):
[code] 
    use url::Url;
    
    let mut url = Url::parse("https://example.net")?;
    let result = url.set_host(None);
    assert!(result.is_err());
    assert_eq!(url.as_str(), "https://example.net/");
[/code]

Cannot change or remove host for cannot-be-a-base URLs:
[code] 
    use url::Url;
    
    let mut url = Url::parse("mailto:rms@example.net")?;
    
    let result = url.set_host(Some("rust-lang.org"));
    assert!(result.is_err());
    assert_eq!(url.as_str(), "mailto:rms@example.net");
    
    let result = url.set_host(None);
    assert!(result.is_err());
    assert_eq!(url.as_str(), "mailto:rms@example.net");
[/code]

##### §Errors

If this URL is cannot-be-a-base or there is an error parsing the given `host`, a [`ParseError`][11] variant will be returned.

[Source][67]

#### pub fn set_ip_host(&mut self, address: [IpAddr][68]) -> [Result][9]<[()][64], [()][64]>

Change this URL’s host to the given IP address.

If this URL is cannot-be-a-base, do nothing and return `Err`.

Compared to `Url::set_host`, this skips the host parser.

##### §Examples
[code] 
    use url::{Url, ParseError};
    
    let mut url = Url::parse("http://example.com")?;
    url.set_ip_host("127.0.0.1".parse().unwrap());
    assert_eq!(url.host_str(), Some("127.0.0.1"));
    assert_eq!(url.as_str(), "http://127.0.0.1/");
[/code]

Cannot change URL’s from mailto(cannot-be-base) to ip:
[code] 
    use url::{Url, ParseError};
    
    let mut url = Url::parse("mailto:rms@example.com")?;
    let result = url.set_ip_host("127.0.0.1".parse().unwrap());
    
    assert_eq!(url.as_str(), "mailto:rms@example.com");
    assert!(result.is_err());
[/code]

[Source][69]

#### pub fn set_password(&mut self, password: [Option][21]<&[str][8]>) -> [Result][9]<[()][64], [()][64]>

Change this URL’s password.

If this URL is cannot-be-a-base or does not have a host, do nothing and return `Err`.

##### §Examples
[code] 
    use url::{Url, ParseError};
    
    let mut url = Url::parse("mailto:rmz@example.com")?;
    let result = url.set_password(Some("secret_password"));
    assert!(result.is_err());
    
    let mut url = Url::parse("ftp://user1:secret1@example.com")?;
    let result = url.set_password(Some("secret_password"));
    assert_eq!(url.password(), Some("secret_password"));
    
    let mut url = Url::parse("ftp://user2:@example.com")?;
    let result = url.set_password(Some("secret2"));
    assert!(result.is_ok());
    assert_eq!(url.password(), Some("secret2"));
[/code]

[Source][70]

#### pub fn set_username(&mut self, username: &[str][8]) -> [Result][9]<[()][64], [()][64]>

Change this URL’s username.

If this URL is cannot-be-a-base or does not have a host, do nothing and return `Err`.

##### §Examples

Cannot setup username from mailto(cannot-be-base)
[code] 
    use url::{Url, ParseError};
    
    let mut url = Url::parse("mailto:rmz@example.com")?;
    let result = url.set_username("user1");
    assert_eq!(url.as_str(), "mailto:rmz@example.com");
    assert!(result.is_err());
[/code]

Setup username to user1
[code] 
    use url::{Url, ParseError};
    
    let mut url = Url::parse("ftp://:secre1@example.com/")?;
    let result = url.set_username("user1");
    assert!(result.is_ok());
    assert_eq!(url.username(), "user1");
    assert_eq!(url.as_str(), "ftp://user1:secre1@example.com/");
[/code]

[Source][71]

#### pub fn set_scheme(&mut self, scheme: &[str][8]) -> [Result][9]<[()][64], [()][64]>

Change this URL’s scheme.

Do nothing and return `Err` under the following circumstances:

  * If the new scheme is not in `[a-zA-Z][a-zA-Z0-9+.-]+`
  * If this URL is cannot-be-a-base and the new scheme is one of `http`, `https`, `ws`, `wss` or `ftp`
  * If either the old or new scheme is `http`, `https`, `ws`, `wss` or `ftp` and the other is not one of these
  * If the new scheme is `file` and this URL includes credentials or has a non-null port
  * If this URL’s scheme is `file` and its host is empty or null



See also [the URL specification’s section on legal scheme state overrides][72].

##### §Examples

Change the URL’s scheme from `https` to `http`:
[code] 
    use url::Url;
    
    let mut url = Url::parse("https://example.net")?;
    let result = url.set_scheme("http");
    assert_eq!(url.as_str(), "http://example.net/");
    assert!(result.is_ok());
[/code]

Change the URL’s scheme from `foo` to `bar`:
[code] 
    use url::Url;
    
    let mut url = Url::parse("foo://example.net")?;
    let result = url.set_scheme("bar");
    assert_eq!(url.as_str(), "bar://example.net");
    assert!(result.is_ok());
[/code]

Cannot change URL’s scheme from `https` to `foõ`:
[code] 
    use url::Url;
    
    let mut url = Url::parse("https://example.net")?;
    let result = url.set_scheme("foõ");
    assert_eq!(url.as_str(), "https://example.net/");
    assert!(result.is_err());
[/code]

Cannot change URL’s scheme from `mailto` (cannot-be-a-base) to `https`:
[code] 
    use url::Url;
    
    let mut url = Url::parse("mailto:rms@example.net")?;
    let result = url.set_scheme("https");
    assert_eq!(url.as_str(), "mailto:rms@example.net");
    assert!(result.is_err());
[/code]

Cannot change the URL’s scheme from `foo` to `https`:
[code] 
    use url::Url;
    
    let mut url = Url::parse("foo://example.net")?;
    let result = url.set_scheme("https");
    assert_eq!(url.as_str(), "foo://example.net");
    assert!(result.is_err());
[/code]

Cannot change the URL’s scheme from `http` to `foo`:
[code] 
    use url::Url;
    
    let mut url = Url::parse("http://example.net")?;
    let result = url.set_scheme("foo");
    assert_eq!(url.as_str(), "http://example.net/");
    assert!(result.is_err());
[/code]

[Source][73]

#### pub fn from_file_path<P>(path: P) -> [Result][9]<[Url][6], [()][64]>

where P: [AsRef][17]<[Path][74]>,

Convert a file name as `std::path::Path` into an URL in the `file` scheme.

This returns `Err` if the given path is not absolute or, on Windows, if the prefix is not a disk prefix (e.g. `C:`) or a UNC prefix (`\\`).

##### §Examples

On Unix-like platforms:
[code] 
    use url::Url;
    
    let url = Url::from_file_path("/tmp/foo.txt")?;
    assert_eq!(url.as_str(), "file:///tmp/foo.txt");
    
    let url = Url::from_file_path("../foo.txt");
    assert!(url.is_err());
    
    let url = Url::from_file_path("https://google.com/");
    assert!(url.is_err());
[/code]

This method is only available if the `std` Cargo feature is enabled.

[Source][75]

#### pub fn from_directory_path<P>(path: P) -> [Result][9]<[Url][6], [()][64]>

where P: [AsRef][17]<[Path][74]>,

Convert a directory name as `std::path::Path` into an URL in the `file` scheme.

This returns `Err` if the given path is not absolute or, on Windows, if the prefix is not a disk prefix (e.g. `C:`) or a UNC prefix (`\\`).

Compared to `from_file_path`, this ensure that URL’s the path has a trailing slash so that the entire path is considered when using this URL as a base URL.

For example:

  * `"index.html"` parsed with `Url::from_directory_path(Path::new("/var/www"))` as the base URL is `file:///var/www/index.html`
  * `"index.html"` parsed with `Url::from_file_path(Path::new("/var/www"))` as the base URL is `file:///var/index.html`, which might not be what was intended.



Note that `std::path` does not consider trailing slashes significant and usually does not include them (e.g. in `Path::parent()`).

This method is only available if the `std` Cargo feature is enabled.

[Source][76]

#### pub fn serialize_internal<S>( &self, serializer: S, ) -> [Result][9]<<S as [Serializer][77]>::[Ok][78], <S as [Serializer][77]>::[Error][79]>

where S: [Serializer][77],

Serialize with Serde using the internal representation of the `Url` struct.

The corresponding `deserialize_internal` method sacrifices some invariant-checking for speed, compared to the `Deserialize` trait impl.

This method is only available if the `serde` Cargo feature is enabled.

[Source][80]

#### pub fn deserialize_internal<'de, D>( deserializer: D, ) -> [Result][9]<[Url][6], <D as [Deserializer][81]<'de>>::[Error][82]>

where D: [Deserializer][81]<'de>,

Serialize with Serde using the internal representation of the `Url` struct.

The corresponding `deserialize_internal` method sacrifices some invariant-checking for speed, compared to the `Deserialize` trait impl.

This method is only available if the `serde` Cargo feature is enabled.

[Source][83]

#### pub fn to_file_path(&self) -> [Result][9]<[PathBuf][84], [()][64]>

Assuming the URL is in the `file` scheme or similar, convert its path to an absolute `std::path::Path`.

**Note:** This does not actually check the URL’s `scheme`, and may give nonsensical results for other schemes. It is the user’s responsibility to check the URL’s scheme before calling this.
[code] 
    let path = url.to_file_path();
[/code]

Returns `Err` if the host is neither empty nor `"localhost"` (except on Windows, where `file:` URLs may have a non-local host), or if `Path::new_opt()` returns `None`. (That is, if the percent-decoded path contains a NUL byte or, for a Windows path, is not UTF-8.)

This method is only available if the `std` Cargo feature is enabled.

## Trait Implementations§

[Source][85]§

### impl [AsRef][17]<[str][8]> for [Url][6]

Return the serialization of this URL.

[Source][86]§

#### fn [as_ref][87](&self) -> &[str][8]

Converts this type into a shared reference of the (usually inferred) input type.

[Source][88]§

### impl [Clone][89] for [Url][6]

[Source][88]§

#### fn [clone][90](&self) -> [Url][6]

Returns a duplicate of the value. [Read more][90]

1.0.0 · [Source][91]§

#### fn [clone_from][92](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][92]

[Source][93]§

### impl [Debug][94] for [Url][6]

Debug the serialization of this URL.

[Source][95]§

#### fn [fmt][96](&self, formatter: &mut [Formatter][97]<'_>) -> [Result][9]<[()][64], [Error][98]>

Formats the value using the given formatter. [Read more][96]

[Source][99]§

### impl<'de> [Deserialize][100]<'de> for [Url][6]

Available on **crate feature`serde`** only.

Deserializes this URL from a `serde` stream.

This implementation is only available if the `serde` Cargo feature is enabled.

[Source][101]§

#### fn [deserialize][102]<D>( deserializer: D, ) -> [Result][9]<[Url][6], <D as [Deserializer][81]<'de>>::[Error][82]>

where D: [Deserializer][81]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][102]

[Source][103]§

### impl [Display][104] for [Url][6]

Display the serialization of this URL.

[Source][105]§

#### fn [fmt][106](&self, formatter: &mut [Formatter][97]<'_>) -> [Result][9]<[()][64], [Error][98]>

Formats the value using the given formatter. [Read more][106]

[Source][107]§

### impl [From][108]<[Url][6]> for [String][22]

String conversion.

[Source][109]§

#### fn [from][110](value: [Url][6]) -> [String][22]

Converts to this type from the input type.

[Source][111]§

### impl [FromStr][112] for [Url][6]

Parse a string as an URL, without a base URL or encoding override.

[Source][113]§

#### type [Err][114] = [ParseError][10]

The associated error which can be returned from parsing.

[Source][115]§

#### fn [from_str][116](input: &[str][8]) -> [Result][9]<[Url][6], [ParseError][10]>

Parses a string `s` to return a value of this type. [Read more][116]

[Source][117]§

### impl [Hash][118] for [Url][6]

URLs hash like their serialization.

[Source][119]§

#### fn [hash][120]<H>(&self, state: [&mut H][121])

where H: [Hasher][122],

Feeds this value into the given [`Hasher`][122]. [Read more][120]

1.3.0 · [Source][123]§

#### fn [hash_slice][124]<H>(data: &[Self], state: [&mut H][121])

where H: [Hasher][122], Self: [Sized][125],

Feeds a slice of this type into the given [`Hasher`][122]. [Read more][124]

[Source][126]§

### impl [Index][127]<[Range][128]<[Position][129]>> for [Url][6]

[Source][130]§

#### type [Output][131] = [str][8]

The returned type after indexing.

[Source][132]§

#### fn [index][133](&self, range: [Range][128]<[Position][129]>) -> &[str][8]

Performs the indexing (`container[index]`) operation. [Read more][133]

[Source][134]§

### impl [Index][127]<[RangeFrom][135]<[Position][129]>> for [Url][6]

[Source][136]§

#### type [Output][131] = [str][8]

The returned type after indexing.

[Source][137]§

#### fn [index][133](&self, range: [RangeFrom][135]<[Position][129]>) -> &[str][8]

Performs the indexing (`container[index]`) operation. [Read more][133]

[Source][138]§

### impl [Index][127]<[RangeFull][139]> for [Url][6]

[Source][140]§

#### type [Output][131] = [str][8]

The returned type after indexing.

[Source][141]§

#### fn [index][133](&self, _: [RangeFull][139]) -> &[str][8]

Performs the indexing (`container[index]`) operation. [Read more][133]

[Source][142]§

### impl [Index][127]<[RangeTo][143]<[Position][129]>> for [Url][6]

[Source][144]§

#### type [Output][131] = [str][8]

The returned type after indexing.

[Source][145]§

#### fn [index][133](&self, range: [RangeTo][143]<[Position][129]>) -> &[str][8]

Performs the indexing (`container[index]`) operation. [Read more][133]

[Source][146]§

### impl [Ord][147] for [Url][6]

URLs compare like their serialization.

[Source][148]§

#### fn [cmp][149](&self, other: &[Url][6]) -> [Ordering][150]

This method returns an [`Ordering`][150] between `self` and `other`. [Read more][149]

1.21.0 · [Source][151]§

#### fn [max][152](self, other: Self) -> Self

where Self: [Sized][125],

Compares and returns the maximum of two values. [Read more][152]

1.21.0 · [Source][153]§

#### fn [min][154](self, other: Self) -> Self

where Self: [Sized][125],

Compares and returns the minimum of two values. [Read more][154]

1.50.0 · [Source][155]§

#### fn [clamp][156](self, min: Self, max: Self) -> Self

where Self: [Sized][125],

Restrict a value to a certain interval. [Read more][156]

[Source][157]§

### impl [PartialEq][158] for [Url][6]

URLs compare like their serialization.

[Source][159]§

#### fn [eq][160](&self, other: &[Url][6]) -> [bool][31]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][161]§

#### fn [ne][162](&self, other: [&Rhs][121]) -> [bool][31]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][163]§

### impl [PartialOrd][164] for [Url][6]

URLs compare like their serialization.

[Source][165]§

#### fn [partial_cmp][166](&self, other: &[Url][6]) -> [Option][21]<[Ordering][150]>

This method returns an ordering between `self` and `other` values if one exists. [Read more][166]

1.0.0 · [Source][167]§

#### fn [lt][168](&self, other: [&Rhs][121]) -> [bool][31]

Tests less than (for `self` and `other`) and is used by the `<` operator. [Read more][168]

1.0.0 · [Source][169]§

#### fn [le][170](&self, other: [&Rhs][121]) -> [bool][31]

Tests less than or equal to (for `self` and `other`) and is used by the `<=` operator. [Read more][170]

1.0.0 · [Source][171]§

#### fn [gt][172](&self, other: [&Rhs][121]) -> [bool][31]

Tests greater than (for `self` and `other`) and is used by the `>` operator. [Read more][172]

1.0.0 · [Source][173]§

#### fn [ge][174](&self, other: [&Rhs][121]) -> [bool][31]

Tests greater than or equal to (for `self` and `other`) and is used by the `>=` operator. [Read more][174]

[Source][175]§

### impl [Serialize][176] for [Url][6]

Available on **crate feature`serde`** only.

Serializes this URL into a `serde` stream.

This implementation is only available if the `serde` Cargo feature is enabled.

[Source][177]§

#### fn [serialize][178]<S>( &self, serializer: S, ) -> [Result][9]<<S as [Serializer][77]>::[Ok][78], <S as [Serializer][77]>::[Error][79]>

where S: [Serializer][77],

Serialize this value into the given Serde serializer. [Read more][178]

[Source][179]§

### impl<'a> [TryFrom][180]<&'a [str][8]> for [Url][6]

[Source][181]§

#### type [Error][182] = [ParseError][10]

The type returned in the event of a conversion error.

[Source][183]§

#### fn [try_from][184](s: &'a [str][8]) -> [Result][9]<[Url][6], <[Url][6] as [TryFrom][180]<&'a [str][8]>>::[Error][185]>

Performs the conversion.

[Source][186]§

### impl [Eq][187] for [Url][6]

URLs compare like their serialization.

## Auto Trait Implementations§

§

### impl [Freeze][188] for [Url][6]

§

### impl [RefUnwindSafe][189] for [Url][6]

§

### impl [Send][190] for [Url][6]

§

### impl [Sync][191] for [Url][6]

§

### impl [Unpin][192] for [Url][6]

§

### impl [UnwindSafe][193] for [Url][6]

## Blanket Implementations§

[Source][194]§

### impl<T> [Any][195] for T

where T: 'static + ?[Sized][125],

[Source][196]§

#### fn [type_id][197](&self) -> [TypeId][198]

Gets the `TypeId` of `self`. [Read more][197]

[Source][199]§

### impl<T> [Borrow][15]<T> for T

where T: ?[Sized][125],

[Source][200]§

#### fn [borrow][201](&self) -> [&T][121]

Immutably borrows from an owned value. [Read more][201]

[Source][202]§

### impl<T> [BorrowMut][203]<T> for T

where T: ?[Sized][125],

[Source][204]§

#### fn [borrow_mut][205](&mut self) -> [&mut T][121]

Mutably borrows from an owned value. [Read more][205]

[Source][206]§

### impl<T> [CloneToUninit][207] for T

where T: [Clone][89],

[Source][208]§

#### unsafe fn [clone_to_uninit][209](&self, dest: [*mut ][210][u8][211])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][209]

[Source][212]§

### impl<'de, D, R> [CommandArg][213]<'de, R> for D

where D: [Deserialize][100]<'de>, R: [Runtime][214],

[Source][215]§

#### fn [from_command][216](command: [CommandItem][217]<'de, R>) -> [Result][9]<D, [InvokeError][218]>

Derives an instance of `Self` from the [`CommandItem`][217]. [Read more][216]

[Source][219]§

### impl<T> [From][108]<T> for T

[Source][220]§

#### fn [from][110](t: T) -> T

Returns the argument unchanged.

[Source][221]§

### impl<T, U> [Into][222]<U> for T

where U: [From][108]<T>,

[Source][223]§

#### fn [into][224](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][108]<T> for U` chooses to do.

[Source][225]§

### impl<T> [IpcResponse][226] for T

where T: [Serialize][176],

[Source][227]§

#### fn [body][228](self) -> [Result][9]<[InvokeResponseBody][229], [Error][230]>

Resolve the IPC response body.

[Source][231]§

### impl<T> [RuntimeCapability][232] for T

where T: [AsRef][17]<[str][8]>,

[Source][233]§

#### fn [build][234](self) -> CapabilityFile

Creates the capability file.

[Source][235]§

### impl<T> [ScopeObject][236] for T

where T: [Send][190] \+ [Sync][191] \+ [Debug][94] \+ [DeserializeOwned][237] \+ 'static,

[Source][238]§

#### type [Error][239] = [Error][240]

The error type.

[Source][241]§

#### fn [deserialize][242]<R>( _app: &[AppHandle][243]<R>, raw: Value, ) -> [Result][9]<T, <T as [ScopeObject][236]>::[Error][244]>

where R: [Runtime][214],

Deserialize the raw scope value.

[Source][245]§

### impl<T> [Serialize][246] for T

where T: [Serialize][176] \+ ?[Sized][125],

[Source][247]§

#### fn [erased_serialize][248](&self, serializer: &mut dyn [Serializer][249]) -> [Result][9]<[()][64], [Error][250]>

[Source][251]§

#### fn [do_erased_serialize][252]( &self, serializer: &mut dyn [Serializer][249], ) -> [Result][9]<[()][64], ErrorImpl>

[Source][253]§

### impl<T> [ToOwned][254] for T

where T: [Clone][89],

[Source][255]§

#### type [Owned][256] = T

The resulting type after obtaining ownership.

[Source][257]§

#### fn [to_owned][258](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][258]

[Source][259]§

#### fn [clone_into][260](&self, target: [&mut T][121])

Uses borrowed data to replace owned data, usually by cloning. [Read more][260]

[Source][261]§

### impl<T> [ToString][262] for T

where T: [Display][104] \+ ?[Sized][125],

[Source][263]§

#### fn [to_string][264](&self) -> [String][22]

Converts the given value to a `String`. [Read more][264]

[Source][265]§

### impl<T, U> [TryFrom][180]<U> for T

where U: [Into][222]<T>,

[Source][266]§

#### type [Error][182] = [Infallible][267]

The type returned in the event of a conversion error.

[Source][268]§

#### fn [try_from][184](value: U) -> [Result][9]<T, <T as [TryFrom][180]<U>>::[Error][185]>

Performs the conversion.

[Source][269]§

### impl<T, U> [TryInto][270]<U> for T

where U: [TryFrom][180]<T>,

[Source][271]§

#### type [Error][272] = <U as [TryFrom][180]<T>>::[Error][185]

The type returned in the event of a conversion error.

[Source][273]§

#### fn [try_into][274](self) -> [Result][9]<U, <U as [TryFrom][180]<T>>::[Error][185]>

Performs the conversion.

[Source][275]§

### impl<T> [DeserializeOwned][237] for T

where T: for<'de> [Deserialize][100]<'de>,

§

### impl<T> UserEvent for T

where T: [Debug][94] \+ [Clone][89] \+ [Send][190] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#228
   [5]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#318
   [6]: struct.Url.html (struct tauri::Url)
   [7]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#341
   [8]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [9]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [10]: https://docs.rs/url/2.5.7/url/parser/enum.ParseError.html (enum url::parser::ParseError)
   [11]: enum.ParseError.html
   [12]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#371-376
   [13]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.IntoIterator.html (trait core::iter::traits::collect::IntoIterator)
   [14]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item (type core::iter::traits::collect::IntoIterator::Item)
   [15]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [16]: https://doc.rust-lang.org/1.94.1/std/primitive.tuple.html
   [17]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [18]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#471
   [19]: https://url.spec.whatwg.org/#scheme-relative-special-url-string
   [20]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#516
   [21]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [22]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [23]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#626
   [24]: https://docs.rs/url/2.5.7/url/struct.ParseOptions.html (struct url::ParseOptions)
   [25]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#653
   [26]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#677
   [27]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#883
   [28]: https://docs.rs/url/2.5.7/url/origin/enum.Origin.html (enum url::origin::Origin)
   [29]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#903
   [30]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#923
   [31]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [32]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#956
   [33]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#993
   [34]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1028
   [35]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1054
   [36]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1087
   [37]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1122
   [38]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1162
   [39]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1201
   [40]: https://docs.rs/url/2.5.7/url/host/enum.Host.html (enum url::host::Host)
   [41]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1237
   [42]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1269
   [43]: https://doc.rust-lang.org/1.94.1/std/primitive.u16.html
   [44]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1301
   [45]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1340-1343
   [46]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.Fn.html (trait core::ops::function::Fn)
   [47]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [48]: https://doc.rust-lang.org/1.94.1/core/net/socket_addr/enum.SocketAddr.html (enum core::net::socket_addr::SocketAddr)
   [49]: https://doc.rust-lang.org/1.94.1/std/io/error/struct.Error.html (struct std::io::error::Error)
   [50]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1391
   [51]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1442
   [52]: https://doc.rust-lang.org/1.94.1/core/str/iter/struct.Split.html (struct core::str::iter::Split)
   [53]: https://doc.rust-lang.org/1.94.1/std/primitive.char.html
   [54]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1471
   [55]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1509
   [56]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1545
   [57]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1582
   [58]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1637
   [59]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1701
   [60]: https://docs.rs/url/2.5.7/url/struct.UrlQuery.html (struct url::UrlQuery)
   [61]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1767
   [62]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1796
   [63]: https://docs.rs/url/2.5.7/url/path_segments/struct.PathSegmentsMut.html (struct url::path_segments::PathSegmentsMut)
   [64]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [65]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1888
   [66]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2021
   [67]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2166
   [68]: https://doc.rust-lang.org/1.94.1/core/net/ip_addr/enum.IpAddr.html (enum core::net::ip_addr::IpAddr)
   [69]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2206
   [70]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2300
   [71]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2462
   [72]: https://url.spec.whatwg.org/#scheme-state
   [73]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2553
   [74]: https://doc.rust-lang.org/1.94.1/std/path/struct.Path.html (struct std::path::Path)
   [75]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2601
   [76]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2617-2619
   [77]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html (trait serde_core::ser::Serializer)
   [78]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Ok (type serde_core::ser::Serializer::Ok)
   [79]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Error (type serde_core::ser::Serializer::Error)
   [80]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2659-2661
   [81]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html (trait serde_core::de::Deserializer)
   [82]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#associatedtype.Error (type serde_core::de::Deserializer::Error)
   [83]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2726
   [84]: https://doc.rust-lang.org/1.94.1/std/path/struct.PathBuf.html (struct std::path::PathBuf)
   [85]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2867
   [86]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2869
   [87]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html#tymethod.as_ref
   [88]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#227
   [89]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [90]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [91]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [92]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [93]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2810
   [94]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [95]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2812
   [96]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [97]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [98]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [99]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2916
   [100]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html (trait serde_core::de::Deserialize)
   [101]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2917-2919
   [102]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html#tymethod.deserialize
   [103]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2795
   [104]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [105]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2797
   [106]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html#tymethod.fmt
   [107]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2803
   [108]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [109]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2804
   [110]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [111]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2777
   [112]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html (trait core::str::traits::FromStr)
   [113]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2778
   [114]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#associatedtype.Err
   [115]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2781
   [116]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#tymethod.from_str
   [117]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2856
   [118]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html (trait core::hash::Hash)
   [119]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2858-2860
   [120]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#tymethod.hash
   [121]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [122]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hasher.html (trait core::hash::Hasher)
   [123]: https://doc.rust-lang.org/1.94.1/src/core/hash/mod.rs.html#235-237
   [124]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#method.hash_slice
   [125]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [126]: https://docs.rs/url/2.5.7/src/url/slicing.rs.html#34
   [127]: https://doc.rust-lang.org/1.94.1/core/ops/index/trait.Index.html (trait core::ops::index::Index)
   [128]: https://doc.rust-lang.org/1.94.1/core/ops/range/struct.Range.html (struct core::ops::range::Range)
   [129]: https://docs.rs/url/2.5.7/url/slicing/enum.Position.html (enum url::slicing::Position)
   [130]: https://docs.rs/url/2.5.7/src/url/slicing.rs.html#35
   [131]: https://doc.rust-lang.org/1.94.1/core/ops/index/trait.Index.html#associatedtype.Output
   [132]: https://docs.rs/url/2.5.7/src/url/slicing.rs.html#36
   [133]: https://doc.rust-lang.org/1.94.1/core/ops/index/trait.Index.html#tymethod.index
   [134]: https://docs.rs/url/2.5.7/src/url/slicing.rs.html#20
   [135]: https://doc.rust-lang.org/1.94.1/core/ops/range/struct.RangeFrom.html (struct core::ops::range::RangeFrom)
   [136]: https://docs.rs/url/2.5.7/src/url/slicing.rs.html#21
   [137]: https://docs.rs/url/2.5.7/src/url/slicing.rs.html#22
   [138]: https://docs.rs/url/2.5.7/src/url/slicing.rs.html#13
   [139]: https://doc.rust-lang.org/1.94.1/core/ops/range/struct.RangeFull.html (struct core::ops::range::RangeFull)
   [140]: https://docs.rs/url/2.5.7/src/url/slicing.rs.html#14
   [141]: https://docs.rs/url/2.5.7/src/url/slicing.rs.html#15
   [142]: https://docs.rs/url/2.5.7/src/url/slicing.rs.html#27
   [143]: https://doc.rust-lang.org/1.94.1/core/ops/range/struct.RangeTo.html (struct core::ops::range::RangeTo)
   [144]: https://docs.rs/url/2.5.7/src/url/slicing.rs.html#28
   [145]: https://docs.rs/url/2.5.7/src/url/slicing.rs.html#29
   [146]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2840
   [147]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html (trait core::cmp::Ord)
   [148]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2842
   [149]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#tymethod.cmp
   [150]: https://doc.rust-lang.org/1.94.1/core/cmp/enum.Ordering.html (enum core::cmp::Ordering)
   [151]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1025-1027
   [152]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#method.max
   [153]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1064-1066
   [154]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#method.min
   [155]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1090-1092
   [156]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#method.clamp
   [157]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2832
   [158]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [159]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2834
   [160]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [161]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [162]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [163]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2848
   [164]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html (trait core::cmp::PartialOrd)
   [165]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2850
   [166]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp
   [167]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1402
   [168]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.lt
   [169]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1420
   [170]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.le
   [171]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1438
   [172]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.gt
   [173]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1456
   [174]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.ge
   [175]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2903
   [176]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [177]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2904-2906
   [178]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html#tymethod.serialize
   [179]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2786
   [180]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [181]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2787
   [182]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [183]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2789
   [184]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [185]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [186]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2829
   [187]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [188]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [189]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [190]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [191]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [192]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [193]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [194]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [195]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [196]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [197]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [198]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [199]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [200]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [201]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [202]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [203]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [204]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [205]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [206]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [207]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [208]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [209]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [210]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [211]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [212]: ../src/tauri/ipc/command.rs.html#62-70
   [213]: ipc/trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [214]: trait.Runtime.html (trait tauri::Runtime)
   [215]: ../src/tauri/ipc/command.rs.html#63-69
   [216]: ipc/trait.CommandArg.html#tymethod.from_command
   [217]: ipc/struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [218]: ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [219]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [220]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [221]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [222]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [223]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [224]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [225]: ../src/tauri/ipc/mod.rs.html#181-187
   [226]: ipc/trait.IpcResponse.html (trait tauri::ipc::IpcResponse)
   [227]: ../src/tauri/ipc/mod.rs.html#182-186
   [228]: ipc/trait.IpcResponse.html#tymethod.body
   [229]: ipc/enum.InvokeResponseBody.html (enum tauri::ipc::InvokeResponseBody)
   [230]: enum.Error.html (enum tauri::Error)
   [231]: ../src/tauri/ipc/capability_builder.rs.html#20-24
   [232]: ipc/trait.RuntimeCapability.html (trait tauri::ipc::RuntimeCapability)
   [233]: ../src/tauri/ipc/capability_builder.rs.html#21-23
   [234]: ipc/trait.RuntimeCapability.html#tymethod.build
   [235]: ../src/tauri/ipc/authority.rs.html#686-691
   [236]: ipc/trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [237]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)
   [238]: ../src/tauri/ipc/authority.rs.html#687
   [239]: ipc/trait.ScopeObject.html#associatedtype.Error
   [240]: https://docs.rs/serde_json/1.0.149/serde_json/error/struct.Error.html (struct serde_json::error::Error)
   [241]: ../src/tauri/ipc/authority.rs.html#688-690
   [242]: ipc/trait.ScopeObject.html#tymethod.deserialize
   [243]: struct.AppHandle.html (struct tauri::AppHandle)
   [244]: ipc/trait.ScopeObject.html#associatedtype.Error (type tauri::ipc::ScopeObject::Error)
   [245]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#233-235
   [246]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html (trait erased_serde::ser::Serialize)
   [247]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#237
   [248]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.erased_serialize
   [249]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serializer.html (trait erased_serde::ser::Serializer)
   [250]: https://docs.rs/erased-serde/0.4.10/erased_serde/error/struct.Error.html (struct erased_serde::error::Error)
   [251]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#245
   [252]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.do_erased_serialize
   [253]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [254]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [255]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [256]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [257]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [258]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [259]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [260]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [261]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2893
   [262]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html (trait alloc::string::ToString)
   [263]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2895
   [264]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html#tymethod.to_string
   [265]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [266]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [267]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [268]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [269]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [270]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [271]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [272]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [273]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [274]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [275]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#633

