import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return [Ember.Object.create({
      x: 0,
      y: 0,
      height: 10,
      width: 10
    }), Ember.Object.create({
      x: 30,
      y: 30,
      height: 10,
      width: 10
    })];
  }
});