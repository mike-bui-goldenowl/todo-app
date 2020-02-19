import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { ClipLoader } from 'react-spinners';
import {
  AiFillEdit,
  AiFillDelete,
  AiFillPushpin,
  AiOutlineCheck,
  AiFillStar,
} from 'react-icons/ai';

// actions
import {
  deleteTodo,
  editTodo,
  completeTodo,
} from '../../actions';

// styles
import './styles.scss';

class Item extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditting: false,
      item: {},
      oldText: '',
    };
    this.textInput = React.createRef();
  }

  componentDidMount() {
    const { item } = this.props;
    this.setState({ item });
  }

    handleEdit = () => {
      const { isEditting, item, oldText } = this.state;
      if (isEditting) {
        this.setState({
          item: { ...item, text: oldText },
          isEditting: !isEditting,
        });
        return;
      }
      this.setState({
        isEditting: true,
        oldText: item.text,
      });
    }

    handleChangeText = (e) => {
      const { item } = this.state;
      const oldItem = item;
      this.setState({
        item: {
          ...oldItem,
          text: e.target.value,
        },
      });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const { editTodoRequest } = this.props;
      const { item } = this.state;

      editTodoRequest(item);
      this.setState({ isEditting: false });
    }

    handleDel = () => {
      const { delTodoRequest, item } = this.props;
      delTodoRequest(item);
    }

    handleComplete = () => {
      const { completeTodoRequest } = this.props;
      const { item } = this.state;
      const completeItem = { ...item, isCompleted: true };
      completeTodoRequest(completeItem);
    }

    handleView = () => {
      const { item } = this.state;
      const { history, location } = this.props;
      history.push(`/todo/${item.id}`, { showModal: location });
    }

    render() {
      const { isEditting, item = {} } = this.state;
      const { isModal = false } = this.props;
      return (
        <div className="item">
          <div
            className="content"
            role="button"
            tabIndex={0}
            onClick={(!isEditting && isModal) ? this.handleView : null}
            onKeyDown={(!isEditting && isModal) ? this.handleView : null}
          >
            {!item.isCompleted ? (
              <AiFillPushpin
                color="red"
                size={25}
                style={{ marginRight: '5px' }}
              />
            )
              : (
                <AiFillStar
                  color="#f7c300"
                  size={25}
                  style={{ marginRight: '5px' }}
                />
              )}
            {isEditting
              ? (
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    name="todo"
                    autoFocus
                    value={item.text || ''}
                    onChange={this.handleChangeText}
                  />
                </form>
              )
              : <p className="text">{item.text}</p>}
          </div>

          <div className="action">
            {!item.completed
                        && (
                        <div className="action-inprocess">
                          <ClipLoader
                            size={30}
                            css={{ marginRight: '5px' }}
                            color="#123abc"
                            loading={isEditting}
                          />
                          {!isEditting
                            ? !item.isCompleted && (
                            <Button className="button" variant="success" size="lg" onClick={this.handleComplete}>
                              <AiOutlineCheck
                                color="white"
                                size={25}
                              />
                            </Button>
                            )
                            : (
                              <Button className="button" variant="info" size="lg" onClick={this.handleSubmit}>
                                Ok
                              </Button>
                            )}
                          {!item.isCompleted && (
                          <Button className="button" variant="primary" size="lg" onClick={this.handleEdit}>
                            <AiFillEdit
                              color="white"
                              size={25}
                            />
                          </Button>
                          )}
                        </div>
                        )}
            <Button className="button" variant="danger" size="lg" onClick={this.handleDel}>
              <AiFillDelete
                color="white"
                size={25}
              />
            </Button>
          </div>
        </div>
      );
    }
}

const mapDispatchToProps = (dispatch) => ({
  delTodoRequest: (item) => dispatch(deleteTodo.request(item)),
  editTodoRequest: (item) => dispatch(editTodo.request(item)),
  completeTodoRequest: (item) => dispatch(completeTodo.request(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(Item));
