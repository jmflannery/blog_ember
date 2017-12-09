import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addPost: function() {
      console.log('Add post');
      var post = this.store.createRecord('post', {
        title: this.controller.get('title'),
        content: this.controller.get('content'),
        slug: this.controller.get('slug')
      });
      post.save().then(() => {
        console.log('Post created successfully');
        this.transitionTo('admin.posts');
      }, () => {
        console.log('Failed to create post');
        console.log(arguments);
      });
    },

    slugUpdated: function(input) {
      let slug = input.split(' ').map(s => s.toLowerCase()).join('-');
      this.controller.set('slug', slug);
    }
  }
});
