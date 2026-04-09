## EffectsBuilder

[![logo][1]][2]

## [tauri][2]2.10.3

## EffectsBuilder

### Methods

  * build
  * clear_effects
  * color
  * effect
  * effects
  * new
  * radius
  * state



### Trait Implementations

  * Default
  * From<WindowEffectsConfig>



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



## [In tauri::window][3]

[tauri][4]::[window][3]

# Struct EffectsBuilder Copy item path

[Source][5]
[code] 
    pub struct EffectsBuilder(/* private fields */);
[/code]

Expand description

The [`WindowEffectsConfig`] object builder

## Implementations§

[Source][6]§

### impl [EffectsBuilder][7]

[Source][8]

#### pub fn new() -> Self

Create a new [`WindowEffectsConfig`] builder

[Source][9]

#### pub fn effect(self, effect: [Effect][10]) -> Self

Adds effect to the [`WindowEffectsConfig`] `effects` field

[Source][11]

#### pub fn effects<I: [IntoIterator][12]<Item = [Effect][10]>>(self, effects: I) -> Self

Adds effects to the [`WindowEffectsConfig`] `effects` field

[Source][13]

#### pub fn clear_effects(self) -> Self

Clears the [`WindowEffectsConfig`] `effects` field

[Source][14]

#### pub fn state(self, state: [EffectState][15]) -> Self

Sets `state` field for the [`WindowEffectsConfig`] **macOS Only**

[Source][16]

#### pub fn radius(self, radius: [f64][17]) -> Self

Sets `radius` field fo the [`WindowEffectsConfig`] **macOS Only**

[Source][18]

#### pub fn color(self, color: [Color][19]) -> Self

Sets `color` field fo the [`WindowEffectsConfig`] **Windows Only**

[Source][20]

#### pub fn build(self) -> WindowEffectsConfig

Builds a [`WindowEffectsConfig`]

## Trait Implementations§

[Source][21]§

### impl [Default][22] for [EffectsBuilder][7]

[Source][21]§

#### fn [default][23]() -> [EffectsBuilder][7]

Returns the “default value” for a type. [Read more][23]

[Source][24]§

### impl [From][25]<WindowEffectsConfig> for [EffectsBuilder][7]

[Source][26]§

#### fn [from][27](value: WindowEffectsConfig) -> Self

Converts to this type from the input type.

## Auto Trait Implementations§

§

### impl [Freeze][28] for [EffectsBuilder][7]

§

### impl [RefUnwindSafe][29] for [EffectsBuilder][7]

§

### impl [Send][30] for [EffectsBuilder][7]

§

### impl [Sync][31] for [EffectsBuilder][7]

§

### impl [Unpin][32] for [EffectsBuilder][7]

§

### impl [UnwindSafe][33] for [EffectsBuilder][7]

## Blanket Implementations§

[Source][34]§

### impl<T> [Any][35] for T

where T: 'static + ?[Sized][36],

[Source][37]§

#### fn [type_id][38](&self) -> [TypeId][39]

Gets the `TypeId` of `self`. [Read more][38]

[Source][40]§

### impl<T> [Borrow][41]<T> for T

where T: ?[Sized][36],

[Source][42]§

#### fn [borrow][43](&self) -> [&T][44]

Immutably borrows from an owned value. [Read more][43]

[Source][45]§

### impl<T> [BorrowMut][46]<T> for T

where T: ?[Sized][36],

[Source][47]§

#### fn [borrow_mut][48](&mut self) -> [&mut T][44]

Mutably borrows from an owned value. [Read more][48]

[Source][49]§

### impl<T> [From][25]<T> for T

[Source][50]§

#### fn [from][27](t: T) -> T

Returns the argument unchanged.

[Source][51]§

### impl<T, U> [Into][52]<U> for T

where U: [From][25]<T>,

[Source][53]§

#### fn [into][54](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][25]<T> for U` chooses to do.

[Source][55]§

### impl<T, U> [TryFrom][56]<U> for T

where U: [Into][52]<T>,

[Source][57]§

#### type [Error][58] = [Infallible][59]

The type returned in the event of a conversion error.

[Source][60]§

#### fn [try_from][61](value: U) -> [Result][62]<T, <T as [TryFrom][56]<U>>::[Error][63]>

Performs the conversion.

[Source][64]§

### impl<T, U> [TryInto][65]<U> for T

where U: [TryFrom][56]<T>,

[Source][66]§

#### type [Error][67] = <U as [TryFrom][56]<T>>::[Error][63]

The type returned in the event of a conversion error.

[Source][68]§

#### fn [try_into][69](self) -> [Result][62]<U, <U as [TryFrom][56]<T>>::[Error][63]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/window/mod.rs.html#2314
   [6]: ../../src/tauri/window/mod.rs.html#2315-2359
   [7]: struct.EffectsBuilder.html (struct tauri::window::EffectsBuilder)
   [8]: ../../src/tauri/window/mod.rs.html#2317-2319
   [9]: ../../src/tauri/window/mod.rs.html#2322-2325
   [10]: enum.Effect.html (enum tauri::window::Effect)
   [11]: ../../src/tauri/window/mod.rs.html#2328-2331
   [12]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.IntoIterator.html (trait core::iter::traits::collect::IntoIterator)
   [13]: ../../src/tauri/window/mod.rs.html#2334-2337
   [14]: ../../src/tauri/window/mod.rs.html#2340-2343
   [15]: enum.EffectState.html (enum tauri::window::EffectState)
   [16]: ../../src/tauri/window/mod.rs.html#2345-2348
   [17]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html
   [18]: ../../src/tauri/window/mod.rs.html#2350-2353
   [19]: ../webview/struct.Color.html (struct tauri::webview::Color)
   [20]: ../../src/tauri/window/mod.rs.html#2356-2358
   [21]: ../../src/tauri/window/mod.rs.html#2313
   [22]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [23]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [24]: ../../src/tauri/window/mod.rs.html#2361-2365
   [25]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [26]: ../../src/tauri/window/mod.rs.html#2362-2364
   [27]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [28]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [29]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [30]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [31]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [32]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [33]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [34]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [35]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [36]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [37]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [38]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [39]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [40]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [41]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [42]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [43]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [44]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [45]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [46]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [47]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [48]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [49]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [50]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
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
   [62]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [63]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [64]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [65]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [66]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [67]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [68]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [69]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

