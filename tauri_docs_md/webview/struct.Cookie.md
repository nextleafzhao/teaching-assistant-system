## Cookie

[![logo][1]][2]

## [tauri][2]2.10.3

## Cookie

### Sections

  * Constructing a `Cookie`
  * Building a `Cookie`



### Methods

  * build
  * domain
  * domain_raw
  * expires
  * expires_datetime
  * http_only
  * into_owned
  * make_permanent
  * make_removal
  * max_age
  * name
  * name_raw
  * name_value
  * name_value_trimmed
  * named
  * new
  * parse
  * partitioned
  * path
  * path_raw
  * same_site
  * secure
  * set_domain
  * set_expires
  * set_http_only
  * set_max_age
  * set_name
  * set_partitioned
  * set_path
  * set_same_site
  * set_secure
  * set_value
  * split_parse
  * stripped
  * unset_domain
  * unset_expires
  * unset_path
  * value
  * value_raw
  * value_trimmed



### Trait Implementations

  * AsMut<Cookie<'a>>
  * AsRef<Cookie<'a>>
  * Clone
  * Debug
  * Display
  * From<&'a str>
  * From<(N, V)>
  * From<CookieBuilder<'a>>
  * From<Cow<'a, str>>
  * From<String>
  * FromStr
  * PartialEq<Cookie<'b>>
  * PartialEq<CookieBuilder<'b>>



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
  * From<T>
  * Into<U>
  * ToOwned
  * ToString
  * TryFrom<U>
  * TryInto<U>
  * UserEvent



## [In tauri::webview][3]

[tauri][4]::[webview][3]

# Struct Cookie Copy item path
[code]
    pub struct Cookie<'c> { /* private fields */ }
[/code]

Expand description

Representation of an HTTP cookie.

### §Constructing a `Cookie`

To construct a cookie with only a name/value, use [`Cookie::new()`][5]:
[code] 
    use cookie::Cookie;
    
    let cookie = Cookie::new("name", "value");
    assert_eq!(cookie.to_string(), "name=value");
[/code]

### §Building a `Cookie`

To construct more elaborate cookies, use [`Cookie::build()`][6] and [`CookieBuilder`] methods. `Cookie::build()` accepts any type that implements `T: Into<Cookie>`. See [`Cookie::build()`][6] for details.
[code] 
    use cookie::Cookie;
    
    let cookie = Cookie::build(("name", "value"))
        .domain("www.rust-lang.org")
        .path("/")
        .secure(true)
        .http_only(true);
    
    jar.add(cookie);
    jar.remove(Cookie::build("name").path("/"));
[/code]

## Implementations§

§

### impl<'c> [Cookie][7]<'c>

#### pub fn new<N, V>(name: N, value: V) -> [Cookie][7]<'c>

where N: [Into][8]<[Cow][9]<'c, [str][10]>>, V: [Into][8]<[Cow][9]<'c, [str][10]>>,

Creates a new `Cookie` with the given name and value.

##### §Example
[code] 
    use cookie::Cookie;
    
    let cookie = Cookie::new("name", "value");
    assert_eq!(cookie.name_value(), ("name", "value"));
    
    // This is equivalent to `from` with a `(name, value)` tuple:
    let cookie = Cookie::from(("name", "value"));
    assert_eq!(cookie.name_value(), ("name", "value"));
[/code]

#### pub fn named<N>(name: N) -> [Cookie][7]<'c>

where N: [Into][8]<[Cow][9]<'c, [str][10]>>,

👎Deprecated since 0.18.0: use `Cookie::build(name)` or `Cookie::from(name)`

Creates a new `Cookie` with the given name and an empty value.

##### §Example
[code] 
    use cookie::Cookie;
    
    let cookie = Cookie::named("name");
    assert_eq!(cookie.name(), "name");
    assert!(cookie.value().is_empty());
    
    // This is equivalent to `from` with `"name`:
    let cookie = Cookie::from("name");
    assert_eq!(cookie.name(), "name");
    assert!(cookie.value().is_empty());
[/code]

#### pub fn build<C>(base: C) -> CookieBuilder<'c>

where C: [Into][8]<[Cookie][7]<'c>>,

Creates a new [`CookieBuilder`] starting from a `base` cookie.

Any type that implements `T: Into<Cookie>` can be used as a `base`:

| `Into<Cookie>` Type              | Example                | Equivalent To              |
|----------------------------------|------------------------|----------------------------|
| `(K, V)`, `K, V: Into<Cow<str>>` | `("name", "value")`    | `Cookie::new(name, value)` |
| `&str`, `String`, `Cow<str>`     | `"name"`               | `Cookie::new(name, "")`    |
| [`CookieBuilder`]                | `Cookie::build("foo")` | [`CookieBuilder::build()`] |



