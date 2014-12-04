
define([
  'app',
  'module/tasklist/list/list_controller'
], function(App, ListController){

  // Another way to do this
  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      "tasklist" : "list"
    }
  });

  var API = {
    list: function(){
      new ListController();
    }
  };

  new Router({
    controller: API
  });

  return ;
});