## Window

[![logo][1]][2]

## [tauri][2]2.10.3

## Window

### Methods

  * available_monitors
  * center
  * close
  * current_monitor
  * cursor_position
  * destroy
  * hide
  * hide_menu
  * hwnd
  * inner_position
  * inner_size
  * is_always_on_top
  * is_closable
  * is_decorated
  * is_enabled
  * is_focused
  * is_fullscreen
  * is_maximizable
  * is_maximized
  * is_menu_visible
  * is_minimizable
  * is_minimized
  * is_resizable
  * is_visible
  * label
  * maximize
  * menu
  * minimize
  * monitor_from_point
  * on_menu_event
  * on_window_event
  * outer_position
  * outer_size
  * popup_menu
  * popup_menu_at
  * primary_monitor
  * remove_menu
  * request_user_attention
  * run_on_main_thread
  * scale_factor
  * set_always_on_bottom
  * set_always_on_top
  * set_background_color
  * set_badge_count
  * set_closable
  * set_content_protected
  * set_cursor_grab
  * set_cursor_icon
  * set_cursor_position
  * set_cursor_visible
  * set_decorations
  * set_effects
  * set_enabled
  * set_focus
  * set_focusable
  * set_fullscreen
  * set_icon
  * set_ignore_cursor_events
  * set_max_size
  * set_maximizable
  * set_menu
  * set_min_size
  * set_minimizable
  * set_overlay_icon
  * set_position
  * set_progress_bar
  * set_resizable
  * set_shadow
  * set_simple_fullscreen
  * set_size
  * set_size_constraints
  * set_skip_taskbar
  * set_theme
  * set_title
  * set_title_bar_style
  * set_visible_on_all_workspaces
  * show
  * show_menu
  * start_dragging
  * start_resize_dragging
  * theme
  * title
  * unmaximize
  * unminimize
  * webviews



### Trait Implementations

  * Clone
  * CommandArg<'de, R>
  * Debug
  * Emitter<R>
  * Eq
  * HasDisplayHandle
  * HasWindowHandle
  * Hash
  * Listener<R>
  * Manager<R>
  * PartialEq



### Auto Trait Implementations

  * !RefUnwindSafe
  * !UnwindSafe
  * Freeze
  * Send
  * Sync
  * Unpin



### Blanket Implementations

  * Any
  * Borrow<T>
  * BorrowMut<T>
  * CloneToUninit
  * From<T>
  * HasRawDisplayHandle
  * HasRawWindowHandle
  * Into<U>
  * ToOwned
  * TryFrom<U>
  * TryInto<U>
  * UserEvent



## [In tauri::window][3]

[tauri][4]::[window][3]

# Struct Window Copy item path

[Source][5]
[code] 
    pub struct Window<R: [Runtime][6] = [Wry][7]> { /* private fields */ }
[/code]

Expand description

A window managed by Tauri.

This type also implements [`Manager`][8] which allows you to manage other windows attached to the same application.

## Implementations§

[Source][9]§

### impl<R: [Runtime][6]> [Window][10]<R>

Base window functions.

[Source][11]

#### pub fn webviews(&self) -> [Vec][12]<[Webview][13]<R>>

List of webviews associated with this window.

[Source][14]

#### pub fn run_on_main_thread<F: [FnOnce][15]() + [Send][16] \+ 'static>( &self, f: F, ) -> [Result][17]<[()][18]>

Runs the given closure on the main thread.

[Source][19]

#### pub fn label(&self) -> &[str][20]

The label of this window.

[Source][21]

#### pub fn on_window_event<F: [Fn][22](&[WindowEvent][23]) + [Send][16] \+ 'static>(&self, f: F)

Registers a window event listener.

[Source][24]§

### impl<R: [Runtime][6]> [Window][10]<R>

Menu APIs

[Source][25]

#### pub fn on_menu_event<F: [Fn][22](&[Window][10]<R>, [MenuEvent][26]) + [Send][16] \+ [Sync][27] \+ 'static>( &self, f: F, )

Registers a global menu event listener.

Note that this handler is called for any menu event, whether it is coming from this window, another window or from the tray icon menu.

Also note that this handler will not be called if the window used to register it was closed.

##### §Examples

[Source][28]

#### pub fn menu(&self) -> [Option][29]<[Menu][30]<R>>

Returns this window menu .

[Source][31]

#### pub fn set_menu(&self, menu: [Menu][30]<R>) -> [Result][17]<[Option][29]<[Menu][30]<R>>>

Sets the window menu and returns the previous one.

###### §Platform-specific:

  * **macOS:** Unsupported. The menu on macOS is app-wide and not specific to one window, if you need to set it, use [`AppHandle::set_menu`][32] instead.



[Source][33]

#### pub fn remove_menu(&self) -> [Result][17]<[Option][29]<[Menu][30]<R>>>

Removes the window menu and returns it.

###### §Platform-specific:

  * **macOS:** Unsupported. The menu on macOS is app-wide and not specific to one window, if you need to remove it, use [`AppHandle::remove_menu`][34] instead.



[Source][35]

#### pub fn hide_menu(&self) -> [Result][17]<[()][18]>

Hides the window menu.

[Source][36]

#### pub fn show_menu(&self) -> [Result][17]<[()][18]>

Shows the window menu.

[Source][37]

#### pub fn is_menu_visible(&self) -> [Result][17]<[bool][38]>

Shows the window menu.

[Source][39]

#### pub fn popup_menu<M: [ContextMenu][40]>(&self, menu: [&M][41]) -> [Result][17]<[()][18]>

Shows the specified menu as a context menu at the cursor position.

[Source][42]

#### pub fn popup_menu_at<M: [ContextMenu][40], P: [Into][43]<[Position][44]>>( &self, menu: [&M][41], position: P, ) -> [Result][17]<[()][18]>

Shows the specified menu as a context menu at the specified position.

The position is relative to the window’s top-left corner.

[Source][45]§

### impl<R: [Runtime][6]> [Window][10]<R>

Window getters.

[Source][46]

#### pub fn scale_factor(&self) -> [Result][17]<[f64][47]>

Returns the scale factor that can be used to map logical pixels to physical pixels, and vice versa.

[Source][48]

#### pub fn inner_position(&self) -> [Result][17]<[PhysicalPosition][49]<[i32][50]>>

Returns the position of the top-left hand corner of the window’s client area relative to the top-left hand corner of the desktop.

[Source][51]

#### pub fn outer_position(&self) -> [Result][17]<[PhysicalPosition][49]<[i32][50]>>

