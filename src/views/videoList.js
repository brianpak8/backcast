var VideoListView = Backbone.View.extend({

  // initialize: function() {
  //   this.collection.on('sort', this.render, this);
  // },
  
  render: function() {
    // console.log('5555555555555555555555555', this.videos);
    // for (var i = 0; i < videos.length; i++) {
    //   new VideoListEntryView({video: videos[i]});
    // }
    console.log('HALPPPPPPPPP', this.videos);
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
