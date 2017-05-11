import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {

  @Input() item: Task;
  @Output() removeItem: EventEmitter<any> = new EventEmitter();
  @Output() changeLabel: EventEmitter<any> = new EventEmitter();
  @Output() itemCompleted: EventEmitter<any> = new EventEmitter();

  constructor() { }

  onDestroy() {
    this.removeItem.emit(this.item);
  }

  updateLabel(newLabel): void {
    this.item.label = newLabel;
    this.item.editing = false;
    this.changeLabel.emit(this.item);
  }
  onCompleted() {
    this.itemCompleted.emit(this.item);
  }
}
