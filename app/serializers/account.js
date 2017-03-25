import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  serialize: function() {
    return {};
  },

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    return this._super(store, primaryModelClass, payload['toker/user'], payload['toker/user'].id, requestType)
  }
});
