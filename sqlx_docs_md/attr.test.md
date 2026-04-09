## test

## [sqlx][1]0.8.6

## test

### Sections

  * Automatic Test Database Management (requires `migrate` feature)
    * Supported Databases
  * Automatic Migrations (requires `migrate` feature)
  * Automatic Fixture Application (requires `migrate` feature)



## [In crate sqlx][2]

[sqlx][2]

# Attribute Macro test Copy item path
[code]
    #[test]
[/code]

Expand description

Mark an `async fn` as a test with SQLx support.

The test will automatically be executed in the async runtime according to the chosen `runtime-{async-std, tokio}` feature. If more than one runtime feature is enabled, `runtime-tokio` is preferred.

By default, this behaves identically to `#[tokio::test]`1 or `#[async_std::test]`:
[code] 
    #[sqlx::test]
    async fn test_async_fn() {
        tokio::task::yield_now().await;
    } 
[/code]

However, several advanced features are also supported as shown in the next section.

1`#[sqlx::test]` does not recognize any of the control arguments supported by `#[tokio::test]` as that would have complicated the implementation. If your use case requires any of those, feel free to open an issue.

#### §Automatic Test Database Management (requires `migrate` feature)

`#[sqlx::test]` can automatically create test databases for you and provide live connections to your test.

For every annotated function, a new test database is created so tests can run against a live database but are isolated from each other.

This feature is activated by changing the signature of your test function. The following signatures are supported:

  * `async fn(Pool<DB>) -> Ret`
    * the `Pool`s used by all running tests share a single connection limit to avoid exceeding the server’s limit.
  * `async fn(PoolConnection<DB>) -> Ret`
    * `PoolConnection<Postgres>`, etc.
  * `async fn(PoolOptions<DB>, impl ConnectOptions<DB>) -> Ret`
    * Where `impl ConnectOptions` is, e.g, `PgConnectOptions`, `MySqlConnectOptions`, etc.
    * If your test wants to create its own `Pool` (for example, to set pool callbacks or to modify `ConnectOptions`), you can use this signature.



Where `DB` is a supported `Database` type and `Ret` is `()` or `Result<_, _>`.

###### §Supported Databases

Most of these will require you to set `DATABASE_URL` as an environment variable or in a `.env` file like `sqlx::query!()` _et al_ , to give the test driver a superuser connection with which to manage test databases.

| Database | Requires `DATABASE_URL` |
|----------|-------------------------|
| Postgres | Yes                     |
| MySQL    | Yes                     |
| SQLite   | No2                     |



Test databases are automatically cleaned up as tests succeed, but failed tests will leave their databases in-place to facilitate debugging. Note that to simplify the implementation, panics are _always_ considered to be failures, even for `#[should_panic]` tests.

To limit disk space usage, any previously created test databases will be deleted the next time a test binary using `#[sqlx::test]` is run.
[code] 
    use sqlx::{PgPool, Row};
    
    #[sqlx::test]
    async fn basic_test(pool: PgPool) -> sqlx::Result<()> {
        let mut conn = pool.acquire().await?;
    
        let foo = sqlx::query("SELECT * FROM foo")
            .fetch_one(&mut conn)
            .await?;
    
        assert_eq!(foo.get::<String, _>("bar"), "foobar!");
        
        Ok(())
    }
[/code]

2 SQLite defaults to `target/sqlx/test-dbs/<path>.sqlite` where `<path>` is the path of the test function converted to a filesystem path (`::` replaced with `/`).

#### §Automatic Migrations (requires `migrate` feature)

To ensure a straightforward test implementation against a fresh test database, migrations are automatically applied if a `migrations` folder is found in the same directory as `CARGO_MANIFEST_DIR` (the directory where the current crate’s `Cargo.toml` resides).

You can override the resolved path relative to `CARGO_MANIFEST_DIR` in the attribute (global overrides are not currently supported):

