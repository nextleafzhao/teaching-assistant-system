## MenuId

[![logo][1]][2]

## [tauri][2]2.10.3

## MenuId

### Tuple Fields

  * 0



### Methods

  * new



### Trait Implementations

  * AsRef<str>
  * Clone
  * Debug
  * Default
  * Deserialize<'de>
  * Eq
  * From<T>
  * FromStr
  * Hash
  * Ord
  * PartialEq
  * PartialEq<&MenuId>
  * PartialEq<&String>
  * PartialEq<&str>
  * PartialEq<&str>
  * PartialEq<String>
  * PartialEq<String>
  * PartialOrd
  * Serialize
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
  * CommandArg<'de, R>
  * DeserializeOwned
  * From<!>
  * From<T>
  * Into<U>
  * IpcResponse
  * RuntimeCapability
  * ScopeObject
  * Serialize
  * ToOwned
  * TryFrom<U>
  * TryInto<U>
  * UserEvent



## [In tauri::menu][3]

[tauri][4]::[menu][3]

# Struct MenuId Copy item path
[code]
    pub struct MenuId(pub [String][5]);
[/code]

Expand description

An unique id that is associated with a menu or a menu item.

## Tuple Fields§

§`0: [String][5]`

## Implementations§

§

### impl [MenuId][6]

#### pub fn new<S>(id: S) -> [MenuId][6]

where S: [AsRef][7]<[str][8]>,

Create a new menu id.

## Trait Implementations§

§

### impl [AsRef][7]<[str][8]> for [MenuId][6]

§

#### fn [as_ref][9](&self) -> &[str][8]

Converts this type into a shared reference of the (usually inferred) input type.

§

### impl [Clone][10] for [MenuId][6]

§

#### fn [clone][11](&self) -> [MenuId][6]

Returns a duplicate of the value. [Read more][11]

1.0.0 · [Source][12]§

#### fn [clone_from][13](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][13]

§

### impl [Debug][14] for [MenuId][6]

§

#### fn [fmt][15](&self, f: &mut [Formatter][16]<'_>) -> [Result][17]<[()][18], [Error][19]>

Formats the value using the given formatter. [Read more][15]

§

### impl [Default][20] for [MenuId][6]

§

#### fn [default][21]() -> [MenuId][6]

Returns the “default value” for a type. [Read more][21]

§

### impl<'de> [Deserialize][22]<'de> for [MenuId][6]

§

#### fn [deserialize][23]<__D>( __deserializer: __D, ) -> [Result][17]<[MenuId][6], <__D as [Deserializer][24]<'de>>::[Error][25]>

where __D: [Deserializer][24]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][23]

§

### impl<T> [From][26]<T> for [MenuId][6]

where T: [ToString][27],

§

#### fn [from][28](value: T) -> [MenuId][6]

Converts to this type from the input type.

§

### impl [FromStr][29] for [MenuId][6]

§

#### type [Err][30] = [Infallible][31]

The associated error which can be returned from parsing.

§

#### fn [from_str][32](s: &[str][8]) -> [Result][17]<[MenuId][6], <[MenuId][6] as [FromStr][29]>::[Err][33]>

Parses a string `s` to return a value of this type. [Read more][32]

§

### impl [Hash][34] for [MenuId][6]

§

#### fn [hash][35]<__H>(&self, state: [&mut __H][36])

where __H: [Hasher][37],

Feeds this value into the given [`Hasher`][37]. [Read more][35]

1.3.0 · [Source][38]§

#### fn [hash_slice][39]<H>(data: &[Self], state: [&mut H][36])

where H: [Hasher][37], Self: [Sized][40],

Feeds a slice of this type into the given [`Hasher`][37]. [Read more][39]

§

### impl [Ord][41] for [MenuId][6]

§

#### fn [cmp][42](&self, other: &[MenuId][6]) -> [Ordering][43]

This method returns an [`Ordering`][43] between `self` and `other`. [Read more][42]

1.21.0 · [Source][44]§

#### fn [max][45](self, other: Self) -> Self

where Self: [Sized][40],

Compares and returns the maximum of two values. [Read more][45]

1.21.0 · [Source][46]§

#### fn [min][47](self, other: Self) -> Self

where Self: [Sized][40],

Compares and returns the minimum of two values. [Read more][47]

1.50.0 · [Source][48]§

#### fn [clamp][49](self, min: Self, max: Self) -> Self

where Self: [Sized][40],

Restrict a value to a certain interval. [Read more][49]

§

### impl [PartialEq][50]<&[MenuId][6]> for [MenuId][6]