##### §Example
[code] 
    use cookie::Cookie;
    
    // Use `(K, V)` as the base, setting a name and value.
    let b1 = Cookie::build(("name", "value")).path("/");
    assert_eq!(b1.inner().name_value(), ("name", "value"));
    assert_eq!(b1.inner().path(), Some("/"));
    
    // Use `&str` as the base, setting a name and empty value.
    let b2 = Cookie::build(("name"));
    assert_eq!(b2.inner().name_value(), ("name", ""));
    
    // Use `CookieBuilder` as the base, inheriting all properties.
    let b3 = Cookie::build(b1);
    assert_eq!(b3.inner().name_value(), ("name", "value"));
    assert_eq!(b3.inner().path(), Some("/"));
[/code]

#### pub fn parse<S>(s: S) -> [Result][11]<[Cookie][7]<'c>, ParseError>

where S: [Into][8]<[Cow][9]<'c, [str][10]>>,

Parses a `Cookie` from the given HTTP cookie header value string. Does not perform any percent-decoding.

##### §Example
[code] 
    use cookie::Cookie;
    
    let c = Cookie::parse("foo=bar%20baz; HttpOnly").unwrap();
    assert_eq!(c.name_value(), ("foo", "bar%20baz"));
    assert_eq!(c.http_only(), Some(true));
    assert_eq!(c.secure(), None);
[/code]

#### pub fn split_parse<S>(string: S) -> SplitCookies<'c>

where S: [Into][8]<[Cow][9]<'c, [str][10]>>,

Parses the HTTP `Cookie` header, a series of cookie names and value separated by `;`, returning an iterator over the parse results. Each item returned by the iterator is a `Result<Cookie, ParseError>` of parsing one name/value pair. Empty cookie values (i.e, in `a=1;;b=2`) and any excess surrounding whitespace are ignored.

Unlike [`Cookie::split_parse_encoded()`], this method _does**not**_ percent-decode keys and values.

##### §Example
[code] 
    use cookie::Cookie;
    
    let string = "name=value; other=key%20value";
    for cookie in Cookie::split_parse(string) {
        let cookie = cookie.unwrap();
        match cookie.name() {
            "name" => assert_eq!(cookie.value(), "value"),
            "other" => assert_eq!(cookie.value(), "key%20value"),
            _ => unreachable!()
        }
    }
[/code]

#### pub fn into_owned(self) -> [Cookie][7]<'static>

Converts `self` into a `Cookie` with a static lifetime with as few allocations as possible.

##### §Example
[code] 
    use cookie::Cookie;
    
    let c = Cookie::new("a", "b");
    let owned_cookie = c.into_owned();
    assert_eq!(owned_cookie.name_value(), ("a", "b"));
[/code]

#### pub fn name(&self) -> &[str][10]

Returns the name of `self`.

##### §Example
[code] 
    use cookie::Cookie;
    
    let c = Cookie::new("name", "value");
    assert_eq!(c.name(), "name");
[/code]

#### pub fn value(&self) -> &[str][10]

Returns the value of `self`.

Does not strip surrounding quotes. See [`Cookie::value_trimmed()`][12] for a version that does.

##### §Example
[code] 
    use cookie::Cookie;
    
    let c = Cookie::new("name", "value");
    assert_eq!(c.value(), "value");
    
    let c = Cookie::new("name", "\"value\"");
    assert_eq!(c.value(), "\"value\"");
[/code]

#### pub fn value_trimmed(&self) -> &[str][10]

Returns the value of `self` with surrounding double-quotes trimmed.

This is _not_ the value of the cookie (_that_ is [`Cookie::value()`][13]). Instead, this is the value with a surrounding pair of double-quotes, if any, trimmed away. Quotes are only trimmed when they form a pair and never otherwise. The trimmed value is never used for other operations, such as equality checking, on `self`.

##### §Example
[code] 
    use cookie::Cookie;
    let c0 = Cookie::new("name", "value");
    assert_eq!(c0.value_trimmed(), "value");
    
    let c = Cookie::new("name", "\"value\"");
    assert_eq!(c.value_trimmed(), "value");
    assert!(c != c0);
    
    let c = Cookie::new("name", "\"value");
    assert_eq!(c.value(), "\"value");
    assert_eq!(c.value_trimmed(), "\"value");
    assert!(c != c0);
    
    let c = Cookie::new("name", "\"value\"\"");
    assert_eq!(c.value(), "\"value\"\"");
    assert_eq!(c.value_trimmed(), "value\"");
    assert!(c != c0);
[/code]

#### pub fn name_value(&self) -> (&[str][10], &[str][10])

Returns the name and value of `self` as a tuple of `(name, value)`.

##### §Example
[code] 
    use cookie::Cookie;
    
    let c = Cookie::new("name", "value");
    assert_eq!(c.name_value(), ("name", "value"));
[/code]

#### pub fn name_value_trimmed(&self) -> (&[str][10], &[str][10])

Returns the name and [trimmed value][12] of `self` as a tuple of `(name, trimmed_value)`.

##### §Example
[code] 
    use cookie::Cookie;
    
    let c = Cookie::new("name", "\"value\"");
    assert_eq!(c.name_value_trimmed(), ("name", "value"));
[/code]

