## Encode

## [sqlx][1]0.8.6

## Encode

### Required Methods

  * encode_by_ref



### Provided Methods

  * encode
  * produces
  * size_hint



### Implementations on Foreign Types

  * &'a str
  * &'q [u8]
  * &'q [u8]
  * &'q str
  * &T
  * Box<[u8]>
  * Box<str>
  * Cow<'q, str>
  * NonZero<i8>
  * NonZero<i16>
  * NonZero<i32>
  * NonZero<i64>
  * NonZero<u8>
  * NonZero<u16>
  * NonZero<u32>
  * NonZero<u64>
  * Option<T>
  * Option<T>
  * String
  * String
  * Vec<u8>
  * Vec<u8>
  * bool
  * bool
  * f32
  * f32
  * f64
  * f64
  * i8
  * i16
  * i16
  * i32
  * i32
  * i64
  * i64
  * u8
  * u16
  * u32



### Implementors

## [In crate sqlx][2]

[sqlx][2]

# Trait Encode Copy item path
[code]
    pub trait Encode<'q, DB>
    
    where
        DB: [Database][3],
    
    {
        // Required method
        fn encode_by_ref(
            &self,
            buf: &mut <DB as [Database][3]>::[ArgumentBuffer][4]<'q>,
        ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] + [Send][9] + [Sync][10]>>;
    
        // Provided methods
        fn encode(
            self,
            buf: &mut <DB as [Database][3]>::[ArgumentBuffer][4]<'q>,
        ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] + [Send][9] + [Sync][10]>>
           where Self: [Sized][11] { ... }
        fn produces(&self) -> [Option][12]<<DB as [Database][3]>::[TypeInfo][13]> { ... }
        fn size_hint(&self) -> [usize][14] { ... }
    }
[/code]

Expand description

Encode a single value to be sent to the database.

## Required Methods§

#### fn encode_by_ref( &self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

Writes the value of `self` into `buf` without moving `self`.

Where possible, make use of `encode` instead as it can take advantage of re-using memory.

## Provided Methods§

#### fn encode( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

where Self: [Sized][11],

Writes the value of `self` into `buf` in the expected format for the database.

#### fn produces(&self) -> [Option][12]<<DB as [Database][3]>::[TypeInfo][13]>

#### fn size_hint(&self) -> [usize][14]

## Implementations on Foreign Types§

§

### impl [Encode][15]<'_, [Sqlite][16]> for [Box][7]<[str][17]>

§

#### fn encode( self, args: &mut [Vec][18]<[SqliteArgumentValue][19]<'_>>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

#### fn encode_by_ref( &self, args: &mut [Vec][18]<[SqliteArgumentValue][19]<'_>>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl [Encode][15]<'_, [Sqlite][16]> for [Box][7]<[[u8][20]]>

§

#### fn encode( self, args: &mut [Vec][18]<[SqliteArgumentValue][19]<'_>>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

#### fn encode_by_ref( &self, args: &mut [Vec][18]<[SqliteArgumentValue][19]<'_>>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'a> [Encode][15]<'a, [Any][21]> for &'a [str][17]

§

#### fn encode( self, buf: &mut <[Any][21] as [Database][3]>::[ArgumentBuffer][4]<'a>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

where &'a [str][17]: [Sized][11],

§

#### fn encode_by_ref( &self, buf: &mut <[Any][21] as [Database][3]>::[ArgumentBuffer][4]<'a>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'q> [Encode][15]<'q, [Any][21]> for &'q [[u8][20]]

§

#### fn encode_by_ref( &self, buf: &mut <[Any][21] as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'q> [Encode][15]<'q, [Any][21]> for [bool][22]

§

#### fn encode_by_ref( &self, buf: &mut <[Any][21] as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'q> [Encode][15]<'q, [Any][21]> for [f32][23]

§

#### fn encode_by_ref( &self, buf: &mut AnyArgumentBuffer<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'q> [Encode][15]<'q, [Any][21]> for [f64][24]

§

