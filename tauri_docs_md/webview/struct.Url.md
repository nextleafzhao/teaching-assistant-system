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



## [In tauri::webview][3]

[tauri][4]::[webview][3]

# Struct Url Copy item path

[Source][5]
[code] 
    pub struct Url { /* private fields */ }
[/code]

Expand description

A parsed URL record.

## Implementations§

[Source][6]§

### impl [Url][7]

[Source][8]

#### pub fn parse(input: &[str][9]) -> [Result][10]<[Url][7], [ParseError][11]>

Parse an absolute URL from a string.

##### §Examples
[code] 
    use url::Url;
    
    let url = Url::parse("https://example.net")?;
[/code]

##### §Errors

If the function can not parse an absolute URL from the given string, a [`ParseError`][12] variant will be returned.

[Source][13]

#### pub fn parse_with_params<I, K, V>( input: &[str][9], iter: I, ) -> [Result][10]<[Url][7], [ParseError][11]>

where I: [IntoIterator][14], <I as [IntoIterator][14]>::[Item][15]: [Borrow][16]<[(K, V)][17]>, K: [AsRef][18]<[str][9]>, V: [AsRef][18]<[str][9]>,

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

If the function can not parse an absolute URL from the given string, a [`ParseError`][12] variant will be returned.

[Source][19]

#### pub fn join(&self, input: &[str][9]) -> [Result][10]<[Url][7], [ParseError][11]>

Parse a string as an URL, with this URL as the base URL.

The inverse of this is `make_relative`.

##### §Notes

  * A trailing slash is significant. Without it, the last path component is considered to be a “file” name to be removed to get at the “directory” that is used as the base.
  * A [scheme relative special URL][20] as input replaces everything in the base URL after the scheme.
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

If the function can not parse an URL from the given string with this URL as the base URL, a [`ParseError`][12] variant will be returned.

[Source][21]

#### pub fn make_relative(&self, url: &[Url][7]) -> [Option][22]<[String][23]>

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

[Source][24]

#### pub fn options<'a>() -> [ParseOptions][25]<'a>

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

[Source][26]

#### pub fn as_str(&self) -> &[str][9]

Return the serialization of this URL.

This is fast since that serialization is already stored in the `Url` struct.

##### §Examples
[code] 
    use url::Url;
    
    let url_str = "https://example.net/";
    let url = Url::parse(url_str)?;
    assert_eq!(url.as_str(), url_str);
[/code]

[Source][27]

#### pub fn into_string(self) -> [String][23]

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

[Source][28]

#### pub fn origin(&self) -> [Origin][29]

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

[Source][30]

#### pub fn scheme(&self) -> &[str][9]

Return the scheme of this URL, lower-cased, as an ASCII string without the ‘:’ delimiter.

##### §Examples
[code] 
    use url::Url;
    
    let url = Url::parse("file:///tmp/foo")?;
    assert_eq!(url.scheme(), "file");
[/code]

[Source][31]

#### pub fn is_special(&self) -> [bool][32]

Return whether the URL is special (has a special scheme)

##### §Examples
[code] 
    use url::Url;
    
    assert!(Url::parse("http:///tmp/foo")?.is_special());
    assert!(Url::parse("file:///tmp/foo")?.is_special());
    assert!(!Url::parse("moz:///tmp/foo")?.is_special());
[/code]

[Source][33]

#### pub fn has_authority(&self) -> [bool][32]

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

[Source][34]

#### pub fn authority(&self) -> &[str][9]

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

[Source][35]

#### pub fn cannot_be_a_base(&self) -> [bool][32]

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

[Source][36]

#### pub fn username(&self) -> &[str][9]

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

[Source][37]

#### pub fn password(&self) -> [Option][22]<&[str][9]>

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

[Source][38]

#### pub fn has_host(&self) -> [bool][32]

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

[Source][39]

#### pub fn host_str(&self) -> [Option][22]<&[str][9]>

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

[Source][40]

#### pub fn host(&self) -> [Option][22]<[Host][41]<&[str][9]>>

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

[Source][42]

#### pub fn domain(&self) -> [Option][22]<&[str][9]>

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

[Source][43]

#### pub fn port(&self) -> [Option][22]<[u16][44]>

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

[Source][45]

