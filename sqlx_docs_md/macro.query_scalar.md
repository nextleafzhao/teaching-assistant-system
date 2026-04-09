## query_scalar

## [sqlx][1]0.8.6

[sqlx][2]

# Macro query_scalar Copy item path

[Source][3]
[code] 
    macro_rules! query_scalar {
        ($query:expr) => { ... };
        ($query:expr, $($args:tt)*) => { ... };
    }
[/code]

Expand description

A variant of [`query!`][4] which expects a single column from the query and evaluates to an instance of [QueryScalar][5].

The name of the column is not required to be a valid Rust identifier, however you can still use the column type override syntax in which case the column name _does_ have to be a valid Rust identifier for the override to parse properly. If the override parse fails the error is silently ignored (we just don’t have a reliable way to tell the difference). **If you’re getting a different type than expected, please check to see if your override syntax is correct before opening an issue.**

Wildcard overrides like in [`query_as!`][6] are also allowed, in which case the output type is left up to inference.

See [`query!`][4] for more information.

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: ../src/sqlx/macros/mod.rs.html#669-676
   [4]: macro.query.html (macro sqlx::query)
   [5]: query/struct.QueryScalar.html (struct sqlx::query::QueryScalar)
   [6]: macro.query_as.html (macro sqlx::query_as)

