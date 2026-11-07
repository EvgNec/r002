import { Component } from 'react';
import Accordion from './Accordion';
import TodoList from './TodoList';
import CardTranslator from './CardTranslator/CardTranslator';
import verbs from './CardTranslator/verbs.json';

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Todo 1', completed: false },
      { id: 'id-2', text: 'Todo 2', completed: true },
      { id: 'id-3', text: 'Todo 3', completed: false },
      { id: 'id-4', text: 'Todo 4', completed: false },
    ],
  };
  deleteTodo = todoId => {
    this.setState(prewState => ({
      todos: prewState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );
    return (
      <div>
        <Accordion title="Історія транзакцій">
          <div>Count all: {todos.length}</div>
          <div>Count doing: {completedTodos}</div>
          <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        </Accordion>
        <Accordion title="Словник">
          <CardTranslator verbs={verbs} />
        </Accordion>
      </div>
    );
  }
}

export default App;
