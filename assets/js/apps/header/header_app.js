define(['app', 'apps/header/list/list_controller'], function(App){
  App.module("HeaderApp", function(HeaderApp, App, Backbone, Marionette, $, _){

    HeaderApp.startWithParent = false;

    API = {
      list: function(){
        new HeaderApp.List.Controller({
          region: App.headerRegion
        });
      }
    };

    HeaderApp.on("start", function(){
      API.list();
    });

  });
});