Returns the position of the top-left hand corner of the window relative to the top-left hand corner of the desktop.

[Source][52]

#### pub fn inner_size(&self) -> [Result][17]<[PhysicalSize][53]<[u32][54]>>

Returns the physical size of the window’s client area.

The client area is the content of the window, excluding the title bar and borders.

[Source][55]

#### pub fn outer_size(&self) -> [Result][17]<[PhysicalSize][53]<[u32][54]>>

Returns the physical size of the entire window.

These dimensions include the title bar and borders. If you don’t want that (and you usually don’t), use inner_size instead.

[Source][56]

#### pub fn is_fullscreen(&self) -> [Result][17]<[bool][38]>

Gets the window’s current fullscreen state.

[Source][57]

#### pub fn is_minimized(&self) -> [Result][17]<[bool][38]>

Gets the window’s current minimized state.

[Source][58]

#### pub fn is_maximized(&self) -> [Result][17]<[bool][38]>

Gets the window’s current maximized state.

[Source][59]

#### pub fn is_focused(&self) -> [Result][17]<[bool][38]>

Gets the window’s current focus state.

[Source][60]

#### pub fn is_decorated(&self) -> [Result][17]<[bool][38]>

Gets the window’s current decoration state.

[Source][61]

#### pub fn is_resizable(&self) -> [Result][17]<[bool][38]>

Gets the window’s current resizable state.

[Source][62]

#### pub fn is_enabled(&self) -> [Result][17]<[bool][38]>

Whether the window is enabled or disabled.

[Source][63]

#### pub fn is_always_on_top(&self) -> [Result][17]<[bool][38]>

Determines if this window should always be on top of other windows.

###### §Platform-specific

  * **iOS / Android:** Unsupported.



[Source][64]

#### pub fn is_maximizable(&self) -> [Result][17]<[bool][38]>

Gets the window’s native maximize button state

###### §Platform-specific

  * **Linux / iOS / Android:** Unsupported.



[Source][65]

#### pub fn is_minimizable(&self) -> [Result][17]<[bool][38]>

Gets the window’s native minimize button state

###### §Platform-specific

  * **Linux / iOS / Android:** Unsupported.



[Source][66]

#### pub fn is_closable(&self) -> [Result][17]<[bool][38]>

Gets the window’s native close button state

###### §Platform-specific

  * **Linux / iOS / Android:** Unsupported.



[Source][67]

#### pub fn is_visible(&self) -> [Result][17]<[bool][38]>

Gets the window’s current visibility state.

[Source][68]

#### pub fn title(&self) -> [Result][17]<[String][69]>

Gets the window’s current title.

[Source][70]

#### pub fn current_monitor(&self) -> [Result][17]<[Option][29]<[Monitor][71]>>

Returns the monitor on which the window currently resides.

Returns None if current monitor can’t be detected.

[Source][72]

#### pub fn monitor_from_point(&self, x: [f64][47], y: [f64][47]) -> [Result][17]<[Option][29]<[Monitor][71]>>

Returns the monitor that contains the given point.

[Source][73]

#### pub fn primary_monitor(&self) -> [Result][17]<[Option][29]<[Monitor][71]>>

Returns the primary monitor of the system.

Returns None if it can’t identify any monitor as a primary one.

[Source][74]

#### pub fn available_monitors(&self) -> [Result][17]<[Vec][12]<[Monitor][71]>>

Returns the list of all the monitors available on the system.

[Source][75]

#### pub fn hwnd(&self) -> [Result][17]<HWND>

Returns the native handle that is used by this window.

[Source][76]

#### pub fn theme(&self) -> [Result][17]<[Theme][77]>

Returns the current window theme.

###### §Platform-specific

  * **macOS** : Only supported on macOS 10.14+.



[Source][78]§

### impl<R: [Runtime][6]> [Window][10]<R>

Desktop window getters.

[Source][79]

#### pub fn cursor_position(&self) -> [Result][17]<[PhysicalPosition][49]<[f64][47]>>

Get the cursor position relative to the top-left hand corner of the desktop.

Note that the top-left hand corner of the desktop is not necessarily the same as the screen. If the user uses a desktop with multiple monitors, the top-left hand corner of the desktop is the top-left hand corner of the main monitor on Windows and macOS or the top-left of the leftmost monitor on X11.

The coordinates can be negative if the top-left hand corner of the window is outside of the visible screen region.

[Source][80]§

### impl<R: [Runtime][6]> [Window][10]<R>

Desktop window setters and actions.

[Source][81]

#### pub fn center(&self) -> [Result][17]<[()][18]>

Centers the window.

[Source][82]

#### pub fn request_user_attention( &self, request_type: [Option][29]<[UserAttentionType][83]>, ) -> [Result][17]<[()][18]>

Requests user attention to the window, this has no effect if the application is already focused. How requesting for user attention manifests is platform dependent, see `UserAttentionType` for details.

Providing `None` will unset the request for user attention. Unsetting the request for user attention might not be done automatically by the WM when the window receives input.

###### §Platform-specific

  * **macOS:** `None` has no effect.
  * **Linux:** Urgency levels have the same effect.



[Source][84]

#### pub fn set_resizable(&self, resizable: [bool][38]) -> [Result][17]<[()][18]>

Determines if this window should be resizable. When resizable is set to false, native window’s maximize button is automatically disabled.

[Source][85]

#### pub fn set_maximizable(&self, maximizable: [bool][38]) -> [Result][17]<[()][18]>

Determines if this window’s native maximize button should be enabled. If resizable is set to false, this setting is ignored.

###### §Platform-specific

  * **macOS:** Disables the “zoom” button in the window titlebar, which is also used to enter fullscreen mode.
  * **Linux / iOS / Android:** Unsupported.



[Source][86]

#### pub fn set_minimizable(&self, minimizable: [bool][38]) -> [Result][17]<[()][18]>

Determines if this window’s native minimize button should be enabled.

###### §Platform-specific

  * **Linux / iOS / Android:** Unsupported.



[Source][87]

#### pub fn set_closable(&self, closable: [bool][38]) -> [Result][17]<[()][18]>

Determines if this window’s native close button should be enabled.

###### §Platform-specific

  * **Linux:** “GTK+ will do its best to convince the window manager not to show a close button. Depending on the system, this function may not have any effect when called on a window that is already visible”
  * **iOS / Android:** Unsupported.



[Source][88]

#### pub fn set_title(&self, title: &[str][20]) -> [Result][17]<[()][18]>

Set this window’s title.

