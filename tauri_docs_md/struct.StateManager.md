## StateManager

[![logo][1]][2]

## [tauri][2]2.10.3

## StateManager

### Methods

  * get
  * try_get



### Trait Implementations

  * Debug



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



## [In crate tauri][3]

[tauri][3]

# Struct StateManager Copy item path

[Source][4]
[code] 
    pub struct StateManager { /* private fields */ }
[/code]

Expand description

The Tauri state manager.

## Implementations§

[Source][5]§

### impl [StateManager][6]

[Source][7]

#### pub fn get<T: [Send][8] \+ [Sync][9] \+ 'static>(&self) -> [State][10]<'_, T>

Gets the state associated with the specified type.

[Source][11]

#### pub fn try_get<T: [Send][8] \+ [Sync][9] \+ 'static>(&self) -> [Option][12]<[State][10]<'_, T>>

Gets the state associated with the specified type.

## Trait Implementations§

[Source][13]§

### impl [Debug][14] for [StateManager][6]

[Source][13]§

#### fn [fmt][15](&self, f: &mut [Formatter][16]<'_>) -> [Result][17]

Formats the value using the given formatter. [Read more][15]

## Auto Trait Implementations§

§

### impl ![Freeze][18] for [StateManager][6]

§

### impl [RefUnwindSafe][19] for [StateManager][6]

§

### impl [Send][8] for [StateManager][6]

§

### impl [Sync][9] for [StateManager][6]

§

### impl [Unpin][20] for [StateManager][6]

§

### impl [UnwindSafe][21] for [StateManager][6]

## Blanket Implementations§

[Source][22]§

### impl<T> [Any][23] for T

where T: 'static + ?[Sized][24],

[Source][25]§

#### fn [type_id][26](&self) -> [TypeId][27]

Gets the `TypeId` of `self`. [Read more][26]

[Source][28]§

### impl<T> [Borrow][29]<T> for T

where T: ?[Sized][24],

[Source][30]§

#### fn [borrow][31](&self) -> [&T][32]

Immutably borrows from an owned value. [Read more][31]

[Source][33]§

### impl<T> [BorrowMut][34]<T> for T

where T: ?[Sized][24],

[Source][35]§

#### fn [borrow_mut][36](&mut self) -> [&mut T][32]

Mutably borrows from an owned value. [Read more][36]

[Source][37]§

### impl<T> [From][38]<T> for T

[Source][39]§

#### fn [from][40](t: T) -> T

Returns the argument unchanged.

[Source][41]§

### impl<T, U> [Into][42]<U> for T

where U: [From][38]<T>,

[Source][43]§

#### fn [into][44](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][38]<T> for U` chooses to do.

[Source][45]§

### impl<T, U> [TryFrom][46]<U> for T

where U: [Into][42]<T>,

[Source][47]§

#### type [Error][48] = [Infallible][49]

The type returned in the event of a conversion error.

[Source][50]§

#### fn [try_from][51](value: U) -> [Result][52]<T, <T as [TryFrom][46]<U>>::[Error][53]>

Performs the conversion.

[Source][54]§

### impl<T, U> [TryInto][55]<U> for T

where U: [TryFrom][46]<T>,

[Source][56]§

#### type [Error][57] = <U as [TryFrom][46]<T>>::[Error][53]

The type returned in the event of a conversion error.

[Source][58]§

#### fn [try_into][59](self) -> [Result][52]<U, <U as [TryFrom][46]<T>>::[Error][53]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/state.rs.html#107-109
   [5]: ../src/tauri/state.rs.html#111-174
   [6]: struct.StateManager.html (struct tauri::StateManager)
   [7]: ../src/tauri/state.rs.html#153-157
   [8]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [9]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [10]: struct.State.html (struct tauri::State)
   [11]: ../src/tauri/state.rs.html#160-173
   [12]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [13]: ../src/tauri/state.rs.html#106
   [14]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [15]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [16]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [17]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [18]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [19]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [20]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [21]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [22]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [23]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [24]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [25]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [26]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [27]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [28]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [29]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [30]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [31]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [32]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [33]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [34]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [35]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [36]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [37]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [38]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [39]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [40]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [41]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [42]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [44]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [45]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [46]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [47]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [48]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [49]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [50]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [51]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [52]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [53]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [54]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [55]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [56]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [57]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [58]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [59]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

