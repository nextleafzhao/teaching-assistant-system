## query_file_as_unchecked

## [sqlx][1]0.8.6

[sqlx][2]

# Macro query_file_as_unchecked Copy item path

[Source][3]
[code] 
    macro_rules! query_file_as_unchecked {
        ($out_struct:path, $path:literal) => { ... };
        ($out_struct:path, $path:literal, $($args:tt)*) => { ... };
    }
[/code]

Expand description

A variant of [`query_file_as!`][4] which does not check the input or output types. This still does parse the query to ensure it’s syntactically and semantically valid for the current database.

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: ../src/sqlx/macros/mod.rs.html#643-651
   [4]: macro.query_file_as.html (macro sqlx::query_file_as)

