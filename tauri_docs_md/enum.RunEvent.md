## RunEvent

[![logo][1]][2]

## [tauri][2]2.10.3

## RunEvent

### Variants

  * Exit
  * ExitRequested
  * MainEventsCleared
  * MenuEvent
  * Ready
  * Resumed
  * WebviewEvent
  * WindowEvent



### Trait Implementations

  * Debug
  * From<EventLoopMessage>



### Auto Trait Implementations

  * Freeze
  * RefUnwindSafe
  * Send
  * Sync
  * Unpin
  * UnwindSafe



### Blanket Implementations

  * Any
  * Borrow<T>
  * BorrowMut<T>
  * From<T>
  * Into<U>
  * TryFrom<U>
  * TryInto<U>



## [In crate tauri][3]

[tauri][3]

# Enum RunEvent Copy item path

[Source][4]
[code] 
    #[non_exhaustive]
    
    pub enum RunEvent {
        Exit,
    
    
        #[non_exhaustive]
    
        ExitRequested {
            code: [Option][5]<[i32][6]>,
            api: [ExitRequestApi][7],
        },
    
    
        #[non_exhaustive]
    
        WindowEvent {
            label: [String][8],
            event: [WindowEvent][9],
        },
    
    
        #[non_exhaustive]
    
        WebviewEvent {
            label: [String][8],
            event: [WebviewEvent][10],
        },
        Ready,
        Resumed,
        MainEventsCleared,
        MenuEvent([MenuEvent][11]),
    }
[/code]

Expand description

An application event, triggered from the event loop.

See [`App::run`][12] for usage examples.

## Variants (Non-exhaustive)§

This enum is marked as non-exhaustive

Non-exhaustive enums could have additional variants added in future. Therefore, when matching against variants of non-exhaustive enums, an extra wildcard arm must be added to account for any future variants.

§

### Exit

Event loop is exiting.

§

### 

#[non_exhaustive]

ExitRequested

The app is about to exit

#### Fields

This variant is marked as non-exhaustive

Non-exhaustive enum variants could have additional fields added in future. Therefore, non-exhaustive enum variants cannot be constructed in external crates and cannot be matched against.

§`code: [Option][5]<[i32][6]>`

Exit code. [`Option::None`][13] when the exit is requested by user interaction, [`Option::Some`][14] when requested programmatically via [`AppHandle`][15] and [`AppHandle`][16].

§`api: [ExitRequestApi][7]`

Event API

§

### 

#[non_exhaustive]

WindowEvent

An event associated with a window.

#### Fields

This variant is marked as non-exhaustive

Non-exhaustive enum variants could have additional fields added in future. Therefore, non-exhaustive enum variants cannot be constructed in external crates and cannot be matched against.

§`label: [String][8]`

The window label.

§`event: [WindowEvent][9]`

The detailed event.

§

### 

#[non_exhaustive]

WebviewEvent

An event associated with a webview.

#### Fields

This variant is marked as non-exhaustive

Non-exhaustive enum variants could have additional fields added in future. Therefore, non-exhaustive enum variants cannot be constructed in external crates and cannot be matched against.

§`label: [String][8]`

The window label.

§`event: [WebviewEvent][10]`

The detailed event.

§

### Ready

Application ready.

§

### Resumed

Sent if the event loop is being resumed.

§

### MainEventsCleared

Emitted when all of the event loop’s input events have been processed and redraw processing is about to begin.

This event is useful as a place to put your code that should be run after all state-changing events have been handled and you want to do stuff (updating state, performing calculations, etc) that happens as the “main body” of your event loop.

§

### MenuEvent([MenuEvent][11])

An event from a menu item, could be on the window menu bar, application menu bar (on macOS) or tray icon menu.

## Trait Implementations§

[Source][17]§

### impl [Debug][18] for [RunEvent][19]

[Source][17]§

#### fn [fmt][20](&self, f: &mut [Formatter][21]<'_>) -> [Result][22]

Formats the value using the given formatter. [Read more][20]

[Source][23]§

### impl [From][24]<[EventLoopMessage][25]> for [RunEvent][19]

