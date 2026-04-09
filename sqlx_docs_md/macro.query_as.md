## query_as

## [sqlx][1]0.8.6

## query_as

### Sections

  * Column Type Override: Infer from Struct Field
  * Troubleshooting: “error: mismatched types”



## [In crate sqlx][2]

[sqlx][2]

# Macro query_as Copy item path

[Source][3]
[code] 
    macro_rules! query_as {
        ($out_struct:path, $query:expr) => { ... };
        ($out_struct:path, $query:expr, $($args:tt)*) => { ... };
    }
[/code]

Expand description

A variant of [`query!`][4] which takes a path to an explicitly defined struct as the output type.

This lets you return the struct from a function or add your own trait implementations.

**This macro does not use[`FromRow`][5]**; in fact, no trait implementations are required at all, though this may change in future versions.

The macro maps rows using a struct literal where the names of columns in the query are expected to be the same as the fields of the struct (but the order does not need to be the same). The types of the columns are based on the query and not the corresponding fields of the struct, so this is type-safe as well.

This enforces a few things:

  * The query must output at least one column.
  * The column names of the query must match the field names of the struct.
  * The field types must be the Rust equivalent of their SQL counterparts; see the corresponding module for your database for mappings: 
    * Postgres: [crate::postgres::types]
    * MySQL: [crate::mysql::types] 
      * Note: due to wire protocol limitations, the query macros do not know when a column should be decoded as `bool`. It will be inferred to be `i8` instead. See the link above for details.
    * SQLite: [crate::sqlite::types][6]
  * If a column may be `NULL`, the corresponding field’s type must be wrapped in `Option<_>`.
  * Neither the query nor the struct may have unused fields.



The only modification to the `query!()` syntax is that the struct name is given before the SQL string:

ⓘ
[code]
    #[derive(Debug)]
    struct Account {
        id: i32,
        name: String
    }
    
    // let mut conn = <impl sqlx::Executor>;
    let account = sqlx::query_as!(
            Account,
            "select * from (select (1) as id, 'Herp Derpinson' as name) accounts where id = ?",
            1i32
        )
        .fetch_one(&mut conn)
        .await?;
    
    println!("{account:?}");
    println!("{}: {}", account.id, account.name);
    
[/code]

**The method you want to call depends on how many rows you’re expecting.**

| Number of Rows | Method to Call*              | Returns (`T` being the given struct)  | Notes                                                                                 |
|----------------|------------------------------|---------------------------------------|---------------------------------------------------------------------------------------|
| Zero or One    | `.fetch_optional(...).await` | `sqlx::Result<Option<T>>`             | Extra rows are ignored.                                                               |
| Exactly One    | `.fetch_one(...).await`      | `sqlx::Result<T>`                     | Errors if no rows were returned. Extra rows are ignored. Aggregate queries, use this. |
| At Least One   | `.fetch(...)`                | `impl Stream<Item = sqlx::Result<T>>` | Call `.try_next().await` to get each row result.                                      |
| Multiple       | `.fetch_all(...)`            | `sqlx::Result<Vec<T>>`                |                                                                                       |



* All methods accept one of `&mut {connection type}`, `&mut Transaction` or `&Pool`. (`.execute()` is omitted as this macro requires at least one column to be returned.)

#### §Column Type Override: Infer from Struct Field

In addition to the column type overrides supported by [`query!`][4], [`query_as!()`][7] supports an additional override option:

If you select a column `foo as "foo: _"` (Postgres/SQLite) or `foo as `foo: _`` (MySQL) it causes that column to be inferred based on the type of the corresponding field in the given record struct. Runtime type-checking is still done so an error will be emitted if the types are not compatible.

This allows you to override the inferred type of a column to instead use a custom-defined type:

ⓘ
[code]
    #[derive(sqlx::Type)]
    #[sqlx(transparent)]
    struct MyInt4(i32);
    
    struct Record {
        id: MyInt4,
    }
    
    let my_int = MyInt4(1);
    
    // Postgres/SQLite
    sqlx::query_as!(Record, r#"select 1 as "id: _""#) // MySQL: use "select 1 as `id: _`" instead
        .fetch_one(&mut conn)
        .await?;
    
    assert_eq!(record.id, MyInt4(1));
[/code]

#### §Troubleshooting: “error: mismatched types”

If you get a “mismatched types” error from an invocation of this macro and the error isn’t pointing specifically at a parameter.

For example, code like this (using a Postgres database):

ⓘ
[code]
    struct Account {
        id: i32,
        name: Option<String>,
    }
    
    let account = sqlx::query_as!(
        Account,
        r#"SELECT id, name from (VALUES (1, 'Herp Derpinson')) accounts(id, name)"#,
    )
        .fetch_one(&mut conn)
        .await?;
[/code]

Might produce an error like this:
[code] 
    error[E0308]: mismatched types
       --> tests/postgres/macros.rs:126:19
        |
    126 |       let account = sqlx::query_as!(
        |  ___________________^
    127 | |         Account,
    128 | |         r#"SELECT id, name from (VALUES (1, 'Herp Derpinson')) accounts(id, name)"#,
    129 | |     )
        | |_____^ expected `i32`, found enum `std::option::Option`
        |
        = note: expected type `i32`
                   found enum `std::option::Option<i32>`
[/code]

This means that you need to check that any field of the “expected” type (here, `i32`) matches the Rust type mapping for its corresponding SQL column (see the `types` module of your database, listed above, for mappings). The “found” type is the SQL->Rust mapping that the macro chose.

In the above example, the returned column is inferred to be nullable because it’s being returned from a `VALUES` statement in Postgres, so the macro inferred the field to be nullable and so used `Option<i32>` instead of `i32`. **In this specific case** we could use `select id as "id!"` to override the inferred nullability because we know in practice that column will never be `NULL` and it will fix the error.

Nullability inference and type overrides are discussed in detail in the docs for [`query!`][4].

It unfortunately doesn’t appear to be possible right now to make the error specifically mention the field; this probably requires the `const-panic` feature (still unstable as of Rust 1.45).

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: ../src/sqlx/macros/mod.rs.html#571-578
   [4]: macro.query.html (macro sqlx::query)
   [5]: trait.FromRow.html (trait sqlx::FromRow)
   [6]: sqlite/types/index.html (mod sqlx::sqlite::types)
   [7]: macro.query_as.html (macro sqlx::query_as)

