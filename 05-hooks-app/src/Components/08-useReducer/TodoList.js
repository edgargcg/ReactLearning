import React from 'react'
import { TodoListItem } from './TodoListItem'
import PropTypes from 'prop-types'

export const TodoList = ( { todos, handleDeleteTodoItem, handleToggleTodoItem } ) => {
    return (
        <ul className="list-group">
            {
                todos.map(
                    (todo, index) => (
                        <TodoListItem 
                            todo={ todo }
                            index={ index }
                            key={ todo.id }
                            handleDeleteTodoItem={ handleDeleteTodoItem }
                            handleToggleTodoItem={ handleToggleTodoItem }
                        />
                    )
                )
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleDeleteTodoItem: PropTypes.func.isRequired,
    handleToggleTodoItem: PropTypes.func.isRequired
}