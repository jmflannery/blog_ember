import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  session: Ember.inject.service(),

  host: 'http://localhost:3000',

  headersForRequest(params) {
    let headers = this._super(params) || {};
    if (this.get('session').isLoggedIn()) {
      headers.Authorization = `Bearer ${this.get('session').apiToken()}`;
    }
    return headers;
  }
});
