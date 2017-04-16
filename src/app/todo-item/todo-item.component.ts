import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() item: Task;
  @Output() removeItem: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDestroy(){
    this.removeItem.emit(this.item);
  }
}
