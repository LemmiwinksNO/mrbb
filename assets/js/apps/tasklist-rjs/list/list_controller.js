define(['app', 'apps/tasklist-rjs/list/list_views'], function(App, View){

  var ListController = Marionette.Controller.extend({

    initialize: function(options) {
      this.region = this.options.region || App.request("default:region");
      this.layout = this.getLayoutView();
      var view = this;

      // Fetch our entities
      require(["entities/focus"], function(){
        var fetchingFocusCollection = App.request("focus:entities");
        $.when(fetchingFocusCollection).done(function(focusCollection){

          // Wait until layout's show event is fired before showing its regions.
          view.listenTo(view.layout, 'show', function(){
            view.focusRegion(focusCollection);
          });

          // Show layout in mainRegion and listen to its close event so we
          // can clean up this controller.
          view.listenTo(view.layout, "close", view.close);
          view.region.show(view.layout);
        });
      });
    },

    // Setup and show focusRegion
    focusRegion: function(collection){
      var focusListView = this.getFocusListView(collection);
      this.layout.focusRegion.show(focusListView);
    },

    getFocusListView: function(collection){
      return new View.FocusList({
        collection: collection
      });
    },

    getLayoutView: function(){
      return new View.Layout();
    }
  });

  return ListController;

});
