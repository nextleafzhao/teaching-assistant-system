## JsImage

[![logo][1]][2]

## [tauri][2]2.10.3

## JsImage

### Sections

  * Stability



### Variants

  * Bytes
  * Path
  * Resource
  * Rgba



### Methods

  * into_img



### Trait Implementations

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
  * TryFrom<U>
  * TryInto<U>



## [In tauri::image][3]

[tauri][4]::[image][3]

# Enum JsImage Copy item path

[Source][5]
[code] 
    #[non_exhaustive]
    
    pub enum JsImage {
    
    
        #[non_exhaustive]
    
        Path([PathBuf][6]),
    
    
        #[non_exhaustive]
    
        Bytes([Vec][7]<[u8][8]>),
    
    
        #[non_exhaustive]
    
        Resource([ResourceId][9]),
    
    
        #[non_exhaustive]
    
        Rgba {
            rgba: [Vec][7]<[u8][8]>,
            width: [u32][10],
            height: [u32][10],
        },
    }
[/code]

Expand description

An image type that accepts file paths, raw bytes, previously loaded images and image objects.

This type is meant to be used along the [transformImage][11] API.

## §Stability

The stability of the variants are not guaranteed, and matching against them is not recommended. Use [`JsImage::into_img`][12] instead.

## Variants (Non-exhaustive)§

This enum is marked as non-exhaustive

Non-exhaustive enums could have additional variants added in future. Therefore, when matching against variants of non-exhaustive enums, an extra wildcard arm must be added to account for any future variants.

§

### 

#[non_exhaustive]

Path([PathBuf][6])

A reference to a image in the filesystem.

§

### 

#[non_exhaustive]

Bytes([Vec][7]<[u8][8]>)

Image from raw bytes.

§

### 

#[non_exhaustive]

Resource([ResourceId][9])

An image that was previously loaded with the API and is stored in the resource table.

§

### 

#[non_exhaustive]

Rgba

Raw RGBA definition of an image.

#### Fields

This variant is marked as non-exhaustive

Non-exhaustive enum variants could have additional fields added in future. Therefore, non-exhaustive enum variants cannot be constructed in external crates and cannot be matched against.

§`rgba: [Vec][7]<[u8][8]>`

Image bytes.

§`width: [u32][10]`

Image width.

§`height: [u32][10]`

Image height.

## Implementations§

[Source][13]§

### impl [JsImage][14]

[Source][15]

#### pub fn into_img(self, resources_table: &[ResourceTable][16]) -> [Result][17]<[Arc][18]<[Image][19]<'_>>>

Converts this intermediate image format into an actual [`Image`][19].

This will retrieve the image from the passed [`ResourceTable`][16] if it is [`JsImage::Resource`][20] and will return an error if it doesn’t exist in the passed [`ResourceTable`][16] so make sure the passed [`ResourceTable`][16] is the same one used to store the image, usually this should be the webview [resources table][21].

## Trait Implementations§

[Source][22]§

### impl<'de> [Deserialize][23]<'de> for [JsImage][14]

[Source][22]§

#### fn [deserialize][24]<__D>(__deserializer: __D) -> [Result][25]<Self, __D::[Error][26]>

where __D: [Deserializer][27]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][24]

## Auto Trait Implementations§

§

### impl [Freeze][28] for [JsImage][14]

§

### impl [RefUnwindSafe][29] for [JsImage][14]

§

### impl [Send][30] for [JsImage][14]

§

### impl [Sync][31] for [JsImage][14]

§

### impl [Unpin][32] for [JsImage][14]

§

### impl [UnwindSafe][33] for [JsImage][14]

## Blanket Implementations§

[Source][34]§

### impl<T> [Any][35] for T

where T: 'static + ?[Sized][36],

[Source][37]§

#### fn [type_id][38](&self) -> [TypeId][39]

Gets the `TypeId` of `self`. [Read more][38]

[Source][40]§

### impl<T> [Borrow][41]<T> for T

where T: ?[Sized][36],

[Source][42]§

#### fn [borrow][43](&self) -> [&T][44]

Immutably borrows from an owned value. [Read more][43]

[Source][45]§

### impl<T> [BorrowMut][46]<T> for T

where T: ?[Sized][36],

[Source][47]§

