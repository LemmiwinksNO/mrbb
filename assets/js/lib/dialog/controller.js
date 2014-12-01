define([
  'app',
  'lib/dialog/view'
], function(App, View) {

  var DialogController = Marionette.Controller.extend({

    initialize: function(options) {
      this.region = App.dialogRegion;
      this.layout = this.getLayoutView();

      this.listenTo(this.layout, 'show', function() {
        this.headerRegion();
        this.footerRegion();
        this.bodyRegion();
      });

      this.listenTo(this.layout, 'destroy', this.destroy);
      this.region.show(this.layout);

      this.layout.$el.modal();
    },

    getLayoutView: function() {
      return new View.Layout();
    },

    headerRegion: function() {
      var headerView = new View.Header({
        model: new Backbone.Model({title: this.options.title})
      });
      this.layout.headerRegion.show(headerView);
    },

    footerRegion: function() {
      var footerView = new View.Footer();
      this.layout.footerRegion.show(footerView);
    },

    bodyRegion: function() {
      var bodyView = this.options.bodyView || new View.Body();
      this.layout.bodyRegion.show(bodyView);
    }
  });

  App.commands.setHandler('dialog', function(options) {
    new DialogController(options);
  });
});