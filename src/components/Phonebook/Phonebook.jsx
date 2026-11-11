import React, { Component } from 'react';

import {
  Form,
  Label,
  Input,
  CheckboxLabel,
  Checkbox,
  Section,
  Title,
  RadioLabel,
  Radio,
  Select,
  Button,
} from './Phonebook.styled';

const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
  gender: null,
  age: '',
};

export default class Phonebook extends Component {
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
    const { login, email, password, agreed, gender, age } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Login
          <Input
            type="text"
            name="login"
            value={login}
            onChange={this.handleChange}
          />
        </Label>

        <Label>
          Email
          <Input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </Label>

        <Label>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </Label>

        <CheckboxLabel>
          <Checkbox
            type="checkbox"
            name="agreed"
            checked={agreed}
            onChange={this.handleChange}
          />
          Agree to terms
        </CheckboxLabel>

        <Section>
          <Title>Choose your gender</Title>

          <RadioLabel>
            <Radio
              type="radio"
              name="gender"
              value={Gender.MALE}
              checked={gender === Gender.MALE}
              onChange={this.handleChange}
            />
            Male
          </RadioLabel>

          <RadioLabel>
            <Radio
              type="radio"
              name="gender"
              value={Gender.FEMALE}
              checked={gender === Gender.FEMALE}
              onChange={this.handleChange}
            />
            Female
          </RadioLabel>

          <Label>
            Choose your age
            <Select name="age" value={age} onChange={this.handleChange}>
              <option value="" disabled>
                ...
              </option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36+">36+</option>
            </Select>
          </Label>
        </Section>

        <Button type="submit" disabled={!agreed}>
          Sign up as {login}
        </Button>
      </Form>
    );
  }
}
