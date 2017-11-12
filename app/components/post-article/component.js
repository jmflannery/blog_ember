import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  tagName: 'article',

  didReceiveAttrs: function() {
    if (this.get('post').get('published_at')) {
      this.set('created_at_formatted', moment(this.get('post').get('published_at')).format("YYYY MMMM D"));
    } else {
      this.set('created_at_formatted', 'Unpublished');
    }
  },

  didRender: function() {
    this.$('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }
});
