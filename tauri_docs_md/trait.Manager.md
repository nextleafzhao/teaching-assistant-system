## Manager

[![logo][1]][2]

## [tauri][2]2.10.3

## Manager

### Required Methods

  * resources_table



### Provided Methods

  * add_capability
  * app_handle
  * config
  * env
  * get_webview_window
  * manage
  * package_info
  * path
  * state
  * try_state
  * unmanage
  * webview_windows



### Dyn Compatibility

### Implementors

## [In crate tauri][3]

[tauri][3]

# Trait Manager Copy item path

[Source][4]
[code] 
    pub trait Manager<R: [Runtime][5]>: ManagerBase<R> {
    Show 13 methods    // Required method
        fn resources_table(&self) -> [MutexGuard][6]<'_, [ResourceTable][7]>;
    
        // Provided methods
        fn app_handle(&self) -> &[AppHandle][8]<R> { ... }
        fn config(&self) -> &[Config][9] { ... }
        fn package_info(&self) -> &[PackageInfo][10] { ... }
        fn get_webview_window(&self, label: &[str][11]) -> [Option][12]<[WebviewWindow][13]<R>> { ... }
        fn webview_windows(&self) -> [HashMap][14]<[String][15], [WebviewWindow][13]<R>> { ... }
        fn manage<T>(&self, state: T) -> [bool][16]
           where T: [Send][17] + [Sync][18] + 'static { ... }
        fn unmanage<T>(&self) -> [Option][12]<T>
           where T: [Send][17] + [Sync][18] + 'static { ... }
        fn state<T>(&self) -> [State][19]<'_, T>
           where T: [Send][17] + [Sync][18] + 'static { ... }
        fn try_state<T>(&self) -> [Option][12]<[State][19]<'_, T>>
           where T: [Send][17] + [Sync][18] + 'static { ... }
        fn env(&self) -> [Env][20] { ... }
        fn path(&self) -> &[PathResolver][21]<R> { ... }
        fn add_capability(&self, capability: impl [RuntimeCapability][22]) -> [Result][23]<[()][24]> { ... }
    }
[/code]

Expand description

Manages a running application.

## Required Methods§

[Source][25]

#### fn resources_table(&self) -> [MutexGuard][6]<'_, [ResourceTable][7]>

Get a reference to the resources table of this manager.

## Provided Methods§

[Source][26]

#### fn app_handle(&self) -> &[AppHandle][8]<R>

The application handle associated with this manager.

[Source][27]

#### fn config(&self) -> &[Config][9]

The [`Config`][9] the manager was created with.

[Source][28]

#### fn package_info(&self) -> &[PackageInfo][10]

The [`PackageInfo`][10] the manager was created with.

[Source][29]

#### fn get_webview_window(&self, label: &[str][11]) -> [Option][12]<[WebviewWindow][13]<R>>

Fetch a single webview window from the manager.

[Source][30]

#### fn webview_windows(&self) -> [HashMap][14]<[String][15], [WebviewWindow][13]<R>>

Fetch all managed webview windows.

[Source][31]

#### fn manage<T>(&self, state: T) -> [bool][16]

where T: [Send][17] \+ [Sync][18] \+ 'static,

Add `state` to the state managed by the application.

If the state for the `T` type has previously been set, the state is unchanged and false is returned. Otherwise true is returned.

Managed state can be retrieved by any command handler via the [`State`][19] guard. In particular, if a value of type `T` is managed by Tauri, adding `State<T>` to the list of arguments in a command handler instructs Tauri to retrieve the managed value. Additionally, [`state`][32] can be used to retrieve the value manually.

##### §Mutability

Since the managed state is global and must be [`Send`][17] \+ [`Sync`][18], mutations can only happen through interior mutability:
[code] 
    use std::{collections::HashMap, sync::Mutex};
    use tauri::State;
    // here we use Mutex to achieve interior mutability
    struct Storage {
      store: Mutex<HashMap<u64, String>>,
    }
    struct Connection;
    struct DbConnection {
      db: Mutex<Option<Connection>>,
    }
    
    #[tauri::command]
    fn connect(connection: State<DbConnection>) {
      // initialize the connection, mutating the state with interior mutability
      *connection.db.lock().unwrap() = Some(Connection {});
    }
    
    #[tauri::command]
    fn storage_insert(key: u64, value: String, storage: State<Storage>) {
      // mutate the storage behind the Mutex
      storage.store.lock().unwrap().insert(key, value);
    }
    
    tauri::Builder::default()
      .manage(Storage { store: Default::default() })
      .manage(DbConnection { db: Default::default() })
      .invoke_handler(tauri::generate_handler![connect, storage_insert])
      // on an actual app, remove the string argument
      .run(tauri::generate_context!("test/fixture/src-tauri/tauri.conf.json"))
      .expect("error while running tauri application");
