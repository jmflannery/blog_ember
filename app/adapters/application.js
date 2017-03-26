import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  session: Ember.inject.service(),

  host: 'http://localhost:3000',

  headers() {
    let headers = {}, token;

    if (token = this.get('session').get('token')) {
      headers.Authorization = `Bearer ${token}`;
    }

    return headers;
  }
});
