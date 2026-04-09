## AppHandle

[![logo][1]][2]

## [tauri][2]2.10.3

## AppHandle

### Methods

  * asset_resolver
  * available_monitors
  * cleanup_before_exit
  * config
  * create_tao_window
  * cursor_position
  * default_window_icon
  * exit
  * hide_menu
  * invoke_key
  * menu
  * monitor_from_point
  * on_menu_event
  * package_info
  * plugin
  * plugin_boxed
  * primary_monitor
  * remove_menu
  * remove_plugin
  * request_restart
  * restart
  * run_on_main_thread
  * send_tao_window_event
  * set_device_event_filter
  * set_menu
  * set_theme
  * show_menu



### Trait Implementations

  * Clone
  * CommandArg<'de, R>
  * Debug
  * Emitter<R>
  * HasDisplayHandle
  * Listener<R>
  * Manager<R>



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
  * HasRawDisplayHandle
  * Into<U>
  * ToOwned
  * TryFrom<U>
  * TryInto<U>
  * UserEvent



## [In crate tauri][3]

[tauri][3]

# Struct AppHandle Copy item path

[Source][4]
[code] 
    pub struct AppHandle<R: [Runtime][5] = [Wry][6]> { /* private fields */ }
[/code]

Expand description

A handle to the currently running application.

This type implements [`Manager`][7] which allows for manipulation of global application items.

## Implementations§

[Source][8]§

### impl [AppHandle][9]<[Wry][6]>

APIs specific to the wry runtime.

[Source][10]

#### pub fn create_tao_window<F: [FnOnce][11]() -> ([String][12], TaoWindowBuilder) + [Send][13] \+ 'static>( &self, f: F, ) -> [Result][14]<[Weak][15]<Window>>

Create a new tao window using a callback. The event loop must be running at this point.

[Source][16]

#### pub fn send_tao_window_event( &self, window_id: TaoWindowId, message: WindowMessage, ) -> [Result][14]<[()][17]>

Sends a window message to the event loop.

[Source][18]§

### impl<R: [Runtime][5]> [AppHandle][9]<R>

[Source][19]

#### pub fn run_on_main_thread<F: [FnOnce][11]() + [Send][13] \+ 'static>( &self, f: F, ) -> [Result][14]<[()][17]>

Runs the given closure on the main thread.

[Source][20]

#### pub fn plugin<P: [Plugin][21]<R> \+ 'static>(&self, plugin: P) -> [Result][14]<[()][17]>

Adds a Tauri application plugin. This function can be used to register a plugin that is loaded dynamically e.g. after login. For plugins that are created when the app is started, prefer [`Builder::plugin`][22].

See [`Builder::plugin`][22] for more information.

##### §Examples
[code] 
    use tauri::{plugin::{Builder as PluginBuilder, TauriPlugin}, Runtime};
    
    fn init_plugin<R: Runtime>() -> TauriPlugin<R> {
      PluginBuilder::new("dummy").build()
    }
    
    tauri::Builder::default()
      .setup(move |app| {
        let handle = app.handle().clone();
        std::thread::spawn(move || {
          handle.plugin(init_plugin());
        });
    
        Ok(())
      });
[/code]

[Source][23]

#### pub fn plugin_boxed(&self, plugin: [Box][24]<dyn [Plugin][21]<R>>) -> [Result][14]<[()][17]>

Adds a Tauri application plugin.

This method is similar to [`Self::plugin`][25], but accepts a boxed trait object instead of a generic type.

[Source][26]

#### pub fn remove_plugin(&self, plugin: &[str][27]) -> [bool][28]

Removes the plugin with the given name.

##### §Examples
[code] 
    use tauri::{plugin::{Builder as PluginBuilder, TauriPlugin, Plugin}, Runtime};
    
    fn init_plugin<R: Runtime>() -> TauriPlugin<R> {
      PluginBuilder::new("dummy").build()
    }
    
    let plugin = init_plugin();
    // `.name()` requires the `Plugin` trait import
    let plugin_name = plugin.name();
    tauri::Builder::default()
      .plugin(plugin)
      .setup(move |app| {
        let handle = app.handle().clone();
        std::thread::spawn(move || {
          handle.remove_plugin(plugin_name);
        });
    
        Ok(())
      });