ⓘ
[code]
    use sqlx::{PgPool, Row};
    
    #[sqlx::test(migrations = "foo_migrations")]
    async fn basic_test(pool: PgPool) -> sqlx::Result<()> {
        let mut conn = pool.acquire().await?;
    
        let foo = sqlx::query("SELECT * FROM foo")
            .fetch_one(&mut conn)
            .await?;
    
        assert_eq!(foo.get::<String, _>("bar"), "foobar!");
        
        Ok(())
    }
[/code]

Or if you’re already embedding migrations in your main crate, you can reference them directly:

`foo_crate/lib.rs`

ⓘ
[code]
    pub static MIGRATOR: sqlx::migrate::Migrator = sqlx::migrate!("foo_migrations");
[/code]

`foo_crate/tests/foo_test.rs`
[code] 
    use sqlx::{PgPool, Row};
    
    
    // You could also do `use foo_crate::MIGRATOR` and just refer to it as `MIGRATOR` here.
    #[sqlx::test(migrator = "foo_crate::MIGRATOR")]
    async fn basic_test(pool: PgPool) -> sqlx::Result<()> {
        let mut conn = pool.acquire().await?;
    
        let foo = sqlx::query("SELECT * FROM foo")
            .fetch_one(&mut conn)
            .await?;
    
        assert_eq!(foo.get::<String, _>("bar"), "foobar!");
        
        Ok(())
    }
[/code]

Or disable migrations processing entirely:
[code] 
    use sqlx::{PgPool, Row};
    
    #[sqlx::test(migrations = false)]
    async fn basic_test(pool: PgPool) -> sqlx::Result<()> {
        let mut conn = pool.acquire().await?;
        
        conn.execute("CREATE TABLE foo(bar text)").await?;
    
        let foo = sqlx::query("SELECT * FROM foo")
            .fetch_one(&mut conn)
            .await?;
    
        assert_eq!(foo.get::<String, _>("bar"), "foobar!");
        
        Ok(())
    }
[/code]

#### §Automatic Fixture Application (requires `migrate` feature)

Since tests are isolated from each other but may require data to already exist in the database to keep from growing exponentially in complexity, `#[sqlx::test]` also supports applying test fixtures, which are SQL scripts that function similarly to migrations but are solely intended to insert test data and be arbitrarily composable.

Imagine a basic social app that has users, posts and comments. To test the comment routes, you’d want the database to already have users and posts in it so the comments tests don’t have to duplicate that work.

You can either pass a list of fixture to the attribute `fixtures` in three different operating modes:

  1. Pass a list of references files in `./fixtures` (resolved as `./fixtures/{name}.sql`, `.sql` added only if extension is missing);
  2. Pass a list of file paths (including associated extension), in which case they can either be absolute, or relative to the current file;
  3. Pass a `path = <path to folder>` parameter and a `scripts(<filename_1>, <filename_2>, ...)` parameter that are relative to the provided path (resolved as `{path}/{filename_x}.sql`, `.sql` added only if extension is missing).



In any case they will be applied in the given order3:
[code] 
    use sqlx::PgPool;
    use serde_json::json;
    
    // Alternatives:
    // #[sqlx::test(fixtures("./fixtures/users.sql", "./fixtures/posts.sql"))]
    // or
    // #[sqlx::test(fixtures(path = "./fixtures", scripts("users", "posts")))]
    #[sqlx::test(fixtures("users", "posts"))]
    async fn test_create_comment(pool: PgPool) -> sqlx::Result<()> {
        // See examples/postgres/social-axum-with-tests for a more in-depth example. 
        let mut app = create_app(pool);     
        
        let comment = test_request(
            &mut app, "POST", "/v1/comment", json! { "postId": "1234" }
        ).await?;
        
        assert_eq!(comment["postId"], "1234");
        
        Ok(())
    }
[/code]

Multiple `fixtures` attributes can be used to combine different operating modes.

3Ordering for test fixtures is entirely up to the application, and each test may choose which fixtures to apply and which to omit. However, since each fixture is applied separately (sent as a single command string, so wrapped in an implicit `BEGIN` and `COMMIT`), you will want to make sure to order the fixtures such that foreign key requirements are always satisfied, or else you might get errors.

   [1]: ../sqlx/index.html
   [2]: index.html

