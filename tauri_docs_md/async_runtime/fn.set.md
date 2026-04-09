## set

[![logo][1]][2]

## [tauri][2]2.10.3

## set

### Sections

  * Examples
  * Panics



## [In tauri::async_runtime][3]

[tauri][4]::[async_runtime][3]

# Function set Copy item path

[Source][5]
[code] 
    pub fn set(handle: [TokioHandle][6])
[/code]

Expand description

Sets the runtime to use to execute asynchronous tasks. For convenience, this method takes a [`TokioHandle`][6]. Note that you cannot drop the underlying [`TokioRuntime`][7].

## §Examples
[code] 
    #[tokio::main]
    async fn main() {
      // perform some async task before initializing the app
      do_something().await;
      // share the current runtime with Tauri
      tauri::async_runtime::set(tokio::runtime::Handle::current());
    
      // bootstrap the tauri app...
      // tauri::Builder::default().run().unwrap();
    }
    
    async fn do_something() {}
[/code]

## §Panics

Panics if the runtime is already set.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/async_runtime.rs.html#246-253
   [6]: struct.TokioHandle.html (struct tauri::async_runtime::TokioHandle)
   [7]: struct.TokioRuntime.html (struct tauri::async_runtime::TokioRuntime)

