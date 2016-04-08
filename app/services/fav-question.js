import Ember from 'ember';

export default Ember.Service.extend({
  picks: [],

  add(pick) {
    this.get('picks').addObject(pick);
  }
});