#### fn [borrow_mut][48](&mut self) -> [&mut T][44]

Mutably borrows from an owned value. [Read more][48]

[Source][49]§

### impl<'de, D, R> [CommandArg][50]<'de, R> for D

where D: [Deserialize][23]<'de>, R: [Runtime][51],

[Source][52]§

#### fn [from_command][53](command: [CommandItem][54]<'de, R>) -> [Result][25]<D, [InvokeError][55]>

Derives an instance of `Self` from the [`CommandItem`][54]. [Read more][53]

[Source][56]§

### impl<T> [From][57]<T> for T

[Source][58]§

#### fn [from][59](t: T) -> T

Returns the argument unchanged.

[Source][60]§

### impl<T, U> [Into][61]<U> for T

where U: [From][57]<T>,

[Source][62]§

#### fn [into][63](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][57]<T> for U` chooses to do.

[Source][64]§

### impl<T, U> [TryFrom][65]<U> for T

where U: [Into][61]<T>,

[Source][66]§

#### type [Error][67] = [Infallible][68]

The type returned in the event of a conversion error.

[Source][69]§

#### fn [try_from][70](value: U) -> [Result][25]<T, <T as [TryFrom][65]<U>>::[Error][71]>

Performs the conversion.

[Source][72]§

### impl<T, U> [TryInto][73]<U> for T

where U: [TryFrom][65]<T>,

[Source][74]§

#### type [Error][75] = <U as [TryFrom][65]<T>>::[Error][71]

The type returned in the event of a conversion error.

[Source][76]§

#### fn [try_into][77](self) -> [Result][25]<U, <U as [TryFrom][65]<T>>::[Error][71]>

Performs the conversion.

[Source][78]§

### impl<T> [DeserializeOwned][79] for T

where T: for<'de> [Deserialize][23]<'de>,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/image/mod.rs.html#169-189
   [6]: https://doc.rust-lang.org/1.94.1/std/path/struct.PathBuf.html (struct std::path::PathBuf)
   [7]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [8]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [9]: ../type.ResourceId.html (type tauri::ResourceId)
   [10]: https://doc.rust-lang.org/1.94.1/std/primitive.u32.html
   [11]: https://v2.tauri.app/reference/javascript/api/namespaceimage/#transformimage
   [12]: enum.JsImage.html#method.into_img (method tauri::image::JsImage::into_img)
   [13]: ../../src/tauri/image/mod.rs.html#191-230
   [14]: enum.JsImage.html (enum tauri::image::JsImage)
   [15]: ../../src/tauri/image/mod.rs.html#198-229
   [16]: ../struct.ResourceTable.html (struct tauri::ResourceTable)
   [17]: ../type.Result.html (type tauri::Result)
   [18]: https://doc.rust-lang.org/1.94.1/alloc/sync/struct.Arc.html (struct alloc::sync::Arc)
   [19]: struct.Image.html (struct tauri::image::Image)
   [20]: enum.JsImage.html#variant.Resource (variant tauri::image::JsImage::Resource)
   [21]: ../webview/struct.Webview.html#structfield.resources_table (field tauri::webview::Webview::resources_table)
   [22]: ../../src/tauri/image/mod.rs.html#166
   [23]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html (trait serde_core::de::Deserialize)
   [24]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html#tymethod.deserialize
   [25]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [26]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#associatedtype.Error (type serde_core::de::Deserializer::Error)
   [27]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html (trait serde_core::de::Deserializer)
   [28]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [29]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [30]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [31]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [32]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [33]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [34]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [35]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [36]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [37]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [38]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [39]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [40]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [41]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [42]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [43]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [44]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [45]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [46]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [47]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [48]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [49]: ../../src/tauri/ipc/command.rs.html#62-70
   [50]: ../ipc/trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [51]: ../trait.Runtime.html (trait tauri::Runtime)
   [52]: ../../src/tauri/ipc/command.rs.html#63-69
   [53]: ../ipc/trait.CommandArg.html#tymethod.from_command
   [54]: ../ipc/struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [55]: ../ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [56]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [57]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [59]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [60]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [61]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [62]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [63]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [64]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [65]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [66]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [67]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [69]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [72]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [74]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [75]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [76]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [77]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [78]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#633
   [79]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)

