## AboutMetadataBuilder

[![logo][1]][2]

## [tauri][2]2.10.3

## AboutMetadataBuilder

### Methods

  * authors
  * build
  * comments
  * copyright
  * credits
  * icon
  * license
  * name
  * new
  * short_version
  * version
  * website
  * website_label



### Trait Implementations

  * Clone
  * Debug
  * Default



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

# Struct AboutMetadataBuilder Copy item path

[Source][5]
[code] 
    pub struct AboutMetadataBuilder<'a>(/* private fields */);
[/code]

Expand description

A builder type for [`AboutMetadata`][6].

## Implementations§

[Source][7]§

### impl<'a> [AboutMetadataBuilder][8]<'a>

[Source][9]

#### pub fn new() -> Self

Create a new about metadata builder.

[Source][10]

#### pub fn name<S: [Into][11]<[String][12]>>(self, name: [Option][13]<S>) -> Self

Sets the application name.

[Source][14]

#### pub fn version<S: [Into][11]<[String][12]>>(self, version: [Option][13]<S>) -> Self

Sets the application version.

[Source][15]

#### pub fn short_version<S: [Into][11]<[String][12]>>(self, short_version: [Option][13]<S>) -> Self

Sets the short version, e.g. “1.0”.

###### §Platform-specific

  * **Windows / Linux:** Appended to the end of `version` in parentheses.



[Source][16]

#### pub fn authors(self, authors: [Option][13]<[Vec][17]<[String][12]>>) -> Self

Sets the authors of the application.

###### §Platform-specific

  * **macOS:** Unsupported.



[Source][18]

#### pub fn comments<S: [Into][11]<[String][12]>>(self, comments: [Option][13]<S>) -> Self

Application comments.

###### §Platform-specific

  * **macOS:** Unsupported.



[Source][19]

#### pub fn copyright<S: [Into][11]<[String][12]>>(self, copyright: [Option][13]<S>) -> Self

Sets the copyright of the application.

[Source][20]

#### pub fn license<S: [Into][11]<[String][12]>>(self, license: [Option][13]<S>) -> Self

Sets the license of the application.

###### §Platform-specific

  * **macOS:** Unsupported.



[Source][21]

#### pub fn website<S: [Into][11]<[String][12]>>(self, website: [Option][13]<S>) -> Self

Sets the application website.

###### §Platform-specific

  * **macOS:** Unsupported.



[Source][22]

#### pub fn website_label<S: [Into][11]<[String][12]>>(self, website_label: [Option][13]<S>) -> Self

Sets the website label.

###### §Platform-specific

  * **macOS:** Unsupported.



[Source][23]

#### pub fn credits<S: [Into][11]<[String][12]>>(self, credits: [Option][13]<S>) -> Self

Sets the credits.

###### §Platform-specific

  * **Windows / Linux:** Unsupported.



[Source][24]

#### pub fn icon(self, icon: [Option][13]<[Image][25]<'a>>) -> Self

Sets the application icon.

###### §Platform-specific

  * **Windows:** Unsupported.



[Source][26]

#### pub fn build(self) -> [AboutMetadata][6]<'a>

Construct the final [`AboutMetadata`][6]

## Trait Implementations§

[Source][27]§

### impl<'a> [Clone][28] for [AboutMetadataBuilder][8]<'a>

[Source][27]§

#### fn [clone][29](&self) -> [AboutMetadataBuilder][8]<'a>

Returns a duplicate of the value. [Read more][29]

1.0.0 · [Source][30]§

#### fn [clone_from][31](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][31]

[Source][27]§

### impl<'a> [Debug][32] for [AboutMetadataBuilder][8]<'a>

[Source][27]§

#### fn [fmt][33](&self, f: &mut [Formatter][34]<'_>) -> [Result][35]

Formats the value using the given formatter. [Read more][33]

[Source][27]§

### impl<'a> [Default][36] for [AboutMetadataBuilder][8]<'a>

[Source][27]§

#### fn [default][37]() -> [AboutMetadataBuilder][8]<'a>

Returns the “default value” for a type. [Read more][37]

## Auto Trait Implementations§

§

### impl<'a> [Freeze][38] for [AboutMetadataBuilder][8]<'a>

§

### impl<'a> [RefUnwindSafe][39] for [AboutMetadataBuilder][8]<'a>

§

### impl<'a> [Send][40] for [AboutMetadataBuilder][8]<'a>

§

### impl<'a> [Sync][41] for [AboutMetadataBuilder][8]<'a>

§

### impl<'a> [Unpin][42] for [AboutMetadataBuilder][8]<'a>

§

### impl<'a> [UnwindSafe][43] for [AboutMetadataBuilder][8]<'a>

