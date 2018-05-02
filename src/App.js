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
      todos: [
        { label: 'FIRST TODO - 1' },
      ],
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
