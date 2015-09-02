var app = app || {};

Backbone.sync = function(method, model, success, error) {
    success();
};

$(function() {
  var appview = new app.AppView();
});
