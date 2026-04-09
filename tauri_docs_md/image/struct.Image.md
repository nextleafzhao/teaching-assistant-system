## Image

[![logo][1]][2]

## [tauri][2]2.10.3

## Image

### Methods

  * height
  * new
  * new_owned
  * rgba
  * to_owned
  * width



### Trait Implementations

  * Clone
  * Debug
  * From<Image<'a>>
  * Resource
  * TryFrom<Image<'_>>



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



## [In tauri::image][3]

[tauri][4]::[image][3]

# Struct Image Copy item path

[Source][5]
[code] 
    pub struct Image<'a> { /* private fields */ }
[/code]

Expand description

An RGBA Image in row-major order from top to bottom.

## Implementations§

[Source][6]§

### impl [Image][7]<'static>

[Source][8]

#### pub const fn new_owned(rgba: [Vec][9]<[u8][10]>, width: [u32][11], height: [u32][11]) -> Self

Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height.

Similar to [`Self::new`][12] but avoids cloning the rgba data to get an owned Image.

[Source][13]§

### impl<'a> [Image][7]<'a>

[Source][14]

#### pub const fn new(rgba: &'a [[u8][10]], width: [u32][11], height: [u32][11]) -> Self

Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height.

[Source][15]

#### pub fn rgba(&'a self) -> &'a [[u8][10]] ⓘ

Returns the RGBA data for this image, in row-major order from top to bottom.

[Source][16]

#### pub fn width(&self) -> [u32][11]

Returns the width of this image.

[Source][17]

#### pub fn height(&self) -> [u32][11]

Returns the height of this image.

[Source][18]

#### pub fn to_owned(self) -> [Image][7]<'static>

Convert into a ’static owned [`Image`][7]. This will allocate.

## Trait Implementations§

[Source][19]§

### impl<'a> [Clone][20] for [Image][7]<'a>

[Source][19]§

#### fn [clone][21](&self) -> [Image][7]<'a>

Returns a duplicate of the value. [Read more][21]

1.0.0 · [Source][22]§

#### fn [clone_from][23](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][23]

[Source][24]§

### impl [Debug][25] for [Image][7]<'_>

[Source][26]§

#### fn [fmt][27](&self, f: &mut [Formatter][28]<'_>) -> [Result][29]

Formats the value using the given formatter. [Read more][27]

[Source][30]§

### impl<'a> [From][31]<[Image][7]<'a>> for Icon<'a>

[Source][32]§

#### fn [from][33](img: [Image][7]<'a>) -> Self

Converts to this type from the input type.

[Source][34]§

### impl [Resource][35] for [Image][7]<'static>

[Source][36]§

#### fn [name][37](&self) -> [Cow][38]<'_, [str][39]>

Returns a string representation of the resource. The default implementation returns the Rust type name, but specific resource types may override this trait method.

[Source][40]§

#### fn [close][41](self: [Arc][42]<Self>)

Resources may implement the `close()` trait method if they need to do resource specific clean-ups, such as cancelling pending futures, after a resource has been removed from the resource table.

[Source][43]§

### impl [TryFrom][44]<[Image][7]<'_>> for Icon

Available on **`desktop`** only.

[Source][45]§

#### type [Error][46] = [Error][47]

The type returned in the event of a conversion error.

[Source][48]§

#### fn [try_from][49](img: [Image][7]<'_>) -> [Result][50]<Self, Self::[Error][51]>

Performs the conversion.

## Auto Trait Implementations§

§

### impl<'a> [Freeze][52] for [Image][7]<'a>

§

### impl<'a> [RefUnwindSafe][53] for [Image][7]<'a>

§

### impl<'a> [Send][54] for [Image][7]<'a>

§

### impl<'a> [Sync][55] for [Image][7]<'a>

§

### impl<'a> [Unpin][56] for [Image][7]<'a>

§

### impl<'a> [UnwindSafe][57] for [Image][7]<'a>

## Blanket Implementations§

[Source][58]§

### impl<T> [Any][59] for T

where T: 'static + ?[Sized][60],

[Source][61]§

#### fn [type_id][62](&self) -> [TypeId][63]

Gets the `TypeId` of `self`. [Read more][62]

[Source][64]§

### impl<T> [Borrow][65]<T> for T

where T: ?[Sized][60],

[Source][66]§

#### fn [borrow][67](&self) -> [&T][68]

Immutably borrows from an owned value. [Read more][67]

[Source][69]§

### impl<T> [BorrowMut][70]<T> for T

where T: ?[Sized][60],

[Source][71]§

