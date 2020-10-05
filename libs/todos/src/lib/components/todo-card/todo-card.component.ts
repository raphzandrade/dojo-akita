import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// interface
import { Todo } from '../../data-access/todos/todo.model';

@Component({
  selector: 'dojo-akita-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
})
export class TodoCardComponent implements OnInit {
  @Input() todo: Todo;
  @Input() isActive: boolean;

  @Output() done: EventEmitter<number>;
  @Output() remove: EventEmitter<number>;
  @Output() removeActive: EventEmitter<number>;
  @Output() setActive: EventEmitter<number>;

  constructor() {
    this.done = new EventEmitter();
    this.remove = new EventEmitter();
    this.removeActive = new EventEmitter();
    this.setActive = new EventEmitter();
  }

  ngOnInit(): void {}

  public onRemove(id: number): void {
    this.remove.emit(id);
  }

  public onMarkAsDone(id: number): void {
    this.done.emit(id);
  }

  public onRemoveActive(id: number): void {
    this.removeActive.emit(id);
  }

  public onSetActive(id: number): void {
    this.setActive.emit(id);
  }
}
