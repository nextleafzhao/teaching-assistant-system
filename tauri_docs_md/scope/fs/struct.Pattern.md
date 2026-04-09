## Pattern

[![logo][1]][2]

## [tauri][2]2.10.3

## Pattern

### Methods

  * as_str
  * escape
  * matches
  * matches_path
  * matches_path_with
  * matches_with
  * new



### Trait Implementations

  * Clone
  * Debug
  * Default
  * Display
  * Eq
  * FromStr
  * Hash
  * Ord
  * PartialEq
  * PartialOrd
  * StructuralPartialEq



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



## [In tauri::scope::fs][3]

[tauri][4]::[scope][5]::[fs][3]

# Struct Pattern Copy item path

[Source][6]
[code] 
    pub struct Pattern { /* private fields */ }
[/code]

Expand description

A compiled Unix shell style pattern.

  * `?` matches any single character.

  * `*` matches any (possibly empty) sequence of characters.

  * `**` matches the current directory and arbitrary subdirectories. To match files in arbitrary subdirectories, use `**/*`.

This sequence **must** form a single path component, so both `**a` and `b**` are invalid and will result in an error. A sequence of more than two consecutive `*` characters is also invalid.

  * `[...]` matches any character inside the brackets. Character sequences can also specify ranges of characters, as ordered by Unicode, so e.g. `[0-9]` specifies any character between 0 and 9 inclusive. An unclosed bracket is invalid.

  * `[!...]` is the negation of `[...]`, i.e. it matches any characters **not** in the brackets.

  * The metacharacters `?`, `*`, `[`, `]` can be matched by using brackets (e.g. `[?]`). When a `]` occurs immediately following `[` or `[!` then it is interpreted as being part of, rather then ending, the character set, so `]` and NOT `]` can be matched by `[]]` and `[!]]` respectively. The `-` character can be specified inside a character sequence pattern by placing it at the start or the end, e.g. `[abc-]`.




## Implementations§

[Source][7]§

### impl [Pattern][8]

[Source][9]

#### pub fn new(pattern: &[str][10]) -> [Result][11]<[Pattern][8], [PatternError][12]>

This function compiles Unix shell style patterns.

An invalid glob pattern will yield a `PatternError`.

[Source][13]

#### pub fn escape(s: &[str][10]) -> [String][14]

Escape metacharacters within the given string by surrounding them in brackets. The resulting string will, when compiled into a `Pattern`, match the input string and nothing else.

[Source][15]

#### pub fn matches(&self, str: &[str][10]) -> [bool][16]

Return if the given `str` matches this `Pattern` using the default match options (i.e. `MatchOptions::new()`).

##### §Examples
[code] 
    use glob::Pattern;
    
    assert!(Pattern::new("c?t").unwrap().matches("cat"));
    assert!(Pattern::new("k[!e]tteh").unwrap().matches("kitteh"));
    assert!(Pattern::new("d*g").unwrap().matches("doog"));
[/code]

[Source][17]

#### pub fn matches_path(&self, path: &[Path][18]) -> [bool][16]

Return if the given `Path`, when converted to a `str`, matches this `Pattern` using the default match options (i.e. `MatchOptions::new()`).

[Source][19]

#### pub fn matches_with(&self, str: &[str][10], options: [MatchOptions][20]) -> [bool][16]

Return if the given `str` matches this `Pattern` using the specified match options.

[Source][21]

#### pub fn matches_path_with(&self, path: &[Path][18], options: [MatchOptions][20]) -> [bool][16]

Return if the given `Path`, when converted to a `str`, matches this `Pattern` using the specified match options.

[Source][22]

#### pub fn as_str(&self) -> &[str][10]

Access the original glob pattern.

## Trait Implementations§

[Source][23]§

### impl [Clone][24] for [Pattern][8]

[Source][23]§

#### fn [clone][25](&self) -> [Pattern][8]

Returns a duplicate of the value. [Read more][25]

1.0.0 · [Source][26]§

#### fn [clone_from][27](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][27]

[Source][23]§

### impl [Debug][28] for [Pattern][8]

[Source][23]§

#### fn [fmt][29](&self, f: &mut [Formatter][30]<'_>) -> [Result][11]<[()][31], [Error][32]>

Formats the value using the given formatter. [Read more][29]

[Source][23]§

### impl [Default][33] for [Pattern][8]

[Source][23]§

#### fn [default][34]() -> [Pattern][8]

Returns the “default value” for a type. [Read more][34]

[Source][35]§

### impl [Display][36] for [Pattern][8]

Show the original glob pattern.

[Source][37]§

#### fn [fmt][38](&self, f: &mut [Formatter][30]<'_>) -> [Result][11]<[()][31], [Error][32]>

Formats the value using the given formatter. [Read more][38]

[Source][39]§

### impl [FromStr][40] for [Pattern][8]

[Source][41]§

#### type [Err][42] = [PatternError][12]

The associated error which can be returned from parsing.

[Source][43]§

#### fn [from_str][44](s: &[str][10]) -> [Result][11]<[Pattern][8], [PatternError][12]>

