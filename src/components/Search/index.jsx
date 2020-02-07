import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

//actions
import { addTodo } from '../../actions';

//components
import Input from '../input';

//utils

//styles
import './styles.scss';

class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            text: '',
        };
    }

    handleChangeText = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.text) return;
        this.setState({
            text: ''
        });

        this.props.addTodoRequest(this.state.text);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='form'>
                    {/* <div className='input'>
                        <input
                            type='text'
                            name='todo'
                            value={this.state.text}
                            onChange={this.handleChangeText}
                            autoComplete='off'
                            placeholder='Type something you wana do'
                        />
                    </div> */}
                    <Input
                        type='text'
                        name='todo'
                        value={this.state.text}
                        onChange={this.handleChangeText}
                        placeholder='Type something you wana do'
                    />
                    <Button className='button' variant='success' size='lg'>
                        Add
                    </Button>
                </div>
            </form>

        );
    }
}



const mapDispatchToProps = (dispatch) => ({
    addTodoRequest: text => dispatch(addTodo.request(text))
});

export default connect(null, mapDispatchToProps)(Search);