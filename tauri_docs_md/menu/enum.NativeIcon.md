## NativeIcon

[![logo][1]][2]

## [tauri][2]2.10.3

## NativeIcon

### Sections

  * Platform-specific:



### Variants

  * Add
  * Advanced
  * Bluetooth
  * Bookmarks
  * Caution
  * ColorPanel
  * ColumnView
  * Computer
  * EnterFullScreen
  * Everyone
  * ExitFullScreen
  * FlowView
  * Folder
  * FolderBurnable
  * FolderSmart
  * FollowLinkFreestanding
  * FontPanel
  * GoLeft
  * GoRight
  * Home
  * IChatTheater
  * IconView
  * Info
  * InvalidDataFreestanding
  * LeftFacingTriangle
  * ListView
  * LockLocked
  * LockUnlocked
  * MenuMixedState
  * MenuOnState
  * MobileMe
  * MultipleDocuments
  * Network
  * Path
  * PreferencesGeneral
  * QuickLook
  * Refresh
  * RefreshFreestanding
  * Remove
  * RevealFreestanding
  * RightFacingTriangle
  * Share
  * Slideshow
  * SmartBadge
  * StatusAvailable
  * StatusNone
  * StatusPartiallyAvailable
  * StatusUnavailable
  * StopProgress
  * StopProgressFreestanding
  * TrashEmpty
  * TrashFull
  * User
  * UserAccounts
  * UserGroup
  * UserGuest



### Trait Implementations

  * Clone
  * Copy
  * Debug
  * Deserialize<'de>
  * Eq
  * From<NativeIcon>
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



## [In tauri::menu][3]

[tauri][4]::[menu][3]

# Enum NativeIcon Copy item path

[Source][5]
[code] 
    pub enum NativeIcon {
    Show 56 variants    Add,
        Advanced,
        Bluetooth,
        Bookmarks,
        Caution,
        ColorPanel,
        ColumnView,
        Computer,
        EnterFullScreen,
        Everyone,
        ExitFullScreen,
        FlowView,
        Folder,
        FolderBurnable,
        FolderSmart,
        FollowLinkFreestanding,
        FontPanel,
        GoLeft,
        GoRight,
        Home,
        IChatTheater,
        IconView,
        Info,
        InvalidDataFreestanding,
        LeftFacingTriangle,
        ListView,
        LockLocked,
        LockUnlocked,
        MenuMixedState,
        MenuOnState,
        MobileMe,
        MultipleDocuments,
        Network,
        Path,
        PreferencesGeneral,
        QuickLook,
        RefreshFreestanding,
        Refresh,
        Remove,
        RevealFreestanding,
        RightFacingTriangle,
        Share,
        Slideshow,
        SmartBadge,
        StatusAvailable,
        StatusNone,
        StatusPartiallyAvailable,
        StatusUnavailable,
        StopProgressFreestanding,
        StopProgress,
        TrashEmpty,
        TrashFull,
        User,
        UserAccounts,
        UserGroup,
        UserGuest,
    }
[/code]

Expand description

A native Icon to be used for the menu item

### §Platform-specific:

  * **Windows / Linux** : Unsupported.



## Variants§

§

### Add

An add item template image.

§

### Advanced

Advanced preferences toolbar icon for the preferences window.

§

### Bluetooth

A Bluetooth template image.

§

### Bookmarks

Bookmarks image suitable for a template.

§

### Caution

A caution image.

§

### ColorPanel

A color panel toolbar icon.

§

### ColumnView

A column view mode template image.

§

### Computer

A computer icon.

§

### EnterFullScreen

An enter full-screen mode template image.

§

### Everyone

Permissions for all users.

§

### ExitFullScreen

An exit full-screen mode template image.

§

### FlowView

A cover flow view mode template image.

§

### Folder

A folder image.

§

### FolderBurnable

A burnable folder icon.

§

### FolderSmart

A smart folder icon.

§

### FollowLinkFreestanding

A link template image.

§

### FontPanel

A font panel toolbar icon.

§

### GoLeft

A `go back` template image.

§

### GoRight

A `go forward` template image.

§

### Home

Home image suitable for a template.

§

### IChatTheater

An iChat Theater template image.

§

### IconView

An icon view mode template image.

§

### Info

An information toolbar icon.

§

### InvalidDataFreestanding

A template image used to denote invalid data.

§

### LeftFacingTriangle

A generic left-facing triangle template image.

§

### ListView

A list view mode template image.

§

### LockLocked

A locked padlock template image.

§

### LockUnlocked

An unlocked padlock template image.

§

### MenuMixedState

A horizontal dash, for use in menus.

§

### MenuOnState

A check mark template image, for use in menus.

§

### MobileMe

A MobileMe icon.

§

### MultipleDocuments

