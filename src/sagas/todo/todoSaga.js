import {takeLatest,put} from 'redux-saga/effects';

import {
    TODO_ADD_REQUEST,
    TODO_DELETE_REQUEST, 
    TODO_EDIT_REQUEST,
    TODO_COMPLETE_REQUEST
} from '../../constants/actionTypes';

//utils
import {initTodo} from '../../utils';

//actions
import {addTodo, deleteTodo,editTodo, completeTodo} from '../../actions';

function* addTodoRequest(action){
    try{
        const newTodo = initTodo(action.payload);
        yield put(addTodo.success(newTodo));
    }catch(err){

    }
}

export function* watchAddTodo(){
    yield takeLatest(TODO_ADD_REQUEST,addTodoRequest);
}

function* editTodoRequest(action){
    try{
        yield put(editTodo.success(action.payload))
    }catch(e){
    }
}

export function* watchEditTodo(){
    yield takeLatest(TODO_EDIT_REQUEST,editTodoRequest)
}

function* deleteTodoRequest(action){
    try{
        yield put(deleteTodo.success(action.payload))
    }catch(e){
        yield put(deleteTodo.fail())
    }
}

export function* watchDeleteTodo(){
    yield takeLatest(TODO_DELETE_REQUEST,deleteTodoRequest)
}

function* completeTodoRequest(action){
    try{
        yield put(completeTodo.success(action.payload))
    }catch(e){
    }
}

export function* watchCompleteTodo(){
    yield takeLatest(TODO_COMPLETE_REQUEST,completeTodoRequest)
}