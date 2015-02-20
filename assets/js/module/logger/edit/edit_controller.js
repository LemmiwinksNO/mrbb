define([
  'app',
  'module/logger/edit/edit_view',
  'backbone.syphon'
  // 'entity/log'
], function(App, View) {

  var EditController = Marionette.Controller.extend({
    initialize: function(options) {
      // Edit or New action (have model already, or request a new one)
      var model = options.model || App.request('entity:log:new');

      this.editView = this.getEditView(model);

      this.listenTo(this.editView, 'dialog:save:clicked', this.save);

      App.execute('dialog', {
        title: 'Log ' + model.get('date'),
        bodyView: this.editView
      });
    },

    // Saves items as []
    // save: function(options) {
    //   var data = Backbone.Syphon.serialize(this.editView);
    //   this.editView.model.save(data, {
    //     success: function() {
    //       console.log('success');
    //       options.$modal.hide();
    //     },
    //     error: function() {
    //       console.error('Logger Edit Save Error');
    //     }
    //   });
    // },
    
    // Saves items as {}
    save: function(options) {
      var model = this.editView.model;
      var items = Backbone.Syphon.serialize(this.editView);
      var data = {
        date: model.get('date'),
        items: items
      };

      model.save(data, {
        success: function() {
          console.log('Logger Edit Save Success');
          options.$modal.hide();
        },
        error: function() {
          console.error('Logger Edit Save Error');
        }
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