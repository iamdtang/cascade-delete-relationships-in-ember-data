import { Factory, faker, association } from 'ember-cli-mirage';

export default Factory.extend({
  body() {
    return faker.lorem.text();
  },
  afterCreate(post, server) {
    for (let i = 0; i < 5; i++) {
      server.create('comment', { post });
    }
  },
  author: association()
});