#### pub fn http_only(&self) -> [Option][14]<[bool][15]>

Returns whether this cookie was marked `HttpOnly` or not. Returns `Some(true)` when the cookie was explicitly set (manually or parsed) as `HttpOnly`, `Some(false)` when `http_only` was manually set to `false`, and `None` otherwise.

##### §Example
[code] 
    use cookie::Cookie;
    
    let c = Cookie::parse("name=value; httponly").unwrap();
    assert_eq!(c.http_only(), Some(true));
    
    let mut c = Cookie::new("name", "value");
    assert_eq!(c.http_only(), None);
    
    let mut c = Cookie::new("name", "value");
    assert_eq!(c.http_only(), None);
    
    // An explicitly set "false" value.
    c.set_http_only(false);
    assert_eq!(c.http_only(), Some(false));
    
    // An explicitly set "true" value.
    c.set_http_only(true);
    assert_eq!(c.http_only(), Some(true));
[/code]

#### pub fn secure(&self) -> [Option][14]<[bool][15]>

Returns whether this cookie was marked `Secure` or not. Returns `Some(true)` when the cookie was explicitly set (manually or parsed) as `Secure`, `Some(false)` when `secure` was manually set to `false`, and `None` otherwise.

##### §Example
[code] 
    use cookie::Cookie;
    
    let c = Cookie::parse("name=value; Secure").unwrap();
    assert_eq!(c.secure(), Some(true));
    
    let mut c = Cookie::parse("name=value").unwrap();
    assert_eq!(c.secure(), None);
    
    let mut c = Cookie::new("name", "value");
    assert_eq!(c.secure(), None);
    
    // An explicitly set "false" value.
    c.set_secure(false);
    assert_eq!(c.secure(), Some(false));
    
    // An explicitly set "true" value.
    c.set_secure(true);
    assert_eq!(c.secure(), Some(true));
[/code]

#### pub fn same_site(&self) -> [Option][14]<SameSite>

Returns the `SameSite` attribute of this cookie if one was specified.

##### §Example
[code] 
    use cookie::{Cookie, SameSite};
    
    let c = Cookie::parse("name=value; SameSite=Lax").unwrap();
    assert_eq!(c.same_site(), Some(SameSite::Lax));
[/code]

#### pub fn partitioned(&self) -> [Option][14]<[bool][15]>

Returns whether this cookie was marked `Partitioned` or not. Returns `Some(true)` when the cookie was explicitly set (manually or parsed) as `Partitioned`, `Some(false)` when `partitioned` was manually set to `false`, and `None` otherwise.

**Note:** This cookie attribute is an [HTTP draft][16]! Its meaning and definition are not standardized and therefore subject to change.

##### §Example
[code] 
    use cookie::Cookie;
    
    let c = Cookie::parse("name=value; Partitioned").unwrap();
    assert_eq!(c.partitioned(), Some(true));
    
    let mut c = Cookie::parse("name=value").unwrap();
    assert_eq!(c.partitioned(), None);
    
    let mut c = Cookie::new("name", "value");
    assert_eq!(c.partitioned(), None);
    
    // An explicitly set "false" value.
    c.set_partitioned(false);
    assert_eq!(c.partitioned(), Some(false));
    
    // An explicitly set "true" value.
    c.set_partitioned(true);
    assert_eq!(c.partitioned(), Some(true));
[/code]

#### pub fn max_age(&self) -> [Option][14]<Duration>

Returns the specified max-age of the cookie if one was specified.

##### §Example
[code] 
    use cookie::Cookie;
    
    let c = Cookie::parse("name=value").unwrap();
    assert_eq!(c.max_age(), None);
    
    let c = Cookie::parse("name=value; Max-Age=3600").unwrap();
    assert_eq!(c.max_age().map(|age| age.whole_hours()), Some(1));
[/code]

#### pub fn path(&self) -> [Option][14]<&[str][10]>

Returns the `Path` of the cookie if one was specified.

##### §Example
[code] 
    use cookie::Cookie;
    
    let c = Cookie::parse("name=value").unwrap();
    assert_eq!(c.path(), None);
    
    let c = Cookie::parse("name=value; Path=/").unwrap();
    assert_eq!(c.path(), Some("/"));
    
    let c = Cookie::parse("name=value; path=/sub").unwrap();
    assert_eq!(c.path(), Some("/sub"));
[/code]

#### pub fn domain(&self) -> [Option][14]<&[str][10]>

Returns the `Domain` of the cookie if one was specified.

This does not consider whether the `Domain` is valid; validation is left to higher-level libraries, as needed. However, if the `Domain` starts with a leading `.`, the leading `.` is stripped.

##### §Example
[code] 
    use cookie::Cookie;
    
    let c = Cookie::parse("name=value").unwrap();
    assert_eq!(c.domain(), None);
    
    let c = Cookie::parse("name=value; Domain=crates.io").unwrap();
    assert_eq!(c.domain(), Some("crates.io"));
    
    let c = Cookie::parse("name=value; Domain=.crates.io").unwrap();
    assert_eq!(c.domain(), Some("crates.io"));
    
    // Note that `..crates.io` is not a valid domain.
    let c = Cookie::parse("name=value; Domain=..crates.io").unwrap();
    assert_eq!(c.domain(), Some(".crates.io"));
