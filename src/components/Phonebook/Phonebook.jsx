import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Field, Form, Formik } from 'formik';

export default class Phonebook extends Component {
  state = {
    inputValue: '',
  };

  handleChange = evt => {
    this.setState({ inputValue: evt.target.value });
  };

  handleSubmit = (values, actions) => {
    console.log('Formik values:', values);

    const name = values.name.trim();
    const number = values.number.trim();

    if (!name || !number) {
      return;
    }

    this.props.onSubmit({
      id: nanoid(),
      name,
      number,
    });

    actions.resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={this.handleSubmit}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" required />
          <Field type="tel" name="number" />
          <button type="submit">Add contacts</button>
        </Form>
      </Formik>
    );
  }
}
