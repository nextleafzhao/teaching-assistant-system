## WindowEvent

[![logo][1]][2]

## [tauri][2]2.10.3

## WindowEvent

### Variants

  * CloseRequested
  * Destroyed
  * DragDrop
  * Focused
  * Moved
  * Resized
  * ScaleFactorChanged
  * ThemeChanged



### Trait Implementations

  * Clone
  * Debug
  * From<WindowEvent>



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

# Enum WindowEvent Copy item path

[Source][4]
[code] 
    #[non_exhaustive]
    
    pub enum WindowEvent {
        Resized([PhysicalSize][5]<[u32][6]>),
        Moved([PhysicalPosition][7]<[i32][8]>),
    
    
        #[non_exhaustive]
    
        CloseRequested {
            api: [CloseRequestApi][9],
        },
        Destroyed,
        Focused([bool][10]),
    
    
        #[non_exhaustive]
    
        ScaleFactorChanged {
            scale_factor: [f64][11],
            new_inner_size: [PhysicalSize][5]<[u32][6]>,
        },
        DragDrop([DragDropEvent][12]),
        ThemeChanged([Theme][13]),
    }
[/code]

Expand description

An event from a window.

## Variants (Non-exhaustive)§

This enum is marked as non-exhaustive

Non-exhaustive enums could have additional variants added in future. Therefore, when matching against variants of non-exhaustive enums, an extra wildcard arm must be added to account for any future variants.

§

### Resized([PhysicalSize][5]<[u32][6]>)

The size of the window has changed. Contains the client area’s new dimensions.

§

### Moved([PhysicalPosition][7]<[i32][8]>)

The position of the window has changed. Contains the window’s new position.

§

### 

#[non_exhaustive]

CloseRequested

The window has been requested to close.

#### Fields

This variant is marked as non-exhaustive

Non-exhaustive enum variants could have additional fields added in future. Therefore, non-exhaustive enum variants cannot be constructed in external crates and cannot be matched against.

§`api: [CloseRequestApi][9]`

An API modify the behavior of the close requested event.

§

### Destroyed

The window has been destroyed.

§

### Focused([bool][10])

The window gained or lost focus.

The parameter is true if the window has gained focus, and false if it has lost focus.

§

### 

#[non_exhaustive]

ScaleFactorChanged

The window’s scale factor has changed.

The following user actions can cause DPI changes:

  * Changing the display’s resolution.
  * Changing the display’s scale factor (e.g. in Control Panel on Windows).
  * Moving the window to a display with a different scale factor.



#### Fields

This variant is marked as non-exhaustive

Non-exhaustive enum variants could have additional fields added in future. Therefore, non-exhaustive enum variants cannot be constructed in external crates and cannot be matched against.

§`scale_factor: [f64][11]`

The new scale factor.

§`new_inner_size: [PhysicalSize][5]<[u32][6]>`

The window inner size.

§

### DragDrop([DragDropEvent][12])

An event associated with the drag and drop action.

§

### ThemeChanged([Theme][13])

The system window theme has changed. Only delivered if the window [`theme`][14] is `None`.

Applications might wish to react to this to change the theme of the content of the window when the system changes the window theme.

##### §Platform-specific

  * **Linux** : Not supported.



## Trait Implementations§

[Source][15]§

### impl [Clone][16] for [WindowEvent][17]

[Source][15]§

#### fn [clone][18](&self) -> [WindowEvent][17]

Returns a duplicate of the value. [Read more][18]

1.0.0 · [Source][19]§

#### fn [clone_from][20](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][20]

[Source][15]§

### impl [Debug][21] for [WindowEvent][17]

[Source][15]§

#### fn [fmt][22](&self, f: &mut [Formatter][23]<'_>) -> [Result][24]

Formats the value using the given formatter. [Read more][22]

[Source][25]§

### impl [From][26]<WindowEvent> for [WindowEvent][17]

[Source][27]§

#### fn [from][28](event: RuntimeWindowEvent) -> Self

Converts to this type from the input type.

## Auto Trait Implementations§

§

### impl [Freeze][29] for [WindowEvent][17]

§

### impl [RefUnwindSafe][30] for [WindowEvent][17]

§

### impl [Send][31] for [WindowEvent][17]

§

### impl [Sync][32] for [WindowEvent][17]

§

