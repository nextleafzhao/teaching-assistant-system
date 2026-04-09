## LogicalUnit

[![logo][1]][2]

## [tauri][2]2.10.3

## LogicalUnit

### Tuple Fields

  * 0



### Associated Constants

  * MAX
  * MIN
  * ZERO



### Methods

  * cast
  * from_physical
  * new
  * to_physical



### Trait Implementations

  * Clone
  * Copy
  * Debug
  * Default
  * Deserialize<'de>
  * Eq
  * From<LogicalUnit<P>>
  * From<X>
  * Hash
  * Ord
  * PartialEq
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
  * From<T>
  * Into<U>
  * IpcResponse
  * ScopeObject
  * Serialize
  * ToOwned
  * TryFrom<U>
  * TryInto<U>
  * UserEvent



## [In crate tauri][3]

[tauri][3]

# Struct LogicalUnit Copy item path
[code]
    pub struct LogicalUnit<P>(pub P);
[/code]

Expand description

A logical pixel unit.

## Tuple Fields§

§`0: P`

## Implementations§

§

### impl<P> [LogicalUnit][4]<P>

#### pub const MAX: [LogicalUnit][4]<[f64][5]>

Represents a maximum logical unit that is equal to [`f64::MAX`][6].

#### pub const MIN: [LogicalUnit][4]<[f64][5]>

Represents a minimum logical unit of [`f64::MAX`][6].

#### pub const ZERO: [LogicalUnit][4]<[f64][5]>

Represents a logical unit of `0_f64`.

#### pub const fn new(v: P) -> [LogicalUnit][4]<P>

§

### impl<P> [LogicalUnit][4]<P>

where P: [Pixel][7],

#### pub fn from_physical<T, X>(physical: T, scale_factor: [f64][5]) -> [LogicalUnit][4]<P>

where T: [Into][8]<[PhysicalUnit][9]<X>>, X: [Pixel][7],

#### pub fn to_physical<X>(&self, scale_factor: [f64][5]) -> [PhysicalUnit][9]<X>

where X: [Pixel][7],

#### pub fn cast<X>(&self) -> [LogicalUnit][4]<X>

where X: [Pixel][7],

## Trait Implementations§

§

### impl<P> [Clone][10] for [LogicalUnit][4]<P>

where P: [Clone][10],

§

#### fn [clone][11](&self) -> [LogicalUnit][4]<P>

Returns a duplicate of the value. [Read more][11]

1.0.0 · [Source][12]§

#### fn [clone_from][13](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][13]

§

### impl<P> [Debug][14] for [LogicalUnit][4]<P>

where P: [Debug][14],

§

#### fn [fmt][15](&self, f: &mut [Formatter][16]<'_>) -> [Result][17]<[()][18], [Error][19]>

Formats the value using the given formatter. [Read more][15]

§

### impl<P> [Default][20] for [LogicalUnit][4]<P>

where P: [Default][20],

§

#### fn [default][21]() -> [LogicalUnit][4]<P>

Returns the “default value” for a type. [Read more][21]

§

### impl<'de, P> [Deserialize][22]<'de> for [LogicalUnit][4]<P>

where P: [Deserialize][22]<'de>,

§

#### fn [deserialize][23]<__D>( __deserializer: __D, ) -> [Result][17]<[LogicalUnit][4]<P>, <__D as [Deserializer][24]<'de>>::[Error][25]>

where __D: [Deserializer][24]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][23]

§

### impl<P> [From][26]<[LogicalUnit][4]<P>> for [PixelUnit][27]

where P: [Pixel][7],

§

#### fn [from][28](unit: [LogicalUnit][4]<P>) -> [PixelUnit][27]

Converts to this type from the input type.

§

### impl<P, X> [From][26]<X> for [LogicalUnit][4]<P>

where P: [Pixel][7], X: [Pixel][7],

§

#### fn [from][28](v: X) -> [LogicalUnit][4]<P>

Converts to this type from the input type.

§

### impl<P> [Hash][29] for [LogicalUnit][4]<P>

where P: [Hash][29],

§

#### fn [hash][30]<__H>(&self, state: [&mut __H][31])

where __H: [Hasher][32],

Feeds this value into the given [`Hasher`][32]. [Read more][30]

