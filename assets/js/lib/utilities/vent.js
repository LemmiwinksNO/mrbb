// vent object without entire Marionette app.
define(['backbone.wreqr'], function(Wreqr){
  return new Wreqr.EventAggregator();
});