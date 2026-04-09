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



## [In sqlx::query_builder][2]

[sqlx][3]::[query_builder][2]

# Struct QueryBuilder Copy item path
[code]
    pub struct QueryBuilder<'args, DB>
    
    where
        DB: [Database][4],
    
    { /* private fields */ }
[/code]

Expand description

A builder type for constructing queries at runtime.

See [`.push_values()`][5] for an example of building a bulk `INSERT` statement. Note, however, that with Postgres you can get much better performance by using arrays and `UNNEST()`. [See our FAQ][6] for details.

## Implementations§

§

### impl<'args, DB> [QueryBuilder][7]<'args, DB>

where DB: [Database][4],

#### pub fn new(init: impl [Into][8]<[String][9]>) -> [QueryBuilder][7]<'args, DB>

where <DB as [Database][4]>::[Arguments][10]<'args>: [Default][11],

Start building a query with an initial SQL fragment, which may be an empty string.

#### pub fn with_arguments<A>( init: impl [Into][8]<[String][9]>, arguments: A, ) -> [QueryBuilder][7]<'args, DB>

where DB: [Database][4], A: [IntoArguments][12]<'args, DB>,

Construct a `QueryBuilder` with existing SQL and arguments.

###### §Note

This does _not_ check if `arguments` is valid for the given SQL.

#### pub fn push(&mut self, sql: impl [Display][13]) -> &mut [QueryBuilder][7]<'args, DB>

Append a SQL fragment to the query.

May be a string or anything that implements `Display`. You can also use `format_args!()` here to push a formatted string without an intermediate allocation.

###### §Warning: Beware SQL Injection Vulnerabilities and Untrusted Input!

You should _not_ use this to insert input directly into the query from an untrusted user as this can be used by an attacker to extract sensitive data or take over your database.

Security breaches due to SQL injection can cost your organization a lot of money from damage control and lost clients, betray the trust of your users in your system, and are just plain embarrassing. If you are unfamiliar with the threat that SQL injection imposes, you should take some time to learn more about it before proceeding:

  * [SQL Injection on OWASP.org][14]
  * [SQL Injection on Wikipedia][15]
    * See “Examples” for notable instances of security breaches due to SQL injection.



This method does _not_ perform sanitization. Instead, you should use [`.push_bind()`][16] which inserts a placeholder into the query and then sends the possibly untrustworthy value separately (called a “bind argument”) so that it cannot be misinterpreted by the database server.

Note that you should still at least have some sort of sanity checks on the values you’re sending as that’s just good practice and prevent other types of attacks against your system, e.g. check that strings aren’t too long, numbers are within expected ranges, etc.

#### pub fn push_bind<T>(&mut self, value: T) -> &mut [QueryBuilder][7]<'args, DB>

where T: 'args + [Encode][17]<'args, DB> \+ [Type][18]<DB>,

Push a bind argument placeholder (`?` or `$N` for Postgres) and bind a value to it.

###### §Note: Database-specific Limits

Note that every database has a practical limit on the number of bind parameters you can add to a single query. This varies by database.

While you should consult the manual of your specific database version and/or current configuration for the exact value as it may be different than listed here, the defaults for supported databases as of writing are as follows:

  * Postgres and MySQL: 65535 
    * You may find sources that state that Postgres has a limit of 32767, but that is a misinterpretation of the specification by the JDBC driver implementation as discussed in [this Github issue][19]. Postgres itself asserts that the number of parameters is in the range `[0, 65535)`.
  * SQLite: 32766 (configurable by [`SQLITE_LIMIT_VARIABLE_NUMBER`][20]) 
    * SQLite prior to 3.32.0: 999
  * MSSQL: 2100



Exceeding these limits may panic (as a sanity check) or trigger a database error at runtime depending on the implementation.

#### pub fn separated<'qb, Sep>( &'qb mut self, separator: Sep, ) -> [Separated][21]<'qb, 'args, DB, Sep>

where 'args: 'qb, Sep: [Display][13],

Start a list separated by `separator`.

The returned type exposes identical [`.push()`][22] and [`.push_bind()`][23] methods which push `separator` to the query before their normal behavior. [`.push_unseparated()`][24] and [`.push_bind_unseparated()`][25] are also provided to push a SQL fragment without the separator.
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

#### pub fn push_values<I, F>( &mut self, tuples: I, push_tuple: F, ) -> &mut [QueryBuilder][7]<'args, DB>

