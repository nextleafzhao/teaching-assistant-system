## PathResolver

[![logo][1]][2]

## [tauri][2]2.10.3

## PathResolver

### Methods

  * app_cache_dir
  * app_config_dir
  * app_data_dir
  * app_local_data_dir
  * app_log_dir
  * audio_dir
  * cache_dir
  * config_dir
  * data_dir
  * desktop_dir
  * document_dir
  * download_dir
  * executable_dir
  * file_name
  * font_dir
  * home_dir
  * local_data_dir
  * parse
  * picture_dir
  * public_dir
  * resolve
  * resource_dir
  * runtime_dir
  * temp_dir
  * template_dir
  * video_dir



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



## [In tauri::path][3]

[tauri][4]::[path][3]

# Struct PathResolver Copy item path

[Source][5]
[code] 
    pub struct PathResolver<R: [Runtime][6]>(/* private fields */);
[/code]

Expand description

The path resolver is a helper class for general and application-specific path APIs.

## Implementations§

[Source][7]§

### impl<R: [Runtime][6]> [PathResolver][8]<R>

[Source][9]

#### pub fn file_name(&self, path: &[str][10]) -> [Option][11]<[String][12]>

Returns the final component of the `Path`, if there is one.

If the path is a normal file, this is the file name. If it’s the path of a directory, this is the directory name.

Returns [`None`][13] if the path terminates in `..`.

On Android this also supports checking the file name of content URIs, such as the values returned by the dialog plugin.

If you are dealing with plain file system paths or not worried about Android content URIs, prefer [`Path::file_name`][14].

[Source][15]

#### pub fn audio_dir(&self) -> [Result][16]<[PathBuf][17]>

Returns the path to the user’s audio directory.

###### §Platform-specific

  * **Linux:** Resolves to [`xdg-user-dirs`][18]’ `XDG_MUSIC_DIR`.
  * **macOS:** Resolves to `$HOME/Music`.
  * **Windows:** Resolves to `{FOLDERID_Music}`.



[Source][19]

#### pub fn cache_dir(&self) -> [Result][16]<[PathBuf][17]>

Returns the path to the user’s cache directory.

###### §Platform-specific

  * **Linux:** Resolves to `$XDG_CACHE_HOME` or `$HOME/.cache`.
  * **macOS:** Resolves to `$HOME/Library/Caches`.
  * **Windows:** Resolves to `{FOLDERID_LocalAppData}`.



[Source][20]

#### pub fn config_dir(&self) -> [Result][16]<[PathBuf][17]>

Returns the path to the user’s config directory.

###### §Platform-specific

  * **Linux:** Resolves to `$XDG_CONFIG_HOME` or `$HOME/.config`.
  * **macOS:** Resolves to `$HOME/Library/Application Support`.
  * **Windows:** Resolves to `{FOLDERID_RoamingAppData}`.



[Source][21]

#### pub fn data_dir(&self) -> [Result][16]<[PathBuf][17]>

Returns the path to the user’s data directory.

###### §Platform-specific

  * **Linux:** Resolves to `$XDG_DATA_HOME` or `$HOME/.local/share`.
  * **macOS:** Resolves to `$HOME/Library/Application Support`.
  * **Windows:** Resolves to `{FOLDERID_RoamingAppData}`.



[Source][22]

#### pub fn local_data_dir(&self) -> [Result][16]<[PathBuf][17]>

Returns the path to the user’s local data directory.

###### §Platform-specific

  * **Linux:** Resolves to `$XDG_DATA_HOME` or `$HOME/.local/share`.
  * **macOS:** Resolves to `$HOME/Library/Application Support`.
  * **Windows:** Resolves to `{FOLDERID_LocalAppData}`.



[Source][23]

#### pub fn desktop_dir(&self) -> [Result][16]<[PathBuf][17]>

Returns the path to the user’s desktop directory.

###### §Platform-specific

  * **Linux:** Resolves to [`xdg-user-dirs`][18]’ `XDG_DESKTOP_DIR`.
  * **macOS:** Resolves to `$HOME/Desktop`.
  * **Windows:** Resolves to `{FOLDERID_Desktop}`.



