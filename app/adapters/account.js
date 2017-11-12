import Ember from 'ember';
import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend({
  session: Ember.inject.service(),

  host: ENV.apiUrl,

  urlForRequest(params) {
    let url = this._super(params);
    if (params.requestType === 'createRecord') {
      url = `${this.host}/login`;
    } else if (params.requestType === 'deleteRecord') {
      url = `${this.host}/logout`;
    }
    return url;
  },

  methodForRequest(params) {
    if (params.requestType === 'createRecord' && this.get('session').get('token')) {
      return 'PUT';
    }
    return this._super(params);
  },

  headersForRequest(params) {
    let headers = this._super(params) || {};
    let token, email, password;

    if (token = this.get('session.token')) {
      headers.Authorization = `Bearer ${token}`;
    } else if ((email = this.get('session.email')) && (password = this.get('session.password'))) {
      headers.Authorization = "Basic " + btoa(`${email}:${password}`);
    }

    return headers;
  },

  handleResponse(status, headers, payload, requestData) {
    if (status === 201 || status === 200) {
      let token = headers.Authorization.split(' ')[1];
      localStorage.setItem('apiToken', token);
      this.get('session').login(token, payload['toker/user'].id);
    }
    return this._super(status, headers, payload, requestData);
  }
});
