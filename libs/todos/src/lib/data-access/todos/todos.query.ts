import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TodosStore, TodosState } from './todos.store';

// rxjs
import { Observable } from 'rxjs';

// interfaces
import { Todo } from './todo.model';

@Injectable({ providedIn: 'root' })
export class TodosQuery extends QueryEntity<TodosState> {
  public readonly activeTodo$: Observable<Todo>;
  public readonly activeTodoId$: Observable<Number>;
  public readonly todos$: Observable<Todo[]>;

  constructor(protected store: TodosStore) {
    super(store);

    this.activeTodo$ = this.selectActive();
    this.activeTodoId$ = this.selectActiveId();

    this.todos$ = this.selectAll();
  }
}
