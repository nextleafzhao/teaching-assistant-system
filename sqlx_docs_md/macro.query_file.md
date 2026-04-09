## query_file

## [sqlx][1]0.8.6

[sqlx][2]

# Macro query_file Copy item path

[Source][3]
[code] 
    macro_rules! query_file {
        ($path:literal) => { ... };
        ($path:literal, $($args:tt)*) => { ... };
    }
[/code]

Expand description

A variant of [`query!`][4] where the SQL query is stored in a separate file.

Useful for large queries and potentially cleaner than multiline strings.

The syntax and requirements (see [`query!`][4]) are the same except the SQL string is replaced by a file path.

The file must be relative to the project root (the directory containing `Cargo.toml`), unlike `include_str!()` which uses compiler internals to get the path of the file where it was invoked.

* * *

`examples/queries/account-by-id.sql`:
[code] 
    select * from (select (1) as id, 'Herp Derpinson' as name) accounts
    where id = ?
[/code]

`src/my_query.rs`:

ⓘ
[code]
    let account = sqlx::query_file!("tests/test-query-account-by-id.sql", 1i32)
        .fetch_one(&mut conn)
        .await?;
    
    println!("{account:?}");
    println!("{}: {}", account.id, account.name);
    
[/code]

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: ../src/sqlx/macros/mod.rs.html#389-396
   [4]: macro.query.html (macro sqlx::query)

