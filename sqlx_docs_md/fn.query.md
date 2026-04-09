## query

## [sqlx][1]0.8.6

## query

### Sections

  * Dynamic Input: Use Query Parameters (Prevents SQL Injection)
    * You should always prefer query parameters for dynamic input.
    * The value bound to a query parameter is entirely separate from the query and does not affect its syntax.
    * SQLx supports many different types for parameter binding, not just strings.



## [In crate sqlx][2]

[sqlx][2]

# Function query Copy item path
[code]
    pub fn query<DB>(sql: &[str][3]) -> [Query][4]<'_, DB, <DB as [Database][5]>::[Arguments][6]<'_>>
    
    where
        DB: [Database][5],
[/code]

Expand description

Execute a single SQL query as a prepared statement (transparently cached).

The query string may only contain a single DML statement: `SELECT`, `INSERT`, `UPDATE`, `DELETE` and variants. The SQLite driver does not currently follow this restriction, but that behavior is deprecated.

The connection will transparently prepare and cache the statement, which means it only needs to be parsed once in the connection’s lifetime, and any generated query plans can be retained. Thus, the overhead of executing the statement is amortized.

Some third-party databases that speak a supported protocol, e.g. CockroachDB or PGBouncer that speak Postgres, may have issues with the transparent caching of prepared statements. If you are having trouble, try setting [`.persistent(false)`][7].

See the [`Query`][4] type for the methods you may call.

#### §Dynamic Input: Use Query Parameters (Prevents SQL Injection)

At some point, you’ll likely want to include some form of dynamic input in your query, possibly from the user.

Your first instinct might be to do something like this:
[code] 
    // Imagine this is input from the user, e.g. a search form on a website.
    let user_input = "possibly untrustworthy input!";
    
    // DO NOT DO THIS unless you're ABSOLUTELY CERTAIN it's what you need!
    let query = format!("SELECT * FROM articles WHERE content LIKE '%{user_input}%'");
    // where `conn` is `PgConnection` or `MySqlConnection`
    // or some other type that implements `Executor`.
    let results = sqlx::query(&query).fetch_all(&mut conn).await?;
[/code]

The example above showcases a **SQL injection vulnerability** , because it’s trivial for a malicious user to craft an input that can “break out” of the string literal.

For example, if they send the input `foo'; DELETE FROM articles; --` then your application would send the following to the database server (line breaks added for clarity):
[code] 
    SELECT * FROM articles WHERE content LIKE '%foo';
    DELETE FROM articles;
    --%'
[/code]

In this case, because this interface _always_ uses prepared statements, you would likely be fine because prepared statements _generally_ (see above) are only allowed to contain a single query. This would simply return an error.

However, it would also break on legitimate user input. What if someone wanted to search for the string `Alice's Apples`? It would also return an error because the database would receive a query with a broken string literal (line breaks added for clarity):
[code] 
    SELECT * FROM articles WHERE content LIKE '%Alice'
    s Apples%'
[/code]

Of course, it’s possible to make this syntactically valid by escaping the apostrophe, but there’s a better way.

###### §You should always prefer query parameters for dynamic input.

When using query parameters, you add placeholders to your query where a value should be substituted at execution time, then call [`.bind()`][8] with that value.

The syntax for placeholders is unfortunately not standardized and depends on the database:

  * Postgres and SQLite: use `$1`, `$2`, `$3`, etc. 
    * The number is the Nth bound value, starting from one.
    * The same placeholder can be used arbitrarily many times to refer to the same bound value.
    * SQLite technically supports MySQL’s syntax as well as others, but we recommend using this syntax as SQLx’s SQLite driver is written with it in mind.
  * MySQL and MariaDB: use `?`. 
    * Placeholders are purely positional, similar to `println!("{}, {}", foo, bar)`.
    * The order of bindings must match the order of placeholders in the query.
    * To use a value in multiple places, you must bind it multiple times.



In both cases, the placeholder syntax acts as a variable expression representing the bound value:
[code] 
    let user_input = "Alice's Apples";
    
    // Postgres and SQLite
    let results = sqlx::query(
        // Notice how we only have to bind the argument once and we can use it multiple times:
        "SELECT * FROM articles
         WHERE title LIKE '%' || $1 || '%'
         OR content LIKE '%' || $1 || '%'"
    )
        .bind(user_input)
        .fetch_all(&mut conn)
        .await?;
    
    // MySQL and MariaDB
    let results = sqlx::query(
        "SELECT * FROM articles
         WHERE title LIKE CONCAT('%', ?, '%')
         OR content LIKE CONCAT('%', ?, '%')"
    )
        // If we want to reference the same value multiple times, we have to bind it multiple times:
        .bind(user_input)
        .bind(user_input)
        .fetch_all(&mut conn)
        .await?;
[/code]

###### §The value bound to a query parameter is entirely separate from the query and does not affect its syntax.

Thus, SQL injection is impossible (barring shenanigans like calling a SQL function that lets you execute a string as a statement) and _all_ strings are valid.

This also means you cannot use query parameters to add conditional SQL fragments.

**SQLx does not substitute placeholders on the client side**. It is done by the database server itself.

###### §SQLx supports many different types for parameter binding, not just strings.

Any type that implements [`Encode<DB>`][9] and [`Type<DB>`][10] can be bound as a parameter.

See [the `types` module][crate::types] (links to `sqlx_core::types` but you should use `sqlx::types`) for details.

As an additional benefit, query parameters are usually sent in a compact binary encoding instead of a human-readable text encoding, which saves bandwidth.

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [4]: query/struct.Query.html (struct sqlx::query::Query)
   [5]: trait.Database.html (trait sqlx::Database)
   [6]: trait.Database.html#associatedtype.Arguments (type sqlx::Database::Arguments)
   [7]: query/struct.Query.html#method.persistent (method sqlx::query::Query::persistent)
   [8]: query/struct.Query.html#method.bind (method sqlx::query::Query::bind)
   [9]: trait.Encode.html (trait sqlx::Encode)
   [10]: trait.Type.html (trait sqlx::Type)

