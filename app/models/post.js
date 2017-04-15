import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  content: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr(),
  published_at: DS.attr()
});
