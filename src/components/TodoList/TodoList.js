import React from 'react';
import { List, Item, Checkbox, Text, DeleteButton } from './TodoList.styled';

const TodoList = ({ todos, onDeleteTodo, handleChange }) => (
  <List>
    {todos.map(({ id, text, completed }) => (
      <Item key={id}>
        <Checkbox
          type="checkbox"
          name="doing"
          checked={completed}
          onChange={() => handleChange(id)}
        />

        <Text completed={completed}>{text}</Text>

        <DeleteButton onClick={() => onDeleteTodo(id)}>Delete</DeleteButton>
      </Item>
    ))}
  </List>
);

export default TodoList;
