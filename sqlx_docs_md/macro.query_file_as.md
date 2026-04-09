## query_file_as

## [sqlx][1]0.8.6

[sqlx][2]

# Macro query_file_as Copy item path

[Source][3]
[code] 
    macro_rules! query_file_as {
        ($out_struct:path, $path:literal) => { ... };
        ($out_struct:path, $path:literal, $($args:tt)*) => { ... };
    }
[/code]

Expand description

Combines the syntaxes of [`query_as!`][4] and [`query_file!`][5].

Enforces requirements of both macros; see them for details.

ⓘ
[code]
    #[derive(Debug)]
    struct Account {
        id: i32,
        name: String
    }
    
    // let mut conn = <impl sqlx::Executor>;
    let account = sqlx::query_file_as!(Account, "tests/test-query-account-by-id.sql", 1i32)
        .fetch_one(&mut conn)
        .await?;
    
    println!("{account:?}");
    println!("{}: {}", account.id, account.name);
    
[/code]

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: ../src/sqlx/macros/mod.rs.html#615-622
   [4]: macro.query_as.html (macro sqlx::query_as)
   [5]: macro.query_file.html (macro sqlx::query_file)