[Source][24]

#### pub fn document_dir(&self) -> [Result][16]<[PathBuf][17]>

Returns the path to the user’s document directory.

###### §Platform-specific

  * **Linux:** Resolves to [`xdg-user-dirs`][18]’ `XDG_DOCUMENTS_DIR`.
  * **macOS:** Resolves to `$HOME/Documents`.
  * **Windows:** Resolves to `{FOLDERID_Documents}`.



[Source][25]

#### pub fn download_dir(&self) -> [Result][16]<[PathBuf][17]>

Returns the path to the user’s download directory.

###### §Platform-specific

  * **Linux:** Resolves to [`xdg-user-dirs`][18]’ `XDG_DOWNLOAD_DIR`.
  * **macOS:** Resolves to `$HOME/Downloads`.
  * **Windows:** Resolves to `{FOLDERID_Downloads}`.



[Source][26]

#### pub fn executable_dir(&self) -> [Result][16]<[PathBuf][17]>

Returns the path to the user’s executable directory.

###### §Platform-specific

  * **Linux:** Resolves to `$XDG_BIN_HOME/../bin` or `$XDG_DATA_HOME/../bin` or `$HOME/.local/bin`.
  * **macOS:** Not supported.
  * **Windows:** Not supported.



[Source][27]

#### pub fn font_dir(&self) -> [Result][16]<[PathBuf][17]>

Returns the path to the user’s font directory.

###### §Platform-specific

  * **Linux:** Resolves to `$XDG_DATA_HOME/fonts` or `$HOME/.local/share/fonts`.
  * **macOS:** Resolves to `$HOME/Library/Fonts`.
  * **Windows:** Not supported.



[Source][28]

#### pub fn home_dir(&self) -> [Result][16]<[PathBuf][17]>

Returns the path to the user’s home directory.

###### §Platform-specific

  * **Linux:** Resolves to `$HOME`.
  * **macOS:** Resolves to `$HOME`.
  * **Windows:** Resolves to `{FOLDERID_Profile}`.
  * **iOS** : Cannot be written to directly, use one of the app paths instead.



[Source][29]

#### pub fn picture_dir(&self) -> [Result][16]<[PathBuf][17]>

Returns the path to the user’s picture directory.

###### §Platform-specific

  * **Linux:** Resolves to [`xdg-user-dirs`][18]’ `XDG_PICTURES_DIR`.
  * **macOS:** Resolves to `$HOME/Pictures`.
  * **Windows:** Resolves to `{FOLDERID_Pictures}`.



[Source][30]

#### pub fn public_dir(&self) -> [Result][16]<[PathBuf][17]>

Returns the path to the user’s public directory.

###### §Platform-specific

  * **Linux:** Resolves to [`xdg-user-dirs`][18]’ `XDG_PUBLICSHARE_DIR`.
  * **macOS:** Resolves to `$HOME/Public`.
  * **Windows:** Resolves to `{FOLDERID_Public}`.



[Source][31]

#### pub fn runtime_dir(&self) -> [Result][16]<[PathBuf][17]>

Returns the path to the user’s runtime directory.

###### §Platform-specific

  * **Linux:** Resolves to `$XDG_RUNTIME_DIR`.
  * **macOS:** Not supported.
  * **Windows:** Not supported.



[Source][32]

#### pub fn template_dir(&self) -> [Result][16]<[PathBuf][17]>

Returns the path to the user’s template directory.

###### §Platform-specific

  * **Linux:** Resolves to [`xdg-user-dirs`][18]’ `XDG_TEMPLATES_DIR`.
  * **macOS:** Not supported.
  * **Windows:** Resolves to `{FOLDERID_Templates}`.



[Source][33]

#### pub fn video_dir(&self) -> [Result][16]<[PathBuf][17]>

Returns the path to the user’s video dir

###### §Platform-specific

  * **Linux:** Resolves to [`xdg-user-dirs`][18]’ `XDG_VIDEOS_DIR`.
  * **macOS:** Resolves to `$HOME/Movies`.
  * **Windows:** Resolves to `{FOLDERID_Videos}`.



