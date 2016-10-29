import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('post', params.post_id);
  },

  actions: {
    save: function(post) {
      post.save().then(() => {
        this.transitionTo('posts');
      });
    },

    cancel: function(post) {
      post.rollbackAttributes();
      this.transitionTo('posts');
    }
  }
});
