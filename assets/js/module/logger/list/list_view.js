define([
  'app',
  'bootstrap',
  'templates'
], function(App) {

  var View = {};

  View.Layout = Marionette.LayoutView.extend({
    template: 'module/logger/list/layout',

    regions: {
      logRegion: '#log-region'
    }
  });

  View.Log = Marionette.ItemView.extend({
    template: 'module/logger/list/log',
    className: 'log-list-item list-group-item',
    triggers: {
      'click': 'log:clicked'
    }
  });

  View.LogList = Marionette.CompositeView.extend({
    template: 'module/logger/list/log_list',
    childView: View.Log,
    childViewContainer: '.log-list',
    className: 'container'
  });

  View.Update = Marionette.ItemView.extend({
    template: 'module/logger/list/update'
  });

  return View;
});