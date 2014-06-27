// Set require.js configuration for your application
require.config({
  baseUrl: "assets/js",

  // NOTE: Might not need handlebars here. I think we will convert all HB templates
  // to JS functions.

  paths: {
    jquery: "../../vendor/jquery/dist/jquery",
    underscore: "../../vendor/underscore/underscore",
    backbone: "../../vendor/backbone/backbone",
    marionette: "../../vendor/marionette/lib/backbone.marionette",
    handlebars: "../../vendor/handlebars/handlebars",
    bootstrap: "../../vendor/bootstrap/dist/js/bootstrap",
    "backbone.syphon": "../../vendor/backbone.syphon/lib/backbone.syphon"
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
    bootstrap: ["jquery"]
  }

});