## AboutMetadata

[![logo][1]][2]

## [tauri][2]2.10.3

## AboutMetadata

### Fields

  * authors
  * comments
  * copyright
  * credits
  * icon
  * license
  * name
  * short_version
  * version
  * website
  * website_label



### Trait Implementations

  * Clone
  * Debug
  * Default
  * TryFrom<AboutMetadata<'_>>



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



## [In tauri::menu][3]

[tauri][4]::[menu][3]

# Struct AboutMetadata Copy item path

[Source][5]
[code] 
    pub struct AboutMetadata<'a> {
        pub name: [Option][6]<[String][7]>,
        pub version: [Option][6]<[String][7]>,
        pub short_version: [Option][6]<[String][7]>,
        pub authors: [Option][6]<[Vec][8]<[String][7]>>,
        pub comments: [Option][6]<[String][7]>,
        pub copyright: [Option][6]<[String][7]>,
        pub license: [Option][6]<[String][7]>,
        pub website: [Option][6]<[String][7]>,
        pub website_label: [Option][6]<[String][7]>,
        pub credits: [Option][6]<[String][7]>,
        pub icon: [Option][6]<[Image][9]<'a>>,
    }
[/code]

Expand description

Application metadata for the [`PredefinedMenuItem::about`][10].

## Fields§

§`name: [Option][6]<[String][7]>`

Sets the application name.

§`version: [Option][6]<[String][7]>`

The application version.

§`short_version: [Option][6]<[String][7]>`

The short version, e.g. “1.0”.

#### §Platform-specific

  * **Windows / Linux:** Appended to the end of `version` in parentheses.



§`authors: [Option][6]<[Vec][8]<[String][7]>>`

The authors of the application.

#### §Platform-specific

  * **macOS:** Unsupported.



§`comments: [Option][6]<[String][7]>`

Application comments.

#### §Platform-specific

  * **macOS:** Unsupported.



§`copyright: [Option][6]<[String][7]>`

The copyright of the application.

§`license: [Option][6]<[String][7]>`

The license of the application.

#### §Platform-specific

  * **macOS:** Unsupported.



§`website: [Option][6]<[String][7]>`

The application website.

#### §Platform-specific

  * **macOS:** Unsupported.



§`website_label: [Option][6]<[String][7]>`

The website label.

#### §Platform-specific

  * **macOS:** Unsupported.



§`credits: [Option][6]<[String][7]>`

The credits.

#### §Platform-specific

  * **Windows / Linux:** Unsupported.



§`icon: [Option][6]<[Image][9]<'a>>`

The application icon.

#### §Platform-specific

  * **Windows:** Unsupported.



## Trait Implementations§

[Source][11]§

### impl<'a> [Clone][12] for [AboutMetadata][13]<'a>

[Source][11]§

#### fn [clone][14](&self) -> [AboutMetadata][13]<'a>

Returns a duplicate of the value. [Read more][14]

1.0.0 · [Source][15]§

#### fn [clone_from][16](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][16]

[Source][11]§

### impl<'a> [Debug][17] for [AboutMetadata][13]<'a>

[Source][11]§

#### fn [fmt][18](&self, f: &mut [Formatter][19]<'_>) -> [Result][20]

Formats the value using the given formatter. [Read more][18]

[Source][11]§

### impl<'a> [Default][21] for [AboutMetadata][13]<'a>

[Source][11]§

#### fn [default][22]() -> [AboutMetadata][13]<'a>

Returns the “default value” for a type. [Read more][22]

[Source][23]§

### impl [TryFrom][24]<[AboutMetadata][13]<'_>> for AboutMetadata

[Source][25]§

#### type [Error][26] = [Error][27]

The type returned in the event of a conversion error.

[Source][28]§

#### fn [try_from][29](value: [AboutMetadata][13]<'_>) -> [Result][30]<Self, Self::[Error][31]>

Performs the conversion.

## Auto Trait Implementations§

§

### impl<'a> [Freeze][32] for [AboutMetadata][13]<'a>

§

### impl<'a> [RefUnwindSafe][33] for [AboutMetadata][13]<'a>

§

### impl<'a> [Send][34] for [AboutMetadata][13]<'a>

§

