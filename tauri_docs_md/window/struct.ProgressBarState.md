## ProgressBarState

[![logo][1]][2]

## [tauri][2]2.10.3

## ProgressBarState

### Fields

  * progress
  * status



### Trait Implementations

  * Debug
  * Deserialize<'de>



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
  * ScopeObject
  * TryFrom<U>
  * TryInto<U>



## [In tauri::window][3]

[tauri][4]::[window][3]

# Struct ProgressBarState Copy item path

[Source][5]
[code] 
    pub struct ProgressBarState {
        pub status: [Option][6]<[ProgressBarStatus][7]>,
        pub progress: [Option][6]<[u64][8]>,
    }
[/code]

Expand description

Progress bar state.

## Fields§

§`status: [Option][6]<[ProgressBarStatus][7]>`

The progress bar status.

§`progress: [Option][6]<[u64][8]>`

The progress bar progress. This can be a value ranging from `0` to `100`

## Trait Implementations§

[Source][9]§

### impl [Debug][10] for [ProgressBarState][11]

[Source][9]§

#### fn [fmt][12](&self, f: &mut [Formatter][13]<'_>) -> [Result][14]

Formats the value using the given formatter. [Read more][12]

[Source][9]§

### impl<'de> [Deserialize][15]<'de> for [ProgressBarState][11]

[Source][9]§

#### fn [deserialize][16]<__D>(__deserializer: __D) -> [Result][17]<Self, __D::[Error][18]>

where __D: [Deserializer][19]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][16]

## Auto Trait Implementations§

§

### impl [Freeze][20] for [ProgressBarState][11]

§

### impl [RefUnwindSafe][21] for [ProgressBarState][11]

§

### impl [Send][22] for [ProgressBarState][11]

§

### impl [Sync][23] for [ProgressBarState][11]

§

### impl [Unpin][24] for [ProgressBarState][11]

§

### impl [UnwindSafe][25] for [ProgressBarState][11]

## Blanket Implementations§

[Source][26]§

### impl<T> [Any][27] for T

where T: 'static + ?[Sized][28],

[Source][29]§

#### fn [type_id][30](&self) -> [TypeId][31]

Gets the `TypeId` of `self`. [Read more][30]

[Source][32]§

### impl<T> [Borrow][33]<T> for T

where T: ?[Sized][28],

[Source][34]§

#### fn [borrow][35](&self) -> [&T][36]

Immutably borrows from an owned value. [Read more][35]

[Source][37]§

### impl<T> [BorrowMut][38]<T> for T

where T: ?[Sized][28],

[Source][39]§

#### fn [borrow_mut][40](&mut self) -> [&mut T][36]

Mutably borrows from an owned value. [Read more][40]

[Source][41]§

### impl<'de, D, R> [CommandArg][42]<'de, R> for D

where D: [Deserialize][15]<'de>, R: [Runtime][43],

[Source][44]§

#### fn [from_command][45](command: [CommandItem][46]<'de, R>) -> [Result][17]<D, [InvokeError][47]>

Derives an instance of `Self` from the [`CommandItem`][46]. [Read more][45]

[Source][48]§

### impl<T> [From][49]<T> for T

[Source][50]§

#### fn [from][51](t: T) -> T

Returns the argument unchanged.

[Source][52]§

### impl<T, U> [Into][53]<U> for T

where U: [From][49]<T>,

[Source][54]§

#### fn [into][55](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][49]<T> for U` chooses to do.

[Source][56]§

### impl<T> [ScopeObject][57] for T

where T: [Send][22] \+ [Sync][23] \+ [Debug][10] \+ [DeserializeOwned][58] \+ 'static,

[Source][59]§

#### type [Error][60] = [Error][61]

The error type.

[Source][62]§

#### fn [deserialize][63]<R>( _app: &[AppHandle][64]<R>, raw: Value, ) -> [Result][17]<T, <T as [ScopeObject][57]>::[Error][65]>

where R: [Runtime][43],

Deserialize the raw scope value.

[Source][66]§

### impl<T, U> [TryFrom][67]<U> for T

where U: [Into][53]<T>,

[Source][68]§

#### type [Error][69] = [Infallible][70]

The type returned in the event of a conversion error.

[Source][71]§

#### fn [try_from][72](value: U) -> [Result][17]<T, <T as [TryFrom][67]<U>>::[Error][73]>

Performs the conversion.

[Source][74]§

### impl<T, U> [TryInto][75]<U> for T

where U: [TryFrom][67]<T>,

[Source][76]§

#### type [Error][77] = <U as [TryFrom][67]<T>>::[Error][73]

The type returned in the event of a conversion error.

[Source][78]§

#### fn [try_into][79](self) -> [Result][17]<U, <U as [TryFrom][67]<T>>::[Error][73]>

Performs the conversion.

[Source][80]§

### impl<T> [DeserializeOwned][58] for T

where T: for<'de> [Deserialize][15]<'de>,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/window/mod.rs.html#2216-2221
   [6]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [7]: enum.ProgressBarStatus.html (enum tauri::window::ProgressBarStatus)
   [8]: https://doc.rust-lang.org/1.94.1/std/primitive.u64.html
   [9]: ../../src/tauri/window/mod.rs.html#2215
   [10]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [11]: struct.ProgressBarState.html (struct tauri::window::ProgressBarState)
   [12]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [13]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [14]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [15]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html (trait serde_core::de::Deserialize)
   [16]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html#tymethod.deserialize
   [17]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [18]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#associatedtype.Error (type serde_core::de::Deserializer::Error)
   [19]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html (trait serde_core::de::Deserializer)
   [20]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [21]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [22]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [23]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [24]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [25]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [26]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [27]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [28]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [29]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [30]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [31]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [32]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [33]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [34]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [35]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [36]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [37]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [38]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [39]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [40]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [41]: ../../src/tauri/ipc/command.rs.html#62-70
   [42]: ../ipc/trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [43]: ../trait.Runtime.html (trait tauri::Runtime)
   [44]: ../../src/tauri/ipc/command.rs.html#63-69
   [45]: ../ipc/trait.CommandArg.html#tymethod.from_command
   [46]: ../ipc/struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [47]: ../ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [49]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [50]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [51]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [52]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [53]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [54]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [55]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [56]: ../../src/tauri/ipc/authority.rs.html#686-691
   [57]: ../ipc/trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [58]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)
   [59]: ../../src/tauri/ipc/authority.rs.html#687
   [60]: ../ipc/trait.ScopeObject.html#associatedtype.Error
   [61]: https://docs.rs/serde_json/1.0.149/serde_json/error/struct.Error.html (struct serde_json::error::Error)
   [62]: ../../src/tauri/ipc/authority.rs.html#688-690
   [63]: ../ipc/trait.ScopeObject.html#tymethod.deserialize
   [64]: ../struct.AppHandle.html (struct tauri::AppHandle)
   [65]: ../ipc/trait.ScopeObject.html#associatedtype.Error (type tauri::ipc::ScopeObject::Error)
   [66]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [67]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [68]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [69]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [71]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [72]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [74]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [75]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [76]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [77]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [78]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [79]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [80]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#633

