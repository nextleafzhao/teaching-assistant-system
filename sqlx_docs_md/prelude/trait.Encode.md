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

## [In sqlx::prelude][2]

[sqlx][3]::[prelude][2]

# Trait Encode Copy item path
[code]
    pub trait Encode<'q, DB>
    
    where
        DB: [Database][4],
    
    {
        // Required method
        fn encode_by_ref(
            &self,
            buf: &mut <DB as [Database][4]>::[ArgumentBuffer][5]<'q>,
        ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] + [Send][10] + [Sync][11]>>;
    
        // Provided methods
        fn encode(
            self,
            buf: &mut <DB as [Database][4]>::[ArgumentBuffer][5]<'q>,
        ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] + [Send][10] + [Sync][11]>>
           where Self: [Sized][12] { ... }
        fn produces(&self) -> [Option][13]<<DB as [Database][4]>::[TypeInfo][14]> { ... }
        fn size_hint(&self) -> [usize][15] { ... }
    }
[/code]

Expand description

Encode a single value to be sent to the database.

## Required Methods§

#### fn encode_by_ref( &self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

Writes the value of `self` into `buf` without moving `self`.

Where possible, make use of `encode` instead as it can take advantage of re-using memory.

## Provided Methods§

#### fn encode( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

where Self: [Sized][12],

Writes the value of `self` into `buf` in the expected format for the database.

#### fn produces(&self) -> [Option][13]<<DB as [Database][4]>::[TypeInfo][14]>

#### fn size_hint(&self) -> [usize][15]

## Implementations on Foreign Types§

§

### impl [Encode][16]<'_, [Sqlite][17]> for [Box][8]<[str][18]>

§

#### fn encode( self, args: &mut [Vec][19]<[SqliteArgumentValue][20]<'_>>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

#### fn encode_by_ref( &self, args: &mut [Vec][19]<[SqliteArgumentValue][20]<'_>>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl [Encode][16]<'_, [Sqlite][17]> for [Box][8]<[[u8][21]]>

§

#### fn encode( self, args: &mut [Vec][19]<[SqliteArgumentValue][20]<'_>>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

#### fn encode_by_ref( &self, args: &mut [Vec][19]<[SqliteArgumentValue][20]<'_>>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'a> [Encode][16]<'a, [Any][22]> for &'a [str][18]

§

#### fn encode( self, buf: &mut <[Any][22] as [Database][4]>::[ArgumentBuffer][5]<'a>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

where &'a [str][18]: [Sized][12],

§

#### fn encode_by_ref( &self, buf: &mut <[Any][22] as [Database][4]>::[ArgumentBuffer][5]<'a>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'q> [Encode][16]<'q, [Any][22]> for &'q [[u8][21]]

§

#### fn encode_by_ref( &self, buf: &mut <[Any][22] as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'q> [Encode][16]<'q, [Any][22]> for [bool][23]

§

#### fn encode_by_ref( &self, buf: &mut <[Any][22] as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'q> [Encode][16]<'q, [Any][22]> for [f32][24]

§

#### fn encode_by_ref( &self, buf: &mut AnyArgumentBuffer<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'q> [Encode][16]<'q, [Any][22]> for [f64][25]

§

#### fn encode_by_ref( &self, buf: &mut <[Any][22] as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'q> [Encode][16]<'q, [Any][22]> for [i16][26]

§

#### fn encode_by_ref( &self, buf: &mut <[Any][22] as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'q> [Encode][16]<'q, [Any][22]> for [i32][27]

§

#### fn encode_by_ref( &self, buf: &mut <[Any][22] as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'q> [Encode][16]<'q, [Any][22]> for [i64][28]

§

#### fn encode_by_ref( &self, buf: &mut <[Any][22] as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'q> [Encode][16]<'q, [Any][22]> for [String][29]

§

#### fn encode_by_ref( &self, buf: &mut <[Any][22] as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'q> [Encode][16]<'q, [Any][22]> for [Vec][19]<[u8][21]>

§

#### fn encode_by_ref( &self, buf: &mut <[Any][22] as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'q> [Encode][16]<'q, [Sqlite][17]> for &'q [str][18]

§

#### fn encode_by_ref( &self, args: &mut [Vec][19]<[SqliteArgumentValue][20]<'q>>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'q> [Encode][16]<'q, [Sqlite][17]> for &'q [[u8][21]]

§

#### fn encode_by_ref( &self, args: &mut [Vec][19]<[SqliteArgumentValue][20]<'q>>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'q> [Encode][16]<'q, [Sqlite][17]> for [Cow][30]<'q, [str][18]>

§

#### fn encode( self, args: &mut [Vec][19]<[SqliteArgumentValue][20]<'q>>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

#### fn encode_by_ref( &self, args: &mut [Vec][19]<[SqliteArgumentValue][20]<'q>>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'q> [Encode][16]<'q, [Sqlite][17]> for [bool][23]

§

#### fn encode_by_ref( &self, args: &mut [Vec][19]<[SqliteArgumentValue][20]<'q>>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'q> [Encode][16]<'q, [Sqlite][17]> for [f32][24]

