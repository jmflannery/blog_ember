import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  activate() {
    let token = localStorage.getItem('token');
    if (token) {
      this.get('session').set('token', token);
      this.get('store').createRecord('account').save()
        .catch(error => localStorage.removeItem('token'));
    }
  }
});
