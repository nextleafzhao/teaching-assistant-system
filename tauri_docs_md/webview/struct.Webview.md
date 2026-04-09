## Webview

[![logo][1]][2]

## [tauri][2]2.10.3

## Webview

### Methods

  * bounds
  * clear_all_browsing_data
  * close
  * close_devtools
  * cookies
  * cookies_for_url
  * cursor_position
  * delete_cookie
  * eval
  * hide
  * is_devtools_open
  * label
  * navigate
  * on_message
  * on_webview_event
  * open_devtools
  * position
  * print
  * reload
  * reparent
  * resolve_command_scope
  * run_on_main_thread
  * set_auto_resize
  * set_background_color
  * set_bounds
  * set_cookie
  * set_focus
  * set_position
  * set_size
  * set_zoom
  * show
  * size
  * url
  * window
  * window_ref
  * with_webview



### Trait Implementations

  * AsRef<Webview<R>>
  * Clone
  * CommandArg<'de, R>
  * Debug
  * Emitter<R>
  * Eq
  * Hash
  * Listener<R>
  * Manager<R>
  * PartialEq



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



## [In tauri::webview][3]

[tauri][4]::[webview][3]

# Struct Webview Copy item path

[Source][5]
[code] 
    pub struct Webview<R: [Runtime][6] = [Wry][7]> { /* private fields */ }
[/code]

Expand description

Webview.

## Implementations§

[Source][8]§

### impl<R: [Runtime][6]> [Webview][9]<R>

Base webview functions.

[Source][10]

#### pub fn run_on_main_thread<F: [FnOnce][11]() + [Send][12] \+ 'static>( &self, f: F, ) -> [Result][13]<[()][14]>

Runs the given closure on the main thread.

[Source][15]

#### pub fn label(&self) -> &[str][16]

The webview label.

[Source][17]

#### pub fn on_webview_event<F: [Fn][18](&[WebviewEvent][19]) + [Send][12] \+ 'static>(&self, f: F)

Registers a webview event listener.

[Source][20]

#### pub fn resolve_command_scope<T: [ScopeObject][21]>( &self, plugin: &[str][16], command: &[str][16], ) -> [Result][13]<[Option][22]<[ResolvedScope][23]<T>>>

Resolves the given command scope for this webview on the currently loaded URL.

If the command is not allowed, returns None.

If the scope cannot be deserialized to the given type, an error is returned.

In a command context this can be directly resolved from the command arguments via [CommandScope][24]:
[code] 
    use tauri::ipc::CommandScope;
    
    #[derive(Debug, serde::Deserialize)]
    struct ScopeType {
      some_value: String,
    }
    #[tauri::command]
    fn my_command(scope: CommandScope<ScopeType>) {
      // check scope
    }
[/code]

##### §Examples
[code] 
    use tauri::Manager;
    
    #[derive(Debug, serde::Deserialize)]
    struct ScopeType {
      some_value: String,
    }
    
    tauri::Builder::default()
      .setup(|app| {
        let webview = app.get_webview_window("main").unwrap();
        let scope = webview.resolve_command_scope::<ScopeType>("my-plugin", "read");
        Ok(())
      });
[/code]

[Source][25]§

### impl<R: [Runtime][6]> [Webview][9]<R>

Desktop webview setters and actions.

[Source][26]

#### pub fn print(&self) -> [Result][13]<[()][14]>

Opens the dialog to prints the contents of the webview. Currently only supported on macOS on `wry`. `window.print()` works on all platforms.

[Source][27]

#### pub fn cursor_position(&self) -> [Result][13]<[PhysicalPosition][28]<[f64][29]>>

Get the cursor position relative to the top-left hand corner of the desktop.

Note that the top-left hand corner of the desktop is not necessarily the same as the screen. If the user uses a desktop with multiple monitors, the top-left hand corner of the desktop is the top-left hand corner of the main monitor on Windows and macOS or the top-left of the leftmost monitor on X11.

The coordinates can be negative if the top-left hand corner of the window is outside of the visible screen region.

[Source][30]

#### pub fn close(&self) -> [Result][13]<[()][14]>

Closes this webview.

[Source][31]

#### pub fn set_bounds(&self, bounds: [Rect][32]) -> [Result][13]<[()][14]>

Resizes this webview.

[Source][33]

#### pub fn set_size<S: [Into][34]<[Size][35]>>(&self, size: S) -> [Result][13]<[()][14]>

Resizes this webview.

[Source][36]

