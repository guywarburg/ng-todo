import { Component, DoCheck } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private title: string;
  private todoItems: Task[];
  constructor() {
    this.title = 'NG Todo';

    this.todoItems = [
      {
        label: 'Call Gal',
        completed: false,
        editing: false
      },
      {
        label: 'Finish NICE',
        completed: false,
        editing: false
      },
      {
        label: 'Go for a run',
        completed: false,
        editing: false
      }];
  }

  removeItem(e): void {
    this.todoItems = this.todoItems.filter(todo => {return e.label !== todo.label});
  }

  addNewTodo(item): void {
    this.todoItems.push({
      label: item,
      completed: false,
      editing: false
    });
  }

  changeLabel(e): void{
    const newLabel: string = e.newVal;
    const item: Task = e.item;

    let tempTodo: Task = this.todoItems.find(todo => { return todo.label === item.label});
    let i: number = this.todoItems.indexOf(tempTodo);
    
    this.todoItems[i].label = newLabel;
  }

  clearCompleted():void {
    this.todoItems = this.todoItems.filter(todo => !todo.completed);
  }

  ngDoCheck(){
    this.todoItems = [...this.todoItems];
  }
}