#### pub fn port_or_known_default(&self) -> [Option][22]<[u16][44]>

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

[Source][46]

#### pub fn socket_addrs( &self, default_port_number: impl [Fn][47]() -> [Option][22]<[u16][44]>, ) -> [Result][10]<[Vec][48]<[SocketAddr][49]>, [Error][50]>

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

[Source][51]

#### pub fn path(&self) -> &[str][9]

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

[Source][52]

#### pub fn path_segments(&self) -> [Option][22]<[Split][53]<'_, [char][54]>>

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

[Source][55]

#### pub fn query(&self) -> [Option][22]<&[str][9]>

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

[Source][56]

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

[Source][57]

#### pub fn fragment(&self) -> [Option][22]<&[str][9]>

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

[Source][58]

#### pub fn set_fragment(&mut self, fragment: [Option][22]<&[str][9]>)

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

[Source][59]

#### pub fn set_query(&mut self, query: [Option][22]<&[str][9]>)

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

[Source][60]

#### pub fn query_pairs_mut(&mut self) -> Serializer<'_, [UrlQuery][61]<'_>>

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

[Source][62]

#### pub fn set_path(&mut self, path: &[str][9])

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

[Source][63]

#### pub fn path_segments_mut(&mut self) -> [Result][10]<[PathSegmentsMut][64]<'_>, [()][65]>

Return an object with methods to manipulate this URL’s path segments.

Return `Err(())` if this URL is cannot-be-a-base.

[Source][66]

#### pub fn set_port(&mut self, port: [Option][22]<[u16][44]>) -> [Result][10]<[()][65], [()][65]>

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

[Source][67]

#### pub fn set_host(&mut self, host: [Option][22]<&[str][9]>) -> [Result][10]<[()][65], [ParseError][11]>

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

If this URL is cannot-be-a-base or there is an error parsing the given `host`, a [`ParseError`][12] variant will be returned.

[Source][68]

#### pub fn set_ip_host(&mut self, address: [IpAddr][69]) -> [Result][10]<[()][65], [()][65]>

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

[Source][70]

#### pub fn set_password(&mut self, password: [Option][22]<&[str][9]>) -> [Result][10]<[()][65], [()][65]>

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

[Source][71]

#### pub fn set_username(&mut self, username: &[str][9]) -> [Result][10]<[()][65], [()][65]>

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

[Source][72]

#### pub fn set_scheme(&mut self, scheme: &[str][9]) -> [Result][10]<[()][65], [()][65]>

Change this URL’s scheme.

Do nothing and return `Err` under the following circumstances:

  * If the new scheme is not in `[a-zA-Z][a-zA-Z0-9+.-]+`
  * If this URL is cannot-be-a-base and the new scheme is one of `http`, `https`, `ws`, `wss` or `ftp`
  * If either the old or new scheme is `http`, `https`, `ws`, `wss` or `ftp` and the other is not one of these
  * If the new scheme is `file` and this URL includes credentials or has a non-null port
  * If this URL’s scheme is `file` and its host is empty or null



See also [the URL specification’s section on legal scheme state overrides][73].

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

[Source][74]

#### pub fn from_file_path<P>(path: P) -> [Result][10]<[Url][7], [()][65]>

where P: [AsRef][18]<[Path][75]>,

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

[Source][76]

#### pub fn from_directory_path<P>(path: P) -> [Result][10]<[Url][7], [()][65]>

where P: [AsRef][18]<[Path][75]>,

Convert a directory name as `std::path::Path` into an URL in the `file` scheme.

This returns `Err` if the given path is not absolute or, on Windows, if the prefix is not a disk prefix (e.g. `C:`) or a UNC prefix (`\\`).

Compared to `from_file_path`, this ensure that URL’s the path has a trailing slash so that the entire path is considered when using this URL as a base URL.

For example:

  * `"index.html"` parsed with `Url::from_directory_path(Path::new("/var/www"))` as the base URL is `file:///var/www/index.html`
  * `"index.html"` parsed with `Url::from_file_path(Path::new("/var/www"))` as the base URL is `file:///var/index.html`, which might not be what was intended.



Note that `std::path` does not consider trailing slashes significant and usually does not include them (e.g. in `Path::parent()`).

This method is only available if the `std` Cargo feature is enabled.

[Source][77]

