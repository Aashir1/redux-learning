import {createStore, combineReducers } from 'redux';
import incrementReducer from './reducer/incrementReducer';
import decrementReducer from './reducer/decrementReducer';
import addTodo from './reducer/todoList';

let reducers = combineReducers({
    incrementReducer,
    decrementReducer,
    addTodo
});

let store = createStore(reducers);

export default store;