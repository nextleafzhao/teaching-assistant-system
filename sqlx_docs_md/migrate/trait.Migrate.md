## Migrate

## [sqlx][1]0.8.6

## Migrate

### Required Methods

  * apply
  * dirty_version
  * ensure_migrations_table
  * list_applied_migrations
  * lock
  * revert
  * unlock



### Implementors

## [In sqlx::migrate][2]

[sqlx][3]::[migrate][2]

# Trait Migrate Copy item path
[code]
    pub trait Migrate {
        // Required methods
        fn ensure_migrations_table(
            &mut self,
        ) -> [Pin][4]<[Box][5]<dyn [Future][6]<Output = [Result][7]<[()][8], [MigrateError][9]>> + [Send][10] + '_>>;
        fn dirty_version(
            &mut self,
        ) -> [Pin][4]<[Box][5]<dyn [Future][6]<Output = [Result][7]<[Option][11]<[i64][12]>, [MigrateError][9]>> + [Send][10] + '_>>;
        fn list_applied_migrations(
            &mut self,
        ) -> [Pin][4]<[Box][5]<dyn [Future][6]<Output = [Result][7]<[Vec][13]<[AppliedMigration][14]>, [MigrateError][9]>> + [Send][10] + '_>>;
        fn lock(
            &mut self,
        ) -> [Pin][4]<[Box][5]<dyn [Future][6]<Output = [Result][7]<[()][8], [MigrateError][9]>> + [Send][10] + '_>>;
        fn unlock(
            &mut self,
        ) -> [Pin][4]<[Box][5]<dyn [Future][6]<Output = [Result][7]<[()][8], [MigrateError][9]>> + [Send][10] + '_>>;
        fn apply<'e, 'm>(
            &'e mut self,
            migration: &'m [Migration][15],
        ) -> [Pin][4]<[Box][5]<dyn [Future][6]<Output = [Result][7]<[Duration][16], [MigrateError][9]>> + [Send][10] + 'm>>
           where 'e: 'm;
        fn revert<'e, 'm>(
            &'e mut self,
            migration: &'m [Migration][15],
        ) -> [Pin][4]<[Box][5]<dyn [Future][6]<Output = [Result][7]<[Duration][16], [MigrateError][9]>> + [Send][10] + 'm>>
           where 'e: 'm;
    }
[/code]

## Required Methods§

#### fn ensure_migrations_table( &mut self, ) -> [Pin][4]<[Box][5]<dyn [Future][6]<Output = [Result][7]<[()][8], [MigrateError][9]>> \+ [Send][10] \+ '_>>

#### fn dirty_version( &mut self, ) -> [Pin][4]<[Box][5]<dyn [Future][6]<Output = [Result][7]<[Option][11]<[i64][12]>, [MigrateError][9]>> \+ [Send][10] \+ '_>>

#### fn list_applied_migrations( &mut self, ) -> [Pin][4]<[Box][5]<dyn [Future][6]<Output = [Result][7]<[Vec][13]<[AppliedMigration][14]>, [MigrateError][9]>> \+ [Send][10] \+ '_>>

#### fn lock( &mut self, ) -> [Pin][4]<[Box][5]<dyn [Future][6]<Output = [Result][7]<[()][8], [MigrateError][9]>> \+ [Send][10] \+ '_>>

#### fn unlock( &mut self, ) -> [Pin][4]<[Box][5]<dyn [Future][6]<Output = [Result][7]<[()][8], [MigrateError][9]>> \+ [Send][10] \+ '_>>

#### fn apply<'e, 'm>( &'e mut self, migration: &'m [Migration][15], ) -> [Pin][4]<[Box][5]<dyn [Future][6]<Output = [Result][7]<[Duration][16], [MigrateError][9]>> \+ [Send][10] \+ 'm>>

where 'e: 'm,

#### fn revert<'e, 'm>( &'e mut self, migration: &'m [Migration][15], ) -> [Pin][4]<[Box][5]<dyn [Future][6]<Output = [Result][7]<[Duration][16], [MigrateError][9]>> \+ [Send][10] \+ 'm>>

where 'e: 'm,

## Implementors§

§

### impl [Migrate][17] for [AnyConnection][18]

§

### impl [Migrate][17] for [SqliteConnection][19]

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/pin/struct.Pin.html (struct core::pin::Pin)
   [5]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [6]: https://doc.rust-lang.org/1.94.1/core/future/future/trait.Future.html (trait core::future::future::Future)
   [7]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [8]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [9]: enum.MigrateError.html (enum sqlx::migrate::MigrateError)
   [10]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [11]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [12]: https://doc.rust-lang.org/1.94.1/std/primitive.i64.html
   [13]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [14]: struct.AppliedMigration.html (struct sqlx::migrate::AppliedMigration)
   [15]: struct.Migration.html (struct sqlx::migrate::Migration)
   [16]: https://doc.rust-lang.org/1.94.1/core/time/struct.Duration.html (struct core::time::Duration)
   [17]: trait.Migrate.html (trait sqlx::migrate::Migrate)
   [18]: ../struct.AnyConnection.html (struct sqlx::AnyConnection)
   [19]: ../struct.SqliteConnection.html (struct sqlx::SqliteConnection)

