import React from 'react';

/**
* Component TodoList
* 1) it's a "Functional component"
* 2) it return a view layout
*
* Documentation:
* @return {JSX}
* @author Alfonso Ruiz alfonso.ruiz@walmart.com
*/

const TodoList = ({ todos }) => {
    // MAP <-- wish return new array
    const todosView = todos.map((t, i) => {
        return (
            <li>
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