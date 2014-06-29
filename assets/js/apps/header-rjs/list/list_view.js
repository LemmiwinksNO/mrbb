define(['app', 'bootstrap', 'templates'], function(App){

  View = {
    Header: Marionette.ItemView.extend({
      template: "header/list/header"
    })
  };

  return View;
});