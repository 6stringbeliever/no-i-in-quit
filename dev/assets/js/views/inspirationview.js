var app = app || {};

var InspirationView = Backbone.View.extend({
  tagName: 'div',
  className: 'insp-item',
  template: Handlebars.compile($('#insp-entry-list-tmpl').html()),
  initialize: function() {
    console.log('init view');
    this.listenTo(this.model, 'change', this.render);
    this.$listThing = $('#insp-list');
    this.render();
  },
  render: function() {
    console.log('render view');
    var view = this.$el.html(this.template(this.model.attributes));
    this.$listThing.append(view);
    return this;
  }
});
