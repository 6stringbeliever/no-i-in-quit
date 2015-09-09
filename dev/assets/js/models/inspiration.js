var app = app || {};

var Inspiration = Backbone.Model.extend({
  defaults: {
    "quoteHTML": "",
    "shortName": "",
    "photo": "http://placehold.it/350x150"
  }
});
