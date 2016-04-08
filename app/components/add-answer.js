import Ember from 'ember';
import moment from 'moment';

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
        question: this.get('question'),
        date: this.get('date') ? this.get('date'): moment().format('MMMM Do YYYY, h:mm a'),
        rating: parseInt(this.get('rating'))
      };
      this.set('clickAddAnswer', false);
      this.sendAction('newAnswer', params);
    }
  }
});
