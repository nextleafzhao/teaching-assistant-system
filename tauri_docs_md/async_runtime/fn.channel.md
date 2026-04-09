## channel

[![logo][1]][2]

## [tauri][2]2.10.3

## channel

### Sections

  * Panics
  * Examples



## [In tauri::async_runtime][3]

[tauri][4]::[async_runtime][3]

# Function channel Copy item path
[code]
    pub fn channel<T>(buffer: [usize][5]) -> ([Sender][6]<T>, [Receiver][7]<T>)
[/code]

Expand description

Creates a bounded mpsc channel for communicating between asynchronous tasks with backpressure.

The channel will buffer up to the provided number of messages. Once the buffer is full, attempts to send new messages will wait until a message is received from the channel. The provided buffer capacity must be at least 1.

All data sent on `Sender` will become available on `Receiver` in the same order as it was sent.

The `Sender` can be cloned to `send` to the same channel from multiple code locations. Only one `Receiver` is supported.

If the `Receiver` is disconnected while trying to `send`, the `send` method will return a `SendError`. Similarly, if `Sender` is disconnected while trying to `recv`, the `recv` method will return `None`.

## §Panics

Panics if the buffer capacity is 0, or too large. Currently the maximum capacity is [`Semaphore::MAX_PERMITS`][8].

## §Examples
[code] 
    use tokio::sync::mpsc;
    
    let (tx, mut rx) = mpsc::channel(100);
    
    tokio::spawn(async move {
        for i in 0..10 {
            if let Err(_) = tx.send(i).await {
                println!("receiver dropped");
                return;
            }
        }
    });
    
    while let Some(i) = rx.recv().await {
         println!("got = {}", i);
    }
[/code]

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [6]: struct.Sender.html (struct tauri::async_runtime::Sender)
   [7]: struct.Receiver.html (struct tauri::async_runtime::Receiver)
   [8]: crate::sync::Semaphore::MAX_PERMITS

