
define(['marionette'], function(Marionette) {

  // Update Marionette Renderer to work with our precompiled hbs templates
  Marionette.Renderer.render = function(template, data) {
    if (!window.JST[template]) throw "Template '" + template + "' not found!";
    return window.JST[template](data);
  };

  var App = new Marionette.Application();

  App.addRegions({
    headerRegion: "#header-region",
    mainRegion:   "#main-region",
    dialogRegion: "#dialog-region"
  });

  App.rootRoute = "/";

  // Fires before app starts and before initializers are executed.
  App.on("before:start", function(options){
    App.environment = options.environment;
  });

  // Initializers
  App.addInitializer(function(){
    // require(["apps/header/header_app"], function(){
    //   App.module("HeaderApp").trigger('start');
    // });

    // Start Header
    require(["apps/header-rjs/header_app"], function(HeaderApp){
      HeaderApp.start();
    });

  });

  // Fires after app has started and initializers have executed.
  // Start backbone history and navigate to root route.
  App.on("start", function(){
    if (Backbone.history){
      Backbone.history.start();
    }
    Backbone.history.navigate(App.rootRoute, {trigger: true});
  });

  return App;
});
