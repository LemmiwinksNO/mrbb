// Set require.js configuration for your application
requirejs.config({
  baseUrl: "assets/js",

  paths: {
    jquery: "vendor/jquery",
    underscore: "vendor/underscore",
    backbone: "vendor/backbone",
    marionette: "vendor/backbone.marionette",
    bootstrap: "vendor/bootstrap",
    handlebars: "vendor/handlebars.runtime",
    "backbone.syphon": "vendor/backbone.syphon",
    "backbone.wreqr": "vendor/backbone.wreqr",
    "backbone.localstorage": "vendor/backbone.localStorage",

    // Require this to use compiled templates, it depends on HBS runtime.
    templates: "templates",
  },

  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["jquery", "underscore"],
      exports: "Backbone"
    },
    "backbone.syphon": ["backbone"],
    "backbone.wreqr": ["backbone"],
    "backbone.localstorage": ["backbone"],
    marionette: {
      deps: ["backbone"],
      exports: "Marionette"
    },
    bootstrap: ["jquery"],
    handlebars: {
      exports: "Handlebars"
    },
    templates: {
      deps: ["handlebars"]
    }
  }
});

// Start the app
require(["app"], function(App) {
  App.start({environment: "fake environment name"});
});