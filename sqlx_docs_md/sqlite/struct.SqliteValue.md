## SqliteValue

## [sqlx][1]0.8.6

## SqliteValue

### Trait Implementations

  * Clone
  * Value



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
  * Instrument
  * Into<U>
  * IntoEither
  * Same
  * ToOwned
  * TryFrom<U>
  * TryInto<U>
  * WithSubscriber



## [In sqlx::sqlite][2]

[sqlx][3]::[sqlite][2]

# Struct SqliteValue Copy item path
[code]
    pub struct SqliteValue(/* private fields */);
[/code]

## Trait Implementations§

§

### impl [Clone][4] for [SqliteValue][5]

§

#### fn [clone][6](&self) -> [SqliteValue][5]

Returns a duplicate of the value. [Read more][6]

1.0.0 · [Source][7]§

#### fn [clone_from][8](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][8]

§

### impl [Value][9] for [SqliteValue][5]

§

#### type [Database][10] = [Sqlite][11]

§

#### fn [as_ref][12](&self) -> [SqliteValueRef][13]<'_>

Get this value as a reference.

§

#### fn [type_info][14](&self) -> [Cow][15]<'_, [SqliteTypeInfo][16]>

Get the type information for this value.

§

#### fn [is_null][17](&self) -> [bool][18]

Returns `true` if the SQL value is `NULL`.

§

#### fn [decode][19]<'r, T>(&'r self) -> T

where T: [Decode][20]<'r, Self::[Database][21]> \+ [Type][22]<Self::[Database][21]>,

Decode this single value into the requested type. [Read more][19]

§

#### fn [decode_unchecked][23]<'r, T>(&'r self) -> T

where T: [Decode][20]<'r, Self::[Database][21]>,

Decode this single value into the requested type. [Read more][23]

§

#### fn [try_decode][24]<'r, T>(&'r self) -> [Result][25]<T, [Error][26]>

where T: [Decode][20]<'r, Self::[Database][21]> \+ [Type][22]<Self::[Database][21]>,

Decode this single value into the requested type. [Read more][24]

§

#### fn [try_decode_unchecked][27]<'r, T>(&'r self) -> [Result][25]<T, [Error][26]>

where T: [Decode][20]<'r, Self::[Database][21]>,

Decode this single value into the requested type. [Read more][27]

## Auto Trait Implementations§

§

### impl [Freeze][28] for [SqliteValue][5]

§

### impl [RefUnwindSafe][29] for [SqliteValue][5]

§

### impl [Send][30] for [SqliteValue][5]

§

### impl [Sync][31] for [SqliteValue][5]

§

### impl [Unpin][32] for [SqliteValue][5]

§

### impl [UnwindSafe][33] for [SqliteValue][5]

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

### impl<T> [CloneToUninit][50] for T

where T: [Clone][4],

[Source][51]§

#### unsafe fn [clone_to_uninit][52](&self, dest: [*mut ][53][u8][54])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][52]

[Source][55]§

### impl<T> [From][56]<T> for T

[Source][57]§

#### fn [from][58](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][59] [`Span`][60], returning an `Instrumented` wrapper. Read more

[Source][61]§

### impl<T, U> [Into][62]<U> for T

where U: [From][56]<T>,

[Source][63]§

#### fn [into][64](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][56]<T> for U` chooses to do.

[Source][65]§

### impl<T> [IntoEither][66] for T

[Source][67]§

#### fn [into_either][68](self, into_left: [bool][18]) -> [Either][69]<Self, Self> ⓘ

Converts `self` into a [`Left`][70] variant of [`Either<Self, Self>`][69] if `into_left` is `true`. Converts `self` into a [`Right`][71] variant of [`Either<Self, Self>`][69] otherwise. [Read more][68]

[Source][72]§

#### fn [into_either_with][73]<F>(self, into_left: F) -> [Either][69]<Self, Self> ⓘ

where F: [FnOnce][74](&Self) -> [bool][18],

Converts `self` into a [`Left`][70] variant of [`Either<Self, Self>`][69] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][71] variant of [`Either<Self, Self>`][69] otherwise. [Read more][73]

[Source][75]§

### impl<T> [Same][76] for T

[Source][77]§

#### type [Output][78] = T

Should always be `Self`

[Source][79]§

### impl<T> [ToOwned][80] for T

where T: [Clone][4],

[Source][81]§

#### type [Owned][82] = T

The resulting type after obtaining ownership.

[Source][83]§

#### fn [to_owned][84](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][84]

[Source][85]§

#### fn [clone_into][86](&self, target: [&mut T][44])

Uses borrowed data to replace owned data, usually by cloning. [Read more][86]

[Source][87]§

### impl<T, U> [TryFrom][88]<U> for T

where U: [Into][62]<T>,

[Source][89]§

#### type [Error][90] = [Infallible][91]

The type returned in the event of a conversion error.

[Source][92]§

#### fn [try_from][93](value: U) -> [Result][25]<T, <T as [TryFrom][88]<U>>::[Error][94]>

Performs the conversion.

[Source][95]§

### impl<T, U> [TryInto][96]<U> for T

where U: [TryFrom][88]<T>,

[Source][97]§

#### type [Error][98] = <U as [TryFrom][88]<T>>::[Error][94]

The type returned in the event of a conversion error.

[Source][99]§

#### fn [try_into][100](self) -> [Result][25]<U, <U as [TryFrom][88]<T>>::[Error][94]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][62]<Dispatch>,

Attaches the provided [`Subscriber`][101] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][102] [`Subscriber`][101] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [5]: struct.SqliteValue.html (struct sqlx::sqlite::SqliteValue)
   [6]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [7]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [8]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [9]: ../trait.Value.html (trait sqlx::Value)
   [10]: ../trait.Value.html#associatedtype.Database
   [11]: ../struct.Sqlite.html (struct sqlx::Sqlite)
   [12]: ../trait.Value.html#tymethod.as_ref
   [13]: struct.SqliteValueRef.html (struct sqlx::sqlite::SqliteValueRef)
   [14]: ../trait.Value.html#tymethod.type_info
   [15]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [16]: struct.SqliteTypeInfo.html (struct sqlx::sqlite::SqliteTypeInfo)
   [17]: ../trait.Value.html#tymethod.is_null
   [18]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [19]: ../trait.Value.html#method.decode
   [20]: ../trait.Decode.html (trait sqlx::Decode)
   [21]: ../trait.Value.html#associatedtype.Database (type sqlx::Value::Database)
   [22]: ../trait.Type.html (trait sqlx::Type)
   [23]: ../trait.Value.html#method.decode_unchecked
   [24]: ../trait.Value.html#method.try_decode
   [25]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [26]: ../enum.Error.html (enum sqlx::Error)
   [27]: ../trait.Value.html#method.try_decode_unchecked
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
   [49]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [50]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [51]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [52]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [53]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [54]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [55]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [56]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [57]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [58]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [59]: super::Span::current()
   [60]: crate::Span
   [61]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [62]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [63]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [65]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [66]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [67]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [68]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [69]: ../enum.Either.html (enum sqlx::Either)
   [70]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [71]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [72]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [73]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [74]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [75]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [76]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [77]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [78]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [79]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [80]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [81]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [82]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [83]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [84]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [85]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [86]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [87]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [88]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [89]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [90]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [91]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [92]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [93]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [94]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [95]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [96]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [97]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [98]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [99]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [100]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [101]: super::Subscriber
   [102]: dispatcher#setting-the-default-subscriber

