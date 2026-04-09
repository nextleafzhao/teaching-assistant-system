## Module ipc

[![logo][1]][2]

## [tauri][2]2.10.3

## Module ipc

### Module Items

  * Structs
  * Enums
  * Traits
  * Type Aliases



## [In crate tauri][3]

[tauri][3]

# Module ipc Copy item path

[Source][4]

Expand description

Types and functions related to Inter Procedure Call(IPC).

This module includes utilities to send messages to the JS layer of the webview.

## Structs§

[CallbackFn][5]
    The `Callback` type is the return value of the `transformCallback` JavaScript function.
[CapabilityBuilder][6]
    A builder for a [`Capability`].
[Channel][7]
    An IPC channel.
[CommandItem][8]
    Represents a custom command.
[CommandScope][9]
    Access scope for a command that can be retrieved directly in the command function.
[GlobalScope][10]
    Global access scope that can be retrieved directly in the command function.
[Invoke][11]
    The message and resolver given to a custom command.
[InvokeError][12]
    Error response from an [`InvokeMessage`][13].
[InvokeMessage][13]
    An invoke message.
[InvokeResolver][14]
    Resolver of a invoke message.
[JavaScriptChannelId][15]
    The ID of a channel that was defined on the JavaScript layer.
[Request][16]
    The IPC request.
[Response][17]
    The IPC response.
[RuntimeAuthority][18]
    The runtime authority used to authorize IPC execution based on the Access Control List.
[ScopeValue][19]
    List of allowed and denied objects that match either the command-specific or plugin global scope criteria.
[SerializeOptions][20]
    Optional settings to pass to the templating system.

## Enums§

[InvokeBody][21]
    Possible values of an IPC payload.
[InvokeResponse][22]
    Response from a [`InvokeMessage`][13] passed to the [`InvokeResolver`][14].
[InvokeResponseBody][23]
    Possible values of an IPC response.
[Origin][24]
    The origin trying to access the IPC.

## Traits§

[CommandArg][25]
    Trait implemented by command arguments to derive a value from a [`CommandItem`][8].
[IpcResponse][26]
    Marks a type as a response to an IPC call.
[RuntimeCapability][27]
    A capability that can be added at runtime.
[ScopeObject][28]
    Marks a type as a scope object.
[ScopeObjectMatch][29]
    A [`ScopeObject`][28] whose validation can be represented as a `bool`.

## Type Aliases§

[InvokeHandler][30]
    A closure that is run every time Tauri receives a message it doesn’t explicitly handle.
[InvokeResponder][31]
    A closure that is responsible for respond a JS message.
[OwnedInvokeResponder][32]
    Similar to [`InvokeResponder`][31] but taking owned arguments.

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: ../index.html
   [4]: ../../src/tauri/ipc/mod.rs.html#5-607
   [5]: struct.CallbackFn.html (struct tauri::ipc::CallbackFn)
   [6]: struct.CapabilityBuilder.html (struct tauri::ipc::CapabilityBuilder)
   [7]: struct.Channel.html (struct tauri::ipc::Channel)
   [8]: struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [9]: struct.CommandScope.html (struct tauri::ipc::CommandScope)
   [10]: struct.GlobalScope.html (struct tauri::ipc::GlobalScope)
   [11]: struct.Invoke.html (struct tauri::ipc::Invoke)
   [12]: struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [13]: struct.InvokeMessage.html (struct tauri::ipc::InvokeMessage)
   [14]: struct.InvokeResolver.html (struct tauri::ipc::InvokeResolver)
   [15]: struct.JavaScriptChannelId.html (struct tauri::ipc::JavaScriptChannelId)
   [16]: struct.Request.html (struct tauri::ipc::Request)
   [17]: struct.Response.html (struct tauri::ipc::Response)
   [18]: struct.RuntimeAuthority.html (struct tauri::ipc::RuntimeAuthority)
   [19]: struct.ScopeValue.html (struct tauri::ipc::ScopeValue)
   [20]: struct.SerializeOptions.html (struct tauri::ipc::SerializeOptions)
   [21]: enum.InvokeBody.html (enum tauri::ipc::InvokeBody)
   [22]: enum.InvokeResponse.html (enum tauri::ipc::InvokeResponse)
   [23]: enum.InvokeResponseBody.html (enum tauri::ipc::InvokeResponseBody)
   [24]: enum.Origin.html (enum tauri::ipc::Origin)
   [25]: trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [26]: trait.IpcResponse.html (trait tauri::ipc::IpcResponse)
   [27]: trait.RuntimeCapability.html (trait tauri::ipc::RuntimeCapability)
   [28]: trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [29]: trait.ScopeObjectMatch.html (trait tauri::ipc::ScopeObjectMatch)
   [30]: type.InvokeHandler.html (type tauri::ipc::InvokeHandler)
   [31]: type.InvokeResponder.html (type tauri::ipc::InvokeResponder)
   [32]: type.OwnedInvokeResponder.html (type tauri::ipc::OwnedInvokeResponder)

