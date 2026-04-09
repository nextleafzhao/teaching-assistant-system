## SqliteOwnedBuf

## [sqlx][1]0.8.6

## SqliteOwnedBuf

### Methods from Deref<Target=[u8]>

  * align_to
  * align_to_mut
  * array_windows
  * as_array
  * as_ascii
  * as_ascii_unchecked
  * as_chunks
  * as_chunks_mut
  * as_chunks_unchecked
  * as_chunks_unchecked_mut
  * as_mut_array
  * as_mut_ptr
  * as_mut_ptr_range
  * as_mut_slice
  * as_ptr
  * as_ptr_range
  * as_rchunks
  * as_rchunks_mut
  * as_simd
  * as_simd_mut
  * as_slice
  * binary_search
  * binary_search_by
  * binary_search_by_key
  * chunk_by
  * chunk_by_mut
  * chunks
  * chunks_exact
  * chunks_exact_mut
  * chunks_mut
  * clone_from_slice
  * concat
  * connect
  * contains
  * copy_from_slice
  * copy_within
  * element_offset
  * ends_with
  * eq_ignore_ascii_case
  * escape_ascii
  * fill
  * fill_with
  * first
  * first_chunk
  * first_chunk_mut
  * first_mut
  * get
  * get_disjoint_mut
  * get_disjoint_unchecked_mut
  * get_mut
  * get_unchecked
  * get_unchecked_mut
  * is_ascii
  * is_empty
  * is_sorted
  * is_sorted_by
  * is_sorted_by_key
  * iter
  * iter_mut
  * join
  * last
  * last_chunk
  * last_chunk_mut
  * last_mut
  * len
  * make_ascii_lowercase
  * make_ascii_uppercase
  * partial_sort_unstable
  * partial_sort_unstable_by
  * partial_sort_unstable_by_key
  * partition_dedup
  * partition_dedup_by
  * partition_dedup_by_key
  * partition_point
  * rchunks
  * rchunks_exact
  * rchunks_exact_mut
  * rchunks_mut
  * repeat
  * reverse
  * rotate_left
  * rotate_right
  * rsplit
  * rsplit_mut
  * rsplit_once
  * rsplitn
  * rsplitn_mut
  * select_nth_unstable
  * select_nth_unstable_by
  * select_nth_unstable_by_key
  * sort
  * sort_by
  * sort_by_cached_key
  * sort_by_key
  * sort_unstable
  * sort_unstable_by
  * sort_unstable_by_key
  * split
  * split_at
  * split_at_checked
  * split_at_mut
  * split_at_mut_checked
  * split_at_mut_unchecked
  * split_at_unchecked
  * split_first
  * split_first_chunk
  * split_first_chunk_mut
  * split_first_mut
  * split_inclusive
  * split_inclusive_mut
  * split_last
  * split_last_chunk
  * split_last_chunk_mut
  * split_last_mut
  * split_mut
  * split_off
  * split_off_first
  * split_off_first_mut
  * split_off_last
  * split_off_last_mut
  * split_off_mut
  * split_once
  * splitn
  * splitn_mut
  * starts_with
  * strip_circumfix
  * strip_prefix
  * strip_suffix
  * subslice_range
  * swap
  * swap_unchecked
  * swap_with_slice
  * to_ascii_lowercase
  * to_ascii_uppercase
  * to_vec
  * to_vec_in
  * trim_ascii
  * trim_ascii_end
  * trim_ascii_start
  * trim_prefix
  * trim_suffix
  * utf8_chunks
  * windows



### Trait Implementations

  * AsMut<[u8]>
  * AsRef<[u8]>
  * Debug
  * Deref
  * DerefMut
  * Drop
  * Send
  * Sync
  * TryFrom<&[u8]>



### Auto Trait Implementations

  * Freeze
  * RefUnwindSafe
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
  * Receiver
  * Same
  * TryFrom<U>
  * TryInto<U>
  * WithSubscriber



## [In sqlx::sqlite][2]

[sqlx][3]::[sqlite][2]

# Struct SqliteOwnedBuf Copy item path
[code]
    pub struct SqliteOwnedBuf { /* private fields */ }
[/code]

Expand description

Memory buffer owned and allocated by SQLite. Freed on drop.

Intended primarily for use with [`SqliteConnection::serialize()`][4] and [`SqliteConnection::deserialize()`][5].

Can be created from `&[u8]` using the `TryFrom` impl. The slice must not be empty.

## Methods from [Deref][6]<Target = [[u8][7]]>§

1.23.0 · [Source][8]

#### pub fn is_ascii(&self) -> [bool][9]

Checks if all bytes in this slice are within the ASCII range.

An empty slice returns `true`.

[Source][10]

#### pub fn as_ascii(&self) -> [Option][11]<&[[AsciiChar][12]]>

🔬This is a nightly-only experimental API. (`ascii_char`)

If this slice [`is_ascii`][13], returns it as a slice of [ASCII characters][12], otherwise returns `None`.

[Source][14]

#### pub unsafe fn as_ascii_unchecked(&self) -> &[[AsciiChar][12]]

🔬This is a nightly-only experimental API. (`ascii_char`)

Converts this slice of bytes into a slice of ASCII characters, without checking whether they’re valid.

##### §Safety

Every byte in the slice must be in `0..=127`, or else this is UB.

1.23.0 · [Source][15]

#### pub fn eq_ignore_ascii_case(&self, other: &[[u8][7]]) -> [bool][9]

Checks that two slices are an ASCII case-insensitive match.

Same as `to_ascii_lowercase(a) == to_ascii_lowercase(b)`, but without allocating and copying temporaries.

1.23.0 · [Source][16]

#### pub fn make_ascii_uppercase(&mut self)

Converts this slice to its ASCII upper case equivalent in-place.

ASCII letters ‘a’ to ‘z’ are mapped to ‘A’ to ‘Z’, but non-ASCII letters are unchanged.

To return a new uppercased value without modifying the existing one, use `to_ascii_uppercase`.

1.23.0 · [Source][17]

#### pub fn make_ascii_lowercase(&mut self)

Converts this slice to its ASCII lower case equivalent in-place.

ASCII letters ‘A’ to ‘Z’ are mapped to ‘a’ to ‘z’, but non-ASCII letters are unchanged.

To return a new lowercased value without modifying the existing one, use `to_ascii_lowercase`.

1.60.0 · [Source][18]

#### pub fn escape_ascii(&self) -> [EscapeAscii][19]<'_>

Returns an iterator that produces an escaped version of this slice, treating it as an ASCII string.

##### §Examples
[code] 
    let s = b"0\t\r\n'\"\\\x9d";
    let escaped = s.escape_ascii().to_string();
    assert_eq!(escaped, "0\\t\\r\\n\\'\\\"\\\\\\x9d");
[/code]

1.80.0 · [Source][20]

#### pub fn trim_ascii_start(&self) -> &[[u8][7]] ⓘ

Returns a byte slice with leading ASCII whitespace bytes removed.

‘Whitespace’ refers to the definition used by [`u8::is_ascii_whitespace`][21].

##### §Examples
[code] 
    assert_eq!(b" \t hello world\n".trim_ascii_start(), b"hello world\n");
    assert_eq!(b"  ".trim_ascii_start(), b"");
    assert_eq!(b"".trim_ascii_start(), b"");
[/code]

1.80.0 · [Source][22]

#### pub fn trim_ascii_end(&self) -> &[[u8][7]] ⓘ

Returns a byte slice with trailing ASCII whitespace bytes removed.

‘Whitespace’ refers to the definition used by [`u8::is_ascii_whitespace`][21].

##### §Examples
[code] 
    assert_eq!(b"\r hello world\n ".trim_ascii_end(), b"\r hello world");
    assert_eq!(b"  ".trim_ascii_end(), b"");
    assert_eq!(b"".trim_ascii_end(), b"");
[/code]

1.80.0 · [Source][23]

#### pub fn trim_ascii(&self) -> &[[u8][7]] ⓘ

Returns a byte slice with leading and trailing ASCII whitespace bytes removed.

‘Whitespace’ refers to the definition used by [`u8::is_ascii_whitespace`][21].

##### §Examples
[code] 
    assert_eq!(b"\r hello world\n ".trim_ascii(), b"hello world");
    assert_eq!(b"  ".trim_ascii(), b"");
    assert_eq!(b"".trim_ascii(), b"");
[/code]

1.0.0 · [Source][24]

#### pub fn len(&self) -> [usize][25]

Returns the number of elements in the slice.

##### §Examples
[code] 
    let a = [1, 2, 3];
    assert_eq!(a.len(), 3);
[/code]

1.0.0 · [Source][26]

#### pub fn is_empty(&self) -> [bool][9]

Returns `true` if the slice has a length of 0.

##### §Examples
[code] 
    let a = [1, 2, 3];
    assert!(!a.is_empty());
    
    let b: &[i32] = &[];
    assert!(b.is_empty());
[/code]

1.0.0 · [Source][27]

#### pub fn first(&self) -> [Option][11]<[&T][28]>

Returns the first element of the slice, or `None` if it is empty.

##### §Examples
[code] 
    let v = [10, 40, 30];
    assert_eq!(Some(&10), v.first());
    
    let w: &[i32] = &[];
    assert_eq!(None, w.first());
[/code]

1.0.0 · [Source][29]

#### pub fn first_mut(&mut self) -> [Option][11]<[&mut T][28]>

Returns a mutable reference to the first element of the slice, or `None` if it is empty.

##### §Examples
[code] 
    let x = &mut [0, 1, 2];
    
    if let Some(first) = x.first_mut() {
        *first = 5;
    }
    assert_eq!(x, &[5, 1, 2]);
    
    let y: &mut [i32] = &mut [];
    assert_eq!(None, y.first_mut());
[/code]

1.5.0 · [Source][30]

#### pub fn split_first(&self) -> [Option][11]<([&T][28], &[[T]][31])>

Returns the first and all the rest of the elements of the slice, or `None` if it is empty.

##### §Examples
[code] 
    let x = &[0, 1, 2];
    
    if let Some((first, elements)) = x.split_first() {
        assert_eq!(first, &0);
        assert_eq!(elements, &[1, 2]);
    }
[/code]

1.5.0 · [Source][32]

#### pub fn split_first_mut(&mut self) -> [Option][11]<([&mut T][28], &mut [[T]][31])>

Returns the first and all the rest of the elements of the slice, or `None` if it is empty.

##### §Examples
[code] 
    let x = &mut [0, 1, 2];
    
    if let Some((first, elements)) = x.split_first_mut() {
        *first = 3;
        elements[0] = 4;
        elements[1] = 5;
    }
    assert_eq!(x, &[3, 4, 5]);
[/code]

1.5.0 · [Source][33]

#### pub fn split_last(&self) -> [Option][11]<([&T][28], &[[T]][31])>

Returns the last and all the rest of the elements of the slice, or `None` if it is empty.

##### §Examples
[code] 
    let x = &[0, 1, 2];
    
    if let Some((last, elements)) = x.split_last() {
        assert_eq!(last, &2);
        assert_eq!(elements, &[0, 1]);
    }
[/code]

1.5.0 · [Source][34]

#### pub fn split_last_mut(&mut self) -> [Option][11]<([&mut T][28], &mut [[T]][31])>

Returns the last and all the rest of the elements of the slice, or `None` if it is empty.

##### §Examples
[code] 
    let x = &mut [0, 1, 2];
    
    if let Some((last, elements)) = x.split_last_mut() {
        *last = 3;
        elements[0] = 4;
        elements[1] = 5;
    }
    assert_eq!(x, &[4, 5, 3]);
[/code]

1.0.0 · [Source][35]

#### pub fn last(&self) -> [Option][11]<[&T][28]>

Returns the last element of the slice, or `None` if it is empty.

##### §Examples
[code] 
    let v = [10, 40, 30];
    assert_eq!(Some(&30), v.last());
    
    let w: &[i32] = &[];
    assert_eq!(None, w.last());
[/code]

1.0.0 · [Source][36]

#### pub fn last_mut(&mut self) -> [Option][11]<[&mut T][28]>

Returns a mutable reference to the last item in the slice, or `None` if it is empty.

##### §Examples
[code] 
    let x = &mut [0, 1, 2];
    
    if let Some(last) = x.last_mut() {
        *last = 10;
    }
    assert_eq!(x, &[0, 1, 10]);
    
    let y: &mut [i32] = &mut [];
    assert_eq!(None, y.last_mut());
[/code]

1.77.0 · [Source][37]

#### pub fn first_chunk<const N: [usize][25]>(&self) -> [Option][11]<&[[T; N]][38]>

Returns an array reference to the first `N` items in the slice.

If the slice is not at least `N` in length, this will return `None`.

##### §Examples
[code] 
    let u = [10, 40, 30];
    assert_eq!(Some(&[10, 40]), u.first_chunk::<2>());
    
    let v: &[i32] = &[10];
    assert_eq!(None, v.first_chunk::<2>());
    
    let w: &[i32] = &[];
    assert_eq!(Some(&[]), w.first_chunk::<0>());
[/code]

1.77.0 · [Source][39]

#### pub fn first_chunk_mut<const N: [usize][25]>(&mut self) -> [Option][11]<&mut [[T; N]][38]>

Returns a mutable array reference to the first `N` items in the slice.

If the slice is not at least `N` in length, this will return `None`.

##### §Examples
[code] 
    let x = &mut [0, 1, 2];
    
    if let Some(first) = x.first_chunk_mut::<2>() {
        first[0] = 5;
        first[1] = 4;
    }
    assert_eq!(x, &[5, 4, 2]);
    
    assert_eq!(None, x.first_chunk_mut::<4>());
[/code]

1.77.0 · [Source][40]

#### pub fn split_first_chunk<const N: [usize][25]>(&self) -> [Option][11]<(&[[T; N]][38], &[[T]][31])>

Returns an array reference to the first `N` items in the slice and the remaining slice.

If the slice is not at least `N` in length, this will return `None`.

##### §Examples
[code] 
    let x = &[0, 1, 2];
    
    if let Some((first, elements)) = x.split_first_chunk::<2>() {
        assert_eq!(first, &[0, 1]);
        assert_eq!(elements, &[2]);
    }
    
    assert_eq!(None, x.split_first_chunk::<4>());
[/code]

1.77.0 · [Source][41]

#### pub fn split_first_chunk_mut<const N: [usize][25]>( &mut self, ) -> [Option][11]<(&mut [[T; N]][38], &mut [[T]][31])>

Returns a mutable array reference to the first `N` items in the slice and the remaining slice.

If the slice is not at least `N` in length, this will return `None`.

##### §Examples
[code] 
    let x = &mut [0, 1, 2];
    
    if let Some((first, elements)) = x.split_first_chunk_mut::<2>() {
        first[0] = 3;
        first[1] = 4;
        elements[0] = 5;
    }
    assert_eq!(x, &[3, 4, 5]);
    
    assert_eq!(None, x.split_first_chunk_mut::<4>());
[/code]

1.77.0 · [Source][42]

#### pub fn split_last_chunk<const N: [usize][25]>(&self) -> [Option][11]<(&[[T]][31], &[[T; N]][38])>

Returns an array reference to the last `N` items in the slice and the remaining slice.

If the slice is not at least `N` in length, this will return `None`.

##### §Examples
[code] 
    let x = &[0, 1, 2];
    
    if let Some((elements, last)) = x.split_last_chunk::<2>() {
        assert_eq!(elements, &[0]);
        assert_eq!(last, &[1, 2]);
    }
    
    assert_eq!(None, x.split_last_chunk::<4>());
[/code]

1.77.0 · [Source][43]

#### pub fn split_last_chunk_mut<const N: [usize][25]>( &mut self, ) -> [Option][11]<(&mut [[T]][31], &mut [[T; N]][38])>

Returns a mutable array reference to the last `N` items in the slice and the remaining slice.

If the slice is not at least `N` in length, this will return `None`.

##### §Examples
[code] 
    let x = &mut [0, 1, 2];
    
    if let Some((elements, last)) = x.split_last_chunk_mut::<2>() {
        last[0] = 3;
        last[1] = 4;
        elements[0] = 5;
    }
    assert_eq!(x, &[5, 3, 4]);
    
    assert_eq!(None, x.split_last_chunk_mut::<4>());
[/code]

1.77.0 · [Source][44]

#### pub fn last_chunk<const N: [usize][25]>(&self) -> [Option][11]<&[[T; N]][38]>

Returns an array reference to the last `N` items in the slice.

If the slice is not at least `N` in length, this will return `None`.

##### §Examples
[code] 
    let u = [10, 40, 30];
    assert_eq!(Some(&[40, 30]), u.last_chunk::<2>());
    
    let v: &[i32] = &[10];
    assert_eq!(None, v.last_chunk::<2>());
    
    let w: &[i32] = &[];
    assert_eq!(Some(&[]), w.last_chunk::<0>());
[/code]

1.77.0 · [Source][45]

#### pub fn last_chunk_mut<const N: [usize][25]>(&mut self) -> [Option][11]<&mut [[T; N]][38]>

Returns a mutable array reference to the last `N` items in the slice.

If the slice is not at least `N` in length, this will return `None`.

##### §Examples
[code] 
    let x = &mut [0, 1, 2];
    
    if let Some(last) = x.last_chunk_mut::<2>() {
        last[0] = 10;
        last[1] = 20;
    }
    assert_eq!(x, &[0, 10, 20]);
    
    assert_eq!(None, x.last_chunk_mut::<4>());
[/code]

1.0.0 · [Source][46]

#### pub fn get<I>(&self, index: I) -> [Option][11]<&<I as [SliceIndex][47]<[[T]][31]>>::[Output][48]>

where I: [SliceIndex][47]<[[T]][31]>,

Returns a reference to an element or subslice depending on the type of index.

  * If given a position, returns a reference to the element at that position or `None` if out of bounds.
  * If given a range, returns the subslice corresponding to that range, or `None` if out of bounds.



##### §Examples
[code] 
    let v = [10, 40, 30];
    assert_eq!(Some(&40), v.get(1));
    assert_eq!(Some(&[10, 40][..]), v.get(0..2));
    assert_eq!(None, v.get(3));
    assert_eq!(None, v.get(0..4));
[/code]

1.0.0 · [Source][49]

#### pub fn get_mut<I>( &mut self, index: I, ) -> [Option][11]<&mut <I as [SliceIndex][47]<[[T]][31]>>::[Output][48]>

where I: [SliceIndex][47]<[[T]][31]>,

Returns a mutable reference to an element or subslice depending on the type of index (see [`get`][50]) or `None` if the index is out of bounds.

##### §Examples
[code] 
    let x = &mut [0, 1, 2];
    
    if let Some(elem) = x.get_mut(1) {
        *elem = 42;
    }
    assert_eq!(x, &[0, 42, 2]);
[/code]

1.0.0 · [Source][51]

#### pub unsafe fn get_unchecked<I>( &self, index: I, ) -> &<I as [SliceIndex][47]<[[T]][31]>>::[Output][48]

where I: [SliceIndex][47]<[[T]][31]>,

Returns a reference to an element or subslice, without doing bounds checking.

For a safe alternative see [`get`][50].

##### §Safety

Calling this method with an out-of-bounds index is _[undefined behavior][52]_ even if the resulting reference is not used.

You can think of this like `.get(index).unwrap_unchecked()`. It’s UB to call `.get_unchecked(len)`, even if you immediately convert to a pointer. And it’s UB to call `.get_unchecked(..len + 1)`, `.get_unchecked(..=len)`, or similar.

##### §Examples
[code] 
    let x = &[1, 2, 4];
    
    unsafe {
        assert_eq!(x.get_unchecked(1), &2);
    }
[/code]

1.0.0 · [Source][53]

#### pub unsafe fn get_unchecked_mut<I>( &mut self, index: I, ) -> &mut <I as [SliceIndex][47]<[[T]][31]>>::[Output][48]

where I: [SliceIndex][47]<[[T]][31]>,

Returns a mutable reference to an element or subslice, without doing bounds checking.

For a safe alternative see [`get_mut`][54].

##### §Safety

Calling this method with an out-of-bounds index is _[undefined behavior][52]_ even if the resulting reference is not used.

You can think of this like `.get_mut(index).unwrap_unchecked()`. It’s UB to call `.get_unchecked_mut(len)`, even if you immediately convert to a pointer. And it’s UB to call `.get_unchecked_mut(..len + 1)`, `.get_unchecked_mut(..=len)`, or similar.

##### §Examples
[code] 
    let x = &mut [1, 2, 4];
    
    unsafe {
        let elem = x.get_unchecked_mut(1);
        *elem = 13;
    }
    assert_eq!(x, &[1, 13, 4]);
[/code]

1.0.0 · [Source][55]

#### pub fn as_ptr(&self) -> [*const T][56]

Returns a raw pointer to the slice’s buffer.

The caller must ensure that the slice outlives the pointer this function returns, or else it will end up dangling.

The caller must also ensure that the memory the pointer (non-transitively) points to is never written to (except inside an `UnsafeCell`) using this pointer or any pointer derived from it. If you need to mutate the contents of the slice, use [`as_mut_ptr`][57].

Modifying the container referenced by this slice may cause its buffer to be reallocated, which would also make any pointers to it invalid.

##### §Examples
[code] 
    let x = &[1, 2, 4];
    let x_ptr = x.as_ptr();
    
    unsafe {
        for i in 0..x.len() {
            assert_eq!(x.get_unchecked(i), &*x_ptr.add(i));
        }
    }
[/code]

1.0.0 · [Source][58]