§

#### fn encode_by_ref( &self, args: &mut [Vec][19]<[SqliteArgumentValue][20]<'q>>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'q> [Encode][16]<'q, [Sqlite][17]> for [f64][25]

§

#### fn encode_by_ref( &self, args: &mut [Vec][19]<[SqliteArgumentValue][20]<'q>>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'q> [Encode][16]<'q, [Sqlite][17]> for [i8][31]

§

#### fn encode_by_ref( &self, args: &mut [Vec][19]<[SqliteArgumentValue][20]<'q>>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'q> [Encode][16]<'q, [Sqlite][17]> for [i16][26]

§

#### fn encode_by_ref( &self, args: &mut [Vec][19]<[SqliteArgumentValue][20]<'q>>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'q> [Encode][16]<'q, [Sqlite][17]> for [i32][27]

§

#### fn encode_by_ref( &self, args: &mut [Vec][19]<[SqliteArgumentValue][20]<'q>>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'q> [Encode][16]<'q, [Sqlite][17]> for [i64][28]

§

#### fn encode_by_ref( &self, args: &mut [Vec][19]<[SqliteArgumentValue][20]<'q>>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'q> [Encode][16]<'q, [Sqlite][17]> for [u8][21]

§

#### fn encode_by_ref( &self, args: &mut [Vec][19]<[SqliteArgumentValue][20]<'q>>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'q> [Encode][16]<'q, [Sqlite][17]> for [u16][32]

§

#### fn encode_by_ref( &self, args: &mut [Vec][19]<[SqliteArgumentValue][20]<'q>>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'q> [Encode][16]<'q, [Sqlite][17]> for [u32][33]

§

#### fn encode_by_ref( &self, args: &mut [Vec][19]<[SqliteArgumentValue][20]<'q>>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'q> [Encode][16]<'q, [Sqlite][17]> for [String][29]

§

#### fn encode( self, args: &mut [Vec][19]<[SqliteArgumentValue][20]<'q>>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

#### fn encode_by_ref( &self, args: &mut [Vec][19]<[SqliteArgumentValue][20]<'q>>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'q> [Encode][16]<'q, [Sqlite][17]> for [Vec][19]<[u8][21]>

§

#### fn encode( self, args: &mut [Vec][19]<[SqliteArgumentValue][20]<'q>>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

#### fn encode_by_ref( &self, args: &mut [Vec][19]<[SqliteArgumentValue][20]<'q>>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'q, DB> [Encode][16]<'q, DB> for [NonZero][34]<[i8][31]>

where DB: [Database][4], [i8][31]: [Encode][16]<'q, DB>,

§

#### fn encode_by_ref( &self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

#### fn encode( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

where [NonZero][34]<[i8][31]>: [Sized][12],

§

#### fn produces(&self) -> [Option][13]<<DB as [Database][4]>::[TypeInfo][14]>

§

### impl<'q, DB> [Encode][16]<'q, DB> for [NonZero][34]<[i16][26]>

where DB: [Database][4], [i16][26]: [Encode][16]<'q, DB>,

§

#### fn encode_by_ref( &self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

#### fn encode( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

where [NonZero][34]<[i16][26]>: [Sized][12],

§

#### fn produces(&self) -> [Option][13]<<DB as [Database][4]>::[TypeInfo][14]>

§

### impl<'q, DB> [Encode][16]<'q, DB> for [NonZero][34]<[i32][27]>

where DB: [Database][4], [i32][27]: [Encode][16]<'q, DB>,

§

#### fn encode_by_ref( &self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

#### fn encode( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

where [NonZero][34]<[i32][27]>: [Sized][12],

§

#### fn produces(&self) -> [Option][13]<<DB as [Database][4]>::[TypeInfo][14]>

§

### impl<'q, DB> [Encode][16]<'q, DB> for [NonZero][34]<[i64][28]>

where DB: [Database][4], [i64][28]: [Encode][16]<'q, DB>,

§

#### fn encode_by_ref( &self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

#### fn encode( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

where [NonZero][34]<[i64][28]>: [Sized][12],

§

#### fn produces(&self) -> [Option][13]<<DB as [Database][4]>::[TypeInfo][14]>

§

### impl<'q, DB> [Encode][16]<'q, DB> for [NonZero][34]<[u8][21]>

where DB: [Database][4], [u8][21]: [Encode][16]<'q, DB>,

§

#### fn encode_by_ref( &self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

#### fn encode( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

where [NonZero][34]<[u8][21]>: [Sized][12],

§

#### fn produces(&self) -> [Option][13]<<DB as [Database][4]>::[TypeInfo][14]>

§

### impl<'q, DB> [Encode][16]<'q, DB> for [NonZero][34]<[u16][32]>

where DB: [Database][4], [u16][32]: [Encode][16]<'q, DB>,

§

#### fn encode_by_ref( &self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

#### fn encode( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

where [NonZero][34]<[u16][32]>: [Sized][12],

§

#### fn produces(&self) -> [Option][13]<<DB as [Database][4]>::[TypeInfo][14]>

§

