import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

// actions
import { addTodo } from '../../actions';
// components
import Input from '../input';

// utils

// styles
import './styles.scss';

class Search extends React.Component {
  constructor() {
    super();

    this.state = { text: '' };
  }

    handleChangeText = (e) => {
      this.setState({ text: e.target.value });
    }

    handleSubmit = (e) => {
      const { text } = this.state;
      const { addTodoRequest } = this.props;
      e.preventDefault();
      if (!text) return;
      this.setState({ text: '' });
      addTodoRequest(text);
    }

    render() {
      const { text } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="form">
            <Input
              type="text"
              name="todo"
              value={text}
              onChange={this.handleChangeText}
              placeholder="Type something you wana do"
            />
            <Button className="button" variant="success" size="lg">
              Add
            </Button>
          </div>
        </form>

      );
    }
}


const mapDispatchToProps = (dispatch) => ({ addTodoRequest: (text) => dispatch(addTodo.request(text)) });

export default connect(null, mapDispatchToProps)(Search);
