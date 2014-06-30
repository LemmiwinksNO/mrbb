define(['app', 'apps/header/list/list_views'], function(App){
  App.module("HeaderApp.List", function(List, App, Backbone, Marionette, $, _){

    List.Controller = Marionette.Controller.extend({

      initialize: function(options){
        this.region = this.options.region;

        console.log("controller region = ", this.region);
        var listView = this.getListView();

        // Attach listener to close this controller when the
        // view closes.
        this.listenTo(listView, 'close', this.close);
        this.region.show(listView);
      },

      getListView: function(){
        return new List.Header();
      }

    });

  });
});