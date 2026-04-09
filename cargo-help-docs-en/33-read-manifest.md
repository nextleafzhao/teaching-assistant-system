# `read-manifest` 命令帮助文档

```text
DEPRECATED: Print a JSON representation of a Cargo.toml manifest.

Use `cargo metadata --no-deps` instead.

Usage: cargo.exe read-manifest [OPTIONS]

Options:
  -v, --verbose...               Use verbose output (-vv very verbose/build.rs output)
  -q, --quiet                    Do not print cargo log messages
      --color <WHEN>             Coloring [possible values: auto, always, never]
      --config <KEY=VALUE|PATH>  Override a configuration value
  -Z <FLAG>                      Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for
                                 details
  -h, --help                     Print help

Manifest Options:
      --manifest-path <PATH>  Path to Cargo.toml
      --locked                Assert that `Cargo.lock` will remain unchanged
      --offline               Run without accessing the network
      --frozen                Equivalent to specifying both --locked and --offline
```
