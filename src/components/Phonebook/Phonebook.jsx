import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export default class Phonebook extends Component {
  state = {
    inputValue: '',
  };

  handleChange = evt => {
    this.setState({ inputValue: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { inputValue } = this.state;
    if (!inputValue) {
      return;
    }
    this.props.onSubmit({
      id: nanoid(),
      name: inputValue.trim(),
    });

    this.reset();
  };

  reset = () => {
    this.setState({ inputValue: '' });
  };

  inputId = nanoid();

  render() {
    const { inputValue } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.inputId}>Name</label>
        <input
          type="text"
          name="name"
          required
          value={inputValue}
          onChange={this.handleChange}
          id={this.inputId}
        />
        <button type="submit">Add contacts</button>
      </form>
    );
  }
}
