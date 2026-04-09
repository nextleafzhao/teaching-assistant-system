## Migrator

## [sqlx][1]0.8.6

## Migrator

### Methods

  * iter
  * new
  * run
  * set_ignore_missing
  * set_locking
  * undo
  * version_exists



### Trait Implementations

  * Debug



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
  * Instrument
  * Into<U>
  * IntoEither
  * Same
  * TryFrom<U>
  * TryInto<U>
  * WithSubscriber



## [In sqlx::migrate][2]

[sqlx][3]::[migrate][2]

# Struct Migrator Copy item path
[code]
    pub struct Migrator { /* private fields */ }
[/code]

Expand description

A resolved set of migrations, ready to be run.

Can be constructed statically using `migrate!()` or at runtime using [`Migrator::new()`][4].

## Implementations§

§

### impl [Migrator][5]

#### pub async fn new<'s, S>(source: S) -> [Result][6]<[Migrator][5], [MigrateError][7]>

where S: [MigrationSource][8]<'s>,

Creates a new instance with the given source.

##### §Examples
[code] 
    use std::path::Path;
    
    // Read migrations from a local folder: ./migrations
    let m = Migrator::new(Path::new("./migrations")).await?;
[/code]

See [MigrationSource][8] for details on structure of the `./migrations` directory.

#### pub fn set_ignore_missing(&mut self, ignore_missing: [bool][9]) -> &[Migrator][5]

Specify whether applied migrations that are missing from the resolved migrations should be ignored.

#### pub fn set_locking(&mut self, locking: [bool][9]) -> &[Migrator][5]

Specify whether or not to lock the database during migration. Defaults to `true`.

###### §Warning

Disabling locking can lead to errors or data loss if multiple clients attempt to apply migrations simultaneously without some sort of mutual exclusion.

This should only be used if the database does not support locking, e.g. CockroachDB which talks the Postgres protocol but does not support advisory locks used by SQLx’s migrations support for Postgres.

#### pub fn iter(&self) -> [Iter][10]<'_, [Migration][11]>

Get an iterator over all known migrations.

#### pub fn version_exists(&self, version: [i64][12]) -> [bool][9]

Check if a migration version exists.

#### pub async fn run<'a, A>(&self, migrator: A) -> [Result][6]<[()][13], [MigrateError][7]>

where A: [Acquire][14]<'a>, <<A as [Acquire][14]<'a>>::[Connection][15] as [Deref][16]>::[Target][17]: [Migrate][18],

Run any pending migrations against the database; and, validate previously applied migrations against the current migration source to detect accidental changes in previously-applied migrations.

##### §Examples
[code] 
    use sqlx::migrate::Migrator;
    use sqlx::sqlite::SqlitePoolOptions;
    
    let m = Migrator::new(std::path::Path::new("./migrations")).await?;
    let pool = SqlitePoolOptions::new().connect("sqlite::memory:").await?;
    m.run(&pool).await
[/code]

#### pub async fn undo<'a, A>( &self, migrator: A, target: [i64][12], ) -> [Result][6]<[()][13], [MigrateError][7]>

where A: [Acquire][14]<'a>, <<A as [Acquire][14]<'a>>::[Connection][15] as [Deref][16]>::[Target][17]: [Migrate][18],

Run down migrations against the database until a specific version.

##### §Examples
[code] 
    use sqlx::migrate::Migrator;
    use sqlx::sqlite::SqlitePoolOptions;
    
    let m = Migrator::new(std::path::Path::new("./migrations")).await?;
    let pool = SqlitePoolOptions::new().connect("sqlite::memory:").await?;
    m.undo(&pool, 4).await
[/code]

## Trait Implementations§

§

### impl [Debug][19] for [Migrator][5]

§

#### fn [fmt][20](&self, f: &mut [Formatter][21]<'_>) -> [Result][6]<[()][13], [Error][22]>

Formats the value using the given formatter. [Read more][20]

## Auto Trait Implementations§

§

### impl [Freeze][23] for [Migrator][5]

§

### impl [RefUnwindSafe][24] for [Migrator][5]

§

### impl [Send][25] for [Migrator][5]

§

### impl [Sync][26] for [Migrator][5]

§

### impl [Unpin][27] for [Migrator][5]

§

### impl [UnwindSafe][28] for [Migrator][5]

## Blanket Implementations§

[Source][29]§

### impl<T> [Any][30] for T

where T: 'static + ?[Sized][31],

[Source][32]§

#### fn [type_id][33](&self) -> [TypeId][34]

Gets the `TypeId` of `self`. [Read more][33]

