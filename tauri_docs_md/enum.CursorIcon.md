## CursorIcon

[![logo][1]][2]

## [tauri][2]2.10.3

## CursorIcon

### Variants

  * Alias
  * AllScroll
  * Arrow
  * Cell
  * ColResize
  * ContextMenu
  * Copy
  * Crosshair
  * Default
  * EResize
  * EwResize
  * Grab
  * Grabbing
  * Hand
  * Help
  * Move
  * NResize
  * NeResize
  * NeswResize
  * NoDrop
  * NotAllowed
  * NsResize
  * NwResize
  * NwseResize
  * Progress
  * RowResize
  * SResize
  * SeResize
  * SwResize
  * Text
  * VerticalText
  * WResize
  * Wait
  * ZoomIn
  * ZoomOut



### Trait Implementations

  * Clone
  * Copy
  * Debug
  * Default
  * Deserialize<'de>
  * Eq
  * Hash
  * PartialEq
  * StructuralPartialEq



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
  * CommandArg<'de, R>
  * DeserializeOwned
  * From<T>
  * Into<U>
  * ScopeObject
  * ToOwned
  * TryFrom<U>
  * TryInto<U>
  * UserEvent



## [In crate tauri][3]

[tauri][3]

# Enum CursorIcon Copy item path
[code]
    #[non_exhaustive]
    
    pub enum CursorIcon {
    Show 35 variants    Default,
        Crosshair,
        Hand,
        Arrow,
        Move,
        Text,
        Wait,
        Help,
        Progress,
        NotAllowed,
        ContextMenu,
        Cell,
        VerticalText,
        Alias,
        Copy,
        NoDrop,
        Grab,
        Grabbing,
        AllScroll,
        ZoomIn,
        ZoomOut,
        EResize,
        NResize,
        NeResize,
        NwResize,
        SResize,
        SeResize,
        SwResize,
        WResize,
        EwResize,
        NsResize,
        NeswResize,
        NwseResize,
        ColResize,
        RowResize,
    }
[/code]

Expand description

Describes the appearance of the mouse cursor.

## Variants (Non-exhaustive)§

This enum is marked as non-exhaustive

Non-exhaustive enums could have additional variants added in future. Therefore, when matching against variants of non-exhaustive enums, an extra wildcard arm must be added to account for any future variants.

§

### Default

The platform-dependent default cursor.

§

### Crosshair

A simple crosshair.

§

### Hand

A hand (often used to indicate links in web browsers).

§

### Arrow

Self explanatory.

§

### Move

Indicates something is to be moved.

§

### Text

Indicates text that may be selected or edited.

§

### Wait

Program busy indicator.

§

### Help

Help indicator (often rendered as a “?”)

§

### Progress

Progress indicator. Shows that processing is being done. But in contrast with “Wait” the user may still interact with the program. Often rendered as a spinning beach ball, or an arrow with a watch or hourglass.

§

### NotAllowed

Cursor showing that something cannot be done.

§

### ContextMenu

§

### Cell

§

### VerticalText

§

### Alias

§

### Copy

§

### NoDrop

§

### Grab

Indicates something can be grabbed.

§

### Grabbing

Indicates something is grabbed.

§

### AllScroll

§

### ZoomIn

§

### ZoomOut

§

### EResize

Indicate that some edge is to be moved. For example, the ‘SeResize’ cursor is used when the movement starts from the south-east corner of the box.

§

### NResize

§

### NeResize

§

### NwResize

§

### SResize

§

### SeResize

§

### SwResize

§

### WResize

§

### EwResize

§

### NsResize

§

### NeswResize

§

### NwseResize

§

### ColResize

§

### RowResize

## Trait Implementations§

§

### impl [Clone][4] for [CursorIcon][5]

§

#### fn [clone][6](&self) -> [CursorIcon][5]

Returns a duplicate of the value. [Read more][6]

1.0.0 · [Source][7]§

#### fn [clone_from][8](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][8]

§

### impl [Debug][9] for [CursorIcon][5]

§

#### fn [fmt][10](&self, f: &mut [Formatter][11]<'_>) -> [Result][12]<[()][13], [Error][14]>

