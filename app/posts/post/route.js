import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    console.log('Post route model');
    console.log(params.post_id);
    return this.store.findRecord('post', params.post_id);
  },

  actions: {
    deletePost: function(post) {
      console.log('deleting Post');
      console.log(post.id);
      post.destroyRecord();
      this.transitionTo('posts.index');
    }
  }
});
