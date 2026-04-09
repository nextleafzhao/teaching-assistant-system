## DatabaseError

## [sqlx][1]0.8.6

## DatabaseError

### Required Methods

  * kind
  * message



### Provided Methods

  * code
  * constraint
  * is_check_violation
  * is_foreign_key_violation
  * is_unique_violation
  * table



### Methods

  * downcast
  * downcast_ref
  * try_downcast
  * try_downcast_ref



### Trait Implementations

  * Error



### Implementors

## [In sqlx::error][2]

[sqlx][3]::[error][2]

# Trait DatabaseError Copy item path
[code]
    pub trait DatabaseError:
        'static
        + [Send][4]
        + [Sync][5]
        + [Error][6] {
        // Required methods
        fn message(&self) -> &[str][7];
        fn kind(&self) -> [ErrorKind][8];
    
        // Provided methods
        fn code(&self) -> [Option][9]<[Cow][10]<'_, [str][7]>> { ... }
        fn constraint(&self) -> [Option][9]<&[str][7]> { ... }
        fn table(&self) -> [Option][9]<&[str][7]> { ... }
        fn is_unique_violation(&self) -> [bool][11] { ... }
        fn is_foreign_key_violation(&self) -> [bool][11] { ... }
        fn is_check_violation(&self) -> [bool][11] { ... }
    }
[/code]

Expand description

An error that was returned from the database.

## Required Methods§

#### fn message(&self) -> &[str][7]

The primary, human-readable error message.

#### fn kind(&self) -> [ErrorKind][8]

Returns the kind of the error, if supported.

###### §Note

Not all back-ends behave the same when reporting the error code.

## Provided Methods§

#### fn code(&self) -> [Option][9]<[Cow][10]<'_, [str][7]>>

The (SQLSTATE) code for the error.

#### fn constraint(&self) -> [Option][9]<&[str][7]>

Returns the name of the constraint that triggered the error, if applicable. If the error was caused by a conflict of a unique index, this will be the index name.

###### §Note

Currently only populated by the Postgres driver.

#### fn table(&self) -> [Option][9]<&[str][7]>

Returns the name of the table that was affected by the error, if applicable.

###### §Note

Currently only populated by the Postgres driver.

#### fn is_unique_violation(&self) -> [bool][11]

Returns whether the error kind is a violation of a unique/primary key constraint.

#### fn is_foreign_key_violation(&self) -> [bool][11]

Returns whether the error kind is a violation of a foreign key.

#### fn is_check_violation(&self) -> [bool][11]

Returns whether the error kind is a violation of a check.

## Implementations§

§

### impl dyn [DatabaseError][12]

#### pub fn downcast_ref<E>(&self) -> [&E][13]

where E: [DatabaseError][12],

Downcast a reference to this generic database error to a specific database error type.

##### §Panics

Panics if the database error type is not `E`. This is a deliberate contrast from `Error::downcast_ref` which returns `Option<&E>`. In normal usage, you should know the specific error type. In other cases, use `try_downcast_ref`.

#### pub fn downcast<E>(self: [Box][14]<dyn [DatabaseError][12]>) -> [Box][14]<E>

where E: [DatabaseError][12],

Downcast this generic database error to a specific database error type.

##### §Panics

Panics if the database error type is not `E`. This is a deliberate contrast from `Error::downcast` which returns `Option<E>`. In normal usage, you should know the specific error type. In other cases, use `try_downcast`.

#### pub fn try_downcast_ref<E>(&self) -> [Option][9]<[&E][13]>

where E: [DatabaseError][12],

Downcast a reference to this generic database error to a specific database error type.

#### pub fn try_downcast<E>( self: [Box][14]<dyn [DatabaseError][12]>, ) -> [Result][15]<[Box][14]<E>, [Box][14]<dyn [DatabaseError][12]>>

where E: [DatabaseError][12],

Downcast this generic database error to a specific database error type.

## Trait Implementations§

§

### impl [Error][6] for [Box][14]<dyn [DatabaseError][12]>

1.30.0 · [Source][16]§

#### fn [source][17](&self) -> [Option][9]<&(dyn [Error][6] \+ 'static)>

Returns the lower-level source of this error, if any. [Read more][17]

1.0.0 · [Source][18]§

#### fn [description][19](&self) -> &[str][7]

👎Deprecated since 1.42.0: use the Display impl or to_string()

[Read more][19]

1.0.0 · [Source][20]§

#### fn [cause][21](&self) -> [Option][9]<&dyn [Error][6]>

👎Deprecated since 1.33.0: replaced by Error::source, which can support downcasting

[Source][22]§

#### fn [provide][23]<'a>(&'a self, request: &mut [Request][24]<'a>)

🔬This is a nightly-only experimental API. (`error_generic_member_access`)

Provides type-based access to context intended for error reports. [Read more][23]

## Implementors§

§

### impl [DatabaseError][12] for [SqliteError][25]

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [5]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [6]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [7]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [8]: enum.ErrorKind.html (enum sqlx::error::ErrorKind)
   [9]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [10]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [11]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [12]: trait.DatabaseError.html (trait sqlx::error::DatabaseError)
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [14]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [15]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [16]: https://doc.rust-lang.org/1.94.1/src/core/error.rs.html#111
   [17]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.source
   [18]: https://doc.rust-lang.org/1.94.1/src/core/error.rs.html#137
   [19]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.description
   [20]: https://doc.rust-lang.org/1.94.1/src/core/error.rs.html#147
   [21]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.cause
   [22]: https://doc.rust-lang.org/1.94.1/src/core/error.rs.html#260
   [23]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.provide
   [24]: https://doc.rust-lang.org/1.94.1/core/error/struct.Request.html (struct core::error::Request)
   [25]: ../sqlite/struct.SqliteError.html (struct sqlx::sqlite::SqliteError)

