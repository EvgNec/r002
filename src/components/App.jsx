import { Component } from 'react';
import Accordion from './Accordion';
import TodoList from './TodoList';

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Todo 1', completed: false },
      { id: 'id-2', text: 'Todo 2', completed: false },
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
    return (
      <div>
        <Accordion title="Історія транзакцій">
          <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        </Accordion>
      </div>
    );
  }
}

export default App;
