## Asset

[![logo][1]][2]

## [tauri][2]2.10.3

## Asset

### Fields

  * bytes
  * csp_header
  * mime_type



### Methods

  * bytes
  * csp_header
  * mime_type



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
  * From<T>
  * Into<U>
  * TryFrom<U>
  * TryInto<U>



## [In crate tauri][3]

[tauri][3]

# Struct Asset Copy item path

[Source][4]
[code] 
    #[non_exhaustive]
    
    pub struct Asset {
        pub bytes: [Vec][5]<[u8][6]>,
        pub mime_type: [String][7],
        pub csp_header: [Option][8]<[String][7]>,
    }
[/code]

Expand description

A resolved asset.

## Fields (Non-exhaustive)§

This struct is marked as non-exhaustive

Non-exhaustive structs could have additional fields added in future. Therefore, non-exhaustive structs cannot be constructed in external crates using the traditional `Struct { .. }` syntax; cannot be matched against without a wildcard `..`; and struct update syntax will not work.

§`bytes: [Vec][5]<[u8][6]>`

The asset bytes.

§`mime_type: [String][7]`

The asset’s mime type.

§`csp_header: [Option][8]<[String][7]>`

The `Content-Security-Policy` header value.

## Implementations§

[Source][9]§

### impl [Asset][10]

[Source][11]

#### pub fn bytes(&self) -> &[[u8][6]] ⓘ

The asset bytes.

[Source][12]

#### pub fn mime_type(&self) -> &[str][13]

The asset’s mime type.

[Source][14]

#### pub fn csp_header(&self) -> [Option][8]<&[str][13]>

The `Content-Security-Policy` header value.

## Auto Trait Implementations§

§

### impl [Freeze][15] for [Asset][10]

§

### impl [RefUnwindSafe][16] for [Asset][10]

§

### impl [Send][17] for [Asset][10]

§

### impl [Sync][18] for [Asset][10]

§

### impl [Unpin][19] for [Asset][10]

§

### impl [UnwindSafe][20] for [Asset][10]

## Blanket Implementations§

[Source][21]§

### impl<T> [Any][22] for T

where T: 'static + ?[Sized][23],

[Source][24]§

#### fn [type_id][25](&self) -> [TypeId][26]

Gets the `TypeId` of `self`. [Read more][25]

[Source][27]§

### impl<T> [Borrow][28]<T> for T

where T: ?[Sized][23],

[Source][29]§

#### fn [borrow][30](&self) -> [&T][31]

Immutably borrows from an owned value. [Read more][30]

[Source][32]§

### impl<T> [BorrowMut][33]<T> for T

where T: ?[Sized][23],

[Source][34]§

#### fn [borrow_mut][35](&mut self) -> [&mut T][31]

Mutably borrows from an owned value. [Read more][35]

[Source][36]§

### impl<T> [From][37]<T> for T

[Source][38]§

#### fn [from][39](t: T) -> T

Returns the argument unchanged.

[Source][40]§

### impl<T, U> [Into][41]<U> for T

where U: [From][37]<T>,

[Source][42]§

#### fn [into][43](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][37]<T> for U` chooses to do.

[Source][44]§

### impl<T, U> [TryFrom][45]<U> for T

where U: [Into][41]<T>,

[Source][46]§

#### type [Error][47] = [Infallible][48]

The type returned in the event of a conversion error.

[Source][49]§

#### fn [try_from][50](value: U) -> [Result][51]<T, <T as [TryFrom][45]<U>>::[Error][52]>

Performs the conversion.

[Source][53]§

### impl<T, U> [TryInto][54]<U> for T

where U: [TryFrom][45]<T>,

[Source][55]§

#### type [Error][56] = <U as [TryFrom][45]<T>>::[Error][52]

The type returned in the event of a conversion error.

[Source][57]§

#### fn [try_into][58](self) -> [Result][51]<U, <U as [TryFrom][45]<T>>::[Error][52]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/manager/mod.rs.html#154-161
   [5]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [6]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [7]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [8]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [9]: ../src/tauri/manager/mod.rs.html#163-178
   [10]: struct.Asset.html (struct tauri::Asset)
   [11]: ../src/tauri/manager/mod.rs.html#165-167
   [12]: ../src/tauri/manager/mod.rs.html#170-172
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [14]: ../src/tauri/manager/mod.rs.html#175-177
   [15]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [16]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [17]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [18]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [19]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [20]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [21]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [22]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [23]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [24]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [25]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [26]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [27]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [28]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [29]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [30]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [31]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [32]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [33]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [34]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [35]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [36]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [37]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [38]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [39]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [40]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [41]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [42]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [43]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [44]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [45]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [47]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [48]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [49]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [50]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [51]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [52]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [54]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [56]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [57]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [58]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