Formats the value using the given formatter. [Read more][10]

§

### impl [Default][15] for [CursorIcon][5]

§

#### fn [default][16]() -> [CursorIcon][5]

Returns the “default value” for a type. [Read more][16]

§

### impl<'de> [Deserialize][17]<'de> for [CursorIcon][5]

§

#### fn [deserialize][18]<D>( deserializer: D, ) -> [Result][12]<[CursorIcon][5], <D as [Deserializer][19]<'de>>::[Error][20]>

where D: [Deserializer][19]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][18]

§

### impl [Hash][21] for [CursorIcon][5]

§

#### fn [hash][22]<__H>(&self, state: [&mut __H][23])

where __H: [Hasher][24],

Feeds this value into the given [`Hasher`][24]. [Read more][22]

1.3.0 · [Source][25]§

#### fn [hash_slice][26]<H>(data: &[Self], state: [&mut H][23])

where H: [Hasher][24], Self: [Sized][27],

Feeds a slice of this type into the given [`Hasher`][24]. [Read more][26]

§

### impl [PartialEq][28] for [CursorIcon][5]

§

#### fn [eq][29](&self, other: &[CursorIcon][5]) -> [bool][30]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][31]§

#### fn [ne][32](&self, other: [&Rhs][23]) -> [bool][30]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

§

### impl [Copy][33] for [CursorIcon][5]

§

### impl [Eq][34] for [CursorIcon][5]

§

### impl [StructuralPartialEq][35] for [CursorIcon][5]

## Auto Trait Implementations§

§

### impl [Freeze][36] for [CursorIcon][5]

§

### impl [RefUnwindSafe][37] for [CursorIcon][5]

§

### impl [Send][38] for [CursorIcon][5]

§

### impl [Sync][39] for [CursorIcon][5]

§

### impl [Unpin][40] for [CursorIcon][5]

§

### impl [UnwindSafe][41] for [CursorIcon][5]

## Blanket Implementations§

[Source][42]§

### impl<T> [Any][43] for T

where T: 'static + ?[Sized][27],

[Source][44]§

#### fn [type_id][45](&self) -> [TypeId][46]

Gets the `TypeId` of `self`. [Read more][45]

[Source][47]§

### impl<T> [Borrow][48]<T> for T

where T: ?[Sized][27],

[Source][49]§

#### fn [borrow][50](&self) -> [&T][23]

Immutably borrows from an owned value. [Read more][50]

[Source][51]§

### impl<T> [BorrowMut][52]<T> for T

where T: ?[Sized][27],

[Source][53]§

#### fn [borrow_mut][54](&mut self) -> [&mut T][23]

Mutably borrows from an owned value. [Read more][54]

[Source][55]§

### impl<T> [CloneToUninit][56] for T

where T: [Clone][4],

[Source][57]§

#### unsafe fn [clone_to_uninit][58](&self, dest: [*mut ][59][u8][60])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][58]

[Source][61]§

### impl<'de, D, R> [CommandArg][62]<'de, R> for D

where D: [Deserialize][17]<'de>, R: [Runtime][63],

[Source][64]§

#### fn [from_command][65](command: [CommandItem][66]<'de, R>) -> [Result][12]<D, [InvokeError][67]>

Derives an instance of `Self` from the [`CommandItem`][66]. [Read more][65]

[Source][68]§

### impl<T> [From][69]<T> for T

[Source][70]§

#### fn [from][71](t: T) -> T

Returns the argument unchanged.

[Source][72]§

### impl<T, U> [Into][73]<U> for T

where U: [From][69]<T>,

[Source][74]§

#### fn [into][75](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][69]<T> for U` chooses to do.

[Source][76]§

### impl<T> [ScopeObject][77] for T

where T: [Send][38] \+ [Sync][39] \+ [Debug][9] \+ [DeserializeOwned][78] \+ 'static,

[Source][79]§

#### type [Error][80] = [Error][81]

The error type.

[Source][82]§

