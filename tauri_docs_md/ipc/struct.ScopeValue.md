## ScopeValue

[![logo][1]][2]

## [tauri][2]2.10.3

## ScopeValue

### Methods

  * allows
  * denies



### Trait Implementations

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
  * From<T>
  * Into<U>
  * TryFrom<U>
  * TryInto<U>



## [In tauri::ipc][3]

[tauri][4]::[ipc][3]

# Struct ScopeValue Copy item path

[Source][5]
[code] 
    pub struct ScopeValue<T: [ScopeObject][6]> { /* private fields */ }
[/code]

Expand description

List of allowed and denied objects that match either the command-specific or plugin global scope criteria.

## Implementations§

[Source][7]§

### impl<T: [ScopeObject][6]> [ScopeValue][8]<T>

[Source][9]

#### pub fn allows(&self) -> &[Vec][10]<[Arc][11]<T>>

What this access scope allows.

[Source][12]

#### pub fn denies(&self) -> &[Vec][10]<[Arc][11]<T>>

What this access scope denies.

## Trait Implementations§

[Source][13]§

### impl<T: [Debug][14] \+ [ScopeObject][6]> [Debug][14] for [ScopeValue][8]<T>

[Source][13]§

#### fn [fmt][15](&self, f: &mut [Formatter][16]<'_>) -> [Result][17]

Formats the value using the given formatter. [Read more][15]

## Auto Trait Implementations§

§

### impl<T> [Freeze][18] for [ScopeValue][8]<T>

§

### impl<T> [RefUnwindSafe][19] for [ScopeValue][8]<T>

where T: [RefUnwindSafe][19],

§

### impl<T> [Send][20] for [ScopeValue][8]<T>

§

### impl<T> [Sync][21] for [ScopeValue][8]<T>

§

### impl<T> [Unpin][22] for [ScopeValue][8]<T>

§

### impl<T> [UnwindSafe][23] for [ScopeValue][8]<T>

where T: [RefUnwindSafe][19],

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

### impl<T> [From][40]<T> for T

[Source][41]§

#### fn [from][42](t: T) -> T

Returns the argument unchanged.

[Source][43]§

### impl<T, U> [Into][44]<U> for T

where U: [From][40]<T>,

[Source][45]§

#### fn [into][46](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][40]<T> for U` chooses to do.

[Source][47]§

### impl<T, U> [TryFrom][48]<U> for T

where U: [Into][44]<T>,

[Source][49]§

#### type [Error][50] = [Infallible][51]

The type returned in the event of a conversion error.

[Source][52]§

#### fn [try_from][53](value: U) -> [Result][54]<T, <T as [TryFrom][48]<U>>::[Error][55]>

Performs the conversion.

[Source][56]§

### impl<T, U> [TryInto][57]<U> for T

where U: [TryFrom][48]<T>,

[Source][58]§

#### type [Error][59] = <U as [TryFrom][48]<T>>::[Error][55]

The type returned in the event of a conversion error.

[Source][60]§

#### fn [try_into][61](self) -> [Result][54]<U, <U as [TryFrom][48]<T>>::[Error][55]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/ipc/authority.rs.html#476-479
   [6]: trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [7]: ../../src/tauri/ipc/authority.rs.html#481-498
   [8]: struct.ScopeValue.html (struct tauri::ipc::ScopeValue)
   [9]: ../../src/tauri/ipc/authority.rs.html#490-492
   [10]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [11]: https://doc.rust-lang.org/1.94.1/alloc/sync/struct.Arc.html (struct alloc::sync::Arc)
   [12]: ../../src/tauri/ipc/authority.rs.html#495-497
   [13]: ../../src/tauri/ipc/authority.rs.html#475
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
   [39]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [40]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [41]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [42]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [43]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [44]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [45]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [46]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [47]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [48]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [49]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [50]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [51]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [53]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [54]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [55]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [56]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [57]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [59]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [60]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [61]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

