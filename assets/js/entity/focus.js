
define([
  'app',
  'backbone.localstorage'
], function(App) {

  // var Focus = new Backbone.Model();
  var Focus = new Backbone.Model.extend();

  var FocusCollection = Backbone.Collection.extend({
    localStorage: new Backbone.LocalStorage("FocusCollection"),
    model: Focus
  });

  var API = {
    getFocusCollection: function() {
      var focusCollection = new Backbone.Collection([
        {
          title: "Programming",
          tasks: new Backbone.Collection([
            {title: "Do this", id: _.uniqueId("task_")},
            {title: "Do that", id: _.uniqueId("task_")},
            {title: "Do it again", id: _.uniqueId("task_")}
          ])
        },
        {
          title: "Exercise",
          tasks: new Backbone.Collection([
            {title: "Do this", id: _.uniqueId("task_")},
            {title: "Do that", id: _.uniqueId("task_")},
            {title: "Do it again", id: _.uniqueId("task_")}
          ])
        },
        {
          title: "Writing",
          tasks: new Backbone.Collection([
            {title: "Do this", id: _.uniqueId("task_")},
            {title: "Do that", id: _.uniqueId("task_")},
            {title: "Do it again", id: _.uniqueId("task_")}
          ])
        }
      ]);

      return focusCollection;
    }
  };

  App.reqres.setHandler("entity:focus", function(){
    return API.getFocusCollection();
  });

  return;
});