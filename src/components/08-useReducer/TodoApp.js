import React,{ useEffect, useReducer } from 'react';

import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';

import './styles.css';

import { todoReducer } from './todoReducer'

const initialState = [];

//Ayuda a establecer el estado incial del reducer
const init = () => {
    
    return JSON.parse( localStorage.getItem('todos') ) || []
    
    //* Uso antes del local Storage
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender react',
    //     done: false
    // }];
}



export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, initialState, init); 

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    
    }, [todos])

    const handleDelete = ( todoId ) => {
        const action = {
            type: 'delete',
            payload: todoId,
        };
        dispatch( action );
    };

    const handleToggle = ( todoId ) => {
        const action = {
            type: 'toggle',
            payload: todoId,
        };
        dispatch( action );
    }
    
    const handleAddTodo = ( newTodo ) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <div>
            <h1>Todo App ({ todos.length })</h1>
            <hr></hr>

            <div className = "row">
                <div className = "col-md-7">

                    <TodoList 
                        todos={ todos } 
                        handleDelete={ handleDelete } 
                        handleToggle={ handleToggle } 
                    />

                </div>
                <div className = " col-md-5">

                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />

                </div>
            </div>
        </div>
    )
}
