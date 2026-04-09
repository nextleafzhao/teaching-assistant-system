## query_as

## [sqlx][1]0.8.6

## query_as

### Sections

  * Example: Map Rows using Tuples
  * Example: Map Rows using `#[derive(FromRow)]`



## [In crate sqlx][2]

[sqlx][2]

# Function query_as Copy item path
[code]
    pub fn query_as<'q, DB, O>(
        sql: &'q [str][3],
    ) -> [QueryAs][4]<'q, DB, O, <DB as [Database][5]>::[Arguments][6]<'q>>
    
    where
        DB: [Database][5],
        O: for<'r> [FromRow][7]<'r, <DB as [Database][5]>::[Row][8]>,
[/code]

Expand description

Execute a single SQL query as a prepared statement (transparently cached). Maps rows to Rust types using [`FromRow`][7].

For details about prepared statements and allowed SQL syntax, see [`query()`][9].

#### §Example: Map Rows using Tuples

[`FromRow`][7] is implemented for tuples of up to 16 elements1. Using a tuple of N elements will extract the first N columns from each row using [`Decode`][10]. Any extra columns are ignored.

See [`sqlx::types`][crate::types] for the types that can be used.

The `FromRow` implementation will check [`Type::compatible()`][11] for each column to ensure a compatible type mapping is used. If an incompatible mapping is detected, an error is returned. To statically assert compatible types at compile time, see the `query!()` family of macros.

**NOTE** : `SELECT *` is not recommended with this approach because the ordering of returned columns may be different than expected, especially when using joins.
[code] 
    use sqlx::Connection;
    use sqlx::PgConnection;
    
    // This example can be applied to any database as it only uses standard types and syntax.
    let mut conn: PgConnection = PgConnection::connect("<Database URL>").await?;
    
    sqlx::raw_sql(
        "CREATE TABLE users(id INTEGER PRIMARY KEY, username TEXT UNIQUE, created_at TIMESTAMPTZ DEFAULT (now()))"
    )
        .execute(&mut conn)
        .await?;
    
    sqlx::query("INSERT INTO users(id, username) VALUES (1, 'alice'), (2, 'bob');")
        .execute(&mut conn)
        .await?;
    
    // Get the first row of the result (note the `LIMIT 1` for efficiency)
    // This assumes the `time` feature of SQLx is enabled.
    let oldest_user: (i32, String, time::OffsetDateTime) = sqlx::query_as(
        "SELECT id, username, created_at FROM users ORDER BY created_at LIMIT 1"
    )
        .fetch_one(&mut conn)
        .await?;
    
    assert_eq!(oldest_user.0, 1);
    assert_eq!(oldest_user.1, "alice");
    
    // Get at most one row
    let maybe_charlie: Option<(i32, String, time::OffsetDateTime)> = sqlx::query_as(
        "SELECT id, username, created_at FROM users WHERE username = 'charlie'"
    )
        .fetch_optional(&mut conn)
        .await?;
    
    assert_eq!(maybe_charlie, None);
    
    // Get all rows in result (Beware of the size of the result set! Consider using `LIMIT`)
    let users: Vec<(i32, String, time::OffsetDateTime)> = sqlx::query_as(
        "SELECT id, username, created_at FROM users ORDER BY id"
    )
        .fetch_all(&mut conn)
        .await?;
    
    println!("{users:?}");
[/code]

1: It’s impossible in Rust to implement a trait for tuples of arbitrary size. For larger result sets, either use an explicit struct (see below) or use [`query()`][9] instead and extract columns dynamically.

#### §Example: Map Rows using `#[derive(FromRow)]`

Using `#[derive(FromRow)]`, we can create a Rust struct to represent our row type so we can look up fields by name instead of tuple index.

When querying this way, columns will be matched up to the corresponding fields by name, so `SELECT *` is safe to use. However, you will still want to be aware of duplicate column names in your query when using joins.

The derived `FromRow` implementation will check [`Type::compatible()`][11] for each column to ensure a compatible type mapping is used. If an incompatible mapping is detected, an error is returned. To statically assert compatible types at compile time, see the `query!()` family of macros.

An error will also be returned if an expected column is missing from the result set.

`#[derive(FromRow)]` supports several control attributes which can be used to change how column names and types are mapped. See [`FromRow`][7] for details.

Using our previous table definition, we can convert our queries like so:
[code] 
    use sqlx::Connection;
    use sqlx::PgConnection;
    
    use time::OffsetDateTime;
    
    #[derive(sqlx::FromRow, Debug, PartialEq, Eq)]
    struct User {
        id: i64,
        username: String,
        // Note: the derive won't compile if the `time` feature of SQLx is not enabled.
        created_at: OffsetDateTime,
    }
    
    let mut conn: PgConnection = PgConnection::connect("<Database URL>").await?;
    
    // Get the first row of the result (note the `LIMIT 1` for efficiency)
    let oldest_user: User = sqlx::query_as(
        "SELECT id, username, created_at FROM users ORDER BY created_at LIMIT 1"
    )
        .fetch_one(&mut conn)
        .await?;
    
    assert_eq!(oldest_user.id, 1);
    assert_eq!(oldest_user.username, "alice");
    
    // Get at most one row
    let maybe_charlie: Option<User> = sqlx::query_as(
        "SELECT id, username, created_at FROM users WHERE username = 'charlie'"
    )
        .fetch_optional(&mut conn)
        .await?;
    
    assert_eq!(maybe_charlie, None);
    
    // Get all rows in result (Beware of the size of the result set! Consider using `LIMIT`)
    let users: Vec<User> = sqlx::query_as(
        "SELECT id, username, created_at FROM users ORDER BY id"
    )
        .fetch_all(&mut conn)
        .await?;
    
    assert_eq!(users[1].id, 2);
    assert_eq!(users[1].username, "bob");
    
[/code]

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [4]: query/struct.QueryAs.html (struct sqlx::query::QueryAs)
   [5]: trait.Database.html (trait sqlx::Database)
   [6]: trait.Database.html#associatedtype.Arguments (type sqlx::Database::Arguments)
   [7]: trait.FromRow.html (trait sqlx::FromRow)
   [8]: trait.Database.html#associatedtype.Row (type sqlx::Database::Row)
   [9]: fn.query.html (fn sqlx::query)
   [10]: trait.Decode.html (trait sqlx::Decode)
   [11]: trait.Type.html#method.compatible (associated function sqlx::Type::compatible)

