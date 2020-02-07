import {combineReducers} from 'redux';

import todoReducer from './todo/todo.reducer';
import appReducer from './app/app.reducer';

const rootReducer = combineReducers({
    todos: todoReducer,
    app:appReducer
});

export default rootReducer;

