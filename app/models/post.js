import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr(),
  comments: DS.hasMany('comment', { cascadeDelete: true }),
  author: DS.belongsTo('author', { cascadeDelete: true })
});