[Source][89]

#### pub fn set_enabled(&self, enabled: [bool][38]) -> [Result][17]<[()][18]>

Enable or disable the window.

[Source][90]

#### pub fn maximize(&self) -> [Result][17]<[()][18]>

Maximizes this window.

[Source][91]

#### pub fn unmaximize(&self) -> [Result][17]<[()][18]>

Un-maximizes this window.

[Source][92]

#### pub fn minimize(&self) -> [Result][17]<[()][18]>

Minimizes this window.

[Source][93]

#### pub fn unminimize(&self) -> [Result][17]<[()][18]>

Un-minimizes this window.

[Source][94]

#### pub fn show(&self) -> [Result][17]<[()][18]>

Show this window.

[Source][95]

#### pub fn hide(&self) -> [Result][17]<[()][18]>

Hide this window.

[Source][96]

#### pub fn close(&self) -> [Result][17]<[()][18]>

Closes this window. It emits [`crate::RunEvent::CloseRequested`] first like a user-initiated close request so you can intercept it.

[Source][97]

#### pub fn destroy(&self) -> [Result][17]<[()][18]>

Destroys this window. Similar to [`Self::close`][98] but does not emit any events and force close the window instead.

[Source][99]

#### pub fn set_decorations(&self, decorations: [bool][38]) -> [Result][17]<[()][18]>

Determines if this window should be [decorated][100].

[Source][101]

#### pub fn set_shadow(&self, enable: [bool][38]) -> [Result][17]<[()][18]>

Determines if this window should have shadow.

###### §Platform-specific

  * **Windows:**
    * `false` has no effect on decorated window, shadow are always ON.
    * `true` will make undecorated window have a 1px white border, and on Windows 11, it will have a rounded corners.
  * **Linux:** Unsupported.



[Source][102]

#### pub fn set_effects<E: [Into][43]<[Option][29]<WindowEffectsConfig>>>( &self, effects: E, ) -> [Result][17]<[()][18]>

Sets window effects, pass [`None`][103] to clear any effects applied if possible.

Requires the window to be transparent.

See [`EffectsBuilder`][104] for a convenient builder for [`WindowEffectsConfig`].

###### §Platform-specific:

  * **Windows** : If using decorations or shadows, you may want to try this workaround <https://github.com/tauri-apps/tao/issues/72#issuecomment-975607891>
  * **Linux** : Unsupported



[Source][105]

#### pub fn set_always_on_bottom(&self, always_on_bottom: [bool][38]) -> [Result][17]<[()][18]>

Determines if this window should always be below other windows.

[Source][106]

#### pub fn set_always_on_top(&self, always_on_top: [bool][38]) -> [Result][17]<[()][18]>

Determines if this window should always be on top of other windows.

[Source][107]

#### pub fn set_visible_on_all_workspaces( &self, visible_on_all_workspaces: [bool][38], ) -> [Result][17]<[()][18]>

Sets whether the window should be visible on all workspaces or virtual desktops.

###### §Platform-specific

  * **Windows / iOS / Android:** Unsupported.



[Source][108]

#### pub fn set_background_color(&self, color: [Option][29]<[Color][109]>) -> [Result][17]<[()][18]>

Sets the window background color.

###### §Platform-specific:

  * **Windows:** alpha channel is ignored.
  * **iOS / Android:** Unsupported.



[Source][110]

#### pub fn set_content_protected(&self, protected: [bool][38]) -> [Result][17]<[()][18]>

Prevents the window contents from being captured by other apps.

[Source][111]

#### pub fn set_size<S: [Into][43]<[Size][112]>>(&self, size: S) -> [Result][17]<[()][18]>

Resizes this window.

[Source][113]

#### pub fn set_min_size<S: [Into][43]<[Size][112]>>(&self, size: [Option][29]<S>) -> [Result][17]<[()][18]>

Sets this window’s minimum inner size.

[Source][114]

#### pub fn set_max_size<S: [Into][43]<[Size][112]>>(&self, size: [Option][29]<S>) -> [Result][17]<[()][18]>

Sets this window’s maximum inner size.

[Source][115]

#### pub fn set_size_constraints( &self, constraints: [WindowSizeConstraints][116], ) -> [Result][17]<[()][18]>

Sets this window’s minimum inner width.

[Source][117]

#### pub fn set_position<Pos: [Into][43]<[Position][44]>>(&self, position: Pos) -> [Result][17]<[()][18]>

Sets this window’s position.

[Source][118]

#### pub fn set_fullscreen(&self, fullscreen: [bool][38]) -> [Result][17]<[()][18]>

Determines if this window should be fullscreen.

[Source][119]

#### pub fn set_simple_fullscreen(&self, enable: [bool][38]) -> [Result][17]<[()][18]>

Toggles a fullscreen mode that doesn’t require a new macOS space. Returns a boolean indicating whether the transition was successful (this won’t work if the window was already in the native fullscreen).

This is how fullscreen used to work on macOS in versions before Lion. And allows the user to have a fullscreen window without using another space or taking control over the entire monitor.

###### §Platform-specific

  * **macOS:** Uses native simple fullscreen mode.
  * **Other platforms:** Falls back to [`Self::set_fullscreen`][120].



[Source][121]

#### pub fn set_focus(&self) -> [Result][17]<[()][18]>

Bring the window to front and focus.

[Source][122]

#### pub fn set_focusable(&self, focusable: [bool][38]) -> [Result][17]<[()][18]>

Sets whether the window can be focused.

###### §Platform-specific

  * **macOS** : If the window is already focused, it is not possible to unfocus it after calling `set_focusable(false)`. In this case, you might consider calling [`Window::set_focus`][123] but it will move the window to the back i.e. at the bottom in terms of z-order.



[Source][124]

#### pub fn set_icon(&self, icon: [Image][125]<'_>) -> [Result][17]<[()][18]>

Sets this window’ icon.

[Source][126]

#### pub fn set_skip_taskbar(&self, skip: [bool][38]) -> [Result][17]<[()][18]>

Whether to hide the window icon from the taskbar or not.

###### §Platform-specific

  * **macOS:** Unsupported.



[Source][127]

#### pub fn set_cursor_grab(&self, grab: [bool][38]) -> [Result][17]<[()][18]>

Grabs the cursor, preventing it from leaving the window.

There’s no guarantee that the cursor will be hidden. You should hide it by yourself if you want so.

###### §Platform-specific

  * **Linux:** Unsupported.
  * **macOS:** This locks the cursor in a fixed location, which looks visually awkward.



[Source][128]

