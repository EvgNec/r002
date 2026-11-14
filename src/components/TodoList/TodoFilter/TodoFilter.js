import React, { Component } from 'react';

export class TodoFilter extends Component {
  handleChange = e => {
    this.props.onFilter(e.currentTarget.value);
  };
  render() {
    return (
      <label>
        Filter <input type="text" onChange={this.handleChange} />
      </label>
    );
  }
}

export default TodoFilter;
