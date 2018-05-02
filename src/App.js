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

    // Receiving data
    console.log(this.props.title);
    console.log(this.props.name);
    // Props is an array -> same as arguments
    console.log(props);
    console.log(...props);

    // Rest operator ES6 -- EXTRA FEATURE --
    // const x = { hello: 'hello World', op: 2, wo: 9, est: 999000 };
    // const { hello, ...rest } = x;
    // console.log('\n', hello, rest);
    // Spread
    // const xCopy = { ...x };
    // console.log('\n', xCopy);

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
