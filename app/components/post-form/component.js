import Component from '@ember/component';

export default Component.extend({
  classNames: ['post-form'],

  actions: {
    save: function(post) {
      post.save()
        .then((post) => {
          console.log('Post created successfully');
          this.sendAction('saved', post);
        })
        .catch(() => {
          console.log('Failed to create post');
          console.log(arguments);
        });
    },

    cancel: function(post) {
      post.rollbackAttributes();
      this.sendAction('cancel', post);
    },

    slugUpdated: function(input) {
      let slug = input.split(' ').map(s => s.toLowerCase()).join('-');
      this.get('post').set('slug', slug);
    }
  }
});