[/code]

[Source][29]

#### pub fn exit(&self, exit_code: [i32][30])

Exits the app by triggering [`RunEvent::ExitRequested`][31] and [`RunEvent::Exit`][32].

[Source][33]

#### pub fn restart(&self) -> [!][34]

Restarts the app by triggering [`RunEvent::ExitRequested`][31] with code [`RESTART_EXIT_CODE`][35] and [`RunEvent::Exit`][32].

When this function is called on the main thread, we cannot guarantee the delivery of those events, so we skip them and directly restart the process.

If you want to trigger them reliably, use [`Self::request_restart`][36] instead

[Source][37]

#### pub fn request_restart(&self)

Restarts the app by triggering [`RunEvent::ExitRequested`][31] with code [`RESTART_EXIT_CODE`][35] and [`RunEvent::Exit`][32].

[Source][38]

#### pub fn set_device_event_filter(&self, filter: [DeviceEventFilter][39])

Change the device event filter mode.

See [App::set_device_event_filter][40] for details.

###### §Platform-specific

See [App::set_device_event_filter][40] for details.

[Source][41]§

### impl<R: [Runtime][5]> [AppHandle][9]<R>

[Source][41]

#### pub fn on_menu_event<F: [Fn][42](&[AppHandle][9]<R>, [MenuEvent][43]) + [Send][13] \+ [Sync][44] \+ 'static>( &self, handler: F, )

Registers a global menu event listener.

[Source][41]

#### pub fn config(&self) -> &[Config][45]

Gets the app’s configuration, defined on the `tauri.conf.json` file.

[Source][41]

#### pub fn package_info(&self) -> &[PackageInfo][46]

Gets the app’s package information.

[Source][41]

#### pub fn asset_resolver(&self) -> [AssetResolver][47]<R>

The application’s asset resolver.

[Source][41]

#### pub fn primary_monitor(&self) -> [Result][14]<[Option][48]<[Monitor][49]>>

Returns the primary monitor of the system.

Returns None if it can’t identify any monitor as a primary one.

[Source][41]

#### pub fn monitor_from_point(&self, x: [f64][50], y: [f64][50]) -> [Result][14]<[Option][48]<[Monitor][49]>>

Returns the monitor that contains the given point.

[Source][41]

#### pub fn available_monitors(&self) -> [Result][14]<[Vec][51]<[Monitor][49]>>

Returns the list of all the monitors available on the system.

[Source][41]

#### pub fn cursor_position(&self) -> [Result][14]<[PhysicalPosition][52]<[f64][50]>>

Get the cursor position relative to the top-left hand corner of the desktop.

Note that the top-left hand corner of the desktop is not necessarily the same as the screen. If the user uses a desktop with multiple monitors, the top-left hand corner of the desktop is the top-left hand corner of the main monitor on Windows and macOS or the top-left of the leftmost monitor on X11.

The coordinates can be negative if the top-left hand corner of the window is outside of the visible screen region.

[Source][41]

#### pub fn set_theme(&self, theme: [Option][48]<[Theme][53]>)

Sets the app theme.

###### §Platform-specific

  * **iOS / Android:** Unsupported.



[Source][41]

#### pub fn default_window_icon(&self) -> [Option][48]<&[Image][54]<'_>>

Returns the default window icon.

[Source][41]

#### pub fn menu(&self) -> [Option][48]<[Menu][55]<R>>

Returns the app-wide menu.

[Source][41]

#### pub fn set_menu(&self, menu: [Menu][55]<R>) -> [Result][14]<[Option][48]<[Menu][55]<R>>>

Sets the app-wide menu and returns the previous one.

If a window was not created with an explicit menu or had one set explicitly, this menu will be assigned to it.

[Source][41]

#### pub fn remove_menu(&self) -> [Result][14]<[Option][48]<[Menu][55]<R>>>

Remove the app-wide menu and returns it.

If a window was not created with an explicit menu or had one set explicitly, this will remove the menu from it.

[Source][41]

#### pub fn hide_menu(&self) -> [Result][14]<[()][17]>

Hides the app-wide menu from windows that have it.