#### pub fn serialize_internal<S>( &self, serializer: S, ) -> [Result][10]<<S as [Serializer][78]>::[Ok][79], <S as [Serializer][78]>::[Error][80]>

where S: [Serializer][78],

Serialize with Serde using the internal representation of the `Url` struct.

The corresponding `deserialize_internal` method sacrifices some invariant-checking for speed, compared to the `Deserialize` trait impl.

This method is only available if the `serde` Cargo feature is enabled.

[Source][81]

#### pub fn deserialize_internal<'de, D>( deserializer: D, ) -> [Result][10]<[Url][7], <D as [Deserializer][82]<'de>>::[Error][83]>

where D: [Deserializer][82]<'de>,

Serialize with Serde using the internal representation of the `Url` struct.

The corresponding `deserialize_internal` method sacrifices some invariant-checking for speed, compared to the `Deserialize` trait impl.

This method is only available if the `serde` Cargo feature is enabled.

[Source][84]

#### pub fn to_file_path(&self) -> [Result][10]<[PathBuf][85], [()][65]>

Assuming the URL is in the `file` scheme or similar, convert its path to an absolute `std::path::Path`.

**Note:** This does not actually check the URL’s `scheme`, and may give nonsensical results for other schemes. It is the user’s responsibility to check the URL’s scheme before calling this.
[code] 
    let path = url.to_file_path();
[/code]

Returns `Err` if the host is neither empty nor `"localhost"` (except on Windows, where `file:` URLs may have a non-local host), or if `Path::new_opt()` returns `None`. (That is, if the percent-decoded path contains a NUL byte or, for a Windows path, is not UTF-8.)

This method is only available if the `std` Cargo feature is enabled.

## Trait Implementations§

[Source][86]§

### impl [AsRef][18]<[str][9]> for [Url][7]

Return the serialization of this URL.

[Source][87]§

#### fn [as_ref][88](&self) -> &[str][9]

Converts this type into a shared reference of the (usually inferred) input type.

[Source][89]§

### impl [Clone][90] for [Url][7]

[Source][89]§

#### fn [clone][91](&self) -> [Url][7]

Returns a duplicate of the value. [Read more][91]

1.0.0 · [Source][92]§

#### fn [clone_from][93](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][93]

[Source][94]§

### impl [Debug][95] for [Url][7]

Debug the serialization of this URL.

[Source][96]§

#### fn [fmt][97](&self, formatter: &mut [Formatter][98]<'_>) -> [Result][10]<[()][65], [Error][99]>

Formats the value using the given formatter. [Read more][97]

[Source][100]§

### impl<'de> [Deserialize][101]<'de> for [Url][7]

Available on **crate feature`serde`** only.

Deserializes this URL from a `serde` stream.

This implementation is only available if the `serde` Cargo feature is enabled.

[Source][102]§

#### fn [deserialize][103]<D>( deserializer: D, ) -> [Result][10]<[Url][7], <D as [Deserializer][82]<'de>>::[Error][83]>

where D: [Deserializer][82]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][103]

[Source][104]§

### impl [Display][105] for [Url][7]

Display the serialization of this URL.

[Source][106]§

#### fn [fmt][107](&self, formatter: &mut [Formatter][98]<'_>) -> [Result][10]<[()][65], [Error][99]>

Formats the value using the given formatter. [Read more][107]

[Source][108]§

### impl [From][109]<[Url][7]> for [String][23]

String conversion.

[Source][110]§

#### fn [from][111](value: [Url][7]) -> [String][23]

Converts to this type from the input type.

[Source][112]§

### impl [FromStr][113] for [Url][7]

Parse a string as an URL, without a base URL or encoding override.

[Source][114]§

#### type [Err][115] = [ParseError][11]

The associated error which can be returned from parsing.

[Source][116]§

#### fn [from_str][117](input: &[str][9]) -> [Result][10]<[Url][7], [ParseError][11]>

Parses a string `s` to return a value of this type. [Read more][117]

[Source][118]§

### impl [Hash][119] for [Url][7]

URLs hash like their serialization.

[Source][120]§

#### fn [hash][121]<H>(&self, state: [&mut H][122])

where H: [Hasher][123],

Feeds this value into the given [`Hasher`][123]. [Read more][121]

1.3.0 · [Source][124]§

