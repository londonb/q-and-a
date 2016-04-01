import Ember from 'ember';

export default Ember.Component.extend({
  clickAddAnswer: false,
  actions: {
    clickAddAnswer(){
      this.set('clickAddAnswer', true);
    },
    newAnswer(){
      var params = {
        answer: this.get('answer'),
        authorAnswer: this.get('authorAnswer'),
        question: this.get('question')
      };
      this.set('clickAddAnswer', false);
      this.sendAction('newAnswer', params);
    }
  }
});
