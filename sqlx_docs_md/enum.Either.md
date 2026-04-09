## Either

## [sqlx][1]0.8.6

## Either

### Variants

  * Left
  * Right



### Methods

  * as_mut
  * as_pin_mut
  * as_pin_ref
  * as_ref
  * cloned
  * cloned
  * copied
  * copied
  * either
  * either_into
  * either_with
  * expect_left
  * expect_right
  * factor_err
  * factor_first
  * factor_into_iter
  * factor_iter
  * factor_iter_mut
  * factor_none
  * factor_ok
  * factor_second
  * flip
  * into_inner
  * into_iter
  * is_left
  * is_right
  * iter
  * iter_mut
  * left
  * left_and_then
  * left_or
  * left_or_default
  * left_or_else
  * map
  * map_either
  * map_either_with
  * map_left
  * map_right
  * right
  * right_and_then
  * right_or
  * right_or_default
  * right_or_else
  * unwrap_left
  * unwrap_right



### Trait Implementations

  * AsMut<CStr>
  * AsMut<OsStr>
  * AsMut<Path>
  * AsMut<Target>
  * AsMut<[Target]>
  * AsMut<str>
  * AsRef<CStr>
  * AsRef<OsStr>
  * AsRef<Path>
  * AsRef<Target>
  * AsRef<[Target]>
  * AsRef<str>
  * BufRead
  * Clone
  * Copy
  * Debug
  * Deref
  * DerefMut
  * Deserialize<'de>
  * Display
  * DoubleEndedIterator
  * Eq
  * Error
  * ExactSizeIterator
  * Extend<A>
  * From<Either<L, R>>
  * From<Result<R, L>>
  * FusedIterator
  * Future
  * Hash
  * Iterator
  * Ord
  * PartialEq
  * PartialOrd
  * Read
  * Seek
  * Serialize
  * StructuralPartialEq
  * Write
  * Write



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
  * CloneToUninit
  * Comparable<K>
  * DeserializeOwned
  * Equivalent<K>
  * Equivalent<K>
  * From<T>
  * FutureExt
  * Instrument
  * Into<U>
  * IntoEither
  * IntoFuture
  * IntoIterator
  * Receiver
  * Same
  * ToOwned
  * ToString
  * TryFrom<U>
  * TryFuture
  * TryFutureExt
  * TryInto<U>
  * WithSubscriber



## [In crate sqlx][2]

[sqlx][2]

# Enum Either Copy item path

[Source][3]
[code] 
    pub enum Either<L, R> {
        Left(L),
        Right(R),
    }
[/code]

Expand description

The enum `Either` with variants `Left` and `Right` is a general purpose sum type with two cases.

The `Either` type is symmetric and treats its variants the same way, without preference. (For representing success or error, use the regular `Result` enum instead.)

## Variants§

§

### Left(L)

A value of type `L`.

§

### Right(R)

A value of type `R`.

## Implementations§

[Source][4]§

### impl<L, R> [Either][5]<L, R>

[Source][6]

#### pub fn is_left(&self) -> [bool][7]

Return true if the value is the `Left` variant.
[code] 
    use either::*;
    
    let values = [Left(1), Right("the right value")];
    assert_eq!(values[0].is_left(), true);
    assert_eq!(values[1].is_left(), false);
[/code]

[Source][8]

#### pub fn is_right(&self) -> [bool][7]

Return true if the value is the `Right` variant.
[code] 
    use either::*;
    
    let values = [Left(1), Right("the right value")];
    assert_eq!(values[0].is_right(), false);
    assert_eq!(values[1].is_right(), true);
[/code]

[Source][9]

#### pub fn left(self) -> [Option][10]<L>

Convert the left side of `Either<L, R>` to an `Option<L>`.
[code] 
    use either::*;
    
    let left: Either<_, ()> = Left("some value");
    assert_eq!(left.left(),  Some("some value"));
    
    let right: Either<(), _> = Right(321);
    assert_eq!(right.left(), None);
[/code]

[Source][11]

#### pub fn right(self) -> [Option][10]<R>

Convert the right side of `Either<L, R>` to an `Option<R>`.
[code] 
    use either::*;
    
    let left: Either<_, ()> = Left("some value");
    assert_eq!(left.right(),  None);
    
    let right: Either<(), _> = Right(321);
    assert_eq!(right.right(), Some(321));
[/code]

[Source][12]

#### pub fn as_ref(&self) -> [Either][5]<[&L][13], [&R][13]> ⓘ

Convert `&Either<L, R>` to `Either<&L, &R>`.
[code] 
    use either::*;
    
    let left: Either<_, ()> = Left("some value");
    assert_eq!(left.as_ref(), Left(&"some value"));
    
    let right: Either<(), _> = Right("some value");
    assert_eq!(right.as_ref(), Right(&"some value"));
[/code]

[Source][14]

#### pub fn as_mut(&mut self) -> [Either][5]<[&mut L][13], [&mut R][13]> ⓘ

Convert `&mut Either<L, R>` to `Either<&mut L, &mut R>`.
[code] 
    use either::*;
    
    fn mutate_left(value: &mut Either<u32, u32>) {
        if let Some(l) = value.as_mut().left() {
            *l = 999;
        }
    }
    
    let mut left = Left(123);
    let mut right = Right(123);
    mutate_left(&mut left);
    mutate_left(&mut right);
    assert_eq!(left, Left(999));
    assert_eq!(right, Right(123));
[/code]

[Source][15]

#### pub fn as_pin_ref(self: [Pin][16]<&[Either][5]<L, R>>) -> [Either][5]<[Pin][16]<[&L][13]>, [Pin][16]<[&R][13]>> ⓘ

Convert `Pin<&Either<L, R>>` to `Either<Pin<&L>, Pin<&R>>`, pinned projections of the inner variants.

[Source][17]

#### pub fn as_pin_mut( self: [Pin][16]<&mut [Either][5]<L, R>>, ) -> [Either][5]<[Pin][16]<[&mut L][13]>, [Pin][16]<[&mut R][13]>> ⓘ

Convert `Pin<&mut Either<L, R>>` to `Either<Pin<&mut L>, Pin<&mut R>>`, pinned projections of the inner variants.

[Source][18]

#### pub fn flip(self) -> [Either][5]<R, L> ⓘ

Convert `Either<L, R>` to `Either<R, L>`.
[code] 
    use either::*;
    
    let left: Either<_, ()> = Left(123);
    assert_eq!(left.flip(), Right(123));
    
    let right: Either<(), _> = Right("some value");
    assert_eq!(right.flip(), Left("some value"));
[/code]

[Source][19]

#### pub fn map_left<F, M>(self, f: F) -> [Either][5]<M, R> ⓘ

where F: [FnOnce][20](L) -> M,

Apply the function `f` on the value in the `Left` variant if it is present rewrapping the result in `Left`.
[code] 
    use either::*;
    
    let left: Either<_, u32> = Left(123);
    assert_eq!(left.map_left(|x| x * 2), Left(246));
    
    let right: Either<u32, _> = Right(123);
    assert_eq!(right.map_left(|x| x * 2), Right(123));
[/code]

[Source][21]

#### pub fn map_right<F, S>(self, f: F) -> [Either][5]<L, S> ⓘ

where F: [FnOnce][20](R) -> S,

Apply the function `f` on the value in the `Right` variant if it is present rewrapping the result in `Right`.
[code] 
    use either::*;
    
    let left: Either<_, u32> = Left(123);
    assert_eq!(left.map_right(|x| x * 2), Left(123));
    
    let right: Either<u32, _> = Right(123);
    assert_eq!(right.map_right(|x| x * 2), Right(246));
[/code]

[Source][22]

#### pub fn map_either<F, G, M, S>(self, f: F, g: G) -> [Either][5]<M, S> ⓘ

where F: [FnOnce][20](L) -> M, G: [FnOnce][20](R) -> S,

Apply the functions `f` and `g` to the `Left` and `Right` variants respectively. This is equivalent to [bimap][23] in functional programming.
[code] 
    use either::*;
    
    let f = |s: String| s.len();
    let g = |u: u8| u.to_string();
    
    let left: Either<String, u8> = Left("loopy".into());
    assert_eq!(left.map_either(f, g), Left(5));
    
    let right: Either<String, u8> = Right(42);
    assert_eq!(right.map_either(f, g), Right("42".into()));
[/code]

[Source][24]

#### pub fn map_either_with<Ctx, F, G, M, S>( self, ctx: Ctx, f: F, g: G, ) -> [Either][5]<M, S> ⓘ

where F: [FnOnce][20](Ctx, L) -> M, G: [FnOnce][20](Ctx, R) -> S,

Similar to [`map_either`][25], with an added context `ctx` accessible to both functions.
[code] 
    use either::*;
    
    let mut sum = 0;
    
    // Both closures want to update the same value, so pass it as context.
    let mut f = |sum: &mut usize, s: String| { *sum += s.len(); s.to_uppercase() };
    let mut g = |sum: &mut usize, u: usize| { *sum += u; u.to_string() };
    
    let left: Either<String, usize> = Left("loopy".into());
    assert_eq!(left.map_either_with(&mut sum, &mut f, &mut g), Left("LOOPY".into()));
    
    let right: Either<String, usize> = Right(42);
    assert_eq!(right.map_either_with(&mut sum, &mut f, &mut g), Right("42".into()));
    
    assert_eq!(sum, 47);
[/code]

[Source][26]

#### pub fn either<F, G, T>(self, f: F, g: G) -> T

where F: [FnOnce][20](L) -> T, G: [FnOnce][20](R) -> T,

Apply one of two functions depending on contents, unifying their result. If the value is `Left(L)` then the first function `f` is applied; if it is `Right(R)` then the second function `g` is applied.
[code] 
    use either::*;
    
    fn square(n: u32) -> i32 { (n * n) as i32 }
    fn negate(n: i32) -> i32 { -n }
    
    let left: Either<u32, i32> = Left(4);
    assert_eq!(left.either(square, negate), 16);
    
    let right: Either<u32, i32> = Right(-4);
    assert_eq!(right.either(square, negate), 4);
[/code]

[Source][27]

#### pub fn either_with<Ctx, F, G, T>(self, ctx: Ctx, f: F, g: G) -> T

where F: [FnOnce][20](Ctx, L) -> T, G: [FnOnce][20](Ctx, R) -> T,

Like [`either`][28], but provide some context to whichever of the functions ends up being called.
[code] 
    // In this example, the context is a mutable reference
    use either::*;
    
    let mut result = Vec::new();
    
    let values = vec![Left(2), Right(2.7)];
    
    for value in values {
        value.either_with(&mut result,
                          |ctx, integer| ctx.push(integer),
                          |ctx, real| ctx.push(f64::round(real) as i32));
    }
    
    assert_eq!(result, vec![2, 3]);
[/code]

[Source][29]

#### pub fn left_and_then<F, S>(self, f: F) -> [Either][5]<S, R> ⓘ

where F: [FnOnce][20](L) -> [Either][5]<S, R>,

Apply the function `f` on the value in the `Left` variant if it is present.
[code] 
    use either::*;
    
    let left: Either<_, u32> = Left(123);
    assert_eq!(left.left_and_then::<_,()>(|x| Right(x * 2)), Right(246));
    
    let right: Either<u32, _> = Right(123);
    assert_eq!(right.left_and_then(|x| Right::<(), _>(x * 2)), Right(123));
[/code]

[Source][30]

#### pub fn right_and_then<F, S>(self, f: F) -> [Either][5]<L, S> ⓘ

where F: [FnOnce][20](R) -> [Either][5]<L, S>,

Apply the function `f` on the value in the `Right` variant if it is present.
[code] 
    use either::*;
    
    let left: Either<_, u32> = Left(123);
    assert_eq!(left.right_and_then(|x| Right(x * 2)), Left(123));
    
    let right: Either<u32, _> = Right(123);
    assert_eq!(right.right_and_then(|x| Right(x * 2)), Right(246));
[/code]

[Source][31]

#### pub fn into_iter( self, ) -> [Either][5]<<L as [IntoIterator][32]>::[IntoIter][33], <R as [IntoIterator][32]>::[IntoIter][33]> ⓘ

where L: [IntoIterator][32], R: [IntoIterator][32]<Item = <L as [IntoIterator][32]>::[Item][34]>,

Convert the inner value to an iterator.

This requires the `Left` and `Right` iterators to have the same item type. See [`factor_into_iter`][35] to iterate different types.
[code] 
    use either::*;
    
    let left: Either<_, Vec<u32>> = Left(vec![1, 2, 3, 4, 5]);
    let mut right: Either<Vec<u32>, _> = Right(vec![]);
    right.extend(left.into_iter());
    assert_eq!(right, Right(vec![1, 2, 3, 4, 5]));
[/code]

[Source][36]

#### pub fn iter( &self, ) -> [Either][5]<<[&L][13] as [IntoIterator][32]>::[IntoIter][33], <[&R][13] as [IntoIterator][32]>::[IntoIter][33]> ⓘ

