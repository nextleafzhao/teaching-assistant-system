## QueryBuilder

## [sqlx][1]0.8.6

## QueryBuilder

### Methods

  * build
  * build_query_as
  * build_query_scalar
  * into_sql
  * new
  * push
  * push_bind
  * push_tuples
  * push_values
  * reset
  * separated
  * sql
  * with_arguments



### Trait Implementations

  * Default



### Auto Trait Implementations

  * Freeze
  * RefUnwindSafe
  * Send
  * Sync
  * Unpin
  * UnwindSafe



### Blanket Implementations

  * Any
  * Borrow<T>
  * BorrowMut<T>
  * From<T>
  * Instrument
  * Into<U>
  * IntoEither
  * Same
  * TryFrom<U>
  * TryInto<U>
  * WithSubscriber



## [In crate sqlx][2]

[sqlx][2]

# Struct QueryBuilder Copy item path
[code]
    pub struct QueryBuilder<'args, DB>
    
    where
        DB: [Database][3],
    
    { /* private fields */ }
[/code]

Expand description

A builder type for constructing queries at runtime.

See [`.push_values()`][4] for an example of building a bulk `INSERT` statement. Note, however, that with Postgres you can get much better performance by using arrays and `UNNEST()`. [See our FAQ][5] for details.

## Implementations§

§

### impl<'args, DB> [QueryBuilder][6]<'args, DB>

where DB: [Database][3],

#### pub fn new(init: impl [Into][7]<[String][8]>) -> [QueryBuilder][6]<'args, DB>

where <DB as [Database][3]>::[Arguments][9]<'args>: [Default][10],

Start building a query with an initial SQL fragment, which may be an empty string.

#### pub fn with_arguments<A>( init: impl [Into][7]<[String][8]>, arguments: A, ) -> [QueryBuilder][6]<'args, DB>

where DB: [Database][3], A: [IntoArguments][11]<'args, DB>,

Construct a `QueryBuilder` with existing SQL and arguments.

###### §Note

This does _not_ check if `arguments` is valid for the given SQL.

#### pub fn push(&mut self, sql: impl [Display][12]) -> &mut [QueryBuilder][6]<'args, DB>

Append a SQL fragment to the query.

May be a string or anything that implements `Display`. You can also use `format_args!()` here to push a formatted string without an intermediate allocation.

###### §Warning: Beware SQL Injection Vulnerabilities and Untrusted Input!

You should _not_ use this to insert input directly into the query from an untrusted user as this can be used by an attacker to extract sensitive data or take over your database.

Security breaches due to SQL injection can cost your organization a lot of money from damage control and lost clients, betray the trust of your users in your system, and are just plain embarrassing. If you are unfamiliar with the threat that SQL injection imposes, you should take some time to learn more about it before proceeding:

  * [SQL Injection on OWASP.org][13]
  * [SQL Injection on Wikipedia][14]
    * See “Examples” for notable instances of security breaches due to SQL injection.



This method does _not_ perform sanitization. Instead, you should use [`.push_bind()`][15] which inserts a placeholder into the query and then sends the possibly untrustworthy value separately (called a “bind argument”) so that it cannot be misinterpreted by the database server.

Note that you should still at least have some sort of sanity checks on the values you’re sending as that’s just good practice and prevent other types of attacks against your system, e.g. check that strings aren’t too long, numbers are within expected ranges, etc.

#### pub fn push_bind<T>(&mut self, value: T) -> &mut [QueryBuilder][6]<'args, DB>

where T: 'args + [Encode][16]<'args, DB> \+ [Type][17]<DB>,

Push a bind argument placeholder (`?` or `$N` for Postgres) and bind a value to it.

###### §Note: Database-specific Limits

Note that every database has a practical limit on the number of bind parameters you can add to a single query. This varies by database.

