import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      posts: this.store.findAll('post')
    }
  }
});
