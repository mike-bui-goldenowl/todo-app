import * as types from '../../constants/actionTypes';
import { delTodo, updateTodo } from '../../utils';

const INITIAL_STATE = { items: [] };

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.TODO_ADD_SUCCESSED:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case types.TODO_ADD_FAILED:
      return { ...state };
    case types.TODO_DELETE_SUCCESSED:
      return {
        ...state,
        items: delTodo(state.items, action.payload),
      };
    case types.TODO_DELETE_FAILED:
      return { ...state };
    case types.TODO_EDIT_SUCCESSED:
      return {
        ...state,
        items: updateTodo(state.items, action.payload),
      };
    case types.TODO_EDIT_FAILED:
      return { ...state };
    case types.TODO_COMPLETE_SUCCESSED:
      return {
        ...state,
        items: updateTodo(state.items, action.payload),
      };
    default: return state;
  }
};

export default todoReducer;
