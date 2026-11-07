import { Component } from 'react';
import Accordion from './Accordion';
import TodoList from './TodoList';
import verbs from './CardTranslator/verbs.json';
import Card from './CardTranslator/Card';
import Feedback from './Feedback/Feedback';

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
          <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        </Accordion>
        <Accordion title="Словник">
          <Card verbs={verbs} />
        </Accordion>
        <Accordion title="Feedback">
          <Feedback
            title="Please leave feedback"
            good={good}
            neutral={neutral}
            bad={bad}
          />
        </Accordion>
      </div>
    );
  }
}

export default App;
