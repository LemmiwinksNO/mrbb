define([
  'app'
], function(App) {

  var View = {};

  View.Layout = Marionette.LayoutView.extend({
    template: 'lib/components/dialog/layout',
    className: 'modal fade',
    regions: {
      'headerRegion': '#modal-header-region',
      'bodyRegion': '#modal-body-region',
      'footerRegion': '#modal-footer-region'
    }
  });

  View.Header = Marionette.ItemView.extend({
    template: 'lib/components/dialog/header'
  });

  View.Footer = Marionette.ItemView.extend({
    template: 'lib/components/dialog/footer'
  });

  View.Body = Marionette.ItemView.extend({
    template: 'lib/components/dialog/body'
  });

  return View;
});