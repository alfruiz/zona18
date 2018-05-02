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
    return (
        <ul id="todo-ul">
            <li>
                <div>
                    <span>{todos[0].label}</span>
                </div>
            </li>
            <li>
                <div>
                    <span>{todos[1].label}</span>
                </div>
            </li>
        </ul>
    );
}

export default TodoList;