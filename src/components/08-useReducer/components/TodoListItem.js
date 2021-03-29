import React from 'react'

export const TodoListItem = ({todo, index:i, handleDelete, handleToggle}) => {
    return (
        <>
            <li 
                key = { todo.id }
                className = "list-group-item"
                >
                <p 
                    className = {`${ todo.done && 'complete'}`}
                    onClick = { () => handleToggle(todo.id) }    
                >
                    { i }. { todo.todo }
                </p>
                <button 
                    className = "btn btn-danger"
                    onClick = { () => handleDelete(todo.id) }    
                >
                    borrar
                </button>
            </li>
        </>
    )
}