### impl<'a> [Sync][35] for [AboutMetadata][13]<'a>

§

### impl<'a> [Unpin][36] for [AboutMetadata][13]<'a>

§

### impl<'a> [UnwindSafe][37] for [AboutMetadata][13]<'a>

## Blanket Implementations§

[Source][38]§

### impl<T> [Any][39] for T

where T: 'static + ?[Sized][40],

[Source][41]§

#### fn [type_id][42](&self) -> [TypeId][43]

Gets the `TypeId` of `self`. [Read more][42]

[Source][44]§

### impl<T> [Borrow][45]<T> for T

where T: ?[Sized][40],

[Source][46]§

#### fn [borrow][47](&self) -> [&T][48]

Immutably borrows from an owned value. [Read more][47]

[Source][49]§

### impl<T> [BorrowMut][50]<T> for T

where T: ?[Sized][40],

[Source][51]§

#### fn [borrow_mut][52](&mut self) -> [&mut T][48]

Mutably borrows from an owned value. [Read more][52]

[Source][53]§

### impl<T> [CloneToUninit][54] for T

where T: [Clone][12],

[Source][55]§

#### unsafe fn [clone_to_uninit][56](&self, dest: [*mut ][57][u8][58])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][56]

[Source][59]§

### impl<T> [From][60]<T> for T

[Source][61]§

#### fn [from][62](t: T) -> T

Returns the argument unchanged.

[Source][63]§

### impl<T, U> [Into][64]<U> for T

where U: [From][60]<T>,

[Source][65]§

#### fn [into][66](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][60]<T> for U` chooses to do.

[Source][67]§

### impl<T> [ToOwned][68] for T

where T: [Clone][12],

[Source][69]§

#### type [Owned][70] = T

The resulting type after obtaining ownership.

[Source][71]§

#### fn [to_owned][72](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][72]

[Source][73]§

#### fn [clone_into][74](&self, target: [&mut T][48])

Uses borrowed data to replace owned data, usually by cloning. [Read more][74]

[Source][75]§

### impl<T, U> [TryFrom][24]<U> for T

where U: [Into][64]<T>,

[Source][76]§

#### type [Error][26] = [Infallible][77]

The type returned in the event of a conversion error.

[Source][78]§

#### fn [try_from][29](value: U) -> [Result][30]<T, <T as [TryFrom][24]<U>>::[Error][31]>

Performs the conversion.

[Source][79]§

### impl<T, U> [TryInto][80]<U> for T

where U: [TryFrom][24]<T>,

[Source][81]§

#### type [Error][82] = <U as [TryFrom][24]<T>>::[Error][31]

The type returned in the event of a conversion error.

[Source][83]§

#### fn [try_into][84](self) -> [Result][30]<U, <U as [TryFrom][24]<T>>::[Error][31]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][17] \+ [Clone][12] \+ [Send][34] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/menu/mod.rs.html#169-224
   [6]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [7]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [8]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [9]: ../image/struct.Image.html (struct tauri::image::Image)
   [10]: struct.PredefinedMenuItem.html#method.about (associated function tauri::menu::PredefinedMenuItem::about)
   [11]: ../../src/tauri/menu/mod.rs.html#168
   [12]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [13]: struct.AboutMetadata.html (struct tauri::menu::AboutMetadata)
   [14]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [15]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [16]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [17]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [18]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [19]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [20]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [21]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [22]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [23]: ../../src/tauri/menu/mod.rs.html#330-353
   [24]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [25]: ../../src/tauri/menu/mod.rs.html#331
   [26]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [27]: ../enum.Error.html (enum tauri::Error)
   [28]: ../../src/tauri/menu/mod.rs.html#333-352
   [29]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [30]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [31]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [32]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [33]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [34]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [35]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [36]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [37]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [38]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [39]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [40]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [41]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [42]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [43]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [44]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [45]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [47]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [48]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [49]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [50]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [51]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [52]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [53]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [54]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [56]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [57]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [58]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [59]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [60]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [61]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [62]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [63]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [65]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [67]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [68]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [69]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [70]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [71]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [72]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [73]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [74]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [75]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [76]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [77]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [78]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [79]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [80]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [81]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [82]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [83]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [84]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

