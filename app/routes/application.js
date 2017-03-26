import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  actions: {
    logout() {
      let accountId = this.get('session').get('currentAccountId'),
         account = this.get('store').peekRecord('account', accountId);
      account.destroyRecord();
    }
  }
});
