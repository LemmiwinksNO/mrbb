define([
	'app',
	'bootstrap',
	'templates'
], function(App){

  var View = {
    Header: Marionette.ItemView.extend({
      template: 'module/header/list/header'
    })
  };

  return View;
});