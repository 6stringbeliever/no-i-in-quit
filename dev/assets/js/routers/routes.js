var app = app || {};

var InspiringRouter = Backbone.Router.extend({
  routes: {
    'about': 'about',
    'inspiration/:shortName': 'showInspiration'
  },
  initialize: function(options) {
    this.dispatch = options.dispatch;
  },
  about: function() {
    console.log("Show the about page.");
  },
  showInspiration: function(shortName) {
    console.log("Show a single inspiration named " + shortName);
    this.dispatch.trigger('selectOne', shortName);
  }
});
