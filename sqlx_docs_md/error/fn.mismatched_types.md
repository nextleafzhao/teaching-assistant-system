## mismatched_types

## [sqlx][1]0.8.6

## [In sqlx::error][2]

[sqlx][3]::[error][2]

# Function mismatched_types Copy item path
[code]
    pub fn mismatched_types<DB, T>(
        ty: &<DB as [Database][4]>::[TypeInfo][5],
    ) -> [Box][6]<dyn [Error][7] + [Send][8] + [Sync][9]>
    
    where
        DB: [Database][4],
        T: [Type][10]<DB>,
[/code]

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../trait.Database.html (trait sqlx::Database)
   [5]: ../trait.Database.html#associatedtype.TypeInfo (type sqlx::Database::TypeInfo)
   [6]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [7]: https://doc.rust-lang.org/1.94.1/core/error/trait.Error.html (trait core::error::Error)
   [8]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [9]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [10]: ../trait.Type.html (trait sqlx::Type)