If a window was not created with an explicit menu or had one set explicitly, this will hide the menu from it.

[Source][41]

#### pub fn show_menu(&self) -> [Result][14]<[()][17]>

Shows the app-wide menu for windows that have it.

If a window was not created with an explicit menu or had one set explicitly, this will show the menu for it.

[Source][41]

#### pub fn cleanup_before_exit(&self)

Runs necessary cleanup tasks before exiting the process. **You should always exit the tauri app immediately after this function returns and not use any tauri-related APIs.**

[Source][41]

#### pub fn invoke_key(&self) -> &[str][27]

Gets the invoke key that must be referenced when using [`crate::webview::InvokeRequest`][56].

##### §Security

DO NOT expose this key to third party scripts as might grant access to the backend from external URLs and iframes.

## Trait Implementations§

[Source][57]§

### impl<R: [Runtime][5]> [Clone][58] for [AppHandle][9]<R>

[Source][59]§

#### fn [clone][60](&self) -> Self

Returns a duplicate of the value. [Read more][60]

1.0.0 · [Source][61]§

#### fn [clone_from][62](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][62]

[Source][63]§

### impl<'de, R: [Runtime][5]> [CommandArg][64]<'de, R> for [AppHandle][9]<R>

[Source][65]§

#### fn [from_command][66](command: [CommandItem][67]<'de, R>) -> [Result][68]<Self, [InvokeError][69]>

Grabs the [`Window`][70] from the [`CommandItem`][67] and returns the associated [`AppHandle`][9]. This will never fail.

[Source][71]§

### impl<R: [Debug][72] \+ [Runtime][5]> [Debug][72] for [AppHandle][9]<R>

where R::Handle: [Debug][72],

[Source][71]§

#### fn [fmt][73](&self, f: &mut [Formatter][74]<'_>) -> [Result][75]

Formats the value using the given formatter. [Read more][73]

[Source][41]§

### impl<R: [Runtime][5]> [Emitter][76]<R> for [AppHandle][9]<R>

[Source][77]§

#### fn [emit][78]<S: [Serialize][79] \+ [Clone][58]>(&self, event: &[str][27], payload: S) -> [Result][14]<[()][17]>

Emits an event to all [targets][80]. [Read more][78]

[Source][81]§

#### fn [emit_str][82](&self, event: &[str][27], payload: [String][12]) -> [Result][14]<[()][17]>

Similar to [`Emitter::emit`][83] but the payload is json serialized.

[Source][84]§

#### fn [emit_to][85]<I, S>(&self, target: I, event: &[str][27], payload: S) -> [Result][14]<[()][17]>

where I: [Into][86]<[EventTarget][80]>, S: [Serialize][79] \+ [Clone][58],

Emits an event to all [targets][80] matching the given target. [Read more][85]

[Source][87]§

#### fn [emit_str_to][88]<I>(&self, target: I, event: &[str][27], payload: [String][12]) -> [Result][14]<[()][17]>

where I: [Into][86]<[EventTarget][80]>,

Similar to [`Emitter::emit_to`][89] but the payload is json serialized.

[Source][90]§

#### fn [emit_filter][91]<S, F>(&self, event: &[str][27], payload: S, filter: F) -> [Result][14]<[()][17]>

where S: [Serialize][79] \+ [Clone][58], F: [Fn][42](&[EventTarget][80]) -> [bool][28],

Emits an event to all [targets][80] based on the given filter. [Read more][91]

[Source][92]§

#### fn [emit_str_filter][93]<F>( &self, event: &[str][27], payload: [String][12], filter: F, ) -> [Result][14]<[()][17]>

where F: [Fn][42](&[EventTarget][80]) -> [bool][28],

Similar to [`Emitter::emit_filter`][94] but the payload is json serialized.

[Source][95]§

### impl<R: [Runtime][5]> HasDisplayHandle for [AppHandle][9]<R>

[Source][96]§

#### fn display_handle(&self) -> [Result][68]<DisplayHandle<'_>, HandleError>

Get a handle to the display controller of the windowing system.

[Source][41]§

### impl<R: [Runtime][5]> [Listener][97]<R> for [AppHandle][9]<R>

[Source][41]§