§

#### fn [eq][51](&self, other: &&[MenuId][6]) -> [bool][52]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][53]§

#### fn [ne][54](&self, other: [&Rhs][36]) -> [bool][52]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl [PartialEq][50]<&[String][5]> for [MenuId][6]

§

#### fn [eq][51](&self, other: &&[String][5]) -> [bool][52]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][53]§

#### fn [ne][54](&self, other: [&Rhs][36]) -> [bool][52]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl [PartialEq][50]<&[str][8]> for &[MenuId][6]

§

#### fn [eq][51](&self, other: &&[str][8]) -> [bool][52]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][53]§

#### fn [ne][54](&self, other: [&Rhs][36]) -> [bool][52]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl [PartialEq][50]<&[str][8]> for [MenuId][6]

§

#### fn [eq][51](&self, other: &&[str][8]) -> [bool][52]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][53]§

#### fn [ne][54](&self, other: [&Rhs][36]) -> [bool][52]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl [PartialEq][50]<[String][5]> for &[MenuId][6]

§

#### fn [eq][51](&self, other: &[String][5]) -> [bool][52]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][53]§

#### fn [ne][54](&self, other: [&Rhs][36]) -> [bool][52]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl [PartialEq][50]<[String][5]> for [MenuId][6]

§

#### fn [eq][51](&self, other: &[String][5]) -> [bool][52]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][53]§

#### fn [ne][54](&self, other: [&Rhs][36]) -> [bool][52]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl [PartialEq][50] for [MenuId][6]

§

#### fn [eq][51](&self, other: &[MenuId][6]) -> [bool][52]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][53]§

#### fn [ne][54](&self, other: [&Rhs][36]) -> [bool][52]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl [PartialOrd][55] for [MenuId][6]

§

#### fn [partial_cmp][56](&self, other: &[MenuId][6]) -> [Option][57]<[Ordering][43]>

This method returns an ordering between `self` and `other` values if one exists. [Read more][56]

1.0.0 · [Source][58]§

#### fn [lt][59](&self, other: [&Rhs][36]) -> [bool][52]

Tests less than (for `self` and `other`) and is used by the `<` operator. [Read more][59]

1.0.0 · [Source][60]§

#### fn [le][61](&self, other: [&Rhs][36]) -> [bool][52]

Tests less than or equal to (for `self` and `other`) and is used by the `<=` operator. [Read more][61]

1.0.0 · [Source][62]§

#### fn [gt][63](&self, other: [&Rhs][36]) -> [bool][52]

Tests greater than (for `self` and `other`) and is used by the `>` operator. [Read more][63]

1.0.0 · [Source][64]§

#### fn [ge][65](&self, other: [&Rhs][36]) -> [bool][52]

Tests greater than or equal to (for `self` and `other`) and is used by the `>=` operator. [Read more][65]

§

### impl [Serialize][66] for [MenuId][6]

§

#### fn [serialize][67]<__S>( &self, __serializer: __S, ) -> [Result][17]<<__S as [Serializer][68]>::[Ok][69], <__S as [Serializer][68]>::[Error][70]>

where __S: [Serializer][68],

Serialize this value into the given Serde serializer. [Read more][67]

§

### impl [Eq][71] for [MenuId][6]

§

### impl [StructuralPartialEq][72] for [MenuId][6]

## Auto Trait Implementations§

§

### impl [Freeze][73] for [MenuId][6]

§

### impl [RefUnwindSafe][74] for [MenuId][6]

§

### impl [Send][75] for [MenuId][6]

§

### impl [Sync][76] for [MenuId][6]

§

### impl [Unpin][77] for [MenuId][6]

§

### impl [UnwindSafe][78] for [MenuId][6]

## Blanket Implementations§

[Source][79]§

### impl<T> [Any][80] for T

where T: 'static + ?[Sized][40],

[Source][81]§

#### fn [type_id][82](&self) -> [TypeId][83]

Gets the `TypeId` of `self`. [Read more][82]

[Source][84]§

### impl<T> [Borrow][85]<T> for T

where T: ?[Sized][40],

[Source][86]§

#### fn [borrow][87](&self) -> [&T][36]

Immutably borrows from an owned value. [Read more][87]

[Source][88]§

### impl<T> [BorrowMut][89]<T> for T

where T: ?[Sized][40],

[Source][90]§

#### fn [borrow_mut][91](&mut self) -> [&mut T][36]

Mutably borrows from an owned value. [Read more][91]

[Source][92]§

### impl<T> [CloneToUninit][93] for T

where T: [Clone][10],

[Source][94]§

