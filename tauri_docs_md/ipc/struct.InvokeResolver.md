## InvokeResolver

[![logo][1]][2]

## [tauri][2]2.10.3

## InvokeResolver

### Methods

  * invoke_error
  * reject
  * resolve
  * respond
  * respond_async
  * respond_async_serialized
  * return_task



### Trait Implementations

  * Clone



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



## [In tauri::ipc][3]

[tauri][4]::[ipc][3]

# Struct InvokeResolver Copy item path

[Source][5]
[code] 
    pub struct InvokeResolver<R: [Runtime][6] = [Wry][7]> { /* private fields */ }
[/code]

Expand description

Resolver of a invoke message.

## Implementations§

[Source][8]§

### impl<R: [Runtime][6]> [InvokeResolver][9]<R>

[Source][10]

#### pub fn respond_async<T, F>(self, task: F)

where T: [IpcResponse][11], F: [Future][12]<Output = [Result][13]<T, [InvokeError][14]>> \+ [Send][15] \+ 'static,

Reply to the invoke promise with an async task.

[Source][16]

#### pub fn respond_async_serialized<F>(self, task: F)

where F: [Future][12]<Output = [Result][13]<[InvokeResponseBody][17], [InvokeError][14]>> \+ [Send][15] \+ 'static,

Reply to the invoke promise with an async task which is already serialized.

[Source][18]

#### pub fn respond<T: [IpcResponse][11]>(self, value: [Result][13]<T, [InvokeError][14]>)

Reply to the invoke promise with a serializable value.

[Source][19]

#### pub fn resolve<T: [IpcResponse][11]>(self, value: T)

Resolve the invoke promise with a value.

[Source][20]

#### pub fn reject<T: [Serialize][21]>(self, value: T)

Reject the invoke promise with a value.

[Source][22]

#### pub fn invoke_error(self, error: [InvokeError][14])

Reject the invoke promise with an [`InvokeError`][14].

[Source][23]

#### pub async fn return_task<T, F>( webview: [Webview][24]<R>, responder: [Arc][25]<[Mutex][26]<[Option][27]<[Box][28]<[OwnedInvokeResponder][29]<R>>>>>, task: F, cmd: [String][30], success_callback: [CallbackFn][31], error_callback: [CallbackFn][31], )

where T: [IpcResponse][11], F: [Future][12]<Output = [Result][13]<T, [InvokeError][14]>> \+ [Send][15] \+ 'static,

Asynchronously executes the given task and evaluates its Result to the JS promise described by the `success_callback` and `error_callback` function names.

If the Result `is_ok()`, the callback will be the `success_callback` function name and the argument will be the Ok value. If the Result `is_err()`, the callback will be the `error_callback` function name and the argument will be the Err value.

## Trait Implementations§

[Source][32]§

### impl<R: [Runtime][6]> [Clone][33] for [InvokeResolver][9]<R>

[Source][34]§

#### fn [clone][35](&self) -> Self

Returns a duplicate of the value. [Read more][35]

1.0.0 · [Source][36]§

#### fn [clone_from][37](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][37]

## Auto Trait Implementations§

§

### impl<R> [Freeze][38] for [InvokeResolver][9]<R>

where <R as Runtime<[EventLoopMessage][39]>>::WebviewDispatcher: [Freeze][38], <R as Runtime<[EventLoopMessage][39]>>::Handle: [Freeze][38],

§

### impl<R = Wry<[EventLoopMessage][39]>> ![RefUnwindSafe][40] for [InvokeResolver][9]<R>

§

### impl<R> [Send][15] for [InvokeResolver][9]<R>

§

### impl<R> [Sync][41] for [InvokeResolver][9]<R>

§

### impl<R> [Unpin][42] for [InvokeResolver][9]<R>

where <R as Runtime<[EventLoopMessage][39]>>::WebviewDispatcher: [Unpin][42], <R as Runtime<[EventLoopMessage][39]>>::Handle: [Unpin][42],

§

### impl<R = Wry<[EventLoopMessage][39]>> ![UnwindSafe][43] for [InvokeResolver][9]<R>

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

### impl<T> [CloneToUninit][60] for T

