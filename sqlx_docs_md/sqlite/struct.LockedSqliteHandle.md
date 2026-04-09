## LockedSqliteHandle

## [sqlx][1]0.8.6

## LockedSqliteHandle

### Methods

  * as_raw_handle
  * create_collation
  * last_error
  * remove_commit_hook
  * remove_progress_handler
  * remove_rollback_hook
  * remove_update_hook
  * set_commit_hook
  * set_progress_handler
  * set_rollback_hook
  * set_update_hook



### Auto Trait Implementations

  * !RefUnwindSafe
  * !Sync
  * !UnwindSafe
  * Freeze
  * Send
  * Unpin



### Blanket Implementations

  * Any
  * Borrow<T>
  * BorrowMut<T>
  * From<T>
  * Instrument
  * Into<U>
  * IntoEither
  * Same
  * TryFrom<U>
  * TryInto<U>
  * WithSubscriber



## [In sqlx::sqlite][2]

[sqlx][3]::[sqlite][2]

# Struct LockedSqliteHandle Copy item path
[code]
    pub struct LockedSqliteHandle<'a> { /* private fields */ }
[/code]

## Implementations§

§

### impl [LockedSqliteHandle][4]<'_>

#### pub fn as_raw_handle(&mut self) -> [NonNull][5]<sqlite3>

Returns the underlying sqlite3* connection handle.

As long as this `LockedSqliteHandle` exists, it is guaranteed that the background thread is not making FFI calls on this database handle or any of its statements.

###### §Note: The `sqlite3` type is semver-exempt.

This API exposes the `sqlite3` type from `libsqlite3-sys` crate for type safety. However, we reserve the right to upgrade `libsqlite3-sys` as necessary.

Thus, if you are making direct calls via `libsqlite3-sys` you should pin the version of SQLx that you’re using, and upgrade it and `libsqlite3-sys` manually as new versions are released.

See [the driver root docs][6] for details.

#### pub fn create_collation( &mut self, name: &[str][7], compare: impl [Fn][8](&[str][7], &[str][7]) -> [Ordering][9] \+ [Send][10] \+ [Sync][11] \+ 'static, ) -> [Result][12]<[()][13], [Error][14]>

Apply a collation to the open database.

See [`SqliteConnectOptions::collation()`][15] for details.

#### pub fn set_progress_handler<F>(&mut self, num_ops: [i32][16], callback: F)

where F: [FnMut][17]() -> [bool][18] \+ [Send][10] \+ 'static,

Sets a progress handler that is invoked periodically during long running calls. If the progress callback returns `false`, then the operation is interrupted.

`num_ops` is the approximate number of [virtual machine instructions][19] that are evaluated between successive invocations of the callback. If `num_ops` is less than one then the progress handler is disabled.

Only a single progress handler may be defined at one time per database connection; setting a new progress handler cancels the old one.

The progress handler callback must not do anything that will modify the database connection that invoked the progress handler. Note that sqlite3_prepare_v2() and sqlite3_step() both modify their database connections in this context.

#### pub fn set_update_hook<F>(&mut self, callback: F)

