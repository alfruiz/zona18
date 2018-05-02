import React from 'react';

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