define([
  'app',
  'apps/logger/list/list_controller',
  'apps/logger/edit/edit_controller'
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
    }
  };

  new Router({
    controller: API
  });

  App.vent.on('log:clicked', function(model) {
    API.edit(model);
  });

  return;
});