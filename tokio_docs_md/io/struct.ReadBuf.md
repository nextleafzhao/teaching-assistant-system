## ReadBuf

## [tokio][1]1.51.1

## ReadBuf

### Methods

  * advance
  * assume_init
  * capacity
  * clear
  * filled
  * filled_mut
  * initialize_unfilled
  * initialize_unfilled_to
  * initialized
  * initialized_mut
  * inner_mut
  * new
  * put_slice
  * remaining
  * set_filled
  * take
  * unfilled_mut
  * uninit



### Trait Implementations

  * Debug



### Auto Trait Implementations

  * !UnwindSafe
  * Freeze
  * RefUnwindSafe
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



## [In tokio::io][2]

[tokio][3]::[io][2]

# Struct ReadBuf Copy item path

[Source][4]
[code] 
    pub struct ReadBuf<'a> { /* private fields */ }
[/code]

Expand description

A wrapper around a byte buffer that is incrementally filled and initialized.

This type is a sort of “double cursor”. It tracks three regions in the buffer: a region at the beginning of the buffer that has been logically filled with data, a region that has been initialized at some point but not yet logically filled, and a region at the end that may be uninitialized. The filled region is guaranteed to be a subset of the initialized region.

In summary, the contents of the buffer can be visualized as:
[code] 
    [             capacity              ]
    [ filled |         unfilled         ]
    [    initialized    | uninitialized ]
[/code]

It is undefined behavior to de-initialize any bytes from the uninitialized region, since it is merely unknown whether this region is uninitialized or not, and if part of it turns out to be initialized, it must stay initialized.

## Implementations§

[Source][5]§

### impl<'a> [ReadBuf][6]<'a>

[Source][7]

#### pub fn new(buf: &'a mut [[u8][8]]) -> [ReadBuf][6]<'a>

Creates a new `ReadBuf` from a fully initialized buffer.

[Source][9]

#### pub fn uninit(buf: &'a mut [[MaybeUninit][10]<[u8][8]>]) -> [ReadBuf][6]<'a>

Creates a new `ReadBuf` from a buffer that may be uninitialized.

The internal cursor will mark the entire buffer as uninitialized. If the buffer is known to be partially initialized, then use `assume_init` to move the internal cursor.

[Source][11]

#### pub fn capacity(&self) -> [usize][12]

Returns the total capacity of the buffer.

[Source][13]

#### pub fn filled(&self) -> &[[u8][8]] ⓘ

Returns a shared reference to the filled portion of the buffer.

[Source][14]

#### pub fn filled_mut(&mut self) -> &mut [[u8][8]] ⓘ

Returns a mutable reference to the filled portion of the buffer.

[Source][15]

#### pub fn take(&mut self, n: [usize][12]) -> [ReadBuf][6]<'_>

Returns a new `ReadBuf` comprised of the unfilled section up to `n`.

[Source][16]

#### pub fn initialized(&self) -> &[[u8][8]] ⓘ

Returns a shared reference to the initialized portion of the buffer.

This includes the filled portion.

[Source][17]

#### pub fn initialized_mut(&mut self) -> &mut [[u8][8]] ⓘ

Returns a mutable reference to the initialized portion of the buffer.

This includes the filled portion.

[Source][18]

#### pub unsafe fn inner_mut(&mut self) -> &mut [[MaybeUninit][10]<[u8][8]>]

Returns a mutable reference to the entire buffer, without ensuring that it has been fully initialized.

The elements between 0 and `self.filled().len()` are filled, and those between 0 and `self.initialized().len()` are initialized (and so can be converted to a `&mut [u8]`).

The caller of this method must ensure that these invariants are upheld. For example, if the caller initializes some of the uninitialized section of the buffer, it must call [`assume_init`][19] with the number of bytes initialized.

##### §Safety

The caller must not de-initialize portions of the buffer that have already been initialized. This includes any bytes in the region marked as uninitialized by `ReadBuf`.

[Source][20]

#### pub unsafe fn unfilled_mut(&mut self) -> &mut [[MaybeUninit][10]<[u8][8]>]

Returns a mutable reference to the unfilled part of the buffer without ensuring that it has been fully initialized.

##### §Safety

The caller must not de-initialize portions of the buffer that have already been initialized. This includes any bytes in the region marked as uninitialized by `ReadBuf`.

[Source][21]

#### pub fn initialize_unfilled(&mut self) -> &mut [[u8][8]] ⓘ

Returns a mutable reference to the unfilled part of the buffer, ensuring it is fully initialized.

Since `ReadBuf` tracks the region of the buffer that has been initialized, this is effectively “free” after the first use.

[Source][22]

#### pub fn initialize_unfilled_to(&mut self, n: [usize][12]) -> &mut [[u8][8]] ⓘ

Returns a mutable reference to the first `n` bytes of the unfilled part of the buffer, ensuring it is fully initialized.

##### §Panics

Panics if `self.remaining()` is less than `n`.

[Source][23]

#### pub fn remaining(&self) -> [usize][12]

Returns the number of bytes at the end of the slice that have not yet been filled.

[Source][24]

#### pub fn clear(&mut self)

Clears the buffer, resetting the filled region to empty.

The number of initialized bytes is not changed, and the contents of the buffer are not modified.

[Source][25]

#### pub fn advance(&mut self, n: [usize][12])

Advances the size of the filled region of the buffer.

The number of initialized bytes is not changed.

##### §Panics

Panics if the filled region of the buffer would become larger than the initialized region.

[Source][26]

#### pub fn set_filled(&mut self, n: [usize][12])

