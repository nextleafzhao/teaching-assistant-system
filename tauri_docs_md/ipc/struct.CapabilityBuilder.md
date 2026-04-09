## CapabilityBuilder

[![logo][1]][2]

## [tauri][2]2.10.3

## CapabilityBuilder

### Methods

  * local
  * new
  * permission
  * permission_scoped
  * platform
  * platforms
  * remote
  * webview
  * webviews
  * window
  * windows



### Trait Implementations

  * RuntimeCapability



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

# Struct CapabilityBuilder Copy item path

[Source][5]
[code] 
    pub struct CapabilityBuilder(/* private fields */);
[/code]

Expand description

A builder for a [`Capability`].

## Implementations§

[Source][6]§

### impl [CapabilityBuilder][7]

[Source][8]

#### pub fn new(identifier: impl [Into][9]<[String][10]>) -> Self

Creates a new capability builder with a unique identifier.

[Source][11]

#### pub fn remote(self, url: [String][10]) -> Self

Allows this capability to be used by a remote URL.

[Source][12]

#### pub fn local(self, local: [bool][13]) -> Self

Whether this capability is applied on local app URLs or not. Defaults to `true`.

[Source][14]

#### pub fn window(self, window: impl [Into][9]<[String][10]>) -> Self

Link this capability to the given window label.

[Source][15]

#### pub fn windows( self, windows: impl [IntoIterator][16]<Item = impl [Into][9]<[String][10]>>, ) -> Self

Link this capability to the a list of window labels.

[Source][17]

#### pub fn webview(self, webview: impl [Into][9]<[String][10]>) -> Self

Link this capability to the given webview label.

[Source][18]

#### pub fn webviews( self, webviews: impl [IntoIterator][16]<Item = impl [Into][9]<[String][10]>>, ) -> Self

Link this capability to the a list of window labels.

[Source][19]

#### pub fn permission(self, permission: impl [Into][9]<[String][10]>) -> Self

Add a new permission to this capability.

[Source][20]

#### pub fn permission_scoped<T: [Serialize][21]>( self, permission: impl [Into][9]<[String][10]>, allowed: [Vec][22]<T>, denied: [Vec][22]<T>, ) -> Self

Add a new scoped permission to this capability.

[Source][23]

#### pub fn platform(self, platform: Target) -> Self

Adds a target platform for this capability.

By default all platforms are applied.

[Source][24]

#### pub fn platforms(self, platforms: impl [IntoIterator][16]<Item = Target>) -> Self

Adds target platforms for this capability.

By default all platforms are applied.

## Trait Implementations§

[Source][25]§

### impl [RuntimeCapability][26] for [CapabilityBuilder][7]

[Source][27]§

#### fn [build][28](self) -> CapabilityFile

Creates the capability file.

## Auto Trait Implementations§

§

### impl [Freeze][29] for [CapabilityBuilder][7]

§

### impl [RefUnwindSafe][30] for [CapabilityBuilder][7]

§

### impl [Send][31] for [CapabilityBuilder][7]

§

### impl [Sync][32] for [CapabilityBuilder][7]

§

### impl [Unpin][33] for [CapabilityBuilder][7]

§

### impl [UnwindSafe][34] for [CapabilityBuilder][7]

## Blanket Implementations§

[Source][35]§

### impl<T> [Any][36] for T

where T: 'static + ?[Sized][37],

[Source][38]§

#### fn [type_id][39](&self) -> [TypeId][40]

Gets the `TypeId` of `self`. [Read more][39]

[Source][41]§

### impl<T> [Borrow][42]<T> for T

where T: ?[Sized][37],

[Source][43]§

#### fn [borrow][44](&self) -> [&T][45]

Immutably borrows from an owned value. [Read more][44]

[Source][46]§

### impl<T> [BorrowMut][47]<T> for T

where T: ?[Sized][37],

[Source][48]§

#### fn [borrow_mut][49](&mut self) -> [&mut T][45]

Mutably borrows from an owned value. [Read more][49]

[Source][50]§

### impl<T> [From][51]<T> for T

[Source][52]§

#### fn [from][53](t: T) -> T

Returns the argument unchanged.

[Source][54]§

### impl<T, U> [Into][9]<U> for T

where U: [From][51]<T>,

[Source][55]§

#### fn [into][56](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][51]<T> for U` chooses to do.

[Source][57]§

### impl<T, U> [TryFrom][58]<U> for T

where U: [Into][9]<T>,

[Source][59]§

#### type [Error][60] = [Infallible][61]

The type returned in the event of a conversion error.

[Source][62]§

#### fn [try_from][63](value: U) -> [Result][64]<T, <T as [TryFrom][58]<U>>::[Error][65]>

Performs the conversion.

[Source][66]§

### impl<T, U> [TryInto][67]<U> for T

where U: [TryFrom][58]<T>,

[Source][68]§

#### type [Error][69] = <U as [TryFrom][58]<T>>::[Error][65]

The type returned in the event of a conversion error.

[Source][70]§

#### fn [try_into][71](self) -> [Result][64]<U, <U as [TryFrom][58]<T>>::[Error][65]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/ipc/capability_builder.rs.html#27
   [6]: ../../src/tauri/ipc/capability_builder.rs.html#29-164
   [7]: struct.CapabilityBuilder.html (struct tauri::ipc::CapabilityBuilder)
   [8]: ../../src/tauri/ipc/capability_builder.rs.html#31-42
   [9]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [10]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [11]: ../../src/tauri/ipc/capability_builder.rs.html#45-53
   [12]: ../../src/tauri/ipc/capability_builder.rs.html#56-59
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [14]: ../../src/tauri/ipc/capability_builder.rs.html#62-65
   [15]: ../../src/tauri/ipc/capability_builder.rs.html#68-71
   [16]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.IntoIterator.html (trait core::iter::traits::collect::IntoIterator)
   [17]: ../../src/tauri/ipc/capability_builder.rs.html#74-77
   [18]: ../../src/tauri/ipc/capability_builder.rs.html#80-86
   [19]: ../../src/tauri/ipc/capability_builder.rs.html#89-98
   [20]: ../../src/tauri/ipc/capability_builder.rs.html#101-139
   [21]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [22]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [23]: ../../src/tauri/ipc/capability_builder.rs.html#144-151
   [24]: ../../src/tauri/ipc/capability_builder.rs.html#156-163
   [25]: ../../src/tauri/ipc/capability_builder.rs.html#166-170
   [26]: trait.RuntimeCapability.html (trait tauri::ipc::RuntimeCapability)
   [27]: ../../src/tauri/ipc/capability_builder.rs.html#167-169
   [28]: trait.RuntimeCapability.html#tymethod.build
   [29]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [30]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [31]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [32]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [33]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [34]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [35]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [36]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [37]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [38]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [39]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [40]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [41]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [42]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [44]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [45]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [46]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [47]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [49]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [50]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [51]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [53]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [54]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [55]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [56]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [57]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [58]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [59]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [60]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [61]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [62]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [63]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [64]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [65]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [66]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [67]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [68]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [69]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [70]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

