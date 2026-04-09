## LogicalPosition

[![logo][1]][2]

## [tauri][2]2.10.3

## LogicalPosition

### Fields

  * x
  * y



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
  * From<(X, X)>
  * From<LogicalPosition<P>>
  * From<[X; 2]>
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

# Struct LogicalPosition Copy item path
[code]
    pub struct LogicalPosition<P> {
        pub x: P,
        pub y: P,
    }
[/code]

Expand description

A position represented in logical pixels.

The position is stored as floats, so please be careful. Casting floats to integers truncates the fractional part, which can cause noticeable issues. To help with that, an `Into<(i32, i32)>` implementation is provided which does the rounding for you.

## Fields§

§`x: P`§`y: P`

## Implementations§

§

### impl<P> [LogicalPosition][4]<P>

#### pub const fn new(x: P, y: P) -> [LogicalPosition][4]<P>

§

### impl<P> [LogicalPosition][4]<P>

where P: [Pixel][5],

#### pub fn from_physical<T, X>(physical: T, scale_factor: [f64][6]) -> [LogicalPosition][4]<P>

where T: [Into][7]<[PhysicalPosition][8]<X>>, X: [Pixel][5],

#### pub fn to_physical<X>(&self, scale_factor: [f64][6]) -> [PhysicalPosition][8]<X>

where X: [Pixel][5],

#### pub fn cast<X>(&self) -> [LogicalPosition][4]<X>

where X: [Pixel][5],

## Trait Implementations§

§

### impl<P> [Clone][9] for [LogicalPosition][4]<P>

where P: [Clone][9],

§

#### fn [clone][10](&self) -> [LogicalPosition][4]<P>

Returns a duplicate of the value. [Read more][10]

1.0.0 · [Source][11]§

#### fn [clone_from][12](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][12]

§

### impl<P> [Debug][13] for [LogicalPosition][4]<P>

where P: [Debug][13],

§

#### fn [fmt][14](&self, f: &mut [Formatter][15]<'_>) -> [Result][16]<[()][17], [Error][18]>

Formats the value using the given formatter. [Read more][14]

§

### impl<P> [Default][19] for [LogicalPosition][4]<P>

where P: [Default][19],

§

#### fn [default][20]() -> [LogicalPosition][4]<P>

Returns the “default value” for a type. [Read more][20]

§

### impl<'de, P> [Deserialize][21]<'de> for [LogicalPosition][4]<P>

where P: [Deserialize][21]<'de>,

§

#### fn [deserialize][22]<__D>( __deserializer: __D, ) -> [Result][16]<[LogicalPosition][4]<P>, <__D as [Deserializer][23]<'de>>::[Error][24]>

where __D: [Deserializer][23]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][22]

§

### impl<P, X> [From][25]<[[X; 2]][26]> for [LogicalPosition][4]<P>

where P: [Pixel][5], X: [Pixel][5],

§

#### fn [from][27](_: [[X; 2]][26]) -> [LogicalPosition][4]<P>

Converts to this type from the input type.

§

### impl<P, X> [From][25]<[(X, X)][28]> for [LogicalPosition][4]<P>

where P: [Pixel][5], X: [Pixel][5],

§

#### fn [from][27](_: [(X, X)][28]) -> [LogicalPosition][4]<P>

Converts to this type from the input type.

§

### impl<P> [From][25]<[LogicalPosition][4]<P>> for [Position][29]

where P: [Pixel][5],

§

#### fn [from][27](position: [LogicalPosition][4]<P>) -> [Position][29]

Converts to this type from the input type.

§

### impl<P> [Hash][30] for [LogicalPosition][4]<P>

where P: [Hash][30],

§

#### fn [hash][31]<__H>(&self, state: [&mut __H][32])

where __H: [Hasher][33],

Feeds this value into the given [`Hasher`][33]. [Read more][31]

1.3.0 · [Source][34]§

#### fn [hash_slice][35]<H>(data: &[Self], state: [&mut H][32])

where H: [Hasher][33], Self: [Sized][36],

Feeds a slice of this type into the given [`Hasher`][33]. [Read more][35]

§

### impl<P> [Ord][37] for [LogicalPosition][4]<P>

where P: [Ord][37],

§

#### fn [cmp][38](&self, other: &[LogicalPosition][4]<P>) -> [Ordering][39]

