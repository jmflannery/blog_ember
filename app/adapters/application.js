import Ember from 'ember';
import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend({
  session: Ember.inject.service(),

  host: ENV.apiUrl,

  headersForRequest(params) {
    let headers = this._super(params) || {};
    if (this.get('session').isLoggedIn()) {
      headers.Authorization = `Bearer ${this.get('session').apiToken()}`;
    }
    return headers;
  }
});
