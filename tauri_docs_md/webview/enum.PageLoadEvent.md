## PageLoadEvent

[![logo][1]][2]

## [tauri][2]2.10.3

## PageLoadEvent

### Variants

  * Finished
  * Started



### Trait Implementations

  * Clone
  * Copy
  * Debug
  * Eq
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



## [In tauri::webview][3]

[tauri][4]::[webview][3]

# Enum PageLoadEvent Copy item path
[code]
    pub enum PageLoadEvent {
        Started,
        Finished,
    }
[/code]

Expand description

Kind of event for the page load handler.

## Variants§

§

### Started

Page started to load.

§

### Finished

Page finished loading.

## Trait Implementations§

§

### impl [Clone][5] for [PageLoadEvent][6]

§

#### fn [clone][7](&self) -> [PageLoadEvent][6]

Returns a duplicate of the value. [Read more][7]

1.0.0 · [Source][8]§

#### fn [clone_from][9](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][9]

§

### impl [Debug][10] for [PageLoadEvent][6]

§

#### fn [fmt][11](&self, f: &mut [Formatter][12]<'_>) -> [Result][13]<[()][14], [Error][15]>

Formats the value using the given formatter. [Read more][11]

§

### impl [PartialEq][16] for [PageLoadEvent][6]

§

#### fn [eq][17](&self, other: &[PageLoadEvent][6]) -> [bool][18]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][19]§

#### fn [ne][20](&self, other: [&Rhs][21]) -> [bool][18]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl [Copy][22] for [PageLoadEvent][6]

§

### impl [Eq][23] for [PageLoadEvent][6]

§

### impl [StructuralPartialEq][24] for [PageLoadEvent][6]

## Auto Trait Implementations§

§

### impl [Freeze][25] for [PageLoadEvent][6]

§

### impl [RefUnwindSafe][26] for [PageLoadEvent][6]

§

### impl [Send][27] for [PageLoadEvent][6]

§

### impl [Sync][28] for [PageLoadEvent][6]

§

### impl [Unpin][29] for [PageLoadEvent][6]

§

### impl [UnwindSafe][30] for [PageLoadEvent][6]

## Blanket Implementations§

[Source][31]§

### impl<T> [Any][32] for T

where T: 'static + ?[Sized][33],

[Source][34]§

#### fn [type_id][35](&self) -> [TypeId][36]

Gets the `TypeId` of `self`. [Read more][35]

[Source][37]§

### impl<T> [Borrow][38]<T> for T

where T: ?[Sized][33],

[Source][39]§

#### fn [borrow][40](&self) -> [&T][21]

Immutably borrows from an owned value. [Read more][40]

[Source][41]§

### impl<T> [BorrowMut][42]<T> for T

where T: ?[Sized][33],

[Source][43]§

#### fn [borrow_mut][44](&mut self) -> [&mut T][21]

Mutably borrows from an owned value. [Read more][44]

[Source][45]§

### impl<T> [CloneToUninit][46] for T

where T: [Clone][5],

[Source][47]§

#### unsafe fn [clone_to_uninit][48](&self, dest: [*mut ][49][u8][50])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][48]

[Source][51]§

### impl<T> [From][52]<T> for T

[Source][53]§

#### fn [from][54](t: T) -> T

Returns the argument unchanged.

[Source][55]§

### impl<T, U> [Into][56]<U> for T

where U: [From][52]<T>,

[Source][57]§

#### fn [into][58](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][52]<T> for U` chooses to do.

[Source][59]§

### impl<T> [ToOwned][60] for T

where T: [Clone][5],

[Source][61]§

#### type [Owned][62] = T

The resulting type after obtaining ownership.

[Source][63]§

#### fn [to_owned][64](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][64]

[Source][65]§

#### fn [clone_into][66](&self, target: [&mut T][21])

Uses borrowed data to replace owned data, usually by cloning. [Read more][66]

[Source][67]§

### impl<T, U> [TryFrom][68]<U> for T

where U: [Into][56]<T>,

[Source][69]§

#### type [Error][70] = [Infallible][71]

The type returned in the event of a conversion error.

[Source][72]§

#### fn [try_from][73](value: U) -> [Result][13]<T, <T as [TryFrom][68]<U>>::[Error][74]>

Performs the conversion.

[Source][75]§

### impl<T, U> [TryInto][76]<U> for T

where U: [TryFrom][68]<T>,

[Source][77]§

#### type [Error][78] = <U as [TryFrom][68]<T>>::[Error][74]

The type returned in the event of a conversion error.

[Source][79]§

#### fn [try_into][80](self) -> [Result][13]<U, <U as [TryFrom][68]<T>>::[Error][74]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][10] \+ [Clone][5] \+ [Send][27] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [6]: enum.PageLoadEvent.html (enum tauri::webview::PageLoadEvent)
   [7]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [8]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [9]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [10]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [11]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [12]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [13]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [14]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [15]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [16]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [17]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [18]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [19]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [20]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [21]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [22]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [23]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [24]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [25]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [26]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [27]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [28]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [29]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [30]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [31]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [32]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [33]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [34]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [35]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [36]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [37]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [38]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [39]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [40]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [41]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [42]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [44]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [45]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [46]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [47]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [48]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [49]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [50]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [51]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [52]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [54]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [55]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [56]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [57]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [58]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [59]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [60]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [61]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [62]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [63]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [64]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [65]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [66]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [67]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [69]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [72]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [74]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [75]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [76]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [77]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [78]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [79]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [80]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

