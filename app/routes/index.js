import Ember from 'ember';

//exporting ember route to access product in firebase
export default Ember.Route.extend({
  model() {
    return this.store.findAll('product');
  },
});
