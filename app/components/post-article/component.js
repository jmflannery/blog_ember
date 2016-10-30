import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'article',

  didRender: function() {
    this.$('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }
});
