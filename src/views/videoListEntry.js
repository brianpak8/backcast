var VideoListEntryView = Backbone.View.extend({
  
  // initialize: function() {
  //   $('.video-list-entry-title').on('click', this.handleClick);
  //   this.model.on('change', this.render, this);
  // },
  initialize: function() {
    this.render();
  },
  
  event: {
    'click .video-list-entry': 'handleClick'
  },
  
  handleClick: function(e) {
    this.model.select();
  },

  render: function() {
    // for (var i = 0; i < this.model.models.length; i++) {
    //   new videoListEntry({})
    // }
    // console.log('guiguiguiguigui', this.$el);
    // console.log('!!!!!!!!!!!!CARRY MEEEEEEEEE!!!!!!!!!!!!', this.model);
    // el = this.$('.media');
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
