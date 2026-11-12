import React, { Component } from 'react';
import './TodoList.css';

export default class TodoList extends Component {
  state = {
    doing: false,
  };

  handleChange = evt => {
    const { name, value, type, checked } = evt.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  render() {
    const { todos, onDeleteTodo } = this.props;
    const { doing } = this.state;
    return (
      <ul className="TodoList">
        {todos.map(({ id, text, completed }) => (
          <li key={id} className="TodoList__item">
            <label>
              <input
                type="checkbox"
                name="doing"
                checked={doing}
                onChange={this.handleChange}
              />
            </label>
            <p className="TodoList__text">{text}</p>
            <button onClick={() => onDeleteTodo(id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}
