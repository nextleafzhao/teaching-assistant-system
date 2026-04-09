## CommandScope

[![logo][1]][2]

## [tauri][2]2.10.3

## CommandScope

### Methods

  * allows
  * denies
  * matches



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

# Struct CommandScope Copy item path

[Source][5]
[code] 
    pub struct CommandScope<T: [ScopeObject][6]> { /* private fields */ }
[/code]

Expand description

Access scope for a command that can be retrieved directly in the command function.

## Implementations§

[Source][7]§

### impl<T: [ScopeObject][6]> [CommandScope][8]<T>

[Source][9]

#### pub fn allows(&self) -> &[Vec][10]<[Arc][11]<T>>

What this access scope allows.

[Source][12]

#### pub fn denies(&self) -> &[Vec][10]<[Arc][11]<T>>

What this access scope denies.

[Source][13]§

### impl<T: [ScopeObjectMatch][14]> [CommandScope][8]<T>

[Source][15]

#### pub fn matches(&self, input: &T::[Input][16]) -> [bool][17]

Ensure all deny scopes were not matched and any allow scopes were.

This **WILL** return `true` if the allow scopes are empty and the deny scopes did not trigger. If you require at least one allow scope, then ensure the allow scopes are not empty before calling this method.
[code] 
    if scope.allows().is_empty() {
      return Err("you need to specify at least 1 allow scope!");
    }
[/code]

##### §Example
[code] 
    #[derive(Debug, Clone, Serialize, Deserialize)]
    #[command]
    fn my_command(scope: CommandScope<Scope>, input: String) -> Result<String, &'static str> {
      if scope.matches(&input) {
        do_work(input)
      } else {
        Err("Scope didn't match input")
      }
    }
[/code]

## Trait Implementations§

[Source][18]§

### impl<'a, R: [Runtime][19], T: [ScopeObject][6]> [CommandArg][20]<'a, R> for [CommandScope][8]<T>

[Source][21]§

#### fn [from_command][22](command: [CommandItem][23]<'a, R>) -> [Result][24]<Self, [InvokeError][25]>

Grabs the [`ResolvedScope`] from the [`CommandItem`][23] and returns the associated [`CommandScope`][8].

[Source][26]§

### impl<T: [Debug][27] \+ [ScopeObject][6]> [Debug][27] for [CommandScope][8]<T>

[Source][26]§

#### fn [fmt][28](&self, f: &mut [Formatter][29]<'_>) -> [Result][30]

Formats the value using the given formatter. [Read more][28]

## Auto Trait Implementations§

§

### impl<T> [Freeze][31] for [CommandScope][8]<T>

§

### impl<T> [RefUnwindSafe][32] for [CommandScope][8]<T>

where T: [RefUnwindSafe][32],

§

### impl<T> [Send][33] for [CommandScope][8]<T>

§

### impl<T> [Sync][34] for [CommandScope][8]<T>

§

### impl<T> [Unpin][35] for [CommandScope][8]<T>

§

### impl<T> [UnwindSafe][36] for [CommandScope][8]<T>

where T: [RefUnwindSafe][32],

## Blanket Implementations§

[Source][37]§

### impl<T> [Any][38] for T

where T: 'static + ?[Sized][39],

[Source][40]§

#### fn [type_id][41](&self) -> [TypeId][42]

Gets the `TypeId` of `self`. [Read more][41]

[Source][43]§

### impl<T> [Borrow][44]<T> for T

where T: ?[Sized][39],

[Source][45]§

#### fn [borrow][46](&self) -> [&T][47]

Immutably borrows from an owned value. [Read more][46]

[Source][48]§

### impl<T> [BorrowMut][49]<T> for T

where T: ?[Sized][39],

[Source][50]§

#### fn [borrow_mut][51](&mut self) -> [&mut T][47]

Mutably borrows from an owned value. [Read more][51]

[Source][52]§

### impl<T> [From][53]<T> for T

[Source][54]§

#### fn [from][55](t: T) -> T

Returns the argument unchanged.

[Source][56]§

### impl<T, U> [Into][57]<U> for T

where U: [From][53]<T>,

[Source][58]§

#### fn [into][59](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][53]<T> for U` chooses to do.

[Source][60]§

### impl<T, U> [TryFrom][61]<U> for T

where U: [Into][57]<T>,

[Source][62]§

#### type [Error][63] = [Infallible][64]

The type returned in the event of a conversion error.

[Source][65]§

#### fn [try_from][66](value: U) -> [Result][24]<T, <T as [TryFrom][61]<U>>::[Error][67]>

Performs the conversion.

[Source][68]§

### impl<T, U> [TryInto][69]<U> for T

where U: [TryFrom][61]<T>,

[Source][70]§

#### type [Error][71] = <U as [TryFrom][61]<T>>::[Error][67]

The type returned in the event of a conversion error.

[Source][72]§

#### fn [try_into][73](self) -> [Result][24]<U, <U as [TryFrom][61]<T>>::[Error][67]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/ipc/authority.rs.html#502-505
   [6]: trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [7]: ../../src/tauri/ipc/authority.rs.html#507-544
   [8]: struct.CommandScope.html (struct tauri::ipc::CommandScope)
   [9]: ../../src/tauri/ipc/authority.rs.html#536-538
   [10]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [11]: https://doc.rust-lang.org/1.94.1/alloc/sync/struct.Arc.html (struct alloc::sync::Arc)
   [12]: ../../src/tauri/ipc/authority.rs.html#541-543
   [13]: ../../src/tauri/ipc/authority.rs.html#546-607
   [14]: trait.ScopeObjectMatch.html (trait tauri::ipc::ScopeObjectMatch)
   [15]: ../../src/tauri/ipc/authority.rs.html#594-606
   [16]: trait.ScopeObjectMatch.html#associatedtype.Input (type tauri::ipc::ScopeObjectMatch::Input)
   [17]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [18]: ../../src/tauri/ipc/authority.rs.html#609-627
   [19]: ../trait.Runtime.html (trait tauri::Runtime)
   [20]: trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [21]: ../../src/tauri/ipc/authority.rs.html#611-626
   [22]: trait.CommandArg.html#tymethod.from_command
   [23]: struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [24]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [25]: struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [26]: ../../src/tauri/ipc/authority.rs.html#501
   [27]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [28]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [29]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [30]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [31]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [32]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [33]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [34]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [35]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [36]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [37]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [38]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [39]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [40]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [41]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [42]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [44]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [45]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [46]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [47]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [48]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [49]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [50]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [51]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [52]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [53]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [54]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [55]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [56]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [57]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [59]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [60]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [61]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [62]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [63]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [65]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [67]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [68]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [69]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [70]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [72]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

