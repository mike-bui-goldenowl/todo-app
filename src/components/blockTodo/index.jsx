import React from 'react';
import { connect } from 'react-redux';

import { statusCompleted } from '../../constants/statusTodo';
import { selectTodoItemCompleted, selectTodoItemInProcess } from '../../redux/todo/todo.selector';
// components
import TodoItem from '../todoItem';
import Title from '../title';

// styles
import './styles.scss';

function Block({ title, todosCompleted, todosInProcess }) {
  const todoList = title === statusCompleted ? todosCompleted : todosInProcess;
  return (
    <div className="blockTodo">
      <div className="blockTitle">
        <Title title={title} />
        <span>
          {' '}
          {`- ${todoList.length} items`}
        </span>
      </div>
      <div className="block">
        {
           todoList.map((item) => (
             <TodoItem
               key={item.id.toString()}
               item={{ ...item }}
               completed={title === statusCompleted}
               isModal
             />
           ))
        }
      </div>
    </div>

  );
}
const mapStateToProps = (state) => ({
  todosCompleted: selectTodoItemCompleted(state),
  todosInProcess: selectTodoItemInProcess(state),

});
export default connect(mapStateToProps)(Block);
