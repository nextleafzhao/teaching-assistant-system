## TauriPlugin

[![logo][1]][2]

## [tauri][2]2.10.3

## TauriPlugin

### Trait Implementations

  * Drop
  * Plugin<R>



### Auto Trait Implementations

  * !RefUnwindSafe
  * !Sync
  * !UnwindSafe
  * Freeze
  * Send
  * Unpin



### Blanket Implementations

  * Any
  * Borrow<T>
  * BorrowMut<T>
  * From<T>
  * Into<U>
  * TryFrom<U>
  * TryInto<U>



## [In tauri::plugin][3]

[tauri][4]::[plugin][3]

# Struct TauriPlugin Copy item path

[Source][5]
[code] 
    pub struct TauriPlugin<R: [Runtime][6], C: [DeserializeOwned][7] = [()][8]> { /* private fields */ }
[/code]

Expand description

Plugin struct that is returned by the [`Builder`][9]. Should only be constructed through the builder.

## Trait Implementations§

[Source][10]§

### impl<R: [Runtime][6], C: [DeserializeOwned][7]> [Drop][11] for [TauriPlugin][12]<R, C>

[Source][13]§

#### fn [drop][14](&mut self)

Executes the destructor for this type. [Read more][14]

[Source][15]§

### impl<R: [Runtime][6], C: [DeserializeOwned][7]> [Plugin][16]<R> for [TauriPlugin][12]<R, C>

[Source][17]§

#### fn [name][18](&self) -> &'static [str][19]

The plugin name. Used as key on the plugin config object.

[Source][20]§

#### fn [initialize][21]( &mut self, app: &[AppHandle][22]<R>, config: [JsonValue][23], ) -> [Result][24]<[()][8], [Box][25]<dyn [Error][26]>>

Initializes the plugin.

[Source][27]§

#### fn [initialization_script][28](&self) -> [Option][29]<[String][30]>

Add the provided JavaScript to a list of scripts that should be run after the global object has been created, but before the HTML document has been parsed and before any other script included by the HTML document is run. [Read more][28]

[Source][31]§

#### fn [initialization_script_2][32](&self) -> [Option][29]<InitializationScript>

Same as [`Plugin::initialization_script`][33] but returns an [`InitializationScript`] instead We plan to replace [`Plugin::initialization_script`][33] with this signature in v3

[Source][34]§

#### fn [window_created][35](&mut self, window: [Window][36]<R>)

Callback invoked when the window is created.

[Source][37]§

#### fn [webview_created][38](&mut self, webview: [Webview][39]<R>)

Callback invoked when the webview is created.

[Source][40]§

#### fn [on_navigation][41](&mut self, webview: &[Webview][39]<R>, url: &[Url][42]) -> [bool][43]

Callback invoked when webview tries to navigate to the given Url. Returning false cancels navigation.

[Source][44]§

#### fn [on_page_load][45](&mut self, webview: &[Webview][39]<R>, payload: &[PageLoadPayload][46]<'_>)

Callback invoked when the webview performs a navigation to a page.

[Source][47]§

#### fn [on_event][48](&mut self, app: &[AppHandle][22]<R>, event: &[RunEvent][49])

Callback invoked when the event loop receives a new event.

[Source][50]§

#### fn [extend_api][51](&mut self, invoke: [Invoke][52]<R>) -> [bool][43]

Extend commands to [`crate::Builder::invoke_handler`][53].

## Auto Trait Implementations§

§

### impl<R, C> [Freeze][54] for [TauriPlugin][12]<R, C>

where <R as Runtime<[EventLoopMessage][55]>>::Handle: [Freeze][54],

§

### impl<R, C = [()][8]> ![RefUnwindSafe][56] for [TauriPlugin][12]<R, C>

§

### impl<R, C> [Send][57] for [TauriPlugin][12]<R, C>

§

### impl<R, C = [()][8]> ![Sync][58] for [TauriPlugin][12]<R, C>

§

### impl<R, C> [Unpin][59] for [TauriPlugin][12]<R, C>

where <R as Runtime<[EventLoopMessage][55]>>::Handle: [Unpin][59],

§

### impl<R, C = [()][8]> ![UnwindSafe][60] for [TauriPlugin][12]<R, C>

## Blanket Implementations§

[Source][61]§

### impl<T> [Any][62] for T

where T: 'static + ?[Sized][63],

[Source][64]§

#### fn [type_id][65](&self) -> [TypeId][66]

Gets the `TypeId` of `self`. [Read more][65]

[Source][67]§

### impl<T> [Borrow][68]<T> for T

where T: ?[Sized][63],

[Source][69]§

#### fn [borrow][70](&self) -> [&T][71]

Immutably borrows from an owned value. [Read more][70]

[Source][72]§

### impl<T> [BorrowMut][73]<T> for T

where T: ?[Sized][63],

[Source][74]§

