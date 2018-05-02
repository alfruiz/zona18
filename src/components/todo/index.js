import React from 'react';


/**
 * component TODO
 * @param {object} todo
 * @return {JSX}
 * @author Alfonso Ruiz alfonso.ruiz@walmart.com
 */
const Todo = ({ handleComplete, index, ...todo }) => {
    return (
        <li>
            <div>
                <span style={{ 'text-decoration': `${todo.complete ? 'line-through' : 'none'}` }} onClick={() => { handleComplete(index); }}>{todo.label}</span>
            </div>
        </li >
    );
}

export default Todo;