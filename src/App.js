import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todo-list/';

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
  render() {
    return (
      <div className="App">
        <div>
          <h1>TODOS LIST</h1>
        </div>
        <TodoList />
      </div>
    );
  }
}

export default App;
