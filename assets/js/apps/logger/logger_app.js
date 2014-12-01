define([
  'app',
  'apps/logger/list/list_controller'
], function(App, ListController) {

  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      'logger': 'list'
    }
  });

  var API = {
    list: function() {
      new ListController();
    }
  };

  new Router({
    controller: API
  });

  return;
});