#### fn encode_by_ref( &self, buf: &mut <[Any][21] as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'q> [Encode][15]<'q, [Any][21]> for [i16][25]

§

#### fn encode_by_ref( &self, buf: &mut <[Any][21] as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'q> [Encode][15]<'q, [Any][21]> for [i32][26]

§

#### fn encode_by_ref( &self, buf: &mut <[Any][21] as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'q> [Encode][15]<'q, [Any][21]> for [i64][27]

§

#### fn encode_by_ref( &self, buf: &mut <[Any][21] as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'q> [Encode][15]<'q, [Any][21]> for [String][28]

§

#### fn encode_by_ref( &self, buf: &mut <[Any][21] as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'q> [Encode][15]<'q, [Any][21]> for [Vec][18]<[u8][20]>

§

#### fn encode_by_ref( &self, buf: &mut <[Any][21] as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'q> [Encode][15]<'q, [Sqlite][16]> for &'q [str][17]

§

#### fn encode_by_ref( &self, args: &mut [Vec][18]<[SqliteArgumentValue][19]<'q>>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'q> [Encode][15]<'q, [Sqlite][16]> for &'q [[u8][20]]

§

#### fn encode_by_ref( &self, args: &mut [Vec][18]<[SqliteArgumentValue][19]<'q>>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'q> [Encode][15]<'q, [Sqlite][16]> for [Cow][29]<'q, [str][17]>

§

#### fn encode( self, args: &mut [Vec][18]<[SqliteArgumentValue][19]<'q>>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

#### fn encode_by_ref( &self, args: &mut [Vec][18]<[SqliteArgumentValue][19]<'q>>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'q> [Encode][15]<'q, [Sqlite][16]> for [bool][22]

§

#### fn encode_by_ref( &self, args: &mut [Vec][18]<[SqliteArgumentValue][19]<'q>>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'q> [Encode][15]<'q, [Sqlite][16]> for [f32][23]

§

#### fn encode_by_ref( &self, args: &mut [Vec][18]<[SqliteArgumentValue][19]<'q>>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'q> [Encode][15]<'q, [Sqlite][16]> for [f64][24]

§

#### fn encode_by_ref( &self, args: &mut [Vec][18]<[SqliteArgumentValue][19]<'q>>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'q> [Encode][15]<'q, [Sqlite][16]> for [i8][30]

§

#### fn encode_by_ref( &self, args: &mut [Vec][18]<[SqliteArgumentValue][19]<'q>>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'q> [Encode][15]<'q, [Sqlite][16]> for [i16][25]

§

#### fn encode_by_ref( &self, args: &mut [Vec][18]<[SqliteArgumentValue][19]<'q>>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'q> [Encode][15]<'q, [Sqlite][16]> for [i32][26]

§

#### fn encode_by_ref( &self, args: &mut [Vec][18]<[SqliteArgumentValue][19]<'q>>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'q> [Encode][15]<'q, [Sqlite][16]> for [i64][27]

§

#### fn encode_by_ref( &self, args: &mut [Vec][18]<[SqliteArgumentValue][19]<'q>>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'q> [Encode][15]<'q, [Sqlite][16]> for [u8][20]

§

#### fn encode_by_ref( &self, args: &mut [Vec][18]<[SqliteArgumentValue][19]<'q>>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'q> [Encode][15]<'q, [Sqlite][16]> for [u16][31]

§

#### fn encode_by_ref( &self, args: &mut [Vec][18]<[SqliteArgumentValue][19]<'q>>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'q> [Encode][15]<'q, [Sqlite][16]> for [u32][32]

§

#### fn encode_by_ref( &self, args: &mut [Vec][18]<[SqliteArgumentValue][19]<'q>>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'q> [Encode][15]<'q, [Sqlite][16]> for [String][28]

§

#### fn encode( self, args: &mut [Vec][18]<[SqliteArgumentValue][19]<'q>>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

