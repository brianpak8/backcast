var VideoListView = Backbone.View.extend({

  initialize: function() {
    // this.model.on('change', this.render, this);
    this.collection.on('sync', this.render, this);
    //this.render();
  },
  
  render: function() {
    // console.log('5555555555555555555555555', this.collection);
    // console.log('HALPPPPPPPPP', this.video);
    this.$el.children().detach();
    this.$el.html(this.template());
    
    for (var i = 0; i < this.collection.models.length; i++) {
      // console.log('i hope north korea is not attacking us right now', this.model);
      // var video = new Video({id: this.collection.models[i]}); 
      console.log('CARRRRRRRRRRRRRRIEEEEEEEEEEE MEEEEEEEE', this.video);
      // new Video(this.collection[i]);
      new VideoListEntryView({
        // video: this.collection.model[i],
        model: this.collection.models[i],
        el: this.$('.video-list')
      }).render();
      // console.log('----------------------------');
      // console.log(video);
      // console.log('----------------------------');

      this.$el.append(video.el.innerHTML);
    }
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
