## WebviewWindow

[![logo][1]][2]

## [tauri][2]2.10.3

## WebviewWindow

### Methods

  * available_monitors
  * builder
  * center
  * clear_all_browsing_data
  * close
  * close_devtools
  * cookies
  * cookies_for_url
  * current_monitor
  * cursor_position
  * delete_cookie
  * destroy
  * eval
  * hide
  * hide_menu
  * hwnd
  * inner_position
  * inner_size
  * is_always_on_top
  * is_closable
  * is_decorated
  * is_devtools_open
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
  * navigate
  * on_menu_event
  * on_message
  * on_webview_event
  * on_window_event
  * open_devtools
  * outer_position
  * outer_size
  * popup_menu
  * popup_menu_at
  * primary_monitor
  * print
  * reload
  * remove_menu
  * request_user_attention
  * resolve_command_scope
  * run_on_main_thread
  * scale_factor
  * set_always_on_bottom
  * set_always_on_top
  * set_background_color
  * set_badge_count
  * set_closable
  * set_content_protected
  * set_cookie
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
  * set_zoom
  * show
  * show_menu
  * start_dragging
  * theme
  * title
  * unmaximize
  * unminimize
  * url
  * with_webview



### Trait Implementations

  * AsRef<Webview<R>>
  * Clone
  * CommandArg<'de, R>
  * Debug
  * Emitter<R>
  * Eq
  * HasDisplayHandle
  * HasWindowHandle
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



## [In tauri::webview][3]

[tauri][4]::[webview][3]

# Struct WebviewWindow Copy item path

[Source][5]
[code] 
    pub struct WebviewWindow<R: [Runtime][6] = [Wry][7]> { /* private fields */ }
[/code]

Expand description

A type that wraps a [`Window`][8] together with a [`Webview`][9].

## Implementations§

[Source][10]§

### impl<R: [Runtime][6]> [WebviewWindow][11]<R>

Base webview window functions.

[Source][12]

#### pub fn builder<M: [Manager][13]<R>, L: [Into][14]<[String][15]>>( manager: [&M][16], label: L, url: [WebviewUrl][17], ) -> [WebviewWindowBuilder][18]<'_, R, M>

Initializes a [`WebviewWindowBuilder`][18] with the given window label and webview URL.

Data URLs are only supported with the `webview-data-url` feature flag.

[Source][19]

#### pub fn run_on_main_thread<F: [FnOnce][20]() + [Send][21] \+ 'static>( &self, f: F, ) -> [Result][22]<[()][23]>

Runs the given closure on the main thread.

[Source][24]

#### pub fn label(&self) -> &[str][25]

The webview label.

[Source][26]

#### pub fn on_window_event<F: [Fn][27](&[WindowEvent][28]) + [Send][21] \+ 'static>(&self, f: F)

Registers a window event listener.

[Source][29]

#### pub fn on_webview_event<F: [Fn][27](&[WebviewEvent][30]) + [Send][21] \+ 'static>(&self, f: F)

Registers a webview event listener.

[Source][31]

#### pub fn resolve_command_scope<T: [ScopeObject][32]>( &self, plugin: &[str][25], command: &[str][25], ) -> [Result][22]<[Option][33]<[ResolvedScope][34]<T>>>

Resolves the given command scope for this webview on the currently loaded URL.

If the command is not allowed, returns None.

If the scope cannot be deserialized to the given type, an error is returned.

In a command context this can be directly resolved from the command arguments via [crate::ipc::CommandScope][35]:
[code] 
    use tauri::ipc::CommandScope;
    
    #[derive(Debug, serde::Deserialize)]
    struct ScopeType {
      some_value: String,
    }
    #[tauri::command]
    fn my_command(scope: CommandScope<ScopeType>) {
      // check scope
    }
[/code]

##### §Examples
[code] 
    use tauri::Manager;
    
    #[derive(Debug, serde::Deserialize)]
    struct ScopeType {
      some_value: String,
    }
    
    tauri::Builder::default()
      .setup(|app| {
        let webview = app.get_webview_window("main").unwrap();
        let scope = webview.resolve_command_scope::<ScopeType>("my-plugin", "read");
        Ok(())
      });
[/code]

[Source][36]§

### impl<R: [Runtime][6]> [WebviewWindow][11]<R>

Menu APIs

[Source][37]

#### pub fn on_menu_event<F: [Fn][27](&[Window][8]<R>, [MenuEvent][38]) + [Send][21] \+ [Sync][39] \+ 'static>( &self, f: F, )

Registers a global menu event listener.

Note that this handler is called for any menu event, whether it is coming from this window, another window or from the tray icon menu.

Also note that this handler will not be called if the window used to register it was closed.

##### §Examples
[code] 
    use tauri::menu::{Menu, Submenu, MenuItem};
    use tauri::{WebviewWindowBuilder, WebviewUrl};
    
    tauri::Builder::default()
      .setup(|app| {
        let handle = app.handle();
        let save_menu_item = MenuItem::new(handle, "Save", true, None::<&str>)?;
        let menu = Menu::with_items(handle, &[
          &Submenu::with_items(handle, "File", true, &[
            &save_menu_item,
          ])?,
        ])?;
        let webview_window = WebviewWindowBuilder::new(app, "editor", WebviewUrl::default())
          .menu(menu)
          .build()
          .unwrap();
    
        webview_window.on_menu_event(move |window, event| {
          if event.id == save_menu_item.id() {
              // save menu item
          }
        });
    
        Ok(())
      });
[/code]

[Source][40]

#### pub fn menu(&self) -> [Option][33]<[Menu][41]<R>>

Returns this window menu.

[Source][42]

#### pub fn set_menu(&self, menu: [Menu][41]<R>) -> [Result][22]<[Option][33]<[Menu][41]<R>>>

Sets the window menu and returns the previous one.

###### §Platform-specific:

  * **macOS:** Unsupported. The menu on macOS is app-wide and not specific to one window, if you need to set it, use [`AppHandle::set_menu`][43] instead.



[Source][44]

#### pub fn remove_menu(&self) -> [Result][22]<[Option][33]<[Menu][41]<R>>>

Removes the window menu and returns it.

###### §Platform-specific:

  * **macOS:** Unsupported. The menu on macOS is app-wide and not specific to one window, if you need to remove it, use [`AppHandle::remove_menu`][45] instead.



[Source][46]

#### pub fn hide_menu(&self) -> [Result][22]<[()][23]>

Hides the window menu.

[Source][47]

#### pub fn show_menu(&self) -> [Result][22]<[()][23]>

Shows the window menu.

[Source][48]

#### pub fn is_menu_visible(&self) -> [Result][22]<[bool][49]>

Shows the window menu.

[Source][50]

#### pub fn popup_menu<M: [ContextMenu][51]>(&self, menu: [&M][16]) -> [Result][22]<[()][23]>

Shows the specified menu as a context menu at the cursor position.

[Source][52]

#### pub fn popup_menu_at<M: [ContextMenu][51], P: [Into][14]<[Position][53]>>( &self, menu: [&M][16], position: P, ) -> [Result][22]<[()][23]>

Shows the specified menu as a context menu at the specified position.

The position is relative to the window’s top-left corner.

[Source][54]§

### impl<R: [Runtime][6]> [WebviewWindow][11]<R>

Window getters.

[Source][55]

#### pub fn scale_factor(&self) -> [Result][22]<[f64][56]>

Returns the scale factor that can be used to map logical pixels to physical pixels, and vice versa.

[Source][57]

#### pub fn inner_position(&self) -> [Result][22]<[PhysicalPosition][58]<[i32][59]>>

Returns the position of the top-left hand corner of the window’s client area relative to the top-left hand corner of the desktop.

[Source][60]

#### pub fn outer_position(&self) -> [Result][22]<[PhysicalPosition][58]<[i32][59]>>

Returns the position of the top-left hand corner of the window relative to the top-left hand corner of the desktop.

[Source][61]

#### pub fn inner_size(&self) -> [Result][22]<[PhysicalSize][62]<[u32][63]>>

Returns the physical size of the window’s client area.

The client area is the content of the window, excluding the title bar and borders.

[Source][64]

#### pub fn outer_size(&self) -> [Result][22]<[PhysicalSize][62]<[u32][63]>>

Returns the physical size of the entire window.

These dimensions include the title bar and borders. If you don’t want that (and you usually don’t), use inner_size instead.

[Source][65]

#### pub fn is_fullscreen(&self) -> [Result][22]<[bool][49]>

Gets the window’s current fullscreen state.

[Source][66]

#### pub fn is_minimized(&self) -> [Result][22]<[bool][49]>

Gets the window’s current minimized state.

[Source][67]

#### pub fn is_maximized(&self) -> [Result][22]<[bool][49]>

Gets the window’s current maximized state.

[Source][68]

#### pub fn is_focused(&self) -> [Result][22]<[bool][49]>

Gets the window’s current focus state.

[Source][69]

#### pub fn is_decorated(&self) -> [Result][22]<[bool][49]>

