## SerializeOptions

[![logo][1]][2]

## [tauri][2]2.10.3

## SerializeOptions

### Fields

  * buf
  * freeze



### Trait Implementations

  * Clone
  * Copy
  * Debug
  * Default
  * Eq
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
  * TryFrom<U>
  * TryInto<U>
  * UserEvent



## [In tauri::ipc][3]

[tauri][4]::[ipc][3]

# Struct SerializeOptions Copy item path
[code]
    pub struct SerializeOptions {
        pub freeze: [bool][5],
        pub buf: [usize][6],
    }
[/code]

Expand description

Optional settings to pass to the templating system.

## Fields§

§`freeze: [bool][5]`

If the parsed JSON will be frozen with [`Object.freeze()`][7].

§`buf: [usize][6]`

 _Extra_ amount of bytes to allocate to the String buffer during serialization.

Note: This is not the total buffer size, but the extra buffer size created. By default the buffer size will already be enough to not need to allocate more than once for input that does not need escaping. Therefore, this extra buffer is more of “how many bytes of escaped characters do I want to prepare for?”

## Trait Implementations§

§

### impl [Clone][8] for [Options][9]

§

#### fn [clone][10](&self) -> [Options][9]

Returns a duplicate of the value. [Read more][10]

1.0.0 · [Source][11]§

#### fn [clone_from][12](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][12]

§

### impl [Debug][13] for [Options][9]

§

#### fn [fmt][14](&self, f: &mut [Formatter][15]<'_>) -> [Result][16]<[()][17], [Error][18]>

Formats the value using the given formatter. [Read more][14]

§

### impl [Default][19] for [Options][9]

§

#### fn [default][20]() -> [Options][9]

Returns the “default value” for a type. [Read more][20]

§

### impl [Hash][21] for [Options][9]

§

#### fn [hash][22]<__H>(&self, state: [&mut __H][23])

where __H: [Hasher][24],

Feeds this value into the given [`Hasher`][24]. [Read more][22]

1.3.0 · [Source][25]§

#### fn [hash_slice][26]<H>(data: &[Self], state: [&mut H][23])

where H: [Hasher][24], Self: [Sized][27],

Feeds a slice of this type into the given [`Hasher`][24]. [Read more][26]

§

### impl [PartialEq][28] for [Options][9]

§

#### fn [eq][29](&self, other: &[Options][9]) -> [bool][5]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][30]§

#### fn [ne][31](&self, other: [&Rhs][23]) -> [bool][5]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl [Copy][32] for [Options][9]

§

### impl [Eq][33] for [Options][9]

§

### impl [StructuralPartialEq][34] for [Options][9]

## Auto Trait Implementations§

§

### impl [Freeze][35] for [Options][9]

§

### impl [RefUnwindSafe][36] for [Options][9]

§

### impl [Send][37] for [Options][9]

§

### impl [Sync][38] for [Options][9]

§

### impl [Unpin][39] for [Options][9]

§

### impl [UnwindSafe][40] for [Options][9]

## Blanket Implementations§

[Source][41]§

### impl<T> [Any][42] for T

where T: 'static + ?[Sized][27],

[Source][43]§

#### fn [type_id][44](&self) -> [TypeId][45]

Gets the `TypeId` of `self`. [Read more][44]

[Source][46]§

### impl<T> [Borrow][47]<T> for T

where T: ?[Sized][27],

[Source][48]§

#### fn [borrow][49](&self) -> [&T][23]

Immutably borrows from an owned value. [Read more][49]

[Source][50]§

### impl<T> [BorrowMut][51]<T> for T

where T: ?[Sized][27],

[Source][52]§

#### fn [borrow_mut][53](&mut self) -> [&mut T][23]

Mutably borrows from an owned value. [Read more][53]

[Source][54]§

### impl<T> [CloneToUninit][55] for T

where T: [Clone][8],

[Source][56]§

#### unsafe fn [clone_to_uninit][57](&self, dest: [*mut ][58][u8][59])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][57]

[Source][60]§

### impl<T> [From][61]<T> for T

[Source][62]§

#### fn [from][63](t: T) -> T

Returns the argument unchanged.

[Source][64]§

### impl<T, U> [Into][65]<U> for T

where U: [From][61]<T>,

[Source][66]§

#### fn [into][67](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][61]<T> for U` chooses to do.

[Source][68]§

### impl<T> [ToOwned][69] for T

where T: [Clone][8],

[Source][70]§

#### type [Owned][71] = T

The resulting type after obtaining ownership.

[Source][72]§

#### fn [to_owned][73](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][73]

[Source][74]§

#### fn [clone_into][75](&self, target: [&mut T][23])

Uses borrowed data to replace owned data, usually by cloning. [Read more][75]

[Source][76]§

### impl<T, U> [TryFrom][77]<U> for T

where U: [Into][65]<T>,

[Source][78]§

#### type [Error][79] = [Infallible][80]

The type returned in the event of a conversion error.

[Source][81]§

#### fn [try_from][82](value: U) -> [Result][16]<T, <T as [TryFrom][77]<U>>::[Error][83]>

Performs the conversion.

[Source][84]§

### impl<T, U> [TryInto][85]<U> for T

where U: [TryFrom][77]<T>,

[Source][86]§

#### type [Error][87] = <U as [TryFrom][77]<T>>::[Error][83]

The type returned in the event of a conversion error.

[Source][88]§

#### fn [try_into][89](self) -> [Result][16]<U, <U as [TryFrom][77]<T>>::[Error][83]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][13] \+ [Clone][8] \+ [Send][37] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [6]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [7]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
   [8]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [9]: struct.SerializeOptions.html (struct tauri::ipc::SerializeOptions)
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
   [21]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html (trait core::hash::Hash)
   [22]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#tymethod.hash
   [23]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [24]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hasher.html (trait core::hash::Hasher)
   [25]: https://doc.rust-lang.org/1.94.1/src/core/hash/mod.rs.html#235-237
   [26]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#method.hash_slice
   [27]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [28]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [29]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [30]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [31]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [32]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [33]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [34]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [35]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [36]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [37]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [38]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [39]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [40]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [41]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [42]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [44]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [45]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [47]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [49]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [50]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [51]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [53]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [54]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [55]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [56]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [57]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [58]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [59]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [60]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [61]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [62]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [63]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [64]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [65]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [66]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [67]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [68]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [69]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [70]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [71]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [72]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [73]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [74]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [75]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [76]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [77]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [78]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [79]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [80]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [81]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [82]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [83]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [84]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [85]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [86]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [87]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [88]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [89]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