[/code]

#### pub fn expires(&self) -> [Option][14]<Expiration>

Returns the [`Expiration`] of the cookie if one was specified.

##### §Example
[code] 
    use cookie::{Cookie, Expiration};
    
    let c = Cookie::parse("name=value").unwrap();
    assert_eq!(c.expires(), None);
    
    // Here, `cookie.expires_datetime()` returns `None`.
    let c = Cookie::build(("name", "value")).expires(None).build();
    assert_eq!(c.expires(), Some(Expiration::Session));
    
    let expire_time = "Wed, 21 Oct 2017 07:28:00 GMT";
    let cookie_str = format!("name=value; Expires={}", expire_time);
    let c = Cookie::parse(cookie_str).unwrap();
    assert_eq!(c.expires().and_then(|e| e.datetime()).map(|t| t.year()), Some(2017));
[/code]

#### pub fn expires_datetime(&self) -> [Option][14]<OffsetDateTime>

Returns the expiration date-time of the cookie if one was specified.

##### §Example
[code] 
    use cookie::Cookie;
    
    let c = Cookie::parse("name=value").unwrap();
    assert_eq!(c.expires_datetime(), None);
    
    // Here, `cookie.expires()` returns `Some`.
    let c = Cookie::build(("name", "value")).expires(None).build();
    assert_eq!(c.expires_datetime(), None);
    
    let expire_time = "Wed, 21 Oct 2017 07:28:00 GMT";
    let cookie_str = format!("name=value; Expires={}", expire_time);
    let c = Cookie::parse(cookie_str).unwrap();
    assert_eq!(c.expires_datetime().map(|t| t.year()), Some(2017));
[/code]

#### pub fn set_name<N>(&mut self, name: N)

where N: [Into][8]<[Cow][9]<'c, [str][10]>>,

Sets the name of `self` to `name`.

##### §Example
[code] 
    use cookie::Cookie;
    
    let mut c = Cookie::new("name", "value");
    assert_eq!(c.name(), "name");
    
    c.set_name("foo");
    assert_eq!(c.name(), "foo");
[/code]

#### pub fn set_value<V>(&mut self, value: V)

where V: [Into][8]<[Cow][9]<'c, [str][10]>>,

Sets the value of `self` to `value`.

##### §Example
[code] 
    use cookie::Cookie;
    
    let mut c = Cookie::new("name", "value");
    assert_eq!(c.value(), "value");
    
    c.set_value("bar");
    assert_eq!(c.value(), "bar");
[/code]

#### pub fn set_http_only<T>(&mut self, value: T)

where T: [Into][8]<[Option][14]<[bool][15]>>,

Sets the value of `http_only` in `self` to `value`. If `value` is `None`, the field is unset.

##### §Example
[code] 
    use cookie::Cookie;
    
    let mut c = Cookie::new("name", "value");
    assert_eq!(c.http_only(), None);
    
    c.set_http_only(true);
    assert_eq!(c.http_only(), Some(true));
    
    c.set_http_only(false);
    assert_eq!(c.http_only(), Some(false));
    
    c.set_http_only(None);
    assert_eq!(c.http_only(), None);
[/code]

#### pub fn set_secure<T>(&mut self, value: T)

where T: [Into][8]<[Option][14]<[bool][15]>>,

Sets the value of `secure` in `self` to `value`. If `value` is `None`, the field is unset.

##### §Example
[code] 
    use cookie::Cookie;
    
    let mut c = Cookie::new("name", "value");
    assert_eq!(c.secure(), None);
    
    c.set_secure(true);
    assert_eq!(c.secure(), Some(true));
    
    c.set_secure(false);
    assert_eq!(c.secure(), Some(false));
    
    c.set_secure(None);
    assert_eq!(c.secure(), None);
[/code]

#### pub fn set_same_site<T>(&mut self, value: T)

where T: [Into][8]<[Option][14]<SameSite>>,

Sets the value of `same_site` in `self` to `value`. If `value` is `None`, the field is unset. If `value` is `SameSite::None`, the “Secure” flag will be set when the cookie is written out unless `secure` is explicitly set to `false` via [`Cookie::set_secure()`][17] or the equivalent builder method.

##### §Example
[code] 
    use cookie::{Cookie, SameSite};
    
    let mut c = Cookie::new("name", "value");
    assert_eq!(c.same_site(), None);
    
    c.set_same_site(SameSite::None);
    assert_eq!(c.same_site(), Some(SameSite::None));
    assert_eq!(c.to_string(), "name=value; SameSite=None; Secure");
    
    c.set_secure(false);
    assert_eq!(c.to_string(), "name=value; SameSite=None");
    
    let mut c = Cookie::new("name", "value");
    assert_eq!(c.same_site(), None);
    
    c.set_same_site(SameSite::Strict);
    assert_eq!(c.same_site(), Some(SameSite::Strict));
    assert_eq!(c.to_string(), "name=value; SameSite=Strict");
    
    c.set_same_site(None);
    assert_eq!(c.same_site(), None);
    assert_eq!(c.to_string(), "name=value");
