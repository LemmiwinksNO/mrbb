define(['app', 'bootstrap', 'templates'], function(App){

  // Is there any advantage to this approach vs. creating 'View' as a function and
  // instantiating it? User never has more than one of this 'View' at a time.
  var View = {};

  View.Layout = Marionette.LayoutView.extend({
    template: "tasklist-rjs/list/layout",

    regions: {
      focusRegion: "#focus-region"
    }
  });

  View.Task = Marionette.ItemView.extend({
    template: "tasklist-rjs/list/task"
  });

  View.Focus = Marionette.CompositeView.extend({
    template: "tasklist-rjs/list/focus",
    className: "col-md-4 col-sm-6",
    childView: View.Task,
    childViewContainer: "ul.task-list",

    initialize: function(options){
      // Since we do composite on composite, we need to set the collection
      // here. In the future, you'd have a model with tasks collection.
      this.collection = this.model.get('tasks');
    }
  });

  View.FocusList = Marionette.CompositeView.extend({
    template: "tasklist-rjs/list/focus_list",
    className: "focus-list container",
    childView: View.Focus,
    childViewContainer: ".row",
  });

  return View;

});