#### pub fn set_cursor_visible(&self, visible: [bool][38]) -> [Result][17]<[()][18]>

Modifies the cursor’s visibility.

If `false`, this will hide the cursor. If `true`, this will show the cursor.

###### §Platform-specific

  * **Windows:** The cursor is only hidden within the confines of the window.
  * **macOS:** The cursor is hidden as long as the window has input focus, even if the cursor is outside of the window.



[Source][129]

#### pub fn set_cursor_icon(&self, icon: [CursorIcon][130]) -> [Result][17]<[()][18]>

Modifies the cursor icon of the window.

[Source][131]

#### pub fn set_cursor_position<Pos: [Into][43]<[Position][44]>>( &self, position: Pos, ) -> [Result][17]<[()][18]>

Changes the position of the cursor in window coordinates.

[Source][132]

#### pub fn set_ignore_cursor_events(&self, ignore: [bool][38]) -> [Result][17]<[()][18]>

Ignores the window cursor events.

[Source][133]

#### pub fn start_dragging(&self) -> [Result][17]<[()][18]>

Starts dragging the window.

[Source][134]

#### pub fn start_resize_dragging(&self, direction: ResizeDirection) -> [Result][17]<[()][18]>

Starts resize-dragging the window.

[Source][135]

#### pub fn set_overlay_icon(&self, icon: [Option][29]<[Image][125]<'_>>) -> [Result][17]<[()][18]>

Sets the overlay icon on the taskbar **Windows only**. Using `None` to remove the overlay icon

The overlay icon can be unique for each window.

[Source][136]

#### pub fn set_badge_count(&self, count: [Option][29]<[i64][137]>) -> [Result][17]<[()][18]>

Sets the taskbar badge count. Using `0` or `None` will remove the badge

###### §Platform-specific

  * **Windows:** Unsupported, use [`Window::set_overlay_icon`][138] instead.
  * **iOS:** iOS expects i32, the value will be clamped to i32::MIN, i32::MAX.
  * **Android:** Unsupported.



[Source][139]

#### pub fn set_progress_bar(&self, progress_state: [ProgressBarState][140]) -> [Result][17]<[()][18]>

Sets the taskbar progress state.

###### §Platform-specific

  * **Linux / macOS** : Progress bar is app-wide and not specific to this window.
  * **Linux** : Only supported desktop environments with `libunity` (e.g. GNOME).
  * **iOS / Android:** Unsupported.



[Source][141]

#### pub fn set_title_bar_style(&self, style: [TitleBarStyle][142]) -> [Result][17]<[()][18]>

Sets the title bar style. **macOS only**.

[Source][143]

#### pub fn set_theme(&self, theme: [Option][29]<[Theme][77]>) -> [Result][17]<[()][18]>

Sets the theme for this window.

###### §Platform-specific

  * **Linux / macOS** : Theme is app-wide and not specific to this window.
  * **iOS / Android:** Unsupported.



## Trait Implementations§

[Source][144]§

### impl<R: [Runtime][6]> [Clone][145] for [Window][10]<R>

[Source][146]§

#### fn [clone][147](&self) -> Self

Returns a duplicate of the value. [Read more][147]

1.0.0 · [Source][148]§

#### fn [clone_from][149](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][149]

[Source][150]§

### impl<'de, R: [Runtime][6]> [CommandArg][151]<'de, R> for [Window][10]<R>

[Source][152]§

#### fn [from_command][153](command: [CommandItem][154]<'de, R>) -> [Result][155]<Self, [InvokeError][156]>

Grabs the [`Window`][10] from the [`CommandItem`][154]. This will never fail.

[Source][157]§

### impl<R: [Runtime][6]> [Debug][158] for [Window][10]<R>

[Source][159]§

#### fn [fmt][160](&self, f: &mut [Formatter][161]<'_>) -> [Result][162]

Formats the value using the given formatter. [Read more][160]

[Source][163]§

### impl<R: [Runtime][6]> [Emitter][164]<R> for [Window][10]<R>

[Source][165]§

#### fn [emit][166]<S: [Serialize][167] \+ [Clone][145]>(&self, event: &[str][20], payload: S) -> [Result][17]<[()][18]>

Emits an event to all [targets][168]. [Read more][166]

[Source][169]§

#### fn [emit_str][170](&self, event: &[str][20], payload: [String][69]) -> [Result][17]<[()][18]>

Similar to [`Emitter::emit`][171] but the payload is json serialized.

[Source][172]§

#### fn [emit_to][173]<I, S>(&self, target: I, event: &[str][20], payload: S) -> [Result][17]<[()][18]>

where I: [Into][43]<[EventTarget][168]>, S: [Serialize][167] \+ [Clone][145],

Emits an event to all [targets][168] matching the given target. [Read more][173]

[Source][174]§

#### fn [emit_str_to][175]<I>(&self, target: I, event: &[str][20], payload: [String][69]) -> [Result][17]<[()][18]>

where I: [Into][43]<[EventTarget][168]>,

Similar to [`Emitter::emit_to`][176] but the payload is json serialized.

[Source][177]§

#### fn [emit_filter][178]<S, F>(&self, event: &[str][20], payload: S, filter: F) -> [Result][17]<[()][18]>

where S: [Serialize][167] \+ [Clone][145], F: [Fn][22](&[EventTarget][168]) -> [bool][38],

Emits an event to all [targets][168] based on the given filter. [Read more][178]

[Source][179]§

#### fn [emit_str_filter][180]<F>( &self, event: &[str][20], payload: [String][69], filter: F, ) -> [Result][17]<[()][18]>

where F: [Fn][22](&[EventTarget][168]) -> [bool][38],

Similar to [`Emitter::emit_filter`][181] but the payload is json serialized.

[Source][182]§

### impl<R: [Runtime][6]> HasDisplayHandle for [Window][10]<R>

[Source][183]§

#### fn display_handle(&self) -> [Result][155]<DisplayHandle<'_>, HandleError>

Get a handle to the display controller of the windowing system.

[Source][184]§

### impl<R: [Runtime][6]> HasWindowHandle for [Window][10]<R>

[Source][185]§

#### fn window_handle(&self) -> [Result][155]<WindowHandle<'_>, HandleError>

Get a handle to the window.

[Source][186]§

### impl<R: [Runtime][6]> [Hash][187] for [Window][10]<R>

[Source][188]§

#### fn [hash][189]<H: [Hasher][190]>(&self, state: [&mut H][41])

Only use the [`Window`][10]’s label to represent its hash.