Gets the window’s current decoration state.

[Source][70]

#### pub fn is_resizable(&self) -> [Result][22]<[bool][49]>

Gets the window’s current resizable state.

[Source][71]

#### pub fn is_enabled(&self) -> [Result][22]<[bool][49]>

Whether the window is enabled or disabled.

[Source][72]

#### pub fn is_always_on_top(&self) -> [Result][22]<[bool][49]>

Determines if this window should always be on top of other windows.

###### §Platform-specific

  * **iOS / Android:** Unsupported.



[Source][73]

#### pub fn is_maximizable(&self) -> [Result][22]<[bool][49]>

Gets the window’s native maximize button state

###### §Platform-specific

  * **Linux / iOS / Android:** Unsupported.



[Source][74]

#### pub fn is_minimizable(&self) -> [Result][22]<[bool][49]>

Gets the window’s native minimize button state

###### §Platform-specific

  * **Linux / iOS / Android:** Unsupported.



[Source][75]

#### pub fn is_closable(&self) -> [Result][22]<[bool][49]>

Gets the window’s native close button state

###### §Platform-specific

  * **Linux / iOS / Android:** Unsupported.



[Source][76]

#### pub fn is_visible(&self) -> [Result][22]<[bool][49]>

Gets the window’s current visibility state.

[Source][77]

#### pub fn title(&self) -> [Result][22]<[String][15]>

Gets the window’s current title.

[Source][78]

#### pub fn current_monitor(&self) -> [Result][22]<[Option][33]<[Monitor][79]>>

Returns the monitor on which the window currently resides.

Returns None if current monitor can’t be detected.

[Source][80]

#### pub fn primary_monitor(&self) -> [Result][22]<[Option][33]<[Monitor][79]>>

Returns the primary monitor of the system.

Returns None if it can’t identify any monitor as a primary one.

[Source][81]

#### pub fn monitor_from_point(&self, x: [f64][56], y: [f64][56]) -> [Result][22]<[Option][33]<[Monitor][79]>>

Returns the monitor that contains the given point.

[Source][82]

#### pub fn available_monitors(&self) -> [Result][22]<[Vec][83]<[Monitor][79]>>

Returns the list of all the monitors available on the system.

[Source][84]

#### pub fn hwnd(&self) -> [Result][22]<HWND>

Returns the native handle that is used by this window.

[Source][85]

#### pub fn theme(&self) -> [Result][22]<[Theme][86]>

Returns the current window theme.

###### §Platform-specific

  * **macOS** : Only supported on macOS 10.14+.



[Source][87]§

### impl<R: [Runtime][6]> [WebviewWindow][11]<R>

Desktop window getters.

[Source][88]

#### pub fn cursor_position(&self) -> [Result][22]<[PhysicalPosition][58]<[f64][56]>>

Get the cursor position relative to the top-left hand corner of the desktop.

Note that the top-left hand corner of the desktop is not necessarily the same as the screen. If the user uses a desktop with multiple monitors, the top-left hand corner of the desktop is the top-left hand corner of the main monitor on Windows and macOS or the top-left of the leftmost monitor on X11.

The coordinates can be negative if the top-left hand corner of the window is outside of the visible screen region.

[Source][89]§

### impl<R: [Runtime][6]> [WebviewWindow][11]<R>

Desktop window setters and actions.

[Source][90]

#### pub fn center(&self) -> [Result][22]<[()][23]>

Centers the window.

[Source][91]

#### pub fn request_user_attention( &self, request_type: [Option][33]<[UserAttentionType][92]>, ) -> [Result][22]<[()][23]>

Requests user attention to the window, this has no effect if the application is already focused. How requesting for user attention manifests is platform dependent, see `UserAttentionType` for details.

Providing `None` will unset the request for user attention. Unsetting the request for user attention might not be done automatically by the WM when the window receives input.

###### §Platform-specific

  * **macOS:** `None` has no effect.
  * **Linux:** Urgency levels have the same effect.



[Source][93]

#### pub fn set_resizable(&self, resizable: [bool][49]) -> [Result][22]<[()][23]>

Determines if this window should be resizable. When resizable is set to false, native window’s maximize button is automatically disabled.

[Source][94]

#### pub fn set_enabled(&self, enabled: [bool][49]) -> [Result][22]<[()][23]>

Enable or disable the window.

[Source][95]

#### pub fn set_maximizable(&self, maximizable: [bool][49]) -> [Result][22]<[()][23]>

Determines if this window’s native maximize button should be enabled. If resizable is set to false, this setting is ignored.

###### §Platform-specific

  * **macOS:** Disables the “zoom” button in the window titlebar, which is also used to enter fullscreen mode.
  * **Linux / iOS / Android:** Unsupported.



[Source][96]

#### pub fn set_minimizable(&self, minimizable: [bool][49]) -> [Result][22]<[()][23]>

Determines if this window’s native minimize button should be enabled.

###### §Platform-specific

  * **Linux / iOS / Android:** Unsupported.



[Source][97]

#### pub fn set_closable(&self, closable: [bool][49]) -> [Result][22]<[()][23]>

Determines if this window’s native close button should be enabled.

###### §Platform-specific

  * **Linux:** “GTK+ will do its best to convince the window manager not to show a close button. Depending on the system, this function may not have any effect when called on a window that is already visible”
  * **iOS / Android:** Unsupported.



[Source][98]

#### pub fn set_title(&self, title: &[str][25]) -> [Result][22]<[()][23]>

Set this window’s title.

[Source][99]

#### pub fn maximize(&self) -> [Result][22]<[()][23]>

Maximizes this window.

[Source][100]

#### pub fn unmaximize(&self) -> [Result][22]<[()][23]>

Un-maximizes this window.

[Source][101]

#### pub fn minimize(&self) -> [Result][22]<[()][23]>

Minimizes this window.

[Source][102]

#### pub fn unminimize(&self) -> [Result][22]<[()][23]>

Un-minimizes this window.

[Source][103]

#### pub fn show(&self) -> [Result][22]<[()][23]>

Show this window.

[Source][104]

#### pub fn hide(&self) -> [Result][22]<[()][23]>

Hide this window.

[Source][105]

#### pub fn close(&self) -> [Result][22]<[()][23]>

Closes this window. It emits [`crate::RunEvent::CloseRequested`] first like a user-initiated close request so you can intercept it.

[Source][106]

#### pub fn destroy(&self) -> [Result][22]<[()][23]>

Destroys this window. Similar to [`Self::close`][107] but does not emit any events and force close the window instead.

[Source][108]

#### pub fn set_decorations(&self, decorations: [bool][49]) -> [Result][22]<[()][23]>

Determines if this window should be [decorated][109].

[Source][110]

#### pub fn set_shadow(&self, enable: [bool][49]) -> [Result][22]<[()][23]>

Determines if this window should have shadow.

###### §Platform-specific

  * **Windows:**
    * `false` has no effect on decorated window, shadow are always ON.
    * `true` will make undecorated window have a 1px white border, and on Windows 11, it will have a rounded corners.
  * **Linux:** Unsupported.



[Source][111]

#### pub fn set_effects<E: [Into][14]<[Option][33]<WindowEffectsConfig>>>( &self, effects: E, ) -> [Result][22]<[()][23]>

Sets window effects, pass [`None`][112] to clear any effects applied if possible.

Requires the window to be transparent.

See [`crate::window::EffectsBuilder`][113] for a convenient builder for [`crate::utils::config::WindowEffectsConfig`].
[code] 
    use tauri::{Manager, window::{Color, Effect, EffectState, EffectsBuilder}};
    tauri::Builder::default()
      .setup(|app| {
        let webview_window = app.get_webview_window("main").unwrap();
        webview_window.set_effects(
          EffectsBuilder::new()
            .effect(Effect::Popover)
            .state(EffectState::Active)
            .radius(5.)
            .color(Color(0, 0, 0, 255))
            .build(),
        )?;
        Ok(())
      });
[/code]

###### §Platform-specific:

  * **Windows** : If using decorations or shadows, you may want to try this workaround <https://github.com/tauri-apps/tao/issues/72#issuecomment-975607891>
  * **Linux** : Unsupported



[Source][114]

#### pub fn set_always_on_bottom(&self, always_on_bottom: [bool][49]) -> [Result][22]<[()][23]>

Determines if this window should always be below other windows.

[Source][115]

#### pub fn set_always_on_top(&self, always_on_top: [bool][49]) -> [Result][22]<[()][23]>

Determines if this window should always be on top of other windows.

[Source][116]

#### pub fn set_visible_on_all_workspaces( &self, visible_on_all_workspaces: [bool][49], ) -> [Result][22]<[()][23]>

Sets whether the window should be visible on all workspaces or virtual desktops.

[Source][117]

#### pub fn set_content_protected(&self, protected: [bool][49]) -> [Result][22]<[()][23]>

Prevents the window contents from being captured by other apps.

[Source][118]

#### pub fn set_size<S: [Into][14]<[Size][119]>>(&self, size: S) -> [Result][22]<[()][23]>

