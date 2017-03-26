import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  session: Ember.inject.service(),

  host: 'http://localhost:3000',

  pathForType: function(type) {
    return 'login';
  },

  methodForRequest(params) {
    if (this.get('session').get('token')) {
      return 'PUT';
    }
    return this._super(params);
  },

  headers: Ember.computed('session.email', 'session.password', 'session.token', function() {
    let headers = {}, token;

    if (token = this.get('session.token')) {
      headers.Authorization = `Bearer ${token}`;
    } else if (this.get('session.email') && this.get('session.password')) {
      headers.Authorization = "Basic " + btoa(`${this.get('session.email')}:${this.get('session.password')}`)
    }

    return headers;
  }),

  handleResponse(status, headers, payload, requestData) {
    if (status === 201) {
      let token = headers.Authorization.split(' ')[1];
      localStorage.setItem('token', token);
      this.get('session').set('token', token);
      this.get('session').set('currentAccountId', payload['toker/user'].id);
    }
    return this._super(status, headers, payload, requestData);
  }
});
