## Row

## [sqlx][1]0.8.6

## Row

### Required Associated Types

  * Database



### Required Methods

  * columns
  * try_get_raw



### Provided Methods

  * column
  * get
  * get_unchecked
  * is_empty
  * len
  * try_column
  * try_get
  * try_get_unchecked



### Dyn Compatibility

### Implementors

## [In sqlx::prelude][2]

[sqlx][3]::[prelude][2]

# Trait Row Copy item path
[code]
    pub trait Row:
        [Unpin][4]
        + [Send][5]
        + [Sync][6]
        + 'static {
        type Database: [Database][7]<Row = Self>;
    
        // Required methods
        fn columns(&self) -> &[<Self::[Database][8] as [Database][7]>::[Column][9]];
        fn try_get_raw<I>(
            &self,
            index: I,
        ) -> [Result][10]<<Self::[Database][8] as [Database][7]>::[ValueRef][11]<'_>, [Error][12]>
           where I: [ColumnIndex][13]<Self>;
    
        // Provided methods
        fn is_empty(&self) -> [bool][14] { ... }
        fn len(&self) -> [usize][15] { ... }
        fn column<I>(&self, index: I) -> &<Self::[Database][8] as [Database][7]>::[Column][9]
           where I: [ColumnIndex][13]<Self> { ... }
        fn try_column<I>(
            &self,
            index: I,
        ) -> [Result][10]<&<Self::[Database][8] as [Database][7]>::[Column][9], [Error][12]>
           where I: [ColumnIndex][13]<Self> { ... }
        fn get<'r, T, I>(&'r self, index: I) -> T
           where I: [ColumnIndex][13]<Self>,
                 T: [Decode][16]<'r, Self::[Database][8]> + [Type][17]<Self::[Database][8]> { ... }
        fn get_unchecked<'r, T, I>(&'r self, index: I) -> T
           where I: [ColumnIndex][13]<Self>,
                 T: [Decode][16]<'r, Self::[Database][8]> { ... }
        fn try_get<'r, T, I>(&'r self, index: I) -> [Result][10]<T, [Error][12]>
           where I: [ColumnIndex][13]<Self>,
                 T: [Decode][16]<'r, Self::[Database][8]> + [Type][17]<Self::[Database][8]> { ... }
        fn try_get_unchecked<'r, T, I>(&'r self, index: I) -> [Result][10]<T, [Error][12]>
           where I: [ColumnIndex][13]<Self>,
                 T: [Decode][16]<'r, Self::[Database][8]> { ... }
    }
[/code]

Expand description

Represents a single row from the database.

## Required Associated Types§

#### type Database: [Database][7]<Row = Self>

## Required Methods§

#### fn columns(&self) -> &[<Self::[Database][8] as [Database][7]>::[Column][9]]

Gets all columns in this statement.

#### fn try_get_raw<I>( &self, index: I, ) -> [Result][10]<<Self::[Database][8] as [Database][7]>::[ValueRef][11]<'_>, [Error][12]>

where I: [ColumnIndex][13]<Self>,

Index into the database row and decode a single value.

##### §Errors

  * [`ColumnNotFound`][18] if the column by the given name was not found.
  * [`ColumnIndexOutOfBounds`][19] if the `usize` index was greater than the number of columns in the row.



## Provided Methods§

#### fn is_empty(&self) -> [bool][14]

Returns `true` if this row has no columns.

#### fn len(&self) -> [usize][15]

Returns the number of columns in this row.

#### fn column<I>(&self, index: I) -> &<Self::[Database][8] as [Database][7]>::[Column][9]

where I: [ColumnIndex][13]<Self>,

Gets the column information at `index`.

A string index can be used to access a column by name and a `usize` index can be used to access a column by position.

##### §Panics

Panics if `index` is out of bounds. See [`try_column`][20] for a non-panicking version.

#### fn try_column<I>( &self, index: I, ) -> [Result][10]<&<Self::[Database][8] as [Database][7]>::[Column][9], [Error][12]>

where I: [ColumnIndex][13]<Self>,

Gets the column information at `index` or a `ColumnIndexOutOfBounds` error if out of bounds.

#### fn get<'r, T, I>(&'r self, index: I) -> T

where I: [ColumnIndex][13]<Self>, T: [Decode][16]<'r, Self::[Database][8]> \+ [Type][17]<Self::[Database][8]>,

