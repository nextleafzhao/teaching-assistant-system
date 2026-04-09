## install_drivers

## [sqlx][1]0.8.6

## install_drivers

### Sections

  * Errors



## [In sqlx::any][2]

[sqlx][3]::[any][2]

# Function install_drivers Copy item path
[code]
    pub fn install_drivers(
        drivers: &'static [AnyDriver],
    ) -> [Result][4]<[()][5], [Box][6]<dyn [Error][7] + [Send][8] + [Sync][9]>>
[/code]

Expand description

Install the list of drivers for [`AnyConnection`][10] to use.

Must be called before an `AnyConnection` or `AnyPool` can be connected.

#### §Errors

If called more than once.

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [5]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [6]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [7]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [8]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [9]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [10]: ../struct.AnyConnection.html (struct sqlx::AnyConnection)