#### fn [hash_slice][125]<H>(data: &[Self], state: [&mut H][122])

where H: [Hasher][123], Self: [Sized][126],

Feeds a slice of this type into the given [`Hasher`][123]. [Read more][125]

[Source][127]§

### impl [Index][128]<[Range][129]<[Position][130]>> for [Url][7]

[Source][131]§

#### type [Output][132] = [str][9]

The returned type after indexing.

[Source][133]§

#### fn [index][134](&self, range: [Range][129]<[Position][130]>) -> &[str][9]

Performs the indexing (`container[index]`) operation. [Read more][134]

[Source][135]§

### impl [Index][128]<[RangeFrom][136]<[Position][130]>> for [Url][7]

[Source][137]§

#### type [Output][132] = [str][9]

The returned type after indexing.

[Source][138]§

#### fn [index][134](&self, range: [RangeFrom][136]<[Position][130]>) -> &[str][9]

Performs the indexing (`container[index]`) operation. [Read more][134]

[Source][139]§

### impl [Index][128]<[RangeFull][140]> for [Url][7]

[Source][141]§

#### type [Output][132] = [str][9]

The returned type after indexing.

[Source][142]§

#### fn [index][134](&self, _: [RangeFull][140]) -> &[str][9]

Performs the indexing (`container[index]`) operation. [Read more][134]

[Source][143]§

### impl [Index][128]<[RangeTo][144]<[Position][130]>> for [Url][7]

[Source][145]§

#### type [Output][132] = [str][9]

The returned type after indexing.

[Source][146]§

#### fn [index][134](&self, range: [RangeTo][144]<[Position][130]>) -> &[str][9]

Performs the indexing (`container[index]`) operation. [Read more][134]

[Source][147]§

### impl [Ord][148] for [Url][7]

URLs compare like their serialization.

[Source][149]§

#### fn [cmp][150](&self, other: &[Url][7]) -> [Ordering][151]

This method returns an [`Ordering`][151] between `self` and `other`. [Read more][150]

1.21.0 · [Source][152]§

#### fn [max][153](self, other: Self) -> Self

where Self: [Sized][126],

Compares and returns the maximum of two values. [Read more][153]

1.21.0 · [Source][154]§

#### fn [min][155](self, other: Self) -> Self

where Self: [Sized][126],

Compares and returns the minimum of two values. [Read more][155]

1.50.0 · [Source][156]§

#### fn [clamp][157](self, min: Self, max: Self) -> Self

where Self: [Sized][126],

Restrict a value to a certain interval. [Read more][157]

[Source][158]§

### impl [PartialEq][159] for [Url][7]

URLs compare like their serialization.

[Source][160]§

#### fn [eq][161](&self, other: &[Url][7]) -> [bool][32]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][162]§

#### fn [ne][163](&self, other: [&Rhs][122]) -> [bool][32]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][164]§

### impl [PartialOrd][165] for [Url][7]

URLs compare like their serialization.

[Source][166]§

#### fn [partial_cmp][167](&self, other: &[Url][7]) -> [Option][22]<[Ordering][151]>

This method returns an ordering between `self` and `other` values if one exists. [Read more][167]

1.0.0 · [Source][168]§

#### fn [lt][169](&self, other: [&Rhs][122]) -> [bool][32]

Tests less than (for `self` and `other`) and is used by the `<` operator. [Read more][169]

1.0.0 · [Source][170]§

#### fn [le][171](&self, other: [&Rhs][122]) -> [bool][32]

Tests less than or equal to (for `self` and `other`) and is used by the `<=` operator. [Read more][171]

1.0.0 · [Source][172]§

#### fn [gt][173](&self, other: [&Rhs][122]) -> [bool][32]

Tests greater than (for `self` and `other`) and is used by the `>` operator. [Read more][173]

1.0.0 · [Source][174]§

#### fn [ge][175](&self, other: [&Rhs][122]) -> [bool][32]

Tests greater than or equal to (for `self` and `other`) and is used by the `>=` operator. [Read more][175]

[Source][176]§

### impl [Serialize][177] for [Url][7]

Available on **crate feature`serde`** only.

Serializes this URL into a `serde` stream.

This implementation is only available if the `serde` Cargo feature is enabled.

[Source][178]§

