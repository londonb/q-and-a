import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveQuestion() {
      var params = {
        question: this.get('question'),
        author: this.get('title'),
        notes: this.get('notes')
      };
      this.sendAction('addQuestion', params);
    }
  }
});
