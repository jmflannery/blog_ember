import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),

  setToken(token) {
    this.set('token', token);
  },

  login(token, currentAccountId) {
    this.set('token', token);
    this.set('currentAccountId', currentAccountId);
  },

  logout() {
    this.set('token', undefined);
    this.set('currentAccountId', undefined);
  },

  apiToken() {
    return this.get('token');
  },

  isLoggedIn() {
    return !!this.apiToken();
  },

  currentAccount() {
    if (!this.isLoggedIn()) { return null; }
    let accountId = this.get('currentAccountId');
    if (!accountId) { return null; }
    return this.get('store').peekRecord('account', accountId);
  }
});
