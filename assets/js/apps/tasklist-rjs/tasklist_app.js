define(['app'], function(App){

  // Another way to do this
  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      "tasklist" : "list"
    }
  });

  API = {
    list: function(){
      require(["apps/tasklist-rjs/list/list_controller"], function(ListController){
        new ListController();
      });
    }
  };

  new Router({
    controller: API
  });

  return ;

});