1.3.0 · [Source][191]§

#### fn [hash_slice][192]<H>(data: &[Self], state: [&mut H][41])

where H: [Hasher][190], Self: [Sized][193],

Feeds a slice of this type into the given [`Hasher`][190]. [Read more][192]

[Source][194]§

### impl<R: [Runtime][6]> [Listener][195]<R> for [Window][10]<R>

[Source][196]§

#### fn [listen][197]<F>(&self, event: impl [Into][43]<[String][69]>, handler: F) -> [EventId][198]

where F: [Fn][22]([Event][199]) + [Send][16] \+ 'static,

Listen to an event on this window.

##### §Examples

[Source][200]§

#### fn [once][201]<F>(&self, event: impl [Into][43]<[String][69]>, handler: F) -> [EventId][198]

where F: [FnOnce][15]([Event][199]) + [Send][16] \+ 'static,

Listen to an event on this window only once.

See [`Self::listen`][202] for more information.

[Source][203]§

#### fn [unlisten][204](&self, id: [EventId][198])

Unlisten to an event on this window.

##### §Examples

[Source][205]§

#### fn [listen_any][206]<F>(&self, event: impl [Into][43]<[String][69]>, handler: F) -> [EventId][198]

where F: [Fn][22]([Event][199]) + [Send][16] \+ 'static,

Listen to an emitted event to any [target][168]. [Read more][206]

[Source][207]§

#### fn [once_any][208]<F>(&self, event: impl [Into][43]<[String][69]>, handler: F) -> [EventId][198]

where F: [FnOnce][15]([Event][199]) + [Send][16] \+ 'static,

Listens once to an emitted event to any [target][168] . [Read more][208]

[Source][209]§

### impl<R: [Runtime][6]> [Manager][8]<R> for [Window][10]<R>

[Source][210]§

#### fn [resources_table][211](&self) -> [MutexGuard][212]<'_, [ResourceTable][213]>

Get a reference to the resources table of this manager.

[Source][214]§

#### fn [app_handle][215](&self) -> &[AppHandle][216]<R>

The application handle associated with this manager.

[Source][217]§

#### fn [config][218](&self) -> &[Config][219]

The [`Config`][219] the manager was created with.

[Source][220]§

#### fn [package_info][221](&self) -> &[PackageInfo][222]

The [`PackageInfo`][222] the manager was created with.

[Source][223]§

#### fn [get_webview_window][224](&self, label: &[str][20]) -> [Option][29]<[WebviewWindow][225]<R>>

Fetch a single webview window from the manager.

[Source][226]§

#### fn [webview_windows][227](&self) -> [HashMap][228]<[String][69], [WebviewWindow][225]<R>>

Fetch all managed webview windows.

[Source][229]§

#### fn [manage][230]<T>(&self, state: T) -> [bool][38]

where T: [Send][16] \+ [Sync][27] \+ 'static,

Add `state` to the state managed by the application. [Read more][230]

[Source][231]§

#### fn [unmanage][232]<T>(&self) -> [Option][29]<T>

where T: [Send][16] \+ [Sync][27] \+ 'static,

👎Deprecated since 2.3.0: This method is unsafe, since it can cause dangling references.

Removes the state managed by the application for T. Returns the state if it was actually removed. [Read more][232]

[Source][233]§

#### fn [state][234]<T>(&self) -> [State][235]<'_, T>

where T: [Send][16] \+ [Sync][27] \+ 'static,

Retrieves the managed state for the type `T`. [Read more][234]

[Source][236]§

#### fn [try_state][237]<T>(&self) -> [Option][29]<[State][235]<'_, T>>

where T: [Send][16] \+ [Sync][27] \+ 'static,

Attempts to retrieve the managed state for the type `T`. [Read more][237]

[Source][238]§

#### fn [env][239](&self) -> [Env][240]

Gets the managed [`Env`][240].

[Source][241]§

#### fn [path][242](&self) -> &[PathResolver][243]<R>

The path resolver.

[Source][244]§

#### fn [add_capability][245](&self, capability: impl [RuntimeCapability][246]) -> [Result][17]<[()][18]>

Adds a capability to the app. [Read more][245]

[Source][247]§

### impl<R: [Runtime][6]> [PartialEq][248] for [Window][10]<R>

[Source][249]§

#### fn [eq][250](&self, other: &Self) -> [bool][38]

Only use the [`Window`][10]’s label to compare equality.

1.0.0 · [Source][251]§

#### fn [ne][252](&self, other: [&Rhs][41]) -> [bool][38]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][253]§

### impl<R: [Runtime][6]> [Eq][254] for [Window][10]<R>

## Auto Trait Implementations§

§

### impl<R> [Freeze][255] for [Window][10]<R>

where <R as Runtime<[EventLoopMessage][256]>>::WindowDispatcher: [Freeze][255], <R as Runtime<[EventLoopMessage][256]>>::Handle: [Freeze][255], <R as Runtime<[EventLoopMessage][256]>>::WebviewDispatcher: [Freeze][255],

§

### impl<R = Wry<[EventLoopMessage][256]>> ![RefUnwindSafe][257] for [Window][10]<R>

§

### impl<R> [Send][16] for [Window][10]<R>

§

### impl<R> [Sync][27] for [Window][10]<R>

§

### impl<R> [Unpin][258] for [Window][10]<R>

where <R as Runtime<[EventLoopMessage][256]>>::WindowDispatcher: [Unpin][258], <R as Runtime<[EventLoopMessage][256]>>::Handle: [Unpin][258], <R as Runtime<[EventLoopMessage][256]>>::WebviewDispatcher: [Unpin][258],

§

### impl<R = Wry<[EventLoopMessage][256]>> ![UnwindSafe][259] for [Window][10]<R>

## Blanket Implementations§

[Source][260]§

### impl<T> [Any][261] for T

where T: 'static + ?[Sized][193],

[Source][262]§

#### fn [type_id][263](&self) -> [TypeId][264]

Gets the `TypeId` of `self`. [Read more][263]

[Source][265]§

### impl<T> [Borrow][266]<T> for T

where T: ?[Sized][193],

[Source][267]§

#### fn [borrow][268](&self) -> [&T][41]

Immutably borrows from an owned value. [Read more][268]

[Source][269]§

### impl<T> [BorrowMut][270]<T> for T

where T: ?[Sized][193],

[Source][271]§

#### fn [borrow_mut][272](&mut self) -> [&mut T][41]

Mutably borrows from an owned value. [Read more][272]

[Source][273]§