Resizes this window.

[Source][120]

#### pub fn set_min_size<S: [Into][14]<[Size][119]>>(&self, size: [Option][33]<S>) -> [Result][22]<[()][23]>

Sets this window’s minimum inner size.

[Source][121]

#### pub fn set_max_size<S: [Into][14]<[Size][119]>>(&self, size: [Option][33]<S>) -> [Result][22]<[()][23]>

Sets this window’s maximum inner size.

[Source][122]

#### pub fn set_size_constraints( &self, constraints: [WindowSizeConstraints][123], ) -> [Result][22]<[()][23]>

Sets this window’s minimum inner width.

[Source][124]

#### pub fn set_position<Pos: [Into][14]<[Position][53]>>(&self, position: Pos) -> [Result][22]<[()][23]>

Sets this window’s position.

[Source][125]

#### pub fn set_fullscreen(&self, fullscreen: [bool][49]) -> [Result][22]<[()][23]>

Determines if this window should be fullscreen.

[Source][126]

#### pub fn set_simple_fullscreen(&self, enable: [bool][49]) -> [Result][22]<[()][23]>

Toggles a fullscreen mode that doesn’t require a new macOS space. Returns a boolean indicating whether the transition was successful (this won’t work if the window was already in the native fullscreen).

This is how fullscreen used to work on macOS in versions before Lion. And allows the user to have a fullscreen window without using another space or taking control over the entire monitor.

###### §Platform-specific

  * **macOS:** Uses native simple fullscreen mode.
  * **Other platforms:** Falls back to [`Self::set_fullscreen`][127].



[Source][128]

#### pub fn set_focus(&self) -> [Result][22]<[()][23]>

Bring the window to front and focus.

[Source][129]

#### pub fn set_focusable(&self, focusable: [bool][49]) -> [Result][22]<[()][23]>

Sets whether the window can be focused.

###### §Platform-specific

  * **macOS** : If the window is already focused, it is not possible to unfocus it after calling `set_focusable(false)`. In this case, you might consider calling [`Window::set_focus`][130] but it will move the window to the back i.e. at the bottom in terms of z-order.



[Source][131]

#### pub fn set_icon(&self, icon: [Image][132]<'_>) -> [Result][22]<[()][23]>

Sets this window’ icon.

[Source][133]

#### pub fn set_background_color(&self, color: [Option][33]<[Color][134]>) -> [Result][22]<[()][23]>

Sets the window background color.

###### §Platform-specific:

  * **iOS / Android:** Unsupported.
  * **macOS** : Not implemented for the webview layer..
  * **Windows** : 
    * alpha channel is ignored for the window layer.
    * On Windows 7, transparency is not supported and the alpha value will be ignored for the webview layer..
    * On Windows 8 and newer: translucent colors are not supported so any alpha value other than `0` will be replaced by `255` for the webview layer.



[Source][135]

#### pub fn set_skip_taskbar(&self, skip: [bool][49]) -> [Result][22]<[()][23]>

Whether to hide the window icon from the taskbar or not.

###### §Platform-specific

  * **macOS:** Unsupported.



[Source][136]

#### pub fn set_cursor_grab(&self, grab: [bool][49]) -> [Result][22]<[()][23]>

Grabs the cursor, preventing it from leaving the window.

There’s no guarantee that the cursor will be hidden. You should hide it by yourself if you want so.

###### §Platform-specific

  * **Linux:** Unsupported.
  * **macOS:** This locks the cursor in a fixed location, which looks visually awkward.



[Source][137]

#### pub fn set_cursor_visible(&self, visible: [bool][49]) -> [Result][22]<[()][23]>

Modifies the cursor’s visibility.

If `false`, this will hide the cursor. If `true`, this will show the cursor.

###### §Platform-specific

  * **Windows:** The cursor is only hidden within the confines of the window.
  * **macOS:** The cursor is hidden as long as the window has input focus, even if the cursor is outside of the window.



[Source][138]

#### pub fn set_cursor_icon(&self, icon: [CursorIcon][139]) -> [Result][22]<[()][23]>

Modifies the cursor icon of the window.

[Source][140]

#### pub fn set_cursor_position<Pos: [Into][14]<[Position][53]>>( &self, position: Pos, ) -> [Result][22]<[()][23]>

Changes the position of the cursor in window coordinates.

[Source][141]

#### pub fn set_ignore_cursor_events(&self, ignore: [bool][49]) -> [Result][22]<[()][23]>

Ignores the window cursor events.

[Source][142]

#### pub fn start_dragging(&self) -> [Result][22]<[()][23]>

Starts dragging the window.

[Source][143]

#### pub fn set_overlay_icon(&self, icon: [Option][33]<[Image][132]<'_>>) -> [Result][22]<[()][23]>

Sets the overlay icon on the taskbar **Windows only**. Using `None` will remove the icon

The overlay icon can be unique for each window.

[Source][144]

#### pub fn set_badge_count(&self, count: [Option][33]<[i64][145]>) -> [Result][22]<[()][23]>

Sets the taskbar badge count. Using `0` or `None` will remove the badge

###### §Platform-specific

  * **Windows:** Unsupported, use [`WebviewWindow::set_overlay_icon`][146] instead.
  * **iOS:** iOS expects i32, the value will be clamped to i32::MIN, i32::MAX.
  * **Android:** Unsupported.



[Source][147]

#### pub fn set_progress_bar(&self, progress_state: [ProgressBarState][148]) -> [Result][22]<[()][23]>

Sets the taskbar progress state.

###### §Platform-specific

  * **Linux / macOS** : Progress bar is app-wide and not specific to this window.
  * **Linux** : Only supported desktop environments with `libunity` (e.g. GNOME).
  * **iOS / Android:** Unsupported.



[Source][149]

#### pub fn set_title_bar_style(&self, style: [TitleBarStyle][150]) -> [Result][22]<[()][23]>

Sets the title bar style. **macOS only**.

[Source][151]

#### pub fn set_theme(&self, theme: [Option][33]<[Theme][86]>) -> [Result][22]<[()][23]>

Sets the theme for this window.

###### §Platform-specific

  * **Linux / macOS** : Theme is app-wide and not specific to this window.
  * **iOS / Android:** Unsupported.



[Source][152]§

### impl<R: [Runtime][6]> [WebviewWindow][11]<R>

Desktop webview setters and actions.

[Source][153]

#### pub fn print(&self) -> [Result][22]<[()][23]>

Opens the dialog to prints the contents of the webview. Currently only supported on macOS on `wry`. `window.print()` works on all platforms.

[Source][154]§

### impl<R: [Runtime][6]> [WebviewWindow][11]<R>

Webview APIs.

[Source][155]

#### pub fn with_webview<F: [FnOnce][20]([PlatformWebview][156]) + [Send][21] \+ 'static>( &self, f: F, ) -> [Result][22]<[()][23]>

Executes a closure, providing it with the webview handle that is specific to the current platform.

The closure is executed on the main thread.

Note that `webview2-com`, `webkit2gtk`, `objc2_web_kit` and similar crates may be updated in minor releases of Tauri. Therefore it’s recommended to pin Tauri to at least a minor version when you’re using `with_webview`.

##### §Examples
[code] 
    use tauri::Manager;
    
    fn main() {
      tauri::Builder::default()
        .setup(|app| {
          let main_webview = app.get_webview_window("main").unwrap();
          main_webview.with_webview(|webview| {
            #[cfg(target_os = "linux")]
            {
              // see <https://docs.rs/webkit2gtk/2.0.0/webkit2gtk/struct.WebView.html>
              // and <https://docs.rs/webkit2gtk/2.0.0/webkit2gtk/trait.WebViewExt.html>
              use webkit2gtk::WebViewExt;
              webview.inner().set_zoom_level(4.);
            }
    
            #[cfg(windows)]
            unsafe {
              // see <https://docs.rs/webview2-com/0.19.1/webview2_com/Microsoft/Web/WebView2/Win32/struct.ICoreWebView2Controller.html>
              webview.controller().SetZoomFactor(4.).unwrap();
            }
    
            #[cfg(target_os = "macos")]
            unsafe {
              let view: &objc2_web_kit::WKWebView = &*webview.inner().cast();
              let controller: &objc2_web_kit::WKUserContentController = &*webview.controller().cast();
              let window: &objc2_app_kit::NSWindow = &*webview.ns_window().cast();
    
              view.setPageZoom(4.);
              controller.removeAllUserScripts();
              let bg_color = objc2_app_kit::NSColor::colorWithDeviceRed_green_blue_alpha(0.5, 0.2, 0.4, 1.);
              window.setBackgroundColor(Some(&bg_color));
            }
    
            #[cfg(target_os = "android")]
            {
              use jni::objects::JValue;
              webview.jni_handle().exec(|env, _, webview| {
                env.call_method(webview, "zoomBy", "(F)V", &[JValue::Float(4.)]).unwrap();
              })
            }
          });
          Ok(())
      });
    }
