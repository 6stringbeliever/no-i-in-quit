var app = app || {};

app.AppView = Backbone.View.extend({
  el: 'section',
  id: 'insp-app-body',
  initialize: function(opt) {
    this.dispatch = opt.dispatch;
    this.setSelectedInspiration = '';
    this.listenTo(app.InspirationList, 'add', this.addInspirationView);
    this.dispatch.on('selectOne', function(shortName) {
      console.log('received message about ' + shortName + ' in AppView');
    });

    $.getJSON('assets/data/data.json')
      .done(function(data) {
        app.InspirationList.set(data);
      })
      .fail(function(data) {
      });
  },
  render: function() {
    console.log('appview render');
  },
  addInspirationView: function(thing) {
    new InspirationView({model: thing});
  },
  setSelectedInspiration: function(shortName) {
    console.log("called setSelectedInspiration");
    this.setSelectedInspiration = shortName;
  }
});
