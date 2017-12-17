import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('post', {});
  },

  actions: {
    addPost: function(post) {
      post.save().then((post) => {
        console.log('Post created successfully');
        this.transitionTo('admin.posts.post', post);
      }, () => {
        console.log('Failed to create post');
        console.log(arguments);
      });
    },

    slugUpdated: function(input) {
      let slug = input.split(' ').map(s => s.toLowerCase()).join('-');
      this.controller.get('model').set('slug', slug);
    }
  }
});