[/code]

[Source][157]

#### pub fn url(&self) -> [Result][22]<[Url][158]>

Returns the current url of the webview.

[Source][159]

#### pub fn navigate(&self, url: [Url][158]) -> [Result][22]<[()][23]>

Navigates the webview to the defined url.

[Source][160]

#### pub fn reload(&self) -> [Result][22]<[()][23]>

Reloads the current page.

[Source][161]

#### pub fn on_message( self, request: [InvokeRequest][162], responder: [Box][163]<[OwnedInvokeResponder][164]<R>>, )

Handles this window receiving an [`crate::webview::InvokeRequest`][162].

[Source][165]

#### pub fn eval(&self, js: impl [Into][14]<[String][15]>) -> [Result][22]<[()][23]>

Evaluates JavaScript on this window.

[Source][166]

#### pub fn open_devtools(&self)

Opens the developer tools window (Web Inspector). The devtools is only enabled on debug builds or with the `devtools` feature flag.

###### §Platform-specific

  * **macOS:** Only supported on macOS 10.15+. This is a private API on macOS, so you cannot use this if your application will be published on the App Store.



##### §Examples
[code] 
    use tauri::Manager;
    tauri::Builder::default()
      .setup(|app| {
        #[cfg(debug_assertions)]
        app.get_webview_window("main").unwrap().open_devtools();
        Ok(())
      });
[/code]

[Source][167]

#### pub fn close_devtools(&self)

Closes the developer tools window (Web Inspector). The devtools is only enabled on debug builds or with the `devtools` feature flag.

###### §Platform-specific

  * **macOS:** Only supported on macOS 10.15+. This is a private API on macOS, so you cannot use this if your application will be published on the App Store.
  * **Windows:** Unsupported.



##### §Examples
[code] 
    use tauri::Manager;
    tauri::Builder::default()
      .setup(|app| {
        #[cfg(debug_assertions)]
        {
          let webview = app.get_webview_window("main").unwrap();
          webview.open_devtools();
          std::thread::spawn(move || {
            std::thread::sleep(std::time::Duration::from_secs(10));
            webview.close_devtools();
          });
        }
        Ok(())
      });
[/code]

[Source][168]

#### pub fn is_devtools_open(&self) -> [bool][49]

Checks if the developer tools window (Web Inspector) is opened. The devtools is only enabled on debug builds or with the `devtools` feature flag.

###### §Platform-specific

  * **macOS:** Only supported on macOS 10.15+. This is a private API on macOS, so you cannot use this if your application will be published on the App Store.
  * **Windows:** Unsupported.



##### §Examples
[code] 
    use tauri::Manager;
    tauri::Builder::default()
      .setup(|app| {
        #[cfg(debug_assertions)]
        {
          let webview = app.get_webview_window("main").unwrap();
          if !webview.is_devtools_open() {
            webview.open_devtools();
          }
        }
        Ok(())
      });
[/code]

[Source][169]

#### pub fn set_zoom(&self, scale_factor: [f64][56]) -> [Result][22]<[()][23]>

Set the webview zoom level

###### §Platform-specific:

  * **Android** : Not supported.
  * **macOS** : available on macOS 11+ only.
  * **iOS** : available on iOS 14+ only.



[Source][170]

#### pub fn clear_all_browsing_data(&self) -> [Result][22]<[()][23]>

Clear all browsing data for this webview window.

[Source][171]

#### pub fn cookies_for_url(&self, url: [Url][158]) -> [Result][22]<[Vec][83]<[Cookie][172]<'static>>>

Returns all cookies in the runtime’s cookie store including HTTP-only and secure cookies.

