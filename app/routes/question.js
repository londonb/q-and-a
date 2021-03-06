import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  afterModel: function(model) {
    return model.get('answers');
  },
    actions: {
     update(question, params) {
       Object.keys(params).forEach(function(key) {
         if(params[key]!==undefined && params[key] !== "") {
           question.set(key,params[key]);
         }
       });
       question.save();
       this.transitionTo('index');
     },
     newAnswer(params) {
       var answer = this.store.createRecord('answer',params);
       var question = params.question;
       question.get('answers').addObject(answer);
       answer.save().then(function(){
         return question.save();
       });
       this.transitionTo('question', params.question);
     }
   }
});
