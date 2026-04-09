## Result

## [sqlx][1]0.8.6

## Result

### Aliased Type

### Variants

  * Err
  * Ok



## [In crate sqlx][2]

[sqlx][2]

# Type Alias Result Copy item path
[code]
    pub type Result<T, E = [Error][3]> = [Result][4]<T, E>;
[/code]

Expand description

A specialized `Result` type for SQLx.

## Aliased Type§
[code]
    pub enum Result<T, E = [Error][3]> {
        Ok(T),
        Err(E),
    }
[/code]

## Variants§

§1.0.0

### Ok(T)

Contains the success value

§1.0.0

### Err(E)

Contains the error value

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: enum.Error.html (enum sqlx::Error)
   [4]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)

