var app = app || {};

$(function() {
  var obj = _.clone(Backbone.Events);
  app.InspiredRoutes = new InspiringRouter({ 'dispatch': obj });
  var appview = new app.AppView({ 'dispatch': obj });

  Backbone.history.start();
});