[/code]

##### §Examples
[code] 
    use tauri::{Manager, State};
    
    struct MyInt(isize);
    struct MyString(String);
    
    #[tauri::command]
    fn int_command(state: State<MyInt>) -> String {
        format!("The stateful int is: {}", state.0)
    }
    
    #[tauri::command]
    fn string_command<'r>(state: State<'r, MyString>) {
        println!("state: {}", state.inner().0);
    }
    
    tauri::Builder::default()
      .setup(|app| {
        app.manage(MyInt(0));
        app.manage(MyString("tauri".into()));
        // `MyInt` is already managed, so `manage()` returns false
        assert!(!app.manage(MyInt(1)));
        // read the `MyInt` managed state with the turbofish syntax
        let int = app.state::<MyInt>();
        assert_eq!(int.0, 0);
        // read the `MyString` managed state with the `State` guard
        let val: State<MyString> = app.state();
        assert_eq!(val.0, "tauri");
        Ok(())
      })
      .invoke_handler(tauri::generate_handler![int_command, string_command])
      // on an actual app, remove the string argument
      .run(tauri::generate_context!("test/fixture/src-tauri/tauri.conf.json"))
      .expect("error while running tauri application");
[/code]

[Source][33]

#### fn unmanage<T>(&self) -> [Option][12]<T>

where T: [Send][17] \+ [Sync][18] \+ 'static,

👎Deprecated since 2.3.0: This method is unsafe, since it can cause dangling references.

Removes the state managed by the application for T. Returns the state if it was actually removed.

This method is _UNSAFE_ and calling it will cause previously obtained references through [Manager::state][34] and [State::inner][35] to become dangling references.

It is currently deprecated and may be removed in the future.

If you really want to unmanage a state, use [std::sync::Mutex][36] and [Option::take][37] to wrap the state instead.

