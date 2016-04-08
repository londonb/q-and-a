import Ember from 'ember';

export function ratingPic(params/*, hash*/) {
  var goodOrBad = params[0].get('rating');

  if (goodOrBad === -1) {
    return Ember.String.htmlSafe('<span>&#10008;</span>');
  } else if (goodOrBad === 1) {
    return Ember.String.htmlSafe('<span>&#10004;</span>');
  }
}

export default Ember.Helper.helper(ratingPic);
