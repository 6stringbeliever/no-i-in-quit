var app = app || {};

var InspiringRouter = Backbone.Router.extend({
  routes: {
    'about': 'about',
    'inspiration/:shortName': 'showInspiration'
  },
  about: function() {
    console.log("Show the about page.");
  },
  showInspiration: function(shortName) {
    console.log("Show a single inspiration named " + shortName);
  }
});

app.InspiredRoutes = new InspiringRouter();
Backbone.history.start();