Note that cookies will only be returned for URLs with an http or https scheme. Cookies set through javascript for local files (such as those served from the tauri://) protocol are not currently supported.

##### §Stability

See [Self::cookies][173].

##### §Known issues

See [Self::cookies][173].

[Source][174]

#### pub fn cookies(&self) -> [Result][22]<[Vec][83]<[Cookie][172]<'static>>>

Returns all cookies in the runtime’s cookie store for all URLs including HTTP-only and secure cookies.

Note that cookies will only be returned for URLs with an http or https scheme. Cookies set through javascript for local files (such as those served from the tauri://) protocol are not currently supported.

##### §Stability

The return value of this function leverages [`tauri_runtime::Cookie`][172] which re-exports the cookie crate. This dependency might receive updates in minor Tauri releases.

##### §Known issues

On Windows, this function deadlocks when used in a synchronous command or event handlers, see [the Webview2 issue][175]. You should use `async` commands and separate threads when reading cookies.

###### §Platform-specific

  * **Android** : Unsupported, always returns an empty [`Vec`][83].



[Source][176]

#### pub fn set_cookie(&self, cookie: [Cookie][172]<'_>) -> [Result][22]<[()][23]>

Set a cookie for the webview.

##### §Stability

See [Self::cookies][173].

[Source][177]

#### pub fn delete_cookie(&self, cookie: [Cookie][172]<'_>) -> [Result][22]<[()][23]>

Delete a cookie for the webview.

##### §Stability

See [Self::cookies][173].

## Trait Implementations§

[Source][178]§

### impl<R: [Runtime][6]> [AsRef][179]<[Webview][9]<R>> for [WebviewWindow][11]<R>

[Source][180]§

#### fn [as_ref][181](&self) -> &[Webview][9]<R>

Converts this type into a shared reference of the (usually inferred) input type.

[Source][182]§

### impl<R: [Runtime][6]> [Clone][183] for [WebviewWindow][11]<R>

[Source][184]§

#### fn [clone][185](&self) -> Self

Returns a duplicate of the value. [Read more][185]

1.0.0 · [Source][186]§

#### fn [clone_from][187](&mut self, source: &Self)

Performs copy-assignment from `source`. [Read more][187]

[Source][188]§

### impl<'de, R: [Runtime][6]> [CommandArg][189]<'de, R> for [WebviewWindow][11]<R>

[Source][190]§

#### fn [from_command][191](command: [CommandItem][192]<'de, R>) -> [Result][193]<Self, [InvokeError][194]>

Grabs the [`Window`][8] from the [`CommandItem`][192]. This will never fail.

[Source][195]§

### impl<R: [Debug][196] \+ [Runtime][6]> [Debug][196] for [WebviewWindow][11]<R>

[Source][195]§

#### fn [fmt][197](&self, f: &mut [Formatter][198]<'_>) -> [Result][199]

Formats the value using the given formatter. [Read more][197]

[Source][200]§

### impl<R: [Runtime][6]> [Emitter][201]<R> for [WebviewWindow][11]<R>

[Source][202]§

#### fn [emit][203]<S: [Serialize][204] \+ [Clone][183]>(&self, event: &[str][25], payload: S) -> [Result][22]<[()][23]>

Emits an event to all [targets][205]. [Read more][203]

[Source][206]§

#### fn [emit_str][207](&self, event: &[str][25], payload: [String][15]) -> [Result][22]<[()][23]>

Similar to [`Emitter::emit`][208] but the payload is json serialized.

[Source][209]§

#### fn [emit_to][210]<I, S>(&self, target: I, event: &[str][25], payload: S) -> [Result][22]<[()][23]>

where I: [Into][14]<[EventTarget][205]>, S: [Serialize][204] \+ [Clone][183],

Emits an event to all [targets][205] matching the given target. [Read more][210]

[Source][211]§

#### fn [emit_str_to][212]<I>(&self, target: I, event: &[str][25], payload: [String][15]) -> [Result][22]<[()][23]>

where I: [Into][14]<[EventTarget][205]>,

Similar to [`Emitter::emit_to`][213] but the payload is json serialized.

[Source][214]§

#### fn [emit_filter][215]<S, F>(&self, event: &[str][25], payload: S, filter: F) -> [Result][22]<[()][23]>

where S: [Serialize][204] \+ [Clone][183], F: [Fn][27](&[EventTarget][205]) -> [bool][49],

Emits an event to all [targets][205] based on the given filter. [Read more][215]

[Source][216]§

#### fn [emit_str_filter][217]<F>( &self, event: &[str][25], payload: [String][15], filter: F, ) -> [Result][22]<[()][23]>

where F: [Fn][27](&[EventTarget][205]) -> [bool][49],

Similar to [`Emitter::emit_filter`][218] but the payload is json serialized.

[Source][219]§

### impl<R: [Runtime][6]> HasDisplayHandle for [WebviewWindow][11]<R>

[Source][220]§

#### fn display_handle(&self) -> [Result][193]<DisplayHandle<'_>, HandleError>

Get a handle to the display controller of the windowing system.

[Source][221]§

### impl<R: [Runtime][6]> HasWindowHandle for [WebviewWindow][11]<R>

[Source][222]§

#### fn window_handle(&self) -> [Result][193]<WindowHandle<'_>, HandleError>

Get a handle to the window.

[Source][223]§

### impl<R: [Runtime][6]> [Listener][224]<R> for [WebviewWindow][11]<R>

[Source][225]§

#### fn [listen][226]<F>(&self, event: impl [Into][14]<[String][15]>, handler: F) -> [EventId][227]

where F: [Fn][27]([Event][228]) + [Send][21] \+ 'static,

Listen to an event on this webview window.

##### §Examples
[code] 
    use tauri::{Manager, Listener};
    
    tauri::Builder::default()
      .setup(|app| {
        let webview_window = app.get_webview_window("main").unwrap();
        webview_window.listen("component-loaded", move |event| {
          println!("window just loaded a component");
        });
    
        Ok(())
      });
[/code]

[Source][229]§

#### fn [once][230]<F>(&self, event: impl [Into][14]<[String][15]>, handler: F) -> [EventId][227]

where F: [FnOnce][20]([Event][228]) + [Send][21] \+ 'static,

Listen to an event on this window webview only once.

See [`Self::listen`][231] for more information.

[Source][232]§

#### fn [unlisten][233](&self, id: [EventId][227])

Unlisten to an event on this webview window.

##### §Examples
[code] 
    use tauri::{Manager, Listener};
    
    tauri::Builder::default()
      .setup(|app| {
        let webview_window = app.get_webview_window("main").unwrap();
        let webview_window_ = webview_window.clone();
        let handler = webview_window.listen("component-loaded", move |event| {
          println!("webview_window just loaded a component");
    
          // we no longer need to listen to the event
          // we also could have used `webview_window.once` instead
          webview_window_.unlisten(event.id());
        });
    
        // stop listening to the event when you do not need it anymore
        webview_window.unlisten(handler);
    
        Ok(())
    });
[/code]

[Source][234]§

#### fn [listen_any][235]<F>(&self, event: impl [Into][14]<[String][15]>, handler: F) -> [EventId][227]

where F: [Fn][27]([Event][228]) + [Send][21] \+ 'static,

Listen to an emitted event to any [target][205]. [Read more][235]

[Source][236]§

#### fn [once_any][237]<F>(&self, event: impl [Into][14]<[String][15]>, handler: F) -> [EventId][227]

where F: [FnOnce][20]([Event][228]) + [Send][21] \+ 'static,

Listens once to an emitted event to any [target][205] . [Read more][237]

[Source][238]§

### impl<R: [Runtime][6]> [Manager][13]<R> for [WebviewWindow][11]<R>

[Source][239]§

#### fn [resources_table][240](&self) -> [MutexGuard][241]<'_, [ResourceTable][242]>

Get a reference to the resources table of this manager.

[Source][243]§

#### fn [app_handle][244](&self) -> &[AppHandle][245]<R>

The application handle associated with this manager.

[Source][246]§

#### fn [config][247](&self) -> &[Config][248]

The [`Config`][248] the manager was created with.

[Source][249]§

#### fn [package_info][250](&self) -> &[PackageInfo][251]

The [`PackageInfo`][251] the manager was created with.

[Source][252]§

#### fn [get_webview_window][253](&self, label: &[str][25]) -> [Option][33]<[WebviewWindow][11]<R>>

Fetch a single webview window from the manager.

[Source][254]§

#### fn [webview_windows][255](&self) -> [HashMap][256]<[String][15], [WebviewWindow][11]<R>>

Fetch all managed webview windows.

[Source][257]§

#### fn [manage][258]<T>(&self, state: T) -> [bool][49]

where T: [Send][21] \+ [Sync][39] \+ 'static,

Add `state` to the state managed by the application. [Read more][258]

[Source][259]§

#### fn [unmanage][260]<T>(&self) -> [Option][33]<T>

where T: [Send][21] \+ [Sync][39] \+ 'static,

👎Deprecated since 2.3.0: This method is unsafe, since it can cause dangling references.

Removes the state managed by the application for T. Returns the state if it was actually removed. [Read more][260]

[Source][261]§

#### fn [state][262]<T>(&self) -> [State][263]<'_, T>

where T: [Send][21] \+ [Sync][39] \+ 'static,

Retrieves the managed state for the type `T`. [Read more][262]

[Source][264]§

#### fn [try_state][265]<T>(&self) -> [Option][33]<[State][263]<'_, T>>

where T: [Send][21] \+ [Sync][39] \+ 'static,

Attempts to retrieve the managed state for the type `T`. [Read more][265]

[Source][266]§

#### fn [env][267](&self) -> [Env][268]

Gets the managed [`Env`][268].

[Source][269]§

#### fn [path][270](&self) -> &[PathResolver][271]<R>

The path resolver.

[Source][272]§

#### fn [add_capability][273](&self, capability: impl [RuntimeCapability][274]) -> [Result][22]<[()][23]>

Adds a capability to the app. [Read more][273]

[Source][275]§

### impl<R: [Runtime][6]> [PartialEq][276] for [WebviewWindow][11]<R>

[Source][277]§

#### fn [eq][278](&self, other: &Self) -> [bool][49]

Only use the [`Webview`][9]’s label to compare equality.

1.0.0 · [Source][279]§

#### fn [ne][280](&self, other: [&Rhs][16]) -> [bool][49]

Tests for `!=`. The default implementation is almost always sufficient, and should not be overridden without very good reason.

[Source][281]§

### impl<R: [Runtime][6]> [Eq][282] for [WebviewWindow][11]<R>

## Auto Trait Implementations§

§

### impl<R> [Freeze][283] for [WebviewWindow][11]<R>

where <R as Runtime<[EventLoopMessage][284]>>::WindowDispatcher: [Freeze][283], <R as Runtime<[EventLoopMessage][284]>>::Handle: [Freeze][283], <R as Runtime<[EventLoopMessage][284]>>::WebviewDispatcher: [Freeze][283],

§

### impl<R = Wry<[EventLoopMessage][284]>> ![RefUnwindSafe][285] for [WebviewWindow][11]<R>

§

### impl<R> [Send][21] for [WebviewWindow][11]<R>

§

### impl<R> [Sync][39] for [WebviewWindow][11]<R>

§

### impl<R> [Unpin][286] for [WebviewWindow][11]<R>

where <R as Runtime<[EventLoopMessage][284]>>::WindowDispatcher: [Unpin][286], <R as Runtime<[EventLoopMessage][284]>>::Handle: [Unpin][286], <R as Runtime<[EventLoopMessage][284]>>::WebviewDispatcher: [Unpin][286],

§

### impl<R = Wry<[EventLoopMessage][284]>> ![UnwindSafe][287] for [WebviewWindow][11]<R>

## Blanket Implementations§

[Source][288]§

### impl<T> [Any][289] for T

where T: 'static + ?[Sized][290],

[Source][291]§

#### fn [type_id][292](&self) -> [TypeId][293]

Gets the `TypeId` of `self`. [Read more][292]

[Source][294]§

### impl<T> [Borrow][295]<T> for T

where T: ?[Sized][290],

[Source][296]§

#### fn [borrow][297](&self) -> [&T][16]

Immutably borrows from an owned value. [Read more][297]

[Source][298]§

### impl<T> [BorrowMut][299]<T> for T

where T: ?[Sized][290],

[Source][300]§

#### fn [borrow_mut][301](&mut self) -> [&mut T][16]

Mutably borrows from an owned value. [Read more][301]

[Source][302]§

### impl<T> [CloneToUninit][303] for T

where T: [Clone][183],

[Source][304]§

#### unsafe fn [clone_to_uninit][305](&self, dest: [*mut ][306][u8][307])

🔬This is a nightly-only experimental API. (`clone_to_uninit`)

Performs copy-assignment from `self` to `dest`. [Read more][305]

[Source][308]§

### impl<T> [From][309]<T> for T

[Source][310]§

#### fn [from][311](t: T) -> T

Returns the argument unchanged.

§

### impl<T> HasRawDisplayHandle for T

where T: HasDisplayHandle + ?[Sized][290],

§

#### fn raw_display_handle(&self) -> [Result][193]<RawDisplayHandle, HandleError>

👎Deprecated: Use `HasDisplayHandle` instead

§

### impl<T> HasRawWindowHandle for T

where T: HasWindowHandle + ?[Sized][290],

§

#### fn raw_window_handle(&self) -> [Result][193]<RawWindowHandle, HandleError>

👎Deprecated: Use `HasWindowHandle` instead

[Source][312]§

### impl<T, U> [Into][14]<U> for T

where U: [From][309]<T>,

[Source][313]§

#### fn [into][314](self) -> U

Calls `U::from(self)`.

That is, this conversion is whatever the implementation of `[From][309]<T> for U` chooses to do.

[Source][315]§

### impl<T> [ToOwned][316] for T

where T: [Clone][183],

[Source][317]§

#### type [Owned][318] = T

The resulting type after obtaining ownership.

[Source][319]§

#### fn [to_owned][320](&self) -> T

Creates owned data from borrowed data, usually by cloning. [Read more][320]

[Source][321]§

#### fn [clone_into][322](&self, target: [&mut T][16])

Uses borrowed data to replace owned data, usually by cloning. [Read more][322]

[Source][323]§

### impl<T, U> [TryFrom][324]<U> for T

where U: [Into][14]<T>,

[Source][325]§

#### type [Error][326] = [Infallible][327]

The type returned in the event of a conversion error.

[Source][328]§

#### fn [try_from][329](value: U) -> [Result][193]<T, <T as [TryFrom][324]<U>>::[Error][330]>

Performs the conversion.

[Source][331]§

### impl<T, U> [TryInto][332]<U> for T

where U: [TryFrom][324]<T>,

[Source][333]§

#### type [Error][334] = <U as [TryFrom][324]<T>>::[Error][330]

The type returned in the event of a conversion error.

[Source][335]§

#### fn [try_into][336](self) -> [Result][193]<U, <U as [TryFrom][324]<T>>::[Error][330]>

Performs the conversion.

§

### impl<T> UserEvent for T

where T: [Debug][196] \+ [Clone][183] \+ [Send][21] \+ 'static,

   [1]: https://github.com/tauri-apps/tauri/raw/dev/.github/icon.png
   [2]: ../../tauri/index.html
   [3]: index.html
   [4]: ../index.html
   [5]: ../../src/tauri/webview/webview_window.rs.html#1382-1385
   [6]: ../trait.Runtime.html (trait tauri::Runtime)
   [7]: ../type.Wry.html (type tauri::Wry)
   [8]: ../window/struct.Window.html (struct tauri::window::Window)
   [9]: struct.Webview.html (struct tauri::webview::Webview)
   [10]: ../../src/tauri/webview/webview_window.rs.html#1442-1519
   [11]: struct.WebviewWindow.html (struct tauri::webview::WebviewWindow)
   [12]: ../../src/tauri/webview/webview_window.rs.html#1446-1452
   [13]: ../trait.Manager.html (trait tauri::Manager)
   [14]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html (trait core::convert::Into)
   [15]: https://doc.rust-lang.org/1.94.1/alloc/string/struct.String.html (struct alloc::string::String)
   [16]: https://doc.rust-lang.org/1.94.1/std/primitive.reference.html
   [17]: ../enum.WebviewUrl.html (enum tauri::WebviewUrl)
   [18]: struct.WebviewWindowBuilder.html (struct tauri::webview::WebviewWindowBuilder)
   [19]: ../../src/tauri/webview/webview_window.rs.html#1455-1457
   [20]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.FnOnce.html (trait core::ops::function::FnOnce)
   [21]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Send.html (trait core::marker::Send)
   [22]: ../type.Result.html (type tauri::Result)
   [23]: https://doc.rust-lang.org/1.94.1/std/primitive.unit.html
   [24]: ../../src/tauri/webview/webview_window.rs.html#1460-1462
   [25]: https://doc.rust-lang.org/1.94.1/std/primitive.str.html
   [26]: ../../src/tauri/webview/webview_window.rs.html#1465-1467
   [27]: https://doc.rust-lang.org/1.94.1/core/ops/function/trait.Fn.html (trait core::ops::function::Fn)
   [28]: ../enum.WindowEvent.html (enum tauri::WindowEvent)
   [29]: ../../src/tauri/webview/webview_window.rs.html#1470-1472
   [30]: ../enum.WebviewEvent.html (enum tauri::WebviewEvent)
   [31]: ../../src/tauri/webview/webview_window.rs.html#1512-1518
   [32]: ../ipc/trait.ScopeObject.html (trait tauri::ipc::ScopeObject)
   [33]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html (enum core::option::Option)
   [34]: struct.ResolvedScope.html (struct tauri::webview::ResolvedScope)
   [35]: ../ipc/struct.CommandScope.html (struct tauri::ipc::CommandScope)
   [36]: ../../src/tauri/webview/webview_window.rs.html#1523-1624
   [37]: ../../src/tauri/webview/webview_window.rs.html#1561-1566
   [38]: ../menu/struct.MenuEvent.html (struct tauri::menu::MenuEvent)
   [39]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sync.html (trait core::marker::Sync)
   [40]: ../../src/tauri/webview/webview_window.rs.html#1569-1571
   [41]: ../menu/struct.Menu.html (struct tauri::menu::Menu)
   [42]: ../../src/tauri/webview/webview_window.rs.html#1580-1582
   [43]: ../struct.AppHandle.html#method.set_menu (method tauri::AppHandle::set_menu)
   [44]: ../../src/tauri/webview/webview_window.rs.html#1590-1592
   [45]: ../struct.AppHandle.html#method.remove_menu (method tauri::AppHandle::remove_menu)
   [46]: ../../src/tauri/webview/webview_window.rs.html#1595-1597
   [47]: ../../src/tauri/webview/webview_window.rs.html#1600-1602
   [48]: ../../src/tauri/webview/webview_window.rs.html#1605-1607
   [49]: https://doc.rust-lang.org/1.94.1/std/primitive.bool.html
   [50]: ../../src/tauri/webview/webview_window.rs.html#1610-1612
   [51]: ../menu/trait.ContextMenu.html (trait tauri::menu::ContextMenu)
   [52]: ../../src/tauri/webview/webview_window.rs.html#1617-1623
   [53]: ../enum.Position.html (enum tauri::Position)
   [54]: ../../src/tauri/webview/webview_window.rs.html#1627-1816
   [55]: ../../src/tauri/webview/webview_window.rs.html#1629-1631
   [56]: https://doc.rust-lang.org/1.94.1/std/primitive.f64.html
   [57]: ../../src/tauri/webview/webview_window.rs.html#1634-1636
   [58]: ../struct.PhysicalPosition.html (struct tauri::PhysicalPosition)
   [59]: https://doc.rust-lang.org/1.94.1/std/primitive.i32.html
   [60]: ../../src/tauri/webview/webview_window.rs.html#1639-1641
   [61]: ../../src/tauri/webview/webview_window.rs.html#1646-1648
   [62]: ../struct.PhysicalSize.html (struct tauri::PhysicalSize)
   [63]: https://doc.rust-lang.org/1.94.1/std/primitive.u32.html
   [64]: ../../src/tauri/webview/webview_window.rs.html#1653-1655
   [65]: ../../src/tauri/webview/webview_window.rs.html#1658-1660
   [66]: ../../src/tauri/webview/webview_window.rs.html#1663-1665
   [67]: ../../src/tauri/webview/webview_window.rs.html#1668-1670
   [68]: ../../src/tauri/webview/webview_window.rs.html#1673-1675
   [69]: ../../src/tauri/webview/webview_window.rs.html#1678-1680
   [70]: ../../src/tauri/webview/webview_window.rs.html#1683-1685
   [71]: ../../src/tauri/webview/webview_window.rs.html#1688-1690
   [72]: ../../src/tauri/webview/webview_window.rs.html#1697-1699
   [73]: ../../src/tauri/webview/webview_window.rs.html#1706-1708
   [74]: ../../src/tauri/webview/webview_window.rs.html#1715-1717
   [75]: ../../src/tauri/webview/webview_window.rs.html#1724-1726
   [76]: ../../src/tauri/webview/webview_window.rs.html#1729-1731
   [77]: ../../src/tauri/webview/webview_window.rs.html#1734-1736
   [78]: ../../src/tauri/webview/webview_window.rs.html#1741-1743
   [79]: ../window/struct.Monitor.html (struct tauri::window::Monitor)
   [80]: ../../src/tauri/webview/webview_window.rs.html#1748-1750
   [81]: ../../src/tauri/webview/webview_window.rs.html#1753-1755
   [82]: ../../src/tauri/webview/webview_window.rs.html#1758-1760
   [83]: https://doc.rust-lang.org/1.94.1/alloc/vec/struct.Vec.html (struct alloc::vec::Vec)
   [84]: ../../src/tauri/webview/webview_window.rs.html#1776-1778
   [85]: ../../src/tauri/webview/webview_window.rs.html#1813-1815
   [86]: ../enum.Theme.html (enum tauri::Theme)
   [87]: ../../src/tauri/webview/webview_window.rs.html#1820-1832
   [88]: ../../src/tauri/webview/webview_window.rs.html#1829-1831
   [89]: ../../src/tauri/webview/webview_window.rs.html#1836-2218
   [90]: ../../src/tauri/webview/webview_window.rs.html#1838-1840
   [91]: ../../src/tauri/webview/webview_window.rs.html#1853-1858
   [92]: ../enum.UserAttentionType.html (enum tauri::UserAttentionType)
   [93]: ../../src/tauri/webview/webview_window.rs.html#1862-1864
   [94]: ../../src/tauri/webview/webview_window.rs.html#1867-1869
   [95]: ../../src/tauri/webview/webview_window.rs.html#1878-1880
   [96]: ../../src/tauri/webview/webview_window.rs.html#1887-1889
   [97]: ../../src/tauri/webview/webview_window.rs.html#1898-1900
   [98]: ../../src/tauri/webview/webview_window.rs.html#1903-1905
   [99]: ../../src/tauri/webview/webview_window.rs.html#1908-1910
   [100]: ../../src/tauri/webview/webview_window.rs.html#1913-1915
   [101]: ../../src/tauri/webview/webview_window.rs.html#1918-1920
   [102]: ../../src/tauri/webview/webview_window.rs.html#1923-1925
   [103]: ../../src/tauri/webview/webview_window.rs.html#1928-1930
   [104]: ../../src/tauri/webview/webview_window.rs.html#1933-1935
   [105]: ../../src/tauri/webview/webview_window.rs.html#1938-1940
   [106]: ../../src/tauri/webview/webview_window.rs.html#1943-1945
   [107]: struct.WebviewWindow.html#method.close (method tauri::webview::WebviewWindow::close)
   [108]: ../../src/tauri/webview/webview_window.rs.html#1950-1952
   [109]: https://en.wikipedia.org/wiki/Window_(computing)#Window_decoration
   [110]: ../../src/tauri/webview/webview_window.rs.html#1963-1965
   [111]: ../../src/tauri/webview/webview_window.rs.html#1995-2000
   [112]: https://doc.rust-lang.org/1.94.1/core/option/enum.Option.html#variant.None (variant core::option::Option::None)
   [113]: ../window/struct.EffectsBuilder.html (struct tauri::window::EffectsBuilder)
   [114]: ../../src/tauri/webview/webview_window.rs.html#2003-2005
   [115]: ../../src/tauri/webview/webview_window.rs.html#2008-2010
   [116]: ../../src/tauri/webview/webview_window.rs.html#2013-2020
   [117]: ../../src/tauri/webview/webview_window.rs.html#2023-2025
   [118]: ../../src/tauri/webview/webview_window.rs.html#2028-2030
   [119]: ../enum.Size.html (enum tauri::Size)
   [120]: ../../src/tauri/webview/webview_window.rs.html#2033-2035
   [121]: ../../src/tauri/webview/webview_window.rs.html#2038-2040
   [122]: ../../src/tauri/webview/webview_window.rs.html#2043-2048
   [123]: ../struct.WindowSizeConstraints.html (struct tauri::WindowSizeConstraints)
   [124]: ../../src/tauri/webview/webview_window.rs.html#2051-2053
   [125]: ../../src/tauri/webview/webview_window.rs.html#2056-2058
   [126]: ../../src/tauri/webview/webview_window.rs.html#2070-2072
   [127]: struct.WebviewWindow.html#method.set_fullscreen (method tauri::webview::WebviewWindow::set_fullscreen)
   [128]: ../../src/tauri/webview/webview_window.rs.html#2075-2077
   [129]: ../../src/tauri/webview/webview_window.rs.html#2085-2087
   [130]: ../window/struct.Window.html#method.set_focus (method tauri::window::Window::set_focus)
   [131]: ../../src/tauri/webview/webview_window.rs.html#2090-2092
   [132]: ../image/struct.Image.html (struct tauri::image::Image)
   [133]: ../../src/tauri/webview/webview_window.rs.html#2104-2107
   [134]: struct.Color.html (struct tauri::webview::Color)
   [135]: ../../src/tauri/webview/webview_window.rs.html#2114-2116
   [136]: ../../src/tauri/webview/webview_window.rs.html#2127-2129
   [137]: ../../src/tauri/webview/webview_window.rs.html#2140-2142
   [138]: ../../src/tauri/webview/webview_window.rs.html#2145-2147
   [139]: ../enum.CursorIcon.html (enum tauri::CursorIcon)
   [140]: ../../src/tauri/webview/webview_window.rs.html#2150-2152
   [141]: ../../src/tauri/webview/webview_window.rs.html#2155-2157
   [142]: ../../src/tauri/webview/webview_window.rs.html#2160-2162
   [143]: ../../src/tauri/webview/webview_window.rs.html#2169-2171
   [144]: ../../src/tauri/webview/webview_window.rs.html#2179-2181
   [145]: https://doc.rust-lang.org/1.94.1/std/primitive.i64.html
   [146]: struct.WebviewWindow.html#method.set_overlay_icon (method tauri::webview::WebviewWindow::set_overlay_icon)
   [147]: ../../src/tauri/webview/webview_window.rs.html#2197-2202
   [148]: ../window/struct.ProgressBarState.html (struct tauri::window::ProgressBarState)
   [149]: ../../src/tauri/webview/webview_window.rs.html#2205-2207
   [150]: ../enum.TitleBarStyle.html (enum tauri::TitleBarStyle)
   [151]: ../../src/tauri/webview/webview_window.rs.html#2215-2217
   [152]: ../../src/tauri/webview/webview_window.rs.html#2222-2229
   [153]: ../../src/tauri/webview/webview_window.rs.html#2226-2228
   [154]: ../../src/tauri/webview/webview_window.rs.html#2232-2491
   [155]: ../../src/tauri/webview/webview_window.rs.html#2291-2296
   [156]: struct.PlatformWebview.html (struct tauri::webview::PlatformWebview)
   [157]: ../../src/tauri/webview/webview_window.rs.html#2299-2301
   [158]: ../struct.Url.html (struct tauri::Url)
   [159]: ../../src/tauri/webview/webview_window.rs.html#2304-2306
   [160]: ../../src/tauri/webview/webview_window.rs.html#2309-2311
   [161]: ../../src/tauri/webview/webview_window.rs.html#2314-2320
   [162]: struct.InvokeRequest.html (struct tauri::webview::InvokeRequest)
   [163]: https://doc.rust-lang.org/1.94.1/alloc/boxed/struct.Box.html (struct alloc::boxed::Box)
   [164]: ../ipc/type.OwnedInvokeResponder.html (type tauri::ipc::OwnedInvokeResponder)
   [165]: ../../src/tauri/webview/webview_window.rs.html#2323-2325
   [166]: ../../src/tauri/webview/webview_window.rs.html#2348-2350
   [167]: ../../src/tauri/webview/webview_window.rs.html#2381-2383
   [168]: ../../src/tauri/webview/webview_window.rs.html#2412-2414
   [169]: ../../src/tauri/webview/webview_window.rs.html#2423-2425
   [170]: ../../src/tauri/webview/webview_window.rs.html#2428-2430
   [171]: ../../src/tauri/webview/webview_window.rs.html#2445-2447
   [172]: struct.Cookie.html (struct tauri::webview::Cookie)
   [173]: struct.WebviewWindow.html#method.cookies (method tauri::webview::WebviewWindow::cookies)
   [174]: ../../src/tauri/webview/webview_window.rs.html#2470-2472
   [175]: https://github.com/tauri-apps/wry/issues/583
   [176]: ../../src/tauri/webview/webview_window.rs.html#2479-2481
   [177]: ../../src/tauri/webview/webview_window.rs.html#2488-2490
   [178]: ../../src/tauri/webview/webview_window.rs.html#1387-1391
   [179]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html (trait core::convert::AsRef)
   [180]: ../../src/tauri/webview/webview_window.rs.html#1388-1390
   [181]: https://doc.rust-lang.org/1.94.1/core/convert/trait.AsRef.html#tymethod.as_ref
   [182]: ../../src/tauri/webview/webview_window.rs.html#1393-1400
   [183]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html (trait core::clone::Clone)
   [184]: ../../src/tauri/webview/webview_window.rs.html#1394-1399
   [185]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#tymethod.clone
   [186]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#245-247
   [187]: https://doc.rust-lang.org/1.94.1/core/clone/trait.Clone.html#method.clone_from
   [188]: ../../src/tauri/webview/webview_window.rs.html#1428-1439
   [189]: ../ipc/trait.CommandArg.html (trait tauri::ipc::CommandArg)
   [190]: ../../src/tauri/webview/webview_window.rs.html#1430-1438
   [191]: ../ipc/trait.CommandArg.html#tymethod.from_command
   [192]: ../ipc/struct.CommandItem.html (struct tauri::ipc::CommandItem)
   [193]: https://doc.rust-lang.org/1.94.1/core/result/enum.Result.html (enum core::result::Result)
   [194]: ../ipc/struct.InvokeError.html (struct tauri::ipc::InvokeError)
   [195]: ../../src/tauri/webview/webview_window.rs.html#1381
   [196]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html (trait core::fmt::Debug)
   [197]: https://doc.rust-lang.org/1.94.1/core/fmt/trait.Debug.html#tymethod.fmt
   [198]: https://doc.rust-lang.org/1.94.1/core/fmt/struct.Formatter.html (struct core::fmt::Formatter)
   [199]: https://doc.rust-lang.org/1.94.1/core/fmt/type.Result.html (type core::fmt::Result)
   [200]: ../../src/tauri/webview/webview_window.rs.html#2571
   [201]: ../trait.Emitter.html (trait tauri::Emitter)
   [202]: ../../src/tauri/lib.rs.html#952-956
   [203]: ../trait.Emitter.html#method.emit
   [204]: https://docs.rs/serde_core/1.0.228/serde_core/ser/trait.Serialize.html (trait serde_core::ser::Serialize)
   [205]: ../enum.EventTarget.html (enum tauri::EventTarget)
   [206]: ../../src/tauri/lib.rs.html#959-963
   [207]: ../trait.Emitter.html#method.emit_str
   [208]: ../trait.Emitter.html#method.emit (method tauri::Emitter::emit)
   [209]: ../../src/tauri/lib.rs.html#987-995
   [210]: ../trait.Emitter.html#method.emit_to
   [211]: ../../src/tauri/lib.rs.html#998-1005
   [212]: ../trait.Emitter.html#method.emit_str_to
   [213]: ../trait.Emitter.html#method.emit_to (method tauri::Emitter::emit_to)
   [214]: ../../src/tauri/lib.rs.html#1025-1033
   [215]: ../trait.Emitter.html#method.emit_filter
   [216]: ../../src/tauri/lib.rs.html#1036-1043
   [217]: ../trait.Emitter.html#method.emit_str_filter
   [218]: ../trait.Emitter.html#method.emit_filter (method tauri::Emitter::emit_filter)
   [219]: ../../src/tauri/webview/webview_window.rs.html#1420-1426
   [220]: ../../src/tauri/webview/webview_window.rs.html#1421-1425
   [221]: ../../src/tauri/webview/webview_window.rs.html#1410-1418
   [222]: ../../src/tauri/webview/webview_window.rs.html#1411-1417
   [223]: ../../src/tauri/webview/webview_window.rs.html#2493-2569
   [224]: ../trait.Listener.html (trait tauri::Listener)
   [225]: ../../src/tauri/webview/webview_window.rs.html#2511-2523
   [226]: ../trait.Listener.html#tymethod.listen
   [227]: ../type.EventId.html (type tauri::EventId)
   [228]: ../struct.Event.html (struct tauri::Event)
   [229]: ../../src/tauri/webview/webview_window.rs.html#2528-2540
   [230]: ../trait.Listener.html#tymethod.once
   [231]: struct.WebviewWindow.html#method.listen (method tauri::webview::WebviewWindow::listen)
   [232]: ../../src/tauri/webview/webview_window.rs.html#2566-2568
   [233]: ../trait.Listener.html#tymethod.unlisten
   [234]: ../../src/tauri/lib.rs.html#916-922
   [235]: ../trait.Listener.html#method.listen_any
   [236]: ../../src/tauri/lib.rs.html#929-935
   [237]: ../trait.Listener.html#method.once_any
   [238]: ../../src/tauri/webview/webview_window.rs.html#2573-2581
   [239]: ../../src/tauri/webview/webview_window.rs.html#2574-2580
   [240]: ../trait.Manager.html#tymethod.resources_table
   [241]: https://doc.rust-lang.org/1.94.1/std/sync/poison/mutex/struct.MutexGuard.html (struct std::sync::poison::mutex::MutexGuard)
   [242]: ../struct.ResourceTable.html (struct tauri::ResourceTable)
   [243]: ../../src/tauri/lib.rs.html#532-534
   [244]: ../trait.Manager.html#method.app_handle
   [245]: ../struct.AppHandle.html (struct tauri::AppHandle)
   [246]: ../../src/tauri/lib.rs.html#537-539
   [247]: ../trait.Manager.html#method.config
   [248]: ../struct.Config.html (struct tauri::Config)
   [249]: ../../src/tauri/lib.rs.html#542-544
   [250]: ../trait.Manager.html#method.package_info
   [251]: ../struct.PackageInfo.html (struct tauri::PackageInfo)
   [252]: ../../src/tauri/lib.rs.html#582-591
   [253]: ../trait.Manager.html#method.get_webview_window
   [254]: ../../src/tauri/lib.rs.html#594-608
   [255]: ../trait.Manager.html#method.webview_windows
   [256]: https://doc.rust-lang.org/1.94.1/std/collections/hash/map/struct.HashMap.html (struct std::collections::hash::map::HashMap)
   [257]: ../../src/tauri/lib.rs.html#694-699
   [258]: ../trait.Manager.html#method.manage
   [259]: ../../src/tauri/lib.rs.html#721-727
   [260]: ../trait.Manager.html#method.unmanage
   [261]: ../../src/tauri/lib.rs.html#735-745
   [262]: ../trait.Manager.html#method.state
   [263]: ../struct.State.html (struct tauri::State)
   [264]: ../../src/tauri/lib.rs.html#750-755
   [265]: ../trait.Manager.html#method.try_state
   [266]: ../../src/tauri/lib.rs.html#761-763
   [267]: ../trait.Manager.html#method.env
   [268]: ../struct.Env.html (struct tauri::Env)
   [269]: ../../src/tauri/lib.rs.html#772-774
   [270]: ../trait.Manager.html#method.path
   [271]: ../path/struct.PathResolver.html (struct tauri::path::PathResolver)
   [272]: ../../src/tauri/lib.rs.html#819-826
   [273]: ../trait.Manager.html#method.add_capability
   [274]: ../ipc/trait.RuntimeCapability.html (trait tauri::ipc::RuntimeCapability)
   [275]: ../../src/tauri/webview/webview_window.rs.html#1403-1408
   [276]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html (trait core::cmp::PartialEq)
   [277]: ../../src/tauri/webview/webview_window.rs.html#1405-1407
   [278]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#tymethod.eq
   [279]: https://doc.rust-lang.org/1.94.1/src/core/cmp.rs.html#264
   [280]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.PartialEq.html#method.ne
   [281]: ../../src/tauri/webview/webview_window.rs.html#1402
   [282]: https://doc.rust-lang.org/1.94.1/core/cmp/trait.Eq.html (trait core::cmp::Eq)
   [283]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Freeze.html (trait core::marker::Freeze)
   [284]: ../enum.EventLoopMessage.html (enum tauri::EventLoopMessage)
   [285]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.RefUnwindSafe.html (trait core::panic::unwind_safe::RefUnwindSafe)
   [286]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Unpin.html (trait core::marker::Unpin)
   [287]: https://doc.rust-lang.org/1.94.1/core/panic/unwind_safe/trait.UnwindSafe.html (trait core::panic::unwind_safe::UnwindSafe)
   [288]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#138
   [289]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html (trait core::any::Any)
   [290]: https://doc.rust-lang.org/1.94.1/core/marker/trait.Sized.html (trait core::marker::Sized)
   [291]: https://doc.rust-lang.org/1.94.1/src/core/any.rs.html#139
   [292]: https://doc.rust-lang.org/1.94.1/core/any/trait.Any.html#tymethod.type_id
   [293]: https://doc.rust-lang.org/1.94.1/core/any/struct.TypeId.html (struct core::any::TypeId)
   [294]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#212
   [295]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html (trait core::borrow::Borrow)
   [296]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#214
   [297]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.Borrow.html#tymethod.borrow
   [298]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#221
   [299]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html (trait core::borrow::BorrowMut)
   [300]: https://doc.rust-lang.org/1.94.1/src/core/borrow.rs.html#222
   [301]: https://doc.rust-lang.org/1.94.1/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut
   [302]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#547
   [303]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html (trait core::clone::CloneToUninit)
   [304]: https://doc.rust-lang.org/1.94.1/src/core/clone.rs.html#549
   [305]: https://doc.rust-lang.org/1.94.1/core/clone/trait.CloneToUninit.html#tymethod.clone_to_uninit
   [306]: https://doc.rust-lang.org/1.94.1/std/primitive.pointer.html
   [307]: https://doc.rust-lang.org/1.94.1/std/primitive.u8.html
   [308]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#785
   [309]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html (trait core::convert::From)
   [310]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#788
   [311]: https://doc.rust-lang.org/1.94.1/core/convert/trait.From.html#tymethod.from
   [312]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#767-769
   [313]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#777
   [314]: https://doc.rust-lang.org/1.94.1/core/convert/trait.Into.html#tymethod.into
   [315]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#72-74
   [316]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html (trait alloc::borrow::ToOwned)
   [317]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#76
   [318]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#associatedtype.Owned
   [319]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#77
   [320]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#tymethod.to_owned
   [321]: https://doc.rust-lang.org/1.94.1/src/alloc/borrow.rs.html#81
   [322]: https://doc.rust-lang.org/1.94.1/alloc/borrow/trait.ToOwned.html#method.clone_into
   [323]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#827-829
   [324]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html (trait core::convert::TryFrom)
   [325]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#831
   [326]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error
   [327]: https://doc.rust-lang.org/1.94.1/core/convert/enum.Infallible.html (enum core::convert::Infallible)
   [328]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#834
   [329]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#tymethod.try_from
   [330]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryFrom.html#associatedtype.Error (type core::convert::TryFrom::Error)
   [331]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#811-813
   [332]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html (trait core::convert::TryInto)
   [333]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#815
   [334]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#associatedtype.Error
   [335]: https://doc.rust-lang.org/1.94.1/src/core/convert/mod.rs.html#818
   [336]: https://doc.rust-lang.org/1.94.1/core/convert/trait.TryInto.html#tymethod.try_into