Parses a string `s` to return a value of this type. [Read more][44]

[Source][23]§

### impl [Hash][45] for [Pattern][8]

[Source][23]§

#### fn [hash][46]<__H>(&self, state: [&mut __H][47])

where __H: [Hasher][48],

Feeds this value into the given [`Hasher`][48]. [Read more][46]

1.3.0 · [Source][49]§

#### fn [hash_slice][50]<H>(data: &[Self], state: [&mut H][47])

where H: [Hasher][48], Self: [Sized][51],

Feeds a slice of this type into the given [`Hasher`][48]. [Read more][50]

[Source][23]§

### impl [Ord][52] for [Pattern][8]

[Source][23]§

#### fn [cmp][53](&self, other: &[Pattern][8]) -> [Ordering][54]

This method returns an [`Ordering`][54] between `self` and `other`. [Read more][53]

1.21.0 · [Source][55]§

#### fn [max][56](self, other: Self) -> Self

where Self: [Sized][51],

Compares and returns the maximum of two values. [Read more][56]

1.21.0 · [Source][57]§

#### fn [min][58](self, other: Self) -> Self

where Self: [Sized][51],

Compares and returns the minimum of two values. [Read more][58]

1.50.0 · [Source][59]§

#### fn [clamp][60](self, min: Self, max: Self) -> Self

where Self: [Sized][51],

Restrict a value to a certain interval. [Read more][60]

[Source][23]§

### impl [PartialEq][61] for [Pattern][8]

[Source][23]§

#### fn [eq][62](&self, other: &[Pattern][8]) -> [bool][16]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][63]§

#### fn [ne][64](&self, other: [&Rhs][47]) -> [bool][16]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][23]§

### impl [PartialOrd][65] for [Pattern][8]

[Source][23]§

#### fn [partial_cmp][66](&self, other: &[Pattern][8]) -> [Option][67]<[Ordering][54]>

This method returns an ordering between `self` and `other` values if one exists. [Read more][66]

1.0.0 · [Source][68]§

#### fn [lt][69](&self, other: [&Rhs][47]) -> [bool][16]

Tests less than (for `self` and `other`) and is used by the `<` operator. [Read more][69]

1.0.0 · [Source][70]§

#### fn [le][71](&self, other: [&Rhs][47]) -> [bool][16]

Tests less than or equal to (for `self` and `other`) and is used by the `<=` operator. [Read more][71]

1.0.0 · [Source][72]§

#### fn [gt][73](&self, other: [&Rhs][47]) -> [bool][16]

Tests greater than (for `self` and `other`) and is used by the `>` operator. [Read more][73]

1.0.0 · [Source][74]§

#### fn [ge][75](&self, other: [&Rhs][47]) -> [bool][16]

Tests greater than or equal to (for `self` and `other`) and is used by the `>=` operator. [Read more][75]

[Source][23]§

### impl [Eq][76] for [Pattern][8]

[Source][23]§

### impl [StructuralPartialEq][77] for [Pattern][8]

## Auto Trait Implementations§

§

### impl [Freeze][78] for [Pattern][8]

§

### impl [RefUnwindSafe][79] for [Pattern][8]

§

### impl [Send][80] for [Pattern][8]

§

### impl [Sync][81] for [Pattern][8]

§

### impl [Unpin][82] for [Pattern][8]

§

### impl [UnwindSafe][83] for [Pattern][8]

## Blanket Implementations§

[Source][84]§

### impl<T> [Any][85] for T

where T: 'static + ?[Sized][51],

[Source][86]§

#### fn [type_id][87](&self) -> [TypeId][88]

Gets the `TypeId` of `self`. [Read more][87]

[Source][89]§

### impl<T> [Borrow][90]<T> for T

where T: ?[Sized][51],

[Source][91]§

#### fn [borrow][92](&self) -> [&T][47]

Immutably borrows from an owned value. [Read more][92]

[Source][93]§

### impl<T> [BorrowMut][94]<T> for T

where T: ?[Sized][51],

[Source][95]§

#### fn [borrow_mut][96](&mut self) -> [&mut T][47]

Mutably borrows from an owned value. [Read more][96]

[Source][97]§

### impl<T> [CloneToUninit][98] for T

where T: [Clone][24],

[Source][99]§

#### unsafe fn [clone_to_uninit][100](&self, dest: [*mut ][101][u8][102])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][100]

[Source][103]§

### impl<T> [From][104]<T> for T

[Source][105]§

#### fn [from][106](t: T) -> T

Returns the argument unchanged.

[Source][107]§

### impl<T, U> [Into][108]<U> for T

where U: [From][104]<T>,

[Source][109]§

#### fn [into][110](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][104]<T> for U` chooses to do.

[Source][111]§

### impl<T> [ToOwned][112] for T

where T: [Clone][24],

[Source][113]§

#### type [Owned][114] = T

The resulting type after obtaining ownership.

[Source][115]§

#### fn [to_owned][116](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][116]

[Source][117]§

#### fn [clone_into][118](&self, target: [&mut T][47])

Uses borrowed data to replace owned data, usually by cloning. [Read more][118]

