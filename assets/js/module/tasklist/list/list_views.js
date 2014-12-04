define([
  'app',
  'bootstrap',
  'templates'
], function(App){

  // Is there any advantage to this approach vs. creating 'View' as a function and
  // instantiating it? User never has more than one of this 'View' at a time.
  var View = {};

  View.Layout = Marionette.LayoutView.extend({
    template: 'module/tasklist/list/layout',

    regions: {
      focusRegion: '#focus-region'
    }
  });

  View.Task = Marionette.ItemView.extend({
    template: 'module/tasklist/list/task',
    tagName: 'li',
    className: 'task uncompleted color-neutral'
  });

  View.Focus = Marionette.CompositeView.extend({
    template: 'module/tasklist/list/focus',
    className: 'col-md-4 col-sm-6',
    childView: View.Task,
    childViewContainer: 'ul.task-list',

    initialize: function(options){
      // Since we do composite on composite, we need to set the collection
      // here. In the future, you'd have a model with tasks collection.
      this.collection = this.model.get('tasks');
    }
  });

  View.FocusList = Marionette.CompositeView.extend({
    template: 'module/tasklist/list/focus_list',
    className: 'focus-list container',
    childView: View.Focus,
    childViewContainer: '.row',
  });

  return View;

});