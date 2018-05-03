import React from 'react';

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

const TodoForm = ({ handleSubmit }) => {
    return (
        <div>
            <form onSubmit={(event) => { handleSubmit(event) }}>
                <input id="newTodo" type="text" />
                <button type="submit" value="Submit" >ADD TODO</button>
            </form>
        </div>
    );
}

export default TodoForm;