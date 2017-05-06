import { Injectable } from '@angular/core';
import { createStore } from 'redux';
import { todosReducer } from './reducers/todos.reducer';

@Injectable()
export class Store{

    private store:any;

    constructor(){
        this.store = createStore(
            todosReducer
        );
    }

    dispath(event){
        return this.store.dispath(event);
    }

    subscribe(cb){
        return this.store.subscribe(cb);
    }

    setState(){
        return this.store.getState();
    }


};