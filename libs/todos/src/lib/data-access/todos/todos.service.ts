import { Injectable } from '@angular/core';
import { OrArray, transaction, applyTransaction } from '@datorama/akita';
import { Todo } from './todo.model';
import { TodosStore } from './todos.store';

@Injectable({ providedIn: 'root' })
export class TodosService {
  constructor(private todosStore: TodosStore) {}

  public add(todo: Todo): void {
    if (!todo.id) {
      this.todosStore.setError('O id da tarefa é obrigatório');

      return;
    }

    const regexp = new RegExp('^[1-9]');
    const isNumberOnly = regexp.test(todo.id.toString());

    if (!isNumberOnly) {
      this.todosStore.setError('O id da tarefa deve conter apenas números');

      return;
    }

    this.todosStore.add(todo);

    this.todosStore.setError(null);
  }

  public update(id: number, todo: Partial<Todo>): void {
    this.todosStore.update(id, todo);
  }

  public remove(id: OrArray<number>): void {
    this.todosStore.remove(id);
  }

  public setActive(id: number): void {
    this.todosStore.setActive(id);
  }

  public removeActive(id: number): void {
    this.todosStore.removeActive(id);
  }

  @transaction()
  public markAsDone(id: number, todo: Partial<Todo>): void {
    this.todosStore.update(id, todo);
    this.todosStore.removeActive(id);
  }

  // outra forma de realizar uma transaction.
  // public markAsDone(id: number, todo: Partial<Todo>): void {
  //   applyTransaction(() => {
  //     this.todosStore.update(id, todo);
  //     this.todosStore.removeActive(id);
  //   });
  // }
}
