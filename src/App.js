import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>TODOS LIST</h1>
        </div>
        <ul id="todo-ul">
          <li>
            <div>
              <span>FIRST TODO</span>
            </div>
          </li>
          <li>
            <div>
              <span>SECOND TODO</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
