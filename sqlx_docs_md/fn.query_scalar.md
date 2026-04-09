## query_scalar

## [sqlx][1]0.8.6

## query_scalar

### Sections

  * Example: Simple Lookup
  * Example: `COUNT`
  * Example: `EXISTS`
  * Example: Other Aggregates
  * Example: `Vec` of Scalars



## [In crate sqlx][2]

[sqlx][2]

# Function query_scalar Copy item path
[code]
    pub fn query_scalar<'q, DB, O>(
        sql: &'q [str][3],
    ) -> [QueryScalar][4]<'q, DB, O, <DB as [Database][5]>::[Arguments][6]<'q>>
    
    where
        DB: [Database][5],
        [(O,)][7]: for<'r> [FromRow][8]<'r, <DB as [Database][5]>::[Row][9]>,
[/code]

Expand description

Execute a single SQL query as a prepared statement (transparently cached) and extract the first column of each row.

Extracts the first column of each row. Additional columns are ignored. Any type that implements `Type<DB> + Decode<DB>` may be used.

For details about prepared statements and allowed SQL syntax, see [`query()`][10].

#### §Example: Simple Lookup

If you just want to look up a single value with little fanfare, this API is perfect for you:
[code] 
    use uuid::Uuid;
    
    // MySQL and MariaDB: use `?`
    let user_id: Option<Uuid> = sqlx::query_scalar("SELECT user_id FROM users WHERE username = $1")
        .bind("alice")
        // Use `&mut` where `conn` is a connection or a transaction, or use `&` for a `Pool`.
        .fetch_optional(&mut conn)
        .await?;
    
    let user_id = user_id.ok_or("unknown user")?;
    
[/code]

Note how we’re using `.fetch_optional()` because the lookup may return no results, in which case we need to be able to handle an empty result set. Any rows after the first are ignored.

#### §Example: `COUNT`

This API is the easiest way to invoke an aggregate query like `SELECT COUNT(*)`, because you can conveniently extract the result:
[code] 
    // Note that `usize` is not used here because unsigned integers are generally not supported,
    // and `usize` doesn't even make sense as a mapping because the database server may have
    // a completely different architecture.
    //
    // `i64` is generally a safe choice for `COUNT`.
    let count: i64 = sqlx::query_scalar("SELECT COUNT(*) FROM users WHERE accepted_tos IS TRUE")
        // Use `&mut` where `conn` is a connection or a transaction, or use `&` for a `Pool`.
        .fetch_one(&mut conn)
        .await?;
    
    // The above is functionally equivalent to the following:
    // Note the trailing comma, required for the compiler to recognize a 1-element tuple.
    let (count,): (i64,) = sqlx::query_as("SELECT COUNT(*) FROM users WHERE accepted_tos IS TRUE")
        .fetch_one(&mut conn)
        .await?;
[/code]

#### §Example: `EXISTS`

To test if a row exists or not, use `SELECT EXISTS(<query>)`:
[code] 
    // MySQL and MariaDB: use `?`
    let username_taken: bool = sqlx::query_scalar(
        "SELECT EXISTS(SELECT 1 FROM users WHERE username = $1)"
    )
        .bind("alice")
        // Use `&mut` where `conn` is a connection or a transaction, or use `&` for a `Pool`.
        .fetch_one(&mut conn)
        .await?;
[/code]

#### §Example: Other Aggregates

Be aware that most other aggregate functions return `NULL` if the query yields an empty set:
[code] 
    let max_upvotes: Option<i64> = sqlx::query_scalar("SELECT MAX(upvotes) FROM posts")
        // Use `&mut` where `conn` is a connection or a transaction, or use `&` for a `Pool`.
        .fetch_one(&mut conn)
        .await?;
[/code]

Note how we’re using `Option<i64>` with `.fetch_one()`, because we’re always expecting one row but the column value may be `NULL`. If no rows are returned, this will error.

This is in contrast to using `.fetch_optional()` with `Option<i64>`, which implies that we’re expecting _either_ a row with a `i64` (`BIGINT`), _or_ no rows at all.

Either way, any rows after the first are ignored.

#### §Example: `Vec` of Scalars

If you want to collect a single column from a query into a vector, try `.fetch_all()`:
[code] 
    let top_users: Vec<String> = sqlx::query_scalar(
        // Note the `LIMIT` to ensure that this doesn't return *all* users:
        "SELECT username
         FROM (
             SELECT SUM(upvotes) total, user_id
             FROM posts
             GROUP BY user_id
         ) top_users
         INNER JOIN users USING (user_id)
         ORDER BY total DESC
         LIMIT 10"
    )
        // Use `&mut` where `conn` is a connection or a transaction, or use `&` for a `Pool`.
        .fetch_all(&mut conn)
        .await?;
    
    // `top_users` could be empty, too.
    assert!(top_users.len() <= 10);
[/code]

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [4]: query/struct.QueryScalar.html (struct sqlx::query::QueryScalar)
   [5]: trait.Database.html (trait sqlx::Database)
   [6]: trait.Database.html#associatedtype.Arguments (type sqlx::Database::Arguments)
   [7]: https://doc.rust-lang.org/1.94.1/std/primitive.tuple.html
   [8]: trait.FromRow.html (trait sqlx::FromRow)
   [9]: trait.Database.html#associatedtype.Row (type sqlx::Database::Row)
   [10]: fn.query.html (fn sqlx::query)