#### fn [serialize][179]<S>( &self, serializer: S, ) -> [Result][10]<<S as [Serializer][78]>::[Ok][79], <S as [Serializer][78]>::[Error][80]>

where S: [Serializer][78],

Serialize this value into the given Serde serializer. [Read more][179]

[Source][180]§

### impl<'a> [TryFrom][181]<&'a [str][9]> for [Url][7]

[Source][182]§

#### type [Error][183] = [ParseError][11]

The type returned in the event of a conversion error.

[Source][184]§

#### fn [try_from][185](s: &'a [str][9]) -> [Result][10]<[Url][7], <[Url][7] as [TryFrom][181]<&'a [str][9]>>::[Error][186]>

Performs the conversion.

[Source][187]§

### impl [Eq][188] for [Url][7]

URLs compare like their serialization.

## Auto Trait Implementations§

§

### impl [Freeze][189] for [Url][7]

§

### impl [RefUnwindSafe][190] for [Url][7]

§

### impl [Send][191] for [Url][7]

§

### impl [Sync][192] for [Url][7]

§

### impl [Unpin][193] for [Url][7]

§

### impl [UnwindSafe][194] for [Url][7]

## Blanket Implementations§

[Source][195]§

### impl<T> [Any][196] for T

where T: 'static + ?[Sized][126],

[Source][197]§

#### fn [type_id][198](&self) -> [TypeId][199]

Gets the `TypeId` of `self`. [Read more][198]

[Source][200]§

### impl<T> [Borrow][16]<T> for T

where T: ?[Sized][126],

[Source][201]§

#### fn [borrow][202](&self) -> [&T][122]

Immutably borrows from an owned value. [Read more][202]

[Source][203]§

### impl<T> [BorrowMut][204]<T> for T

where T: ?[Sized][126],

[Source][205]§

#### fn [borrow_mut][206](&mut self) -> [&mut T][122]

Mutably borrows from an owned value. [Read more][206]

[Source][207]§

### impl<T> [CloneToUninit][208] for T

where T: [Clone][90],

[Source][209]§

#### unsafe fn [clone_to_uninit][210](&self, dest: [*mut ][211][u8][212])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][210]

[Source][213]§

### impl<'de, D, R> [CommandArg][214]<'de, R> for D

where D: [Deserialize][101]<'de>, R: [Runtime][215],

[Source][216]§

#### fn [from_command][217](command: [CommandItem][218]<'de, R>) -> [Result][10]<D, [InvokeError][219]>

Derives an instance of `Self` from the [`CommandItem`][218]. [Read more][217]

[Source][220]§

### impl<T> [From][109]<T> for T

[Source][221]§

#### fn [from][111](t: T) -> T

Returns the argument unchanged.

[Source][222]§

### impl<T, U> [Into][223]<U> for T

where U: [From][109]<T>,

[Source][224]§

#### fn [into][225](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][109]<T> for U` chooses to do.

[Source][226]§

### impl<T> [IpcResponse][227] for T

where T: [Serialize][177],

[Source][228]§

#### fn [body][229](self) -> [Result][10]<[InvokeResponseBody][230], [Error][231]>

Resolve the IPC response body.

[Source][232]§

### impl<T> [RuntimeCapability][233] for T

where T: [AsRef][18]<[str][9]>,

[Source][234]§

#### fn [build][235](self) -> CapabilityFile

Creates the capability file.

[Source][236]§

### impl<T> [ScopeObject][237] for T

where T: [Send][191] \+ [Sync][192] \+ [Debug][95] \+ [DeserializeOwned][238] \+ 'static,

[Source][239]§

#### type [Error][240] = [Error][241]

The error type.

[Source][242]§

#### fn [deserialize][243]<R>( _app: &[AppHandle][244]<R>, raw: Value, ) -> [Result][10]<T, <T as [ScopeObject][237]>::[Error][245]>

where R: [Runtime][215],

Deserialize the raw scope value.

[Source][246]§

### impl<T> [Serialize][247] for T

where T: [Serialize][177] \+ ?[Sized][126],

[Source][248]§

#### fn [erased_serialize][249](&self, serializer: &mut dyn [Serializer][250]) -> [Result][10]<[()][65], [Error][251]>

[Source][252]§

#### fn [do_erased_serialize][253]( &self, serializer: &mut dyn [Serializer][250], ) -> [Result][10]<[()][65], ErrorImpl>

