define(['app', 'bootstrap', 'templates'], function(App){

  var View = {
    Header: Marionette.ItemView.extend({
      template: "apps/header-rjs/list/header"
    })
  };

  return View;
});