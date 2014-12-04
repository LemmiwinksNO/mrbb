define([
  'app',
  'module/tasklist/list/list_views',
  'entity/focus'
], function(App, View){

  var ListController = Marionette.Controller.extend({

    initialize: function(options) {
      this.region = this.options.region || App.request('default:region');
      this.layout = this.getLayoutView();

      // Fetch our entities
      var fetchingFocusCollection = App.request('entity:focus');
      $.when(fetchingFocusCollection).done(function(focusCollection){

        // Wait until layout's show event is fired before showing its regions.
        this.listenTo(this.layout, 'show', function() {
          this.focusRegion(focusCollection);
        });

        // Show layout in mainRegion and listen to its close event so we
        // can clean up this controller.
        this.listenTo(this.layout, 'destroy', this.destroy);
        this.region.show(this.layout);
      }.bind(this));
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
