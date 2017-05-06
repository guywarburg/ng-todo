import { todosActions } from '../actions/todos.actions';

const TodoState = {
    items: []
};

export function todosReducer(state: any=TodoState, action: any) {
    switch(action.type){
        case todosActions.GET_TODO_ITEMS:
            return Object.assign({}, state, {item: action.payload.items});

        default:
            return state;
    }
}