[Source][34]

#### pub fn resource_dir(&self) -> [Result][16]<[PathBuf][17]>

Returns the path to the resource directory of this app.

###### §Platform-specific

Although we provide the exact path where this function resolves to, this is not a contract and things might change in the future

  * **Windows:** Resolves to the directory that contains the main executable.
  * **Linux:** When running in an AppImage, the `APPDIR` variable will be set to the mounted location of the app, and the resource dir will be `${APPDIR}/usr/lib/${exe_name}`. If not running in an AppImage, the path is `/usr/lib/${exe_name}`. When running the app from `src-tauri/target/(debug|release)/`, the path is `${exe_dir}/../lib/${exe_name}`.
  * **macOS:** Resolves to `${exe_dir}/../Resources` (inside .app).
  * **iOS:** Resolves to `${exe_dir}/assets`.
  * **Android:** Currently the resources are stored in the APK as assets so it’s not a normal file system path, we return a special URI prefix `asset://localhost/` here that can be used with the [file system plugin][35], with that, you can read the files through [`FsExt::fs`][36] like this: `app.fs().read_to_string(app.path().resource_dir().unwrap().join("resource"));`



[Source][37]

#### pub fn app_config_dir(&self) -> [Result][16]<[PathBuf][17]>

Returns the path to the suggested directory for your app’s config files.

Resolves to [`config_dir`][38]`/${bundle_identifier}`.

[Source][39]

#### pub fn app_data_dir(&self) -> [Result][16]<[PathBuf][17]>

Returns the path to the suggested directory for your app’s data files.

Resolves to [`data_dir`][40]`/${bundle_identifier}`.

[Source][41]

#### pub fn app_local_data_dir(&self) -> [Result][16]<[PathBuf][17]>

Returns the path to the suggested directory for your app’s local data files.

Resolves to [`local_data_dir`][42]`/${bundle_identifier}`.

[Source][43]

#### pub fn app_cache_dir(&self) -> [Result][16]<[PathBuf][17]>

Returns the path to the suggested directory for your app’s cache files.

Resolves to [`cache_dir`][44]`/${bundle_identifier}`.

[Source][45]

#### pub fn app_log_dir(&self) -> [Result][16]<[PathBuf][17]>

Returns the path to the suggested directory for your app’s log files.

###### §Platform-specific

  * **Linux:** Resolves to [`local_data_dir`][42]`/${bundle_identifier}/logs`.
  * **macOS:** Resolves to [`home_dir`][46]`/Library/Logs/${bundle_identifier}`
  * **Windows:** Resolves to [`local_data_dir`][42]`/${bundle_identifier}/logs`.



[Source][47]

#### pub fn temp_dir(&self) -> [Result][16]<[PathBuf][17]>

A temporary directory. Resolves to [`std::env::temp_dir`][48].

[Source][49]§

### impl<R: [Runtime][6]> [PathResolver][8]<R>

[Source][50]

#### pub fn resolve<P: [AsRef][51]<[Path][52]>>( &self, path: P, base_directory: [BaseDirectory][53], ) -> [Result][16]<[PathBuf][17]>

Resolves the path with the base directory.

##### §Examples
[code] 
    use tauri::{path::BaseDirectory, Manager};
    tauri::Builder::default()
      .setup(|app| {
        let path = app.path().resolve("path/to/something", BaseDirectory::Config)?;
        assert_eq!(path.to_str().unwrap(), "/home/${whoami}/.config/path/to/something");
        Ok(())
      });
[/code]

[Source][54]

#### pub fn parse<P: [AsRef][51]<[Path][52]>>(&self, path: P) -> [Result][16]<[PathBuf][17]>

Parse the given path, resolving a [`BaseDirectory`][53] variable if the path starts with one.

##### §Examples
[code] 
    use tauri::Manager;
    tauri::Builder::default()
      .setup(|app| {
        let path = app.path().parse("$HOME/.bashrc")?;
        assert_eq!(path.to_str().unwrap(), "/home/${whoami}/.bashrc");
        Ok(())
      });
[/code]

## Trait Implementations§

[Source][55]§

