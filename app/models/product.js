import DS from 'ember-data';

export default DS.Model.extend({
  no: DS.attr(),
  owner: DS.attr(),
  city: DS.attr(),
  type: DS.attr()
});
