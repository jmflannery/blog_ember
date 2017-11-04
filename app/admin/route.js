import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  beforeModel() {
    let token = localStorage.getItem('apiToken');
    if (token) {
      this.get('session').setToken(token);
      this.get('store').createRecord('account').save()
        .catch(() => localStorage.removeItem('token'));
    } else {
      this.transitionTo('posts');
    }
  },

  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post')
    });
  }
});