### impl<R: [Runtime][6]> [Clone][56] for [PathResolver][8]<R>

[Source][57]§

#### fn [clone][58](&self) -> Self

Returns a duplicate of the value. [Read more][58]

1.0.0 · [Source][59]§

#### fn [clone_from][60](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][60]

## Auto Trait Implementations§

§

### impl<R> [Freeze][61] for [PathResolver][8]<R>

where <R as Runtime<[EventLoopMessage][62]>>::Handle: [Freeze][61],

§

### impl<R> ![RefUnwindSafe][63] for [PathResolver][8]<R>

§

### impl<R> [Send][64] for [PathResolver][8]<R>

§

### impl<R> [Sync][65] for [PathResolver][8]<R>

§

### impl<R> [Unpin][66] for [PathResolver][8]<R>

where <R as Runtime<[EventLoopMessage][62]>>::Handle: [Unpin][66],

§

### impl<R> ![UnwindSafe][67] for [PathResolver][8]<R>

## Blanket Implementations§

[Source][68]§

### impl<T> [Any][69] for T

where T: 'static + ?[Sized][70],

[Source][71]§

#### fn [type_id][72](&self) -> [TypeId][73]

Gets the `TypeId` of `self`. [Read more][72]

[Source][74]§

### impl<T> [Borrow][75]<T> for T

where T: ?[Sized][70],

[Source][76]§

#### fn [borrow][77](&self) -> [&T][78]

Immutably borrows from an owned value. [Read more][77]

[Source][79]§

### impl<T> [BorrowMut][80]<T> for T

where T: ?[Sized][70],

[Source][81]§

#### fn [borrow_mut][82](&mut self) -> [&mut T][78]

Mutably borrows from an owned value. [Read more][82]

[Source][83]§

### impl<T> [CloneToUninit][84] for T

where T: [Clone][56],

[Source][85]§

#### unsafe fn [clone_to_uninit][86](&self, dest: [*mut ][87][u8][88])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][86]

[Source][89]§

### impl<T> [From][90]<T> for T

[Source][91]§

#### fn [from][92](t: T) -> T

Returns the argument unchanged.

[Source][93]§

### impl<T, U> [Into][94]<U> for T

where U: [From][90]<T>,

[Source][95]§

#### fn [into][96](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][90]<T> for U` chooses to do.

[Source][97]§

### impl<T> [ToOwned][98] for T

where T: [Clone][56],

[Source][99]§

#### type [Owned][100] = T

The resulting type after obtaining ownership.

[Source][101]§

#### fn [to_owned][102](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][102]

[Source][103]§

#### fn [clone_into][104](&self, target: [&mut T][78])

Uses borrowed data to replace owned data, usually by cloning. [Read more][104]

[Source][105]§

### impl<T, U> [TryFrom][106]<U> for T

where U: [Into][94]<T>,

[Source][107]§

#### type [Error][108] = [Infallible][109]

The type returned in the event of a conversion error.

[Source][110]§

#### fn [try_from][111](value: U) -> [Result][112]<T, <T as [TryFrom][106]<U>>::[Error][113]>

Performs the conversion.

[Source][114]§

### impl<T, U> [TryInto][115]<U> for T

where U: [TryFrom][106]<T>,

[Source][116]§

#### type [Error][117] = <U as [TryFrom][106]<T>>::[Error][113]

The type returned in the event of a conversion error.

[Source][118]§

