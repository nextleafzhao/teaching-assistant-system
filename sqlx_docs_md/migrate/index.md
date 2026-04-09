## Module migrate

## [sqlx][1]0.8.6

## Module migrate

### Module Items

  * Structs
  * Enums
  * Traits
  * Functions



## [In crate sqlx][2]

[sqlx][2]

# Module migrate Copy item path

## Structs§

[AppliedMigration][3]
[Migration][4]
[Migrator][5]
    A resolved set of migrations, ready to be run.

## Enums§

[MigrateError][6]
[MigrationType][7]
    Migration Type represents the type of migration

## Traits§

[Migrate][8]
[MigrateDatabase][9]
[MigrationSource][10]
    In the default implementation, a MigrationSource is a directory which contains the migration SQL scripts. All these scripts must be stored in files with names using the format `<VERSION>_<DESCRIPTION>.sql`, where `<VERSION>` is a string that can be parsed into `i64` and its value is greater than zero, and `<DESCRIPTION>` is a string.

## Functions§

[resolve_blocking][11]

   [1]: ../../sqlx/index.html
   [2]: ../index.html
   [3]: struct.AppliedMigration.html (struct sqlx::migrate::AppliedMigration)
   [4]: struct.Migration.html (struct sqlx::migrate::Migration)
   [5]: struct.Migrator.html (struct sqlx::migrate::Migrator)
   [6]: enum.MigrateError.html (enum sqlx::migrate::MigrateError)
   [7]: enum.MigrationType.html (enum sqlx::migrate::MigrationType)
   [8]: trait.Migrate.html (trait sqlx::migrate::Migrate)
   [9]: trait.MigrateDatabase.html (trait sqlx::migrate::MigrateDatabase)
   [10]: trait.MigrationSource.html (trait sqlx::migrate::MigrationSource)
   [11]: fn.resolve_blocking.html (fn sqlx::migrate::resolve_blocking)

