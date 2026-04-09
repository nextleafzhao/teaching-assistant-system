## restart

[![logo][1]][2]

## [tauri][2]2.10.3

## restart

### Sections

  * Examples



## [In tauri::process][3]

[tauri][4]::[process][3]

# Function restart Copy item path

[Source][5]
[code] 
    pub fn restart(env: &[Env][6]) -> [!][7]
[/code]

Expand description

Restarts the currently running binary.

See [`current_binary`][8] for platform specific behavior, and [`tauri_utils::platform::current_exe`] for possible security implications.

## §Examples
[code] 
    use tauri::{process::restart, Env, Manager};
    
    tauri::Builder::default()
      .setup(|app| {
        restart(&app.env());
        Ok(())
      });
[/code]

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/process.rs.html#74-89
   [6]: ../struct.Env.html (struct tauri::Env)
   [7]: https://doc.rust-lang.org/1.94.1/std/primitive.never.html
   [8]: fn.current_binary.html (fn tauri::process::current_binary)

