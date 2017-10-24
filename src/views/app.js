var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
   
    console.log('!!!!!!!!!!!!!!', this.videos);
    this.videoList = new VideoListView({videos: this.videos});
    this.videoList.render();
  },


  render: function() {
    this.$el.html(this.template());
    //do something here!!!!
    new VideoListView({videos: this.videos});
    return this;
  },

  template: templateURL('src/templates/app.html')

});
