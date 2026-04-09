## include_image

[![logo][1]][2]

## [tauri][2]2.10.3

## include_image

### Sections

  * Examples



## [In crate tauri][3]

[tauri][3]

# Macro include_image Copy item path
[code]
    include_image!() { /* proc-macro */ }
[/code]

Expand description

Convert a .png or .ico icon to an Image for things like `tauri::tray::TrayIconBuilder` to consume, relative paths are resolved from `CARGO_MANIFEST_DIR`, not current file

#### §Examples

ⓘ
[code]
    const APP_ICON: Image<'_> = include_image!("./icons/32x32.png");
    
    // then use it with tray
    TrayIconBuilder::new().icon(APP_ICON).build().unwrap();
    
    // or with window
    WebviewWindowBuilder::new(app, "main", WebviewUrl::default())
        .icon(APP_ICON)
        .unwrap()
        .build()
        .unwrap();
    
    // or with any other functions that takes `Image` struct
[/code]

Note: this stores the image in raw pixels to the final binary, so keep the icon size (width and height) small or else it’s going to bloat your final executable

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html

