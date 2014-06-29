define(['app', 'templates'], function(App){
  App.module("HeaderApp.List", function(List, App, Backbone, Marionette, $, _) {

    List.Header = Marionette.ItemView.extend({
      template: "header/list/header",
    });

  });
});