var VideoListView = Backbone.View.extend({

  // initialize: function() {
  //   this.collection.on('sort', this.render, this);
  // },
  
  render: function() {
    for (var i = 0; i < videos.length; i++) {
      new VideoListEntryView({video: collection[i]});
    }
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
