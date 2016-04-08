import Ember from 'ember';

export default Ember.Component.extend({
  favQuestion: Ember.inject.service(),

  actions: {
    addToCart(pick) {
      this.get('favQuestion').add(pick);
    },
    removeFromCart(pick) {
      this.get('favQuestion').remove(pick);
    }
  }
});
