import React, { useEffect, useReducer } from 'react'

import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'
import { TodoAddForm } from './TodoAddForm'

import './styles.css'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init );
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleDeleteTodoItem = (id) => {
        const deleteTodoAction = {
            type: 'delete',
            payload: id
        }

        dispatch(deleteTodoAction);
    }

    const handleToggleTodoItem = (id) => {
        const toggleTodoAction = {
            type: 'toggle',
            payload: id
        }

        dispatch(toggleTodoAction);
    }

    const handleAddTodo = (newTodo) => {
        const addTodoAction = {
            type: 'add',
            payload: newTodo
        };
    
        dispatch(addTodoAction);
    }

    return (
        <div>
            <h1>TodoApp ( { todos.length } )</h1>
            <div className="row mt-5">
                <div className="col-12 mb-4">
                    <TodoAddForm 
                        handleAddTodo={ handleAddTodo }
                    />
                </div>
                <div className="col-12">
                    <TodoList 
                        todos={ todos }
                        handleToggleTodoItem={ handleToggleTodoItem }
                        handleDeleteTodoItem={ handleDeleteTodoItem }
                    />
                </div>
            </div>
        </div>
    )
}
