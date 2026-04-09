## WebviewEvent

[![logo][1]][2]

## [tauri][2]2.10.3

## WebviewEvent

### Variants

  * DragDrop



### Trait Implementations

  * Clone
  * Debug
  * From<WebviewEvent>



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
  * CloneToUninit
  * From<T>
  * Into<U>
  * ToOwned
  * TryFrom<U>
  * TryInto<U>
  * UserEvent



## [In crate tauri][3]

[tauri][3]

# Enum WebviewEvent Copy item path

[Source][4]
[code] 
    #[non_exhaustive]
    
    pub enum WebviewEvent {
        DragDrop([DragDropEvent][5]),
    }
[/code]

Expand description

An event from a window.

## Variants (Non-exhaustive)§

This enum is marked as non-exhaustive

Non-exhaustive enums could have additional variants added in future. Therefore, when matching against variants of non-exhaustive enums, an extra wildcard arm must be added to account for any future variants.

§

### DragDrop([DragDropEvent][5])

An event associated with the drag and drop action.

## Trait Implementations§

[Source][6]§

### impl [Clone][7] for [WebviewEvent][8]

[Source][6]§

#### fn [clone][9](&self) -> [WebviewEvent][8]

Returns a duplicate of the value. [Read more][9]

1.0.0 · [Source][10]§

#### fn [clone_from][11](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][11]

[Source][6]§

### impl [Debug][12] for [WebviewEvent][8]

[Source][6]§

#### fn [fmt][13](&self, f: &mut [Formatter][14]<'_>) -> [Result][15]

Formats the value using the given formatter. [Read more][13]

[Source][16]§

### impl [From][17]<WebviewEvent> for [WebviewEvent][8]

[Source][18]§

#### fn [from][19](event: RuntimeWebviewEvent) -> Self

Converts to this type from the input type.

## Auto Trait Implementations§

§

### impl [Freeze][20] for [WebviewEvent][8]

§

### impl [RefUnwindSafe][21] for [WebviewEvent][8]

§

### impl [Send][22] for [WebviewEvent][8]

§

### impl [Sync][23] for [WebviewEvent][8]

§

### impl [Unpin][24] for [WebviewEvent][8]

§

### impl [UnwindSafe][25] for [WebviewEvent][8]

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

### impl<T> [CloneToUninit][42] for T

where T: [Clone][7],

[Source][43]§

#### unsafe fn [clone_to_uninit][44](&self, dest: [*mut ][45][u8][46])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][44]

[Source][47]§

### impl<T> [From][17]<T> for T

[Source][48]§

#### fn [from][19](t: T) -> T

Returns the argument unchanged.

[Source][49]§

### impl<T, U> [Into][50]<U> for T

where U: [From][17]<T>,

[Source][51]§

#### fn [into][52](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][17]<T> for U` chooses to do.

[Source][53]§

### impl<T> [ToOwned][54] for T

where T: [Clone][7],

[Source][55]§

#### type [Owned][56] = T

The resulting type after obtaining ownership.

[Source][57]§

#### fn [to_owned][58](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][58]

[Source][59]§

#### fn [clone_into][60](&self, target: [&mut T][36])

Uses borrowed data to replace owned data, usually by cloning. [Read more][60]

[Source][61]§

### impl<T, U> [TryFrom][62]<U> for T

where U: [Into][50]<T>,

[Source][63]§

#### type [Error][64] = [Infallible][65]

The type returned in the event of a conversion error.

[Source][66]§

#### fn [try_from][67](value: U) -> [Result][68]<T, <T as [TryFrom][62]<U>>::[Error][69]>

Performs the conversion.

[Source][70]§

### impl<T, U> [TryInto][71]<U> for T

where U: [TryFrom][62]<T>,

[Source][72]§

#### type [Error][73] = <U as [TryFrom][62]<T>>::[Error][69]

The type returned in the event of a conversion error.

[Source][74]§

#### fn [try_into][75](self) -> [Result][68]<U, <U as [TryFrom][62]<T>>::[Error][69]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][12] \+ [Clone][7] \+ [Send][22] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/app.rs.html#177-180
   [5]: enum.DragDropEvent.html (enum tauri::DragDropEvent)
   [6]: ../src/tauri/app.rs.html#175
   [7]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [8]: enum.WebviewEvent.html (enum tauri::WebviewEvent)
   [9]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [10]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [11]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [12]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [13]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [14]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [15]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [16]: ../src/tauri/app.rs.html#182-188
   [17]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [18]: ../src/tauri/app.rs.html#183-187
   [19]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
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
   [41]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [42]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [44]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [45]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [46]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [47]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [48]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [49]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [50]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [51]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [52]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [53]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [54]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [55]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [56]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [57]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [58]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [59]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [60]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [61]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [62]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [63]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [65]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [66]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [67]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [68]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [69]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [70]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [72]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [74]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [75]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

