## Scope

[![logo][1]][2]

## [tauri][2]2.10.3

## Scope

### Methods

  * allow_directory
  * allow_file
  * allowed_patterns
  * forbid_directory
  * forbid_file
  * forbidden_patterns
  * is_allowed
  * is_forbidden
  * listen
  * new
  * once
  * unlisten



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



## [In tauri::scope::fs][3]

[tauri][4]::[scope][5]::[fs][3]

# Struct Scope Copy item path

[Source][6]
[code] 
    pub struct Scope { /* private fields */ }
[/code]

Expand description

Scope for filesystem access.

## Implementations§

[Source][7]§

### impl [Scope][8]

[Source][9]

#### pub fn new<R: [Runtime][10], M: [Manager][11]<R>>( manager: [&M][12], scope: &FsScope, ) -> [Result][13]<Self>

Creates a new scope from a [`FsScope`] configuration.

[Source][14]

#### pub fn allowed_patterns(&self) -> [HashSet][15]<[Pattern][16]>

The list of allowed patterns.

[Source][17]

#### pub fn forbidden_patterns(&self) -> [HashSet][15]<[Pattern][16]>

The list of forbidden patterns.

[Source][18]

#### pub fn listen<F: [Fn][19](&[Event][20]) + [Send][21] \+ 'static>(&self, f: F) -> [ScopeEventId][22]

Listen to an event on this scope.

[Source][23]

#### pub fn once<F: [FnOnce][24](&[Event][20]) + [Send][21] \+ 'static>(&self, f: F) -> [ScopeEventId][22]

Listen to an event on this scope and immediately unlisten.

[Source][25]

#### pub fn unlisten(&self, id: [ScopeEventId][22])

Removes an event listener on this scope.

[Source][26]

#### pub fn allow_directory<P: [AsRef][27]<[Path][28]>>( &self, path: P, recursive: [bool][29], ) -> [Result][13]<[()][30]>

Extend the allowed patterns with the given directory.

After this function has been called, the frontend will be able to use the Tauri API to read the directory and all of its files. If `recursive` is `true`, subdirectories will be accessible too.

[Source][31]

#### pub fn allow_file<P: [AsRef][27]<[Path][28]>>(&self, path: P) -> [Result][13]<[()][30]>

Extend the allowed patterns with the given file path.

After this function has been called, the frontend will be able to use the Tauri API to read the contents of this file.

[Source][32]

#### pub fn forbid_directory<P: [AsRef][27]<[Path][28]>>( &self, path: P, recursive: [bool][29], ) -> [Result][13]<[()][30]>

Set the given directory path to be forbidden by this scope.

**Note:** this takes precedence over allowed paths, so its access gets denied **always**.

[Source][33]

#### pub fn forbid_file<P: [AsRef][27]<[Path][28]>>(&self, path: P) -> [Result][13]<[()][30]>

Set the given file path to be forbidden by this scope.

**Note:** this takes precedence over allowed paths, so its access gets denied **always**.

[Source][34]

#### pub fn is_allowed<P: [AsRef][27]<[Path][28]>>(&self, path: P) -> [bool][29]

Determines if the given path is allowed on this scope.

Returns `false` if the path was explicitly forbidden or neither allowed nor forbidden.

May return `false` if the path points to a broken symlink.

[Source][35]

#### pub fn is_forbidden<P: [AsRef][27]<[Path][28]>>(&self, path: P) -> [bool][29]

Determines if the given path is explicitly forbidden on this scope.

May return `true` if the path points to a broken symlink.

## Trait Implementations§

[Source][36]§

### impl [Clone][37] for [Scope][8]

[Source][36]§

#### fn [clone][38](&self) -> [Scope][8]

Returns a duplicate of the value. [Read more][38]

1.0.0 · [Source][39]§

#### fn [clone_from][40](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][40]

[Source][41]§

### impl [Debug][42] for [Scope][8]

[Source][43]§

#### fn [fmt][44](&self, f: &mut [Formatter][45]<'_>) -> [Result][46]

Formats the value using the given formatter. [Read more][44]

## Auto Trait Implementations§

§

### impl [Freeze][47] for [Scope][8]

§

### impl [RefUnwindSafe][48] for [Scope][8]

§

### impl [Send][21] for [Scope][8]

§

### impl [Sync][49] for [Scope][8]

§

### impl [Unpin][50] for [Scope][8]

§

### impl [UnwindSafe][51] for [Scope][8]

## Blanket Implementations§

[Source][52]§

### impl<T> [Any][53] for T

where T: 'static + ?[Sized][54],

[Source][55]§

#### fn [type_id][56](&self) -> [TypeId][57]

Gets the `TypeId` of `self`. [Read more][56]

[Source][58]§

### impl<T> [Borrow][59]<T> for T

where T: ?[Sized][54],

[Source][60]§

#### fn [borrow][61](&self) -> [&T][12]

Immutably borrows from an owned value. [Read more][61]

[Source][62]§

