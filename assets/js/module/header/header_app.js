define([
  'app'
], function(App){

  API = {
    list: function(region){
      require(['module/header/list/list_controller'], function(ListController){
        new ListController({
          region: region
        });
      });
    }
  };

  function HeaderApp() {
    this.start = function(region){
      API.list(region);
    };
  }

  var HeaderApp2 = {
    start: function(region){
      API.list(region);
    }
  };


  // We want to list the header app when this file loads.
  API.list(App.headerRegion);

  // return HeaderApp2;
  return new HeaderApp();

});