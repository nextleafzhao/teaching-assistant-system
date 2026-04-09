## ValueRef

## [sqlx][1]0.8.6

## ValueRef

### Required Associated Types

  * Database



### Required Methods

  * is_null
  * to_owned
  * type_info



### Dyn Compatibility

### Implementors

## [In crate sqlx][2]

[sqlx][2]

# Trait ValueRef Copy item path
[code]
    pub trait ValueRef<'r>: [Sized][3] {
        type Database: [Database][4];
    
        // Required methods
        fn to_owned(&self) -> <Self::[Database][5] as [Database][4]>::[Value][6];
        fn type_info(&self) -> [Cow][7]<'_, <Self::[Database][5] as [Database][4]>::[TypeInfo][8]>;
        fn is_null(&self) -> [bool][9];
    }
[/code]

Expand description

A reference to a single value from the database.

## Required Associated Types§

#### type Database: [Database][4]

## Required Methods§

#### fn to_owned(&self) -> <Self::[Database][5] as [Database][4]>::[Value][6]

Creates an owned value from this value reference.

This is just a reference increment in PostgreSQL and MySQL and thus is `O(1)`. In SQLite, this is a copy.

#### fn type_info(&self) -> [Cow][7]<'_, <Self::[Database][5] as [Database][4]>::[TypeInfo][8]>

Get the type information for this value.

#### fn is_null(&self) -> [bool][9]

Returns `true` if the SQL value is `NULL`.

## Dyn Compatibility§

This trait is **not** [dyn compatible][10].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementors§

§

### impl<'a> [ValueRef][11]<'a> for [AnyValueRef][12]<'a>

§

#### type Database = [Any][13]

§

### impl<'r> [ValueRef][11]<'r> for [SqliteValueRef][14]<'r>

§

#### type Database = [Sqlite][15]

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [4]: trait.Database.html (trait sqlx::Database)
   [5]: trait.ValueRef.html#associatedtype.Database (type sqlx::ValueRef::Database)
   [6]: trait.Database.html#associatedtype.Value (type sqlx::Database::Value)
   [7]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [8]: trait.Database.html#associatedtype.TypeInfo (type sqlx::Database::TypeInfo)
   [9]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [10]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [11]: trait.ValueRef.html (trait sqlx::ValueRef)
   [12]: any/struct.AnyValueRef.html (struct sqlx::any::AnyValueRef)
   [13]: struct.Any.html (struct sqlx::Any)
   [14]: sqlite/struct.SqliteValueRef.html (struct sqlx::sqlite::SqliteValueRef)
   [15]: struct.Sqlite.html (struct sqlx::Sqlite)

