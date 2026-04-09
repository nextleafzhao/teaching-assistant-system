## install_default_drivers

## [sqlx][1]0.8.6

## install_default_drivers

### Sections

  * Panics



## [In sqlx::any][2]

[sqlx][3]::[any][2]

# Function install_default_drivers Copy item path

[Source][4]
[code] 
    pub fn install_default_drivers()
[/code]

Expand description

Install all currently compiled-in drivers for [`AnyConnection`][5] to use.

May be called multiple times; only the first call will install drivers, subsequent calls will have no effect.

#### §Panics

If [`install_drivers`][6] has already been called _not_ through this function.

   [1]: ../../sqlx/index.html
   [2]: index.html
   [3]: ../index.html
   [4]: ../../src/sqlx/any/mod.rs.html#35-49
   [5]: ../struct.AnyConnection.html (struct sqlx::AnyConnection)
   [6]: fn.install_drivers.html (fn sqlx::any::install_drivers)