where T: [Clone][33],

[Source][61]§

#### unsafe fn [clone_to_uninit][62](&self, dest: [*mut ][63][u8][64])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][62]

[Source][65]§

### impl<T> [From][66]<T> for T

[Source][67]§

#### fn [from][68](t: T) -> T

Returns the argument unchanged.

[Source][69]§

### impl<T, U> [Into][70]<U> for T

where U: [From][66]<T>,

[Source][71]§

#### fn [into][72](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][66]<T> for U` chooses to do.

[Source][73]§

### impl<T> [ToOwned][74] for T

where T: [Clone][33],

[Source][75]§

#### type [Owned][76] = T

The resulting type after obtaining ownership.

[Source][77]§

#### fn [to_owned][78](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][78]

[Source][79]§

#### fn [clone_into][80](&self, target: [&mut T][54])

Uses borrowed data to replace owned data, usually by cloning. [Read more][80]

[Source][81]§

### impl<T, U> [TryFrom][82]<U> for T

where U: [Into][70]<T>,

[Source][83]§

#### type [Error][84] = [Infallible][85]

The type returned in the event of a conversion error.

[Source][86]§

#### fn [try_from][87](value: U) -> [Result][13]<T, <T as [TryFrom][82]<U>>::[Error][88]>

Performs the conversion.

[Source][89]§

### impl<T, U> [TryInto][90]<U> for T

where U: [TryFrom][82]<T>,

[Source][91]§

#### type [Error][92] = <U as [TryFrom][82]<T>>::[Error][88]

The type returned in the event of a conversion error.

[Source][93]§

#### fn [try_into][94](self) -> [Result][13]<U, <U as [TryFrom][82]<T>>::[Error][88]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/ipc/mod.rs.html#286-292
   [6]: ../trait.Runtime.html (trait tauri::Runtime)
   [7]: ../type.Wry.html (type tauri::Wry)
   [8]: ../../src/tauri/ipc/mod.rs.html#306-493
   [9]: struct.InvokeResolver.html (struct tauri::ipc::InvokeResolver)
   [10]: ../../src/tauri/ipc/mod.rs.html#324-340
   [11]: trait.IpcResponse.html (trait tauri::ipc::IpcResponse)
   [12]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [13]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [14]: struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [15]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [16]: ../../src/tauri/ipc/mod.rs.html#343-357
   [17]: enum.InvokeResponseBody.html (enum tauri::ipc::InvokeResponseBody)
   [18]: ../../src/tauri/ipc/mod.rs.html#392-401
   [19]: ../../src/tauri/ipc/mod.rs.html#404-406
   [20]: ../../src/tauri/ipc/mod.rs.html#409-418
   [21]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [22]: ../../src/tauri/ipc/mod.rs.html#421-430
   [23]: ../../src/tauri/ipc/mod.rs.html#437-457
   [24]: ../webview/struct.Webview.html (struct tauri::webview::Webview)
   [25]: https://doc.rust-lang.org/1.94.1/alloc/sync/struct.Arc.html (struct alloc::sync::Arc)
   [26]: https://doc.rust-lang.org/1.94.1/std/sync/poison/mutex/struct.Mutex.html (struct std::sync::poison::mutex::Mutex)
   [27]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [28]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [29]: type.OwnedInvokeResponder.html (type tauri::ipc::OwnedInvokeResponder)
   [30]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [31]: struct.CallbackFn.html (struct tauri::ipc::CallbackFn)
   [32]: ../../src/tauri/ipc/mod.rs.html#294-304
   [33]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [34]: ../../src/tauri/ipc/mod.rs.html#295-303
   [35]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [36]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [37]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [38]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [39]: ../enum.EventLoopMessage.html (enum tauri::EventLoopMessage)
   [40]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
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
   [59]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [60]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [61]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [62]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [63]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [64]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [65]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [67]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [69]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [71]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [72]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [73]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [74]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [75]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [76]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [77]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [78]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [79]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [80]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [81]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [82]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [83]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [84]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [85]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [86]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [87]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [88]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [89]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [90]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [91]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [92]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [93]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [94]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