#### fn [borrow_mut][75](&mut self) -> [&mut T][71]

Mutably borrows from an owned value. [Read more][75]

[Source][76]§

### impl<T> [From][77]<T> for T

[Source][78]§

#### fn [from][79](t: T) -> T

Returns the argument unchanged.

[Source][80]§

### impl<T, U> [Into][81]<U> for T

where U: [From][77]<T>,

[Source][82]§

#### fn [into][83](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][77]<T> for U` chooses to do.

[Source][84]§

### impl<T, U> [TryFrom][85]<U> for T

where U: [Into][81]<T>,

[Source][86]§

#### type [Error][87] = [Infallible][88]

The type returned in the event of a conversion error.

[Source][89]§

#### fn [try_from][90](value: U) -> [Result][24]<T, <T as [TryFrom][85]<U>>::[Error][91]>

Performs the conversion.

[Source][92]§

### impl<T, U> [TryInto][93]<U> for T

where U: [TryFrom][85]<T>,

[Source][94]§

#### type [Error][95] = <U as [TryFrom][85]<T>>::[Error][91]

The type returned in the event of a conversion error.

[Source][96]§

#### fn [try_into][97](self) -> [Result][24]<U, <U as [TryFrom][85]<T>>::[Error][91]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/plugin.rs.html#759-772
   [6]: ../trait.Runtime.html (trait tauri::Runtime)
   [7]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)
   [8]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [9]: struct.Builder.html (struct tauri::plugin::Builder)
   [10]: ../../src/tauri/plugin.rs.html#774-780
   [11]: https://doc.rust-lang.org/1.94.1/core/ops/drop/trait.Drop.html (trait core::ops::drop::Drop)
   [12]: struct.TauriPlugin.html (struct tauri::plugin::TauriPlugin)
   [13]: ../../src/tauri/plugin.rs.html#775-779
   [14]: https://doc.rust-lang.org/1.94.1/core/ops/drop/trait.Drop.html#tymethod.drop
   [15]: ../../src/tauri/plugin.rs.html#782-853
   [16]: trait.Plugin.html (trait tauri::plugin::Plugin)
   [17]: ../../src/tauri/plugin.rs.html#783-785
   [18]: trait.Plugin.html#tymethod.name
   [19]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [20]: ../../src/tauri/plugin.rs.html#787-817
   [21]: trait.Plugin.html#method.initialize
   [22]: ../struct.AppHandle.html (struct tauri::AppHandle)
   [23]: https://docs.rs/serde_json/1.0.149/serde_json/value/enum.Value.html (enum serde_json::value::Value)
   [24]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [25]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [26]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [27]: ../../src/tauri/plugin.rs.html#819-824
   [28]: trait.Plugin.html#method.initialization_script
   [29]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [30]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [31]: ../../src/tauri/plugin.rs.html#826-828
   [32]: trait.Plugin.html#method.initialization_script_2
   [33]: trait.Plugin.html#method.initialization_script (method tauri::plugin::Plugin::initialization_script)
   [34]: ../../src/tauri/plugin.rs.html#830-832
   [35]: trait.Plugin.html#method.window_created
   [36]: ../window/struct.Window.html (struct tauri::window::Window)
   [37]: ../../src/tauri/plugin.rs.html#834-836
   [38]: trait.Plugin.html#method.webview_created
   [39]: ../webview/struct.Webview.html (struct tauri::webview::Webview)
   [40]: ../../src/tauri/plugin.rs.html#838-840
   [41]: trait.Plugin.html#method.on_navigation
   [42]: ../struct.Url.html (struct tauri::Url)
   [43]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [44]: ../../src/tauri/plugin.rs.html#842-844
   [45]: trait.Plugin.html#method.on_page_load
   [46]: ../webview/struct.PageLoadPayload.html (struct tauri::webview::PageLoadPayload)
   [47]: ../../src/tauri/plugin.rs.html#846-848
   [48]: trait.Plugin.html#method.on_event
   [49]: ../enum.RunEvent.html (enum tauri::RunEvent)
   [50]: ../../src/tauri/plugin.rs.html#850-852
   [51]: trait.Plugin.html#method.extend_api
   [52]: ../ipc/struct.Invoke.html (struct tauri::ipc::Invoke)
   [53]: ../struct.Builder.html#method.invoke_handler (method tauri::Builder::invoke_handler)
   [54]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [55]: ../enum.EventLoopMessage.html (enum tauri::EventLoopMessage)
   [56]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [57]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [58]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [59]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [60]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [61]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [62]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [63]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [64]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [65]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [66]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [67]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [68]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [69]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [70]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [71]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [72]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [73]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [74]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [75]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [76]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [77]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [78]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [79]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [80]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [81]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [82]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [83]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [84]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [85]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [86]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [87]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [88]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [89]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [90]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [91]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [92]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [93]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [94]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [95]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [96]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [97]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