1.3.0 · [Source][33]§

#### fn [hash_slice][34]<H>(data: &[Self], state: [&mut H][31])

where H: [Hasher][32], Self: [Sized][35],

Feeds a slice of this type into the given [`Hasher`][32]. [Read more][34]

§

### impl<P> [Ord][36] for [LogicalUnit][4]<P>

where P: [Ord][36],

§

#### fn [cmp][37](&self, other: &[LogicalUnit][4]<P>) -> [Ordering][38]

This method returns an [`Ordering`][38] between `self` and `other`. [Read more][37]

1.21.0 · [Source][39]§

#### fn [max][40](self, other: Self) -> Self

where Self: [Sized][35],

Compares and returns the maximum of two values. [Read more][40]

1.21.0 · [Source][41]§

#### fn [min][42](self, other: Self) -> Self

where Self: [Sized][35],

Compares and returns the minimum of two values. [Read more][42]

1.50.0 · [Source][43]§

#### fn [clamp][44](self, min: Self, max: Self) -> Self

where Self: [Sized][35],

Restrict a value to a certain interval. [Read more][44]

§

### impl<P> [PartialEq][45] for [LogicalUnit][4]<P>

where P: [PartialEq][45],

§

#### fn [eq][46](&self, other: &[LogicalUnit][4]<P>) -> [bool][47]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][48]§

#### fn [ne][49](&self, other: [&Rhs][31]) -> [bool][47]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl<P> [PartialOrd][50] for [LogicalUnit][4]<P>

where P: [PartialOrd][50],

§

#### fn [partial_cmp][51](&self, other: &[LogicalUnit][4]<P>) -> [Option][52]<[Ordering][38]>

This method returns an ordering between `self` and `other` values if one exists. [Read more][51]

1.0.0 · [Source][53]§

#### fn [lt][54](&self, other: [&Rhs][31]) -> [bool][47]

Tests less than (for `self` and `other`) and is used by the `<` operator. [Read more][54]

1.0.0 · [Source][55]§

#### fn [le][56](&self, other: [&Rhs][31]) -> [bool][47]

Tests less than or equal to (for `self` and `other`) and is used by the `<=` operator. [Read more][56]

1.0.0 · [Source][57]§

#### fn [gt][58](&self, other: [&Rhs][31]) -> [bool][47]

Tests greater than (for `self` and `other`) and is used by the `>` operator. [Read more][58]

1.0.0 · [Source][59]§

#### fn [ge][60](&self, other: [&Rhs][31]) -> [bool][47]

Tests greater than or equal to (for `self` and `other`) and is used by the `>=` operator. [Read more][60]

§

### impl<P> [Serialize][61] for [LogicalUnit][4]<P>

where P: [Serialize][61],

§

#### fn [serialize][62]<__S>( &self, __serializer: __S, ) -> [Result][17]<<__S as [Serializer][63]>::[Ok][64], <__S as [Serializer][63]>::[Error][65]>

where __S: [Serializer][63],

Serialize this value into the given Serde serializer. [Read more][62]

§

### impl<P> [Copy][66] for [LogicalUnit][4]<P>

where P: [Copy][66],

§

### impl<P> [Eq][67] for [LogicalUnit][4]<P>

where P: [Eq][67],

§

### impl<P> [StructuralPartialEq][68] for [LogicalUnit][4]<P>

## Auto Trait Implementations§

§

### impl<P> [Freeze][69] for [LogicalUnit][4]<P>

where P: [Freeze][69],

§

### impl<P> [RefUnwindSafe][70] for [LogicalUnit][4]<P>

where P: [RefUnwindSafe][70],

§

### impl<P> [Send][71] for [LogicalUnit][4]<P>

where P: [Send][71],

§

### impl<P> [Sync][72] for [LogicalUnit][4]<P>

where P: [Sync][72],

§

### impl<P> [Unpin][73] for [LogicalUnit][4]<P>

where P: [Unpin][73],

§

### impl<P> [UnwindSafe][74] for [LogicalUnit][4]<P>

where P: [UnwindSafe][74],

## Blanket Implementations§

[Source][75]§

### impl<T> [Any][76] for T

where T: 'static + ?[Sized][35],

[Source][77]§

#### fn [type_id][78](&self) -> [TypeId][79]

