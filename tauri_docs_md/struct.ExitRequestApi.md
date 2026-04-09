## ExitRequestApi

[![logo][1]][2]

## [tauri][2]2.10.3

## ExitRequestApi

### Methods

  * prevent_exit



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

# Struct ExitRequestApi Copy item path

[Source][4]
[code] 
    pub struct ExitRequestApi { /* private fields */ }
[/code]

Expand description

Api exposed on the `ExitRequested` event.

## Implementations§

[Source][5]§

### impl [ExitRequestApi][6]

[Source][7]

#### pub fn prevent_exit(&self)

Prevents the app from exiting.

**Note:** This is ignored when using [`AppHandle`][8].

## Trait Implementations§

[Source][9]§

### impl [Clone][10] for [ExitRequestApi][6]

[Source][9]§

#### fn [clone][11](&self) -> [ExitRequestApi][6]

Returns a duplicate of the value. [Read more][11]

1.0.0 · [Source][12]§

#### fn [clone_from][13](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][13]

[Source][9]§

### impl [Debug][14] for [ExitRequestApi][6]

[Source][9]§

#### fn [fmt][15](&self, f: &mut [Formatter][16]<'_>) -> [Result][17]

Formats the value using the given formatter. [Read more][15]

## Auto Trait Implementations§

§

### impl [Freeze][18] for [ExitRequestApi][6]

§

### impl [RefUnwindSafe][19] for [ExitRequestApi][6]

§

### impl [Send][20] for [ExitRequestApi][6]

§

### impl [Sync][21] for [ExitRequestApi][6]

§

### impl [Unpin][22] for [ExitRequestApi][6]

§

### impl [UnwindSafe][23] for [ExitRequestApi][6]

## Blanket Implementations§

[Source][24]§

### impl<T> [Any][25] for T

where T: 'static + ?[Sized][26],

[Source][27]§

#### fn [type_id][28](&self) -> [TypeId][29]

Gets the `TypeId` of `self`. [Read more][28]

[Source][30]§

### impl<T> [Borrow][31]<T> for T

where T: ?[Sized][26],

[Source][32]§

#### fn [borrow][33](&self) -> [&T][34]

Immutably borrows from an owned value. [Read more][33]

[Source][35]§

### impl<T> [BorrowMut][36]<T> for T

where T: ?[Sized][26],

[Source][37]§

#### fn [borrow_mut][38](&mut self) -> [&mut T][34]

Mutably borrows from an owned value. [Read more][38]

[Source][39]§

### impl<T> [CloneToUninit][40] for T

where T: [Clone][10],

[Source][41]§

#### unsafe fn [clone_to_uninit][42](&self, dest: [*mut ][43][u8][44])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][42]

[Source][45]§

### impl<T> [From][46]<T> for T

[Source][47]§

#### fn [from][48](t: T) -> T

Returns the argument unchanged.

[Source][49]§

### impl<T, U> [Into][50]<U> for T

where U: [From][46]<T>,

[Source][51]§

#### fn [into][52](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][46]<T> for U` chooses to do.

[Source][53]§

### impl<T> [ToOwned][54] for T

where T: [Clone][10],

[Source][55]§

#### type [Owned][56] = T

The resulting type after obtaining ownership.

[Source][57]§

#### fn [to_owned][58](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][58]

[Source][59]§

#### fn [clone_into][60](&self, target: [&mut T][34])

Uses borrowed data to replace owned data, usually by cloning. [Read more][60]

[Source][61]§

### impl<T, U> [TryFrom][62]<U> for T

where U: [Into][50]<T>,

[Source][63]§

#### type [Error][64] = [Infallible][65]

The type returned in the event of a conversion error.

[Source][66]§

#### fn [try_from][67](value: U) -> [Result][68]<T, <T as [TryFrom][62]<U>>::[Error][69]>

Performs the conversion.

[Source][70]§

### impl<T, U> [TryInto][71]<U> for T

where U: [TryFrom][62]<T>,

[Source][72]§

#### type [Error][73] = <U as [TryFrom][62]<T>>::[Error][69]

The type returned in the event of a conversion error.

[Source][74]§

#### fn [try_into][75](self) -> [Result][68]<U, <U as [TryFrom][62]<T>>::[Error][69]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][14] \+ [Clone][10] \+ [Send][20] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/app.rs.html#78-81
   [5]: ../src/tauri/app.rs.html#83-92
   [6]: struct.ExitRequestApi.html (struct tauri::ExitRequestApi)
   [7]: ../src/tauri/app.rs.html#87-91
   [8]: struct.AppHandle.html#method.restart (struct tauri::AppHandle)
   [9]: ../src/tauri/app.rs.html#77
   [10]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [11]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [12]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [13]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [14]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [15]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [16]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [17]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [18]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [19]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [20]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [21]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [22]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [23]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [24]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [25]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [26]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [27]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [28]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [29]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [30]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [31]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [32]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [33]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [34]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [35]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [36]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [37]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [38]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [39]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [40]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [41]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [42]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [43]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [44]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [45]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [46]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [47]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [48]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [49]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [50]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [51]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [52]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [53]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [54]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [55]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [56]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [57]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [58]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [59]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [60]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [61]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [62]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [63]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [65]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [66]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [67]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [68]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [69]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [70]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [72]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [74]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [75]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

