import React from 'react'
import { useForm } from '../../Hooks/useForm'

export const TodoAddForm = ({ handleAddTodo  }) => {
    
    const [ { description }, handleInputChange, reset ] = useForm(
        { description: ''}
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length <= 1){
            return;
        }

        const newTodo = {
            description,
            done: false,
            id: new Date().getTime()
        };

        handleAddTodo(newTodo);
        reset();
    }

    return (
        <form
            onSubmit={ handleSubmit }
            className="input-group input-group-lg"
        >
            <input 
                type="text"
                name="description"
                autoComplete="off"
                value={ description }
                className="form-control"
                placeholder="Type your task"
                onChange={ handleInputChange }
            />
            <button
                type="submit"
                className="btn btn-outline-primary"
            >
                Add
            </button>
        </form>
    )
}
