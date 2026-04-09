## query_with

## [sqlx][1]0.8.6

[sqlx][2]

# Function query_with Copy item path
[code]
    pub fn query_with<'q, DB, A>(sql: &'q [str][3], arguments: A) -> [Query][4]<'q, DB, A>
    
    where
        DB: [Database][5],
        A: [IntoArguments][6]<'q, DB>,
[/code]

Expand description

Execute a SQL query as a prepared statement (transparently cached), with the given arguments.

See [`query()`][7] for details, such as supported syntax.

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [4]: query/struct.Query.html (struct sqlx::query::Query)
   [5]: trait.Database.html (trait sqlx::Database)
   [6]: trait.IntoArguments.html (trait sqlx::IntoArguments)
   [7]: fn.query.html (fn sqlx::query)

