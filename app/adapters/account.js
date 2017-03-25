import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  session: Ember.inject.service(),

  host: 'http://localhost:3000',

  pathForType: function(type) {
    return 'login';
  },

  headers: Ember.computed('session.email', 'session.password', function() {
    return {
      'Authorization': "Basic " + btoa(`${this.get('session.email')}:${this.get('session.password')}`)
    }
  }),

  handleResponse(status, headers, payload, requestData) {
    if (status === 201) {
      let token = headers.Authorization.split(' ')[1];
      this.get('session').set('token', token);
      this.get('session').set('currentAccountId', payload['toker/user'].id);
    }
    return this._super(status, headers, payload, requestData);
  }
});
