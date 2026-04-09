## AssetResolver

[![logo][1]][2]

## [tauri][2]2.10.3

## AssetResolver

### Methods

  * get
  * get_for_scheme
  * iter



### Trait Implementations

  * Clone
  * Debug



### Auto Trait Implementations

  * !RefUnwindSafe
  * !UnwindSafe
  * Freeze
  * Send
  * Sync
  * Unpin



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

# Struct AssetResolver Copy item path

[Source][4]
[code] 
    pub struct AssetResolver<R: [Runtime][5]> { /* private fields */ }
[/code]

Expand description

The asset resolver is a helper to access the [`tauri_utils::assets::Assets`] interface.

## Implementations§

[Source][6]§

### impl<R: [Runtime][5]> [AssetResolver][7]<R>

[Source][8]

#### pub fn get(&self, path: [String][9]) -> [Option][10]<[Asset][11]>

Gets the app asset associated with the given path.

By default it tries to infer your application’s URL scheme in production by checking if all webviews were configured with [`crate::webview::WebviewBuilder::use_https_scheme`] or `tauri.conf.json > app > windows > useHttpsScheme`. If you are resolving an asset for a webview with a more dynamic configuration, see [`AssetResolver::get_for_scheme`][12].

In production, this resolves to the embedded asset bundled in the app executable which contains your frontend assets in [`frontendDist`][13] during build time.

In dev mode, if [`devUrl`][14] is set, we don’t bundle the assets to reduce re-builds, and this will fall back to read from `frontendDist` directly. Note that the dist directory must exist so you might need to build your frontend assets first.

[Source][15]

#### pub fn get_for_scheme( &self, path: [String][9], use_https_scheme: [bool][16], ) -> [Option][10]<[Asset][11]>

Same as [`AssetResolver::get`][17] but resolves the custom protocol scheme based on a parameter.

  * `use_https_scheme`: If `true` when using [`Pattern::Isolation`][18], the csp header will contain `https://tauri.localhost` instead of `http://tauri.localhost`



[Source][19]

#### pub fn iter(&self) -> [Box][20]<AssetsIter<'_>>

Iterate on all assets.

## Trait Implementations§

[Source][21]§

### impl<R: [Clone][22] \+ [Runtime][5]> [Clone][22] for [AssetResolver][7]<R>

[Source][21]§

#### fn [clone][23](&self) -> [AssetResolver][7]<R>

Returns a duplicate of the value. [Read more][23]

1.0.0 · [Source][24]§

#### fn [clone_from][25](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][25]

[Source][21]§

### impl<R: [Debug][26] \+ [Runtime][5]> [Debug][26] for [AssetResolver][7]<R>

[Source][21]§

#### fn [fmt][27](&self, f: &mut [Formatter][28]<'_>) -> [Result][29]

Formats the value using the given formatter. [Read more][27]

## Auto Trait Implementations§

§

### impl<R> [Freeze][30] for [AssetResolver][7]<R>

§

### impl<R> ![RefUnwindSafe][31] for [AssetResolver][7]<R>

§

### impl<R> [Send][32] for [AssetResolver][7]<R>

§

### impl<R> [Sync][33] for [AssetResolver][7]<R>

§

### impl<R> [Unpin][34] for [AssetResolver][7]<R>

§

### impl<R> ![UnwindSafe][35] for [AssetResolver][7]<R>

## Blanket Implementations§

[Source][36]§

### impl<T> [Any][37] for T

where T: 'static + ?[Sized][38],

[Source][39]§

#### fn [type_id][40](&self) -> [TypeId][41]

Gets the `TypeId` of `self`. [Read more][40]

[Source][42]§

### impl<T> [Borrow][43]<T> for T

where T: ?[Sized][38],

[Source][44]§

#### fn [borrow][45](&self) -> [&T][46]

Immutably borrows from an owned value. [Read more][45]

[Source][47]§

### impl<T> [BorrowMut][48]<T> for T

where T: ?[Sized][38],

[Source][49]§

#### fn [borrow_mut][50](&mut self) -> [&mut T][46]

Mutably borrows from an owned value. [Read more][50]

[Source][51]§

### impl<T> [CloneToUninit][52] for T

where T: [Clone][22],

[Source][53]§

#### unsafe fn [clone_to_uninit][54](&self, dest: [*mut ][55][u8][56])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][54]

[Source][57]§

### impl<T> [From][58]<T> for T

[Source][59]§

#### fn [from][60](t: T) -> T

Returns the argument unchanged.

[Source][61]§

### impl<T, U> [Into][62]<U> for T

where U: [From][58]<T>,

[Source][63]§

#### fn [into][64](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][58]<T> for U` chooses to do.

[Source][65]§

### impl<T> [ToOwned][66] for T

where T: [Clone][22],

[Source][67]§

#### type [Owned][68] = T

The resulting type after obtaining ownership.

[Source][69]§

#### fn [to_owned][70](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][70]

[Source][71]§

#### fn [clone_into][72](&self, target: [&mut T][46])

Uses borrowed data to replace owned data, usually by cloning. [Read more][72]

[Source][73]§

### impl<T, U> [TryFrom][74]<U> for T

where U: [Into][62]<T>,

[Source][75]§

#### type [Error][76] = [Infallible][77]

The type returned in the event of a conversion error.

[Source][78]§

#### fn [try_from][79](value: U) -> [Result][80]<T, <T as [TryFrom][74]<U>>::[Error][81]>

Performs the conversion.

[Source][82]§

### impl<T, U> [TryInto][83]<U> for T

where U: [TryFrom][74]<T>,

[Source][84]§

#### type [Error][85] = <U as [TryFrom][74]<T>>::[Error][81]

The type returned in the event of a conversion error.

[Source][86]§

#### fn [try_into][87](self) -> [Result][80]<U, <U as [TryFrom][74]<T>>::[Error][81]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][26] \+ [Clone][22] \+ [Send][32] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/app.rs.html#270-272
   [5]: trait.Runtime.html (trait tauri::Runtime)
   [6]: ../src/tauri/app.rs.html#274-337
   [7]: struct.AssetResolver.html (struct tauri::AssetResolver)
   [8]: ../src/tauri/app.rs.html#287-294
   [9]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [10]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [11]: struct.Asset.html (struct tauri::Asset)
   [12]: struct.AssetResolver.html#method.get_for_scheme (method tauri::AssetResolver::get_for_scheme)
   [13]: https://v2.tauri.app/reference/config/#frontenddist
   [14]: https://v2.tauri.app/reference/config/#devurl
   [15]: ../src/tauri/app.rs.html#300-331
   [16]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [17]: struct.AssetResolver.html#method.get (method tauri::AssetResolver::get)
   [18]: crate::Pattern::Isolation
   [19]: ../src/tauri/app.rs.html#334-336
   [20]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [21]: ../src/tauri/app.rs.html#269
   [22]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [23]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [24]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [25]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [26]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [27]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [28]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [29]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [30]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [31]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [32]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [33]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [34]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [35]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [36]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [37]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [38]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [39]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [40]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [41]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [42]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [43]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [44]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [45]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [46]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [47]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [48]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [49]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [50]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [51]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [52]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [54]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [55]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [56]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [57]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [58]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [59]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [60]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [61]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [62]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [63]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [65]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [66]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [67]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [68]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [69]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [70]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [71]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [72]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [73]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [74]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [75]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [76]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [77]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [78]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [79]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [80]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [81]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [82]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [83]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [84]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [85]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [86]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [87]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

