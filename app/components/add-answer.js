import Ember from 'ember';

export default Ember.Component.extend({
  clickAddAnswer: false,
  actions: {
    clickAddAnswer(){
      this.set('clickAddAnswer', true);
    },
    submitAnswer(){
      var params = {
        answer: this.get('answer'),
        authorAnswer: this.get('authorAnswer')
      };
      this.set('clickAddAnswer', false);
      this.sendAction('addAnswer', params);
    }
  }
});
