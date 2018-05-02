import React from 'react';

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
const TodoList = ({ todos = [] }) => {
    // MAP <-- will return new array of JSX items
    const todosView = todos.map((t, i) => {
        return (
            <li key={`${t.label}-${i}`}>
                <div>
                    <span>{t.label}</span>
                </div>
            </li>
        );
    });

    return (
        <ul id="todo-ul">
            {todosView}
        </ul>
    );
}

export default TodoList;