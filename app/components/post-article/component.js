import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  tagName: 'article',

  didReceiveAttrs: function() {
    this.set('created_at_formatted', moment(this.get('created_at')).format("YYYY MMMM D"));
  },

  didRender: function() {
    this.$('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }
});
