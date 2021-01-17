import React from 'react'
import PropTypes from 'prop-types'

export const TodoListItem = ({ index, todo, handleDeleteTodoItem, handleToggleTodoItem }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <p 
                onClick={ () => handleToggleTodoItem(todo.id) }
                className={ `${ todo.done && 'complete' }`}
            >
                {index + 1}. {todo.description}
            </p>
            {
                (!todo.done) &&
                    (
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={ () => handleDeleteTodoItem(todo.id) }
                        >
                            -
                        </button>
                    )
            }
        </li>
    )
}

TodoListItem.propTypes = {
    index: PropTypes.number.isRequired,
    todo: PropTypes.object.isRequired,
    handleDeleteTodoItem: PropTypes.func.isRequired,
    handleToggleTodoItem: PropTypes.func.isRequired
}