### impl [Unpin][33] for [WindowEvent][17]

§

### impl [UnwindSafe][34] for [WindowEvent][17]

## Blanket Implementations§

[Source][35]§

### impl<T> [Any][36] for T

where T: 'static + ?[Sized][37],

[Source][38]§

#### fn [type_id][39](&self) -> [TypeId][40]

Gets the `TypeId` of `self`. [Read more][39]

[Source][41]§

### impl<T> [Borrow][42]<T> for T

where T: ?[Sized][37],

[Source][43]§

#### fn [borrow][44](&self) -> [&T][45]

Immutably borrows from an owned value. [Read more][44]

[Source][46]§

### impl<T> [BorrowMut][47]<T> for T

where T: ?[Sized][37],

[Source][48]§

#### fn [borrow_mut][49](&mut self) -> [&mut T][45]

Mutably borrows from an owned value. [Read more][49]

[Source][50]§

### impl<T> [CloneToUninit][51] for T

where T: [Clone][16],

[Source][52]§

#### unsafe fn [clone_to_uninit][53](&self, dest: [*mut ][54][u8][55])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][53]

[Source][56]§

### impl<T> [From][26]<T> for T

[Source][57]§

#### fn [from][28](t: T) -> T

Returns the argument unchanged.

[Source][58]§

### impl<T, U> [Into][59]<U> for T

where U: [From][26]<T>,

[Source][60]§

#### fn [into][61](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][26]<T> for U` chooses to do.

[Source][62]§

### impl<T> [ToOwned][63] for T

where T: [Clone][16],

[Source][64]§

#### type [Owned][65] = T

The resulting type after obtaining ownership.

[Source][66]§

#### fn [to_owned][67](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][67]

[Source][68]§

#### fn [clone_into][69](&self, target: [&mut T][45])

Uses borrowed data to replace owned data, usually by cloning. [Read more][69]

[Source][70]§

### impl<T, U> [TryFrom][71]<U> for T

where U: [Into][59]<T>,

[Source][72]§

#### type [Error][73] = [Infallible][74]

The type returned in the event of a conversion error.

[Source][75]§

#### fn [try_from][76](value: U) -> [Result][77]<T, <T as [TryFrom][71]<U>>::[Error][78]>

Performs the conversion.

[Source][79]§

### impl<T, U> [TryInto][80]<U> for T

where U: [TryFrom][71]<T>,

[Source][81]§

#### type [Error][82] = <U as [TryFrom][71]<T>>::[Error][78]

The type returned in the event of a conversion error.

[Source][83]§

#### fn [try_into][84](self) -> [Result][77]<U, <U as [TryFrom][71]<T>>::[Error][78]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][21] \+ [Clone][16] \+ [Send][31] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/app.rs.html#108-149
   [5]: struct.PhysicalSize.html (struct tauri::PhysicalSize)
   [6]: https://doc.rust-lang.org/1.94.1/std/primitive.u32.html
   [7]: struct.PhysicalPosition.html (struct tauri::PhysicalPosition)
   [8]: https://doc.rust-lang.org/1.94.1/std/primitive.i32.html
   [9]: struct.CloseRequestApi.html (struct tauri::CloseRequestApi)
   [10]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [11]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html
   [12]: enum.DragDropEvent.html (enum tauri::DragDropEvent)
   [13]: enum.Theme.html (enum tauri::Theme)
   [14]: %60crate::window::WindowBuilder#method.theme%60
   [15]: ../src/tauri/app.rs.html#106
   [16]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [17]: enum.WindowEvent.html (enum tauri::WindowEvent)
   [18]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [19]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [20]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [21]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [22]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [23]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [24]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [25]: ../src/tauri/app.rs.html#151-172
   [26]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [27]: ../src/tauri/app.rs.html#152-171
   [28]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [29]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [30]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [31]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [32]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [33]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [34]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [35]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [36]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [37]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [38]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [39]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [40]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [41]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [42]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [44]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [45]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [46]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [47]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [49]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [50]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [51]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [53]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [54]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [55]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [56]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [57]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [58]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [59]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [60]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [61]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [62]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [63]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [64]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [65]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [66]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [67]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [68]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [69]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [70]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [72]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [74]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [75]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [76]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [77]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [78]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [79]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [80]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [81]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [82]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [83]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [84]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