[Source][35]§

### impl<T> [Borrow][36]<T> for T

where T: ?[Sized][31],

[Source][37]§

#### fn [borrow][38](&self) -> [&T][39]

Immutably borrows from an owned value. [Read more][38]

[Source][40]§

### impl<T> [BorrowMut][41]<T> for T

where T: ?[Sized][31],

[Source][42]§

#### fn [borrow_mut][43](&mut self) -> [&mut T][39]

Mutably borrows from an owned value. [Read more][43]

[Source][44]§

### impl<T> [From][45]<T> for T

[Source][46]§

#### fn [from][47](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][48] [`Span`][49], returning an `Instrumented` wrapper. Read more

[Source][50]§

### impl<T, U> [Into][51]<U> for T

where U: [From][45]<T>,

[Source][52]§

#### fn [into][53](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][45]<T> for U` chooses to do.

[Source][54]§

### impl<T> [IntoEither][55] for T

[Source][56]§

#### fn [into_either][57](self, into_left: [bool][9]) -> [Either][58]<Self, Self> ⓘ

Converts `self` into a [`Left`][59] variant of [`Either<Self, Self>`][58] if `into_left` is `true`. Converts `self` into a [`Right`][60] variant of [`Either<Self, Self>`][58] otherwise. [Read more][57]

[Source][61]§

#### fn [into_either_with][62]<F>(self, into_left: F) -> [Either][58]<Self, Self> ⓘ

where F: [FnOnce][63](&Self) -> [bool][9],

Converts `self` into a [`Left`][59] variant of [`Either<Self, Self>`][58] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][60] variant of [`Either<Self, Self>`][58] otherwise. [Read more][62]

[Source][64]§

### impl<T> [Same][65] for T

[Source][66]§

#### type [Output][67] = T

Should always be `Self`

[Source][68]§

### impl<T, U> [TryFrom][69]<U> for T

where U: [Into][51]<T>,

[Source][70]§

#### type [Error][71] = [Infallible][72]

The type returned in the event of a conversion error.

[Source][73]§

#### fn [try_from][74](value: U) -> [Result][6]<T, <T as [TryFrom][69]<U>>::[Error][75]>

Performs the conversion.

[Source][76]§

### impl<T, U> [TryInto][77]<U> for T

where U: [TryFrom][69]<T>,

[Source][78]§

#### type [Error][79] = <U as [TryFrom][69]<T>>::[Error][75]

The type returned in the event of a conversion error.

[Source][80]§

#### fn [try_into][81](self) -> [Result][6]<U, <U as [TryFrom][69]<T>>::[Error][75]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][51]<Dispatch>,

Attaches the provided [`Subscriber`][82] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][83] [`Subscriber`][82] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: struct.Migrator.html#method.new (associated function sqlx::migrate::Migrator::new)
   [5]: struct.Migrator.html (struct sqlx::migrate::Migrator)
   [6]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [7]: enum.MigrateError.html (enum sqlx::migrate::MigrateError)
   [8]: trait.MigrationSource.html (trait sqlx::migrate::MigrationSource)
   [9]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [10]: https://doc.rust-lang.org/1.94.1/core/slice/iter/struct.Iter.html (struct core::slice::iter::Iter)
   [11]: struct.Migration.html (struct sqlx::migrate::Migration)
   [12]: https://doc.rust-lang.org/1.94.1/std/primitive.i64.html
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [14]: ../trait.Acquire.html (trait sqlx::Acquire)
   [15]: ../trait.Acquire.html#associatedtype.Connection (type sqlx::Acquire::Connection)
   [16]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html (trait core::ops::deref::Deref)
   [17]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#associatedtype.Target (type core::ops::deref::Deref::Target)
   [18]: trait.Migrate.html (trait sqlx::migrate::Migrate)
   [19]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [20]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [21]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [22]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [23]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [24]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [25]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [26]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [27]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [28]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [29]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [30]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [31]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [32]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [33]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [34]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [35]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [36]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [37]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [38]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [39]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [40]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [41]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [42]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [43]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [44]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [45]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [47]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [48]: super::Span::current()
   [49]: crate::Span
   [50]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [51]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [53]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [54]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [55]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [56]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [57]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [58]: ../enum.Either.html (enum sqlx::Either)
   [59]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [60]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [61]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [62]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [63]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [64]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [65]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [66]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [67]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [68]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [69]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [70]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [71]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [72]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [73]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [74]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [75]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [76]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [77]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [78]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [79]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [80]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [81]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [82]: super::Subscriber
   [83]: dispatcher#setting-the-default-subscriber