A drag image for multiple items.

§

### Network

A network icon.

§

### Path

A path button template image.

§

### PreferencesGeneral

General preferences toolbar icon for the preferences window.

§

### QuickLook

A Quick Look template image.

§

### RefreshFreestanding

A refresh template image.

§

### Refresh

A refresh template image.

§

### Remove

A remove item template image.

§

### RevealFreestanding

A reveal contents template image.

§

### RightFacingTriangle

A generic right-facing triangle template image.

§

### Share

A share view template image.

§

### Slideshow

A slideshow template image.

§

### SmartBadge

A badge for a `smart` item.

§

### StatusAvailable

Small green indicator, similar to iChat’s available image.

§

### StatusNone

Small clear indicator.

§

### StatusPartiallyAvailable

Small yellow indicator, similar to iChat’s idle image.

§

### StatusUnavailable

Small red indicator, similar to iChat’s unavailable image.

§

### StopProgressFreestanding

A stop progress template image.

§

### StopProgress

A stop progress button template image.

§

### TrashEmpty

An image of the empty trash can.

§

### TrashFull

An image of the full trash can.

§

### User

Permissions for a single user.

§

### UserAccounts

User account toolbar icon for the preferences window.

§

### UserGroup

Permissions for a group of users.

§

### UserGuest

Permissions for guests.

## Trait Implementations§

[Source][6]§

### impl [Clone][7] for [NativeIcon][8]

[Source][6]§

#### fn [clone][9](&self) -> [NativeIcon][8]

Returns a duplicate of the value. [Read more][9]

1.0.0 · [Source][10]§

#### fn [clone_from][11](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][11]

[Source][6]§

### impl [Debug][12] for [NativeIcon][8]

[Source][6]§

#### fn [fmt][13](&self, f: &mut [Formatter][14]<'_>) -> [Result][15]

Formats the value using the given formatter. [Read more][13]

[Source][6]§

### impl<'de> [Deserialize][16]<'de> for [NativeIcon][8]

[Source][6]§

#### fn [deserialize][17]<__D>(__deserializer: __D) -> [Result][18]<Self, __D::[Error][19]>

where __D: [Deserializer][20]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][17]

[Source][21]§

### impl [From][22]<[NativeIcon][8]> for NativeIcon

[Source][23]§

#### fn [from][24](value: [NativeIcon][8]) -> Self

Converts to this type from the input type.

[Source][6]§

### impl [PartialEq][25] for [NativeIcon][8]

[Source][6]§

#### fn [eq][26](&self, other: &[NativeIcon][8]) -> [bool][27]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][28]§

#### fn [ne][29](&self, other: [&Rhs][30]) -> [bool][27]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][6]§

### impl [Copy][31] for [NativeIcon][8]

[Source][6]§

### impl [Eq][32] for [NativeIcon][8]

[Source][6]§

### impl [StructuralPartialEq][33] for [NativeIcon][8]

## Auto Trait Implementations§

§

### impl [Freeze][34] for [NativeIcon][8]

§

### impl [RefUnwindSafe][35] for [NativeIcon][8]

§

### impl [Send][36] for [NativeIcon][8]

§

### impl [Sync][37] for [NativeIcon][8]

§

### impl [Unpin][38] for [NativeIcon][8]

§

### impl [UnwindSafe][39] for [NativeIcon][8]

## Blanket Implementations§

[Source][40]§

### impl<T> [Any][41] for T

where T: 'static + ?[Sized][42],

[Source][43]§

#### fn [type_id][44](&self) -> [TypeId][45]

Gets the `TypeId` of `self`. [Read more][44]

[Source][46]§

### impl<T> [Borrow][47]<T> for T

where T: ?[Sized][42],

[Source][48]§

#### fn [borrow][49](&self) -> [&T][30]

Immutably borrows from an owned value. [Read more][49]

[Source][50]§

### impl<T> [BorrowMut][51]<T> for T

where T: ?[Sized][42],

[Source][52]§

#### fn [borrow_mut][53](&mut self) -> [&mut T][30]

Mutably borrows from an owned value. [Read more][53]

[Source][54]§

### impl<T> [CloneToUninit][55] for T

where T: [Clone][7],

[Source][56]§

#### unsafe fn [clone_to_uninit][57](&self, dest: [*mut ][58][u8][59])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][57]

[Source][60]§

### impl<'de, D, R> [CommandArg][61]<'de, R> for D

where D: [Deserialize][16]<'de>, R: [Runtime][62],

[Source][63]§

#### fn [from_command][64](command: [CommandItem][65]<'de, R>) -> [Result][18]<D, [InvokeError][66]>

Derives an instance of `Self` from the [`CommandItem`][65]. [Read more][64]

[Source][67]§

### impl<T> [From][22]<T> for T

