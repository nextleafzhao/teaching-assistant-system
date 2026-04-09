## App

[![logo][1]][2]

## [tauri][2]2.10.3

## App

### Methods

  * asset_resolver
  * available_monitors
  * cleanup_before_exit
  * config
  * cursor_position
  * default_window_icon
  * handle
  * hide_menu
  * invoke_key
  * menu
  * monitor_from_point
  * on_menu_event
  * package_info
  * primary_monitor
  * remove_menu
  * run
  * run_iteration
  * run_on_main_thread
  * run_return
  * set_device_event_filter
  * set_menu
  * set_theme
  * show_menu
  * wry_plugin



### Trait Implementations

  * Debug
  * Emitter<R>
  * HasDisplayHandle
  * Listener<R>
  * Manager<R>



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
  * HasRawDisplayHandle
  * Into<U>
  * TryFrom<U>
  * TryInto<U>



## [In crate tauri][3]

[tauri][3]

# Struct App Copy item path

[Source][4]
[code] 
    pub struct App<R: [Runtime][5] = [Wry][6]> { /* private fields */ }
[/code]

Expand description

The instance of the currently running application.

This type implements [`Manager`][7] which allows for manipulation of global application items.

## Implementations§

[Source][8]§

### impl [App][9]<[Wry][6]>

APIs specific to the wry runtime.

[Source][10]

#### pub fn wry_plugin<P: PluginBuilder<[EventLoopMessage][11]> \+ [Send][12] \+ 'static>( &mut self, plugin: P, )

where <P as PluginBuilder<[EventLoopMessage][11]>>::Plugin: [Send][12],

Adds a [`tauri_runtime_wry::Plugin`] using its [`tauri_runtime_wry::PluginBuilder`].

##### §Stability

This API is unstable.

[Source][13]§

### impl<R: [Runtime][5]> [App][9]<R>

[Source][13]

#### pub fn on_menu_event<F: [Fn][14](&[AppHandle][15]<R>, [MenuEvent][16]) + [Send][12] \+ [Sync][17] \+ 'static>( &self, handler: F, )

Registers a global menu event listener.

[Source][13]

#### pub fn config(&self) -> &[Config][18]

Gets the app’s configuration, defined on the `tauri.conf.json` file.

[Source][13]

#### pub fn package_info(&self) -> &[PackageInfo][19]

Gets the app’s package information.

[Source][13]

#### pub fn asset_resolver(&self) -> [AssetResolver][20]<R>

The application’s asset resolver.

[Source][13]

#### pub fn primary_monitor(&self) -> [Result][21]<[Option][22]<[Monitor][23]>>

Returns the primary monitor of the system.

Returns None if it can’t identify any monitor as a primary one.

[Source][13]

#### pub fn monitor_from_point(&self, x: [f64][24], y: [f64][24]) -> [Result][21]<[Option][22]<[Monitor][23]>>

Returns the monitor that contains the given point.

[Source][13]

#### pub fn available_monitors(&self) -> [Result][21]<[Vec][25]<[Monitor][23]>>

Returns the list of all the monitors available on the system.

[Source][13]

#### pub fn cursor_position(&self) -> [Result][21]<[PhysicalPosition][26]<[f64][24]>>

Get the cursor position relative to the top-left hand corner of the desktop.

Note that the top-left hand corner of the desktop is not necessarily the same as the screen. If the user uses a desktop with multiple monitors, the top-left hand corner of the desktop is the top-left hand corner of the main monitor on Windows and macOS or the top-left of the leftmost monitor on X11.

The coordinates can be negative if the top-left hand corner of the window is outside of the visible screen region.

[Source][13]

#### pub fn set_theme(&self, theme: [Option][22]<[Theme][27]>)

Sets the app theme.

###### §Platform-specific

  * **iOS / Android:** Unsupported.



[Source][13]

#### pub fn default_window_icon(&self) -> [Option][22]<&[Image][28]<'_>>

Returns the default window icon.

[Source][13]

#### pub fn menu(&self) -> [Option][22]<[Menu][29]<R>>

Returns the app-wide menu.

[Source][13]

#### pub fn set_menu(&self, menu: [Menu][29]<R>) -> [Result][21]<[Option][22]<[Menu][29]<R>>>

Sets the app-wide menu and returns the previous one.

If a window was not created with an explicit menu or had one set explicitly, this menu will be assigned to it.

[Source][13]

#### pub fn remove_menu(&self) -> [Result][21]<[Option][22]<[Menu][29]<R>>>

