## Value

## [sqlx][1]0.8.6

## Value

### Required Associated Types

  * Database



### Required Methods

  * as_ref
  * is_null
  * type_info



### Provided Methods

  * decode
  * decode_unchecked
  * try_decode
  * try_decode_unchecked



### Dyn Compatibility

### Implementors

## [In crate sqlx][2]

[sqlx][2]

# Trait Value Copy item path
[code]
    pub trait Value {
        type Database: [Database][3]<Value = Self>;
    
        // Required methods
        fn as_ref(&self) -> <Self::[Database][4] as [Database][3]>::[ValueRef][5]<'_>;
        fn type_info(&self) -> [Cow][6]<'_, <Self::[Database][4] as [Database][3]>::[TypeInfo][7]>;
        fn is_null(&self) -> [bool][8];
    
        // Provided methods
        fn decode<'r, T>(&'r self) -> T
           where T: [Decode][9]<'r, Self::[Database][4]> + [Type][10]<Self::[Database][4]> { ... }
        fn decode_unchecked<'r, T>(&'r self) -> T
           where T: [Decode][9]<'r, Self::[Database][4]> { ... }
        fn try_decode<'r, T>(&'r self) -> [Result][11]<T, [Error][12]>
           where T: [Decode][9]<'r, Self::[Database][4]> + [Type][10]<Self::[Database][4]> { ... }
        fn try_decode_unchecked<'r, T>(&'r self) -> [Result][11]<T, [Error][12]>
           where T: [Decode][9]<'r, Self::[Database][4]> { ... }
    }
[/code]

Expand description

An owned value from the database.

## Required Associated Types§

#### type Database: [Database][3]<Value = Self>

## Required Methods§

#### fn as_ref(&self) -> <Self::[Database][4] as [Database][3]>::[ValueRef][5]<'_>

Get this value as a reference.

#### fn type_info(&self) -> [Cow][6]<'_, <Self::[Database][4] as [Database][3]>::[TypeInfo][7]>

Get the type information for this value.

#### fn is_null(&self) -> [bool][8]

Returns `true` if the SQL value is `NULL`.

## Provided Methods§

#### fn decode<'r, T>(&'r self) -> T

where T: [Decode][9]<'r, Self::[Database][4]> \+ [Type][10]<Self::[Database][4]>,

Decode this single value into the requested type.

##### §Panics

Panics if the value cannot be decoded into the requested type. See [`try_decode`][13] for a non-panicking version.

#### fn decode_unchecked<'r, T>(&'r self) -> T

where T: [Decode][9]<'r, Self::[Database][4]>,

Decode this single value into the requested type.

Unlike [`decode`][14], this method does not check that the type of this value is compatible with the Rust type and blindly tries to decode the value.

##### §Panics

Panics if the value cannot be decoded into the requested type. See [`try_decode_unchecked`][15] for a non-panicking version.

#### fn try_decode<'r, T>(&'r self) -> [Result][11]<T, [Error][12]>

where T: [Decode][9]<'r, Self::[Database][4]> \+ [Type][10]<Self::[Database][4]>,

Decode this single value into the requested type.

##### §Errors

  * [`Decode`][16] if the value could not be decoded into the requested type.



#### fn try_decode_unchecked<'r, T>(&'r self) -> [Result][11]<T, [Error][12]>

where T: [Decode][9]<'r, Self::[Database][4]>,

Decode this single value into the requested type.

Unlike [`try_decode`][13], this method does not check that the type of this value is compatible with the Rust type and blindly tries to decode the value.

##### §Errors

  * [`Decode`][16] if the value could not be decoded into the requested type.



## Dyn Compatibility§

This trait is **not** [dyn compatible][17].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementors§

§

### impl [Value][18] for [AnyValue][19]

§

#### type Database = [Any][20]

§

### impl [Value][18] for [SqliteValue][21]

§

#### type Database = [Sqlite][22]

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: trait.Database.html (trait sqlx::Database)
   [4]: trait.Value.html#associatedtype.Database (type sqlx::Value::Database)
   [5]: trait.Database.html#associatedtype.ValueRef (type sqlx::Database::ValueRef)
   [6]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [7]: trait.Database.html#associatedtype.TypeInfo (type sqlx::Database::TypeInfo)
   [8]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [9]: trait.Decode.html (trait sqlx::Decode)
   [10]: trait.Type.html (trait sqlx::Type)
   [11]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [12]: enum.Error.html (enum sqlx::Error)
   [13]: trait.Value.html#method.try_decode (method sqlx::Value::try_decode)
   [14]: trait.Value.html#method.decode (method sqlx::Value::decode)
   [15]: trait.Value.html#method.try_decode_unchecked (method sqlx::Value::try_decode_unchecked)
   [16]: enum.Error.html#variant.Decode (variant sqlx::Error::Decode)
   [17]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [18]: trait.Value.html (trait sqlx::Value)
   [19]: any/struct.AnyValue.html (struct sqlx::any::AnyValue)
   [20]: struct.Any.html (struct sqlx::Any)
   [21]: sqlite/struct.SqliteValue.html (struct sqlx::sqlite::SqliteValue)
   [22]: struct.Sqlite.html (struct sqlx::Sqlite)

