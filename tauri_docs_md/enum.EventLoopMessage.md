## EventLoopMessage

[![logo][1]][2]

## [tauri][2]2.10.3

## EventLoopMessage

### Variants

  * MenuEvent



### Trait Implementations

  * Clone
  * Debug
  * From<EventLoopMessage>



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

# Enum EventLoopMessage Copy item path

[Source][4]
[code] 
    pub enum EventLoopMessage {
        MenuEvent([MenuEvent][5]),
    }
[/code]

Expand description

The user event type.

## Variants§

§

### MenuEvent([MenuEvent][5])

An event from a menu item, could be on the window menu bar, application menu bar (on macOS) or tray icon menu.

## Trait Implementations§

[Source][6]§

### impl [Clone][7] for [EventLoopMessage][8]

[Source][6]§

#### fn [clone][9](&self) -> [EventLoopMessage][8]

Returns a duplicate of the value. [Read more][9]

1.0.0 · [Source][10]§

#### fn [clone_from][11](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][11]

[Source][6]§

### impl [Debug][12] for [EventLoopMessage][8]

[Source][6]§

#### fn [fmt][13](&self, f: &mut [Formatter][14]<'_>) -> [Result][15]

Formats the value using the given formatter. [Read more][13]

[Source][16]§

### impl [From][17]<[EventLoopMessage][8]> for [RunEvent][18]

[Source][19]§

#### fn [from][20](event: [EventLoopMessage][8]) -> Self

Converts to this type from the input type.

## Auto Trait Implementations§

§

### impl [Freeze][21] for [EventLoopMessage][8]

§

### impl [RefUnwindSafe][22] for [EventLoopMessage][8]

§

### impl [Send][23] for [EventLoopMessage][8]

§

### impl [Sync][24] for [EventLoopMessage][8]

§

### impl [Unpin][25] for [EventLoopMessage][8]

§

### impl [UnwindSafe][26] for [EventLoopMessage][8]

## Blanket Implementations§

[Source][27]§

### impl<T> [Any][28] for T

where T: 'static + ?[Sized][29],

[Source][30]§

#### fn [type_id][31](&self) -> [TypeId][32]

Gets the `TypeId` of `self`. [Read more][31]

[Source][33]§

### impl<T> [Borrow][34]<T> for T

where T: ?[Sized][29],

[Source][35]§

#### fn [borrow][36](&self) -> [&T][37]

Immutably borrows from an owned value. [Read more][36]

[Source][38]§

### impl<T> [BorrowMut][39]<T> for T

where T: ?[Sized][29],

[Source][40]§

#### fn [borrow_mut][41](&mut self) -> [&mut T][37]

Mutably borrows from an owned value. [Read more][41]

[Source][42]§

### impl<T> [CloneToUninit][43] for T

where T: [Clone][7],

[Source][44]§

#### unsafe fn [clone_to_uninit][45](&self, dest: [*mut ][46][u8][47])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][45]

[Source][48]§

### impl<T> [From][17]<T> for T

[Source][49]§

#### fn [from][20](t: T) -> T

Returns the argument unchanged.

[Source][50]§

### impl<T, U> [Into][51]<U> for T

where U: [From][17]<T>,

[Source][52]§

#### fn [into][53](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][17]<T> for U` chooses to do.

[Source][54]§

### impl<T> [ToOwned][55] for T

where T: [Clone][7],

[Source][56]§

#### type [Owned][57] = T

The resulting type after obtaining ownership.

[Source][58]§

#### fn [to_owned][59](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][59]

[Source][60]§

#### fn [clone_into][61](&self, target: [&mut T][37])

Uses borrowed data to replace owned data, usually by cloning. [Read more][61]

[Source][62]§

### impl<T, U> [TryFrom][63]<U> for T

where U: [Into][51]<T>,

[Source][64]§

#### type [Error][65] = [Infallible][66]

The type returned in the event of a conversion error.

[Source][67]§

#### fn [try_from][68](value: U) -> [Result][69]<T, <T as [TryFrom][63]<U>>::[Error][70]>

Performs the conversion.

[Source][71]§

### impl<T, U> [TryInto][72]<U> for T

where U: [TryFrom][63]<T>,

[Source][73]§

#### type [Error][74] = <U as [TryFrom][63]<T>>::[Error][70]

The type returned in the event of a conversion error.

[Source][75]§

#### fn [try_into][76](self) -> [Result][69]<U, <U as [TryFrom][63]<T>>::[Error][70]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][12] \+ [Clone][7] \+ [Send][23] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/lib.rs.html#259-267
   [5]: menu/struct.MenuEvent.html (struct tauri::menu::MenuEvent)
   [6]: ../src/tauri/lib.rs.html#258
   [7]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [8]: enum.EventLoopMessage.html (enum tauri::EventLoopMessage)
   [9]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [10]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [11]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [12]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [13]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [14]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [15]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [16]: ../src/tauri/app.rs.html#257-266
   [17]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [18]: enum.RunEvent.html (enum tauri::RunEvent)
   [19]: ../src/tauri/app.rs.html#258-265
   [20]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [21]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [22]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [23]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [24]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [25]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [26]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [27]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [28]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [29]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [30]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [31]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [32]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [33]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [34]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [35]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [36]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [37]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [38]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [39]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [40]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [41]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [42]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [43]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [44]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [45]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [46]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [47]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [48]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [49]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [50]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [51]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [53]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [54]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [55]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [56]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [57]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [58]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [59]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [60]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [61]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [62]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [63]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [64]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [65]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [67]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [69]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [71]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [72]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [73]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [74]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [75]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [76]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

