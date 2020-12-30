import React, { useRef } from 'react'

import './useRef.css'

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <div>
            <h1>FocusScreen</h1>
            <hr />
            <input 
                ref={ inputRef }
                placeholder="Name"
                className="form-control"
            />
            <button 
                className="btn btn-outline-primary mt-3"
                onClick={ handleClick }
            >
                Focus
            </button>
        </div>
    )
}