Sets the size of the filled region of the buffer.

The number of initialized bytes is not changed.

Note that this can be used to _shrink_ the filled region of the buffer in addition to growing it (for example, by a `AsyncRead` implementation that compresses data in-place).

##### §Panics

Panics if the filled region of the buffer would become larger than the initialized region.

[Source][27]

#### pub unsafe fn assume_init(&mut self, n: [usize][12])

Asserts that the first `n` unfilled bytes of the buffer are initialized.

`ReadBuf` assumes that bytes are never de-initialized, so this method does nothing when called with fewer bytes than are already known to be initialized.

##### §Safety

The caller must ensure that `n` unfilled bytes of the buffer have already been initialized.

[Source][28]

#### pub fn put_slice(&mut self, buf: &[[u8][8]])

Appends data to the buffer, advancing the written position and possibly also the initialized position.

##### §Panics

Panics if `self.remaining()` is less than `buf.len()`.

## Trait Implementations§

[Source][29]§

### impl [Debug][30] for [ReadBuf][6]<'_>

[Source][31]§

#### fn [fmt][32](&self, f: &mut [Formatter][33]<'_>) -> [Result][34]

Formats the value using the given formatter. [Read more][32]

## Auto Trait Implementations§

§

### impl<'a> [Freeze][35] for [ReadBuf][6]<'a>

§

### impl<'a> [RefUnwindSafe][36] for [ReadBuf][6]<'a>

§

### impl<'a> [Send][37] for [ReadBuf][6]<'a>

§

### impl<'a> [Sync][38] for [ReadBuf][6]<'a>

§

### impl<'a> [Unpin][39] for [ReadBuf][6]<'a>

§

### impl<'a> ![UnwindSafe][40] for [ReadBuf][6]<'a>

## Blanket Implementations§

[Source][41]§

### impl<T> [Any][42] for T

where T: 'static + ?[Sized][43],

[Source][44]§

#### fn [type_id][45](&self) -> [TypeId][46]

Gets the `TypeId` of `self`. [Read more][45]

[Source][47]§

### impl<T> [Borrow][48]<T> for T

where T: ?[Sized][43],

[Source][49]§

#### fn [borrow][50](&self) -> [&T][51]

Immutably borrows from an owned value. [Read more][50]

[Source][52]§

### impl<T> [BorrowMut][53]<T> for T

where T: ?[Sized][43],

[Source][54]§

#### fn [borrow_mut][55](&mut self) -> [&mut T][51]

Mutably borrows from an owned value. [Read more][55]

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

#### fn [try_from][70](value: U) -> [Result][71]<T, <T as [TryFrom][65]<U>>::[Error][72]>

Performs the conversion.

[Source][73]§

### impl<T, U> [TryInto][74]<U> for T

where U: [TryFrom][65]<T>,

[Source][75]§

#### type [Error][76] = <U as [TryFrom][65]<T>>::[Error][72]

The type returned in the event of a conversion error.

[Source][77]§

#### fn [try_into][78](self) -> [Result][71]<U, <U as [TryFrom][65]<T>>::[Error][72]>

Performs the conversion.

   [1]: ../../tokio/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../../src/tokio/io/read_buf.rs.html#23-27
   [5]: ../../src/tokio/io/read_buf.rs.html#29-275
   [6]: struct.ReadBuf.html (struct tokio::io::ReadBuf)
   [7]: ../../src/tokio/io/read_buf.rs.html#32-40
   [8]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [9]: ../../src/tokio/io/read_buf.rs.html#48-54
   [10]: https://doc.rust-lang.org/1.94.1/core/mem/maybe_uninit/union.MaybeUninit.html (union core::mem::maybe_uninit::MaybeUninit)
   [11]: ../../src/tokio/io/read_buf.rs.html#58-60
   [12]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [13]: ../../src/tokio/io/read_buf.rs.html#64-69
   [14]: ../../src/tokio/io/read_buf.rs.html#73-78
   [15]: ../../src/tokio/io/read_buf.rs.html#82-86
   [16]: ../../src/tokio/io/read_buf.rs.html#92-97
   [17]: ../../src/tokio/io/read_buf.rs.html#103-108
   [18]: ../../src/tokio/io/read_buf.rs.html#125-127
   [19]: struct.ReadBuf.html#method.assume_init (method tokio::io::ReadBuf::assume_init)
   [20]: ../../src/tokio/io/read_buf.rs.html#137-139
   [21]: ../../src/tokio/io/read_buf.rs.html#146-148
   [22]: ../../src/tokio/io/read_buf.rs.html#158-177
   [23]: ../../src/tokio/io/read_buf.rs.html#181-183
   [24]: ../../src/tokio/io/read_buf.rs.html#189-191
   [25]: ../../src/tokio/io/read_buf.rs.html#202-205
   [26]: ../../src/tokio/io/read_buf.rs.html#219-225
   [27]: ../../src/tokio/io/read_buf.rs.html#236-241
   [28]: ../../src/tokio/io/read_buf.rs.html#250-274
   [29]: ../../src/tokio/io/read_buf.rs.html#306-314
   [30]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [31]: ../../src/tokio/io/read_buf.rs.html#307-313
   [32]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [33]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [34]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [35]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [36]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [37]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [38]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [39]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [40]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [41]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [42]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [43]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [44]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [45]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [46]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [47]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [48]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [49]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [50]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [51]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [52]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [53]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [54]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [55]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
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
   [71]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [72]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [73]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [74]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [75]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [76]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [77]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [78]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

