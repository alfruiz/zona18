import React from 'react';


/**
 * component TODO
 * @param {object} todo
 * @return {JSX}
 * @author Alfonso Ruiz alfonso.ruiz@walmart.com
 */
const Todo = ({ ...todo }) => {
    return (
        <li>
            <div>
                <span>{todo.label}</span>
            </div>
        </li>
    );
}

export default Todo;