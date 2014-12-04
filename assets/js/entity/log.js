define([
  'app',
  'backbone.localstorage'
], function(App) {
  var Log = Backbone.Model.extend();

  var LogCollection = Backbone.Collection.extend({
    localStorage: new Backbone.LocalStorage('LogCollection'),
    model: Log
  });

  function getPreviousDate(i) {
    var today = new Date();
    var date = new Date();
    date.setDate(today.getDate() - i);

    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();

    return month + '/' + day + '/' + year;
  }

  var API = {
    getLogCollection: function() {
      var dummyData = [];
      for (var i = 0; i < 30; i++) {
        dummyData.push({
          date: getPreviousDate(i),
          items: {
            'Morning Heart Rate': '54',
            'Energy': 'high',
            'Chakra Sensation': 'true',
            'Workout': 'yoga'
          }
        });
      }
      var collection = new LogCollection(dummyData);

      return collection;
    }
  };

  App.reqres.setHandler('entity:log', function() {
    return API.getLogCollection();
  });
});