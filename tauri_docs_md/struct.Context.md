## Context

[![logo][1]][2]

## [tauri][2]2.10.3

## Context

### Sections

  * Stability



### Fields

  * assets



### Methods

  * assets
  * config
  * config_mut
  * default_window_icon
  * new
  * package_info
  * package_info_mut
  * pattern
  * set_assets
  * set_default_window_icon



### Trait Implementations

  * Debug



### Auto Trait Implementations

  * !Freeze
  * !RefUnwindSafe
  * !UnwindSafe
  * Send
  * Sync
  * Unpin



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

# Struct Context Copy item path

[Source][4]
[code] 
    pub struct Context<R: [Runtime][5] = [Wry][6]> {
        pub assets: [Box][7]<dyn [Assets][8]<R>>,
        /* private fields */
    }
[/code]

Expand description

User supplied data required inside of a Tauri application.

## §Stability

This is the output of the [`generate_context`][9] macro, and is not considered part of the stable API. Unless you know what you are doing and are prepared for this type to have breaking changes, do not create it yourself.

## Fields§

§`assets: [Box][7]<dyn [Assets][8]<R>>`

Asset provider.

## Implementations§

[Source][10]§

### impl<R: [Runtime][5]> [Context][11]<R>

[Source][12]

#### pub fn config(&self) -> &[Config][13]

The config the application was prepared with.

[Source][14]

#### pub fn config_mut(&mut self) -> &mut [Config][13]

A mutable reference to the config the application was prepared with.

[Source][15]

#### pub fn assets(&self) -> &dyn [Assets][8]<R>

The assets to be served directly by Tauri.

[Source][16]

#### pub fn set_assets(&mut self, assets: [Box][7]<dyn [Assets][8]<R>>) -> [Box][7]<dyn [Assets][8]<R>>

Replace the [`Assets`][8] implementation and returns the previous value so you can use it as a fallback if desired.

[Source][17]

#### pub fn default_window_icon(&self) -> [Option][18]<&[Image][19]<'_>>

The default window icon Tauri should use when creating windows.

[Source][20]

#### pub fn set_default_window_icon(&mut self, icon: [Option][18]<[Image][19]<'static>>)

Set the default window icon Tauri should use when creating windows.

[Source][21]

#### pub fn package_info(&self) -> &[PackageInfo][22]

Package information.

[Source][23]

#### pub fn package_info_mut(&mut self) -> &mut [PackageInfo][22]

A mutable reference to the package information.

[Source][24]

#### pub fn pattern(&self) -> &[Pattern][25]

The application pattern.

[Source][26]

#### pub fn new( config: [Config][13], assets: [Box][7]<dyn [Assets][8]<R>>, default_window_icon: [Option][18]<[Image][19]<'static>>, app_icon: [Option][18]<[Vec][27]<[u8][28]>>, package_info: [PackageInfo][22], pattern: [Pattern][25], runtime_authority: [RuntimeAuthority][29], plugin_global_api_scripts: [Option][18]<&'static [&'static [str][30]]>, ) -> Self

Create a new [`Context`][11] from the minimal required items.

## Trait Implementations§

[Source][31]§

### impl<R: [Runtime][5]> [Debug][32] for [Context][11]<R>

[Source][33]§

#### fn [fmt][34](&self, f: &mut [Formatter][35]<'_>) -> [Result][36]

Formats the value using the given formatter. [Read more][34]

## Auto Trait Implementations§

§

### impl<R = Wry<[EventLoopMessage][37]>> ![Freeze][38] for [Context][11]<R>

§

### impl<R = Wry<[EventLoopMessage][37]>> ![RefUnwindSafe][39] for [Context][11]<R>

§

### impl<R> [Send][40] for [Context][11]<R>

§

### impl<R> [Sync][41] for [Context][11]<R>

§

### impl<R> [Unpin][42] for [Context][11]<R>

§

### impl<R = Wry<[EventLoopMessage][37]>> ![UnwindSafe][43] for [Context][11]<R>

