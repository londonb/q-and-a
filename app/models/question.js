import DS from 'ember-data';

export default DS.Model.extend({
  ask: DS.attr(),
  author: DS.attr(),
  notes: DS.attr()
});
