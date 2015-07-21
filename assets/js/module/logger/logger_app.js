define([
  'app',
  'module/logger/list/list_controller',
  'module/logger/edit/edit_controller'
], function(App, ListController, EditController) {

  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      'logger': 'list'
    }
  });

  var API = {
    list: function() {
      new ListController();
    },

    edit: function(model) {
      new EditController({
        model: model
      });
    },

    newDayLog: function(args) {
      new EditController({
        collection: args.collection
      });
    }
  };

  new Router({
    controller: API
  });

  App.vent.on('log:clicked', function(model) {
    API.edit(model);
  });

  App.vent.on('new:daylog:clicked', function(args) {
    API.newDayLog(args);
  });

  return;
});