#### pub fn as_mut_ptr(&mut self) -> [*mut T][56]

Returns an unsafe mutable pointer to the slice’s buffer.

The caller must ensure that the slice outlives the pointer this function returns, or else it will end up dangling.

Modifying the container referenced by this slice may cause its buffer to be reallocated, which would also make any pointers to it invalid.

##### §Examples
[code] 
    let x = &mut [1, 2, 4];
    let x_ptr = x.as_mut_ptr();
    
    unsafe {
        for i in 0..x.len() {
            *x_ptr.add(i) += 2;
        }
    }
    assert_eq!(x, &[3, 4, 6]);
[/code]

1.48.0 · [Source][59]

#### pub fn as_ptr_range(&self) -> [Range][60]<[*const T][56]>

Returns the two raw pointers spanning the slice.

The returned range is half-open, which means that the end pointer points _one past_ the last element of the slice. This way, an empty slice is represented by two equal pointers, and the difference between the two pointers represents the size of the slice.

See [`as_ptr`][61] for warnings on using these pointers. The end pointer requires extra caution, as it does not point to a valid element in the slice.

This function is useful for interacting with foreign interfaces which use two pointers to refer to a range of elements in memory, as is common in C++.

It can also be useful to check if a pointer to an element refers to an element of this slice:
[code] 
    let a = [1, 2, 3];
    let x = &a[1] as *const _;
    let y = &5 as *const _;
    
    assert!(a.as_ptr_range().contains(&x));
    assert!(!a.as_ptr_range().contains(&y));
[/code]

1.48.0 · [Source][62]

#### pub fn as_mut_ptr_range(&mut self) -> [Range][60]<[*mut T][56]>

Returns the two unsafe mutable pointers spanning the slice.

The returned range is half-open, which means that the end pointer points _one past_ the last element of the slice. This way, an empty slice is represented by two equal pointers, and the difference between the two pointers represents the size of the slice.

See [`as_mut_ptr`][57] for warnings on using these pointers. The end pointer requires extra caution, as it does not point to a valid element in the slice.

This function is useful for interacting with foreign interfaces which use two pointers to refer to a range of elements in memory, as is common in C++.

1.93.0 · [Source][63]

#### pub fn as_array<const N: [usize][25]>(&self) -> [Option][11]<&[[T; N]][38]>

Gets a reference to the underlying array.

If `N` is not exactly equal to the length of `self`, then this method returns `None`.

1.93.0 · [Source][64]

#### pub fn as_mut_array<const N: [usize][25]>(&mut self) -> [Option][11]<&mut [[T; N]][38]>

Gets a mutable reference to the slice’s underlying array.

If `N` is not exactly equal to the length of `self`, then this method returns `None`.

1.0.0 · [Source][65]

#### pub fn swap(&mut self, a: [usize][25], b: [usize][25])

Swaps two elements in the slice.

If `a` equals to `b`, it’s guaranteed that elements won’t change value.

##### §Arguments

  * a - The index of the first element
  * b - The index of the second element



##### §Panics

Panics if `a` or `b` are out of bounds.

##### §Examples
[code] 
    let mut v = ["a", "b", "c", "d", "e"];
    v.swap(2, 4);
    assert!(v == ["a", "b", "e", "d", "c"]);
[/code]

[Source][66]

#### pub unsafe fn swap_unchecked(&mut self, a: [usize][25], b: [usize][25])

🔬This is a nightly-only experimental API. (`slice_swap_unchecked`)

Swaps two elements in the slice, without doing bounds checking.

For a safe alternative see [`swap`][67].

##### §Arguments

  * a - The index of the first element
  * b - The index of the second element



##### §Safety

Calling this method with an out-of-bounds index is _[undefined behavior][52]_. The caller has to ensure that `a < self.len()` and `b < self.len()`.

##### §Examples
[code] 
    #![feature(slice_swap_unchecked)]
    
    let mut v = ["a", "b", "c", "d"];
    // SAFETY: we know that 1 and 3 are both indices of the slice
    unsafe { v.swap_unchecked(1, 3) };
    assert!(v == ["a", "d", "c", "b"]);
[/code]

1.0.0 · [Source][68]

#### pub fn reverse(&mut self)

Reverses the order of elements in the slice, in place.

##### §Examples
[code] 
    let mut v = [1, 2, 3];
    v.reverse();
    assert!(v == [3, 2, 1]);
[/code]

1.0.0 · [Source][69]

#### pub fn iter(&self) -> [Iter][70]<'_, T>

Returns an iterator over the slice.

The iterator yields all items from start to end.

##### §Examples
[code] 
    let x = &[1, 2, 4];
    let mut iterator = x.iter();
    
    assert_eq!(iterator.next(), Some(&1));
    assert_eq!(iterator.next(), Some(&2));
    assert_eq!(iterator.next(), Some(&4));
    assert_eq!(iterator.next(), None);
[/code]

1.0.0 · [Source][71]

#### pub fn iter_mut(&mut self) -> [IterMut][72]<'_, T>

Returns an iterator that allows modifying each value.

The iterator yields all items from start to end.

##### §Examples
[code] 
    let x = &mut [1, 2, 4];
    for elem in x.iter_mut() {
        *elem += 2;
    }
    assert_eq!(x, &[3, 4, 6]);
[/code]

1.0.0 · [Source][73]

#### pub fn windows(&self, size: [usize][25]) -> [Windows][74]<'_, T>

Returns an iterator over all contiguous windows of length `size`. The windows overlap. If the slice is shorter than `size`, the iterator returns no values.

##### §Panics

Panics if `size` is zero.

##### §Examples
[code] 
    let slice = ['l', 'o', 'r', 'e', 'm'];
    let mut iter = slice.windows(3);
    assert_eq!(iter.next().unwrap(), &['l', 'o', 'r']);
    assert_eq!(iter.next().unwrap(), &['o', 'r', 'e']);
    assert_eq!(iter.next().unwrap(), &['r', 'e', 'm']);
    assert!(iter.next().is_none());
[/code]

If the slice is shorter than `size`:
[code] 
    let slice = ['f', 'o', 'o'];
    let mut iter = slice.windows(4);
    assert!(iter.next().is_none());
[/code]

Because the [Iterator][75] trait cannot represent the required lifetimes, there is no `windows_mut` analog to `windows`; `[0,1,2].windows_mut(2).collect()` would violate [the rules of references][76] (though a [LendingIterator][77] analog is possible). You can sometimes use [`Cell::as_slice_of_cells`][78] in conjunction with `windows` instead:
[code] 
    use std::cell::Cell;
    
    let mut array = ['R', 'u', 's', 't', ' ', '2', '0', '1', '5'];
    let slice = &mut array[..];
    let slice_of_cells: &[Cell<char>] = Cell::from_mut(slice).as_slice_of_cells();
    for w in slice_of_cells.windows(3) {
        Cell::swap(&w[0], &w[2]);
    }
    assert_eq!(array, ['s', 't', ' ', '2', '0', '1', '5', 'u', 'R']);
[/code]

1.0.0 · [Source][79]

#### pub fn chunks(&self, chunk_size: [usize][25]) -> [Chunks][80]<'_, T>

Returns an iterator over `chunk_size` elements of the slice at a time, starting at the beginning of the slice.

The chunks are slices and do not overlap. If `chunk_size` does not divide the length of the slice, then the last chunk will not have length `chunk_size`.

See [`chunks_exact`][81] for a variant of this iterator that returns chunks of always exactly `chunk_size` elements, and [`rchunks`][82] for the same iterator but starting at the end of the slice.

If your `chunk_size` is a constant, consider using [`as_chunks`][83] instead, which will give references to arrays of exactly that length, rather than slices.

##### §Panics

Panics if `chunk_size` is zero.

##### §Examples
[code] 
    let slice = ['l', 'o', 'r', 'e', 'm'];
    let mut iter = slice.chunks(2);
    assert_eq!(iter.next().unwrap(), &['l', 'o']);
    assert_eq!(iter.next().unwrap(), &['r', 'e']);
    assert_eq!(iter.next().unwrap(), &['m']);
    assert!(iter.next().is_none());
[/code]

1.0.0 · [Source][84]

#### pub fn chunks_mut(&mut self, chunk_size: [usize][25]) -> [ChunksMut][85]<'_, T>

Returns an iterator over `chunk_size` elements of the slice at a time, starting at the beginning of the slice.

The chunks are mutable slices, and do not overlap. If `chunk_size` does not divide the length of the slice, then the last chunk will not have length `chunk_size`.

See [`chunks_exact_mut`][86] for a variant of this iterator that returns chunks of always exactly `chunk_size` elements, and [`rchunks_mut`][87] for the same iterator but starting at the end of the slice.

If your `chunk_size` is a constant, consider using [`as_chunks_mut`][88] instead, which will give references to arrays of exactly that length, rather than slices.

##### §Panics

Panics if `chunk_size` is zero.

##### §Examples
[code] 
    let v = &mut [0, 0, 0, 0, 0];
    let mut count = 1;
    
    for chunk in v.chunks_mut(2) {
        for elem in chunk.iter_mut() {
            *elem += count;
        }
        count += 1;
    }
    assert_eq!(v, &[1, 1, 2, 2, 3]);
[/code]

1.31.0 · [Source][89]

#### pub fn chunks_exact(&self, chunk_size: [usize][25]) -> [ChunksExact][90]<'_, T>

Returns an iterator over `chunk_size` elements of the slice at a time, starting at the beginning of the slice.

The chunks are slices and do not overlap. If `chunk_size` does not divide the length of the slice, then the last up to `chunk_size-1` elements will be omitted and can be retrieved from the `remainder` function of the iterator.

Due to each chunk having exactly `chunk_size` elements, the compiler can often optimize the resulting code better than in the case of [`chunks`][91].

See [`chunks`][91] for a variant of this iterator that also returns the remainder as a smaller chunk, and [`rchunks_exact`][92] for the same iterator but starting at the end of the slice.

If your `chunk_size` is a constant, consider using [`as_chunks`][83] instead, which will give references to arrays of exactly that length, rather than slices.

##### §Panics

Panics if `chunk_size` is zero.

##### §Examples
[code] 
    let slice = ['l', 'o', 'r', 'e', 'm'];
    let mut iter = slice.chunks_exact(2);
    assert_eq!(iter.next().unwrap(), &['l', 'o']);
    assert_eq!(iter.next().unwrap(), &['r', 'e']);
    assert!(iter.next().is_none());
    assert_eq!(iter.remainder(), &['m']);
[/code]

1.31.0 · [Source][93]

#### pub fn chunks_exact_mut(&mut self, chunk_size: [usize][25]) -> [ChunksExactMut][94]<'_, T>

Returns an iterator over `chunk_size` elements of the slice at a time, starting at the beginning of the slice.

The chunks are mutable slices, and do not overlap. If `chunk_size` does not divide the length of the slice, then the last up to `chunk_size-1` elements will be omitted and can be retrieved from the `into_remainder` function of the iterator.

Due to each chunk having exactly `chunk_size` elements, the compiler can often optimize the resulting code better than in the case of [`chunks_mut`][95].

See [`chunks_mut`][95] for a variant of this iterator that also returns the remainder as a smaller chunk, and [`rchunks_exact_mut`][96] for the same iterator but starting at the end of the slice.

If your `chunk_size` is a constant, consider using [`as_chunks_mut`][88] instead, which will give references to arrays of exactly that length, rather than slices.

##### §Panics

Panics if `chunk_size` is zero.

##### §Examples
[code] 
    let v = &mut [0, 0, 0, 0, 0];
    let mut count = 1;
    
    for chunk in v.chunks_exact_mut(2) {
        for elem in chunk.iter_mut() {
            *elem += count;
        }
        count += 1;
    }
    assert_eq!(v, &[1, 1, 2, 2, 0]);
[/code]

1.88.0 · [Source][97]

#### pub unsafe fn as_chunks_unchecked<const N: [usize][25]>(&self) -> &[[[T; N]][38]]

Splits the slice into a slice of `N`-element arrays, assuming that there’s no remainder.

This is the inverse operation to [`as_flattened`][98].

As this is `unsafe`, consider whether you could use [`as_chunks`][83] or [`as_rchunks`][99] instead, perhaps via something like `if let (chunks, []) = slice.as_chunks()` or `let (chunks, []) = slice.as_chunks() else { unreachable!() };`.

##### §Safety

This may only be called when

  * The slice splits exactly into `N`-element chunks (aka `self.len() % N == 0`).
  * `N != 0`.



##### §Examples
[code] 
    let slice: &[char] = &['l', 'o', 'r', 'e', 'm', '!'];
    let chunks: &[[char; 1]] =
        // SAFETY: 1-element chunks never have remainder
        unsafe { slice.as_chunks_unchecked() };
    assert_eq!(chunks, &[['l'], ['o'], ['r'], ['e'], ['m'], ['!']]);
    let chunks: &[[char; 3]] =
        // SAFETY: The slice length (6) is a multiple of 3
        unsafe { slice.as_chunks_unchecked() };
    assert_eq!(chunks, &[['l', 'o', 'r'], ['e', 'm', '!']]);
    
    // These would be unsound:
    // let chunks: &[[_; 5]] = slice.as_chunks_unchecked() // The slice length is not a multiple of 5
    // let chunks: &[[_; 0]] = slice.as_chunks_unchecked() // Zero-length chunks are never allowed
[/code]

1.88.0 · [Source][100]

#### pub fn as_chunks<const N: [usize][25]>(&self) -> (&[[[T; N]][38]], &[[T]][31])

Splits the slice into a slice of `N`-element arrays, starting at the beginning of the slice, and a remainder slice with length strictly less than `N`.

The remainder is meaningful in the division sense. Given `let (chunks, remainder) = slice.as_chunks()`, then:

  * `chunks.len()` equals `slice.len() / N`,
  * `remainder.len()` equals `slice.len() % N`, and
  * `slice.len()` equals `chunks.len() * N + remainder.len()`.



You can flatten the chunks back into a slice-of-`T` with [`as_flattened`][98].

##### §Panics

Panics if `N` is zero.

Note that this check is against a const generic parameter, not a runtime value, and thus a particular monomorphization will either always panic or it will never panic.

##### §Examples
[code] 
    let slice = ['l', 'o', 'r', 'e', 'm'];
    let (chunks, remainder) = slice.as_chunks();
    assert_eq!(chunks, &[['l', 'o'], ['r', 'e']]);
    assert_eq!(remainder, &['m']);
[/code]

If you expect the slice to be an exact multiple, you can combine `let`-`else` with an empty slice pattern:
[code] 
    let slice = ['R', 'u', 's', 't'];
    let (chunks, []) = slice.as_chunks::<2>() else {
        panic!("slice didn't have even length")
    };
    assert_eq!(chunks, &[['R', 'u'], ['s', 't']]);
[/code]

1.88.0 · [Source][101]

#### pub fn as_rchunks<const N: [usize][25]>(&self) -> (&[[T]][31], &[[[T; N]][38]])

Splits the slice into a slice of `N`-element arrays, starting at the end of the slice, and a remainder slice with length strictly less than `N`.

The remainder is meaningful in the division sense. Given `let (remainder, chunks) = slice.as_rchunks()`, then:

  * `remainder.len()` equals `slice.len() % N`,
  * `chunks.len()` equals `slice.len() / N`, and
  * `slice.len()` equals `chunks.len() * N + remainder.len()`.



You can flatten the chunks back into a slice-of-`T` with [`as_flattened`][98].

##### §Panics

Panics if `N` is zero.

Note that this check is against a const generic parameter, not a runtime value, and thus a particular monomorphization will either always panic or it will never panic.

##### §Examples
[code] 
    let slice = ['l', 'o', 'r', 'e', 'm'];
    let (remainder, chunks) = slice.as_rchunks();
    assert_eq!(remainder, &['l']);
    assert_eq!(chunks, &[['o', 'r'], ['e', 'm']]);
[/code]

1.88.0 · [Source][102]

#### pub unsafe fn as_chunks_unchecked_mut<const N: [usize][25]>( &mut self, ) -> &mut [[[T; N]][38]]

Splits the slice into a slice of `N`-element arrays, assuming that there’s no remainder.

This is the inverse operation to [`as_flattened_mut`][103].

As this is `unsafe`, consider whether you could use [`as_chunks_mut`][88] or [`as_rchunks_mut`][104] instead, perhaps via something like `if let (chunks, []) = slice.as_chunks_mut()` or `let (chunks, []) = slice.as_chunks_mut() else { unreachable!() };`.

##### §Safety

This may only be called when

  * The slice splits exactly into `N`-element chunks (aka `self.len() % N == 0`).
  * `N != 0`.



##### §Examples
[code] 
    let slice: &mut [char] = &mut ['l', 'o', 'r', 'e', 'm', '!'];
    let chunks: &mut [[char; 1]] =
        // SAFETY: 1-element chunks never have remainder
        unsafe { slice.as_chunks_unchecked_mut() };
    chunks[0] = ['L'];
    assert_eq!(chunks, &[['L'], ['o'], ['r'], ['e'], ['m'], ['!']]);
    let chunks: &mut [[char; 3]] =
        // SAFETY: The slice length (6) is a multiple of 3
        unsafe { slice.as_chunks_unchecked_mut() };
    chunks[1] = ['a', 'x', '?'];
    assert_eq!(slice, &['L', 'o', 'r', 'a', 'x', '?']);
    
    // These would be unsound:
    // let chunks: &[[_; 5]] = slice.as_chunks_unchecked_mut() // The slice length is not a multiple of 5
    // let chunks: &[[_; 0]] = slice.as_chunks_unchecked_mut() // Zero-length chunks are never allowed
[/code]

1.88.0 · [Source][105]

#### pub fn as_chunks_mut<const N: [usize][25]>(&mut self) -> (&mut [[[T; N]][38]], &mut [[T]][31])

Splits the slice into a slice of `N`-element arrays, starting at the beginning of the slice, and a remainder slice with length strictly less than `N`.

The remainder is meaningful in the division sense. Given `let (chunks, remainder) = slice.as_chunks_mut()`, then:

  * `chunks.len()` equals `slice.len() / N`,
  * `remainder.len()` equals `slice.len() % N`, and
  * `slice.len()` equals `chunks.len() * N + remainder.len()`.



You can flatten the chunks back into a slice-of-`T` with [`as_flattened_mut`][103].

##### §Panics

Panics if `N` is zero.

Note that this check is against a const generic parameter, not a runtime value, and thus a particular monomorphization will either always panic or it will never panic.

##### §Examples
[code] 
    let v = &mut [0, 0, 0, 0, 0];
    let mut count = 1;
    
    let (chunks, remainder) = v.as_chunks_mut();
    remainder[0] = 9;
    for chunk in chunks {
        *chunk = [count; 2];
        count += 1;
    }
    assert_eq!(v, &[1, 1, 2, 2, 9]);
[/code]

1.88.0 · [Source][106]

#### pub fn as_rchunks_mut<const N: [usize][25]>(&mut self) -> (&mut [[T]][31], &mut [[[T; N]][38]])

Splits the slice into a slice of `N`-element arrays, starting at the end of the slice, and a remainder slice with length strictly less than `N`.

The remainder is meaningful in the division sense. Given `let (remainder, chunks) = slice.as_rchunks_mut()`, then:

  * `remainder.len()` equals `slice.len() % N`,
  * `chunks.len()` equals `slice.len() / N`, and
  * `slice.len()` equals `chunks.len() * N + remainder.len()`.



You can flatten the chunks back into a slice-of-`T` with [`as_flattened_mut`][103].

##### §Panics

Panics if `N` is zero.

Note that this check is against a const generic parameter, not a runtime value, and thus a particular monomorphization will either always panic or it will never panic.

##### §Examples
[code] 
    let v = &mut [0, 0, 0, 0, 0];
    let mut count = 1;
    
    let (remainder, chunks) = v.as_rchunks_mut();
    remainder[0] = 9;
    for chunk in chunks {
        *chunk = [count; 2];
        count += 1;
    }
    assert_eq!(v, &[9, 1, 1, 2, 2]);
[/code]

1.94.0 · [Source][107]

#### pub fn array_windows<const N: [usize][25]>(&self) -> [ArrayWindows][108]<'_, T, N>

Returns an iterator over overlapping windows of `N` elements of a slice, starting at the beginning of the slice.

This is the const generic equivalent of [`windows`][109].

If `N` is greater than the size of the slice, it will return no windows.

##### §Panics

Panics if `N` is zero.

Note that this check is against a const generic parameter, not a runtime value, and thus a particular monomorphization will either always panic or it will never panic.

##### §Examples
[code] 
    let slice = [0, 1, 2, 3];
    let mut iter = slice.array_windows();
    assert_eq!(iter.next().unwrap(), &[0, 1]);
    assert_eq!(iter.next().unwrap(), &[1, 2]);
    assert_eq!(iter.next().unwrap(), &[2, 3]);
    assert!(iter.next().is_none());
[/code]

1.31.0 · [Source][110]

#### pub fn rchunks(&self, chunk_size: [usize][25]) -> [RChunks][111]<'_, T>

Returns an iterator over `chunk_size` elements of the slice at a time, starting at the end of the slice.

The chunks are slices and do not overlap. If `chunk_size` does not divide the length of the slice, then the last chunk will not have length `chunk_size`.

See [`rchunks_exact`][92] for a variant of this iterator that returns chunks of always exactly `chunk_size` elements, and [`chunks`][91] for the same iterator but starting at the beginning of the slice.