Remove the app-wide menu and returns it.

If a window was not created with an explicit menu or had one set explicitly, this will remove the menu from it.

[Source][13]

#### pub fn hide_menu(&self) -> [Result][21]<[()][30]>

Hides the app-wide menu from windows that have it.

If a window was not created with an explicit menu or had one set explicitly, this will hide the menu from it.

[Source][13]

#### pub fn show_menu(&self) -> [Result][21]<[()][30]>

Shows the app-wide menu for windows that have it.

If a window was not created with an explicit menu or had one set explicitly, this will show the menu for it.

[Source][13]

#### pub fn cleanup_before_exit(&self)

Runs necessary cleanup tasks before exiting the process. **You should always exit the tauri app immediately after this function returns and not use any tauri-related APIs.**

[Source][13]

#### pub fn invoke_key(&self) -> &[str][31]

Gets the invoke key that must be referenced when using [`crate::webview::InvokeRequest`][32].

##### §Security

DO NOT expose this key to third party scripts as might grant access to the backend from external URLs and iframes.

[Source][33]§

### impl<R: [Runtime][5]> [App][9]<R>

[Source][34]

#### pub fn run_on_main_thread<F: [FnOnce][35]() + [Send][12] \+ 'static>( &self, f: F, ) -> [Result][21]<[()][30]>

Runs the given closure on the main thread.

[Source][36]

#### pub fn handle(&self) -> &[AppHandle][15]<R>

Gets a handle to the application instance.

[Source][37]

#### pub fn set_device_event_filter(&mut self, filter: [DeviceEventFilter][38])

Change the device event filter mode.

Since the DeviceEvent capture can lead to high CPU usage for unfocused windows, [`tao`][39] will ignore them by default for unfocused windows on Windows. This method allows changing the filter to explicitly capture them again.

###### §Platform-specific

  * ** Linux / macOS / iOS / Android**: Unsupported.



##### §Examples
[code] 
    let mut app = tauri::Builder::default()
      // on an actual app, remove the string argument
      .build(tauri::generate_context!("test/fixture/src-tauri/tauri.conf.json"))
      .expect("error while building tauri application");
    app.set_device_event_filter(tauri::DeviceEventFilter::Always);
    app.run(|_app_handle, _event| {});
[/code]

[Source][40]

#### pub fn run<F: [FnMut][41](&[AppHandle][15]<R>, [RunEvent][42]) + 'static>(self, callback: F)

Runs the application.

This function never returns. When the application finishes, the process is exited directly using [`std::process::exit`][43]. See [`run_return`][44] if you need to run code after the application event loop exits.

##### §Panics

This function will panic if the setup-function supplied in [`Builder::setup`][45] fails.

##### §Examples
[code] 
    let app = tauri::Builder::default()
      // on an actual app, remove the string argument
      .build(tauri::generate_context!("test/fixture/src-tauri/tauri.conf.json"))
      .expect("error while building tauri application");
    app.run(|_app_handle, event| match event {
      tauri::RunEvent::ExitRequested { api, .. } => {
        api.prevent_exit();
      }
      _ => {}
    });
[/code]

[Source][46]

#### pub fn run_return<F: [FnMut][41](&[AppHandle][15]<R>, [RunEvent][42]) + 'static>( self, callback: F, ) -> [i32][47]

Runs the application, returning its intended exit code.

Note when using [`AppHandle::restart`][48] and [`AppHandle::request_restart`][49], this function will handle the restart request, exit and restart the app without returning

###### §Platform-specific

  * **iOS** : Unsupported. The application will fallback to [`run`][50].



##### §Panics

This function will panic if the setup-function supplied in [`Builder::setup`][45] fails.

##### §Examples
[code] 
    let app = tauri::Builder::default()
      // on an actual app, remove the string argument
      .build(tauri::generate_context!("test/fixture/src-tauri/tauri.conf.json"))
      .expect("error while building tauri application");
    let exit_code = app
      .run_return(|_app_handle, event| match event {
        tauri::RunEvent::ExitRequested { api, .. } => {
         api.prevent_exit();
        }
         _ => {}
      });
    
    std::process::exit(exit_code);
[/code]

[Source][51]

#### pub fn run_iteration<F: [FnMut][41](&[AppHandle][15]<R>, [RunEvent][42]) + 'static>( &mut self, callback: F, )

👎Deprecated: When called in a loop (as suggested by the name), this function will busy-loop. To re-gain control of control flow after the app has exited, use `App::run_return` instead.

