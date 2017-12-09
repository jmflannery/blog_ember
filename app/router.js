import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('posts', function() {
    this.route('post', { path: ':slug' });
  });
  this.route('admin', function() {
    this.route('posts', function() {
      this.route('new');
      this.route('post', { path: ':slug' });
      this.route('edit', { path: ':post_id/edit' });
    });
  });
});

export default Router;
