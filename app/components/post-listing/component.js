import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    publishPost() {
      let post = this.get('post');
      post.set('published_at', new Date());
      post.save();
    },

    unpublishPost() {
      let post = this.get('post');
      post.set('published_at', '');
      post.save();
    },

    deletePost() {
      this.get('post').destroyRecord();
    }
  }
});