Runs an iteration of the runtime event loop and immediately return.

Note that when using this API, app cleanup is not automatically done. The cleanup calls [`App::cleanup_before_exit`][52] so you may want to call that function before exiting the application.

##### §Examples
[code] 
    use tauri::Manager;
    
    let mut app = tauri::Builder::default()
      // on an actual app, remove the string argument
      .build(tauri::generate_context!("test/fixture/src-tauri/tauri.conf.json"))
      .expect("error while building tauri application");
    
    loop {
      app.run_iteration(|_app, _event| {});
      if app.webview_windows().is_empty() {
        app.cleanup_before_exit();
        break;
      }
    }
[/code]

## Trait Implementations§

[Source][53]§

### impl<R: [Runtime][5]> [Debug][54] for [App][9]<R>

[Source][55]§

#### fn [fmt][56](&self, f: &mut [Formatter][57]<'_>) -> [Result][58]

Formats the value using the given formatter. [Read more][56]

[Source][13]§

### impl<R: [Runtime][5]> [Emitter][59]<R> for [App][9]<R>

[Source][60]§

#### fn [emit][61]<S: [Serialize][62] \+ [Clone][63]>(&self, event: &[str][31], payload: S) -> [Result][21]<[()][30]>

Emits an event to all [targets][64]. [Read more][61]

[Source][65]§

#### fn [emit_str][66](&self, event: &[str][31], payload: [String][67]) -> [Result][21]<[()][30]>

Similar to [`Emitter::emit`][68] but the payload is json serialized.

[Source][69]§

#### fn [emit_to][70]<I, S>(&self, target: I, event: &[str][31], payload: S) -> [Result][21]<[()][30]>

where I: [Into][71]<[EventTarget][64]>, S: [Serialize][62] \+ [Clone][63],

Emits an event to all [targets][64] matching the given target. [Read more][70]

[Source][72]§

#### fn [emit_str_to][73]<I>(&self, target: I, event: &[str][31], payload: [String][67]) -> [Result][21]<[()][30]>

where I: [Into][71]<[EventTarget][64]>,

Similar to [`Emitter::emit_to`][74] but the payload is json serialized.

[Source][75]§

#### fn [emit_filter][76]<S, F>(&self, event: &[str][31], payload: S, filter: F) -> [Result][21]<[()][30]>

where S: [Serialize][62] \+ [Clone][63], F: [Fn][14](&[EventTarget][64]) -> [bool][77],

Emits an event to all [targets][64] based on the given filter. [Read more][76]

[Source][78]§

#### fn [emit_str_filter][79]<F>( &self, event: &[str][31], payload: [String][67], filter: F, ) -> [Result][21]<[()][30]>

where F: [Fn][14](&[EventTarget][64]) -> [bool][77],

Similar to [`Emitter::emit_filter`][80] but the payload is json serialized.

[Source][81]§

### impl<R: [Runtime][5]> HasDisplayHandle for [App][9]<R>

[Source][82]§

#### fn display_handle(&self) -> [Result][83]<DisplayHandle<'_>, HandleError>

Get a handle to the display controller of the windowing system.

[Source][13]§

### impl<R: [Runtime][5]> [Listener][84]<R> for [App][9]<R>

[Source][13]§

#### fn [listen][85]<F>(&self, event: impl [Into][71]<[String][67]>, handler: F) -> [EventId][86]

where F: [Fn][14]([Event][87]) + [Send][12] \+ 'static,

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

[Source][13]§

#### fn [once][88]<F>(&self, event: impl [Into][71]<[String][67]>, handler: F) -> [EventId][86]

where F: [FnOnce][35]([Event][87]) + [Send][12] \+ 'static,

Listen to an event on this app only once.

See [`Self::listen`][89] for more information.

[Source][13]§

#### fn [unlisten][90](&self, id: [EventId][86])

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

[Source][91]§

#### fn [listen_any][92]<F>(&self, event: impl [Into][71]<[String][67]>, handler: F) -> [EventId][86]

where F: [Fn][14]([Event][87]) + [Send][12] \+ 'static,

Listen to an emitted event to any [target][64]. [Read more][92]

[Source][93]§

#### fn [once_any][94]<F>(&self, event: impl [Into][71]<[String][67]>, handler: F) -> [EventId][86]

where F: [FnOnce][35]([Event][87]) + [Send][12] \+ 'static,

Listens once to an emitted event to any [target][64] . [Read more][94]

[Source][95]§

