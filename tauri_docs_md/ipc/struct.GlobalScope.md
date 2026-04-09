## GlobalScope

[![logo][1]][2]

## [tauri][2]2.10.3

## GlobalScope

### Methods

  * allows
  * denies



### Trait Implementations

  * CommandArg<'a, R>
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

# Struct GlobalScope Copy item path

[Source][5]
[code] 
    pub struct GlobalScope<T: [ScopeObject][6]>(/* private fields */);
[/code]

Expand description

Global access scope that can be retrieved directly in the command function.

## Implementations§

[Source][7]§

### impl<T: [ScopeObject][6]> [GlobalScope][8]<T>

[Source][9]

#### pub fn allows(&self) -> &[Vec][10]<[Arc][11]<T>>

What this access scope allows.

[Source][12]

#### pub fn denies(&self) -> &[Vec][10]<[Arc][11]<T>>

What this access scope denies.

## Trait Implementations§

[Source][13]§

### impl<'a, R: [Runtime][14], T: [ScopeObject][6]> [CommandArg][15]<'a, R> for [GlobalScope][8]<T>

[Source][16]§

#### fn [from_command][17](command: [CommandItem][18]<'a, R>) -> [Result][19]<Self, [InvokeError][20]>

Grabs the [`ResolvedScope`] from the [`CommandItem`][18] and returns the associated [`GlobalScope`][8].

[Source][21]§

### impl<T: [Debug][22] \+ [ScopeObject][6]> [Debug][22] for [GlobalScope][8]<T>

[Source][21]§

#### fn [fmt][23](&self, f: &mut [Formatter][24]<'_>) -> [Result][25]

Formats the value using the given formatter. [Read more][23]

## Auto Trait Implementations§

§

### impl<T> [Freeze][26] for [GlobalScope][8]<T>

§

### impl<T> [RefUnwindSafe][27] for [GlobalScope][8]<T>

where T: [RefUnwindSafe][27],

§

### impl<T> [Send][28] for [GlobalScope][8]<T>

§

### impl<T> [Sync][29] for [GlobalScope][8]<T>

§

### impl<T> [Unpin][30] for [GlobalScope][8]<T>

§

### impl<T> [UnwindSafe][31] for [GlobalScope][8]<T>

where T: [RefUnwindSafe][27],

## Blanket Implementations§

[Source][32]§

### impl<T> [Any][33] for T

where T: 'static + ?[Sized][34],

[Source][35]§

#### fn [type_id][36](&self) -> [TypeId][37]

Gets the `TypeId` of `self`. [Read more][36]

[Source][38]§

### impl<T> [Borrow][39]<T> for T

where T: ?[Sized][34],

[Source][40]§

#### fn [borrow][41](&self) -> [&T][42]

Immutably borrows from an owned value. [Read more][41]

[Source][43]§

### impl<T> [BorrowMut][44]<T> for T

where T: ?[Sized][34],

[Source][45]§

#### fn [borrow_mut][46](&mut self) -> [&mut T][42]

Mutably borrows from an owned value. [Read more][46]

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

### impl<T, U> [TryFrom][56]<U> for T

where U: [Into][52]<T>,

[Source][57]§

#### type [Error][58] = [Infallible][59]

The type returned in the event of a conversion error.

[Source][60]§

#### fn [try_from][61](value: U) -> [Result][19]<T, <T as [TryFrom][56]<U>>::[Error][62]>

Performs the conversion.

[Source][63]§

### impl<T, U> [TryInto][64]<U> for T

where U: [TryFrom][56]<T>,

[Source][65]§

#### type [Error][66] = <U as [TryFrom][56]<T>>::[Error][62]

The type returned in the event of a conversion error.

[Source][67]§

#### fn [try_into][68](self) -> [Result][19]<U, <U as [TryFrom][56]<T>>::[Error][62]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/ipc/authority.rs.html#631
   [6]: trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [7]: ../../src/tauri/ipc/authority.rs.html#633-654
   [8]: struct.GlobalScope.html (struct tauri::ipc::GlobalScope)
   [9]: ../../src/tauri/ipc/authority.rs.html#646-648
   [10]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [11]: https://doc.rust-lang.org/1.94.1/alloc/sync/struct.Arc.html (struct alloc::sync::Arc)
   [12]: ../../src/tauri/ipc/authority.rs.html#651-653
   [13]: ../../src/tauri/ipc/authority.rs.html#656-665
   [14]: ../trait.Runtime.html (trait tauri::Runtime)
   [15]: trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [16]: ../../src/tauri/ipc/authority.rs.html#658-664
   [17]: trait.CommandArg.html#tymethod.from_command
   [18]: struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [19]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [20]: struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [21]: ../../src/tauri/ipc/authority.rs.html#630
   [22]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [23]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [24]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [25]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [26]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [27]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [28]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [29]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [30]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [31]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [32]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [33]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [34]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [35]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [36]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [37]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [38]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [39]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [40]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [41]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [42]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [43]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [44]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [45]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [46]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [47]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [48]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [49]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [50]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [51]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [52]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [54]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [55]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [56]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [57]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [58]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [59]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [60]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [61]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [62]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [63]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [65]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [67]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

