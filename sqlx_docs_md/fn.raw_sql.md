## raw_sql

## [sqlx][1]0.8.6

## raw_sql

### Sections

  * Note: singular DML queries, prefer `query()`
    * Common Table Expressions (CTEs: i.e The `WITH` Clause)
    * `UNION`/`INTERSECT`/`EXCEPT`
  * Note: query parameters are not supported.
  * Note: multiple statements and autocommit.
    * MySQL and MariaDB: DDL implicitly commits!



## [In crate sqlx][2]

[sqlx][2]

# Function raw_sql Copy item path
[code]
    pub fn raw_sql(sql: &[str][3]) -> [RawSql][4]<'_>
[/code]

Expand description

Execute one or more statements as raw SQL, separated by semicolons (`;`).

This interface can be used to execute both DML (Data Manipulation Language: `SELECT`, `INSERT`, `UPDATE`, `DELETE` and variants) as well as DDL (Data Definition Language: `CREATE TABLE`, `ALTER TABLE`, etc).

This will not create or cache any prepared statements.

#### §Note: singular DML queries, prefer `query()`

This API does not use prepared statements, so usage of it is missing out on their benefits.

Prefer [`query()`][5] instead if executing a single query.

It’s also possible to combine multiple DML queries into one for use with `query()`:

###### §Common Table Expressions (CTEs: i.e The `WITH` Clause)

Common Table Expressions effectively allow you to define aliases for queries that can be referenced like temporary tables:
[code] 
    WITH inserted_foos AS (
        -- Note that only Postgres allows data-modifying statements in CTEs
        INSERT INTO foo (bar_id) VALUES ($1)
        RETURNING foo_id, bar_id
    )
    SELECT foo_id, bar_id, bar
    FROM inserted_foos
    INNER JOIN bar USING (bar_id)
[/code]

It’s important to note that data modifying statements (`INSERT`, `UPDATE`, `DELETE`) may behave differently than expected. In Postgres, all data-modifying subqueries in a `WITH` clause execute with the same view of the data; they _cannot_ see each other’s modifications.

MySQL, MariaDB and SQLite appear to _only_ allow `SELECT` statements in CTEs.

See the appropriate entry in your database’s manual for details:

  * [MySQL][6]
    * [MariaDB][7]
  * [Postgres][8]
  * [SQLite][9]



###### §`UNION`/`INTERSECT`/`EXCEPT`

You can also use various set-theory operations on queries, including `UNION ALL` which simply concatenates their results.

See the appropriate entry in your database’s manual for details:

  * [MySQL][10]
    * [MariaDB][11]
  * [Postgres][12]
  * [SQLite][13]



#### §Note: query parameters are not supported.

Query parameters require the use of prepared statements which this API does support.

If you require dynamic input data in your SQL, you can use `format!()` but **be very careful doing this with user input**. SQLx does **not** provide escaping or sanitization for inserting dynamic input into queries this way.

See [`query()`][5] for details.

#### §Note: multiple statements and autocommit.

By default, when you use this API to execute a SQL string containing multiple statements separated by semicolons (`;`), the database server will treat those statements as all executing within the same transaction block, i.e. wrapped in `BEGIN` and `COMMIT`:
[code] 
    let mut conn: sqlx::PgConnection = todo!("e.g. PgConnection::connect(<DATABASE URL>)");
    
    sqlx::raw_sql(
        // Imagine we're moving data from one table to another:
        // Implicit `BEGIN;`
        "UPDATE foo SET bar = foobar.bar FROM foobar WHERE foobar.foo_id = foo.id;\
         DELETE FROM foobar;"
        // Implicit `COMMIT;`
    )
       .execute(&mut conn)
       .await?;
    
[/code]

If one statement triggers an error, the whole script aborts and rolls back. You can include explicit `BEGIN` and `COMMIT` statements in the SQL string to designate units that can be committed or rolled back piecemeal.

This also allows for a rudimentary form of pipelining as the whole SQL string is sent in one go.

###### §MySQL and MariaDB: DDL implicitly commits!

MySQL and MariaDB do not support DDL in transactions. Instead, any active transaction is immediately and implicitly committed by the database server when executing a DDL statement. Beware of this behavior.

See [MySQL manual, section 13.3.3: Statements That Cause an Implicit Commit][14] for details. See also: [MariaDB manual: SQL statements That Cause an Implicit Commit][15].

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [4]: struct.RawSql.html (struct sqlx::RawSql)
   [5]: fn.query.html (fn sqlx::query)
   [6]: https://dev.mysql.com/doc/refman/8.0/en/with.html
   [7]: https://mariadb.com/kb/en/with/
   [8]: https://www.postgresql.org/docs/current/queries-with.html
   [9]: https://www.sqlite.org/lang_with.html
   [10]: https://dev.mysql.com/doc/refman/8.0/en/set-operations.html
   [11]: https://mariadb.com/kb/en/joins-subqueries/
   [12]: https://www.postgresql.org/docs/current/queries-union.html
   [13]: https://www.sqlite.org/lang_select.html#compound_select_statements
   [14]: https://dev.mysql.com/doc/refman/8.0/en/implicit-commit.html
   [15]: https://mariadb.com/kb/en/sql-statements-that-cause-an-implicit-commit/

