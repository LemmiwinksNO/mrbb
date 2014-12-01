define([
  'app',
  'apps/logger/list/list_view',
  'entities/log'
], function(App, View){

  var ListController = Marionette.Controller.extend({
    initialize: function(options) {
      console.log('Logger init');

      this.region = options.region || App.request('default:region');
      this.layout = this.getLayoutView();

      // Fetch entities
      var FetchingLogCollection = App.request('entity:log');
      $.when(FetchingLogCollection).done(function(logCollection) {

        // When layout is shown, setup log region
        this.listenTo(this.layout, 'show', function() {
          this.logRegion(logCollection);
        }.bind(this));

        // Destroy this controller when layout view is destroyed
        this.listenTo(this.layout, 'destroy', this.destroy);

        this.region.show(this.layout);
      }.bind(this));

      this.region.show(this.layout);
    },

    logRegion: function(collection) {
      var logListView = this.getLogListView(collection);
      this.listenTo(logListView, 'childview:log:clicked', this.clickLog);
      this.layout.logRegion.show(logListView);
    },

    clickLog: function(childView, args) {
      var updateView = this.getUpdateView(args.model);
      App.execute('dialog', {
        title: 'Log ' + args.model.get('date'),
        bodyView: updateView
      });
    },

    getUpdateView: function(model) {
      return new View.Update({
        model: model
      });
    },

    getLogListView: function(collection) {
      return new View.LogList({
        collection: collection
      });
    },

    getLayoutView: function() {
      return new View.Layout();
    }

  });

  return ListController;
});