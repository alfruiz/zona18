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

const TodoList = () => {
    return (
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
    );
}

export default TodoList;