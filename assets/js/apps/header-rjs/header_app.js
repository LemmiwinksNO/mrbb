define(['app'], function(App){

  function HeaderApp2 () {
    this.list = function() {
      require(["apps/header-rjs/list/list_controller"], function(ListController){
        new ListController({
          region: App.headerRegion
        });
      });
    };
  }

  // return new HeaderApp2();

  var HeaderApp = {
    list: function() {
      require(["apps/header-rjs/list/list_controller"], function(ListController){
        new ListController({
          region: App.headerRegion
        });
      });
    }
  };

  // return HeaderApp;




  // This is a bit more like the pattern in BBRails
  API = {
    list: function(){
      require(["apps/header-rjs/list/list_controller"], function(ListController){
        new ListController({
          region: App.headerRegion
        });
      });
    }
  };

  function HeaderApp3() {
    this.start = function(){
      API.list();
    };
  }

  return new HeaderApp3();

});