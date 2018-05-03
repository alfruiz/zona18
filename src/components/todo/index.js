import React from 'react';


/**
 * component TODO
 * 1) it's a "Functional component"
 * 2) it return a view layout
 * @param {function} handleComplete
 * @param {function} handleModify
 * @param {function} handleChange
 * @param {number} index
 * @param {object} todo
 * @return {JSX}
 * @author Alfonso Ruiz alfonso.ruiz@walmart.com
 */
const Todo = ({ handleComplete, handleModify, handleChange, index, ...todo }) => {
    let todoView;
    if (todo.toModify) {
        todoView = (
            <div>
                <span >
                    <input type="text" value={todo.label} onChange={(event) => { handleChange(event, index); }} />
                </span>
                <span>
                    <button onClick={() => { handleModify(index); }}>C</button>
                </span>
            </div>
        );
    } else {
        todoView = (
            <div>
                <span style={{ 'textDecoration': `${todo.complete ? 'line-through' : 'none'}` }} onClick={() => { handleComplete(index); }}>{todo.label}</span>
                <span>
                    <button onClick={() => { handleModify(index); }}>C</button>
                </span>
            </div>
        )
    }

    return (
        <li>
            {todoView}
        </li>
    );
}

export default Todo;