import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['rating:desc'],
  sortedRankings: Ember.computed.sort('question.answers', 'sortBy'),

  questionRating: Ember.computed('sortedRankings', function() {
    var total = 0;
    for (var i = 0; i < this.get('sortedRankings.length'); i++) {
      total += this.get('sortedRankings')[i].get('rating');
    }
    return total;
  })

});
