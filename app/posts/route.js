import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      isLoggedIn: this.get('session').isLoggedIn()
    });
  }
});