[Source][254]§

### impl<T> [ToOwned][255] for T

where T: [Clone][90],

[Source][256]§

#### type [Owned][257] = T

The resulting type after obtaining ownership.

[Source][258]§

#### fn [to_owned][259](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][259]

[Source][260]§

#### fn [clone_into][261](&self, target: [&mut T][122])

Uses borrowed data to replace owned data, usually by cloning. [Read more][261]

[Source][262]§

### impl<T> [ToString][263] for T

where T: [Display][105] \+ ?[Sized][126],

[Source][264]§

#### fn [to_string][265](&self) -> [String][23]

Converts the given value to a `String`. [Read more][265]

[Source][266]§

### impl<T, U> [TryFrom][181]<U> for T

where U: [Into][223]<T>,

[Source][267]§

#### type [Error][183] = [Infallible][268]

The type returned in the event of a conversion error.

[Source][269]§

#### fn [try_from][185](value: U) -> [Result][10]<T, <T as [TryFrom][181]<U>>::[Error][186]>

Performs the conversion.

[Source][270]§

### impl<T, U> [TryInto][271]<U> for T

where U: [TryFrom][181]<T>,

[Source][272]§

#### type [Error][273] = <U as [TryFrom][181]<T>>::[Error][186]

The type returned in the event of a conversion error.

[Source][274]§

#### fn [try_into][275](self) -> [Result][10]<U, <U as [TryFrom][181]<T>>::[Error][186]>

Performs the conversion.

[Source][276]§

### impl<T> [DeserializeOwned][238] for T

where T: for<'de> [Deserialize][101]<'de>,

§

### impl<T> UserEvent for T