If your `chunk_size` is a constant, consider using [`as_rchunks`][99] instead, which will give references to arrays of exactly that length, rather than slices.

##### §Panics

Panics if `chunk_size` is zero.

##### §Examples
[code] 
    let slice = ['l', 'o', 'r', 'e', 'm'];
    let mut iter = slice.rchunks(2);
    assert_eq!(iter.next().unwrap(), &['e', 'm']);
    assert_eq!(iter.next().unwrap(), &['o', 'r']);
    assert_eq!(iter.next().unwrap(), &['l']);
    assert!(iter.next().is_none());
[/code]

1.31.0 · [Source][112]

#### pub fn rchunks_mut(&mut self, chunk_size: [usize][25]) -> [RChunksMut][113]<'_, T>

Returns an iterator over `chunk_size` elements of the slice at a time, starting at the end of the slice.

The chunks are mutable slices, and do not overlap. If `chunk_size` does not divide the length of the slice, then the last chunk will not have length `chunk_size`.

See [`rchunks_exact_mut`][96] for a variant of this iterator that returns chunks of always exactly `chunk_size` elements, and [`chunks_mut`][95] for the same iterator but starting at the beginning of the slice.

If your `chunk_size` is a constant, consider using [`as_rchunks_mut`][104] instead, which will give references to arrays of exactly that length, rather than slices.

##### §Panics

Panics if `chunk_size` is zero.

##### §Examples
[code] 
    let v = &mut [0, 0, 0, 0, 0];
    let mut count = 1;
    
    for chunk in v.rchunks_mut(2) {
        for elem in chunk.iter_mut() {
            *elem += count;
        }
        count += 1;
    }
    assert_eq!(v, &[3, 2, 2, 1, 1]);
[/code]

1.31.0 · [Source][114]

#### pub fn rchunks_exact(&self, chunk_size: [usize][25]) -> [RChunksExact][115]<'_, T>

Returns an iterator over `chunk_size` elements of the slice at a time, starting at the end of the slice.

The chunks are slices and do not overlap. If `chunk_size` does not divide the length of the slice, then the last up to `chunk_size-1` elements will be omitted and can be retrieved from the `remainder` function of the iterator.

Due to each chunk having exactly `chunk_size` elements, the compiler can often optimize the resulting code better than in the case of [`rchunks`][82].

See [`rchunks`][82] for a variant of this iterator that also returns the remainder as a smaller chunk, and [`chunks_exact`][81] for the same iterator but starting at the beginning of the slice.

If your `chunk_size` is a constant, consider using [`as_rchunks`][99] instead, which will give references to arrays of exactly that length, rather than slices.

##### §Panics

Panics if `chunk_size` is zero.

##### §Examples
[code] 
    let slice = ['l', 'o', 'r', 'e', 'm'];
    let mut iter = slice.rchunks_exact(2);
    assert_eq!(iter.next().unwrap(), &['e', 'm']);
    assert_eq!(iter.next().unwrap(), &['o', 'r']);
    assert!(iter.next().is_none());
    assert_eq!(iter.remainder(), &['l']);
[/code]

1.31.0 · [Source][116]

#### pub fn rchunks_exact_mut(&mut self, chunk_size: [usize][25]) -> [RChunksExactMut][117]<'_, T>

Returns an iterator over `chunk_size` elements of the slice at a time, starting at the end of the slice.

The chunks are mutable slices, and do not overlap. If `chunk_size` does not divide the length of the slice, then the last up to `chunk_size-1` elements will be omitted and can be retrieved from the `into_remainder` function of the iterator.

Due to each chunk having exactly `chunk_size` elements, the compiler can often optimize the resulting code better than in the case of [`chunks_mut`][95].

See [`rchunks_mut`][87] for a variant of this iterator that also returns the remainder as a smaller chunk, and [`chunks_exact_mut`][86] for the same iterator but starting at the beginning of the slice.

If your `chunk_size` is a constant, consider using [`as_rchunks_mut`][104] instead, which will give references to arrays of exactly that length, rather than slices.

##### §Panics

Panics if `chunk_size` is zero.

##### §Examples
[code] 
    let v = &mut [0, 0, 0, 0, 0];
    let mut count = 1;
    
    for chunk in v.rchunks_exact_mut(2) {
        for elem in chunk.iter_mut() {
            *elem += count;
        }
        count += 1;
    }
    assert_eq!(v, &[0, 2, 2, 1, 1]);
[/code]

1.77.0 · [Source][118]

#### pub fn chunk_by<F>(&self, pred: F) -> [ChunkBy][119]<'_, T, F>

where F: [FnMut][120]([&T][28], [&T][28]) -> [bool][9],

Returns an iterator over the slice producing non-overlapping runs of elements using the predicate to separate them.

The predicate is called for every pair of consecutive elements, meaning that it is called on `slice[0]` and `slice[1]`, followed by `slice[1]` and `slice[2]`, and so on.

##### §Examples
[code] 
    let slice = &[1, 1, 1, 3, 3, 2, 2, 2];
    
    let mut iter = slice.chunk_by(|a, b| a == b);
    
    assert_eq!(iter.next(), Some(&[1, 1, 1][..]));
    assert_eq!(iter.next(), Some(&[3, 3][..]));
    assert_eq!(iter.next(), Some(&[2, 2, 2][..]));
    assert_eq!(iter.next(), None);
[/code]

This method can be used to extract the sorted subslices:
[code] 
    let slice = &[1, 1, 2, 3, 2, 3, 2, 3, 4];
    
    let mut iter = slice.chunk_by(|a, b| a <= b);
    
    assert_eq!(iter.next(), Some(&[1, 1, 2, 3][..]));
    assert_eq!(iter.next(), Some(&[2, 3][..]));
    assert_eq!(iter.next(), Some(&[2, 3, 4][..]));
    assert_eq!(iter.next(), None);
[/code]

1.77.0 · [Source][121]

#### pub fn chunk_by_mut<F>(&mut self, pred: F) -> [ChunkByMut][122]<'_, T, F>

where F: [FnMut][120]([&T][28], [&T][28]) -> [bool][9],

Returns an iterator over the slice producing non-overlapping mutable runs of elements using the predicate to separate them.

The predicate is called for every pair of consecutive elements, meaning that it is called on `slice[0]` and `slice[1]`, followed by `slice[1]` and `slice[2]`, and so on.

##### §Examples
[code] 
    let slice = &mut [1, 1, 1, 3, 3, 2, 2, 2];
    
    let mut iter = slice.chunk_by_mut(|a, b| a == b);
    
    assert_eq!(iter.next(), Some(&mut [1, 1, 1][..]));
    assert_eq!(iter.next(), Some(&mut [3, 3][..]));
    assert_eq!(iter.next(), Some(&mut [2, 2, 2][..]));
    assert_eq!(iter.next(), None);
[/code]

This method can be used to extract the sorted subslices:
[code] 
    let slice = &mut [1, 1, 2, 3, 2, 3, 2, 3, 4];
    
    let mut iter = slice.chunk_by_mut(|a, b| a <= b);
    
    assert_eq!(iter.next(), Some(&mut [1, 1, 2, 3][..]));
    assert_eq!(iter.next(), Some(&mut [2, 3][..]));
    assert_eq!(iter.next(), Some(&mut [2, 3, 4][..]));
    assert_eq!(iter.next(), None);
[/code]

1.0.0 · [Source][123]

#### pub fn split_at(&self, mid: [usize][25]) -> (&[[T]][31], &[[T]][31])

Divides one slice into two at an index.

The first will contain all indices from `[0, mid)` (excluding the index `mid` itself) and the second will contain all indices from `[mid, len)` (excluding the index `len` itself).

##### §Panics

Panics if `mid > len`. For a non-panicking alternative see [`split_at_checked`][124].

##### §Examples
[code] 
    let v = ['a', 'b', 'c'];
    
    {
       let (left, right) = v.split_at(0);
       assert_eq!(left, []);
       assert_eq!(right, ['a', 'b', 'c']);
    }
    
    {
        let (left, right) = v.split_at(2);
        assert_eq!(left, ['a', 'b']);
        assert_eq!(right, ['c']);
    }
    
    {
        let (left, right) = v.split_at(3);
        assert_eq!(left, ['a', 'b', 'c']);
        assert_eq!(right, []);
    }
[/code]

1.0.0 · [Source][125]

#### pub fn split_at_mut(&mut self, mid: [usize][25]) -> (&mut [[T]][31], &mut [[T]][31])

Divides one mutable slice into two at an index.

The first will contain all indices from `[0, mid)` (excluding the index `mid` itself) and the second will contain all indices from `[mid, len)` (excluding the index `len` itself).

##### §Panics

Panics if `mid > len`. For a non-panicking alternative see [`split_at_mut_checked`][126].

##### §Examples
[code] 
    let mut v = [1, 0, 3, 0, 5, 6];
    let (left, right) = v.split_at_mut(2);
    assert_eq!(left, [1, 0]);
    assert_eq!(right, [3, 0, 5, 6]);
    left[1] = 2;
    right[1] = 4;
    assert_eq!(v, [1, 2, 3, 4, 5, 6]);
[/code]

1.79.0 · [Source][127]

#### pub unsafe fn split_at_unchecked(&self, mid: [usize][25]) -> (&[[T]][31], &[[T]][31])

Divides one slice into two at an index, without doing bounds checking.

The first will contain all indices from `[0, mid)` (excluding the index `mid` itself) and the second will contain all indices from `[mid, len)` (excluding the index `len` itself).

For a safe alternative see [`split_at`][128].

##### §Safety

Calling this method with an out-of-bounds index is _[undefined behavior][52]_ even if the resulting reference is not used. The caller has to ensure that `0 <= mid <= self.len()`.

##### §Examples
[code] 
    let v = ['a', 'b', 'c'];
    
    unsafe {
       let (left, right) = v.split_at_unchecked(0);
       assert_eq!(left, []);
       assert_eq!(right, ['a', 'b', 'c']);
    }
    
    unsafe {
        let (left, right) = v.split_at_unchecked(2);
        assert_eq!(left, ['a', 'b']);
        assert_eq!(right, ['c']);
    }
    
    unsafe {
        let (left, right) = v.split_at_unchecked(3);
        assert_eq!(left, ['a', 'b', 'c']);
        assert_eq!(right, []);
    }
[/code]

1.79.0 · [Source][129]

#### pub unsafe fn split_at_mut_unchecked( &mut self, mid: [usize][25], ) -> (&mut [[T]][31], &mut [[T]][31])

Divides one mutable slice into two at an index, without doing bounds checking.

The first will contain all indices from `[0, mid)` (excluding the index `mid` itself) and the second will contain all indices from `[mid, len)` (excluding the index `len` itself).

For a safe alternative see [`split_at_mut`][130].

##### §Safety

Calling this method with an out-of-bounds index is _[undefined behavior][52]_ even if the resulting reference is not used. The caller has to ensure that `0 <= mid <= self.len()`.

##### §Examples
[code] 
    let mut v = [1, 0, 3, 0, 5, 6];
    // scoped to restrict the lifetime of the borrows
    unsafe {
        let (left, right) = v.split_at_mut_unchecked(2);
        assert_eq!(left, [1, 0]);
        assert_eq!(right, [3, 0, 5, 6]);
        left[1] = 2;
        right[1] = 4;
    }
    assert_eq!(v, [1, 2, 3, 4, 5, 6]);
[/code]

1.80.0 · [Source][131]

#### pub fn split_at_checked(&self, mid: [usize][25]) -> [Option][11]<(&[[T]][31], &[[T]][31])>

Divides one slice into two at an index, returning `None` if the slice is too short.

If `mid ≤ len` returns a pair of slices where the first will contain all indices from `[0, mid)` (excluding the index `mid` itself) and the second will contain all indices from `[mid, len)` (excluding the index `len` itself).

Otherwise, if `mid > len`, returns `None`.

##### §Examples
[code] 
    let v = [1, -2, 3, -4, 5, -6];
    
    {
       let (left, right) = v.split_at_checked(0).unwrap();
       assert_eq!(left, []);
       assert_eq!(right, [1, -2, 3, -4, 5, -6]);
    }
    
    {
        let (left, right) = v.split_at_checked(2).unwrap();
        assert_eq!(left, [1, -2]);
        assert_eq!(right, [3, -4, 5, -6]);
    }
    
    {
        let (left, right) = v.split_at_checked(6).unwrap();
        assert_eq!(left, [1, -2, 3, -4, 5, -6]);
        assert_eq!(right, []);
    }
    
    assert_eq!(None, v.split_at_checked(7));
[/code]

1.80.0 · [Source][132]

#### pub fn split_at_mut_checked( &mut self, mid: [usize][25], ) -> [Option][11]<(&mut [[T]][31], &mut [[T]][31])>

Divides one mutable slice into two at an index, returning `None` if the slice is too short.

If `mid ≤ len` returns a pair of slices where the first will contain all indices from `[0, mid)` (excluding the index `mid` itself) and the second will contain all indices from `[mid, len)` (excluding the index `len` itself).

Otherwise, if `mid > len`, returns `None`.

##### §Examples
[code] 
    let mut v = [1, 0, 3, 0, 5, 6];
    
    if let Some((left, right)) = v.split_at_mut_checked(2) {
        assert_eq!(left, [1, 0]);
        assert_eq!(right, [3, 0, 5, 6]);
        left[1] = 2;
        right[1] = 4;
    }
    assert_eq!(v, [1, 2, 3, 4, 5, 6]);
    
    assert_eq!(None, v.split_at_mut_checked(7));
[/code]

1.0.0 · [Source][133]

#### pub fn split<F>(&self, pred: F) -> [Split][134]<'_, T, F>

where F: [FnMut][120]([&T][28]) -> [bool][9],

Returns an iterator over subslices separated by elements that match `pred`. The matched element is not contained in the subslices.

##### §Examples
[code] 
    let slice = [10, 40, 33, 20];
    let mut iter = slice.split(|num| num % 3 == 0);
    
    assert_eq!(iter.next().unwrap(), &[10, 40]);
    assert_eq!(iter.next().unwrap(), &[20]);
    assert!(iter.next().is_none());
[/code]

If the first element is matched, an empty slice will be the first item returned by the iterator. Similarly, if the last element in the slice is matched, an empty slice will be the last item returned by the iterator:
[code] 
    let slice = [10, 40, 33];
    let mut iter = slice.split(|num| num % 3 == 0);
    
    assert_eq!(iter.next().unwrap(), &[10, 40]);
    assert_eq!(iter.next().unwrap(), &[]);
    assert!(iter.next().is_none());
[/code]

If two matched elements are directly adjacent, an empty slice will be present between them:
[code] 
    let slice = [10, 6, 33, 20];
    let mut iter = slice.split(|num| num % 3 == 0);
    
    assert_eq!(iter.next().unwrap(), &[10]);
    assert_eq!(iter.next().unwrap(), &[]);
    assert_eq!(iter.next().unwrap(), &[20]);
    assert!(iter.next().is_none());
[/code]

1.0.0 · [Source][135]

#### pub fn split_mut<F>(&mut self, pred: F) -> [SplitMut][136]<'_, T, F>

where F: [FnMut][120]([&T][28]) -> [bool][9],

Returns an iterator over mutable subslices separated by elements that match `pred`. The matched element is not contained in the subslices.

##### §Examples
[code] 
    let mut v = [10, 40, 30, 20, 60, 50];
    
    for group in v.split_mut(|num| *num % 3 == 0) {
        group[0] = 1;
    }
    assert_eq!(v, [1, 40, 30, 1, 60, 1]);
[/code]

1.51.0 · [Source][137]

#### pub fn split_inclusive<F>(&self, pred: F) -> [SplitInclusive][138]<'_, T, F>

where F: [FnMut][120]([&T][28]) -> [bool][9],

Returns an iterator over subslices separated by elements that match `pred`. The matched element is contained in the end of the previous subslice as a terminator.

##### §Examples
[code] 
    let slice = [10, 40, 33, 20];
    let mut iter = slice.split_inclusive(|num| num % 3 == 0);
    
    assert_eq!(iter.next().unwrap(), &[10, 40, 33]);
    assert_eq!(iter.next().unwrap(), &[20]);
    assert!(iter.next().is_none());
[/code]

If the last element of the slice is matched, that element will be considered the terminator of the preceding slice. That slice will be the last item returned by the iterator.
[code] 
    let slice = [3, 10, 40, 33];
    let mut iter = slice.split_inclusive(|num| num % 3 == 0);
    
    assert_eq!(iter.next().unwrap(), &[3]);
    assert_eq!(iter.next().unwrap(), &[10, 40, 33]);
    assert!(iter.next().is_none());
[/code]

1.51.0 · [Source][139]

#### pub fn split_inclusive_mut<F>(&mut self, pred: F) -> [SplitInclusiveMut][140]<'_, T, F>

where F: [FnMut][120]([&T][28]) -> [bool][9],

Returns an iterator over mutable subslices separated by elements that match `pred`. The matched element is contained in the previous subslice as a terminator.

##### §Examples
[code] 
    let mut v = [10, 40, 30, 20, 60, 50];
    
    for group in v.split_inclusive_mut(|num| *num % 3 == 0) {
        let terminator_idx = group.len()-1;
        group[terminator_idx] = 1;
    }
    assert_eq!(v, [10, 40, 1, 20, 1, 1]);
[/code]

1.27.0 · [Source][141]

#### pub fn rsplit<F>(&self, pred: F) -> [RSplit][142]<'_, T, F>

where F: [FnMut][120]([&T][28]) -> [bool][9],

Returns an iterator over subslices separated by elements that match `pred`, starting at the end of the slice and working backwards. The matched element is not contained in the subslices.

##### §Examples
[code] 
    let slice = [11, 22, 33, 0, 44, 55];
    let mut iter = slice.rsplit(|num| *num == 0);
    
    assert_eq!(iter.next().unwrap(), &[44, 55]);
    assert_eq!(iter.next().unwrap(), &[11, 22, 33]);
    assert_eq!(iter.next(), None);
[/code]

As with `split()`, if the first or last element is matched, an empty slice will be the first (or last) item returned by the iterator.
[code] 
    let v = &[0, 1, 1, 2, 3, 5, 8];
    let mut it = v.rsplit(|n| *n % 2 == 0);
    assert_eq!(it.next().unwrap(), &[]);
    assert_eq!(it.next().unwrap(), &[3, 5]);
    assert_eq!(it.next().unwrap(), &[1, 1]);
    assert_eq!(it.next().unwrap(), &[]);
    assert_eq!(it.next(), None);
[/code]

1.27.0 · [Source][143]

#### pub fn rsplit_mut<F>(&mut self, pred: F) -> [RSplitMut][144]<'_, T, F>

where F: [FnMut][120]([&T][28]) -> [bool][9],

Returns an iterator over mutable subslices separated by elements that match `pred`, starting at the end of the slice and working backwards. The matched element is not contained in the subslices.

##### §Examples
[code] 
    let mut v = [100, 400, 300, 200, 600, 500];
    
    let mut count = 0;
    for group in v.rsplit_mut(|num| *num % 3 == 0) {
        count += 1;
        group[0] = count;
    }
    assert_eq!(v, [3, 400, 300, 2, 600, 1]);
[/code]

1.0.0 · [Source][145]

#### pub fn splitn<F>(&self, n: [usize][25], pred: F) -> [SplitN][146]<'_, T, F>

where F: [FnMut][120]([&T][28]) -> [bool][9],

Returns an iterator over subslices separated by elements that match `pred`, limited to returning at most `n` items. The matched element is not contained in the subslices.

The last element returned, if any, will contain the remainder of the slice.

##### §Examples

Print the slice split once by numbers divisible by 3 (i.e., `[10, 40]`, `[20, 60, 50]`):
[code] 
    let v = [10, 40, 30, 20, 60, 50];
    
    for group in v.splitn(2, |num| *num % 3 == 0) {
        println!("{group:?}");
    }
[/code]

1.0.0 · [Source][147]

#### pub fn splitn_mut<F>(&mut self, n: [usize][25], pred: F) -> [SplitNMut][148]<'_, T, F>

where F: [FnMut][120]([&T][28]) -> [bool][9],

Returns an iterator over mutable subslices separated by elements that match `pred`, limited to returning at most `n` items. The matched element is not contained in the subslices.

The last element returned, if any, will contain the remainder of the slice.

##### §Examples
[code] 
    let mut v = [10, 40, 30, 20, 60, 50];
    
    for group in v.splitn_mut(2, |num| *num % 3 == 0) {
        group[0] = 1;
    }
    assert_eq!(v, [1, 40, 30, 1, 60, 50]);
[/code]

1.0.0 · [Source][149]

#### pub fn rsplitn<F>(&self, n: [usize][25], pred: F) -> [RSplitN][150]<'_, T, F>

where F: [FnMut][120]([&T][28]) -> [bool][9],

Returns an iterator over subslices separated by elements that match `pred` limited to returning at most `n` items. This starts at the end of the slice and works backwards. The matched element is not contained in the subslices.

The last element returned, if any, will contain the remainder of the slice.

##### §Examples

Print the slice split once, starting from the end, by numbers divisible by 3 (i.e., `[50]`, `[10, 40, 30, 20]`):
[code] 
    let v = [10, 40, 30, 20, 60, 50];
    
    for group in v.rsplitn(2, |num| *num % 3 == 0) {
        println!("{group:?}");
    }
[/code]

1.0.0 · [Source][151]

#### pub fn rsplitn_mut<F>(&mut self, n: [usize][25], pred: F) -> [RSplitNMut][152]<'_, T, F>

