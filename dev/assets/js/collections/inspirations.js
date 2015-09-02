var app = app || {};

var Inspirations = Backbone.Collection.extend({
  model: Inspiration
});

app.InspirationList = new Inspirations();
