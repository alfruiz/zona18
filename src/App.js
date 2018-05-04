import React, { Component } from 'react';
import styles from './App.css';

// Components
import TodoList from './components/todo-list/';
import Header from './components/header/';
import TodoForm from './components/todo-form';

// Simulate JSON
import defaultTodos from './mocks/todos/';

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

  componentWillMount() {
    console.log('[APP] :: componentWillMount   ', '1', this.state);
  }

  componentDidMount() {
    console.log('[APP] :: componentDidMount    ', '1', this.state);
    this.setState({ todos: defaultTodos });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[APP] :: shouldComponentUpdate', '2', this.state, nextState);
    // If it returns false, doesnt re-render
    return true
  }

  componentWillUpdate() {
    console.log('[APP] :: componentWillUpdate', '2 x', this.state);
  }

  componentDidUpdate() {
    console.log('[APP] :: componentDidUpdate', '2 x', this.state);
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
    console.log('[APP] :: render\t\t\t\t  ', '1', this.state);
    return (
      <div className={styles.App}>
        <Header number={this.state.todos.length} />
        <TodoForm handleSubmit={this.handleSubmit} inputRef={el => this.inputElement = el} />
        <TodoList handleComplete={this.handleComplete} handleModify={this.handleModify} handleChange={this.handleChange} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
