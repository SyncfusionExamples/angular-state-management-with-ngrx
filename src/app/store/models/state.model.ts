import { Article } from '../models/article.model';

export interface State {
  readonly article: Array<Article>;
}