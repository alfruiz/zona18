import React from 'react';

import styles from './styles.css';

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
            <span
                key="todo-input"
                className={styles.label}
            >
                <input className={styles.todoInput} type="text" value={todo.label} onChange={(event) => { handleChange(event, index); }} />
            </span>
        ];
    } else {
        const labelStyle = [styles.label];
        if (todo.complete) labelStyle.push(styles.labelComplete);

        todoView = [
            <span
                key="todo-input"
                onClick={() => { handleComplete(index); }}
                className={labelStyle.join(' ')}
            >
                {todo.label}
            </span>
        ]

    }

    todoView.unshift(
        <span key="todo-button">
            <button className={styles.todoButton} onClick={() => { handleModify(index); }}>C</button>
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