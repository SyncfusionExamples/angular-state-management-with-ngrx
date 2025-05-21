import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Article } from './store/models/article.model';
import { State } from './store/models/state.model';
import { addArticle } from './store/actions/article.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  articles$!: Observable<Array<Article>>;
  articleForm!: FormGroup;

  constructor(private store: Store<State>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.articles$ = this.store.pipe(select(state => state.article));
    this.articleForm = this.fb.group({
      id: ['', Validators.required],
      title: [''],
      author: [''],
      publisher: [''],
    });
  }

  addArticle() {
    if (this.articleForm.valid) {
      this.store.dispatch(addArticle({ article: this.articleForm.value }));
      this.articleForm.reset();
    }
  }
}