where T: [Debug][95] \+ [Clone][90] \+ [Send][191] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#228
   [6]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#318
   [7]: ../struct.Url.html (struct tauri::Url)
   [8]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#341
   [9]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [10]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [11]: https://docs.rs/url/2.5.7/url/parser/enum.ParseError.html (enum url::parser::ParseError)
   [12]: enum.ParseError.html
   [13]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#371-376
   [14]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.IntoIterator.html (trait core::iter::traits::collect::IntoIterator)
   [15]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item (type core::iter::traits::collect::IntoIterator::Item)
   [16]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [17]: https://doc.rust-lang.org/1.94.1/std/primitive.tuple.html
   [18]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [19]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#471
   [20]: https://url.spec.whatwg.org/#scheme-relative-special-url-string
   [21]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#516
   [22]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [23]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [24]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#626
   [25]: https://docs.rs/url/2.5.7/url/struct.ParseOptions.html (struct url::ParseOptions)
   [26]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#653
   [27]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#677
   [28]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#883
   [29]: https://docs.rs/url/2.5.7/url/origin/enum.Origin.html (enum url::origin::Origin)
   [30]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#903
   [31]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#923
   [32]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [33]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#956
   [34]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#993
   [35]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1028
   [36]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1054
   [37]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1087
   [38]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1122
   [39]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1162
   [40]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1201
   [41]: https://docs.rs/url/2.5.7/url/host/enum.Host.html (enum url::host::Host)
   [42]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1237
   [43]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1269
   [44]: https://doc.rust-lang.org/1.94.1/std/primitive.u16.html
   [45]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1301
   [46]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1340-1343
   [47]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.Fn.html (trait core::ops::function::Fn)
   [48]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [49]: https://doc.rust-lang.org/1.94.1/core/net/socket_addr/enum.SocketAddr.html (enum core::net::socket_addr::SocketAddr)
   [50]: https://doc.rust-lang.org/1.94.1/std/io/error/struct.Error.html (struct std::io::error::Error)
   [51]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1391
   [52]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1442
   [53]: https://doc.rust-lang.org/1.94.1/core/str/iter/struct.Split.html (struct core::str::iter::Split)
   [54]: https://doc.rust-lang.org/1.94.1/std/primitive.char.html
   [55]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1471
   [56]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1509
   [57]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1545
   [58]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1582
   [59]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1637
   [60]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1701
   [61]: https://docs.rs/url/2.5.7/url/struct.UrlQuery.html (struct url::UrlQuery)
   [62]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1767
   [63]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1796
   [64]: https://docs.rs/url/2.5.7/url/path_segments/struct.PathSegmentsMut.html (struct url::path_segments::PathSegmentsMut)
   [65]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [66]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#1888
   [67]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2021
   [68]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2166
   [69]: https://doc.rust-lang.org/1.94.1/core/net/ip_addr/enum.IpAddr.html (enum core::net::ip_addr::IpAddr)
   [70]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2206
   [71]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2300
   [72]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2462
   [73]: https://url.spec.whatwg.org/#scheme-state
   [74]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2553
   [75]: https://doc.rust-lang.org/1.94.1/std/path/struct.Path.html (struct std::path::Path)
   [76]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2601
   [77]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2617-2619
   [78]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html (trait serde_core::ser::Serializer)
   [79]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Ok (type serde_core::ser::Serializer::Ok)
   [80]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Error (type serde_core::ser::Serializer::Error)
   [81]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2659-2661
   [82]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html (trait serde_core::de::Deserializer)
   [83]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#associatedtype.Error (type serde_core::de::Deserializer::Error)
   [84]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2726
   [85]: https://doc.rust-lang.org/1.94.1/std/path/struct.PathBuf.html (struct std::path::PathBuf)
   [86]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2867
   [87]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2869
   [88]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html#tymethod.as_ref
   [89]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#227
   [90]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [91]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [92]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [93]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [94]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2810
   [95]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [96]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2812
   [97]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [98]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [99]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [100]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2916
   [101]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html (trait serde_core::de::Deserialize)
   [102]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2917-2919
   [103]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html#tymethod.deserialize
   [104]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2795
   [105]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [106]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2797
   [107]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html#tymethod.fmt
   [108]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2803
   [109]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [110]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2804
   [111]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [112]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2777
   [113]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html (trait core::str::traits::FromStr)
   [114]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2778
   [115]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#associatedtype.Err
   [116]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2781
   [117]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#tymethod.from_str
   [118]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2856
   [119]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html (trait core::hash::Hash)
   [120]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2858-2860
   [121]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#tymethod.hash
   [122]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [123]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hasher.html (trait core::hash::Hasher)
   [124]: https://doc.rust-lang.org/1.94.1/src/core/hash/mod.rs.html#235-237
   [125]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#method.hash_slice
   [126]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [127]: https://docs.rs/url/2.5.7/src/url/slicing.rs.html#34
   [128]: https://doc.rust-lang.org/1.94.1/core/ops/index/trait.Index.html (trait core::ops::index::Index)
   [129]: https://doc.rust-lang.org/1.94.1/core/ops/range/struct.Range.html (struct core::ops::range::Range)
   [130]: https://docs.rs/url/2.5.7/url/slicing/enum.Position.html (enum url::slicing::Position)
   [131]: https://docs.rs/url/2.5.7/src/url/slicing.rs.html#35
   [132]: https://doc.rust-lang.org/1.94.1/core/ops/index/trait.Index.html#associatedtype.Output
   [133]: https://docs.rs/url/2.5.7/src/url/slicing.rs.html#36
   [134]: https://doc.rust-lang.org/1.94.1/core/ops/index/trait.Index.html#tymethod.index
   [135]: https://docs.rs/url/2.5.7/src/url/slicing.rs.html#20
   [136]: https://doc.rust-lang.org/1.94.1/core/ops/range/struct.RangeFrom.html (struct core::ops::range::RangeFrom)
   [137]: https://docs.rs/url/2.5.7/src/url/slicing.rs.html#21
   [138]: https://docs.rs/url/2.5.7/src/url/slicing.rs.html#22
   [139]: https://docs.rs/url/2.5.7/src/url/slicing.rs.html#13
   [140]: https://doc.rust-lang.org/1.94.1/core/ops/range/struct.RangeFull.html (struct core::ops::range::RangeFull)
   [141]: https://docs.rs/url/2.5.7/src/url/slicing.rs.html#14
   [142]: https://docs.rs/url/2.5.7/src/url/slicing.rs.html#15
   [143]: https://docs.rs/url/2.5.7/src/url/slicing.rs.html#27
   [144]: https://doc.rust-lang.org/1.94.1/core/ops/range/struct.RangeTo.html (struct core::ops::range::RangeTo)
   [145]: https://docs.rs/url/2.5.7/src/url/slicing.rs.html#28
   [146]: https://docs.rs/url/2.5.7/src/url/slicing.rs.html#29
   [147]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2840
   [148]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html (trait core::cmp::Ord)
   [149]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2842
   [150]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#tymethod.cmp
   [151]: https://doc.rust-lang.org/1.94.1/core/cmp/enum.Ordering.html (enum core::cmp::Ordering)
   [152]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1025-1027
   [153]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#method.max
   [154]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1064-1066
   [155]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#method.min
   [156]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1090-1092
   [157]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#method.clamp
   [158]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2832
   [159]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [160]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2834
   [161]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [162]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [163]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [164]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2848
   [165]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html (trait core::cmp::PartialOrd)
   [166]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2850
   [167]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp
   [168]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1402
   [169]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.lt
   [170]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1420
   [171]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.le
   [172]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1438
   [173]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.gt
   [174]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1456
   [175]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.ge
   [176]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2903
   [177]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [178]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2904-2906
   [179]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html#tymethod.serialize
   [180]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2786
   [181]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [182]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2787
   [183]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [184]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2789
   [185]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [186]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [187]: https://docs.rs/url/2.5.7/src/url/lib.rs.html#2829
   [188]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [189]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [190]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [191]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [192]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [193]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [194]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [195]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [196]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [197]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [198]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [199]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [200]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [201]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [202]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [203]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [204]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [205]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [206]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [207]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [208]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [209]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [210]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [211]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [212]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [213]: ../../src/tauri/ipc/command.rs.html#62-70
   [214]: ../ipc/trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [215]: ../trait.Runtime.html (trait tauri::Runtime)
   [216]: ../../src/tauri/ipc/command.rs.html#63-69
   [217]: ../ipc/trait.CommandArg.html#tymethod.from_command
   [218]: ../ipc/struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [219]: ../ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [220]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [221]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [222]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [223]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [224]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [225]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [226]: ../../src/tauri/ipc/mod.rs.html#181-187
   [227]: ../ipc/trait.IpcResponse.html (trait tauri::ipc::IpcResponse)
   [228]: ../../src/tauri/ipc/mod.rs.html#182-186
   [229]: ../ipc/trait.IpcResponse.html#tymethod.body
   [230]: ../ipc/enum.InvokeResponseBody.html (enum tauri::ipc::InvokeResponseBody)
   [231]: ../enum.Error.html (enum tauri::Error)
   [232]: ../../src/tauri/ipc/capability_builder.rs.html#20-24
   [233]: ../ipc/trait.RuntimeCapability.html (trait tauri::ipc::RuntimeCapability)
   [234]: ../../src/tauri/ipc/capability_builder.rs.html#21-23
   [235]: ../ipc/trait.RuntimeCapability.html#tymethod.build
   [236]: ../../src/tauri/ipc/authority.rs.html#686-691
   [237]: ../ipc/trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [238]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)
   [239]: ../../src/tauri/ipc/authority.rs.html#687
   [240]: ../ipc/trait.ScopeObject.html#associatedtype.Error
   [241]: https://docs.rs/serde_json/1.0.149/serde_json/error/struct.Error.html (struct serde_json::error::Error)
   [242]: ../../src/tauri/ipc/authority.rs.html#688-690
   [243]: ../ipc/trait.ScopeObject.html#tymethod.deserialize
   [244]: ../struct.AppHandle.html (struct tauri::AppHandle)
   [245]: ../ipc/trait.ScopeObject.html#associatedtype.Error (type tauri::ipc::ScopeObject::Error)
   [246]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#233-235
   [247]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html (trait erased_serde::ser::Serialize)
   [248]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#237
   [249]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.erased_serialize
   [250]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serializer.html (trait erased_serde::ser::Serializer)
   [251]: https://docs.rs/erased-serde/0.4.10/erased_serde/error/struct.Error.html (struct erased_serde::error::Error)
   [252]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#245
   [253]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.do_erased_serialize
   [254]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [255]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [256]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [257]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [258]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [259]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [260]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [261]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [262]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2893
   [263]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html (trait alloc::string::ToString)
   [264]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2895
   [265]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html#tymethod.to_string
   [266]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [267]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [268]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [269]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [270]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [271]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [272]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [273]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [274]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [275]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [276]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#633

