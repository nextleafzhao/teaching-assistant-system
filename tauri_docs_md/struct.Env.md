## Env

[![logo][1]][2]

## [tauri][2]2.10.3

## Env

### Fields

  * args_os



### Trait Implementations

  * Clone
  * Debug
  * Default



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

# Struct Env Copy item path
[code]
    #[non_exhaustive]
    
    pub struct Env {
        pub args_os: [Vec][4]<[OsString][5]>,
    }
[/code]

Expand description

Information about environment variables.

## Fields (Non-exhaustive)§

This struct is marked as non-exhaustive

Non-exhaustive structs could have additional fields added in future. Therefore, non-exhaustive structs cannot be constructed in external crates using the traditional `Struct { .. }` syntax; cannot be matched against without a wildcard `..`; and struct update syntax will not work.

§`args_os: [Vec][4]<[OsString][5]>`

The command line arguments of the current process.

## Trait Implementations§

§

### impl [Clone][6] for [Env][7]

§

#### fn [clone][8](&self) -> [Env][7]

Returns a duplicate of the value. [Read more][8]

1.0.0 · [Source][9]§

#### fn [clone_from][10](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][10]

§

### impl [Debug][11] for [Env][7]

§

#### fn [fmt][12](&self, f: &mut [Formatter][13]<'_>) -> [Result][14]<[()][15], [Error][16]>

Formats the value using the given formatter. [Read more][12]

§

### impl [Default][17] for [Env][7]

§

#### fn [default][18]() -> [Env][7]

Returns the “default value” for a type. [Read more][18]

## Auto Trait Implementations§

§

### impl [Freeze][19] for [Env][7]

§

### impl [RefUnwindSafe][20] for [Env][7]

§

### impl [Send][21] for [Env][7]

§

### impl [Sync][22] for [Env][7]

§

### impl [Unpin][23] for [Env][7]

§

### impl [UnwindSafe][24] for [Env][7]

## Blanket Implementations§

[Source][25]§

### impl<T> [Any][26] for T

where T: 'static + ?[Sized][27],

[Source][28]§

#### fn [type_id][29](&self) -> [TypeId][30]

Gets the `TypeId` of `self`. [Read more][29]

[Source][31]§

### impl<T> [Borrow][32]<T> for T

where T: ?[Sized][27],

[Source][33]§

#### fn [borrow][34](&self) -> [&T][35]

Immutably borrows from an owned value. [Read more][34]

[Source][36]§

### impl<T> [BorrowMut][37]<T> for T

where T: ?[Sized][27],

[Source][38]§

#### fn [borrow_mut][39](&mut self) -> [&mut T][35]

Mutably borrows from an owned value. [Read more][39]

[Source][40]§

### impl<T> [CloneToUninit][41] for T

where T: [Clone][6],

[Source][42]§

#### unsafe fn [clone_to_uninit][43](&self, dest: [*mut ][44][u8][45])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][43]

[Source][46]§

### impl<T> [From][47]<T> for T

[Source][48]§

#### fn [from][49](t: T) -> T

Returns the argument unchanged.

[Source][50]§

### impl<T, U> [Into][51]<U> for T

where U: [From][47]<T>,

[Source][52]§

#### fn [into][53](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][47]<T> for U` chooses to do.

[Source][54]§

### impl<T> [ToOwned][55] for T

where T: [Clone][6],

[Source][56]§

#### type [Owned][57] = T

The resulting type after obtaining ownership.

[Source][58]§

#### fn [to_owned][59](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][59]

[Source][60]§

#### fn [clone_into][61](&self, target: [&mut T][35])

Uses borrowed data to replace owned data, usually by cloning. [Read more][61]

[Source][62]§

### impl<T, U> [TryFrom][63]<U> for T

where U: [Into][51]<T>,

[Source][64]§

#### type [Error][65] = [Infallible][66]

The type returned in the event of a conversion error.

[Source][67]§

#### fn [try_from][68](value: U) -> [Result][14]<T, <T as [TryFrom][63]<U>>::[Error][69]>

Performs the conversion.

[Source][70]§

### impl<T, U> [TryInto][71]<U> for T

where U: [TryFrom][63]<T>,

[Source][72]§

#### type [Error][73] = <U as [TryFrom][63]<T>>::[Error][69]

The type returned in the event of a conversion error.

[Source][74]§

#### fn [try_into][75](self) -> [Result][14]<U, <U as [TryFrom][63]<T>>::[Error][69]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][11] \+ [Clone][6] \+ [Send][21] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [5]: https://doc.rust-lang.org/1.94.1/std/ffi/os_str/struct.OsString.html (struct std::ffi::os_str::OsString)
   [6]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [7]: struct.Env.html (struct tauri::Env)
   [8]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [9]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [10]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [11]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [12]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [13]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [14]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [15]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [16]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [17]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [18]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [19]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [20]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [21]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [22]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [23]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [24]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [25]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [26]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [27]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [28]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [29]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [30]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [31]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [32]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [33]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [34]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [35]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [36]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [37]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [38]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [39]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [40]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [41]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [42]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [43]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [44]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [45]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [46]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [47]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [49]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
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
   [69]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [70]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [72]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [74]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [75]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

