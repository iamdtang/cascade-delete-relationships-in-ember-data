import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  body() {
    return faker.random.words();
  }
});
