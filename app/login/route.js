import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  model() {
    return {
      email: '',
      password: ''
    };
  },

  actions: {
    login(creds) {
      let { email, password } = creds;
      this.get('session').set('email', email);
      this.get('session').set('password', password);
      this.get('store').createRecord('account').save().then((account) => {
        this.transitionTo('admin.posts');
      });
    }
  }
});