#### unsafe fn [clone_to_uninit][95](&self, dest: [*mut ][96][u8][97])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][95]

[Source][98]§

### impl<'de, D, R> [CommandArg][99]<'de, R> for D

where D: [Deserialize][22]<'de>, R: [Runtime][100],

[Source][101]§

#### fn [from_command][102](command: [CommandItem][103]<'de, R>) -> [Result][17]<D, [InvokeError][104]>

Derives an instance of `Self` from the [`CommandItem`][103]. [Read more][102]

[Source][105]§

### impl<T> [From][26]<[!][106]> for T

[Source][107]§

#### fn [from][28](t: [!][106]) -> T

Converts to this type from the input type.

[Source][108]§

### impl<T> [From][26]<T> for T

[Source][109]§

#### fn [from][28](t: T) -> T

Returns the argument unchanged.

[Source][110]§

### impl<T, U> [Into][111]<U> for T

where U: [From][26]<T>,

[Source][112]§

#### fn [into][113](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][26]<T> for U` chooses to do.

[Source][114]§

### impl<T> [IpcResponse][115] for T

where T: [Serialize][66],

[Source][116]§

#### fn [body][117](self) -> [Result][17]<[InvokeResponseBody][118], [Error][119]>

Resolve the IPC response body.

[Source][120]§

### impl<T> [RuntimeCapability][121] for T

where T: [AsRef][7]<[str][8]>,

[Source][122]§

#### fn [build][123](self) -> CapabilityFile

Creates the capability file.

[Source][124]§

### impl<T> [ScopeObject][125] for T

where T: [Send][75] \+ [Sync][76] \+ [Debug][14] \+ [DeserializeOwned][126] \+ 'static,

[Source][127]§

#### type [Error][128] = [Error][129]

The error type.

[Source][130]§

#### fn [deserialize][131]<R>( _app: &[AppHandle][132]<R>, raw: Value, ) -> [Result][17]<T, <T as [ScopeObject][125]>::[Error][133]>

where R: [Runtime][100],

Deserialize the raw scope value.

[Source][134]§

### impl<T> [Serialize][135] for T

where T: [Serialize][66] \+ ?[Sized][40],

[Source][136]§

#### fn [erased_serialize][137](&self, serializer: &mut dyn [Serializer][138]) -> [Result][17]<[()][18], [Error][139]>

[Source][140]§

#### fn [do_erased_serialize][141]( &self, serializer: &mut dyn [Serializer][138], ) -> [Result][17]<[()][18], ErrorImpl>

[Source][142]§

### impl<T> [ToOwned][143] for T

where T: [Clone][10],

[Source][144]§

#### type [Owned][145] = T

The resulting type after obtaining ownership.

[Source][146]§

#### fn [to_owned][147](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][147]

[Source][148]§

#### fn [clone_into][149](&self, target: [&mut T][36])

Uses borrowed data to replace owned data, usually by cloning. [Read more][149]

[Source][150]§

### impl<T, U> [TryFrom][151]<U> for T

where U: [Into][111]<T>,

[Source][152]§

#### type [Error][153] = [Infallible][31]

The type returned in the event of a conversion error.

[Source][154]§

#### fn [try_from][155](value: U) -> [Result][17]<T, <T as [TryFrom][151]<U>>::[Error][156]>

Performs the conversion.

[Source][157]§

### impl<T, U> [TryInto][158]<U> for T

where U: [TryFrom][151]<T>,

[Source][159]§

#### type [Error][160] = <U as [TryFrom][151]<T>>::[Error][156]

The type returned in the event of a conversion error.

[Source][161]§

#### fn [try_into][162](self) -> [Result][17]<U, <U as [TryFrom][151]<T>>::[Error][156]>

Performs the conversion.

[Source][163]§

### impl<T> [DeserializeOwned][126] for T

where T: for<'de> [Deserialize][22]<'de>,

§

### impl<T> UserEvent for T

