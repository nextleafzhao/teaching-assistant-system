## ColumnIndex

## [sqlx][1]0.8.6

## ColumnIndex

### Required Methods

  * index



### Implementations on Foreign Types

  * &'i str
  * &'i str
  * &I
  * &str
  * &str
  * usize
  * usize
  * usize
  * usize



### Implementors

## [In crate sqlx][2]

[sqlx][2]

# Trait ColumnIndex Copy item path
[code]
    pub trait ColumnIndex<T>: [Debug][3]
    
    where
        T: ?[Sized][4],
    
    {
        // Required method
        fn index(&self, container: [&T][5]) -> [Result][6]<[usize][7], [Error][8]>;
    }
[/code]

Expand description

A type that can be used to index into a [`Row`][9] or [`Statement`][10].

The [`get`][11] and [`try_get`][12] methods of [`Row`][9] accept any type that implements `ColumnIndex`. This trait is implemented for strings which are used to look up a column by name, and for `usize` which is used as a positional index into the row.

## Required Methods§

#### fn index(&self, container: [&T][5]) -> [Result][6]<[usize][7], [Error][8]>

Returns a valid positional index into the row or statement, [`ColumnIndexOutOfBounds`][13], or, [`ColumnNotFound`][14].

## Implementations on Foreign Types§

§

### impl [ColumnIndex][15]<[AnyRow][16]> for [usize][7]

§

#### fn index(&self, row: &[AnyRow][16]) -> [Result][6]<[usize][7], [Error][8]>

§

### impl [ColumnIndex][15]<[AnyStatement][17]<'_>> for [usize][7]

§

#### fn index(&self, statement: &[AnyStatement][17]<'_>) -> [Result][6]<[usize][7], [Error][8]>

§

### impl [ColumnIndex][15]<[SqliteRow][18]> for &[str][19]

§

#### fn index(&self, row: &[SqliteRow][18]) -> [Result][6]<[usize][7], [Error][8]>

§

### impl [ColumnIndex][15]<[SqliteRow][18]> for [usize][7]

§

#### fn index(&self, row: &[SqliteRow][18]) -> [Result][6]<[usize][7], [Error][8]>

§

### impl [ColumnIndex][15]<[SqliteStatement][20]<'_>> for &[str][19]

§

#### fn index(&self, statement: &[SqliteStatement][20]<'_>) -> [Result][6]<[usize][7], [Error][8]>

§

### impl [ColumnIndex][15]<[SqliteStatement][20]<'_>> for [usize][7]

§

#### fn index(&self, statement: &[SqliteStatement][20]<'_>) -> [Result][6]<[usize][7], [Error][8]>

§

### impl<'i> [ColumnIndex][15]<[AnyRow][16]> for &'i [str][19]

§

#### fn index(&self, row: &[AnyRow][16]) -> [Result][6]<[usize][7], [Error][8]>

§

### impl<'i> [ColumnIndex][15]<[AnyStatement][17]<'_>> for &'i [str][19]

§

#### fn index(&self, statement: &[AnyStatement][17]<'_>) -> [Result][6]<[usize][7], [Error][8]>

§

### impl<T, I> [ColumnIndex][15]<T> for [&I][5]

where I: [ColumnIndex][15]<T> \+ ?[Sized][4], T: ?[Sized][4],

§

#### fn index(&self, row: [&T][5]) -> [Result][6]<[usize][7], [Error][8]>

## Implementors§

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [4]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [5]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [6]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [7]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [8]: enum.Error.html (enum sqlx::Error)
   [9]: trait.Row.html (trait sqlx::Row)
   [10]: trait.Statement.html (trait sqlx::Statement)
   [11]: trait.Row.html#method.get (method sqlx::Row::get)
   [12]: trait.Row.html#method.try_get (method sqlx::Row::try_get)
   [13]: enum.Error.html#variant.ColumnIndexOutOfBounds (variant sqlx::Error::ColumnIndexOutOfBounds)
   [14]: enum.Error.html#variant.ColumnNotFound (variant sqlx::Error::ColumnNotFound)
   [15]: trait.ColumnIndex.html (trait sqlx::ColumnIndex)
   [16]: any/struct.AnyRow.html (struct sqlx::any::AnyRow)
   [17]: any/struct.AnyStatement.html (struct sqlx::any::AnyStatement)
   [18]: sqlite/struct.SqliteRow.html (struct sqlx::sqlite::SqliteRow)
   [19]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [20]: sqlite/struct.SqliteStatement.html (struct sqlx::sqlite::SqliteStatement)

