import React, { Component } from 'react';

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
};

export default class Phonebook2 extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleChange = evt => {
    const { name, value, type, checked } = evt.target;

    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    console.log(this.state);

    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password, agreed } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Login
          <input
            type="text"
            name="login"
            value={login}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Agree to terms
          <input
            type="checkbox"
            name="agreed"
            checked={agreed}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit" disabled={!agreed}>
          Sign up as {login}
        </button>
      </form>
    );
  }
}
