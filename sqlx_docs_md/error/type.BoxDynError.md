## BoxDynError

## [sqlx][1]0.8.6

## BoxDynError

### Aliased Type

## [In sqlx::error][2]

[sqlx][3]::[error][2]

# Type Alias BoxDynError Copy item path
[code]
    pub type BoxDynError = [Box][4]<dyn [Error][5] + [Send][6] + [Sync][7]>;
[/code]

## Aliased Type§
[code]
    pub struct BoxDynError(/* private fields */);
[/code]

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [5]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [6]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [7]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)

