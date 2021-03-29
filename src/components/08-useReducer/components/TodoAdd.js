import React from 'react'
import { useForm } from '../../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [ {description}, handleInputChange, reset ] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if( description.trim().length > 1 ){          
            const newTodo = {
                id: new Date().getTime(),
                desc: description,
                done: false
            };

            handleAddTodo( newTodo );
            reset();
        }
    };

    return (
        <>
          <h4 className = "text-center">Agregar TODO</h4>
                    <form onSubmit = { handleSubmit }>
                       <div className = "form-group">
                        <input
                                type = "text"
                                name = "description"
                                placeholder = "Aprender..."
                                autoComplete = "off"
                                className = "form-control"
                                value = { description }
                                onChange = { handleInputChange }
                            />
                            <button
                                type = "submit"
                                className = "btn btn-outline-primary btn-block mt-2"
                            >
                                Agregar
                            </button>
                       </div>
                    </form>  
        </>
    )
}
