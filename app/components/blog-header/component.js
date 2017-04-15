import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  _routing: Ember.inject.service('-routing'),

  willRender() {
    this.set('isLoggedIn', this.get('session').isLoggedIn());
  },

  actions: {
    logout() {
      let account = this.get('session').currentAccount();
      if (account) {
        account.destroyRecord()
          .then(() => {
            localStorage.removeItem('apiToken');
            this.get('session').logout();
            this.set('isLoggedIn', false);
            this.get('_routing').transitionTo('posts');
          });
      }
    }
  }
});
