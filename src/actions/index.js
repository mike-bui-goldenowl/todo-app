import { 
    TODO_ADD_REQUEST, 
    TODO_ADD_SUCCESSED, 
    TODO_ADD_FAILED ,
    TODO_DELETE_REQUEST,
    TODO_DELETE_SUCCESSED,
    TODO_DELETE_FAILED,
    TODO_EDIT_REQUEST,
    TODO_EDIT_SUCCESSED,
    TODO_EDIT_FAILED,
    TODO_COMPLETE_REQUEST,
    TODO_COMPLETE_SUCCESSED,
    TODO_COMPLETE_FAILED,
    APP_SET_LOADING,
    APP_SET_LOADING_REQUEST
} from '../constants/actionTypes';

export const addTodo = {
    request: (text) => ({
        type: TODO_ADD_REQUEST,
        payload: text
    }),
    success: (todo) => ({
        type: TODO_ADD_SUCCESSED,
        payload: todo
    }),
    fail: (error) => ({
        type: TODO_ADD_FAILED,
        payload: error
    })
}

export const deleteTodo = {
    request: (item) =>({
        type: TODO_DELETE_REQUEST,
        payload: item
    }),
    success: (item)=>({
        type: TODO_DELETE_SUCCESSED,
        payload: item
    }),
    fail: (item)=>({
        type: TODO_DELETE_FAILED
    })
}

export const editTodo = {
    request: (item) =>({
        type: TODO_EDIT_REQUEST,
        payload: item
    }),
    success: (item)=>({
        type: TODO_EDIT_SUCCESSED,
        payload: item
    }),
    fail: (item)=>({
        type: TODO_EDIT_FAILED
    })
}

export const completeTodo = {
    request: (item) =>({
        type: TODO_COMPLETE_REQUEST,
        payload: item
    }),
    success: (item)=>({
        type: TODO_COMPLETE_SUCCESSED,
        payload: item
    }),
    fail: (item)=>({
        type: TODO_COMPLETE_FAILED
    })
}

export const appLoading = {
    request: () =>({
        type: APP_SET_LOADING_REQUEST,
    }),
    success: ()=>({
        type: APP_SET_LOADING,
    }),
}


