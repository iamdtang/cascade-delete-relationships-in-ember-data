import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deletePost(post) {
      // let comments = post.hasMany('comments').value().toArray();
      // post.destroyRecord().then(() => {
      //   comments.forEach((comment) => {
      //     this.store.unloadRecord(comment);
      //   });
      // });

      post.destroyRecord();
    }
  }
});
