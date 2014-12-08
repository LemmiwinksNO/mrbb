
define([
  'marionette',
], function(Marionette) {

  // Update Marionette Renderer to work with our precompiled hbs templates
  Marionette.Renderer.render = function(template, data) {
    if (!window.JST[template]) throw "Template '" + template + "' not found!";
    return window.JST[template](data);
  };

  var App = new Marionette.Application();
  window.App = App;

  App.addRegions({
    headerRegion: '#header-region',
    mainRegion:   '#main-region',
    dialogRegion: '#dialog-region'
  });

  App.rootRoute = '/logger';

  // Fires before app starts and before initializers are executed.
  App.on('before:start', function(options) {
    App.environment = options.environment;
  });

  // Initializers
  // App.addInitializer(function(){
    // require(["module/header/header_app"], function(HeaderApp){
      // HeaderApp.start(App.headerRegion);
    // });
  // });

  // Initializers - right now I'm using this to load some files I want loaded (dialog widget)
  App.addInitializer(function() {
    require(['lib/components/dialog/controller']);
  });

  // Default region apps can request.
  App.reqres.setHandler('default:region', function() {
    return App.mainRegion;
  });

  // Fires after app has started and initializers have executed.
  // Start backbone history and navigate to root route.
  App.on('start', function() {
    if (Backbone.history) {
      // Require our module parent files because they have routes in them.
      require(['module/header/header_app', 'module/tasklist/tasklist_app', 'module/logger/logger_app'], function(){
        Backbone.history.start();
        if (Backbone.history.fragment === '') {
          Backbone.history.navigate(App.rootRoute, {trigger: true});
        }
      });
    }
  });

  return App;
});
