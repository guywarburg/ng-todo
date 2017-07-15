import { Component } from '@angular/core';
import { Task } from './task';
import {Http} from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

const api = '/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string;
  public todoItems: Task[];
  // private http: Http;

  constructor() { //http: Http
    this.title = 'NG Todo';
    // this.http = http;
    this.todoItems = [];

    // this.http.get(`${api}/todos`)
    //   .map(res => res.json())
    //   .subscribe(data => {
    //     console.log('data', data);
    //     this.todoItems = data;
    //   });
  }
  // removeItem(e): void {
  //   this.http.delete(`${api}/todos/${e.id}`)
  //     .map(res => res.json())
  //     .subscribe(() => {
  //       this.todoItems = this.todoItems.filter(todo => {return e.label !== todo.label; } );
  //       console.log('removed item');
  //   });
  // }

  // addNewTodo(item): void {
  //   const newItem = {
  //     label: item,
  //     completed: false,
  //     editing: false
  //   };
  //   this.http.post(`${api}/todos/`, newItem)
  //     .map(res => res.json())
  //     .subscribe(() => {
  //       console.log('added item');
  //     });
  //   this.todoItems.push(newItem);
  // }

  // changeLabel(e): void {
  //   const item: Task = e.item;

  //   const tempTodo: Task = this.todoItems.find(todo => { return todo.label === e.label; });
  //   const i: number = this.todoItems.indexOf(tempTodo);
  //   this.http.patch(`${api}/todos/${i}`, tempTodo)
  //     .map(res => res.json())
  //     .subscribe(() => {
  //       console.log('fixed item');
  //     });
  // }

  // itemCompleted(e): void {
  //   const item: Task = e.item;
  //   const i: number = this.todoItems.indexOf(this.todoItems.find(todo => {
  //     return todo.label === e.label; }));
  //   this.http.patch(`${api}/todos/${i}`, {
  //     completed: true
  //   }).map(res => res.json())
  //     .subscribe(() => {
  //       console.log('item completed');
  //     });
  //   e.completed = !e.completed;
  //   this.todoItems = [...this.todoItems];
  // }

  // clearCompleted(): void {
  //   this.todoItems.forEach( todo => {
  //     if (todo.completed) {
  //       this.http.delete(`${api}/todos/${todo.id}`)
  //         .map(res => res.json())
  //         .subscribe(() => {
  //           console.log('removed item');
  //         });
  //     }
  //   });
    // this.todoItems = this.todoItems.filter(todo => !todo.completed);
  // }
}
