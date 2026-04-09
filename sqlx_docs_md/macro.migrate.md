## migrate

## [sqlx][1]0.8.6

## migrate

### Sections

  * Triggering Recompilation on Migration Changes
    * Stable Rust: Cargo Build Script
    * Nightly Rust: `cfg` Flag



## [In crate sqlx][2]

[sqlx][2]

# Macro migrate Copy item path

[Source][3]
[code] 
    macro_rules! migrate {
        ($dir:literal) => { ... };
        () => { ... };
    }
[/code]

Expand description

Embeds migrations into the binary by expanding to a static instance of [Migrator][4].

ⓘ
[code]
    sqlx::migrate!("db/migrations")
        .run(&pool)
        .await?;
[/code]

ⓘ
[code]
    use sqlx::migrate::Migrator;
    
    static MIGRATOR: Migrator = sqlx::migrate!(); // defaults to "./migrations"
[/code]

The directory must be relative to the project root (the directory containing `Cargo.toml`), unlike `include_str!()` which uses compiler internals to get the path of the file where it was invoked.

See [MigrationSource][5] for details on structure of the ./migrations directory.

### §Triggering Recompilation on Migration Changes

In some cases when making changes to embedded migrations, such as adding a new migration without changing any Rust source files, you might find that `cargo build` doesn’t actually do anything, or when you do `cargo run` your application isn’t applying new migrations on startup.

This is because our ability to tell the compiler to watch external files for changes from a proc-macro is very limited. The compiler by default only re-runs proc macros when one or more source files have changed, because normally it shouldn’t have to otherwise. SQLx is just weird in that external factors can change the output of proc macros, much to the chagrin of the compiler team and IDE plugin authors.

As of 0.5.6, we emit `include_str!()` with an absolute path for each migration, but that only works to get the compiler to watch _existing_ migration files for changes.

Our only options for telling it to watch the whole `migrations/` directory are either via the user creating a Cargo build script in their project, or using an unstable API on nightly governed by a `cfg`-flag.

###### §Stable Rust: Cargo Build Script

The only solution on stable Rust right now is to create a Cargo build script in your project and have it print `cargo:rerun-if-changed=migrations`:

`build.rs`
[code] 
    fn main() {
        println!("cargo:rerun-if-changed=migrations");
    }
[/code]

You can run `sqlx migrate build-script` to generate this file automatically.

See: [The Cargo Book: 3.8 Build Scripts; Outputs of the Build Script][6]

##### §Nightly Rust: `cfg` Flag

The `migrate!()` macro also listens to `--cfg sqlx_macros_unstable`, which will enable the `track_path` feature to directly tell the compiler to watch the `migrations/` directory:
[code] 
    $ env RUSTFLAGS='--cfg sqlx_macros_unstable' cargo build
[/code]

Note that this unfortunately will trigger a fully recompile of your dependency tree, at least for the first time you use it. It also, of course, requires using a nightly compiler.

You can also set it in `build.rustflags` in `.cargo/config.toml`:
[code] 
    [build]
    rustflags = ["--cfg=sqlx_macros_unstable"]
[/code]

And then continue building and running your project normally.

If you’re building on nightly anyways, it would be extremely helpful to help us test this feature and find any bugs in it.

Subscribe to [the `track_path` tracking issue][7] for discussion and the future stabilization of this feature.

For brevity and because it involves the same commitment to unstable features in `proc_macro`, if you’re using `--cfg procmacro2_semver_exempt` it will also enable this feature (see [`proc-macro2` docs / Unstable Features][8]).

   [1]: ../sqlx/index.html
   [2]: index.html
   [3]: ../src/sqlx/macros/mod.rs.html#811-819
   [4]: migrate/struct.Migrator.html (struct sqlx::migrate::Migrator)
   [5]: migrate/trait.MigrationSource.html (trait sqlx::migrate::MigrationSource)
   [6]: https://doc.rust-lang.org/stable/cargo/reference/build-scripts.html#outputs-of-the-build-script
   [7]: https://github.com/rust-lang/rust/issues/73921
   [8]: https://docs.rs/proc-macro2/1.0.27/proc_macro2/#unstable-features

