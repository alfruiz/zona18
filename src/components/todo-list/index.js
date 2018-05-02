import React from 'react';

// Components
import Todo from './../todo/';

/**
* Component TodoList
* 1) it's a "Functional component"
* 2) it return a view layout
*
* Documentation:
* @param {array} [todos] todos array
* @return {JSX}
* @author Alfonso Ruiz alfonso.ruiz@walmart.com
*/

// ES6 - default params todos as empty array
const TodoList = ({ todos = [], handleComplete }) => {
    // MAP <-- will return new array of JSX items
    const todosView = todos.map((todo, i) => {
        return (
            <Todo key={todo.id} handleComplete={handleComplete} index={i} {...todo} />
        );
    });

    return (
        <ul id="todo-ul">
            {todosView}
        </ul>
    );
}

export default TodoList;