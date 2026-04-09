## JavaScriptChannelId

[![logo][1]][2]

## [tauri][2]2.10.3

## JavaScriptChannelId

### Sections

  * Examples



### Methods

  * channel_on



### Trait Implementations

  * Deserialize<'de>
  * FromStr



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
  * CommandArg<'de, R>
  * DeserializeOwned
  * From<T>
  * Into<U>
  * TryFrom<U>
  * TryInto<U>



## [In tauri::ipc][3]

[tauri][4]::[ipc][3]

# Struct JavaScriptChannelId Copy item path

[Source][5]
[code] 
    pub struct JavaScriptChannelId(/* private fields */);
[/code]

Expand description

The ID of a channel that was defined on the JavaScript layer.

Useful when expecting [`Channel`][6] as part of a JSON object instead of a top-level command argument.

## §Examples
[code] 
    use tauri::{ipc::JavaScriptChannelId, Runtime, Webview};
    
    #[derive(serde::Deserialize)]
    #[serde(rename_all = "camelCase")]
    struct Button {
      label: String,
      on_click: JavaScriptChannelId,
    }
    
    #[tauri::command]
    fn add_button<R: Runtime>(webview: Webview<R>, button: Button) {
      let channel = button.on_click.channel_on(webview);
      channel.send("clicked").unwrap();
    }
[/code]

## Implementations§

[Source][7]§

### impl [JavaScriptChannelId][8]

[Source][9]

#### pub fn channel_on<R: [Runtime][10], TSend>( &self, webview: [Webview][11]<R>, ) -> [Channel][6]<TSend>

Gets a [`Channel`][6] for this channel ID on the given [`Webview`][11].

## Trait Implementations§

[Source][12]§

### impl<'de> [Deserialize][13]<'de> for [JavaScriptChannelId][8]

[Source][14]§

#### fn [deserialize][15]<D>(deserializer: D) -> [Result][16]<Self, D::[Error][17]>

where D: [Deserializer][18]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][15]

[Source][19]§

### impl [FromStr][20] for [JavaScriptChannelId][8]

[Source][21]§

#### type [Err][22] = &'static [str][23]

The associated error which can be returned from parsing.

[Source][24]§

#### fn [from_str][25](s: &[str][23]) -> [Result][16]<Self, Self::[Err][26]>

Parses a string `s` to return a value of this type. [Read more][25]

## Auto Trait Implementations§

§

### impl [Freeze][27] for [JavaScriptChannelId][8]

§

### impl [RefUnwindSafe][28] for [JavaScriptChannelId][8]

§

### impl [Send][29] for [JavaScriptChannelId][8]

§

### impl [Sync][30] for [JavaScriptChannelId][8]

§

### impl [Unpin][31] for [JavaScriptChannelId][8]

§

### impl [UnwindSafe][32] for [JavaScriptChannelId][8]

## Blanket Implementations§

[Source][33]§

### impl<T> [Any][34] for T

where T: 'static + ?[Sized][35],

[Source][36]§

#### fn [type_id][37](&self) -> [TypeId][38]

Gets the `TypeId` of `self`. [Read more][37]

[Source][39]§

### impl<T> [Borrow][40]<T> for T

where T: ?[Sized][35],

[Source][41]§

#### fn [borrow][42](&self) -> [&T][43]

Immutably borrows from an owned value. [Read more][42]

[Source][44]§

### impl<T> [BorrowMut][45]<T> for T

where T: ?[Sized][35],

[Source][46]§

#### fn [borrow_mut][47](&mut self) -> [&mut T][43]

Mutably borrows from an owned value. [Read more][47]

[Source][48]§

### impl<'de, D, R> [CommandArg][49]<'de, R> for D

where D: [Deserialize][13]<'de>, R: [Runtime][10],

[Source][50]§

#### fn [from_command][51](command: [CommandItem][52]<'de, R>) -> [Result][16]<D, [InvokeError][53]>

Derives an instance of `Self` from the [`CommandItem`][52]. [Read more][51]

[Source][54]§

### impl<T> [From][55]<T> for T

[Source][56]§

#### fn [from][57](t: T) -> T

Returns the argument unchanged.

[Source][58]§

### impl<T, U> [Into][59]<U> for T

where U: [From][55]<T>,

[Source][60]§

#### fn [into][61](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][55]<T> for U` chooses to do.

[Source][62]§

### impl<T, U> [TryFrom][63]<U> for T

where U: [Into][59]<T>,

[Source][64]§

#### type [Error][65] = [Infallible][66]

The type returned in the event of a conversion error.

[Source][67]§

#### fn [try_from][68](value: U) -> [Result][16]<T, <T as [TryFrom][63]<U>>::[Error][69]>

Performs the conversion.

[Source][70]§

### impl<T, U> [TryInto][71]<U> for T

where U: [TryFrom][63]<T>,

[Source][72]§

#### type [Error][73] = <U as [TryFrom][63]<T>>::[Error][69]

The type returned in the event of a conversion error.

[Source][74]§

#### fn [try_into][75](self) -> [Result][16]<U, <U as [TryFrom][63]<T>>::[Error][69]>

Performs the conversion.

[Source][76]§

### impl<T> [DeserializeOwned][77] for T

where T: for<'de> [Deserialize][13]<'de>,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/ipc/channel.rs.html#119
   [6]: struct.Channel.html (struct tauri::ipc::Channel)
   [7]: ../../src/tauri/ipc/channel.rs.html#132-195
   [8]: struct.JavaScriptChannelId.html (struct tauri::ipc::JavaScriptChannelId)
   [9]: ../../src/tauri/ipc/channel.rs.html#134-194
   [10]: ../trait.Runtime.html (trait tauri::Runtime)
   [11]: ../webview/struct.Webview.html (struct tauri::webview::Webview)
   [12]: ../../src/tauri/ipc/channel.rs.html#197-209
   [13]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html (trait serde_core::de::Deserialize)
   [14]: ../../src/tauri/ipc/channel.rs.html#198-208
   [15]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html#tymethod.deserialize
   [16]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [17]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#associatedtype.Error (type serde_core::de::Deserializer::Error)
   [18]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html (trait serde_core::de::Deserializer)
   [19]: ../../src/tauri/ipc/channel.rs.html#121-130
   [20]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html (trait core::str::traits::FromStr)
   [21]: ../../src/tauri/ipc/channel.rs.html#122
   [22]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#associatedtype.Err
   [23]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [24]: ../../src/tauri/ipc/channel.rs.html#124-129
   [25]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#tymethod.from_str
   [26]: https://doc.rust-lang.org/1.94.1/core/str/traits/trait.FromStr.html#associatedtype.Err (type core::str::traits::FromStr::Err)
   [27]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [28]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [29]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [30]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [31]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [32]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [33]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [34]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [35]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [36]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [37]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [38]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [39]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [40]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [41]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [42]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [43]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [44]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [45]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [47]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [48]: ../../src/tauri/ipc/command.rs.html#62-70
   [49]: trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [50]: ../../src/tauri/ipc/command.rs.html#63-69
   [51]: trait.CommandArg.html#tymethod.from_command
   [52]: struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [53]: struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [54]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [55]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [56]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [57]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [58]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [59]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [60]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [61]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [62]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [63]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [64]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [65]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [67]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [69]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [70]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [72]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [74]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [75]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [76]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#633
   [77]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)

