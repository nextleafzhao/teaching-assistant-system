## BuilderError

[![logo][1]][2]

## [tauri][2]2.10.3

## BuilderError

### Variants

  * ReservedName



### Trait Implementations

  * Clone
  * Debug
  * Display
  * Error
  * Hash
  * PartialEq
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



## [In tauri::plugin][3]

[tauri][4]::[plugin][3]

# Enum BuilderError Copy item path

[Source][5]
[code] 
    #[non_exhaustive]
    
    pub enum BuilderError {
        ReservedName([String][6]),
    }
[/code]

Expand description

Errors that can happen during [`Builder`][7].

## Variants (Non-exhaustive)§

This enum is marked as non-exhaustive

Non-exhaustive enums could have additional variants added in future. Therefore, when matching against variants of non-exhaustive enums, an extra wildcard arm must be added to account for any future variants.

§

### ReservedName([String][6])

Plugin attempted to use a reserved name.

## Trait Implementations§

[Source][8]§

### impl [Clone][9] for [BuilderError][10]

[Source][8]§

#### fn [clone][11](&self) -> [BuilderError][10]

Returns a duplicate of the value. [Read more][11]

1.0.0 · [Source][12]§

#### fn [clone_from][13](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][13]

[Source][8]§

### impl [Debug][14] for [BuilderError][10]

[Source][8]§

#### fn [fmt][15](&self, f: &mut [Formatter][16]<'_>) -> [Result][17]

Formats the value using the given formatter. [Read more][15]

[Source][8]§

### impl [Display][18] for [BuilderError][10]

[Source][8]§

#### fn [fmt][19](&self, __formatter: &mut [Formatter][16]<'_>) -> [Result][17]

Formats the value using the given formatter. [Read more][19]

[Source][8]§

### impl [Error][20] for [BuilderError][10]

1.30.0 · [Source][21]§

#### fn [source][22](&self) -> [Option][23]<&(dyn [Error][20] \+ 'static)>

Returns the lower-level source of this error, if any. [Read more][22]

1.0.0 · [Source][24]§

#### fn [description][25](&self) -> &[str][26]

👎Deprecated since 1.42.0: use the Display impl or to_string()

[Read more][25]

1.0.0 · [Source][27]§

#### fn [cause][28](&self) -> [Option][23]<&dyn [Error][20]>

👎Deprecated since 1.33.0: replaced by Error::source, which can support downcasting

[Source][29]§

#### fn [provide][30]<'a>(&'a self, request: &mut [Request][31]<'a>)

🔬This is a nightly-only experimental API. (`error_generic_member_access`)

Provides type-based access to context intended for error reports. [Read more][30]

[Source][8]§

### impl [Hash][32] for [BuilderError][10]

[Source][8]§

#### fn [hash][33]<__H: [Hasher][34]>(&self, state: [&mut __H][35])

Feeds this value into the given [`Hasher`][34]. [Read more][33]

1.3.0 · [Source][36]§

#### fn [hash_slice][37]<H>(data: &[Self], state: [&mut H][35])

where H: [Hasher][34], Self: [Sized][38],

Feeds a slice of this type into the given [`Hasher`][34]. [Read more][37]

[Source][8]§

### impl [PartialEq][39] for [BuilderError][10]

[Source][8]§

#### fn [eq][40](&self, other: &[BuilderError][10]) -> [bool][41]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][42]§

#### fn [ne][43](&self, other: [&Rhs][35]) -> [bool][41]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][8]§

### impl [StructuralPartialEq][44] for [BuilderError][10]

## Auto Trait Implementations§

§

### impl [Freeze][45] for [BuilderError][10]

§

### impl [RefUnwindSafe][46] for [BuilderError][10]

§

### impl [Send][47] for [BuilderError][10]

§

### impl [Sync][48] for [BuilderError][10]

§

### impl [Unpin][49] for [BuilderError][10]

§

### impl [UnwindSafe][50] for [BuilderError][10]

## Blanket Implementations§

[Source][51]§

### impl<T> [Any][52] for T

where T: 'static + ?[Sized][38],

[Source][53]§

#### fn [type_id][54](&self) -> [TypeId][55]

Gets the `TypeId` of `self`. [Read more][54]

[Source][56]§

### impl<T> [Borrow][57]<T> for T

where T: ?[Sized][38],

[Source][58]§

#### fn [borrow][59](&self) -> [&T][35]