#### pub fn set_position<Pos: [Into][34]<[Position][37]>>(&self, position: Pos) -> [Result][13]<[()][14]>

Sets this webviews’s position.

[Source][38]

#### pub fn set_focus(&self) -> [Result][13]<[()][14]>

Focus the webview.

[Source][39]

#### pub fn hide(&self) -> [Result][13]<[()][14]>

Hide the webview.

[Source][40]

#### pub fn show(&self) -> [Result][13]<[()][14]>

Show the webview.

[Source][41]

#### pub fn reparent(&self, window: &[Window][42]<R>) -> [Result][13]<[()][14]>

Move the webview to the given window.

[Source][43]

#### pub fn set_auto_resize(&self, auto_resize: [bool][44]) -> [Result][13]<[()][14]>

Sets whether the webview should automatically grow and shrink its size and position when the parent window resizes.

[Source][45]

#### pub fn bounds(&self) -> [Result][13]<[Rect][32]>

Returns the bounds of the webviews’s client area.

[Source][46]

#### pub fn position(&self) -> [Result][13]<[PhysicalPosition][28]<[i32][47]>>

Returns the webview position.

  * For child webviews, returns the position of the top-left hand corner of the webviews’s client area relative to the top-left hand corner of the parent window.
  * For webview window, returns the inner position of the window.



[Source][48]

#### pub fn size(&self) -> [Result][13]<[PhysicalSize][49]<[u32][50]>>

Returns the physical size of the webviews’s client area.

[Source][51]§

### impl<R: [Runtime][6]> [Webview][9]<R>

Webview APIs.

[Source][52]

#### pub fn window(&self) -> [Window][42]<R>

The window that is hosting this webview.

[Source][53]

#### pub fn window_ref(&self) -> [MutexGuard][54]<'_, [Window][42]<R>>

A reference to the window that is hosting this webview.

[Source][55]

#### pub fn with_webview<F: [FnOnce][11]([PlatformWebview][56]) + [Send][12] \+ 'static>( &self, f: F, ) -> [Result][13]<[()][14]>

Executes a closure, providing it with the webview handle that is specific to the current platform.

The closure is executed on the main thread.

Note that `webview2-com`, `webkit2gtk`, `objc2_web_kit` and similar crates may be updated in minor releases of Tauri. Therefore it’s recommended to pin Tauri to at least a minor version when you’re using `with_webview`.

##### §Examples

[Source][57]

#### pub fn url(&self) -> [Result][13]<[Url][58]>

Returns the current url of the webview.

[Source][59]

#### pub fn navigate(&self, url: [Url][58]) -> [Result][13]<[()][14]>

Navigates the webview to the defined url.

[Source][60]

#### pub fn reload(&self) -> [Result][13]<[()][14]>

Reloads the current page.

[Source][61]

#### pub fn on_message( self, request: [InvokeRequest][62], responder: [Box][63]<[OwnedInvokeResponder][64]<R>>, )

Handles this window receiving an [`InvokeRequest`][62].

[Source][65]

#### pub fn eval(&self, js: impl [Into][34]<[String][66]>) -> [Result][13]<[()][14]>

Evaluates JavaScript on this window.

[Source][67]

#### pub fn open_devtools(&self)

Opens the developer tools window (Web Inspector). The devtools is only enabled on debug builds or with the `devtools` feature flag.

###### §Platform-specific

  * **macOS:** Only supported on macOS 10.15+. This is a private API on macOS, so you cannot use this if your application will be published on the App Store.



##### §Examples

[Source][68]

#### pub fn close_devtools(&self)

Closes the developer tools window (Web Inspector). The devtools is only enabled on debug builds or with the `devtools` feature flag.

###### §Platform-specific

  * **macOS:** Only supported on macOS 10.15+. This is a private API on macOS, so you cannot use this if your application will be published on the App Store.
  * **Windows:** Unsupported.



##### §Examples

[Source][69]

#### pub fn is_devtools_open(&self) -> [bool][44]

Checks if the developer tools window (Web Inspector) is opened. The devtools is only enabled on debug builds or with the `devtools` feature flag.

###### §Platform-specific

  * **macOS:** Only supported on macOS 10.15+. This is a private API on macOS, so you cannot use this if your application will be published on the App Store.
  * **Windows:** Unsupported.



##### §Examples

[Source][70]

#### pub fn set_zoom(&self, scale_factor: [f64][29]) -> [Result][13]<[()][14]>

