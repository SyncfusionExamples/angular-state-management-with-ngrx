import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Article } from './store/models/article.model';
import { State } from './store/models/state.model';
import { AddArticleAction } from './store/actions/article.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {

  articles$: Observable<Array<Article>>;
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.articles$ = this.store.select((store) => {
      return store.article
    });
  }

  addArticle(form: NgForm) {
    this.store.dispatch(new AddArticleAction(form.value));
    form.reset();
 }

}