where F: [FnMut][120]([&T][28]) -> [bool][9],

Returns an iterator over subslices separated by elements that match `pred` limited to returning at most `n` items. This starts at the end of the slice and works backwards. The matched element is not contained in the subslices.

The last element returned, if any, will contain the remainder of the slice.

##### §Examples
[code] 
    let mut s = [10, 40, 30, 20, 60, 50];
    
    for group in s.rsplitn_mut(2, |num| *num % 3 == 0) {
        group[0] = 1;
    }
    assert_eq!(s, [1, 40, 30, 20, 60, 1]);
[/code]

[Source][153]

#### pub fn split_once<F>(&self, pred: F) -> [Option][11]<(&[[T]][31], &[[T]][31])>

where F: [FnMut][120]([&T][28]) -> [bool][9],

🔬This is a nightly-only experimental API. (`slice_split_once`)

Splits the slice on the first element that matches the specified predicate.

If any matching elements are present in the slice, returns the prefix before the match and suffix after. The matching element itself is not included. If no elements match, returns `None`.

##### §Examples
[code] 
    #![feature(slice_split_once)]
    let s = [1, 2, 3, 2, 4];
    assert_eq!(s.split_once(|&x| x == 2), Some((
        &[1][..],
        &[3, 2, 4][..]
    )));
    assert_eq!(s.split_once(|&x| x == 0), None);
[/code]

[Source][154]

#### pub fn rsplit_once<F>(&self, pred: F) -> [Option][11]<(&[[T]][31], &[[T]][31])>

where F: [FnMut][120]([&T][28]) -> [bool][9],

🔬This is a nightly-only experimental API. (`slice_split_once`)

Splits the slice on the last element that matches the specified predicate.

If any matching elements are present in the slice, returns the prefix before the match and suffix after. The matching element itself is not included. If no elements match, returns `None`.

##### §Examples
[code] 
    #![feature(slice_split_once)]
    let s = [1, 2, 3, 2, 4];
    assert_eq!(s.rsplit_once(|&x| x == 2), Some((
        &[1, 2, 3][..],
        &[4][..]
    )));
    assert_eq!(s.rsplit_once(|&x| x == 0), None);
[/code]

1.0.0 · [Source][155]

#### pub fn contains(&self, x: [&T][28]) -> [bool][9]

where T: [PartialEq][156],

Returns `true` if the slice contains an element with the given value.

This operation is _O_(_n_).

Note that if you have a sorted slice, [`binary_search`][157] may be faster.

##### §Examples
[code] 
    let v = [10, 40, 30];
    assert!(v.contains(&30));
    assert!(!v.contains(&50));
[/code]

If you do not have a `&T`, but some other value that you can compare with one (for example, `String` implements `PartialEq<str>`), you can use `iter().any`:
[code] 
    let v = [String::from("hello"), String::from("world")]; // slice of `String`
    assert!(v.iter().any(|e| e == "hello")); // search with `&str`
    assert!(!v.iter().any(|e| e == "hi"));
[/code]

1.0.0 · [Source][158]

#### pub fn starts_with(&self, needle: &[[T]][31]) -> [bool][9]

where T: [PartialEq][156],

Returns `true` if `needle` is a prefix of the slice or equal to the slice.

##### §Examples
[code] 
    let v = [10, 40, 30];
    assert!(v.starts_with(&[10]));
    assert!(v.starts_with(&[10, 40]));
    assert!(v.starts_with(&v));
    assert!(!v.starts_with(&[50]));
    assert!(!v.starts_with(&[10, 50]));
[/code]

Always returns `true` if `needle` is an empty slice:
[code] 
    let v = &[10, 40, 30];
    assert!(v.starts_with(&[]));
    let v: &[u8] = &[];
    assert!(v.starts_with(&[]));
[/code]

1.0.0 · [Source][159]

#### pub fn ends_with(&self, needle: &[[T]][31]) -> [bool][9]

where T: [PartialEq][156],

Returns `true` if `needle` is a suffix of the slice or equal to the slice.

##### §Examples
[code] 
    let v = [10, 40, 30];
    assert!(v.ends_with(&[30]));
    assert!(v.ends_with(&[40, 30]));
    assert!(v.ends_with(&v));
    assert!(!v.ends_with(&[50]));
    assert!(!v.ends_with(&[50, 30]));
[/code]

Always returns `true` if `needle` is an empty slice:
[code] 
    let v = &[10, 40, 30];
    assert!(v.ends_with(&[]));
    let v: &[u8] = &[];
    assert!(v.ends_with(&[]));
[/code]

1.51.0 · [Source][160]

#### pub fn strip_prefix<P>(&self, prefix: [&P][28]) -> [Option][11]<&[[T]][31]>

where P: [SlicePattern][161]<Item = T> \+ ?[Sized][162], T: [PartialEq][156],

Returns a subslice with the prefix removed.

If the slice starts with `prefix`, returns the subslice after the prefix, wrapped in `Some`. If `prefix` is empty, simply returns the original slice. If `prefix` is equal to the original slice, returns an empty slice.

If the slice does not start with `prefix`, returns `None`.

##### §Examples
[code] 
    let v = &[10, 40, 30];
    assert_eq!(v.strip_prefix(&[10]), Some(&[40, 30][..]));
    assert_eq!(v.strip_prefix(&[10, 40]), Some(&[30][..]));
    assert_eq!(v.strip_prefix(&[10, 40, 30]), Some(&[][..]));
    assert_eq!(v.strip_prefix(&[50]), None);
    assert_eq!(v.strip_prefix(&[10, 50]), None);
    
    let prefix : &str = "he";
    assert_eq!(b"hello".strip_prefix(prefix.as_bytes()),
               Some(b"llo".as_ref()));
[/code]

1.51.0 · [Source][163]

#### pub fn strip_suffix<P>(&self, suffix: [&P][28]) -> [Option][11]<&[[T]][31]>

where P: [SlicePattern][161]<Item = T> \+ ?[Sized][162], T: [PartialEq][156],

Returns a subslice with the suffix removed.

If the slice ends with `suffix`, returns the subslice before the suffix, wrapped in `Some`. If `suffix` is empty, simply returns the original slice. If `suffix` is equal to the original slice, returns an empty slice.

If the slice does not end with `suffix`, returns `None`.

##### §Examples
[code] 
    let v = &[10, 40, 30];
    assert_eq!(v.strip_suffix(&[30]), Some(&[10, 40][..]));
    assert_eq!(v.strip_suffix(&[40, 30]), Some(&[10][..]));
    assert_eq!(v.strip_suffix(&[10, 40, 30]), Some(&[][..]));
    assert_eq!(v.strip_suffix(&[50]), None);
    assert_eq!(v.strip_suffix(&[50, 30]), None);
[/code]

[Source][164]

#### pub fn strip_circumfix<S, P>(&self, prefix: [&P][28], suffix: [&S][28]) -> [Option][11]<&[[T]][31]>

where T: [PartialEq][156], S: [SlicePattern][161]<Item = T> \+ ?[Sized][162], P: [SlicePattern][161]<Item = T> \+ ?[Sized][162],

🔬This is a nightly-only experimental API. (`strip_circumfix`)

Returns a subslice with the prefix and suffix removed.

If the slice starts with `prefix` and ends with `suffix`, returns the subslice after the prefix and before the suffix, wrapped in `Some`.

If the slice does not start with `prefix` or does not end with `suffix`, returns `None`.

##### §Examples
[code] 
    #![feature(strip_circumfix)]
    
    let v = &[10, 50, 40, 30];
    assert_eq!(v.strip_circumfix(&[10], &[30]), Some(&[50, 40][..]));
    assert_eq!(v.strip_circumfix(&[10], &[40, 30]), Some(&[50][..]));
    assert_eq!(v.strip_circumfix(&[10, 50], &[40, 30]), Some(&[][..]));
    assert_eq!(v.strip_circumfix(&[50], &[30]), None);
    assert_eq!(v.strip_circumfix(&[10], &[40]), None);
    assert_eq!(v.strip_circumfix(&[], &[40, 30]), Some(&[10, 50][..]));
    assert_eq!(v.strip_circumfix(&[10, 50], &[]), Some(&[40, 30][..]));
[/code]

[Source][165]

#### pub fn trim_prefix<P>(&self, prefix: [&P][28]) -> &[[T]][31]

where P: [SlicePattern][161]<Item = T> \+ ?[Sized][162], T: [PartialEq][156],

🔬This is a nightly-only experimental API. (`trim_prefix_suffix`)

Returns a subslice with the optional prefix removed.

If the slice starts with `prefix`, returns the subslice after the prefix. If `prefix` is empty or the slice does not start with `prefix`, simply returns the original slice. If `prefix` is equal to the original slice, returns an empty slice.

##### §Examples
[code] 
    #![feature(trim_prefix_suffix)]
    
    let v = &[10, 40, 30];
    
    // Prefix present - removes it
    assert_eq!(v.trim_prefix(&[10]), &[40, 30][..]);
    assert_eq!(v.trim_prefix(&[10, 40]), &[30][..]);
    assert_eq!(v.trim_prefix(&[10, 40, 30]), &[][..]);
    
    // Prefix absent - returns original slice
    assert_eq!(v.trim_prefix(&[50]), &[10, 40, 30][..]);
    assert_eq!(v.trim_prefix(&[10, 50]), &[10, 40, 30][..]);
    
    let prefix : &str = "he";
    assert_eq!(b"hello".trim_prefix(prefix.as_bytes()), b"llo".as_ref());
[/code]

[Source][166]

#### pub fn trim_suffix<P>(&self, suffix: [&P][28]) -> &[[T]][31]

where P: [SlicePattern][161]<Item = T> \+ ?[Sized][162], T: [PartialEq][156],

🔬This is a nightly-only experimental API. (`trim_prefix_suffix`)

Returns a subslice with the optional suffix removed.

If the slice ends with `suffix`, returns the subslice before the suffix. If `suffix` is empty or the slice does not end with `suffix`, simply returns the original slice. If `suffix` is equal to the original slice, returns an empty slice.

##### §Examples
[code] 
    #![feature(trim_prefix_suffix)]
    
    let v = &[10, 40, 30];
    
    // Suffix present - removes it
    assert_eq!(v.trim_suffix(&[30]), &[10, 40][..]);
    assert_eq!(v.trim_suffix(&[40, 30]), &[10][..]);
    assert_eq!(v.trim_suffix(&[10, 40, 30]), &[][..]);
    
    // Suffix absent - returns original slice
    assert_eq!(v.trim_suffix(&[50]), &[10, 40, 30][..]);
    assert_eq!(v.trim_suffix(&[50, 30]), &[10, 40, 30][..]);
[/code]

1.0.0 · [Source][167]

#### pub fn binary_search(&self, x: [&T][28]) -> [Result][168]<[usize][25], [usize][25]>

where T: [Ord][169],

Binary searches this slice for a given element. If the slice is not sorted, the returned result is unspecified and meaningless.

If the value is found then [`Result::Ok`][170] is returned, containing the index of the matching element. If there are multiple matches, then any one of the matches could be returned. The index is chosen deterministically, but is subject to change in future versions of Rust. If the value is not found then [`Result::Err`][171] is returned, containing the index where a matching element could be inserted while maintaining sorted order.

See also [`binary_search_by`][172], [`binary_search_by_key`][173], and [`partition_point`][174].

##### §Examples

