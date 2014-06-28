// Set require.js configuration for your application
require.config({
  baseUrl: "assets/js",

  paths: {
    jquery: "../../vendor/jquery/dist/jquery",
    underscore: "../../vendor/underscore/underscore",
    backbone: "../../vendor/backbone/backbone",
    marionette: "../../vendor/marionette/lib/backbone.marionette",
    bootstrap: "../../vendor/bootstrap/dist/js/bootstrap",
    handlebars: "../../vendor/handlebars/handlebars.runtime",

    // Require this to use compiled templates, it depends on HBS runtime.
    templates: "../templates/templates",
    "backbone.syphon": "../../vendor/backbone.syphon/lib/backbone.syphon",
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