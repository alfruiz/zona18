import React, { Component } from 'react';
import './App.css';

// Components
import TodoList from './components/todo-list/';
import Header from './components/header/';
import TodoForm from './components/todo-form';

/**
* Component App
* 1) it's a "Class Component"
* 2) it return a view layout
*
* Documentation:
* @return {JSX}
* @author Alfonso Ruiz alfonso.ruiz@walmart.com
*/

class App extends Component {
  // ES7
  state = {
    todos: [
      { label: 'finish todo using es7', id: Date.now() },
    ]
  }

  componentDidMount() {
    window.z = this;
  }

  // ES7
  handleComplete = todoIndex => {
    const todos = [...this.state.todos];
    todos[todoIndex].complete = !todos[todoIndex].complete;
    // ES6 todos: todos is equal to todos
    this.setState({ todos });
  }

  handleModify = todoIndex => {
    const todos = [...this.state.todos];
    todos[todoIndex].toModify = !todos[todoIndex].toModify;
    // ES6 todos: todos is equal to todos
    this.setState({ todos });
  }

  handleChange = (event, todoIndex) => {
    const todos = [...this.state.todos];
    todos[todoIndex].label = event.target.value;
    // ES6 todos: todos is equal to todos
    this.setState({ todos });
  }

  handleSubmit = event => {
    event.preventDefault();
    const todos = [...this.state.todos];
    todos.push({ label: this.inputElement.value, id: Date.now() });
    // ES6 todos: todos is equal to todos
    this.setState({ todos });
    this.inputElement.value = '';
  }

  render() {
    return (
      <div className="App">
        <Header number={this.state.todos.length} />
        <TodoForm handleSubmit={this.handleSubmit} inputRef={el => this.inputElement = el} />
        <TodoList handleComplete={this.handleComplete} handleModify={this.handleModify} handleChange={this.handleChange} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
