## query_as_with

## [sqlx][1]0.8.6

[sqlx][2]

# Function query_as_with Copy item path
[code]
    pub fn query_as_with<'q, DB, O, A>(
        sql: &'q [str][3],
        arguments: A,
    ) -> [QueryAs][4]<'q, DB, O, A>
    
    where
        DB: [Database][5],
        A: [IntoArguments][6]<'q, DB>,
        O: for<'r> [FromRow][7]<'r, <DB as [Database][5]>::[Row][8]>,
[/code]

Expand description

Execute a single SQL query, with the given arguments as a prepared statement (transparently cached). Maps rows to Rust types using [`FromRow`][7].

For details about prepared statements and allowed SQL syntax, see [`query()`][9].

For details about type mapping from [`FromRow`][7], see [`query_as()`][10].

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [4]: query/struct.QueryAs.html (struct sqlx::query::QueryAs)
   [5]: trait.Database.html (trait sqlx::Database)
   [6]: trait.IntoArguments.html (trait sqlx::IntoArguments)
   [7]: trait.FromRow.html (trait sqlx::FromRow)
   [8]: trait.Database.html#associatedtype.Row (type sqlx::Database::Row)
   [9]: fn.query.html (fn sqlx::query)
   [10]: fn.query_as.html (fn sqlx::query_as)