#### fn [listen][98]<F>(&self, event: impl [Into][86]<[String][12]>, handler: F) -> [EventId][99]

where F: [Fn][42]([Event][100]) + [Send][13] \+ 'static,

Listen to an event on this app.

##### §Examples
[code] 
    use tauri::Listener;
    
    tauri::Builder::default()
      .setup(|app| {
        app.listen("component-loaded", move |event| {
          println!("window just loaded a component");
        });
    
        Ok(())
      });
[/code]

[Source][41]§

#### fn [once][101]<F>(&self, event: impl [Into][86]<[String][12]>, handler: F) -> [EventId][99]

where F: [FnOnce][11]([Event][100]) + [Send][13] \+ 'static,

Listen to an event on this app only once.

See [`Self::listen`][102] for more information.

[Source][41]§

#### fn [unlisten][103](&self, id: [EventId][99])

Unlisten to an event on this app.

##### §Examples
[code] 
    use tauri::Listener;
    
    tauri::Builder::default()
      .setup(|app| {
        let handler = app.listen("component-loaded", move |event| {
          println!("app just loaded a component");
        });
    
        // stop listening to the event when you do not need it anymore
        app.unlisten(handler);
    
        Ok(())
      });
[/code]

[Source][104]§

#### fn [listen_any][105]<F>(&self, event: impl [Into][86]<[String][12]>, handler: F) -> [EventId][99]

where F: [Fn][42]([Event][100]) + [Send][13] \+ 'static,

Listen to an emitted event to any [target][80]. [Read more][105]

[Source][106]§

#### fn [once_any][107]<F>(&self, event: impl [Into][86]<[String][12]>, handler: F) -> [EventId][99]

where F: [FnOnce][11]([Event][100]) + [Send][13] \+ 'static,

Listens once to an emitted event to any [target][80] . [Read more][107]

[Source][108]§

### impl<R: [Runtime][5]> [Manager][7]<R> for [AppHandle][9]<R>

[Source][109]§

#### fn [resources_table][110](&self) -> [MutexGuard][111]<'_, [ResourceTable][112]>

Get a reference to the resources table of this manager.

[Source][113]§

#### fn [app_handle][114](&self) -> &[AppHandle][9]<R>

The application handle associated with this manager.

[Source][115]§

#### fn [config][116](&self) -> &[Config][45]

The [`Config`][45] the manager was created with.

[Source][117]§

#### fn [package_info][118](&self) -> &[PackageInfo][46]

The [`PackageInfo`][46] the manager was created with.

[Source][119]§

#### fn [get_webview_window][120](&self, label: &[str][27]) -> [Option][48]<[WebviewWindow][121]<R>>

Fetch a single webview window from the manager.

[Source][122]§

#### fn [webview_windows][123](&self) -> [HashMap][124]<[String][12], [WebviewWindow][121]<R>>

Fetch all managed webview windows.

[Source][125]§

#### fn [manage][126]<T>(&self, state: T) -> [bool][28]

where T: [Send][13] \+ [Sync][44] \+ 'static,

Add `state` to the state managed by the application. [Read more][126]

[Source][127]§

#### fn [unmanage][128]<T>(&self) -> [Option][48]<T>

where T: [Send][13] \+ [Sync][44] \+ 'static,

👎Deprecated since 2.3.0: This method is unsafe, since it can cause dangling references.

Removes the state managed by the application for T. Returns the state if it was actually removed. [Read more][128]

[Source][129]§

#### fn [state][130]<T>(&self) -> [State][131]<'_, T>

where T: [Send][13] \+ [Sync][44] \+ 'static,

Retrieves the managed state for the type `T`. [Read more][130]

[Source][132]§

#### fn [try_state][133]<T>(&self) -> [Option][48]<[State][131]<'_, T>>

where T: [Send][13] \+ [Sync][44] \+ 'static,

Attempts to retrieve the managed state for the type `T`. [Read more][133]

[Source][134]§

#### fn [env][135](&self) -> [Env][136]

Gets the managed [`Env`][136].

[Source][137]§

#### fn [path][138](&self) -> &[PathResolver][139]<R>

The path resolver.

[Source][140]§

#### fn [add_capability][141](&self, capability: impl [RuntimeCapability][142]) -> [Result][14]<[()][17]>