### impl<T> [BorrowMut][63]<T> for T

where T: ?[Sized][54],

[Source][64]§

#### fn [borrow_mut][65](&mut self) -> [&mut T][12]

Mutably borrows from an owned value. [Read more][65]

[Source][66]§

### impl<T> [CloneToUninit][67] for T

where T: [Clone][37],

[Source][68]§

#### unsafe fn [clone_to_uninit][69](&self, dest: [*mut ][70][u8][71])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][69]

[Source][72]§

### impl<T> [From][73]<T> for T

[Source][74]§

#### fn [from][75](t: T) -> T

Returns the argument unchanged.

[Source][76]§

### impl<T, U> [Into][77]<U> for T

where U: [From][73]<T>,

[Source][78]§

#### fn [into][79](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][73]<T> for U` chooses to do.

[Source][80]§

### impl<T> [ToOwned][81] for T

where T: [Clone][37],

[Source][82]§

#### type [Owned][83] = T

The resulting type after obtaining ownership.

[Source][84]§

#### fn [to_owned][85](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][85]

[Source][86]§

#### fn [clone_into][87](&self, target: [&mut T][12])

Uses borrowed data to replace owned data, usually by cloning. [Read more][87]

[Source][88]§

### impl<T, U> [TryFrom][89]<U> for T

where U: [Into][77]<T>,

[Source][90]§

#### type [Error][91] = [Infallible][92]

The type returned in the event of a conversion error.

[Source][93]§

#### fn [try_from][94](value: U) -> [Result][95]<T, <T as [TryFrom][89]<U>>::[Error][96]>

Performs the conversion.

[Source][97]§

### impl<T, U> [TryInto][98]<U> for T

where U: [TryFrom][89]<T>,

[Source][99]§

#### type [Error][100] = <U as [TryFrom][89]<T>>::[Error][96]

The type returned in the event of a conversion error.

[Source][101]§

#### fn [try_into][102](self) -> [Result][95]<U, <U as [TryFrom][89]<T>>::[Error][96]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][42] \+ [Clone][37] \+ [Send][21] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../../tauri/index.html
   [3]: index.html
   [4]: ../../index.html
   [5]: ../index.html
   [6]: ../../../src/tauri/scope/fs.rs.html#34-40
   [7]: ../../../src/tauri/scope/fs.rs.html#176-393
   [8]: struct.Scope.html (struct tauri::scope::fs::Scope)
   [9]: ../../../src/tauri/scope/fs.rs.html#178-223
   [10]: ../../trait.Runtime.html (trait tauri::Runtime)
   [11]: ../../trait.Manager.html (trait tauri::Manager)
   [12]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [13]: ../../type.Result.html (type tauri::Result)
   [14]: ../../../src/tauri/scope/fs.rs.html#226-228
   [15]: https://doc.rust-lang.org/1.94.1/std/collections/hash/set/struct.HashSet.html (struct std::collections::hash::set::HashSet)
   [16]: struct.Pattern.html (struct tauri::scope::fs::Pattern)
   [17]: ../../../src/tauri/scope/fs.rs.html#231-233
   [18]: ../../../src/tauri/scope/fs.rs.html#236-240
   [19]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.Fn.html (trait core::ops::function::Fn)
   [20]: enum.Event.html (enum tauri::scope::fs::Event)
   [21]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [22]: ../type.ScopeEventId.html (type tauri::scope::ScopeEventId)
   [23]: ../../../src/tauri/scope/fs.rs.html#247-259
   [24]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [25]: ../../../src/tauri/scope/fs.rs.html#262-264
   [26]: ../../../src/tauri/scope/fs.rs.html#278-292
   [27]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [28]: https://doc.rust-lang.org/1.94.1/std/path/struct.Path.html (struct std::path::Path)
   [29]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [30]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [31]: ../../../src/tauri/scope/fs.rs.html#297-306
   [32]: ../../../src/tauri/scope/fs.rs.html#311-325
   [33]: ../../../src/tauri/scope/fs.rs.html#330-339
   [34]: ../../../src/tauri/scope/fs.rs.html#346-373
   [35]: ../../../src/tauri/scope/fs.rs.html#378-392
   [36]: ../../../src/tauri/scope/fs.rs.html#33
   [37]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [38]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [39]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [40]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [41]: ../../../src/tauri/scope/fs.rs.html#48-73
   [42]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [43]: ../../../src/tauri/scope/fs.rs.html#49-72
   [44]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [45]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [46]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [47]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [48]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [49]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [50]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [51]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [53]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [54]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [56]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [57]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [59]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [60]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [61]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [62]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [63]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [64]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [65]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [66]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [67]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [68]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [69]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [70]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [71]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [72]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [74]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [75]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [76]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [77]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [78]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [79]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [80]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [81]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [82]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [83]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [84]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [85]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [86]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [87]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [88]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [89]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [90]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [91]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [92]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [93]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [94]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [95]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [96]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [97]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [98]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [99]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [100]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [101]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [102]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

