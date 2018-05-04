import React, { Component } from 'react';

import styles from './styles.css';

/**
 * component TODO
 * 1) it's a "Functional component"
 * 2) it return a view layout
 * @param {function} handleComplete
 * @param {function} handleModify
 * @param {function} handleChange
 * @param {function} handleRemove
 * @param {number} index
 * @param {object} todo
 * @return {JSX}
 * @author Alfonso Ruiz alfonso.ruiz@walmart.com
 */

// const Todo = ({ handleComplete, handleModify, handleChange, handleRemove, index, ...todo }) => {

class Todo extends Component {

    // PureComponent
    shouldComponentUpdate(nextProps, nextState) {
        return (JSON.stringify(nextProps.todo) === JSON.stringify(this.props.todo));
    }

    componentWillUnmount() {
        console.log(`[TODO] :: componentWillUnmount --- index: ${this.props.index}`);
    }

    render() {
        const { handleComplete, handleModify, handleChange, handleRemove, index, todo } = this.props;

        console.log(`[TODO] :: index: ${index}`);

        let todoView = [
            <span key="change-button">
                <button className={styles.changeButton} onClick={() => { handleModify(index); }}>C</button>
            </span>
        ];
        if (todo.toModify) {
            todoView.push(
                <span
                    key="todo-input"
                    className={styles.label}
                >
                    <input className={styles.todoInput} type="text" value={todo.label} onChange={(event) => { handleChange(event, index); }} />
                </span>
            );
        } else {
            const labelStyle = [styles.label];
            if (todo.complete) labelStyle.push(styles.labelComplete);

            todoView.push(
                <span
                    key="todo-input"
                    onClick={() => { handleComplete(index); }}
                    className={labelStyle.join(' ')}
                >
                    {todo.label}
                </span>
            );
        }

        if (todo.complete) {
            todoView.push(
                <span key="remove-button">
                    <button className={styles.removeButton} onClick={() => { handleRemove(index); }}>R</button>
                </span>
            );
        }

        return (
            <li className={styles.li}>
                <div>
                    {todoView}
                </div>
            </li>
        );
    }
}

export default Todo;