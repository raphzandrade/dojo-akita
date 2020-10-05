import { Component, OnInit } from '@angular/core';
import { TodosQuery } from '../../data-access/todos/todos.query';

// rxjs
import { Observable } from 'rxjs';

// interfaces
import { Todo, createTodo } from '../../data-access/todos/todo.model';
import { TodosService } from '../../data-access/todos/todos.service';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'dojo-akita-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public readonly activeTodoId$: Observable<Number>;
  public readonly error$: Observable<String>;
  public readonly todos$: Observable<Todo[]>;

  public readonly form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private todosQuery: TodosQuery,
    private todosService: TodosService
  ) {
    this.activeTodoId$ = this.todosQuery.activeTodoId$;
    this.error$ = this.todosQuery.error$;
    this.todos$ = this.todosQuery.todos$;

    this.form = this.formBuilder.group({
      id: [''],
      title: [''],
      message: [''],
    });
  }

  ngOnInit(): void {}

  public addTodo(): void {
    const id = this.form.get('id').value;
    const title = this.form.get('title').value;
    const message = this.form.get('message').value;

    const todo = createTodo({ id, title, message, done: false });

    this.todosService.add(todo);

    this.form.reset();
  }

  public removeTodo(id: number): void {
    this.todosService.remove(id);
  }

  public removeActive(id: number): void {
    this.todosService.removeActive(id);
  }

  public setActive(id: number): void {
    this.todosService.setActive(id);
  }

  public markAsDone(id: number): void {
    this.todosService.markAsDone(id, {done: true});
  }
}
