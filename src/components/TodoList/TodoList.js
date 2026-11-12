import React from 'react';
import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo, handleChange }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li key={id} className="TodoList__item">
        <label>
          <input
            type="checkbox"
            name="doing"
            checked={completed}
            onChange={() => handleChange(id)}
          />
        </label>
        <p className="TodoList__text">{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
