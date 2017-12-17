import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('post', {});
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