Immutably borrows from an owned value. [Read more][59]

[Source][60]§

### impl<T> [BorrowMut][61]<T> for T

where T: ?[Sized][38],

[Source][62]§

#### fn [borrow_mut][63](&mut self) -> [&mut T][35]

Mutably borrows from an owned value. [Read more][63]

[Source][64]§

### impl<T> [CloneToUninit][65] for T

where T: [Clone][9],

[Source][66]§

#### unsafe fn [clone_to_uninit][67](&self, dest: [*mut ][68][u8][69])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][67]

[Source][70]§

### impl<T> [From][71]<T> for T

[Source][72]§

#### fn [from][73](t: T) -> T

Returns the argument unchanged.

[Source][74]§

### impl<T, U> [Into][75]<U> for T

where U: [From][71]<T>,

[Source][76]§

#### fn [into][77](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][71]<T> for U` chooses to do.

[Source][78]§

### impl<T> [ToOwned][79] for T

where T: [Clone][9],

[Source][80]§

#### type [Owned][81] = T

The resulting type after obtaining ownership.

[Source][82]§

#### fn [to_owned][83](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][83]

[Source][84]§

#### fn [clone_into][85](&self, target: [&mut T][35])

Uses borrowed data to replace owned data, usually by cloning. [Read more][85]

[Source][86]§

### impl<T> [ToString][87] for T

where T: [Display][18] \+ ?[Sized][38],

[Source][88]§

#### fn [to_string][89](&self) -> [String][6]

Converts the given value to a `String`. [Read more][89]

[Source][90]§

### impl<T, U> [TryFrom][91]<U> for T

where U: [Into][75]<T>,

[Source][92]§

#### type [Error][93] = [Infallible][94]

The type returned in the event of a conversion error.

[Source][95]§

#### fn [try_from][96](value: U) -> [Result][97]<T, <T as [TryFrom][91]<U>>::[Error][98]>

Performs the conversion.

[Source][99]§

### impl<T, U> [TryInto][100]<U> for T

where U: [TryFrom][91]<T>,

[Source][101]§

#### type [Error][102] = <U as [TryFrom][91]<T>>::[Error][98]

The type returned in the event of a conversion error.

[Source][103]§

#### fn [try_into][104](self) -> [Result][97]<U, <U as [TryFrom][91]<T>>::[Error][98]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][14] \+ [Clone][9] \+ [Send][47] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/plugin.rs.html#184-188
   [6]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [7]: struct.Builder.html (struct tauri::plugin::Builder)
   [8]: ../../src/tauri/plugin.rs.html#182
   [9]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [10]: enum.BuilderError.html (enum tauri::plugin::BuilderError)
   [11]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [12]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [13]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [14]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [15]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [16]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [17]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [18]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [19]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html#tymethod.fmt
   [20]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [21]: https://doc.rust-lang.org/1.94.1/src/core/error.rs.html#111
   [22]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.source
   [23]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [24]: https://doc.rust-lang.org/1.94.1/src/core/error.rs.html#137
   [25]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.description
   [26]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [27]: https://doc.rust-lang.org/1.94.1/src/core/error.rs.html#147
   [28]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.cause
   [29]: https://doc.rust-lang.org/1.94.1/src/core/error.rs.html#260
   [30]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.provide
   [31]: https://doc.rust-lang.org/1.94.1/core/error/struct.Request.html (struct core::error::Request)
   [32]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html (trait core::hash::Hash)
   [33]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#tymethod.hash
   [34]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hasher.html (trait core::hash::Hasher)
   [35]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [36]: https://doc.rust-lang.org/1.94.1/src/core/hash/mod.rs.html#235-237
   [37]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#method.hash_slice
   [38]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [39]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [40]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [41]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [42]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [43]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [44]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [45]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [46]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [47]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [48]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [49]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [50]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [51]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [52]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [54]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [55]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [56]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [57]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [59]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [60]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [61]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [62]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [63]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [64]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [65]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [66]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [67]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [68]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [69]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [70]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [72]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [74]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [75]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [76]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [77]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [78]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [79]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [80]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [81]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [82]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [83]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [84]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [85]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [86]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2893
   [87]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html (trait alloc::string::ToString)
   [88]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2895
   [89]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html#tymethod.to_string
   [90]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [91]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [92]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [93]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [94]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [95]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [96]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [97]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [98]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [99]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [100]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [101]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [102]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [103]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [104]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