This method returns an [`Ordering`][39] between `self` and `other`. [Read more][38]

1.21.0 · [Source][40]§

#### fn [max][41](self, other: Self) -> Self

where Self: [Sized][36],

Compares and returns the maximum of two values. [Read more][41]

1.21.0 · [Source][42]§

#### fn [min][43](self, other: Self) -> Self

where Self: [Sized][36],

Compares and returns the minimum of two values. [Read more][43]

1.50.0 · [Source][44]§

#### fn [clamp][45](self, min: Self, max: Self) -> Self

where Self: [Sized][36],

Restrict a value to a certain interval. [Read more][45]

§

### impl<P> [PartialEq][46] for [LogicalPosition][4]<P>

where P: [PartialEq][46],

§

#### fn [eq][47](&self, other: &[LogicalPosition][4]<P>) -> [bool][48]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][49]§

#### fn [ne][50](&self, other: [&Rhs][32]) -> [bool][48]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl<P> [PartialOrd][51] for [LogicalPosition][4]<P>

where P: [PartialOrd][51],

§

#### fn [partial_cmp][52](&self, other: &[LogicalPosition][4]<P>) -> [Option][53]<[Ordering][39]>

This method returns an ordering between `self` and `other` values if one exists. [Read more][52]

1.0.0 · [Source][54]§

#### fn [lt][55](&self, other: [&Rhs][32]) -> [bool][48]

Tests less than (for `self` and `other`) and is used by the `<` operator. [Read more][55]

1.0.0 · [Source][56]§

#### fn [le][57](&self, other: [&Rhs][32]) -> [bool][48]

Tests less than or equal to (for `self` and `other`) and is used by the `<=` operator. [Read more][57]

1.0.0 · [Source][58]§

#### fn [gt][59](&self, other: [&Rhs][32]) -> [bool][48]

Tests greater than (for `self` and `other`) and is used by the `>` operator. [Read more][59]

1.0.0 · [Source][60]§

#### fn [ge][61](&self, other: [&Rhs][32]) -> [bool][48]

Tests greater than or equal to (for `self` and `other`) and is used by the `>=` operator. [Read more][61]

§

### impl<P> [Serialize][62] for [LogicalPosition][4]<P>

where P: [Serialize][62],

§

#### fn [serialize][63]<__S>( &self, __serializer: __S, ) -> [Result][16]<<__S as [Serializer][64]>::[Ok][65], <__S as [Serializer][64]>::[Error][66]>

where __S: [Serializer][64],

Serialize this value into the given Serde serializer. [Read more][63]

§

### impl<P> [Copy][67] for [LogicalPosition][4]<P>

where P: [Copy][67],

§

### impl<P> [Eq][68] for [LogicalPosition][4]<P>

where P: [Eq][68],

§

### impl<P> [StructuralPartialEq][69] for [LogicalPosition][4]<P>

## Auto Trait Implementations§

§

### impl<P> [Freeze][70] for [LogicalPosition][4]<P>

where P: [Freeze][70],

§

### impl<P> [RefUnwindSafe][71] for [LogicalPosition][4]<P>

where P: [RefUnwindSafe][71],

§

### impl<P> [Send][72] for [LogicalPosition][4]<P>

where P: [Send][72],

§

### impl<P> [Sync][73] for [LogicalPosition][4]<P>

where P: [Sync][73],

§

### impl<P> [Unpin][74] for [LogicalPosition][4]<P>

where P: [Unpin][74],

§

### impl<P> [UnwindSafe][75] for [LogicalPosition][4]<P>

where P: [UnwindSafe][75],

## Blanket Implementations§

[Source][76]§

### impl<T> [Any][77] for T

where T: 'static + ?[Sized][36],

[Source][78]§

#### fn [type_id][79](&self) -> [TypeId][80]

Gets the `TypeId` of `self`. [Read more][79]

[Source][81]§

### impl<T> [Borrow][82]<T> for T

where T: ?[Sized][36],

[Source][83]§

#### fn [borrow][84](&self) -> [&T][32]

Immutably borrows from an owned value. [Read more][84]

[Source][85]§

### impl<T> [BorrowMut][86]<T> for T

where T: ?[Sized][36],

[Source][87]§

#### fn [borrow_mut][88](&mut self) -> [&mut T][32]