Adds a capability to the app. [Read more][141]

## Auto Trait Implementations§

§

### impl<R> [Freeze][143] for [AppHandle][9]<R>

where <R as Runtime<[EventLoopMessage][144]>>::Handle: [Freeze][143],

§

### impl<R = Wry<[EventLoopMessage][144]>> ![RefUnwindSafe][145] for [AppHandle][9]<R>

§

### impl<R> [Send][13] for [AppHandle][9]<R>

§

### impl<R> [Sync][44] for [AppHandle][9]<R>

§

### impl<R> [Unpin][146] for [AppHandle][9]<R>

where <R as Runtime<[EventLoopMessage][144]>>::Handle: [Unpin][146],

§

### impl<R = Wry<[EventLoopMessage][144]>> ![UnwindSafe][147] for [AppHandle][9]<R>

## Blanket Implementations§

[Source][148]§

### impl<T> [Any][149] for T

where T: 'static + ?[Sized][150],

[Source][151]§

#### fn [type_id][152](&self) -> [TypeId][153]

Gets the `TypeId` of `self`. [Read more][152]

[Source][154]§

### impl<T> [Borrow][155]<T> for T

where T: ?[Sized][150],

[Source][156]§

#### fn [borrow][157](&self) -> [&T][158]

Immutably borrows from an owned value. [Read more][157]

[Source][159]§

### impl<T> [BorrowMut][160]<T> for T

where T: ?[Sized][150],

[Source][161]§

#### fn [borrow_mut][162](&mut self) -> [&mut T][158]

Mutably borrows from an owned value. [Read more][162]

[Source][163]§

### impl<T> [CloneToUninit][164] for T

where T: [Clone][58],

[Source][165]§

#### unsafe fn [clone_to_uninit][166](&self, dest: [*mut ][167][u8][168])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][166]

[Source][169]§

### impl<T> [From][170]<T> for T

[Source][171]§

#### fn [from][172](t: T) -> T

Returns the argument unchanged.

§

### impl<T> HasRawDisplayHandle for T

where T: HasDisplayHandle + ?[Sized][150],

§

#### fn raw_display_handle(&self) -> [Result][68]<RawDisplayHandle, HandleError>

👎Deprecated: Use `HasDisplayHandle` instead

[Source][173]§

### impl<T, U> [Into][86]<U> for T

where U: [From][170]<T>,

[Source][174]§

#### fn [into][175](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][170]<T> for U` chooses to do.

[Source][176]§

### impl<T> [ToOwned][177] for T

where T: [Clone][58],

[Source][178]§

#### type [Owned][179] = T

The resulting type after obtaining ownership.

[Source][180]§

#### fn [to_owned][181](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][181]

[Source][182]§

#### fn [clone_into][183](&self, target: [&mut T][158])

Uses borrowed data to replace owned data, usually by cloning. [Read more][183]

[Source][184]§

### impl<T, U> [TryFrom][185]<U> for T

where U: [Into][86]<T>,

[Source][186]§

#### type [Error][187] = [Infallible][188]

The type returned in the event of a conversion error.

[Source][189]§

#### fn [try_from][190](value: U) -> [Result][68]<T, <T as [TryFrom][185]<U>>::[Error][191]>

Performs the conversion.

[Source][192]§

### impl<T, U> [TryInto][193]<U> for T

where U: [TryFrom][185]<T>,

[Source][194]§

#### type [Error][195] = <U as [TryFrom][185]<T>>::[Error][191]

The type returned in the event of a conversion error.

[Source][196]§