### impl<T> [CloneToUninit][274] for T

where T: [Clone][145],

[Source][275]§

#### unsafe fn [clone_to_uninit][276](&self, dest: [*mut ][277][u8][278])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][276]

[Source][279]§

### impl<T> [From][280]<T> for T

[Source][281]§

#### fn [from][282](t: T) -> T

Returns the argument unchanged.

§

### impl<T> HasRawDisplayHandle for T

where T: HasDisplayHandle + ?[Sized][193],

§

#### fn raw_display_handle(&self) -> [Result][155]<RawDisplayHandle, HandleError>

👎Deprecated: Use `HasDisplayHandle` instead

§

### impl<T> HasRawWindowHandle for T

where T: HasWindowHandle + ?[Sized][193],

§

#### fn raw_window_handle(&self) -> [Result][155]<RawWindowHandle, HandleError>

👎Deprecated: Use `HasWindowHandle` instead

[Source][283]§

### impl<T, U> [Into][43]<U> for T

where U: [From][280]<T>,

[Source][284]§

#### fn [into][285](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][280]<T> for U` chooses to do.

[Source][286]§

### impl<T> [ToOwned][287] for T

where T: [Clone][145],

[Source][288]§

#### type [Owned][289] = T

The resulting type after obtaining ownership.

[Source][290]§

#### fn [to_owned][291](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][291]

[Source][292]§

#### fn [clone_into][293](&self, target: [&mut T][41])

Uses borrowed data to replace owned data, usually by cloning. [Read more][293]

[Source][294]§

### impl<T, U> [TryFrom][295]<U> for T

where U: [Into][43]<T>,

[Source][296]§

#### type [Error][297] = [Infallible][298]

The type returned in the event of a conversion error.

[Source][299]§

#### fn [try_from][300](value: U) -> [Result][155]<T, <T as [TryFrom][295]<U>>::[Error][301]>

Performs the conversion.

[Source][302]§

### impl<T, U> [TryInto][303]<U> for T

where U: [TryFrom][295]<T>,

[Source][304]§

#### type [Error][305] = <U as [TryFrom][295]<T>>::[Error][301]

The type returned in the event of a conversion error.

[Source][306]§

