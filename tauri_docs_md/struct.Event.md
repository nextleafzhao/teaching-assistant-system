## Event

[![logo][1]][2]

## [tauri][2]2.10.3

## Event

### Methods

  * id
  * payload



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

# Struct Event Copy item path

[Source][4]
[code] 
    pub struct Event { /* private fields */ }
[/code]

Expand description

An event that was emitted.

## Implementations§

[Source][5]§

### impl [Event][6]

[Source][7]

#### pub fn id(&self) -> [EventId][8]

The [`EventId`][8] of the handler that was triggered.

[Source][9]

#### pub fn payload(&self) -> &[str][10]

The event payload.

## Trait Implementations§

[Source][11]§

### impl [Clone][12] for [Event][6]

[Source][11]§

#### fn [clone][13](&self) -> [Event][6]

Returns a duplicate of the value. [Read more][13]

1.0.0 · [Source][14]§

#### fn [clone_from][15](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][15]

[Source][11]§

### impl [Debug][16] for [Event][6]

[Source][11]§

#### fn [fmt][17](&self, f: &mut [Formatter][18]<'_>) -> [Result][19]

Formats the value using the given formatter. [Read more][17]

## Auto Trait Implementations§

§

### impl [Freeze][20] for [Event][6]

§

### impl [RefUnwindSafe][21] for [Event][6]

§

### impl [Send][22] for [Event][6]

§

### impl [Sync][23] for [Event][6]

§

### impl [Unpin][24] for [Event][6]

§

### impl [UnwindSafe][25] for [Event][6]

## Blanket Implementations§

[Source][26]§

### impl<T> [Any][27] for T

where T: 'static + ?[Sized][28],

[Source][29]§

#### fn [type_id][30](&self) -> [TypeId][31]

Gets the `TypeId` of `self`. [Read more][30]

[Source][32]§

### impl<T> [Borrow][33]<T> for T

where T: ?[Sized][28],

[Source][34]§

#### fn [borrow][35](&self) -> [&T][36]

Immutably borrows from an owned value. [Read more][35]

[Source][37]§

### impl<T> [BorrowMut][38]<T> for T

where T: ?[Sized][28],

[Source][39]§

#### fn [borrow_mut][40](&mut self) -> [&mut T][36]

Mutably borrows from an owned value. [Read more][40]

[Source][41]§

### impl<T> [CloneToUninit][42] for T

where T: [Clone][12],

[Source][43]§

#### unsafe fn [clone_to_uninit][44](&self, dest: [*mut ][45][u8][46])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][44]

[Source][47]§

### impl<T> [From][48]<T> for T

[Source][49]§

#### fn [from][50](t: T) -> T

Returns the argument unchanged.

[Source][51]§

### impl<T, U> [Into][52]<U> for T

where U: [From][48]<T>,

[Source][53]§

#### fn [into][54](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][48]<T> for U` chooses to do.

[Source][55]§

### impl<T> [ToOwned][56] for T

where T: [Clone][12],

[Source][57]§

#### type [Owned][58] = T

The resulting type after obtaining ownership.

[Source][59]§

#### fn [to_owned][60](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][60]

[Source][61]§

#### fn [clone_into][62](&self, target: [&mut T][36])

Uses borrowed data to replace owned data, usually by cloning. [Read more][62]

[Source][63]§

### impl<T, U> [TryFrom][64]<U> for T

where U: [Into][52]<T>,

[Source][65]§

#### type [Error][66] = [Infallible][67]

The type returned in the event of a conversion error.

[Source][68]§

#### fn [try_from][69](value: U) -> [Result][70]<T, <T as [TryFrom][64]<U>>::[Error][71]>

Performs the conversion.

[Source][72]§

### impl<T, U> [TryInto][73]<U> for T

where U: [TryFrom][64]<T>,

[Source][74]§

#### type [Error][75] = <U as [TryFrom][64]<T>>::[Error][71]

The type returned in the event of a conversion error.

[Source][76]§

#### fn [try_into][77](self) -> [Result][70]<U, <U as [TryFrom][64]<T>>::[Error][71]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][16] \+ [Clone][12] \+ [Send][22] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/event/mod.rs.html#146-149
   [5]: ../src/tauri/event/mod.rs.html#151-165
   [6]: struct.Event.html (struct tauri::Event)
   [7]: ../src/tauri/event/mod.rs.html#157-159
   [8]: type.EventId.html (type tauri::EventId)
   [9]: ../src/tauri/event/mod.rs.html#162-164
   [10]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [11]: ../src/tauri/event/mod.rs.html#145
   [12]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [13]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [14]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [15]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [16]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [17]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [18]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [19]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [20]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [21]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [22]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [23]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [24]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [25]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [26]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [27]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [28]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [29]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [30]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [31]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [32]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [33]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [34]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [35]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [36]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [37]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [38]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [39]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [40]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [41]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [42]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [44]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [45]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [46]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [47]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [48]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [49]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [50]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [51]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [52]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [54]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [55]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [56]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [57]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [58]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [59]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [60]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [61]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [62]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [63]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [65]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [67]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [68]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [69]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [70]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [72]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [74]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [75]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [76]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [77]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