#### fn [try_into][197](self) -> [Result][68]<U, <U as [TryFrom][185]<T>>::[Error][191]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][72] \+ [Clone][58] \+ [Send][13] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/app.rs.html#344-348
   [5]: trait.Runtime.html (trait tauri::Runtime)
   [6]: type.Wry.html (type tauri::Wry)
   [7]: trait.Manager.html (trait tauri::Manager)
   [8]: ../src/tauri/app.rs.html#358-383
   [9]: struct.AppHandle.html (struct tauri::AppHandle)
   [10]: ../src/tauri/app.rs.html#360-367
   [11]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [12]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [13]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [14]: type.Result.html (type tauri::Result)
   [15]: https://doc.rust-lang.org/1.94.1/alloc/sync/struct.Weak.html (struct alloc::sync::Weak)
   [16]: ../src/tauri/app.rs.html#370-382
   [17]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [18]: ../src/tauri/app.rs.html#451-635
   [19]: ../src/tauri/app.rs.html#453-458
   [20]: ../src/tauri/app.rs.html#485-487
   [21]: plugin/trait.Plugin.html (trait tauri::plugin::Plugin)
   [22]: struct.Builder.html#method.plugin (method tauri::Builder::plugin)
   [23]: ../src/tauri/app.rs.html#494-500
   [24]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [25]: struct.AppHandle.html#method.plugin (method tauri::AppHandle::plugin)
   [26]: ../src/tauri/app.rs.html#527-529
   [27]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [28]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [29]: ../src/tauri/app.rs.html#532-538
   [30]: https://doc.rust-lang.org/1.94.1/std/primitive.i32.html
   [31]: enum.RunEvent.html#variant.ExitRequested (variant tauri::RunEvent::ExitRequested)
   [32]: enum.RunEvent.html#variant.Exit (variant tauri::RunEvent::Exit)
   [33]: ../src/tauri/app.rs.html#546-570
   [34]: https://doc.rust-lang.org/1.94.1/std/primitive.never.html
   [35]: constant.RESTART_EXIT_CODE.html (constant tauri::RESTART_EXIT_CODE)
   [36]: struct.AppHandle.html#method.request_restart (method tauri::AppHandle::request_restart)
   [37]: ../src/tauri/app.rs.html#573-583
   [38]: ../src/tauri/app.rs.html#632-634
   [39]: enum.DeviceEventFilter.html (enum tauri::DeviceEventFilter)
   [40]: struct.App.html#method.set_device_event_filter (method tauri::App::set_device_event_filter)
   [41]: ../src/tauri/app.rs.html#1115
   [42]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.Fn.html (trait core::ops::function::Fn)
   [43]: menu/struct.MenuEvent.html (struct tauri::menu::MenuEvent)
   [44]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [45]: struct.Config.html (struct tauri::Config)
   [46]: struct.PackageInfo.html (struct tauri::PackageInfo)
   [47]: struct.AssetResolver.html (struct tauri::AssetResolver)
   [48]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [49]: window/struct.Monitor.html (struct tauri::window::Monitor)
   [50]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html
   [51]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [52]: struct.PhysicalPosition.html (struct tauri::PhysicalPosition)
   [53]: enum.Theme.html (enum tauri::Theme)
   [54]: image/struct.Image.html (struct tauri::image::Image)
   [55]: menu/struct.Menu.html (struct tauri::menu::Menu)
   [56]: webview/struct.InvokeRequest.html (struct tauri::webview::InvokeRequest)
   [57]: ../src/tauri/app.rs.html#434-442
   [58]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [59]: ../src/tauri/app.rs.html#435-441
   [60]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [61]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [62]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [63]: ../src/tauri/app.rs.html#444-449
   [64]: ipc/trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [65]: ../src/tauri/app.rs.html#446-448
   [66]: ipc/trait.CommandArg.html#tymethod.from_command
   [67]: ipc/struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [68]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [69]: ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [70]: window/struct.Window.html (struct tauri::window::Window)
   [71]: ../src/tauri/app.rs.html#343
   [72]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [73]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [74]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [75]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [76]: trait.Emitter.html (trait tauri::Emitter)
   [77]: ../src/tauri/lib.rs.html#952-956
   [78]: trait.Emitter.html#method.emit
   [79]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [80]: enum.EventTarget.html (enum tauri::EventTarget)
   [81]: ../src/tauri/lib.rs.html#959-963
   [82]: trait.Emitter.html#method.emit_str
   [83]: trait.Emitter.html#method.emit (method tauri::Emitter::emit)
   [84]: ../src/tauri/lib.rs.html#987-995
   [85]: trait.Emitter.html#method.emit_to
   [86]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [87]: ../src/tauri/lib.rs.html#998-1005
   [88]: trait.Emitter.html#method.emit_str_to
   [89]: trait.Emitter.html#method.emit_to (method tauri::Emitter::emit_to)
   [90]: ../src/tauri/lib.rs.html#1025-1033
   [91]: trait.Emitter.html#method.emit_filter
   [92]: ../src/tauri/lib.rs.html#1036-1043
   [93]: trait.Emitter.html#method.emit_str_filter
   [94]: trait.Emitter.html#method.emit_filter (method tauri::Emitter::emit_filter)
   [95]: ../src/tauri/app.rs.html#2353-2359
   [96]: ../src/tauri/app.rs.html#2354-2358
   [97]: trait.Listener.html (trait tauri::Listener)
   [98]: trait.Listener.html#tymethod.listen
   [99]: type.EventId.html (type tauri::EventId)
   [100]: struct.Event.html (struct tauri::Event)
   [101]: trait.Listener.html#tymethod.once
   [102]: struct.AppHandle.html#method.listen (method tauri::AppHandle::listen)
   [103]: trait.Listener.html#tymethod.unlisten
   [104]: ../src/tauri/lib.rs.html#916-922
   [105]: trait.Listener.html#method.listen_any
   [106]: ../src/tauri/lib.rs.html#929-935
   [107]: trait.Listener.html#method.once_any
   [108]: ../src/tauri/app.rs.html#637-641
   [109]: ../src/tauri/app.rs.html#638-640
   [110]: trait.Manager.html#tymethod.resources_table
   [111]: https://doc.rust-lang.org/1.94.1/std/sync/poison/mutex/struct.MutexGuard.html (struct std::sync::poison::mutex::MutexGuard)
   [112]: struct.ResourceTable.html (struct tauri::ResourceTable)
   [113]: ../src/tauri/lib.rs.html#532-534
   [114]: trait.Manager.html#method.app_handle
   [115]: ../src/tauri/lib.rs.html#537-539
   [116]: trait.Manager.html#method.config
   [117]: ../src/tauri/lib.rs.html#542-544
   [118]: trait.Manager.html#method.package_info
   [119]: ../src/tauri/lib.rs.html#582-591
   [120]: trait.Manager.html#method.get_webview_window
   [121]: webview/struct.WebviewWindow.html (struct tauri::webview::WebviewWindow)
   [122]: ../src/tauri/lib.rs.html#594-608
   [123]: trait.Manager.html#method.webview_windows
   [124]: https://doc.rust-lang.org/1.94.1/std/collections/hash/map/struct.HashMap.html (struct std::collections::hash::map::HashMap)
   [125]: ../src/tauri/lib.rs.html#694-699
   [126]: trait.Manager.html#method.manage
   [127]: ../src/tauri/lib.rs.html#721-727
   [128]: trait.Manager.html#method.unmanage
   [129]: ../src/tauri/lib.rs.html#735-745
   [130]: trait.Manager.html#method.state
   [131]: struct.State.html (struct tauri::State)
   [132]: ../src/tauri/lib.rs.html#750-755
   [133]: trait.Manager.html#method.try_state
   [134]: ../src/tauri/lib.rs.html#761-763
   [135]: trait.Manager.html#method.env
   [136]: struct.Env.html (struct tauri::Env)
   [137]: ../src/tauri/lib.rs.html#772-774
   [138]: trait.Manager.html#method.path
   [139]: path/struct.PathResolver.html (struct tauri::path::PathResolver)
   [140]: ../src/tauri/lib.rs.html#819-826
   [141]: trait.Manager.html#method.add_capability
   [142]: ipc/trait.RuntimeCapability.html (trait tauri::ipc::RuntimeCapability)
   [143]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [144]: enum.EventLoopMessage.html (enum tauri::EventLoopMessage)
   [145]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [146]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [147]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [148]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [149]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [150]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [151]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [152]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [153]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [154]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [155]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [156]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [157]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [158]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [159]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [160]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [161]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [162]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [163]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [164]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [165]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [166]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [167]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [168]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [169]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [170]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [171]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [172]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [173]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [174]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [175]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [176]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [177]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [178]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [179]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [180]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [181]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [182]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [183]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [184]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [185]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [186]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [187]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [188]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [189]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [190]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [191]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [192]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [193]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [194]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [195]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [196]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [197]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