#### fn [deserialize][83]<R>( _app: &[AppHandle][84]<R>, raw: Value, ) -> [Result][12]<T, <T as [ScopeObject][77]>::[Error][85]>

where R: [Runtime][63],

Deserialize the raw scope value.

[Source][86]§

### impl<T> [ToOwned][87] for T

where T: [Clone][4],

[Source][88]§

#### type [Owned][89] = T

The resulting type after obtaining ownership.

[Source][90]§

#### fn [to_owned][91](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][91]

[Source][92]§

#### fn [clone_into][93](&self, target: [&mut T][23])

Uses borrowed data to replace owned data, usually by cloning. [Read more][93]

[Source][94]§

### impl<T, U> [TryFrom][95]<U> for T

where U: [Into][73]<T>,

[Source][96]§

#### type [Error][97] = [Infallible][98]

The type returned in the event of a conversion error.

[Source][99]§

#### fn [try_from][100](value: U) -> [Result][12]<T, <T as [TryFrom][95]<U>>::[Error][101]>

Performs the conversion.

[Source][102]§

### impl<T, U> [TryInto][103]<U> for T

where U: [TryFrom][95]<T>,

[Source][104]§

#### type [Error][105] = <U as [TryFrom][95]<T>>::[Error][101]

The type returned in the event of a conversion error.

[Source][106]§

#### fn [try_into][107](self) -> [Result][12]<U, <U as [TryFrom][95]<T>>::[Error][101]>

Performs the conversion.

[Source][108]§

### impl<T> [DeserializeOwned][78] for T

where T: for<'de> [Deserialize][17]<'de>,

§

### impl<T> UserEvent for T

where T: [Debug][9] \+ [Clone][4] \+ [Send][38] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [5]: enum.CursorIcon.html (enum tauri::CursorIcon)
   [6]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [7]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [8]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [9]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [10]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [11]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [12]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [14]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [15]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [16]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [17]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html (trait serde_core::de::Deserialize)
   [18]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html#tymethod.deserialize
   [19]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html (trait serde_core::de::Deserializer)
   [20]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#associatedtype.Error (type serde_core::de::Deserializer::Error)
   [21]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html (trait core::hash::Hash)
   [22]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#tymethod.hash
   [23]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [24]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hasher.html (trait core::hash::Hasher)
   [25]: https://doc.rust-lang.org/1.94.1/src/core/hash/mod.rs.html#235-237
   [26]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#method.hash_slice
   [27]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [28]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [29]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [30]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [31]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [32]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [33]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [34]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [35]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [36]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [37]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [38]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [39]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [40]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [41]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [42]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [43]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [44]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [45]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [46]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [47]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [48]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [49]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [50]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [51]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [52]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [54]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [55]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [56]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [57]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [58]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [59]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [60]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [61]: ../src/tauri/ipc/command.rs.html#62-70
   [62]: ipc/trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [63]: trait.Runtime.html (trait tauri::Runtime)
   [64]: ../src/tauri/ipc/command.rs.html#63-69
   [65]: ipc/trait.CommandArg.html#tymethod.from_command
   [66]: ipc/struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [67]: ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [68]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [69]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [70]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [72]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [74]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [75]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [76]: ../src/tauri/ipc/authority.rs.html#686-691
   [77]: ipc/trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [78]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)
   [79]: ../src/tauri/ipc/authority.rs.html#687
   [80]: ipc/trait.ScopeObject.html#associatedtype.Error
   [81]: https://docs.rs/serde_json/1.0.149/serde_json/error/struct.Error.html (struct serde_json::error::Error)
   [82]: ../src/tauri/ipc/authority.rs.html#688-690
   [83]: ipc/trait.ScopeObject.html#tymethod.deserialize
   [84]: struct.AppHandle.html (struct tauri::AppHandle)
   [85]: ipc/trait.ScopeObject.html#associatedtype.Error (type tauri::ipc::ScopeObject::Error)
   [86]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [87]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [88]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [89]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [90]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [91]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [92]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [93]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [94]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [95]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [96]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [97]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [98]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [99]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [100]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [101]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [102]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [103]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [104]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [105]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [106]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [107]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [108]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#633