#### fn encode_by_ref( &self, args: &mut [Vec][18]<[SqliteArgumentValue][19]<'q>>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'q> [Encode][15]<'q, [Sqlite][16]> for [Vec][18]<[u8][20]>

§

#### fn encode( self, args: &mut [Vec][18]<[SqliteArgumentValue][19]<'q>>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

#### fn encode_by_ref( &self, args: &mut [Vec][18]<[SqliteArgumentValue][19]<'q>>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'q, DB> [Encode][15]<'q, DB> for [NonZero][33]<[i8][30]>

where DB: [Database][3], [i8][30]: [Encode][15]<'q, DB>,

§

#### fn encode_by_ref( &self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

#### fn encode( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

where [NonZero][33]<[i8][30]>: [Sized][11],

§

#### fn produces(&self) -> [Option][12]<<DB as [Database][3]>::[TypeInfo][13]>

§

### impl<'q, DB> [Encode][15]<'q, DB> for [NonZero][33]<[i16][25]>

where DB: [Database][3], [i16][25]: [Encode][15]<'q, DB>,

§

#### fn encode_by_ref( &self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

#### fn encode( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

where [NonZero][33]<[i16][25]>: [Sized][11],

§

#### fn produces(&self) -> [Option][12]<<DB as [Database][3]>::[TypeInfo][13]>

§

### impl<'q, DB> [Encode][15]<'q, DB> for [NonZero][33]<[i32][26]>

where DB: [Database][3], [i32][26]: [Encode][15]<'q, DB>,

§

#### fn encode_by_ref( &self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

#### fn encode( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

where [NonZero][33]<[i32][26]>: [Sized][11],

§

#### fn produces(&self) -> [Option][12]<<DB as [Database][3]>::[TypeInfo][13]>

§

### impl<'q, DB> [Encode][15]<'q, DB> for [NonZero][33]<[i64][27]>

where DB: [Database][3], [i64][27]: [Encode][15]<'q, DB>,

§

#### fn encode_by_ref( &self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

#### fn encode( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

where [NonZero][33]<[i64][27]>: [Sized][11],

§

#### fn produces(&self) -> [Option][12]<<DB as [Database][3]>::[TypeInfo][13]>

§

### impl<'q, DB> [Encode][15]<'q, DB> for [NonZero][33]<[u8][20]>

where DB: [Database][3], [u8][20]: [Encode][15]<'q, DB>,

§

#### fn encode_by_ref( &self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

#### fn encode( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

where [NonZero][33]<[u8][20]>: [Sized][11],

§

#### fn produces(&self) -> [Option][12]<<DB as [Database][3]>::[TypeInfo][13]>

§

### impl<'q, DB> [Encode][15]<'q, DB> for [NonZero][33]<[u16][31]>

where DB: [Database][3], [u16][31]: [Encode][15]<'q, DB>,

§

#### fn encode_by_ref( &self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

#### fn encode( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

where [NonZero][33]<[u16][31]>: [Sized][11],

§

#### fn produces(&self) -> [Option][12]<<DB as [Database][3]>::[TypeInfo][13]>

§

### impl<'q, DB> [Encode][15]<'q, DB> for [NonZero][33]<[u32][32]>

where DB: [Database][3], [u32][32]: [Encode][15]<'q, DB>,

§

#### fn encode_by_ref( &self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

#### fn encode( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

where [NonZero][33]<[u32][32]>: [Sized][11],

§

#### fn produces(&self) -> [Option][12]<<DB as [Database][3]>::[TypeInfo][13]>

§

### impl<'q, DB> [Encode][15]<'q, DB> for [NonZero][33]<[u64][34]>

where DB: [Database][3], [u64][34]: [Encode][15]<'q, DB>,

§

#### fn encode_by_ref( &self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

#### fn encode( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

where [NonZero][33]<[u64][34]>: [Sized][11],

§

#### fn produces(&self) -> [Option][12]<<DB as [Database][3]>::[TypeInfo][13]>

§

### impl<'q, T> [Encode][15]<'q, [Any][21]> for [Option][12]<T>

