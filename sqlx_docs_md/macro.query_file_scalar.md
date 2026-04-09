## query_file_scalar

## [sqlx][1]0.8.6

[sqlx][2]

# Macro query_file_scalar Copy item path

[Source][3]
[code] 
    macro_rules! query_file_scalar {
        ($path:literal) => { ... };
        ($path:literal, $($args:tt)*) => { ... };
    }
[/code]

Expand description

A variant of [`query_scalar!`][4] which takes a file path like [`query_file!`][5].

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: ../src/sqlx/macros/mod.rs.html#682-689
   [4]: macro.query_scalar.html (macro sqlx::query_scalar)
   [5]: macro.query_file.html (macro sqlx::query_file)