Gets the `TypeId` of `self`. [Read more][78]

[Source][80]§

### impl<T> [Borrow][81]<T> for T

where T: ?[Sized][35],

[Source][82]§

#### fn [borrow][83](&self) -> [&T][31]

Immutably borrows from an owned value. [Read more][83]

[Source][84]§

### impl<T> [BorrowMut][85]<T> for T

where T: ?[Sized][35],

[Source][86]§

#### fn [borrow_mut][87](&mut self) -> [&mut T][31]

Mutably borrows from an owned value. [Read more][87]

[Source][88]§

### impl<T> [CloneToUninit][89] for T

where T: [Clone][10],

[Source][90]§

#### unsafe fn [clone_to_uninit][91](&self, dest: [*mut ][92][u8][93])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][91]

[Source][94]§

### impl<'de, D, R> [CommandArg][95]<'de, R> for D

where D: [Deserialize][22]<'de>, R: [Runtime][96],

[Source][97]§

#### fn [from_command][98](command: [CommandItem][99]<'de, R>) -> [Result][17]<D, [InvokeError][100]>

Derives an instance of `Self` from the [`CommandItem`][99]. [Read more][98]

[Source][101]§

### impl<T> [From][26]<T> for T

[Source][102]§

#### fn [from][28](t: T) -> T

Returns the argument unchanged.

[Source][103]§

### impl<T, U> [Into][8]<U> for T

where U: [From][26]<T>,

[Source][104]§

#### fn [into][105](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][26]<T> for U` chooses to do.

[Source][106]§

### impl<T> [IpcResponse][107] for T

where T: [Serialize][61],

[Source][108]§

#### fn [body][109](self) -> [Result][17]<[InvokeResponseBody][110], [Error][111]>

Resolve the IPC response body.

[Source][112]§

### impl<T> [ScopeObject][113] for T

where T: [Send][71] \+ [Sync][72] \+ [Debug][14] \+ [DeserializeOwned][114] \+ 'static,

[Source][115]§

#### type [Error][116] = [Error][117]

The error type.

[Source][118]§

#### fn [deserialize][119]<R>( _app: &[AppHandle][120]<R>, raw: Value, ) -> [Result][17]<T, <T as [ScopeObject][113]>::[Error][121]>

where R: [Runtime][96],

Deserialize the raw scope value.

[Source][122]§

### impl<T> [Serialize][123] for T

where T: [Serialize][61] \+ ?[Sized][35],

[Source][124]§

#### fn [erased_serialize][125](&self, serializer: &mut dyn [Serializer][126]) -> [Result][17]<[()][18], [Error][127]>

[Source][128]§

#### fn [do_erased_serialize][129]( &self, serializer: &mut dyn [Serializer][126], ) -> [Result][17]<[()][18], ErrorImpl>

[Source][130]§

### impl<T> [ToOwned][131] for T

where T: [Clone][10],

[Source][132]§

#### type [Owned][133] = T

The resulting type after obtaining ownership.

[Source][134]§

#### fn [to_owned][135](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][135]

[Source][136]§

#### fn [clone_into][137](&self, target: [&mut T][31])

Uses borrowed data to replace owned data, usually by cloning. [Read more][137]

[Source][138]§

### impl<T, U> [TryFrom][139]<U> for T

where U: [Into][8]<T>,

[Source][140]§

#### type [Error][141] = [Infallible][142]

The type returned in the event of a conversion error.

[Source][143]§

#### fn [try_from][144](value: U) -> [Result][17]<T, <T as [TryFrom][139]<U>>::[Error][145]>

Performs the conversion.

[Source][146]§

### impl<T, U> [TryInto][147]<U> for T

where U: [TryFrom][139]<T>,

[Source][148]§

#### type [Error][149] = <U as [TryFrom][139]<T>>::[Error][145]

The type returned in the event of a conversion error.

[Source][150]§

#### fn [try_into][151](self) -> [Result][17]<U, <U as [TryFrom][139]<T>>::[Error][145]>

Performs the conversion.

[Source][152]§

### impl<T> [DeserializeOwned][114] for T

where T: for<'de> [Deserialize][22]<'de>,

§

### impl<T> UserEvent for T

