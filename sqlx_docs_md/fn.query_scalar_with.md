## query_scalar_with

## [sqlx][1]0.8.6

[sqlx][2]

# Function query_scalar_with Copy item path
[code]
    pub fn query_scalar_with<'q, DB, O, A>(
        sql: &'q [str][3],
        arguments: A,
    ) -> [QueryScalar][4]<'q, DB, O, A>
    
    where
        DB: [Database][5],
        A: [IntoArguments][6]<'q, DB>,
        [(O,)][7]: for<'r> [FromRow][8]<'r, <DB as [Database][5]>::[Row][9]>,
[/code]

Expand description

Execute a SQL query as a prepared statement (transparently cached), with the given arguments, and extract the first column of each row.

See [`query_scalar()`][10] for details.

For details about prepared statements and allowed SQL syntax, see [`query()`][11].

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [4]: query/struct.QueryScalar.html (struct sqlx::query::QueryScalar)
   [5]: trait.Database.html (trait sqlx::Database)
   [6]: trait.IntoArguments.html (trait sqlx::IntoArguments)
   [7]: https://doc.rust-lang.org/1.94.1/std/primitive.tuple.html
   [8]: trait.FromRow.html (trait sqlx::FromRow)
   [9]: trait.Database.html#associatedtype.Row (type sqlx::Database::Row)
   [10]: fn.query_scalar.html (fn sqlx::query_scalar)
   [11]: fn.query.html (fn sqlx::query)