[/code]

#### pub fn set_partitioned<T>(&mut self, value: T)

where T: [Into][8]<[Option][14]<[bool][15]>>,

Sets the value of `partitioned` in `self` to `value`. If `value` is `None`, the field is unset.

**Note:** _Partitioned_ cookies require the `Secure` attribute to be set. As such, `Partitioned` cookies are always rendered with the `Secure` attribute, irrespective of the `Secure` attribute’s setting.

**Note:** This cookie attribute is an [HTTP draft][16]! Its meaning and definition are not standardized and therefore subject to change.

##### §Example
[code] 
    use cookie::Cookie;
    
    let mut c = Cookie::new("name", "value");
    assert_eq!(c.partitioned(), None);
    
    c.set_partitioned(true);
    assert_eq!(c.partitioned(), Some(true));
    assert!(c.to_string().contains("Secure"));
    
    c.set_partitioned(false);
    assert_eq!(c.partitioned(), Some(false));
    assert!(!c.to_string().contains("Secure"));
    
    c.set_partitioned(None);
    assert_eq!(c.partitioned(), None);
    assert!(!c.to_string().contains("Secure"));
[/code]

#### pub fn set_max_age<D>(&mut self, value: D)

where D: [Into][8]<[Option][14]<Duration>>,

Sets the value of `max_age` in `self` to `value`. If `value` is `None`, the field is unset.

##### §Example
[code] 
    use cookie::Cookie;
    use cookie::time::Duration;
    
    let mut c = Cookie::new("name", "value");
    assert_eq!(c.max_age(), None);
    
    c.set_max_age(Duration::hours(10));
    assert_eq!(c.max_age(), Some(Duration::hours(10)));
    
    c.set_max_age(None);
    assert!(c.max_age().is_none());
[/code]

#### pub fn set_path<P>(&mut self, path: P)

where P: [Into][8]<[Cow][9]<'c, [str][10]>>,

Sets the `path` of `self` to `path`.

##### §Example
[code] 
    use cookie::Cookie;
    
    let mut c = Cookie::new("name", "value");
    assert_eq!(c.path(), None);
    
    c.set_path("/");
    assert_eq!(c.path(), Some("/"));
[/code]

#### pub fn unset_path(&mut self)

Unsets the `path` of `self`.

##### §Example
[code] 
    use cookie::Cookie;
    
    let mut c = Cookie::new("name", "value");
    assert_eq!(c.path(), None);
    
    c.set_path("/");
    assert_eq!(c.path(), Some("/"));
    
    c.unset_path();
    assert_eq!(c.path(), None);
[/code]

#### pub fn set_domain<D>(&mut self, domain: D)

where D: [Into][8]<[Cow][9]<'c, [str][10]>>,

Sets the `domain` of `self` to `domain`.

##### §Example
[code] 
    use cookie::Cookie;
    
    let mut c = Cookie::new("name", "value");
    assert_eq!(c.domain(), None);
    
    c.set_domain("rust-lang.org");
    assert_eq!(c.domain(), Some("rust-lang.org"));
[/code]

#### pub fn unset_domain(&mut self)

Unsets the `domain` of `self`.

##### §Example
[code] 
    use cookie::Cookie;
    
    let mut c = Cookie::new("name", "value");
    assert_eq!(c.domain(), None);
    
    c.set_domain("rust-lang.org");
    assert_eq!(c.domain(), Some("rust-lang.org"));
    
    c.unset_domain();
    assert_eq!(c.domain(), None);
[/code]

#### pub fn set_expires<T>(&mut self, time: T)

where T: [Into][8]<Expiration>,

Sets the expires field of `self` to `time`. If `time` is `None`, an expiration of [`Session`][18] is set.

##### §Example
[code] 
    use cookie::{Cookie, Expiration};
    use cookie::time::{Duration, OffsetDateTime};
    
    let mut c = Cookie::new("name", "value");
    assert_eq!(c.expires(), None);
    
    let mut now = OffsetDateTime::now_utc();
    now += Duration::weeks(52);
    
    c.set_expires(now);
    assert!(c.expires().is_some());
    
    c.set_expires(None);
    assert_eq!(c.expires(), Some(Expiration::Session));
[/code]

#### pub fn unset_expires(&mut self)

Unsets the `expires` of `self`.

##### §Example
[code] 
    use cookie::{Cookie, Expiration};
    
    let mut c = Cookie::new("name", "value");
    assert_eq!(c.expires(), None);
    
    c.set_expires(None);
    assert_eq!(c.expires(), Some(Expiration::Session));
    
    c.unset_expires();
    assert_eq!(c.expires(), None);
[/code]

#### pub fn make_permanent(&mut self)

