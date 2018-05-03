import React, { Component } from 'react';

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
class Todo extends Component {
    state = {
        hover: false,
    };

    handleHover = () => {
        const hover = !this.state.hover;
        this.setState({ hover });
    }

    render() {

        const { handleComplete, handleModify, handleChange, index, ...todo } = this.props;

        let todoView;
        if (todo.toModify) {
            todoView = [
                <span key="todo-input">
                    <input type="text" value={todo.label} onChange={(event) => { handleChange(event, index); }} />
                </span>
            ];
        } else {
            let style = {
                style:
                    {
                        'textDecoration':
                            `${
                            todo.complete ?
                                'line-through' :
                                (
                                    this.state.hover ?
                                        'underline' :
                                        'none'
                                )
                            }`
                    }
            };

            todoView = [
                <span
                    key="todo-input"
                    {...style}
                    onClick={() => { handleComplete(index); }}
                    onMouseEnter={this.handleHover}
                    onMouseLeave={this.handleHover}
                >
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
}

export default Todo;