See [tauri-apps/tauri#12721][38] for more information.

[Source][39]

#### fn state<T>(&self) -> [State][19]<'_, T>

where T: [Send][17] \+ [Sync][18] \+ 'static,

Retrieves the managed state for the type `T`.

##### §Panics

Panics if the state for the type `T` has not been previously [managed][40]. Use [try_state][41] for a non-panicking version.

[Source][42]

#### fn try_state<T>(&self) -> [Option][12]<[State][19]<'_, T>>

where T: [Send][17] \+ [Sync][18] \+ 'static,

Attempts to retrieve the managed state for the type `T`.

Returns `Some` if the state has previously been [managed][40]. Otherwise returns `None`.

[Source][43]

#### fn env(&self) -> [Env][20]

Gets the managed [`Env`][20].

[Source][44]

#### fn path(&self) -> &[PathResolver][21]<R>

The path resolver.

[Source][45]

#### fn add_capability(&self, capability: impl [RuntimeCapability][22]) -> [Result][23]<[()][24]>

Adds a capability to the app.

Note that by default every capability file in the `src-tauri/capabilities` folder are automatically enabled unless specific capabilities are configured in [`tauri.conf.json > app > security > capabilities`][46], so you should use a different director for the runtime-added capabilities or use [tauri_build::Attributes::capabilities_path_pattern][47].

##### §Examples
[code] 
    use tauri::Manager;
    
    tauri::Builder::default()
      .setup(|app| {
        #[cfg(feature = "beta")]
        app.add_capability(include_str!("../capabilities/beta/cap.json"));
    
        #[cfg(feature = "stable")]
        app.add_capability(include_str!("../capabilities/stable/cap.json"));
        Ok(())
      });
[/code]

The above example assumes the following directory layout:
[code] 
    ├── capabilities
    │   ├── app (default capabilities used by any app flavor)
    |   |   |-- cap.json
    │   ├── beta (capabilities only added to a `beta` flavor)
    |   |   |-- cap.json
    │   ├── stable (capabilities only added to a `stable` flavor)
    |       |-- cap.json
[/code]

For this layout to be properly parsed by Tauri, we need to change the build script to
[code] 
    // only pick up capabilities in the capabilities/app folder by default
    let attributes = tauri_build::Attributes::new().capabilities_path_pattern("./capabilities/app/*.json");
    tauri_build::try_build(attributes).unwrap();
[/code]

## Dyn Compatibility§

This trait is **not** [dyn compatible][48].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementors§

[Source][49]§

### impl<R: [Runtime][5]> [Manager][50]<R> for [App][51]<R>

[Source][52]§

### impl<R: [Runtime][5]> [Manager][50]<R> for [AppHandle][8]<R>

[Source][53]§

### impl<R: [Runtime][5]> [Manager][50]<R> for [Webview][54]<R>

[Source][55]§

### impl<R: [Runtime][5]> [Manager][50]<R> for [WebviewWindow][13]<R>

[Source][56]§

### impl<R: [Runtime][5]> [Manager][50]<R> for [Window][57]<R>

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/lib.rs.html#530-827
   [5]: trait.Runtime.html (trait tauri::Runtime)
   [6]: https://doc.rust-lang.org/1.94.1/std/sync/poison/mutex/struct.MutexGuard.html (struct std::sync::poison::mutex::MutexGuard)
   [7]: struct.ResourceTable.html (struct tauri::ResourceTable)
   [8]: struct.AppHandle.html (struct tauri::AppHandle)
   [9]: struct.Config.html (struct tauri::Config)
   [10]: struct.PackageInfo.html (struct tauri::PackageInfo)
   [11]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [12]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [13]: webview/struct.WebviewWindow.html (struct tauri::webview::WebviewWindow)
   [14]: https://doc.rust-lang.org/1.94.1/std/collections/hash/map/struct.HashMap.html (struct std::collections::hash::map::HashMap)
   [15]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [16]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [17]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [18]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [19]: struct.State.html (struct tauri::State)
   [20]: struct.Env.html (struct tauri::Env)
   [21]: path/struct.PathResolver.html (struct tauri::path::PathResolver)
   [22]: ipc/trait.RuntimeCapability.html (trait tauri::ipc::RuntimeCapability)
   [23]: type.Result.html (type tauri::Result)
   [24]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [25]: ../src/tauri/lib.rs.html#758
   [26]: ../src/tauri/lib.rs.html#532-534
   [27]: ../src/tauri/lib.rs.html#537-539
   [28]: ../src/tauri/lib.rs.html#542-544
   [29]: ../src/tauri/lib.rs.html#582-591
   [30]: ../src/tauri/lib.rs.html#594-608
   [31]: ../src/tauri/lib.rs.html#694-699
   [32]: trait.Manager.html#method.state (trait tauri::Manager)
   [33]: ../src/tauri/lib.rs.html#721-727
   [34]: trait.Manager.html#method.state (method tauri::Manager::state)
   [35]: struct.State.html#method.inner (method tauri::State::inner)
   [36]: https://doc.rust-lang.org/1.94.1/std/sync/poison/mutex/struct.Mutex.html (struct std::sync::poison::mutex::Mutex)
   [37]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html#method.take (method core::option::Option::take)
   [38]: https://github.com/tauri-apps/tauri/issues/12721
   [39]: ../src/tauri/lib.rs.html#735-745
   [40]: trait.Manager.html#method.manage (method tauri::Manager::manage)
   [41]: trait.Manager.html#method.try_state (method tauri::Manager::try_state)
   [42]: ../src/tauri/lib.rs.html#750-755
   [43]: ../src/tauri/lib.rs.html#761-763
   [44]: ../src/tauri/lib.rs.html#772-774
   [45]: ../src/tauri/lib.rs.html#819-826
   [46]: https://tauri.app/reference/config/#capabilities
   [47]: https://docs.rs/tauri-build/2/tauri_build/struct.Attributes.html#method.capabilities_path_pattern
   [48]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [49]: ../src/tauri/app.rs.html#683-687
   [50]: trait.Manager.html (trait tauri::Manager)
   [51]: struct.App.html (struct tauri::App)
   [52]: ../src/tauri/app.rs.html#637-641
   [53]: ../src/tauri/webview/mod.rs.html#2256-2263
   [54]: webview/struct.Webview.html (struct tauri::webview::Webview)
   [55]: ../src/tauri/webview/webview_window.rs.html#2573-2581
   [56]: ../src/tauri/window/mod.rs.html#987-994
   [57]: window/struct.Window.html (struct tauri::window::Window)

