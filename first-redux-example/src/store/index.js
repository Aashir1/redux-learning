import {createStore, combineReducers, applyMiddleware } from 'redux';
import incrementReducer from './reducer/incrementReducer';
import decrementReducer from './reducer/decrementReducer';
import addTodo from './reducer/todoList';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
let reducers = combineReducers({
    incrementReducer,
    decrementReducer,
    addTodo
});
const loggerMiddleware = createLogger();

let store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

export default store;