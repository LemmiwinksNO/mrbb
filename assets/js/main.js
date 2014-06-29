require(["config"], function() {

  require(["app"], function(App) {
    App.start({environment: "development"});
  });

});