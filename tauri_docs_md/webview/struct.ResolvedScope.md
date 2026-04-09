## ResolvedScope

[![logo][1]][2]

## [tauri][2]2.10.3

## ResolvedScope

### Methods

  * command_scope
  * global_scope



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



## [In tauri::webview][3]

[tauri][4]::[webview][3]

# Struct ResolvedScope Copy item path

[Source][5]
[code] 
    pub struct ResolvedScope<T: [ScopeObject][6]> { /* private fields */ }
[/code]

Expand description

Resolved scope that can be obtained via [`Webview::resolve_command_scope`][7].

## Implementations§

[Source][8]§

### impl<T: [ScopeObject][6]> [ResolvedScope][9]<T>

[Source][10]

#### pub fn global_scope(&self) -> &[GlobalScope][11]<T>

The global plugin scope.

[Source][12]

#### pub fn command_scope(&self) -> &[CommandScope][13]<T>

The command-specific scope.

## Auto Trait Implementations§

§

### impl<T> [Freeze][14] for [ResolvedScope][9]<T>

§

### impl<T> [RefUnwindSafe][15] for [ResolvedScope][9]<T>

where T: [RefUnwindSafe][15],

§

### impl<T> [Send][16] for [ResolvedScope][9]<T>

§

### impl<T> [Sync][17] for [ResolvedScope][9]<T>

§

### impl<T> [Unpin][18] for [ResolvedScope][9]<T>

§

### impl<T> [UnwindSafe][19] for [ResolvedScope][9]<T>

where T: [RefUnwindSafe][15],

## Blanket Implementations§

[Source][20]§

### impl<T> [Any][21] for T

where T: 'static + ?[Sized][22],

[Source][23]§

#### fn [type_id][24](&self) -> [TypeId][25]

Gets the `TypeId` of `self`. [Read more][24]

[Source][26]§

### impl<T> [Borrow][27]<T> for T

where T: ?[Sized][22],

[Source][28]§

#### fn [borrow][29](&self) -> [&T][30]

Immutably borrows from an owned value. [Read more][29]

[Source][31]§

### impl<T> [BorrowMut][32]<T> for T

where T: ?[Sized][22],

[Source][33]§

#### fn [borrow_mut][34](&mut self) -> [&mut T][30]

Mutably borrows from an owned value. [Read more][34]

[Source][35]§

### impl<T> [From][36]<T> for T

[Source][37]§

#### fn [from][38](t: T) -> T

Returns the argument unchanged.

[Source][39]§

### impl<T, U> [Into][40]<U> for T

where U: [From][36]<T>,

[Source][41]§

#### fn [into][42](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][36]<T> for U` chooses to do.

[Source][43]§

### impl<T, U> [TryFrom][44]<U> for T

where U: [Into][40]<T>,

[Source][45]§

#### type [Error][46] = [Infallible][47]

The type returned in the event of a conversion error.

[Source][48]§

#### fn [try_from][49](value: U) -> [Result][50]<T, <T as [TryFrom][44]<U>>::[Error][51]>

Performs the conversion.

[Source][52]§

### impl<T, U> [TryInto][53]<U> for T

where U: [TryFrom][44]<T>,

[Source][54]§

#### type [Error][55] = <U as [TryFrom][44]<T>>::[Error][51]

The type returned in the event of a conversion error.

[Source][56]§

#### fn [try_into][57](self) -> [Result][50]<U, <U as [TryFrom][44]<T>>::[Error][51]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/webview/mod.rs.html#2291-2294
   [6]: ../ipc/trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [7]: struct.Webview.html#method.resolve_command_scope (method tauri::webview::Webview::resolve_command_scope)
   [8]: ../../src/tauri/webview/mod.rs.html#2296-2306
   [9]: struct.ResolvedScope.html (struct tauri::webview::ResolvedScope)
   [10]: ../../src/tauri/webview/mod.rs.html#2298-2300
   [11]: ../ipc/struct.GlobalScope.html (struct tauri::ipc::GlobalScope)
   [12]: ../../src/tauri/webview/mod.rs.html#2303-2305
   [13]: ../ipc/struct.CommandScope.html (struct tauri::ipc::CommandScope)
   [14]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [15]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [16]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [17]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [18]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [19]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [20]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [21]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [22]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [23]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [24]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [25]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [26]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [27]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [28]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [29]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [30]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [31]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [32]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [33]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [34]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [35]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [36]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [37]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [38]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [39]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [40]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [41]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [42]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [43]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [44]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [45]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [46]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [47]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [49]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [50]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [51]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [53]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [54]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [55]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [56]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [57]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