Looks up a series of four elements. The first is found, with a uniquely determined position; the second and third are not found; the fourth could match any position in `[1, 4]`.
[code] 
    let s = [0, 1, 1, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    
    assert_eq!(s.binary_search(&13),  Ok(9));
    assert_eq!(s.binary_search(&4),   Err(7));
    assert_eq!(s.binary_search(&100), Err(13));
    let r = s.binary_search(&1);
    assert!(match r { Ok(1..=4) => true, _ => false, });
[/code]

If you want to find that whole _range_ of matching items, rather than an arbitrary matching one, that can be done using [`partition_point`][174]:
[code] 
    let s = [0, 1, 1, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    
    let low = s.partition_point(|x| x < &1);
    assert_eq!(low, 1);
    let high = s.partition_point(|x| x <= &1);
    assert_eq!(high, 5);
    let r = s.binary_search(&1);
    assert!((low..high).contains(&r.unwrap()));
    
    assert!(s[..low].iter().all(|&x| x < 1));
    assert!(s[low..high].iter().all(|&x| x == 1));
    assert!(s[high..].iter().all(|&x| x > 1));
    
    // For something not found, the "range" of equal items is empty
    assert_eq!(s.partition_point(|x| x < &11), 9);
    assert_eq!(s.partition_point(|x| x <= &11), 9);
    assert_eq!(s.binary_search(&11), Err(9));
[/code]

If you want to insert an item to a sorted vector, while maintaining sort order, consider using [`partition_point`][174]:
[code] 
    let mut s = vec![0, 1, 1, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    let num = 42;
    let idx = s.partition_point(|&x| x <= num);
    // If `num` is unique, `s.partition_point(|&x| x < num)` (with `<`) is equivalent to
    // `s.binary_search(&num).unwrap_or_else(|x| x)`, but using `<=` will allow `insert`
    // to shift less elements.
    s.insert(idx, num);
    assert_eq!(s, [0, 1, 1, 1, 1, 2, 3, 5, 8, 13, 21, 34, 42, 55]);
[/code]

1.0.0 · [Source][175]

#### pub fn binary_search_by<'a, F>(&'a self, f: F) -> [Result][168]<[usize][25], [usize][25]>

where F: [FnMut][120]([&'a T][28]) -> [Ordering][176],

Binary searches this slice with a comparator function.

The comparator function should return an order code that indicates whether its argument is `Less`, `Equal` or `Greater` the desired target. If the slice is not sorted or if the comparator function does not implement an order consistent with the sort order of the underlying slice, the returned result is unspecified and meaningless.

If the value is found then [`Result::Ok`][170] is returned, containing the index of the matching element. If there are multiple matches, then any one of the matches could be returned. The index is chosen deterministically, but is subject to change in future versions of Rust. If the value is not found then [`Result::Err`][171] is returned, containing the index where a matching element could be inserted while maintaining sorted order.

See also [`binary_search`][157], [`binary_search_by_key`][173], and [`partition_point`][174].

##### §Examples

Looks up a series of four elements. The first is found, with a uniquely determined position; the second and third are not found; the fourth could match any position in `[1, 4]`.
[code] 
    let s = [0, 1, 1, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    
    let seek = 13;
    assert_eq!(s.binary_search_by(|probe| probe.cmp(&seek)), Ok(9));
    let seek = 4;
    assert_eq!(s.binary_search_by(|probe| probe.cmp(&seek)), Err(7));
    let seek = 100;
    assert_eq!(s.binary_search_by(|probe| probe.cmp(&seek)), Err(13));
    let seek = 1;
    let r = s.binary_search_by(|probe| probe.cmp(&seek));
    assert!(match r { Ok(1..=4) => true, _ => false, });
[/code]

1.10.0 · [Source][177]

#### pub fn binary_search_by_key<'a, B, F>( &'a self, b: [&B][28], f: F, ) -> [Result][168]<[usize][25], [usize][25]>

where F: [FnMut][120]([&'a T][28]) -> B, B: [Ord][169],

Binary searches this slice with a key extraction function.

Assumes that the slice is sorted by the key, for instance with [`sort_by_key`][178] using the same key extraction function. If the slice is not sorted by the key, the returned result is unspecified and meaningless.

If the value is found then [`Result::Ok`][170] is returned, containing the index of the matching element. If there are multiple matches, then any one of the matches could be returned. The index is chosen deterministically, but is subject to change in future versions of Rust. If the value is not found then [`Result::Err`][171] is returned, containing the index where a matching element could be inserted while maintaining sorted order.

See also [`binary_search`][157], [`binary_search_by`][172], and [`partition_point`][174].

##### §Examples

Looks up a series of four elements in a slice of pairs sorted by their second elements. The first is found, with a uniquely determined position; the second and third are not found; the fourth could match any position in `[1, 4]`.
[code] 
    let s = [(0, 0), (2, 1), (4, 1), (5, 1), (3, 1),
             (1, 2), (2, 3), (4, 5), (5, 8), (3, 13),
             (1, 21), (2, 34), (4, 55)];
    
    assert_eq!(s.binary_search_by_key(&13, |&(a, b)| b),  Ok(9));
    assert_eq!(s.binary_search_by_key(&4, |&(a, b)| b),   Err(7));
    assert_eq!(s.binary_search_by_key(&100, |&(a, b)| b), Err(13));
    let r = s.binary_search_by_key(&1, |&(a, b)| b);
    assert!(match r { Ok(1..=4) => true, _ => false, });
[/code]

1.20.0 · [Source][179]

#### pub fn sort_unstable(&mut self)

where T: [Ord][169],

Sorts the slice in ascending order **without** preserving the initial order of equal elements.

This sort is unstable (i.e., may reorder equal elements), in-place (i.e., does not allocate), and _O_(_n_ * log(_n_)) worst-case.

If the implementation of [`Ord`][169] for `T` does not implement a [total order][180], the function may panic; even if the function exits normally, the resulting order of elements in the slice is unspecified. See also the note on panicking below.

For example `|a, b| (a - b).cmp(a)` is a comparison function that is neither transitive nor reflexive nor total, `a < b < c < a` with `a = 1, b = 2, c = 3`. For more information and examples see the [`Ord`][169] documentation.

All original elements will remain in the slice and any possible modifications via interior mutability are observed in the input. Same is true if the implementation of [`Ord`][169] for `T` panics.

Sorting types that only implement [`PartialOrd`][181] such as [`f32`][182] and [`f64`][183] require additional precautions. For example, `f32::NAN != f32::NAN`, which doesn’t fulfill the reflexivity requirement of [`Ord`][169]. By using an alternative comparison function with `slice::sort_unstable_by` such as [`f32::total_cmp`][184] or [`f64::total_cmp`][185] that defines a [total order][180] users can sort slices containing floating-point values. Alternatively, if all values in the slice are guaranteed to be in a subset for which [`PartialOrd::partial_cmp`][186] forms a [total order][180], it’s possible to sort the slice with `sort_unstable_by(|a, b| a.partial_cmp(b).unwrap())`.

##### §Current implementation

The current implementation is based on [ipnsort][187] by Lukas Bergdoll and Orson Peters, which combines the fast average case of quicksort with the fast worst case of heapsort, achieving linear time on fully sorted and reversed inputs. On inputs with k distinct elements, the expected time to sort the data is _O_(_n_ * log(_k_)).

It is typically faster than stable sorting, except in a few special cases, e.g., when the slice is partially sorted.

##### §Panics

May panic if the implementation of [`Ord`][169] for `T` does not implement a [total order][180], or if the [`Ord`][169] implementation panics.

##### §Examples
[code] 
    let mut v = [4, -5, 1, -3, 2];
    
    v.sort_unstable();
    assert_eq!(v, [-5, -3, 1, 2, 4]);
[/code]

1.20.0 · [Source][188]

#### pub fn sort_unstable_by<F>(&mut self, compare: F)

where F: [FnMut][120]([&T][28], [&T][28]) -> [Ordering][176],

Sorts the slice in ascending order with a comparison function, **without** preserving the initial order of equal elements.

This sort is unstable (i.e., may reorder equal elements), in-place (i.e., does not allocate), and _O_(_n_ * log(_n_)) worst-case.

If the comparison function `compare` does not implement a [total order][180], the function may panic; even if the function exits normally, the resulting order of elements in the slice is unspecified. See also the note on panicking below.

For example `|a, b| (a - b).cmp(a)` is a comparison function that is neither transitive nor reflexive nor total, `a < b < c < a` with `a = 1, b = 2, c = 3`. For more information and examples see the [`Ord`][169] documentation.

All original elements will remain in the slice and any possible modifications via interior mutability are observed in the input. Same is true if `compare` panics.

##### §Current implementation

The current implementation is based on [ipnsort][187] by Lukas Bergdoll and Orson Peters, which combines the fast average case of quicksort with the fast worst case of heapsort, achieving linear time on fully sorted and reversed inputs. On inputs with k distinct elements, the expected time to sort the data is _O_(_n_ * log(_k_)).

It is typically faster than stable sorting, except in a few special cases, e.g., when the slice is partially sorted.

##### §Panics

May panic if the `compare` does not implement a [total order][180], or if the `compare` itself panics.

##### §Examples
[code] 
    let mut v = [4, -5, 1, -3, 2];
    v.sort_unstable_by(|a, b| a.cmp(b));
    assert_eq!(v, [-5, -3, 1, 2, 4]);
    
    // reverse sorting
    v.sort_unstable_by(|a, b| b.cmp(a));
    assert_eq!(v, [4, 2, 1, -3, -5]);
[/code]

1.20.0 · [Source][189]

#### pub fn sort_unstable_by_key<K, F>(&mut self, f: F)

where F: [FnMut][120]([&T][28]) -> K, K: [Ord][169],

Sorts the slice in ascending order with a key extraction function, **without** preserving the initial order of equal elements.

This sort is unstable (i.e., may reorder equal elements), in-place (i.e., does not allocate), and _O_(_n_ * log(_n_)) worst-case.

If the implementation of [`Ord`][169] for `K` does not implement a [total order][180], the function may panic; even if the function exits normally, the resulting order of elements in the slice is unspecified. See also the note on panicking below.

For example `|a, b| (a - b).cmp(a)` is a comparison function that is neither transitive nor reflexive nor total, `a < b < c < a` with `a = 1, b = 2, c = 3`. For more information and examples see the [`Ord`][169] documentation.

All original elements will remain in the slice and any possible modifications via interior mutability are observed in the input. Same is true if the implementation of [`Ord`][169] for `K` panics.

##### §Current implementation

The current implementation is based on [ipnsort][187] by Lukas Bergdoll and Orson Peters, which combines the fast average case of quicksort with the fast worst case of heapsort, achieving linear time on fully sorted and reversed inputs. On inputs with k distinct elements, the expected time to sort the data is _O_(_n_ * log(_k_)).

It is typically faster than stable sorting, except in a few special cases, e.g., when the slice is partially sorted.

##### §Panics

May panic if the implementation of [`Ord`][169] for `K` does not implement a [total order][180], or if the [`Ord`][169] implementation panics.

##### §Examples
[code] 
    let mut v = [4i32, -5, 1, -3, 2];
    
    v.sort_unstable_by_key(|k| k.abs());
    assert_eq!(v, [1, 2, -3, 4, -5]);
[/code]

[Source][190]

#### pub fn partial_sort_unstable<R>(&mut self, range: R)

where T: [Ord][169], R: [RangeBounds][191]<[usize][25]>,

🔬This is a nightly-only experimental API. (`slice_partial_sort_unstable`)

Partially sorts the slice in ascending order **without** preserving the initial order of equal elements.

Upon completion, for the specified range `start..end`, it’s guaranteed that:

  1. Every element in `self[..start]` is smaller than or equal to
  2. Every element in `self[start..end]`, which is sorted, and smaller than or equal to
  3. Every element in `self[end..]`.



This partial sort is unstable, meaning it may reorder equal elements in the specified range. It may reorder elements outside the specified range as well, but the guarantees above still hold.

This partial sort is in-place (i.e., does not allocate), and _O_(_n_ \+ _k_ * log(_k_)) worst-case, where _n_ is the length of the slice and _k_ is the length of the specified range.

See the documentation of [`sort_unstable`][192] for implementation notes.

##### §Panics

May panic if the implementation of [`Ord`][169] for `T` does not implement a total order, or if the [`Ord`][169] implementation panics, or if the specified range is out of bounds.

##### §Examples
[code] 
    #![feature(slice_partial_sort_unstable)]
    
    let mut v = [4, -5, 1, -3, 2];
    
    // empty range at the beginning, nothing changed
    v.partial_sort_unstable(0..0);
    assert_eq!(v, [4, -5, 1, -3, 2]);
    
    // empty range in the middle, partitioning the slice
    v.partial_sort_unstable(2..2);
    for i in 0..2 {
       assert!(v[i] <= v[2]);
    }
    for i in 3..v.len() {
      assert!(v[2] <= v[i]);
    }
    
    // single element range, same as select_nth_unstable
    v.partial_sort_unstable(2..3);
    for i in 0..2 {
       assert!(v[i] <= v[2]);
    }
    for i in 3..v.len() {
      assert!(v[2] <= v[i]);
    }
    
    // partial sort a subrange
    v.partial_sort_unstable(1..4);
    assert_eq!(&v[1..4], [-3, 1, 2]);
    
    // partial sort the whole range, same as sort_unstable
    v.partial_sort_unstable(..);
    assert_eq!(v, [-5, -3, 1, 2, 4]);
[/code]

[Source][193]

#### pub fn partial_sort_unstable_by<F, R>(&mut self, range: R, compare: F)

where F: [FnMut][120]([&T][28], [&T][28]) -> [Ordering][176], R: [RangeBounds][191]<[usize][25]>,

🔬This is a nightly-only experimental API. (`slice_partial_sort_unstable`)

Partially sorts the slice in ascending order with a comparison function, **without** preserving the initial order of equal elements.

Upon completion, for the specified range `start..end`, it’s guaranteed that:

  1. Every element in `self[..start]` is smaller than or equal to
  2. Every element in `self[start..end]`, which is sorted, and smaller than or equal to
  3. Every element in `self[end..]`.



This partial sort is unstable, meaning it may reorder equal elements in the specified range. It may reorder elements outside the specified range as well, but the guarantees above still hold.

This partial sort is in-place (i.e., does not allocate), and _O_(_n_ \+ _k_ * log(_k_)) worst-case, where _n_ is the length of the slice and _k_ is the length of the specified range.

See the documentation of [`sort_unstable_by`][194] for implementation notes.

##### §Panics

May panic if the `compare` does not implement a total order, or if the `compare` itself panics, or if the specified range is out of bounds.

##### §Examples
[code] 
    #![feature(slice_partial_sort_unstable)]
    
    let mut v = [4, -5, 1, -3, 2];
    
    // empty range at the beginning, nothing changed
    v.partial_sort_unstable_by(0..0, |a, b| b.cmp(a));
    assert_eq!(v, [4, -5, 1, -3, 2]);
    
    // empty range in the middle, partitioning the slice
    v.partial_sort_unstable_by(2..2, |a, b| b.cmp(a));
    for i in 0..2 {
       assert!(v[i] >= v[2]);
    }
    for i in 3..v.len() {
      assert!(v[2] >= v[i]);
    }
    
    // single element range, same as select_nth_unstable
    v.partial_sort_unstable_by(2..3, |a, b| b.cmp(a));
    for i in 0..2 {
       assert!(v[i] >= v[2]);
    }
    for i in 3..v.len() {
      assert!(v[2] >= v[i]);
    }
    
    // partial sort a subrange
    v.partial_sort_unstable_by(1..4, |a, b| b.cmp(a));
    assert_eq!(&v[1..4], [2, 1, -3]);
    
    // partial sort the whole range, same as sort_unstable
    v.partial_sort_unstable_by(.., |a, b| b.cmp(a));
    assert_eq!(v, [4, 2, 1, -3, -5]);
[/code]

[Source][195]

#### pub fn partial_sort_unstable_by_key<K, F, R>(&mut self, range: R, f: F)

where F: [FnMut][120]([&T][28]) -> K, K: [Ord][169], R: [RangeBounds][191]<[usize][25]>,

🔬This is a nightly-only experimental API. (`slice_partial_sort_unstable`)

Partially sorts the slice in ascending order with a key extraction function, **without** preserving the initial order of equal elements.

Upon completion, for the specified range `start..end`, it’s guaranteed that:

  1. Every element in `self[..start]` is smaller than or equal to
  2. Every element in `self[start..end]`, which is sorted, and smaller than or equal to
  3. Every element in `self[end..]`.



This partial sort is unstable, meaning it may reorder equal elements in the specified range. It may reorder elements outside the specified range as well, but the guarantees above still hold.

This partial sort is in-place (i.e., does not allocate), and _O_(_n_ \+ _k_ * log(_k_)) worst-case, where _n_ is the length of the slice and _k_ is the length of the specified range.

See the documentation of [`sort_unstable_by_key`][196] for implementation notes.

##### §Panics

May panic if the implementation of [`Ord`][169] for `K` does not implement a total order, or if the [`Ord`][169] implementation panics, or if the specified range is out of bounds.

##### §Examples
[code] 
    #![feature(slice_partial_sort_unstable)]
    
    let mut v = [4i32, -5, 1, -3, 2];
    
    // empty range at the beginning, nothing changed
    v.partial_sort_unstable_by_key(0..0, |k| k.abs());
    assert_eq!(v, [4, -5, 1, -3, 2]);
    
    // empty range in the middle, partitioning the slice
    v.partial_sort_unstable_by_key(2..2, |k| k.abs());
    for i in 0..2 {
       assert!(v[i].abs() <= v[2].abs());
    }
    for i in 3..v.len() {
      assert!(v[2].abs() <= v[i].abs());
    }
    
    // single element range, same as select_nth_unstable
    v.partial_sort_unstable_by_key(2..3, |k| k.abs());
    for i in 0..2 {
       assert!(v[i].abs() <= v[2].abs());
    }
    for i in 3..v.len() {
      assert!(v[2].abs() <= v[i].abs());
    }
    
    // partial sort a subrange
    v.partial_sort_unstable_by_key(1..4, |k| k.abs());
    assert_eq!(&v[1..4], [2, -3, 4]);
    
    // partial sort the whole range, same as sort_unstable
    v.partial_sort_unstable_by_key(.., |k| k.abs());
    assert_eq!(v, [1, 2, -3, 4, -5]);
[/code]

1.49.0 · [Source][197]

#### pub fn select_nth_unstable( &mut self, index: [usize][25], ) -> (&mut [[T]][31], [&mut T][28], &mut [[T]][31])

where T: [Ord][169],

Reorders the slice such that the element at `index` is at a sort-order position. All elements before `index` will be `<=` to this value, and all elements after will be `>=` to it.

This reordering is unstable (i.e. any element that compares equal to the nth element may end up at that position), in-place (i.e. does not allocate), and runs in _O_(_n_) time. This function is also known as “kth element” in other libraries.

Returns a triple that partitions the reordered slice:

  * The unsorted subslice before `index`, whose elements all satisfy `x <= self[index]`.

  * The element at `index`.

  * The unsorted subslice after `index`, whose elements all satisfy `x >= self[index]`.




##### §Current implementation

The current algorithm is an introselect implementation based on [ipnsort][187] by Lukas Bergdoll and Orson Peters, which is also the basis for [`sort_unstable`][192]. The fallback algorithm is Median of Medians using Tukey’s Ninther for pivot selection, which guarantees linear runtime for all inputs.

##### §Panics

Panics when `index >= len()`, and so always panics on empty slices.

May panic if the implementation of [`Ord`][169] for `T` does not implement a [total order][180].

##### §Examples
[code] 
    let mut v = [-5i32, 4, 2, -3, 1];
    
    // Find the items `<=` to the median, the median itself, and the items `>=` to it.
    let (lesser, median, greater) = v.select_nth_unstable(2);
    
    assert!(lesser == [-3, -5] || lesser == [-5, -3]);
    assert_eq!(median, &mut 1);
    assert!(greater == [4, 2] || greater == [2, 4]);
    
    // We are only guaranteed the slice will be one of the following, based on the way we sort
    // about the specified index.
    assert!(v == [-3, -5, 1, 2, 4] ||
            v == [-5, -3, 1, 2, 4] ||
            v == [-3, -5, 1, 4, 2] ||
            v == [-5, -3, 1, 4, 2]);
[/code]

1.49.0 · [Source][198]

#### pub fn select_nth_unstable_by<F>( &mut self, index: [usize][25], compare: F, ) -> (&mut [[T]][31], [&mut T][28], &mut [[T]][31])

where F: [FnMut][120]([&T][28], [&T][28]) -> [Ordering][176],

Reorders the slice with a comparator function such that the element at `index` is at a sort-order position. All elements before `index` will be `<=` to this value, and all elements after will be `>=` to it, according to the comparator function.

This reordering is unstable (i.e. any element that compares equal to the nth element may end up at that position), in-place (i.e. does not allocate), and runs in _O_(_n_) time. This function is also known as “kth element” in other libraries.

Returns a triple partitioning the reordered slice:

  * The unsorted subslice before `index`, whose elements all satisfy `compare(x, self[index]).is_le()`.

  * The element at `index`.

  * The unsorted subslice after `index`, whose elements all satisfy `compare(x, self[index]).is_ge()`.




##### §Current implementation

The current algorithm is an introselect implementation based on [ipnsort][187] by Lukas Bergdoll and Orson Peters, which is also the basis for [`sort_unstable`][192]. The fallback algorithm is Median of Medians using Tukey’s Ninther for pivot selection, which guarantees linear runtime for all inputs.

##### §Panics

Panics when `index >= len()`, and so always panics on empty slices.

May panic if `compare` does not implement a [total order][180].

##### §Examples
[code] 
    let mut v = [-5i32, 4, 2, -3, 1];
    
    // Find the items `>=` to the median, the median itself, and the items `<=` to it, by using
    // a reversed comparator.
    let (before, median, after) = v.select_nth_unstable_by(2, |a, b| b.cmp(a));
    
    assert!(before == [4, 2] || before == [2, 4]);
    assert_eq!(median, &mut 1);
    assert!(after == [-3, -5] || after == [-5, -3]);
    
    // We are only guaranteed the slice will be one of the following, based on the way we sort
    // about the specified index.
    assert!(v == [2, 4, 1, -5, -3] ||
            v == [2, 4, 1, -3, -5] ||
            v == [4, 2, 1, -5, -3] ||
            v == [4, 2, 1, -3, -5]);
[/code]

1.49.0 · [Source][199]

#### pub fn select_nth_unstable_by_key<K, F>( &mut self, index: [usize][25], f: F, ) -> (&mut [[T]][31], [&mut T][28], &mut [[T]][31])

where F: [FnMut][120]([&T][28]) -> K, K: [Ord][169],

Reorders the slice with a key extraction function such that the element at `index` is at a sort-order position. All elements before `index` will have keys `<=` to the key at `index`, and all elements after will have keys `>=` to it.

This reordering is unstable (i.e. any element that compares equal to the nth element may end up at that position), in-place (i.e. does not allocate), and runs in _O_(_n_) time. This function is also known as “kth element” in other libraries.

Returns a triple partitioning the reordered slice:

  * The unsorted subslice before `index`, whose elements all satisfy `f(x) <= f(self[index])`.

  * The element at `index`.

  * The unsorted subslice after `index`, whose elements all satisfy `f(x) >= f(self[index])`.




##### §Current implementation

The current algorithm is an introselect implementation based on [ipnsort][187] by Lukas Bergdoll and Orson Peters, which is also the basis for [`sort_unstable`][192]. The fallback algorithm is Median of Medians using Tukey’s Ninther for pivot selection, which guarantees linear runtime for all inputs.

##### §Panics

Panics when `index >= len()`, meaning it always panics on empty slices.

May panic if `K: Ord` does not implement a total order.

##### §Examples
[code] 
    let mut v = [-5i32, 4, 1, -3, 2];
    
    // Find the items `<=` to the absolute median, the absolute median itself, and the items
    // `>=` to it.
    let (lesser, median, greater) = v.select_nth_unstable_by_key(2, |a| a.abs());
    
    assert!(lesser == [1, 2] || lesser == [2, 1]);
    assert_eq!(median, &mut -3);
    assert!(greater == [4, -5] || greater == [-5, 4]);
    
    // We are only guaranteed the slice will be one of the following, based on the way we sort
    // about the specified index.
    assert!(v == [1, 2, -3, 4, -5] ||
            v == [1, 2, -3, -5, 4] ||
            v == [2, 1, -3, 4, -5] ||
            v == [2, 1, -3, -5, 4]);
[/code]

[Source][200]

#### pub fn partition_dedup(&mut self) -> (&mut [[T]][31], &mut [[T]][31])

where T: [PartialEq][156],

🔬This is a nightly-only experimental API. (`slice_partition_dedup`)

Moves all consecutive repeated elements to the end of the slice according to the [`PartialEq`][156] trait implementation.

Returns two slices. The first contains no consecutive repeated elements. The second contains all the duplicates in no specified order.

If the slice is sorted, the first returned slice contains no duplicates.

##### §Examples
[code] 
    #![feature(slice_partition_dedup)]
    
    let mut slice = [1, 2, 2, 3, 3, 2, 1, 1];
    
    let (dedup, duplicates) = slice.partition_dedup();
    
    assert_eq!(dedup, [1, 2, 3, 2, 1]);
    assert_eq!(duplicates, [2, 3, 1]);
[/code]

[Source][201]

#### pub fn partition_dedup_by<F>(&mut self, same_bucket: F) -> (&mut [[T]][31], &mut [[T]][31])

where F: [FnMut][120]([&mut T][28], [&mut T][28]) -> [bool][9],

🔬This is a nightly-only experimental API. (`slice_partition_dedup`)

Moves all but the first of consecutive elements to the end of the slice satisfying a given equality relation.

Returns two slices. The first contains no consecutive repeated elements. The second contains all the duplicates in no specified order.

The `same_bucket` function is passed references to two elements from the slice and must determine if the elements compare equal. The elements are passed in opposite order from their order in the slice, so if `same_bucket(a, b)` returns `true`, `a` is moved at the end of the slice.

If the slice is sorted, the first returned slice contains no duplicates.

##### §Examples
[code] 
    #![feature(slice_partition_dedup)]
    
    let mut slice = ["foo", "Foo", "BAZ", "Bar", "bar", "baz", "BAZ"];
    
    let (dedup, duplicates) = slice.partition_dedup_by(|a, b| a.eq_ignore_ascii_case(b));
    
    assert_eq!(dedup, ["foo", "BAZ", "Bar", "baz"]);
    assert_eq!(duplicates, ["bar", "Foo", "BAZ"]);
[/code]

[Source][202]

#### pub fn partition_dedup_by_key<K, F>(&mut self, key: F) -> (&mut [[T]][31], &mut [[T]][31])

where F: [FnMut][120]([&mut T][28]) -> K, K: [PartialEq][156],

🔬This is a nightly-only experimental API. (`slice_partition_dedup`)

Moves all but the first of consecutive elements to the end of the slice that resolve to the same key.

Returns two slices. The first contains no consecutive repeated elements. The second contains all the duplicates in no specified order.

If the slice is sorted, the first returned slice contains no duplicates.

##### §Examples
[code] 
    #![feature(slice_partition_dedup)]
    
    let mut slice = [10, 20, 21, 30, 30, 20, 11, 13];
    
    let (dedup, duplicates) = slice.partition_dedup_by_key(|i| *i / 10);
    
    assert_eq!(dedup, [10, 20, 30, 20, 11]);
    assert_eq!(duplicates, [21, 30, 13]);
[/code]

1.26.0 · [Source][203]

#### pub fn rotate_left(&mut self, mid: [usize][25])

Rotates the slice in-place such that the first `mid` elements of the slice move to the end while the last `self.len() - mid` elements move to the front.

After calling `rotate_left`, the element previously at index `mid` will become the first element in the slice.

##### §Panics

This function will panic if `mid` is greater than the length of the slice. Note that `mid == self.len()` does _not_ panic and is a no-op rotation.

##### §Complexity

Takes linear (in `self.len()`) time.

##### §Examples
[code] 
    let mut a = ['a', 'b', 'c', 'd', 'e', 'f'];
    a.rotate_left(2);
    assert_eq!(a, ['c', 'd', 'e', 'f', 'a', 'b']);
[/code]

Rotating a subslice:
[code] 
    let mut a = ['a', 'b', 'c', 'd', 'e', 'f'];
    a[1..5].rotate_left(1);
    assert_eq!(a, ['a', 'c', 'd', 'e', 'b', 'f']);
[/code]

1.26.0 · [Source][204]

#### pub fn rotate_right(&mut self, k: [usize][25])

Rotates the slice in-place such that the first `self.len() - k` elements of the slice move to the end while the last `k` elements move to the front.

After calling `rotate_right`, the element previously at index `self.len() - k` will become the first element in the slice.

##### §Panics

This function will panic if `k` is greater than the length of the slice. Note that `k == self.len()` does _not_ panic and is a no-op rotation.

##### §Complexity

Takes linear (in `self.len()`) time.

##### §Examples
[code] 
    let mut a = ['a', 'b', 'c', 'd', 'e', 'f'];
    a.rotate_right(2);
    assert_eq!(a, ['e', 'f', 'a', 'b', 'c', 'd']);
[/code]

Rotating a subslice:
[code] 
    let mut a = ['a', 'b', 'c', 'd', 'e', 'f'];
    a[1..5].rotate_right(1);
    assert_eq!(a, ['a', 'e', 'b', 'c', 'd', 'f']);
[/code]

1.50.0 · [Source][205]

#### pub fn fill(&mut self, value: T)

where T: [Clone][206],

Fills `self` with elements by cloning `value`.

##### §Examples
[code] 
    let mut buf = vec![0; 10];
    buf.fill(1);
    assert_eq!(buf, vec![1; 10]);
[/code]

1.51.0 · [Source][207]

#### pub fn fill_with<F>(&mut self, f: F)

where F: [FnMut][120]() -> T,

Fills `self` with elements returned by calling a closure repeatedly.

This method uses a closure to create new values. If you’d rather [`Clone`][206] a given value, use [`fill`][208]. If you want to use the [`Default`][209] trait to generate values, you can pass [`Default::default`][210] as the argument.

##### §Examples
[code] 
    let mut buf = vec![1; 10];
    buf.fill_with(Default::default);
    assert_eq!(buf, vec![0; 10]);
[/code]

1.7.0 · [Source][211]

#### pub fn clone_from_slice(&mut self, src: &[[T]][31])

where T: [Clone][206],

Copies the elements from `src` into `self`.

The length of `src` must be the same as `self`.

##### §Panics

This function will panic if the two slices have different lengths.

##### §Examples

Cloning two elements from a slice into another:
[code] 
    let src = [1, 2, 3, 4];
    let mut dst = [0, 0];
    
    // Because the slices have to be the same length,
    // we slice the source slice from four elements
    // to two. It will panic if we don't do this.
    dst.clone_from_slice(&src[2..]);
    
    assert_eq!(src, [1, 2, 3, 4]);
    assert_eq!(dst, [3, 4]);
[/code]

Rust enforces that there can only be one mutable reference with no immutable references to a particular piece of data in a particular scope. Because of this, attempting to use `clone_from_slice` on a single slice will result in a compile failure:

ⓘ
[code]
    let mut slice = [1, 2, 3, 4, 5];
    
    slice[..2].clone_from_slice(&slice[3..]); // compile fail!
[/code]

To work around this, we can use [`split_at_mut`][130] to create two distinct sub-slices from a slice:
[code] 
    let mut slice = [1, 2, 3, 4, 5];
    
    {
        let (left, right) = slice.split_at_mut(2);
        left.clone_from_slice(&right[1..]);
    }
    
    assert_eq!(slice, [4, 5, 3, 4, 5]);
[/code]

1.9.0 · [Source][212]

#### pub fn copy_from_slice(&mut self, src: &[[T]][31])

where T: [Copy][213],

Copies all elements from `src` into `self`, using a memcpy.

The length of `src` must be the same as `self`.

If `T` does not implement `Copy`, use [`clone_from_slice`][214].

##### §Panics

This function will panic if the two slices have different lengths.

##### §Examples

Copying two elements from a slice into another:
[code] 
    let src = [1, 2, 3, 4];
    let mut dst = [0, 0];
    
    // Because the slices have to be the same length,
    // we slice the source slice from four elements
    // to two. It will panic if we don't do this.
    dst.copy_from_slice(&src[2..]);
    
    assert_eq!(src, [1, 2, 3, 4]);
    assert_eq!(dst, [3, 4]);
[/code]

Rust enforces that there can only be one mutable reference with no immutable references to a particular piece of data in a particular scope. Because of this, attempting to use `copy_from_slice` on a single slice will result in a compile failure:

ⓘ
[code]
    let mut slice = [1, 2, 3, 4, 5];
    
    slice[..2].copy_from_slice(&slice[3..]); // compile fail!
[/code]

To work around this, we can use [`split_at_mut`][130] to create two distinct sub-slices from a slice:
[code] 
    let mut slice = [1, 2, 3, 4, 5];
    
    {
        let (left, right) = slice.split_at_mut(2);
        left.copy_from_slice(&right[1..]);
    }
    
    assert_eq!(slice, [4, 5, 3, 4, 5]);
[/code]

1.37.0 · [Source][215]

#### pub fn copy_within<R>(&mut self, src: R, dest: [usize][25])

where R: [RangeBounds][191]<[usize][25]>, T: [Copy][213],

Copies elements from one part of the slice to another part of itself, using a memmove.

`src` is the range within `self` to copy from. `dest` is the starting index of the range within `self` to copy to, which will have the same length as `src`. The two ranges may overlap. The ends of the two ranges must be less than or equal to `self.len()`.

##### §Panics

This function will panic if either range exceeds the end of the slice, or if the end of `src` is before the start.

##### §Examples

Copying four bytes within a slice:
[code] 
    let mut bytes = *b"Hello, World!";
    
    bytes.copy_within(1..5, 8);
    
    assert_eq!(&bytes, b"Hello, Wello!");
[/code]

1.27.0 · [Source][216]

#### pub fn swap_with_slice(&mut self, other: &mut [[T]][31])

Swaps all elements in `self` with those in `other`.

The length of `other` must be the same as `self`.

##### §Panics

This function will panic if the two slices have different lengths.

##### §Example

Swapping two elements across slices:
[code] 
    let mut slice1 = [0, 0];
    let mut slice2 = [1, 2, 3, 4];
    
    slice1.swap_with_slice(&mut slice2[2..]);
    
    assert_eq!(slice1, [3, 4]);
    assert_eq!(slice2, [1, 2, 0, 0]);
[/code]

Rust enforces that there can only be one mutable reference to a particular piece of data in a particular scope. Because of this, attempting to use `swap_with_slice` on a single slice will result in a compile failure:

ⓘ
[code]
    let mut slice = [1, 2, 3, 4, 5];
    slice[..2].swap_with_slice(&mut slice[3..]); // compile fail!
[/code]

To work around this, we can use [`split_at_mut`][130] to create two distinct mutable sub-slices from a slice:
[code] 
    let mut slice = [1, 2, 3, 4, 5];
    
    {
        let (left, right) = slice.split_at_mut(2);
        left.swap_with_slice(&mut right[1..]);
    }
    
    assert_eq!(slice, [4, 5, 3, 1, 2]);
[/code]

1.30.0 · [Source][217]

#### pub unsafe fn align_to<U>(&self) -> (&[[T]][31], &[[U]][31], &[[T]][31])

Transmutes the slice to a slice of another type, ensuring alignment of the types is maintained.

This method splits the slice into three distinct slices: prefix, correctly aligned middle slice of a new type, and the suffix slice. The middle part will be as big as possible under the given alignment constraint and element size.

This method has no purpose when either input element `T` or output element `U` are zero-sized and will return the original slice without splitting anything.

##### §Safety

This method is essentially a `transmute` with respect to the elements in the returned middle slice, so all the usual caveats pertaining to `transmute::<T, U>` also apply here.

##### §Examples

Basic usage:
[code] 
    unsafe {
        let bytes: [u8; 7] = [1, 2, 3, 4, 5, 6, 7];
        let (prefix, shorts, suffix) = bytes.align_to::<u16>();
        // less_efficient_algorithm_for_bytes(prefix);
        // more_efficient_algorithm_for_aligned_shorts(shorts);
        // less_efficient_algorithm_for_bytes(suffix);
    }
[/code]

1.30.0 · [Source][218]

#### pub unsafe fn align_to_mut<U>(&mut self) -> (&mut [[T]][31], &mut [[U]][31], &mut [[T]][31])

Transmutes the mutable slice to a mutable slice of another type, ensuring alignment of the types is maintained.

This method splits the slice into three distinct slices: prefix, correctly aligned middle slice of a new type, and the suffix slice. The middle part will be as big as possible under the given alignment constraint and element size.

This method has no purpose when either input element `T` or output element `U` are zero-sized and will return the original slice without splitting anything.

##### §Safety

This method is essentially a `transmute` with respect to the elements in the returned middle slice, so all the usual caveats pertaining to `transmute::<T, U>` also apply here.

##### §Examples

Basic usage:
[code] 
    unsafe {
        let mut bytes: [u8; 7] = [1, 2, 3, 4, 5, 6, 7];
        let (prefix, shorts, suffix) = bytes.align_to_mut::<u16>();
        // less_efficient_algorithm_for_bytes(prefix);
        // more_efficient_algorithm_for_aligned_shorts(shorts);
        // less_efficient_algorithm_for_bytes(suffix);
    }
[/code]

[Source][219]

#### pub fn as_simd<const LANES: [usize][25]>(&self) -> (&[[T]][31], &[[Simd][220]<T, LANES>], &[[T]][31])

where [Simd][220]<T, LANES>: [AsRef][221]<[[T; LANES]][38]>, T: [SimdElement][222], [LaneCount][223]<LANES>: [SupportedLaneCount][224],

🔬This is a nightly-only experimental API. (`portable_simd`)

Splits a slice into a prefix, a middle of aligned SIMD types, and a suffix.

This is a safe wrapper around [`slice::align_to`][225], so inherits the same guarantees as that method.

##### §Panics

This will panic if the size of the SIMD type is different from `LANES` times that of the scalar.

At the time of writing, the trait restrictions on `Simd<T, LANES>` keeps that from ever happening, as only power-of-two numbers of lanes are supported. It’s possible that, in the future, those restrictions might be lifted in a way that would make it possible to see panics from this method for something like `LANES == 3`.

##### §Examples
[code] 
    #![feature(portable_simd)]
    use core::simd::prelude::*;
    
    let short = &[1, 2, 3];
    let (prefix, middle, suffix) = short.as_simd::<4>();
    assert_eq!(middle, []); // Not enough elements for anything in the middle
    
    // They might be split in any possible way between prefix and suffix
    let it = prefix.iter().chain(suffix).copied();
    assert_eq!(it.collect::<Vec<_>>(), vec![1, 2, 3]);
    
    fn basic_simd_sum(x: &[f32]) -> f32 {
        use std::ops::Add;
        let (prefix, middle, suffix) = x.as_simd();
        let sums = f32x4::from_array([
            prefix.iter().copied().sum(),
            0.0,
            0.0,
            suffix.iter().copied().sum(),
        ]);
        let sums = middle.iter().copied().fold(sums, f32x4::add);
        sums.reduce_sum()
    }
    
    let numbers: Vec<f32> = (1..101).map(|x| x as _).collect();
    assert_eq!(basic_simd_sum(&numbers[1..99]), 4949.0);
[/code]

[Source][226]

#### pub fn as_simd_mut<const LANES: [usize][25]>( &mut self, ) -> (&mut [[T]][31], &mut [[Simd][220]<T, LANES>], &mut [[T]][31])

where [Simd][220]<T, LANES>: [AsMut][227]<[[T; LANES]][38]>, T: [SimdElement][222], [LaneCount][223]<LANES>: [SupportedLaneCount][224],

🔬This is a nightly-only experimental API. (`portable_simd`)

Splits a mutable slice into a mutable prefix, a middle of aligned SIMD types, and a mutable suffix.

This is a safe wrapper around [`slice::align_to_mut`][228], so inherits the same guarantees as that method.

This is the mutable version of [`slice::as_simd`][229]; see that for examples.

##### §Panics

This will panic if the size of the SIMD type is different from `LANES` times that of the scalar.

At the time of writing, the trait restrictions on `Simd<T, LANES>` keeps that from ever happening, as only power-of-two numbers of lanes are supported. It’s possible that, in the future, those restrictions might be lifted in a way that would make it possible to see panics from this method for something like `LANES == 3`.

1.82.0 · [Source][230]

#### pub fn is_sorted(&self) -> [bool][9]

where T: [PartialOrd][181],

Checks if the elements of this slice are sorted.

That is, for each element `a` and its following element `b`, `a <= b` must hold. If the slice yields exactly zero or one element, `true` is returned.

Note that if `Self::Item` is only `PartialOrd`, but not `Ord`, the above definition implies that this function returns `false` if any two consecutive items are not comparable.

##### §Examples
[code] 
    let empty: [i32; 0] = [];
    
    assert!([1, 2, 2, 9].is_sorted());
    assert!(![1, 3, 2, 4].is_sorted());
    assert!([0].is_sorted());
    assert!(empty.is_sorted());
    assert!(![0.0, 1.0, f32::NAN].is_sorted());
[/code]

1.82.0 · [Source][231]

#### pub fn is_sorted_by<'a, F>(&'a self, compare: F) -> [bool][9]

where F: [FnMut][120]([&'a T][28], [&'a T][28]) -> [bool][9],

Checks if the elements of this slice are sorted using the given comparator function.

Instead of using `PartialOrd::partial_cmp`, this function uses the given `compare` function to determine whether two elements are to be considered in sorted order.

##### §Examples
[code] 
    assert!([1, 2, 2, 9].is_sorted_by(|a, b| a <= b));
    assert!(![1, 2, 2, 9].is_sorted_by(|a, b| a < b));
    
    assert!([0].is_sorted_by(|a, b| true));
    assert!([0].is_sorted_by(|a, b| false));
    
    let empty: [i32; 0] = [];
    assert!(empty.is_sorted_by(|a, b| false));
    assert!(empty.is_sorted_by(|a, b| true));
[/code]

1.82.0 · [Source][232]

#### pub fn is_sorted_by_key<'a, F, K>(&'a self, f: F) -> [bool][9]

where F: [FnMut][120]([&'a T][28]) -> K, K: [PartialOrd][181],

Checks if the elements of this slice are sorted using the given key extraction function.

Instead of comparing the slice’s elements directly, this function compares the keys of the elements, as determined by `f`. Apart from that, it’s equivalent to [`is_sorted`][233]; see its documentation for more information.

##### §Examples
[code] 
    assert!(["c", "bb", "aaa"].is_sorted_by_key(|s| s.len()));
    assert!(![-2i32, -1, 0, 3].is_sorted_by_key(|n| n.abs()));
[/code]

1.52.0 · [Source][234]

#### pub fn partition_point<P>(&self, pred: P) -> [usize][25]

where P: [FnMut][120]([&T][28]) -> [bool][9],

Returns the index of the partition point according to the given predicate (the index of the first element of the second partition).

The slice is assumed to be partitioned according to the given predicate. This means that all elements for which the predicate returns true are at the start of the slice and all elements for which the predicate returns false are at the end. For example, `[7, 15, 3, 5, 4, 12, 6]` is partitioned under the predicate `x % 2 != 0` (all odd numbers are at the start, all even at the end).

If this slice is not partitioned, the returned result is unspecified and meaningless, as this method performs a kind of binary search.

See also [`binary_search`][157], [`binary_search_by`][172], and [`binary_search_by_key`][173].

##### §Examples
[code] 
    let v = [1, 2, 3, 3, 5, 6, 7];
    let i = v.partition_point(|&x| x < 5);
    
    assert_eq!(i, 4);
    assert!(v[..i].iter().all(|&x| x < 5));
    assert!(v[i..].iter().all(|&x| !(x < 5)));
[/code]

If all elements of the slice match the predicate, including if the slice is empty, then the length of the slice will be returned:
[code] 
    let a = [2, 4, 8];
    assert_eq!(a.partition_point(|x| x < &100), a.len());
    let a: [i32; 0] = [];
    assert_eq!(a.partition_point(|x| x < &100), 0);
[/code]

If you want to insert an item to a sorted vector, while maintaining sort order:
[code] 
    let mut s = vec![0, 1, 1, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    let num = 42;
    let idx = s.partition_point(|&x| x <= num);
    s.insert(idx, num);
    assert_eq!(s, [0, 1, 1, 1, 1, 2, 3, 5, 8, 13, 21, 34, 42, 55]);
[/code]

1.87.0 · [Source][235]

#### pub fn split_off<'a, R>(self: &mut &'a [[T]][31], range: R) -> [Option][11]<&'a [[T]][31]>

where R: [OneSidedRange][236]<[usize][25]>,

Removes the subslice corresponding to the given range and returns a reference to it.

Returns `None` and does not modify the slice if the given range is out of bounds.

Note that this method only accepts one-sided ranges such as `2..` or `..6`, but not `2..6`.

##### §Examples

Splitting off the first three elements of a slice:
[code] 
    let mut slice: &[_] = &['a', 'b', 'c', 'd'];
    let mut first_three = slice.split_off(..3).unwrap();
    
    assert_eq!(slice, &['d']);
    assert_eq!(first_three, &['a', 'b', 'c']);
[/code]

Splitting off a slice starting with the third element:
[code] 
    let mut slice: &[_] = &['a', 'b', 'c', 'd'];
    let mut tail = slice.split_off(2..).unwrap();
    
    assert_eq!(slice, &['a', 'b']);
    assert_eq!(tail, &['c', 'd']);
[/code]

Getting `None` when `range` is out of bounds:
[code] 
    let mut slice: &[_] = &['a', 'b', 'c', 'd'];
    
    assert_eq!(None, slice.split_off(5..));
    assert_eq!(None, slice.split_off(..5));
    assert_eq!(None, slice.split_off(..=4));
    let expected: &[char] = &['a', 'b', 'c', 'd'];
    assert_eq!(Some(expected), slice.split_off(..4));
[/code]

1.87.0 · [Source][237]

#### pub fn split_off_mut<'a, R>( self: &mut &'a mut [[T]][31], range: R, ) -> [Option][11]<&'a mut [[T]][31]>

where R: [OneSidedRange][236]<[usize][25]>,

Removes the subslice corresponding to the given range and returns a mutable reference to it.

Returns `None` and does not modify the slice if the given range is out of bounds.

Note that this method only accepts one-sided ranges such as `2..` or `..6`, but not `2..6`.

##### §Examples

Splitting off the first three elements of a slice:
[code] 
    let mut slice: &mut [_] = &mut ['a', 'b', 'c', 'd'];
    let mut first_three = slice.split_off_mut(..3).unwrap();
    
    assert_eq!(slice, &mut ['d']);
    assert_eq!(first_three, &mut ['a', 'b', 'c']);
[/code]

Splitting off a slice starting with the third element:
[code] 
    let mut slice: &mut [_] = &mut ['a', 'b', 'c', 'd'];
    let mut tail = slice.split_off_mut(2..).unwrap();
    
    assert_eq!(slice, &mut ['a', 'b']);
    assert_eq!(tail, &mut ['c', 'd']);
[/code]

Getting `None` when `range` is out of bounds:
[code] 
    let mut slice: &mut [_] = &mut ['a', 'b', 'c', 'd'];
    
    assert_eq!(None, slice.split_off_mut(5..));
    assert_eq!(None, slice.split_off_mut(..5));
    assert_eq!(None, slice.split_off_mut(..=4));
    let expected: &mut [_] = &mut ['a', 'b', 'c', 'd'];
    assert_eq!(Some(expected), slice.split_off_mut(..4));
[/code]

1.87.0 · [Source][238]

#### pub fn split_off_first<'a>(self: &mut &'a [[T]][31]) -> [Option][11]<[&'a T][28]>

Removes the first element of the slice and returns a reference to it.

Returns `None` if the slice is empty.

##### §Examples
[code] 
    let mut slice: &[_] = &['a', 'b', 'c'];
    let first = slice.split_off_first().unwrap();
    
    assert_eq!(slice, &['b', 'c']);
    assert_eq!(first, &'a');
[/code]

1.87.0 · [Source][239]

#### pub fn split_off_first_mut<'a>(self: &mut &'a mut [[T]][31]) -> [Option][11]<[&'a mut T][28]>

Removes the first element of the slice and returns a mutable reference to it.

Returns `None` if the slice is empty.

##### §Examples
[code] 
    let mut slice: &mut [_] = &mut ['a', 'b', 'c'];
    let first = slice.split_off_first_mut().unwrap();
    *first = 'd';
    
    assert_eq!(slice, &['b', 'c']);
    assert_eq!(first, &'d');
[/code]

1.87.0 · [Source][240]

#### pub fn split_off_last<'a>(self: &mut &'a [[T]][31]) -> [Option][11]<[&'a T][28]>

Removes the last element of the slice and returns a reference to it.

Returns `None` if the slice is empty.

##### §Examples
[code] 
    let mut slice: &[_] = &['a', 'b', 'c'];
    let last = slice.split_off_last().unwrap();
    
    assert_eq!(slice, &['a', 'b']);
    assert_eq!(last, &'c');
[/code]

1.87.0 · [Source][241]

#### pub fn split_off_last_mut<'a>(self: &mut &'a mut [[T]][31]) -> [Option][11]<[&'a mut T][28]>

Removes the last element of the slice and returns a mutable reference to it.

Returns `None` if the slice is empty.

##### §Examples
[code] 
    let mut slice: &mut [_] = &mut ['a', 'b', 'c'];
    let last = slice.split_off_last_mut().unwrap();
    *last = 'd';
    
    assert_eq!(slice, &['a', 'b']);
    assert_eq!(last, &'d');
[/code]

1.86.0 · [Source][242]

#### pub unsafe fn get_disjoint_unchecked_mut<I, const N: [usize][25]>( &mut self, indices: [[I; N]][38], ) -> [&mut <I as [SliceIndex][47]<[[T]][31]>>::[Output][48]; [N][38]]

where I: [GetDisjointMutIndex][243] \+ [SliceIndex][47]<[[T]][31]>,

Returns mutable references to many indices at once, without doing any checks.

An index can be either a `usize`, a [`Range`][60] or a [`RangeInclusive`][244]. Note that this method takes an array, so all indices must be of the same type. If passed an array of `usize`s this method gives back an array of mutable references to single elements, while if passed an array of ranges it gives back an array of mutable references to slices.

For a safe alternative see [`get_disjoint_mut`][245].

##### §Safety

Calling this method with overlapping or out-of-bounds indices is _[undefined behavior][52]_ even if the resulting references are not used.

##### §Examples
[code] 
    let x = &mut [1, 2, 4];
    
    unsafe {
        let [a, b] = x.get_disjoint_unchecked_mut([0, 2]);
        *a *= 10;
        *b *= 100;
    }
    assert_eq!(x, &[10, 2, 400]);
    
    unsafe {
        let [a, b] = x.get_disjoint_unchecked_mut([0..1, 1..3]);
        a[0] = 8;
        b[0] = 88;
        b[1] = 888;
    }
    assert_eq!(x, &[8, 88, 888]);
    
    unsafe {
        let [a, b] = x.get_disjoint_unchecked_mut([1..=2, 0..=0]);
        a[0] = 11;
        a[1] = 111;
        b[0] = 1;
    }
    assert_eq!(x, &[1, 11, 111]);
[/code]

1.86.0 · [Source][246]

#### pub fn get_disjoint_mut<I, const N: [usize][25]>( &mut self, indices: [[I; N]][38], ) -> [Result][168]<[&mut <I as [SliceIndex][47]<[[T]][31]>>::[Output][48]; [N][38]], [GetDisjointMutError][247]>

where I: [GetDisjointMutIndex][243] \+ [SliceIndex][47]<[[T]][31]>,

Returns mutable references to many indices at once.

An index can be either a `usize`, a [`Range`][60] or a [`RangeInclusive`][244]. Note that this method takes an array, so all indices must be of the same type. If passed an array of `usize`s this method gives back an array of mutable references to single elements, while if passed an array of ranges it gives back an array of mutable references to slices.

Returns an error if any index is out-of-bounds, or if there are overlapping indices. An empty range is not considered to overlap if it is located at the beginning or at the end of another range, but is considered to overlap if it is located in the middle.

This method does a O(n^2) check to check that there are no overlapping indices, so be careful when passing many indices.

##### §Examples
[code] 
    let v = &mut [1, 2, 3];
    if let Ok([a, b]) = v.get_disjoint_mut([0, 2]) {
        *a = 413;
        *b = 612;
    }
    assert_eq!(v, &[413, 2, 612]);
    
    if let Ok([a, b]) = v.get_disjoint_mut([0..1, 1..3]) {
        a[0] = 8;
        b[0] = 88;
        b[1] = 888;
    }
    assert_eq!(v, &[8, 88, 888]);
    
    if let Ok([a, b]) = v.get_disjoint_mut([1..=2, 0..=0]) {
        a[0] = 11;
        a[1] = 111;
        b[0] = 1;
    }
    assert_eq!(v, &[1, 11, 111]);
[/code]

1.94.0 · [Source][248]

#### pub fn element_offset(&self, element: [&T][28]) -> [Option][11]<[usize][25]>

Returns the index that an element reference points to.

Returns `None` if `element` does not point to the start of an element within the slice.

This method is useful for extending slice iterators like [`slice::split`][249].

Note that this uses pointer arithmetic and **does not compare elements**. To find the index of an element via comparison, use [`.iter().position()`][250] instead.

##### §Panics

Panics if `T` is zero-sized.

##### §Examples

Basic usage:
[code] 
    let nums: &[u32] = &[1, 7, 1, 1];
    let num = &nums[2];
    
    assert_eq!(num, &1);
    assert_eq!(nums.element_offset(num), Some(2));
[/code]

Returning `None` with an unaligned element:
[code] 
    let arr: &[[u32; 2]] = &[[0, 1], [2, 3]];
    let flat_arr: &[u32] = arr.as_flattened();
    
    let ok_elm: &[u32; 2] = flat_arr[0..2].try_into().unwrap();
    let weird_elm: &[u32; 2] = flat_arr[1..3].try_into().unwrap();
    
    assert_eq!(ok_elm, &[0, 1]);
    assert_eq!(weird_elm, &[1, 2]);
    
    assert_eq!(arr.element_offset(ok_elm), Some(0)); // Points to element 0
    assert_eq!(arr.element_offset(weird_elm), None); // Points between element 0 and 1
[/code]

[Source][251]

#### pub fn subslice_range(&self, subslice: &[[T]][31]) -> [Option][11]<[Range][60]<[usize][25]>>

🔬This is a nightly-only experimental API. (`substr_range`)

Returns the range of indices that a subslice points to.

Returns `None` if `subslice` does not point within the slice or if it is not aligned with the elements in the slice.

This method **does not compare elements**. Instead, this method finds the location in the slice that `subslice` was obtained from. To find the index of a subslice via comparison, instead use [`.windows()`][109][`.position()`][250].

This method is useful for extending slice iterators like [`slice::split`][249].

Note that this may return a false positive (either `Some(0..0)` or `Some(self.len()..self.len())`) if `subslice` has a length of zero and points to the beginning or end of another, separate, slice.

##### §Panics

Panics if `T` is zero-sized.

##### §Examples

Basic usage:
[code] 
    #![feature(substr_range)]
    
    let nums = &[0, 5, 10, 0, 0, 5];
    
    let mut iter = nums
        .split(|t| *t == 0)
        .map(|n| nums.subslice_range(n).unwrap());
    
    assert_eq!(iter.next(), Some(0..0));
    assert_eq!(iter.next(), Some(1..3));
    assert_eq!(iter.next(), Some(4..4));
    assert_eq!(iter.next(), Some(5..6));
[/code]

[Source][252]

#### pub fn as_slice(&self) -> &[[T]][31]

🔬This is a nightly-only experimental API. (`str_as_str`)

Returns the same slice `&[T]`.

This method is redundant when used directly on `&[T]`, but it helps dereferencing other “container” types to slices, for example `Box<[T]>` or `Arc<[T]>`.

[Source][253]

#### pub fn as_mut_slice(&mut self) -> &mut [[T]][31]

🔬This is a nightly-only experimental API. (`str_as_str`)

Returns the same slice `&mut [T]`.

This method is redundant when used directly on `&mut [T]`, but it helps dereferencing other “container” types to slices, for example `Box<[T]>` or `MutexGuard<[T]>`.

1.79.0 · [Source][254]

#### pub fn utf8_chunks(&self) -> [Utf8Chunks][255]<'_>

Creates an iterator over the contiguous valid UTF-8 ranges of this slice, and the non-UTF-8 fragments in between.

See the [`Utf8Chunk`][256] type for documentation of the items yielded by this iterator.

##### §Examples

This function formats arbitrary but mostly-UTF-8 bytes into Rust source code in the form of a C-string literal (`c"..."`).
[code] 
    use std::fmt::Write as _;
    
    pub fn cstr_literal(bytes: &[u8]) -> String {
        let mut repr = String::new();
        repr.push_str("c\"");
        for chunk in bytes.utf8_chunks() {
            for ch in chunk.valid().chars() {
                // Escapes \0, \t, \r, \n, \\, \', \", and uses \u{...} for non-printable characters.
                write!(repr, "{}", ch.escape_debug()).unwrap();
            }
            for byte in chunk.invalid() {
                write!(repr, "\\x{:02X}", byte).unwrap();
            }
        }
        repr.push('"');
        repr
    }
    
    fn main() {
        let lit = cstr_literal(b"\xferris the \xf0\x9f\xa6\x80\x07");
        let expected = stringify!(c"\xFErris the 🦀\u{7}");
        assert_eq!(lit, expected);
    }
[/code]

1.0.0 · [Source][257]

#### pub fn sort(&mut self)

where T: [Ord][169],

Sorts the slice in ascending order, preserving initial order of equal elements.

This sort is stable (i.e., does not reorder equal elements) and _O_(_n_ * log(_n_)) worst-case.

If the implementation of [`Ord`][169] for `T` does not implement a [total order][180], the function may panic; even if the function exits normally, the resulting order of elements in the slice is unspecified. See also the note on panicking below.

When applicable, unstable sorting is preferred because it is generally faster than stable sorting and it doesn’t allocate auxiliary memory. See [`sort_unstable`][192]. The exception are partially sorted slices, which may be better served with `slice::sort`.

Sorting types that only implement [`PartialOrd`][181] such as [`f32`][182] and [`f64`][183] require additional precautions. For example, `f32::NAN != f32::NAN`, which doesn’t fulfill the reflexivity requirement of [`Ord`][169]. By using an alternative comparison function with `slice::sort_by` such as [`f32::total_cmp`][184] or [`f64::total_cmp`][185] that defines a [total order][180] users can sort slices containing floating-point values. Alternatively, if all values in the slice are guaranteed to be in a subset for which [`PartialOrd::partial_cmp`][186] forms a [total order][180], it’s possible to sort the slice with `sort_by(|a, b| a.partial_cmp(b).unwrap())`.

##### §Current implementation

The current implementation is based on [driftsort][258] by Orson Peters and Lukas Bergdoll, which combines the fast average case of quicksort with the fast worst case and partial run detection of mergesort, achieving linear time on fully sorted and reversed inputs. On inputs with k distinct elements, the expected time to sort the data is _O_(_n_ * log(_k_)).

The auxiliary memory allocation behavior depends on the input length. Short slices are handled without allocation, medium sized slices allocate `self.len()` and beyond that it clamps at `self.len() / 2`.

##### §Panics

May panic if the implementation of [`Ord`][169] for `T` does not implement a [total order][180], or if the [`Ord`][169] implementation itself panics.

All safe functions on slices preserve the invariant that even if the function panics, all original elements will remain in the slice and any possible modifications via interior mutability are observed in the input. This ensures that recovery code (for instance inside of a `Drop` or following a `catch_unwind`) will still have access to all the original elements. For instance, if the slice belongs to a `Vec`, the `Vec::drop` method will be able to dispose of all contained elements.

##### §Examples
[code] 
    let mut v = [4, -5, 1, -3, 2];
    
    v.sort();
    assert_eq!(v, [-5, -3, 1, 2, 4]);
[/code]

1.0.0 · [Source][259]

#### pub fn sort_by<F>(&mut self, compare: F)

where F: [FnMut][120]([&T][28], [&T][28]) -> [Ordering][176],

Sorts the slice in ascending order with a comparison function, preserving initial order of equal elements.

This sort is stable (i.e., does not reorder equal elements) and _O_(_n_ * log(_n_)) worst-case.

If the comparison function `compare` does not implement a [total order][180], the function may panic; even if the function exits normally, the resulting order of elements in the slice is unspecified. See also the note on panicking below.

For example `|a, b| (a - b).cmp(a)` is a comparison function that is neither transitive nor reflexive nor total, `a < b < c < a` with `a = 1, b = 2, c = 3`. For more information and examples see the [`Ord`][169] documentation.

##### §Current implementation

The current implementation is based on [driftsort][258] by Orson Peters and Lukas Bergdoll, which combines the fast average case of quicksort with the fast worst case and partial run detection of mergesort, achieving linear time on fully sorted and reversed inputs. On inputs with k distinct elements, the expected time to sort the data is _O_(_n_ * log(_k_)).

The auxiliary memory allocation behavior depends on the input length. Short slices are handled without allocation, medium sized slices allocate `self.len()` and beyond that it clamps at `self.len() / 2`.

##### §Panics

May panic if `compare` does not implement a [total order][180], or if `compare` itself panics.

All safe functions on slices preserve the invariant that even if the function panics, all original elements will remain in the slice and any possible modifications via interior mutability are observed in the input. This ensures that recovery code (for instance inside of a `Drop` or following a `catch_unwind`) will still have access to all the original elements. For instance, if the slice belongs to a `Vec`, the `Vec::drop` method will be able to dispose of all contained elements.

##### §Examples
[code] 
    let mut v = [4, -5, 1, -3, 2];
    v.sort_by(|a, b| a.cmp(b));
    assert_eq!(v, [-5, -3, 1, 2, 4]);
    
    // reverse sorting
    v.sort_by(|a, b| b.cmp(a));
    assert_eq!(v, [4, 2, 1, -3, -5]);
[/code]

1.7.0 · [Source][260]

#### pub fn sort_by_key<K, F>(&mut self, f: F)

where F: [FnMut][120]([&T][28]) -> K, K: [Ord][169],

Sorts the slice in ascending order with a key extraction function, preserving initial order of equal elements.

This sort is stable (i.e., does not reorder equal elements) and _O_(_m_ * _n_ * log(_n_)) worst-case, where the key function is _O_(_m_).

If the implementation of [`Ord`][169] for `K` does not implement a [total order][180], the function may panic; even if the function exits normally, the resulting order of elements in the slice is unspecified. See also the note on panicking below.

##### §Current implementation

The current implementation is based on [driftsort][258] by Orson Peters and Lukas Bergdoll, which combines the fast average case of quicksort with the fast worst case and partial run detection of mergesort, achieving linear time on fully sorted and reversed inputs. On inputs with k distinct elements, the expected time to sort the data is _O_(_n_ * log(_k_)).

The auxiliary memory allocation behavior depends on the input length. Short slices are handled without allocation, medium sized slices allocate `self.len()` and beyond that it clamps at `self.len() / 2`.

##### §Panics

May panic if the implementation of [`Ord`][169] for `K` does not implement a [total order][180], or if the [`Ord`][169] implementation or the key-function `f` panics.

All safe functions on slices preserve the invariant that even if the function panics, all original elements will remain in the slice and any possible modifications via interior mutability are observed in the input. This ensures that recovery code (for instance inside of a `Drop` or following a `catch_unwind`) will still have access to all the original elements. For instance, if the slice belongs to a `Vec`, the `Vec::drop` method will be able to dispose of all contained elements.

##### §Examples
[code] 
    let mut v = [4i32, -5, 1, -3, 2];
    
    v.sort_by_key(|k| k.abs());
    assert_eq!(v, [1, 2, -3, 4, -5]);
[/code]

1.34.0 · [Source][261]

#### pub fn sort_by_cached_key<K, F>(&mut self, f: F)

where F: [FnMut][120]([&T][28]) -> K, K: [Ord][169],

Sorts the slice in ascending order with a key extraction function, preserving initial order of equal elements.

This sort is stable (i.e., does not reorder equal elements) and _O_(_m_ * _n_ \+ _n_ * log(_n_)) worst-case, where the key function is _O_(_m_).

During sorting, the key function is called at most once per element, by using temporary storage to remember the results of key evaluation. The order of calls to the key function is unspecified and may change in future versions of the standard library.

If the implementation of [`Ord`][169] for `K` does not implement a [total order][180], the function may panic; even if the function exits normally, the resulting order of elements in the slice is unspecified. See also the note on panicking below.

For simple key functions (e.g., functions that are property accesses or basic operations), [`sort_by_key`][178] is likely to be faster.

##### §Current implementation

The current implementation is based on [instruction-parallel-network sort][187] by Lukas Bergdoll, which combines the fast average case of randomized quicksort with the fast worst case of heapsort, while achieving linear time on fully sorted and reversed inputs. And _O_(_k_ * log(_n_)) where _k_ is the number of distinct elements in the input. It leverages superscalar out-of-order execution capabilities commonly found in CPUs, to efficiently perform the operation.

In the worst case, the algorithm allocates temporary storage in a `Vec<(K, usize)>` the length of the slice.

##### §Panics

May panic if the implementation of [`Ord`][169] for `K` does not implement a [total order][180], or if the [`Ord`][169] implementation panics.

All safe functions on slices preserve the invariant that even if the function panics, all original elements will remain in the slice and any possible modifications via interior mutability are observed in the input. This ensures that recovery code (for instance inside of a `Drop` or following a `catch_unwind`) will still have access to all the original elements. For instance, if the slice belongs to a `Vec`, the `Vec::drop` method will be able to dispose of all contained elements.

##### §Examples
[code] 
    let mut v = [4i32, -5, 1, -3, 2, 10];
    
    // Strings are sorted by lexicographical order.
    v.sort_by_cached_key(|k| k.to_string());
    assert_eq!(v, [-3, -5, 1, 10, 2, 4]);
[/code]

1.0.0 · [Source][262]

#### pub fn to_vec(&self) -> [Vec][263]<T>

where T: [Clone][206],

Copies `self` into a new `Vec`.

##### §Examples
[code] 
    let s = [10, 40, 30];
    let x = s.to_vec();
    // Here, `s` and `x` can be modified independently.
[/code]

[Source][264]

#### pub fn to_vec_in<A>(&self, alloc: A) -> [Vec][263]<T, A>

where A: [Allocator][265], T: [Clone][206],

🔬This is a nightly-only experimental API. (`allocator_api`)

Copies `self` into a new `Vec` with an allocator.

##### §Examples
[code] 
    #![feature(allocator_api)]
    
    use std::alloc::System;
    
    let s = [10, 40, 30];
    let x = s.to_vec_in(System);
    // Here, `s` and `x` can be modified independently.
[/code]

1.40.0 · [Source][266]

#### pub fn repeat(&self, n: [usize][25]) -> [Vec][263]<T>

where T: [Copy][213],

Creates a vector by copying a slice `n` times.

##### §Panics

This function will panic if the capacity would overflow.

##### §Examples
[code] 
    assert_eq!([1, 2].repeat(3), vec![1, 2, 1, 2, 1, 2]);
[/code]

A panic upon overflow:

ⓘ
[code]
    // this will panic at runtime
    b"0123456789abcdef".repeat(usize::MAX);
[/code]

1.0.0 · [Source][267]

#### pub fn concat<Item>(&self) -> <[[T]][31] as [Concat][268]<Item>>::[Output][269] ⓘ

where [[T]][31]: [Concat][268]<Item>, Item: ?[Sized][162],

Flattens a slice of `T` into a single value `Self::Output`.

##### §Examples
[code] 
    assert_eq!(["hello", "world"].concat(), "helloworld");
    assert_eq!([[1, 2], [3, 4]].concat(), [1, 2, 3, 4]);
[/code]

1.3.0 · [Source][270]

#### pub fn join<Separator>( &self, sep: Separator, ) -> <[[T]][31] as [Join][271]<Separator>>::[Output][272] ⓘ

where [[T]][31]: [Join][271]<Separator>,

Flattens a slice of `T` into a single value `Self::Output`, placing a given separator between each.

##### §Examples
[code] 
    assert_eq!(["hello", "world"].join(" "), "hello world");
    assert_eq!([[1, 2], [3, 4]].join(&0), [1, 2, 0, 3, 4]);
    assert_eq!([[1, 2], [3, 4]].join(&[0, 0][..]), [1, 2, 0, 0, 3, 4]);
[/code]

1.0.0 · [Source][273]

#### pub fn connect<Separator>( &self, sep: Separator, ) -> <[[T]][31] as [Join][271]<Separator>>::[Output][272] ⓘ

where [[T]][31]: [Join][271]<Separator>,

👎Deprecated since 1.3.0: renamed to join

Flattens a slice of `T` into a single value `Self::Output`, placing a given separator between each.

##### §Examples
[code] 
    assert_eq!(["hello", "world"].connect(" "), "hello world");
    assert_eq!([[1, 2], [3, 4]].connect(&0), [1, 2, 0, 3, 4]);
[/code]

1.23.0 · [Source][274]

#### pub fn to_ascii_uppercase(&self) -> [Vec][263]<[u8][7]> ⓘ

Returns a vector containing a copy of this slice where each byte is mapped to its ASCII upper case equivalent.

ASCII letters ‘a’ to ‘z’ are mapped to ‘A’ to ‘Z’, but non-ASCII letters are unchanged.

To uppercase the value in-place, use [`make_ascii_uppercase`][275].

1.23.0 · [Source][276]

#### pub fn to_ascii_lowercase(&self) -> [Vec][263]<[u8][7]> ⓘ

Returns a vector containing a copy of this slice where each byte is mapped to its ASCII lower case equivalent.

ASCII letters ‘A’ to ‘Z’ are mapped to ‘a’ to ‘z’, but non-ASCII letters are unchanged.

To lowercase the value in-place, use [`make_ascii_lowercase`][277].

## Trait Implementations§

§

### impl [AsMut][227]<[[u8][7]]> for [SqliteOwnedBuf][278]

§

#### fn [as_mut][279](&mut self) -> &mut [[u8][7]] ⓘ

Converts this type into a mutable reference of the (usually inferred) input type.

§

### impl [AsRef][221]<[[u8][7]]> for [SqliteOwnedBuf][278]

§

#### fn [as_ref][280](&self) -> &[[u8][7]] ⓘ

Converts this type into a shared reference of the (usually inferred) input type.

§

### impl [Debug][281] for [SqliteOwnedBuf][278]

§

#### fn [fmt][282](&self, f: &mut [Formatter][283]<'_>) -> [Result][168]<[()][284], [Error][285]>

Formats the value using the given formatter. [Read more][282]

§

### impl [Deref][6] for [SqliteOwnedBuf][278]

§

#### type [Target][286] = [[u8][7]]

The resulting type after dereferencing.

§

#### fn [deref][287](&self) -> &<[SqliteOwnedBuf][278] as [Deref][6]>::[Target][288]

Dereferences the value.

§

### impl [DerefMut][289] for [SqliteOwnedBuf][278]

§

#### fn [deref_mut][290](&mut self) -> &mut <[SqliteOwnedBuf][278] as [Deref][6]>::[Target][288]

Mutably dereferences the value.

§

### impl [Drop][291] for [SqliteOwnedBuf][278]

§

#### fn [drop][292](&mut self)

Executes the destructor for this type. [Read more][292]

§

### impl [TryFrom][293]<&[[u8][7]]> for [SqliteOwnedBuf][278]

#### §Errors

Returns [`Error::InvalidArgument`][294] if the slice is empty.

§

#### type [Error][295] = [Error][296]

The type returned in the event of a conversion error.

§

#### fn [try_from][297]( bytes: &[[u8][7]], ) -> [Result][168]<[SqliteOwnedBuf][278], <[SqliteOwnedBuf][278] as [TryFrom][293]<&[[u8][7]]>>::[Error][298]>

Performs the conversion.

§

### impl [Send][299] for [SqliteOwnedBuf][278]

§

### impl [Sync][300] for [SqliteOwnedBuf][278]

## Auto Trait Implementations§

§

### impl [Freeze][301] for [SqliteOwnedBuf][278]

§

### impl [RefUnwindSafe][302] for [SqliteOwnedBuf][278]

§

### impl [Unpin][303] for [SqliteOwnedBuf][278]

§

### impl [UnwindSafe][304] for [SqliteOwnedBuf][278]

## Blanket Implementations§

[Source][305]§

### impl<T> [Any][306] for T

where T: 'static + ?[Sized][162],

[Source][307]§

#### fn [type_id][308](&self) -> [TypeId][309]

Gets the `TypeId` of `self`. [Read more][308]

[Source][310]§

### impl<T> [Borrow][311]<T> for T

where T: ?[Sized][162],

[Source][312]§

#### fn [borrow][313](&self) -> [&T][28]

Immutably borrows from an owned value. [Read more][313]

[Source][314]§

### impl<T> [BorrowMut][315]<T> for T

where T: ?[Sized][162],

[Source][316]§

#### fn [borrow_mut][317](&mut self) -> [&mut T][28]

Mutably borrows from an owned value. [Read more][317]

[Source][318]§

### impl<T> [From][319]<T> for T

[Source][320]§

#### fn [from][321](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][322] [`Span`][323], returning an `Instrumented` wrapper. Read more

[Source][324]§

### impl<T, U> [Into][325]<U> for T

where U: [From][319]<T>,

[Source][326]§

#### fn [into][327](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][319]<T> for U` chooses to do.

[Source][328]§

### impl<T> [IntoEither][329] for T

[Source][330]§

#### fn [into_either][331](self, into_left: [bool][9]) -> [Either][332]<Self, Self> ⓘ

Converts `self` into a [`Left`][333] variant of [`Either<Self, Self>`][332] if `into_left` is `true`. Converts `self` into a [`Right`][334] variant of [`Either<Self, Self>`][332] otherwise. [Read more][331]

[Source][335]§

#### fn [into_either_with][336]<F>(self, into_left: F) -> [Either][332]<Self, Self> ⓘ

where F: [FnOnce][337](&Self) -> [bool][9],

Converts `self` into a [`Left`][333] variant of [`Either<Self, Self>`][332] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][334] variant of [`Either<Self, Self>`][332] otherwise. [Read more][336]

[Source][338]§

### impl<P, T> [Receiver][339] for P

where P: [Deref][6]<Target = T> \+ ?[Sized][162], T: ?[Sized][162],

[Source][340]§

#### type [Target][341] = T

🔬This is a nightly-only experimental API. (`arbitrary_self_types`)

The target type on which the method may be called.

[Source][342]§

### impl<T> [Same][343] for T

[Source][344]§

#### type [Output][345] = T

Should always be `Self`

[Source][346]§

### impl<T, U> [TryFrom][293]<U> for T

where U: [Into][325]<T>,

[Source][347]§

#### type [Error][295] = [Infallible][348]

The type returned in the event of a conversion error.

[Source][349]§

#### fn [try_from][297](value: U) -> [Result][168]<T, <T as [TryFrom][293]<U>>::[Error][298]>

Performs the conversion.

[Source][350]§

### impl<T, U> [TryInto][351]<U> for T

where U: [TryFrom][293]<T>,

[Source][352]§

#### type [Error][353] = <U as [TryFrom][293]<T>>::[Error][298]

The type returned in the event of a conversion error.

[Source][354]§

#### fn [try_into][355](self) -> [Result][168]<U, <U as [TryFrom][293]<T>>::[Error][298]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][325]<Dispatch>,

Attaches the provided [`Subscriber`][356] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][357] [`Subscriber`][356] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../struct.SqliteConnection.html#method.serialize (method sqlx::SqliteConnection::serialize)
   [5]: ../struct.SqliteConnection.html#method.deserialize (method sqlx::SqliteConnection::deserialize)
   [6]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html (trait core::ops::deref::Deref)
   [7]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [8]: https://doc.rust-lang.org/1.94.1/src/core/slice/ascii.rs.html#21
   [9]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [10]: https://doc.rust-lang.org/1.94.1/src/core/slice/ascii.rs.html#30
   [11]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [12]: https://doc.rust-lang.org/1.94.1/core/ascii/ascii_char/enum.AsciiChar.html (enum core::ascii::ascii_char::AsciiChar)
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.is_ascii (method slice::is_ascii)
   [14]: https://doc.rust-lang.org/1.94.1/src/core/slice/ascii.rs.html#48
   [15]: https://doc.rust-lang.org/1.94.1/src/core/slice/ascii.rs.html#63
   [16]: https://doc.rust-lang.org/1.94.1/src/core/slice/ascii.rs.html#98
   [17]: https://doc.rust-lang.org/1.94.1/src/core/slice/ascii.rs.html#120
   [18]: https://doc.rust-lang.org/1.94.1/src/core/slice/ascii.rs.html#143
   [19]: https://doc.rust-lang.org/1.94.1/core/slice/ascii/struct.EscapeAscii.html (struct core::slice::ascii::EscapeAscii)
   [20]: https://doc.rust-lang.org/1.94.1/src/core/slice/ascii.rs.html#162
   [21]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html#method.is_ascii_whitespace (method u8::is_ascii_whitespace)
   [22]: https://doc.rust-lang.org/1.94.1/src/core/slice/ascii.rs.html#191
   [23]: https://doc.rust-lang.org/1.94.1/src/core/slice/ascii.rs.html#221
   [24]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#116
   [25]: https://doc.rust-lang.org/1.94.1/std/primitive.usize.html
   [26]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#136
   [27]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#155
   [28]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [29]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#178
   [30]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#198
   [31]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html
   [32]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#220
   [33]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#240
   [34]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#262
   [35]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#281
   [36]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#304
   [37]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#327
   [38]: https://doc.rust-lang.org/1.94.1/std/primitive.array.html
   [39]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#357
   [40]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#387
   [41]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#417-419
   [42]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#447
   [43]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#478-480
   [44]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#509
   [45]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#539
   [46]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#572-574
   [47]: https://doc.rust-lang.org/1.94.1/core/slice/index/trait.SliceIndex.html (trait core::slice::index::SliceIndex)
   [48]: https://doc.rust-lang.org/1.94.1/core/slice/index/trait.SliceIndex.html#associatedtype.Output (type core::slice::index::SliceIndex::Output)
   [49]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#599-601
   [50]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.get (method slice::get)
   [51]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#639-641
   [52]: https://doc.rust-lang.org/reference/behavior-considered-undefined.html
   [53]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#684-686
   [54]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.get_mut (method slice::get_mut)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#726
   [56]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [57]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.as_mut_ptr (method slice::as_mut_ptr)
   [58]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#757
   [59]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#793
   [60]: https://doc.rust-lang.org/1.94.1/core/ops/range/struct.Range.html (struct core::ops::range::Range)
   [61]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.as_ptr (method slice::as_ptr)
   [62]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#836
   [63]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#850
   [64]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#869
   [65]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#905
   [66]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#948
   [67]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.swap (method slice::swap)
   [68]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#978
   [69]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#1040
   [70]: https://doc.rust-lang.org/1.94.1/core/slice/iter/struct.Iter.html (struct core::slice::iter::Iter)
   [71]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#1060
   [72]: https://doc.rust-lang.org/1.94.1/core/slice/iter/struct.IterMut.html (struct core::slice::iter::IterMut)
   [73]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#1115
   [74]: https://doc.rust-lang.org/1.94.1/core/slice/iter/struct.Windows.html (struct core::slice::iter::Windows)
   [75]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html (trait core::iter::traits::iterator::Iterator)
   [76]: https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html#the-rules-of-references
   [77]: https://blog.rust-lang.org/2022/10/28/gats-stabilization.html
   [78]: https://doc.rust-lang.org/1.94.1/core/cell/struct.Cell.html#method.as_slice_of_cells (method core::cell::Cell::as_slice_of_cells)
   [79]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#1155
   [80]: https://doc.rust-lang.org/1.94.1/core/slice/iter/struct.Chunks.html (struct core::slice::iter::Chunks)
   [81]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.chunks_exact (method slice::chunks_exact)
   [82]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.rchunks (method slice::rchunks)
   [83]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.as_chunks (method slice::as_chunks)
   [84]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#1199
   [85]: https://doc.rust-lang.org/1.94.1/core/slice/iter/struct.ChunksMut.html (struct core::slice::iter::ChunksMut)
   [86]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.chunks_exact_mut (method slice::chunks_exact_mut)
   [87]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.rchunks_mut (method slice::rchunks_mut)
   [88]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.as_chunks_mut (method slice::as_chunks_mut)
   [89]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#1242
   [90]: https://doc.rust-lang.org/1.94.1/core/slice/iter/struct.ChunksExact.html (struct core::slice::iter::ChunksExact)
   [91]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.chunks (method slice::chunks)
   [92]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.rchunks_exact (method slice::rchunks_exact)
   [93]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#1290
   [94]: https://doc.rust-lang.org/1.94.1/core/slice/iter/struct.ChunksExactMut.html (struct core::slice::iter::ChunksExactMut)
   [95]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.chunks_mut (method slice::chunks_mut)
   [96]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.rchunks_exact_mut (method slice::rchunks_exact_mut)
   [97]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#1338
   [98]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.as_flattened (method slice::as_flattened)
   [99]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.as_rchunks (method slice::as_rchunks)
   [100]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#1396
   [101]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#1443
   [102]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#1498
   [103]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.as_flattened_mut (method slice::as_flattened_mut)
   [104]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.as_rchunks_mut (method slice::as_rchunks_mut)
   [105]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#1552
   [106]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#1605
   [107]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#1646
   [108]: https://doc.rust-lang.org/1.94.1/core/slice/iter/struct.ArrayWindows.html (struct core::slice::iter::ArrayWindows)
   [109]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.windows (method slice::windows)
   [110]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#1686
   [111]: https://doc.rust-lang.org/1.94.1/core/slice/iter/struct.RChunks.html (struct core::slice::iter::RChunks)
   [112]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#1730
   [113]: https://doc.rust-lang.org/1.94.1/core/slice/iter/struct.RChunksMut.html (struct core::slice::iter::RChunksMut)
   [114]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#1775
   [115]: https://doc.rust-lang.org/1.94.1/core/slice/iter/struct.RChunksExact.html (struct core::slice::iter::RChunksExact)
   [116]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#1824
   [117]: https://doc.rust-lang.org/1.94.1/core/slice/iter/struct.RChunksExactMut.html (struct core::slice::iter::RChunksExactMut)
   [118]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#1864-1866
   [119]: https://doc.rust-lang.org/1.94.1/core/slice/iter/struct.ChunkBy.html (struct core::slice::iter::ChunkBy)
   [120]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnMut.html (trait core::ops::function::FnMut)
   [121]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#1906-1908
   [122]: https://doc.rust-lang.org/1.94.1/core/slice/iter/struct.ChunkByMut.html (struct core::slice::iter::ChunkByMut)
   [123]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#1952
   [124]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.split_at_checked (method slice::split_at_checked)
   [125]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#1986
   [126]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.split_at_mut_checked (method slice::split_at_mut_checked)
   [127]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#2038
   [128]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.split_at (method slice::split_at)
   [129]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#2092
   [130]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.split_at_mut (method slice::split_at_mut)
   [131]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#2153
   [132]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#2192
   [133]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#2244-2246
   [134]: https://doc.rust-lang.org/1.94.1/core/slice/iter/struct.Split.html (struct core::slice::iter::Split)
   [135]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#2266-2268
   [136]: https://doc.rust-lang.org/1.94.1/core/slice/iter/struct.SplitMut.html (struct core::slice::iter::SplitMut)
   [137]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#2302-2304
   [138]: https://doc.rust-lang.org/1.94.1/core/slice/iter/struct.SplitInclusive.html (struct core::slice::iter::SplitInclusive)
   [139]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#2326-2328
   [140]: https://doc.rust-lang.org/1.94.1/core/slice/iter/struct.SplitInclusiveMut.html (struct core::slice::iter::SplitInclusiveMut)
   [141]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#2362-2364
   [142]: https://doc.rust-lang.org/1.94.1/core/slice/iter/struct.RSplit.html (struct core::slice::iter::RSplit)
   [143]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#2388-2390
   [144]: https://doc.rust-lang.org/1.94.1/core/slice/iter/struct.RSplitMut.html (struct core::slice::iter::RSplitMut)
   [145]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#2416-2418
   [146]: https://doc.rust-lang.org/1.94.1/core/slice/iter/struct.SplitN.html (struct core::slice::iter::SplitN)
   [147]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#2442-2444
   [148]: https://doc.rust-lang.org/1.94.1/core/slice/iter/struct.SplitNMut.html (struct core::slice::iter::SplitNMut)
   [149]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#2471-2473
   [150]: https://doc.rust-lang.org/1.94.1/core/slice/iter/struct.RSplitN.html (struct core::slice::iter::RSplitN)
   [151]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#2498-2500
   [152]: https://doc.rust-lang.org/1.94.1/core/slice/iter/struct.RSplitNMut.html (struct core::slice::iter::RSplitNMut)
   [153]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#2525-2527
   [154]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#2553-2555
   [155]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#2589-2591
   [156]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [157]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.binary_search (method slice::binary_search)
   [158]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#2619-2621
   [159]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#2650-2652
   [160]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#2682-2684
   [161]: https://doc.rust-lang.org/1.94.1/core/slice/trait.SlicePattern.html (trait core::slice::SlicePattern)
   [162]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [163]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#2718-2720
   [164]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#2757-2761
   [165]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#2793-2795
   [166]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#2833-2835
   [167]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#2919-2921
   [168]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [169]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Ord.html (trait core::cmp::Ord)
   [170]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html#variant.Ok (variant core::result::Result::Ok)
   [171]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html#variant.Err (variant core::result::Result::Err)
   [172]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.binary_search_by (method slice::binary_search_by)
   [173]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.binary_search_by_key (method slice::binary_search_by_key)
   [174]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.partition_point (method slice::partition_point)
   [175]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#2970-2972
   [176]: https://doc.rust-lang.org/1.94.1/core/cmp/enum.Ordering.html (enum core::cmp::Ordering)
   [177]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#3071-3074
   [178]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.sort_by_key (method slice::sort_by_key)
   [179]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#3133-3135
   [180]: https://en.wikipedia.org/wiki/Total_order
   [181]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html (trait core::cmp::PartialOrd)
   [182]: https://doc.rust-lang.org/1.94.1/std/primitive.f32.html (primitive f32)
   [183]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html (primitive f64)
   [184]: https://doc.rust-lang.org/1.94.1/std/primitive.f32.html#method.total_cmp (method f32::total_cmp)
   [185]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html#method.total_cmp (method f64::total_cmp)
   [186]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp (method core::cmp::PartialOrd::partial_cmp)
   [187]: https://github.com/Voultapher/sort-research-rs/tree/main/ipnsort
   [188]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#3188-3190
   [189]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#3240-3243
   [190]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#3310-3313
   [191]: https://doc.rust-lang.org/1.94.1/core/ops/range/trait.RangeBounds.html (trait core::ops::range::RangeBounds)
   [192]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.sort_unstable (method slice::sort_unstable)
   [193]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#3381-3384
   [194]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.sort_unstable_by (method slice::sort_unstable_by)
   [195]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#3452-3456
   [196]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.sort_unstable_by_key (method slice::sort_unstable_by_key)
   [197]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#3516-3518
   [198]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#3581-3587
   [199]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#3648-3655
   [200]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#3682-3684
   [201]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#3716-3718
   [202]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#3842-3845
   [203]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#3884
   [204]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#3930
   [205]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#3953-3955
   [206]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [207]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#3977-3979
   [208]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.fill (method slice::fill)
   [209]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [210]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default (associated function core::default::Default::default)
   [211]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#4041-4043
   [212]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#4107-4109
   [213]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [214]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.clone_from_slice (method slice::clone_from_slice)
   [215]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#4141-4143
   [216]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#4209
   [217]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#4286
   [218]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#4351
   [219]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#4442-4446
   [220]: https://doc.rust-lang.org/1.94.1/core/core_simd/vector/struct.Simd.html (struct core::core_simd::vector::Simd)
   [221]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [222]: https://doc.rust-lang.org/1.94.1/core/core_simd/vector/trait.SimdElement.html (trait core::core_simd::vector::SimdElement)
   [223]: https://doc.rust-lang.org/1.94.1/core/core_simd/lane_count/struct.LaneCount.html (struct core::core_simd::lane_count::LaneCount)
   [224]: https://doc.rust-lang.org/1.94.1/core/core_simd/lane_count/trait.SupportedLaneCount.html (trait core::core_simd::lane_count::SupportedLaneCount)
   [225]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.align_to (method slice::align_to)
   [226]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#4478-4482
   [227]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsMut.html (trait core::convert::AsMut)
   [228]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.align_to_mut (method slice::align_to_mut)
   [229]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.as_simd (method slice::as_simd)
   [230]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#4517-4519
   [231]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#4560-4562
   [232]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#4584-4587
   [233]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.is_sorted (method slice::is_sorted)
   [234]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#4643-4645
   [235]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#4695-4698
   [236]: https://doc.rust-lang.org/1.94.1/core/ops/range/trait.OneSidedRange.html (trait core::ops::range::OneSidedRange)
   [237]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#4761-4764
   [238]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#4799
   [239]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#4824
   [240]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#4849
   [241]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#4874
   [242]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#4931-4936
   [243]: https://doc.rust-lang.org/1.94.1/core/slice/trait.GetDisjointMutIndex.html (trait core::slice::GetDisjointMutIndex)
   [244]: https://doc.rust-lang.org/1.94.1/core/ops/range/struct.RangeInclusive.html (struct core::ops::range::RangeInclusive)
   [245]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.get_disjoint_mut (method slice::get_disjoint_mut)
   [246]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#4998-5003
   [247]: https://doc.rust-lang.org/1.94.1/core/slice/enum.GetDisjointMutError.html (enum core::slice::GetDisjointMutError)
   [248]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#5049
   [249]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.split (method slice::split)
   [250]: https://doc.rust-lang.org/1.94.1/core/iter/traits/iterator/trait.Iterator.html#method.position (method core::iter::traits::iterator::Iterator::position)
   [251]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#5103
   [252]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#5130
   [253]: https://doc.rust-lang.org/1.94.1/src/core/slice/mod.rs.html#5141
   [254]: https://doc.rust-lang.org/1.94.1/src/core/str/lossy.rs.html#45
   [255]: https://doc.rust-lang.org/1.94.1/core/str/lossy/struct.Utf8Chunks.html (struct core::str::lossy::Utf8Chunks)
   [256]: https://doc.rust-lang.org/1.94.1/core/str/lossy/struct.Utf8Chunk.html (struct core::str::lossy::Utf8Chunk)
   [257]: https://doc.rust-lang.org/1.94.1/src/alloc/slice.rs.html#131-133
   [258]: https://github.com/Voultapher/driftsort
   [259]: https://doc.rust-lang.org/1.94.1/src/alloc/slice.rs.html#192-194
   [260]: https://doc.rust-lang.org/1.94.1/src/alloc/slice.rs.html#247-250
   [261]: https://doc.rust-lang.org/1.94.1/src/alloc/slice.rs.html#312-315
   [262]: https://doc.rust-lang.org/1.94.1/src/alloc/slice.rs.html#372-374
   [263]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [264]: https://doc.rust-lang.org/1.94.1/src/alloc/slice.rs.html#396-398
   [265]: https://doc.rust-lang.org/1.94.1/core/alloc/trait.Allocator.html (trait core::alloc::Allocator)
   [266]: https://doc.rust-lang.org/1.94.1/src/alloc/slice.rs.html#507-509
   [267]: https://doc.rust-lang.org/1.94.1/src/alloc/slice.rs.html#575-577
   [268]: https://doc.rust-lang.org/1.94.1/alloc/slice/trait.Concat.html (trait alloc::slice::Concat)
   [269]: https://doc.rust-lang.org/1.94.1/alloc/slice/trait.Concat.html#associatedtype.Output (type alloc::slice::Concat::Output)
   [270]: https://doc.rust-lang.org/1.94.1/src/alloc/slice.rs.html#594-596
   [271]: https://doc.rust-lang.org/1.94.1/alloc/slice/trait.Join.html (trait alloc::slice::Join)
   [272]: https://doc.rust-lang.org/1.94.1/alloc/slice/trait.Join.html#associatedtype.Output (type alloc::slice::Join::Output)
   [273]: https://doc.rust-lang.org/1.94.1/src/alloc/slice.rs.html#614-616
   [274]: https://doc.rust-lang.org/1.94.1/src/alloc/slice.rs.html#638
   [275]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.make_ascii_uppercase (method slice::make_ascii_uppercase)
   [276]: https://doc.rust-lang.org/1.94.1/src/alloc/slice.rs.html#659
   [277]: https://doc.rust-lang.org/1.94.1/std/primitive.slice.html#method.make_ascii_lowercase (method slice::make_ascii_lowercase)
   [278]: struct.SqliteOwnedBuf.html (struct sqlx::sqlite::SqliteOwnedBuf)
   [279]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsMut.html#tymethod.as_mut
   [280]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html#tymethod.as_ref
   [281]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [282]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [283]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [284]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [285]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Error.html (struct core::fmt::Error)
   [286]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#associatedtype.Target
   [287]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#tymethod.deref
   [288]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Deref.html#associatedtype.Target (type core::ops::deref::Deref::Target)
   [289]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.DerefMut.html (trait core::ops::deref::DerefMut)
   [290]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.DerefMut.html#tymethod.deref_mut
   [291]: https://doc.rust-lang.org/1.94.1/core/ops/drop/trait.Drop.html (trait core::ops::drop::Drop)
   [292]: https://doc.rust-lang.org/1.94.1/core/ops/drop/trait.Drop.html#tymethod.drop
   [293]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [294]: ../enum.Error.html#variant.InvalidArgument (variant sqlx::Error::InvalidArgument)
   [295]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [296]: ../enum.Error.html (enum sqlx::Error)
   [297]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [298]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [299]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [300]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [301]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [302]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [303]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [304]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [305]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [306]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [307]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [308]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [309]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [310]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [311]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [312]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [313]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [314]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [315]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [316]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [317]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [318]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [319]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [320]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [321]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [322]: super::Span::current()
   [323]: crate::Span
   [324]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [325]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [326]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [327]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [328]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [329]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [330]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [331]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [332]: ../enum.Either.html (enum sqlx::Either)
   [333]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [334]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [335]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [336]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [337]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [338]: https://doc.rust-lang.org/1.94.1/src/core/ops/deref.rs.html#378-380
   [339]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Receiver.html (trait core::ops::deref::Receiver)
   [340]: https://doc.rust-lang.org/1.94.1/src/core/ops/deref.rs.html#382
   [341]: https://doc.rust-lang.org/1.94.1/core/ops/deref/trait.Receiver.html#associatedtype.Target
   [342]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [343]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [344]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [345]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [346]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [347]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [348]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [349]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [350]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [351]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [352]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [353]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [354]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [355]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [356]: super::Subscriber
   [357]: dispatcher#setting-the-default-subscriber

