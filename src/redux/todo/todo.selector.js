import {createSelector} from 'reselect';

const selectTodos = state => state.todos;

export const selectTodoList = createSelector(
    [selectTodos],
    (todos) => todos.items
)

export const selectTodoItemCompleted = createSelector(
    [selectTodoList],
    (list,id)=>list.filter(item => item.isCompleted)
)

export const selectTodoItemInProcess = createSelector(
    [selectTodoList],
    (list,id)=>list.filter(item => !item.isCompleted)
)