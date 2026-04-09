## Transaction

## [sqlx][1]0.8.6

## Transaction

### Methods

  * commit
  * rollback



### Trait Implementations

  * Acquire<'t>
  * AsMut<<DB as Database>::Connection>
  * Debug
  * Deref
  * DerefMut
  * Drop



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
  * Instrument
  * Into<U>
  * IntoEither
  * Receiver
  * Same
  * TryFrom<U>
  * TryInto<U>
  * WithSubscriber



## [In crate sqlx][2]

[sqlx][2]

# Struct Transaction Copy item path
[code]
    pub struct Transaction<'c, DB>
    
    where
        DB: [Database][3],
    
    { /* private fields */ }
[/code]

Expand description

An in-progress database transaction or savepoint.

A transaction starts with a call to [`Pool::begin`][4] or [`Connection::begin`][5].

A transaction should end with a call to [`commit`][6] or [`rollback`][7]. If neither are called before the transaction goes out-of-scope, [`rollback`][7] is called. In other words, [`rollback`][7] is called on `drop` if the transaction is still in-progress.

A savepoint is a special mark inside a transaction that allows all commands that are executed after it was established to be rolled back, restoring the transaction state to what it was at the time of the savepoint.

A transaction can be used as an [`Executor`][8] when performing queries:
[code] 
    let mut tx = conn.begin().await?;
    
    let result = sqlx::query("DELETE FROM \"testcases\" WHERE id = $1")
        .bind(id)
        .execute(&mut *tx)
        .await?
        .rows_affected();
    
    tx.commit().await
[/code]

## Implementations§

§

### impl<'c, DB> [Transaction][9]<'c, DB>

where DB: [Database][3],

#### pub async fn commit(self) -> [Result][10]<[()][11], [Error][12]>

Commits this transaction or savepoint.

#### pub async fn rollback(self) -> [Result][10]<[()][11], [Error][12]>

Aborts this transaction or savepoint.

## Trait Implementations§

§

### impl<'c, 't, DB> [Acquire][13]<'t> for &'t mut [Transaction][9]<'c, DB>

where DB: [Database][3],

§

#### type [Database][14] = DB

§

#### type [Connection][15] = &'t mut <DB as [Database][3]>::[Connection][16]

§

#### fn [acquire][17]( self, ) -> [Pin][18]<[Box][19]<dyn [Future][20]<Output = [Result][10]<<&'t mut [Transaction][9]<'c, DB> as [Acquire][13]<'t>>::[Connection][21], [Error][12]>> \+ [Send][22] \+ 't>>

§

#### fn [begin][23]( self, ) -> [Pin][18]<[Box][19]<dyn [Future][20]<Output = [Result][10]<[Transaction][9]<'t, DB>, [Error][12]>> \+ [Send][22] \+ 't>>

§

### impl<'c, DB> [AsMut][24]<<DB as [Database][3]>::[Connection][16]> for [Transaction][9]<'c, DB>

where DB: [Database][3],

§

#### fn [as_mut][25](&mut self) -> &mut <DB as [Database][3]>::[Connection][16]

Converts this type into a mutable reference of the (usually inferred) input type.

§

### impl<'c, DB> [Debug][26] for [Transaction][9]<'c, DB>

where DB: [Database][3],

§

#### fn [fmt][27](&self, f: &mut [Formatter][28]<'_>) -> [Result][10]<[()][11], [Error][29]>

Formats the value using the given formatter. [Read more][27]

§

### impl<'c, DB> [Deref][30] for [Transaction][9]<'c, DB>

where DB: [Database][3],

§

#### type [Target][31] = <DB as [Database][3]>::[Connection][16]

The resulting type after dereferencing.

§

#### fn [deref][32](&self) -> &<[Transaction][9]<'c, DB> as [Deref][30]>::[Target][33]

Dereferences the value.

§

### impl<'c, DB> [DerefMut][34] for [Transaction][9]<'c, DB>

where DB: [Database][3],

§

#### fn [deref_mut][35](&mut self) -> &mut <[Transaction][9]<'c, DB> as [Deref][30]>::[Target][33]

Mutably dereferences the value.

§

### impl<'c, DB> [Drop][36] for [Transaction][9]<'c, DB>

where DB: [Database][3],

§

#### fn [drop][37](&mut self)

Executes the destructor for this type. [Read more][37]

## Auto Trait Implementations§

§

### impl<'c, DB> [Freeze][38] for [Transaction][9]<'c, DB>

where <DB as [Database][3]>::[Connection][16]: [Freeze][38],

§

### impl<'c, DB> ![RefUnwindSafe][39] for [Transaction][9]<'c, DB>

§

### impl<'c, DB> [Send][22] for [Transaction][9]<'c, DB>

§

### impl<'c, DB> [Sync][40] for [Transaction][9]<'c, DB>

where <DB as [Database][3]>::[Connection][16]: [Sync][40],

§

### impl<'c, DB> [Unpin][41] for [Transaction][9]<'c, DB>

where <DB as [Database][3]>::[Connection][16]: [Unpin][41],

§

### impl<'c, DB> ![UnwindSafe][42] for [Transaction][9]<'c, DB>

## Blanket Implementations§

[Source][43]§

### impl<T> [Any][44] for T

where T: 'static + ?[Sized][45],

[Source][46]§

#### fn [type_id][47](&self) -> [TypeId][48]

Gets the `TypeId` of `self`. [Read more][47]

[Source][49]§

### impl<T> [Borrow][50]<T> for T

where T: ?[Sized][45],

[Source][51]§

#### fn [borrow][52](&self) -> [&T][53]

