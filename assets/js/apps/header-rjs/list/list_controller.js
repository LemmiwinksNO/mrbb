define(['app', 'apps/header-rjs/list/list_view'], function(App, View){

  var ListController = Marionette.Controller.extend({

    initialize: function(options) {
      this.region = this.options.region;
      var listView = this.getListView();

      // Attach listener to close this controller when the view closes.
      this.listenTo(listView, 'close', this.close);
      this.region.show(listView);
    },

    getListView: function(){
      return new View.Header();
    }

  });

  return ListController;

});