#### fn [try_into][307](self) -> [Result][155]<U, <U as [TryFrom][295]<T>>::[Error][301]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][158] \+ [Clone][145] \+ [Send][16] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/window/mod.rs.html#921-931
   [6]: ../trait.Runtime.html (trait tauri::Runtime)
   [7]: ../type.Wry.html (type tauri::Wry)
   [8]: ../trait.Manager.html (trait tauri::Manager)
   [9]: ../../src/tauri/window/mod.rs.html#1022-1108
   [10]: struct.Window.html (struct tauri::window::Window)
   [11]: ../../src/tauri/window/mod.rs.html#1072-1081
   [12]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [13]: ../webview/struct.Webview.html (struct tauri::webview::Webview)
   [14]: ../../src/tauri/window/mod.rs.html#1088-1094
   [15]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [16]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [17]: ../type.Result.html (type tauri::Result)
   [18]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [19]: ../../src/tauri/window/mod.rs.html#1097-1099
   [20]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [21]: ../../src/tauri/window/mod.rs.html#1102-1107
   [22]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.Fn.html (trait core::ops::function::Fn)
   [23]: ../enum.WindowEvent.html (enum tauri::WindowEvent)
   [24]: ../../src/tauri/window/mod.rs.html#1112-1379
   [25]: ../../src/tauri/window/mod.rs.html#1152-1163
   [26]: ../menu/struct.MenuEvent.html (struct tauri::menu::MenuEvent)
   [27]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [28]: ../../src/tauri/window/mod.rs.html#1188-1190
   [29]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [30]: ../menu/struct.Menu.html (struct tauri::menu::Menu)
   [31]: ../../src/tauri/window/mod.rs.html#1199-1236
   [32]: ../struct.AppHandle.html#method.set_menu (method tauri::AppHandle::set_menu)
   [33]: ../../src/tauri/window/mod.rs.html#1244-1275
   [34]: ../struct.AppHandle.html#method.remove_menu (method tauri::AppHandle::remove_menu)
   [35]: ../../src/tauri/window/mod.rs.html#1278-1303
   [36]: ../../src/tauri/window/mod.rs.html#1306-1331
   [37]: ../../src/tauri/window/mod.rs.html#1334-1362
   [38]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [39]: ../../src/tauri/window/mod.rs.html#1365-1367
   [40]: ../menu/trait.ContextMenu.html (trait tauri::menu::ContextMenu)
   [41]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [42]: ../../src/tauri/window/mod.rs.html#1372-1378
   [43]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [44]: ../enum.Position.html (enum tauri::Position)
   [45]: ../../src/tauri/window/mod.rs.html#1382-1630
   [46]: ../../src/tauri/window/mod.rs.html#1384-1386
   [47]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html
   [48]: ../../src/tauri/window/mod.rs.html#1389-1391
   [49]: ../struct.PhysicalPosition.html (struct tauri::PhysicalPosition)
   [50]: https://doc.rust-lang.org/1.94.1/std/primitive.i32.html
   [51]: ../../src/tauri/window/mod.rs.html#1394-1396
   [52]: ../../src/tauri/window/mod.rs.html#1401-1403
   [53]: ../struct.PhysicalSize.html (struct tauri::PhysicalSize)
   [54]: https://doc.rust-lang.org/1.94.1/std/primitive.u32.html
   [55]: ../../src/tauri/window/mod.rs.html#1408-1410
   [56]: ../../src/tauri/window/mod.rs.html#1413-1415
   [57]: ../../src/tauri/window/mod.rs.html#1418-1420
   [58]: ../../src/tauri/window/mod.rs.html#1423-1425
   [59]: ../../src/tauri/window/mod.rs.html#1428-1430
   [60]: ../../src/tauri/window/mod.rs.html#1433-1435
   [61]: ../../src/tauri/window/mod.rs.html#1438-1440
   [62]: ../../src/tauri/window/mod.rs.html#1443-1445
   [63]: ../../src/tauri/window/mod.rs.html#1452-1458
   [64]: ../../src/tauri/window/mod.rs.html#1465-1467
   [65]: ../../src/tauri/window/mod.rs.html#1474-1476
   [66]: ../../src/tauri/window/mod.rs.html#1483-1485
   [67]: ../../src/tauri/window/mod.rs.html#1488-1490
   [68]: ../../src/tauri/window/mod.rs.html#1493-1495
   [69]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [70]: ../../src/tauri/window/mod.rs.html#1500-1507
   [71]: struct.Monitor.html (struct tauri::window::Monitor)
   [72]: ../../src/tauri/window/mod.rs.html#1510-1517
   [73]: ../../src/tauri/window/mod.rs.html#1522-1529
   [74]: ../../src/tauri/window/mod.rs.html#1532-1539
   [75]: ../../src/tauri/window/mod.rs.html#1579-1592
   [76]: ../../src/tauri/window/mod.rs.html#1627-1629
   [77]: ../enum.Theme.html (enum tauri::Theme)
   [78]: ../../src/tauri/window/mod.rs.html#1634-1646
   [79]: ../../src/tauri/window/mod.rs.html#1643-1645
   [80]: ../../src/tauri/window/mod.rs.html#1650-2207
   [81]: ../../src/tauri/window/mod.rs.html#1652-1654
   [82]: ../../src/tauri/window/mod.rs.html#1667-1676
   [83]: ../enum.UserAttentionType.html (enum tauri::UserAttentionType)
   [84]: ../../src/tauri/window/mod.rs.html#1680-1686
   [85]: ../../src/tauri/window/mod.rs.html#1695-1701
   [86]: ../../src/tauri/window/mod.rs.html#1708-1714
   [87]: ../../src/tauri/window/mod.rs.html#1723-1729
   [88]: ../../src/tauri/window/mod.rs.html#1732-1738
   [89]: ../../src/tauri/window/mod.rs.html#1741-1747
   [90]: ../../src/tauri/window/mod.rs.html#1750-1752
   [91]: ../../src/tauri/window/mod.rs.html#1755-1757
   [92]: ../../src/tauri/window/mod.rs.html#1760-1762
   [93]: ../../src/tauri/window/mod.rs.html#1765-1767
   [94]: ../../src/tauri/window/mod.rs.html#1770-1772
   [95]: ../../src/tauri/window/mod.rs.html#1775-1777
   [96]: ../../src/tauri/window/mod.rs.html#1780-1782
   [97]: ../../src/tauri/window/mod.rs.html#1785-1787
   [98]: struct.Window.html#method.close (method tauri::window::Window::close)
   [99]: ../../src/tauri/window/mod.rs.html#1792-1798
   [100]: https://en.wikipedia.org/wiki/Window_(computing)#Window_decoration
   [101]: ../../src/tauri/window/mod.rs.html#1809-1815
   [102]: ../../src/tauri/window/mod.rs.html#1849-1855
   [103]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html#variant.None (variant core::option::Option::None)
   [104]: struct.EffectsBuilder.html (struct tauri::window::EffectsBuilder)
   [105]: ../../src/tauri/window/mod.rs.html#1858-1864
   [106]: ../../src/tauri/window/mod.rs.html#1867-1873
   [107]: ../../src/tauri/window/mod.rs.html#1880-1889
   [108]: ../../src/tauri/window/mod.rs.html#1897-1903
   [109]: ../webview/struct.Color.html (struct tauri::webview::Color)
   [110]: ../../src/tauri/window/mod.rs.html#1906-1912
   [111]: ../../src/tauri/window/mod.rs.html#1915-1921
   [112]: ../enum.Size.html (enum tauri::Size)
   [113]: ../../src/tauri/window/mod.rs.html#1924-1930
   [114]: ../../src/tauri/window/mod.rs.html#1933-1939
   [115]: ../../src/tauri/window/mod.rs.html#1942-1951
   [116]: ../struct.WindowSizeConstraints.html (struct tauri::WindowSizeConstraints)
   [117]: ../../src/tauri/window/mod.rs.html#1954-1960
   [118]: ../../src/tauri/window/mod.rs.html#1963-1969
   [119]: ../../src/tauri/window/mod.rs.html#1981-1992
   [120]: struct.Window.html#method.set_fullscreen (method tauri::window::Window::set_fullscreen)
   [121]: ../../src/tauri/window/mod.rs.html#1995-1997
   [122]: ../../src/tauri/window/mod.rs.html#2005-2011
   [123]: struct.Window.html#method.set_focus (method tauri::window::Window::set_focus)
   [124]: ../../src/tauri/window/mod.rs.html#2014-2020
   [125]: ../image/struct.Image.html (struct tauri::image::Image)
   [126]: ../../src/tauri/window/mod.rs.html#2027-2033
   [127]: ../../src/tauri/window/mod.rs.html#2044-2050
   [128]: ../../src/tauri/window/mod.rs.html#2061-2067
   [129]: ../../src/tauri/window/mod.rs.html#2070-2076
   [130]: ../enum.CursorIcon.html (enum tauri::CursorIcon)
   [131]: ../../src/tauri/window/mod.rs.html#2079-2085
   [132]: ../../src/tauri/window/mod.rs.html#2088-2094
   [133]: ../../src/tauri/window/mod.rs.html#2097-2099
   [134]: ../../src/tauri/window/mod.rs.html#2102-2111
   [135]: ../../src/tauri/window/mod.rs.html#2118-2124
   [136]: ../../src/tauri/window/mod.rs.html#2132-2138
   [137]: https://doc.rust-lang.org/1.94.1/std/primitive.i64.html
   [138]: struct.Window.html#method.set_overlay_icon (method tauri::window::Window::set_overlay_icon)
   [139]: ../../src/tauri/window/mod.rs.html#2158-2168
   [140]: struct.ProgressBarState.html (struct tauri::window::ProgressBarState)
   [141]: ../../src/tauri/window/mod.rs.html#2171-2177
   [142]: ../enum.TitleBarStyle.html (enum tauri::TitleBarStyle)
   [143]: ../../src/tauri/window/mod.rs.html#2185-2206
   [144]: ../../src/tauri/window/mod.rs.html#959-970
   [145]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [146]: ../../src/tauri/window/mod.rs.html#960-969
   [147]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [148]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [149]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [150]: ../../src/tauri/window/mod.rs.html#1014-1019
   [151]: ../ipc/trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [152]: ../../src/tauri/window/mod.rs.html#1016-1018
   [153]: ../ipc/trait.CommandArg.html#tymethod.from_command
   [154]: ../ipc/struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [155]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [156]: ../ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [157]: ../../src/tauri/window/mod.rs.html#933-941
   [158]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [159]: ../../src/tauri/window/mod.rs.html#934-940
   [160]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [161]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [162]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [163]: ../../src/tauri/window/mod.rs.html#2310
   [164]: ../trait.Emitter.html (trait tauri::Emitter)
   [165]: ../../src/tauri/lib.rs.html#952-956
   [166]: ../trait.Emitter.html#method.emit
   [167]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [168]: ../enum.EventTarget.html (enum tauri::EventTarget)
   [169]: ../../src/tauri/lib.rs.html#959-963
   [170]: ../trait.Emitter.html#method.emit_str
   [171]: ../trait.Emitter.html#method.emit (method tauri::Emitter::emit)
   [172]: ../../src/tauri/lib.rs.html#987-995
   [173]: ../trait.Emitter.html#method.emit_to
   [174]: ../../src/tauri/lib.rs.html#998-1005
   [175]: ../trait.Emitter.html#method.emit_str_to
   [176]: ../trait.Emitter.html#method.emit_to (method tauri::Emitter::emit_to)
   [177]: ../../src/tauri/lib.rs.html#1025-1033
   [178]: ../trait.Emitter.html#method.emit_filter
   [179]: ../../src/tauri/lib.rs.html#1036-1043
   [180]: ../trait.Emitter.html#method.emit_str_filter
   [181]: ../trait.Emitter.html#method.emit_filter (method tauri::Emitter::emit_filter)
   [182]: ../../src/tauri/window/mod.rs.html#951-957
   [183]: ../../src/tauri/window/mod.rs.html#952-956
   [184]: ../../src/tauri/window/mod.rs.html#943-949
   [185]: ../../src/tauri/window/mod.rs.html#944-948
   [186]: ../../src/tauri/window/mod.rs.html#972-977
   [187]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html (trait core::hash::Hash)
   [188]: ../../src/tauri/window/mod.rs.html#974-976
   [189]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#tymethod.hash
   [190]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hasher.html (trait core::hash::Hasher)
   [191]: https://doc.rust-lang.org/1.94.1/src/core/hash/mod.rs.html#235-237
   [192]: https://doc.rust-lang.org/1.94.1/core/hash/trait.Hash.html#method.hash_slice
   [193]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [194]: ../../src/tauri/window/mod.rs.html#2223-2308
   [195]: ../trait.Listener.html (trait tauri::Listener)
   [196]: ../../src/tauri/window/mod.rs.html#2245-2257
   [197]: ../trait.Listener.html#tymethod.listen
   [198]: ../type.EventId.html (type tauri::EventId)
   [199]: ../struct.Event.html (struct tauri::Event)
   [200]: ../../src/tauri/window/mod.rs.html#2262-2274
   [201]: ../trait.Listener.html#tymethod.once
   [202]: struct.Window.html#method.listen (method tauri::window::Window::listen)
   [203]: ../../src/tauri/window/mod.rs.html#2305-2307
   [204]: ../trait.Listener.html#tymethod.unlisten
   [205]: ../../src/tauri/lib.rs.html#916-922
   [206]: ../trait.Listener.html#method.listen_any
   [207]: ../../src/tauri/lib.rs.html#929-935
   [208]: ../trait.Listener.html#method.once_any
   [209]: ../../src/tauri/window/mod.rs.html#987-994
   [210]: ../../src/tauri/window/mod.rs.html#988-993
   [211]: ../trait.Manager.html#tymethod.resources_table
   [212]: https://doc.rust-lang.org/1.94.1/std/sync/poison/mutex/struct.MutexGuard.html (struct std::sync::poison::mutex::MutexGuard)
   [213]: ../struct.ResourceTable.html (struct tauri::ResourceTable)
   [214]: ../../src/tauri/lib.rs.html#532-534
   [215]: ../trait.Manager.html#method.app_handle
   [216]: ../struct.AppHandle.html (struct tauri::AppHandle)
   [217]: ../../src/tauri/lib.rs.html#537-539
   [218]: ../trait.Manager.html#method.config
   [219]: ../struct.Config.html (struct tauri::Config)
   [220]: ../../src/tauri/lib.rs.html#542-544
   [221]: ../trait.Manager.html#method.package_info
   [222]: ../struct.PackageInfo.html (struct tauri::PackageInfo)
   [223]: ../../src/tauri/lib.rs.html#582-591
   [224]: ../trait.Manager.html#method.get_webview_window
   [225]: ../webview/struct.WebviewWindow.html (struct tauri::webview::WebviewWindow)
   [226]: ../../src/tauri/lib.rs.html#594-608
   [227]: ../trait.Manager.html#method.webview_windows
   [228]: https://doc.rust-lang.org/1.94.1/std/collections/hash/map/struct.HashMap.html (struct std::collections::hash::map::HashMap)
   [229]: ../../src/tauri/lib.rs.html#694-699
   [230]: ../trait.Manager.html#method.manage
   [231]: ../../src/tauri/lib.rs.html#721-727
   [232]: ../trait.Manager.html#method.unmanage
   [233]: ../../src/tauri/lib.rs.html#735-745
   [234]: ../trait.Manager.html#method.state
   [235]: ../struct.State.html (struct tauri::State)
   [236]: ../../src/tauri/lib.rs.html#750-755
   [237]: ../trait.Manager.html#method.try_state
   [238]: ../../src/tauri/lib.rs.html#761-763
   [239]: ../trait.Manager.html#method.env
   [240]: ../struct.Env.html (struct tauri::Env)
   [241]: ../../src/tauri/lib.rs.html#772-774
   [242]: ../trait.Manager.html#method.path
   [243]: ../path/struct.PathResolver.html (struct tauri::path::PathResolver)
   [244]: ../../src/tauri/lib.rs.html#819-826
   [245]: ../trait.Manager.html#method.add_capability
   [246]: ../ipc/trait.RuntimeCapability.html (trait tauri::ipc::RuntimeCapability)
   [247]: ../../src/tauri/window/mod.rs.html#980-985
   [248]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [249]: ../../src/tauri/window/mod.rs.html#982-984
   [250]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [251]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [252]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [253]: ../../src/tauri/window/mod.rs.html#979
   [254]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [255]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [256]: ../enum.EventLoopMessage.html (enum tauri::EventLoopMessage)
   [257]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [258]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [259]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [260]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [261]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [262]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [263]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [264]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [265]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [266]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [267]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [268]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [269]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [270]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [271]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [272]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [273]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [274]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [275]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [276]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [277]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [278]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [279]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [280]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [281]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [282]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [283]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [284]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [285]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [286]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [287]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [288]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [289]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [290]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [291]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [292]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [293]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [294]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [295]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [296]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [297]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [298]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [299]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [300]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [301]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [302]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [303]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [304]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [305]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [306]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [307]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

