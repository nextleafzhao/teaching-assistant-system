## Result

## [sqlx][1]0.8.6

## Result

### Aliased Type

### Variants

  * Err
  * Ok



## [In sqlx::error][2]

[sqlx][3]::[error][2]

# Type Alias Result Copy item path
[code]
    pub type Result<T, E = [Error][4]> = [Result][5]<T, E>;
[/code]

Expand description

A specialized `Result` type for SQLx.

## Aliased Type§
[code]
    pub enum Result<T, E = [Error][4]> {
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

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../enum.Error.html (enum sqlx::Error)
   [5]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)