where [&'a L][13]: for<'a> [IntoIterator][32], [&'a R][13]: for<'a> [IntoIterator][32]<Item = <[&'a L][13] as [IntoIterator][32]>::[Item][34]>,

Borrow the inner value as an iterator.

This requires the `Left` and `Right` iterators to have the same item type. See [`factor_iter`][37] to iterate different types.
[code] 
    use either::*;
    
    let left: Either<_, &[u32]> = Left(vec![2, 3]);
    let mut right: Either<Vec<u32>, _> = Right(&[4, 5][..]);
    let mut all = vec![1];
    all.extend(left.iter());
    all.extend(right.iter());
    assert_eq!(all, vec![1, 2, 3, 4, 5]);
[/code]

[Source][38]

#### pub fn iter_mut( &mut self, ) -> [Either][5]<<[&mut L][13] as [IntoIterator][32]>::[IntoIter][33], <[&mut R][13] as [IntoIterator][32]>::[IntoIter][33]> ⓘ

where [&'a mut L][13]: for<'a> [IntoIterator][32], [&'a mut R][13]: for<'a> [IntoIterator][32]<Item = <[&'a mut L][13] as [IntoIterator][32]>::[Item][34]>,

Mutably borrow the inner value as an iterator.

This requires the `Left` and `Right` iterators to have the same item type. See [`factor_iter_mut`][39] to iterate different types.
[code] 
    use either::*;
    
    let mut left: Either<_, &mut [u32]> = Left(vec![2, 3]);
    for l in left.iter_mut() {
        *l *= *l
    }
    assert_eq!(left, Left(vec![4, 9]));
    
    let mut inner = [4, 5];
    let mut right: Either<Vec<u32>, _> = Right(&mut inner[..]);
    for r in right.iter_mut() {
        *r *= *r
    }
    assert_eq!(inner, [16, 25]);
[/code]

[Source][40]

#### pub fn factor_into_iter( self, ) -> [IterEither][41]<<L as [IntoIterator][32]>::[IntoIter][33], <R as [IntoIterator][32]>::[IntoIter][33]>

where L: [IntoIterator][32], R: [IntoIterator][32],

Converts an `Either` of `Iterator`s to be an `Iterator` of `Either`s

Unlike [`into_iter`][42], this does not require the `Left` and `Right` iterators to have the same item type.
[code] 
    use either::*;
    let left: Either<_, Vec<u8>> = Left(&["hello"]);
    assert_eq!(left.factor_into_iter().next(), Some(Left(&"hello")));
    
    let right: Either<&[&str], _> = Right(vec![0, 1]);
    assert_eq!(right.factor_into_iter().collect::<Vec<_>>(), vec![Right(0), Right(1)]);
    
[/code]

[Source][43]

#### pub fn factor_iter( &self, ) -> [IterEither][41]<<[&L][13] as [IntoIterator][32]>::[IntoIter][33], <[&R][13] as [IntoIterator][32]>::[IntoIter][33]>

where [&'a L][13]: for<'a> [IntoIterator][32], [&'a R][13]: for<'a> [IntoIterator][32],

Borrows an `Either` of `Iterator`s to be an `Iterator` of `Either`s

Unlike [`iter`][44], this does not require the `Left` and `Right` iterators to have the same item type.
[code] 
    use either::*;
    let left: Either<_, Vec<u8>> = Left(["hello"]);
    assert_eq!(left.factor_iter().next(), Some(Left(&"hello")));
    
    let right: Either<[&str; 2], _> = Right(vec![0, 1]);
    assert_eq!(right.factor_iter().collect::<Vec<_>>(), vec![Right(&0), Right(&1)]);
    
[/code]

[Source][45]

#### pub fn factor_iter_mut( &mut self, ) -> [IterEither][41]<<[&mut L][13] as [IntoIterator][32]>::[IntoIter][33], <[&mut R][13] as [IntoIterator][32]>::[IntoIter][33]>

where [&'a mut L][13]: for<'a> [IntoIterator][32], [&'a mut R][13]: for<'a> [IntoIterator][32],

Mutably borrows an `Either` of `Iterator`s to be an `Iterator` of `Either`s

Unlike [`iter_mut`][46], this does not require the `Left` and `Right` iterators to have the same item type.
[code] 
    use either::*;
    let mut left: Either<_, Vec<u8>> = Left(["hello"]);
    left.factor_iter_mut().for_each(|x| *x.unwrap_left() = "goodbye");
    assert_eq!(left, Left(["goodbye"]));
    
    let mut right: Either<[&str; 2], _> = Right(vec![0, 1, 2]);
    right.factor_iter_mut().for_each(|x| if let Right(r) = x { *r = -*r; });
    assert_eq!(right, Right(vec![0, -1, -2]));
    
[/code]

[Source][47]

#### pub fn left_or(self, other: L) -> L

Return left value or given value

Arguments passed to `left_or` are eagerly evaluated; if you are passing the result of a function call, it is recommended to use [`left_or_else`][48], which is lazily evaluated.

##### §Examples
[code] 
    let left: Either<&str, &str> = Left("left");
    assert_eq!(left.left_or("foo"), "left");
    
    let right: Either<&str, &str> = Right("right");
    assert_eq!(right.left_or("left"), "left");
[/code]

[Source][49]

#### pub fn left_or_default(self) -> L

where L: [Default][50],

Return left or a default

##### §Examples
[code] 
    let left: Either<String, u32> = Left("left".to_string());
    assert_eq!(left.left_or_default(), "left");
    
    let right: Either<String, u32> = Right(42);
    assert_eq!(right.left_or_default(), String::default());
[/code]

[Source][51]

#### pub fn left_or_else<F>(self, f: F) -> L

where F: [FnOnce][20](R) -> L,

Returns left value or computes it from a closure

##### §Examples
[code] 
    let left: Either<String, u32> = Left("3".to_string());
    assert_eq!(left.left_or_else(|_| unreachable!()), "3");
    
    let right: Either<String, u32> = Right(3);
    assert_eq!(right.left_or_else(|x| x.to_string()), "3");
[/code]

[Source][52]

#### pub fn right_or(self, other: R) -> R

Return right value or given value

Arguments passed to `right_or` are eagerly evaluated; if you are passing the result of a function call, it is recommended to use [`right_or_else`][53], which is lazily evaluated.

##### §Examples
[code] 
    let right: Either<&str, &str> = Right("right");
    assert_eq!(right.right_or("foo"), "right");
    
    let left: Either<&str, &str> = Left("left");
    assert_eq!(left.right_or("right"), "right");
[/code]

[Source][54]

#### pub fn right_or_default(self) -> R

where R: [Default][50],

Return right or a default

##### §Examples
[code] 
    let left: Either<String, u32> = Left("left".to_string());
    assert_eq!(left.right_or_default(), u32::default());
    
    let right: Either<String, u32> = Right(42);
    assert_eq!(right.right_or_default(), 42);
[/code]

[Source][55]

#### pub fn right_or_else<F>(self, f: F) -> R

where F: [FnOnce][20](L) -> R,

Returns right value or computes it from a closure

##### §Examples
[code] 
    let left: Either<String, u32> = Left("3".to_string());
    assert_eq!(left.right_or_else(|x| x.parse().unwrap()), 3);
    
    let right: Either<String, u32> = Right(3);
    assert_eq!(right.right_or_else(|_| unreachable!()), 3);
[/code]

[Source][56]

#### pub fn unwrap_left(self) -> L

where R: [Debug][57],

Returns the left value

##### §Examples
[code] 
    let left: Either<_, ()> = Left(3);
    assert_eq!(left.unwrap_left(), 3);
[/code]

##### §Panics

When `Either` is a `Right` value

ⓘ
[code]
    let right: Either<(), _> = Right(3);
    right.unwrap_left();
[/code]

[Source][58]

#### pub fn unwrap_right(self) -> R

where L: [Debug][57],

Returns the right value

##### §Examples
[code] 
    let right: Either<(), _> = Right(3);
    assert_eq!(right.unwrap_right(), 3);
[/code]

##### §Panics

When `Either` is a `Left` value

ⓘ
[code]
    let left: Either<_, ()> = Left(3);
    left.unwrap_right();
[/code]

[Source][59]

#### pub fn expect_left(self, msg: &[str][60]) -> L

where R: [Debug][57],

Returns the left value

##### §Examples
[code] 
    let left: Either<_, ()> = Left(3);
    assert_eq!(left.expect_left("value was Right"), 3);
[/code]

##### §Panics

When `Either` is a `Right` value

ⓘ
[code]
    let right: Either<(), _> = Right(3);
    right.expect_left("value was Right");
[/code]

[Source][61]

#### pub fn expect_right(self, msg: &[str][60]) -> R

where L: [Debug][57],

Returns the right value

##### §Examples
[code] 
    let right: Either<(), _> = Right(3);
    assert_eq!(right.expect_right("value was Left"), 3);
[/code]

##### §Panics

When `Either` is a `Left` value

ⓘ
[code]
    let left: Either<_, ()> = Left(3);
    left.expect_right("value was Right");
[/code]

[Source][62]

#### pub fn either_into<T>(self) -> T

where L: [Into][63]<T>, R: [Into][63]<T>,

Convert the contained value into `T`

##### §Examples
[code] 
    // Both u16 and u32 can be converted to u64.
    let left: Either<u16, u32> = Left(3u16);
    assert_eq!(left.either_into::<u64>(), 3u64);
    let right: Either<u16, u32> = Right(7u32);
    assert_eq!(right.either_into::<u64>(), 7u64);
[/code]

[Source][64]§

### impl<L, R> [Either][5]<[Option][10]<L>, [Option][10]<R>>

[Source][65]

#### pub fn factor_none(self) -> [Option][10]<[Either][5]<L, R>>

Factors out `None` from an `Either` of [`Option`][10].
[code] 
    use either::*;
    let left: Either<_, Option<String>> = Left(Some(vec![0]));
    assert_eq!(left.factor_none(), Some(Left(vec![0])));
    
    let right: Either<Option<Vec<u8>>, _> = Right(Some(String::new()));
    assert_eq!(right.factor_none(), Some(Right(String::new())));
[/code]

[Source][66]§

### impl<L, R, E> [Either][5]<[Result][67]<L, E>, [Result][67]<R, E>>

[Source][68]

#### pub fn factor_err(self) -> [Result][67]<[Either][5]<L, R>, E>

Factors out a homogenous type from an `Either` of [`Result`][67].

Here, the homogeneous type is the `Err` type of the [`Result`][67].
[code] 
    use either::*;
    let left: Either<_, Result<String, u32>> = Left(Ok(vec![0]));
    assert_eq!(left.factor_err(), Ok(Left(vec![0])));
    
    let right: Either<Result<Vec<u8>, u32>, _> = Right(Ok(String::new()));
    assert_eq!(right.factor_err(), Ok(Right(String::new())));
[/code]

[Source][69]§

### impl<T, L, R> [Either][5]<[Result][67]<T, L>, [Result][67]<T, R>>

[Source][70]

#### pub fn factor_ok(self) -> [Result][67]<T, [Either][5]<L, R>>

Factors out a homogenous type from an `Either` of [`Result`][67].

Here, the homogeneous type is the `Ok` type of the [`Result`][67].
[code] 
    use either::*;
    let left: Either<_, Result<u32, String>> = Left(Err(vec![0]));
    assert_eq!(left.factor_ok(), Err(Left(vec![0])));
    
    let right: Either<Result<u32, Vec<u8>>, _> = Right(Err(String::new()));
    assert_eq!(right.factor_ok(), Err(Right(String::new())));
[/code]

[Source][71]§

### impl<T, L, R> [Either][5]<[(T, L)][72], [(T, R)][72]>

[Source][73]

#### pub fn factor_first(self) -> (T, [Either][5]<L, R>)

Factor out a homogeneous type from an either of pairs.

Here, the homogeneous type is the first element of the pairs.
[code] 
    use either::*;
    let left: Either<_, (u32, String)> = Left((123, vec![0]));
    assert_eq!(left.factor_first().0, 123);
    
    let right: Either<(u32, Vec<u8>), _> = Right((123, String::new()));
    assert_eq!(right.factor_first().0, 123);
[/code]

[Source][74]§

### impl<T, L, R> [Either][5]<[(L, T)][72], [(R, T)][72]>

[Source][75]

#### pub fn factor_second(self) -> ([Either][5]<L, R>, T)

Factor out a homogeneous type from an either of pairs.

Here, the homogeneous type is the second element of the pairs.
[code] 
    use either::*;
    let left: Either<_, (String, u32)> = Left((vec![0], 123));
    assert_eq!(left.factor_second().1, 123);
    
    let right: Either<(Vec<u8>, u32), _> = Right((String::new(), 123));
    assert_eq!(right.factor_second().1, 123);
[/code]

[Source][76]§

### impl<T> [Either][5]<T, T>

[Source][77]

#### pub fn into_inner(self) -> T

Extract the value of an either over two equivalent types.
[code] 
    use either::*;
    
    let left: Either<_, u32> = Left(123);
    assert_eq!(left.into_inner(), 123);
    
    let right: Either<u32, _> = Right(123);
    assert_eq!(right.into_inner(), 123);
[/code]

[Source][78]

#### pub fn map<F, M>(self, f: F) -> [Either][5]<M, M> ⓘ

where F: [FnOnce][20](T) -> M,

Map `f` over the contained value and return the result in the corresponding variant.
[code] 
    use either::*;
    
    let value: Either<_, i32> = Right(42);
    
    let other = value.map(|x| x * 2);
    assert_eq!(other, Right(84));
[/code]

[Source][79]§

### impl<L, R> [Either][5]<[&L][13], [&R][13]>

[Source][80]

#### pub fn cloned(self) -> [Either][5]<L, R> ⓘ

where L: [Clone][81], R: [Clone][81],

Maps an `Either<&L, &R>` to an `Either<L, R>` by cloning the contents of either branch.

[Source][82]

#### pub fn copied(self) -> [Either][5]<L, R> ⓘ

where L: [Copy][83], R: [Copy][83],

Maps an `Either<&L, &R>` to an `Either<L, R>` by copying the contents of either branch.

[Source][84]§

### impl<L, R> [Either][5]<[&mut L][13], [&mut R][13]>

[Source][85]

#### pub fn cloned(self) -> [Either][5]<L, R> ⓘ

where L: [Clone][81], R: [Clone][81],

Maps an `Either<&mut L, &mut R>` to an `Either<L, R>` by cloning the contents of either branch.

[Source][86]

#### pub fn copied(self) -> [Either][5]<L, R> ⓘ

where L: [Copy][83], R: [Copy][83],

Maps an `Either<&mut L, &mut R>` to an `Either<L, R>` by copying the contents of either branch.

## Trait Implementations§

[Source][87]§

### impl<L, R, Target> [AsMut][88]<[[Target]][89]> for [Either][5]<L, R>

where L: [AsMut][88]<[[Target]][89]>, R: [AsMut][88]<[[Target]][89]>,

[Source][90]§

#### fn [as_mut][91](&mut self) -> &mut [[Target]][89]

Converts this type into a mutable reference of the (usually inferred) input type.

[Source][92]§

### impl<L, R> [AsMut][88]<[CStr][93]> for [Either][5]<L, R>

where L: [AsMut][88]<[CStr][93]>, R: [AsMut][88]<[CStr][93]>,

Available on **crate feature`std`** only.

Requires crate feature `std`.

[Source][92]§

#### fn [as_mut][91](&mut self) -> &mut [CStr][93]

Converts this type into a mutable reference of the (usually inferred) input type.

[Source][94]§

### impl<L, R> [AsMut][88]<[OsStr][95]> for [Either][5]<L, R>

where L: [AsMut][88]<[OsStr][95]>, R: [AsMut][88]<[OsStr][95]>,

Available on **crate feature`std`** only.

Requires crate feature `std`.

[Source][94]§

#### fn [as_mut][91](&mut self) -> &mut [OsStr][95]

Converts this type into a mutable reference of the (usually inferred) input type.

[Source][96]§

### impl<L, R> [AsMut][88]<[Path][97]> for [Either][5]<L, R>

where L: [AsMut][88]<[Path][97]>, R: [AsMut][88]<[Path][97]>,

Available on **crate feature`std`** only.

Requires crate feature `std`.

[Source][96]§

#### fn [as_mut][91](&mut self) -> &mut [Path][97]

Converts this type into a mutable reference of the (usually inferred) input type.

[Source][98]§

### impl<L, R, Target> [AsMut][88]<Target> for [Either][5]<L, R>

where L: [AsMut][88]<Target>, R: [AsMut][88]<Target>,

[Source][99]§

#### fn [as_mut][91](&mut self) -> [&mut Target][13]

Converts this type into a mutable reference of the (usually inferred) input type.

[Source][100]§

### impl<L, R> [AsMut][88]<[str][60]> for [Either][5]<L, R>

where L: [AsMut][88]<[str][60]>, R: [AsMut][88]<[str][60]>,

[Source][100]§

#### fn [as_mut][91](&mut self) -> &mut [str][60]

Converts this type into a mutable reference of the (usually inferred) input type.

[Source][101]§

### impl<L, R, Target> [AsRef][102]<[[Target]][89]> for [Either][5]<L, R>

where L: [AsRef][102]<[[Target]][89]>, R: [AsRef][102]<[[Target]][89]>,

[Source][103]§

#### fn [as_ref][104](&self) -> &[[Target]][89]

Converts this type into a shared reference of the (usually inferred) input type.

[Source][92]§

### impl<L, R> [AsRef][102]<[CStr][93]> for [Either][5]<L, R>

where L: [AsRef][102]<[CStr][93]>, R: [AsRef][102]<[CStr][93]>,

Available on **crate feature`std`** only.

Requires crate feature `std`.

[Source][92]§

#### fn [as_ref][104](&self) -> &[CStr][93]

Converts this type into a shared reference of the (usually inferred) input type.

[Source][94]§

### impl<L, R> [AsRef][102]<[OsStr][95]> for [Either][5]<L, R>

where L: [AsRef][102]<[OsStr][95]>, R: [AsRef][102]<[OsStr][95]>,

Available on **crate feature`std`** only.

Requires crate feature `std`.

[Source][94]§

#### fn [as_ref][104](&self) -> &[OsStr][95]

Converts this type into a shared reference of the (usually inferred) input type.

[Source][96]§

### impl<L, R> [AsRef][102]<[Path][97]> for [Either][5]<L, R>

where L: [AsRef][102]<[Path][97]>, R: [AsRef][102]<[Path][97]>,

Available on **crate feature`std`** only.

Requires crate feature `std`.

[Source][96]§

#### fn [as_ref][104](&self) -> &[Path][97]

Converts this type into a shared reference of the (usually inferred) input type.

[Source][105]§

### impl<L, R, Target> [AsRef][102]<Target> for [Either][5]<L, R>

where L: [AsRef][102]<Target>, R: [AsRef][102]<Target>,

[Source][106]§

#### fn [as_ref][104](&self) -> [&Target][13]

Converts this type into a shared reference of the (usually inferred) input type.

[Source][100]§

### impl<L, R> [AsRef][102]<[str][60]> for [Either][5]<L, R>

where L: [AsRef][102]<[str][60]>, R: [AsRef][102]<[str][60]>,

[Source][100]§

#### fn [as_ref][104](&self) -> &[str][60]

Converts this type into a shared reference of the (usually inferred) input type.

[Source][107]§

### impl<L, R> [BufRead][108] for [Either][5]<L, R>

where L: [BufRead][108], R: [BufRead][108],

Available on **crate features`std`** only.

Requires crate feature `"std"`

[Source][109]§

#### fn [fill_buf][110](&mut self) -> [Result][67]<&[[u8][111]], [Error][112]>

Returns the contents of the internal buffer, filling it with more data, via `Read` methods, if empty. [Read more][110]

[Source][113]§

#### fn [consume][114](&mut self, amt: [usize][115])

Marks the given `amount` of additional bytes from the internal buffer as having been read. Subsequent calls to `read` only return bytes that have not been marked as read. [Read more][114]

[Source][116]§

#### fn [read_until][117](&mut self, byte: [u8][111], buf: &mut [Vec][118]<[u8][111]>) -> [Result][67]<[usize][115], [Error][112]>

Reads all bytes into `buf` until the delimiter `byte` or EOF is reached. [Read more][117]

[Source][119]§

#### fn [read_line][120](&mut self, buf: &mut [String][121]) -> [Result][67]<[usize][115], [Error][112]>

Reads all bytes until a newline (the `0xA` byte) is reached, and append them to the provided `String` buffer. [Read more][120]

[Source][122]§

#### fn [has_data_left][123](&mut self) -> [Result][67]<[bool][7], [Error][112]>

🔬This is a nightly-only experimental API. (`buf_read_has_data_left`)

Checks if there is any data left to be `read`. [Read more][123]

1.83.0 · [Source][124]§

#### fn [skip_until][125](&mut self, byte: [u8][111]) -> [Result][67]<[usize][115], [Error][112]>

Skips all bytes until the delimiter `byte` or EOF is reached. [Read more][125]

1.0.0 · [Source][126]§

#### fn [split][127](self, byte: [u8][111]) -> [Split][128]<Self>

where Self: [Sized][129],

Returns an iterator over the contents of this reader split on the byte `byte`. [Read more][127]

1.0.0 · [Source][130]§

#### fn [lines][131](self) -> [Lines][132]<Self>

where Self: [Sized][129],

Returns an iterator over the lines of this reader. [Read more][131]

[Source][133]§

### impl<L, R> [Clone][81] for [Either][5]<L, R>

where L: [Clone][81], R: [Clone][81],

[Source][134]§

#### fn [clone][135](&self) -> [Either][5]<L, R> ⓘ

Returns a duplicate of the value. [Read more][135]

[Source][136]§

#### fn [clone_from][137](&mut self, source: &[Either][5]<L, R>)

Performs copy-assignment from `source`. [Read more][137]

[Source][138]§

### impl<L, R> [Debug][57] for [Either][5]<L, R>

where L: [Debug][57], R: [Debug][57],

[Source][138]§

#### fn [fmt][139](&self, f: &mut [Formatter][140]<'_>) -> [Result][67]<[()][141], [Error][142]>

Formats the value using the given formatter. [Read more][139]

[Source][143]§

### impl<L, R> [Deref][144] for [Either][5]<L, R>

where L: [Deref][144], R: [Deref][144]<Target = <L as [Deref][144]>::[Target][145]>,

[Source][146]§

#### type [Target][147] = <L as [Deref][144]>::[Target][145]

The resulting type after dereferencing.

[Source][148]§

#### fn [deref][149](&self) -> &<[Either][5]<L, R> as [Deref][144]>::[Target][145] ⓘ

Dereferences the value.

[Source][150]§

### impl<L, R> [DerefMut][151] for [Either][5]<L, R>

where L: [DerefMut][151], R: [DerefMut][151]<Target = <L as [Deref][144]>::[Target][145]>,

[Source][152]§

#### fn [deref_mut][153](&mut self) -> &mut <[Either][5]<L, R> as [Deref][144]>::[Target][145] ⓘ

Mutably dereferences the value.

[Source][154]§

### impl<'de, L, R> [Deserialize][155]<'de> for [Either][5]<L, R>

where L: [Deserialize][155]<'de>, R: [Deserialize][155]<'de>,

[Source][154]§

#### fn [deserialize][156]<__D>( __deserializer: __D, ) -> [Result][67]<[Either][5]<L, R>, <__D as [Deserializer][157]<'de>>::[Error][158]>

where __D: [Deserializer][157]<'de>,

Deserialize this value from the given Serde deserializer. [Read more][156]

[Source][159]§

### impl<L, R> [Display][160] for [Either][5]<L, R>

where L: [Display][160], R: [Display][160],

[Source][161]§

#### fn [fmt][162](&self, f: &mut [Formatter][140]<'_>) -> [Result][67]<[()][141], [Error][142]>

Formats the value using the given formatter. [Read more][162]

[Source][163]§

### impl<L, R> [DoubleEndedIterator][164] for [Either][5]<L, R>

where L: [DoubleEndedIterator][164], R: [DoubleEndedIterator][164]<Item = <L as [Iterator][165]>::[Item][166]>,

[Source][167]§

#### fn [next_back][168](&mut self) -> [Option][10]<<[Either][5]<L, R> as [Iterator][165]>::[Item][166]>

Removes and returns an element from the end of the iterator. [Read more][168]

[Source][169]§

#### fn [nth_back][170](&mut self, n: [usize][115]) -> [Option][10]<<[Either][5]<L, R> as [Iterator][165]>::[Item][166]>

Returns the `n`th element from the end of the iterator. [Read more][170]

[Source][171]§

#### fn [rfold][172]<Acc, G>(self, init: Acc, f: G) -> Acc

where G: [FnMut][173](Acc, <[Either][5]<L, R> as [Iterator][165]>::[Item][166]) -> Acc,

An iterator method that reduces the iterator’s elements to a single, final value, starting from the back. [Read more][172]

[Source][174]§

#### fn [rfind][175]<P>(&mut self, predicate: P) -> [Option][10]<<[Either][5]<L, R> as [Iterator][165]>::[Item][166]>

where P: [FnMut][173](&<[Either][5]<L, R> as [Iterator][165]>::[Item][166]) -> [bool][7],

Searches for an element of an iterator from the back that satisfies a predicate. [Read more][175]

[Source][176]§

#### fn [advance_back_by][177](&mut self, n: [usize][115]) -> [Result][67]<[()][141], [NonZero][178]<[usize][115]>>

🔬This is a nightly-only experimental API. (`iter_advance_by`)

Advances the iterator from the back by `n` elements. [Read more][177]

1.27.0 · [Source][179]§

#### fn [try_rfold][180]<B, F, R>(&mut self, init: B, f: F) -> R

where Self: [Sized][129], F: [FnMut][173](B, Self::[Item][166]) -> R, R: [Try][181]<Output = B>,

This is the reverse version of [`Iterator::try_fold()`][182]: it takes elements starting from the back of the iterator. [Read more][180]

[Source][183]§

### impl<L, R> [Error][184] for [Either][5]<L, R>

where L: [Error][184], R: [Error][184],

Available on **crate features`std`** only.

`Either` implements `Error` if _both_ `L` and `R` implement it.

Requires crate feature `"std"`

[Source][185]§

#### fn [source][186](&self) -> [Option][10]<&(dyn [Error][184] \+ 'static)>

Returns the lower-level source of this error, if any. [Read more][186]

[Source][187]§

#### fn [description][188](&self) -> &[str][60]

👎Deprecated since 1.42.0: use the Display impl or to_string()

[Read more][188]

[Source][189]§

#### fn [cause][190](&self) -> [Option][10]<&dyn [Error][184]>

👎Deprecated since 1.33.0: replaced by Error::source, which can support downcasting

[Source][191]§

#### fn [provide][192]<'a>(&'a self, request: &mut [Request][193]<'a>)

🔬This is a nightly-only experimental API. (`error_generic_member_access`)

Provides type-based access to context intended for error reports. [Read more][192]

[Source][194]§

### impl<L, R> [ExactSizeIterator][195] for [Either][5]<L, R>

where L: [ExactSizeIterator][195], R: [ExactSizeIterator][195]<Item = <L as [Iterator][165]>::[Item][166]>,

[Source][196]§

#### fn [len][197](&self) -> [usize][115]

Returns the exact remaining length of the iterator. [Read more][197]

[Source][198]§

#### fn [is_empty][199](&self) -> [bool][7]

🔬This is a nightly-only experimental API. (`exact_size_is_empty`)

Returns `true` if the iterator is empty. [Read more][199]

[Source][200]§

### impl<L, R, A> [Extend][201]<A> for [Either][5]<L, R>

where L: [Extend][201]<A>, R: [Extend][201]<A>,

[Source][202]§

#### fn [extend][203]<T>(&mut self, iter: T)

where T: [IntoIterator][32]<Item = A>,

Extends a collection with the contents of an iterator. [Read more][203]

[Source][204]§

#### fn [extend_one][205](&mut self, item: A)

🔬This is a nightly-only experimental API. (`extend_one`)

Extends a collection with exactly one element.

[Source][206]§

#### fn [extend_reserve][207](&mut self, additional: [usize][115])

🔬This is a nightly-only experimental API. (`extend_one`)

Reserves capacity in a collection for the given number of additional elements. [Read more][207]

[Source][208]§

### impl<L, R> [From][209]<[Either][5]<L, R>> for [Result][67]<R, L>

Convert from `Either` to `Result` with `Right => Ok` and `Left => Err`.

[Source][210]§

#### fn [from][211](val: [Either][5]<L, R>) -> [Result][67]<R, L>

Converts to this type from the input type.

[Source][212]§

### impl<L, R> [From][209]<[Result][67]<R, L>> for [Either][5]<L, R>

Convert from `Result` to `Either` with `Ok => Right` and `Err => Left`.

[Source][213]§

#### fn [from][211](r: [Result][67]<R, L>) -> [Either][5]<L, R> ⓘ

Converts to this type from the input type.

[Source][214]§

### impl<L, R> [Future][215] for [Either][5]<L, R>

where L: [Future][215], R: [Future][215]<Output = <L as [Future][215]>::[Output][216]>,

`Either<L, R>` is a future if both `L` and `R` are futures.

[Source][217]§

#### type [Output][218] = <L as [Future][215]>::[Output][216]

The type of value produced on completion.

[Source][219]§

#### fn [poll][220]( self: [Pin][16]<&mut [Either][5]<L, R>>, cx: &mut [Context][221]<'_>, ) -> [Poll][222]<<[Either][5]<L, R> as [Future][215]>::[Output][216]>

Attempts to resolve the future to a final value, registering the current task for wakeup if the value is not yet available. [Read more][220]

[Source][138]§

### impl<L, R> [Hash][223] for [Either][5]<L, R>

where L: [Hash][223], R: [Hash][223],

[Source][138]§

#### fn [hash][224]<__H>(&self, state: [&mut __H][13])

where __H: [Hasher][225],

Feeds this value into the given [`Hasher`][225]. [Read more][224]

1.3.0 · [Source][226]§

#### fn [hash_slice][227]<H>(data: &[Self], state: [&mut H][13])

where H: [Hasher][225], Self: [Sized][129],

Feeds a slice of this type into the given [`Hasher`][225]. [Read more][227]

[Source][228]§

### impl<L, R> [Iterator][165] for [Either][5]<L, R>

where L: [Iterator][165], R: [Iterator][165]<Item = <L as [Iterator][165]>::[Item][166]>,

`Either<L, R>` is an iterator if both `L` and `R` are iterators.

[Source][229]§

#### type [Item][230] = <L as [Iterator][165]>::[Item][166]

The type of the elements being iterated over.

[Source][231]§

#### fn [next][232](&mut self) -> [Option][10]<<[Either][5]<L, R> as [Iterator][165]>::[Item][166]>

Advances the iterator and returns the next value. [Read more][232]

[Source][233]§

#### fn [size_hint][234](&self) -> ([usize][115], [Option][10]<[usize][115]>)

Returns the bounds on the remaining length of the iterator. [Read more][234]

[Source][235]§

#### fn [fold][236]<Acc, G>(self, init: Acc, f: G) -> Acc

where G: [FnMut][173](Acc, <[Either][5]<L, R> as [Iterator][165]>::[Item][166]) -> Acc,

Folds every element into an accumulator by applying an operation, returning the final result. [Read more][236]

[Source][237]§

#### fn [for_each][238]<F>(self, f: F)

where F: [FnMut][173](<[Either][5]<L, R> as [Iterator][165]>::[Item][166]),

Calls a closure on each element of an iterator. [Read more][238]

[Source][239]§

#### fn [count][240](self) -> [usize][115]

Consumes the iterator, counting the number of iterations and returning it. [Read more][240]

[Source][241]§

#### fn [last][242](self) -> [Option][10]<<[Either][5]<L, R> as [Iterator][165]>::[Item][166]>

Consumes the iterator, returning the last element. [Read more][242]

[Source][243]§

#### fn [nth][244](&mut self, n: [usize][115]) -> [Option][10]<<[Either][5]<L, R> as [Iterator][165]>::[Item][166]>

Returns the `n`th element of the iterator. [Read more][244]

[Source][245]§

#### fn [collect][246]<B>(self) -> B

where B: [FromIterator][247]<<[Either][5]<L, R> as [Iterator][165]>::[Item][166]>,

Transforms an iterator into a collection. [Read more][246]

[Source][248]§

#### fn [partition][249]<B, F>(self, f: F) -> [(B, B)][72]

where B: [Default][50] \+ [Extend][201]<<[Either][5]<L, R> as [Iterator][165]>::[Item][166]>, F: [FnMut][173](&<[Either][5]<L, R> as [Iterator][165]>::[Item][166]) -> [bool][7],

Consumes an iterator, creating two collections from it. [Read more][249]

[Source][250]§

#### fn [all][251]<F>(&mut self, f: F) -> [bool][7]

where F: [FnMut][173](<[Either][5]<L, R> as [Iterator][165]>::[Item][166]) -> [bool][7],

Tests if every element of the iterator matches a predicate. [Read more][251]

[Source][252]§

#### fn [any][253]<F>(&mut self, f: F) -> [bool][7]

where F: [FnMut][173](<[Either][5]<L, R> as [Iterator][165]>::[Item][166]) -> [bool][7],

Tests if any element of the iterator matches a predicate. [Read more][253]

[Source][254]§

#### fn [find][255]<P>(&mut self, predicate: P) -> [Option][10]<<[Either][5]<L, R> as [Iterator][165]>::[Item][166]>

where P: [FnMut][173](&<[Either][5]<L, R> as [Iterator][165]>::[Item][166]) -> [bool][7],

Searches for an element of an iterator that satisfies a predicate. [Read more][255]

[Source][256]§

#### fn [find_map][257]<B, F>(&mut self, f: F) -> [Option][10]<B>

where F: [FnMut][173](<[Either][5]<L, R> as [Iterator][165]>::[Item][166]) -> [Option][10]<B>,

Applies function to the elements of iterator and returns the first non-none result. [Read more][257]

[Source][258]§

#### fn [position][259]<P>(&mut self, predicate: P) -> [Option][10]<[usize][115]>

where P: [FnMut][173](<[Either][5]<L, R> as [Iterator][165]>::[Item][166]) -> [bool][7],

Searches for an element in an iterator, returning its index. [Read more][259]

[Source][260]§

#### fn [next_chunk][261]<const N: [usize][115]>( &mut self, ) -> [Result][67]<[Self::[Item][166]; [N][262]], [IntoIter][263]<Self::[Item][166], N>>

where Self: [Sized][129],

🔬This is a nightly-only experimental API. (`iter_next_chunk`)

Advances the iterator and returns an array containing the next `N` values. [Read more][261]

[Source][264]§

#### fn [advance_by][265](&mut self, n: [usize][115]) -> [Result][67]<[()][141], [NonZero][178]<[usize][115]>>

🔬This is a nightly-only experimental API. (`iter_advance_by`)

Advances the iterator by `n` elements. [Read more][265]

1.28.0 · [Source][266]§

#### fn [step_by][267](self, step: [usize][115]) -> [StepBy][268]<Self>

where Self: [Sized][129],

Creates an iterator starting at the same point, but stepping by the given amount at each iteration. [Read more][267]

1.0.0 · [Source][269]§

#### fn [chain][270]<U>(self, other: U) -> [Chain][271]<Self, <U as [IntoIterator][32]>::[IntoIter][33]>

where Self: [Sized][129], U: [IntoIterator][32]<Item = Self::[Item][166]>,

Takes two iterators and creates a new iterator over both in sequence. [Read more][270]

1.0.0 · [Source][272]§

#### fn [zip][273]<U>(self, other: U) -> [Zip][274]<Self, <U as [IntoIterator][32]>::[IntoIter][33]>

where Self: [Sized][129], U: [IntoIterator][32],

‘Zips up’ two iterators into a single iterator of pairs. [Read more][273]

[Source][275]§

#### fn [intersperse][276](self, separator: Self::[Item][166]) -> [Intersperse][277]<Self>

where Self: [Sized][129], Self::[Item][166]: [Clone][81],

🔬This is a nightly-only experimental API. (`iter_intersperse`)

Creates a new iterator which places a copy of `separator` between adjacent items of the original iterator. [Read more][276]

[Source][278]§

#### fn [intersperse_with][279]<G>(self, separator: G) -> [IntersperseWith][280]<Self, G>

where Self: [Sized][129], G: [FnMut][173]() -> Self::[Item][166],

🔬This is a nightly-only experimental API. (`iter_intersperse`)

Creates a new iterator which places an item generated by `separator` between adjacent items of the original iterator. [Read more][279]

1.0.0 · [Source][281]§

#### fn [map][282]<B, F>(self, f: F) -> [Map][283]<Self, F>

where Self: [Sized][129], F: [FnMut][173](Self::[Item][166]) -> B,

Takes a closure and creates an iterator which calls that closure on each element. [Read more][282]

1.0.0 · [Source][284]§

#### fn [filter][285]<P>(self, predicate: P) -> [Filter][286]<Self, P>

where Self: [Sized][129], P: [FnMut][173](&Self::[Item][166]) -> [bool][7],

Creates an iterator which uses a closure to determine if an element should be yielded. [Read more][285]

1.0.0 · [Source][287]§

#### fn [filter_map][288]<B, F>(self, f: F) -> [FilterMap][289]<Self, F>

where Self: [Sized][129], F: [FnMut][173](Self::[Item][166]) -> [Option][10]<B>,

Creates an iterator that both filters and maps. [Read more][288]

1.0.0 · [Source][290]§

#### fn [enumerate][291](self) -> [Enumerate][292]<Self>

where Self: [Sized][129],

Creates an iterator which gives the current iteration count as well as the next value. [Read more][291]

1.0.0 · [Source][293]§

#### fn [peekable][294](self) -> [Peekable][295]<Self>

where Self: [Sized][129],

Creates an iterator which can use the [`peek`][296] and [`peek_mut`][297] methods to look at the next element of the iterator without consuming it. See their documentation for more information. [Read more][294]

1.0.0 · [Source][298]§

#### fn [skip_while][299]<P>(self, predicate: P) -> [SkipWhile][300]<Self, P>

where Self: [Sized][129], P: [FnMut][173](&Self::[Item][166]) -> [bool][7],

Creates an iterator that [`skip`][301]s elements based on a predicate. [Read more][299]

1.0.0 · [Source][302]§

#### fn [take_while][303]<P>(self, predicate: P) -> [TakeWhile][304]<Self, P>

where Self: [Sized][129], P: [FnMut][173](&Self::[Item][166]) -> [bool][7],

Creates an iterator that yields elements based on a predicate. [Read more][303]

1.57.0 · [Source][305]§

#### fn [map_while][306]<B, P>(self, predicate: P) -> [MapWhile][307]<Self, P>

where Self: [Sized][129], P: [FnMut][173](Self::[Item][166]) -> [Option][10]<B>,

Creates an iterator that both yields elements based on a predicate and maps. [Read more][306]

1.0.0 · [Source][308]§

#### fn [skip][309](self, n: [usize][115]) -> [Skip][310]<Self>

where Self: [Sized][129],

Creates an iterator that skips the first `n` elements. [Read more][309]

1.0.0 · [Source][311]§

#### fn [take][312](self, n: [usize][115]) -> [Take][313]<Self>

where Self: [Sized][129],

Creates an iterator that yields the first `n` elements, or fewer if the underlying iterator ends sooner. [Read more][312]

1.0.0 · [Source][314]§

#### fn [scan][315]<St, B, F>(self, initial_state: St, f: F) -> [Scan][316]<Self, St, F>

where Self: [Sized][129], F: [FnMut][173]([&mut St][13], Self::[Item][166]) -> [Option][10]<B>,

An iterator adapter which, like [`fold`][317], holds internal state, but unlike [`fold`][317], produces a new iterator. [Read more][315]

1.0.0 · [Source][318]§

#### fn [flat_map][319]<U, F>(self, f: F) -> [FlatMap][320]<Self, U, F>

where Self: [Sized][129], U: [IntoIterator][32], F: [FnMut][173](Self::[Item][166]) -> U,

Creates an iterator that works like map, but flattens nested structure. [Read more][319]

1.29.0 · [Source][321]§

#### fn [flatten][322](self) -> [Flatten][323]<Self>

where Self: [Sized][129], Self::[Item][166]: [IntoIterator][32],

Creates an iterator that flattens nested structure. [Read more][322]

[Source][324]§

#### fn [map_windows][325]<F, R, const N: [usize][115]>(self, f: F) -> [MapWindows][326]<Self, F, N>

where Self: [Sized][129], F: [FnMut][173](&[Self::[Item][166]; [N][262]]) -> R,

🔬This is a nightly-only experimental API. (`iter_map_windows`)

Calls the given function `f` for each contiguous window of size `N` over `self` and returns an iterator over the outputs of `f`. Like [`slice::windows()`][327], the windows during mapping overlap as well. [Read more][325]

1.0.0 · [Source][328]§

#### fn [fuse][329](self) -> [Fuse][330]<Self>

where Self: [Sized][129],

Creates an iterator which ends after the first [`None`][331]. [Read more][329]

1.0.0 · [Source][332]§

#### fn [inspect][333]<F>(self, f: F) -> [Inspect][334]<Self, F>

where Self: [Sized][129], F: [FnMut][173](&Self::[Item][166]),

Does something with each element of an iterator, passing the value on. [Read more][333]

1.0.0 · [Source][335]§

#### fn [by_ref][336](&mut self) -> &mut Self

where Self: [Sized][129],

Creates a “by reference” adapter for this instance of `Iterator`. [Read more][336]

[Source][337]§

#### fn [try_collect][338]<B>( &mut self, ) -> <<Self::[Item][166] as [Try][181]>::[Residual][339] as [Residual][340]<B>>::[TryType][341]

where Self: [Sized][129], Self::[Item][166]: [Try][181], <Self::[Item][166] as [Try][181]>::[Residual][339]: [Residual][340]<B>, B: [FromIterator][247]<<Self::[Item][166] as [Try][181]>::[Output][342]>,

🔬This is a nightly-only experimental API. (`iterator_try_collect`)

Fallibly transforms an iterator into a collection, short circuiting if a failure is encountered. [Read more][338]

[Source][343]§

#### fn [collect_into][344]<E>(self, collection: [&mut E][13]) -> [&mut E][13]

where E: [Extend][201]<Self::[Item][166]>, Self: [Sized][129],

🔬This is a nightly-only experimental API. (`iter_collect_into`)

Collects all the items from an iterator into a collection. [Read more][344]

[Source][345]§

#### fn [partition_in_place][346]<'a, T, P>(self, predicate: P) -> [usize][115]

where T: 'a, Self: [Sized][129] \+ [DoubleEndedIterator][164]<Item = [&'a mut T][13]>, P: [FnMut][173]([&T][13]) -> [bool][7],

🔬This is a nightly-only experimental API. (`iter_partition_in_place`)

Reorders the elements of this iterator _in-place_ according to the given predicate, such that all those that return `true` precede all those that return `false`. Returns the number of `true` elements found. [Read more][346]

[Source][347]§

#### fn [is_partitioned][348]<P>(self, predicate: P) -> [bool][7]

where Self: [Sized][129], P: [FnMut][173](Self::[Item][166]) -> [bool][7],

🔬This is a nightly-only experimental API. (`iter_is_partitioned`)

Checks if the elements of this iterator are partitioned according to the given predicate, such that all those that return `true` precede all those that return `false`. [Read more][348]

1.27.0 · [Source][349]§

#### fn [try_fold][350]<B, F, R>(&mut self, init: B, f: F) -> R

where Self: [Sized][129], F: [FnMut][173](B, Self::[Item][166]) -> R, R: [Try][181]<Output = B>,

An iterator method that applies a function as long as it returns successfully, producing a single, final value. [Read more][350]

1.27.0 · [Source][351]§

#### fn [try_for_each][352]<F, R>(&mut self, f: F) -> R

where Self: [Sized][129], F: [FnMut][173](Self::[Item][166]) -> R, R: [Try][181]<Output = [()][141]>,

An iterator method that applies a fallible function to each item in the iterator, stopping at the first error and returning that error. [Read more][352]

1.51.0 · [Source][353]§

#### fn [reduce][354]<F>(self, f: F) -> [Option][10]<Self::[Item][166]>

where Self: [Sized][129], F: [FnMut][173](Self::[Item][166], Self::[Item][166]) -> Self::[Item][166],

Reduces the elements to a single one, by repeatedly applying a reducing operation. [Read more][354]

[Source][355]§

#### fn [try_reduce][356]<R>( &mut self, f: impl [FnMut][173](Self::[Item][166], Self::[Item][166]) -> R, ) -> <<R as [Try][181]>::[Residual][339] as [Residual][340]<[Option][10]<<R as [Try][181]>::[Output][342]>>>::[TryType][341]

where Self: [Sized][129], R: [Try][181]<Output = Self::[Item][166]>, <R as [Try][181]>::[Residual][339]: [Residual][340]<[Option][10]<Self::[Item][166]>>,

🔬This is a nightly-only experimental API. (`iterator_try_reduce`)

Reduces the elements to a single one by repeatedly applying a reducing operation. If the closure returns a failure, the failure is propagated back to the caller immediately. [Read more][356]

[Source][357]§

#### fn [try_find][358]<R>( &mut self, f: impl [FnMut][173](&Self::[Item][166]) -> R, ) -> <<R as [Try][181]>::[Residual][339] as [Residual][340]<[Option][10]<Self::[Item][166]>>>::[TryType][341]

where Self: [Sized][129], R: [Try][181]<Output = [bool][7]>, <R as [Try][181]>::[Residual][339]: [Residual][340]<[Option][10]<Self::[Item][166]>>,

🔬This is a nightly-only experimental API. (`try_find`)

Applies function to the elements of iterator and returns the first true result or the first error. [Read more][358]

1.0.0 · [Source][359]§

#### fn [rposition][360]<P>(&mut self, predicate: P) -> [Option][10]<[usize][115]>

where P: [FnMut][173](Self::[Item][166]) -> [bool][7], Self: [Sized][129] \+ [ExactSizeIterator][195] \+ [DoubleEndedIterator][164],

Searches for an element in an iterator from the right, returning its index. [Read more][360]

1.0.0 · [Source][361]§

#### fn [max][362](self) -> [Option][10]<Self::[Item][166]>

where Self: [Sized][129], Self::[Item][166]: [Ord][363],

Returns the maximum element of an iterator. [Read more][362]

1.0.0 · [Source][364]§

#### fn [min][365](self) -> [Option][10]<Self::[Item][166]>

where Self: [Sized][129], Self::[Item][166]: [Ord][363],

Returns the minimum element of an iterator. [Read more][365]

1.6.0 · [Source][366]§

#### fn [max_by_key][367]<B, F>(self, f: F) -> [Option][10]<Self::[Item][166]>

where B: [Ord][363], Self: [Sized][129], F: [FnMut][173](&Self::[Item][166]) -> B,

Returns the element that gives the maximum value from the specified function. [Read more][367]

1.15.0 · [Source][368]§

#### fn [max_by][369]<F>(self, compare: F) -> [Option][10]<Self::[Item][166]>

where Self: [Sized][129], F: [FnMut][173](&Self::[Item][166], &Self::[Item][166]) -> [Ordering][370],

Returns the element that gives the maximum value with respect to the specified comparison function. [Read more][369]

1.6.0 · [Source][371]§

#### fn [min_by_key][372]<B, F>(self, f: F) -> [Option][10]<Self::[Item][166]>

where B: [Ord][363], Self: [Sized][129], F: [FnMut][173](&Self::[Item][166]) -> B,

Returns the element that gives the minimum value from the specified function. [Read more][372]

1.15.0 · [Source][373]§

#### fn [min_by][374]<F>(self, compare: F) -> [Option][10]<Self::[Item][166]>

where Self: [Sized][129], F: [FnMut][173](&Self::[Item][166], &Self::[Item][166]) -> [Ordering][370],

Returns the element that gives the minimum value with respect to the specified comparison function. [Read more][374]

1.0.0 · [Source][375]§

#### fn [rev][376](self) -> [Rev][377]<Self>

where Self: [Sized][129] \+ [DoubleEndedIterator][164],

Reverses an iterator’s direction. [Read more][376]

1.0.0 · [Source][378]§

#### fn [unzip][379]<A, B, FromA, FromB>(self) -> [(FromA, FromB)][72]

where FromA: [Default][50] \+ [Extend][201]<A>, FromB: [Default][50] \+ [Extend][201]<B>, Self: [Sized][129] \+ [Iterator][165]<Item = [(A, B)][72]>,

Converts an iterator of pairs into a pair of containers. [Read more][379]

1.36.0 · [Source][380]§

#### fn [copied][381]<'a, T>(self) -> [Copied][382]<Self>

where T: [Copy][83] \+ 'a, Self: [Sized][129] \+ [Iterator][165]<Item = [&'a T][13]>,

Creates an iterator which copies all of its elements. [Read more][381]

1.0.0 · [Source][383]§

#### fn [cloned][384]<'a, T>(self) -> [Cloned][385]<Self>

where T: [Clone][81] \+ 'a, Self: [Sized][129] \+ [Iterator][165]<Item = [&'a T][13]>,

Creates an iterator which [`clone`][386]s all of its elements. [Read more][384]

1.0.0 · [Source][387]§

#### fn [cycle][388](self) -> [Cycle][389]<Self>

where Self: [Sized][129] \+ [Clone][81],

Repeats an iterator endlessly. [Read more][388]

[Source][390]§

#### fn [array_chunks][391]<const N: [usize][115]>(self) -> [ArrayChunks][392]<Self, N>

where Self: [Sized][129],

🔬This is a nightly-only experimental API. (`iter_array_chunks`)

Returns an iterator over `N` elements of the iterator at a time. [Read more][391]

1.11.0 · [Source][393]§

#### fn [sum][394]<S>(self) -> S

where Self: [Sized][129], S: [Sum][395]<Self::[Item][166]>,

Sums the elements of an iterator. [Read more][394]

1.11.0 · [Source][396]§

#### fn [product][397]<P>(self) -> P

where Self: [Sized][129], P: [Product][398]<Self::[Item][166]>,

Iterates over the entire iterator, multiplying all the elements [Read more][397]

1.5.0 · [Source][399]§

#### fn [cmp][400]<I>(self, other: I) -> [Ordering][370]

where I: [IntoIterator][32]<Item = Self::[Item][166]>, Self::[Item][166]: [Ord][363], Self: [Sized][129],

[Lexicographically][401] compares the elements of this [`Iterator`][165] with those of another. [Read more][400]

[Source][402]§

#### fn [cmp_by][403]<I, F>(self, other: I, cmp: F) -> [Ordering][370]

where Self: [Sized][129], I: [IntoIterator][32], F: [FnMut][173](Self::[Item][166], <I as [IntoIterator][32]>::[Item][34]) -> [Ordering][370],

🔬This is a nightly-only experimental API. (`iter_order_by`)

[Lexicographically][401] compares the elements of this [`Iterator`][165] with those of another with respect to the specified comparison function. [Read more][403]

1.5.0 · [Source][404]§

#### fn [partial_cmp][405]<I>(self, other: I) -> [Option][10]<[Ordering][370]>

where I: [IntoIterator][32], Self::[Item][166]: [PartialOrd][406]<<I as [IntoIterator][32]>::[Item][34]>, Self: [Sized][129],

[Lexicographically][401] compares the [`PartialOrd`][406] elements of this [`Iterator`][165] with those of another. The comparison works like short-circuit evaluation, returning a result without comparing the remaining elements. As soon as an order can be determined, the evaluation stops and a result is returned. [Read more][405]

[Source][407]§

#### fn [partial_cmp_by][408]<I, F>(self, other: I, partial_cmp: F) -> [Option][10]<[Ordering][370]>

where Self: [Sized][129], I: [IntoIterator][32], F: [FnMut][173](Self::[Item][166], <I as [IntoIterator][32]>::[Item][34]) -> [Option][10]<[Ordering][370]>,

🔬This is a nightly-only experimental API. (`iter_order_by`)

[Lexicographically][401] compares the elements of this [`Iterator`][165] with those of another with respect to the specified comparison function. [Read more][408]

1.5.0 · [Source][409]§

#### fn [eq][410]<I>(self, other: I) -> [bool][7]

where I: [IntoIterator][32], Self::[Item][166]: [PartialEq][411]<<I as [IntoIterator][32]>::[Item][34]>, Self: [Sized][129],

Determines if the elements of this [`Iterator`][165] are equal to those of another. [Read more][410]

[Source][412]§

#### fn [eq_by][413]<I, F>(self, other: I, eq: F) -> [bool][7]

where Self: [Sized][129], I: [IntoIterator][32], F: [FnMut][173](Self::[Item][166], <I as [IntoIterator][32]>::[Item][34]) -> [bool][7],

🔬This is a nightly-only experimental API. (`iter_order_by`)

Determines if the elements of this [`Iterator`][165] are equal to those of another with respect to the specified equality function. [Read more][413]

1.5.0 · [Source][414]§

#### fn [ne][415]<I>(self, other: I) -> [bool][7]

where I: [IntoIterator][32], Self::[Item][166]: [PartialEq][411]<<I as [IntoIterator][32]>::[Item][34]>, Self: [Sized][129],

Determines if the elements of this [`Iterator`][165] are not equal to those of another. [Read more][415]

1.5.0 · [Source][416]§

#### fn [lt][417]<I>(self, other: I) -> [bool][7]

where I: [IntoIterator][32], Self::[Item][166]: [PartialOrd][406]<<I as [IntoIterator][32]>::[Item][34]>, Self: [Sized][129],

Determines if the elements of this [`Iterator`][165] are [lexicographically][401] less than those of another. [Read more][417]

1.5.0 · [Source][418]§

#### fn [le][419]<I>(self, other: I) -> [bool][7]

where I: [IntoIterator][32], Self::[Item][166]: [PartialOrd][406]<<I as [IntoIterator][32]>::[Item][34]>, Self: [Sized][129],

Determines if the elements of this [`Iterator`][165] are [lexicographically][401] less or equal to those of another. [Read more][419]

1.5.0 · [Source][420]§

#### fn [gt][421]<I>(self, other: I) -> [bool][7]

where I: [IntoIterator][32], Self::[Item][166]: [PartialOrd][406]<<I as [IntoIterator][32]>::[Item][34]>, Self: [Sized][129],

Determines if the elements of this [`Iterator`][165] are [lexicographically][401] greater than those of another. [Read more][421]

1.5.0 · [Source][422]§

#### fn [ge][423]<I>(self, other: I) -> [bool][7]

where I: [IntoIterator][32], Self::[Item][166]: [PartialOrd][406]<<I as [IntoIterator][32]>::[Item][34]>, Self: [Sized][129],

Determines if the elements of this [`Iterator`][165] are [lexicographically][401] greater than or equal to those of another. [Read more][423]

1.82.0 · [Source][424]§

#### fn [is_sorted][425](self) -> [bool][7]

where Self: [Sized][129], Self::[Item][166]: [PartialOrd][406],

Checks if the elements of this iterator are sorted. [Read more][425]

1.82.0 · [Source][426]§

#### fn [is_sorted_by][427]<F>(self, compare: F) -> [bool][7]

where Self: [Sized][129], F: [FnMut][173](&Self::[Item][166], &Self::[Item][166]) -> [bool][7],

Checks if the elements of this iterator are sorted using the given comparator function. [Read more][427]

1.82.0 · [Source][428]§

#### fn [is_sorted_by_key][429]<F, K>(self, f: F) -> [bool][7]

where Self: [Sized][129], F: [FnMut][173](Self::[Item][166]) -> K, K: [PartialOrd][406],

Checks if the elements of this iterator are sorted using the given key extraction function. [Read more][429]

[Source][138]§

### impl<L, R> [Ord][363] for [Either][5]<L, R>

where L: [Ord][363], R: [Ord][363],

[Source][138]§

#### fn [cmp][430](&self, other: &[Either][5]<L, R>) -> [Ordering][370]

This method returns an [`Ordering`][370] between `self` and `other`. [Read more][430]

1.21.0 · [Source][431]§

#### fn [max][432](self, other: Self) -> Self

where Self: [Sized][129],

Compares and returns the maximum of two values. [Read more][432]

1.21.0 · [Source][433]§

#### fn [min][434](self, other: Self) -> Self

where Self: [Sized][129],

Compares and returns the minimum of two values. [Read more][434]

1.50.0 · [Source][435]§

#### fn [clamp][436](self, min: Self, max: Self) -> Self

where Self: [Sized][129],

Restrict a value to a certain interval. [Read more][436]

[Source][138]§

### impl<L, R> [PartialEq][411] for [Either][5]<L, R>

where L: [PartialEq][411], R: [PartialEq][411],

[Source][138]§

#### fn [eq][437](&self, other: &[Either][5]<L, R>) -> [bool][7]

Tests for `self` and `other` values to be equal, and is used by `==`.

1.0.0 · [Source][438]§

#### fn [ne][439](&self, other: [&Rhs][13]) -> [bool][7]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][138]§

### impl<L, R> [PartialOrd][406] for [Either][5]<L, R>

where L: [PartialOrd][406], R: [PartialOrd][406],

[Source][138]§

#### fn [partial_cmp][440](&self, other: &[Either][5]<L, R>) -> [Option][10]<[Ordering][370]>

This method returns an ordering between `self` and `other` values if one exists. [Read more][440]

1.0.0 · [Source][441]§

#### fn [lt][442](&self, other: [&Rhs][13]) -> [bool][7]

Tests less than (for `self` and `other`) and is used by the `<` operator. [Read more][442]

1.0.0 · [Source][443]§

#### fn [le][444](&self, other: [&Rhs][13]) -> [bool][7]

Tests less than or equal to (for `self` and `other`) and is used by the `<=` operator. [Read more][444]

1.0.0 · [Source][445]§

#### fn [gt][446](&self, other: [&Rhs][13]) -> [bool][7]

Tests greater than (for `self` and `other`) and is used by the `>` operator. [Read more][446]

1.0.0 · [Source][447]§

#### fn [ge][448](&self, other: [&Rhs][13]) -> [bool][7]

Tests greater than or equal to (for `self` and `other`) and is used by the `>=` operator. [Read more][448]

[Source][449]§

### impl<L, R> [Read][450] for [Either][5]<L, R>

where L: [Read][450], R: [Read][450],

Available on **crate features`std`** only.

`Either<L, R>` implements `Read` if both `L` and `R` do.

Requires crate feature `"std"`

[Source][451]§

#### fn [read][452](&mut self, buf: &mut [[u8][111]]) -> [Result][67]<[usize][115], [Error][112]>

Pull some bytes from this source into the specified buffer, returning how many bytes were read. [Read more][452]

[Source][453]§

#### fn [read_exact][454](&mut self, buf: &mut [[u8][111]]) -> [Result][67]<[()][141], [Error][112]>

Reads the exact number of bytes required to fill `buf`. [Read more][454]

[Source][455]§

#### fn [read_to_end][456](&mut self, buf: &mut [Vec][118]<[u8][111]>) -> [Result][67]<[usize][115], [Error][112]>

Reads all bytes until EOF in this source, placing them into `buf`. [Read more][456]

[Source][457]§

#### fn [read_to_string][458](&mut self, buf: &mut [String][121]) -> [Result][67]<[usize][115], [Error][112]>

Reads all bytes until EOF in this source, appending them to `buf`. [Read more][458]

1.36.0 · [Source][459]§

#### fn [read_vectored][460](&mut self, bufs: &mut [[IoSliceMut][461]<'_>]) -> [Result][67]<[usize][115], [Error][112]>

Like `read`, except that it reads into a slice of buffers. [Read more][460]

[Source][462]§

#### fn [is_read_vectored][463](&self) -> [bool][7]

🔬This is a nightly-only experimental API. (`can_vector`)

Determines if this `Read`er has an efficient `read_vectored` implementation. [Read more][463]

[Source][464]§

#### fn [read_buf][465](&mut self, buf: [BorrowedCursor][466]<'_>) -> [Result][67]<[()][141], [Error][112]>

🔬This is a nightly-only experimental API. (`read_buf`)

Pull some bytes from this source into the specified buffer. [Read more][465]

[Source][467]§

#### fn [read_buf_exact][468](&mut self, cursor: [BorrowedCursor][466]<'_>) -> [Result][67]<[()][141], [Error][112]>

🔬This is a nightly-only experimental API. (`read_buf`)

Reads the exact number of bytes required to fill `cursor`. [Read more][468]

1.0.0 · [Source][469]§

#### fn [by_ref][470](&mut self) -> &mut Self

where Self: [Sized][129],

Creates a “by reference” adapter for this instance of `Read`. [Read more][470]

1.0.0 · [Source][471]§

#### fn [bytes][472](self) -> [Bytes][473]<Self>

where Self: [Sized][129],

Transforms this `Read` instance to an [`Iterator`][165] over its bytes. [Read more][472]

1.0.0 · [Source][474]§

#### fn [chain][475]<R>(self, next: R) -> [Chain][476]<Self, R>

where R: [Read][450], Self: [Sized][129],

Creates an adapter which will chain this stream with another. [Read more][475]

1.0.0 · [Source][477]§

#### fn [take][478](self, limit: [u64][479]) -> [Take][480]<Self>

where Self: [Sized][129],

Creates an adapter which will read at most `limit` bytes from it. [Read more][478]

[Source][481]§

#### fn [read_array][482]<const N: [usize][115]>(&mut self) -> [Result][67]<[[u8][111]; [N][262]], [Error][112]>

where Self: [Sized][129],

🔬This is a nightly-only experimental API. (`read_array`)

Read and return a fixed array of bytes from this source. [Read more][482]

[Source][483]§

### impl<L, R> [Seek][484] for [Either][5]<L, R>

where L: [Seek][484], R: [Seek][484],

Available on **crate features`std`** only.

`Either<L, R>` implements `Seek` if both `L` and `R` do.

Requires crate feature `"std"`

[Source][485]§

#### fn [seek][486](&mut self, pos: [SeekFrom][487]) -> [Result][67]<[u64][479], [Error][112]>

Seek to an offset, in bytes, in a stream. [Read more][486]

1.55.0 · [Source][488]§

#### fn [rewind][489](&mut self) -> [Result][67]<[()][141], [Error][112]>

Rewind to the beginning of a stream. [Read more][489]

[Source][490]§

#### fn [stream_len][491](&mut self) -> [Result][67]<[u64][479], [Error][112]>

🔬This is a nightly-only experimental API. (`seek_stream_len`)

Returns the length of this stream (in bytes). [Read more][491]

1.51.0 · [Source][492]§

#### fn [stream_position][493](&mut self) -> [Result][67]<[u64][479], [Error][112]>

Returns the current seek position from the start of the stream. [Read more][493]

1.80.0 · [Source][494]§

#### fn [seek_relative][495](&mut self, offset: [i64][496]) -> [Result][67]<[()][141], [Error][112]>

Seeks relative to the current position. [Read more][495]

[Source][154]§

### impl<L, R> [Serialize][497] for [Either][5]<L, R>

where L: [Serialize][497], R: [Serialize][497],

[Source][154]§

#### fn [serialize][498]<__S>( &self, __serializer: __S, ) -> [Result][67]<<__S as [Serializer][499]>::[Ok][500], <__S as [Serializer][499]>::[Error][501]>

where __S: [Serializer][499],

Serialize this value into the given Serde serializer. [Read more][498]

[Source][502]§

### impl<L, R> [Write][503] for [Either][5]<L, R>

where L: [Write][503], R: [Write][503],

Available on **crate features`std`** only.

`Either<L, R>` implements `Write` if both `L` and `R` do.

Requires crate feature `"std"`

[Source][504]§

#### fn [write][505](&mut self, buf: &[[u8][111]]) -> [Result][67]<[usize][115], [Error][112]>

Writes a buffer into this writer, returning how many bytes were written. [Read more][505]

[Source][506]§

#### fn [write_all][507](&mut self, buf: &[[u8][111]]) -> [Result][67]<[()][141], [Error][112]>

Attempts to write an entire buffer into this writer. [Read more][507]

[Source][508]§

#### fn [write_fmt][509](&mut self, fmt: [Arguments][510]<'_>) -> [Result][67]<[()][141], [Error][112]>

Writes a formatted string into this writer, returning any error encountered. [Read more][509]

[Source][511]§

#### fn [flush][512](&mut self) -> [Result][67]<[()][141], [Error][112]>

Flushes this output stream, ensuring that all intermediately buffered contents reach their destination. [Read more][512]

1.36.0 · [Source][513]§

#### fn [write_vectored][514](&mut self, bufs: &[[IoSlice][515]<'_>]) -> [Result][67]<[usize][115], [Error][112]>

Like [`write`][516], except that it writes from a slice of buffers. [Read more][514]

[Source][517]§

#### fn [is_write_vectored][518](&self) -> [bool][7]

🔬This is a nightly-only experimental API. (`can_vector`)

Determines if this `Write`r has an efficient [`write_vectored`][519] implementation. [Read more][518]

[Source][520]§

#### fn [write_all_vectored][521](&mut self, bufs: &mut [[IoSlice][515]<'_>]) -> [Result][67]<[()][141], [Error][112]>

🔬This is a nightly-only experimental API. (`write_all_vectored`)

Attempts to write multiple buffers into this writer. [Read more][521]

1.0.0 · [Source][522]§

#### fn [by_ref][523](&mut self) -> &mut Self

where Self: [Sized][129],

Creates a “by reference” adapter for this instance of `Write`. [Read more][523]

[Source][524]§

### impl<L, R> [Write][525] for [Either][5]<L, R>

where L: [Write][525], R: [Write][525],

[Source][526]§

#### fn [write_str][527](&mut self, s: &[str][60]) -> [Result][67]<[()][141], [Error][142]>

Writes a string slice into this writer, returning whether the write succeeded. [Read more][527]

[Source][528]§

#### fn [write_char][529](&mut self, c: [char][530]) -> [Result][67]<[()][141], [Error][142]>

Writes a [`char`][531] into this writer, returning whether the write succeeded. [Read more][529]

[Source][532]§

#### fn [write_fmt][533](&mut self, args: [Arguments][510]<'_>) -> [Result][67]<[()][141], [Error][142]>

Glue for usage of the [`write!`][534] macro with implementors of this trait. [Read more][533]

[Source][138]§

### impl<L, R> [Copy][83] for [Either][5]<L, R>

where L: [Copy][83], R: [Copy][83],

[Source][138]§

### impl<L, R> [Eq][535] for [Either][5]<L, R>

where L: [Eq][535], R: [Eq][535],

[Source][536]§

### impl<L, R> [FusedIterator][537] for [Either][5]<L, R>

where L: [FusedIterator][537], R: [FusedIterator][537]<Item = <L as [Iterator][165]>::[Item][166]>,

[Source][138]§

### impl<L, R> [StructuralPartialEq][538] for [Either][5]<L, R>

## Auto Trait Implementations§

§

### impl<L, R> [Freeze][539] for [Either][5]<L, R>

where L: [Freeze][539], R: [Freeze][539],

§

### impl<L, R> [RefUnwindSafe][540] for [Either][5]<L, R>

where L: [RefUnwindSafe][540], R: [RefUnwindSafe][540],

§

### impl<L, R> [Send][541] for [Either][5]<L, R>

where L: [Send][541], R: [Send][541],

§

### impl<L, R> [Sync][542] for [Either][5]<L, R>

where L: [Sync][542], R: [Sync][542],

§

### impl<L, R> [Unpin][543] for [Either][5]<L, R>

where L: [Unpin][543], R: [Unpin][543],

§

### impl<L, R> [UnwindSafe][544] for [Either][5]<L, R>

where L: [UnwindSafe][544], R: [UnwindSafe][544],

## Blanket Implementations§

[Source][545]§

### impl<T> [Any][546] for T

where T: 'static + ?[Sized][129],

[Source][547]§

#### fn [type_id][548](&self) -> [TypeId][549]

Gets the `TypeId` of `self`. [Read more][548]

[Source][550]§

### impl<T> [Borrow][551]<T> for T

where T: ?[Sized][129],

[Source][552]§

#### fn [borrow][553](&self) -> [&T][13]

Immutably borrows from an owned value. [Read more][553]

[Source][554]§

### impl<T> [BorrowMut][555]<T> for T

where T: ?[Sized][129],

[Source][556]§

#### fn [borrow_mut][557](&mut self) -> [&mut T][13]

Mutably borrows from an owned value. [Read more][557]

[Source][558]§

### impl<T> [CloneToUninit][559] for T

where T: [Clone][81],

[Source][560]§

#### unsafe fn [clone_to_uninit][561](&self, dest: [*mut ][562][u8][111])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][561]

§

### impl<Q, K> Comparable<K> for Q

where Q: [Ord][363] \+ ?[Sized][129], K: [Borrow][551]<Q> \+ ?[Sized][129],

§

#### fn compare(&self, key: [&K][13]) -> [Ordering][370]

Compare self to `key` and return their ordering.

§

### impl<Q, K> Equivalent<K> for Q

where Q: [Eq][535] \+ ?[Sized][129], K: [Borrow][551]<Q> \+ ?[Sized][129],

§

#### fn equivalent(&self, key: [&K][13]) -> [bool][7]

Compare self to `key` and return `true` if they are equal.

§

### impl<Q, K> Equivalent<K> for Q

where Q: [Eq][535] \+ ?[Sized][129], K: [Borrow][551]<Q> \+ ?[Sized][129],

§

#### fn equivalent(&self, key: [&K][13]) -> [bool][7]

Checks if this value is equivalent to the given key. Read more

[Source][563]§

### impl<T> [From][209]<T> for T

[Source][564]§

#### fn [from][211](t: T) -> T

Returns the argument unchanged.

§

### impl<T> FutureExt for T

where T: [Future][215] \+ ?[Sized][129],

§

#### fn map<U, F>(self, f: F) -> Map<Self, F>

where F: [FnOnce][20](Self::[Output][216]) -> U, Self: [Sized][129],

Map this future’s output to a different type, returning a new future of the resulting type. Read more

§

#### fn map_into<U>(self) -> MapInto<Self, U>

where Self::[Output][216]: [Into][63]<U>, Self: [Sized][129],

Map this future’s output to a different type, returning a new future of the resulting type. Read more

§

#### fn then<Fut, F>(self, f: F) -> Then<Self, Fut, F>

where F: [FnOnce][20](Self::[Output][216]) -> Fut, Fut: [Future][215], Self: [Sized][129],

Chain on a computation for when a future finished, passing the result of the future to the provided closure `f`. Read more

§

#### fn left_future<B>(self) -> Either<Self, B>

where B: [Future][215]<Output = Self::[Output][216]>, Self: [Sized][129],

Wrap this future in an `Either` future, making it the left-hand variant of that `Either`. Read more

§

#### fn right_future<A>(self) -> Either<A, Self>

where A: [Future][215]<Output = Self::[Output][216]>, Self: [Sized][129],

Wrap this future in an `Either` future, making it the right-hand variant of that `Either`. Read more

§

#### fn into_stream(self) -> IntoStream<Self>

where Self: [Sized][129],

Convert this future into a single element stream. Read more

§

#### fn flatten(self) -> Flatten<Self>

where Self::[Output][216]: [Future][215], Self: [Sized][129],

Flatten the execution of this future when the output of this future is itself another future. Read more

§

#### fn flatten_stream(self) -> FlattenStream<Self>

where Self::[Output][216]: Stream, Self: [Sized][129],

Flatten the execution of this future when the successful result of this future is a stream. Read more

§

#### fn fuse(self) -> Fuse<Self>

where Self: [Sized][129],

Fuse a future such that `poll` will never again be called once it has completed. This method can be used to turn any `Future` into a `FusedFuture`. Read more

§

#### fn inspect<F>(self, f: F) -> Inspect<Self, F>

where F: [FnOnce][20](&Self::[Output][216]), Self: [Sized][129],

Do something with the output of a future before passing it on. Read more

§

#### fn catch_unwind(self) -> CatchUnwind<Self>

where Self: [Sized][129] \+ [UnwindSafe][544],

Catches unwinding panics while polling the future. Read more

§

#### fn shared(self) -> Shared<Self>

where Self: [Sized][129], Self::[Output][216]: [Clone][81],

Create a cloneable handle to this future where all handles will resolve to the same result. Read more

§

#### fn boxed<'a>(self) -> [Pin][16]<[Box][565]<dyn [Future][215]<Output = Self::[Output][216]> \+ [Send][541] \+ 'a>>

where Self: [Sized][129] \+ [Send][541] \+ 'a,

Wrap the future in a Box, pinning it. Read more

§

#### fn boxed_local<'a>(self) -> [Pin][16]<[Box][565]<dyn [Future][215]<Output = Self::[Output][216]> \+ 'a>>

where Self: [Sized][129] \+ 'a,

Wrap the future in a Box, pinning it. Read more

§

#### fn unit_error(self) -> UnitError<Self>

where Self: [Sized][129],

Turns a [`Future<Output = T>`][215] into a [`TryFuture<Ok = T, Error = ()`>][566].

§

#### fn never_error(self) -> NeverError<Self>

where Self: [Sized][129],

Turns a [`Future<Output = T>`][215] into a [`TryFuture<Ok = T, Error = Never`>][566].

§

#### fn poll_unpin(&mut self, cx: &mut [Context][221]<'_>) -> [Poll][222]<Self::[Output][216]>

where Self: [Unpin][543],

A convenience for calling `Future::poll` on `Unpin` future types.

§

#### fn now_or_never(self) -> [Option][10]<Self::[Output][216]>

where Self: [Sized][129],

Evaluates and consumes the future, returning the resulting output if the future is ready after the first call to `Future::poll`. Read more

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][567] [`Span`][568], returning an `Instrumented` wrapper. Read more

[Source][569]§

### impl<T, U> [Into][63]<U> for T

where U: [From][209]<T>,

[Source][570]§

#### fn [into][571](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][209]<T> for U` chooses to do.

[Source][572]§

### impl<T> [IntoEither][573] for T

[Source][574]§

#### fn [into_either][575](self, into_left: [bool][7]) -> [Either][5]<Self, Self> ⓘ

Converts `self` into a [`Left`][576] variant of [`Either<Self, Self>`][5] if `into_left` is `true`. Converts `self` into a [`Right`][577] variant of [`Either<Self, Self>`][5] otherwise. [Read more][575]

[Source][578]§

#### fn [into_either_with][579]<F>(self, into_left: F) -> [Either][5]<Self, Self> ⓘ

where F: [FnOnce][20](&Self) -> [bool][7],

Converts `self` into a [`Left`][576] variant of [`Either<Self, Self>`][5] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][577] variant of [`Either<Self, Self>`][5] otherwise. [Read more][579]

[Source][580]§

### impl<F> [IntoFuture][581] for F

where F: [Future][215],

[Source][582]§

#### type [Output][583] = <F as [Future][215]>::[Output][216]

The output that the future will produce on completion.

[Source][584]§

#### type [IntoFuture][585] = F

Which kind of future are we turning this into?

[Source][586]§

#### fn [into_future][587](self) -> <F as [IntoFuture][581]>::[IntoFuture][588]

Creates a future from a value. [Read more][587]

[Source][589]§

### impl<I> [IntoIterator][32] for I

where I: [Iterator][165],

[Source][590]§

#### type [Item][591] = <I as [Iterator][165]>::[Item][166]

The type of the elements being iterated over.

[Source][592]§

#### type [IntoIter][593] = I

Which kind of iterator are we turning this into?

[Source][594]§

#### fn [into_iter][595](self) -> I

Creates an iterator from a value. [Read more][595]

[Source][596]§

### impl<P, T> [Receiver][597] for P

where P: [Deref][144]<Target = T> \+ ?[Sized][129], T: ?[Sized][129],

[Source][598]§

#### type [Target][599] = T

🔬This is a nightly-only experimental API. (`arbitrary_self_types`)

The target type on which the method may be called.

[Source][600]§

### impl<T> [Same][601] for T

[Source][602]§

#### type [Output][603] = T

Should always be `Self`

[Source][604]§

### impl<T> [ToOwned][605] for T

where T: [Clone][81],

[Source][606]§

#### type [Owned][607] = T

The resulting type after obtaining ownership.

[Source][608]§

#### fn [to_owned][609](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][609]

[Source][610]§

#### fn [clone_into][611](&self, target: [&mut T][13])

Uses borrowed data to replace owned data, usually by cloning. [Read more][611]

[Source][612]§

### impl<T> [ToString][613] for T

where T: [Display][160] \+ ?[Sized][129],

[Source][614]§

#### fn [to_string][615](&self) -> [String][121]

Converts the given value to a `String`. [Read more][615]

[Source][616]§

### impl<T, U> [TryFrom][617]<U> for T

where U: [Into][63]<T>,

[Source][618]§

#### type [Error][619] = [Infallible][620]

The type returned in the event of a conversion error.

[Source][621]§

#### fn [try_from][622](value: U) -> [Result][67]<T, <T as [TryFrom][617]<U>>::[Error][623]>

Performs the conversion.

§

### impl<F, T, E> TryFuture for F

where F: [Future][215]<Output = [Result][67]<T, E>> \+ ?[Sized][129],

§

#### type Ok = T

The type of successful values yielded by this future

§

#### type Error = E

The type of failures yielded by this future

§

#### fn try_poll( self: [Pin][16]<[&mut F][13]>, cx: &mut [Context][221]<'_>, ) -> [Poll][222]<<F as [Future][215]>::[Output][216]>

Poll this `TryFuture` as if it were a `Future`. Read more

§

### impl<Fut> TryFutureExt for Fut

where Fut: TryFuture + ?[Sized][129],

§

#### fn flatten_sink<Item>(self) -> FlattenSink<Self, Self::Ok>

where Self::Ok: Sink<Item, Error = Self::Error>, Self: [Sized][129],

Flattens the execution of this future when the successful result of this future is a [`Sink`]. Read more

§

#### fn map_ok<T, F>(self, f: F) -> MapOk<Self, F>

where F: [FnOnce][20](Self::Ok) -> T, Self: [Sized][129],

Maps this future’s success value to a different value. Read more

§

#### fn map_ok_or_else<T, E, F>(self, e: E, f: F) -> MapOkOrElse<Self, F, E>

where F: [FnOnce][20](Self::Ok) -> T, E: [FnOnce][20](Self::Error) -> T, Self: [Sized][129],

Maps this future’s success value to a different value, and permits for error handling resulting in the same type. Read more

§

#### fn map_err<E, F>(self, f: F) -> MapErr<Self, F>

where F: [FnOnce][20](Self::Error) -> E, Self: [Sized][129],

Maps this future’s error value to a different value. Read more

§

#### fn err_into<E>(self) -> ErrInto<Self, E>

where Self: [Sized][129], Self::Error: [Into][63]<E>,

Maps this future’s [`Error`][624] to a new error type using the [`Into`][63] trait. Read more

§

#### fn ok_into<U>(self) -> OkInto<Self, U>

where Self: [Sized][129], Self::Ok: [Into][63]<U>,

Maps this future’s [`Ok`][625] to a new type using the [`Into`][63] trait.

§

#### fn and_then<Fut, F>(self, f: F) -> AndThen<Self, Fut, F>

where F: [FnOnce][20](Self::Ok) -> Fut, Fut: TryFuture<Error = Self::Error>, Self: [Sized][129],

Executes another future after this one resolves successfully. The success value is passed to a closure to create this subsequent future. Read more

§

#### fn or_else<Fut, F>(self, f: F) -> OrElse<Self, Fut, F>

where F: [FnOnce][20](Self::Error) -> Fut, Fut: TryFuture<Ok = Self::Ok>, Self: [Sized][129],

Executes another future if this one resolves to an error. The error value is passed to a closure to create this subsequent future. Read more

§

#### fn inspect_ok<F>(self, f: F) -> InspectOk<Self, F>

where F: [FnOnce][20](&Self::Ok), Self: [Sized][129],

Do something with the success value of a future before passing it on. Read more

§

#### fn inspect_err<F>(self, f: F) -> InspectErr<Self, F>

where F: [FnOnce][20](&Self::Error), Self: [Sized][129],

Do something with the error value of a future before passing it on. Read more

§

#### fn try_flatten(self) -> TryFlatten<Self, Self::Ok>

where Self::Ok: TryFuture<Error = Self::Error>, Self: [Sized][129],

Flatten the execution of this future when the successful result of this future is another future. Read more

§

#### fn try_flatten_stream(self) -> TryFlattenStream<Self>

where Self::Ok: TryStream<Error = Self::Error>, Self: [Sized][129],

Flatten the execution of this future when the successful result of this future is a stream. Read more

§

#### fn unwrap_or_else<F>(self, f: F) -> UnwrapOrElse<Self, F>

where Self: [Sized][129], F: [FnOnce][20](Self::Error) -> Self::Ok,

Unwraps this future’s output, producing a future with this future’s [`Ok`][625] type as its [`Output`][626] type. Read more

§

#### fn into_future(self) -> IntoFuture<Self>

where Self: [Sized][129],

Wraps a [`TryFuture`] into a type that implements [`Future`][215]. Read more

§

#### fn try_poll_unpin( &mut self, cx: &mut [Context][221]<'_>, ) -> [Poll][222]<[Result][67]<Self::Ok, Self::Error>>

where Self: [Unpin][543],

A convenience method for calling [`TryFuture::try_poll`] on [`Unpin`][543] future types.

[Source][627]§

### impl<T, U> [TryInto][628]<U> for T

where U: [TryFrom][617]<T>,

[Source][629]§

#### type [Error][630] = <U as [TryFrom][617]<T>>::[Error][623]

The type returned in the event of a conversion error.

[Source][631]§

#### fn [try_into][632](self) -> [Result][67]<U, <U as [TryFrom][617]<T>>::[Error][623]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][63]<Dispatch>,

Attaches the provided [`Subscriber`][633] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][634] [`Subscriber`][633] to this type, returning a [`WithDispatch`] wrapper. Read more

[Source][635]§

### impl<T> [DeserializeOwned][636] for T

where T: for<'de> [Deserialize][155]<'de>,

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: https://docs.rs/either/1/src/either/lib.rs.html#49
   [4]: https://docs.rs/either/1/src/either/lib.rs.html#165
   [5]: enum.Either.html (enum sqlx::Either)
   [6]: https://docs.rs/either/1/src/either/lib.rs.html#175
   [7]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [8]: https://docs.rs/either/1/src/either/lib.rs.html#191
   [9]: https://docs.rs/either/1/src/either/lib.rs.html#206
   [10]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [11]: https://docs.rs/either/1/src/either/lib.rs.html#224
   [12]: https://docs.rs/either/1/src/either/lib.rs.html#242
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [14]: https://docs.rs/either/1/src/either/lib.rs.html#264
   [15]: https://docs.rs/either/1/src/either/lib.rs.html#270
   [16]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [17]: https://docs.rs/either/1/src/either/lib.rs.html#278
   [18]: https://docs.rs/either/1/src/either/lib.rs.html#298
   [19]: https://docs.rs/either/1/src/either/lib.rs.html#317-319
   [20]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [21]: https://docs.rs/either/1/src/either/lib.rs.html#339-341
   [22]: https://docs.rs/either/1/src/either/lib.rs.html#366-369
   [23]: https://hackage.haskell.org/package/bifunctors-5/docs/Data-Bifunctor.html
   [24]: https://docs.rs/either/1/src/either/lib.rs.html#397-400
   [25]: enum.Either.html#method.map_either (method sqlx::Either::map_either)
   [26]: https://docs.rs/either/1/src/either/lib.rs.html#424-427
   [27]: https://docs.rs/either/1/src/either/lib.rs.html#454-457
   [28]: enum.Either.html#method.either (method sqlx::Either::either)
   [29]: https://docs.rs/either/1/src/either/lib.rs.html#476-478
   [30]: https://docs.rs/either/1/src/either/lib.rs.html#497-499
   [31]: https://docs.rs/either/1/src/either/lib.rs.html#521-524
   [32]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.IntoIterator.html (trait core::iter::traits::collect::IntoIterator)
   [33]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.IntoIter (type core::iter::traits::collect::IntoIterator::IntoIter)
   [34]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item (type core::iter::traits::collect::IntoIterator::Item)
   [35]: enum.Either.html#method.factor_into_iter (method sqlx::Either::factor_into_iter)
   [36]: https://docs.rs/either/1/src/either/lib.rs.html#544-547
   [37]: enum.Either.html#method.factor_iter (method sqlx::Either::factor_iter)
   [38]: https://docs.rs/either/1/src/either/lib.rs.html#573-578
   [39]: enum.Either.html#method.factor_iter_mut (method sqlx::Either::factor_iter_mut)
   [40]: https://docs.rs/either/1/src/either/lib.rs.html#599-602
   [41]: https://docs.rs/either/1/either/iterator/struct.IterEither.html (struct either::iterator::IterEither)
   [42]: enum.Either.html#method.into_iter (method sqlx::Either::into_iter)
   [43]: https://docs.rs/either/1/src/either/lib.rs.html#621-626
   [44]: enum.Either.html#method.iter (method sqlx::Either::iter)
   [45]: https://docs.rs/either/1/src/either/lib.rs.html#647-652
   [46]: enum.Either.html#method.iter_mut (method sqlx::Either::iter_mut)
   [47]: https://docs.rs/either/1/src/either/lib.rs.html#673
   [48]: enum.Either.html#method.left_or_else (method sqlx::Either::left_or_else)
   [49]: https://docs.rs/either/1/src/either/lib.rs.html#692-694
   [50]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [51]: https://docs.rs/either/1/src/either/lib.rs.html#714-716
   [52]: https://docs.rs/either/1/src/either/lib.rs.html#740
   [53]: enum.Either.html#method.right_or_else (method sqlx::Either::right_or_else)
   [54]: https://docs.rs/either/1/src/either/lib.rs.html#759-761
   [55]: https://docs.rs/either/1/src/either/lib.rs.html#781-783
   [56]: https://docs.rs/either/1/src/either/lib.rs.html#810-812
   [57]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [58]: https://docs.rs/either/1/src/either/lib.rs.html#841-843
   [59]: https://docs.rs/either/1/src/either/lib.rs.html#870-872
   [60]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [61]: https://docs.rs/either/1/src/either/lib.rs.html#899-901
   [62]: https://docs.rs/either/1/src/either/lib.rs.html#921-924
   [63]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [64]: https://docs.rs/either/1/src/either/lib.rs.html#930
   [65]: https://docs.rs/either/1/src/either/lib.rs.html#943
   [66]: https://docs.rs/either/1/src/either/lib.rs.html#951
   [67]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [68]: https://docs.rs/either/1/src/either/lib.rs.html#966
   [69]: https://docs.rs/either/1/src/either/lib.rs.html#974
   [70]: https://docs.rs/either/1/src/either/lib.rs.html#989
   [71]: https://docs.rs/either/1/src/either/lib.rs.html#997
   [72]: https://doc.rust-lang.org/1.94.1/std/primitive.tuple.html
   [73]: https://docs.rs/either/1/src/either/lib.rs.html#1010
   [74]: https://docs.rs/either/1/src/either/lib.rs.html#1018
   [75]: https://docs.rs/either/1/src/either/lib.rs.html#1031
   [76]: https://docs.rs/either/1/src/either/lib.rs.html#1039
   [77]: https://docs.rs/either/1/src/either/lib.rs.html#1051
   [78]: https://docs.rs/either/1/src/either/lib.rs.html#1066-1068
   [79]: https://docs.rs/either/1/src/either/lib.rs.html#1077
   [80]: https://docs.rs/either/1/src/either/lib.rs.html#1080-1083
   [81]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [82]: https://docs.rs/either/1/src/either/lib.rs.html#1090-1093
   [83]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [84]: https://docs.rs/either/1/src/either/lib.rs.html#1099
   [85]: https://docs.rs/either/1/src/either/lib.rs.html#1102-1105
   [86]: https://docs.rs/either/1/src/either/lib.rs.html#1112-1115
   [87]: https://docs.rs/either/1/src/either/lib.rs.html#1316-1319
   [88]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsMut.html (trait core::convert::AsMut)
   [89]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html
   [90]: https://docs.rs/either/1/src/either/lib.rs.html#1321
   [91]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsMut.html#tymethod.as_mut
   [92]: https://docs.rs/either/1/src/either/lib.rs.html#1290-1294
   [93]: https://doc.rust-lang.org/1.94.1/core/ffi/c_str/struct.CStr.html (struct core::ffi::c_str::CStr)
   [94]: https://docs.rs/either/1/src/either/lib.rs.html#1285-1289
   [95]: https://doc.rust-lang.org/1.94.1/std/ffi/os_str/struct.OsStr.html (struct std::ffi::os_str::OsStr)
   [96]: https://docs.rs/either/1/src/either/lib.rs.html#1280-1284
   [97]: https://doc.rust-lang.org/1.94.1/std/path/struct.Path.html (struct std::path::Path)
   [98]: https://docs.rs/either/1/src/either/lib.rs.html#1306-1309
   [99]: https://docs.rs/either/1/src/either/lib.rs.html#1311
   [100]: https://docs.rs/either/1/src/either/lib.rs.html#1279
   [101]: https://docs.rs/either/1/src/either/lib.rs.html#1296-1299
   [102]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [103]: https://docs.rs/either/1/src/either/lib.rs.html#1301
   [104]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html#tymethod.as_ref
   [105]: https://docs.rs/either/1/src/either/lib.rs.html#1247-1250
   [106]: https://docs.rs/either/1/src/either/lib.rs.html#1252
   [107]: https://docs.rs/either/1/src/either/lib.rs.html#1199-1202
   [108]: https://doc.rust-lang.org/1.94.1/std/io/trait.BufRead.html (trait std::io::BufRead)
   [109]: https://docs.rs/either/1/src/either/lib.rs.html#1204
   [110]: https://doc.rust-lang.org/1.94.1/std/io/trait.BufRead.html#tymethod.fill_buf
   [111]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [112]: https://doc.rust-lang.org/1.94.1/std/io/error/struct.Error.html (struct std::io::error::Error)
   [113]: https://docs.rs/either/1/src/either/lib.rs.html#1208
   [114]: https://doc.rust-lang.org/1.94.1/std/io/trait.BufRead.html#tymethod.consume
   [115]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [116]: https://docs.rs/either/1/src/either/lib.rs.html#1212
   [117]: https://doc.rust-lang.org/1.94.1/std/io/trait.BufRead.html#method.read_until
   [118]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [119]: https://docs.rs/either/1/src/either/lib.rs.html#1216
   [120]: https://doc.rust-lang.org/1.94.1/std/io/trait.BufRead.html#method.read_line
   [121]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [122]: https://doc.rust-lang.org/1.94.1/src/std/io/mod.rs.html#2435
   [123]: https://doc.rust-lang.org/1.94.1/std/io/trait.BufRead.html#method.has_data_left
   [124]: https://doc.rust-lang.org/1.94.1/src/std/io/mod.rs.html#2559
   [125]: https://doc.rust-lang.org/1.94.1/std/io/trait.BufRead.html#method.skip_until
   [126]: https://doc.rust-lang.org/1.94.1/src/std/io/mod.rs.html#2665-2667
   [127]: https://doc.rust-lang.org/1.94.1/std/io/trait.BufRead.html#method.split
   [128]: https://doc.rust-lang.org/1.94.1/std/io/struct.Split.html (struct std::io::Split)
   [129]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [130]: https://doc.rust-lang.org/1.94.1/src/std/io/mod.rs.html#2702-2704
   [131]: https://doc.rust-lang.org/1.94.1/std/io/trait.BufRead.html#method.lines
   [132]: https://doc.rust-lang.org/1.94.1/std/io/struct.Lines.html (struct std::io::Lines)
   [133]: https://docs.rs/either/1/src/either/lib.rs.html#148
   [134]: https://docs.rs/either/1/src/either/lib.rs.html#149
   [135]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [136]: https://docs.rs/either/1/src/either/lib.rs.html#156
   [137]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [138]: https://docs.rs/either/1/src/either/lib.rs.html#48
   [139]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [140]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [141]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [142]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [143]: https://docs.rs/either/1/src/either/lib.rs.html#1326-1329
   [144]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html (trait core::ops::deref::Deref)
   [145]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#associatedtype.Target (type core::ops::deref::Deref::Target)
   [146]: https://docs.rs/either/1/src/either/lib.rs.html#1331
   [147]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#associatedtype.Target
   [148]: https://docs.rs/either/1/src/either/lib.rs.html#1333
   [149]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#tymethod.deref
   [150]: https://docs.rs/either/1/src/either/lib.rs.html#1338-1341
   [151]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.DerefMut.html (trait core::ops::deref::DerefMut)
   [152]: https://docs.rs/either/1/src/either/lib.rs.html#1343
   [153]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.DerefMut.html#tymethod.deref_mut
   [154]: https://docs.rs/either/1/src/either/lib.rs.html#47
   [155]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html (trait serde_core::de::Deserialize)
   [156]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserialize.html#tymethod.deserialize
   [157]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html (trait serde_core::de::Deserializer)
   [158]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.Deserializer.html#associatedtype.Error (type serde_core::de::Deserializer::Error)
   [159]: https://docs.rs/either/1/src/either/lib.rs.html#1372-1375
   [160]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [161]: https://docs.rs/either/1/src/either/lib.rs.html#1377
   [162]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html#tymethod.fmt
   [163]: https://docs.rs/either/1/src/either/iterator.rs.html#135-138
   [164]: https://doc.rust-lang.org/1.94.1/core/iter/traits/double_ended/trait.DoubleEndedIterator.html (trait core::iter::traits::double_ended::DoubleEndedIterator)
   [165]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html (trait core::iter::traits::iterator::Iterator)
   [166]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item (type core::iter::traits::iterator::Iterator::Item)
   [167]: https://docs.rs/either/1/src/either/iterator.rs.html#140
   [168]: https://doc.rust-lang.org/1.94.1/core/iter/traits/double_ended/trait.DoubleEndedIterator.html#tymethod.next_back
   [169]: https://docs.rs/either/1/src/either/iterator.rs.html#144
   [170]: https://doc.rust-lang.org/1.94.1/core/iter/traits/double_ended/trait.DoubleEndedIterator.html#method.nth_back
   [171]: https://docs.rs/either/1/src/either/iterator.rs.html#148-150
   [172]: https://doc.rust-lang.org/1.94.1/core/iter/traits/double_ended/trait.DoubleEndedIterator.html#method.rfold
   [173]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnMut.html (trait core::ops::function::FnMut)
   [174]: https://docs.rs/either/1/src/either/iterator.rs.html#155-157
   [175]: https://doc.rust-lang.org/1.94.1/core/iter/traits/double_ended/trait.DoubleEndedIterator.html#method.rfind
   [176]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/double_ended.rs.html#138
   [177]: https://doc.rust-lang.org/1.94.1/core/iter/traits/double_ended/trait.DoubleEndedIterator.html#method.advance_back_by
   [178]: https://doc.rust-lang.org/1.94.1/core/num/nonzero/struct.NonZero.html (struct core::num::nonzero::NonZero)
   [179]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/double_ended.rs.html#230-234
   [180]: https://doc.rust-lang.org/1.94.1/core/iter/traits/double_ended/trait.DoubleEndedIterator.html#method.try_rfold
   [181]: https://doc.rust-lang.org/1.94.1/core/ops/try_trait/trait.Try.html (trait core::ops::try_trait::Try)
   [182]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.try_fold (method core::iter::traits::iterator::Iterator::try_fold)
   [183]: https://docs.rs/either/1/src/either/lib.rs.html#1352-1355
   [184]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [185]: https://docs.rs/either/1/src/either/lib.rs.html#1357
   [186]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.source
   [187]: https://docs.rs/either/1/src/either/lib.rs.html#1362
   [188]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.description
   [189]: https://docs.rs/either/1/src/either/lib.rs.html#1367
   [190]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.cause
   [191]: https://doc.rust-lang.org/1.94.1/src/core/error.rs.html#260
   [192]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html#method.provide
   [193]: https://doc.rust-lang.org/1.94.1/core/error/struct.Request.html (struct core::error::Request)
   [194]: https://docs.rs/either/1/src/either/iterator.rs.html#163-166
   [195]: https://doc.rust-lang.org/1.94.1/core/iter/traits/exact_size/trait.ExactSizeIterator.html (trait core::iter::traits::exact_size::ExactSizeIterator)
   [196]: https://docs.rs/either/1/src/either/iterator.rs.html#168
   [197]: https://doc.rust-lang.org/1.94.1/core/iter/traits/exact_size/trait.ExactSizeIterator.html#method.len
   [198]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/exact_size.rs.html#148
   [199]: https://doc.rust-lang.org/1.94.1/core/iter/traits/exact_size/trait.ExactSizeIterator.html#method.is_empty
   [200]: https://docs.rs/either/1/src/either/iterator.rs.html#29-32
   [201]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.Extend.html (trait core::iter::traits::collect::Extend)
   [202]: https://docs.rs/either/1/src/either/iterator.rs.html#34-36
   [203]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.Extend.html#tymethod.extend
   [204]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/collect.rs.html#417
   [205]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.Extend.html#method.extend_one
   [206]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/collect.rs.html#425
   [207]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.Extend.html#method.extend_reserve
   [208]: https://docs.rs/either/1/src/either/lib.rs.html#1132
   [209]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [210]: https://docs.rs/either/1/src/either/lib.rs.html#1133
   [211]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [212]: https://docs.rs/either/1/src/either/lib.rs.html#1122
   [213]: https://docs.rs/either/1/src/either/lib.rs.html#1123
   [214]: https://docs.rs/either/1/src/either/lib.rs.html#1142-1145
   [215]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [216]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html#associatedtype.Output (type core::future::future::Future::Output)
   [217]: https://docs.rs/either/1/src/either/lib.rs.html#1147
   [218]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html#associatedtype.Output
   [219]: https://docs.rs/either/1/src/either/lib.rs.html#1149-1152
   [220]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html#tymethod.poll
   [221]: https://doc.rust-lang.org/1.94.1/core/task/wake/struct.Context.html (struct core::task::wake::Context)
   [222]: https://doc.rust-lang.org/1.94.1/core/task/poll/enum.Poll.html (enum core::task::poll::Poll)
   [223]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html (trait core::hash::Hash)
   [224]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#tymethod.hash
   [225]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hasher.html (trait core::hash::Hasher)
   [226]: https://doc.rust-lang.org/1.94.1/src/core/hash/mod.rs.html#235-237
   [227]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#method.hash_slice
   [228]: https://docs.rs/either/1/src/either/iterator.rs.html#43-46
   [229]: https://docs.rs/either/1/src/either/iterator.rs.html#48
   [230]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item
   [231]: https://docs.rs/either/1/src/either/iterator.rs.html#50
   [232]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#tymethod.next
   [233]: https://docs.rs/either/1/src/either/iterator.rs.html#54
   [234]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.size_hint
   [235]: https://docs.rs/either/1/src/either/iterator.rs.html#58-60
   [236]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.fold
   [237]: https://docs.rs/either/1/src/either/iterator.rs.html#65-67
   [238]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.for_each
   [239]: https://docs.rs/either/1/src/either/iterator.rs.html#72
   [240]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.count
   [241]: https://docs.rs/either/1/src/either/iterator.rs.html#76
   [242]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.last
   [243]: https://docs.rs/either/1/src/either/iterator.rs.html#80
   [244]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.nth
   [245]: https://docs.rs/either/1/src/either/iterator.rs.html#84-86
   [246]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.collect
   [247]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.FromIterator.html (trait core::iter::traits::collect::FromIterator)
   [248]: https://docs.rs/either/1/src/either/iterator.rs.html#91-94
   [249]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.partition
   [250]: https://docs.rs/either/1/src/either/iterator.rs.html#99-101
   [251]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.all
   [252]: https://docs.rs/either/1/src/either/iterator.rs.html#106-108
   [253]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.any
   [254]: https://docs.rs/either/1/src/either/iterator.rs.html#113-115
   [255]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.find
   [256]: https://docs.rs/either/1/src/either/iterator.rs.html#120-122
   [257]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.find_map
   [258]: https://docs.rs/either/1/src/either/iterator.rs.html#127-129
   [259]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.position
   [260]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#110-114
   [261]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.next_chunk
   [262]: https://doc.rust-lang.org/1.94.1/std/primitive.array.html
   [263]: https://doc.rust-lang.org/1.94.1/core/array/iter/struct.IntoIter.html (struct core::array::iter::IntoIter)
   [264]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#301
   [265]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.advance_by
   [266]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#428-430
   [267]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.step_by
   [268]: https://doc.rust-lang.org/1.94.1/core/iter/adapters/step_by/struct.StepBy.html (struct core::iter::adapters::step_by::StepBy)
   [269]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#499-502
   [270]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.chain
   [271]: https://doc.rust-lang.org/1.94.1/core/iter/adapters/chain/struct.Chain.html (struct core::iter::adapters::chain::Chain)
   [272]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#617-620
   [273]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.zip
   [274]: https://doc.rust-lang.org/1.94.1/core/iter/adapters/zip/struct.Zip.html (struct core::iter::adapters::zip::Zip)
   [275]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#660-663
   [276]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.intersperse
   [277]: https://doc.rust-lang.org/1.94.1/core/iter/adapters/intersperse/struct.Intersperse.html (struct core::iter::adapters::intersperse::Intersperse)
   [278]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#718-721
   [279]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.intersperse_with
   [280]: https://doc.rust-lang.org/1.94.1/core/iter/adapters/intersperse/struct.IntersperseWith.html (struct core::iter::adapters::intersperse::IntersperseWith)
   [281]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#777-780
   [282]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.map
   [283]: https://doc.rust-lang.org/1.94.1/core/iter/adapters/map/struct.Map.html (struct core::iter::adapters::map::Map)
   [284]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#897-900
   [285]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.filter
   [286]: https://doc.rust-lang.org/1.94.1/core/iter/adapters/filter/struct.Filter.html (struct core::iter::adapters::filter::Filter)
   [287]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#942-945
   [288]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.filter_map
   [289]: https://doc.rust-lang.org/1.94.1/core/iter/adapters/filter_map/struct.FilterMap.html (struct core::iter::adapters::filter_map::FilterMap)
   [290]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#989-991
   [291]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.enumerate
   [292]: https://doc.rust-lang.org/1.94.1/core/iter/adapters/enumerate/struct.Enumerate.html (struct core::iter::adapters::enumerate::Enumerate)
   [293]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#1060-1062
   [294]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.peekable
   [295]: https://doc.rust-lang.org/1.94.1/core/iter/adapters/peekable/struct.Peekable.html (struct core::iter::adapters::peekable::Peekable)
   [296]: https://doc.rust-lang.org/1.94.1/core/iter/adapters/peekable/struct.Peekable.html#method.peek (method core::iter::adapters::peekable::Peekable::peek)
   [297]: https://doc.rust-lang.org/1.94.1/core/iter/adapters/peekable/struct.Peekable.html#method.peek_mut (method core::iter::adapters::peekable::Peekable::peek_mut)
   [298]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#1125-1128
   [299]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.skip_while
   [300]: https://doc.rust-lang.org/1.94.1/core/iter/adapters/skip_while/struct.SkipWhile.html (struct core::iter::adapters::skip_while::SkipWhile)
   [301]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.skip (method core::iter::traits::iterator::Iterator::skip)
   [302]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#1203-1206
   [303]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.take_while
   [304]: https://doc.rust-lang.org/1.94.1/core/iter/adapters/take_while/struct.TakeWhile.html (struct core::iter::adapters::take_while::TakeWhile)
   [305]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#1291-1294
   [306]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.map_while
   [307]: https://doc.rust-lang.org/1.94.1/core/iter/adapters/map_while/struct.MapWhile.html (struct core::iter::adapters::map_while::MapWhile)
   [308]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#1320-1322
   [309]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.skip
   [310]: https://doc.rust-lang.org/1.94.1/core/iter/adapters/skip/struct.Skip.html (struct core::iter::adapters::skip::Skip)
   [311]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#1392-1394
   [312]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.take
   [313]: https://doc.rust-lang.org/1.94.1/core/iter/adapters/take/struct.Take.html (struct core::iter::adapters::take::Take)
   [314]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#1439-1442
   [315]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.scan
   [316]: https://doc.rust-lang.org/1.94.1/core/iter/adapters/scan/struct.Scan.html (struct core::iter::adapters::scan::Scan)
   [317]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.fold (method core::iter::traits::iterator::Iterator::fold)
   [318]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#1477-1481
   [319]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.flat_map
   [320]: https://doc.rust-lang.org/1.94.1/core/iter/adapters/flatten/struct.FlatMap.html (struct core::iter::adapters::flatten::FlatMap)
   [321]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#1561-1564
   [322]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.flatten
   [323]: https://doc.rust-lang.org/1.94.1/core/iter/adapters/flatten/struct.Flatten.html (struct core::iter::adapters::flatten::Flatten)
   [324]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#1717-1720
   [325]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.map_windows
   [326]: https://doc.rust-lang.org/1.94.1/core/iter/adapters/map_windows/struct.MapWindows.html (struct core::iter::adapters::map_windows::MapWindows)
   [327]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.windows (method slice::windows)
   [328]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#1779-1781
   [329]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.fuse
   [330]: https://doc.rust-lang.org/1.94.1/core/iter/adapters/fuse/struct.Fuse.html (struct core::iter::adapters::fuse::Fuse)
   [331]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html#variant.None (variant core::option::Option::None)
   [332]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#1863-1866
   [333]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.inspect
   [334]: https://doc.rust-lang.org/1.94.1/core/iter/adapters/inspect/struct.Inspect.html (struct core::iter::adapters::inspect::Inspect)
   [335]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#1900-1902
   [336]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.by_ref
   [337]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#2109-2113
   [338]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.try_collect
   [339]: https://doc.rust-lang.org/1.94.1/core/ops/try_trait/trait.Try.html#associatedtype.Residual (type core::ops::try_trait::Try::Residual)
   [340]: https://doc.rust-lang.org/1.94.1/core/ops/try_trait/trait.Residual.html (trait core::ops::try_trait::Residual)
   [341]: https://doc.rust-lang.org/1.94.1/core/ops/try_trait/trait.Residual.html#associatedtype.TryType (type core::ops::try_trait::Residual::TryType)
   [342]: https://doc.rust-lang.org/1.94.1/core/ops/try_trait/trait.Try.html#associatedtype.Output (type core::ops::try_trait::Try::Output)
   [343]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#2181-2183
   [344]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.collect_into
   [345]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#2275-2278
   [346]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.partition_in_place
   [347]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#2332-2335
   [348]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.is_partitioned
   [349]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#2426-2430
   [350]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.try_fold
   [351]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#2484-2488
   [352]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.try_for_each
   [353]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#2640-2643
   [354]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.reduce
   [355]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#2711-2717
   [356]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.try_reduce
   [357]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#2984-2990
   [358]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.try_find
   [359]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#3132-3135
   [360]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.rposition
   [361]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#3181-3184
   [362]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.max
   [363]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html (trait core::cmp::Ord)
   [364]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#3217-3220
   [365]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.min
   [366]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#3239-3242
   [367]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.max_by_key
   [368]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#3272-3275
   [369]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.max_by
   [370]: https://doc.rust-lang.org/1.94.1/core/cmp/enum.Ordering.html (enum core::cmp::Ordering)
   [371]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#3299-3302
   [372]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.min_by_key
   [373]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#3332-3335
   [374]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.min_by
   [375]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#3369-3371
   [376]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.rev
   [377]: https://doc.rust-lang.org/1.94.1/core/iter/adapters/rev/struct.Rev.html (struct core::iter::adapters::rev::Rev)
   [378]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#3405-3409
   [379]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.unzip
   [380]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#3436-3439
   [381]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.copied
   [382]: https://doc.rust-lang.org/1.94.1/core/iter/adapters/copied/struct.Copied.html (struct core::iter::adapters::copied::Copied)
   [383]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#3484-3487
   [384]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.cloned
   [385]: https://doc.rust-lang.org/1.94.1/core/iter/adapters/cloned/struct.Cloned.html (struct core::iter::adapters::cloned::Cloned)
   [386]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone (method core::clone::Clone::clone)
   [387]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#3515-3517
   [388]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.cycle
   [389]: https://doc.rust-lang.org/1.94.1/core/iter/adapters/cycle/struct.Cycle.html (struct core::iter::adapters::cycle::Cycle)
   [390]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#3558-3560
   [391]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.array_chunks
   [392]: https://doc.rust-lang.org/1.94.1/core/iter/adapters/array_chunks/struct.ArrayChunks.html (struct core::iter::adapters::array_chunks::ArrayChunks)
   [393]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#3594-3597
   [394]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.sum
   [395]: https://doc.rust-lang.org/1.94.1/core/iter/traits/accum/trait.Sum.html (trait core::iter::traits::accum::Sum)
   [396]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#3626-3629
   [397]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.product
   [398]: https://doc.rust-lang.org/1.94.1/core/iter/traits/accum/trait.Product.html (trait core::iter::traits::accum::Product)
   [399]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#3647-3651
   [400]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.cmp
   [401]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#lexicographical-comparison (trait core::cmp::Ord)
   [402]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#3674-3678
   [403]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.cmp_by
   [404]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#3730-3734
   [405]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.partial_cmp
   [406]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html (trait core::cmp::PartialOrd)
   [407]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#3766-3770
   [408]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.partial_cmp_by
   [409]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#3799-3803
   [410]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.eq
   [411]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [412]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#3822-3826
   [413]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.eq_by
   [414]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#3851-3855
   [415]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.ne
   [416]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#3872-3876
   [417]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.lt
   [418]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#3893-3897
   [419]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.le
   [420]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#3914-3918
   [421]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.gt
   [422]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#3935-3939
   [423]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.ge
   [424]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#3964-3967
   [425]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.is_sorted
   [426]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#3990-3993
   [427]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.is_sorted_by
   [428]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/iterator.rs.html#4034-4038
   [429]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.is_sorted_by_key
   [430]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#tymethod.cmp
   [431]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1025-1027
   [432]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#method.max
   [433]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1064-1066
   [434]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#method.min
   [435]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1090-1092
   [436]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html#method.clamp
   [437]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [438]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [439]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [440]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp
   [441]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1402
   [442]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.lt
   [443]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1420
   [444]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.le
   [445]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1438
   [446]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.gt
   [447]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#1456
   [448]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#method.ge
   [449]: https://docs.rs/either/1/src/either/lib.rs.html#1161-1164
   [450]: https://doc.rust-lang.org/1.94.1/std/io/trait.Read.html (trait std::io::Read)
   [451]: https://docs.rs/either/1/src/either/lib.rs.html#1166
   [452]: https://doc.rust-lang.org/1.94.1/std/io/trait.Read.html#tymethod.read
   [453]: https://docs.rs/either/1/src/either/lib.rs.html#1170
   [454]: https://doc.rust-lang.org/1.94.1/std/io/trait.Read.html#method.read_exact
   [455]: https://docs.rs/either/1/src/either/lib.rs.html#1174
   [456]: https://doc.rust-lang.org/1.94.1/std/io/trait.Read.html#method.read_to_end
   [457]: https://docs.rs/either/1/src/either/lib.rs.html#1178
   [458]: https://doc.rust-lang.org/1.94.1/std/io/trait.Read.html#method.read_to_string
   [459]: https://doc.rust-lang.org/1.94.1/src/std/io/mod.rs.html#825
   [460]: https://doc.rust-lang.org/1.94.1/std/io/trait.Read.html#method.read_vectored
   [461]: https://doc.rust-lang.org/1.94.1/std/io/struct.IoSliceMut.html (struct std::io::IoSliceMut)
   [462]: https://doc.rust-lang.org/1.94.1/src/std/io/mod.rs.html#838
   [463]: https://doc.rust-lang.org/1.94.1/std/io/trait.Read.html#method.is_read_vectored
   [464]: https://doc.rust-lang.org/1.94.1/src/std/io/mod.rs.html#1057
   [465]: https://doc.rust-lang.org/1.94.1/std/io/trait.Read.html#method.read_buf
   [466]: https://doc.rust-lang.org/1.94.1/core/io/borrowed_buf/struct.BorrowedCursor.html (struct core::io::borrowed_buf::BorrowedCursor)
   [467]: https://doc.rust-lang.org/1.94.1/src/std/io/mod.rs.html#1080
   [468]: https://doc.rust-lang.org/1.94.1/std/io/trait.Read.html#method.read_buf_exact
   [469]: https://doc.rust-lang.org/1.94.1/src/std/io/mod.rs.html#1119-1121
   [470]: https://doc.rust-lang.org/1.94.1/std/io/trait.Read.html#method.by_ref
   [471]: https://doc.rust-lang.org/1.94.1/src/std/io/mod.rs.html#1162-1164
   [472]: https://doc.rust-lang.org/1.94.1/std/io/trait.Read.html#method.bytes
   [473]: https://doc.rust-lang.org/1.94.1/std/io/struct.Bytes.html (struct std::io::Bytes)
   [474]: https://doc.rust-lang.org/1.94.1/src/std/io/mod.rs.html#1200-1202
   [475]: https://doc.rust-lang.org/1.94.1/std/io/trait.Read.html#method.chain
   [476]: https://doc.rust-lang.org/1.94.1/std/io/struct.Chain.html (struct std::io::Chain)
   [477]: https://doc.rust-lang.org/1.94.1/src/std/io/mod.rs.html#1239-1241
   [478]: https://doc.rust-lang.org/1.94.1/std/io/trait.Read.html#method.take
   [479]: https://doc.rust-lang.org/1.94.1/std/primitive.u64.html
   [480]: https://doc.rust-lang.org/1.94.1/std/io/struct.Take.html (struct std::io::Take)
   [481]: https://doc.rust-lang.org/1.94.1/src/std/io/mod.rs.html#1274-1276
   [482]: https://doc.rust-lang.org/1.94.1/std/io/trait.Read.html#method.read_array
   [483]: https://docs.rs/either/1/src/either/lib.rs.html#1187-1190
   [484]: https://doc.rust-lang.org/1.94.1/std/io/trait.Seek.html (trait std::io::Seek)
   [485]: https://docs.rs/either/1/src/either/lib.rs.html#1192
   [486]: https://doc.rust-lang.org/1.94.1/std/io/trait.Seek.html#tymethod.seek
   [487]: https://doc.rust-lang.org/1.94.1/std/io/enum.SeekFrom.html (enum std::io::SeekFrom)
   [488]: https://doc.rust-lang.org/1.94.1/src/std/io/mod.rs.html#2104
   [489]: https://doc.rust-lang.org/1.94.1/std/io/trait.Seek.html#method.rewind
   [490]: https://doc.rust-lang.org/1.94.1/src/std/io/mod.rs.html#2144
   [491]: https://doc.rust-lang.org/1.94.1/std/io/trait.Seek.html#method.stream_len
   [492]: https://doc.rust-lang.org/1.94.1/src/std/io/mod.rs.html#2172
   [493]: https://doc.rust-lang.org/1.94.1/std/io/trait.Seek.html#method.stream_position
   [494]: https://doc.rust-lang.org/1.94.1/src/std/io/mod.rs.html#2200
   [495]: https://doc.rust-lang.org/1.94.1/std/io/trait.Seek.html#method.seek_relative
   [496]: https://doc.rust-lang.org/1.94.1/std/primitive.i64.html
   [497]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [498]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html#tymethod.serialize
   [499]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html (trait serde_core::ser::Serializer)
   [500]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Ok (type serde_core::ser::Serializer::Ok)
   [501]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serializer.html#associatedtype.Error (type serde_core::ser::Serializer::Error)
   [502]: https://docs.rs/either/1/src/either/lib.rs.html#1225-1228
   [503]: https://doc.rust-lang.org/1.94.1/std/io/trait.Write.html (trait std::io::Write)
   [504]: https://docs.rs/either/1/src/either/lib.rs.html#1230
   [505]: https://doc.rust-lang.org/1.94.1/std/io/trait.Write.html#tymethod.write
   [506]: https://docs.rs/either/1/src/either/lib.rs.html#1234
   [507]: https://doc.rust-lang.org/1.94.1/std/io/trait.Write.html#method.write_all
   [508]: https://docs.rs/either/1/src/either/lib.rs.html#1238
   [509]: https://doc.rust-lang.org/1.94.1/std/io/trait.Write.html#method.write_fmt
   [510]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Arguments.html (struct core::fmt::Arguments)
   [511]: https://docs.rs/either/1/src/either/lib.rs.html#1242
   [512]: https://doc.rust-lang.org/1.94.1/std/io/trait.Write.html#tymethod.flush
   [513]: https://doc.rust-lang.org/1.94.1/src/std/io/mod.rs.html#1798
   [514]: https://doc.rust-lang.org/1.94.1/std/io/trait.Write.html#method.write_vectored
   [515]: https://doc.rust-lang.org/1.94.1/std/io/struct.IoSlice.html (struct std::io::IoSlice)
   [516]: https://doc.rust-lang.org/1.94.1/std/io/trait.Write.html#tymethod.write (method std::io::Write::write)
   [517]: https://doc.rust-lang.org/1.94.1/src/std/io/mod.rs.html#1813
   [518]: https://doc.rust-lang.org/1.94.1/std/io/trait.Write.html#method.is_write_vectored
   [519]: https://doc.rust-lang.org/1.94.1/std/io/trait.Write.html#method.write_vectored (method std::io::Write::write_vectored)
   [520]: https://doc.rust-lang.org/1.94.1/src/std/io/mod.rs.html#1937
   [521]: https://doc.rust-lang.org/1.94.1/std/io/trait.Write.html#method.write_all_vectored
   [522]: https://doc.rust-lang.org/1.94.1/src/std/io/mod.rs.html#2020-2022
   [523]: https://doc.rust-lang.org/1.94.1/std/io/trait.Write.html#method.by_ref
   [524]: https://docs.rs/either/1/src/either/lib.rs.html#1382-1385
   [525]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Write.html (trait core::fmt::Write)
   [526]: https://docs.rs/either/1/src/either/lib.rs.html#1387
   [527]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Write.html#tymethod.write_str
   [528]: https://docs.rs/either/1/src/either/lib.rs.html#1391
   [529]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Write.html#method.write_char
   [530]: https://doc.rust-lang.org/1.94.1/std/primitive.char.html
   [531]: https://doc.rust-lang.org/1.94.1/std/primitive.char.html (primitive char)
   [532]: https://docs.rs/either/1/src/either/lib.rs.html#1395
   [533]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Write.html#method.write_fmt
   [534]: https://doc.rust-lang.org/1.94.1/core/macro.write.html (macro core::write)
   [535]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [536]: https://docs.rs/either/1/src/either/iterator.rs.html#173-176
   [537]: https://doc.rust-lang.org/1.94.1/core/iter/traits/marker/trait.FusedIterator.html (trait core::iter::traits::marker::FusedIterator)
   [538]: https://doc.rust-lang.org/1.94.1/core/marker/trait.StructuralPartialEq.html (trait core::marker::StructuralPartialEq)
   [539]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [540]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [541]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [542]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [543]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [544]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [545]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [546]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [547]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [548]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [549]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [550]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [551]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [552]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [553]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [554]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [555]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [556]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [557]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [558]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [559]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [560]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [561]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [562]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [563]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [564]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [565]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [566]: futures_core::future::TryFuture
   [567]: super::Span::current()
   [568]: crate::Span
   [569]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [570]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [571]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [572]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [573]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [574]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [575]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [576]: enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [577]: enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [578]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [579]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [580]: https://doc.rust-lang.org/1.94.1/src/core/future/into_future.rs.html#138
   [581]: https://doc.rust-lang.org/1.94.1/core/future/into_future/trait.IntoFuture.html (trait core::future::into_future::IntoFuture)
   [582]: https://doc.rust-lang.org/1.94.1/src/core/future/into_future.rs.html#139
   [583]: https://doc.rust-lang.org/1.94.1/core/future/into_future/trait.IntoFuture.html#associatedtype.Output
   [584]: https://doc.rust-lang.org/1.94.1/src/core/future/into_future.rs.html#140
   [585]: https://doc.rust-lang.org/1.94.1/core/future/into_future/trait.IntoFuture.html#associatedtype.IntoFuture
   [586]: https://doc.rust-lang.org/1.94.1/src/core/future/into_future.rs.html#142
   [587]: https://doc.rust-lang.org/1.94.1/core/future/into_future/trait.IntoFuture.html#tymethod.into_future
   [588]: https://doc.rust-lang.org/1.94.1/core/future/into_future/trait.IntoFuture.html#associatedtype.IntoFuture (type core::future::into_future::IntoFuture::IntoFuture)
   [589]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/collect.rs.html#314
   [590]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/collect.rs.html#315
   [591]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item
   [592]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/collect.rs.html#316
   [593]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.IntoIter
   [594]: https://doc.rust-lang.org/1.94.1/src/core/iter\traits/collect.rs.html#319
   [595]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter
   [596]: https://doc.rust-lang.org/1.94.1/src/core/ops/deref.rs.html#378-380
   [597]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Receiver.html (trait core::ops::deref::Receiver)
   [598]: https://doc.rust-lang.org/1.94.1/src/core/ops/deref.rs.html#382
   [599]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Receiver.html#associatedtype.Target
   [600]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [601]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [602]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [603]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [604]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [605]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [606]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [607]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [608]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [609]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [610]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [611]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [612]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2893
   [613]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html (trait alloc::string::ToString)
   [614]: https://doc.rust-lang.org/1.94.1/src/alloc/string.rs.html#2895
   [615]: https://doc.rust-lang.org/1.94.1/alloc/string/trait.ToString.html#tymethod.to_string
   [616]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [617]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [618]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [619]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [620]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [621]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [622]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [623]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [624]: TryFuture::Error
   [625]: TryFuture::Ok
   [626]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html#associatedtype.Output (associated type core::future::future::Future::Output)
   [627]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [628]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [629]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [630]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [631]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [632]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [633]: super::Subscriber
   [634]: dispatcher#setting-the-default-subscriber
   [635]: https://docs.rs/serde_core/1.0.228/src/serde_core/de/mod.rs.html#633
   [636]: https://docs.rs/serde_core/1.0.228/serde_core/de/trait.DeserializeOwned.html (trait serde_core::de::DeserializeOwned)