where T: [Debug][14] \+ [Clone][10] \+ [Send][75] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [6]: struct.MenuId.html (struct tauri::menu::MenuId)
   [7]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [8]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [9]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html#tymethod.as_ref
   [10]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [11]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [12]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [13]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [14]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [15]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [16]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [17]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [18]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [19]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [20]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [21]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [22]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html (trait serde_core::de::Deserialize)
   [23]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html#tymethod.deserialize
   [24]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html (trait serde_core::de::Deserializer)
   [25]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#associatedtype.Error (type serde_core::de::Deserializer::Error)
   [26]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [27]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html (trait alloc::string::ToString)
   [28]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [29]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html (trait core::str::traits::FromStr)
   [30]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#associatedtype.Err
   [31]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [32]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#tymethod.from_str
   [33]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#associatedtype.Err (type core::str::traits::FromStr::Err)
   [34]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html (trait core::hash::Hash)
   [35]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#tymethod.hash
   [36]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [37]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hasher.html (trait core::hash::Hasher)
   [38]: https://doc.rust-lang.org/1.94.1/src/core/hash/mod.rs.html#235-237
   [39]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#method.hash_slice
   [40]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [41]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html (trait core::cmp::Ord)
   [42]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#tymethod.cmp
   [43]: https://doc.rust-lang.org/1.94.1/core/cmp/enum.Ordering.html (enum core::cmp::Ordering)
   [44]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1025-1027
   [45]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#method.max
   [46]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1064-1066
   [47]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#method.min
   [48]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1090-1092
   [49]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#method.clamp
   [50]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [51]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [52]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [53]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [54]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [55]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html (trait core::cmp::PartialOrd)
   [56]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp
   [57]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1402
   [59]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.lt
   [60]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1420
   [61]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.le
   [62]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1438
   [63]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.gt
   [64]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1456
   [65]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.ge
   [66]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [67]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html#tymethod.serialize
   [68]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html (trait serde_core::ser::Serializer)
   [69]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Ok (type serde_core::ser::Serializer::Ok)
   [70]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Error (type serde_core::ser::Serializer::Error)
   [71]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [72]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [73]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [74]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [75]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [76]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [77]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [78]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [79]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [80]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [81]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [82]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [83]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [84]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [85]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [86]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [87]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [88]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [89]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [90]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [91]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [92]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [93]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [94]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [95]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [96]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [97]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [98]: ../../src/tauri/ipc/command.rs.html#62-70
   [99]: ../ipc/trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [100]: ../trait.Runtime.html (trait tauri::Runtime)
   [101]: ../../src/tauri/ipc/command.rs.html#63-69
   [102]: ../ipc/trait.CommandArg.html#tymethod.from_command
   [103]: ../ipc/struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [104]: ../ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [105]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#802
   [106]: https://doc.rust-lang.org/1.94.1/std/primitive.never.html
   [107]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#803
   [108]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [109]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [110]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [111]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [112]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [113]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [114]: ../../src/tauri/ipc/mod.rs.html#181-187
   [115]: ../ipc/trait.IpcResponse.html (trait tauri::ipc::IpcResponse)
   [116]: ../../src/tauri/ipc/mod.rs.html#182-186
   [117]: ../ipc/trait.IpcResponse.html#tymethod.body
   [118]: ../ipc/enum.InvokeResponseBody.html (enum tauri::ipc::InvokeResponseBody)
   [119]: ../enum.Error.html (enum tauri::Error)
   [120]: ../../src/tauri/ipc/capability_builder.rs.html#20-24
   [121]: ../ipc/trait.RuntimeCapability.html (trait tauri::ipc::RuntimeCapability)
   [122]: ../../src/tauri/ipc/capability_builder.rs.html#21-23
   [123]: ../ipc/trait.RuntimeCapability.html#tymethod.build
   [124]: ../../src/tauri/ipc/authority.rs.html#686-691
   [125]: ../ipc/trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [126]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)
   [127]: ../../src/tauri/ipc/authority.rs.html#687
   [128]: ../ipc/trait.ScopeObject.html#associatedtype.Error
   [129]: https://docs.rs/serde_json/1.0.149/serde_json/error/struct.Error.html (struct serde_json::error::Error)
   [130]: ../../src/tauri/ipc/authority.rs.html#688-690
   [131]: ../ipc/trait.ScopeObject.html#tymethod.deserialize
   [132]: ../struct.AppHandle.html (struct tauri::AppHandle)
   [133]: ../ipc/trait.ScopeObject.html#associatedtype.Error (type tauri::ipc::ScopeObject::Error)
   [134]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#233-235
   [135]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html (trait erased_serde::ser::Serialize)
   [136]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#237
   [137]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.erased_serialize
   [138]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serializer.html (trait erased_serde::ser::Serializer)
   [139]: https://docs.rs/erased-serde/0.4.10/erased_serde/error/struct.Error.html (struct erased_serde::error::Error)
   [140]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#245
   [141]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.do_erased_serialize
   [142]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [143]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [144]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [145]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [146]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [147]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [148]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [149]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [150]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [151]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [152]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [153]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [154]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [155]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [156]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [157]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [158]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [159]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [160]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [161]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [162]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [163]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#633

