## RuntimeCapability

[![logo][1]][2]

## [tauri][2]2.10.3

## RuntimeCapability

### Required Methods

  * build



### Implementors

## [In tauri::ipc][3]

[tauri][4]::[ipc][3]

# Trait RuntimeCapability Copy item path

[Source][5]
[code] 
    pub trait RuntimeCapability {
        // Required method
        fn build(self) -> CapabilityFile;
    }
[/code]

Expand description

A capability that can be added at runtime.

## Required Methods§

[Source][6]

#### fn build(self) -> CapabilityFile

Creates the capability file.

## Implementors§

[Source][7]§

### impl [RuntimeCapability][8] for [CapabilityBuilder][9]

[Source][10]§

### impl<T: [AsRef][11]<[str][12]>> [RuntimeCapability][8] for T

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/ipc/capability_builder.rs.html#15-18
   [6]: ../../src/tauri/ipc/capability_builder.rs.html#17
   [7]: ../../src/tauri/ipc/capability_builder.rs.html#166-170
   [8]: trait.RuntimeCapability.html (trait tauri::ipc::RuntimeCapability)
   [9]: struct.CapabilityBuilder.html (struct tauri::ipc::CapabilityBuilder)
   [10]: ../../src/tauri/ipc/capability_builder.rs.html#20-24
   [11]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [12]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html

