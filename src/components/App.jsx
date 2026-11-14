import { Component } from 'react';
import Accordion from './Accordion';
import TodoList from './TodoList';
import verbs from './CardTranslator/verbs.json';
import Card from './CardTranslator/Card';
import Statistics from './Feedback/Statistics/Statistics';
import FeedbackOptions from './Feedback/FeedbackOptions/FeedbackOptions';
import Section from './Feedback/Section/Section';
import Phonebook from './Phonebook/Phonebook';
import Phonebook2 from './Phonebook/Phonebook2';
import Phonebook1 from './Phonebook/Phonebook1';
import Phonebook0 from './Phonebook/Phonebook0';
import Phonebook3 from './Phonebook/Phonebook3';
import TodoEditor from './TodoList/TodoEditor';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Todo 1', completed: false },
      { id: 'id-2', text: 'Todo 2', completed: true },
      { id: 'id-3', text: 'Todo 3', completed: false },
      { id: 'id-4', text: 'Todo 4', completed: false },
    ],
    good: 0,
    neutral: 0,
    bad: 0,
  };
  deleteTodo = todoId => {
    this.setState(prewState => ({
      todos: prewState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  addTodo = mess => {
    const todo = {
      id: nanoid(),
      text: mess,
      completed: false,
    };
    this.setState(prewState => ({
      todos: [todo, ...prewState.todos],
    }));
  };
  /*   handleChange = todoId => {
    this.setState(prewState => ({
      todos: prewState.todos.map(todo => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    }));
  }; */
  handleChange = todoId => {
    this.setState(prewState => ({
      todos: prewState.todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };
  onAdd = type => {
    this.setState(
      prevState => {
        return {
          [type]: prevState[type] + 1,
        };
      },
      () => {
        console.log('Після:', this.state);
      }
    );
  };
  countTotalFeedback = () =>
    this.state.bad + this.state.good + this.state.neutral;
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) return 0;
    return Number(
      (
        (this.state.good * 100) /
        (this.state.bad + this.state.good + this.state.neutral)
      ).toFixed(2)
    );
  };
  render() {
    const { todos } = this.state;
    const { good, neutral, bad } = this.state;
    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );
    return (
      <div>
        <Accordion title="ToDo">
          <div>Count all: {todos.length}</div>
          <div>Count doing: {completedTodos}</div>
          <TodoEditor onSubmit={this.addTodo} />
          <TodoList
            todos={todos}
            onDeleteTodo={this.deleteTodo}
            handleChange={this.handleChange}
          />
        </Accordion>
        <Accordion title="Словник">
          <Card verbs={verbs} />
        </Accordion>
        <Accordion title="Feedback">
          <Section title="Pleas Leave feedback">
            <FeedbackOptions onAdd={this.onAdd} />
          </Section>
          <Section title="Statistics">
            {this.countTotalFeedback() > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                countTotalFeedback={this.countTotalFeedback()}
                countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <p>There is no feedback</p>
            )}
          </Section>
        </Accordion>
        <Accordion title="Phonebook">
          <Section title="Form">
            <Phonebook onSubmit={values => console.log(values)} />
          </Section>
          {false && (
            <>
              <Section title="Input">
                <Phonebook0 onSubmit={values => console.log(values)} />
              </Section>
              <Section title="Simple Form">
                <Phonebook1 onSubmit={values => console.log(values)} />
              </Section>
              <Section title="Form with checkbox">
                <Phonebook2 onSubmit={values => console.log(values)} />
              </Section>
              <Section title="Form with radiobutton">
                <Phonebook3 onSubmit={values => console.log(values)} />
              </Section>
            </>
          )}
        </Accordion>
      </div>
    );
  }
}

export default App;
