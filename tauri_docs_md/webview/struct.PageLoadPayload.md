## PageLoadPayload

[![logo][1]][2]

## [tauri][2]2.10.3

## PageLoadPayload

### Methods

  * event
  * url



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



## [In tauri::webview][3]

[tauri][4]::[webview][3]

# Struct PageLoadPayload Copy item path

[Source][5]
[code] 
    pub struct PageLoadPayload<'a> { /* private fields */ }
[/code]

Expand description

The payload for the [`WebviewBuilder::on_page_load`] hook.

## Implementations§

[Source][6]§

### impl<'a> [PageLoadPayload][7]<'a>

[Source][8]

#### pub fn url(&self) -> &'a [Url][9]

The page URL.

[Source][10]

#### pub fn event(&self) -> [PageLoadEvent][11]

The page load event.

## Trait Implementations§

[Source][12]§

### impl<'a> [Clone][13] for [PageLoadPayload][7]<'a>

[Source][12]§

#### fn [clone][14](&self) -> [PageLoadPayload][7]<'a>

Returns a duplicate of the value. [Read more][14]

1.0.0 · [Source][15]§

#### fn [clone_from][16](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][16]

[Source][12]§

### impl<'a> [Debug][17] for [PageLoadPayload][7]<'a>

[Source][12]§

#### fn [fmt][18](&self, f: &mut [Formatter][19]<'_>) -> [Result][20]

Formats the value using the given formatter. [Read more][18]

## Auto Trait Implementations§

§

### impl<'a> [Freeze][21] for [PageLoadPayload][7]<'a>

§

### impl<'a> [RefUnwindSafe][22] for [PageLoadPayload][7]<'a>

§

### impl<'a> [Send][23] for [PageLoadPayload][7]<'a>

§

### impl<'a> [Sync][24] for [PageLoadPayload][7]<'a>

§

### impl<'a> [Unpin][25] for [PageLoadPayload][7]<'a>

§

### impl<'a> [UnwindSafe][26] for [PageLoadPayload][7]<'a>

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

where T: [Clone][13],

[Source][44]§

#### unsafe fn [clone_to_uninit][45](&self, dest: [*mut ][46][u8][47])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][45]

[Source][48]§

### impl<T> [From][49]<T> for T

[Source][50]§

#### fn [from][51](t: T) -> T

Returns the argument unchanged.

[Source][52]§

### impl<T, U> [Into][53]<U> for T

where U: [From][49]<T>,

[Source][54]§

#### fn [into][55](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][49]<T> for U` chooses to do.

[Source][56]§

### impl<T> [ToOwned][57] for T

where T: [Clone][13],

[Source][58]§

#### type [Owned][59] = T

The resulting type after obtaining ownership.

[Source][60]§

#### fn [to_owned][61](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][61]

[Source][62]§

#### fn [clone_into][63](&self, target: [&mut T][37])

Uses borrowed data to replace owned data, usually by cloning. [Read more][63]

[Source][64]§

### impl<T, U> [TryFrom][65]<U> for T

where U: [Into][53]<T>,

[Source][66]§

#### type [Error][67] = [Infallible][68]

The type returned in the event of a conversion error.

[Source][69]§

#### fn [try_from][70](value: U) -> [Result][71]<T, <T as [TryFrom][65]<U>>::[Error][72]>

Performs the conversion.

[Source][73]§

### impl<T, U> [TryInto][74]<U> for T

where U: [TryFrom][65]<T>,

[Source][75]§

#### type [Error][76] = <U as [TryFrom][65]<T>>::[Error][72]

The type returned in the event of a conversion error.

[Source][77]§

#### fn [try_into][78](self) -> [Result][71]<U, <U as [TryFrom][65]<T>>::[Error][72]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][17] \+ [Clone][13] \+ [Send][23] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/webview/mod.rs.html#108-111
   [6]: ../../src/tauri/webview/mod.rs.html#113-123
   [7]: struct.PageLoadPayload.html (struct tauri::webview::PageLoadPayload)
   [8]: ../../src/tauri/webview/mod.rs.html#115-117
   [9]: ../struct.Url.html (struct tauri::Url)
   [10]: ../../src/tauri/webview/mod.rs.html#120-122
   [11]: enum.PageLoadEvent.html (enum tauri::webview::PageLoadEvent)
   [12]: ../../src/tauri/webview/mod.rs.html#107
   [13]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [14]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [15]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [16]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [17]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [18]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [19]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [20]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
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
   [49]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [50]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [51]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [52]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [53]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [54]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [55]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [56]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [57]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [58]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [59]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [60]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [61]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [62]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [63]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [64]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [65]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [66]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [67]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [69]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [71]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [72]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [73]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [74]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [75]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [76]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [77]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [78]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

