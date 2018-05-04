import React, { Component } from 'react';

/**
* Component TodoForm
* 1) it's a "Functional component"
* 2) it return a view layout
*
* Documentation:
* @param {function} handleSubmit
* @return {JSX}
* @author Alfonso Ruiz alfonso.ruiz@walmart.com
*/
// const TodoForm = ({ handleSubmit, inputRef }) => {
class TodoForm extends Component {
    componentWillReceiveProps() {
        console.log('[TodoForm] :: componentWillReceiveProps ', '3', this.props);
    }

    shouldComponentUpdate() {
        console.log('[TodoForm] :: shouldComponentUpdate');
        return false;
    }

    render() {
        console.log('[TodoForm] :: render');
        const { handleSubmit, inputRef } = this.props;
        return (
            <div>
                <form onSubmit={(event) => { handleSubmit(event) }}>
                    <input id="newTodo" type="text" ref={inputRef} />
                    <button type="submit" value="Submit" >ADD TODO</button>
                </form>
            </div >
        );
    }
}

export default TodoForm;