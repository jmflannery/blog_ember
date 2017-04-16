import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  model: function() {
    return {
      posts: this.store.findAll('post'),
      isLoggedIn: this.get('session').isLoggedIn()
    }
  },

  actions: {
    deletePost: function(post) {
      post.destroyRecord();
    }
  }
});
