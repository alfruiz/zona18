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
 * @param {function} handleComplete
 * @param {function} handleModify
 * @param {function} handleChange
 * @return {JSX}
 * @author Alfonso Ruiz alfonso.ruiz@walmart.com
 */

// ES6 - default params todos as empty array
const TodoList = ({ todos = [], handleComplete, handleModify, handleChange }) => {
    // MAP <-- will return new array of JSX items
    const todosView = todos.map((todo, i) => {
        return (
            <Todo
                key={todo.id}
                handleComplete={handleComplete}
                handleModify={handleModify}
                handleChange={handleChange}
                index={i}
                {...todo}
            />
        );
    });

    return (
        <ul id="todo-ul">
            {todosView}
        </ul>
    );
}

export default TodoList;