#### fn [try_into][119](self) -> [Result][112]<U, <U as [TryFrom][106]<T>>::[Error][113]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/path/desktop.rs.html#10
   [6]: ../trait.Runtime.html (trait tauri::Runtime)
   [7]: ../../src/tauri/path/desktop.rs.html#18-296
   [8]: struct.PathResolver.html (struct tauri::path::PathResolver)
   [9]: ../../src/tauri/path/desktop.rs.html#29-33
   [10]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [11]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [12]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [13]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html#variant.None (variant core::option::Option::None)
   [14]: https://doc.rust-lang.org/1.94.1/std/path/struct.Path.html#method.file_name (method std::path::Path::file_name)
   [15]: ../../src/tauri/path/desktop.rs.html#42-44
   [16]: ../type.Result.html (type tauri::Result)
   [17]: https://doc.rust-lang.org/1.94.1/std/path/struct.PathBuf.html (struct std::path::PathBuf)
   [18]: https://www.freedesktop.org/wiki/Software/xdg-user-dirs/
   [19]: ../../src/tauri/path/desktop.rs.html#53-55
   [20]: ../../src/tauri/path/desktop.rs.html#64-66
   [21]: ../../src/tauri/path/desktop.rs.html#75-77
   [22]: ../../src/tauri/path/desktop.rs.html#86-88
   [23]: ../../src/tauri/path/desktop.rs.html#97-99
   [24]: ../../src/tauri/path/desktop.rs.html#108-110
   [25]: ../../src/tauri/path/desktop.rs.html#119-121
   [26]: ../../src/tauri/path/desktop.rs.html#130-132
   [27]: ../../src/tauri/path/desktop.rs.html#141-143
   [28]: ../../src/tauri/path/desktop.rs.html#153-155
   [29]: ../../src/tauri/path/desktop.rs.html#164-166
   [30]: ../../src/tauri/path/desktop.rs.html#175-177
   [31]: ../../src/tauri/path/desktop.rs.html#186-188
   [32]: ../../src/tauri/path/desktop.rs.html#197-199
   [33]: ../../src/tauri/path/desktop.rs.html#208-210
   [34]: ../../src/tauri/path/desktop.rs.html#230-233
   [35]: https://tauri.app/plugin/file-system/
   [36]: https://docs.rs/tauri-plugin-fs/latest/tauri_plugin_fs/trait.FsExt.html#tymethod.fs
   [37]: ../../src/tauri/path/desktop.rs.html#238-242
   [38]: struct.PathResolver.html#method.config_dir (method tauri::path::PathResolver::config_dir)
   [39]: ../../src/tauri/path/desktop.rs.html#247-251
   [40]: struct.PathResolver.html#method.data_dir (method tauri::path::PathResolver::data_dir)
   [41]: ../../src/tauri/path/desktop.rs.html#256-260
   [42]: struct.PathResolver.html#method.local_data_dir (method tauri::path::PathResolver::local_data_dir)
   [43]: ../../src/tauri/path/desktop.rs.html#265-269
   [44]: struct.PathResolver.html#method.cache_dir (method tauri::path::PathResolver::cache_dir)
   [45]: ../../src/tauri/path/desktop.rs.html#278-290
   [46]: struct.PathResolver.html#method.home_dir (method tauri::path::PathResolver::home_dir)
   [47]: ../../src/tauri/path/desktop.rs.html#293-295
   [48]: https://doc.rust-lang.org/1.94.1/std/env/fn.temp_dir.html (fn std::env::temp_dir)
   [49]: ../../src/tauri/path/mod.rs.html#249-304
   [50]: ../../src/tauri/path/mod.rs.html#263-265
   [51]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [52]: https://doc.rust-lang.org/1.94.1/std/path/struct.Path.html (struct std::path::Path)
   [53]: enum.BaseDirectory.html (enum tauri::path::BaseDirectory)
   [54]: ../../src/tauri/path/mod.rs.html#280-303
   [55]: ../../src/tauri/path/desktop.rs.html#12-16
   [56]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [57]: ../../src/tauri/path/desktop.rs.html#13-15
   [58]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [59]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [60]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [61]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [62]: ../enum.EventLoopMessage.html (enum tauri::EventLoopMessage)
   [63]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [64]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [65]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [66]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [67]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [68]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [69]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [70]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [71]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [72]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [73]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [74]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [75]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [76]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [77]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [78]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [79]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [80]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [81]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [82]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [83]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [84]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [85]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [86]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [87]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [88]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [89]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [90]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [91]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [92]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [93]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [94]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [95]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [96]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [97]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [98]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [99]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [100]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [101]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [102]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [103]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [104]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [105]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [106]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [107]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [108]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [109]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [110]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [111]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [112]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [113]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [114]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [115]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [116]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [117]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [118]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [119]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

