define(['app'], function(App){

  var TaskListApp = {
    Router: Marionette.AppRouter.extend({
      appRoutes: {
        "tasklist" : "list"
      }
    })
  };

  API = {
    list: function(){
      require(["apps/tasklist-rjs/list/list_controller"], function(ListController){
        new ListController();
      });
    }
  };

  App.addInitializer(function(){
    new TaskListApp.Router({
      controller: API
    });
  });

  return ;
});