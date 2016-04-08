import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.attr(),
  authorAnswer: DS.attr(),
  date: DS.attr(),
  rating: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
