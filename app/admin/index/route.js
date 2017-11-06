import Route from '@ember/routing/route';

export default Route.extend({
  session: Ember.inject.service(),

  model() {
    return {
      isLoggedIn: this.get('session').isLoggedIn(),
      posts: this.store.findAll('post')
    }
  }
});