## Blanket Implementations§

[Source][44]§

### impl<T> [Any][45] for T

where T: 'static + ?[Sized][46],

[Source][47]§

#### fn [type_id][48](&self) -> [TypeId][49]

Gets the `TypeId` of `self`. [Read more][48]

[Source][50]§

### impl<T> [Borrow][51]<T> for T

where T: ?[Sized][46],

[Source][52]§

#### fn [borrow][53](&self) -> [&T][54]

Immutably borrows from an owned value. [Read more][53]

[Source][55]§

### impl<T> [BorrowMut][56]<T> for T

where T: ?[Sized][46],

[Source][57]§

#### fn [borrow_mut][58](&mut self) -> [&mut T][54]

Mutably borrows from an owned value. [Read more][58]

[Source][59]§

### impl<T> [From][60]<T> for T

[Source][61]§

#### fn [from][62](t: T) -> T

Returns the argument unchanged.

[Source][63]§

### impl<T, U> [Into][64]<U> for T

where U: [From][60]<T>,

[Source][65]§

#### fn [into][66](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][60]<T> for U` chooses to do.

[Source][67]§

### impl<T, U> [TryFrom][68]<U> for T

where U: [Into][64]<T>,

[Source][69]§

#### type [Error][70] = [Infallible][71]

The type returned in the event of a conversion error.

[Source][72]§

#### fn [try_from][73](value: U) -> [Result][74]<T, <T as [TryFrom][68]<U>>::[Error][75]>

Performs the conversion.

[Source][76]§

### impl<T, U> [TryInto][77]<U> for T

where U: [TryFrom][68]<T>,

[Source][78]§

#### type [Error][79] = <U as [TryFrom][68]<T>>::[Error][75]

The type returned in the event of a conversion error.

[Source][80]§

#### fn [try_into][81](self) -> [Result][74]<U, <U as [TryFrom][68]<T>>::[Error][75]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/lib.rs.html#355-369
   [5]: trait.Runtime.html (trait tauri::Runtime)
   [6]: type.Wry.html (type tauri::Wry)
   [7]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [8]: trait.Assets.html (trait tauri::Assets)
   [9]: macro.generate_context.html (macro tauri::generate_context)
   [10]: ../src/tauri/lib.rs.html#408-526
   [11]: struct.Context.html (struct tauri::Context)
   [12]: ../src/tauri/lib.rs.html#411-413
   [13]: struct.Config.html (struct tauri::Config)
   [14]: ../src/tauri/lib.rs.html#417-419
   [15]: ../src/tauri/lib.rs.html#423-425
   [16]: ../src/tauri/lib.rs.html#429-431
   [17]: ../src/tauri/lib.rs.html#435-437
   [18]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [19]: image/struct.Image.html (struct tauri::image::Image)
   [20]: ../src/tauri/lib.rs.html#441-443
   [21]: ../src/tauri/lib.rs.html#463-465
   [22]: struct.PackageInfo.html (struct tauri::PackageInfo)
   [23]: ../src/tauri/lib.rs.html#469-471
   [24]: ../src/tauri/lib.rs.html#475-477
   [25]: enum.Pattern.html (enum tauri::Pattern)
   [26]: ../src/tauri/lib.rs.html#493-517
   [27]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [28]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [29]: ipc/struct.RuntimeAuthority.html (struct tauri::ipc::RuntimeAuthority)
   [30]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [31]: ../src/tauri/lib.rs.html#391-406
   [32]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [33]: ../src/tauri/lib.rs.html#392-405
   [34]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [35]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [36]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [37]: enum.EventLoopMessage.html (enum tauri::EventLoopMessage)
   [38]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [39]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [40]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [41]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [42]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [43]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [44]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [45]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [46]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [47]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [48]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [49]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [50]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [51]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [53]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [54]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [55]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [56]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [57]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [58]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [59]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [60]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [61]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [62]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [63]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [65]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [67]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [69]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [72]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [74]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [75]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [76]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [77]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [78]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [79]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [80]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [81]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