#### fn [borrow_mut][72](&mut self) -> [&mut T][68]

Mutably borrows from an owned value. [Read more][72]

[Source][73]§

### impl<T> [CloneToUninit][74] for T

where T: [Clone][20],

[Source][75]§

#### unsafe fn [clone_to_uninit][76](&self, dest: [*mut ][77][u8][10])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][76]

[Source][78]§

### impl<T> [From][31]<T> for T

[Source][79]§

#### fn [from][33](t: T) -> T

Returns the argument unchanged.

[Source][80]§

### impl<T, U> [Into][81]<U> for T

where U: [From][31]<T>,

[Source][82]§

#### fn [into][83](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][31]<T> for U` chooses to do.

[Source][84]§

### impl<T> [ToOwned][85] for T

where T: [Clone][20],

[Source][86]§

#### type [Owned][87] = T

The resulting type after obtaining ownership.

[Source][88]§

#### fn [to_owned][89](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][89]

[Source][90]§

#### fn [clone_into][91](&self, target: [&mut T][68])

Uses borrowed data to replace owned data, usually by cloning. [Read more][91]

[Source][92]§

### impl<T, U> [TryFrom][44]<U> for T

where U: [Into][81]<T>,

[Source][93]§

#### type [Error][46] = [Infallible][94]

The type returned in the event of a conversion error.

[Source][95]§

#### fn [try_from][49](value: U) -> [Result][50]<T, <T as [TryFrom][44]<U>>::[Error][51]>

Performs the conversion.

[Source][96]§

### impl<T, U> [TryInto][97]<U> for T

where U: [TryFrom][44]<T>,

[Source][98]§

#### type [Error][99] = <U as [TryFrom][44]<T>>::[Error][51]

The type returned in the event of a conversion error.

[Source][100]§

#### fn [try_into][101](self) -> [Result][50]<U, <U as [TryFrom][44]<T>>::[Error][51]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][25] \+ [Clone][20] \+ [Send][54] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/image/mod.rs.html#16-20
   [6]: ../../src/tauri/image/mod.rs.html#48-59
   [7]: struct.Image.html (struct tauri::image::Image)
   [8]: ../../src/tauri/image/mod.rs.html#52-58
   [9]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [10]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [11]: https://doc.rust-lang.org/1.94.1/std/primitive.u32.html
   [12]: struct.Image.html#method.new (associated function tauri::image::Image::new)
   [13]: ../../src/tauri/image/mod.rs.html#61-128
   [14]: ../../src/tauri/image/mod.rs.html#63-69
   [15]: ../../src/tauri/image/mod.rs.html#102-104
   [16]: ../../src/tauri/image/mod.rs.html#107-109
   [17]: ../../src/tauri/image/mod.rs.html#112-114
   [18]: ../../src/tauri/image/mod.rs.html#118-127
   [19]: ../../src/tauri/image/mod.rs.html#15
   [20]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [21]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [22]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [23]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [24]: ../../src/tauri/image/mod.rs.html#22-44
   [25]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [26]: ../../src/tauri/image/mod.rs.html#23-43
   [27]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [28]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [29]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [30]: ../../src/tauri/image/mod.rs.html#130-138
   [31]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [32]: ../../src/tauri/image/mod.rs.html#131-137
   [33]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [34]: ../../src/tauri/image/mod.rs.html#46
   [35]: ../trait.Resource.html (trait tauri::Resource)
   [36]: ../../src/tauri/resources/mod.rs.html#31-33
   [37]: ../trait.Resource.html#method.name
   [38]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [39]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [40]: ../../src/tauri/resources/mod.rs.html#38
   [41]: ../trait.Resource.html#method.close
   [42]: https://doc.rust-lang.org/1.94.1/alloc/sync/struct.Arc.html (struct alloc::sync::Arc)
   [43]: ../../src/tauri/image/mod.rs.html#141-147
   [44]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [45]: ../../src/tauri/image/mod.rs.html#142
   [46]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [47]: ../enum.Error.html (enum tauri::Error)
   [48]: ../../src/tauri/image/mod.rs.html#144-146
   [49]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [50]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [51]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [52]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [53]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [54]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [55]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [56]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [57]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [59]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [60]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [61]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [62]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [63]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [64]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [65]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [66]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [67]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [68]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [69]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [70]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [71]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [72]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [73]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [74]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [75]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [76]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [77]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [78]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [79]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [80]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [81]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [82]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [83]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [84]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [85]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [86]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [87]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [88]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [89]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [90]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [91]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [92]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [93]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [94]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [95]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [96]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [97]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [98]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [99]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [100]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [101]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