Mutably borrows from an owned value. [Read more][88]

[Source][89]§

### impl<T> [CloneToUninit][90] for T

where T: [Clone][9],

[Source][91]§

#### unsafe fn [clone_to_uninit][92](&self, dest: [*mut ][93][u8][94])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][92]

[Source][95]§

### impl<'de, D, R> [CommandArg][96]<'de, R> for D

where D: [Deserialize][21]<'de>, R: [Runtime][97],

[Source][98]§

#### fn [from_command][99](command: [CommandItem][100]<'de, R>) -> [Result][16]<D, [InvokeError][101]>

Derives an instance of `Self` from the [`CommandItem`][100]. [Read more][99]

[Source][102]§

### impl<T> [From][25]<T> for T

[Source][103]§

#### fn [from][27](t: T) -> T

Returns the argument unchanged.

[Source][104]§

### impl<T, U> [Into][7]<U> for T

where U: [From][25]<T>,

[Source][105]§

#### fn [into][106](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][25]<T> for U` chooses to do.

[Source][107]§

### impl<T> [IpcResponse][108] for T

where T: [Serialize][62],

[Source][109]§

#### fn [body][110](self) -> [Result][16]<[InvokeResponseBody][111], [Error][112]>

Resolve the IPC response body.

[Source][113]§

### impl<T> [ScopeObject][114] for T

where T: [Send][72] \+ [Sync][73] \+ [Debug][13] \+ [DeserializeOwned][115] \+ 'static,

[Source][116]§

#### type [Error][117] = [Error][118]

The error type.

[Source][119]§

#### fn [deserialize][120]<R>( _app: &[AppHandle][121]<R>, raw: Value, ) -> [Result][16]<T, <T as [ScopeObject][114]>::[Error][122]>

where R: [Runtime][97],

Deserialize the raw scope value.

[Source][123]§

### impl<T> [Serialize][124] for T

where T: [Serialize][62] \+ ?[Sized][36],

[Source][125]§

#### fn [erased_serialize][126](&self, serializer: &mut dyn [Serializer][127]) -> [Result][16]<[()][17], [Error][128]>

[Source][129]§

#### fn [do_erased_serialize][130]( &self, serializer: &mut dyn [Serializer][127], ) -> [Result][16]<[()][17], ErrorImpl>

[Source][131]§

### impl<T> [ToOwned][132] for T

where T: [Clone][9],

[Source][133]§

#### type [Owned][134] = T

The resulting type after obtaining ownership.

[Source][135]§

#### fn [to_owned][136](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][136]

[Source][137]§

#### fn [clone_into][138](&self, target: [&mut T][32])

Uses borrowed data to replace owned data, usually by cloning. [Read more][138]

[Source][139]§

### impl<T, U> [TryFrom][140]<U> for T

where U: [Into][7]<T>,

[Source][141]§

#### type [Error][142] = [Infallible][143]

The type returned in the event of a conversion error.

[Source][144]§

#### fn [try_from][145](value: U) -> [Result][16]<T, <T as [TryFrom][140]<U>>::[Error][146]>

Performs the conversion.

[Source][147]§

### impl<T, U> [TryInto][148]<U> for T

where U: [TryFrom][140]<T>,

[Source][149]§

#### type [Error][150] = <U as [TryFrom][140]<T>>::[Error][146]

The type returned in the event of a conversion error.

[Source][151]§

#### fn [try_into][152](self) -> [Result][16]<U, <U as [TryFrom][140]<T>>::[Error][146]>

Performs the conversion.

[Source][153]§

### impl<T> [DeserializeOwned][115] for T

where T: for<'de> [Deserialize][21]<'de>,

§

### impl<T> UserEvent for T