Makes `self` a “permanent” cookie by extending its expiration and max age 20 years into the future.

##### §Example
[code] 
    use cookie::Cookie;
    use cookie::time::Duration;
    
    let mut c = Cookie::new("foo", "bar");
    assert!(c.expires().is_none());
    assert!(c.max_age().is_none());
    
    c.make_permanent();
    assert!(c.expires().is_some());
    assert_eq!(c.max_age(), Some(Duration::days(365 * 20)));
[/code]

#### pub fn make_removal(&mut self)

Make `self` a “removal” cookie by clearing its value, setting a max-age of `0`, and setting an expiration date far in the past.

##### §Example
[code] 
    use cookie::Cookie;
    use cookie::time::Duration;
    
    let mut c = Cookie::new("foo", "bar");
    c.make_permanent();
    assert_eq!(c.max_age(), Some(Duration::days(365 * 20)));
    assert_eq!(c.value(), "bar");
    
    c.make_removal();
    assert_eq!(c.value(), "");
    assert_eq!(c.max_age(), Some(Duration::ZERO));
[/code]

#### pub fn name_raw(&self) -> [Option][14]<&'c [str][10]>

Returns the name of `self` as a string slice of the raw string `self` was originally parsed from. If `self` was not originally parsed from a raw string, returns `None`.

This method differs from [`Cookie::name()`][19] in that it returns a string with the same lifetime as the originally parsed string. This lifetime may outlive `self`. If a longer lifetime is not required, or you’re unsure if you need a longer lifetime, use [`Cookie::name()`][19].

##### §Example
[code] 
    use cookie::Cookie;
    
    let cookie_string = format!("{}={}", "foo", "bar");
    
    // `c` will be dropped at the end of the scope, but `name` will live on
    let name = {
        let c = Cookie::parse(cookie_string.as_str()).unwrap();
        c.name_raw()
    };
    
    assert_eq!(name, Some("foo"));
[/code]

#### pub fn value_raw(&self) -> [Option][14]<&'c [str][10]>

Returns the value of `self` as a string slice of the raw string `self` was originally parsed from. If `self` was not originally parsed from a raw string, returns `None`.

This method differs from [`Cookie::value()`][13] in that it returns a string with the same lifetime as the originally parsed string. This lifetime may outlive `self`. If a longer lifetime is not required, or you’re unsure if you need a longer lifetime, use [`Cookie::value()`][13].

##### §Example
[code] 
    use cookie::Cookie;
    
    let cookie_string = format!("{}={}", "foo", "bar");
    
    // `c` will be dropped at the end of the scope, but `value` will live on
    let value = {
        let c = Cookie::parse(cookie_string.as_str()).unwrap();
        c.value_raw()
    };
    
    assert_eq!(value, Some("bar"));
[/code]

#### pub fn path_raw(&self) -> [Option][14]<&'c [str][10]>

Returns the `Path` of `self` as a string slice of the raw string `self` was originally parsed from. If `self` was not originally parsed from a raw string, or if `self` doesn’t contain a `Path`, or if the `Path` has changed since parsing, returns `None`.

This method differs from [`Cookie::path()`][20] in that it returns a string with the same lifetime as the originally parsed string. This lifetime may outlive `self`. If a longer lifetime is not required, or you’re unsure if you need a longer lifetime, use [`Cookie::path()`][20].

##### §Example
[code] 
    use cookie::Cookie;
    
    let cookie_string = format!("{}={}; Path=/", "foo", "bar");
    
    // `c` will be dropped at the end of the scope, but `path` will live on
    let path = {
        let c = Cookie::parse(cookie_string.as_str()).unwrap();
        c.path_raw()
    };
    
    assert_eq!(path, Some("/"));
[/code]

#### pub fn domain_raw(&self) -> [Option][14]<&'c [str][10]>

Returns the `Domain` of `self` as a string slice of the raw string `self` was originally parsed from. If `self` was not originally parsed from a raw string, or if `self` doesn’t contain a `Domain`, or if the `Domain` has changed since parsing, returns `None`.

Like [`Cookie::domain()`][21], this does not consider whether `Domain` is valid; validation is left to higher-level libraries, as needed. However, if `Domain` starts with a leading `.`, the leading `.` is stripped.

This method differs from [`Cookie::domain()`][21] in that it returns a string with the same lifetime as the originally parsed string. This lifetime may outlive `self` struct. If a longer lifetime is not required, or you’re unsure if you need a longer lifetime, use [`Cookie::domain()`][21].

##### §Example
[code] 
    use cookie::Cookie;
    
    let cookie_string = format!("{}={}; Domain=.crates.io", "foo", "bar");
    
    //`c` will be dropped at the end of the scope, but `domain` will live on
    let domain = {
        let c = Cookie::parse(cookie_string.as_str()).unwrap();
        c.domain_raw()
    };
    
    assert_eq!(domain, Some("crates.io"));
[/code]

#### pub fn stripped<'a>(&'a self) -> Display<'a, 'c>