While you should consult the manual of your specific database version and/or current configuration for the exact value as it may be different than listed here, the defaults for supported databases as of writing are as follows:

  * Postgres and MySQL: 65535 
    * You may find sources that state that Postgres has a limit of 32767, but that is a misinterpretation of the specification by the JDBC driver implementation as discussed in [this Github issue][18]. Postgres itself asserts that the number of parameters is in the range `[0, 65535)`.
  * SQLite: 32766 (configurable by [`SQLITE_LIMIT_VARIABLE_NUMBER`][19]) 
    * SQLite prior to 3.32.0: 999
  * MSSQL: 2100



Exceeding these limits may panic (as a sanity check) or trigger a database error at runtime depending on the implementation.

#### pub fn separated<'qb, Sep>( &'qb mut self, separator: Sep, ) -> [Separated][20]<'qb, 'args, DB, Sep>

where 'args: 'qb, Sep: [Display][12],

Start a list separated by `separator`.

The returned type exposes identical [`.push()`][21] and [`.push_bind()`][22] methods which push `separator` to the query before their normal behavior. [`.push_unseparated()`][23] and [`.push_bind_unseparated()`][24] are also provided to push a SQL fragment without the separator.
[code] 
    use sqlx::{Execute, MySql, QueryBuilder};
    let foods = vec!["pizza".to_string(), "chips".to_string()];
    let mut query_builder: QueryBuilder<MySql> = QueryBuilder::new(
        "SELECT * from food where name in ("
    );
    // One element vector is handled correctly but an empty vector
    // would cause a sql syntax error
    let mut separated = query_builder.separated(", ");
    for value_type in foods.iter() {
      separated.push_bind(value_type);
    }
    separated.push_unseparated(") ");
    
    let mut query = query_builder.build();
    let sql = query.sql();
    assert!(sql.ends_with("in (?, ?) "));
[/code]

#### pub fn push_values<I, F>( &mut self, tuples: I, push_tuple: F, ) -> &mut [QueryBuilder][6]<'args, DB>

