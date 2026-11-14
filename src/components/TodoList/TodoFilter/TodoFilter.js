import React from 'react';

export default function TodoFilter({ value, onFilter }) {
  return (
    <label>
      Filter <input type="text" value={value} onChange={onFilter} />
    </label>
  );
}

/* import React, { Component } from 'react';

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

export default TodoFilter; */
