import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Context } from '../../App';
import uuidv4 from 'uuid/v4';


class AddItem extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        text: '',
    }

    handleChange(e) {
        const value = e.target.value;
        this.setState({ text: value });
    }

    handleSubmit = (AddTodo) => (event) => {
        event.preventDefault();
        if (!this.state.text) return;
        const todo = {
            text: this.state.text, done: false, deleted: false, id: uuidv4(),
        };
        AddTodo(todo);
        this.setState({ text: '' });
    }


    render() {
        return (
            <Context.Consumer>
                {
                    (contextValue) => (
                        <form className="add-item" onSubmit={this.handleSubmit(contextValue.AddTodo)}>
                            <input className="add-item__text-box" type="text" placeholder="What to do next?" onChange={this.handleChange} value={this.state.text}></input>
                            <button type="submit" name="add" className="btn--rounded"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                        </form>
                    )
                }
            </Context.Consumer>
        )
    }
}

export default AddItem;
