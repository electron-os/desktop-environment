#!/usr/bin/gjs

imports.gi.versions.Gtk = '3.0';

const Gtk = imports.gi.Gtk;
const WebKit = imports.gi.WebKit2;
const Lang = imports.lang;

Gtk.init(null);

const WebBrowser = new Lang.Class({
    Name: 'DesktopEnvironment',
    Extends: Gtk.Application,

    // Create the application itself
    _init: function () {
        this.parent({
            application_id: 'org.ElectronOS.DesktopEnvironment'
        });

        // Connect 'activate' and 'startup' signals to the callback functions
        this.connect('activate', () => () => {})
        this.connect('startup', () => this._onStartup())
    },

    // Callback function for 'startup' signal
    _onStartup: function () {
        // Build the UI
        this._buildUI();
    },

    // Build the application's UI
    _buildUI: function () {
        // Create the application window
        this._window = new Gtk.ApplicationWindow({
            application: this,
            resizable: false ,
            window_position: Gtk.WindowPosition.CENTER,
            default_height: 768,
            default_width: 1024,
            border_width: 0,
            title: ""
        });

        // Create the WebKit WebView, our window to the web
        this._webView = new WebKit.WebView();

        // Create a scrolled window to embed the WebView
        let scrolledWindow = new Gtk.ScrolledWindow({
            hscrollbar_policy: Gtk.PolicyType.AUTOMATIC,
            vscrollbar_policy: Gtk.PolicyType.AUTOMATIC
        });
        scrolledWindow.add(this._webView);

        // Create a box to organize everything in
        let box = new Gtk.Box({
            orientation: Gtk.Orientation.VERTICAL,
            homogeneous: false,
            spacing: 0
        });

        box.pack_start(scrolledWindow, true, true, 0);

        // Add the box to the window
        this._window.add(box);

        // Show the window and all child widgets
        this._window.show_all();

        // Present window when active
        this._window.present();

        // Load the default home page when active
        this._webView.load_uri("http://localhost:4200/");
    }
});

// Run the application
let app = new WebBrowser();
app.run(ARGV);