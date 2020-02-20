import Model, { attr } from '@ember-data/model';

export default class IndexModel extends Model {
  @attr('number') id;
  @attr('string') firstName;
}