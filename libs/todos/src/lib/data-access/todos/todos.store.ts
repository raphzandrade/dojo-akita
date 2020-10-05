import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Todo } from './todo.model';

export interface TodosState extends EntityState<Todo, number>, ActiveState<number> {
  currentId: number
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'todos' })
export class TodosStore extends EntityStore<TodosState> {

  constructor() {
    super();
  }

}
