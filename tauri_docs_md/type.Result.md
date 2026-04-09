## Result

[![logo][1]][2]

## [tauri][2]2.10.3

## Result

### Aliased Type

### Variants

  * Err
  * Ok



## [In crate tauri][3]

[tauri][3]

# Type Alias Result Copy item path

[Source][4]
[code] 
    pub type Result<T> = [Result][5]<T, [Error][6]>;
[/code]

Expand description

`Result<T, ::tauri::Error>`

## Aliased Type§
[code]
    pub enum Result<T> {
        Ok(T),
        Err([Error][6]),
    }
[/code]

## Variants§

§1.0.0

### Ok(T)

Contains the success value

§1.0.0

### Err([Error][6])

Contains the error value

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/error.rs.html#178
   [5]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [6]: enum.Error.html (enum tauri::Error)