Wraps `self` in a stripped `Display`]: a cost-free wrapper around `Cookie` whose [`fmt::Display`][22] implementation prints only the `name` and `value` of the wrapped `Cookie`.

The returned structure can be chained with [`Display::encoded()`] to encode the name and value.

##### §Example
[code] 
    use cookie::Cookie;
    
    let mut c = Cookie::build(("key?", "value")).secure(true).path("/").build();
    assert_eq!(&c.stripped().to_string(), "key?=value");
[/code]

## Trait Implementations§

§

### impl<'a> [AsMut][23]<[Cookie][7]<'a>> for [Cookie][7]<'a>

§

#### fn [as_mut][24](&mut self) -> &mut [Cookie][7]<'a>

Converts this type into a mutable reference of the (usually inferred) input type.

§

### impl<'a> [AsRef][25]<[Cookie][7]<'a>> for [Cookie][7]<'a>

§

#### fn [as_ref][26](&self) -> &[Cookie][7]<'a>

Converts this type into a shared reference of the (usually inferred) input type.

§

### impl<'c> [Clone][27] for [Cookie][7]<'c>

§

#### fn [clone][28](&self) -> [Cookie][7]<'c>

Returns a duplicate of the value. [Read more][28]

1.0.0 · [Source][29]§

#### fn [clone_from][30](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][30]

§

### impl<'c> [Debug][31] for [Cookie][7]<'c>

§

#### fn [fmt][32](&self, f: &mut [Formatter][33]<'_>) -> [Result][11]<[()][34], [Error][35]>

Formats the value using the given formatter. [Read more][32]

§

### impl<'c> [Display][22] for [Cookie][7]<'c>

§

#### fn [fmt][36](&self, f: &mut [Formatter][33]<'_>) -> [Result][11]<[()][34], [Error][35]>

Formats the cookie `self` as a `Set-Cookie` header value.

Does _not_ percent-encode any values. To percent-encode, use [`Cookie::encoded()`].

##### §Example
[code] 
    use cookie::Cookie;
    
    let mut cookie = Cookie::build(("foo", "bar")).path("/");
    assert_eq!(cookie.to_string(), "foo=bar; Path=/");
[/code]

§

### impl<'a> [From][37]<&'a [str][10]> for [Cookie][7]<'a>

§

#### fn [from][38](name: &'a [str][10]) -> [Cookie][7]<'a>

Converts to this type from the input type.

§

### impl<'a, N, V> [From][37]<[(N, V)][39]> for [Cookie][7]<'a>

where N: [Into][8]<[Cow][9]<'a, [str][10]>>, V: [Into][8]<[Cow][9]<'a, [str][10]>>,

§

#### fn [from][38](_: [(N, V)][39]) -> [Cookie][7]<'a>

Converts to this type from the input type.

§

### impl<'a> [From][37]<CookieBuilder<'a>> for [Cookie][7]<'a>

§

#### fn [from][38](builder: CookieBuilder<'a>) -> [Cookie][7]<'a>

Converts to this type from the input type.

§

### impl<'a> [From][37]<[Cow][9]<'a, [str][10]>> for [Cookie][7]<'a>

§

#### fn [from][38](name: [Cow][9]<'a, [str][10]>) -> [Cookie][7]<'a>

Converts to this type from the input type.

§

### impl [From][37]<[String][40]> for [Cookie][7]<'static>

§

#### fn [from][38](name: [String][40]) -> [Cookie][7]<'static>

Converts to this type from the input type.

§

### impl [FromStr][41] for [Cookie][7]<'static>

§

#### type [Err][42] = ParseError

The associated error which can be returned from parsing.

§

#### fn [from_str][43](s: &[str][10]) -> [Result][11]<[Cookie][7]<'static>, ParseError>

Parses a string `s` to return a value of this type. [Read more][43]

§

### impl<'a, 'b> [PartialEq][44]<[Cookie][7]<'b>> for [Cookie][7]<'a>

§

#### fn [eq][45](&self, other: &[Cookie][7]<'b>) -> [bool][15]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][46]§

#### fn [ne][47](&self, other: [&Rhs][48]) -> [bool][15]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl<'a, 'b> [PartialEq][44]<CookieBuilder<'b>> for [Cookie][7]<'a>

§

#### fn [eq][45](&self, other: &CookieBuilder<'b>) -> [bool][15]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][46]§

#### fn [ne][47](&self, other: [&Rhs][48]) -> [bool][15]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

## Auto Trait Implementations§

§

### impl<'c> [Freeze][49] for [Cookie][7]<'c>

§

### impl<'c> [RefUnwindSafe][50] for [Cookie][7]<'c>

§

### impl<'c> [Send][51] for [Cookie][7]<'c>

§

### impl<'c> [Sync][52] for [Cookie][7]<'c>

§

### impl<'c> [Unpin][53] for [Cookie][7]<'c>

§

### impl<'c> [UnwindSafe][54] for [Cookie][7]<'c>

## Blanket Implementations§

[Source][55]§

### impl<T> [Any][56] for T

