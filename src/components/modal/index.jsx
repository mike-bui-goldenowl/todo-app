import React from 'react';
import { connect } from 'react-redux';
import {
  useHistory,
  useRouteMatch,
} from 'react-router-dom';

// Selector
import { selectTodoList } from '../../redux/todo/todo.selector';
// Components
import TodoItem from '../todoItem';
// styles
import './styles.scss';

const mapStateToProps = (state) => ({ todoList: selectTodoList(state) });

export default connect(mapStateToProps)(({ todoList }) => {
  const history = useHistory();
  const match = useRouteMatch();

  const back = (e) => {
    e.stopPropagation();
    history.goBack();
  };
  const item = todoList.filter((todoItem) => todoItem.id.toString() === match.params.id)[0];
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={back}
      onKeyDown={back}
      className="content-modal"
    >
      <h3>
        Todo Item -
        {' '}
        {item.isCompleted ? 'Completed' : ' In Process'}
      </h3>
      <TodoItem item={item} />
    </div>
  );
});