### impl<R: [Runtime][5]> [Manager][7]<R> for [App][9]<R>

[Source][96]§

#### fn [resources_table][97](&self) -> [MutexGuard][98]<'_, [ResourceTable][99]>

Get a reference to the resources table of this manager.

[Source][100]§

#### fn [app_handle][101](&self) -> &[AppHandle][15]<R>

The application handle associated with this manager.

[Source][102]§

#### fn [config][103](&self) -> &[Config][18]

The [`Config`][18] the manager was created with.

[Source][104]§

#### fn [package_info][105](&self) -> &[PackageInfo][19]

The [`PackageInfo`][19] the manager was created with.

[Source][106]§

#### fn [get_webview_window][107](&self, label: &[str][31]) -> [Option][22]<[WebviewWindow][108]<R>>

Fetch a single webview window from the manager.

[Source][109]§

#### fn [webview_windows][110](&self) -> [HashMap][111]<[String][67], [WebviewWindow][108]<R>>

Fetch all managed webview windows.

[Source][112]§

#### fn [manage][113]<T>(&self, state: T) -> [bool][77]

where T: [Send][12] \+ [Sync][17] \+ 'static,

Add `state` to the state managed by the application. [Read more][113]

[Source][114]§

#### fn [unmanage][115]<T>(&self) -> [Option][22]<T>

where T: [Send][12] \+ [Sync][17] \+ 'static,

👎Deprecated since 2.3.0: This method is unsafe, since it can cause dangling references.

Removes the state managed by the application for T. Returns the state if it was actually removed. [Read more][115]

[Source][116]§

#### fn [state][117]<T>(&self) -> [State][118]<'_, T>

where T: [Send][12] \+ [Sync][17] \+ 'static,

Retrieves the managed state for the type `T`. [Read more][117]

[Source][119]§

#### fn [try_state][120]<T>(&self) -> [Option][22]<[State][118]<'_, T>>

where T: [Send][12] \+ [Sync][17] \+ 'static,

Attempts to retrieve the managed state for the type `T`. [Read more][120]

[Source][121]§

#### fn [env][122](&self) -> [Env][123]

Gets the managed [`Env`][123].

[Source][124]§

#### fn [path][125](&self) -> &[PathResolver][126]<R>

The path resolver.

[Source][127]§

#### fn [add_capability][128](&self, capability: impl [RuntimeCapability][129]) -> [Result][21]<[()][30]>

Adds a capability to the app. [Read more][128]

## Auto Trait Implementations§

§

### impl<R> [Freeze][130] for [App][9]<R>

where R: [Freeze][130], <R as Runtime<[EventLoopMessage][11]>>::Handle: [Freeze][130],

§

### impl<R = Wry<[EventLoopMessage][11]>> ![RefUnwindSafe][131] for [App][9]<R>

§

### impl<R> [Send][12] for [App][9]<R>

where R: [Send][12],

§

### impl<R = Wry<[EventLoopMessage][11]>> ![Sync][17] for [App][9]<R>

§

### impl<R> [Unpin][132] for [App][9]<R>

where R: [Unpin][132], <R as Runtime<[EventLoopMessage][11]>>::Handle: [Unpin][132],

§

### impl<R = Wry<[EventLoopMessage][11]>> ![UnwindSafe][133] for [App][9]<R>

## Blanket Implementations§

[Source][134]§

### impl<T> [Any][135] for T

where T: 'static + ?[Sized][136],

[Source][137]§

#### fn [type_id][138](&self) -> [TypeId][139]

Gets the `TypeId` of `self`. [Read more][138]

[Source][140]§

### impl<T> [Borrow][141]<T> for T

where T: ?[Sized][136],

[Source][142]§

#### fn [borrow][143](&self) -> [&T][144]

Immutably borrows from an owned value. [Read more][143]

[Source][145]§

### impl<T> [BorrowMut][146]<T> for T

where T: ?[Sized][136],

[Source][147]§

#### fn [borrow_mut][148](&mut self) -> [&mut T][144]

Mutably borrows from an owned value. [Read more][148]

[Source][149]§

### impl<T> [From][150]<T> for T

[Source][151]§

#### fn [from][152](t: T) -> T

Returns the argument unchanged.

§

### impl<T> HasRawDisplayHandle for T

where T: HasDisplayHandle + ?[Sized][136],

§

#### fn raw_display_handle(&self) -> [Result][83]<RawDisplayHandle, HandleError>

👎Deprecated: Use `HasDisplayHandle` instead

