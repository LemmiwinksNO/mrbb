define([
  'app'
], function(App) {

  var View = {};

  View.Layout = Marionette.LayoutView.extend({
    template: 'lib/dialog/layout',
    className: 'modal fade',
    regions: {
      'headerRegion': '#modal-header-region',
      'bodyRegion': '#modal-body-region',
      'footerRegion': '#modal-footer-region'
    }
  });

  View.Header = Marionette.ItemView.extend({
    template: 'lib/dialog/header'
  });

  View.Footer = Marionette.ItemView.extend({
    template: 'lib/dialog/footer'
  });

  View.Body = Marionette.ItemView.extend({
    template: 'lib/dialog/body'
  });

  return View;
});