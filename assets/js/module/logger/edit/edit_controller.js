define([
  'app',
  'module/logger/edit/edit_view',
  // 'entity/log'
], function(App, View) {

  var EditController = Marionette.Controller.extend({
    initialize: function(options) {
      var model = options.model;

      var editView = this.getEditView(model);
      App.execute('dialog', {
        title: 'Log ' + model.get('date'),
        bodyView: editView
      });
    },

    getEditView: function(model) {
      return new View.Edit({
        model: model
      });
    }

  });

  return EditController;
});