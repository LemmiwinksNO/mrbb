define([
  'app',
  'bootstrap',
  'templates'
], function(App) {

  var View = {};

  View.Edit = Marionette.ItemView.extend({
    template: 'apps/logger/edit/edit'
  });

  return View;
});