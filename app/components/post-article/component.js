import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'article',

  didReceiveAttrs: function() {
    this.set('created_at_formatted', moment(this.get('created_at')).format("MMMM Do YYYY"));
  },

  didRender: function() {
    this.$('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }
});