Immutably borrows from an owned value. [Read more][52]

[Source][54]§

### impl<T> [BorrowMut][55]<T> for T

where T: ?[Sized][45],

[Source][56]§

#### fn [borrow_mut][57](&mut self) -> [&mut T][53]

Mutably borrows from an owned value. [Read more][57]

[Source][58]§

### impl<T> [From][59]<T> for T

[Source][60]§

#### fn [from][61](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][62] [`Span`][63], returning an `Instrumented` wrapper. Read more

[Source][64]§

### impl<T, U> [Into][65]<U> for T

where U: [From][59]<T>,

[Source][66]§

#### fn [into][67](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][59]<T> for U` chooses to do.

[Source][68]§

### impl<T> [IntoEither][69] for T

[Source][70]§

#### fn [into_either][71](self, into_left: [bool][72]) -> [Either][73]<Self, Self> ⓘ

Converts `self` into a [`Left`][74] variant of [`Either<Self, Self>`][73] if `into_left` is `true`. Converts `self` into a [`Right`][75] variant of [`Either<Self, Self>`][73] otherwise. [Read more][71]

[Source][76]§

#### fn [into_either_with][77]<F>(self, into_left: F) -> [Either][73]<Self, Self> ⓘ

where F: [FnOnce][78](&Self) -> [bool][72],

Converts `self` into a [`Left`][74] variant of [`Either<Self, Self>`][73] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][75] variant of [`Either<Self, Self>`][73] otherwise. [Read more][77]

[Source][79]§

### impl<P, T> [Receiver][80] for P

where P: [Deref][30]<Target = T> \+ ?[Sized][45], T: ?[Sized][45],

[Source][81]§

#### type [Target][82] = T

🔬This is a nightly-only experimental API. (`arbitrary_self_types`)

The target type on which the method may be called.

[Source][83]§

### impl<T> [Same][84] for T

[Source][85]§

#### type [Output][86] = T

Should always be `Self`

[Source][87]§

### impl<T, U> [TryFrom][88]<U> for T

where U: [Into][65]<T>,

[Source][89]§

#### type [Error][90] = [Infallible][91]

The type returned in the event of a conversion error.

[Source][92]§

#### fn [try_from][93](value: U) -> [Result][10]<T, <T as [TryFrom][88]<U>>::[Error][94]>

Performs the conversion.

[Source][95]§

### impl<T, U> [TryInto][96]<U> for T

where U: [TryFrom][88]<T>,

[Source][97]§

#### type [Error][98] = <U as [TryFrom][88]<T>>::[Error][94]

The type returned in the event of a conversion error.

[Source][99]§

#### fn [try_into][100](self) -> [Result][10]<U, <U as [TryFrom][88]<T>>::[Error][94]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][65]<Dispatch>,

Attaches the provided [`Subscriber`][101] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][102] [`Subscriber`][101] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: trait.Database.html (trait sqlx::Database)
   [4]: struct.Pool.html#method.begin (method sqlx::Pool::begin)
   [5]: trait.Connection.html#tymethod.begin (method sqlx::Connection::begin)
   [6]: struct.Transaction.html#method.commit (method sqlx::Transaction::commit)
   [7]: struct.Transaction.html#method.rollback (method sqlx::Transaction::rollback)
   [8]: trait.Executor.html (trait sqlx::Executor)
   [9]: struct.Transaction.html (struct sqlx::Transaction)
   [10]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [11]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [12]: enum.Error.html (enum sqlx::Error)
   [13]: trait.Acquire.html (trait sqlx::Acquire)
   [14]: trait.Acquire.html#associatedtype.Database
   [15]: trait.Acquire.html#associatedtype.Connection
   [16]: trait.Database.html#associatedtype.Connection (type sqlx::Database::Connection)
   [17]: trait.Acquire.html#tymethod.acquire
   [18]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [19]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [20]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [21]: trait.Acquire.html#associatedtype.Connection (type sqlx::Acquire::Connection)
   [22]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [23]: trait.Acquire.html#tymethod.begin
   [24]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsMut.html (trait core::convert::AsMut)
   [25]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsMut.html#tymethod.as_mut
   [26]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [27]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [28]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [29]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [30]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html (trait core::ops::deref::Deref)
   [31]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#associatedtype.Target
   [32]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#tymethod.deref
   [33]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#associatedtype.Target (type core::ops::deref::Deref::Target)
   [34]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.DerefMut.html (trait core::ops::deref::DerefMut)
   [35]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.DerefMut.html#tymethod.deref_mut
   [36]: https://doc.rust-lang.org/1.94.1/core/ops/drop/trait.Drop.html (trait core::ops::drop::Drop)
   [37]: https://doc.rust-lang.org/1.94.1/core/ops/drop/trait.Drop.html#tymethod.drop
   [38]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [39]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [40]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [41]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [42]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [43]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [44]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [45]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [47]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [48]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [49]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [50]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [51]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [52]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [53]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [54]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [55]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [56]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [57]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [58]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [59]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [60]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [61]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [62]: super::Span::current()
   [63]: crate::Span
   [64]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [65]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [66]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [67]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [68]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [69]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [70]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [71]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [72]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [73]: enum.Either.html (enum sqlx::Either)
   [74]: enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [75]: enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [76]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [77]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [78]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [79]: https://doc.rust-lang.org/1.94.1/src/core/ops/deref.rs.html#378-380
   [80]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Receiver.html (trait core::ops::deref::Receiver)
   [81]: https://doc.rust-lang.org/1.94.1/src/core/ops/deref.rs.html#382
   [82]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Receiver.html#associatedtype.Target
   [83]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [84]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [85]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [86]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
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

