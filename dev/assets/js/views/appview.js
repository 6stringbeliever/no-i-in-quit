var app = app || {};

app.AppView = Backbone.View.extend({
  el: 'section',
  id: 'insp-app-body',
  initialize: function() {
    console.log("Hello world");
    this.listenTo(app.InspirationList, 'add', this.addInspirationView);
    // app.InspirationList.add({title: "Don't make shitty shit that's shitty."});
    // app.InspirationList.add({title: "There's no “I” in quit."});
    // app.InspirationList.add({title: "Abandon all Hope ye who enter here."});

    $.getJSON('assets/data/data.json')
      .done(function(data) {
        console.log('success');
        console.log(data);
        app.InspirationList.set(data);
      })
      .fail(function(data) {
        console.log('fail');
        console.log(data);
      });
  },
  render: function() {
    console.log('appview render');
  },
  addInspirationView: function(thing) {
    console.log('appview addInspirationView');
    console.log(thing.attributes);
    new InspirationView({model: thing});
  }
});
