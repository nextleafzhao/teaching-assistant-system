## query_scalar_unchecked

## [sqlx][1]0.8.6

[sqlx][2]

# Macro query_scalar_unchecked Copy item path

[Source][3]
[code] 
    macro_rules! query_scalar_unchecked {
        ($query:expr) => { ... };
        ($query:expr, $($args:tt)*) => { ... };
    }
[/code]

Expand description

A variant of [`query_scalar!`][4] which does not typecheck bind parameters and leaves the output type to inference. The query itself is still checked that it is syntactically and semantically valid for the database, that it only produces one column and that the number of bind parameters is correct.

For this macro variant the name of the column is irrelevant.

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: ../src/sqlx/macros/mod.rs.html#700-707
   [4]: macro.query_scalar.html (macro sqlx::query_scalar)

