## InvokeMessage

[![logo][1]][2]

## [tauri][2]2.10.3

## InvokeMessage

### Methods

  * command
  * headers
  * payload
  * state
  * state_ref
  * webview
  * webview_ref



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



## [In tauri::ipc][3]

[tauri][4]::[ipc][3]

# Struct InvokeMessage Copy item path

[Source][5]
[code] 
    pub struct InvokeMessage<R: [Runtime][6] = [Wry][7]> { /* private fields */ }
[/code]

Expand description

An invoke message.

## Implementations§

[Source][8]§

### impl<R: [Runtime][6]> [InvokeMessage][9]<R>

[Source][10]

#### pub fn command(&self) -> &[str][11]

The invoke command.

[Source][12]

#### pub fn webview(&self) -> [Webview][13]<R>

The webview that received the invoke.

[Source][14]

#### pub fn webview_ref(&self) -> &[Webview][13]<R>

A reference to webview that received the invoke.

[Source][15]

#### pub fn payload(&self) -> &[InvokeBody][16]

A reference to the payload the invoke received.

[Source][17]

#### pub fn state(&self) -> [Arc][18]<[StateManager][19]>

The state manager associated with the application

[Source][20]

#### pub fn state_ref(&self) -> &[StateManager][19]

A reference to the state manager associated with application.

[Source][21]

#### pub fn headers(&self) -> &HeaderMap

The request headers.

## Trait Implementations§

[Source][22]§

### impl<R: [Runtime][6]> [Clone][23] for [InvokeMessage][9]<R>

[Source][24]§

#### fn [clone][25](&self) -> Self

Returns a duplicate of the value. [Read more][25]

1.0.0 · [Source][26]§

#### fn [clone_from][27](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][27]

[Source][28]§

### impl<R: [Debug][29] \+ [Runtime][6]> [Debug][29] for [InvokeMessage][9]<R>

[Source][28]§

#### fn [fmt][30](&self, f: &mut [Formatter][31]<'_>) -> [Result][32]

Formats the value using the given formatter. [Read more][30]

## Auto Trait Implementations§

§

### impl<R> [Freeze][33] for [InvokeMessage][9]<R>

where <R as Runtime<[EventLoopMessage][34]>>::WebviewDispatcher: [Freeze][33], <R as Runtime<[EventLoopMessage][34]>>::Handle: [Freeze][33],

§

### impl<R = Wry<[EventLoopMessage][34]>> ![RefUnwindSafe][35] for [InvokeMessage][9]<R>

§

### impl<R> [Send][36] for [InvokeMessage][9]<R>

§

### impl<R> [Sync][37] for [InvokeMessage][9]<R>

§

### impl<R> [Unpin][38] for [InvokeMessage][9]<R>

where <R as Runtime<[EventLoopMessage][34]>>::WebviewDispatcher: [Unpin][38], <R as Runtime<[EventLoopMessage][34]>>::Handle: [Unpin][38],

§

### impl<R = Wry<[EventLoopMessage][34]>> ![UnwindSafe][39] for [InvokeMessage][9]<R>

## Blanket Implementations§

[Source][40]§

### impl<T> [Any][41] for T

where T: 'static + ?[Sized][42],

[Source][43]§

#### fn [type_id][44](&self) -> [TypeId][45]

Gets the `TypeId` of `self`. [Read more][44]

[Source][46]§

### impl<T> [Borrow][47]<T> for T

where T: ?[Sized][42],

[Source][48]§

#### fn [borrow][49](&self) -> [&T][50]

Immutably borrows from an owned value. [Read more][49]

[Source][51]§

### impl<T> [BorrowMut][52]<T> for T

where T: ?[Sized][42],

[Source][53]§

#### fn [borrow_mut][54](&mut self) -> [&mut T][50]

Mutably borrows from an owned value. [Read more][54]

[Source][55]§

### impl<T> [CloneToUninit][56] for T

where T: [Clone][23],

