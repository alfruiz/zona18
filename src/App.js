import React, { Component } from 'react';
import './App.css';

// Components
import TodoList from './components/todo-list/';
import Header from './components/header/';


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
  constructor(...props) {
    super(...props)

    // Receiving data
    console.log(this.props.title);
    console.log(this.props.name);

    this.state = {
      todos: [],
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <TodoList />
      </div>
    );
  }
}

export default App;
