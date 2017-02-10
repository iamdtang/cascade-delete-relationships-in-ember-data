import DS from 'ember-data';
import CascadeDelete from './../mixins/cascade-delete';

export default DS.JSONAPIAdapter.extend(CascadeDelete, {
});