[Source][119]§

### impl<T> [ToString][120] for T

where T: [Display][36] \+ ?[Sized][51],

[Source][121]§

#### fn [to_string][122](&self) -> [String][14]

Converts the given value to a `String`. [Read more][122]

[Source][123]§

### impl<T, U> [TryFrom][124]<U> for T

where U: [Into][108]<T>,

[Source][125]§

#### type [Error][126] = [Infallible][127]

The type returned in the event of a conversion error.

[Source][128]§

#### fn [try_from][129](value: U) -> [Result][11]<T, <T as [TryFrom][124]<U>>::[Error][130]>

Performs the conversion.

[Source][131]§

### impl<T, U> [TryInto][132]<U> for T

where U: [TryFrom][124]<T>,

[Source][133]§

#### type [Error][134] = <U as [TryFrom][124]<T>>::[Error][130]

The type returned in the event of a conversion error.

[Source][135]§

#### fn [try_into][136](self) -> [Result][11]<U, <U as [TryFrom][124]<T>>::[Error][130]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][28] \+ [Clone][24] \+ [Send][80] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../../tauri/index.html
   [3]: index.html
   [4]: ../../index.html
   [5]: ../index.html
   [6]: https://docs.rs/glob/0.3.1/src/glob/lib.rs.html#552
   [7]: https://docs.rs/glob/0.3.1/src/glob/lib.rs.html#604
   [8]: struct.Pattern.html (struct tauri::scope::fs::Pattern)
   [9]: https://docs.rs/glob/0.3.1/src/glob/lib.rs.html#608
   [10]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [11]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [12]: https://docs.rs/glob/0.3.1/glob/struct.PatternError.html (struct glob::PatternError)
   [13]: https://docs.rs/glob/0.3.1/src/glob/lib.rs.html#735
   [14]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [15]: https://docs.rs/glob/0.3.1/src/glob/lib.rs.html#766
   [16]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [17]: https://docs.rs/glob/0.3.1/src/glob/lib.rs.html#772
   [18]: https://doc.rust-lang.org/1.94.1/std/path/struct.Path.html (struct std::path::Path)
   [19]: https://docs.rs/glob/0.3.1/src/glob/lib.rs.html#779
   [20]: https://docs.rs/glob/0.3.1/glob/struct.MatchOptions.html (struct glob::MatchOptions)
   [21]: https://docs.rs/glob/0.3.1/src/glob/lib.rs.html#785
   [22]: https://docs.rs/glob/0.3.1/src/glob/lib.rs.html#792
   [23]: https://docs.rs/glob/0.3.1/src/glob/lib.rs.html#551
   [24]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [25]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [26]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [27]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [28]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [29]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [30]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [31]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [32]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [33]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [34]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [35]: https://docs.rs/glob/0.3.1/src/glob/lib.rs.html#562
   [36]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [37]: https://docs.rs/glob/0.3.1/src/glob/lib.rs.html#563
   [38]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html#tymethod.fmt
   [39]: https://docs.rs/glob/0.3.1/src/glob/lib.rs.html#568
   [40]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html (trait core::str::traits::FromStr)
   [41]: https://docs.rs/glob/0.3.1/src/glob/lib.rs.html#569
   [42]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#associatedtype.Err
   [43]: https://docs.rs/glob/0.3.1/src/glob/lib.rs.html#571
   [44]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#tymethod.from_str
   [45]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html (trait core::hash::Hash)
   [46]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#tymethod.hash
   [47]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [48]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hasher.html (trait core::hash::Hasher)
   [49]: https://doc.rust-lang.org/1.94.1/src/core/hash/mod.rs.html#235-237
   [50]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#method.hash_slice
   [51]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [52]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html (trait core::cmp::Ord)
   [53]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#tymethod.cmp
   [54]: https://doc.rust-lang.org/1.94.1/core/cmp/enum.Ordering.html (enum core::cmp::Ordering)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1025-1027
   [56]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#method.max
   [57]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1064-1066
   [58]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#method.min
   [59]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1090-1092
   [60]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#method.clamp
   [61]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [62]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [63]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [64]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [65]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html (trait core::cmp::PartialOrd)
   [66]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp
   [67]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [68]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1402
   [69]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.lt
   [70]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1420
   [71]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.le
   [72]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1438
   [73]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.gt
   [74]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1456
   [75]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.ge
   [76]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [77]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [78]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [79]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [80]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [81]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [82]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [83]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [84]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [85]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [86]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [87]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [88]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [89]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [90]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [91]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [92]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [93]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [94]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [95]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [96]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [97]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [98]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [99]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [100]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [101]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [102]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [103]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [104]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [105]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [106]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [107]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [108]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [109]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [110]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [111]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [112]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [113]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [114]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [115]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [116]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [117]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [118]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [119]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2893
   [120]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html (trait alloc::string::ToString)
   [121]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2895
   [122]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html#tymethod.to_string
   [123]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [124]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [125]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [126]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [127]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [128]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [129]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [130]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [131]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [132]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [133]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [134]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [135]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [136]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

