import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('post', params.post_id);
  },

  actions: {
    saved: function(post) {
      this.transitionTo('admin.posts.post', post);
    },

    cancel: function(post) {
      this.transitionTo('admin.posts.post', post);
    }
  }
});