where T: [Debug][13] \+ [Clone][9] \+ [Send][72] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: struct.LogicalPosition.html (struct tauri::LogicalPosition)
   [5]: trait.Pixel.html (trait tauri::Pixel)
   [6]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html
   [7]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [8]: struct.PhysicalPosition.html (struct tauri::PhysicalPosition)
   [9]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [10]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [11]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [12]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [13]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [14]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [15]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [16]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [17]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [18]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [19]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [20]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [21]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html (trait serde_core::de::Deserialize)
   [22]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html#tymethod.deserialize
   [23]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html (trait serde_core::de::Deserializer)
   [24]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#associatedtype.Error (type serde_core::de::Deserializer::Error)
   [25]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [26]: https://doc.rust-lang.org/1.94.1/std/primitive.array.html
   [27]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [28]: https://doc.rust-lang.org/1.94.1/std/primitive.tuple.html
   [29]: enum.Position.html (enum tauri::Position)
   [30]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html (trait core::hash::Hash)
   [31]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#tymethod.hash
   [32]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [33]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hasher.html (trait core::hash::Hasher)
   [34]: https://doc.rust-lang.org/1.94.1/src/core/hash/mod.rs.html#235-237
   [35]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#method.hash_slice
   [36]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [37]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html (trait core::cmp::Ord)
   [38]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#tymethod.cmp
   [39]: https://doc.rust-lang.org/1.94.1/core/cmp/enum.Ordering.html (enum core::cmp::Ordering)
   [40]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1025-1027
   [41]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#method.max
   [42]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1064-1066
   [43]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#method.min
   [44]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1090-1092
   [45]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#method.clamp
   [46]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [47]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [48]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [49]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [50]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [51]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html (trait core::cmp::PartialOrd)
   [52]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp
   [53]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [54]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1402
   [55]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.lt
   [56]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1420
   [57]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.le
   [58]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1438
   [59]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.gt
   [60]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1456
   [61]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.ge
   [62]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [63]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html#tymethod.serialize
   [64]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html (trait serde_core::ser::Serializer)
   [65]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Ok (type serde_core::ser::Serializer::Ok)
   [66]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Error (type serde_core::ser::Serializer::Error)
   [67]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [68]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [69]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [70]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [71]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [72]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [73]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [74]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [75]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [76]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [77]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [78]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [79]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [80]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [81]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [82]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [83]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [84]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [85]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [86]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [87]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [88]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [89]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [90]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [91]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [92]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [93]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [94]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [95]: ../src/tauri/ipc/command.rs.html#62-70
   [96]: ipc/trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [97]: trait.Runtime.html (trait tauri::Runtime)
   [98]: ../src/tauri/ipc/command.rs.html#63-69
   [99]: ipc/trait.CommandArg.html#tymethod.from_command
   [100]: ipc/struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [101]: ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [102]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [103]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [104]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [105]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [106]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [107]: ../src/tauri/ipc/mod.rs.html#181-187
   [108]: ipc/trait.IpcResponse.html (trait tauri::ipc::IpcResponse)
   [109]: ../src/tauri/ipc/mod.rs.html#182-186
   [110]: ipc/trait.IpcResponse.html#tymethod.body
   [111]: ipc/enum.InvokeResponseBody.html (enum tauri::ipc::InvokeResponseBody)
   [112]: enum.Error.html (enum tauri::Error)
   [113]: ../src/tauri/ipc/authority.rs.html#686-691
   [114]: ipc/trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [115]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)
   [116]: ../src/tauri/ipc/authority.rs.html#687
   [117]: ipc/trait.ScopeObject.html#associatedtype.Error
   [118]: https://docs.rs/serde_json/1.0.149/serde_json/error/struct.Error.html (struct serde_json::error::Error)
   [119]: ../src/tauri/ipc/authority.rs.html#688-690
   [120]: ipc/trait.ScopeObject.html#tymethod.deserialize
   [121]: struct.AppHandle.html (struct tauri::AppHandle)
   [122]: ipc/trait.ScopeObject.html#associatedtype.Error (type tauri::ipc::ScopeObject::Error)
   [123]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#233-235
   [124]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html (trait erased_serde::ser::Serialize)
   [125]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#237
   [126]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.erased_serialize
   [127]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serializer.html (trait erased_serde::ser::Serializer)
   [128]: https://docs.rs/erased-serde/0.4.10/erased_serde/error/struct.Error.html (struct erased_serde::error::Error)
   [129]: https://docs.rs/erased-serde/0.4.10/src/erased_serde/ser.rs.html#245
   [130]: https://docs.rs/erased-serde/0.4.10/erased_serde/ser/trait.Serialize.html#tymethod.do_erased_serialize
   [131]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [132]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [133]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [134]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [135]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [136]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [137]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [138]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [139]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [140]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [141]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [142]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [143]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [144]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [145]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [146]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [147]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [148]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [149]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [150]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [151]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [152]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [153]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#633

