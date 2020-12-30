import React, { useEffect, useState } from 'react';
import { Message } from './Message';

import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });
    const { name, email } = formState;

    useEffect(
        () => {
            // console.log('hey!');
        },
        []
    );

    useEffect(
        () => {
            // console.log('FormState changed');
        },
        [formState]
    );
    
    useEffect(
        () => {
            // console.log('Email changed');
        },
        [email]
    );

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormState(
            {
                ...formState,
                [name]: value
            }
        );
    }

    return (
        <div>
            <h1>
                SimpleForm useEffect
            </h1>
            <div className="row">
                <form className="mt-5">
                    { (name === '123') && <Message /> }
                    <div className="mb-3">
                        <input
                            type="text"
                            name="name"
                            maxLength="30"
                            value={ name }
                            autoComplete="off"
                            className="form-control"
                            placeholder="Type your name"
                            onChange={ handleInputChange }
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            name="email"
                            maxLength="50"
                            value={ email }
                            autoComplete="off"
                            className="form-control"
                            placeholder="Type your email"
                            onChange={ handleInputChange }
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
