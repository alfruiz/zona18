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
        todoView = [
            <span key="todo-input">
                <input type="text" value={todo.label} onChange={(event) => { handleChange(event, index); }} />
            </span>
        ];
    } else {
        todoView = [
            <span
                key="todo-input"
                style={{ 'textDecoration': `${todo.complete ? 'line-through' : 'none'}` }}
                onClick={() => { handleComplete(index); }}>
                {todo.label}
            </span>
        ]

    }

    todoView.unshift(
        <span key="todo-button">
            <button onClick={() => { handleModify(index); }}>C</button>
        </span>
    );

    return (
        <li>
            <div>
                {todoView}
            </div>
        </li>
    );
}

export default Todo;