where I: [IntoIterator][25], F: [FnMut][26]([Separated][20]<'_, 'args, DB, &'static [str][27]>, <I as [IntoIterator][25]>::[Item][28]),

Push a `VALUES` clause where each item in `tuples` represents a tuple/row in the clause.

This can be used to construct a bulk `INSERT` statement, although keep in mind that all databases have some practical limit on the number of bind arguments in a single query. See [`.push_bind()`][15] for details.

To be safe, you can do `tuples.into_iter().take(N)` where `N` is the limit for your database divided by the number of fields in each tuple; since integer division always rounds down, this will ensure that you don’t exceed the limit.

###### §Notes

If `tuples` is empty, this will likely produce a syntactically invalid query as `VALUES` generally expects to be followed by at least 1 tuple.

If `tuples` can have many different lengths, you may want to call [`.persistent(false)`][29] after [`.build()`][30] to avoid filling up the connection’s prepared statement cache.

Because the `Arguments` API has a lifetime that must live longer than `Self`, you cannot bind by-reference from an iterator unless that iterator yields references that live longer than `Self`, even if the specific `Arguments` implementation doesn’t actually borrow the values (like `MySqlArguments` and `PgArguments` immediately encode the arguments and don’t borrow them past the `.add()` call).

So basically, if you want to bind by-reference you need an iterator that yields references, e.g. if you have values in a `Vec` you can do `.iter()` instead of `.into_iter()`. The example below uses an iterator that creates values on the fly and so cannot bind by-reference.

###### §Example (MySQL)
[code] 
    use sqlx::{Execute, MySql, QueryBuilder};
    
    struct User {
        id: i32,
        username: String,
        email: String,
        password: String,
    }
    
    // The number of parameters in MySQL must fit in a `u16`.
    const BIND_LIMIT: usize = 65535;
    
    // This would normally produce values forever!
    let users = (0..).map(|i| User {
        id: i,
        username: format!("test_user_{i}"),
        email: format!("test-user-{i}@example.com"),
        password: format!("Test!User@Password#{i}"),
    });
    
    let mut query_builder: QueryBuilder<MySql> = QueryBuilder::new(
        // Note the trailing space; most calls to `QueryBuilder` don't automatically insert
        // spaces as that might interfere with identifiers or quoted strings where exact
        // values may matter.
        "INSERT INTO users(id, username, email, password) "
    );
    
    // Note that `.into_iter()` wasn't needed here since `users` is already an iterator.
    query_builder.push_values(users.take(BIND_LIMIT / 4), |mut b, user| {
        // If you wanted to bind these by-reference instead of by-value,
        // you'd need an iterator that yields references that live as long as `query_builder`,
        // e.g. collect it to a `Vec` first.
        b.push_bind(user.id)
            .push_bind(user.username)
            .push_bind(user.email)
            .push_bind(user.password);
    });
    
    let mut query = query_builder.build();
    
    // You can then call `query.execute()`, `.fetch_one()`, `.fetch_all()`, etc.
    // For the sake of demonstration though, we're just going to assert the contents
    // of the query.
    
    // These are methods of the `Execute` trait, not normally meant to be called in user code.
    let sql = query.sql();
    let arguments = query.take_arguments().unwrap();
    
    assert!(sql.starts_with(
        "INSERT INTO users(id, username, email, password) VALUES (?, ?, ?, ?), (?, ?, ?, ?)"
    ));
    
    assert!(sql.ends_with("(?, ?, ?, ?)"));
    
    // Not a normally exposed function, only used for this doctest.
    // 65535 / 4 = 16383 (rounded down)
    // 16383 * 4 = 65532
    assert_eq!(arguments.len(), 65532);
[/code]

#### pub fn push_tuples<I, F>( &mut self, tuples: I, push_tuple: F, ) -> &mut [QueryBuilder][6]<'args, DB>

where I: [IntoIterator][25], F: [FnMut][26]([Separated][20]<'_, 'args, DB, &'static [str][27]>, <I as [IntoIterator][25]>::[Item][28]),

Creates `((a, b), (..)` statements, from `tuples`.

This can be used to construct a bulk `SELECT` statement like this:
[code] 
    SELECT * FROM users WHERE (id, username) IN ((1, "test_user_1"), (2, "test_user_2"))
[/code]

Although keep in mind that all databases have some practical limit on the number of bind arguments in a single query. See [`.push_bind()`][15] for details.

To be safe, you can do `tuples.into_iter().take(N)` where `N` is the limit for your database divided by the number of fields in each tuple; since integer division always rounds down, this will ensure that you don’t exceed the limit.

###### §Notes

If `tuples` is empty, this will likely produce a syntactically invalid query

###### §Example (MySQL)
[code] 
    use sqlx::{Execute, MySql, QueryBuilder};
    
    struct User {
        id: i32,
        username: String,
        email: String,
        password: String,
    }
    
    // The number of parameters in MySQL must fit in a `u16`.
    const BIND_LIMIT: usize = 65535;
    
    // This would normally produce values forever!
    let users = (0..).map(|i| User {
        id: i,
        username: format!("test_user_{i}"),
        email: format!("test-user-{i}@example.com"),
        password: format!("Test!User@Password#{i}"),
    });
    
    let mut query_builder: QueryBuilder<MySql> = QueryBuilder::new(
        // Note the trailing space; most calls to `QueryBuilder` don't automatically insert
        // spaces as that might interfere with identifiers or quoted strings where exact
        // values may matter.
        "SELECT * FROM users WHERE (id, username, email, password) in"
    );
    
    // Note that `.into_iter()` wasn't needed here since `users` is already an iterator.
    query_builder.push_tuples(users.take(BIND_LIMIT / 4), |mut b, user| {
        // If you wanted to bind these by-reference instead of by-value,
        // you'd need an iterator that yields references that live as long as `query_builder`,
        // e.g. collect it to a `Vec` first.
        b.push_bind(user.id)
            .push_bind(user.username)
            .push_bind(user.email)
            .push_bind(user.password);
    });
    
    let mut query = query_builder.build();
    
    // You can then call `query.execute()`, `.fetch_one()`, `.fetch_all()`, etc.
    // For the sake of demonstration though, we're just going to assert the contents
    // of the query.
    
    // These are methods of the `Execute` trait, not normally meant to be called in user code.
    let sql = query.sql();
    let arguments = query.take_arguments().unwrap();
    
    assert!(sql.starts_with(
        "SELECT * FROM users WHERE (id, username, email, password) in ((?, ?, ?, ?), (?, ?, ?, ?), "
    ));
    
    assert!(sql.ends_with("(?, ?, ?, ?)) "));
    
    // Not a normally exposed function, only used for this doctest.
    // 65535 / 4 = 16383 (rounded down)
    // 16383 * 4 = 65532
    assert_eq!(arguments.len(), 65532);
    }
[/code]

#### pub fn build(&mut self) -> [Query][31]<'_, DB, <DB as [Database][3]>::[Arguments][9]<'args>>

Produce an executable query from this builder.

###### §Note: Query is not Checked

It is your responsibility to ensure that you produce a syntactically correct query here, this API has no way to check it for you.

###### §Note: Reuse

You can reuse this builder afterwards to amortize the allocation overhead of the query string, however you must call [`.reset()`][32] first, which returns `Self` to the state it was in immediately after [`new()`][33].

Calling any other method but `.reset()` after `.build()` will panic for sanity reasons.

#### pub fn build_query_as<'q, T>( &'q mut self, ) -> [QueryAs][34]<'q, DB, T, <DB as [Database][3]>::[Arguments][9]<'args>>

where T: [FromRow][35]<'q, <DB as [Database][3]>::[Row][36]>,

Produce an executable query from this builder.

###### §Note: Query is not Checked

It is your responsibility to ensure that you produce a syntactically correct query here, this API has no way to check it for you.

###### §Note: Reuse

You can reuse this builder afterwards to amortize the allocation overhead of the query string, however you must call [`.reset()`][32] first, which returns `Self` to the state it was in immediately after [`new()`][33].

Calling any other method but `.reset()` after `.build()` will panic for sanity reasons.

#### pub fn build_query_scalar<'q, T>( &'q mut self, ) -> [QueryScalar][37]<'q, DB, T, <DB as [Database][3]>::[Arguments][9]<'args>>

where DB: [Database][3], [(T,)][38]: for<'r> [FromRow][35]<'r, <DB as [Database][3]>::[Row][36]>,

Produce an executable query from this builder.

###### §Note: Query is not Checked

It is your responsibility to ensure that you produce a syntactically correct query here, this API has no way to check it for you.

###### §Note: Reuse

You can reuse this builder afterwards to amortize the allocation overhead of the query string, however you must call [`.reset()`][32] first, which returns `Self` to the state it was in immediately after [`new()`][33].

Calling any other method but `.reset()` after `.build()` will panic for sanity reasons.

#### pub fn reset(&mut self) -> &mut [QueryBuilder][6]<'args, DB>

Reset this `QueryBuilder` back to its initial state.

The query is truncated to the initial fragment provided to [`new()`][33] and the bind arguments are reset.

#### pub fn sql(&self) -> &[str][27]

Get the current build SQL; **note** : may not be syntactically correct.

#### pub fn into_sql(self) -> [String][8]

Deconstruct this `QueryBuilder`, returning the built SQL. May not be syntactically correct.

## Trait Implementations§

§

### impl<'args, DB> [Default][10] for [QueryBuilder][6]<'args, DB>

where DB: [Database][3],

§

#### fn [default][39]() -> [QueryBuilder][6]<'args, DB>

Returns the “default value” for a type. [Read more][39]

## Auto Trait Implementations§

§

### impl<'args, DB> [Freeze][40] for [QueryBuilder][6]<'args, DB>

where <DB as [Database][3]>::[Arguments][9]<'args>: [Freeze][40],

§

### impl<'args, DB> [RefUnwindSafe][41] for [QueryBuilder][6]<'args, DB>

where <DB as [Database][3]>::[Arguments][9]<'args>: [RefUnwindSafe][41],

§

### impl<'args, DB> [Send][42] for [QueryBuilder][6]<'args, DB>

§

### impl<'args, DB> [Sync][43] for [QueryBuilder][6]<'args, DB>

where <DB as [Database][3]>::[Arguments][9]<'args>: [Sync][43],

§

### impl<'args, DB> [Unpin][44] for [QueryBuilder][6]<'args, DB>

where <DB as [Database][3]>::[Arguments][9]<'args>: [Unpin][44],

§

### impl<'args, DB> [UnwindSafe][45] for [QueryBuilder][6]<'args, DB>

where <DB as [Database][3]>::[Arguments][9]<'args>: [UnwindSafe][45],

## Blanket Implementations§

[Source][46]§

### impl<T> [Any][47] for T

where T: 'static + ?[Sized][48],

[Source][49]§

#### fn [type_id][50](&self) -> [TypeId][51]

Gets the `TypeId` of `self`. [Read more][50]

[Source][52]§

### impl<T> [Borrow][53]<T> for T

where T: ?[Sized][48],

[Source][54]§

#### fn [borrow][55](&self) -> [&T][56]

Immutably borrows from an owned value. [Read more][55]

[Source][57]§

### impl<T> [BorrowMut][58]<T> for T

where T: ?[Sized][48],

[Source][59]§

#### fn [borrow_mut][60](&mut self) -> [&mut T][56]

Mutably borrows from an owned value. [Read more][60]

[Source][61]§

### impl<T> [From][62]<T> for T

[Source][63]§

#### fn [from][64](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][65] [`Span`][66], returning an `Instrumented` wrapper. Read more

[Source][67]§

### impl<T, U> [Into][7]<U> for T

where U: [From][62]<T>,

[Source][68]§

#### fn [into][69](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][62]<T> for U` chooses to do.

[Source][70]§

### impl<T> [IntoEither][71] for T

[Source][72]§

#### fn [into_either][73](self, into_left: [bool][74]) -> [Either][75]<Self, Self> ⓘ

Converts `self` into a [`Left`][76] variant of [`Either<Self, Self>`][75] if `into_left` is `true`. Converts `self` into a [`Right`][77] variant of [`Either<Self, Self>`][75] otherwise. [Read more][73]

[Source][78]§

#### fn [into_either_with][79]<F>(self, into_left: F) -> [Either][75]<Self, Self> ⓘ

where F: [FnOnce][80](&Self) -> [bool][74],

Converts `self` into a [`Left`][76] variant of [`Either<Self, Self>`][75] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][77] variant of [`Either<Self, Self>`][75] otherwise. [Read more][79]

