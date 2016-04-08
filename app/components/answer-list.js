import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['rating:desc'],
  sortedRankings: Ember.computed.sort('question.answers', 'sortBy'),

});
