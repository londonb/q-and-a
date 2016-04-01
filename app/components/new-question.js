import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveQuestion() {
      var params = {
        ask: this.get('ask'),
        author: this.get('title'),
        notes: this.get('notes')
      };
      this.sendAction('addQuestion', params);
    }
  }
});
