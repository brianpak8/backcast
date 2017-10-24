var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    console.log('!!!!!!!!!!!!!!', this.videos);
    // this.videoList = new VideoListView({videos: this.videos});
    // this.videoList.render();
    // console.log('99999999999999999999', this.videoList);
    // this.videoListView = new VideoListView({this: this.videos.models});
  },


  render: function() {
    this.$el.html(this.template());
    //do something here!!!!
    new VideoListView({
      videos: this.videos,
      el: this.$('.list')
    }).render();
    // console.log('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', videoListView);
    // console.log('222222222222222222', this.videos);
    return this;
  },

  template: templateURL('src/templates/app.html')

});
