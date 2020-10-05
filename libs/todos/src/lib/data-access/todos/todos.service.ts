import { Injectable } from '@angular/core';
import { OrArray } from '@datorama/akita';
import { Todo } from './todo.model';
import { TodosStore } from './todos.store';

@Injectable({ providedIn: 'root' })
export class TodosService {

  constructor(private todosStore: TodosStore) {
  }

  add(todo: Todo) {
    this.todosStore.add(todo);
  }

  update(id, todo: Partial<Todo>) {
    this.todosStore.update(id, todo);
  }

  remove(id: OrArray<number>) {
    this.todosStore.remove(id)
  }

  setActive(id: number) {
    this.todosStore.setActive(id);
  }

  removeActive(id: number): void {
    this.todosStore.removeActive(id);
  }

}