## Blanket Implementations§

[Source][44]§

### impl<T> [Any][45] for T

where T: 'static + ?[Sized][46],

[Source][47]§

#### fn [type_id][48](&self) -> [TypeId][49]

Gets the `TypeId` of `self`. [Read more][48]

[Source][50]§

### impl<T> [Borrow][51]<T> for T

where T: ?[Sized][46],

[Source][52]§

#### fn [borrow][53](&self) -> [&T][54]

Immutably borrows from an owned value. [Read more][53]

[Source][55]§

### impl<T> [BorrowMut][56]<T> for T

where T: ?[Sized][46],

[Source][57]§

#### fn [borrow_mut][58](&mut self) -> [&mut T][54]

Mutably borrows from an owned value. [Read more][58]

[Source][59]§

### impl<T> [CloneToUninit][60] for T

where T: [Clone][28],

[Source][61]§

#### unsafe fn [clone_to_uninit][62](&self, dest: [*mut ][63][u8][64])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][62]

[Source][65]§

### impl<T> [From][66]<T> for T

[Source][67]§

#### fn [from][68](t: T) -> T

Returns the argument unchanged.

[Source][69]§

### impl<T, U> [Into][11]<U> for T

where U: [From][66]<T>,

[Source][70]§

#### fn [into][71](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][66]<T> for U` chooses to do.

[Source][72]§

### impl<T> [ToOwned][73] for T

where T: [Clone][28],

[Source][74]§

#### type [Owned][75] = T

The resulting type after obtaining ownership.

[Source][76]§

#### fn [to_owned][77](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][77]

[Source][78]§

#### fn [clone_into][79](&self, target: [&mut T][54])

Uses borrowed data to replace owned data, usually by cloning. [Read more][79]

[Source][80]§

### impl<T, U> [TryFrom][81]<U> for T

where U: [Into][11]<T>,

[Source][82]§

#### type [Error][83] = [Infallible][84]

The type returned in the event of a conversion error.

[Source][85]§

#### fn [try_from][86](value: U) -> [Result][87]<T, <T as [TryFrom][81]<U>>::[Error][88]>

Performs the conversion.

[Source][89]§

### impl<T, U> [TryInto][90]<U> for T

where U: [TryFrom][81]<T>,

[Source][91]§

#### type [Error][92] = <U as [TryFrom][81]<T>>::[Error][88]

The type returned in the event of a conversion error.

[Source][93]§

#### fn [try_into][94](self) -> [Result][87]<U, <U as [TryFrom][81]<T>>::[Error][88]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][32] \+ [Clone][28] \+ [Send][40] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/menu/mod.rs.html#228
   [6]: struct.AboutMetadata.html (struct tauri::menu::AboutMetadata)
   [7]: ../../src/tauri/menu/mod.rs.html#230-328
   [8]: struct.AboutMetadataBuilder.html (struct tauri::menu::AboutMetadataBuilder)
   [9]: ../../src/tauri/menu/mod.rs.html#232-234
   [10]: ../../src/tauri/menu/mod.rs.html#237-240
   [11]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [12]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [13]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [14]: ../../src/tauri/menu/mod.rs.html#242-245
   [15]: ../../src/tauri/menu/mod.rs.html#251-254
   [16]: ../../src/tauri/menu/mod.rs.html#260-263
   [17]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [18]: ../../src/tauri/menu/mod.rs.html#269-272
   [19]: ../../src/tauri/menu/mod.rs.html#274-277
   [20]: ../../src/tauri/menu/mod.rs.html#283-286
   [21]: ../../src/tauri/menu/mod.rs.html#292-295
   [22]: ../../src/tauri/menu/mod.rs.html#301-304
   [23]: ../../src/tauri/menu/mod.rs.html#310-313
   [24]: ../../src/tauri/menu/mod.rs.html#319-322
   [25]: ../image/struct.Image.html (struct tauri::image::Image)
   [26]: ../../src/tauri/menu/mod.rs.html#325-327
   [27]: ../../src/tauri/menu/mod.rs.html#227
   [28]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [29]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [30]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [31]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [32]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [33]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [34]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [35]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [36]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [37]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [38]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [39]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [40]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [41]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [42]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [43]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [44]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [45]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [46]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [47]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [48]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [49]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [50]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [51]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [53]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [54]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [55]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [56]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [57]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [58]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [59]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [60]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [61]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [62]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [63]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [64]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [65]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [67]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [69]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [70]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [72]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [73]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [74]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [75]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [76]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [77]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [78]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [79]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [80]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [81]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [82]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [83]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [84]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [85]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [86]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [87]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [88]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [89]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [90]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [91]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [92]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [93]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [94]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