Index into the database row and decode a single value.

A string index can be used to access a column by name and a `usize` index can be used to access a column by position.

##### §Panics

Panics if the column does not exist or its value cannot be decoded into the requested type. See [`try_get`][21] for a non-panicking version.

#### fn get_unchecked<'r, T, I>(&'r self, index: I) -> T

where I: [ColumnIndex][13]<Self>, T: [Decode][16]<'r, Self::[Database][8]>,

Index into the database row and decode a single value.

Unlike [`get`][22], this method does not check that the type being returned from the database is compatible with the Rust type and blindly tries to decode the value.

##### §Panics

Panics if the column does not exist or its value cannot be decoded into the requested type. See [`try_get_unchecked`][23] for a non-panicking version.

#### fn try_get<'r, T, I>(&'r self, index: I) -> [Result][10]<T, [Error][12]>

where I: [ColumnIndex][13]<Self>, T: [Decode][16]<'r, Self::[Database][8]> \+ [Type][17]<Self::[Database][8]>,

Index into the database row and decode a single value.

A string index can be used to access a column by name and a `usize` index can be used to access a column by position.

##### §Errors

  * [`ColumnNotFound`][18] if the column by the given name was not found.
  * [`ColumnIndexOutOfBounds`][19] if the `usize` index was greater than the number of columns in the row.
  * [`ColumnDecode`][24] if the value could not be decoded into the requested type.



#### fn try_get_unchecked<'r, T, I>(&'r self, index: I) -> [Result][10]<T, [Error][12]>

where I: [ColumnIndex][13]<Self>, T: [Decode][16]<'r, Self::[Database][8]>,

Index into the database row and decode a single value.

Unlike [`try_get`][21], this method does not check that the type being returned from the database is compatible with the Rust type and blindly tries to decode the value.

##### §Errors

  * [`ColumnNotFound`][18] if the column by the given name was not found.
  * [`ColumnIndexOutOfBounds`][19] if the `usize` index was greater than the number of columns in the row.
  * [`ColumnDecode`][24] if the value could not be decoded into the requested type.



## Dyn Compatibility§

This trait is **not** [dyn compatible][25].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementors§

§

### impl [Row][26] for [AnyRow][27]

§

#### type Database = [Any][28]

§

### impl [Row][26] for [SqliteRow][29]

§

#### type Database = [Sqlite][30]

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [5]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [6]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [7]: ../trait.Database.html (trait sqlx::Database)
   [8]: ../trait.Row.html#associatedtype.Database (type sqlx::Row::Database)
   [9]: ../trait.Database.html#associatedtype.Column (type sqlx::Database::Column)
   [10]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [11]: ../trait.Database.html#associatedtype.ValueRef (type sqlx::Database::ValueRef)
   [12]: ../enum.Error.html (enum sqlx::Error)
   [13]: ../trait.ColumnIndex.html (trait sqlx::ColumnIndex)
   [14]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [15]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [16]: ../trait.Decode.html (trait sqlx::Decode)
   [17]: ../trait.Type.html (trait sqlx::Type)
   [18]: ../enum.Error.html#variant.ColumnNotFound (variant sqlx::Error::ColumnNotFound)
   [19]: ../enum.Error.html#variant.ColumnIndexOutOfBounds (variant sqlx::Error::ColumnIndexOutOfBounds)
   [20]: ../trait.Row.html#method.try_column (method sqlx::Row::try_column)
   [21]: ../trait.Row.html#method.try_get (method sqlx::Row::try_get)
   [22]: ../trait.Row.html#method.get (method sqlx::Row::get)
   [23]: ../trait.Row.html#method.try_get_unchecked (method sqlx::Row::try_get_unchecked)
   [24]: ../enum.Error.html#variant.ColumnDecode (variant sqlx::Error::ColumnDecode)
   [25]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [26]: ../trait.Row.html (trait sqlx::Row)
   [27]: ../any/struct.AnyRow.html (struct sqlx::any::AnyRow)
   [28]: ../struct.Any.html (struct sqlx::Any)
   [29]: ../sqlite/struct.SqliteRow.html (struct sqlx::sqlite::SqliteRow)
   [30]: ../struct.Sqlite.html (struct sqlx::Sqlite)

