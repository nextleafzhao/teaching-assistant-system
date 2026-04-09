## Module query

## [sqlx][1]0.8.6

## Module query

### Module Items

  * Structs



## [In crate sqlx][2]

[sqlx][2]

# Module query Copy item path

[Source][3]

Expand description

Types and traits for the `query` family of functions and macros.

## Structs§

[Map][4]
    A single SQL query that will map its results to an owned Rust type.
[Query][5]
    A single SQL query as a prepared statement. Returned by [`query()`][6].
[QueryAs][7]
    A single SQL query as a prepared statement, mapping results using [`FromRow`][8]. Returned by [`query_as()`][9].
[QueryScalar][10]
    A single SQL query as a prepared statement which extracts only the first column of each row. Returned by [`query_scalar()`][11].

   [1]: ../../sqlx/index.html
   [2]: ../index.html
   [3]: ../../src/sqlx/lib.rs.html#155
   [4]: struct.Map.html (struct sqlx::query::Map)
   [5]: struct.Query.html (struct sqlx::query::Query)
   [6]: ../fn.query.html (fn sqlx::query)
   [7]: struct.QueryAs.html (struct sqlx::query::QueryAs)
   [8]: ../trait.FromRow.html (trait sqlx::FromRow)
   [9]: ../fn.query_as.html (fn sqlx::query_as)
   [10]: struct.QueryScalar.html (struct sqlx::query::QueryScalar)
   [11]: ../fn.query_scalar.html (fn sqlx::query_scalar)

