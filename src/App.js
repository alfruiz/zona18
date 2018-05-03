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
  /**
   * @param {*} props
   */
  constructor(...props) {
    super(...props)

    /* NEW ES6 FEATURES */
    // // Rest operator
    // const x = { hello: 'hello World', op: 2, wo: 9, est: 999000 };
    // const { hello, ...rest } = x;
    // console.log('\n', hello, rest);
    // // Spread operator
    // const xCopy = { ...x };
    // console.log('\n', xCopy);
    // // Fat Arrow & this
    // window.z = this;
    // this.try1 = (function () {
    //   return this;
    // })();
    // this.try2 = (() => {
    //   return this;
    // })();

    this.state = {
      // ES6 - default params
      todos: [
        { label: 'FIRST TODO', id: Date.now() },
      ],
    }

    // binds
    this.handleModify = this.handleModify.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }

  // ES6
  handleComplete(todoIndex) {
    const todos = [...this.state.todos];
    todos[todoIndex].complete = !todos[todoIndex].complete;
    // ES6 todos: todos is equal to todos
    this.setState({ todos });
  }

  handleModify(todoIndex) {
    const todos = [...this.state.todos];
    todos[todoIndex].toModify = !todos[todoIndex].toModify;
    // ES6 todos: todos is equal to todos
    this.setState({ todos });
  }

  handleChange(event, todoIndex) {
    const todos = [...this.state.todos];
    todos[todoIndex].label = event.target.value;
    // ES6 todos: todos is equal to todos
    this.setState({ todos });
  }

  handleSubmit(event) {
    event.preventDefault();
    const todos = [...this.state.todos];
    todos.push({ label: document.querySelector('#newTodo').value, id: Date.now() });
    // ES6 todos: todos is equal to todos
    this.setState({ todos });
    document.querySelector('#newTodo').value = '';
  }

  render() {
    return (
      <div className="App">
        <Header number={this.state.todos.length} />
        <TodoForm handleSubmit={this.handleSubmit} />
        <TodoList handleComplete={this.handleComplete} handleModify={this.handleModify} handleChange={this.handleChange} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
