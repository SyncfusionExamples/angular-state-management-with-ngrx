import { createAction, props } from '@ngrx/store';
import { Article } from '../models/article.model';

export const addArticle = createAction(
  '[ARTICLE] Add ARTICLE',
  props<{ article: Article }>()
);