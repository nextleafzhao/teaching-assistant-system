## Pixel

[![logo][1]][2]

## [tauri][2]2.10.3

## Pixel

### Required Methods

  * from_f64



### Provided Methods

  * cast



### Implementations on Foreign Types

  * f32
  * f64
  * i8
  * i16
  * i32
  * u8
  * u16
  * u32



### Dyn Compatibility

### Implementors

## [In crate tauri][3]

[tauri][3]

# Trait Pixel Copy item path
[code]
    pub trait Pixel: [Copy][4] + [Into][5]<[f64][6]> {
        // Required method
        fn from_f64(f: [f64][6]) -> Self;
    
        // Provided method
        fn cast<P>(self) -> P
           where P: [Pixel][7] { ... }
    }
[/code]

## Required Methods§

#### fn from_f64(f: [f64][6]) -> Self

## Provided Methods§

#### fn cast<P>(self) -> P

where P: [Pixel][7],

## Dyn Compatibility§

This trait is **not** [dyn compatible][8].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementations on Foreign Types§

§

### impl [Pixel][7] for [f32][9]

§

#### fn from_f64(f: [f64][6]) -> [f32][9]

§

### impl [Pixel][7] for [f64][6]

§

#### fn from_f64(f: [f64][6]) -> [f64][6]

§

### impl [Pixel][7] for [i8][10]

§

#### fn from_f64(f: [f64][6]) -> [i8][10]

§

### impl [Pixel][7] for [i16][11]

§

#### fn from_f64(f: [f64][6]) -> [i16][11]

§

### impl [Pixel][7] for [i32][12]

§

#### fn from_f64(f: [f64][6]) -> [i32][12]

§

### impl [Pixel][7] for [u8][13]

§

#### fn from_f64(f: [f64][6]) -> [u8][13]

§

### impl [Pixel][7] for [u16][14]

§

#### fn from_f64(f: [f64][6]) -> [u16][14]

§

### impl [Pixel][7] for [u32][15]

§

#### fn from_f64(f: [f64][6]) -> [u32][15]

## Implementors§

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../tauri/index.html
   [3]: index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Copy.html (trait core::marker::Copy)
   [5]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [6]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html
   [7]: trait.Pixel.html (trait tauri::Pixel)
   [8]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility
   [9]: https://doc.rust-lang.org/1.94.1/std/primitive.f32.html
   [10]: https://doc.rust-lang.org/1.94.1/std/primitive.i8.html
   [11]: https://doc.rust-lang.org/1.94.1/std/primitive.i16.html
   [12]: https://doc.rust-lang.org/1.94.1/std/primitive.i32.html
   [13]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [14]: https://doc.rust-lang.org/1.94.1/std/primitive.u16.html
   [15]: https://doc.rust-lang.org/1.94.1/std/primitive.u32.html

