## current_binary

[![logo][1]][2]

## [tauri][2]2.10.3

## current_binary

### Sections

  * Platform-specific behavior
    * Linux
    * macOS
  * Security
  * Examples



## [In tauri::process][3]

[tauri][4]::[process][3]

# Function current_binary Copy item path

[Source][5]
[code] 
    pub fn current_binary(_env: &[Env][6]) -> [Result][7]<[PathBuf][8]>
[/code]

Expand description

Finds the current running binary’s path.

With exception to any following platform-specific behavior, the path is cached as soon as possible, and then used repeatedly instead of querying for a new path every time this function is called.

## §Platform-specific behavior

### §Linux

On Linux, this function will **attempt** to detect if it’s currently running from a valid [AppImage][9] and use that path instead.

### §macOS

On `macOS`, this function will return an error if the original path contained any symlinks due to less protection on macOS regarding symlinks. This behavior can be disabled by setting the `process-relaunch-dangerous-allow-symlink-macos` feature, although it is _highly discouraged_.

## §Security

See [`tauri_utils::platform::current_exe`] for possible security implications.

## §Examples
[code] 
    use tauri::{process::current_binary, Env, Manager};
    let current_binary_path = current_binary(&Env::default()).unwrap();
    
    tauri::Builder::default()
      .setup(|app| {
        let current_binary_path = current_binary(&app.env())?;
        Ok(())
      });
[/code]

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/process.rs.html#48-56
   [6]: ../struct.Env.html (struct tauri::Env)
   [7]: https://doc.rust-lang.org/1.94.1/std/io/error/type.Result.html (type std::io::error::Result)
   [8]: https://doc.rust-lang.org/1.94.1/std/path/struct.PathBuf.html (struct std::path::PathBuf)
   [9]: https://appimage.org/

