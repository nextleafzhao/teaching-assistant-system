## query_file_unchecked

## [sqlx][1]0.8.6

[sqlx][2]

# Macro query_file_unchecked Copy item path

[Source][3]
[code] 
    macro_rules! query_file_unchecked {
        ($path:literal) => { ... };
        ($path:literal, $($args:tt)*) => { ... };
    }
[/code]

Expand description

A variant of [`query_file!`][4] which does not check the input or output types. This still does parse the query to ensure it’s syntactically and semantically valid for the current database.

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: ../src/sqlx/macros/mod.rs.html#403-410
   [4]: macro.query_file.html (macro sqlx::query_file)

