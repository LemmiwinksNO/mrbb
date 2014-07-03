this["JST"] = this["JST"] || {};

this["JST"]["header-rjs/list/header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Zez Application</a>\n    </div>\n    <div class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"#tasklist\">Task List</a></li>\n        <li><a href=\"#anki\">Anki Clone</a></li>\n        <li><a href=\"#logger\">Logger</a></li>\n        <li><a href=\"#journal\">Journal</a></li>\n        <li><a href=\"#daily\">Daily</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>";
  });

this["JST"]["header/list/header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Zez Application</a>\n    </div>\n    <div class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"#tasklist\">Task List</a></li>\n        <li><a href=\"#anki\">Anki Clone</a></li>\n        <li><a href=\"#logger\">Logger</a></li>\n        <li><a href=\"#journal\">Journal</a></li>\n        <li><a href=\"#daily\">Daily</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>";
  });

this["JST"]["tasklist-rjs/list/focus"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n<div class=\"focus-item well\">\n  <header>\n    <span class=\"title ellipsis\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n    <div class=\"edit-focus\">\n      <span class=\"glyphicon glyphicon-pencil\"></span>\n    </div>\n  </header>\n  <div class=\"input-group input-group-lg\">\n    <input type=\"text\" class=\"form-control\" name=\"new-task-title\" placeholder=\"New Task\">\n    <span class=\"input-group-btn\">\n      <button class=\"btn btn-default new-task\" type=\"button\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </button>\n    </span>\n  </div>\n  <hr>\n  <ul class=\"task-list\"></ul>\n</div><!-- .focus-item.well -->\n";
  return buffer;
  });

this["JST"]["tasklist-rjs/list/focus_list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\"></div>\n";
  });

this["JST"]["tasklist-rjs/list/layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"focus-region\"></div>";
  });

this["JST"]["tasklist-rjs/list/task"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n<li class=\"task uncompleted color-neutral\">\n  <!-- left-hand side checkbox -->\n  <div class=\"task-controls task-primary\">\n    <span class=\"task-checker action-yesno\">\n      <input type=\"checkbox\" class=\"visuallyhidden focusable\" id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      <label for=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></label>\n    </span>\n  </div>\n  <!-- main content -->\n  <div class=\"task-text\">\n    ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n    <span class=\"edit-task\">\n      <span class=\"glyphicon glyphicon-pencil\"></span>\n    </span>\n  </div>\n</li>\n";
  return buffer;
  });