import { createReducer, on } from '@ngrx/store';
import { addArticle } from '../actions/article.actions';
import { Article } from '../models/article.model';

export const initialState: ReadonlyArray<Article> = [
  {
    id: '1',
    title: 'Angular State Management with NgRx',
    author: 'Chameera Dulanga',
    publisher: 'SyncFusion',
  },
];

export const articleReducer = createReducer(
  initialState,
  on(addArticle, (state, { article }) => [...state, article])
);