Set the webview zoom level

###### §Platform-specific:

  * **Android** : Not supported.
  * **macOS** : available on macOS 11+ only.
  * **iOS** : available on iOS 14+ only.



[Source][71]

#### pub fn set_background_color(&self, color: [Option][22]<[Color][72]>) -> [Result][13]<[()][14]>

Specify the webview background color.

###### §Platform-specific:

  * **macOS / iOS** : Not implemented.
  * **Windows** : 
    * On Windows 7, transparency is not supported and the alpha value will be ignored.
    * On Windows higher than 7: translucent colors are not supported so any alpha value other than `0` will be replaced by `255`



[Source][73]

#### pub fn clear_all_browsing_data(&self) -> [Result][13]<[()][14]>

Clear all browsing data for this webview.

[Source][74]

#### pub fn cookies_for_url(&self, url: [Url][58]) -> [Result][13]<[Vec][75]<[Cookie][76]<'static>>>

Returns all cookies in the runtime’s cookie store including HTTP-only and secure cookies.

Note that cookies will only be returned for URLs with an http or https scheme. Cookies set through javascript for local files (such as those served from the tauri://) protocol are not currently supported.

##### §Stability

See [Self::cookies][77].

##### §Known issues

See [Self::cookies][77].

[Source][78]

#### pub fn cookies(&self) -> [Result][13]<[Vec][75]<[Cookie][76]<'static>>>

Returns all cookies in the runtime’s cookie store for all URLs including HTTP-only and secure cookies.

Note that cookies will only be returned for URLs with an http or https scheme. Cookies set through javascript for local files (such as those served from the tauri://) protocol are not currently supported.

##### §Stability

The return value of this function leverages [`tauri_runtime::Cookie`][76] which re-exports the cookie crate. This dependency might receive updates in minor Tauri releases.

##### §Known issues

On Windows, this function deadlocks when used in a synchronous command or event handlers, see [the Webview2 issue][79]. You should use `async` commands and separate threads when reading cookies.

###### §Platform-specific

  * **Android** : Unsupported, always returns an empty [`Vec`][75].



[Source][80]

#### pub fn set_cookie(&self, cookie: [Cookie][76]<'_>) -> [Result][13]<[()][14]>

Set a cookie for the webview.

##### §Stability

See [Self::cookies][77].

[Source][81]

#### pub fn delete_cookie(&self, cookie: [Cookie][76]<'_>) -> [Result][13]<[()][14]>

Delete a cookie for the webview.

##### §Stability

See [Self::cookies][77].

## Trait Implementations§

[Source][82]§

### impl<R: [Runtime][6]> [AsRef][83]<[Webview][9]<R>> for [WebviewWindow][84]<R>

[Source][85]§

#### fn [as_ref][86](&self) -> &[Webview][9]<R>

Converts this type into a shared reference of the (usually inferred) input type.

[Source][87]§

### impl<R: [Runtime][6]> [Clone][88] for [Webview][9]<R>

[Source][89]§

#### fn [clone][90](&self) -> Self

Returns a duplicate of the value. [Read more][90]

1.0.0 · [Source][91]§

#### fn [clone_from][92](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][92]

[Source][93]§

### impl<'de, R: [Runtime][6]> [CommandArg][94]<'de, R> for [Webview][9]<R>

[Source][95]§

#### fn [from_command][96](command: [CommandItem][97]<'de, R>) -> [Result][98]<Self, [InvokeError][99]>

Grabs the [`Webview`][9] from the [`CommandItem`][97]. This will never fail.

[Source][100]§

### impl<R: [Runtime][6]> [Debug][101] for [Webview][9]<R>

[Source][102]§

#### fn [fmt][103](&self, f: &mut [Formatter][104]<'_>) -> [Result][105]

Formats the value using the given formatter. [Read more][103]

[Source][106]§

### impl<R: [Runtime][6]> [Emitter][107]<R> for [Webview][9]<R>

[Source][108]§

#### fn [emit][109]<S: [Serialize][110] \+ [Clone][88]>(&self, event: &[str][16], payload: S) -> [Result][13]<[()][14]>

Emits an event to all [targets][111]. [Read more][109]

[Source][112]§

#### fn [emit_str][113](&self, event: &[str][16], payload: [String][66]) -> [Result][13]<[()][14]>

Similar to [`Emitter::emit`][114] but the payload is json serialized.

[Source][115]§

#### fn [emit_to][116]<I, S>(&self, target: I, event: &[str][16], payload: S) -> [Result][13]<[()][14]>

where I: [Into][34]<[EventTarget][111]>, S: [Serialize][110] \+ [Clone][88],

Emits an event to all [targets][111] matching the given target. [Read more][116]

[Source][117]§

#### fn [emit_str_to][118]<I>(&self, target: I, event: &[str][16], payload: [String][66]) -> [Result][13]<[()][14]>

where I: [Into][34]<[EventTarget][111]>,

Similar to [`Emitter::emit_to`][119] but the payload is json serialized.

[Source][120]§

#### fn [emit_filter][121]<S, F>(&self, event: &[str][16], payload: S, filter: F) -> [Result][13]<[()][14]>

where S: [Serialize][110] \+ [Clone][88], F: [Fn][18](&[EventTarget][111]) -> [bool][44],

Emits an event to all [targets][111] based on the given filter. [Read more][121]

[Source][122]§

#### fn [emit_str_filter][123]<F>( &self, event: &[str][16], payload: [String][66], filter: F, ) -> [Result][13]<[()][14]>

where F: [Fn][18](&[EventTarget][111]) -> [bool][44],

Similar to [`Emitter::emit_filter`][124] but the payload is json serialized.

[Source][125]§

### impl<R: [Runtime][6]> [Hash][126] for [Webview][9]<R>

[Source][127]§

#### fn [hash][128]<H: [Hasher][129]>(&self, state: [&mut H][130])

Only use the [`Webview`][9]’s label to represent its hash.

1.3.0 · [Source][131]§

#### fn [hash_slice][132]<H>(data: &[Self], state: [&mut H][130])

where H: [Hasher][129], Self: [Sized][133],

Feeds a slice of this type into the given [`Hasher`][129]. [Read more][132]

[Source][134]§

### impl<R: [Runtime][6]> [Listener][135]<R> for [Webview][9]<R>

[Source][136]§

#### fn [listen][137]<F>(&self, event: impl [Into][34]<[String][66]>, handler: F) -> [EventId][138]

where F: [Fn][18]([Event][139]) + [Send][12] \+ 'static,

Listen to an event on this webview.

##### §Examples

[Source][140]§

#### fn [once][141]<F>(&self, event: impl [Into][34]<[String][66]>, handler: F) -> [EventId][138]

where F: [FnOnce][11]([Event][139]) + [Send][12] \+ 'static,

Listen to an event on this webview only once.

See [`Self::listen`][142] for more information.

[Source][143]§

#### fn [unlisten][144](&self, id: [EventId][138])

Unlisten to an event on this webview.

##### §Examples

[Source][145]§

#### fn [listen_any][146]<F>(&self, event: impl [Into][34]<[String][66]>, handler: F) -> [EventId][138]

where F: [Fn][18]([Event][139]) + [Send][12] \+ 'static,

Listen to an emitted event to any [target][111]. [Read more][146]

[Source][147]§

#### fn [once_any][148]<F>(&self, event: impl [Into][34]<[String][66]>, handler: F) -> [EventId][138]

where F: [FnOnce][11]([Event][139]) + [Send][12] \+ 'static,

Listens once to an emitted event to any [target][111] . [Read more][148]

[Source][149]§

### impl<R: [Runtime][6]> [Manager][150]<R> for [Webview][9]<R>

[Source][151]§

#### fn [resources_table][152](&self) -> [MutexGuard][54]<'_, [ResourceTable][153]>

Get a reference to the resources table of this manager.

[Source][154]§

#### fn [app_handle][155](&self) -> &[AppHandle][156]<R>

The application handle associated with this manager.

[Source][157]§

#### fn [config][158](&self) -> &[Config][159]

The [`Config`][159] the manager was created with.

[Source][160]§

#### fn [package_info][161](&self) -> &[PackageInfo][162]

The [`PackageInfo`][162] the manager was created with.

[Source][163]§

#### fn [get_webview_window][164](&self, label: &[str][16]) -> [Option][22]<[WebviewWindow][84]<R>>

Fetch a single webview window from the manager.

[Source][165]§

#### fn [webview_windows][166](&self) -> [HashMap][167]<[String][66], [WebviewWindow][84]<R>>

Fetch all managed webview windows.

[Source][168]§

#### fn [manage][169]<T>(&self, state: T) -> [bool][44]

where T: [Send][12] \+ [Sync][170] \+ 'static,

Add `state` to the state managed by the application. [Read more][169]

[Source][171]§

#### fn [unmanage][172]<T>(&self) -> [Option][22]<T>

where T: [Send][12] \+ [Sync][170] \+ 'static,

👎Deprecated since 2.3.0: This method is unsafe, since it can cause dangling references.

Removes the state managed by the application for T. Returns the state if it was actually removed. [Read more][172]

[Source][173]§

#### fn [state][174]<T>(&self) -> [State][175]<'_, T>

where T: [Send][12] \+ [Sync][170] \+ 'static,

Retrieves the managed state for the type `T`. [Read more][174]

[Source][176]§

#### fn [try_state][177]<T>(&self) -> [Option][22]<[State][175]<'_, T>>

where T: [Send][12] \+ [Sync][170] \+ 'static,

Attempts to retrieve the managed state for the type `T`. [Read more][177]

[Source][178]§

#### fn [env][179](&self) -> [Env][180]

Gets the managed [`Env`][180].

[Source][181]§

#### fn [path][182](&self) -> &[PathResolver][183]<R>

The path resolver.

[Source][184]§

#### fn [add_capability][185](&self, capability: impl [RuntimeCapability][186]) -> [Result][13]<[()][14]>

Adds a capability to the app. [Read more][185]

[Source][187]§

### impl<R: [Runtime][6]> [PartialEq][188] for [Webview][9]<R>

[Source][189]§

#### fn [eq][190](&self, other: &Self) -> [bool][44]

Only use the [`Webview`][9]’s label to compare equality.

1.0.0 · [Source][191]§

#### fn [ne][192](&self, other: [&Rhs][130]) -> [bool][44]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][193]§

### impl<R: [Runtime][6]> [Eq][194] for [Webview][9]<R>

## Auto Trait Implementations§

§

### impl<R> [Freeze][195] for [Webview][9]<R>

where <R as Runtime<[EventLoopMessage][196]>>::WebviewDispatcher: [Freeze][195], <R as Runtime<[EventLoopMessage][196]>>::Handle: [Freeze][195],

§

### impl<R = Wry<[EventLoopMessage][196]>> ![RefUnwindSafe][197] for [Webview][9]<R>

§

### impl<R> [Send][12] for [Webview][9]<R>

§

### impl<R> [Sync][170] for [Webview][9]<R>

§

### impl<R> [Unpin][198] for [Webview][9]<R>

where <R as Runtime<[EventLoopMessage][196]>>::WebviewDispatcher: [Unpin][198], <R as Runtime<[EventLoopMessage][196]>>::Handle: [Unpin][198],

§

### impl<R = Wry<[EventLoopMessage][196]>> ![UnwindSafe][199] for [Webview][9]<R>

## Blanket Implementations§

[Source][200]§

### impl<T> [Any][201] for T

where T: 'static + ?[Sized][133],

[Source][202]§

#### fn [type_id][203](&self) -> [TypeId][204]

Gets the `TypeId` of `self`. [Read more][203]

[Source][205]§

### impl<T> [Borrow][206]<T> for T

where T: ?[Sized][133],

[Source][207]§

#### fn [borrow][208](&self) -> [&T][130]

Immutably borrows from an owned value. [Read more][208]

[Source][209]§

### impl<T> [BorrowMut][210]<T> for T

where T: ?[Sized][133],

[Source][211]§

#### fn [borrow_mut][212](&mut self) -> [&mut T][130]

Mutably borrows from an owned value. [Read more][212]

[Source][213]§

### impl<T> [CloneToUninit][214] for T

where T: [Clone][88],

[Source][215]§

#### unsafe fn [clone_to_uninit][216](&self, dest: [*mut ][217][u8][218])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][216]

[Source][219]§

### impl<T> [From][220]<T> for T

[Source][221]§

#### fn [from][222](t: T) -> T

Returns the argument unchanged.

[Source][223]§

### impl<T, U> [Into][34]<U> for T

where U: [From][220]<T>,

[Source][224]§

#### fn [into][225](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][220]<T> for U` chooses to do.

[Source][226]§

### impl<T> [ToOwned][227] for T

where T: [Clone][88],

[Source][228]§

#### type [Owned][229] = T

The resulting type after obtaining ownership.

[Source][230]§

#### fn [to_owned][231](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][231]

[Source][232]§

#### fn [clone_into][233](&self, target: [&mut T][130])

Uses borrowed data to replace owned data, usually by cloning. [Read more][233]

[Source][234]§

### impl<T, U> [TryFrom][235]<U> for T

where U: [Into][34]<T>,

[Source][236]§

#### type [Error][237] = [Infallible][238]

The type returned in the event of a conversion error.

[Source][239]§

#### fn [try_from][240](value: U) -> [Result][98]<T, <T as [TryFrom][235]<U>>::[Error][241]>

Performs the conversion.

[Source][242]§

### impl<T, U> [TryInto][243]<U> for T

where U: [TryFrom][235]<T>,

[Source][244]§

#### type [Error][245] = <U as [TryFrom][235]<T>>::[Error][241]

The type returned in the event of a conversion error.

[Source][246]§

#### fn [try_into][247](self) -> [Result][98]<U, <U as [TryFrom][235]<T>>::[Error][241]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][101] \+ [Clone][88] \+ [Send][12] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/webview/mod.rs.html#1280-1289
   [6]: ../trait.Runtime.html (trait tauri::Runtime)
   [7]: ../type.Wry.html (type tauri::Wry)
   [8]: ../../src/tauri/webview/mod.rs.html#1330-1459
   [9]: struct.Webview.html (struct tauri::webview::Webview)
   [10]: ../../src/tauri/webview/mod.rs.html#1357-1363
   [11]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [12]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [13]: ../type.Result.html (type tauri::Result)
   [14]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [15]: ../../src/tauri/webview/mod.rs.html#1366-1368
   [16]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [17]: ../../src/tauri/webview/mod.rs.html#1376-1381
   [18]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.Fn.html (trait core::ops::function::Fn)
   [19]: ../enum.WebviewEvent.html (enum tauri::WebviewEvent)
   [20]: ../../src/tauri/webview/mod.rs.html#1421-1458
   [21]: ../ipc/trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [22]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [23]: struct.ResolvedScope.html (struct tauri::webview::ResolvedScope)
   [24]: ../ipc/struct.CommandScope.html (struct tauri::ipc::CommandScope)
   [25]: ../../src/tauri/webview/mod.rs.html#1463-1572
   [26]: ../../src/tauri/webview/mod.rs.html#1467-1469
   [27]: ../../src/tauri/webview/mod.rs.html#1479-1481
   [28]: ../struct.PhysicalPosition.html (struct tauri::PhysicalPosition)
   [29]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html
   [30]: ../../src/tauri/webview/mod.rs.html#1484-1488
   [31]: ../../src/tauri/webview/mod.rs.html#1491-1497
   [32]: ../struct.Rect.html (struct tauri::Rect)
   [33]: ../../src/tauri/webview/mod.rs.html#1500-1506
   [34]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [35]: ../enum.Size.html (enum tauri::Size)
   [36]: ../../src/tauri/webview/mod.rs.html#1509-1515
   [37]: ../enum.Position.html (enum tauri::Position)
   [38]: ../../src/tauri/webview/mod.rs.html#1518-1520
   [39]: ../../src/tauri/webview/mod.rs.html#1523-1525
   [40]: ../../src/tauri/webview/mod.rs.html#1528-1530
   [41]: ../../src/tauri/webview/mod.rs.html#1533-1544
   [42]: ../window/struct.Window.html (struct tauri::window::Window)
   [43]: ../../src/tauri/webview/mod.rs.html#1547-1553
   [44]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [45]: ../../src/tauri/webview/mod.rs.html#1556-1558
   [46]: ../../src/tauri/webview/mod.rs.html#1564-1566
   [47]: https://doc.rust-lang.org/1.94.1/std/primitive.i32.html
   [48]: ../../src/tauri/webview/mod.rs.html#1569-1571
   [49]: ../struct.PhysicalSize.html (struct tauri::PhysicalSize)
   [50]: https://doc.rust-lang.org/1.94.1/std/primitive.u32.html
   [51]: ../../src/tauri/webview/mod.rs.html#1575-2165
   [52]: ../../src/tauri/webview/mod.rs.html#1577-1579
   [53]: ../../src/tauri/webview/mod.rs.html#1582-1584
   [54]: https://doc.rust-lang.org/1.94.1/std/sync/poison/mutex/struct.MutexGuard.html (struct std::sync::poison::mutex::MutexGuard)
   [55]: ../../src/tauri/webview/mod.rs.html#1650-1659
   [56]: struct.PlatformWebview.html (struct tauri::webview::PlatformWebview)
   [57]: ../../src/tauri/webview/mod.rs.html#1662-1668
   [58]: ../struct.Url.html (struct tauri::Url)
   [59]: ../../src/tauri/webview/mod.rs.html#1671-1673
   [60]: ../../src/tauri/webview/mod.rs.html#1676-1678
   [61]: ../../src/tauri/webview/mod.rs.html#1724-1893
   [62]: struct.InvokeRequest.html (struct tauri::webview::InvokeRequest)
   [63]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [64]: ../ipc/type.OwnedInvokeResponder.html (type tauri::ipc::OwnedInvokeResponder)
   [65]: ../../src/tauri/webview/mod.rs.html#1896-1902
   [66]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [67]: ../../src/tauri/webview/mod.rs.html#1972-1974
   [68]: ../../src/tauri/webview/mod.rs.html#2010-2012
   [69]: ../../src/tauri/webview/mod.rs.html#2046-2052
   [70]: ../../src/tauri/webview/mod.rs.html#2061-2067
   [71]: ../../src/tauri/webview/mod.rs.html#2077-2083
   [72]: struct.Color.html (struct tauri::webview::Color)
   [73]: ../../src/tauri/webview/mod.rs.html#2086-2092
   [74]: ../../src/tauri/webview/mod.rs.html#2107-2113
   [75]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [76]: struct.Cookie.html (struct tauri::webview::Cookie)
   [77]: struct.Webview.html#method.cookies (method tauri::webview::Webview::cookies)
   [78]: ../../src/tauri/webview/mod.rs.html#2136-2138
   [79]: https://github.com/tauri-apps/wry/issues/583
   [80]: ../../src/tauri/webview/mod.rs.html#2145-2151
   [81]: ../../src/tauri/webview/mod.rs.html#2158-2164
   [82]: ../../src/tauri/webview/webview_window.rs.html#1387-1391
   [83]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [84]: struct.WebviewWindow.html (struct tauri::webview::WebviewWindow)
   [85]: ../../src/tauri/webview/webview_window.rs.html#1388-1390
   [86]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html#tymethod.as_ref
   [87]: ../../src/tauri/webview/mod.rs.html#1301-1312
   [88]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [89]: ../../src/tauri/webview/mod.rs.html#1302-1311
   [90]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [91]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [92]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [93]: ../../src/tauri/webview/mod.rs.html#2283-2288
   [94]: ../ipc/trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [95]: ../../src/tauri/webview/mod.rs.html#2285-2287
   [96]: ../ipc/trait.CommandArg.html#tymethod.from_command
   [97]: ../ipc/struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [98]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [99]: ../ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [100]: ../../src/tauri/webview/mod.rs.html#1291-1299
   [101]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [102]: ../../src/tauri/webview/mod.rs.html#1292-1298
   [103]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [104]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [105]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [106]: ../../src/tauri/webview/mod.rs.html#2254
   [107]: ../trait.Emitter.html (trait tauri::Emitter)
   [108]: ../../src/tauri/lib.rs.html#952-956
   [109]: ../trait.Emitter.html#method.emit
   [110]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [111]: ../enum.EventTarget.html (enum tauri::EventTarget)
   [112]: ../../src/tauri/lib.rs.html#959-963
   [113]: ../trait.Emitter.html#method.emit_str
   [114]: ../trait.Emitter.html#method.emit (method tauri::Emitter::emit)
   [115]: ../../src/tauri/lib.rs.html#987-995
   [116]: ../trait.Emitter.html#method.emit_to
   [117]: ../../src/tauri/lib.rs.html#998-1005
   [118]: ../trait.Emitter.html#method.emit_str_to
   [119]: ../trait.Emitter.html#method.emit_to (method tauri::Emitter::emit_to)
   [120]: ../../src/tauri/lib.rs.html#1025-1033
   [121]: ../trait.Emitter.html#method.emit_filter
   [122]: ../../src/tauri/lib.rs.html#1036-1043
   [123]: ../trait.Emitter.html#method.emit_str_filter
   [124]: ../trait.Emitter.html#method.emit_filter (method tauri::Emitter::emit_filter)
   [125]: ../../src/tauri/webview/mod.rs.html#1314-1319
   [126]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html (trait core::hash::Hash)
   [127]: ../../src/tauri/webview/mod.rs.html#1316-1318
   [128]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#tymethod.hash
   [129]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hasher.html (trait core::hash::Hasher)
   [130]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [131]: https://doc.rust-lang.org/1.94.1/src/core/hash/mod.rs.html#235-237
   [132]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#method.hash_slice
   [133]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [134]: ../../src/tauri/webview/mod.rs.html#2167-2252
   [135]: ../trait.Listener.html (trait tauri::Listener)
   [136]: ../../src/tauri/webview/mod.rs.html#2189-2201
   [137]: ../trait.Listener.html#tymethod.listen
   [138]: ../type.EventId.html (type tauri::EventId)
   [139]: ../struct.Event.html (struct tauri::Event)
   [140]: ../../src/tauri/webview/mod.rs.html#2206-2218
   [141]: ../trait.Listener.html#tymethod.once
   [142]: struct.Webview.html#method.listen (method tauri::webview::Webview::listen)
   [143]: ../../src/tauri/webview/mod.rs.html#2249-2251
   [144]: ../trait.Listener.html#tymethod.unlisten
   [145]: ../../src/tauri/lib.rs.html#916-922
   [146]: ../trait.Listener.html#method.listen_any
   [147]: ../../src/tauri/lib.rs.html#929-935
   [148]: ../trait.Listener.html#method.once_any
   [149]: ../../src/tauri/webview/mod.rs.html#2256-2263
   [150]: ../trait.Manager.html (trait tauri::Manager)
   [151]: ../../src/tauri/webview/mod.rs.html#2257-2262
   [152]: ../trait.Manager.html#tymethod.resources_table
   [153]: ../struct.ResourceTable.html (struct tauri::ResourceTable)
   [154]: ../../src/tauri/lib.rs.html#532-534
   [155]: ../trait.Manager.html#method.app_handle
   [156]: ../struct.AppHandle.html (struct tauri::AppHandle)
   [157]: ../../src/tauri/lib.rs.html#537-539
   [158]: ../trait.Manager.html#method.config
   [159]: ../struct.Config.html (struct tauri::Config)
   [160]: ../../src/tauri/lib.rs.html#542-544
   [161]: ../trait.Manager.html#method.package_info
   [162]: ../struct.PackageInfo.html (struct tauri::PackageInfo)
   [163]: ../../src/tauri/lib.rs.html#582-591
   [164]: ../trait.Manager.html#method.get_webview_window
   [165]: ../../src/tauri/lib.rs.html#594-608
   [166]: ../trait.Manager.html#method.webview_windows
   [167]: https://doc.rust-lang.org/1.94.1/std/collections/hash/map/struct.HashMap.html (struct std::collections::hash::map::HashMap)
   [168]: ../../src/tauri/lib.rs.html#694-699
   [169]: ../trait.Manager.html#method.manage
   [170]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [171]: ../../src/tauri/lib.rs.html#721-727
   [172]: ../trait.Manager.html#method.unmanage
   [173]: ../../src/tauri/lib.rs.html#735-745
   [174]: ../trait.Manager.html#method.state
   [175]: ../struct.State.html (struct tauri::State)
   [176]: ../../src/tauri/lib.rs.html#750-755
   [177]: ../trait.Manager.html#method.try_state
   [178]: ../../src/tauri/lib.rs.html#761-763
   [179]: ../trait.Manager.html#method.env
   [180]: ../struct.Env.html (struct tauri::Env)
   [181]: ../../src/tauri/lib.rs.html#772-774
   [182]: ../trait.Manager.html#method.path
   [183]: ../path/struct.PathResolver.html (struct tauri::path::PathResolver)
   [184]: ../../src/tauri/lib.rs.html#819-826
   [185]: ../trait.Manager.html#method.add_capability
   [186]: ../ipc/trait.RuntimeCapability.html (trait tauri::ipc::RuntimeCapability)
   [187]: ../../src/tauri/webview/mod.rs.html#1322-1327
   [188]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [189]: ../../src/tauri/webview/mod.rs.html#1324-1326
   [190]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [191]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [192]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [193]: ../../src/tauri/webview/mod.rs.html#1321
   [194]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [195]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [196]: ../enum.EventLoopMessage.html (enum tauri::EventLoopMessage)
   [197]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [198]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [199]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [200]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [201]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [202]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [203]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [204]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [205]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [206]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [207]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [208]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [209]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [210]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [211]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [212]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [213]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [214]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [215]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [216]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [217]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [218]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [219]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [220]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [221]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [222]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [223]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [224]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [225]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [226]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [227]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [228]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [229]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [230]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [231]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [232]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [233]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [234]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [235]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [236]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [237]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [238]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [239]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [240]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [241]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [242]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [243]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [244]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [245]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [246]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [247]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

