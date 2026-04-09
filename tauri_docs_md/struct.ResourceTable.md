## ResourceTable

[![logo][1]][2]

## [tauri][2]2.10.3

## ResourceTable

### Methods

  * add
  * add_arc
  * add_arc_dyn
  * close
  * get
  * get_any
  * has
  * names
  * replace
  * take
  * take_any



### Trait Implementations

  * Default



### Auto Trait Implementations

  * !RefUnwindSafe
  * !UnwindSafe
  * Freeze
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



## [In crate tauri][3]

[tauri][3]

# Struct ResourceTable Copy item path

[Source][4]
[code] 
    pub struct ResourceTable { /* private fields */ }
[/code]

Expand description

Map-like data structure storing Tauri’s resources (equivalent to file descriptors).

Provides basic methods for element access. A resource can be of any type. Different types of resources can be stored in the same map, and provided with a name for description.

Each resource is identified through a _resource ID (rid)_ , which acts as the key in the map.

## Implementations§

[Source][5]§

### impl [ResourceTable][6]

[Source][7]

#### pub fn add<T: [Resource][8]>(&mut self, resource: T) -> [ResourceId][9]

Inserts resource into the resource table, which takes ownership of it.

The resource type is erased at runtime and must be statically known when retrieving it through `get()`.

Returns a unique resource ID, which acts as a key for this resource.

[Source][10]

#### pub fn add_arc<T: [Resource][8]>(&mut self, resource: [Arc][11]<T>) -> [ResourceId][9]

Inserts a `Arc`-wrapped resource into the resource table.

The resource type is erased at runtime and must be statically known when retrieving it through `get()`.

Returns a unique resource ID, which acts as a key for this resource.

[Source][12]

#### pub fn add_arc_dyn(&mut self, resource: [Arc][11]<dyn [Resource][8]>) -> [ResourceId][9]

Inserts a `Arc`-wrapped resource into the resource table.

The resource type is erased at runtime and must be statically known when retrieving it through `get()`.

Returns a unique resource ID, which acts as a key for this resource.

[Source][13]

#### pub fn has(&self, rid: [ResourceId][9]) -> [bool][14]

Returns true if any resource with the given `rid` exists.

[Source][15]

#### pub fn get<T: [Resource][8]>(&self, rid: [ResourceId][9]) -> [Result][16]<[Arc][11]<T>>

Returns a reference counted pointer to the resource of type `T` with the given `rid`. If `rid` is not present or has a type different than `T`, this function returns [`Error::BadResourceId`][17].

[Source][18]

#### pub fn get_any(&self, rid: [ResourceId][9]) -> [Result][16]<[Arc][11]<dyn [Resource][8]>>

Returns a reference counted pointer to the resource of the given `rid`. If `rid` is not present, this function returns [`Error::BadResourceId`].

[Source][19]

#### pub fn replace<T: [Resource][8]>(&mut self, rid: [ResourceId][9], resource: T)

Replaces a resource with a new resource.

Panics if the resource does not exist.

[Source][20]

#### pub fn take<T: [Resource][8]>(&mut self, rid: [ResourceId][9]) -> [Result][16]<[Arc][11]<T>>

Removes a resource of type `T` from the resource table and returns it. If a resource with the given `rid` exists but its type does not match `T`, it is not removed from the resource table. Note that the resource’s `close()` method is _not_ called.

Also note that there might be a case where the returned `Arc<T>` is referenced by other variables. That is, we cannot assume that `Arc::strong_count(&returned_arc)` is always equal to 1 on success. In particular, be really careful when you want to extract the inner value of type `T` from `Arc<T>`.

[Source][21]

#### pub fn take_any(&mut self, rid: [ResourceId][9]) -> [Result][16]<[Arc][11]<dyn [Resource][8]>>

Removes a resource from the resource table and returns it. Note that the resource’s `close()` method is _not_ called.

Also note that there might be a case where the returned `Arc<T>` is referenced by other variables. That is, we cannot assume that `Arc::strong_count(&returned_arc)` is always equal to 1 on success. In particular, be really careful when you want to extract the inner value of type `T` from `Arc<T>`.

[Source][22]

#### pub fn names(&self) -> impl [Iterator][23]<Item = ([ResourceId][9], [Cow][24]<'_, [str][25]>)>

Returns an iterator that yields a `(id, name)` pair for every resource that’s currently in the resource table. This can be used for debugging purposes. Note that the order in which items appear is not specified.

[Source][26]

#### pub fn close(&mut self, rid: [ResourceId][9]) -> [Result][16]<[()][27]>

Removes the resource with the given `rid` from the resource table. If the only reference to this resource existed in the resource table, this will cause the resource to be dropped. However, since resources are reference counted, therefore pending ops are not automatically cancelled. A resource may implement the `close()` method to perform clean-ups such as canceling ops.

