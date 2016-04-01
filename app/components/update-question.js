import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(question) {
      var params = {
        ask: this.get('ask'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.sendAction('updateQuestion', question, params);
    }
  }
});