[Source][81]§

### impl<T> [Same][82] for T

[Source][83]§

#### type [Output][84] = T

Should always be `Self`

[Source][85]§

### impl<T, U> [TryFrom][86]<U> for T

where U: [Into][7]<T>,

[Source][87]§

#### type [Error][88] = [Infallible][89]

The type returned in the event of a conversion error.

[Source][90]§

#### fn [try_from][91](value: U) -> [Result][92]<T, <T as [TryFrom][86]<U>>::[Error][93]>

Performs the conversion.

[Source][94]§

### impl<T, U> [TryInto][95]<U> for T

where U: [TryFrom][86]<T>,

[Source][96]§

#### type [Error][97] = <U as [TryFrom][86]<T>>::[Error][93]

The type returned in the event of a conversion error.

[Source][98]§

#### fn [try_into][99](self) -> [Result][92]<U, <U as [TryFrom][86]<T>>::[Error][93]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][7]<Dispatch>,

Attaches the provided [`Subscriber`][100] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][101] [`Subscriber`][100] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: trait.Database.html (trait sqlx::Database)
   [4]: struct.QueryBuilder.html#method.push_values (method sqlx::QueryBuilder::push_values)
   [5]: https://github.com/launchbadge/sqlx/blob/master/FAQ.md#how-can-i-bind-an-array-to-a-values-clause-how-can-i-do-bulk-inserts
   [6]: struct.QueryBuilder.html (struct sqlx::QueryBuilder)
   [7]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [8]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [9]: trait.Database.html#associatedtype.Arguments (type sqlx::Database::Arguments)
   [10]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [11]: trait.IntoArguments.html (trait sqlx::IntoArguments)
   [12]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [13]: https://owasp.org/www-community/attacks/SQL_Injection
   [14]: https://en.wikipedia.org/wiki/SQL_injection
   [15]: struct.QueryBuilder.html#method.push_bind (method sqlx::QueryBuilder::push_bind)
   [16]: trait.Encode.html (trait sqlx::Encode)
   [17]: trait.Type.html (trait sqlx::Type)
   [18]: https://github.com/launchbadge/sqlx/issues/671#issuecomment-687043510
   [19]: https://www.sqlite.org/limits.html#max_variable_number
   [20]: query_builder/struct.Separated.html (struct sqlx::query_builder::Separated)
   [21]: query_builder/struct.Separated.html#method.push (method sqlx::query_builder::Separated::push)
   [22]: query_builder/struct.Separated.html#method.push_bind (method sqlx::query_builder::Separated::push_bind)
   [23]: query_builder/struct.Separated.html#method.push_unseparated (method sqlx::query_builder::Separated::push_unseparated)
   [24]: query_builder/struct.Separated.html#method.push_bind_unseparated (method sqlx::query_builder::Separated::push_bind_unseparated)
   [25]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.IntoIterator.html (trait core::iter::traits::collect::IntoIterator)
   [26]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnMut.html (trait core::ops::function::FnMut)
   [27]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [28]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item (type core::iter::traits::collect::IntoIterator::Item)
   [29]: query/struct.Query.html#method.persistent (method sqlx::query::Query::persistent)
   [30]: struct.QueryBuilder.html#method.build (method sqlx::QueryBuilder::build)
   [31]: query/struct.Query.html (struct sqlx::query::Query)
   [32]: struct.QueryBuilder.html#method.reset (method sqlx::QueryBuilder::reset)
   [33]: struct.QueryBuilder.html#method.new (associated function sqlx::QueryBuilder::new)
   [34]: query/struct.QueryAs.html (struct sqlx::query::QueryAs)
   [35]: trait.FromRow.html (trait sqlx::FromRow)
   [36]: trait.Database.html#associatedtype.Row (type sqlx::Database::Row)
   [37]: query/struct.QueryScalar.html (struct sqlx::query::QueryScalar)
   [38]: https://doc.rust-lang.org/1.94.1/std/primitive.tuple.html
   [39]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [40]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [41]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [42]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [43]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [44]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [45]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [46]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [47]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [48]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [49]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [50]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [51]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [52]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [53]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [54]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [55]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [56]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [57]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [58]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [59]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [60]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [61]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [62]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [63]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [64]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [65]: super::Span::current()
   [66]: crate::Span
   [67]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [68]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [69]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [70]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [71]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [72]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [73]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [74]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [75]: enum.Either.html (enum sqlx::Either)
   [76]: enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [77]: enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [78]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [79]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [80]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [81]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [82]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [83]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [84]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [85]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [86]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [87]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [88]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [89]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [90]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [91]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [92]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [93]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [94]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [95]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [96]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [97]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [98]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [99]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [100]: super::Subscriber
   [101]: dispatcher#setting-the-default-subscriber

