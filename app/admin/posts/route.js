import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  model() {
    return Ember.RSVP.hash({
      isLoggedIn: this.get('session').isLoggedIn(),
      posts: this.store.findAll('post')
    });
  }
});