where F: [FnMut][17]([UpdateHookResult][20]<'_>) + [Send][10] \+ 'static,

#### pub fn set_commit_hook<F>(&mut self, callback: F)

where F: [FnMut][17]() -> [bool][18] \+ [Send][10] \+ 'static,

Sets a commit hook that is invoked whenever a transaction is committed. If the commit hook callback returns `false`, then the operation is turned into a ROLLBACK.

Only a single commit hook may be defined at one time per database connection; setting a new commit hook overrides the old one.

The commit hook callback must not do anything that will modify the database connection that invoked the commit hook. Note that sqlite3_prepare_v2() and sqlite3_step() both modify their database connections in this context.

See https://www.sqlite.org/c3ref/commit_hook.html

#### pub fn set_rollback_hook<F>(&mut self, callback: F)

where F: [FnMut][17]() + [Send][10] \+ 'static,

Sets a rollback hook that is invoked whenever a transaction rollback occurs. The rollback callback is not invoked if a transaction is automatically rolled back because the database connection is closed.

See https://www.sqlite.org/c3ref/commit_hook.html

#### pub fn remove_progress_handler(&mut self)

Removes the progress handler on a database connection. The method does nothing if no handler was set.

#### pub fn remove_update_hook(&mut self)

#### pub fn remove_commit_hook(&mut self)

#### pub fn remove_rollback_hook(&mut self)

#### pub fn last_error(&mut self) -> [Option][21]<[SqliteError][22]>

## Auto Trait Implementations§

§

### impl<'a> [Freeze][23] for [LockedSqliteHandle][4]<'a>

§

### impl<'a> ![RefUnwindSafe][24] for [LockedSqliteHandle][4]<'a>

§

### impl<'a> [Send][10] for [LockedSqliteHandle][4]<'a>

§

### impl<'a> ![Sync][11] for [LockedSqliteHandle][4]<'a>

§

### impl<'a> [Unpin][25] for [LockedSqliteHandle][4]<'a>

§

### impl<'a> ![UnwindSafe][26] for [LockedSqliteHandle][4]<'a>

## Blanket Implementations§

[Source][27]§

### impl<T> [Any][28] for T

where T: 'static + ?[Sized][29],

[Source][30]§

#### fn [type_id][31](&self) -> [TypeId][32]

Gets the `TypeId` of `self`. [Read more][31]

[Source][33]§

### impl<T> [Borrow][34]<T> for T

where T: ?[Sized][29],

[Source][35]§

#### fn [borrow][36](&self) -> [&T][37]

Immutably borrows from an owned value. [Read more][36]

[Source][38]§

### impl<T> [BorrowMut][39]<T> for T

where T: ?[Sized][29],

[Source][40]§

#### fn [borrow_mut][41](&mut self) -> [&mut T][37]

Mutably borrows from an owned value. [Read more][41]

[Source][42]§

### impl<T> [From][43]<T> for T

[Source][44]§

#### fn [from][45](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][46] [`Span`][47], returning an `Instrumented` wrapper. Read more

[Source][48]§

### impl<T, U> [Into][49]<U> for T

where U: [From][43]<T>,

[Source][50]§

#### fn [into][51](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][43]<T> for U` chooses to do.

[Source][52]§

### impl<T> [IntoEither][53] for T

[Source][54]§

#### fn [into_either][55](self, into_left: [bool][18]) -> [Either][56]<Self, Self> ⓘ

Converts `self` into a [`Left`][57] variant of [`Either<Self, Self>`][56] if `into_left` is `true`. Converts `self` into a [`Right`][58] variant of [`Either<Self, Self>`][56] otherwise. [Read more][55]

[Source][59]§

#### fn [into_either_with][60]<F>(self, into_left: F) -> [Either][56]<Self, Self> ⓘ

where F: [FnOnce][61](&Self) -> [bool][18],

Converts `self` into a [`Left`][57] variant of [`Either<Self, Self>`][56] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][58] variant of [`Either<Self, Self>`][56] otherwise. [Read more][60]

[Source][62]§

### impl<T> [Same][63] for T

[Source][64]§

#### type [Output][65] = T

Should always be `Self`

[Source][66]§

### impl<T, U> [TryFrom][67]<U> for T

where U: [Into][49]<T>,

[Source][68]§

#### type [Error][69] = [Infallible][70]

The type returned in the event of a conversion error.

[Source][71]§

#### fn [try_from][72](value: U) -> [Result][12]<T, <T as [TryFrom][67]<U>>::[Error][73]>

Performs the conversion.

[Source][74]§

### impl<T, U> [TryInto][75]<U> for T

where U: [TryFrom][67]<T>,

[Source][76]§

#### type [Error][77] = <U as [TryFrom][67]<T>>::[Error][73]

The type returned in the event of a conversion error.

[Source][78]§

#### fn [try_into][79](self) -> [Result][12]<U, <U as [TryFrom][67]<T>>::[Error][73]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][49]<Dispatch>,

Attaches the provided [`Subscriber`][80] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][81] [`Subscriber`][80] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: struct.LockedSqliteHandle.html (struct sqlx::sqlite::LockedSqliteHandle)
   [5]: https://doc.rust-lang.org/1.94.1/core/ptr/non_null/struct.NonNull.html (struct core::ptr::non_null::NonNull)
   [6]: index.html (mod sqlx::sqlite)
   [7]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [8]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.Fn.html (trait core::ops::function::Fn)
   [9]: https://doc.rust-lang.org/1.94.1/core/cmp/enum.Ordering.html (enum core::cmp::Ordering)
   [10]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [11]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [12]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [14]: ../enum.Error.html (enum sqlx::Error)
   [15]: struct.SqliteConnectOptions.html#method.collation (method sqlx::sqlite::SqliteConnectOptions::collation)
   [16]: https://doc.rust-lang.org/1.94.1/std/primitive.i32.html
   [17]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnMut.html (trait core::ops::function::FnMut)
   [18]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [19]: https://www.sqlite.org/opcode.html
   [20]: struct.UpdateHookResult.html (struct sqlx::sqlite::UpdateHookResult)
   [21]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [22]: struct.SqliteError.html (struct sqlx::sqlite::SqliteError)
   [23]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [24]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [25]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [26]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [27]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [28]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [29]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [30]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [31]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [32]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [33]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [34]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [35]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [36]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [37]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [38]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [39]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [40]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [41]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [42]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [43]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [44]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [45]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [46]: super::Span::current()
   [47]: crate::Span
   [48]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [49]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [50]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [51]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [52]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [53]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [54]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [55]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [56]: ../enum.Either.html (enum sqlx::Either)
   [57]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [58]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [59]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [60]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [61]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [62]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [63]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [64]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [65]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [66]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [67]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [68]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [69]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [71]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [72]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [73]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [74]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [75]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [76]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [77]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [78]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [79]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [80]: super::Subscriber
   [81]: dispatcher#setting-the-default-subscriber

