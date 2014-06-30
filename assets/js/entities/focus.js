define(['app'], function(App){

  var Focus = new Backbone.Model();

  var FocusCollection = Backbone.Collection.extend({
    model: Focus
  });

  API = {
    getFocusCollection: function(){
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

  App.reqres.setHandler("focus:entities", function(){
    return API.getFocusCollection();
  });

  return;
});