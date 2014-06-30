// Set require.js configuration for your application
requirejs.config({
  baseUrl: "assets/js",

  paths: {
    jquery: "../../vendor/jquery/dist/jquery",
    underscore: "../../vendor/underscore/underscore",
    backbone: "../../vendor/backbone/backbone",
    marionette: "../../vendor/marionette/lib/backbone.marionette",
    bootstrap: "../../vendor/bootstrap/dist/js/bootstrap",
    handlebars: "../../vendor/handlebars/handlebars.runtime",
    "backbone.syphon": "../../vendor/backbone.syphon/lib/backbone.syphon",
    "backbone.wreqr": "../../vendor/backbone.wreqr/lib/backbone.wreqr",
    "backbone.localstorage": "../../vendor/backbone.localstorage/backbone.localStorage.js",

    // Require this to use compiled templates, it depends on HBS runtime.
    templates: "../templates/templates",
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