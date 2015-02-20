define([
  'app'
], function(App) {

  var Log = Backbone.Model.extend({
    urlRoot: '/api/daylog',
    defaults: {
      items: [{
        'morning heart rate': null,
        energy: '',
        workout: ''
      }]
    }

    /**
     * Overwrite save so we can convert items from {} to []
     */
    // save: function(formData, options) {
    //   var items = [];
    //   _.forEach(formData, function(value, key) {
    //     var item = {};
    //     item[key] = value;
    //     items.push(item);
    //   });

    //   var data = {
    //     date: this.get('date'),
    //     items: items
    //   };

    //   // super
    //   Backbone.Model.prototype.save.call(this, data, {
    //     success: options.success,
    //     error: options.error
    //   });
    // }
  });

  var LogCollection = Backbone.Collection.extend({
    url: '/api/daylog',
    model: Log
  });

  function getDateToday() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();

    return month + '/' + day + '/' + year;
  }

  var API = {

    getLogCollection: function() {
      var collection = new LogCollection();
      collection.fetch({reset: true});
      return collection;
    },

    newLog: function() {
      return new Log({date: getDateToday()});
    }
  };

  App.reqres.setHandler('entity:log', function() {
    return API.getLogCollection();
  });

  App.reqres.setHandler('entity:log:new', function() {
    return API.newLog();
  });
});