where I: [IntoIterator][26], F: [FnMut][27]([Separated][21]<'_, 'args, DB, &'static [str][28]>, <I as [IntoIterator][26]>::[Item][29]),

Push a `VALUES` clause where each item in `tuples` represents a tuple/row in the clause.

This can be used to construct a bulk `INSERT` statement, although keep in mind that all databases have some practical limit on the number of bind arguments in a single query. See [`.push_bind()`][16] for details.

To be safe, you can do `tuples.into_iter().take(N)` where `N` is the limit for your database divided by the number of fields in each tuple; since integer division always rounds down, this will ensure that you don’t exceed the limit.

###### §Notes

If `tuples` is empty, this will likely produce a syntactically invalid query as `VALUES` generally expects to be followed by at least 1 tuple.

If `tuples` can have many different lengths, you may want to call [`.persistent(false)`][30] after [`.build()`][31] to avoid filling up the connection’s prepared statement cache.

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

#### pub fn push_tuples<I, F>( &mut self, tuples: I, push_tuple: F, ) -> &mut [QueryBuilder][7]<'args, DB>

where I: [IntoIterator][26], F: [FnMut][27]([Separated][21]<'_, 'args, DB, &'static [str][28]>, <I as [IntoIterator][26]>::[Item][29]),

Creates `((a, b), (..)` statements, from `tuples`.

This can be used to construct a bulk `SELECT` statement like this:
[code] 
    SELECT * FROM users WHERE (id, username) IN ((1, "test_user_1"), (2, "test_user_2"))
[/code]

Although keep in mind that all databases have some practical limit on the number of bind arguments in a single query. See [`.push_bind()`][16] for details.

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

#### pub fn build(&mut self) -> [Query][32]<'_, DB, <DB as [Database][4]>::[Arguments][10]<'args>>

Produce an executable query from this builder.

###### §Note: Query is not Checked

It is your responsibility to ensure that you produce a syntactically correct query here, this API has no way to check it for you.

###### §Note: Reuse

You can reuse this builder afterwards to amortize the allocation overhead of the query string, however you must call [`.reset()`][33] first, which returns `Self` to the state it was in immediately after [`new()`][34].

Calling any other method but `.reset()` after `.build()` will panic for sanity reasons.

#### pub fn build_query_as<'q, T>( &'q mut self, ) -> [QueryAs][35]<'q, DB, T, <DB as [Database][4]>::[Arguments][10]<'args>>

where T: [FromRow][36]<'q, <DB as [Database][4]>::[Row][37]>,

Produce an executable query from this builder.

###### §Note: Query is not Checked

It is your responsibility to ensure that you produce a syntactically correct query here, this API has no way to check it for you.

###### §Note: Reuse

You can reuse this builder afterwards to amortize the allocation overhead of the query string, however you must call [`.reset()`][33] first, which returns `Self` to the state it was in immediately after [`new()`][34].

Calling any other method but `.reset()` after `.build()` will panic for sanity reasons.

#### pub fn build_query_scalar<'q, T>( &'q mut self, ) -> [QueryScalar][38]<'q, DB, T, <DB as [Database][4]>::[Arguments][10]<'args>>

where DB: [Database][4], [(T,)][39]: for<'r> [FromRow][36]<'r, <DB as [Database][4]>::[Row][37]>,

Produce an executable query from this builder.

###### §Note: Query is not Checked

It is your responsibility to ensure that you produce a syntactically correct query here, this API has no way to check it for you.

###### §Note: Reuse

You can reuse this builder afterwards to amortize the allocation overhead of the query string, however you must call [`.reset()`][33] first, which returns `Self` to the state it was in immediately after [`new()`][34].

Calling any other method but `.reset()` after `.build()` will panic for sanity reasons.

#### pub fn reset(&mut self) -> &mut [QueryBuilder][7]<'args, DB>

Reset this `QueryBuilder` back to its initial state.

The query is truncated to the initial fragment provided to [`new()`][34] and the bind arguments are reset.

#### pub fn sql(&self) -> &[str][28]

Get the current build SQL; **note** : may not be syntactically correct.

#### pub fn into_sql(self) -> [String][9]

Deconstruct this `QueryBuilder`, returning the built SQL. May not be syntactically correct.

## Trait Implementations§

§

### impl<'args, DB> [Default][11] for [QueryBuilder][7]<'args, DB>

where DB: [Database][4],

§

#### fn [default][40]() -> [QueryBuilder][7]<'args, DB>

Returns the “default value” for a type. [Read more][40]

## Auto Trait Implementations§

§

### impl<'args, DB> [Freeze][41] for [QueryBuilder][7]<'args, DB>

where <DB as [Database][4]>::[Arguments][10]<'args>: [Freeze][41],

§

### impl<'args, DB> [RefUnwindSafe][42] for [QueryBuilder][7]<'args, DB>

where <DB as [Database][4]>::[Arguments][10]<'args>: [RefUnwindSafe][42],

§

### impl<'args, DB> [Send][43] for [QueryBuilder][7]<'args, DB>

§

### impl<'args, DB> [Sync][44] for [QueryBuilder][7]<'args, DB>

where <DB as [Database][4]>::[Arguments][10]<'args>: [Sync][44],

§

### impl<'args, DB> [Unpin][45] for [QueryBuilder][7]<'args, DB>

where <DB as [Database][4]>::[Arguments][10]<'args>: [Unpin][45],

§

### impl<'args, DB> [UnwindSafe][46] for [QueryBuilder][7]<'args, DB>

where <DB as [Database][4]>::[Arguments][10]<'args>: [UnwindSafe][46],

## Blanket Implementations§

[Source][47]§

### impl<T> [Any][48] for T

where T: 'static + ?[Sized][49],

[Source][50]§

#### fn [type_id][51](&self) -> [TypeId][52]

Gets the `TypeId` of `self`. [Read more][51]

[Source][53]§

### impl<T> [Borrow][54]<T> for T

where T: ?[Sized][49],

[Source][55]§

#### fn [borrow][56](&self) -> [&T][57]

Immutably borrows from an owned value. [Read more][56]

[Source][58]§

### impl<T> [BorrowMut][59]<T> for T

where T: ?[Sized][49],

[Source][60]§

#### fn [borrow_mut][61](&mut self) -> [&mut T][57]

Mutably borrows from an owned value. [Read more][61]

[Source][62]§

### impl<T> [From][63]<T> for T

[Source][64]§

#### fn [from][65](t: T) -> T

Returns the argument unchanged.

§

### impl<T> Instrument for T

§

#### fn instrument(self, span: Span) -> Instrumented<Self>

Instruments this type with the provided [`Span`], returning an `Instrumented` wrapper. Read more

§

#### fn in_current_span(self) -> Instrumented<Self>

Instruments this type with the [current][66] [`Span`][67], returning an `Instrumented` wrapper. Read more

[Source][68]§

### impl<T, U> [Into][8]<U> for T

where U: [From][63]<T>,

[Source][69]§

#### fn [into][70](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][63]<T> for U` chooses to do.

[Source][71]§

### impl<T> [IntoEither][72] for T

[Source][73]§

#### fn [into_either][74](self, into_left: [bool][75]) -> [Either][76]<Self, Self> ⓘ

Converts `self` into a [`Left`][77] variant of [`Either<Self, Self>`][76] if `into_left` is `true`. Converts `self` into a [`Right`][78] variant of [`Either<Self, Self>`][76] otherwise. [Read more][74]

[Source][79]§

#### fn [into_either_with][80]<F>(self, into_left: F) -> [Either][76]<Self, Self> ⓘ

where F: [FnOnce][81](&Self) -> [bool][75],

Converts `self` into a [`Left`][77] variant of [`Either<Self, Self>`][76] if `into_left(&self)` returns `true`. Converts `self` into a [`Right`][78] variant of [`Either<Self, Self>`][76] otherwise. [Read more][80]

[Source][82]§

### impl<T> [Same][83] for T

[Source][84]§

#### type [Output][85] = T

Should always be `Self`

[Source][86]§

### impl<T, U> [TryFrom][87]<U> for T

where U: [Into][8]<T>,

[Source][88]§

#### type [Error][89] = [Infallible][90]

The type returned in the event of a conversion error.

[Source][91]§

#### fn [try_from][92](value: U) -> [Result][93]<T, <T as [TryFrom][87]<U>>::[Error][94]>

Performs the conversion.

[Source][95]§

### impl<T, U> [TryInto][96]<U> for T

where U: [TryFrom][87]<T>,

[Source][97]§

#### type [Error][98] = <U as [TryFrom][87]<T>>::[Error][94]

The type returned in the event of a conversion error.

[Source][99]§

#### fn [try_into][100](self) -> [Result][93]<U, <U as [TryFrom][87]<T>>::[Error][94]>

Performs the conversion.

§

### impl<T> WithSubscriber for T

§

#### fn with_subscriber<S>(self, subscriber: S) -> WithDispatch<Self>

where S: [Into][8]<Dispatch>,

Attaches the provided [`Subscriber`][101] to this type, returning a [`WithDispatch`] wrapper. Read more

§

#### fn with_current_subscriber(self) -> WithDispatch<Self>

Attaches the current [default][102] [`Subscriber`][101] to this type, returning a [`WithDispatch`] wrapper. Read more

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../trait.Database.html (trait sqlx::Database)
   [5]: ../struct.QueryBuilder.html#method.push_values (method sqlx::QueryBuilder::push_values)
   [6]: https://github.com/launchbadge/sqlx/blob/master/FAQ.md#how-can-i-bind-an-array-to-a-values-clause-how-can-i-do-bulk-inserts
   [7]: ../struct.QueryBuilder.html (struct sqlx::QueryBuilder)
   [8]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [9]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [10]: ../trait.Database.html#associatedtype.Arguments (type sqlx::Database::Arguments)
   [11]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html (trait core::default::Default)
   [12]: ../trait.IntoArguments.html (trait sqlx::IntoArguments)
   [13]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Display.html (trait core::fmt::Display)
   [14]: https://owasp.org/www-community/attacks/SQL_Injection
   [15]: https://en.wikipedia.org/wiki/SQL_injection
   [16]: ../struct.QueryBuilder.html#method.push_bind (method sqlx::QueryBuilder::push_bind)
   [17]: ../trait.Encode.html (trait sqlx::Encode)
   [18]: ../trait.Type.html (trait sqlx::Type)
   [19]: https://github.com/launchbadge/sqlx/issues/671#issuecomment-687043510
   [20]: https://www.sqlite.org/limits.html#max_variable_number
   [21]: struct.Separated.html (struct sqlx::query_builder::Separated)
   [22]: struct.Separated.html#method.push (method sqlx::query_builder::Separated::push)
   [23]: struct.Separated.html#method.push_bind (method sqlx::query_builder::Separated::push_bind)
   [24]: struct.Separated.html#method.push_unseparated (method sqlx::query_builder::Separated::push_unseparated)
   [25]: struct.Separated.html#method.push_bind_unseparated (method sqlx::query_builder::Separated::push_bind_unseparated)
   [26]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.IntoIterator.html (trait core::iter::traits::collect::IntoIterator)
   [27]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnMut.html (trait core::ops::function::FnMut)
   [28]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [29]: https://doc.rust-lang.org/1.94.1/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item (type core::iter::traits::collect::IntoIterator::Item)
   [30]: ../query/struct.Query.html#method.persistent (method sqlx::query::Query::persistent)
   [31]: ../struct.QueryBuilder.html#method.build (method sqlx::QueryBuilder::build)
   [32]: ../query/struct.Query.html (struct sqlx::query::Query)
   [33]: ../struct.QueryBuilder.html#method.reset (method sqlx::QueryBuilder::reset)
   [34]: ../struct.QueryBuilder.html#method.new (associated function sqlx::QueryBuilder::new)
   [35]: ../query/struct.QueryAs.html (struct sqlx::query::QueryAs)
   [36]: ../trait.FromRow.html (trait sqlx::FromRow)
   [37]: ../trait.Database.html#associatedtype.Row (type sqlx::Database::Row)
   [38]: ../query/struct.QueryScalar.html (struct sqlx::query::QueryScalar)
   [39]: https://doc.rust-lang.org/1.94.1/std/primitive.tuple.html
   [40]: https://doc.rust-lang.org/1.94.1/core/default/trait.Default.html#tymethod.default
   [41]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [42]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [43]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [44]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [45]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [46]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [47]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [48]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [49]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [50]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [51]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [52]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [53]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [54]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [55]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [56]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [57]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [58]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [59]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [60]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [61]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [62]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [63]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [64]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [65]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [66]: super::Span::current()
   [67]: crate::Span
   [68]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [69]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [70]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [71]: https://docs.rs/either/1/src/either/into_either.rs.html#64
   [72]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html (trait either::into_either::IntoEither)
   [73]: https://docs.rs/either/1/src/either/into_either.rs.html#29
   [74]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either
   [75]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [76]: ../enum.Either.html (enum sqlx::Either)
   [77]: ../enum.Either.html#variant.Left (variant sqlx::Either::Left)
   [78]: ../enum.Either.html#variant.Right (variant sqlx::Either::Right)
   [79]: https://docs.rs/either/1/src/either/into_either.rs.html#55-57
   [80]: https://docs.rs/either/1/either/into_either/trait.IntoEither.html#method.into_either_with
   [81]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [82]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#34
   [83]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html (trait typenum::type_operators::Same)
   [84]: https://docs.rs/typenum/1.19.0/src/typenum/type_operators.rs.html#35
   [85]: https://docs.rs/typenum/1.19.0/typenum/type_operators/trait.Same.html#associatedtype.Output
   [86]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [87]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [88]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [89]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [90]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [91]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [92]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [93]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [94]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [95]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [96]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [97]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [98]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [99]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [100]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into
   [101]: super::Subscriber
   [102]: dispatcher#setting-the-default-subscriber

