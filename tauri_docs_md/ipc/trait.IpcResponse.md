## IpcResponse

[![logo][1]][2]

## [tauri][2]2.10.3

## IpcResponse

### Required Methods

  * body



### Implementors

## [In tauri::ipc][3]

[tauri][4]::[ipc][3]

# Trait IpcResponse Copy item path

[Source][5]
[code] 
    pub trait IpcResponse {
        // Required method
        fn body(self) -> [Result][6]<[InvokeResponseBody][7]>;
    }
[/code]

Expand description

Marks a type as a response to an IPC call.

## Required Methods§

[Source][8]

#### fn body(self) -> [Result][6]<[InvokeResponseBody][7]>

Resolve the IPC response body.

## Implementors§

[Source][9]§

### impl [IpcResponse][10] for [InvokeResponseBody][7]

[Source][11]§

### impl [IpcResponse][10] for [Response][12]

[Source][13]§

### impl<T: [Serialize][14]> [IpcResponse][10] for T

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/ipc/mod.rs.html#176-179
   [6]: ../type.Result.html (type tauri::Result)
   [7]: enum.InvokeResponseBody.html (enum tauri::ipc::InvokeResponseBody)
   [8]: ../../src/tauri/ipc/mod.rs.html#178
   [9]: ../../src/tauri/ipc/mod.rs.html#127-131
   [10]: trait.IpcResponse.html (trait tauri::ipc::IpcResponse)
   [11]: ../../src/tauri/ipc/mod.rs.html#194-198
   [12]: struct.Response.html (struct tauri::ipc::Response)
   [13]: ../../src/tauri/ipc/mod.rs.html#181-187
   [14]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)

