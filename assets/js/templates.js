this["JST"] = this["JST"] || {};

this["JST"]["apps/header-rjs/list/header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Zez Application</a>\n    </div>\n    <div class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"#tasklist\">Task List</a></li>\n        <li><a href=\"#anki\">Anki Clone</a></li>\n        <li><a href=\"#logger\">Logger</a></li>\n        <li><a href=\"#journal\">Journal</a></li>\n        <li><a href=\"#daily\">Daily</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>";
  },"useData":true});



this["JST"]["apps/logger/edit/edit"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "  <div class=\"form-group\">\n    <label for=\"log-input-"
    + escapeExpression(lambda((data && data.key), depth0))
    + "\" class=\"col-sm-4 control-label\">"
    + escapeExpression(lambda((data && data.key), depth0))
    + "</label>\n    <div class=\"col-sm-7\">\n      <input type=\"text\" class=\"form-control\" id=\"log-input-"
    + escapeExpression(lambda((data && data.key), depth0))
    + "\" value=\""
    + escapeExpression(lambda(depth0, depth0))
    + "\">\n    </div>\n  </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<form class=\"form-horizontal\" role=\"form\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.items : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</form>";
},"useData":true});



this["JST"]["apps/logger/list/layout"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"log-region\"></div>";
  },"useData":true});



this["JST"]["apps/logger/list/log"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<h4 class=\"list-group-item-heading\">\n  <span><i class=\"fa fa-circle-o\"></i></span>\n  <span>"
    + escapeExpression(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"date","hash":{},"data":data}) : helper)))
    + "</span>\n</h4>\n";
},"useData":true});



this["JST"]["apps/logger/list/log_list"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h3>Logger</h3>\n<div class=\"log-list list-group\"></div>";
  },"useData":true});



this["JST"]["apps/logger/list/update"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "  <div class=\"form-group\">\n    <label for=\"log-input-"
    + escapeExpression(lambda((data && data.key), depth0))
    + "\" class=\"col-sm-4 control-label\">"
    + escapeExpression(lambda((data && data.key), depth0))
    + "</label>\n    <div class=\"col-sm-7\">\n      <input type=\"text\" class=\"form-control\" id=\"log-input-"
    + escapeExpression(lambda((data && data.key), depth0))
    + "\" value=\""
    + escapeExpression(lambda(depth0, depth0))
    + "\">\n    </div>\n  </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<form class=\"form-horizontal\" role=\"form\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.items : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</form>";
},"useData":true});



this["JST"]["apps/tasklist/list/focus"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n<div class=\"focus-item well\">\n  <header>\n    <span class=\"title ellipsis\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\n    <div class=\"edit-focus\">\n      <span class=\"glyphicon glyphicon-pencil\"></span>\n    </div>\n  </header>\n  <div class=\"input-group input-group-lg\">\n    <input type=\"text\" class=\"form-control\" name=\"new-task-title\" placeholder=\"New Task\">\n    <span class=\"input-group-btn\">\n      <button class=\"btn btn-default new-task\" type=\"button\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </button>\n    </span>\n  </div>\n  <hr>\n  <ul class=\"task-list\"></ul>\n</div><!-- .focus-item.well -->\n";
},"useData":true});



this["JST"]["apps/tasklist/list/focus_list"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"row\"></div>\n";
  },"useData":true});



this["JST"]["apps/tasklist/list/layout"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"focus-region\"></div>";
  },"useData":true});



this["JST"]["apps/tasklist/list/task"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n  <!-- left-hand side checkbox -->\n  <div class=\"task-controls task-primary\">\n    <span class=\"task-checker action-yesno\">\n      <input type=\"checkbox\" class=\"visuallyhidden focusable\" id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n      <label for=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\"></label>\n    </span>\n  </div>\n  <!-- main content -->\n  <div class=\"task-text\">\n    "
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "\n    <span class=\"edit-task\">\n      <span class=\"glyphicon glyphicon-pencil\"></span>\n    </span>\n  </div>\n";
},"useData":true});



this["JST"]["lib/components/dialog/body"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<p>One fine body&hellip;</p>\n";
  },"useData":true});



this["JST"]["lib/components/dialog/footer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n  <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n</div>";
  },"useData":true});



this["JST"]["lib/components/dialog/header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"modal-header\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n    <span aria-hidden=\"true\">&times;</span>\n    <span class=\"sr-only\">Close</span>\n  </button>\n  <h4 class=\"modal-title\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n</div>";
},"useData":true});



this["JST"]["lib/components/dialog/layout"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"modal-dialog\">\n  <div class=\"modal-content\">\n    <div id=\"modal-header-region\"></div>\n    <div class=\"modal-body\">\n      <div id=\"modal-body-region\"></div>\n    </div>\n    <div id=\"modal-footer-region\"></div>\n  </div>\n</div>";
  },"useData":true});