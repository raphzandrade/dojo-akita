import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// interface
import { Todo } from '../../data-access/todos/todo.model';


@Component({
  selector: 'dojo-akita-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {
  @Input() todo: Todo;
  @Input() isActive: boolean;

  @Output() remove: EventEmitter<number>;
  @Output() setActive: EventEmitter<number>;

  constructor() {
    this.remove = new EventEmitter();
    this.setActive = new EventEmitter();
   }

  ngOnInit(): void {
  }

  public onRemove(id: number): void {
    this.remove.emit(id);
  }

  public onSetActive(id: number): void {
    this.setActive.emit(id);
  }

}