where T: [Debug][14] \+ [Clone][10] \+ [Send][71] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: struct.LogicalUnit.html (struct tauri::LogicalUnit)
   [5]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html
   [6]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html#associatedconstant.MAX (associated constant f64::MAX)
   [7]: trait.Pixel.html (trait tauri::Pixel)
   [8]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [9]: struct.PhysicalUnit.html (struct tauri::PhysicalUnit)
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
   [27]: enum.PixelUnit.html (enum tauri::PixelUnit)
   [28]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [29]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html (trait core::hash::Hash)
   [30]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#tymethod.hash
   [31]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [32]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hasher.html (trait core::hash::Hasher)
   [33]: https://doc.rust-lang.org/1.94.1/src/core/hash/mod.rs.html#235-237
   [34]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#method.hash_slice
   [35]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [36]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html (trait core::cmp::Ord)
   [37]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#tymethod.cmp
   [38]: https://doc.rust-lang.org/1.94.1/core/cmp/enum.Ordering.html (enum core::cmp::Ordering)
   [39]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1025-1027
   [40]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#method.max
   [41]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1064-1066
   [42]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#method.min
   [43]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1090-1092
   [44]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#method.clamp
   [45]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [46]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [47]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [48]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [49]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [50]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html (trait core::cmp::PartialOrd)
   [51]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp
   [52]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1402
   [54]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.lt
   [55]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1420
   [56]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.le
   [57]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1438
   [58]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.gt
   [59]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1456
   [60]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.ge
   [61]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [62]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html#tymethod.serialize
   [63]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html (trait serde_core::ser::Serializer)
   [64]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Ok (type serde_core::ser::Serializer::Ok)
   [65]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Error (type serde_core::ser::Serializer::Error)
   [66]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [67]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [68]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [69]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [70]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [71]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [72]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [73]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [74]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [75]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [76]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [77]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [78]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [79]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [80]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [81]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [82]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [83]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [84]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [85]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [86]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [87]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [88]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [89]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [90]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [91]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [92]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [93]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [94]: ../src/tauri/ipc/command.rs.html#62-70
   [95]: ipc/trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [96]: trait.Runtime.html (trait tauri::Runtime)
   [97]: ../src/tauri/ipc/command.rs.html#63-69
   [98]: ipc/trait.CommandArg.html#tymethod.from_command
   [99]: ipc/struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [100]: ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [101]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [102]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [103]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [104]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [105]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [106]: ../src/tauri/ipc/mod.rs.html#181-187
   [107]: ipc/trait.IpcResponse.html (trait tauri::ipc::IpcResponse)
   [108]: ../src/tauri/ipc/mod.rs.html#182-186
   [109]: ipc/trait.IpcResponse.html#tymethod.body
   [110]: ipc/enum.InvokeResponseBody.html (enum tauri::ipc::InvokeResponseBody)
   [111]: enum.Error.html (enum tauri::Error)
   [112]: ../src/tauri/ipc/authority.rs.html#686-691
   [113]: ipc/trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [114]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)
   [115]: ../src/tauri/ipc/authority.rs.html#687
   [116]: ipc/trait.ScopeObject.html#associatedtype.Error
   [117]: https://docs.rs/serde_json/1.0.149/serde_json/error/struct.Error.html (struct serde_json::error::Error)
   [118]: ../src/tauri/ipc/authority.rs.html#688-690
   [119]: ipc/trait.ScopeObject.html#tymethod.deserialize
   [120]: struct.AppHandle.html (struct tauri::AppHandle)
   [121]: ipc/trait.ScopeObject.html#associatedtype.Error (type tauri::ipc::ScopeObject::Error)
   [122]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#233-235
   [123]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html (trait erased_serde::ser::Serialize)
   [124]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#237
   [125]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.erased_serialize
   [126]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serializer.html (trait erased_serde::ser::Serializer)
   [127]: https://docs.rs/erased-serde/0.4.10/erased_serde/error/struct.Error.html (struct erased_serde::error::Error)
   [128]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#245
   [129]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.do_erased_serialize
   [130]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [131]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [132]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [133]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [134]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [135]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [136]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [137]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [138]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [139]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [140]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [141]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [142]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [143]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [144]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [145]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [146]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [147]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [148]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [149]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [150]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [151]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [152]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#633

