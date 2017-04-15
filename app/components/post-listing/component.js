import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePost() {
      this.get('post').destroyRecord();
    }
  }
});
