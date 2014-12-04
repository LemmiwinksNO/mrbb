define([
  'app',
  'bootstrap',
  'templates'
], function(App) {

  var View = {};

  View.Edit = Marionette.ItemView.extend({
    template: 'module/logger/edit/edit'
  });

  return View;
});