## CloseRequestApi

[![logo][1]][2]

## [tauri][2]2.10.3

## CloseRequestApi

### Methods

  * prevent_close



### Trait Implementations

  * Clone
  * Debug



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



## [In crate tauri][3]

[tauri][3]

# Struct CloseRequestApi Copy item path

[Source][4]
[code] 
    pub struct CloseRequestApi(/* private fields */);
[/code]

Expand description

Api exposed on the `CloseRequested` event.

## Implementations§

[Source][5]§

### impl [CloseRequestApi][6]

[Source][7]

#### pub fn prevent_close(&self)

Prevents the window from being closed.

## Trait Implementations§

[Source][8]§

### impl [Clone][9] for [CloseRequestApi][6]

[Source][8]§

#### fn [clone][10](&self) -> [CloseRequestApi][6]

Returns a duplicate of the value. [Read more][10]

1.0.0 · [Source][11]§

#### fn [clone_from][12](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][12]

[Source][8]§

### impl [Debug][13] for [CloseRequestApi][6]

[Source][8]§

#### fn [fmt][14](&self, f: &mut [Formatter][15]<'_>) -> [Result][16]

Formats the value using the given formatter. [Read more][14]

## Auto Trait Implementations§

§

### impl [Freeze][17] for [CloseRequestApi][6]

§

### impl [RefUnwindSafe][18] for [CloseRequestApi][6]

§

### impl [Send][19] for [CloseRequestApi][6]

§

### impl [Sync][20] for [CloseRequestApi][6]

§

### impl [Unpin][21] for [CloseRequestApi][6]

§

### impl [UnwindSafe][22] for [CloseRequestApi][6]

## Blanket Implementations§

[Source][23]§

### impl<T> [Any][24] for T

where T: 'static + ?[Sized][25],

[Source][26]§

#### fn [type_id][27](&self) -> [TypeId][28]

Gets the `TypeId` of `self`. [Read more][27]

[Source][29]§

### impl<T> [Borrow][30]<T> for T

where T: ?[Sized][25],

[Source][31]§

#### fn [borrow][32](&self) -> [&T][33]

Immutably borrows from an owned value. [Read more][32]

[Source][34]§

### impl<T> [BorrowMut][35]<T> for T

where T: ?[Sized][25],

[Source][36]§

#### fn [borrow_mut][37](&mut self) -> [&mut T][33]

Mutably borrows from an owned value. [Read more][37]

[Source][38]§

### impl<T> [CloneToUninit][39] for T

where T: [Clone][9],

[Source][40]§

#### unsafe fn [clone_to_uninit][41](&self, dest: [*mut ][42][u8][43])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][41]

[Source][44]§

### impl<T> [From][45]<T> for T

[Source][46]§

#### fn [from][47](t: T) -> T

Returns the argument unchanged.

[Source][48]§

### impl<T, U> [Into][49]<U> for T

where U: [From][45]<T>,

[Source][50]§

#### fn [into][51](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][45]<T> for U` chooses to do.

[Source][52]§

### impl<T> [ToOwned][53] for T

where T: [Clone][9],

[Source][54]§

#### type [Owned][55] = T

The resulting type after obtaining ownership.

[Source][56]§

#### fn [to_owned][57](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][57]

[Source][58]§

#### fn [clone_into][59](&self, target: [&mut T][33])

Uses borrowed data to replace owned data, usually by cloning. [Read more][59]

[Source][60]§

### impl<T, U> [TryFrom][61]<U> for T

where U: [Into][49]<T>,

[Source][62]§

#### type [Error][63] = [Infallible][64]

The type returned in the event of a conversion error.

[Source][65]§

#### fn [try_from][66](value: U) -> [Result][67]<T, <T as [TryFrom][61]<U>>::[Error][68]>

Performs the conversion.

[Source][69]§

### impl<T, U> [TryInto][70]<U> for T

where U: [TryFrom][61]<T>,

[Source][71]§

#### type [Error][72] = <U as [TryFrom][61]<T>>::[Error][68]

The type returned in the event of a conversion error.

[Source][73]§

#### fn [try_into][74](self) -> [Result][67]<U, <U as [TryFrom][61]<T>>::[Error][68]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][13] \+ [Clone][9] \+ [Send][19] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/app.rs.html#96
   [5]: ../src/tauri/app.rs.html#98-103
   [6]: struct.CloseRequestApi.html (struct tauri::CloseRequestApi)
   [7]: ../src/tauri/app.rs.html#100-102
   [8]: ../src/tauri/app.rs.html#95
   [9]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [10]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [11]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [12]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [13]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [14]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [15]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [16]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [17]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [18]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [19]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [20]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [21]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [22]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [23]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [24]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [25]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [26]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [27]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [28]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [29]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [30]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [31]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [32]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [33]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [34]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [35]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [36]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [37]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [38]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [39]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [40]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [41]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [42]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [43]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [44]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [45]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [47]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [48]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [49]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [50]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [51]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [52]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [53]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [54]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [55]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [56]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [57]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [58]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [59]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [60]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [61]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [62]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [63]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [65]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [67]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [69]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [71]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [72]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [73]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [74]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