where T: [Encode][15]<'q, [Any][21]> \+ 'q + [Type][35]<[Any][21]>,

§

#### fn encode_by_ref( &self, buf: &mut AnyArgumentBuffer<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

### impl<'q, T> [Encode][15]<'q, [Sqlite][16]> for [Option][12]<T>

where T: [Encode][15]<'q, [Sqlite][16]> \+ [Type][35]<[Sqlite][16]> \+ 'q,

§

#### fn produces(&self) -> [Option][12]<<[Sqlite][16] as [Database][3]>::[TypeInfo][13]>

§

#### fn encode( self, buf: &mut <[Sqlite][16] as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

#### fn encode_by_ref( &self, buf: &mut <[Sqlite][16] as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

#### fn size_hint(&self) -> [usize][14]

§

### impl<'q, T, DB> [Encode][15]<'q, DB> for [&T][36]

where DB: [Database][3], T: [Encode][15]<'q, DB>,

§

#### fn encode( self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

#### fn encode_by_ref( &self, buf: &mut <DB as [Database][3]>::[ArgumentBuffer][4]<'q>, ) -> [Result][5]<[IsNull][6], [Box][7]<dyn [Error][8] \+ [Send][9] \+ [Sync][10]>>

§

#### fn produces(&self) -> [Option][12]<<DB as [Database][3]>::[TypeInfo][13]>

§

#### fn size_hint(&self) -> [usize][14]

## Implementors§

§

### impl<'q, DB> [Encode][15]<'q, DB> for [Value][37]

where [Json][38]<&'a [Value][37]>: for<'a> [Encode][15]<'q, DB>, DB: [Database][3],

§

### impl<'q, T> [Encode][15]<'q, [Sqlite][16]> for [Text][39]<T>

where T: [Display][40],

§

### impl<T> [Encode][15]<'_, [Sqlite][16]> for [Json][38]<T>

where T: [Serialize][41],

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: trait.Database.html (trait sqlx::Database)
   [4]: trait.Database.html#associatedtype.ArgumentBuffer (type sqlx::Database::ArgumentBuffer)
   [5]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [6]: encode/enum.IsNull.html (enum sqlx::encode::IsNull)
   [7]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [8]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [9]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [10]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [11]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [12]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [13]: trait.Database.html#associatedtype.TypeInfo (type sqlx::Database::TypeInfo)
   [14]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [15]: trait.Encode.html (trait sqlx::Encode)
   [16]: struct.Sqlite.html (struct sqlx::Sqlite)
   [17]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [18]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [19]: sqlite/enum.SqliteArgumentValue.html (enum sqlx::sqlite::SqliteArgumentValue)
   [20]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [21]: struct.Any.html (struct sqlx::Any)
   [22]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [23]: https://doc.rust-lang.org/1.94.1/std/primitive.f32.html
   [24]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html
   [25]: https://doc.rust-lang.org/1.94.1/std/primitive.i16.html
   [26]: https://doc.rust-lang.org/1.94.1/std/primitive.i32.html
   [27]: https://doc.rust-lang.org/1.94.1/std/primitive.i64.html
   [28]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [29]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [30]: https://doc.rust-lang.org/1.94.1/std/primitive.i8.html
   [31]: https://doc.rust-lang.org/1.94.1/std/primitive.u16.html
   [32]: https://doc.rust-lang.org/1.94.1/std/primitive.u32.html
   [33]: https://doc.rust-lang.org/1.94.1/core/num/nonzero/struct.NonZero.html (struct core::num::nonzero::NonZero)
   [34]: https://doc.rust-lang.org/1.94.1/std/primitive.u64.html
   [35]: trait.Type.html (trait sqlx::Type)
   [36]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [37]: types/enum.JsonValue.html (enum sqlx::types::JsonValue)
   [38]: types/struct.Json.html (struct sqlx::types::Json)
   [39]: types/struct.Text.html (struct sqlx::types::Text)
   [40]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [41]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)