[Source][57]§

#### unsafe fn [clone_to_uninit][58](&self, dest: [*mut ][59][u8][60])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][58]

[Source][61]§

### impl<T> [From][62]<T> for T

[Source][63]§

#### fn [from][64](t: T) -> T

Returns the argument unchanged.

[Source][65]§

### impl<T, U> [Into][66]<U> for T

where U: [From][62]<T>,

[Source][67]§

#### fn [into][68](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][62]<T> for U` chooses to do.

[Source][69]§

### impl<T> [ToOwned][70] for T

where T: [Clone][23],

[Source][71]§

#### type [Owned][72] = T

The resulting type after obtaining ownership.

[Source][73]§

#### fn [to_owned][74](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][74]

[Source][75]§

#### fn [clone_into][76](&self, target: [&mut T][50])

Uses borrowed data to replace owned data, usually by cloning. [Read more][76]

[Source][77]§

### impl<T, U> [TryFrom][78]<U> for T

where U: [Into][66]<T>,

[Source][79]§

#### type [Error][80] = [Infallible][81]

The type returned in the event of a conversion error.

[Source][82]§

#### fn [try_from][83](value: U) -> [Result][84]<T, <T as [TryFrom][78]<U>>::[Error][85]>

Performs the conversion.

[Source][86]§

### impl<T, U> [TryInto][87]<U> for T

where U: [TryFrom][78]<T>,

[Source][88]§

#### type [Error][89] = <U as [TryFrom][78]<T>>::[Error][85]

The type returned in the event of a conversion error.

[Source][90]§

#### fn [try_into][91](self) -> [Result][84]<U, <U as [TryFrom][78]<T>>::[Error][85]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][29] \+ [Clone][23] \+ [Send][36] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/ipc/mod.rs.html#498-509
   [6]: ../trait.Runtime.html (trait tauri::Runtime)
   [7]: ../type.Wry.html (type tauri::Wry)
   [8]: ../../src/tauri/ipc/mod.rs.html#523-582
   [9]: struct.InvokeMessage.html (struct tauri::ipc::InvokeMessage)
   [10]: ../../src/tauri/ipc/mod.rs.html#543-545
   [11]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [12]: ../../src/tauri/ipc/mod.rs.html#549-551
   [13]: ../webview/struct.Webview.html (struct tauri::webview::Webview)
   [14]: ../../src/tauri/ipc/mod.rs.html#555-557
   [15]: ../../src/tauri/ipc/mod.rs.html#561-563
   [16]: enum.InvokeBody.html (enum tauri::ipc::InvokeBody)
   [17]: ../../src/tauri/ipc/mod.rs.html#567-569
   [18]: https://doc.rust-lang.org/1.94.1/alloc/sync/struct.Arc.html (struct alloc::sync::Arc)
   [19]: ../struct.StateManager.html (struct tauri::StateManager)
   [20]: ../../src/tauri/ipc/mod.rs.html#573-575
   [21]: ../../src/tauri/ipc/mod.rs.html#579-581
   [22]: ../../src/tauri/ipc/mod.rs.html#511-521
   [23]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [24]: ../../src/tauri/ipc/mod.rs.html#512-520
   [25]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [26]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [27]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [28]: ../../src/tauri/ipc/mod.rs.html#497
   [29]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [30]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [31]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [32]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [33]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [34]: ../enum.EventLoopMessage.html (enum tauri::EventLoopMessage)
   [35]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [36]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [37]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [38]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [39]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [40]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [41]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [42]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [44]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [45]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [47]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [49]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [50]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [51]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [52]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [54]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [55]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [56]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [57]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [58]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [59]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [60]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [61]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [62]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [63]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [65]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [67]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [69]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [70]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [71]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [72]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [73]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [74]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [75]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [76]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [77]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [78]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [79]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [80]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [81]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [82]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [83]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [84]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [85]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [86]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [87]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [88]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [89]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [90]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [91]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

