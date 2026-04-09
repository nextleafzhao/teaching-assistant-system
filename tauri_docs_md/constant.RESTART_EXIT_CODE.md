## RESTART_EXIT_CODE

[![logo][1]][2]

## [tauri][2]2.10.3

[tauri][3]

# Constant RESTART_EXIT_CODE Copy item path

[Source][4]
[code] 
    pub const RESTART_EXIT_CODE: [i32][5] = i32::MAX; // 2_147_483_647i32
[/code]

Expand description

The exit code on [`RunEvent::ExitRequested`][6] when [`AppHandle`][7] is called.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/app.rs.html#74
   [5]: https://doc.rust-lang.org/1.94.1/std/primitive.i32.html
   [6]: enum.RunEvent.html#variant.ExitRequested (variant tauri::RunEvent::ExitRequested)
   [7]: struct.AppHandle.html#method.restart (struct tauri::AppHandle)