where T: 'static + ?[Sized][57],

[Source][58]§

#### fn [type_id][59](&self) -> [TypeId][60]

Gets the `TypeId` of `self`. [Read more][59]

[Source][61]§

### impl<T> [Borrow][62]<T> for T

where T: ?[Sized][57],

[Source][63]§

#### fn [borrow][64](&self) -> [&T][48]

Immutably borrows from an owned value. [Read more][64]

[Source][65]§

### impl<T> [BorrowMut][66]<T> for T

where T: ?[Sized][57],

[Source][67]§

#### fn [borrow_mut][68](&mut self) -> [&mut T][48]

Mutably borrows from an owned value. [Read more][68]

[Source][69]§

### impl<T> [CloneToUninit][70] for T

where T: [Clone][27],

[Source][71]§

#### unsafe fn [clone_to_uninit][72](&self, dest: [*mut ][73][u8][74])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][72]

[Source][75]§

### impl<T> [From][37]<T> for T

[Source][76]§

#### fn [from][38](t: T) -> T

Returns the argument unchanged.

[Source][77]§

### impl<T, U> [Into][8]<U> for T

where U: [From][37]<T>,

[Source][78]§

#### fn [into][79](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][37]<T> for U` chooses to do.

[Source][80]§

### impl<T> [ToOwned][81] for T

where T: [Clone][27],

[Source][82]§

#### type [Owned][83] = T

The resulting type after obtaining ownership.

[Source][84]§

#### fn [to_owned][85](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][85]

[Source][86]§

#### fn [clone_into][87](&self, target: [&mut T][48])

Uses borrowed data to replace owned data, usually by cloning. [Read more][87]

[Source][88]§

### impl<T> [ToString][89] for T

where T: [Display][22] \+ ?[Sized][57],

[Source][90]§

#### fn [to_string][91](&self) -> [String][40]

Converts the given value to a `String`. [Read more][91]

[Source][92]§

### impl<T, U> [TryFrom][93]<U> for T

where U: [Into][8]<T>,

[Source][94]§

#### type [Error][95] = [Infallible][96]

The type returned in the event of a conversion error.

[Source][97]§

#### fn [try_from][98](value: U) -> [Result][11]<T, <T as [TryFrom][93]<U>>::[Error][99]>

Performs the conversion.

[Source][100]§

### impl<T, U> [TryInto][101]<U> for T

where U: [TryFrom][93]<T>,

[Source][102]§

#### type [Error][103] = <U as [TryFrom][93]<T>>::[Error][99]

The type returned in the event of a conversion error.

[Source][104]§

#### fn [try_into][105](self) -> [Result][11]<U, <U as [TryFrom][93]<T>>::[Error][99]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][31] \+ [Clone][27] \+ [Send][51] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: struct.Cookie.html#method.new (associated function tauri::webview::Cookie::new)
   [6]: struct.Cookie.html#method.build (associated function tauri::webview::Cookie::build)
   [7]: struct.Cookie.html (struct tauri::webview::Cookie)
   [8]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [9]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [10]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [11]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [12]: struct.Cookie.html#method.value_trimmed (method tauri::webview::Cookie::value_trimmed)
   [13]: struct.Cookie.html#method.value (method tauri::webview::Cookie::value)
   [14]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [15]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [16]: https://www.ietf.org/id/draft-cutler-httpbis-partitioned-cookies-01.html
   [17]: struct.Cookie.html#method.set_secure (method tauri::webview::Cookie::set_secure)
   [18]: Expiration::Session
   [19]: struct.Cookie.html#method.name (method tauri::webview::Cookie::name)
   [20]: struct.Cookie.html#method.path (method tauri::webview::Cookie::path)
   [21]: struct.Cookie.html#method.domain (method tauri::webview::Cookie::domain)
   [22]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [23]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsMut.html (trait core::convert::AsMut)
   [24]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsMut.html#tymethod.as_mut
   [25]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [26]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html#tymethod.as_ref
   [27]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [28]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [29]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [30]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [31]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [32]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [33]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [34]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [35]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [36]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html#tymethod.fmt
   [37]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [38]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [39]: https://doc.rust-lang.org/1.94.1/std/primitive.tuple.html
   [40]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [41]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html (trait core::str::traits::FromStr)
   [42]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#associatedtype.Err
   [43]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#tymethod.from_str
   [44]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [45]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [46]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [47]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [48]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [49]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [50]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [51]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [52]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [53]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [54]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [56]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [57]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [59]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [60]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [61]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [62]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [63]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [64]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [65]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [66]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [67]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [68]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [69]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [70]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [71]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [72]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [73]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [74]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [75]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [76]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [77]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [78]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [79]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [80]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [81]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [82]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [83]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [84]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [85]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [86]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [87]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [88]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2893
   [89]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html (trait alloc::string::ToString)
   [90]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2895
   [91]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html#tymethod.to_string
   [92]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [93]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [94]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [95]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [96]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [97]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [98]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [99]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [100]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [101]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [102]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [103]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [104]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [105]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