[Source][68]§

#### fn [from][24](t: T) -> T

Returns the argument unchanged.

[Source][69]§

### impl<T, U> [Into][70]<U> for T

where U: [From][22]<T>,

[Source][71]§

#### fn [into][72](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][22]<T> for U` chooses to do.

[Source][73]§

### impl<T> [ScopeObject][74] for T

where T: [Send][36] \+ [Sync][37] \+ [Debug][12] \+ [DeserializeOwned][75] \+ 'static,

[Source][76]§

#### type [Error][77] = [Error][78]

The error type.

[Source][79]§

#### fn [deserialize][80]<R>( _app: &[AppHandle][81]<R>, raw: Value, ) -> [Result][18]<T, <T as [ScopeObject][74]>::[Error][82]>

where R: [Runtime][62],

Deserialize the raw scope value.

[Source][83]§

### impl<T> [ToOwned][84] for T

where T: [Clone][7],

[Source][85]§

#### type [Owned][86] = T

The resulting type after obtaining ownership.

[Source][87]§

#### fn [to_owned][88](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][88]

[Source][89]§

#### fn [clone_into][90](&self, target: [&mut T][30])

Uses borrowed data to replace owned data, usually by cloning. [Read more][90]

[Source][91]§

### impl<T, U> [TryFrom][92]<U> for T

where U: [Into][70]<T>,

[Source][93]§

#### type [Error][94] = [Infallible][95]

The type returned in the event of a conversion error.

[Source][96]§

#### fn [try_from][97](value: U) -> [Result][18]<T, <T as [TryFrom][92]<U>>::[Error][98]>

Performs the conversion.

[Source][99]§

### impl<T, U> [TryInto][100]<U> for T

where U: [TryFrom][92]<T>,

[Source][101]§

#### type [Error][102] = <U as [TryFrom][92]<T>>::[Error][98]

The type returned in the event of a conversion error.

[Source][103]§

#### fn [try_into][104](self) -> [Result][18]<U, <U as [TryFrom][92]<T>>::[Error][98]>

Performs the conversion.

[Source][105]§

### impl<T> [DeserializeOwned][75] for T

where T: for<'de> [Deserialize][16]<'de>,

§

### impl<T> UserEvent for T

where T: [Debug][12] \+ [Clone][7] \+ [Send][36] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/menu/mod.rs.html#361-474
   [6]: ../../src/tauri/menu/mod.rs.html#360
   [7]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [8]: enum.NativeIcon.html (enum tauri::menu::NativeIcon)
   [9]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [10]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [11]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [12]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [13]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [14]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [15]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [16]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html (trait serde_core::de::Deserialize)
   [17]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html#tymethod.deserialize
   [18]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [19]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#associatedtype.Error (type serde_core::de::Deserializer::Error)
   [20]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html (trait serde_core::de::Deserializer)
   [21]: ../../src/tauri/menu/mod.rs.html#476-537
   [22]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [23]: ../../src/tauri/menu/mod.rs.html#477-536
   [24]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [25]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [26]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [27]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [28]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [29]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [30]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [31]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [32]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [33]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [34]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [35]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [36]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [37]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [38]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [39]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [40]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [41]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [42]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [44]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [45]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [47]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [48]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [49]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [50]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [51]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [53]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [54]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [55]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [56]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [57]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [58]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [59]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [60]: ../../src/tauri/ipc/command.rs.html#62-70
   [61]: ../ipc/trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [62]: ../trait.Runtime.html (trait tauri::Runtime)
   [63]: ../../src/tauri/ipc/command.rs.html#63-69
   [64]: ../ipc/trait.CommandArg.html#tymethod.from_command
   [65]: ../ipc/struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [66]: ../ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [67]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [68]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [69]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [71]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [72]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [73]: ../../src/tauri/ipc/authority.rs.html#686-691
   [74]: ../ipc/trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [75]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)
   [76]: ../../src/tauri/ipc/authority.rs.html#687
   [77]: ../ipc/trait.ScopeObject.html#associatedtype.Error
   [78]: https://docs.rs/serde_json/1.0.149/serde_json/error/struct.Error.html (struct serde_json::error::Error)
   [79]: ../../src/tauri/ipc/authority.rs.html#688-690
   [80]: ../ipc/trait.ScopeObject.html#tymethod.deserialize
   [81]: ../struct.AppHandle.html (struct tauri::AppHandle)
   [82]: ../ipc/trait.ScopeObject.html#associatedtype.Error (type tauri::ipc::ScopeObject::Error)
   [83]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [84]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [85]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [86]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [87]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [88]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [89]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [90]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [91]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [92]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [93]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [94]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [95]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [96]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [97]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [98]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [99]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [100]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [101]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [102]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [103]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [104]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [105]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#633