### impl<'q, DB> [Encode][16]<'q, DB> for [NonZero][34]<[u32][33]>

where DB: [Database][4], [u32][33]: [Encode][16]<'q, DB>,

§

#### fn encode_by_ref( &self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

#### fn encode( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

where [NonZero][34]<[u32][33]>: [Sized][12],

§

#### fn produces(&self) -> [Option][13]<<DB as [Database][4]>::[TypeInfo][14]>

§

### impl<'q, DB> [Encode][16]<'q, DB> for [NonZero][34]<[u64][35]>

where DB: [Database][4], [u64][35]: [Encode][16]<'q, DB>,

§

#### fn encode_by_ref( &self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

#### fn encode( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

where [NonZero][34]<[u64][35]>: [Sized][12],

§

#### fn produces(&self) -> [Option][13]<<DB as [Database][4]>::[TypeInfo][14]>

§

### impl<'q, T> [Encode][16]<'q, [Any][22]> for [Option][13]<T>

where T: [Encode][16]<'q, [Any][22]> \+ 'q + [Type][36]<[Any][22]>,

§

#### fn encode_by_ref( &self, buf: &mut AnyArgumentBuffer<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

### impl<'q, T> [Encode][16]<'q, [Sqlite][17]> for [Option][13]<T>

where T: [Encode][16]<'q, [Sqlite][17]> \+ [Type][36]<[Sqlite][17]> \+ 'q,

§

#### fn produces(&self) -> [Option][13]<<[Sqlite][17] as [Database][4]>::[TypeInfo][14]>

§

#### fn encode( self, buf: &mut <[Sqlite][17] as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

#### fn encode_by_ref( &self, buf: &mut <[Sqlite][17] as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

#### fn size_hint(&self) -> [usize][15]

§

### impl<'q, T, DB> [Encode][16]<'q, DB> for [&T][37]

where DB: [Database][4], T: [Encode][16]<'q, DB>,

§

#### fn encode( self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

#### fn encode_by_ref( &self, buf: &mut <DB as [Database][4]>::[ArgumentBuffer][5]<'q>, ) -> [Result][6]<[IsNull][7], [Box][8]<dyn [Error][9] \+ [Send][10] \+ [Sync][11]>>

§

#### fn produces(&self) -> [Option][13]<<DB as [Database][4]>::[TypeInfo][14]>

§

#### fn size_hint(&self) -> [usize][15]

## Implementors§

§

### impl<'q, DB> [Encode][16]<'q, DB> for [Value][38]

where [Json][39]<&'a [Value][38]>: for<'a> [Encode][16]<'q, DB>, DB: [Database][4],

§

### impl<'q, T> [Encode][16]<'q, [Sqlite][17]> for [Text][40]<T>

where T: [Display][41],

§

### impl<T> [Encode][16]<'_, [Sqlite][17]> for [Json][39]<T>

where T: [Serialize][42],

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../trait.Database.html (trait sqlx::Database)
   [5]: ../trait.Database.html#associatedtype.ArgumentBuffer (type sqlx::Database::ArgumentBuffer)
   [6]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [7]: ../encode/enum.IsNull.html (enum sqlx::encode::IsNull)
   [8]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [9]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [10]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [11]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [12]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [13]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [14]: ../trait.Database.html#associatedtype.TypeInfo (type sqlx::Database::TypeInfo)
   [15]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [16]: ../trait.Encode.html (trait sqlx::Encode)
   [17]: ../struct.Sqlite.html (struct sqlx::Sqlite)
   [18]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [19]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [20]: ../sqlite/enum.SqliteArgumentValue.html (enum sqlx::sqlite::SqliteArgumentValue)
   [21]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [22]: ../struct.Any.html (struct sqlx::Any)
   [23]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [24]: https://doc.rust-lang.org/1.94.1/std/primitive.f32.html
   [25]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html
   [26]: https://doc.rust-lang.org/1.94.1/std/primitive.i16.html
   [27]: https://doc.rust-lang.org/1.94.1/std/primitive.i32.html
   [28]: https://doc.rust-lang.org/1.94.1/std/primitive.i64.html
   [29]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [30]: https://doc.rust-lang.org/1.94.1/alloc/borrow/enum.Cow.html (enum alloc::borrow::Cow)
   [31]: https://doc.rust-lang.org/1.94.1/std/primitive.i8.html
   [32]: https://doc.rust-lang.org/1.94.1/std/primitive.u16.html
   [33]: https://doc.rust-lang.org/1.94.1/std/primitive.u32.html
   [34]: https://doc.rust-lang.org/1.94.1/core/num/nonzero/struct.NonZero.html (struct core::num::nonzero::NonZero)
   [35]: https://doc.rust-lang.org/1.94.1/std/primitive.u64.html
   [36]: ../trait.Type.html (trait sqlx::Type)
   [37]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [38]: ../types/enum.JsonValue.html (enum sqlx::types::JsonValue)
   [39]: ../types/struct.Json.html (struct sqlx::types::Json)
   [40]: ../types/struct.Text.html (struct sqlx::types::Text)
   [41]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [42]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)