[Source][153]§

### impl<T, U> [Into][71]<U> for T

where U: [From][150]<T>,

[Source][154]§

#### fn [into][155](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][150]<T> for U` chooses to do.

[Source][156]§

### impl<T, U> [TryFrom][157]<U> for T

where U: [Into][71]<T>,

[Source][158]§

#### type [Error][159] = [Infallible][160]

The type returned in the event of a conversion error.

[Source][161]§

#### fn [try_from][162](value: U) -> [Result][83]<T, <T as [TryFrom][157]<U>>::[Error][163]>

Performs the conversion.

[Source][164]§

### impl<T, U> [TryInto][165]<U> for T

where U: [TryFrom][157]<T>,

[Source][166]§

#### type [Error][167] = <U as [TryFrom][157]<T>>::[Error][163]

The type returned in the event of a conversion error.

[Source][168]§

#### fn [try_into][169](self) -> [Result][83]<U, <U as [TryFrom][157]<T>>::[Error][163]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/app.rs.html#665-671
   [5]: trait.Runtime.html (trait tauri::Runtime)
   [6]: type.Wry.html (type tauri::Wry)
   [7]: trait.Manager.html (trait tauri::Manager)
   [8]: ../src/tauri/app.rs.html#713-727
   [9]: struct.App.html (struct tauri::App)
   [10]: ../src/tauri/app.rs.html#719-726
   [11]: enum.EventLoopMessage.html (enum tauri::EventLoopMessage)
   [12]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [13]: ../src/tauri/app.rs.html#1114
   [14]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.Fn.html (trait core::ops::function::Fn)
   [15]: struct.AppHandle.html (struct tauri::AppHandle)
   [16]: menu/struct.MenuEvent.html (struct tauri::menu::MenuEvent)
   [17]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [18]: struct.Config.html (struct tauri::Config)
   [19]: struct.PackageInfo.html (struct tauri::PackageInfo)
   [20]: struct.AssetResolver.html (struct tauri::AssetResolver)
   [21]: type.Result.html (type tauri::Result)
   [22]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [23]: window/struct.Monitor.html (struct tauri::window::Monitor)
   [24]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html
   [25]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [26]: struct.PhysicalPosition.html (struct tauri::PhysicalPosition)
   [27]: enum.Theme.html (enum tauri::Theme)
   [28]: image/struct.Image.html (struct tauri::image::Image)
   [29]: menu/struct.Menu.html (struct tauri::menu::Menu)
   [30]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [31]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [32]: webview/struct.InvokeRequest.html (struct tauri::webview::InvokeRequest)
   [33]: ../src/tauri/app.rs.html#1117-1362
   [34]: ../src/tauri/app.rs.html#1138-1140
   [35]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [36]: ../src/tauri/app.rs.html#1143-1145
   [37]: ../src/tauri/app.rs.html#1210-1216
   [38]: enum.DeviceEventFilter.html (enum tauri::DeviceEventFilter)
   [39]: https://crates.io/crates/tao
   [40]: ../src/tauri/app.rs.html#1240-1248
   [41]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnMut.html (trait core::ops::function::FnMut)
   [42]: enum.RunEvent.html (enum tauri::RunEvent)
   [43]: https://doc.rust-lang.org/1.94.1/std/process/fn.exit.html (fn std::process::exit)
   [44]: struct.App.html#method.run_return (method tauri::App::run_return)
   [45]: struct.Builder.html#method.setup (method tauri::Builder::setup)
   [46]: ../src/tauri/app.rs.html#1279-1287
   [47]: https://doc.rust-lang.org/1.94.1/std/primitive.i32.html
   [48]: struct.AppHandle.html#method.restart (method tauri::AppHandle::restart)
   [49]: struct.AppHandle.html#method.request_restart (method tauri::AppHandle::request_restart)
   [50]: struct.App.html#method.run (method tauri::App::run)
   [51]: ../src/tauri/app.rs.html#1345-1361
   [52]: struct.App.html#method.cleanup_before_exit (method tauri::App::cleanup_before_exit)
   [53]: ../src/tauri/app.rs.html#673-681
   [54]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [55]: ../src/tauri/app.rs.html#674-680
   [56]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [57]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [58]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [59]: trait.Emitter.html (trait tauri::Emitter)
   [60]: ../src/tauri/lib.rs.html#952-956
   [61]: trait.Emitter.html#method.emit
   [62]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [63]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [64]: enum.EventTarget.html (enum tauri::EventTarget)
   [65]: ../src/tauri/lib.rs.html#959-963
   [66]: trait.Emitter.html#method.emit_str
   [67]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [68]: trait.Emitter.html#method.emit (method tauri::Emitter::emit)
   [69]: ../src/tauri/lib.rs.html#987-995
   [70]: trait.Emitter.html#method.emit_to
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [72]: ../src/tauri/lib.rs.html#998-1005
   [73]: trait.Emitter.html#method.emit_str_to
   [74]: trait.Emitter.html#method.emit_to (method tauri::Emitter::emit_to)
   [75]: ../src/tauri/lib.rs.html#1025-1033
   [76]: trait.Emitter.html#method.emit_filter
   [77]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [78]: ../src/tauri/lib.rs.html#1036-1043
   [79]: trait.Emitter.html#method.emit_str_filter
   [80]: trait.Emitter.html#method.emit_filter (method tauri::Emitter::emit_filter)
   [81]: ../src/tauri/app.rs.html#2361-2367
   [82]: ../src/tauri/app.rs.html#2362-2366
   [83]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [84]: trait.Listener.html (trait tauri::Listener)
   [85]: trait.Listener.html#tymethod.listen
   [86]: type.EventId.html (type tauri::EventId)
   [87]: struct.Event.html (struct tauri::Event)
   [88]: trait.Listener.html#tymethod.once
   [89]: struct.App.html#method.listen (method tauri::App::listen)
   [90]: trait.Listener.html#tymethod.unlisten
   [91]: ../src/tauri/lib.rs.html#916-922
   [92]: trait.Listener.html#method.listen_any
   [93]: ../src/tauri/lib.rs.html#929-935
   [94]: trait.Listener.html#method.once_any
   [95]: ../src/tauri/app.rs.html#683-687
   [96]: ../src/tauri/app.rs.html#684-686
   [97]: trait.Manager.html#tymethod.resources_table
   [98]: https://doc.rust-lang.org/1.94.1/std/sync/poison/mutex/struct.MutexGuard.html (struct std::sync::poison::mutex::MutexGuard)
   [99]: struct.ResourceTable.html (struct tauri::ResourceTable)
   [100]: ../src/tauri/lib.rs.html#532-534
   [101]: trait.Manager.html#method.app_handle
   [102]: ../src/tauri/lib.rs.html#537-539
   [103]: trait.Manager.html#method.config
   [104]: ../src/tauri/lib.rs.html#542-544
   [105]: trait.Manager.html#method.package_info
   [106]: ../src/tauri/lib.rs.html#582-591
   [107]: trait.Manager.html#method.get_webview_window
   [108]: webview/struct.WebviewWindow.html (struct tauri::webview::WebviewWindow)
   [109]: ../src/tauri/lib.rs.html#594-608
   [110]: trait.Manager.html#method.webview_windows
   [111]: https://doc.rust-lang.org/1.94.1/std/collections/hash/map/struct.HashMap.html (struct std::collections::hash::map::HashMap)
   [112]: ../src/tauri/lib.rs.html#694-699
   [113]: trait.Manager.html#method.manage
   [114]: ../src/tauri/lib.rs.html#721-727
   [115]: trait.Manager.html#method.unmanage
   [116]: ../src/tauri/lib.rs.html#735-745
   [117]: trait.Manager.html#method.state
   [118]: struct.State.html (struct tauri::State)
   [119]: ../src/tauri/lib.rs.html#750-755
   [120]: trait.Manager.html#method.try_state
   [121]: ../src/tauri/lib.rs.html#761-763
   [122]: trait.Manager.html#method.env
   [123]: struct.Env.html (struct tauri::Env)
   [124]: ../src/tauri/lib.rs.html#772-774
   [125]: trait.Manager.html#method.path
   [126]: path/struct.PathResolver.html (struct tauri::path::PathResolver)
   [127]: ../src/tauri/lib.rs.html#819-826
   [128]: trait.Manager.html#method.add_capability
   [129]: ipc/trait.RuntimeCapability.html (trait tauri::ipc::RuntimeCapability)
   [130]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [131]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [132]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [133]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [134]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [135]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [136]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [137]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [138]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [139]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [140]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [141]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [142]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [143]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [144]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [145]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [146]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [147]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [148]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [149]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [150]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [151]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [152]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [153]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [154]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [155]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [156]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [157]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [158]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [159]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [160]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [161]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [162]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [163]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [164]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [165]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [166]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [167]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [168]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [169]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

