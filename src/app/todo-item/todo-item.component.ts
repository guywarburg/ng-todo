import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  constructor() { }

  onDestroy(){
    this.removeItem.emit(this.item);
  }

  updateLabel(newLabel): void {
    this.changeLabel.emit({item: this.item, newVal: newLabel});
  }
}
