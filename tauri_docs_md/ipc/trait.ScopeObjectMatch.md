## ScopeObjectMatch

[![logo][1]][2]

## [tauri][2]2.10.3

## ScopeObjectMatch

### Sections

  * Example



### Required Associated Types

  * Input



### Required Methods

  * matches



### Dyn Compatibility

### Implementors

## [In tauri::ipc][3]

[tauri][4]::[ipc][3]

# Trait ScopeObjectMatch Copy item path

[Source][5]
[code] 
    pub trait ScopeObjectMatch: [ScopeObject][6] {
        type Input: ?[Sized][7];
    
        // Required method
        fn matches(&self, input: &Self::[Input][8]) -> [bool][9];
    }
[/code]

Expand description

A [`ScopeObject`][6] whose validation can be represented as a `bool`.

## §Example
[code] 
    #[derive(Debug, Clone, Serialize, Deserialize)]
    #[serde(rename_all = "camelCase")]
    pub enum Scope {
      Domain(Url),
      StartsWith(String),
    }
    
    impl ScopeObjectMatch for Scope {
      type Input = str;
    
      fn matches(&self, input: &str) -> bool {
        match self {
          Scope::Domain(url) => {
            let parsed: Url = match input.parse() {
              Ok(parsed) => parsed,
              Err(_) => return false,
            };
    
            let domain = parsed.domain();
    
            domain.is_some() && domain == url.domain()
          }
          Scope::StartsWith(start) => input.starts_with(start),
        }
      }
    }
[/code]

## Required Associated Types§

[Source][10]

#### type Input: ?[Sized][7]

The type of input expected to validate against the scope.

This will be borrowed, so if you want to match on a `&str` this type should be `str`.

## Required Methods§

[Source][11]

#### fn matches(&self, input: &Self::[Input][8]) -> [bool][9]

Check if the input matches against the scope.

## Dyn Compatibility§

This trait is **not** [dyn compatible][12].

_In older versions of Rust, dyn compatibility was called "object safety", so this trait is not object safe._

## Implementors§

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/ipc/authority.rs.html#728-736
   [6]: trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [7]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [8]: trait.ScopeObjectMatch.html#associatedtype.Input (type tauri::ipc::ScopeObjectMatch::Input)
   [9]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [10]: ../../src/tauri/ipc/authority.rs.html#732
   [11]: ../../src/tauri/ipc/authority.rs.html#735
   [12]: https://doc.rust-lang.org/1.94.1/reference/items/traits.html#dyn-compatibility

