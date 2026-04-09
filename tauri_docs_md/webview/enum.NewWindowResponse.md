## NewWindowResponse

[![logo][1]][2]

## [tauri][2]2.10.3

## NewWindowResponse

### Variants

  * Allow
  * Create
  * Deny



### Auto Trait Implementations

  * !RefUnwindSafe
  * !UnwindSafe
  * Freeze
  * Send
  * Sync
  * Unpin



### Blanket Implementations

  * Any
  * Borrow<T>
  * BorrowMut<T>
  * From<T>
  * Into<U>
  * TryFrom<U>
  * TryInto<U>



## [In tauri::webview][3]

[tauri][4]::[webview][3]

# Enum NewWindowResponse Copy item path

[Source][5]
[code] 
    pub enum NewWindowResponse<R: [Runtime][6]> {
        Allow,
        Create {
            window: [WebviewWindow][7]<R>,
        },
        Deny,
    }
[/code]

Expand description

Response for the new window request handler.

## Variants§

§

### Allow

Allow the window to be opened with the default implementation.

§

### Create

Allow the window to be opened, with the given window.

##### §Platform-specific:

**Linux** : The webview must be related to the caller webview. See [`WebviewBuilder::related_view`]. **Windows** : The webview must use the same environment as the caller webview. See [`WebviewBuilder::environment`]. **macOS** : The webview must use the same webview configuration as the caller webview. See [`WebviewBuilder::with_webview_configuration`] and [`NewWindowFeatures::webview_configuration`].

#### Fields

§`window: [WebviewWindow][7]<R>`

Window that was created.

§

### Deny

Deny the window from being opened.

## Auto Trait Implementations§

§

### impl<R> [Freeze][8] for [NewWindowResponse][9]<R>

where <R as Runtime<[EventLoopMessage][10]>>::WindowDispatcher: [Freeze][8], <R as Runtime<[EventLoopMessage][10]>>::Handle: [Freeze][8], <R as Runtime<[EventLoopMessage][10]>>::WebviewDispatcher: [Freeze][8],

§

### impl<R> ![RefUnwindSafe][11] for [NewWindowResponse][9]<R>

§

### impl<R> [Send][12] for [NewWindowResponse][9]<R>

§

### impl<R> [Sync][13] for [NewWindowResponse][9]<R>

§

### impl<R> [Unpin][14] for [NewWindowResponse][9]<R>

where <R as Runtime<[EventLoopMessage][10]>>::WindowDispatcher: [Unpin][14], <R as Runtime<[EventLoopMessage][10]>>::Handle: [Unpin][14], <R as Runtime<[EventLoopMessage][10]>>::WebviewDispatcher: [Unpin][14],

§

### impl<R> ![UnwindSafe][15] for [NewWindowResponse][9]<R>

## Blanket Implementations§

[Source][16]§

### impl<T> [Any][17] for T

where T: 'static + ?[Sized][18],

[Source][19]§

#### fn [type_id][20](&self) -> [TypeId][21]

Gets the `TypeId` of `self`. [Read more][20]

[Source][22]§

### impl<T> [Borrow][23]<T> for T

where T: ?[Sized][18],

[Source][24]§

#### fn [borrow][25](&self) -> [&T][26]

Immutably borrows from an owned value. [Read more][25]

[Source][27]§

### impl<T> [BorrowMut][28]<T> for T

where T: ?[Sized][18],

[Source][29]§

#### fn [borrow_mut][30](&mut self) -> [&mut T][26]

Mutably borrows from an owned value. [Read more][30]

[Source][31]§

### impl<T> [From][32]<T> for T

[Source][33]§

#### fn [from][34](t: T) -> T

Returns the argument unchanged.

[Source][35]§

### impl<T, U> [Into][36]<U> for T

where U: [From][32]<T>,

[Source][37]§

#### fn [into][38](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][32]<T> for U` chooses to do.

[Source][39]§

### impl<T, U> [TryFrom][40]<U> for T

where U: [Into][36]<T>,

[Source][41]§

#### type [Error][42] = [Infallible][43]

The type returned in the event of a conversion error.

[Source][44]§

#### fn [try_from][45](value: U) -> [Result][46]<T, <T as [TryFrom][40]<U>>::[Error][47]>

Performs the conversion.

[Source][48]§

### impl<T, U> [TryInto][49]<U> for T

where U: [TryFrom][40]<T>,

[Source][50]§

#### type [Error][51] = <U as [TryFrom][40]<T>>::[Error][47]

The type returned in the event of a conversion error.

[Source][52]§

#### fn [try_into][53](self) -> [Result][46]<U, <U as [TryFrom][40]<T>>::[Error][47]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/webview/mod.rs.html#240-256
   [6]: ../trait.Runtime.html (trait tauri::Runtime)
   [7]: struct.WebviewWindow.html (struct tauri::webview::WebviewWindow)
   [8]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [9]: enum.NewWindowResponse.html (enum tauri::webview::NewWindowResponse)
   [10]: ../enum.EventLoopMessage.html (enum tauri::EventLoopMessage)
   [11]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [12]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [13]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [14]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [15]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [16]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [17]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [18]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [19]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [20]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [21]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [22]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [23]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [24]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [25]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [26]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [27]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [28]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [29]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [30]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [31]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [32]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [33]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [34]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [35]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [36]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [37]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [38]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [39]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [40]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [41]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [42]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [43]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [44]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [45]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [46]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [47]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [49]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [50]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [51]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [52]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [53]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