## Trait Implementations§

[Source][28]§

### impl [Default][29] for [ResourceTable][6]

[Source][28]§

#### fn [default][30]() -> [ResourceTable][6]

Returns the “default value” for a type. [Read more][30]

## Auto Trait Implementations§

§

### impl [Freeze][31] for [ResourceTable][6]

§

### impl ![RefUnwindSafe][32] for [ResourceTable][6]

§

### impl [Send][33] for [ResourceTable][6]

§

### impl [Sync][34] for [ResourceTable][6]

§

### impl [Unpin][35] for [ResourceTable][6]

§

### impl ![UnwindSafe][36] for [ResourceTable][6]

## Blanket Implementations§

[Source][37]§

### impl<T> [Any][38] for T

where T: 'static + ?[Sized][39],

[Source][40]§

#### fn [type_id][41](&self) -> [TypeId][42]

Gets the `TypeId` of `self`. [Read more][41]

[Source][43]§

### impl<T> [Borrow][44]<T> for T

where T: ?[Sized][39],

[Source][45]§

#### fn [borrow][46](&self) -> [&T][47]

Immutably borrows from an owned value. [Read more][46]

[Source][48]§

### impl<T> [BorrowMut][49]<T> for T

where T: ?[Sized][39],

[Source][50]§

#### fn [borrow_mut][51](&mut self) -> [&mut T][47]

Mutably borrows from an owned value. [Read more][51]

[Source][52]§

### impl<T> [From][53]<T> for T

[Source][54]§

#### fn [from][55](t: T) -> T

Returns the argument unchanged.

[Source][56]§

### impl<T, U> [Into][57]<U> for T

where U: [From][53]<T>,

[Source][58]§

#### fn [into][59](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][53]<T> for U` chooses to do.

[Source][60]§

### impl<T, U> [TryFrom][61]<U> for T

where U: [Into][57]<T>,

[Source][62]§

#### type [Error][63] = [Infallible][64]

The type returned in the event of a conversion error.

[Source][65]§

#### fn [try_from][66](value: U) -> [Result][67]<T, <T as [TryFrom][61]<U>>::[Error][68]>

Performs the conversion.

[Source][69]§

### impl<T, U> [TryInto][70]<U> for T

where U: [TryFrom][61]<T>,

[Source][71]§

#### type [Error][72] = <U as [TryFrom][61]<T>>::[Error][68]

The type returned in the event of a conversion error.

[Source][73]§

#### fn [try_into][74](self) -> [Result][67]<U, <U as [TryFrom][61]<T>>::[Error][68]>

Performs the conversion.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: ../src/tauri/resources/mod.rs.html#76-78
   [5]: ../src/tauri/resources/mod.rs.html#80-223
   [6]: struct.ResourceTable.html (struct tauri::ResourceTable)
   [7]: ../src/tauri/resources/mod.rs.html#93-95
   [8]: trait.Resource.html (trait tauri::Resource)
   [9]: type.ResourceId.html (type tauri::ResourceId)
   [10]: ../src/tauri/resources/mod.rs.html#103-106
   [11]: https://doc.rust-lang.org/1.94.1/alloc/sync/struct.Arc.html (struct alloc::sync::Arc)
   [12]: ../src/tauri/resources/mod.rs.html#114-123
   [13]: ../src/tauri/resources/mod.rs.html#126-128
   [14]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [15]: ../src/tauri/resources/mod.rs.html#133-140
   [16]: type.Result.html (type tauri::Result)
   [17]: enum.Error.html#variant.BadResourceId (variant tauri::Error::BadResourceId)
   [18]: ../src/tauri/resources/mod.rs.html#144-150
   [19]: ../src/tauri/resources/mod.rs.html#155-160
   [20]: ../src/tauri/resources/mod.rs.html#172-176
   [21]: ../src/tauri/resources/mod.rs.html#186-191
   [22]: ../src/tauri/resources/mod.rs.html#197-202
   [23]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html (trait core::iter::traits::iterator::Iterator)
   [24]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [25]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [26]: ../src/tauri/resources/mod.rs.html#210-216
   [27]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [28]: ../src/tauri/resources/mod.rs.html#75
   [29]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [30]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [31]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [32]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [33]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [34]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [35]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [36]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [37]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [38]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [39]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [40]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [41]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [42]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [44]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [45]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [46]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [47]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [48]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [49]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [50]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [51]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [52]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [53]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [54]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [55]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [56]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [57]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [59]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [60]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [61]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [62]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [63]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [65]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [66]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [67]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [68]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [69]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [71]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [72]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [73]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [74]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

