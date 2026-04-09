## RuntimeAuthority

[![logo][1]][2]

## [tauri][2]2.10.3

## RuntimeAuthority

### Methods

  * add_capability
  * resolve_access



### Auto Trait Implementations

  * !Freeze
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

# Struct RuntimeAuthority Copy item path

[Source][5]
[code] 
    pub struct RuntimeAuthority { /* private fields */ }
[/code]

Expand description

The runtime authority used to authorize IPC execution based on the Access Control List.

## Implementations§

[Source][6]§

### impl [RuntimeAuthority][7]

[Source][8]

#### pub fn add_capability( &mut self, capability: impl [RuntimeCapability][9], ) -> [Result][10]<[()][11]>

Adds the given capability to the runtime authority.

[Source][12]

#### pub fn resolve_access( &self, command: &[str][13], window: &[str][13], webview: &[str][13], origin: &[Origin][14], ) -> [Option][15]<[Vec][16]<ResolvedCommand>>

Checks if the given IPC execution is allowed and returns the [`ResolvedCommand`] if it is.

## Auto Trait Implementations§

§

### impl ![Freeze][17] for [RuntimeAuthority][7]

§

### impl [RefUnwindSafe][18] for [RuntimeAuthority][7]

§

### impl [Send][19] for [RuntimeAuthority][7]

§

### impl [Sync][20] for [RuntimeAuthority][7]

§

### impl [Unpin][21] for [RuntimeAuthority][7]

§

### impl [UnwindSafe][22] for [RuntimeAuthority][7]

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

### impl<T> [From][39]<T> for T

[Source][40]§

#### fn [from][41](t: T) -> T

Returns the argument unchanged.

[Source][42]§

### impl<T, U> [Into][43]<U> for T

where U: [From][39]<T>,

[Source][44]§

#### fn [into][45](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][39]<T> for U` chooses to do.

[Source][46]§

### impl<T, U> [TryFrom][47]<U> for T

where U: [Into][43]<T>,

[Source][48]§

#### type [Error][49] = [Infallible][50]

The type returned in the event of a conversion error.

[Source][51]§

#### fn [try_from][52](value: U) -> [Result][53]<T, <T as [TryFrom][47]<U>>::[Error][54]>

Performs the conversion.

[Source][55]§

### impl<T, U> [TryInto][56]<U> for T

where U: [TryFrom][47]<T>,

[Source][57]§

#### type [Error][58] = <U as [TryFrom][47]<T>>::[Error][54]

The type returned in the event of a conversion error.

[Source][59]§

#### fn [try_into][60](self) -> [Result][53]<U, <U as [TryFrom][47]<T>>::[Error][54]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/ipc/authority.rs.html#28-35
   [6]: ../../src/tauri/ipc/authority.rs.html#103-472
   [7]: struct.RuntimeAuthority.html (struct tauri::ipc::RuntimeAuthority)
   [8]: ../../src/tauri/ipc/authority.rs.html#150-152
   [9]: trait.RuntimeCapability.html (trait tauri::ipc::RuntimeCapability)
   [10]: ../type.Result.html (type tauri::Result)
   [11]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [12]: ../../src/tauri/ipc/authority.rs.html#439-471
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [14]: enum.Origin.html (enum tauri::ipc::Origin)
   [15]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [16]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
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
   [38]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [39]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [40]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [41]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [42]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [43]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [44]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [45]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [46]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [47]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [49]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [50]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [51]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [52]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [53]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [54]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [56]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [57]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [58]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [59]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [60]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