[Source][26]§

#### fn [from][27](event: [EventLoopMessage][25]) -> Self

Converts to this type from the input type.

## Auto Trait Implementations§

§

### impl [Freeze][28] for [RunEvent][19]

§

### impl [RefUnwindSafe][29] for [RunEvent][19]

§

### impl [Send][30] for [RunEvent][19]

§

### impl [Sync][31] for [RunEvent][19]

§

### impl [Unpin][32] for [RunEvent][19]

§

### impl [UnwindSafe][33] for [RunEvent][19]

## Blanket Implementations§

[Source][34]§

### impl<T> [Any][35] for T

where T: 'static + ?[Sized][36],

[Source][37]§

#### fn [type_id][38](&self) -> [TypeId][39]

Gets the `TypeId` of `self`. [Read more][38]

[Source][40]§

### impl<T> [Borrow][41]<T> for T

where T: ?[Sized][36],

[Source][42]§

#### fn [borrow][43](&self) -> [&T][44]

Immutably borrows from an owned value. [Read more][43]

[Source][45]§

### impl<T> [BorrowMut][46]<T> for T

where T: ?[Sized][36],

[Source][47]§

#### fn [borrow_mut][48](&mut self) -> [&mut T][44]

Mutably borrows from an owned value. [Read more][48]

[Source][49]§

### impl<T> [From][24]<T> for T

[Source][50]§

#### fn [from][27](t: T) -> T

Returns the argument unchanged.

[Source][51]§

### impl<T, U> [Into][52]<U> for T

where U: [From][24]<T>,

[Source][53]§

#### fn [into][54](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][24]<T> for U` chooses to do.

[Source][55]§

### impl<T, U> [TryFrom][56]<U> for T

where U: [Into][52]<T>,

[Source][57]§

#### type [Error][58] = [Infallible][59]

The type returned in the event of a conversion error.

[Source][60]§

#### fn [try_from][61](value: U) -> [Result][62]<T, <T as [TryFrom][56]<U>>::[Error][63]>

Performs the conversion.

[Source][64]§

### impl<T, U> [TryInto][65]<U> for T

where U: [TryFrom][56]<T>,

[Source][66]§

#### type [Error][67] = <U as [TryFrom][56]<T>>::[Error][63]

The type returned in the event of a conversion error.

[Source][68]§

#### fn [try_into][69](self) -> [Result][62]<U, <U as [TryFrom][56]<T>>::[Error][63]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/app.rs.html#195-255
   [5]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [6]: https://doc.rust-lang.org/1.94.1/std/primitive.i32.html
   [7]: struct.ExitRequestApi.html (struct tauri::ExitRequestApi)
   [8]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [9]: enum.WindowEvent.html (enum tauri::WindowEvent)
   [10]: enum.WebviewEvent.html (enum tauri::WebviewEvent)
   [11]: menu/struct.MenuEvent.html (struct tauri::menu::MenuEvent)
   [12]: struct.App.html#method.run (struct tauri::App)
   [13]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html#variant.None (variant core::option::Option::None)
   [14]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html#variant.Some (variant core::option::Option::Some)
   [15]: struct.AppHandle.html#method.exit (struct tauri::AppHandle)
   [16]: struct.AppHandle.html#method.restart (struct tauri::AppHandle)
   [17]: ../src/tauri/app.rs.html#193
   [18]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [19]: enum.RunEvent.html (enum tauri::RunEvent)
   [20]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [21]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [22]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [23]: ../src/tauri/app.rs.html#257-266
   [24]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [25]: enum.EventLoopMessage.html (enum tauri::EventLoopMessage)
   [26]: ../src/tauri/app.rs.html#258-265
   [27]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [28]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [29]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [30]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [31]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [32]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [33]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [34]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [35]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [36]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [37]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [38]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [39]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [40]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [41]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [42]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [43]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [44]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [45]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [46]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [47]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [48]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [49]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [50]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [51]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [52]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [54]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [55]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [56]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [57]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [58]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [59]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [60]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [61]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [62]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [63]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [64]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [65]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [66]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [67]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [68]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [69]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

