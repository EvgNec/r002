import React, { Component } from 'react';
import { Form, Textarea, AddButton } from './TodoEditor.styled';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({
      message: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.message.trim()) {
      return;
    }

    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Textarea
          value={this.state.message}
          onChange={this.handleChange}
          placeholder="Enter your task..."
        />

        <AddButton type="submit">Add</AddButton>
      </Form>
    );
  }
}

export default TodoEditor;
